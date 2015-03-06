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
 	var _readScriptPath = function () {
 		if(myScript) {
 			var myScriptSuffix = "res/Choropleth/";
 			var myPluginSuffix = "org.scn.community.databound/";
 			var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 			var mainSDKPathIndex = myScript.indexOf(myPluginSuffix);
 			var mainSDKPath = myScript.substring(0, mainSDKPathIndex);
 			var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 			return {
 				myScriptPath : ownScriptPath,	// http://localhost:9091/aad/zen/mimes/sdk_include/org.scn.community.databound/res/Choropleth/
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
		d3:  pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3.min",
		topojson : pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/topojson.v1.min"
	}
 });
sdkReqs(["require","d3","topojson"], function(require, d3, topojson) {
		 /**
		  * Choropleth Map
		  */
		 sap.designstudio.sdk.Component.subclass("org.scn.community.databound.Choropleth",function() {
			 var that = this;
			 // Map Cache
			 this.mapCache = {};
			 // Design Studio Autoproperties
			 this.props = {
				styleClasses : { value : ""},
				selectedFeature : { value : ""},
				selectedColor : { value : ""},
				hoverColor : { value : ""},
				centerFeature : { value : ""},
				featureProperty : { value : "NAME_1"},
				labelProperty : { value : "NAME_1"},
				measureMember :  { value : "" },
				ms :  { value : 750 },
				floor :  { value : 0 },
				defaultFillColor : { value : "#E5EADE" },
				backgroundColor : { value : "transparent" },
				projection : { value : "mercator" },
				tooltipOn :  { value : true },
				legendOn :  { value : true },
				globeOn :  { value : true },
				graticuleOn :  { value : true },
				makeRoomX :  { value : true },
				legendWidth :  { value : 0 },
				legendX : { value : 0},
				legendY : { value : 0},
				legendScale : { value : 1},
				gradientLeft : { value : 30 },
				gradientRight : { value : 30 },
				gradientBottom :  { value : 15 },
				gradientHeight :  { value : 10 },
				labelSize :  { value : "10px" },
				legendTitle :  { value : "" },
				colorPalette :  { value : "#F0F9E8,#CCEBC5,#A8DDB5,#7BCCC4,#43A2CA,#0868AC" },
				colorScale : { value : "quantile" },
				mapData : { value : "" },
				mapLeft : { value : 0 },
				mapTop : { value : 0 },
				mapRight : { value : 0 },
				mapBottom : { value : 0 },
				center : { value : "0,0" },
				scale : { value : 150 },
				yaw : { value : 0.0 },
				pitch : { value : 0.0 },
				roll : { value : 0.0 }
				
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
							if(this.props[property].onChange) {
								this.props[property].onChange.call(this,"Property Change");
							}
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
					return this._data;
				} else {
					this._data = value;
					return this;
				}
			};
			/**
			 * Convert any TopoJSON data into GeoJSON
			 */
			this.processMapData = function(mapData) {
			    var obj;
			    var returnObject = mapData;		// Assume GeoJSON
			    if (mapData && mapData.type && mapData.type.toLowerCase() === 'topology' && typeof topojson != 'undefined') {
			    	// Use first object found if object not defined
			        for (var o in mapData.objects) {
			          if (mapData.objects.hasOwnProperty(o)) {
			            obj = mapData.objects[o];
			            break;
			          }
			        }
			      returnObject = topojson.feature(mapData, obj);
			    }
			    return returnObject;
			};
			this.setSelectedFeature = function(d){				
				if(d.properties && d.properties[this.featureProperty()]) {
					if(d.properties[this.featureProperty()]==this.selectedFeature()){
						this.selectedFeature("");
					}else{
						this.selectedFeature(d.properties[this.featureProperty()]);	
					}
					this.firePropertiesChanged(["selectedFeature"]);
					this.fireEvent("onSelect");
				}
			};
			/*
			 * This adds flattened Design Studio Data to the GeoJSON under a property called 'designStudioMeasures'
			 */
			this.applyMeasures = function(mapData,flatData){
				try{
					if(mapData && mapData.features && mapData.features.length > 0){
						var propertyName = this.featureProperty();
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
							}else{
								feature.properties.designStudioMeasures = {};
							}
						}
					}
				}catch(e){
					throw("A problem was encountered while applying data to map:\n\n" + e);
				}
			};
			/**
			 * Update Features
			 */
			this.updateFeaturePaths = function(){
				// Data
				var features = this.pathGroup.selectAll('path').data(this._mapJSON.features);
				var labels = this.labelGroup.selectAll('text').data(this._mapJSON.features);
				// Enter
				var newFeatures = features.enter().append("path")
					.attr("class","path");
				
				var newLabels = labels.enter().append("text")
					.attr('class', function(d) { return "subunit-label " + d.id; })
					.attr("pointer-events", "none")
					.attr("transform", function(d) { return "translate(" + that.projPath.centroid(d) + ")"; })
					.attr("dy", ".35em")
					.style("font-size", that.labelSize())
					.text(function(d) { return d.properties[that.labelProperty()]; });

				// Update graticule
	    		this.graticulePath
	    			.transition().duration(this.ms())
	    			.attr('opacity', function(){ if(that.graticuleOn()){
	    				return 1;
	    			}else{
	    				return 0;
	    			}})
            		.attr('d', this.projPath);
	    		// Update globe
	    		this.globePath
	    			.transition().duration(this.ms())
	    			.attr('opacity', function(){ if(that.globeOn()){
	    				return 1;
	    			}else{
	    				return 0;
	    			}})
        			.attr('d', this.projPath);
				// Update features
				this.pathGroup.selectAll("path")
					.transition().duration(this.ms())
					.attr("class","path")
					.attr("d",this.projPath)
					.attr("fill", function(d) {
						if(d.properties && d.properties && d.properties[that.featureProperty()]){
							if(d.properties[that.featureProperty()]==that.selectedFeature() && that.selectedColor()) return that.selectedColor();
						}
						if(d.properties && d.properties.designStudioMeasures){
							var mm = that.measureMember();
							if(!mm){
								if(that._flatData && that._flatData.columnHeaders && that._flatData.columnHeaders.length > 1) mm = that._flatData.columnHeaders[0];
							}
							return that.colorRange(d.properties.designStudioMeasures[mm]) || that.defaultFillColor();	
						}else{
							return that.defaultFillColor();
						}
					});
				this.labelGroup.selectAll("text")
					.style("font-size", that.labelSize())	
					.transition().duration(this.ms())
					.attr('class', function(d) { return "subunit-label " + d.id; })
					.attr("transform", function(d) { return "translate(" + that.projPath.centroid(d) + ")"; })
					.text(function(d) { return d.properties[that.labelProperty()]; });
				// Events
				this.pathGroup.selectAll('path')
					.on('mouseover', this.doTooltip)
					.on('mouseout', function() {
						that.lastHover = null;
						/*d3.select(this).attr("fill", function(d) {
							// Color back
							if(d.properties && d.properties && d.properties[that.featureProperty()]){
								if(d.properties[that.featureProperty()]==that.lastHover) return that.hoverColor();
								if(d.properties[that.featureProperty()]==that.selectedFeature()) return that.selectedColor();
							}
							if(d.properties && d.properties.designStudioMeasures){
								var mm = that.measureMember();
								if(!mm){
									if(that._flatData && that._flatData.columnHeaders && that._flatData.columnHeaders.length > 1) mm = that._flatData.columnHeaders[0];
								}
								return that.colorRange(d.properties.designStudioMeasures[mm]) || that.defaultFillColor();	
							}else{
								return that.defaultFillColor();
							}
						});*/
						that.triangle
							.transition().duration(that.ms())
							.attr("opacity",0);
						that.container.select('.tooltip').style('display', 'none');
					})
					.on('click', function(d){ 
						d3.select(this)
							.transition().duration(that.ms())
							.attr("fill",that.selectedColor());
						that.setSelectedFeature(d);
						that.updateTriangles();
					});
				this.labelGroup.selectAll("text")
					.on('mouseover', this.doTooltip);
				// Exit
				 features.exit().remove();
				 labels.exit().remove();
				return this;
			}
			/**
			 * Update Cosmetics
			 */
			this.updateCosmetics = function(){
				this.canvas
		    		.transition().duration(this.ms())
		    		.attr('width', this.dimensions.width)
		    		.attr('height', this.dimensions.height)
		    		.attr('class', 'canvas');
	    	
		    	this.canvas
		    		.classed('tooltipped', this.tooltipOn())
		    		.data([{ x: 0, y: 0 }]);

		    	this.background
		    		.transition().duration(this.ms())
		    		.style("fill",this.backgroundColor())
		    		.attr('width', this.dimensions.width)
		    		.attr('height', this.dimensions.height);
		    	
		    	this.messageRect
			    	.transition().duration(this.ms())	
			    	.attr("width",this.dimensions.width)
			    	.attr("height",this.dimensions.height);
		    	
		    	this.tooltipDiv.attr("class","tooltip")
    			this.legendRect.attr('class', "legend-container")
		    	
		    	/*
		    	this.gradientRect
		    		.transition().duration(this.ms())
		    		.attr("x",this.dimensions.gradientLeft)
		    		.attr("y", this.dimensions.height - this.dimensions.gradientBottom - this.dimensions.gradientHeight)
		    		.attr('width', this.dimensions.width - this.dimensions.gradientLeft - this.dimensions.gradientRight)
		    		.attr('height', this.dimensions.gradientHeight);
		    	*/
		    	var legend2Transform = this.dimensions.gradientLeft + "," + (this.dimensions.height - this.dimensions.gradientBottom - this.dimensions.gradientHeight);
		    	this.legend2
		    		.transition().duration(this.ms())
		    		.attr("transform", "translate(" + legend2Transform +")");
		    	
		    	this.triangle
		    		.transition().duration(this.ms())
		    		.attr("fill",that.hoverColor())
		    		.attr("d","M-"+this.gradientHeight()/2+" 0 L"+this.gradientHeight()/2+" 0 L 0 "+this.gradientHeight()/2+" Z")
		    		.attr("transform", "translate(0,"+(0-this.dimensions.gradientHeight)+")");
		    	
		    	var trans = "0," + (0 - this.dimensions.gradientHeight);
		    	this.gradientTicks
		    		.transition().duration(this.ms())
		    		.attr("transform", "translate(" + trans +")");
		    	
		    	this.legendGroup//.data([{ x: this.dimensions.legendLeft - 1, y: this.dimensions.legendY - 1 }])
	    			.transition().duration(this.ms())
    				.attr("transform", "translate("+this.dimensions.legendLeft+","+this.dimensions.legendTop+") "+
    					  "scale(" + this.legendScale() + ")")
    				.attr("opacity", function(){
    					if(that.legendOn()){
    						return 1;
    					}else{
    						return 0;
    					}
    				});
		    	this.featureGroup
		    		.transition().duration(this.ms())
	    			.attr("transform", "translate("+this.dimensions.mapLeft+","+this.dimensions.mapTop+")")
		    		.attr('width', this.dimensions.mapWidth)
	    			.attr('height', this.dimensions.mapHeight);
		    	
		    	return this;
			}
			/**
			 * Update Color Range
			 */
			this.updateColorRange = function(){
		        var d, domain;
		        this.valuesSet = [this.floor()];
	        	// Get values for range
		        for (d = 0; d < this._mapJSON.features.length; d++) {
	        		if(this._mapJSON.features[d].properties.designStudioMeasures){
	        			var mm = that.measureMember();
						if(!mm){
							if(that._flatData && that._flatData.columnHeaders && that._flatData.columnHeaders.length > 1) mm = that._flatData.columnHeaders[0];
						}
	        			this.valuesSet.push(parseFloat(this._mapJSON.features[d].properties.designStudioMeasures[mm]));	
	        		}else{
	        			this.valuesSet.push(null);
	        		}
		        }
		        this.valuesSet.sort(function(a, b) { return a - b; });
		        // Make range with appropriate values
		        var cp = [];
		        if(this.colorPalette()!="") cp = this.colorPalette().split(",");
		        this.colorRange = d3.scale[this.colorScale()]()
		        	.domain(this.valuesSet)
		        	.range(cp);
		        // Clamp if can
		        if (typeof this.colorRange.clamp == 'function') {
		        	this.colorRange.clamp(true);
		        }
		        
		        	
		        return this;
			};
			/**
			 * Update Legend
			 */
			this.updateLegend = function(){
				// LEGEND
			    var unit = 10;								// Swatch Size
			    var min = d3.min(this.valuesSet);
			    var max = d3.max(this.valuesSet);
			    var legendSwatches = [];
			    var gradientStops = [];
			    var c = this.colorPalette();
			    if(c!="") gradientStops = c.split(","); 
			    var extents = [];
			    if (this.colorScale() == 'quantile') {
			    	legendSwatches = this.colorRange.quantiles();
			    }
				if (this.colorScale() === 'quantize') {
					for (var i=0; i < gradientStops.length; i++) {
						legendSwatches.push(this.colorRange.invertExtent(gradientStops[i])[0]);
					}
				}
				for(var i=0;i<gradientStops.length;i++){
		    		// Push min in 1st position?
		    		extents.push({
		    			min : this.colorRange.invertExtent(gradientStops[i])[0],	// Returns array of [min,max] per quantile "bucket"
		    			max : this.colorRange.invertExtent(gradientStops[i])[1],
		    		});
		    	}

				/**
				 * https://github.com/mbostock/d3/wiki/Quantitative-Scales
				 * legendSwatches - [100,150,1500,2000] // Comes from colorRange.quantiles
				 * gradientStop   - [#009966,#000000]
				 * invertExtent(index) - [min,max] of quantile bucket
				 * 
				 */
				
				//Ensure we have something to make a legend with
				if (legendSwatches && legendSwatches.length > 0) {
			        var scale = d3.scale.linear()
			        	.range([0,1])
			        	.domain([min,max]);
			        
			        this.tickScale = d3.scale.linear()
		        		.range([0,this.dimensions.gradientWidth])
		        		.domain([min,max]);
			        		        
			        var tickValueScale = d3.scale.ordinal()
	        			.rangePoints([0,this.dimensions.gradientWidth])
	        			.domain(legendSwatches);
			        
			        var rects = this.legendGroup.selectAll('rect.legend-swatch').data(extents);
			        var rects2 = this.gradientRects.selectAll("rect").data(extents);
			        var ticks = this.gradientTicks.selectAll("line").data(extents);
			        var tickLabels = this.gradientTicks.selectAll("text").data(extents);
					var legendLabels = this.legendGroup.selectAll('text.legend-amount').data(extents);
					
			        rects2.enter().append("rect");
			        /*
			         * Too cluttered
			        ticks.enter().append("line")
			        	.attr("stroke-width", 1)
			        	.attr("stroke", "black");
			        
			        tickLabels.enter().append('text')
						.attr('class', 'tick-label')
						.attr("dy", "0em")
						.attr("y",-5)
						.style("text-anchor", "middle")
						.style("font-size", "8pt")
						.text(function(d) { return that.formatter(d); });
			        */
			        rects2.exit().remove();
			        ticks.exit().remove();
					tickLabels.exit().remove();
					
			        // Make Solid
					/*this.gradientDef.selectAll("stop")
			        	.transition().duration(this.ms())
			        	.attr("offset",function(d){return scale(d) * 100 + "%";})
			        	.attr("stop-color",function(d){return that.colorRange(d);})
			        	.attr("stop-opacity",1);
			        */

					this.gradientRects.selectAll("rect")
						.transition().duration(this.ms())
			        	.attr("x",function(d){return that.tickScale(d.min);})
			        	.attr("width",function(d){return that.tickScale(d.max) - that.tickScale(d.min);})
			        	.attr("y",0)
			        	.attr("height",this.dimensions.gradientHeight)
			        	.attr("fill",function(d){return that.colorRange(d.min);});
			        
			        this.gradientTicks.selectAll("line")
			        	.transition().duration(this.ms())
			        	.attr("x1",function(d){return that.tickScale(d.min);})
			        	.attr("x2",function(d){return that.tickScale(d.min);})
			        	.attr("y1",0).attr("y2",this.dimensions.gradientHeight)
					
			        this.gradientTicks.selectAll("text")
						.transition().duration(this.ms())
						.attr("x",function(d){return that.tickScale(d.min);})
						.text(function(d) { return that.formatter(d.min); });
					
					/**
					 * LEGEND
					 */
					this.legendRect
			    		.transition().duration(this.ms())
    					.attr('width', this.dimensions.legendWidth)
    					.attr('height', extents.length * (unit * 2) + (unit * 3));
			    	this.legendLabel
			    		.transition().duration(this.ms())	
			    		.attr('font-size', unit)
				        .attr('x', (unit * 1))
				        .attr('y', (unit * 2))
				        .text(function(){
				        	var mm = that.measureMember();
							if(!mm){
								if(that._flatData && that._flatData.columnHeaders && that._flatData.columnHeaders.length > 1) mm = that._flatData.columnHeaders[0];
							}
				        	if(that.legendTitle()=="") {
				        		return mm || "No Measure Found";
				        	}else{
				        		return that.legendTitle();
				        	}
				        });
					// Add colors swatches
					
					
					// Enter Color Swatches
					rects.enter().append('rect')
						.attr('class', 'legend-swatch');
						
					// Exit Color Swatches
					rects.exit().remove();

					// Update Color Swatches
					this.legendGroup.selectAll('rect.legend-swatch')
						.transition().duration(this.ms())  
						.attr('width', unit)
						.attr('height', unit)
						.attr('x', (unit * 1))
						.attr('y', function(d, i) { return (i * unit * 2) + (unit * 3); })
						.style('fill', function(d, i) { return that.colorRange(d.min); });
					
					// Enter swatch labels
					legendLabels.enter().append('text').attr('class', 'legend-amount');
					// Exit swatch labels
					legendLabels.exit().remove();
					// Update - why doesn't text update here, or does it?
					
					this.legendGroup.selectAll('text.legend-amount')
						.transition().duration(this.ms())
					    .attr('font-size', unit)
					    .attr('x', (unit * 3))
					    .attr('y', function(d, i) { return (i * unit * 2) + (unit * 4 - 1); })
					    .text(function(d, i) { return '>= ' + that.formatter(d.min); });		
				    }
				return this;
			}
			/**
			 * Update Projection
			 */
			this.updateProjection = function(){
				// Determine Center of Map
		    	// this.centroid = d3.geo.centroid(this._mapJSON);
		    	var centerFeature = null;
		    	for(var i=0;i<this._mapJSON.features.length;i++){
		    		var f = this._mapJSON.features[i];
		    		if(f.properties && f.properties[this.featureProperty()] && f.properties[this.featureProperty()]==this.centerFeature()){
		    			centerFeature = f;
		    		}
		    	}
		    	this.centroid = d3.geo.centroid(centerFeature);
		    	// Create projection
		    	this.proj = d3.geo[this.projection()]()
	    			.scale(1)
	    			.translate([0,0]);
	    		// Create path
		    	this.projPath = d3.geo.path()
	    			.projection(this.proj);
            	
	    		// Compute the bounds of a feature of interest, then derive scale & translate.
		    	var b = this.projPath.bounds(this._mapJSON),
		    	    s = .95 / Math.max((b[1][0] - b[0][0]) / this.dimensions.mapWidth, (b[1][1] - b[0][1]) / this.dimensions.mapHeight),
		    	    t = [(this.dimensions.mapWidth - s * (b[1][0] + b[0][0])) / 2, (this.dimensions.mapHeight - s * (b[1][1] + b[0][1])) / 2];
		    	
		    	this.proj.scale(s).translate(t);
		    	
		    	// Center if projection supports
		    	if(typeof this.proj.center === "function"){
		    		if(centerFeature) this.proj.center(this.centroid);
		    	}
		    	// Rotate if projection supports
		    	if (typeof this.proj.rotate === "function") {
		    	    this.proj.rotate([this.yaw(),this.pitch(),this.roll()]);
		    	}
		    	if(this.projection()=="orthographic") this.proj.clipAngle(90);
		    	return this;
			}
			/**
			 * Update Triangles
			 */
			this.updateTriangles = function(){
				var selectedFeature = this.findFeature(this.selectedFeature());
				var hoverFeature = this.findFeature(this.lastHover);
				if(selectedFeature) {
					var mm = that.measureMember();
					if(!mm){
						if(that._flatData && that._flatData.columnHeaders && that._flatData.columnHeaders.length > 1) mm = that._flatData.columnHeaders[0];
					}
					var val = null;
					if(selectedFeature.properties && selectedFeature.properties.designStudioMeasures && selectedFeature.properties.designStudioMeasures[mm]){
						val = selectedFeature.properties.designStudioMeasures[mm];
					}
					this.selTriangle
						.transition().duration(that.ms())
						.attr("d","M-"+that.gradientHeight()/2+" 0 L"+that.gradientHeight()/2+" 0 L 0 "+that.gradientHeight()/2+" Z")
						.attr("fill",that.selectedColor())
						.attr("opacity",1)
						.attr("transform", "translate("+that.tickScale(val)+","+(0-that.dimensions.gradientHeight)+")");
				}else{
					// No selected feature found
					this.selTriangle
						.transition().duration(that.ms())
						.attr("fill",that.selectedColor())
						.attr("d","M-"+that.gradientHeight()/2+" 0 L"+that.gradientHeight()/2+" 0 L 0 "+that.gradientHeight()/2+" Z")
						.attr("opacity",0)
						.attr("transform", "translate(0,"+(0-that.dimensions.gradientHeight)+")");
				}
				if(hoverFeature){
					var mm = that.measureMember();
					if(!mm){
						if(that._flatData && that._flatData.columnHeaders && that._flatData.columnHeaders.length > 1) mm = that._flatData.columnHeaders[0];
					}
					var val = null;
					if(hoverFeature.properties && hoverFeature.properties.designStudioMeasures && hoverFeature.properties.designStudioMeasures[mm]){
						val = hoverFeature.properties.designStudioMeasures[mm];
					}
					that.triangle
						.transition().duration(that.ms())
						.attr("d","M-"+that.gradientHeight()/2+" 0 L"+that.gradientHeight()/2+" 0 L 0 "+that.gradientHeight()/2+" Z")
						.attr("fill",that.hoverColor())
						.attr("opacity",1)
						.attr("transform", "translate("+that.tickScale(val)+","+(0-that.dimensions.gradientHeight)+")");
				}
				
				
			}
			this.findFeature = function(featureName){
				if(!this._mapJSON || !this._mapJSON.features) return null;
				for(var i=0;i<this._mapJSON.features.length;i++){
					var feature = this._mapJSON.features[i];
					if(feature.properties && feature.properties[this.featureProperty()]) {
						var property = feature.properties[this.featureProperty()];
						if(property == featureName) return feature;
					}
				}
				return null;
			}
			/**
			 * Build Map Framework
			 */
			this.buildMap = function(){
				this.calculateDimensions();
				this.canvas = this.container.append('svg');
				this.defs = this.canvas.insert("defs");
				this.gradientDef = this.defs.append("linearGradient")
					.attr("id","myGradient")
					.attr("x1", "0%")
					.attr("y1", "0%")
					.attr("x2", "100%")
					.attr("y2", "0%")
					.attr("spreadMethod", "pad");
	    		this.background = this.canvas.append('rect')
	    			.classed('background', true);
	    		
	    		/* pretty, but useless.
	    		 * this.gradientRect = this.canvas.append("rect")
	    			.attr("height",10)
	    			.style("fill","url(#myGradient)");
	    		*/
	    		
	    		var legend2Transform = this.dimensions.gradientLeft + "," + (this.dimensions.height - this.dimensions.gradientBottom - this.dimensions.gradientHeight);
	    		var tickTransform = "0," + (0 - this.dimensions.gradientHeight);
	    		
	    		
	    		
	    		
	    		this.featureGroup = this.canvas.append('g')
	    			.attr('class', 'feature-group');
	    		this.globePath = this.featureGroup.append('path')
	    			.datum({ type: 'Sphere' })
	    			.attr('class', 'globe');
	    		this.graticule = d3.geo.graticule();
		        this.graticulePath = this.featureGroup.append('path')
	            	.datum(this.graticule)
	            	.attr('class', 'graticule');
	    		this.pathGroup = this.featureGroup.append('g')
    				.attr('class', 'path-group');
	    		this.labelGroup = this.featureGroup.append('g')
    				.attr('class', 'label-group');
		        
	    		this.tooltipDiv = this.container.append('div')
	    			.classed('tooltip', true);
	    		this.legendGroup = this.canvas.append('g')
		        	.attr('class', "legend-group" );
	    		this.legendRect = this.legendGroup.append('rect')
			        .attr('x', 0)
			        .attr('y', 0);
			    this.legendLabel = this.legendGroup.append('text')
			        .attr('class', 'legend-label');

			    // Horizontal Scale
			    this.legend2 = this.canvas.append("g")
    				.attr("transform", "translate(" + legend2Transform +")");	    		
    	 		this.gradientRects = this.legend2.append("g")
					.attr("class", "gradient-rects");
    	 		this.selTriangle = this.legend2.append("path")
	    			.attr("opacity",0)
	    			.attr("fill",that.selectedColor())
					.attr("d","M-"+this.gradientHeight()/2+" 0 L"+this.gradientHeight()/2+" 0 L 0 "+this.gradientHeight()/2+" Z");
    	 		this.triangle = this.legend2.append("path")
	    			.attr("opacity",0)
	    			.attr("fill",that.hoverColor())
					.attr("d","M-"+this.gradientHeight()/2+" 0 L"+this.gradientHeight()/2+" 0 L 0 "+this.gradientHeight()/2+" Z");
	    		this.gradientTicks = this.legend2.append("g")
	    			.attr("class", "gradient-ticks")
	    			.attr("transform", "translate(" + tickTransform +")");
	    		
			    this.messageGroup = this.canvas.append("g")
			    	.attr("display", "none")
			    	.attr("opacity", 0);
			    
			    this.messageRect = this.messageGroup.append("rect")
			    	.attr("fill", "#006699")
			    	.attr("x",0).attr("y",0)
			    	.attr("width",this.dimensions.width)
			    	.attr("height",this.dimensions.height)
			    	
			    this.messageText = this.messageGroup.append("text")
			    	.style("text-anchor","middle")
			    	.style("fill","#FFFFFF")
			    	.attr("x",this.dimensions.width/2).attr("y",this.dimensions.height/2)
			    	.text("Message");
			    return this;
			}
			this.calculateDimensions = function(){
				this.dimensions = {
					width : this.$().width(),
					height : this.$().height(),
					gradientLeft : this.gradientLeft(),
					gradientRight : this.gradientRight(),
					gradientHeight : this.gradientHeight(),
					gradientBottom : this.gradientBottom(),
					mapLeft : this.mapLeft(),
					mapRight : this.mapRight(),
					mapTop : this.mapTop(),
					mapBottom : this.mapBottom(),
					legendWidth : this.legendWidth() || (this.$().width() / 5),
					legendTop : this.legendY(),
					legendLeft : this.legendX()
				};
				if(this.legendOn()){
					if (this.makeRoomX()) this.dimensions.mapLeft += (this.dimensions.legendWidth + this.legendX());
				}
				this.dimensions.gradientWidth = this.dimensions.width - this.dimensions.gradientLeft - this.dimensions.gradientRight;
				this.dimensions.mapWidth = this.dimensions.width - this.dimensions.mapLeft - this.dimensions.mapRight;
				this.dimensions.mapHeight = this.dimensions.height - this.dimensions.mapTop - this.dimensions.mapBottom;
				return this;
			}
			this.afterUpdate = function(){
				// Flatten Data
				this._oStyleClasses = {};
				if(this.styleClasses()!="") this._oStyleClasses = jQuery.parseJSON(this.styleClasses());
				
				this.formatter = d3.format(',.2f');			// Make a DS property
				this.container = d3.select("#"+this.$().attr("id"));
		    	// Render Canvas
		    	this.canvas = this.container.select("svg");
		    	if(this.canvas.empty()) this.buildMap();
		    	if(this._mapJSON && this._mapJSON.features) {
		    		this._flatData = null;
					var that = this;
					var vals = [];
					try{
						this._flatData = org_scn_community_databound.flatten(this.data(),{});
						if(this._flatData && this._flatData.values && this._flatData.values.length > 0){
							vals = this._flatData.values.slice();
						}else{
							// Something happened.
							throw("No values found.");
						}
					}catch(e){
						var errorMessage = e;
						this._flatData = {};
						//alert(errorMessage);
					}
					this.applyMeasures(this._mapJSON,this._flatData);
		    		this.messageGroup
		    			.transition().duration(this.ms())
		    			.attr("display", "none")
		    			.attr("opacity", 0);
		    		this.calculateDimensions();
		    		this.updateProjection()
			    		.updateCosmetics()
			    		.updateColorRange()
			    		.updateLegend()
			    		.updateFeaturePaths()
			    		.updateTriangles();
		    		this._poller = window.setTimeout(function(){that.measureSize(that)},that._pollInterval);
		    	}else{
		    		this.displayMessage("No Map Data set.  Open Additional Properties Sheet to download a map!");
		    	}
			};
			this.displayMessage=function(message){
				this.messageText.text(message);
				this.messageGroup
					.attr("display", "inline")
					.transition().duration(this.ms())
    				.attr("opacity", 1);
			}
			this.projectionTween = function(projection0, projection1) {
				return function(d) {
				    var t = 0;

				    var projection = d3.geo.projection(project)
				        .scale(1)
				        .translate([width / 2, height / 2]);

				    var path = d3.geo.path()
				        .projection(projection);

				    var b = path.bounds(this._mapJSON),
		    	    	s = .95 / Math.max((b[1][0] - b[0][0]) / mapWidth, (b[1][1] - b[0][1]) / mapHeight),
		    	    	t = [(mapWidth - s * (b[1][0] + b[0][0])) / 2, (mapHeight - s * (b[1][1] + b[0][1])) / 2];
				    projection.scale(s).translate(t);
				    
				    function project(λ, φ) {
				      λ *= 180 / Math.PI, φ *= 180 / Math.PI;
				      var p0 = projection0([λ, φ]), p1 = projection1([λ, φ]);
				      return [(1 - t) * p0[0] + t * p1[0], (1 - t) * -p0[1] + t * -p1[1]];
				    }

				    return function(_) {
				      t = _;
				      return path(d);
				    };
				  };
				}

			this.measureSize = function(that){
				var currentWidth = that.$().innerWidth();
				var currentHeight = that.$().innerHeight();
				if(currentWidth != that._previousWidth || currentHeight != that._previousHeight){
					// If width or height has changed since the last calculation, redraw.
					/* Debug alert:
					alert("Resize detected.\n\nOld:" + that._previousWidth + " x " + that._previousHeight + 
							"\n\nNew:" + currentWidth + " x " + currentHeight);
					*/
					that._previousHeight = currentHeight;
					that._previousWidth = currentWidth;	
					this.afterUpdate();
				}else{
					// Sizes are the same.  Don't redraw, but poll again after an interval.
					that._poller = window.setTimeout(function(){that.measureSize(that)},that._pollInterval);	
				}
			};
			this.doTooltip = function(d) {
				that.lastHover = d.properties[that.featureProperty()];
				/*d3.select(this)
					.transition().duration(that.ms())
					.attr("fill",that.hoverColor());*/
				var mm = that.measureMember();
				if(!mm){
					if(that._flatData && that._flatData.columnHeaders && that._flatData.columnHeaders.length > 1) mm = that._flatData.columnHeaders[0];
				}
				var val = null;
				if(d.properties && d.properties.designStudioMeasures && d.properties.designStudioMeasures[mm]){
					val = d.properties.designStudioMeasures[mm];
				}
				
				// Tooltip
				if (that.tooltipOn()) {
					var tt = "";
					if(d.properties && d.properties[that.labelProperty()]){
						tt+="<b>" + d.properties[that.labelProperty()] + "</b>";
					}
					if(d.properties && d.properties.designStudioMeasures){
						tt +="<br/><ul>"
						var dsm = d.properties.designStudioMeasures;
						for(var measure in dsm){
							tt+="<li><b>" + measure + "</b>: " + that.formatter(dsm[measure]) + "</li>";
						}
						tt +="</ul>";
					}
					if(d.properties && d.properties[that.featureProperty()]){
						
					}
					that.container.select('.tooltip')
						.style('display', 'block')
						.html(tt);
				}
				//that.updateFeaturePaths();
				that.updateTriangles();
			}
			
			this.mapDataChanged = function(reason){				
				var j = {};
				try{
					if(this.mapData()!=""){
						j = jQuery.parseJSON(this.mapData());
					}
					this._mapJSON = this.processMapData(j);
				}catch(e){
					this._mapJSON = {};
					//throw "Error with Map Data.\n\n" + e;
				}
			}
			this.loadMap = function(mapFile){
				var mapURL = pathInfo.myScriptPath + 'maps/' + mapFile + ".json";
				if(mapFile=="Use External URL") {
					mapFile = this.externalMap();
					mapURL = this.externalMap();
				}
				if(mapFile=="Use Map Data") {
					try{
						if(this.mapData()!=""){
							j = jQuery.parseJSON(this.mapData());
						}
						return this.processMapData(j);
					}catch(e){
						throw "Error with Map Data.\n\n" + e;
					}
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
				this.container = d3.select("#"+this.$().attr("id"));
				this.canvas = this.container.select("svg");
		    	if(this.canvas.empty()) this.buildMap();
				try{
					this.$().css("overflow","hidden");
					this.$().addClass("DesignStudioSCN");
					this.$().addClass("Choropleth");
					this.props.mapData.onChange = this.mapDataChanged;
					this.props.mapData.onChange.call(this,"init");
				}catch(e){
					this.displayMessage("Error in init:\n\n" + e);
				}
			};
		 });
		 // End of SDK
		 sap.zen.Dispatcher.instance.resumeDispatching();
 	});
 // End of Require d3+topo Callback
})();
 // End of closure