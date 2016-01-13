/**
 * Scale Editor Handler
 */
define(["../../org.scn.community.shared/os/d3v3/d3",
        "../../org.scn.community.shared/os/d3v3/topojson.v1",
        "./complexitem","./segmentedbutton","./mapeditor","./text-presets"], function (d3, topojson) {
	/**
	 * Create UI5 Extension
	 */
	org.scn.community.aps.ComplexItem.extend("org.scn.community.aps.ScaleEditor", {
		/*needsLabel : function () {
			return false;
		},*/
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
			var deltas = ["scaleType"];
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
			this["cmp_scaleType"].attachKeyChange(function(oControlEvent){
				this.makeLayout();
				this.layoutComponents();
			},this);
			this["cmp_rangeType"].attachKeyChange(function(oControlEvent){
				this.makeLayout();
				this.layoutComponents();
			},this);
			this.makeLayout();
			this.layoutComponents();
		},
		createComponents : function () {
			try {
				this._props = {
					colors : {
						opts:{
							apsControl : "palette",
							desc : "Scale Colors"	
						}						
					},
					scaleType : {
						opts : {
							apsControl : "segmentedbutton",
							desc : "Scale Type",
							options : [{key : "quantile", text : "Quantile"},
								         {key : "quantize", text : "Quantize"},
								         {key : "linear", text : "Linear"}]
						}
					},
					rangeType : {
						opts : {
							apsControl : "segmentedbutton",
							desc : "Range Type",
							options : [{key : "median", text : "Median"},
								       {key : "mean", text : "Mean"},
								       {key : "minmax", text : "Min/Max"},
								       {key : "manual", text : "Manual"}]
						}
					},
					min : {
						opts : {
							desc : "Minimum",
							apsControl : "spinner"
						}
					},
					max : {
						opts : {
							desc : "Maximum",
							apsControl : "spinner"
						}
					},
					clamp : {
						opts : {
							desc : "Clamp Scale",
							apsControl : "checkbox"
						}
					},
					interpolation : {
						opts : {
							apsControl : "segmentedbutton",
							desc : "Color Interpolation",
							options : [{key : "interpolateRgb", text : "RGB"},
								       {key : "interpolateHcl", text : "HCL"},
								       {key : "interpolateHsl", text : "HSL"}]
						}
					},
				};
			} catch (e) {
				alert(e);
			}
		},
		makeLayout : function () {
			this.layout = [];
			this.layout.push({
				comp : "colors"
			});
			this.layout.push({
				comp : "scaleType"
			});
			if (this.getValue().scaleType == "linear"){
				this.layout.push({
					comp : "rangeType"
				});
				if (this.getValue().rangeType == "manual"){
					this.layout.push({
						comp : "min"
					});
					this.layout.push({
						comp : "max"
					});
				}
				this.layout.push({
					comp : "clamp"
				});
				this.layout.push({
					comp : "interpolation"
				});
			}
		},
		
		renderer : {}
	});
	return {
		id : "scaleeditor",
		defaultValue : {
			colors : "#EDF8E9,#BAE4B3,#74C476,#31A354,#006D2C",
			scaleType : "quantile",
			rangeType : "mean",
			clamp : true,
			interpolation : "interpolateRgb",
			min : 0,
			max : 10000
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
			var component = new org.scn.community.aps.ScaleEditor({
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