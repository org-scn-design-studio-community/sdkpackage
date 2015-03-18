/**
 * Base Databound Class
 */
var org_scn_community_databound_Base = function(options){
	this.flatData = null;
	this.flattenData = function (value, options) {
		// Make a copy so we don't mess with references
		this.flatData = null;
		try{
			this.flatData = org_scn_community_databound.flatten(this.data(),{
				ignoreResults : this.ignoreTotals(),
				useMockData : this.useMockData(),		// TODO
				swapAxes : this.swapAxes()				// TODO
			});	
		}catch(e){
			// alert("Problem flattening data:\n\n"+e);
		}
	};
	var that = this;
	this.props = {
		data : {
			value : null,
			onChange : this.flattenData,
			opts : {
				desc : "Data",
				cat : "Data",
				tooltip : "Data from datasource",
				value : null,
				noAps : true
			}
		},
		ignoreTotals : {
			value : true,
			onChange : this.flattenData,
			opts : {
				desc : "Ignore Totals",
				cat : "Data",
				tooltip : "Whether to ignore totals",
				apsControl : "checkbox"	
			}
		},
		swapAxes : {
			value : false,
			onChange : this.flattenData,
			opts : {
				desc : "Swap Axes",
				cat : "Data",
				tooltip : "Whether to swap axes",
				apsControl : "checkbox"
			}
		},
		useMockData : {
			value : false,
			onChange : this.flattenData,
			opts : {
				desc : "Use Mock Data when no datasource",
				cat : "Data",
				tooltip : "Use Mock Data when no datasource",
				apsControl : "checkbox"
			}
		}
	};
	for(property in options){
		this.props[property] = options[property]
	};
	/*
	 * Create the aforementioned getter/setter and attach to 'this'.
	 */
	for(var property in this.props){
		this[property] = function(property){
			return function(value){
				if(value===undefined){
					return this.props[property].value;
				}else{
					this.props[property].value = value;
					this.props[property].changed = true;
					if(this.props[property].onChange) {
						this.props[property].onChange.call(this,this.props[property].value);
					}
					return this;
				}
			};
		}(property);
	}
	this.callOnSet = function(property,value){
		if(this.props[property] && this.props[property].onSet){
			return this.props[property].onSet(value);
		}else{
			return "ERROR";
		}
	}
	/**
	 * Relays Design Studio Property Information over to Additional Properties Sheet.
	 */
	this.getPropertyMetaData = function(){
		var r = [];
		for(var prop in this.props){
			var o = {
				name : prop,
				opts : this.props[prop].opts || {}
			}
			if(!o.opts.noAps) r.push(o);				
		}
		return JSON.stringify(r);
	}
	this.init = function(){
		this.$().addClass("DesignStudioSCN");
	}
};