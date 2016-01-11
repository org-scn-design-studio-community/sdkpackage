/**
 * Feature Layer
 */
define(["./complexitem"], function () {
	/**
	 * Create UI5 Extension
	 */
	org.scn.community.aps.ComplexItem.extend("org.scn.community.aps.FeatureLayer", {
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
			/*this["cmp_layerType"].attachKeyChange(function(oControlEvent){
				this.makeLayout();
				this.layoutComponents();
			},this);*/
			this.makeLayout();
			this.layoutComponents();
		},
		createComponents : function () {
			this._props = {
				fillColor : {
					opts : {
						desc : "Default Feature Color",
						apsControl : "color"							
					}
				},
				color : {
					opts : {
						desc : "Default Feature Border Color",
						apsControl : "color"
					}
				},
				colorScaleConfig : {
					opts : {
						apsControl : "scaleeditor",
						desc : "Color Scale"
					}
				},
				colorScaleMeasure : {
					opts :{
						desc : "Color Scale Measure",
						apsControl : "measureselector"							
					}
				},
				weight : {
					opts : {
						desc : "Line Weight",
						apsControl : "spinner"							
					}
				},
				opacity : {
					opts : {
						desc : "Border Opacity (0.00 - 1.00)",
						apsControl : "spinner"							
					}
				},
				fillOpacity : {
					opts :{
						desc : "Fill Opacity (0.00 - 1.00)",
						apsControl : "spinner"							
					}
				},
				tooltipTemplate :{
					opts : {
						desc : "Tooltip Template",
						apsControl : "codemirror",
						height : "200px",
						apsConfig : {
							lineNumbers: true,
							mode: "text/html",
							theme: "eclipse",
							matchBrackets: true
						}								
					}
				},
				dimensionKey : {
					opts :{
						desc : "Key Dimension",
						apsControl : "dimensionselector"							
					}
				},
				/*
				 * Unfortunately, not supported enough to use in 1.6
				 * Maybe another day.  -Mike
				dataselection : {
					desc : "Data Source",
					defaultValue : {
						alias : "",
						selection : {}
					},
					apsControl : "dataselection2.0"
				},
				*/
				map : {
					opts : {
						desc : "Custom GeoJSON",
						apsControl : "layereditor"
					}
				}
			};
		},
		makeLayout : function () {
			this.layout = [];
			this.layout.push({
				comp : "fillColor"
			});
			this.layout.push({
				comp : "color"
			});
			this.layout.push({
				comp : "weight"
			});
			this.layout.push({
				comp : "opacity"
			});
			this.layout.push({
				comp : "fillOpacity"
			});
			this.layout.push({
				comp : "colorScaleMeasure"
			});
			this.layout.push({
				comp : "colorScaleConfig"
			});
			this.layout.push({
				comp : "tooltipTemplate"
			});
			this.layout.push({
				comp : "dimensionKey"
			});
			this.layout.push({
				comp : "map"
			});
		},
		
		renderer : {}
	});
	return {
		id : "featurelayer",
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
			var component = new org.scn.community.aps.FeatureLayer({
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