/**
 * Register Data Selection Handler
 */
define([],function(){
	return {
		id : "dataselection",
		setter : function(property, value){
			// No action
		},
		getter : function(property, control){
			// No action
		},
		createComponent : function(property, propertyOptions, changeHandler){
			var component = new sap.ui.commons.Button({
				icon : "sap-icon://database"
			});
			component.attachPress(function(oControlEvent){
				propertyPage.openPropertyDialog(property);
			},this);
			return component;
		}
	};
});