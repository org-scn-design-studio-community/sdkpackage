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
	    "lf/leaflet",
	    "./codemirror",
	    "./complexproperty"
        ], function (css,c22,L,codeMirrorHandler,complexPropertyHandler) {
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
			if (this.editor) this.updateMap();
			if (this.code){
				this.code.setValue(JSON.stringify(s,null,2));
			}
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

			// map = new L.Map('map', {layers: [osm], center: new L.LatLng(-37.7772, 175.2756), zoom: 15 });
			if(!this.editor) {
				var osm = L.tileLayer("http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png", {
					minZoom: 0,
					maxZoom: 22,
					subdomains : "12",
					attribution: "&copy; Open StreetMap Contributors | Tiles Courtesy of MapQuest"
				});
				var sat = L.tileLayer("http://otile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png", {
					minZoom: 0,
					maxZoom: 22,
					subdomains : "12",
					attribution: "&copy; Open StreetMap Contributors | Tiles Courtesy of MapQuest"
				});
				var ff = L.tileLayer("/aad/zen/mimes/sdk_include/org.scn.community.shared/os/tiles/standard/{z}/{x}/{y}.png", {
					minZoom: 0,
					maxZoom: 4,
					subdomains : "",
					attribution: "Using internal maps.  No internet connection needed."
				});
				this.editor = new L.Map(container.get(0), {
					layers: [osm],
					center: new L.LatLng(34.513299, -94.1628807),
					zoom: 1,
					attributionControl : false
				});
				var attributionControl = new L.control.attribution({
					position : "bottomright",
		    		prefix : false
		    	});
				attributionControl.addTo(this.editor);
				this._controlLayer = L.control.layers({"Standard":osm, "Satellite" : sat, "Firewall-Friendly" : ff },null,{ });
				this._controlLayer.addTo(this.editor);
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
							},/*,
							circle: {
								shapeOptions: {
									color: '#662d91'
								}
							}*/
							circle : false
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
					that.editor.on('draw:edited', function (e) {
						var geoJson = that.getShapes(that.drawnItems);
						that.setValue(geoJson);
						that.fireValueChange();
					});
					that.editor.on('draw:deleted', function (e) {
						var geoJson = that.getShapes(that.drawnItems);
						that.setValue(geoJson);
						that.fireValueChange();
					});
					that.updateMap();
				});
			}
			
			
			}catch(e){
				alert("Error rendering in mapeditor:\n\n" + e);
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
		buildConfig : function(){
			var s = this.getValue();
			var o = {};
			var that = this;
			L.geoJson(s,{
				onEachFeature : function(feature, layer){
					if (layer.getLayers) {
						layer.getLayers().forEach(function (l) {
							var gj = l.toGeoJSON();
							if(gj.properties){
								for (var field in gj.properties){
									o[field] = true;
								}
							}
						})
					} else {
						var gj = layer.toGeoJSON();
						if(gj.properties){
							for (var field in gj.properties){
								o[field] = true;
							}
						}
					}
				}
			});
			return o;
		},
		updateProperties : function(oControlEvent){
			var geoJson = this.getShapes(this.drawnItems);
			this.setValue(geoJson);
			this.fireValueChange();
		},
		showProperties : function(layer){
			this.selectedLayer = layer;
			var geoJson = layer.toGeoJSON();
			var configTemplate = this.buildConfig();
			var config = {};
			for(var field in configTemplate){
				config[field] = {
					desc : field,
					apsControl : "text"
				}
			}
			this.ci.setValue(null);
			this.ci.setConfig(config);
			if(geoJson){
				this.ci.setValue(geoJson.properties);
			}
		},
		updateMap : function(){
			var that = this;
			var s = this.getValue();
			this.drawnItems.eachLayer(function(layer){
				that.drawnItems.removeLayer(layer);
			});
			L.geoJson(s,{
				onEachFeature : function(feature, layer){
					if (layer.getLayers) {
						layer.getLayers().forEach(function (l) {
							l.on("click",function(e){
								that.showProperties(this);
							});
							that.drawnItems.addLayer(l);
						})
					} else {
						that.drawnItems.addLayer(layer);
						layer.on("click",function(e){
							that.showProperties(this);
						});
					}
				}
			});
			/*
			return;
			var styleConfig = {};
			if(s && s.features){
				for(var i=0;i<s.features.length;i++){
					var feature = s.features[i];
					var newLayer = new L.geoJson(feature, styleConfig);
					this.drawnItems.addLayer(newLayer);
				}
			}
			*/
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
		validateCode : function(oControlEvent){
			var s = this.code.getValue();
			try{
				var o = JSON.parse(s);
				var layer = L.geoJson(o);
				this.setValue(o);
				this.fireValueChange();
				delete this.selectedLayer;
				this.ci.setValue(null);
				this.ci.setConfig(null);
			}catch(e){
				alert("JSON looks bad." + e);
				// Bad JSON - Do nothing.
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
			this.mapLayout = new sap.ui.commons.layout.HorizontalLayout({});
			this.propertiesLayout = new sap.ui.commons.layout.VerticalLayout({
				width : "100%"
			});
			this.featureProperties = new sap.ui.commons.Panel({
				width : "250px",
				text : "Feature Properties",
				showCollapseIcon : false
			});
			this.ci = new org.scn.community.aps.ComplexProperty({
				width : "100%",
				labelOrientation : "Vertical",
				title : new sap.ui.commons.Title({
					text : "Feature Properties"
				}),
				showCollapseIcon : false
			});
			this.ci.attachValueChange(this.updateProperties,this);
			this.featureProperties.addContent(this.ci);
			this.htmlArea = new sap.ui.core.HTML({
				preferDOM : true,
				//width : "400px",
				//height : "350px",
				content : "<div style='width:400px;height:350px;'></div>"
			});
			this.mapLayout.addContent(this.htmlArea);
			this.mapLayout.addContent(this.featureProperties);
			this.code = new org.scn.community.aps.CodeMirror({
				width : "100%",
				height : "350px",
				options : {
					lineNumbers: true,
					mode: "text/javascript",
					theme: "eclipse",
					matchBrackets: true
				},
				showCollapseIcon : false,
				//presets : propertyOptions.presets,
				text : "GeoJSON"
			});
			this.code.attachValueChange(this.validateCode, this);
			this.tabStrip =  new sap.ui.commons.TabStrip({
				width : "100%",
				height : "375px"
			});
			this.mapTab = this.tabStrip.createTab("Map",this.mapLayout);
			this.propertiesTab = this.tabStrip.createTab("Table",this.propertiesLayout);
			this.codeTab = this.tabStrip.createTab("Source",this.code);
			this.htmlArea.attachAfterRendering(this.afterRenderHandler, this);
			this.addContent(this.tabStrip);
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
				width : "600px",
				//height : "400px",
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
