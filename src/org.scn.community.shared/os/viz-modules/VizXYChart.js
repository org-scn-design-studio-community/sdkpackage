/**
 * XY Visualization Class for use in databound D3 (V3) Visualizations.
 */
define(["./VizAxisChart"], function(VizAxisChart) {
	VizXYChart.prototype = VizAxisChart;
	VizXYChart.constructor = VizXYChart;
	function VizXYChart(options){
		var that = this;
		var properties = {
			maxX : {
				value : 0,
				opts : {
					desc : "X-Axis Manual Max",
					cat : "Axis-X Axis",
					apsControl : "spinner"
				}
			},
			maxY : { 
				value : 0,
				opts : {
					desc : "Y-Axis Manual Max",
					cat : "Axis-Y Axis",
					apsControl : "spinner"
				}
			},
			minX : { 
				value : 0,
				opts : {
					desc : "X-Axis Manual Min",
					cat : "Axis-X Axis",
					apsControl : "spinner"
				}
			},
			minY : { 
				value : 0,
				opts : {
					desc : "Y-Axis Manual Min",
					cat : "Axis-Y Axis",
					apsControl : "spinner"
				}
			},
			measureX : { 
				opts : {
					desc : "X-Axis Measure",
					cat : "Data",
					apsControl : "measureselector"
				}
			},
			measureY : { 
				opts : {
					desc : "Y-Axis Measure",
					cat : "Data",
					apsControl : "measureselector"
				}		
			}
		};
		for(var prop in options) properties[prop] = options[prop];
		VizAxisChart.call(this,properties);
		this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALESURBVDhPLZL7T5JRGMffP8m1WVtjtZlrs2m/uHJd1rxgknOp/ZJbbhlroaEhXgAxQN8LeAFBQExJhMTNLBPEWyga10rLUHjfF4H3nM6rbp+dPWfn8z3nOWcHA2kTYCwgJM/P1HOuRm6qloazTM5Kn4GKHGddPTRKfURvgOxbJzBAmwE9kY+pkcpNizhnAw1nLuzsJJO3QmhbSIx1+YiBIN71lcJAvI/J29PAgZYzEeW5jWqQMsKUMc9MKDZI6Squ2ibqcGOhyIEC75B01oONBlPne7PQAWkTTJvYpEm8wjej3sFvv7YImuwYO9/6b22QhU7knbJmfnvophck/AmsNZse0W7rpD5KuUU0Gceu1E9hu9eLdwqu/h0XQ86KJAAdKUlF6kFh6s6lo2NNlFWksooPYe07P6n6fnaHvdJboaLiw/ZGCO3oxSB0nZQXpBqK6HuX43/kcXbggFV6f76XrlIXr7RfUhIS3IgHOjKnYxDOcJvd7KuSdKXg5EUpshOM6oBRehPawU1C5idRBstpKmKQiOfUkfxg2iLKdpZlVXcZfVUE6pEdp5XTP4bnokOLCZ12i5CvkVimvzwCtWghCrTp0ZpsTzkiZRSi6S9a+ZtVfowOuWI6b0KnOQ9wAVkyQ8UY1VGyn/O9zGruI1CRTPbH0qqR3SH9Du6J68x7wz1rJAIDrAXSFniggyEJiHSChIwn0gn3JT1+vMtPdftJ1D0C2b0B9DXQX8rYwBEOwm8hItLOE+6A0TeajWF0S8U6ccEmoQ7iGGDM3JY0P9sAl5+HgvJmL/7Mi4eDMt2KWuihJN/I1mWy2k21fCHE84abrTYMJkc5u5CbewqdojbXwEOPocpDVbgMj9x6FKj2kDUestZD1S0RRW2TgkY7Rh+PZ2fr+cDcE/GitsrDey2fCTQ+/kRWOg1CN1+Ilogy2cS1Zvt/xoQxnd26GQEAAAAASUVORK5CYII=";
		this.componentInfo.topics.push({
			title : "XY Chart",
			content : "This chart uses the X and Y axis as linear scales for a measure on each scale.  Unlike ordinal scales, where dimensions are represented on an axis, dimensions are plotted based on its X and Y values in a coordinate space."
		});
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
			var mxObj = jQuery.parseJSON(mx);
			if(typeof mxObj == "object"){
				mx = that.determineMeasureName(mxObj);
			}else{
				mx = mxObj;
			}
			for(var i=0;i<this.flatData.columnHeaders.length;i++){
				if(this.flatData.columnHeadersKeys[i] == mx) mxIndex = i;
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
			var myIndex = 0;
			var myObj = jQuery.parseJSON(my);
			if(typeof myObj == "object"){
				my = that.determineMeasureName(myObj);
			}else{
				my = myObj;
			}
			for(var i=0;i<this.flatData.columnHeaders.length;i++){
				if(this.flatData.columnHeadersKeys[i] == my) myIndex = i;
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
	}
	return VizXYChart;
});