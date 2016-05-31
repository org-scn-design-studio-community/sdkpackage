/**
 * Register Label (Read Only) Handler
 */
define([],function(){
	return {
		id : "label",
		setter : function(property, value){
			this["cmp_"+property].setText(value);
		},
		getter : function(property, control){
			return control.getText();
		},
		createComponent : function(property, propertyOptions, changeHandler){
			var component = new sap.ui.commons.Label({
				text : ""
			});
			return component;
		}
	};
});
