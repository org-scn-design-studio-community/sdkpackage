/**
 * Global Functions for work with components
 */
var org_scn_community_geovis = org_scn_community_geovis || {
	loadCityLookup : function(){
    	if(!this.cityLookup){
			var geoDB = $.ajax({
	    		async : false,
	    		url : "js/geo/citylookup.json"
	    	});
	    	this.cityLookup = jQuery.parseJSON(geoDB.responseText);
		}
    },
    loadRegionLookup : function(){
    	if(!this.regionLookup){
			var geoDB = $.ajax({
	    		async : false,
	    		url : "js/geo/regionlookup.json"
	    	});
	    	this.regionLookup = jQuery.parseJSON(geoDB.responseText);
		}
    },
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
		var solved = [];
		var unsolved = [];
		var metadata = options.metadata;
		var results = options.results;
		var callback = options.callback;
		if(!metadata || !results){
			if(!callback) throw "No callback specified";
			callback({
				solved : [],
				unresolved : []
			});
		}
		var distincts = [];
		var tuples = results.tuples;
		
		// Establish Geodimensional indices
		var geoIndexAddress = this.dimensionIndex(options.geoDimAddress, metadata);
		var geoIndexCity = this.dimensionIndex(options.geoDimCity, metadata);
		var geoIndexZip = this.dimensionIndex(options.geoDimZip, metadata);
		var geoIndexRegion = this.dimensionIndex(options.geoDimRegion, metadata);
		var geoIndexCountry = this.dimensionIndex(options.geoDimCountry, metadata);
		
		// Build geo-candidate tuple
		for(var row=0;row<tuples.length;row++){
			var currentTuple = tuples[row];
			var tupleCandidate = [];
			for(var col=0;col<currentTuple.length;col++){
				var key=-1;		// Non-geo key
				if(col==geoIndexAddress || 
					col == geoIndexCity ||
					col == geoIndexZip ||
					col == geoIndexRegion ||
					col == geoIndexCountry) {
						key = currentTuple[col];
					}
				tupleCandidate.push(key);
			}
			// See if geo-candidate is a new one
			var isDistinct = true;
			for(var d=0;d<distincts.length;d++){
				if(this.arraysIdentical(distincts[d],tupleCandidate)) isDistinct = false;
			}
			if(isDistinct) distincts.push(tupleCandidate.slice());
		}
		if(!this.locationsJSON){
	    	var geoDB = $.ajax({
	    		async : false,
	    		url : "js/geo/world.json"
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
		for(var i=0;i<distincts.length;i++){
			var value = undefined, address = undefined, city=undefined, region=undefined, zip=undefined, country=undefined, title=undefined, color=undefined;
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
			
			if(zip){
				var za = zip.split("-");
				zip=za[0];
			}
			var resolved = true;
			var unsolvedReason = "";
			// Local Lat/Lng
			var latlng = [];
			if(city && !country && !region){	// Unresolvable
				this.loadCityLookup();
				var c = this.cityLookup[city];
				// Take first one because who knows?
				if(c){
					if(c.length>1) resolved = false;
					region = c[0].r.toLowerCase();
					country = c[0].cy.toLowerCase();
				}
				
			}
			if(city && country && !region){		// Resolvable
				this.loadCityLookup();
				var c = this.cityLookup[city];
				if(c){
					for(var j=0;j<c.length;j++){
						if(c[j].cy.toLowerCase()==country) {
							region = c[j].r.toLowerCase();
						}
					}
				}
				
			}
			if(city && !country && region){		// Resolvable
				this.loadCityLookup();
				var c = this.cityLookup[city];
				if(c) {
					for(var j=0;j<c.length;j++){
						if(c[j].r.toLowerCase()==region) {
							country = c[j].cy.toLowerCase();
						}
					}
				}					
			}
			if(region && !country && !city){	// Unresolveable
				this.loadRegionLookup();
				var c = this.regionLookup[region];
				if(c && c.length>0) {
					if(c.length>1) resolved = false;
					unsolvedReason = "Multiple countried possible for this region."
					country = c[0].toLowerCase();
				}
			}
			// Walk the lat/lng hierarchy
			if(country && this.locationsJSON[country]){
				if(!this.locationsJSON[country].loaded){	// On Demand Loading
					var countryDB = $.ajax({
			    		async : false,
			    		url : "js/geo/world/" + country + ".json"
			    	});
			    	var countryJSON = jQuery.parseJSON(countryDB.responseText);
			    	for(var region in countryJSON){
			    		this.locationsJSON[country].r[region] = {
			    			loaded : false,
			    			l : countryJSON[region],
			    			c : {}
			    		};
			    	}
			    	this.locationsJSON[country].loaded = true;
				}
				latlng = this.locationsJSON[country].l;
				if(region){					// Region Specified?
					if(this.locationsJSON[country].r[region]){
						if(!this.locationsJSON[country].r[region].loaded){	// On Demand Loading
							var regionDB = $.ajax({
					    		async : false,
					    		url : "js/geo/world/" + country + "/" + region +".json"
					    	});
							this.locationsJSON[country].r[region] = jQuery.parseJSON(regionDB.responseText);
							this.locationsJSON[country].r[region].loaded = true;
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
								}
							}else{
								resolved = false;
								unsolvedReason = "City not found.";
							}
						}
					}else{
						resolved = false;
						unsolvedReason = "Region not found.";
					}
				} 
			}
			if(resolved) {
				solved.push({
					tuple : tuple.slice(),
					city : city,
					region : region,
					country : country,
					zip : zip,
					address : address,
					latlng : latlng
				});
			}else{
				unsolved.push({
					tuple : tuple.slice(),
					reason : unsolvedReason,
					latlng : latlng
				});
			}
				
		}
		options.callback({
			distincts : distincts,
			solved : solved,
			unsolved : unsolved
		});
	}
};