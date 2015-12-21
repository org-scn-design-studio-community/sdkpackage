/**
 * CC BY-NC-SA License
 * Pictogram by Mike Howles is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 * Based on a work at http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/ScatterPlot 
 *
 */

define(["./../../../org.scn.community.shared/os/viz-modules/VizXYChart",
        "sap/designstudio/sdk/component"], function(VizXYChart,Component) {
	var ownComponentName = "org.scn.community.databound.ScatterPlot";
	 /**
	 * ScatterPlot
	 */
	 ScatterPlot.prototype = VizXYChart;
     function ScatterPlot() {
    	 // Call super
	 	VizXYChart.call(this, {
			radius : { 
				value : 20,
				opts : {
					desc : "Plot Radius",
					cat : "Cosmetics-Sizes",
					apsControl : "spinner"	
				}
			},
			bubbleMin : { 
				value : 5,
				opts : {
					desc : "Minimum Bubble Size",
					cat : "Cosmetics-Sizes",
					apsControl : "spinner"	
				}
			},
			bubbleMax : { 
				value : 20,
				opts : {
					desc : "Maximum Bubble Size",
					cat : "Cosmetics-Sizes",
					apsControl : "spinner"	
				}
			},
			measureZ : { 
				opts : {
					desc : "Z-Axis Measure",
					cat : "Data",
					apsControl : "measureselector"
				}
			},
			colorDimension : { 
				value : "",
				opts : {
					desc : "Dimension for Color",
					cat : "Data",
					apsControl : "text"
				} 
			}
		});
	 	this.d3tip.html(function (d) {
			var html = "<span>";
			var sep = "";
			for(var i=0;i<d.labels.length;i++){
				html+=d.labels[i]+"<br/>";
			}
			html += d.x + "<br/>";
			html += d.y + "<br/>";
			html += "</span>";
			return html;
		});
    	this.componentInfo.title = "ScatterPlot/Bubble Chart";
    	this.componentInfo.description = "This is a ScatterPlot and Bubble Chart Component.  X and Y measures are taken from columns, defaulting to the first 2 columns.  A 3rd Z measure representing Bubble Size can be set by explicitely naming the column Member."
    	var parentInit = this.init;
    	this.init = function(){
    		parentInit.call(this);
    		this.svg.call(this.d3tip);
    		this.$().addClass("ScatterPlot");
    	}
    	var parentUpdatePlot = this.updatePlot;
    	this.updatePlot = function(){
    		parentUpdatePlot.call(this);
    		var that = this;
    		this.points = [];
    		var vals = [];
    		vals = this.flatData.values.slice();
    		var mx = this.measureX();
    		if(!mx || mx=="") mx = "null";
    		var mxIndex = 0;
    		var mxObj = jQuery.parseJSON(mx);
    		if(typeof mxObj == "object"){
    			mx = that.determineMeasureName(mxObj);
    		}else{
    			mx = mxObj;
    		}
    		var my = this.measureY();
    		if(!my || my=="") my = "null";
    		var myIndex = 0;
    		var myObj = jQuery.parseJSON(my);
    		if(typeof myObj == "object"){
    			my = that.determineMeasureName(myObj);
    		}else{
    			my = myObj;
    		}
    		var mz = this.measureZ();
    		if(!mz || mz=="") mz = "null";
    		var mzIndex = -1;
    		var mzObj = jQuery.parseJSON(mz);
    		if(typeof mzObj == "object"){
    			mz = that.determineMeasureName(mzObj);
    		}else{
    			mz = mzObj;
    		}
    		var cd = this.colorDimension();
    		var cdIndex = 0;
    		for(var i=0;i<this.flatData.columnHeaders.length;i++){
    			if(this.flatData.columnHeadersKeys[i] == mx) mxIndex = i;
    			if(this.flatData.columnHeadersKeys[i] == my) myIndex = i;
    			if(this.flatData.columnHeadersKeys[i] == mz) mzIndex = i;
    		}
    		for(var i=0;i<this.flatData.dimensionHeaders.length;i++){
    			if(this.flatData.dimensionHeadersKeys[i]==cd) cdIndex = i;
    		}
			for(var i=0;i<vals.length;i++){
				var currentRow = vals[i];
				var point = {
					x : currentRow[mxIndex],
					y : currentRow[myIndex],
					labelIndex : cdIndex,
					labels : this.flatData.rowHeaders2D[i].slice()
				};
				if(mzIndex>-1){
					point.z = currentRow[mzIndex];
				}
				this.points.push(point);
			}
			this.bubbleScale = d3.scale.linear()
				.range([this.bubbleMin(),this.bubbleMax()]);
    		if(mzIndex>-1){
    			var zVals = this.points.map(function(d){return d.z});
    			this.bubbleScale.domain([d3.min(zVals),d3.max(zVals)]);
    		}
			// Build Color Range
			var cp = ["#DFDFDF"];
			if(this.colorPalette()!=""){
				cp = this.colorPalette().split(",");
			}
			this.colorRange = d3.scale.ordinal()
				.domain(this.points.map(function(d){return d.labels[d.labelIndex];}))
				.range(cp);
			
			var canvSelection = this.plotLayer.selectAll(".scatterplot").data(this.points);
			canvSelection.enter().append("circle")
				.attr("class", "scatterplot")
				.attr("r", 0)
				.attr("cx",function(d){return that.xScale(d.x)})
				.attr("cy",function(d){return that.yScale(d.y)})
				.attr("opacity",0)
				.on("mouseover",this.d3tip.show)
				.on("mouseout",this.d3tip.hide)
				.style("fill", function(d) { return that.colorRange(d.labels[d.labelIndex]); });
			
			canvSelection
				.transition().duration(this.ms())
				.attr("r", function(d){
					if(d.z){
						return that.bubbleScale(d.z);
					}else{
						return that.radius();
					}
				})
				.attr("cx",function(d){return that.xScale(d.x)})
				.attr("cy",function(d){return that.yScale(d.y)})
				.attr("opacity",function(d){ return that.plotAlpha()/100; })
				.style("fill", function(d) { return that.colorRange(d.labels[d.labelIndex]); });

			canvSelection.exit().remove();
			return this;
    	}
    	var parentUpdateLegend = this.updateLegend;
    	this.updateLegend = function(){
    		parentUpdateLegend.apply(this);
    		var that = this;
    		var unit = 10;
    		var rects = this.legendGroup.selectAll('rect.legend-swatch').data(this.colorRange.domain());
    		var legendLabels = this.legendGroup.selectAll('text.legend-amount').data(this.colorRange.domain());
    		this.legendRect
    			.transition().duration(this.ms())
    			.attr('width', this.dimensions.legendWidth)
    			.attr('height', this.colorRange.domain().length * (unit * 2) + (unit * 3));
    		
    		this.legendLabel
    			.transition().duration(this.ms())	
    			.attr('font-size', unit)
    	        .attr('x', (unit * 1))
    	        .attr('y', (unit * 2));
    		
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
    			.style('fill', function(d, i) { return that.colorRange(d); });
    		
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
    		    .text(function(d, i) { return d; });		
    	    
    	}
	}
	ScatterPlot.prototype.constructor = ScatterPlot;
	ScatterPlot.prototype.toString = function(){
		return ownComponentName;
	}
 	Component.subclass(ownComponentName, ScatterPlot);	// End of SDK
});