/**
 * SDKCore Class
 */
define([], function() {
	function SDKCore(options){
		var that = this;
		this.componentInfo = {
			visible : true,
			title : "Core Component",
			icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAk5JREFUeNpsU8tu00AUPeNXQh7NA6qKBAqBDYI1LBBCYlMWCJAQZVMWgMQHAN9B+gFIwAKQUNkA6oYlQkgQaIElBBBSiRqwnYfTh+143DuT2CQRk5zYc+ecO/eezLAwDMEYw4Ol58fp/Q7hPCGF/wzibRJeEu5en79Yk1rx8/DZi1u6rlfLpX0o5PLITmUh4hNiOF0HrU4bvxtr8H3/9rXLFxY1scg5rx49ckwS+0EAu9UGwsnt5Re5qZzE6ueVKk0XFbEmdqvsLyGfyyJhaFQWF2lpYRxiTXAqs6W4QlkBUxS8q31AqVzCnmIRmUxKEiKSKF98eptbsCwb3+p10rCRBEQIQ4b19T9E6MAwDCQTCaR3pcAph+tuYdv14Pdd0Tsi4/8lIChUhaapEqqqyDkntTJ8FzEeqsIvBDyQFcUJWra13La756and6NYKKKQz0vRKELywHF6sG0bpmWS2d5ynEDXDXfhyjy+1n8QoYW1RoMq0aCruuy1T2X7QZ9aSuLwoYM4O3cGT54uuXGCdCZzqbbyCeXyXlQOzNJ80kQBBb2NgYkfV79ITZxAtMODEI1GE6bZhi5MNMjEFJnIBya6ngfPH5gYiOBwKAM9k65G/arDZxBwerIxLySPsfhfUKJMHDwmRFDY+DzaBCPHXCb49fN71bQsdHuOLFFTNWniGCjm0VrH6aJp/pUaWf3wUMws3Lg5d+LkqauZ7NRpiidDcRnC8ctEY7vndF+/f/vm0eP7916RtslGTlWaMCPuy2hrE0O41yE0CRtCuyPAACZBGVgAMt/bAAAAAElFTkSuQmCC",
			author : "Mike Howles",
			description : "Description",
			topics : [{
				title : "SDK Component",
				content : "This component is an SDK Component.  Be sure you install the plugin to your server platform should you find it useful."
			},{
	    		title : "SCN SDK Components License",
	    		content : "SCN SDK Components License is released under the Apache 2.0 License. Please refer to the licenses for the full copyright restrictions placed on this software.  (<a target='_blank' href='http://www.apache.org/licenses/LICENSE-2.0'>Apache 2.0 License</a>)"
	    	}]
		};
		this.props = {
			// All properties from child classes always inherit properties.  Core class currently has no properties out of the gate.
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
		/**
		 * Component Information
		 */
		this.getComponentInformation = function(){
			return JSON.stringify(this.componentInfo);
		}
		this.init = function(){
			this.$().addClass("DesignStudioSCN");
			this.$().addClass("Core");
		}
	}
	return SDKCore;
});
