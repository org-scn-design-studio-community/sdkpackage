/**
 * Feature Layer
 */
define(["./complexitem"], function () {
	/**
	 * Create UI5 Extension
	 */
	org.scn.community.aps.ComplexItem.extend("org.scn.community.aps.MarkerLayer", {
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
						width : "200px"
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
			this["cmp_markerType"].attachKeyChange(function(oControlEvent){
				this.makeLayout();
				this.layoutComponents();
			},this);
			this.makeLayout();
			this.layoutComponents();
		},
		createComponents : function () {
			try {
				this._props = {
					markerType : {
						opts : {
							apsControl : "segmentedbutton",
							desc : "Marker Type",
							options : [{key : "simple", text : "Simple", icon : "sap-icon://map"},
								       {key : "clustered", text : "Clustered", icon : "sap-icon://map"},
								       {key : "heat", text : "Heat", icon : "sap-icon://map"}
							]
						}
					},
					latitude : {
						opts : {
							desc : "Latitude",
							apsControl : "columnselector"
						}
					},
					longitude : {
						opts : {
							desc : "Longitude",
							apsControl : "columnselector"
						}
					},
					color : {
						opts : {
							desc : "Default Marker Color",
							apsControl : "color"
						}
					},
					showCoverageOnHover : {
						opts : {
							desc : "Show Coverage on Hover",
							apsControl : "checkbox"
						}
					},
					zoomToBoundsOnClick : {
						opts : {
							desc : "Zoom to Bounds on Click",
							apsControl : "checkbox"
						}
					},
					maxClusterRadius : {
						opts : {
							desc : "Max. Cluster Radius",
							apsControl : "spinner"
						}
					},
					disableClusteringAtZoom : {
						opts : {
							desc : "Zoom Level to stop clustering",
							apsControl : "spinner"
						}
					}
				};
			} catch (e) {
				alert(e);
			}
		},
		makeLayout : function () {
			this.layout = [];
			var o = this.getValue();
			this.layout.push({
				comp : "markerType"
			});
			this.layout.push({
				comp : "latitude"
			});
			this.layout.push({
				comp : "longitude"
			});
			if(o.markerType=="simple"){
				this.layout.push({
					comp : "color"
				});	
			}
			if(o.markerType=="clustered"){
				this.layout.push({
					comp : "maxClusterRadius"
				});
				this.layout.push({
					comp : "showCoverageOnHover"
				});
				this.layout.push({
					comp : "zoomToBoundsOnClick"
				});	
				this.layout.push({
					comp : "disableClusteringAtZoom"
				});
			}
		},
		
		renderer : {}
	});
	return {
		id : "markerlayer",
		serialized : true,
		defaultValue : {
			markerType : "simple",
			color : "#009966"
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
			var component = new org.scn.community.aps.MarkerLayer({
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