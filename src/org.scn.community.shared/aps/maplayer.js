/**
 * Map Layer
 */
define(["./complexitem"], function () {
	/**
	 * Create UI5 Extension
	 */
	org.scn.community.aps.ComplexItem.extend("org.scn.community.aps.MapLayer", {
		needsLabel : function () {
			return false;
		},
		metadata : {},
		/*
		 * Overrides parent
		 */
		hLabel : function (label, component, tt) {
			if (component instanceof org.scn.community.aps.ColorBuilder) {
				return component;
			} else {
				var hLayout = new sap.ui.commons.layout.HorizontalLayout({})
					//hLayout.addStyleClass("MeasureSelectorLayout");
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
		modulesLoaded : function(){
			this["cmp_layerType"].attachKeyChange(function(oControlEvent){
				this.makeLayout();
				this.layoutComponents();
			},this);
			this.makeLayout();
			this.layoutComponents();
		},
		createComponents : function () {
			this._props = {
				layerType : {
					opts : {
						apsControl : "segmentedbutton",
						desc : "Layer Type",
						options : [{key : "feature", text : "Feature", icon : "sap-icon://choropleth-chart"},
							       {key : "marker", text : "Marker", icon : "sap-icon://map"}
						]
					}
				},
				featureConfig : {
					opts : {
						apsControl : "featurelayer",
						desc : "Feature Configuration"							
					}
				},
				markerConfig : {
					opts : {
						apsControl : "markerlayer",
						desc : "Marker Configuration"							
					}
				}
			};
		},
		makeLayout : function () {
			this.layout = [];
			this.layout.push({
				comp : "layerType"
			});
			if(this.getValue().layerType == "feature"){
				this.layout.push({
					comp : "featureConfig"
				});
			}
			if(this.getValue().layerType == "marker"){
				this.layout.push({
					comp : "markerConfig"
				});
			}
		},
		
		renderer : {}
	});
	return {
		id : "maplayer",
		defaultValue : {
		},
		serialized : true,
		setter : function (property, value) {
			var newValue = jQuery.parseJSON(value);
			this["cmp_" + property].setValue(newValue);
		},
		getter : function (property, control) {
			var arrayValue = control.getValue();
			newValue = JSON.stringify(arrayValue);
			return newValue;
		},
		createComponent : function (property, propertyOptions, changeHandler) {
			var component = new org.scn.community.aps.MapLayer({
				width : "100%",
				title : new sap.ui.commons.Title({
					text : propertyOptions.desc
				}),
				showCollapseIcon : false
			});
			component.attachValueChange(changeHandler, this);
			return component;
		}
	};
});