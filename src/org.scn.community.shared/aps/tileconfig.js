/**
 * Measure Selector Handler
 */
define(["./complexitem"], function () {
	/**
	 * Tile Config
	 */
	org.scn.community.aps.ComplexItem.extend("org.scn.community.aps.TileConfig", {
		metadata : {},
		/*
		 * Overrides parent
		 */
		hLabel : function (label, component, tt) {
			if (component instanceof org.scn.community.aps.ColorBuilder) {
				return component;
			} else {
				var hLayout = new sap.ui.commons.layout.HorizontalLayout({})
				hLayout.addContent(new sap.ui.commons.Label({
					text : label,
					tooltip : tt,
					width : "100px"
				}));
				hLayout.addContent(component);
				return hLayout;
			}
		},
		_config : {},
		setValue : function (value) {
			var deltas = [];
			var oldValues = [];
			for (var i = 0; i < deltas.length; i++) {
				oldValues.push(this.getValue()[deltas[i]]);
			}
			org.scn.community.aps.ComplexItem.prototype.setValue.apply(this, arguments);
			var changed = false;
			for (var i = 0; i < deltas.length; i++) {
				if (oldValues[i] != this.getValue()[deltas[i]])
					changed = true;
			}
			if (changed) {
				this.makeLayout();
				this.layoutComponents();
			}
		},
		createComponents : function () {
			try {
				this.cmps.baseUrl = new sap.ui.commons.TextField({ });
				this.cmps.attribution = new sap.ui.commons.TextField({ });
				this.cmps.subdomains = new sap.ui.commons.TextField({ });
				this.cmps.minZoom = new org.scn.community.aps.Spinner({
					value : 0
				});
				this.cmps.maxZoom = new org.scn.community.aps.Spinner({
					value : 18
				});
				this.cmps.tileSize = new org.scn.community.aps.Spinner({
					value : 256
				});
				this.makeLayout();
				this.layoutComponents();
			} catch (e) {
				alert(e);
			}
		},
		makeLayout : function () {
			//alert(JSON.stringify(ds_getDataSourceAliases()));
			//alert(JSON.stringify(ds_getDataJSON("DS_2")));
			this.layout = [];
			this.layout.push({
				desc : "Base URL",
				comp : "baseUrl"
			});
			this.layout.push({
				desc : "Attribution",
				comp : "attribution"
			});
			this.layout.push({
				desc : "Sub-Domains",
				comp : "subdomains"
			});
			this.layout.push({
				desc : "Min. Zoom",
				comp : "minZoom"
			});
			this.layout.push({
				desc : "Max. Zoom",
				comp : "maxZoom"
			});
			this.layout.push({
				desc : "Tile Size",
				comp : "tileSize"
			});
		},
		renderer : {}
	});
	return {
		id : "tileconfig",
		setter : function (property, value) {
			var newValue = {};
			try{
				newValue = JSON.parse(value);
			}catch(e){
				// Bad JSON
			}
			this["cmp_" + property].setValue(newValue);
		},
		getter : function (property, control) {
			var arrayValue = control.getValue();
			newValue = JSON.stringify(arrayValue);
			return newValue;
		},
		createComponent : function (property, propertyOptions, changeHandler) {
			try{
			var component = new org.scn.community.aps.TileConfig({
				width : "100%",
				title : new sap.ui.commons.Title({
					text : propertyOptions.desc
				}),
				showCollapseIcon : false
			});
			component.attachValueChange(changeHandler, this);
			}catch(e){
				alert(e);
			}
			return component;
		}
	};
});
