/**
 * Register TextField Handler
 */
define([],function(){
	return {
		id : "textarea",
		setter : function(property, value){
			this["cmp_"+property].setValue(value);
		},
		getter : function(property, control){
			return control.getValue();
		},
		createComponent : function(property, propertyOptions, changeHandler){
			var component = new sap.ui.commons.TextArea({
				design : sap.ui.core.Design.Monospace,
				rows : 20,
				width : "100%",
				wrapping : sap.ui.core.Wrapping.Off
			});
			component.attachChange(changeHandler,this);
			return component;
		}
	};
});
