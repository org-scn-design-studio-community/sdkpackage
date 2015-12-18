 /**
 * Choropleth on D3 Example:
 * http://bl.ocks.org
 */
define(["./../../../org.scn.community.shared/os/viz-modules/VizMap",
        "sap/designstudio/sdk/component"], function(VizMap,Component) {
	var ownComponentName = "org.scn.community.databound.Choropleth";
	Choropleth.prototype = VizMap;
	function Choropleth() {
    	 var that = this;
    	 // Call super
    	 VizMap.call(this, {
    		/*
    		styleClasses : { value : ""},
			centerFeature : { value : ""},
			*/
			measureMember :  { 
				value : "",
				opts : {
					desc : "Choropleth Measure",
					cat : "Data",
					apsControl : "measureselector"
				}					
			},
			bubbleMember :  { 
				value : "",
				opts : {
					desc : "Bubble Measure",
					cat : "Data",
					apsControl : "measureselector"
				}					
			},
			bubbleColor :  { 
				value : "#006699",
				opts : {
					desc : "Bubble Color",
					cat : "Cosmetics-Colors",
					apsControl : "color"	
				}
			},
			featureProperty : { 
				value : "NAME_1",
				opts : {
					desc : "Feature Attribute",
					cat : "Mapping",
					apsControl : "text"
				}
			},
			gradientLeft : { 
				value : 30,
				opts : {
					desc : "Left",
					cat : "Legend-Horizontal Legend",
					apsControl : "spinner"	
				}
			},
			gradientRight : { 
				value : 30,
				opts : {
					desc : "Right",
					cat : "Legend-Horizontal Legend",
					apsControl : "spinner"	
				}
			},
			gradientBottom : { 
				value : 15,
				opts : {
					desc : "Bottom",
					cat : "Legend-Horizontal Legend",
					apsControl : "spinner"	
				}
			},
			gradientHeight : { 
				value : 15,
				opts : {
					desc : "Plot Bottom Offset",
					cat : "Legend-Horizontal Legend",
					apsControl : "spinner"	
				}
			},
			hoverColor :  { 
				value : "#F7CA36",
				opts : {
					desc : "Hover Arrow Color",
					cat : "Legend-Horizontal Legend",
					apsControl : "color"	
				}
			},
			colorScale : { 
				value : "quantile",
				opts : {
					apsControl : "combobox",
					desc : "Color Scale Method",
					cat : "Cosmetics-Scale",
					options : [{key : "quantile", text : "Quantile"},
					         {key : "quantize", text : "Quantize"}]
				}
			},
			floor :  { 
				value : 0,
				opts : {
    				desc : "Minimum Value for Scale",
    				cat : "Cosmetics-Scale",
    				tooltip : "Selected Value",
					apsControl : "spinner"
				}
			},
			bubbleMin : { 
				value : 5,
				opts : {
					desc : "Minimum Bubble Size",
					cat : "Cosmetics-Scale",
					apsControl : "spinner"	
				}
			},
			bubbleMax : { 
				value : 20,
				opts : {
					desc : "Maximum Bubble Size",
					cat : "Cosmetics-Scale",
					apsControl : "spinner"	
				}
			},
			bubbleAlpha : { 
				value : 50,
				opts : {
					desc : "Bubble Alpha",
					cat : "Cosmetics-Plot",
					apsControl : "spinner"	
				}
			},/*
			center : { value : "0,0" },
			scale : { value : 150 },
			
			*/
    		selectedValue : { 
    			value : 0.0,
    			opts : {
    				desc : "Data",
    				cat : "Data",
    				tooltip : "Selected Value",
    				value : null,
    				noAps : true
    			}
			},
			selectedFeature : { 
    			value : "",
    			opts : {
    				desc : "Data",
    				cat : "Data",
    				tooltip : "Selected Feature",
    				value : null,
    				noAps : true
    			}
			}
		});
		var tip = this.d3tip()
		 	.attr('class', 'd3-tip')
		 	.html(function(d) { 
		 		var html = "<span>";
		 		var mm;
		 		var mmObj = jQuery.parseJSON(this.measureMember());
		 		if(typeof mmObj == "object"){
		 			mm = this.determineMeasureName(mmObj);
		 		}else{
		 			mm = mmObj;
		 		}
				if(!mm){
					if(that._flatData && that._flatData.columnHeaders && that._flatData.columnHeaders.length > 1) mm = that._flatData.columnHeaders[0];
				}
				var val = null;
				if(d.propertiees && d.properties.designStudioMeasures && d.properties.designStudioMeasures[mm]){
					val = d.properties.designStudioMeasures[mm];
				}
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
				html+=tt;
				html+="</span>";
				return html;
		 	})
			.offset(function(d) {
				var y = (this.getBBox().height * that.zoomScale / 2 ) - 12;
				return [y, 0]
			});
    	this.componentInfo.title = "Choropleth Map";
    	this.componentInfo.description = "A Choropleth Map is a thematic map in which areas are shaded or pattened in proportion to the measurment of the measure being displayed on the map, such as population density or per-capita income.  Definition source: <a target='_blank' href='http://en.wikipedia.org/wiki/Choropleth_map'>Wikipedia: Choropleth Map</a>  "+
    	"This component is loosely based on and inspired by <a target='_blank' href='http://bl.ocks.org/mbostock/4060606'>Mike Bostock's Choropleth Example</a> with many additional enhancements made to allow ease of use and configuration in Design Studio.";
    	this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgVJREFUeNqcU01vEkEYfmZmF+JWsECTViyQaGs9eNCYaPTkD/DimYNnEo8eOfsT7JkDP8CDv8GLMWliNWqKTSm0gHZBY6W78+E7Q9iCPclmdjP7zvs879czrNFovAJQw2LPtqe1rlWr1YXQzWaz5iml3M+L16eQv2Nwj2HYayFX3AAYLcboBeSPjyhX1pHxzzA2KTx/XITFJgTC5zBpAUYEnPY8JRzQfu6ttBF5XZTXPHBmoBmngxkCYwzEJQ9MUDTO4QUe/CXfZZASCjdXR+iMJQrLlCHZODcOM5fBqN+CUdqeQqQ9jAYtF30z26d9B5kACHvfHAFsAmv3JwRSSse2cuMWoA2sR3jwBfnKFnyK/vT6EJf9a2jttbGxue7KshwWY7EJQSn7E0ozDKKM60GQVnhS+oB8MMbn4694u/ce+3EegjKsFMq4c/XhOQGg8Cj3Bpn0EpaDK3hnTnB36whGR9hpf8LR8DgZndIaByeHRIBzgjM5xu7hrnMIUgFOQ0n/BfR/DSCVvDB/a/unBI3u/neYGadO2L0A7JCPdeJCwNyeIdBaIV/MUle1E06vHWK1lJsDT202iOBiksmUQGkqI5KIaSy2y+M4xp8omiOYtXESUlKCExINVpuJOGhR80ht2swRzNoM05OGToUU+Fk8e/Dyvy5SokS6jdv1en3h6/xXgAEArt0tznrHscwAAAAASUVORK5CYII=";
    	this.componentInfo.topics.push({
    		title : "Choropleth Map",
    		content : "Choropleth Maps will look at your flattened data set, picking up dimension values found in Rows, such as State, or Country being ideal candidates.  These values are referenced against the Map you choose in the Mapping section.  For example, if you choose a World map that contains Features at the country level, you'd want to supply Country in Rows.  For sub-region/states, a Map of Country would be suitable, and so-on."
    	});
	    	
	    	
	    	
		/**
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
									measures[flatData.columnHeadersKeys[i]] = flatData.values[rowIndex][i];
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
		 * Sets BIAL-level selected feature and fires onSelect event.
		 */
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
		/**
		 * Handle tooltip updates
		 */
		this.doTooltip = function(d) {
			that.lastHover = d.properties[that.featureProperty()];
			if(that.showTooltips()){
				var html = "<span>";
				var mm;
    			var mmObj = jQuery.parseJSON(that.measureMember());
    			if(typeof mmObj == "object"){
    				mm = that.determineMeasureName(mmObj);
    			}else{
    				mm = mmObj;
    			}
		 		if(!mm){
		 			if(that._flatData && that._flatData.columnHeaders && that._flatData.columnHeaders.length > 1) mm = that._flatData.columnHeaders[0];
		 		}
		 		var val = null;
		 		if(d.propertiees && d.properties.designStudioMeasures && d.properties.designStudioMeasures[mm]){
		 			val = d.properties.designStudioMeasures[mm];
		 		}
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
		 		html+=tt;
		 		html+="</span>";
				//tip.show.call(this,d);
				//offsets for tooltips
				var offsetL = that.$()[0].offsetLeft+20;
				var offsetT = that.$()[0].offsetTop+10;
			    // Approach 1
				that.tooltip
					.classed("hidden", false)
					.html(html);
				// Follow Mouse approach
				if(that.tooltipPositioning()=="followmouse"){
					var mouse = d3.mouse(that.svg.node()).map( function(d) { return parseInt(d); } );
				    var x = mouse[0];
				    var y = mouse[1];
				    that.tooltip
				    	.attr("style", "left:"+(x + offsetL)+"px;top:"+(y + offsetT)+"px");
				}
				// Static Approach
				if(that.tooltipPositioning()=="static"){
				    var marginLeft = that.tooltipLeft();
				    var marginRight = that.tooltipRight();
				    var marginTop = that.tooltipTop();
				    var marginBottom = that.tooltipBottom();
				    // Cannot have opposing auto.
				    if(marginLeft.toLowerCase()=="auto" && marginRight.toLowerCase()=="auto") marginRight = "0px";
				    if(marginTop.toLowerCase()=="auto" && marginBottom.toLowerCase()=="auto") marginTop = "0px";
				    that.tooltip
				    	.style("left", marginLeft)
				    	.style("right", marginRight)
				    	.style("top", marginTop)
				    	.style("bottom", marginBottom);
				}
				// Approach 2
			    /*
			    var bb = this.getBBox();
			    var matrix = this.getScreenCTM().translate(+bb.x,+bb.y);
			    var tt = d3.select("body").selectAll("#"+that.$().attr("id")+"_tooltip")
			    	.data([{
			    		id : that.$().attr("id")+"_tooltip",
			    		x: matrix.e,
			    		y: matrix.f,
			    		html : html}
			    	])
			    	.html(function(d){return d.html})
			    	.style("left", (window.pageXOffset + matrix.e) + "px")
			    	.style("top", (window.pageXOffset + matrix.f + 30) + "px");
			    
			    tt.exit().remove();
			    
			    tt.enter().append("div")
				   	.attr("id",function(d){return d.id})
				   	.attr("class", "DesignStudioSCN Viz tooltip");
				*/
			    	
			}			
			that.updateTriangles();
		}
		
		/**
		 * Calculate Visualization Sizing
		 */
		var parentCalculateDimensions = this.calculateDimensions;
		this.calculateDimensions = function(){
			parentCalculateDimensions.call(this);
			this.dimensions.gradientLeft = this.gradientLeft();
			this.dimensions.gradientRight = this.gradientRight();
			this.dimensions.gradientHeight = this.gradientHeight();
			this.dimensions.gradientBottom = this.gradientBottom();
			this.dimensions.gradientWidth = this.dimensions.plotWidth - this.dimensions.gradientLeft - this.dimensions.gradientRight;
			//alert(JSON.stringify(this.dimensions));
			return this;
		}
		/**
		 * After Update
		 */
		var parentAfterUpdate = this.afterUpdate;
		this.afterUpdate = function(){
			this.applyMeasures(this._mapJSON,this.flatData);
			parentAfterUpdate.call(this);
		};
		/**
		 * Init
		 */
    	var parentInit = this.init;
    	this.init = function(){
    		parentInit.call(this);
    		this.$().addClass("Choropleth");
    		
    		//this.bubbleGroup = this.plotLayer.append('g')
    		this.bubbleGroup = this.plotLayer.insert("g",".label-group")
				.attr('class', 'bubble-group');
    		

	        
    		// Horizontal Scale/Legend
    		var legend2Transform = this.dimensions.gradientLeft + "," + (this.dimensions.plotHeight - (this.dimensions.gradientBottom + this.dimensions.gradientHeight));
    		var tickTransform = "0," + (0 - this.dimensions.gradientHeight);
		    this.legend2 = this.plotWindow.append("g")
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
    		
		    return this;
    	}
    	/**
		 * Update Color and Bubble Ranges
		 */
		this.updateColorRange = function(){
	        var d, domain;
	        this.valuesSet = [this.floor()];
	        this.bubbleSet = [this.floor()];
	        var mm;
			var bm;
			var mmObj = jQuery.parseJSON(this.measureMember());
			var bmObj = jQuery.parseJSON(this.bubbleMember());
			if(typeof mmObj == "object"){
				mm = this.determineMeasureName(mmObj);
			}else{
				mm = mmObj;			// Backwards compat
			}
			if(typeof bmObj == "object"){
				bm = this.determineMeasureName(bmObj);
			}else{
				bm = bmObj;			// Backwards compat
			}
        	// Get values for range
	        for (d = 0; d < this._mapJSON.features.length; d++) {
        		if(this._mapJSON.features[d].properties.designStudioMeasures){
					if(!mm){
						if(this.flatData && this.flatData.columnHeaders && this.flatData.columnHeaders.length > 0) mm = this.flatData.columnHeaders[0];
					}
        			if(bm && this._mapJSON.features[d].properties.designStudioMeasures[bm]){
        				this.bubbleSet.push(parseFloat(this._mapJSON.features[d].properties.designStudioMeasures[bm]));
        			}
					this.valuesSet.push(parseFloat(this._mapJSON.features[d].properties.designStudioMeasures[mm]));
        		}else{
        			this.valuesSet.push(null);
        			this.bubbleSet.push(null);
        		}
	        }
	        this.valuesSet.sort(function(a, b) { return a - b; });
	        this.bubbleScale = d3.scale.linear()
				.range([this.bubbleMin(),this.bubbleMax()]);
	        this.bubbleScale.domain([d3.min(this.bubbleSet),d3.max(this.bubbleSet)]);
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
		 * Feature Fill Routine - Overrides parent.
		 */
		this.featureFill = function(d) {
			if(d.properties && d.properties && d.properties[that.featureProperty()]){
				if(d.properties[that.featureProperty()]==that.selectedFeature() && that.selectedColor()) return that.selectedColor();
			}
			if(d.properties && d.properties.designStudioMeasures){
				var mm;
    			var mmObj = jQuery.parseJSON(that.measureMember());
    			if(typeof mmObj == "object"){
    				mm = that.determineMeasureName(mmObj);
    			}else{
    				mm = mmObj;
    			}
				if(!mm){
					if(that.flatData && that.flatData.columnHeaders && that.flatData.columnHeaders.length > 0) mm = that.flatData.columnHeaders[0];
				}
				return that.colorRange(d.properties.designStudioMeasures[mm]) || that.defaultFillColor();	
			}else{
				return that.defaultFillColor();
			}
		};
		var parentUpdatePlot = this.updatePlot;
		/**
		 * Update Features
		 */
		this.updatePlot = function(){
			var that = this;
			try{
				this.updateColorRange();
				parentUpdatePlot.call(this);
				var legend2Transform = this.dimensions.gradientLeft + "," + (this.dimensions.plotHeight - (this.dimensions.gradientBottom + this.dimensions.gradientHeight));
		    	this.legend2
		    		.transition().duration(this.ms())
		    		.attr("transform", "translate(" + legend2Transform +")");
		    	var trans = "0," + (0 - this.dimensions.gradientHeight);
		    	this.gradientTicks
		    		.transition().duration(this.ms())
		    		.attr("transform", "translate(" + trans +")");
				// Events
				this.pathGroup.selectAll('path')
					.on('click', function(d){ 
						if(that.moved) {
							that.moved = false;
							return;
						}
						d3.select(this)
							.transition().duration(that.ms())
							.attr("fill",that.selectedColor());
						that.setSelectedFeature(d);
						that.updateTriangles();
					});
				var bubbles = this.bubbleGroup.selectAll('circle').data(this._mapJSON.features);
				var newBubbles = bubbles.enter().append("circle")
					.attr('class', function(d) { return "subunit-bubble " + d.properties[that.labelProperty()]; })
					.attr("pointer-events", "none")
					.attr("transform", function(d) { return "translate(" + that.projPath.centroid(d) + ")"; })
					.attr("r", 0)
					.attr("opacity", 0)
					.attr("fill", this.bubbleColor());

				this.bubbleGroup.selectAll("circle")
					.transition().duration(this.ms())
					.attr("transform", function(d) { return "translate(" + that.projPath.centroid(d) + ")"; })
					.attr("r", function(d,i){
						if(d.properties && d.properties.designStudioMeasures){
							var bm;
			    			var bmObj = jQuery.parseJSON(that.bubbleMember());
			    			if(typeof bmObj == "object"){
			    				bm = that.determineMeasureName(bmObj);
			    			}else{
			    				bm = bmObj;
			    			}
							if(bm){
								if(d.properties.designStudioMeasures[bm]){
									return that.bubbleScale(d.properties.designStudioMeasures[bm]);
									// linear scale
								}else{
									return 0;	
								}
								//that.colorRange(d.properties.designStudioMeasures[mm]) || that.defaultFillColor();
								//if(that.flatData && that.flatData.columnHeaders && that.flatData.columnHeaders.length > 0 && ) mm = that.flatData.columnHeaders[0];
							}else{
								return 0;
							}
						}
						return 0;
					})
					.attr("opacity", this.bubbleAlpha()/100)
					.attr("fill", this.bubbleColor());
					//var bm = that.bubbleMember();
				 bubbles.exit().remove();
				// Events
					this.pathGroup.selectAll('path')
						.on('mousemove', this.doTooltip)
						//.on('mouseover', this.doTooltip)
						.on('mouseout', function(d) {
							//d3.select("body").selectAll("#"+that.$().attr("id")+"_tooltip").remove();
							that.tooltip.classed("hidden",true);
							that.triangle
								.transition().duration(that.ms())
								.attr("opacity",0);
						});
			
			}catch(e){
				alert("Error updating Choropleth Chart Plot:\n\n"+e);
			}
			return this;
		};
    	var parentUpdateLegend = this.updateLegend;
    	/**
		 * Update Legend
		 */
		this.updateLegend = function(){
			parentUpdateLegend.call(this);
			this.updateColorRange();
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
						var mm;
		    			var mmObj = jQuery.parseJSON(that.measureMember());
		    			if(typeof mmObj == "object"){
		    				mm = that.determineMeasureName(mmObj);
		    			}else{
		    				mm = mmObj;
		    			}
						if(!mm){
							if(that.flatData && that.flatData.columnHeaders && that.flatData.columnHeaders.length > 1) mm = that.flatData.columnHeaders[0];
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
		 * Semantic Zooming
		 */
		var parentSemanticZoomed = this.semanticZoomed;
		this.semanticZoomed = function(){
			// For Joao: http://scn.sap.com/community/businessobjects-design-studio/blog/2015/03/20/sap-design-studio-sdk--choropleth-maps-refined-part-3#comment-582607
			if(!that.enableZoom()) return;
			// Hide tooltips because it's distracting.
			tip.hide();
			// Flag component as having moved so we can cancel any onclick listeners
			that.moved = true;
			// Capture current zoom scale and translation
			that.zoomScale = d3.event.scale;
			that.zoomTranslate = d3.event.translate;
			if(that.previousScale && that.previousScale == that.zoomScale){
				// If scale has not changed, don't bother with costly path and label updates.
				that.plotLayer.attr("transform","translate(" + that.zoomTranslate + ")");
			}else{}
				// Zoom scale changed, update paths and labels.
				that.adjustPlotZoom();
			that.previousScale = that.zoomScale;				
		}
    	
		/**
		 * Update Triangles
		 */
		this.updateTriangles = function(){
			var selectedFeature = this.findFeature(this.selectedFeature());
			var hoverFeature = this.findFeature(this.lastHover);
			if(selectedFeature) {
				var mm;
    			var mmObj = jQuery.parseJSON(this.measureMember());
    			if(typeof mmObj == "object"){
    				mm = this.determineMeasureName(mmObj);
    			}else{
    				mm = mmObj;
    			}
				if(!mm){
					if(that.flatData && that.flatData.columnHeaders && that.flatData.columnHeaders.length > 1) mm = that.flatData.columnHeaders[0];
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
				var mm;
    			var mmObj = jQuery.parseJSON(this.measureMember());
    			if(typeof mmObj == "object"){
    				mm = this.determineMeasureName(mmObj);
    			}else{
    				mm = mmObj;
    			}
				if(!mm){
					if(that.flatData && that.flatData.columnHeaders && that.flatData.columnHeaders.length > 1) mm = that.flatData.columnHeaders[0];
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
     };
     Choropleth.prototype.constructor = Choropleth;
     Choropleth.prototype.toString = function(){
    	 return ownComponentName;
     }
	Component.subclass(ownComponentName, Choropleth);	// End of SDK
});