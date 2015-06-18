/**
 * Core Class
 */
org_scn_community_component_Core = function (owner, componentData){
	var spec = componentData.spec;
	var specAbout = componentData.specAbout;
	var specComp = componentData.specComp;
	
	var that = owner;
	that.componentInfo = {
		visible : true,
		title : "Core Component",
		icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAk5JREFUeNpsU8tu00AUPeNXQh7NA6qKBAqBDYI1LBBCYlMWCJAQZVMWgMQHAN9B+gFIwAKQUNkA6oYlQkgQaIElBBBSiRqwnYfTh+143DuT2CQRk5zYc+ecO/eezLAwDMEYw4Ol58fp/Q7hPCGF/wzibRJeEu5en79Yk1rx8/DZi1u6rlfLpX0o5PLITmUh4hNiOF0HrU4bvxtr8H3/9rXLFxY1scg5rx49ckwS+0EAu9UGwsnt5Re5qZzE6ueVKk0XFbEmdqvsLyGfyyJhaFQWF2lpYRxiTXAqs6W4QlkBUxS8q31AqVzCnmIRmUxKEiKSKF98eptbsCwb3+p10rCRBEQIQ4b19T9E6MAwDCQTCaR3pcAph+tuYdv14Pdd0Tsi4/8lIChUhaapEqqqyDkntTJ8FzEeqsIvBDyQFcUJWra13La756and6NYKKKQz0vRKELywHF6sG0bpmWS2d5ynEDXDXfhyjy+1n8QoYW1RoMq0aCruuy1T2X7QZ9aSuLwoYM4O3cGT54uuXGCdCZzqbbyCeXyXlQOzNJ80kQBBb2NgYkfV79ITZxAtMODEI1GE6bZhi5MNMjEFJnIBya6ngfPH5gYiOBwKAM9k65G/arDZxBwerIxLySPsfhfUKJMHDwmRFDY+DzaBCPHXCb49fN71bQsdHuOLFFTNWniGCjm0VrH6aJp/pUaWf3wUMws3Lg5d+LkqauZ7NRpiidDcRnC8ctEY7vndF+/f/vm0eP7916RtslGTlWaMCPuy2hrE0O41yE0CRtCuyPAACZBGVgAMt/bAAAAAElFTkSuQmCC",
		author : "Mike Howles",
		description : "Description",
		topics : [{
			title : "SDK Component",
			content : "This component is an SDK Component.  Be sure you install the plugin to your server platform should you find it useful."
		}]
	};
	
	that.componentInfo.title = specAbout.title;
    that.componentInfo.description = specAbout.description;
    
    for(var index in specAbout.topics) {
    	that.componentInfo.topics.push(specAbout.topics[index]);
    }
    
	that.props = {
		// All properties from child classes always inherit properties.  Core class currently has no properties out of the gate.
	};
	for(property in spec){
		that.props[property] = spec[property]
		if(property.indexOf("data") == 0) {
			that.props["meta_"+property] = spec[property];
		}
		
	};
	
	/*
	 * Create the aforementioned getter/setter and attach to 'this'.
	 */
	if(specComp.handlerType == "div") {
		for(var property in that.props){
			that[property] = function(property){
				return function(value){
					if(value===undefined){
						return that.props[property].value;
					}else{
						that.props[property].value = value;
						that.props[property].changed = true;
						if(that.props[property].onChange) {
							if(typeof(that[that.props[property].onChange]) === 'function') {
								that[that.props[property].onChange].call(that,that.props[property].value);
							}
						}
						return that;
					}
				};
			}(property);
		}
	}
	for(var property in that.props){
		if(property.indexOf("data") == 0) {
			if(that["setMetadata"] == undefined) {
				that["setMetadata"] = function(property){
					// a setter
					return function (value) {
						that.props["meta_data"].value = value;
						that.props["meta_data"].changed = true;
						return that;
					};
				}(property);
			}
		}
		
		that["set" + property.substring(0,1).toUpperCase() + property.substring(1)] = function(property){
			// a setter
			return function (value) {
				that.props[property].value = value;
				that.props[property].changed = true;
				if(that.props[property].onChange) {
					if(typeof(that[that.props[property].onChange]) === 'function') {
						that[that.props[property].onChange].call(that,that.props[property].value);
					}
				}
				return that;
			};
		}(property);
	}
	for(var property in that.props){
		if(property.indexOf("data") == 0) {
			if(that["getMetadata"] == undefined) {
				that["getMetadata"] = function(property){
					// a setter
					return function (value) {
						return that.props["meta_data"].value;
					};
				}(property);
			}
		}
		
		that["get" + property.substring(0,1).toUpperCase() + property.substring(1)] = function(property){
			// a getter
			return function () {
				return that.props[property].value;
			};
		}(property);
	}

	that.callOnSet = function(property,value){
		if(that.props[property] && that.props[property].onSet){
			if(typeof(that[that.props[property].onSet]) === 'function') {
				that[that.props[property].onSet].call(that,that.props[property].value);
			}
		}else{
			return "ERROR";
		}
	}
	/**
	 * Relays Design Studio Property Information over to Additional Properties Sheet.
	 */
	that.getPropertyMetaData = function(){
		var r = [];
		for(var prop in that.props){
			var o = {
				name : prop,
				opts : that.props[prop].opts || {}
			}
			if(!o.opts.noAps) r.push(o);				
		}
		return JSON.stringify(r);
	}
	/**
	 * Component Information
	 */
	that.getComponentInformation = function(){
		return JSON.stringify(that.componentInfo);
	}
};