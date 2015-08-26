/**
 * Core Class
 */
org_scn_community_component_Core = function (owner, componentData){
	var that = owner;

	that.componentData = JSON.parse(JSON.stringify(componentData));

	that.spec = JSON.parse(JSON.stringify(componentData.spec));
	that.specInclude = JSON.parse(JSON.stringify(componentData.specInclude));
	that.specAbout = JSON.parse(JSON.stringify(componentData.specAbout));
	that.specComp = JSON.parse(JSON.stringify(componentData.specComp));

	that.componentInfo = {
		visible : true,
		title : "Core Component",
		icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAk5JREFUeNpsU8tu00AUPeNXQh7NA6qKBAqBDYI1LBBCYlMWCJAQZVMWgMQHAN9B+gFIwAKQUNkA6oYlQkgQaIElBBBSiRqwnYfTh+143DuT2CQRk5zYc+ecO/eezLAwDMEYw4Ol58fp/Q7hPCGF/wzibRJeEu5en79Yk1rx8/DZi1u6rlfLpX0o5PLITmUh4hNiOF0HrU4bvxtr8H3/9rXLFxY1scg5rx49ckwS+0EAu9UGwsnt5Re5qZzE6ueVKk0XFbEmdqvsLyGfyyJhaFQWF2lpYRxiTXAqs6W4QlkBUxS8q31AqVzCnmIRmUxKEiKSKF98eptbsCwb3+p10rCRBEQIQ4b19T9E6MAwDCQTCaR3pcAph+tuYdv14Pdd0Tsi4/8lIChUhaapEqqqyDkntTJ8FzEeqsIvBDyQFcUJWra13La756and6NYKKKQz0vRKELywHF6sG0bpmWS2d5ynEDXDXfhyjy+1n8QoYW1RoMq0aCruuy1T2X7QZ9aSuLwoYM4O3cGT54uuXGCdCZzqbbyCeXyXlQOzNJ80kQBBb2NgYkfV79ITZxAtMODEI1GE6bZhi5MNMjEFJnIBya6ngfPH5gYiOBwKAM9k65G/arDZxBwerIxLySPsfhfUKJMHDwmRFDY+DzaBCPHXCb49fN71bQsdHuOLFFTNWniGCjm0VrH6aJp/pUaWf3wUMws3Lg5d+LkqauZ7NRpiidDcRnC8ctEY7vndF+/f/vm0eP7916RtslGTlWaMCPuy2hrE0O41yE0CRtCuyPAACZBGVgAMt/bAAAAAElFTkSuQmCC",
		author : "Scn Community",
		description : "Description",
		topics : [{
			title : "SDK Component",
			content : "This component is an SDK Component.  Be sure you install the plugin to your server platform should you find it useful."
		}]
	};
	
	that.componentInfo.title = that.specAbout.title;
    that.componentInfo.description = that.specAbout.description;
    
    for(var index in that.specAbout.topics) {
    	that.componentInfo.topics.push(that.specAbout.topics[index]);
    }
    
	that.props = {
		// All properties from child classes always inherit properties.  Core class currently has no properties out of the gate.
	};
	
	that.beforeDesignStudioUpdate = function () {
		// check if something changed
		for (var propI in that.props) {
			var prop  = that.props[propI];
			
			if(prop.changed) {
				prop.changed = false;
			}
		}
	}
	
	for(property in that.spec){
		that.props[property] = that.spec[property];
		if(property.indexOf("data") == 0) {
			if(that.props["meta_data"] == undefined) {
				// clone the property
				that.props["meta_data"] = JSON.parse(JSON.stringify(that.spec[property]));	
			}
		}
	};
	
	if(that.specInclude) {
		for(property in that.specInclude){
			that.props[property] = that.specInclude[property];
			if(property.indexOf("data") == 0) {
				if(that.props["meta_data"] == undefined) {
					// clone the property
					that.props["meta_data"] = JSON.parse(JSON.stringify(that.specInclude[property]));	
				}
			}
		};
	}

	/*
	 * Create the aforementioned getter/setter and attach to 'this'.
	 */
	if(that.specComp.handlerType == "div" || that.specComp.handlerType == "datasource") {
		for(var property in that.props){
			that[property] = function(property){
				return function(value){
					if(value===undefined){
						return that.props[property].actualValue;
					}else{
						if(that.props[property].actualValue==value) {
							// ignore setting of same value
							return;
						}
						that.props[property].actualValue = value;
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
						if(that.props["meta_data"].actualValue==value) {
							// ignore setting of same value
							return;
						}
						that.props["meta_data"].actualValue = value;
						that.props["meta_data"].changed = true;
						return that;
					};
				}(property);
			}
		}

		if(that["set" + property.substring(0,1).toUpperCase() + property.substring(1)] == undefined) {
			that["set" + property.substring(0,1).toUpperCase() + property.substring(1)] = function(property){
				// a setter
				return function (value) {
					if(that.props[property].actualValue==value) {
						// ignore setting of same value
						return;
					}
					that.props[property].actualValue = value;
					that.props[property].changed = true;
					if(that.props[property].onChange) {
						if(typeof(that[that.props[property].onChange]) === 'function') {
							that[that.props[property].onChange].call(that,that.props[property].actualValue);
						}
					}
					return that;
				};
			}(property);
		}
	}
	for(var property in that.props){
		if(property.indexOf("data") == 0) {
			if(that["getDSMetadata"] == undefined) {
				that["getDSMetadata"] = function(property){
					// a setter
					return function () {
						return that.props["meta_data"].actualValue;
					};
				}(property);
			}
		}

		if(that["get" + property.substring(0,1).toUpperCase() + property.substring(1)] == undefined) {
			that["get" + property.substring(0,1).toUpperCase() + property.substring(1)] = function(property){
				// a getter
				return function () {
					return that.props[property].actualValue;
				};
			}(property);
		}
	};

	that.callOnSet = function(property,value){
		if(that.props[property] && that.props[property].onSet){
			if(typeof(that[that.props[property].onSet]) === 'function') {
				that[that.props[property].onSet].call(that,that.props[property].value);
			}
		}else{
			return "ERROR";
		}
	};
	/**
	 * Relays Design Studio Property Information over to Additional Properties Sheet.
	 */
	that.getPropertyMetaData = function(){
		var r = [];
		for(var prop in that.props){
			var o = {
				name : prop,
				type : that.props[prop].type,
				opts : that.props[prop].opts || {}
			}
			if(!o.opts.noAps) r.push(o);				
		}
		return JSON.stringify(r);
	};
	/**
	 * Component Information
	 */
	that.getComponentInformation = function(){
		return JSON.stringify(that.componentInfo);
	};
	
	that.getSpecSubArrayName = function(property) {
		var correctSpec = that.spec; 
		if(correctSpec[property] == undefined) {
			correctSpec = that.specInclude;
		}

		if(!correctSpec[property].arraySequence) {
			var arraySequence = correctSpec[property]["opts"]["arrayDefinition"][property]["sequence"].split(",");
			correctSpec[property].arraySequence = arraySequence;
		}
		
		return correctSpec[property].arraySequence[correctSpec[property].arraySequence.length-1];
	};

	that.getSpecIsArraySingle = function(property) {
		var correctSpec = that.spec; 
		if(correctSpec[property] == undefined) {
			correctSpec = that.specInclude;
		}

		if(correctSpec[property]["opts"]["arrayDefinition"]) {
			return correctSpec[property]["opts"]["ztlFunction"] == "-single";	
		}
		
		return false;
	};

	that.getSpecIsArray = function(property) {
		var correctSpec = that.spec; 
		if(correctSpec[property] == undefined) {
			correctSpec = that.specInclude;
		}

		return correctSpec[property]["opts"]["arrayDefinition"] != undefined;
	};

	that.getSpecOrigType = function(property) {
		var correctSpec = that.spec; 
		if(correctSpec[property] == undefined) {
			correctSpec = that.specInclude;
		}

		return correctSpec[property]["origType"];
	};

	that.getSpecType = function(property) {
		var correctSpec = that.spec; 
		if(correctSpec[property] == undefined) {
			correctSpec = that.specInclude;
		}

		return correctSpec[property]["type"];
	};
};