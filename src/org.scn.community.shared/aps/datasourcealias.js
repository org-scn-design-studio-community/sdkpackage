/**
 * Datasource Alias Ref
 */
define([], function () {
	/**
	 * Measure List
	 */
	sap.ui.commons.ComboBox.extend("org.scn.community.aps.DataSourceAlias", {
		metadata : {
			properties : {}
		},
		init : function () {
			this.setDisplaySecondaryValues(true);
			propertyPage.registerDataComponent2(this);
			if (propertyPage.rendered) this.notifyDataChange2();
		},
		notifyDataChange2 : function () {
			this.destroyItems();
			if (propertyPage && propertyPage.dataSourceAliases && propertyPage.dataSourceAliases.aliases) {
				for (var i = 0; i < propertyPage.dataSourceAliases.aliases.length; i++) {
					var key = propertyPage.dataSourceAliases.aliases[i];
					var text = propertyPage.dataSourceAliases.aliases[i];
					if (key) {
						var newItem = new sap.ui.core.ListItem({
							key : key,
							text : text || key,
							//additionalText : key
						});
						this.addItem(newItem);
					}
				}
			}
		},
		renderer : {}
	});
	return {
		id : "datasourcealiasref",
		setter : function(property, value){
			this["cmp_"+property].setSelectedKey(value);
		},
		getter : function(property, control){
			return control.getSelectedKey();
		},
		createComponent : function(property, propertyOptions, changeHandler){
			var component = new org.scn.community.aps.DataSourceAlias({});
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
