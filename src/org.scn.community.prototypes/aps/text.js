/**
 * Register TextField Handler
 */
define([],function(){
	return {
		id : "text",
		setter : function(property, value){
			this["cmp_"+property].setValue(value);
		},
		getter : function(property, control){
			return control.getValue();
		},
		createComponent : function(property, propertyOptions, changeHandler){
			var component = new sap.ui.commons.TextField({
				value : ""
			});
			component.attachChange(changeHandler,this);
			return component;
		}
	};
});
