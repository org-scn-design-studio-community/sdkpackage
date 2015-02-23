/**
 * Base Visualization Class for use in databound D3 (V3) Visualizations.
 */
org_scn_community_databound_BaseViz.prototype = org_scn_community_databound_Base;
org_scn_community_databound_BaseViz.constructor = org_scn_community_databound_BaseViz;
function org_scn_community_databound_BaseViz(d3, options){
	var that = this;
	this.formatter = d3.format(',.2f');			// Make a DS property
	var properties = {
		legendScale : { value : 1 },
		legendX : { value : 0 },
		legendY : { value : 0 },
		legendTitle : { value : "Legend" },
		legendWidth : { value : 150 },
		legendOn : { value : true },
		margin : { value : 15 },
		makeRoomX : { value : true },
		ms : { value : 750},
		colorPalette :  { value : "#F0F9E8,#CCEBC5,#A8DDB5,#7BCCC4,#43A2CA,#0868AC" }
	};
	for(var prop in options) properties[prop] = options[prop];
	org_scn_community_databound_Base.call(this,properties);
	/**
	 * Update Cosmetics
	 */
	this.updateCosmetics = function(){ 
		this.svg
		.transition().duration(this.ms())
		.attr("width", this.dimensions.width)
		.attr("height", this.dimensions.height);
	
		this.plotArea
			.transition().duration(this.ms())
			.attr("transform", "translate(" + (this.dimensions.margin + this.dimensions.chartLeft) + "," + this.dimensions.margin + ")");
		this.legendGroup
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
		this.messageRect
			.transition().duration(this.ms())	
			.attr("width",this.dimensions.width)
			.attr("height",this.dimensions.height);
		
		return this;
			
		
	
		
	};
	this.calculateDimensions = function(){
		this.dimensions = {
			width : this.$().width(),
			height : this.$().height(),
			margin : this.margin(),
			chartLeft : this.margin(),
			chartTop : this.margin(),
			chartRight : this.margin(),
			chartBottom : this.margin(),
			legendWidth : this.legendWidth() || (this.$().width() / 5),
			legendY : this.legendY(),
			legendX : this.legendX()
		};
		if(this.legendOn()){
			if (this.makeRoomX()) this.dimensions.chartLeft += (this.dimensions.legendWidth + this.legendX());
		}
		this.dimensions.chartWidth = this.dimensions.width - this.dimensions.chartLeft - this.dimensions.margin - this.dimensions.margin;
		this.dimensions.chartHeight = this.dimensions.height - this.dimensions.margin - this.dimensions.margin;
		return this;
	};
	this.measureSize = function(that){
		var currentWidth = that.$().innerWidth();
		var currentHeight = that.$().innerHeight();
		if(currentWidth != that._previousWidth || currentHeight != that._previousHeight){
			that._previousHeight = currentHeight;
			that._previousWidth = currentWidth;	
			this.afterUpdate();
		}else{
			// Sizes are the same.  Don't redraw, but poll again after an interval.
			that._poller = window.setTimeout(function(){that.measureSize(that)},that._pollInterval);	
		}
	};
	this.preReqCheck = function() {
		var success = true;
		var reason = "";
		if(this.flatData && this.flatData.values && this.flatData.values.length > 0){
			
		}else{
			success = false;
			reason = "No values found.";
		}
		return {
			success : success,
			reason : reason
		};
	};
	this.updatePlot = function() {
		this.messageGroup
			.transition().duration(this.ms())
			.attr("display", "none")
			.attr("opacity", 0);
	};
	this.afterUpdate = function() {
		var that = this;
		this.calculateDimensions()
			.updateCosmetics();
		
		var check = this.preReqCheck();
		if(check.success){
			this.updatePlot();
		}else{
			// Give informational window
			this.displayMessage(check.reason);
			return;
		}
		this.clipRect
			.transition().duration(this.ms())
			.attr("width", this.dimensions.chartWidth)
			.attr("height", this.dimensions.chartHeight);
		var vals = [];
		// D3 time
		vals = this.flatData.values.slice();
		var mx = this.measureX();
		var my = this.measureY();
		var mxIndex = 0;
		var myIndex = 1;
		for(var i=0;i<this.flatData.columnHeaders.length;i++){
			if(this.flatData.columnHeaders[i] == mx) mxIndex = i;
			if(this.flatData.columnHeaders[i] == my) myIndex = i;
		}
		this.points = [];
		this.xVals = [];
		this.yVals = [];
		for(var i=0;i<vals.length;i++){
			var currentRow = vals[i];
			this.xVals.push(currentRow[mxIndex]);
			this.yVals.push(currentRow[myIndex]);
		}
		this.hexbin = d3.hexbin()
			.size([this.dimensions.chartWidth, this.dimensions.chartHeight])
			.radius(this.radius());
		var x = d3.scale.linear()
			.domain([0, d3.max(this.xVals)])	
			.range([0, this.dimensions.chartWidth]),
		y = d3.scale.linear()
			.domain([d3.max(this.yVals),0])	
			.range([0,this.dimensions.chartHeight]);
		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom")
			.tickSize(6,-this.dimensions.chartHeight),
		yAxis = d3.svg.axis()
	    	.scale(y)
	    	.orient("left")
	    	.tickSize(6, -this.dimensions.chartWidth);

		for(var i=0;i<vals.length;i++){
			var currentRow = vals[i];
			this.points.push([x(currentRow[mxIndex]),y(currentRow[myIndex])]);
		}
		this.hexbins = this.hexbin(this.points);
		this.yAxisGroup.transition().duration(this.ms())
			.call(yAxis);
	
		this.xAxisGroup.transition().duration(this.ms())
			.attr("transform", "translate(0," + this.dimensions.chartHeight + ")")	
			.call(xAxis);
		//alert(JSON.stringify(this.points));
		
		//alert([this.dimensions.chartWidth, this.dimensions.chartHeight]);
		
		var cp = ["#DFDFDF"];
		if(this.colorPalette()!=""){
			cp = this.colorPalette().split(",");
		}
		var min = this.tolerance();
		var max = this.threshold();
		switch (this.thresholdMethod()){
		case "Median":
			min = 0;
			max = d3.median(this.hexbins, function(d){ return d.length }) * 2;
			break;
		case "Mean":
			min = 0;
			max = d3.mean(this.hexbins, function(d){ return d.length }) * 2;
			break;
		case "Max":
			min = 0;
			max = d3.max(this.hexbins, function(d){ return d.length });
			break;
		}
		this.colorRange = d3.scale.quantize()
		.domain([min,max])
		.range(cp);
		//.interpolate(d3.interpolateLab);
			//z = d3.scale.category10();

		var n = d3.format(",d"),
		    p = d3.format("%");

		this.updateLegend();
		// Canvas
		
		
		var canvSelection = this.canvas.selectAll(".hexagon").data(this.hexbins);
		canvSelection.enter().append("path")
			.attr("class", "hexagon")
			.attr("d", this.hexbin.hexagon())
			.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
			.style("fill", function(d) { return that.colorRange(d.length); });
		
		canvSelection
			.transition().duration(this.ms())
			.attr("d", this.hexbin.hexagon())
			.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
			.style("fill", function(d) { return that.colorRange(d.length); });
		
		canvSelection.exit().remove();
		this._poller = window.setTimeout(function(){that.measureSize(that)},that._pollInterval);
	};
	/**
	 * Update Legend
	 */
	this.updateLegend = function(){
		var that = this;
		/**
		 * LEGEND
		 */
		var unit = 10;
		var rects = this.legendGroup.selectAll('rect.legend-swatch').data(this.flatData.rowHeaders);
		var legendLabels = this.legendGroup.selectAll('text.legend-amount').data(this.flatData.rowHeaders);
		var cp = [];
		var gradientStops = [];
		var legendSwatches = [];
		var extents = [];
		if(this.colorPalette()!="") {
			gradientStops = this.colorPalette().split(",");
			cp = this.colorPalette().split(",");
		}
		for (var i=0; i < gradientStops.length; i++) {
			legendSwatches.push(this.colorRange.invertExtent(gradientStops[i])[0]);
			extents.push({
    			min : this.colorRange.invertExtent(gradientStops[i])[0],	// Returns array of [min,max] per quantile "bucket"
    			max : this.colorRange.invertExtent(gradientStops[i])[1],
    		});
		}
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
	        	return that.legendTitle()
	        });
		// Add colors swatches
		var rects = this.legendGroup.selectAll('rect.legend-swatch').data(extents);
		var legendLabels = this.legendGroup.selectAll('text.legend-amount').data(extents);
		
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
	    
		return this;

	};
	this.displayMessage = function(message){
		this.messageText.text(message);
		this.messageGroup
			.attr("display", "inline")
			.transition().duration(this.ms())
			.attr("opacity", 1);
	}
	var parentInit = this.init;
	this.init = function(){
		parentInit.apply(this);
		this.$().addClass("Viz");
		this.calculateDimensions();
		this.svg = d3.select("#" + this.$().attr("id")).select("svg");
		if(this.svg.empty()){
			this.svg = d3.select("#" + this.$().attr("id")).append("svg");
			// Main Plot Area
			this.plotArea = this.svg.append("g");
			// Clip Path
			this.clip = this.plotArea.append("clipPath")
				.attr("id",this.$().attr("id")+"_clip");
			// Rectangle Shape for clip path
			this.clipRect = this.clip.append("rect")
				.attr("class","clipRect");
			// Canvas Group
			this.canvas = this.plotArea.append("g")
				.attr("clip-path","url(#" + this.$().attr("id")+"_clip)");
			/*
			 * Axes
			 */
			this.yAxisGroup = this.plotArea.append("g")
				.attr("class", "y axis");
			this.xAxisGroup = this.plotArea.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(0," + this.dimensions.chartHeight + ")");
			/*
			 * Legend
			 */
			this.legendGroup = this.svg.append('g')
        		.attr('class', "legend-group" );
			this.legendRect = this.legendGroup.append('rect')
	        	.attr("class", "legend-container")	
	        	.attr('x', 0)
	        	.attr('y', 0);
			this.legendLabel = this.legendGroup.append('text')
	        	.attr('class', 'legend-label');
			/*
			 * Messages
			 */
			this.messageGroup = this.svg.append("g")
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
		}
	}
};

/**
 * Initialization or Resize of Component
 */
org_scn_community_databound_BaseViz.prototype = {
	
	
};
