/**
 * Auto properties Utility Class - Can probably be reused across many SDK Components
 * 
**/
var AutoPropertyUtility = function(opts){
	var that = this;
	var componentRef = opts.componentRef;
	this._properties = opts.properties;

	var returnObj = {
		props : this._properties,
		toString : function(){
			return "Design Studio Property Utility Class";
		},
		resetAll : function(){
			for(var prop in that._properties){
				that._properties[prop].changed = false;
			}
		}
	};
	for(var property in this._properties){
		this._properties[property].changed = false;

		/*
		 * Return full-fledged object (Non-DS setter/getter version)
		 * Can probably remove this.
		 */ 
		returnObj[property] = function(property){
			return function(value){	// not using value yet
				var r = that._properties[property];
				// Enhance object config
				r.reset = function(){
					that._properties[property].changed = false;
				};
				return r;
			};
		}(property);
		/*
		 * Create the aforementioned getter/setter and attach to 'this'.
		 * Ignore if 'noSetterGetter' is true
		 */
		if(!this._properties[property].noSetterGetter){
			// Attach setter/getter function for SDK DIV handler
			componentRef[property] = function(property){
				return function(value){
					if(value===undefined){
						//var v = null;
						var v;
						if(that._properties[property].value == null){
							if(that._properties[property].nullHandler) v = that._properties[property].nullHandler();
						}else{
							v = that._properties[property].value;
						}
						return v;
					}else{
						var oldVal = JSON.stringify(that._properties[property].value);
						var newVal = JSON.stringify(value);
						if(oldVal != newVal){
							that._properties[property].oldValue = that._properties[property].value;
							that._properties[property].value = value;
							that._properties[property].changed = true;
							if(that._properties[property].afterChange){
								that._properties[property].afterChange();
							}
						}
						// Return self for decorative setter/getter
						return componentRef;
					}
				};
			}(property);
		}
	}
	return returnObj;
};