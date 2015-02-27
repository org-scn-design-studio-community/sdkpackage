(function() {
	 var myScript = $("script:last")[0].src;
	 _readScriptPath = function () {
		 if(myScript) {
 			var myScriptSuffix = "res/HexBin/";
 			var myPluginSuffix = "org.scn.community.databound/";
 			var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 			var mainSDKPathIndex = myScript.indexOf(myPluginSuffix);
 			var mainSDKPath = myScript.substring(0, mainSDKPathIndex);
 			var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 			return {
 				myScriptPath : ownScriptPath,	// http://localhost:9091/aad/zen/mimes/sdk_include/org.scn.community.databound/res/HexBin/
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
		 context : "sdkhexbin",
		 paths: {
			d3 :     pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3.min"/*
			hexbin : pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3-hexbin"
			*/
		 },
		 shim : {
			d3 : {
				// exports : "d3"
			}/*,
			hexbin : {
				deps : ["d3"]
			}*/
		 }
	 });
	 sdkReqs(["require","d3"], function(require,d3) {
		 d3.hexbin = function() {
			  var width = 1,
			      height = 1,
			      r,
			      x = d3_hexbinX,
			      y = d3_hexbinY,
			      dx,
			      dy;

			  function hexbin(points) {
			    var binsById = {};

			    points.forEach(function(point, i) {
			      var py = y.call(hexbin, point, i) / dy, pj = Math.round(py),
			          px = x.call(hexbin, point, i) / dx - (pj & 1 ? .5 : 0), pi = Math.round(px),
			          py1 = py - pj;

			      if (Math.abs(py1) * 3 > 1) {
			        var px1 = px - pi,
			            pi2 = pi + (px < pi ? -1 : 1) / 2,
			            pj2 = pj + (py < pj ? -1 : 1),
			            px2 = px - pi2,
			            py2 = py - pj2;
			        if (px1 * px1 + py1 * py1 > px2 * px2 + py2 * py2) pi = pi2 + (pj & 1 ? 1 : -1) / 2, pj = pj2;
			      }

			      var id = pi + "-" + pj, bin = binsById[id];
			      if (bin) bin.push(point); else {
			        bin = binsById[id] = [point];
			        bin.i = pi;
			        bin.j = pj;
			        bin.x = (pi + (pj & 1 ? 1 / 2 : 0)) * dx;
			        bin.y = pj * dy;
			      }
			    });

			    return d3.values(binsById);
			  }

			  function hexagon(radius) {
			    var x0 = 0, y0 = 0;
			    return d3_hexbinAngles.map(function(angle) {
			      var x1 = Math.sin(angle) * radius,
			          y1 = -Math.cos(angle) * radius,
			          dx = x1 - x0,
			          dy = y1 - y0;
			      x0 = x1, y0 = y1;
			      return [dx, dy];
			    });
			  }

			  hexbin.x = function(_) {
			    if (!arguments.length) return x;
			    x = _;
			    return hexbin;
			  };

			  hexbin.y = function(_) {
			    if (!arguments.length) return y;
			    y = _;
			    return hexbin;
			  };

			  hexbin.hexagon = function(radius) {
			    if (arguments.length < 1) radius = r;
			    return "m" + hexagon(radius).join("l") + "z";
			  };

			  hexbin.centers = function() {
			    var centers = [];
			    for (var y = 0, odd = false, j = 0; y < height + r; y += dy, odd = !odd, ++j) {
			      for (var x = odd ? dx / 2 : 0, i = 0; x < width + dx / 2; x += dx, ++i) {
			        var center = [x, y];
			        center.i = i;
			        center.j = j;
			        centers.push(center);
			      }
			    }
			    return centers;
			  };

			  hexbin.mesh = function() {
			    var fragment = hexagon(r).slice(0, 4).join("l");
			    return hexbin.centers().map(function(p) { return "M" + p + "m" + fragment; }).join("");
			  };

			  hexbin.size = function(_) {
			    if (!arguments.length) return [width, height];
			    width = +_[0], height = +_[1];
			    return hexbin;
			  };

			  hexbin.radius = function(_) {
			    if (!arguments.length) return r;
			    r = +_;
			    dx = r * 2 * Math.sin(Math.PI / 3);
			    dy = r * 1.5;
			    return hexbin;
			  };

			  return hexbin.radius(1);
			};

			var d3_hexbinAngles = d3.range(0, 2 * Math.PI, Math.PI / 3),
			    d3_hexbinX = function(d) { return d[0]; },
			    d3_hexbinY = function(d) { return d[1]; };

		 /**
		 * Hexagonal Binning based on D3 Example:
		 * http://bl.ocks.org/mbostock/4248145
		 */
		 HexBin.prototype = org_scn_community_databound_BaseViz;
	     HexBin.prototype.constructor = HexBin;
	     HexBin.prototype.toString = function(){
	    	 return "org.scn.community.databound.HexBin";
	     }
	     function HexBin() {
	    	// Call super
	    	org_scn_community_databound_BaseViz.call(this,d3,{
				measureX : { value : "" },
				maxX : { value : -1 },
				maxY : { value : -1 },
				measureY : { value : "" },
				radius : { value : 20 },
				tolerance : { value : 0 },
				threshold : { value : 20 },
				thresholdMethod : { value : "Manual" },
				margin : { value : 20},
				showValues : { value : true}
			});
	    	var parentInit = this.init;
	    	this.init = function(){
	    		parentInit.call(this);
	    		this.$().addClass("HexBin");
	    	}
	    	var parentUpdatePlot = this.updatePlot;
	    	this.updatePlot = function(){
	    		parentUpdatePlot.call(this);
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
				this.points = [];
				this.xVals = [];
				this.yVals = [];
				for(var i=0;i<vals.length;i++){
					var currentRow = vals[i];
					this.xVals.push(currentRow[mxIndex]);
					this.yVals.push(currentRow[myIndex]);
				}
				var x = d3.scale.linear()
					.domain([0, (this.maxX() || d3.max(this.xVals))])	
					.range([0, (this.dimensions.plotWidth)]);
				var xAxis = d3.svg.axis()
					.scale(x)
					.orient("top")
					.tickSize(6/*,-this.dimensions.plotHeight*/);
				this.xAxisGroup.call(xAxis);
				var maxh = 0;
				this.xAxisGroup.selectAll("text").each(function() {
				    if(this.getBBox().height > maxh) maxh = this.getBBox().height;
				});
				this.dimensions.xAxisHeight = maxh + 6 + 3;
				var y = d3.scale.linear()
					.domain([this.maxY() || d3.max(this.yVals),0])	
					.range([0,(this.dimensions.plotHeight - this.dimensions.xAxisHeight)]);
				var yAxis = d3.svg.axis()
			    	.scale(y)
			    	.orient("right")
			    	.tickSize(6/*, -this.dimensions.plotWidth*/);
				this.yAxisGroup.call(yAxis);
				var maxw = 0;
				this.yAxisGroup.selectAll("text").each(function() {
				    if(this.getBBox().width > maxw) maxw = this.getBBox().width;
				});
				this.dimensions.yAxisWidth = maxw + 6 + 3;
				// Update X range now that we know y-axis width
				x.range([0, (this.dimensions.plotWidth - this.yAxisWidth)]);
				xAxis.scale(x);
				this.xAxisGroup.call(xAxis);
				
				this.hexbin = d3.hexbin()
					.size([(this.dimensions.plotWidth - this.dimensions.yAxisWidth), (this.dimensions.plotHeight - this.dimensions.xAxisHeight)])
					.radius(this.radius());
				
				var x = d3.scale.linear()
					.domain([0, (this.maxX() || d3.max(this.xVals))])	
					.range([0, (this.dimensions.plotWidth-this.dimensions.yAxisWidth)]);
				var xAxis = d3.svg.axis()
					.scale(x)
					.orient("bottom")
					.tickSize(6/*,-this.dimensions.plotHeight*/);
				
				
				for(var i=0;i<vals.length;i++){
					var currentRow = vals[i];
					this.points.push([x(currentRow[mxIndex]),y(currentRow[myIndex])]);
				}
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
					.attr("transform", "translate(" + (this.dimensions.plotWidth - this.dimensions.yAxisWidth) + ",0)");
				
				this.xAxisGroup
					//.transition().duration(this.ms())
					.attr("transform", "translate(0," + (this.dimensions.plotHeight - this.dimensions.xAxisHeight) + ")")	
					.call(xAxis);
				
				var canvSelection = this.plotLayer.selectAll(".hexagon").data(this.hexbins);
				canvSelection.enter().append("path")
					.attr("class", "hexagon")
					.attr("d", this.hexbin.hexagon())
					.attr("opacity",0)
					.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ") scale(0)"; })
					.style("fill", function(d) { return that.colorRange(d.length); });
				
				canvSelection
					.transition().duration(this.ms())
					.attr("d", this.hexbin.hexagon())
					.attr("opacity",1)
					.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ") scale(1)"; })
					.style("fill", function(d) { return that.colorRange(d.length); });
				
				canvSelection.exit().remove();
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
	    	var parentPreReq = this.preReqCheck;
	    	this.preReqCheck = function(){
	    		var status = parentPreReq.apply(this);
	    		if(!status.success) return status;
	    		if(this.flatData.columnHeaders.length<2) return {
	    			success : false,
	    			reason : "I need at least 2 measures"
	    		};
	    		if(this.measureX() == this.measureY()) return {
	    			success : false,
	    			reason : "X and Y Axis Measures should not be the same."
	    		}
	    		return status;
	    	}
		}
		sap.designstudio.sdk.Component.subclass("org.scn.community.databound.HexBin", HexBin);	// End of SDK
		sap.zen.Dispatcher.instance.resumeDispatching();
	 });//End of Require Callback 	
})();// End of closure