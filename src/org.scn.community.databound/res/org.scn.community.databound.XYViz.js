/**
 * XY Visualization Class for use in databound D3 (V3) Visualizations.
 */
org_scn_community_databound_XYViz.prototype = org_scn_community_databound_AxisChart;
org_scn_community_databound_XYViz.constructor = org_scn_community_databound_XYViz;
function org_scn_community_databound_XYViz(d3, options){
	var that = this;
	var properties = {
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
	org_scn_community_databound_AxisChart.call(this,d3,properties);

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
		this.updateAxes();
		parentUpdatePlot.apply(this);
		return this;
	};
	/**
	 * Compute X Scale
	 */
	var parentComputeXScale = this.computeXScale;
	this.computeXScale = function(){
		parentComputeXScale.apply(this);
		var mx = this.measureX();
		var mxIndex = 0;
		for(var i=0;i<this.flatData.columnHeaders.length;i++){
			if(this.flatData.columnHeaders[i] == mx) mxIndex = i;
		}
		this.xVals = [];
		for(var i=0;i<this.flatData.values.length;i++){
			var currentRow = this.flatData.values[i];
			this.xVals.push(currentRow[mxIndex]);
		}
		var reverseXDomain = [(this.minX() || d3.min(this.xVals)), (this.maxX() || d3.max(this.xVals))];
		this.xScale
			.domain(reverseXDomain)	
			.range([0, (this.dimensions.plotWidth - this.dimensions.yAxisWidth)]);
		if(this.enableZoom()){
			reverseXDomain[0] = this.xScale.invert(this.zoomXScale.domain()[0]);
			reverseXDomain[1] = this.xScale.invert(this.zoomXScale.domain()[1]);
			this.xScale.domain(reverseXDomain);
		}
		return this;
	}
	/**
	 * Compute Y Scale
	 */
	var parentComputeYScale = this.computeYScale;
	this.computeYScale = function(){
		parentComputeYScale.apply(this);
		var my = this.measureY();
		var myIndex = 1;
		for(var i=0;i<this.flatData.columnHeaders.length;i++){
			if(this.flatData.columnHeaders[i] == my) myIndex = i;
		}
		this.yVals = [];
		for(var i=0;i<this.flatData.values.length;i++){
			var currentRow = this.flatData.values[i];
			this.yVals.push(currentRow[myIndex]);
		}
		var reverseDomain = [this.maxY() || d3.max(this.yVals),this.minY() || d3.min(this.yVals)];
		this.yScale
			.domain(reverseDomain)	
			.range([0,(this.dimensions.plotHeight - this.dimensions.xAxisHeight)]);
		if(this.enableZoom()){
			reverseDomain[0] = this.yScale.invert(this.zoomYScale.domain()[0]);
			reverseDomain[1] = this.yScale.invert(this.zoomYScale.domain()[1]);
			this.yScale.domain(reverseDomain);			
		}
		return this;
	}	
	/**
	 * Update X/Y Axis
	 */
	var parentUpdateAxes = this.updateAxes;
	//this.updateAxes = function(){ }
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
		this.$().addClass("VizXY");
	}
};