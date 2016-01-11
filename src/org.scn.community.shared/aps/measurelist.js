/**
 * Measure List Handler
 */
define([], function () {
	/**
	 * Measure List
	 */
	sap.ui.commons.ComboBox.extend("org.scn.community.aps.MeasureList", {
		metadata : {
			properties : {}
		},
		init : function () {
			this.setDisplaySecondaryValues(true);
			propertyPage.registerDataComponent(this);
			if (propertyPage.rendered)
				this.notifyDataChange();
		},
		notifyDataChange : function () {
			this.destroyItems();
			if (propertyPage && propertyPage.flatData) {
				for (var i = 0; i < propertyPage.flatData.columnHeadersKeys.length; i++) {
					var key = propertyPage.flatData.columnHeadersKeys[i];
					var text = propertyPage.flatData.columnHeaders[i];
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
		id : "measurelist",
		setter : function (property, value) {
			this["cmp_" + property].setSelectedKey(value);
		},
		getter : function (property, control) {
			return control.getSelectedKey();
		},
		createComponent : function (property, propertyOptions, changeHandler) {
			var component = new org.scn.community.aps.MeasureList({ });
			component.attachChange(changeHandler, this);
			return component;
		}
	};
});
