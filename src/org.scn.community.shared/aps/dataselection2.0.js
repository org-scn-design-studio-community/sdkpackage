/**
 * Measure Selector Handler
 */
define(["./datasourcealias"], function () {
	/**
	 * Create UI5 Extension
	 */
	org.scn.community.aps.ComplexItem.extend("org.scn.community.aps.DataSelection2", {
		metadata : {},
		/*
		 * Overrides parent
		 */
		hLabel : function (label, component, tt) {
			if (component instanceof org.scn.community.aps.ColorBuilder) {
				return component;
			} else {
				var hLayout = new sap.ui.commons.layout.HorizontalLayout({});
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
			var deltas = ["alias"];
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
				this._props = {
					alias : {
						opts : {
							desc : "Data Source Alias",
							apsControl : "datasourcealias"	
						}
					},
					selection : {
						handler : {
							serialize : true,
							setter : function(property, value){ this["cmp_selection"].setTooltip(JSON.stringify(value));},
							getter : function(property, control){ },
							createComponent : function (property, propertyOptions, changeHandler) {
								var component = new sap.ui.commons.Button({
									icon : "sap-icon://database"
								});
								component.attachPress(function (e) {
									var o = JSON.parse(JSON.stringify(this.getValue()));
									var newSelection = ds_openDataSelectionDialog(o.alias, JSON.stringify(o.selection));
									try{
										var ns = JSON.parse(newSelection);
										if(ns) {
											o.selection = ns;
											this.setValue(o);
											this.fireValueChange();
											// This doesn't work for SDK components.
											// com.sap.ip.bi.zen.ui_16.0.5.jar - com.sap.ip.bi.zen.ui.internal.view.additionalproperties.AdditionalPropertyView
											// GetDataJsonFunction checks if control is an instanceof IZenUiQueryReferenceHelper :(
											var r = ds_getDataJSON("DS_1", "",
												 "includeMetadata","true",
												 "fillMetadataProperty","true",
												 "includeData","true",
												 "includeAttributes", "true",
												 "includeAxesTuples","true",
												 "includeTuples","true"
											 );
											alert(r);
										}						
									}catch(e){
										alert("Data Selection invalid.\n\n" + e);
									}
								}, this);
								return component;
							}
						},
						opts : {
							desc : "Data Selection",
							apsControl : "text"	
						}
					}
				};/*
							this.tooltips = {
				alias : "Data Source Alias",
				selection : "Data Selection"
			};
				this.cmps.alias =  new org.scn.community.aps.DataSourceAlias({});
				this.cmps.selection = new sap.ui.commons.Button({
					icon : "sap-icon://database"
				});
				this.cmps.alias.attachChange(function (e) {
					var o = JSON.parse(JSON.stringify(this.getValue()));
					o.alias = e.getSource().getSelectedKey();
					this.setValue(o);
				}, this);
				this.cmps.selection.attachPress(function (e) {
					var o = JSON.parse(JSON.stringify(this.getValue()));
					var newSelection = ds_openDataSelectionDialog(o.alias, JSON.stringify(o.selection));
					try{
						var ns = JSON.parse(newSelection);
						if(ns) {
							o.selection = ns;
							this.setValue(o);
							// This doesn't work for SDK components.
							// com.sap.ip.bi.zen.ui_16.0.5.jar - com.sap.ip.bi.zen.ui.internal.view.additionalproperties.AdditionalPropertyView
							// GetDataJsonFunction checks if control is an instanceof IZenUiQueryReferenceHelper :(
							var r = ds_getDataJSON("DS_1", "",
								 "includeMetadata","true",
								 "fillMetadataProperty","true",
								 "includeData","true",
								 "includeAttributes", "true",
								 "includeAxesTuples","true",
								 "includeTuples","true"
							 );
							alert(r);
						}						
					}catch(e){
						alert("Data Selection invalid.\n\n" + e);
					}
				}, this);
				*/
				this.makeLayout();
				this.layoutComponents();
			} catch (e) {
				alert(e);
			}
		},
		makeLayout : function () {
			this.layout = [];
			this.layout.push({
				desc : "Data Source",
				comp : "alias"
			});
			this.layout.push({
				desc : "Data Selection",
				comp : "selection"
			});
		},
		renderer : {}
	});
	return {
		id : "dataselection2.0",
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
			var component = new org.scn.community.aps.DataSelection2({
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
