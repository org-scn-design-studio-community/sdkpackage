/**
 * Measure Selector Handler
 */
define(["./complexitem"], function () {
	/**
	 * Tile Config
	 */
	org.scn.community.aps.ComplexItem.extend("org.scn.community.aps.TileConfig", {
		metadata : {},
		needsLabel : function() {
			return false;
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
				baseUrl : {
					opts : {
						desc : "Base URL",
						apsControl : "text"	
					}
				},
				attribution : {
					opts : {
						desc : "Attribution",
						apsControl : "text"	
					}
				},
				subdomains : {
					opts : {
						desc : "Sub-domains",
						apsControl : "text"	
					}
				},
				minZoom : {
					value : 0,
					opts : {
						desc : "Minimum Zoom",
						apsControl : "spinner"	
					}
				},
				maxZoom : {
					value : 18,
					opts : {
						desc : "Maximum Zoom",
						apsControl : "spinner"	
					}
				},
				tileSize : {
					value : 256,
					opts : {
						desc : "Tile Size",
						apsControl : "spinner"	
					}
				},
			};
		},
		init : function(){
			try{
				this.presetMenu = new sap.ui.commons.Menu({
					items : []
				});
				this.presetButton = new sap.ui.commons.MenuButton({
					text : "Presets...",
					menu : this.presetMenu
				});
				this.buttons = [this.presetButton];
				org.scn.community.aps.ComplexItem.prototype.init.apply(this, arguments);
				$.ajax({
					url : "../../org.scn.community.shared/os/map-tiles/index.json?r=" + Math.random(),
					context : this
				})
				.done(this.presetsLoadComplete)
				.fail(function (xhr, textStatus, error) {
					//alert(error);
					/*alert("Problem occured when loading maps menu." + error)*/
				});
			}catch(e){
				alert(e);
			}
		},
		presetsLoadComplete : function (data) {
			//this.addButton(this.presetButton);
			try {
				this.presets = data;
				for (var i = 0; i < this.presets.length; i++) {
					var generatedMenuItem = new sap.ui.commons.MenuItem({
							text : this.presets[i].label
						});
					this.makePresetMenu(this.presets[i], generatedMenuItem, this.presets[i]);
					this.presetMenu.addItem(generatedMenuItem);
				}
			} catch (e) {
				alert(e);
			}
		},
		makePresetMenu : function (o, menuitem, rootConfig) {
			var that = this;
			menuitem.setText(o.label);
			if (o.presets) {
				var newMenu = new sap.ui.commons.Menu({});
				menuitem.setSubmenu(newMenu);
				for (var i = 0; i < o.presets.length; i++) {
					var newMenuItem = new sap.ui.commons.MenuItem({
							text : o.presets[i].label
						});
					newMenu.addItem(newMenuItem);
					this.makePresetMenu(o.presets[i], newMenuItem, rootConfig);
				}
			}
			if (o.url) {
				var presetURL = o.url;
				if (o.type != "external")
					presetURL = "../../org.scn.community.shared/os/map-tiles/" + presetURL;
				if (rootConfig.indexUrl)
					presetURL = rootConfig.indexUrl + presetURL;
				menuitem.attachSelect(function (presetURL, config) {
					return function (oControlEvent) {
						try {
							$.ajax({
								//async : false,
								url : presetURL + "?r=" + Math.random(),
								headers : config.headers
							}).done(function (data) {
								that.setValue(data);
								that.fireValueChange();
							})
							.fail(function (presetURL) {
								return function (xhr, textStatus, errorThrown) {
									alert("An error occured while trying to download the preset.\n\n" + errorThrown + presetURL);
								};
							}
								(presetURL));
						} catch (e) {
							alert(e);
							throw ("Error loading preset:\n\nFile:" + presetURL + "\n\n" + e);
						}

					};
				}
					(presetURL, rootConfig), this);
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
			/*var newValue = {};
			try{
				newValue = JSON.parse(value);
			}catch(e){
				// Bad JSON
			}
			this["cmp_" + property].setValue(newValue);*/
			this["cmp_" + property].setValue(value);
		},
		getter : function (property, control) {
			var value = control.getValue();
			//newValue = JSON.stringify(arrayValue);
			//return newValue;
			return value; 
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
				alert("Error creating tile config:\n\n" + e);
			}
			return component;
		}
	};
});