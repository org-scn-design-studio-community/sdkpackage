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
			},
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
							defaultValue : "#B0B0B0",
							apsControl : "color",
						},
						colorScaleConfig : {
							apsControl : "scaleeditor",
							desc : "Color Scale",
							defaultValue : {
								colors : "#EDF8E9,#BAE4B3,#74C476,#31A354,#006D2C",
								scaleType : "quantile",
								rangeType : "mean",
								clamp : true,
								interpolation : "interpolateRgb",
								min : 0,
								max : 10000
							}
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
							defaultValue : 0.8,
							apsControl : "spinner"
						},
						tooltipTemplate :{
							desc : "Tooltip Template",
							defaultValue : ["<span>{Feature Key}</span><br/>\n",
							                "<span>{Value}</span><br/>"].join(),
							apsControl : "codemirror",
							opts : {
								height : "200px",
								apsConfig : {
									lineNumbers: true,
									mode: "text/html",
									theme: "eclipse",
									matchBrackets: true
								}								
							}
						},
						/*
						 * Unfortunately, not supported enough to use in 1.6
						 * Maybe another day.  -Mike
						dataselection : {
							desc : "Data Source",
							defaultValue : {
								alias : "",
								selection : {}
							},
							apsControl : "dataselection2.0"
						},
						*/
						map : {
							desc : "Custom GeoJSON",
							defaultValue : {
								mapType : "url",
								featureKey : "sovereignt",
								url :"{ds-maps}/countries_medium.json",
								geoJSON : {
								  "type": "FeatureCollection",
								  "features": []
								}
							},
							apsControl : "layereditor"
						},
						
						/*,
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
			var p = options.feature.properties[options.layer.map.featureKey];
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
		this.renderLayer = function(geoJSON,layerConfig){
			var mapdata = geoJSON;
			var newOverlay = L.featureGroup();
			var colorScale;
			var colorMeasureIndex = -1;
			if(layerConfig && layerConfig.colorScaleMeasure){
				colorMeasureIndex = this.determineMeasureIndex(layerConfig.colorScaleMeasure);
			}
			if(layerConfig && layerConfig.colorScaleConfig && colorMeasureIndex >-1){
				var values = [];
				this.flatData.values.map(function(e){
					values.push(e[colorMeasureIndex]);
				});
				values.sort(function(a, b) { return a - b; });
				var csc = layerConfig.colorScaleConfig || {
					scaleType : "quantile",
					colors : "#000000,#FFFFFF"
				};
				var colorScale;
				
				if(csc.scaleType =="quantile" || csc.scaleType == "quantize"){
					colorScale = d3.scale[csc.scaleType]()
						.domain(values)
						.range(layerConfig.colorScaleConfig.colors.split(","));
					
					// if(colorScale.interpolate) colorScale.interpolate(d3.interpolateRgb);
				}
				if(csc.scaleType == "linear"){
					var pal = layerConfig.colorScaleConfig.colors.split(",") || [];
					var rangeType = csc.rangeType || "minmax";
					var r = d3.max(values) - d3.min(values);
					var min = d3.min(values);
					if(rangeType == "minmax"){
						min = d3.min(values);
						r = d3.max(values) - d3.min(values);
					}
					if(rangeType =="mean"){
						min = 0;
						r = d3.mean(values) * 2;
					}
					if(rangeType =="median"){
						min = 0;
						r = d3.median(values) * 2;
					}
					if(rangeType =="manual"){
						min = csc.min || 0;
						r = (csc.max || 100) - min;
					}
					var stops = [];
					var rate = r/pal.length;
					for(var i=0;i<pal.length;i++){
						stops.push(min + (rate*i));
					}
					colorScale = d3.scale.linear()
			    		.domain(stops)
			    		.range(pal);
			    		
					if(csc.interpolation) colorScale.interpolate(d3[csc.interpolation]);					
				}
		        // Clamp if can
		        if (typeof colorScale.clamp == 'function') {
		        	if(csc.clamp) colorScale.clamp(true);
		        }		
			}
			
			if (geoJSON && geoJSON.type && geoJSON.type.toLowerCase() === 'topology' && typeof topojson != 'undefined') {
				for (var o in geoJSON.objects) {
					if (geoJSON.objects.hasOwnProperty(o)) {
						obj = geoJSON.objects[o];
						break;
					}
				}
				mapdata = topojson.feature(geoJSON, geoJSON.objects[o]);
			}
			var LgeoJSON = new L.geoJson(mapdata, {
				//style : styleConfig,
				style : function(options){
					return function(feature){
						options.feature = feature;
						return that.createStyle(options);
					};
				}({
					layer : layerConfig,
					colorMeasureIndex : colorMeasureIndex,
					colorScale : colorScale
				}),
				onEachFeature : function(feature, layer){
					if(feature.properties){
						var rowIndex = -1;
						for(var i=0;i<that.flatData.rowHeaders.length;i++){
							if(that.flatData.rowHeaders[i] == feature.properties[layerConfig.map.featureKey]) rowIndex = i;
						}
						
						var tt = (layerConfig.tooltipTemplate + "");
						// tt = tt.replace(/{Feature Key}/g,feature.properties[layerConfig.map.featureKey]);
						// FEATURE
						tt = tt.replace(/%(.*?)%/g, function(a,b){
							return feature.properties[b]
						});
						// MEASURE by Position
						tt = tt.replace(/{measure-position-value-(.*?)}/g, function(a,b){
							var ret = "???";
							var columnIndex = parseInt(b);
							if(rowIndex>-1){
								ret = that.flatData.values[rowIndex][columnIndex];
							}
							return ret;
						});
						// MEASURE LABEL by Position
						tt = tt.replace(/{measure-position-label-(.*?)}/g, function(a,b){
							var ret = "???";
							var columnIndex = parseInt(b);
							ret = that.flatData.columnHeaders[columnIndex];
							return ret;
						});
						// MEASURE by Label
						tt = tt.replace(/{measure-key-value-(.*?)}/g, function(a,b){
							var ret = "???";
							var columnIndex = that.determineMeasureIndex({
								fieldType : "name",
								fieldName : b
							});
							if(rowIndex>-1){
								ret = that.flatData.values[rowIndex][columnIndex];
							}
							return ret;
						});
						// MEASURE by Label
						tt = tt.replace(/{measure-key-label-(.*?)}/g, function(a,b){
							var ret = "???";
							var columnIndex = that.determineMeasureIndex({
								fieldType : "name",
								fieldName : b
							});
							if(columnIndex != null)	ret = that.flatData.columnHeaders[columnIndex];
							return ret;
						});
						layer.bindPopup(tt);
					}
					
				},
				pointToLayer : function(feature, latlng){
					var marker = "marker";
					if(feature && feature.properties){
						if(feature.properties.marker) marker = feature.properties.marker; 
					}
					var conf = that.createStyle({
						feature : feature,
						layer : layerConfig,
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
			return LgeoJSON;
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
				var map = layer.map;
				if(map.mapType == "url"){
					var url = map.url;
					var osMapPath = sap.zen.createStaticSdkMimeUrl("org.scn.community.shared","os/maps")
					url = url.replace(/{os-maps}/g, osMapPath);
					url = url.replace(/{ds-maps}/g, "zen.rt.components.geomaps/resources/js/geo");
					$.ajax({
						dataType : "json",
						url : url,
						success : function(layer){return function(data){
							var newLayer = that.renderLayer(data, layer);
							if(layer.visible) newLayer.addTo(that._featureLayer);
							that._controlLayer.addOverlay(newLayer, layer.key);							
						};}(layer),
						fail : function(jqxhr, textStatus, error){
							alert(error);
						}
					});
				}
				if(map.mapType == "custom"){
					try{
						var newLayer = that.renderLayer(map.geoJSON, layer);
						if(layer.visible) newLayer.addTo(that._featureLayer);
						that._controlLayer.addOverlay(newLayer, layer.key);
					}catch(e){
						alert("Bad Custom GeoJSON: " + e);
						// Bad GeoJSON
					}
				}
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