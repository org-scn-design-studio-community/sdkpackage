/**
 * Mapbox Geocoder Implementation
 */
var getMapboxAdapter = function(options){
	return {
		mode : "component",				// This will be set to aps if loaded by APS servlet
		apiKey : options.apiKey,
		geoCache : {},
		// Compare two 1-D arrays
		arraysIdentical : function(a, b) {
		    var i = a.length;
		    if (i != b.length) return false;
		    while (i--) {
		        if (a[i] !== b[i]) return false;
		    }
		    return true;
		},
		// Convert Dimension Index to Dimension Key
		indexDimension : function(idx, metadata){
			if(idx==-1) return null;	// user to be -1
			if(!metadata) return null;
			if(metadata.dimensions.length>=idx) return metadata.dimensions[idx].key;
			return null;
		},
		// Convert Dimension Key to Dimension Index
		dimensionIndex : function(key, metadata){
			if(key=="NONE") return null;	// used to be -1
			if(!metadata) return null;
			for(var i=0;i<metadata.dimensions.length;i++){
				if(metadata.dimensions[i].key==key) return i;
			}
			return null;
		},
		// Convert a given Dimension's Member Key to Dimension Index
		memberIndex : function(key, dimId, metadata){
			if(!metadata) return null;
			var dim = metadata.dimensions[dimId];
			for(var i=0;i<dim.members.length;i++){
				if(dim.members[i].key==key) return i;
			}
			return null;
		},
		getLatLngs : function(options){
			// Key from https://www.mapbox.com/developers/api/geocoding/
			var access_token = "pk.eyJ1IjoibWFwYm94IiwiYSI6IlhHVkZmaW8ifQ.hAMX5hSW-QnTeRCMAy9A8Q";
			if(this.apiKey) access_token = this.apiKey;
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
						geocoderResults : {},
						location : locationstring,
						loaded : false
					}
				}
				var locationentry = this.geoCache[locationstring];
				if(!locationentry.loaded) lookupqueue.push(locationentry);
				
				// Debug to unsolved table for now.
				var geoCode = {
					tuple : tuple.slice(),
					locationKey : locationstring,
					city : city,
					region : region,
					country : country,
					zip : zip,
					address : address,
					latlng : [],
					solved : false,
					reason : "mapbox not implemented yet"
				};
				unsolved.push(geoCode);
			}
			/**
			 * TODO - Batch Requests of n Length to Mapbox
			 */
			var chunk = [];	// placeholder
			var url = "http://api.tiles.mapbox.com/v4/geocode/mapbox.places-v1/"+chunk.join(";")+".json?access_token=" + access_token;
			alert(lookupqueue.length + " entries would have been looked up to GIS Provider.\n\n" + url);
			
			// This is a sync callback so fire back right away
			if(options.callback) {
				if(!options.scope) options.scope = this;
				options.callback.apply(options.scope,[{
					distincts : distincts,
					solved : solved,
					unsolved : unsolved
				},options.conf]);
			}
		}
	};
}