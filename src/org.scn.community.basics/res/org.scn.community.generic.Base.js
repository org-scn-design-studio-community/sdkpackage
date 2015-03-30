/**
 * Base Databound Class
 */

var org_scn_community_spec = org_scn_community_spec || {};
org_scn_community_spec.base = org_scn_community_spec.base || {};

org_scn_community_spec.base.loadSpecification = function(that, spec, compSpec){
	var that = this;

	this.componentInfo = compSpec;
	this.props = {};
	
	for(property in spec){
		this.props[property] = spec[property]
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
	};
	
	this.callOnSet = function(property,value){
		if(this.props[property] && this.props[property].onSet){
			return this.props[property].onSet(value);
		}else{
			return "ERROR";
		}
	};
	
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
	};
	
	/**
	 * Component Information
	 */
	this.getComponentInformation = function(){
		return JSON.stringify(this.componentInfo);
	};
	
	this.init = function(){
		this.$().addClass("DesignStudioSCN");
	};
};