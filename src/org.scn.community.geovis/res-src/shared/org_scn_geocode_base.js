/**
 * Geocoder Utilities Base Class
 */
function org_scn_geocode_base(options){
	this.mode = "component";
	this.resourcePrefix = "";
	this.geoCache = {};
	// Compare two 1-D arrays
	this.arraysIdentical = function(a, b) {
	    var i = a.length;
	    if (i != b.length) return false;
	    while (i--) {
	        if (a[i] !== b[i]) return false;
	    }
	    return true;
	};
	// Convert Dimension Index to Dimension Key
	this.indexDimension = function(idx, metadata){
		if(idx==-1) return null;	// user to be -1
		if(!metadata) return null;
		if(metadata.dimensions.length>=idx) return metadata.dimensions[idx].key;
		return null;
	};
	// Convert Dimension Key to Dimension Index
	this.dimensionIndex = function(key, metadata){
		if(key=="NONE") return null;	// used to be -1
		if(!metadata) return null;
		for(var i=0;i<metadata.dimensions.length;i++){
			if(metadata.dimensions[i].key==key) return i;
		}
		return null;
	};
	// Convert a given Dimension's Member Key to Dimension Index
	this.memberIndex = function(key, dimId, metadata){
		if(!metadata) return null;
		var dim = metadata.dimensions[dimId];
		for(var i=0;i<dim.members.length;i++){
			if(dim.members[i].key==key) return i;
		}
		return null;
	};
	this.issueCallback = function(options,payload){
		if(options.callback) {
			if(!options.scope) options.scope = this;
			options.callback.apply(options.scope,[payload,options.conf]);
		}
	}
}
/**
 * Override
 * @param options
 */
org_scn_geocode_base.prototype.getLatLngs = function(options){
	// Override
	this.issueCallback(options,{
		solved : [],
		unsolved :[]
	})
};