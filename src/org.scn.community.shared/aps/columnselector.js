/**
 * Column Selector Handler
 */
define(["./complexitem"], function () {
	/**
	 * Create UI5 Extension
	 */
	org.scn.community.aps.ComplexItem.extend("org.scn.community.aps.ColumnSelector", {
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
			var deltas = ["columnType"];
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
			this["cmp_columnType"].attachKeyChange(function(oControlEvent){
				this.makeLayout();
				this.layoutComponents();
			},this);
		},
		createComponents : function () {
			try {
			this._props = {
				columnType : {
					opts : {
						desc : "Column Type",
						apsControl : "segmentedbutton",
						options : [{key : "dimension", text : "Dimension"},
						   {key : "measure", text : "Measure"}
						]
					}
				},
				measure : {
					opts : {
						desc : "Measure",
						apsControl : "measureselector"	
					}
				},
				dimension : {
					opts : {
						desc : "Dimension",
						apsControl : "dimensionselector"	
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
				comp : "columnType"
			});
			if (this.getValue().columnType == "measure"){
				this.layout.push({
					comp : "measure"
				});
			}
			if (this.getValue().columnType == "dimension"){
				this.layout.push({
					comp : "dimension"
				});
			}
		},
		renderer : {}
	});
	return {
		id : "columnselector",
		serialized : true,
		defaultValue : {
			columnType : "measure",
			measure : {
				fieldType : "position",
				fieldPosition : 0
			},
			dimension : {
				fieldType : "position",
				fieldPosition : 0
			}
		},
		setter : function (property, value) {
			if(value && value!=""){
				var newValue = jQuery.parseJSON(value);
				this["cmp_" + property].setValue(newValue);				
			}
		},
		getter : function (property, control) {
			var arrayValue = control.getValue();
			newValue = JSON.stringify(arrayValue);
			return newValue;
		},
		createComponent : function (property, propertyOptions, changeHandler) {
			var component = new org.scn.community.aps.ColumnSelector({
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