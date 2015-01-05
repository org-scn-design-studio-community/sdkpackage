/**
 * ESRI Geocoder Implementation
 */
var getEsriAdapter = function(options){
	return {
		mode : "component",				// This will be set to aps if loaded by APS servlet
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