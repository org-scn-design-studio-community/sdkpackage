/**
 * Mapbox Geocoder Adapter
 */
function org_scn_geocode_mapbox(options){
	org_scn_geocode_base.call(this,options);
}
org_scn_geocode_mapbox.prototype = new org_scn_geocode_base();
org_scn_geocode_mapbox.prototype.batchSize = 20;
org_scn_geocode_mapbox.prototype.apiKey = "";
org_scn_geocode_mapbox.prototype.getLatLngs = function(options){
	var solved = [];
	var unsolved = [];
	var metadata = options.metadata;
	var results = options.results;
	var callback = options.callback;
	if(!metadata || !results){
		// callback(results, conf)
		//if(!callback) throw "No callback specified";
		/*
		callback({
			solved : [],
			unresolved : []
		},options.conf);
		*/
	}
	var distincts = [];
	var tuples = results.tuples;
	var lookupqueue = [];
	
	// Establish Geodimensional indices
	var geoIndexAddress = this.dimensionIndex(options.geoDimAddress, metadata);
	var geoIndexCity = this.dimensionIndex(options.geoDimCity, metadata);
	var geoIndexZip = this.dimensionIndex(options.geoDimZip, metadata);
	var geoIndexRegion = this.dimensionIndex(options.geoDimRegion, metadata);
	var geoIndexCountry = this.dimensionIndex(options.geoDimCountry, metadata);	
	
	// Mapbox logic
	for(var i=0;i<tuples.length;i++){
		var value = undefined, address = undefined, city=undefined, region=undefined, zip=undefined, country=undefined, title=undefined, color=undefined;
		var tuple = tuples[i];
		var addr = "";
		
		for(var j=0;j<tuple.length;j++){
			var tupleDim = metadata.dimensions[j];
			if(tuple[j]!=-1) value = tupleDim.members[tuple[j]].key;
			if(j==geoIndexAddress) address = value;
			if(j==geoIndexCity) city = value;
			if(j==geoIndexZip) zip = value;
			if(j==geoIndexRegion) region = value;
			if(j==geoIndexCountry) country = value;
		}				
		var locbuilder = [];
		if(address) locbuilder.push(address);
		if(city) locbuilder.push(city);
		if(region) locbuilder.push(region);
		if(zip) locbuilder.push(zip);
		if(country) locbuilder.push(country);
		var locationstring = locbuilder.join(" ");
		if(!this.geoCache[locationstring]){
			this.geoCache[locationstring] = {
				location : locationstring,
				locationKey : locationstring,
				loaded : false,
				tuples : [],
				city : city,
				region : region,
				country : country,
				zip : zip,
				address : address,
				geoCoderResults : {}
			}
			lookupqueue.push(this.geoCache[locationstring]);
		}
		var locationentry = this.geoCache[locationstring];
		locationentry.tuples.push(tuple.slice());
		locationentry.tuple = tuple.slice();			// b/w compat
		
	}
	if(this.ajaxLookup) this.ajaxLookup.abort();
	if(!options.scope) options.scope = this;
	this.lookupLocations(lookupqueue,[],options);
},
org_scn_geocode_mapbox.prototype.lookupLocations = function(queue,lookups,getLatLngOptions){
	if(queue.length==0){
		for(var i=0;i<lookups.length;i++){
			if(lookups[i].geoCoderResults.features && lookups[i].geoCoderResults.features.length > 0){
				lookups[i].latlng = [	// Mapbox Geocoder flips these.  No idea why.
				  lookups[i].geoCoderResults.features[0].center[1],
				  lookups[i].geoCoderResults.features[0].center[0]
				];
			}
			lookups[i].solved = true;
		}
		try{
			this.issueCallback(getLatLngOptions,{
				distincts : [],
				solved : lookups,
				unsolved : []
			});
		}catch(e){
			alert("Error in Mapbox lookup callback:\n\n" + e);
		}
		return;
	}
	// Key from https://www.mapbox.com/developers/api/geocoding/
	var access_token = "pk.eyJ1IjoibWFwYm94IiwiYSI6IlhHVkZmaW8ifQ.hAMX5hSW-QnTeRCMAy9A8Q";
	if(this.apiKey) access_token = this.apiKey;
	
	var size = this.batchSize;
	if(queue.length < size) size = queue.length;
	var batch = queue.splice(0,size);
	var chunk = [];
	for(var i=0;i<batch.length;i++){
		chunk.push(batch[i].location);
		batch[i].loaded = true;
	}
	var url = "http://api.tiles.mapbox.com/v4/geocode/mapbox.places-permanent/"+chunk.join(";")+".json?access_token=" + access_token;
	//alert(batch.length + " entries would have been looked up to GIS Provider.\n\n" + url);
	this.ajaxLookup = $.ajax({
		url : url,
		complete : function(t,opts){
			return function(xhr, textStatus){
				if(textStatus=="success"){
					var jsonstring = xhr.responseText;
					try{
						var geoCoderResults = jQuery.parseJSON(jsonstring);
						for(var i=0;i<geoCoderResults.length;i++){
							opts.batch[i].geoCoderResults = geoCoderResults[i];
							opts.lookups.push(opts.batch[i]);
						}
						t.lookupLocations(opts.queue,opts.lookups,getLatLngOptions);
					}catch(e){
						alert("Error occured attempting to parse Mapbox Results:\n\n" + e);
					}
				}else{
					alert ("Failure to retrieve geocoder entries.\n\n" + url);
				}
			};
		}(this,{
			batch : batch,
			queue : queue,
			lookups : lookups
		}),
		error : function (xhr, textStatus, errorThrown){
			alert(textStatus+"\n\n"+errorThrown+"\n\n"+url);
		}
	});
};
