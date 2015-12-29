/**
 * MapEditor Handler
 */
var sharedPath = "../../org.scn.community.shared/os/"

require.config({
	paths : {
		lf : sharedPath + "leaflet",
		lfdraw : sharedPath + "leaflet-plugins/leaflet-draw",
	},
	/*shim : {
		lf : {
			exports : "L"
		},
		lfdraw : {deps:["lf/leaflet"]}
	}*/
});/*
		lfdraw : sharedPath + "leaflet-plugins/mode/xml/xml",
		cmjs : sharedPath + "codemirror/mode/javascript/javascript",
		cmhtml : sharedPath + "codemirror/mode/htmlmixed/htmlmixed",
		cmcss : sharedPath + "codemirror/mode/css/css",
		cmmb : sharedPath + "codemirror/addon/edit/matchbrackets",
	},
	shim : {
		"cm" : {
			exports : "CodeMirror"
		},
		"cmxml" :{ deps : ["cm"] },
		"cmjs" :{ deps : ["cm"] },
		"cmhtml" :{ deps : ["cm"] },
		"cmcss" :{ deps : ["cm"] },
		"cmmb" :{ deps : ["cm"] }
	}
});
*/
define([
        "css!../../org.scn.community.shared/os/leaflet/leaflet.css",
        "css!../../org.scn.community.shared/os/leaflet-plugins/leaflet-draw/leaflet.draw.css",
	    "lf/leaflet"        
        ], function (css,c22,L) {
	/**
	 * Create UI5 Extension
	 */
	sap.ui.commons.Panel.extend("org.scn.community.aps.MapEditor", {
		needsLabel : function () {
			return false;
		},
		metadata : {
			properties : {
				"presets" : {
					type : "string",
					defaultValue : null
				},
				"options" : {
					type : "object",
					defaultValue : {}
				},
				"value" : {
					type : "object",
					defaultValue : {}
				}
			},
			events : {
				valueChange : {}
			}
		},
		renderer : {},
		setValue : function (s) {
			sap.ui.core.Control.prototype.setProperty.apply(this, ["value", s]);
			return;
			if (this.editor)
				this.editor.setValue(s);
			//var incoming = JSON.stringify(a);
			//var original = JSON.stringify(this.getValue());
			//if(incoming != original){
			//if(this.ht) this.ht.loadData(a);
			//}
			return this;
		},
		afterRenderHandler : function (oControlEvent) {
			try{
			var that = this;
			var myId = this.htmlArea.getId();
			var container = $("#" + myId);
			/*var opts = this.getOptions();
			this.editor = CodeMirror(function (e) {
					//container.css({overflowX : "hide"});
					container.get(0).appendChild(e);
				}, this.getOptions());
			this.editor.setValue(this.getValue());
			this.editor.on("blur", function (e) {
				that.updateCode();
			});*/
			var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
			// map = new L.Map('map', {layers: [osm], center: new L.LatLng(-37.7772, 175.2756), zoom: 15 });
			if(!this.editor) {
				this.editor = new L.Map(container.get(0), {layers: [osm], center: new L.LatLng(-37.7772, 175.2756), zoom: 3 });
				this.drawnItems = new L.FeatureGroup();
				this.editor.addLayer(this.drawnItems);
				var that = this;
				require(["lfdraw/leaflet.draw"],function(){
					that.drawControl = new L.Control.Draw({
						draw: {
							position: 'topleft',
							polygon: {
								title: 'Draw a polygon',
								allowIntersection: false,
								drawError: {
									color: '#b00b00',
									timeout: 1000
								},
								shapeOptions: {
									color: '#009966'
								},
								showArea: true
							},
							polyline: {
								metric: false
							},
							circle: {
								shapeOptions: {
									color: '#662d91'
								}
							}
						},
						edit: {
							featureGroup: that.drawnItems
						}
					});
					that.editor.addControl(that.drawControl);
					that.editor.on('draw:created', function (e) {
						var type = e.layerType,
							layer = e.layer;

						if (type === 'marker') {
							layer.bindPopup('A popup!');
						}

						that.drawnItems.addLayer(layer);
						var geoJson = that.getShapes(that.drawnItems);
						that.setValue(geoJson);
						that.fireValueChange();
					});
				});
			}
			
			
			}catch(e){
				alert(e);
			}
		},
		getShapes : function(drawnItems){
			var geoJson = {
				type : "FeatureCollection",
				features : []
			};
			drawnItems.eachLayer(function(layer){
				geoJson.features.push(layer.toGeoJSON());
			});
			return geoJson;
		},
		presetsLoadComplete : function (data) {
			this.addButton(this.presetButton);
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
					presetURL = "../../org.scn.community.shared/os/rapidprototyping-presets/" + this.getPresets() + "/" + presetURL;
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
		updateCode : function () {
			this.setValue(this.editor.getValue());
			this.fireValueChange();
		},
		setPresets : function (s) {
			sap.ui.core.Control.prototype.setProperty.apply(this, ["presets", s]);
			try {
				$.ajax({
					url : "../../org.scn.community.shared/os/rapidprototyping-presets/" + this.getPresets() + "/index.json?r=" + Math.random(),
					context : this
				})
				.done(this.presetsLoadComplete)
				.fail(function (xhr, textStatus, error) {
					//alert(error);
					/*alert("Problem occured when loading maps menu." + error)*/
				});
			} catch (e) {
				alert(e);
				throw ("Error loading presets index:\n\n" + e);
			}
			return this;
		},
		init : function () {
			var that = this;
			sap.ui.commons.Panel.prototype.init.apply(this, arguments);
			this.presetMenu = new sap.ui.commons.Menu({
					items : []
				});
			this.presetButton = new sap.ui.commons.MenuButton({
					text : "Presets...",
					menu : this.presetMenu
				});
			this.htmlArea = new sap.ui.core.HTML({
					preferDOM : true,
					width : "400px",
					height : "400px",
					content : "<div style='width:400px;height:400px;'></div>"
				});
			this.htmlArea.attachAfterRendering(this.afterRenderHandler, this);
			this.addContent(this.htmlArea);
		}
	});
	return {
		id : "mapeditor",
		setter : function (property, value) {
			this["cmp_" + property].setValue(value);
		},
		getter : function (property, control) {
			return control.getValue();
		},
		createComponent : function (property, propertyOptions, changeHandler) {
			var component = new org.scn.community.aps.MapEditor({
					width : "400px",
					height : "400px",
					options : propertyOptions.apsConfig,
					showCollapseIcon : false,
					presets : propertyOptions.presets,
					text : propertyOptions.desc
				});
			component.attachValueChange(changeHandler, this);
			return component;
		}
	};
});
