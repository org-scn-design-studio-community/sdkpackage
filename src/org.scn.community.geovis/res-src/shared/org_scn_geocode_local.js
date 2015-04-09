/**
 * Local Geocoder Utility
 */
function org_scn_geocode_local(options){
	org_scn_geocode_base.call(this,options);
}
org_scn_geocode_local.prototype = new org_scn_geocode_base();
org_scn_geocode_local.prototype.loadRegionLookup = function(){
	try{
    	if(!this.regionLookup){
			var geoDB = $.ajax({
	    		async : false,
	    		url : this.resourcePrefix + "res/geo/regionlookup.json"
	    	});
	    	this.regionLookup = jQuery.parseJSON(geoDB.responseText);
		}
	}catch(e){
		alert("Error during region reverse lookup:\n\n" + e);
	}
}

org_scn_geocode_local.prototype.loadCityLookup = function(){
	try{
		if(!this.cityLookup){
			var geoDB = $.ajax({
	    		async : false,
	    		url : this.resourcePrefix + "res/geo/citylookup.json"
	    	});
	    	this.cityLookup = jQuery.parseJSON(geoDB.responseText);
		}
	}catch(e){
		alert("Error during city reverse lookup:\n\n" + e);
	}
};

org_scn_geocode_local.prototype.getLatLngs = function(options){
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
	
	// Establish Geodimensional indices
	var geoIndexAddress = this.dimensionIndex(options.geoDimAddress, metadata);
	var geoIndexCity = this.dimensionIndex(options.geoDimCity, metadata);
	var geoIndexZip = this.dimensionIndex(options.geoDimZip, metadata);
	var geoIndexRegion = this.dimensionIndex(options.geoDimRegion, metadata);
	var geoIndexCountry = this.dimensionIndex(options.geoDimCountry, metadata);	
	
	if(!this.locationsJSON){
    	var geoDB = $.ajax({
    		async : false,
    		url : this.resourcePrefix + "res/geo/world.json"
    	});
    	var worldJSON = jQuery.parseJSON(geoDB.responseText);
    	this.locationsJSON = {};
    	for(var country in worldJSON){
    		this.locationsJSON[country] = {
    			loaded : false,
    			l : worldJSON[country],
    			r : {}
    		};
    	}
    	//this.locationsJSON = jQuery.parseJSON(geoDB.responseText);
	}
	// Shallow Copy 2D array
	for(var row=0;row<tuples.length;row++){
		distincts.push(tuples[row].slice());
	}
	// Let's loop through distincts and retrieve lat/lng
	for(var i=0;i<distincts.length;i++){
		var value = undefined, address = undefined, city=undefined, region=undefined, zip=undefined, country=undefined, title=undefined, color=undefined;
		/*
		 * Hard-coded Country/Region Data entry handling here.
		 */
		if(!geoIndexCountry && (options.manualCountry && options.manualCountry != "guess")) country = options.manualCountry;
		if(!geoIndexRegion && (options.manualRegion && options.manualRegion != "guess")) region = options.manualRegion;
		
		var tuple = distincts[i];
		for(var j=0;j<tuple.length;j++){
			var tupleDim = metadata.dimensions[j];
			if(tuple[j]!=-1) value = tupleDim.members[tuple[j]].key;
			if(j==geoIndexAddress) address = value.toLowerCase();
			if(j==geoIndexCity) city = value.toLowerCase().replace(/[;#\/]/g,"");
			if(j==geoIndexZip) zip = value.toLowerCase();
			if(j==geoIndexRegion) region = value.toLowerCase().replace(/[;#\/]/g,"");
			if(j==geoIndexCountry) country = value.toLowerCase().replace(/[;#\/]/g,"");
		}
		if(zip){	// Strip long ZIPs.  Not supported.
			var za = zip.split("-");
			zip=za[0];
		}
		var resolved = true;
		var unsolvedReason = "";
		// Local Lat/Lng
		var latlng = [];
		/*
		 * BEGIN of incomplete geodata handling.
		 */
		var lookupReason = "";
		if(city && !country && !region){
			lookupReason = "Need to try a desperate reverse lookup.  No country and no region supplied.";
			this.loadCityLookup();
			var c = this.cityLookup[city];
			if(c){
				if(c.length>1) resolved = false; // Only flag as resolved if there was one hit.
				unsolvedReason = "Multiple cities by this name.  Try supplying a Country and Region";
				region = c[0].r.toLowerCase();
				country = c[0].cy.toLowerCase();
			}
			
		}
		if(city && country && !region){
			lookupReason = "Need to try a reverse lookup.  But no region was supplied.";
			this.loadCityLookup();
			var c = this.cityLookup[city];
			if(c){
				// Country was supplied, let's see if it was found in reverse lookup.
				for(var j=0;j<c.length;j++){
					if(c[j].cy.toLowerCase()==country) {
						region = c[j].r.toLowerCase();
					}
				}
			}
			
		}
		if(city && !country && region){
			lookupReason = "Need to try a reverse lookup.  But no country was supplied.";
			this.loadCityLookup();
			var c = this.cityLookup[city];
			if(c) {
				// Region was supplied, let's see if it was found in reverse lookup.
				var regionfound = false;
				for(var j=0;j<c.length;j++){
					if(c[j].r.toLowerCase()==region) {
						country = c[j].cy.toLowerCase();
						regionfound = true;
					}
				}
				if(!regionfound){
					unsolvedReason = city + " in " + region + " not in DB.";
					resolved = false;
				}
			}else{
				// No city found by given name.  Fall back to region but mark as unsolved.
				unsolvedReason = "City not found.";
				resolved = false;
			}			
		}
		if(region && !country && !city){
			lookupReason = "Need to try a reverse region lookup.  No country and no city was supplied.";
			this.loadRegionLookup();
			var c = this.regionLookup[region];
			if(c && c.length>0) {
				if(c.length>1) resolved = false;	// Only flag as resolved if there was one hit.
				unsolvedReason = "Multiple countries possible for this region.  Please supply a country.";
				country = c[0].toLowerCase();
			}
		}
		//if(lookupReason)alert(lookupReason);
		/*
		 * END OF incomplete data handling.
		 */
		var locationKey = "";
		var sep = "";
		if(country) {
			locationKey+=sep + country;
			sep = "_";
		}
		if(region) {
			locationKey+=sep + region;
			sep = "_";
		}
		if(city) {
			locationKey+=sep + city;
			sep = "_";
		}
		if(zip) {
			locationKey+=sep + zip;
			sep = "_";
		}
		var geoCode = {};
		if(this.geoCache[locationKey]){
			// Check cache first
			geoCode = this.geoCache[locationKey];
		}else{
			// Walk the lat/lng hierarchy if we were able to figure out a country.
			if(country && this.locationsJSON[country]){
				if(!this.locationsJSON[country].loaded){	// On Demand Loading
					var countryDB = $.ajax({
			    		async : false,
			    		url : this.resourcePrefix + "res/geo/world/" + country + ".json"
			    	});
			    	var countryJSON = jQuery.parseJSON(countryDB.responseText);
			    	for(var rgn in countryJSON){
			    		this.locationsJSON[country].r[rgn] = {
			    			loaded : false,
			    			l : countryJSON[rgn],
			    			c : {}
			    		};
			    	}
			    	this.locationsJSON[country].loaded = true;
				}
				latlng = this.locationsJSON[country].l;
				if(region){	// Region Specified?
					if(this.locationsJSON[country].r[region]){
						if(!this.locationsJSON[country].r[region].loaded){	// On Demand Loading
							try{
								// Try to load once, and flag as loaded.
								this.locationsJSON[country].r[region].loaded = true;
								var regionDB = $.ajax({
						    		async : false,
						    		url : this.resourcePrefix + "res/geo/world/" + country + "/" + region +".json"
						    	});
								this.locationsJSON[country].r[region] = jQuery.parseJSON(regionDB.responseText);
							}catch(e){
								this.locationsJSON[country].r[region] = {};
							}
							
							
						}
						latlng = this.locationsJSON[country].r[region].l;
						if(city) {			// City Specified?
							if(this.locationsJSON[country].r[region].c[city]){
								latlng = this.locationsJSON[country].r[region].c[city].l;
								if(zip){	// ZIP Specified?
									if(this.locationsJSON[country].r[region].c[city].z[zip]){
										latlng = this.locationsJSON[country].r[region].c[city].z[zip];
									}else{
										resolved = false;
										unsolvedReason = "ZIP not found.";
									}
								}else{
									if (latlng.length == 0){
										// Sometimes lat/lng not populated at city level.  Steal from last ZIP Code entry, if any.
										var zips = null;
										zips = this.locationsJSON[country].r[region].c[city].z;
										if(zips){
											for(var z in zips) latlng = zips[z].slice();	// Take the last one, whatever.
										}
									}
								}
							}else{
								resolved = false;
								unsolvedReason = "City not found for:." +country+region+city;
							}
						}
					}else{
						resolved = false;
						unsolvedReason = "Region not found.";
					}
				} 
			}
			geoCode = {
				tuple : tuple.slice(),
				locationKey : locationKey,
				city : city,
				region : region,
				country : country,
				zip : zip,
				address : address,
				latlng : latlng,
				solved : resolved,
				reason : unsolvedReason
			};
			this.geoCache[locationKey] = geoCode;
		}
		if(geoCode.solved) {
			solved.push(geoCode);
		}else{
			unsolved.push(geoCode);
		}
	}
	// This is a sync callback so fire back right away
	this.issueCallback(options,{
		distincts : distincts,
		solved : solved,
		unsolved : unsolved
	},options.conf);
};