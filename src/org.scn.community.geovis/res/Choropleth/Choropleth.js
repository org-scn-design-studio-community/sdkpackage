/**
 * Copyright 2014 - 2015 SCN Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/org-scn-design-studio-community/sdkpackage/
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 *  
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */;
 /** code for recognition of script path */
 (function() {
	 var myScript = $("script:last")[0].src;
 	_readScriptPath = function () {
 		if(myScript) {
 			var myScriptSuffix = "res/Choropleth/";
 			var myPluginSuffix = "org.scn.community.geovis/";
 			var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 			var mainSDKPathIndex = myScript.indexOf(myPluginSuffix);
 			var mainSDKPath = myScript.substring(0, mainSDKPathIndex);
 			var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 			return {
 				myScriptPath : ownScriptPath,	// http://localhost:9091/aad/zen/mimes/sdk_include/org.scn.community.geovis/res/Choropleth/
 				mainSDKPath : mainSDKPath		// http://localhost:9091/aad/zen/mimes/sdk_include/
 			};
 		}
 		return "";
 };
 /** end of recognition of script path */
 /** RequireJS Config **/
 var pathInfo = _readScriptPath();
 sap.zen.Dispatcher.instance.pauseDispatching();
 var sdkReqs = require.config({
	 context : "sdk",
	 paths: {
		d3:  pathInfo.mainSDKPath + "org.scn.community.geovis/os/d3/d3.min",
		topojson : pathInfo.mainSDKPath + "org.scn.community.geovis/os/d3/topojson"
	},
	shim : {
		d3 : {
			// exports : "d3"
		},
		topojson : {
			deps : ["d3"],
			exports : "topojson"
		}
	}
 });
 sdkReqs(["require","d3","topojson"], function(require, d3, topojson) {
		 /**
		  * Choropleth Map
		  */
		 sap.designstudio.sdk.Component.subclass("org.scn.community.geovis.Choropleth",function() {
			 // https://github.com/gka/chroma.js/blob/master/src/colors/colorbrewer.coffee
			 // Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The Pennsylvania State University.
			 // Licensed under the Apache License, Version 2.0
			 this.colorBrewer = {
			    OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
			    PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
			    BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
			    Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
			    BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
			    YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
			    YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
			    Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
			    RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
			    Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
			    YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
			    Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
			    GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
			    Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
			    YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
			    PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
			    Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
			    PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
			    // diverging
			    Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
			    RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
			    RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
			    PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
			    PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
			    RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
			    BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
			    RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
			    PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
			    // qualitative
			    Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
			    Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
			    Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
			    Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
			    Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
			    Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
			    Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
			    Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
			  };
			 // Map Cache
			 this.mapCache = {};
			 // Design Studio Autoproperties
			 this.props = {
				projection : { value : "mercator" },
				colorOn :  { value : true },
				tooltipOn :  { value : true },
				legendOn :  { value : true },
				globeOn :  { value : true },
				legendWidth :  { value : 0 },
				legendX : { value : 0},
				legendY : { value : 0},
				graticuleOn :  { value : true },
				legendScale :  { value : 1 },
				legendTitle :  { value : "Legend Title" },
				canvasDragOn :  { value : true },
				mapDragOn :  { value : false },
				colorSet : { value : "Spectral" },
				colorReverse :  { value : false },
				colorProperty :  { value : "POP2005" },
				propertyMapping : { value : "XYZ"},
				colorScale : { value : "quantile" },
				map : { value : "countries" },
				mapX : { value : 0 },
				mapY : { value : 0 },
				externalMap : { value : "http://code.minnpost.com/simple-map-d3/example-data/europe-population-density-geocommons.geo.json" },
				center : { value : "0,0" },
				scale : { value : 150 },
				rotationX : { value : 0.0 },
				rotationY : { value : 0.0 },
				rotationZ : { value : 0.0 },
				selectedFeature : { value : "x"}
			};
			/*
			 * Create the aforementioned getter/setter and attach to 'this'.
			 */
			for(var property in this.props){
				this[property] = function(property){
					return function(value){
						if(value===undefined){
							return this.props[property].value;
						}else{
							this.props[property].value = value;
							this.props[property].changed = true;
							return this;
						}
					};
				}(property);
			}
			/**
			 * @param value Design Studio ResultSet JSON Structure
			 * @return If value is undefined, returns data, else returns reference to itself.
			 */
			this.data = function(value) {
				if (value === undefined) {
					return _data;
				} else {
					_data = value;
					return this;
				}
			};
			/**
			 * Convert any TopoJSON data into GeoJSON
			 */
			this.processMapData = function(mapData) {
			    //var o = smd.options.topojsonObject;
			    var obj;
			    var returnObject = mapData;		// Assume GeoJSON
			    if (mapData.type.toLowerCase() === 'topology' && typeof topojson != 'undefined') {
			    	// Use first object found if object not defined
			    	//if (typeof o == 'undefined') {
			        for (var o in mapData.objects) {
			          if (mapData.objects.hasOwnProperty(o)) {
			            obj = mapData.objects[o];
			            break;
			          }
			        }
			      //}
			      returnObject = topojson.feature(mapData, mapData.objects[o]);
			    }
			    return returnObject;
			};
			this.setSelectedFeature = function(o){
				//this.selectedFeature(JSON.stringify(o));
				this.firePropertiesChanged(["selectedFeature"]);
				this.fireEvent("onSelect");
			};
			/*
			 * This adds flattened Design Studio Data to the GeoJSON under a property called 'designStudioMeasures'
			 */
			this.applyMeasures = function(mapData,flatData){
				try{
					if(mapData && mapData.features && mapData.features.length > 0){
						var propertyName = this.propertyMapping();
						for(var featureIndex = 0;featureIndex<mapData.features.length;featureIndex++){
							var feature = mapData.features[featureIndex];
							var match = false;
							if(feature.properties && feature.properties[propertyName]){
								var currentPropertyValue = feature.properties[propertyName];
								if(flatData.hash[currentPropertyValue] != undefined){
									var rowIndex = flatData.hash[currentPropertyValue];
									var measures = {};
									for (var i=0;i<flatData.columnHeaders.length;i++){
										measures[flatData.columnHeaders[i]] = flatData.values[rowIndex][i];
									}
									//alert("Match found on " + rowIndex + currentPropertyValue + "\n\nAttaching " + JSON.stringify(measures));
									feature.properties.designStudioMeasures = measures;
								}else{
									feature.properties.designStudioMeasures = {};
									
								}
							}
						}
					}
				}catch(e){
					throw("A problem was encountered while applying data to map:\n\n" + e);
				}
			};
			this.redraw = function(){
				// Flatten Data
				var flatData;
				var that = this;
				var mapData = this.loadMap(this.map());
				var brew = this.colorBrewer[this.colorSet()];
				var vals = [];
				try{
					flatData = org_scn_community_databound.flatten(this.data(),{});
					if(flatData && flatData.formattedValues && flatData.formattedValues.length > 0) {
						vals = flatData.formattedValues.slice();
					}else if(flatData && flatData.values && flatData.values.length > 0){
						vals = flatData.values.slice();
					}else{
						// Something happened.
						throw("No formatted or unformatted values found.");
					}
				}catch(e){
					var errorMessage = e;
				}
				this.applyMeasures(mapData,flatData);
				this.$().empty();
		    	this.$().css("overflow","hidden");
		    	var width = this.$().width();
		    	var height = this.$().height();
		    	this.container = d3.select("#"+this.$().attr("id"));
		    	// Render Canvas
		    	this.canvas = this.container.append('svg')
		    		.attr('width', width)
		    		.attr('height', height)
		    		.attr('class', 'canvas')
		    		.classed('draggable', this.canvasDragOn())
		    		.classed('tooltipped', this.tooltipOn())
		    		.data([{ x: 0, y: 0 }]);
    
		    	this.background = this.canvas.append('rect')
		    		.attr('width', width)
		    		.attr('height', height)
		    		.classed('background', true);
		    		//.style(smd.options.stylesBackground);
    
		    	this.draggableMapGroup = this.canvas.append('g')
		    		.attr('class', 'draggable-map-group')
		    		.data([{ x: this.mapX() - 1, y: this.mapY() - 1 }])
		    		.attr('transform', 'translate(' + [this.mapX(),this.mapY()] + ')');
    
		    	this.featureGroup = this.draggableMapGroup.append('g')
		    		.attr('class', 'feature-group');
    
		    	// Add tooltip
		    	if (this.tooltipOn()) {
		    		this.container.classed('tooltip-container', true);
		    		this.container.append('div').classed('tooltip', true);
		    	}
		    	// PROJECTION
		    	this.centroid = d3.geo.centroid(mapData);
		    	this.proj = d3.geo[this.projection()]()
		    		.scale(1000)
		    		.translate([width/2, height /2]);
		    	// Center when possible
		    	if(typeof this.proj.center === "function"){
		    		this.proj.center(this.centroid);
		    	}
		    	// Rotate if possible
		    	if (typeof this.proj.rotate === "function") {
		    	    this.proj.rotate([this.rotationX(),this.rotationY(),this.rotationZ()]);
		    	}
		    	this.projPath = d3.geo.path().projection(this.proj);
		    	// END OF PROJECTION
		    	// COLOR RANGE
		        var d, domain;
		        this.valuesSet = [];
		        if (this.colorOn()) {
		        	// Get values for range
			        for (d = 0; d < mapData.features.length; d++) {
		        		if(mapData.features[d].properties.designStudioMeasures){
		        			this.valuesSet.push(parseFloat(mapData.features[d].properties.designStudioMeasures[this.colorProperty()]));	
		        		}else{
		        			this.valuesSet.push(null);
		        		}
			        				        		
			        }
			        this.valuesSet.sort(function(a, b) { return a - b; });
			        // Make range with appropriate values
			        this.colorRange = d3.scale[this.colorScale()]()
			          .domain(this.valuesSet)
			          .range(brew);
			        // Clamp if can
			        if (typeof this.colorRange.clamp == 'function') {
			          this.colorRange.clamp(true);
			        }
		        }
		        // END OF COLOR RANGE
		        // GLOBE
		        if (this.globeOn()) {
		        	this.globe = this.featureGroup.append('path')
		            	.datum({ type: 'Sphere' })
		            	.attr('class', 'globe')
		            	.attr('d', this.projPath);
		            	//.style(smd.options.stylesGlobe);    
		        }
		        // END OF GLOBE
		        // GRATICULE
		        if (this.graticuleOn()) {
		          this.graticule = d3.geo.graticule();
		          this.featureGroup.append('path')
		            .datum(this.graticule)
		            .attr('d', this.projPath)
		            .attr('class', 'graticule');
		            //.style(smd.options.stylesGraticule);
		        }
		    	// MAP
				var paths = this.featureGroup.selectAll('path').data(mapData.features);
				paths.enter()
					.append('path')
						.attr('d', this.projPath)
						.attr('class', 'path')
						//.style(smd.options.styles)
						.on('mouseover', function(d) {
							// Tooltip
							if (that.tooltipOn()) {
								that.container.select('.simple-map-d3-tooltip')
									.style('display', 'block')
									//.html(smd.options.tooltipContent(d));
							}
			
							// Styles
							// d3.select(this).style(smd.options.stylesHover);
						})
						.on('mouseout', function(d) {
							// 	Tooltip
							if (that.tooltipOn()) {
								that.container.select('.simple-map-d3-tooltip')
									.style('display', 'none');
							}
							// Styles
							// d3.select(this).style(smd.options.styles);
						})
						.on('click', function(d){ 
							that.setSelectedFeature(d);
						});
				paths.attr('fill', function(d) {
					if (!that.colorOn()) {
						return "#EFEFEF";
					} else {
						if(d.properties.designStudioMeasures){
							return that.colorRange(d.properties.designStudioMeasures[that.colorProperty()]);	
						}else{
							return undefined;
						}
						
					}
				})
				//FIT
				var b = this.bounds = this.projPath.bounds(mapData);

			    this.featureGroup.attr('transform',
			      'translate(' + this.proj.translate() + ') ' + 
			      'scale(' + 0.95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height) + ') ' +
			      'translate(' + -(b[1][0] + b[0][0]) / 2 + ',' + -(b[1][1] + b[0][1]) / 2 + ')');
		    	// LEGEND
			    var qs;
			    var formatter = d3.format(',');			// Make a DS property
			    var unit = 10;
			    var lwidth = this.legendWidth() || (width / 5);
			    var scale = this.legendScale() || 1;
			    var min = d3.min(this.valuesSet);
			    var max = d3.max(this.valuesSet);
			    var offset = [this.legendX(),this.legendY()];
			    var legendSwatches = [];
			    var c;
			    
			    // Make sure legend is on
			    if (this.legendOn() && this.colorRange) {
				    if (this.colorScale() == 'quantile') {
				      legendSwatches = this.colorRange.quantiles();
				      legendSwatches[0] = min;
				    }
				    if (this.colorScale() === 'quantize') {
				      for (c = 0; c < brew.length; c++) {
				        legendSwatches.push(this.colorRange.invertExtent(brew[c])[0]);
				      }
				    }
				    // Ensure we have something to make a legend with
				    if (legendSwatches && legendSwatches.length > 0) {
					  
					    
					      // Make a wrapper for dragging
					      this.draggableLegendGroup = this.canvas.append('g')
					        .attr('class', 'draggable-legend');
					    
					      // Make group for legend objects
					      this.legendGroup = this.draggableLegendGroup.append('g')
					        .attr('class', 'legend-group');
					      
					      // Make container and label for legend
					      this.legendGroup.append('rect')
					        .attr('class', 'legend-container')
					        .attr('width', lwidth)
					        .attr('height', legendSwatches.length * (unit * 2) + (unit * 3))
					        .attr('x', 0)
					        .attr('y', 0);
					        //.style(smd.options.stylesLegendContainer);
					      this.legendGroup.append('text')
					        .attr('class', 'legend-label')
					        .attr('font-size', unit)
					        .attr('x', (unit * 1))
					        .attr('y', (unit * 2))
					        .text(this.legendTitle());
					        //.style(smd.options.stylesLegendTitleText);
					      
					      // Add colors swatches
					      this.legendGroup
					        .selectAll('rect.legend-swatch')
					          .data(legendSwatches)
					        .enter().append('rect')
					          .attr('class', 'legend-swatch')
					          .attr('width', unit)
					          .attr('height', unit)
					          .attr('x', (unit * 1))
					          .attr('y', function(d, i) { return (i * unit * 2) + (unit * 3); })
					          //.style(smd.options.stylesLegendSwatch)
					          .style('fill', function(d, i) { return that.colorRange(d); });
					          
					      // Add text label
					      this.legendGroup
					        .selectAll('text.legend-amount')
					          .data(legendSwatches)
					        .enter().append('text')
					          .attr('class', 'legend-amount')
					          .attr('font-size', unit)
					          .attr('x', (unit * 3))
					          .attr('y', function(d, i) { return (i * unit * 2) + (unit * 4 - 1); })
					          .text(function(d, i) { return '>= ' + formatter(d); });
					          //.style(smd.options.stylesLegendText);
					      
					      // Scale legend
					      this.legendGroup
					        .attr('transform', 'scale(' + scale + ')');
					        
					      // Offset group for dragging
					      this.draggableLegendGroup
					        .attr('transform', 'translate(' + offset + ')')
					        .data([{ x: offset[0] - 1, y: offset[1] - 1 }]);
					    
				    }
			    }
			};
			this.loadMap = function(mapFile){
				var mapURL = pathInfo.myScriptPath + 'maps/' + mapFile + ".json";
				if(mapFile=="external") {
					mapFile = this.externalMap();
					mapURL = this.externalMap();
				}
				if(this.mapCache[mapURL]) return this.mapCache[mapURL].features;
				this.mapCache[mapURL] = {
					fileName : mapFile,
					features : {}
				}
				try{
					var featureJSON = $.ajax({
						async : false,
						type : "GET",
						url : mapURL
					}).responseText;
					this.mapCache[mapURL].mapData = jQuery.parseJSON(featureJSON);
					this.mapCache[mapURL].features = this.processMapData(this.mapCache[mapURL].mapData);
					//alert(JSON.stringify(this.mapCache[mapURL].features));
				}catch(e){
					throw("Error loading map:\n\nFile:" + mapURL + "\n\n" + e);
				}
				return this.mapCache[mapURL].features;
			}
			this.init = function() {
				this.$().addClass("DesignStudioSCN");
				this.$().addClass("Choropleth");
				try{
					this.redraw();
				}catch(e){
					this.$().html("Error in init:\n\n" + e);
				}
			};
			
			this.afterUpdate = function() {
				this.redraw();
			};
		 });
		 // End of SDK
		 sap.zen.Dispatcher.instance.resumeDispatching();
	});
 // End of Require d3+topo Callback
})();
 // End of closure