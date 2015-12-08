/**
 * Checkbox Handler
 */
define([],function(){
	return {
		id : "checkbox",
		setter : function(property, value){
			this["cmp_"+property].setChecked(Boolean(value));
		},
		getter : function(property, control){
			return control.getChecked();
		},
		createComponent : function(property, propertyOptions, changeHandler){
			var component = new sap.ui.commons.CheckBox();
			component.attachChange(changeHandler,this);
			return component;
		}
	};
});
