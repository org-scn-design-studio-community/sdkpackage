(function() {
	 var myScript = $("script:last")[0].src;
	 var ownComponentName = "org.scn.community.databound.HexBin";
	 var _readScriptPath = function () {
		 var scriptInfo = org_scn_community_basics.readGenericScriptAccess(myScript, "res/HexBin", "databound");
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
			d3tip :		pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3-tip",
			hexbin :	pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3-hexbin"
		 }
	 });
	 sdkReqs(["require","d3","d3tip","hexbin"], function(require,d3,d3tip,d3hexbin) {
		 var tip = d3tip()
		 	.attr('class', 'd3-tip')
		 	.html(function(d) { return '<span>' + d.length + ' occurences<br/>'/* + d.i + "," + d.j*/ + '</span>'})
		 	.offset([-12, 0]);
		 /**
		 * Hexagonal Binning based on D3 Example:
		 * http://bl.ocks.org/mbostock/4248145
		 */
		 HexBin.prototype = org_scn_community_databound_XYViz;
		 HexBin.prototype.constructor = HexBin;
		 HexBin.prototype.toString = function(){
	    	 return ownComponentName;
	     }
	     function HexBin() {
	    	// Call super
	    	org_scn_community_databound_XYViz.call(this, d3,{
				radius : { 
					value : 20,
					opts : {
						desc : "Hexagon Radius",
						cat : "Cosmetics",
						apsControl : "spinner"	
					}
				},
				tolerance : { 
					value : 5,
					opts : {
						desc : "Tolerance",
						cat : "Cosmetics",
						apsControl : "spinner"	
					}
				},
				threshold : { 
					value : 0,
					opts : {
						desc : "Threshold",
						cat : "Cosmetics",
						apsControl : "spinner"	
					}
				},
				thresholdMethod : { 
					value : "Manual",
					opts : {
						apsControl : "combobox",
						desc : "Threshold Method",
						cat : "Cosmetics",
						options : [{key : "Manual", text : "Manual"},
						         {key : "Median", text : "Median"}]
					}
				},
			});
	    	var parentInit = this.init;
	    	this.init = function(){
	    		parentInit.call(this);
	    		this.pathGroup = this.plotLayer.append('g')
					.attr('class', 'path-group');
	    		this.labelGroup = this.plotLayer.append('g')
					.attr('class', 'label-group');
	    		this.$().addClass("HexBin");
	    	}
	    	var parentUpdatePlot = this.updatePlot;
	    	this.updatePlot = function(){
	    		parentUpdatePlot.call(this);
	    		this.svg.call(tip);
	    		var that = this;
	    		this.points = [];
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
				for(var i=0;i<vals.length;i++){
					var currentRow = vals[i];
					this.points.push([this.xScale(currentRow[mxIndex]),this.yScale(currentRow[myIndex])]);
				}
				this.hexbin = d3.hexbin()
					.size([(this.dimensions.plotWidth - this.dimensions.yAxisWidth), (this.dimensions.plotHeight - this.dimensions.xAxisHeight)])
					.radius(this.radius());
				this.hexbins = this.hexbin(this.points);
				// Build Color Range
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
				this.plotWindow.transition().duration(this.ms())
					.attr("transform", function(d){
						var x = 0;
						var y = 0;
						var translate = "";
						if(that.xAxisOrientation()=="top") y = that.dimensions.xAxisHeight;
						if(that.yAxisOrientation()=="left") x = that.dimensions.yAxisWidth;
						translate = "translate(" + x + "," + y + ")";
						return translate;	
					});
				var labelSelection = this.labelGroup.selectAll("text").data(this.hexbins);
				var canvSelection = this.pathGroup.selectAll(".hexagon").data(this.hexbins);
				canvSelection.enter().append("path")
					.attr("class", "hexagon")
					.attr("d", this.hexbin.hexagon())
					.attr("opacity",0)
					.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ") scale(0)"; })
					.on("mouseover",tip.show)
					.on("mouseout",tip.hide)
					.style("fill", function(d) { return that.colorRange(d.length); });
				
				labelSelection.enter().append("text")
					.attr("class","chartValue")
					.attr("text-anchor","middle")
					.attr("pointer-events", "none")
	  		  		.attr("dy",".5em")
					.attr("style",this.chartValueStyle())
					.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ") scale(1)"; });
				
				canvSelection
					.transition().duration(this.ms())
					.attr("d", this.hexbin.hexagon())
					.attr("opacity",this.plotAlpha()/100)
					.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ") scale(1)"; })
					.style("fill", function(d) { return that.colorRange(d.length); });
				
				labelSelection
					.text(function(d){return d.length;})
					.transition().duration(this.ms())
					.attr("opacity",function(){
							var op = 0;
							if(that.showValues()) op = that.plotAlpha()/100;
							return op;
	    			})
					.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ") scale(1)"; });
				
				
				canvSelection.exit().remove();
				labelSelection.exit().remove();
				return this;
	    	}
	    	var parentUpdateLegend = this.updateLegend;
	    	this.updateLegend = function(){
	    		parentUpdateLegend.apply(this);
	    		var that = this;
	    		var n = d3.format(",d"),
	    		    p = d3.format("%");
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
	    	        .attr('y', (unit * 2));
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
	    	    
	    	}
		}
		sap.designstudio.sdk.Component.subclass(ownComponentName, HexBin);	// End of SDK
		sap.zen.Dispatcher.instance.resumeDispatching();
	 });//End of Require Callback 	
})();// End of closure