(function() {
	 var myScript = $("script:last")[0].src;
	 var ownComponentName = "org.scn.community.databound.HexBin";
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
						cat : "Cosmetics-Scale",
						apsControl : "spinner"	
					}
				},
				threshold : { 
					value : 0,
					opts : {
						desc : "Threshold",
						cat : "Cosmetics-Scale",
						apsControl : "spinner"	
					}
				},
				thresholdMethod : { 
					value : "Manual",
					opts : {
						apsControl : "combobox",
						desc : "Threshold Method",
						cat : "Cosmetics-Scale",
						options : [{key : "Manual", text : "Manual"},
						         {key : "Median", text : "Median"},
						         {key : "Mean", text : "Mean"},
						         {key : "Max", text : "Max"}]
					}
				},
			});
	    	this.componentInfo.title = "HexBin Chart";
	    	this.componentInfo.description = "A HexBin Chart is useful for aggregating data into a clustered visualization where analysis of density of occurences is important.  Rather than say, a Scatter Plot which may contain hundreds of points in close proximity, a HexBin Chart will 'bin' or 'cluster' these within a given hexagonal radius, apply a color based on an ordinal scale dictated by your color palette."+
	    	"This chart is based on and inspired by <a target='_blank' href='https://github.com/d3/d3-plugins/tree/master/hexbin'>D3's Hexagonal Binning plugin</a> which itself is based on <a target='_blank' href='http://indiemaps.com/blog/2011/10/hexbins/'>Zachary Forest Johnson's work</a>";
	    	this.componentInfo.topics.push({
	    		title : "HexBin Chart",
	    		content : "HexBin Charts have an X and Y Axis similar to a Scatter Chart, however instead of individual plots, they are aggregated to hexagons of a certain radius.  As such, you have properties such as Radius, and color palette, and scale thresholds to control visualization."
	    	});
	    	var parentInit = this.init;
	    	this.init = function(){
	    		parentInit.call(this);
	    		this.svg.call(tip);
	    		this.pathGroup = this.plotLayer.append('g')
					.attr('class', 'path-group');
	    		this.labelGroup = this.plotLayer.append('g')
					.attr('class', 'label-group');
	    		this.$().addClass("HexBin");
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