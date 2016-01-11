/**
 * Measure List Handler
 */
define([], function () {
	/**
	 * Dimension List
	 */
	sap.ui.commons.ComboBox.extend("org.scn.community.aps.DimensionList", {
		metadata : {
			properties : {}
		},
		init : function () {
			this.setDisplaySecondaryValues(true);
			propertyPage.registerDataComponent(this);
			if (propertyPage.rendered) this.notifyDataChange();
		},
		notifyDataChange : function () {
			this.destroyItems();
			if (propertyPage && propertyPage.flatData) {
				for (var i = 0; i < propertyPage.flatData.dimensionHeadersKeys.length; i++) {
					var key = propertyPage.flatData.dimensionHeadersKeys[i];
					var text = propertyPage.flatData.dimensionHeaders[i];
					if (key) {
						var newItem = new sap.ui.core.ListItem({
							key : key,
							text : text || key,
							additionalText : key
						});
						this.addItem(newItem);
					}
				}
			}
		},
		renderer : {}
	});
	return {
		id : "dimensionlist",
		setter : function (property, value) {
			this["cmp_" + property].setSelectedKey(value);
		},
		getter : function (property, control) {
			return control.getSelectedKey();
		},
		createComponent : function (property, propertyOptions, changeHandler) {
			var component = new org.scn.community.aps.DimensionList({ });
			component.attachChange(changeHandler, this);
			return component;
		}
	};
});
