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
		"leaflet-heat" : "../" + sap.zen.createStaticSdkMimeUrl("org.scn.community.shared","") + "os/leaflet-plugins/leaflet-heat/leaflet-heat",
		"leaflet-markers" : "../" + sap.zen.createStaticSdkMimeUrl("org.scn.community.shared","") + "os/leaflet-plugins/scn-markers/leaflet.scn-designstudio-markers",
		"leaflet-scnmarkers" : "../" + sap.zen.createStaticSdkMimeUrl("org.scn.community.shared","") + "os/leaflet-plugins/scn-markers/leaflet.scn-markers",
		"leaflet-markercluster" : "../" + sap.zen.createStaticSdkMimeUrl("org.scn.community.shared","") + "os/leaflet-plugins/leaflet-markercluster/leaflet.markercluster",
		"leaflet" : "../" + sap.zen.createStaticSdkMimeUrl("org.scn.community.shared","") + "os/leaflet/leaflet"
	}
});
define(["css!./../../../org.scn.community.shared/os/leaflet/leaflet.css",
        "css!./../../../org.scn.community.shared/os/leaflet-plugins/scn-markers/leaflet.scn-designstudio-markers.css",
        "css!./../../../org.scn.community.shared/os/leaflet-plugins/leaflet-markercluster/MarkerCluster.css",
        "css!./../../../org.scn.community.shared/os/leaflet-plugins/leaflet-markercluster/MarkerCluster.Default.css",
        "css!./../../../org.scn.community.shared/os/fonts/font-awesome-4.5.0/css/font-awesome.min.css",
        "d3",
        "../../../org.scn.community.shared/os/d3v3/topojson.v1",
		"leaflet",
		"./../../../org.scn.community.shared/os/viz-modules/VizCoreDatabound",
		"sap/designstudio/sdk/component",
		"leaflet-markers",
		"leaflet-markercluster",
		"leaflet-heat",
		"leaflet-scnmarkers"],
	function (Lcss, Lmarkercss, Lclustercss1, Lclustercss2, fontawesome, d3, topojson, L, VizCoreDatabound, Component,Lmarkers,Lmarkercluster,Lheat,LSCNmarkers) {
	var ownComponentName = "org.scn.community.databound.LeafletMap";
	/**
	 * LeafletMap
	 */
	LeafletMap.prototype = VizCoreDatabound;
	function LeafletMap() {
		var that = this;
		// Call super
		VizCoreDatabound.call(this, {
			repositoryPath : {
				opts : {
					noAps : true
				}
			},
			/*
			 * Also does not appear to be working in 1.6 :(
			 * data2 : {
				opts : {
					noAps : true
				},
				onChange : function(){this.flatten("data2","data2config");}
			},
			data2config : {
				opts : {
					desc : "Data Set 2 Configuration",
					cat : "Data-Additional Datasets",
					apsControl : "datasetconfig",
					dataset : "data2"
				}
			},*/
			fitBounds : {	// WIP
				opts : {
					desc : "Fit to Bounds",
					cat : "General",
					// apsControl : "checkbox"
					noAps : true
				}
			},
			crs : {
				opts : {
					apsControl : "segmentedbutton",
					desc : "CRS",
					cat : "General",
					options : [{
							key : "EPSG3857",
							text : "EPSG3857"
						}, {
							key : "EPSG4326",
							text : "EPSG4326"
						}, {
							key : "EPSG3395",
							text : "EPSG3395"
						}, {
							key : "Simple",
							text : "Simple"
						}
					]
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
						    	subdomains : "12",
						    	minZoom : "0",
						    	maxZoom : "18",
						    	tileSize : "256"
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
						layer : {
							desc : "Layer",
							apsControl : "maplayer",
							defaultValue : {
								"layerType" : "feature",
								"featureConfig" : {
									"fillColor" : "#DFDFDF",
									"color" : "#B0B0B0",
									"weight" : 1,
									"colorScaleConfig" : {
										"colors" : "#EDF8E9,#BAE4B3,#74C476,#31A354,#006D2C",
										"scaleType" : "quantile",
										"rangeType" : "mean",
										"clamp" : true,
										"interpolation" : "interpolateRgb",
										"min" : 0,
										"max" : 10000
									},
									"colorScaleMeasure" : {
										"fieldType" : "position",
										"fieldPosition" : 0
									},
									"opacity" : 0.8,
									"fillOpacity" : 0.8,
									"tooltipTemplate" : "<strong><span>{featurekey}</span></strong><br/>\n<ul>\n\t<li>{colormeasure-label}:{colormeasure-formattedvalue}\n</ul>",
									"map" : {
										"mapType" : "url",
										"featureKey" : "admin",
										"url" : "{ds-maps}/countries_medium.json",
										"geoJSON" : {
											"type" : "FeatureCollection",
											"features" : []
										}
									}
								},
								"markerConfig" : {
									"markerType" : "simple",
									"color" : "#009966",
									"latitude" : {
										"columnType" : "dimension",
										"measure" : {
											"fieldType" : "name",
											"fieldPosition" : 0,
											"fieldName" : "Students"
										},
										"dimension" : {
											"fieldType" : "name",
											"fieldPosition" : 0,
											"fieldName" : "Latitude"
										}
									},
									"longitude" : {
										"columnType" : "dimension",
										"measure" : {
											"fieldType" : "position",
											"fieldPosition" : 0
										},
										"dimension" : {
											"fieldType" : "name",
											"fieldPosition" : 0,
											"fieldName" : "Longitude"
										}
									},
									"colorScaleConfig" : {
										"colors" : "#F03B20,#FFEDA0,#8BCC8A",
										"scaleType" : "linear",
										"rangeType" : "minmax",
										"clamp" : true,
										"interpolation" : "interpolateRgb",
										"min" : 0,
										"max" : 10000
									},
									"colorScaleMeasure" : {
										"fieldType" : "position",
										"fieldPosition" : "0",
										"fieldName" : ""
									},
									"markerSizeConfig" : {
										"rangeType" : "minmax",
										"min" : "0",
										"max" : "100",
										"clamp" : true
									},
									"markerSizeMeasure" : {
										"fieldType" : "unassigned",
										"fieldPosition" : "0",
										"fieldName" : ""
									},
									"icon" : "circle",
									"markerSize" : "32",
									"maxClusterRadius" : "80",
									"showCoverageOnHover" : false,
									"zoomToBoundsOnClick" : true,
									"disableClusteringAtZoom" : "18",
									"heatMinOpacity" : ".2",
									"heatMax" : "1",
									"heatBlur" : "15",
									"heatRadius" : "25",
									"heatMaxZoom" : "18",
									"heatIntensityMeasure" : {
										"fieldType" : "position",
										"fieldPosition" : 0,
										"fieldName" : ""
									},
									"tooltipTemplate" : "<span style=\"font-weight:bold;color:{markercolor}\">\n  {dimension-key-text-Location}\n</span>\n<ul>\n  <li>{colormeasure-label} : {colormeasure-formattedvalue}</li>\n</ul>"
								}
							}
						}
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
			var deltas = ["tileOptions","overlays","crs"];
			var rerender = false;
			for(var i=0;i<deltas.length;i++){
				if(this[deltas[i]]()!=this.prior[deltas[i]]) {
					if(deltas[i]=="crs") this.createMap();	// Must destroy and recreate.
					rerender = true;
				}
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
			var colIndex = this.determineDimensionIndex(options.layer.dimensionKey);
			for(var i=0;i<that.flatData.rowHeaders.length;i++){
				if(colIndex == -1 || colIndex == null){	// Concatenated
					if(that.flatData.rowHeaders[i] == p) rowIndex = i;	
				}else{	// Specific dimension
					if(that.flatData.rowHeadersKeys2D[i][colIndex] == p) rowIndex = i;
				}
			}
			if(rowIndex>-1){
				var value = that.flatData.values[rowIndex][options.colorMeasureIndex];
				ret.fillColor = options.colorScale(value);
				// ret.fillColor = options.colorScale(value);
			}
			return ret;
		};
		/**
		 * Render a marker layer
		 */
		this.renderMarkerLayer = function(markerConfig){
			if(!markerConfig.latitude || !markerConfig.longitude){
				return L.featureGroup();
			}
			var lat = this.determineColumnIndex(markerConfig.latitude);
			var lng = this.determineColumnIndex(markerConfig.longitude);
			var heatIntensityIndex = this.determineMeasureIndex(markerConfig.heatIntensityMeasure);
			var colorMeasureIndex = this.determineMeasureIndex(markerConfig.colorScaleMeasure);
			var markerSizeMeasureIndex = this.determineMeasureIndex(markerConfig.markerSizeMeasure);
			var values = [];
			for(var i=0;i<this.flatData.values.length;i++){
				var newRow = {
					count : 1,
					flatDataIndex : i
				};
				if(markerConfig.latitude.columnType=="dimension"){
					newRow.latitude = this.flatData.rowHeadersKeys2D[i][lat];
				}else{
					newRow.latitude = this.flatData.values[i][lat];
				}
				if(markerConfig.longitude.columnType=="dimension"){
					newRow.longitude = this.flatData.rowHeadersKeys2D[i][lng];
				}else{
					newRow.longitude = this.flatData.values[i][lng];
				}
				newRow.latitude = parseFloat(newRow.latitude);
				newRow.longitude = parseFloat(newRow.longitude);
				// Heat Index
				if(heatIntensityIndex > -1){
					newRow.heatIntensity = this.flatData.values[i][heatIntensityIndex];
				}else{
					newRow.heatIntensity = 1;
				}
				// Color Measure
				if(colorMeasureIndex > -1){
					newRow.colorMeasure = this.flatData.values[i][colorMeasureIndex];
				}else{
					// Null
				}
				// Marker Size Measure
				if(markerSizeMeasureIndex > -1){
					newRow.markerSizeMeasure = this.flatData.values[i][markerSizeMeasureIndex];
				}else{
					// Null
				}
				values.push(newRow);
			}
			/*
			values.sort(function(a, b) { 
				if(a.colorMeasure !== undefined && b.colorMeasure !== undefined){
					return a.colorMeasure - b.colorMeasure;					
				}
			});
			*/
			if(markerConfig.markerType=="simple"){
				var newLayer = L.featureGroup();
				var colorScale;
				var markerSizeScale;
				if(markerConfig && markerConfig.colorScaleConfig && colorMeasureIndex >-1){
					var aValues = [];
					values.map(function(e){
						aValues.push(e.colorMeasure);
					});
					aValues.sort(function(a, b) { return a - b; });
					var csc = markerConfig.colorScaleConfig || {
						scaleType : "quantile",
						colors : "#000000,#FFFFFF"
					};
					if(csc.scaleType =="quantile" || csc.scaleType == "quantize"){
						colorScale = d3.scale[csc.scaleType]()
							.domain(aValues)
							.range(markerConfig.colorScaleConfig.colors.split(","));
						
						if(colorScale.interpolate) colorScale.interpolate(d3.interpolateRgb);
					}					
					if(csc.scaleType == "linear"){
						var pal = markerConfig.colorScaleConfig.colors.split(",") || [];
						var rangeType = csc.rangeType || "minmax";
						var r = d3.max(aValues) - d3.min(aValues);
						var min = d3.min(aValues);
						if(rangeType == "minmax"){
							min = d3.min(aValues);
							r = d3.max(aValues) - d3.min(aValues);
						}
						if(rangeType =="mean"){
							min = 0;
							r = d3.mean(aValues) * 2;
						}
						if(rangeType =="median"){
							min = 0;
							r = d3.median(aValues) * 2;
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
				if(markerConfig && markerConfig.markerSizeConfig && markerSizeMeasureIndex >-1){
					var aValues = [];
					values.map(function(e){
						aValues.push(e.markerSizeMeasure);
					});
					aValues.sort(function(a, b) { return a - b; });
					var msc = markerConfig.markerSizeConfig || {
						rangeType : "minmax",
						min : 0,
						max : 100
					};
					var rangeType = msc.rangeType || "minmax";
					var max = d3.max(aValues);
					var min = d3.min(aValues);
					if(rangeType == "minmax"){
						min = d3.min(aValues);
						max = d3.max(aValues);
					}
					if(rangeType =="mean"){
						min = 0;
						max = d3.mean(aValues) * 2;
					}
					if(rangeType =="median"){
						min = 0;
						max = d3.median(aValues) * 2;
					}
					if(rangeType =="manual"){
						min = msc.min || 0;
						max = msc.max || 100;
					}
					markerSizeScale = d3.scale.linear()
			    		.domain([parseFloat(min),parseFloat(max)])
			    		.range([16,64]);
				}

				for(var i=0;i<values.length;i++){
					var value = values[i];
					value.color = markerConfig.color;
					value.markerSize = markerConfig.markerSize;
					if(colorScale && value.colorMeasure !== undefined){
						value.color = colorScale(value.colorMeasure);
					}
					if(markerSizeScale && value.markerSizeMeasure !== undefined) {
						value.markerSize = markerSizeScale(value.markerSizeMeasure);
					}
				}
				// Move biggest markers to the back.
				values.sort(function(a,b){
					return b.markerSize - a.markerSize;
				});
				// console.log(values);
				for(var i=0;i<values.length;i++){
					var value = values[i];
					if(value.latitude && value.longitude){
						var newMarker = new L.marker([value.latitude, value.longitude],{
							icon: L.SCNMarkers.icon({
								shield : "marker",
								icon: markerConfig.icon || "circle",
								prefix: 'fa',
								shieldColor: value.color,
								iconSize : [value.markerSize || 32, value.markerSize || 32],
								anchorPosition : [.5, 1]
								//spin:true
							})
						});
						var tt = (markerConfig.tooltipTemplate + "");
						// Dimension Member Text by Position
						var rowIndex = value.flatDataIndex;
						// Marker Color
						tt = tt.replace(/{markercolor}/g, value.color);
						tt = tt.replace(/{dimension-position-text-(.*?)}/g, function(a,b){
							var ret = "???";
							var columnIndex = parseInt(b);
							if(rowIndex>-1){
								ret = that.flatData.rowHeaders2D[rowIndex][columnIndex];
							}
							return ret;
						});
						// Color Measure Value
						tt = tt.replace(/{colormeasure-value}/g, function(a,b){
							var ret;
							if(rowIndex>-1){
								ret = that.flatData.values[rowIndex][colorMeasureIndex];
							}
							return ret;
						});
						// Color Measure Formatted Value
						tt = tt.replace(/{colormeasure-formattedvalue}/g, function(a,b){
							var ret;
							if(rowIndex>-1){
								if(that.flatData.formattedValues && that.flatData.formattedValues.length>rowIndex){
									ret = that.flatData.formattedValues[rowIndex][colorMeasureIndex];	
								}else{
									ret = d3.format(",.2f")(that.flatData.values[rowIndex][colorMeasureIndex]);
								}
								
							}
							return ret;
						});
						// Color Measure Label
						tt = tt.replace(/{colormeasure-label}/g, function(a,b){
							var ret;
							ret = that.flatData.columnHeaders[colorMeasureIndex];
							return ret;
						});
						// Dimension Member Text by Label
						tt = tt.replace(/{dimension-key-text-(.*?)}/g, function(a,b){
							var ret = "???";
							var columnIndex = that.determineDimensionIndex({
								fieldType : "name",
								fieldName : b
							});
							if(rowIndex>-1){
								ret = that.flatData.rowHeaders2D[rowIndex][columnIndex];
							}
							return ret;
						});
						// Measure Value by Position
						tt = tt.replace(/{measure-position-value-(.*?)}/g, function(a,b){
							var ret = "???";
							var columnIndex = parseInt(b);
							if(rowIndex>-1){
								ret = that.flatData.values[rowIndex][columnIndex];
							}
							return ret;
						});
						// Measure Label by Position
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
						newMarker.setZIndexOffset(i);
						newMarker.bindPopup(tt);
						newMarker.addTo(newLayer);
					}
				}
				return newLayer;
			}
			if(markerConfig.markerType=="image"){
				var newLayer = L.featureGroup();
				var repoPath = this.repositoryPath() + "";
				var url = repoPath.replace(/REPOSITORY_ROOT.GIF/, markerConfig.image);
				var icon = L.icon({
					iconUrl: url,
					/*shadowUrl: 'leaf-shadow.png',
					
					iconSize:     [38, 95], // size of the icon
					shadowSize:   [50, 64], // size of the shadow
					iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
					shadowAnchor: [4, 62],  // the same for the shadow
					popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
				*/});
				for(var i=0;i<values.length;i++){
					var value = values[i];
					var newMarker = new L.marker([value.latitude, value.longitude], {
						icon : icon
					});
					newMarker.addTo(newLayer);
				}
				return newLayer
			}
			if(markerConfig.markerType=="clustered"){
				var newLayer = new L.MarkerClusterGroup({
					maxClusterRadius : markerConfig.maxClusterRadius || 80,
					zoomToBoundsOnClick : markerConfig.zoomToBoundsOnClick,
					showCoverageOnHover : markerConfig.showCoverageOnHover,
					disableClusteringAtZoom : markerConfig.disableClusteringAtZoom
				});
		    	for(var i=0;i<values.length;i++){
		    		var value = values[i];
		    		var newMarker = new L.Marker([value.latitude, value.longitude],{})
		    		newMarker.addTo(newLayer);
		    	}
				return newLayer;
			}
			if(markerConfig.markerType=="heat"){
				var newLayer = L.heatLayer([],{
		    		max : parseFloat(markerConfig.heatMax) || 1,
		    		minOpacity : parseFloat(markerConfig.heatMinOpacity),
					gradient : markerConfig.heatGradient || {".4":"blue",".6":"cyan",".7":"lime",".8":"yellow","1":"red"},
		    		radius : parseFloat(markerConfig.heatRadius) || 25,
		    		blur : parseFloat(markerConfig.heatBlur) || 15	
		    	});
				for(var i=0;i<values.length;i++){
					var value = values[i];
					newLayer.addLatLng(new L.LatLng(value.latitude,value.longitude,value.heatIntensity));
					
				}
				return newLayer;
			}
			var newLayer = L.featureGroup();
			
			
			return newLayer;
			Lmarker.on('mouseover', function(loc){return function(evt) {
			  //evt.target is the marker that is being moused over 
			  //bindPopup() does not need to be called here if it was already called
			  //somewhere else for this marker.
			  evt.target.bindPopup(loc).openPopup();
			};}(marker.title));
			/*
			marker.on('click', function(evt) {
			  //again, evt.target will contain the marker that was clicked
			  console.log('you clicked a marker');
			});
			*/
			Lmarker.addTo(this._map);
			alert(JSON.stringify(markerConfig));
		}
		/**
		 * Render a feature layer
		 */
		this.renderLayer = function(geoJSON, overlay){
			var layerConfig = overlay.layer.featureConfig;
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
						var style = that.createStyle(options);
						return style;
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
						// Feature Key
						tt = tt.replace(/{featurekey}/g, function(a,b){
							return feature.properties[layerConfig.map.featureKey]
						});
						// Feature Property
						tt = tt.replace(/{feature-(.*?)}/g, function(a,b){
							return feature.properties[b]
						});
						// Color Measure Value
						tt = tt.replace(/{colormeasure-value}/g, function(a,b){
							var ret;
							if(rowIndex>-1){
								ret = that.flatData.values[rowIndex][colorMeasureIndex];
							}
							return ret;
						});
						// Color Measure Formatted Value
						tt = tt.replace(/{colormeasure-formattedvalue}/g, function(a,b){
							var ret;
							if(rowIndex>-1){
								if(that.flatData.formattedValues && that.flatData.formattedValues.length>rowIndex){
									ret = that.flatData.formattedValues[rowIndex][colorMeasureIndex];	
								}else{
									ret = d3.format(",.2f")(that.flatData.values[rowIndex][colorMeasureIndex]);
								}
								
							}
							return ret;
						});
						// Color Measure Label
						tt = tt.replace(/{colormeasure-label}/g, function(a,b){
							var ret;
							ret = that.flatData.columnHeaders[colorMeasureIndex];
							return ret;
						});
						// Measure Value by Position
						tt = tt.replace(/{measure-position-value-(.*?)}/g, function(a,b){
							var ret = "???";
							var columnIndex = parseInt(b);
							if(rowIndex>-1){
								ret = that.flatData.values[rowIndex][columnIndex];
							}
							return ret;
						});
						// Measure Label by Position
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
				var url = tileConfig.baseUrl;
				var osPath = sap.zen.createStaticSdkMimeUrl("org.scn.community.shared","os")
				url = url.replace(/{os-dir}/g, osPath);
				var newTileLayer = L.tileLayer(url, tileConfig);
				this._controlLayer.addBaseLayer(newTileLayer, tileOptions[i].key);
				if(this.currentBaseLayer()==tileOptions[i].key || (!this.currentBaseLayer() && i==0)){
					newTileLayer.addTo(this._map);
				}
				// 
			}
			// Overlay Group
			this._featureLayer = L.featureGroup();
			for(var i=0;i<featureLayers.length;i++){
				var overlay = featureLayers[i];
				// WMS
				if(overlay && overlay.layer && overlay.layer.layerType=="wms"){
					var config = overlay.layer.wmsConfig;
					var aLayers = [];
					var aStyles = [];
					var layers = "";
					var styles = "";
					if(config && config.capabilities){
						for(var c=0;c<config.capabilities.length;c++){
							var cap = config.capabilities[c];
							if(cap.use) {
								aLayers.push(cap.name);
								aStyles.push(cap.style || "");
							}
						}
						layers = aLayers.join(",");
						styles = aStyles.join(",");
					}
					// WMS Layers
					var opacity = 1.0;
					if(!isNaN(parseFloat(config.opacity))) opacity = parseFloat(config.opacity);
					var newLayer = L.tileLayer.wms(
						config.baseUrl,
						{
							layers: layers,
							opacity : opacity,
							styles: styles,
						    format: 'image/png',
						    transparent: true,
						    attribution: config.attribution
						}
					);
					this._controlLayer.addOverlay(newLayer, overlay.key);
					if(overlay.visible) newLayer.addTo(that._featureLayer);
				}
				// FEATURE
				if(overlay && overlay.layer && overlay.layer.layerType=="feature" && overlay.layer.featureConfig){
					var layer = overlay.layer.featureConfig;
					if(layer && layer.map){
						var map = layer.map;
						if(map.mapType == "url"){
							var url = map.url;
							var osMapPath = sap.zen.createStaticSdkMimeUrl("org.scn.community.shared","os/maps")
							url = url.replace(/{os-maps}/g, osMapPath);
							url = url.replace(/{ds-maps}/g, "zen.rt.components.geomaps/resources/js/geo");
							this.loadResource(url, overlay);
						}
						if(map.mapType == "file"){
							var repoPath = this.repositoryPath() + "";
							var url = repoPath.replace(/REPOSITORY_ROOT.GIF/,map.file);
							this.loadResource(url, overlay);
						}
						if(map.mapType == "custom"){
							try{
								var newLayer = that.renderLayer(map.geoJSON, overlay);
								if(overlay.visible) newLayer.addTo(that._featureLayer);
								that._controlLayer.addOverlay(newLayer, overlay.key);
							}catch(e){
								alert("Bad Custom GeoJSON: " + e);
								// Bad GeoJSON
							}
						}						
					}
				}
				// MARKER
				if(overlay && overlay.layer && overlay.layer.layerType=="marker"){
					var newLayer = this.renderMarkerLayer(overlay.layer.markerConfig);
					if(overlay.visible) newLayer.addTo(that._featureLayer);
					that._controlLayer.addOverlay(newLayer, overlay.key);
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
		this.loadResource = function(url, overlay){
			var that = this;
			$.ajax({
				dataType : "json",
				url : url,
				success : function(overlay){return function(data){
					var newLayer = that.renderLayer(data, overlay);
					if(overlay.visible) newLayer.addTo(that._featureLayer);
					that._controlLayer.addOverlay(newLayer, overlay.key);							
				};}(overlay),
				fail : function(jqxhr, textStatus, error){
					alert(error);
				}
			});
		};
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
		this.createMap = function(){
			if(this._map) this._map.remove();
			var crs = L.CRS.EPSG3857;
			if(this.crs()){
				crs = L.CRS[this.crs()];
			}
			this._map = new L.Map(this._mapContainer.get(0), {
				attributionControl : false,
				zoomControl : !this._designTime,
				maxBounds:[L.latLng(-85.0511,-180),L.latLng(85.0511,180)],
				crs : crs
			});
		}
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
				this.createMap();
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