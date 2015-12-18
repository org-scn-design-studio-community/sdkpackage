/**
 * Axis Visualization Class for use in databound D3 (V3) Visualizations.
 */
define(["./VizBase","../../os/d3v3/d3-tip"], function(VizBase,d3tip) {
	VizAxisChart.prototype = VizBase;
	VizAxisChart.constructor = VizAxisChart;
	function VizAxisChart(options){
		var that = this;
		this.d3tip = d3tip()
			.attr('class', 'd3-tip DesignStudioSCN')
			.offset([-12, 0]);
		
		var properties = {
			xAxisTicks : { 
				value : 5,
				opts : {
					desc : "X-Axis Ticks",
					cat : "Axis-X Axis",
					apsControl : "spinner"	
				}
			},
			yAxisTicks : { 
				value : -1,
				opts : {
					desc : "Y-Axis Ticks",
					cat : "Axis-Y Axis",
					apsControl : "spinner"	
				}
			},
			xAxisTickFormat : {
				value : "%",
				opts : {
					desc : "X-Axis Tick Format",
					cat : "Axis-X Axis",
					apsControl : "text"
				}
			},
			yAxisTickFormat : {
				value : "%",
				opts : {
					desc : "Y-Axis Tick Format",
					cat : "Axis-Y Axis",
					apsControl : "text"
				}
			},
			xAxisOrientation : { 
				value : "bottom",
				opts : {
					apsControl : "combobox",
					desc : "X-Axis Orientation",
					cat : "Axis-X Axis",
					options : [{key : "bottom", text : "Bottom"},
					         {key : "top", text : "Top"}]
				}
			},
			yAxisOrientation : { 
				value : "left",
				opts : {
					apsControl : "combobox",
					desc : "Y-Axis Orientation",
					cat : "Axis-Y Axis",
					options : [{key : "left", text : "Left"},
					         {key : "right", text : "Right"}]
				}
			}
		};
		for(var prop in options) properties[prop] = options[prop];
		VizBase.call(this,properties);
		this.componentInfo.title = "Axis Chart";
		this.componentInfo.topics.push({
			title : "Axis Chart",
			content : "This component is a chart that has at least one Axis.  You will have some axis formatting options such as axis orientation and tick formatting"
		});
		var parentPreReq = this.preReqCheck;
		this.preReqCheck = function(){
			var status = parentPreReq.apply(this);
			return status;
		};
		var parentUpdatePlot = this.updatePlot;
		this.updatePlot = function() {
			this.updateAxes();
			this.resizePlotWindow();
			parentUpdatePlot.apply(this);
			return this;
		};
		this.resizePlotWindow = function(){
			this.clipRect
				//.transition().duration(this.ms())
				.attr("width", this.dimensions.plotWidth - this.dimensions.yAxisWidth)
				.attr("height", this.dimensions.plotHeight - this.dimensions.xAxisHeight);
			this.plotWindow
				.transition().duration(this.ms())
				.attr("transform", function(d){
					var x = 0;
					var y = 0;
					var translate = "";
					if(that.xAxisOrientation()=="top") y = that.dimensions.xAxisHeight;
					if(that.yAxisOrientation()=="left") x = that.dimensions.yAxisWidth;
					translate = "translate(" + x + "," + y + ")";
					return translate;	
				});
		}
		this.computeXScale = function(){
			this.xScale
				.domain([0,1])
				.range([0,this.dimensions.plotWidth]);
			return this;
		};
		this.computeYScale = function(){
			this.yScale
				.domain([0,1])
				.range([this.dimensions.plotWidth,0]);
			return this;
		};
		/**
		 * Update X/Y Axis
		 */
		this.updateAxes = function(){
			var that = this;
			this.dimensions.xAxisHeight = 0;
			this.dimensions.yAxisWidth = 0;
			this.computeXScale();
			var xTicks = this.xAxisTicks();
			var that = this;
			this.xAxis.scale(this.xScale)
				.tickFormat(d3.format(this.xAxisTickFormat()))
				.orient(this.xAxisOrientation())
				.tickSize(6);
			if(xTicks > 0) this.xAxis.ticks(xTicks);
			this.xAxisGroup.call(this.xAxis);
			this.xAxisGroup.selectAll("text").each(function() {
			    if(this.getBBox().height > that.dimensions.xAxisHeight) that.dimensions.xAxisHeight = this.getBBox().height;
			});
			this.dimensions.xAxisHeight = this.dimensions.xAxisHeight + 6 + 3;
			// X-Axis Height now known
			this.computeYScale();
			var yTicks = this.yAxisTicks();
			this.yAxis.scale(this.yScale)
		    	.orient(this.yAxisOrientation())
		    	.tickFormat(d3.format(this.yAxisTickFormat()))
		    	.tickSize(6);
			if(yTicks > 0) this.yAxis.ticks(yTicks);
			this.yAxisGroup.call(this.yAxis);
			this.yAxisGroup.selectAll("text").each(function() {
			    if(this.getBBox().width > that.dimensions.yAxisWidth) that.dimensions.yAxisWidth = this.getBBox().width;
			});
			this.dimensions.yAxisWidth = this.dimensions.yAxisWidth + 6 + 3;
			// Y-Axis Width now known - Must re-adjust X-Axis based on known Y-Axis width
			this.computeXScale();
			this.xAxis
				.scale(this.xScale)
				.orient(this.xAxisOrientation())
				.tickSize(6);
			if(xTicks > 0) this.xAxis.ticks(xTicks);
	
			this.yAxisGroup
				//.transition().duration(this.ms())
				.attr("transform", function(d){
					var x = that.dimensions.yAxisWidth;
					var y = 0;
					var translate = "";
					if(that.xAxisOrientation()=="top") y = that.dimensions.xAxisHeight;
					if(that.yAxisOrientation()=="right") x = that.dimensions.plotWidth - that.dimensions.yAxisWidth;
					translate = "translate(" + x + "," + y + ")";
					return translate;	
				})
				.call(this.yAxis);
			
			this.xAxisGroup
				//.transition().duration(this.ms())
				.attr("transform", function(d){
					var x = 0;
					var y = that.dimensions.xAxisHeight;
					var translate = "";
					if(that.xAxisOrientation()=="bottom") y = that.dimensions.plotHeight - that.dimensions.xAxisHeight;
					if(that.yAxisOrientation()=="left") x = that.dimensions.yAxisWidth;
					translate = "translate(" + x + "," + y + ")";
					return translate;	
				})
				.call(this.xAxis);
			return this;
		}
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
			/*
			 * Axes
			 */
			this.yAxisGroup = this.plotArea.append("g")
				.attr("class", "y axis")
				.attr("id",this.$().attr("id")+"_yaxis");
			this.xAxisGroup = this.plotArea.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(0," + this.dimensions.plotHeight + ")")
				.attr("id",this.$().attr("id")+"_xaxis");
			this.yAxis = d3.svg.axis();
			this.xAxis = d3.svg.axis();
			this.$().addClass("AxisChart");
		}
	}
	return VizAxisChart;
});