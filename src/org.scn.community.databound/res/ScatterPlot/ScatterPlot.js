(function() {
	 var myScript = $("script:last")[0].src;
	 var ownComponentName = "org.scn.community.databound.ScatterPlot";
	 var _readScriptPath = function () {
		 var scriptInfo = org_scn_community_basics.readOwnScriptAccess(myScript, ownComponentName);
		 return scriptInfo;
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
		 	.html(function(d) { 
		 		var html = "<span>";
		 		var sep = "";
		 		for(var i=0;i<d.labels.length;i++){
		 			html+=d.labels[i]+"<br/>";
		 		}
		 		html += d.x + "," + d.y;
		 		if(d.z) html+= "," + d.z;
		 		html+="</span>";
		 		return html;
		 	})
		 	//.offset([-12, 0]);
		 	.offset(function(d) {
		 		return [(this.getBBox().height / 2) - 12, 0]
		 	});
		 /**
		 * Scatter Plot based on D3 Example:
		 * http://bl.ocks.org
		 */
		 ScatterPlot.prototype = org_scn_community_databound_XYViz;
		 ScatterPlot.prototype.constructor = ScatterPlot;
		 ScatterPlot.prototype.toString = function(){
	    	 return ownComponentName;
	     }
	     function ScatterPlot() {
	    	// Call super
	    	org_scn_community_databound_XYViz.call(this, d3,{
				radius : { 
					value : 20,
					opts : {
						desc : "Plot Radius",
						cat : "Cosmetics",
						apsControl : "spinner"	
					}
				},
				bubbleMin : { 
					value : 5,
					opts : {
						desc : "Minimum Bubble Size",
						cat : "Cosmetics",
						apsControl : "spinner"	
					}
				},
				bubbleMax : { 
					value : 20,
					opts : {
						desc : "Maximum Bubble Size",
						cat : "Cosmetics",
						apsControl : "spinner"	
					}
				},
				measureZ : { 
					value : "",
					opts : {
						desc : "Z-Axis Measure",
						cat : "Data",
						apsControl : "text"
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
	    	var parentInit = this.init;
	    	this.init = function(){
	    		parentInit.call(this);
	    		this.svg.call(tip);
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
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide)
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
		sap.designstudio.sdk.Component.subclass(ownComponentName, ScatterPlot);	// End of SDK
		sap.zen.Dispatcher.instance.resumeDispatching();
	 });//End of Require Callback 	
})();// End of closure