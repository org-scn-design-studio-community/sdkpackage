/**
 * CC BY-NC-SA License
 * LeafletMap by Mike Howles is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 * Based on a work at http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/LeafletMap
 *
 */
// http://jsperf.com/leaflet-svg-vs-canvas/3 shows that canvas is FASTER in IE than SVG, however SLOWER in Chrome than SVG.  Maybe browser detection later...
L_PREFER_CANVAS = true;		// http://leafletjs.com/reference.html#global
require.config({
	paths : {
		"leaflet-markers" : "../" + sap.zen.createStaticSdkMimeUrl("org.scn.community.shared","") + "os/leaflet-plugins/scn-markers/leaflet.scn-designstudio-markers",
		"leaflet" : "../" + sap.zen.createStaticSdkMimeUrl("org.scn.community.shared","") + "os/leaflet/leaflet"
	}
});
define(["css!./../../../org.scn.community.shared/os/leaflet/leaflet.css",
        "css!./../../../org.scn.community.shared/os/leaflet-plugins/scn-markers/leaflet.scn-designstudio-markers.css",
        "d3",
        "../../../org.scn.community.shared/os/d3v3/topojson.v1",
		"leaflet",
		"./../../../org.scn.community.shared/os/viz-modules/VizCoreDatabound",
		"sap/designstudio/sdk/component",
		"leaflet-markers"],
	function (Lcss, Lmarkercss, d3, topojson, L, VizCoreDatabound, Component) {
	var ownComponentName = "org.scn.community.databound.LeafletMap";
	/**
	 * LeafletMap
	 */
	LeafletMap.prototype = VizCoreDatabound;
	function LeafletMap() {
		var that = this;
		// Call super
		VizCoreDatabound.call(this, {
			fitBounds : {
				opts : {
					desc : "Fit to Bounds",
					cat : "General",
					apsControl : "checkbox"
				}
			},
			currentBaseLayer : {
				opts : {
					desc : "Active Base Layer",
					cat : "Layers-Base Maps",
					apsControl : "text"
				}
			},
			hiddenLayers : {
				opts : {
					desc : "Hidden Layers",
					cat : "Layers-Hidden",
					noAps : true
				}
			},
			mapCenter : {
				opts : {
					desc : "Map Center",
					cat : "General",
					apsControl : "latlng"
				}
			},
			zoom : {
				opts : {
					desc : "Zoom Level",
					cat : "General",
					apsControl : "spinner"
				}
			},
			tileOptions : {
				opts : {
					desc : "Base Map Tiles",
					cat : "Layers-Base Maps",
					apsControl : "complexcollection",
					apsConfig : {
						key : {
							desc : "Label",
							defaultValue : "SOME_BASEMAP",
							apsControl : "text",
							key : true
						},
						tileConfig : {
							desc : "Tile Config",
							defaultValue : {
						    	baseUrl : "http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png",
						    	subdomains : "12"
						    },
							apsControl : "tileconfig"
						}
					}
				}
			},/*
			geoJson : {
				opts : {
					desc : "GeoJSON Library",
					cat : "Layers-GeoJSON Library",
					apsControl : "complexcollection",
					apsConfig : {
						key : {
							desc : "Key",
							defaultValue : "SOME_KEY",
							apsControl : "text",
							key : true
						},
						content : {
							desc : "Custom GeoJSON",
							defaultValue : {},
							apsControl : "mapeditor"
						}
					}
				}
			},*/
			overlays : {
				opts : {
					desc : "Map Overlays",
					cat : "Layers-Overlays",
					apsControl : "complexcollection",
					apsConfig : {
						key : {
							desc : "Layer Key",
							defaultValue : "SOME_KEY",
							apsControl : "text",
							key : true
						},
						featureKey : {
							desc : "Feature Property Key",
							defaultValue : "NAME_0",
							apsControl : "text"
						},
						visible : {
							desc : "Visible",
							defaultValue : true,
							apsControl : "checkbox"
						},
						fillColor : {
							desc : "Default Feature Color",
							defaultValue : "#DFDFDF",
							apsControl : "color",
						},
						color : {
							desc : "Default Feature Border Color",
							defaultValue : "#808080",
							apsControl : "color",
						},
						colorScale : {
							desc : "Measure Color Scale",
							defaultValue : "#EDF8E9,#BAE4B3,#74C476,#31A354,#006D2C",
							apsControl : "palette",
						},
						colorScaleMethod : {
							apsControl : "segmentedbutton",
							desc : "Color Scale Method",
							defaultValue : "quantile",
							options : [{key : "quantile", text : "Quantile"},
							         {key : "quantize", text : "Quantize"}]
						},
						colorScaleMin : {
							desc : "Color Scale Maximum",
							defaultValue : 0,
							apsControl : "spinner",
						},
						colorScaleMax : {
							desc : "Color Scale Minimum",
							defaultValue : 0,
							apsControl : "spinner",
						},
						colorScaleMeasure : {
							desc : "Color Scale Measure",
							defaultValue : {fieldType:"position", fieldPosition:0},
							apsControl : "measureselector",
						},
						weight : {
							desc : "Line Weight",
							defaultValue : 1,
							apsControl : "spinner"
						},
						opacity : {
							desc : "Border Opacity (0.00 - 1.00)",
							defaultValue : 0.8,
							apsControl : "spinner"
						},
						fillOpacity : {
							desc : "Fill Opacity (0.00 - 1.00)",
							defaultValue : 0.5,
							apsControl : "spinner"
						},
						geoJson : {
							desc : "Custom GeoJSON",
							defaultValue : "",
							apsControl : "mapeditor"
						},
						geoJsonUrl : {
							desc : "GeoJSON URL",
							defaultValue : "",
							apsControl : "text-presets",
							presetsIndex : "os/maps/presets.json",
						}/*,
						markers : {
							desc : "Markers",
							defaultValues : [],
							apsControl : "complexcollection",
							visibleRows : 5,
							apsConfig : {
								key : {
									desc : "Key",
									defaultValue : "SOME_MARKER_KEY",
									apsControl : "text"
								},
								latitude : {
									desc : "Latitude",
									defaultValue : 51.505,
									apsControl : "text"
								},
								longitude : {
									desc : "Longitude",
									defaultValue : -0.09,
									apsControl : "text"
								},
								marker : {
									desc : "Marker Type",
									defaultValue : "marker",
									apsControl : "combobox",
									options : [{
											key : "marker",
											text : "Marker"
										}, {
											key : "circle",
											text : "Circle"
										}
									]
								}
							}
						}
						*/
					}
				}
			}
		});
		this.componentInfo.title = "Leaflet Map";
		this.componentInfo.description = "Leaflet Map Description";
		this.componentInfo.author = "Mike Howles";
		this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgVJREFUeNqcU01vEkEYfmZmF+JWsECTViyQaGs9eNCYaPTkD/DimYNnEo8eOfsT7JkDP8CDv8GLMWliNWqKTSm0gHZBY6W78+E7Q9iCPclmdjP7zvs879czrNFovAJQw2LPtqe1rlWr1YXQzWaz5iml3M+L16eQv2Nwj2HYayFX3AAYLcboBeSPjyhX1pHxzzA2KTx/XITFJgTC5zBpAUYEnPY8JRzQfu6ttBF5XZTXPHBmoBmngxkCYwzEJQ9MUDTO4QUe/CXfZZASCjdXR+iMJQrLlCHZODcOM5fBqN+CUdqeQqQ9jAYtF30z26d9B5kACHvfHAFsAmv3JwRSSse2cuMWoA2sR3jwBfnKFnyK/vT6EJf9a2jttbGxue7KshwWY7EJQSn7E0ozDKKM60GQVnhS+oB8MMbn4694u/ce+3EegjKsFMq4c/XhOQGg8Cj3Bpn0EpaDK3hnTnB36whGR9hpf8LR8DgZndIaByeHRIBzgjM5xu7hrnMIUgFOQ0n/BfR/DSCVvDB/a/unBI3u/neYGadO2L0A7JCPdeJCwNyeIdBaIV/MUle1E06vHWK1lJsDT202iOBiksmUQGkqI5KIaSy2y+M4xp8omiOYtXESUlKCExINVpuJOGhR80ht2swRzNoM05OGToUU+Fk8e/Dyvy5SokS6jdv1en3h6/xXgAEArt0tznrHscwAAAAASUVORK5CYII=";
		this.componentInfo.topics.splice(1, 0, {
			title : "Leaflet Map License",
			content : '<a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAPCAIAAAD8q9/YAAABqklEQVRIx+WWMU8CMRTH3wewxRvZoGp0IpJOhDhwdMP1JhLHY3DSwU4kxAHYMIGlX+Gc1MXA4AQhpPEb8BX6FWq05Dyhd3Ju573ccGnea+/3/u+9K0AOTefGvoEfn4Lo07nuAMBwOLSGMcYwxhMxNs6r91XhsJAJXe3AEzHGGMfRhsynZ6fGf/o27fV6GQauX9TL5XJybUgpAaB91TYhS7lsXbayCowwMvJKKQkhAMAYU0oxxgCAECKlNCJXaTWs6tHDyDoXtg/7+W5djEZZnRNOSfC3A3fvuwAwm8201oQQz/O01vzLHMdRSgkhgiAwiwijsKrni7l1962XuA/azY41WXE5SucfBb69uwEAKaVSKjq3PM+jlEarmnOOMTZRL6/Pi9UiIfdWGeMg41Kzu+euvAkip1CYMeb7vlGYcy6E2CiMUiickHtrGf+q2FbsHxX+7GG06eEgCBzHAQDf98MeppSu12utdbPZrJxX9uzh/YH37+G4MZEauFavlUqlHE3piRgjdDAYDBKAXdc9Pjn6J//hcHT1+30rbcNtFIvFbN+08nWXzpV9AD9ivwErgn5oAAAAAElFTkSuQmCC" /></a>' +
			'<br /><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">LeafletMap</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Mike Howles</span> is licensed under a <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" target="_blank" href="http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/LeafletMap" rel="dct:source">sdkpackage repository on Github</a>.'
		});

		/**
		 * Fires after property change.
		 */
		this.afterUpdate = function () {
			var deltas = ["tileOptions","overlays"];
			var rerender = false;
			for(var i=0;i<deltas.length;i++){
				if(this[deltas[i]]()!=this.prior[deltas[i]]) rerender = true;
			}
			if(rerender || this._designTime) this.updateMap();
			for(var i=0;i<deltas.length;i++){
				this.prior[deltas[i]] = this[deltas[i]]();
			}
		};
		this.createStyle = function(options){
			var ret = {
				fillColor : options.layer.fillColor || "#DFDFDF",
				color : options.layer.color || "#808080",
				weight : options.layer.weight || 1,
				opacity : options.layer.opacity || 0.8,
				fillOpacity : options.layer.fillOpacity || 0.5
			}
			if(!options.feature) {
				alert("bad feature detected.");
				return ret;
			}
			if(!that.flatData || !options.colorMeasureIndex <0 || !options.colorScale) {
				return ret;
			}
			var p = options.feature.properties[options.layer.featureKey];
			var rowIndex = -1;
			for(var i=0;i<that.flatData.rowHeaders.length;i++){
				if(that.flatData.rowHeaders[i] == p) rowIndex = i;
			}
			if(rowIndex>-1){
				var value = that.flatData.values[rowIndex][options.colorMeasureIndex];
				ret.fillColor = options.colorScale(value);
				// ret.fillColor = options.colorScale(value);
			}
			return ret;
		};
		this.updateMap = function () {
			// console.log("afterupdate");
			var that = this;
			var tileOptions = this.parse(this.tileOptions(),[]);
			var featureLayers = this.parse(this.overlays(),[]);
			
			// Remove event listeners
			this._map.off("baselayerchange", this.baseLayerChanged);
			this._map.off("overlayadd", this.overlayAdded);
			this._map.off("overlayremove", this.overlayRemoved);
			//this._map.off("zoomend", this.moveEndHandler);
			this._map.off("moveend", this.moveEndHandler);
			
			this._map.eachLayer(function (layer) {
			    that._map.removeLayer(layer);
			});
			try{
				if(this._controlLayer) this._controlLayer.removeFrom(this._map);
			}catch(e){
				// alert("caught" + e);
			}
			this._controlLayer = L.control.layers(null,null,{ });
			if(!this._designTime) {
				this._controlLayer.addTo(this._map);
			}else{
				
			}
			this._controlLayer._update();
			
			// var geoJson = this.parse(this.geoJson(),[]);
			// Ensure right data types.
			// if(tileOptions.minZoom) tileOptions.minZoom = parseInt(tileOptions.minZoom);
			// if(tileOptions.maxZoom) tileOptions.maxZoom = parseInt(tileOptions.maxZoom);

			if (this._layer) this._map.removeLayer(this._layer);
			if (this._featureLayer) this._map.removeLayer(this._featureLayer);
			
			// BASE MAP
			for(var i=0;i<tileOptions.length;i++){
				var tileConfig = tileOptions[i].tileConfig;
				var newTileLayer = L.tileLayer(tileConfig.baseUrl, tileConfig);
				this._controlLayer.addBaseLayer(newTileLayer, tileOptions[i].key);
				if(this.currentBaseLayer()==tileOptions[i].key || (!this.currentBaseLayer() && i==0)){
					newTileLayer.addTo(this._map);
				}
				// 
			}
			// Overlay Group
			this._featureLayer = L.featureGroup();
			for(var i=0;i<featureLayers.length;i++){
				var layer = featureLayers[i];
				var newOverlay = L.featureGroup();
				var colorScale;
				var colorMeasureIndex = -1;
				if(layer && layer.colorScaleMeasure){
					colorMeasureIndex = this.determineMeasureIndex(layer.colorScaleMeasure);
				}
				if(layer && layer.colorScale && colorMeasureIndex >-1){
					var values = [];
					this.flatData.values.map(function(e){
						values.push(e[colorMeasureIndex]);
					});
					values.sort(function(a, b) { return a - b; });
					var csm = layer.colorScaleMethod || "quantile";
					var colorScale = d3.scale[csm]()
		        		//.domain([layer.colorScaleMin || 0,layer.colorScaleMax || 100])
						.domain(values)
						.range(layer.colorScale.split(","));
			        // Clamp if can
			        if (typeof colorScale.clamp == 'function') {
			        	colorScale.clamp(true);
			        }		
				}
				try{
					if(layer.geoJsonUrl){
						var url = layer.geoJsonUrl;
						var osMapPath = sap.zen.createStaticSdkMimeUrl("org.scn.community.shared","os/maps")
						url = url.replace(/{os-maps}/g, osMapPath);
						
						$.ajax({
							dataType : "json",
							url : url,
							success : function(overlay){return function(data){
								// Convert TopoJSON to GeoJSON if needed.  TopoJSON smaller in size.
								var obj;
								var mapdata = data;
								if (data && data.type && data.type.toLowerCase() === 'topology' && typeof topojson != 'undefined') {
									for (var o in data.objects) {
										if (data.objects.hasOwnProperty(o)) {
											obj = data.objects[o];
											break;
										}
									}
									mapdata = topojson.feature(data, data.objects[o]);
								}
								var LgeoJSON = new L.geoJson(mapdata, {
									style : function(options){
										return function(feature){
											options.feature = feature;
											return that.createStyle(options);
										};
									}({
										layer : layer,
										colorMeasureIndex : colorMeasureIndex,
										colorScale : colorScale
									}),
								});
								LgeoJSON.addTo(overlay);								
							};}(newOverlay),
							fail : function(jqxhr, textStatus, error){
								alert(error);
							}
						})
					}
	
					// alert(colorMeasure + "\n\n" + colorMeasure);
					// Custom GeoJSON
					if(layer.geoJson){
						try{
							var LgeoJSON = new L.geoJson(layer.geoJson, {
								//style : styleConfig,
								style : function(options){
									return function(feature){
										options.feature = feature;
										return that.createStyle(options);
									};
								}({
									layer : layer,
									colorMeasureIndex : colorMeasureIndex,
									colorScale : colorScale
								}),
								pointToLayer : function(feature, latlng){
									var marker = "marker";
									if(feature && feature.properties){
										if(feature.properties.marker) marker = feature.properties.marker; 
									}
									var conf = that.createStyle({
										feature : feature,
										layer : layer,
										colorMeasureIndex : colorMeasureIndex,
										colorScale : colorScale
									});
									
									return new L.marker(latlng,{
										icon : L.SCNDesignStudioMarkers.icon({
											markerColor : conf.fillColor,
											icon : marker,
											iconSize : [32 , 32],
											anchorPosition : [.5,1]		// .5, .5 for circle
										})
									});
								}
							});
							LgeoJSON.addTo(newOverlay);
						}catch(e){
							alert("Bad Custom GeoJSON: " + e);
							// Bad GeoJSON
						}
					}
					
					/*else{
						var LgeoJSON = new L.geoJson(this.parse(geoJson[j].content,{}), styleConfig);
						LgeoJSON.addTo(newOverlay);	
					}*/
				
					// LgeoJSON.addTo(this._featureLayer);
					
					//if(featureLayers[i].visible) LgeoJSON.addTo(this._featureLayer);
					//this._controlLayer.addOverlay(LgeoJSON, featureLayers[i].key);
				}catch(e){
					// Bad GeoJson
				}
				var Lmarkers = L.featureGroup();
				var markers = layer.markers || [];
				for(var j=0;j<markers.length;j++){
					var marker = markers[j];
					// alert([marker.latitude, marker.longitude]);
					var Lmarker = new L.marker([marker.latitude, marker.longitude],{
						icon : L.SCNDesignStudioMarkers.icon({
							markerColor : "#009966",
							icon : marker.marker,
							iconSize : [32 , 32],
							anchorPosition : [.5,1]		// .5, .5 for circle
						})
					});
					Lmarker.addTo(Lmarkers);
				}
				Lmarkers.addTo(newOverlay);
				if(featureLayers[i].visible) newOverlay.addTo(this._featureLayer);
				this._controlLayer.addOverlay(newOverlay, featureLayers[i].key);
			}
			this._featureLayer.addTo(this._map);
			/*if(this.fitBounds()){
				try{
					this._map.fitBounds(this._markerLayer.getBounds(),{
						paddingTopLeft : [15,15]
					});
				}catch(e){
					
				}	
			}else{
				this._map.setView([51.505, -0.09], this.zoom() || 1);
			}*/
			this._map.setView(
				this.parse(this.mapCenter(),[51.505, -0.09]),
				this.zoom() || 1/*,{
					pan : {
						noMoveStart : true
					}
				}*/);
			// Add event listeners
			this._map.on("baselayerchange", this.baseLayerChanged);
			this._map.on("overlayadd", this.overlayAdded);
			this._map.on("overlayremove", this.overlayRemoved);
			if(!this._designTime){
				//this._map.on("zoomend", this.moveEndHandler);
				this._map.on("moveend", this.moveEndHandler);
			}
		};
		var that = this;
		this.moveEndHandler = function(event){
			var changes = [];
			var c = that._map.getCenter();
			var cs = JSON.stringify([c.lat,c.lng]);
			if(cs!=that.mapCenter()){
				changes.push("mapCenter");
				that.mapCenter(cs);
			}
			if(that._map.getZoom() != that.zoom()){
				that.zoom(that._map.getZoom());
				changes.push("zoom");
			}
			if(changes.length>0){
				// console.log(changes);
				that.firePropertiesChanged(changes);
			}
		};
		this.baseLayerChanged = function(LayersControlEvent){
			that.currentBaseLayer(LayersControlEvent.name);
			that.firePropertiesChanged(["currentBaseLayer"]);
			//that.fireEvent("onSelect");
		};
		this.overlayAdded = function(LayersControlEvent){
			var a = that.parse(that.overlays(),[]);
			for(var i=0;i<a.length;i++){
				if(a[i].key == LayersControlEvent.name) a[i].visible = true;
			}
			that.overlays(JSON.stringify(a));
			that.firePropertiesChanged(["overlays"]);
		};
		this.overlayRemoved = function(LayersControlEvent){
			var a = that.parse(that.overlays(),[]);
			for(var i=0;i<a.length;i++){
				if(a[i].key == LayersControlEvent.name) a[i].visible = false;
			}
			that.overlays(JSON.stringify(a));
			that.firePropertiesChanged(["overlays"]);
		};

		var parentInit = this.init;
		this.init = function () {
			this.prior = {};
			try{
				this._designTime = false;
				if(sap && sap.zen && sap.zen.designmode) {
					this._designTime = true;
				}
				parentInit.call(this);
				// Create Map Container DIV
				this._mapContainer = $("<div/>");
				this._mapContainer.css({
					width : "100%",
					height : "100%"
				});
				this.$().append(this._mapContainer);
				
				this._map = new L.Map(this._mapContainer.get(0), {
					attributionControl : false,
					zoomControl : !this._designTime,
					maxBounds:[L.latLng(-85.0511,-180),L.latLng(85.0511,180)]
				});
				// CONTROL LAYER
				// this._controlLayer = L.control.layers(null,null,{ });
				
				var attributionControl = new L.control.attribution({
					position : "bottomright",
		    		prefix : false
		    	});
				attributionControl.addTo(this._map);
				// this._map.setView([51.505, -0.09], 3);
			
				this.updateMap();	
			}catch(e){
				alert("init" + e);				
			}
			
		};
	}
	LeafletMap.prototype.constructor = LeafletMap;
	LeafletMap.prototype.toString = function () {
		return ownComponentName;
	}
	Component.subclass(ownComponentName, LeafletMap); // End of SDK
});
