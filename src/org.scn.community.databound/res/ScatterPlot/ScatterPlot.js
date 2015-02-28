(function() {
	 var myScript = $("script:last")[0].src;
	 _readScriptPath = function () {
		 if(myScript) {
 			var myScriptSuffix = "res/ScatterPlot/";
 			var myPluginSuffix = "org.scn.community.databound/";
 			var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 			var mainSDKPathIndex = myScript.indexOf(myPluginSuffix);
 			var mainSDKPath = myScript.substring(0, mainSDKPathIndex);
 			var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 			return {
 				myScriptPath : ownScriptPath,	// http://localhost:9091/aad/zen/mimes/sdk_include/org.scn.community.databound/res/ScatterPlot/
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
			d3 :		pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3.min",
			d3tip :		pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3-tip"
		 }
	 });
	 sdkReqs(["require","d3","d3tip"], function(require,d3,d3tip) {
		 var tip = d3tip()
		 	.attr('class', 'd3-tip')
		 	.html(function(d) { return '<span>' + d.label + '</span><br/>' + d.x + "," + d.y })
		 	.offset([-12, 0]);
		 /**
		 * Scatter Plot based on D3 Example:
		 * http://bl.ocks.org
		 */
		 ScatterPlot.prototype = org_scn_community_databound_XYViz;
		 ScatterPlot.prototype.constructor = ScatterPlot;
		 ScatterPlot.prototype.toString = function(){
	    	 return "org.scn.community.databound.ScatterPlot";
	     }
	     function ScatterPlot() {
	    	// Call super
	    	org_scn_community_databound_XYViz.call(this, d3,{
				radius : { value : 20 },
				bubbleMin : { value : 3 },
				bubbleMax : { value : 3 },
				colorDimension : { value : ""}
			});
	    	var parentInit = this.init;
	    	this.init = function(){
	    		parentInit.call(this);
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
	    		var my = this.measureY();
	    		var mz = this.measureZ();
	    		var cd = this.colorDimension();
	    		var mxIndex = 0;
	    		var myIndex = 1;
	    		var mzIndex = -1;
	    		var cdIndex = 0;
	    		for(var i=0;i<this.flatData.columnHeaders.length;i++){
	    			if(this.flatData.columnHeaders[i] == mx) mxIndex = i;
	    			if(this.flatData.columnHeaders[i] == my) myIndex = i;
	    			if(this.flatData.columnHeaders[i] == mz) mzIndex = i;
	    		}
	    		for(var i=0;i<this.flatData.dimensionHeaders.length;i++){
	    			if(this.flatData.dimensionHeaders[i]==cd) cdIndex = i;
	    		}
				for(var i=0;i<vals.length;i++){
					var currentRow = vals[i];
					var point = {
						x : currentRow[mxIndex],
						y : currentRow[myIndex],
						label : this.flatData.rowHeaders2D[i][cdIndex]
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
					.domain(this.points.map(function(d){return d.label;}))
					.range(cp);
				this.clipRect
					//.transition().duration(this.ms())
					.attr("width", this.dimensions.plotWidth - this.dimensions.yAxisWidth)
					.attr("height", this.dimensions.plotHeight - this.dimensions.xAxisHeight);
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
				});
				
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
				this.plotLayer.transition().duration(this.ms())
					.attr("transform", function(d){
						var x = 0;
						var y = 0;
						var translate = "";
						if(that.xAxisOrientation()=="top") y = that.dimensions.xAxisHeight;
						if(that.yAxisOrientation()=="left") x = that.dimensions.yAxisWidth;
						translate = "translate(" + x + "," + y + ")";
						return translate;	
					});
				var canvSelection = this.plotLayer.selectAll(".scatterplot").data(this.points);
				canvSelection.enter().append("circle")
					.attr("class", "scatterplot")
					.attr("r", function(d){
						if(d.z){
							return that.bubbleScale(d.z);
						}else{
							return that.radius();
						}
					})
					.attr("cx",function(d){return that.xScale(d.x)})
					.attr("cy",function(d){return that.yScale(d.y)})
					//.attr("d", this.hexbin.hexagon())
					.attr("opacity",0)
					//.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ") scale(0)"; })
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide)
					.style("fill", function(d) { return that.colorRange(d.label); });
				
				canvSelection
					.attr("r", function(d){
						if(d.z){
							return that.bubbleScale(d.z);
						}else{
							return that.radius();
						}
					})
					.transition().duration(this.ms())
					.attr("cx",function(d){return that.xScale(d.x)})
					.attr("cy",function(d){return that.yScale(d.y)})
					//.attr("d", this.hexbin.hexagon())
					.attr("opacity",.6)
					//.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ") scale(1)"; })
					.style("fill", function(d) { return that.colorRange(d.label); });

				canvSelection.exit().remove();
				canvSelection.call(tip);
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
		sap.designstudio.sdk.Component.subclass("org.scn.community.databound.ScatterPlot", ScatterPlot);	// End of SDK
		sap.zen.Dispatcher.instance.resumeDispatching();
	 });//End of Require Callback 	
})();// End of closure