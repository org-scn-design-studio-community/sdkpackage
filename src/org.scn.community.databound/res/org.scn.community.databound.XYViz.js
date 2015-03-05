/**
 * XY Visualization Class for use in databound D3 (V3) Visualizations.
 */
org_scn_community_databound_XYViz.prototype = org_scn_community_databound_BaseViz;
org_scn_community_databound_XYViz.constructor = org_scn_community_databound_XYViz;
function org_scn_community_databound_XYViz(d3, options){
	var that = this;
	var properties = {
		xAxisTicks : { 
			value : 5,
			opts : {
				desc : "X-Axis Ticks",
				cat : "Axis",
				apsControl : "spinner"	
			}
		},
		yAxisTicks : { 
			value : -1,
			opts : {
				desc : "Y-Axis Ticks",
				cat : "Axis",
				apsControl : "spinner"	
			}
		},
		xAxisOrientation : { 
			value : "bottom",
			opts : {
				apsControl : "combobox",
				desc : "X-Axis Orientation",
				cat : "Axis",
				options : [{key : "bottom", text : "Bottom"},
				         {key : "top", text : "Top"}]
			}
		},
		yAxisOrientation : { 
			value : "left",
			opts : {
				apsControl : "combobox",
				desc : "Y-Axis Orientation",
				cat : "Axis",
				options : [{key : "left", text : "Left"},
				         {key : "right", text : "Right"}]
			}
		},
		maxX : {
			value : 0,
			opts : {
				desc : "X-Axis Manual Max",
				cat : "Axis",
				apsControl : "spinner"
			}
		},
		maxY : { 
			value : 0,
			opts : {
				desc : "Y-Axis Manual Max",
				cat : "Axis",
				apsControl : "spinner"
			}
		},
		minX : { 
			value : 0,
			opts : {
				desc : "X-Axis Manual Min",
				cat : "Axis",
				apsControl : "spinner"
			}
		},
		minY : { 
			value : 0,
			opts : {
				desc : "Y-Axis Manual Min",
				cat : "Axis",
				apsControl : "spinner"
			}
		},
		measureX : { 
			value : "",
			opts : {
				desc : "X-Axis Measure",
				cat : "Data",
				apsControl : "text"
			} 
		},
		measureY : { 
			value : "",
			opts : {
				desc : "Y-Axis Measure",
				cat : "Data",
				apsControl : "text"
			} 
		}
	};
	for(var prop in options) properties[prop] = options[prop];
	org_scn_community_databound_BaseViz.call(this,d3,properties);

	var parentPreReq = this.preReqCheck;
	this.preReqCheck = function(){
		var status = parentPreReq.apply(this);
		if(!status.success) return status;
		if(this.flatData.columnHeaders.length<2) return {
			success : false,
			reason : "I need at least 2 measures"
		};
		if(this.measureX() != "" && this.measureX() == this.measureY()) return {
			success : false,
			reason : "X and Y Axis Measures should not be the same."
		}
		return status;
	};
	var parentUpdatePlot = this.updatePlot;
	this.updatePlot = function() {
		parentUpdatePlot.apply(this);
		return this;
	};
	/**
	 * Update X/Y Axis
	 */
	this.updateAxes = function(){
		var xTicks = this.xAxisTicks();
		var yTicks = this.yAxisTicks();
		var that = this;
		// D3 time
		var vals = [];
		vals = this.flatData.values.slice();
		var mx = this.measureX();
		var my = this.measureY();
		var mxIndex = 0;
		var myIndex = 1;
		for(var i=0;i<this.flatData.columnHeaders.length;i++){
			if(this.flatData.columnHeaders[i] == mx) mxIndex = i;
			if(this.flatData.columnHeaders[i] == my) myIndex = i;
		}
		this.xVals = [];
		this.yVals = [];
		for(var i=0;i<vals.length;i++){
			var currentRow = vals[i];
			this.xVals.push(currentRow[mxIndex]);
			this.yVals.push(currentRow[myIndex]);
		}
		this.xScale = d3.scale.linear()
			.domain([(this.minX() || d3.min(this.xVals)), (this.maxX() || d3.max(this.xVals))])	
			.range([0, (this.dimensions.plotWidth)]);
		this.xAxis = d3.svg.axis()
			.scale(this.xScale)
			.orient(this.xAxisOrientation())
			.tickSize(6/*,-this.dimensions.plotHeight*/);
		if(xTicks > 0) this.xAxis.ticks(xTicks);
		this.xAxisGroup.call(this.xAxis);
		var maxh = 0;
		this.xAxisGroup.selectAll("text").each(function() {
		    if(this.getBBox().height > maxh) maxh = this.getBBox().height;
		});
		this.dimensions.xAxisHeight = maxh + 6 + 3;
		this.yScale = d3.scale.linear()
			.domain([this.maxY() || d3.max(this.yVals),this.minY() || d3.min(this.yVals)])	
			.range([0,(this.dimensions.plotHeight - this.dimensions.xAxisHeight)]);
		this.yAxis = d3.svg.axis()
	    	.scale(this.yScale)
	    	.orient(this.yAxisOrientation())
	    	.tickSize(6/*, -this.dimensions.plotWidth*/);
		if(yTicks > 0) this.yAxis.ticks(yTicks);
		this.yAxisGroup.call(this.yAxis);
		var maxw = 0;
		this.yAxisGroup.selectAll("text").each(function() {
		    if(this.getBBox().width > maxw) maxw = this.getBBox().width;
		});
		this.dimensions.yAxisWidth = maxw + 6 + 3;
		// Update X range now that we know y-axis width
		this.xScale.range([0, (this.dimensions.plotWidth - this.yAxisWidth)]);
		this.xAxis.scale(this.xScale);
		this.xAxisGroup.call(this.xAxis);
		
		this.xScale = d3.scale.linear()
			.domain([(this.minX() || d3.min(this.xVals)), (this.maxX() || d3.max(this.xVals))])	
			.range([0, (this.dimensions.plotWidth-this.dimensions.yAxisWidth)]);
		
		this.xAxis = d3.svg.axis()
			.scale(this.xScale)
			.orient(this.xAxisOrientation())
			.tickSize(6/*,-this.dimensions.plotHeight*/);
		if(xTicks > 0) this.xAxis.ticks(xTicks);
		return this;
	}
	this.afterUpdate = function() {
		var that = this;
		this.calculateDimensions()
			.updateCosmetics();
		
		var check = this.preReqCheck();
		if(check.success){
			this.updateAxes()
				.updatePlot()
				.updateLegend();
		}else{
			// Give informational window
			this.displayMessage(check.reason);
			return;
		}
		this._poller = window.setTimeout(function(){that.measureSize(that)},that._pollInterval);
	};
	/**
	 * Update Legend
	 */
	this.updateLegend = function(){
		this.legendLabel.text(this.legendTitle());
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
			this.canvas = this.svg.append("g");
			// Clip Path
			this.clip = this.canvas.append("clipPath")
				.attr("id",this.$().attr("id")+"_clip");
			// Rectangle Shape for clip path
			this.clipRect = this.clip.append("rect")
				.attr("class","clipRect");
			// Plot Area
			this.plotArea = this.canvas.append("g");
			// Plot Layer
			this.plotLayer = this.plotArea.append("g")
				.attr("clip-path","url(#" + this.$().attr("id")+"_clip)");
			/*
			 * Axes
			 */
			this.yAxisGroup = this.plotArea.append("g")
				.attr("class", "y axis");
			this.xAxisGroup = this.plotArea.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(0," + this.dimensions.plotHeight + ")");
			/*
			 * Legend
			 */
			this.legendGroup = this.canvas.append('g')
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