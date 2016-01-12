/**
 * Scale Editor Handler
 */
define(["../../org.scn.community.shared/os/d3v3/d3",
        "../../org.scn.community.shared/os/d3v3/topojson.v1",
        "./complexitem","./segmentedbutton","./mapeditor","./text-presets"], function (d3, topojson) {
	/**
	 * Create UI5 Extension
	 */
	org.scn.community.aps.ComplexItem.extend("org.scn.community.aps.LinearScaleEditor", {
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
					rangeType : {
						opts : {
							apsControl : "segmentedbutton",
							desc : "Range Type",
							options : [
								       {key : "minmax", text : "Auto Min/Max"},
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
					}
				};
			} catch (e) {
				alert(e);
			}
		},
		makeLayout : function () {
			this.layout = [];		
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
		},
		
		renderer : {}
	});
	return {
		id : "linearscaleeditor",
		serialized : true,
		defaultValue : {
			rangeType : "minmax",
			min : "0",
			max : "100"
		},
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
			var component = new org.scn.community.aps.LinearScaleEditor({
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