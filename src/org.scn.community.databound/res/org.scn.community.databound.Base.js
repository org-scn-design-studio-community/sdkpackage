/**
 * Base Databound Class
 */
var org_scn_community_databound_Base = function(options){
	this.flattenData = function (value, options) {
		var data = this.data();
		//this.oldFlatten();		return;
		try{
			this.flatData = org_scn_community_databound.flatten(data,{
				ignoreResults : this.ignoreTotals()
				/*,
				swapAxes : this.swapAxes()*/
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
				cat : "Cosmetics",
				tooltip : "Whether to ignore totals",
				apsControl : "checkbox"	
			}
		},
		swapAxes : {
			value : false,
			onChange : this.flattenData,
			opts : {
				desc : "Swap Axes",
				cat : "Cosmetics",
				tooltip : "Whether to swap axes",
				apsControl : "checkbox",
				noAps : true
			}
		}
	};
	this.flatData = null;
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
	this.getPropertyMetaData = function(){
		var r = [];
		for(var prop in this.props){
			if(!this.props[prop].noAps){
				var o = {
					name : prop,
					opts : this.props[prop].opts || {}
				}
				if(!o.opts.noAps) r.push(o);				
			}
		}
		return JSON.stringify(r);
	}
	this.init = function(){
		this.$().addClass("DesignStudioSCN");
	}
};