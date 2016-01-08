/**
 * Measure Selector Handler
 */
define(["./complexitem"], function () {
	/**
	 * Tile Config
	 */
	org.scn.community.aps.ComplexItem.extend("org.scn.community.aps.DatasetConfig", {
		metadata : {},
		needsLabel : function() {
			return true;
		},
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
		modulesLoaded : function(){
			this.makeLayout();
			this.layoutComponents();
		},
		createComponents : function () {
			this._props = {
				ignoreExpandedNodes : {
					opts : {
						desc : "Ignore Expanded Hierarchy Nodes",
						apsControl : "checkbox"	
					}
				},
				ignoreResults : {
					opts : {
						desc : "Ignore Totals",
						apsControl : "checkbox"	
					}
				},
				useMockData : {
					opts : {
						desc : "Use Mock Data if Needed",
						apsControl : "checkbox"	
					}
				},
				swapAxes : {
					opts : {
						desc : "Swap Axes",
						apsControl : "checkbox"	
					}
				}
			};
		},
		makeLayout : function () {
			this.layout = [];
			this.layout.push({
				comp : "ignoreResults"
			});
			this.layout.push({
				comp : "ignoreExpandedNodes"
			});
			this.layout.push({
				comp : "useMockData"
			});
			this.layout.push({
				comp : "swapAxes"
			});
		},
		renderer : {}
	});
	return {
		serialized : true,
		id : "datasetconfig",
		setter : function (property, value) {
			this["cmp_" + property].setValue(JSON.stringify(value));
		},
		getter : function (property, control) {
			var value = control.getValue();
			newValue = JSON.stringify(value);
			return newValue;
		},
		createComponent : function (property, propertyOptions, changeHandler) {
			try{
			var component = new org.scn.community.aps.DatasetConfig({
				width : "100%",
				title : new sap.ui.commons.Title({
					text : propertyOptions.desc
				}),
				showCollapseIcon : false
			});
			component.attachValueChange(changeHandler, this);
			}catch(e){
				alert("Error creating dataset config:\n\n" + e);
			}
			return component;
		}
	};
});