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
			d3 :     pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3.min",
			hexbin : pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3-hexbin" 
		 },
		 shim : {
			d3 : {
				// exports : "d3"
			},
			hexbin : {
				deps : ["d3"]
			}
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
		sap.designstudio.sdk.Component.subclass("org.scn.community.databound.HexBin", function() {
			var that = this;
			var _data = null;
			var _stringData = "BLANK";
			var _selectedIndex = -1;
			var _selectedRow = "";
			var _selectedKey = "";
			this.props = {
				selectedColor : { value : "#009966"},
				selectedRow : { value : ""},
				selectedColumn : { value : ""},
				selectedValue : { value : 0.0},
				measureX : { value : "" },
				measureY : { value : "" },
				radius : { value : 20 },
				threshold : { value : 20 },
				legendScale : { value : 1 },
				legendX : { value : 0 },
				legendY : { value : 0 },
				legendTitle : { value : "Legend" },
				legendWidth : { value : 150 },
				legendOn : { value : true },
				makeRoomX : { value : true },
				ms : { value : 750},
				margin : { value : 20},
				showValues : { value : true},
				colorPalette :  { value : "#F0F9E8,#CCEBC5,#A8DDB5,#7BCCC4,#43A2CA,#0868AC" }
			}
			/*
			 * Create the aforementioned getter/setter and attach to 'this'.
			 */
			for(var property in this.props){
				this[property] = function(property){
					return function(value){
						if(value===undefined){
							return this.props[property].value;
						}else{
							this.props[property].value = value;
							this.props[property].changed = true;
							if(this.props[property].onChange) {
								this.props[property].onChange.call(this,"Property Change");
							}
							return this;
						}
					};
				}(property);
			}
			/**
			 * @param value Design Studio ResultSet JSON Structure
			 * @return If value is undefined, returns data, else returns reference to itself.
			 */
			this.data = function(value) {
				if (value === undefined) {
					return _data;
				} else {
					_data = value;
					_stringData = JSON.stringify(value);
					return this;
				}
			};
			this.stringData = function(value) {
				if (value === undefined) {
					return _stringData;
				} else {
					// Don't do anything with setter ever.
					return this;
				}
			};
			/**
			 * Initialization or Resize of Component
			 */
			this.init = function(){
				this.$().addClass("DesignStudioSCN");
				this.$().addClass("HexBin");
				// Random Data
				var randomX = d3.random.normal(this.$().width() / 2, 80),
					randomY = d3.random.normal(this.$().height() / 2, 80);
			    this.points = d3.range(2000).map(function() { return [randomX(), randomY()]; });
			};
			this.rowClicked = function(i){
				// alert(i);
			};
			this.setSelection = function(d){				
				if(d) {
					var changes = [];
					if(d.row == that.selectedRow() && d.col == that.selectedColumn()){
						that.selectedRow("");
						that.selectedColumn("");
						that.selectedValue(0.0);
					}else{
						that.selectedRow(d.row);
						that.selectedColumn(d.col);
						that.selectedValue(d.value);
					}
					that.firePropertiesChanged(["selectedRow","selectedColumn","selectedValue"]);
					that.fireEvent("onSelect");
				}
			};
			/**
			 * Update Legend
			 */
			this.updateLegend = function(){
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

			}
			/**
			 * Calculate Dimensions
			 */
			this.calculateDimensions = function(){
				this.dimensions = {
					width : this.$().width(),
					height : this.$().height(),
					margin : this.margin(),
					chartLeft : this.margin(),
					legendWidth : this.legendWidth() || (this.$().width() / 5),
					legendTop : this.legendY(),
					legendLeft : this.legendX()
				};
				if(this.legendOn()){
					if (this.makeRoomX()) this.dimensions.chartLeft += (this.dimensions.legendWidth + this.legendX());
				}
				this.dimensions.chartWidth = this.dimensions.width - this.dimensions.chartLeft - this.dimensions.margin - this.dimensions.margin;
				this.dimensions.chartHeight = this.dimensions.height - this.dimensions.margin - this.dimensions.margin;
				return this;
			}
			/**
			 * Update Cosmetics
			 */
			this.updateCosmetics = function(){   	
				var x = d3.scale.linear()
					.domain([0, d3.max(this.xVals)])	
					.range([0, this.dimensions.chartWidth]),
				y = d3.scale.linear()
					.domain([d3.max(this.yVals),0])	
					.range([0,this.dimensions.chartHeight]),					
				xAxis = d3.svg.axis()
					.scale(x)
					.orient("bottom")
					.tickSize(6,-this.dimensions.chartHeight),
				yAxis = d3.svg.axis()
			    	.scale(y)
			    	.orient("left")
			    	.tickSize(6, -this.dimensions.chartWidth);
				
				this.svg
					.transition().duration(this.ms())
					.attr("width", this.dimensions.width)
					.attr("height", this.dimensions.height);
				
				this.svgG
					.transition().duration(this.ms())
					.attr("transform", "translate(" + (this.dimensions.margin + this.dimensions.chartLeft) + "," + this.dimensions.margin + ")");
				
				this.mesh
					.transition().duration(this.ms())
					.attr("width", this.dimensions.chartWidth)
					.attr("height", this.dimensions.chartHeight);
				
					
				
				this.legendGroup//.data([{ x: this.dimensions.legendLeft - 1, y: this.dimensions.legendY - 1 }])
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
				
				this.yAxisGroup.transition().duration(this.ms())
					.call(yAxis);
			
				this.xAxisGroup.transition().duration(this.ms())
					.attr("transform", "translate(0," + this.dimensions.chartHeight + ")")	
					.call(xAxis);
		    	return this;
			}
			/**
			 * Fires after property change.
			 */
			this.afterUpdate = function() {
				var that = this;
				this.formatter = d3.format(',.2f');			// Make a DS property
				this.flatData = null;
				var vals = [];
				this.calculateDimensions();
				try{
					this.flatData = org_scn_community_databound.flatten(this.data(),{});
					if(this.flatData && this.flatData.values && this.flatData.values.length > 0){
						vals = this.flatData.values.slice();
					}else{
						// Something happened.
						throw("No values found.");
					}
				}catch(e){
					var errorMessage = e;
					if(e && e.indexOf("Incomplete data given.")>-1) errorMessage = "Incomplete data.  Try assigning a datasource.";
					if(!this.flatData) this.flatData = {
						columnHeaders : ["Error"],
						rowHeaders : [errorMessage]
					};
					vals = [[]];
				}
				this.firePropertiesChanged(["stringData"]);
				var mx = this.measureX();
				var my = this.measureY();
				var mxIndex = 0;
				var myIndex = 1;
				if(this.flatData.columnHeaders.length<2){
					throw "I need at least 2 measures";
				}
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
					.domain([0, d3.max(this.xVals)])	
					.range([0, this.dimensions.chartWidth]),
				y = d3.scale.linear()
					.domain([d3.max(this.yVals),0])	
					.range([0,this.dimensions.chartHeight]);
				for(var i=0;i<vals.length;i++){
					var currentRow = vals[i];
					this.points.push([x(currentRow[mxIndex]),y(currentRow[myIndex])]);
				}
				//alert(JSON.stringify(this.points));
				
				//alert([this.dimensions.chartWidth, this.dimensions.chartHeight]);
				
				var cp = ["#DFDFDF"];
				if(this.colorPalette()!=""){
					cp = this.colorPalette().split(",");
				}
				/*
				this.colorRange = d3.scale.linear()
	    			.domain([0,this.radius()])
					//.domain(this.points.sort(function(a, b) { return a - b; }))
	    			.range(cp)
	    			.interpolate(d3.interpolateLab);
				*/
				this.colorRange = d3.scale.quantize()
    			.domain([0,this.threshold()])
				//.domain(this.points.sort(function(a, b) { return a - b; }))
    			.range(cp);
    			//.interpolate(d3.interpolateLab);
					//z = d3.scale.category10();
		
				var n = d3.format(",d"),
				    p = d3.format("%");
		
				this.svg = d3.select("#" + this.$().attr("id")).select("svg");
				if(this.svg.empty()){
					this.svg = d3.select("#" + this.$().attr("id")).append("svg");
					this.svgG = this.svg.append("g");
					this.clip = this.svg.append("clipPath").attr("id",this.$().attr("id")+"_clip");
					this.mesh = this.clip.append("rect")
						.attr("class","mesh");
					this.canvas = this.svg.append("g")
						.attr("clip-path","url(#" + this.$().attr("id")+"_clip)");
					this.yAxisGroup = this.svg.append("g")
						.attr("class", "y axis");
					this.xAxisGroup = this.svg.append("g")
						.attr("class", "x axis")
						.attr("transform", "translate(0," + this.dimensions.chartHeight + ")");
					this.legendGroup = this.svg.append('g')
		        		.attr('class', "legend-group" );
					this.legendRect = this.legendGroup.append('rect')
			        	.attr("class", "legend-container")	
			        	.attr('x', 0)
			        	.attr('y', 0);
					this.legendLabel = this.legendGroup.append('text')
			        	.attr('class', 'legend-label');
				}
				
				this.updateCosmetics()
					.updateLegend();

				// Canvas
				this.hexbin = d3.hexbin()
					.size([this.dimensions.chartWidth, this.dimensions.chartHeight])
					.radius(this.radius());
				
				var canvSelection = this.canvas.selectAll(".hexagon").data(this.hexbin(this.points));
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
		});	// End of SDK
		sap.zen.Dispatcher.instance.resumeDispatching();
	 });//End of Require Callback 	
})();// End of closure