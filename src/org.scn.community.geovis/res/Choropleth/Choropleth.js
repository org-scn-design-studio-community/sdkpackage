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
			 // Map Cache
			 this.mapCache = {};
			 // Design Studio Autoproperties
			 this.props = {
				defaultFillColor : { value : "#EFEFEF" },
				projection : { value : "mercator" },
				colorOn :  { value : true },
				labelsOn :  { value : true },
				tooltipOn :  { value : true },
				legendOn :  { value : true },
				globeOn :  { value : true },
				legendWidth :  { value : 0 },
				legendX : { value : 0},
				legendY : { value : 0},
				graticuleOn :  { value : true },
				legendScale :  { value : 1 },
				labelSize :  { value : "10px" },
				legendTitle :  { value : "Legend Title" },
				canvasDragOn :  { value : true },
				mapDragOn :  { value : false },
				colorSet : { value : "Spectral" },
				colorReverse :  { value : false },
				colorProperty :  { value : "POP2005" },
				colorPalette :  { value : "#EFEFEF,#C0C0C0,#808080" },
				propertyMapping : { value : "XYZ"},
				labelProperty : { value : "name"},
				colorScale : { value : "quantile" },
				map : { value : "world-countries" },
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
								if(flatData && flatData.hash && flatData.hash[currentPropertyValue] != undefined){
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
				var brew = this.colorPalette().split(",");
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
				var shapes = paths.enter()
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
				// Labels
				paths.enter()
					.append('text')
					.attr('class', function(d) { return "subunit-label " + d.id; })
					.attr("transform", function(d) { return "translate(" + that.projPath.centroid(d) + ")"; })
					.attr("dy", ".35em")
					.style("font-size", that.labelSize())
					.text(function(d) { return d.properties[that.labelProperty()]; });
					
				shapes.attr('fill', function(d) {
					if (!that.colorOn()) {
						return that.defaultFillColor();
					} else {
						if(d.properties.designStudioMeasures){
							return that.colorRange(d.properties.designStudioMeasures[that.colorProperty()]) || that.defaultFillColor();	
						}else{
							return that.defaultFillColor();
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
			    var formatter = d3.format(',.2f');			// Make a DS property
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