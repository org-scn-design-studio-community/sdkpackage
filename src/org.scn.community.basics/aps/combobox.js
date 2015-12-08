/**
 * Combobox Handler
 */
define([],function(){
	return {
		id : "combobox",
		setter : function(property, value){
			this["cmp_"+property].setSelectedKey(value);
		},
		getter : function(property, control){
			return control.getSelectedKey();
		},
		createComponent : function(property, propertyOptions, changeHandler){
			var component = new sap.ui.commons.ComboBox({});
			if(propertyOptions.options && propertyOptions.options.length>0){
				for(var i=0;i<propertyOptions.options.length;i++){
					var option = propertyOptions.options[i];
					component.addItem(new sap.ui.core.ListItem({
						key : option.key,
						text : option.text || option.key
					}));
				}
			}
			component.attachChange(changeHandler,this);
			return component;
		}
	};
});
