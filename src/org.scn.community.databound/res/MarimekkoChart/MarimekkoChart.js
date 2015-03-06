(function() {
	 var myScript = $("script:last")[0].src;
	 _readScriptPath = function () {
		 if(myScript) {
 			var myScriptSuffix = "res/MarimekkoChart/";
 			var myPluginSuffix = "org.scn.community.databound/";
 			var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 			var mainSDKPathIndex = myScript.indexOf(myPluginSuffix);
 			var mainSDKPath = myScript.substring(0, mainSDKPathIndex);
 			var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 			return {
 				myScriptPath : ownScriptPath,	// http://localhost:9091/aad/zen/mimes/sdk_include/org.scn.community.databound/res/MarimekkoChart/
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
		 MarimekkoChart.prototype = org_scn_community_databound_BaseViz;
		 MarimekkoChart.prototype.constructor = MarimekkoChart;
		 MarimekkoChart.prototype.toString = function(){
	    	 return "org.scn.community.databound.MarimekkoChart";
	     }
	     function MarimekkoChart() {
	    	 var that = this;
	    	// Call super
	    	org_scn_community_databound_BaseViz.call(this, d3,{
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
	    		selectedColor : { value : "#009966"},
	    		selectedRow : { value : ""},
	    		selectedColumn : { value : ""},
	    		selectedValue : { value : 0.0}
			});
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
	    	
	    	var parentInit = this.init;
	    	this.init = function(){
	    		parentInit.call(this);
	    		this.$().addClass("MarimekkoChart");
	    	}
	    	var parentUpdatePlot = this.updatePlot;
	    	this.updatePlot = function(){
	    		parentUpdatePlot.call(this);
	    		var xTicks = this.xAxisTicks();
	    		var yTicks = this.yAxisTicks();
	    		var that = this;
	    		var mekko = [];
	    		var vals = [];
	    		vals = this.flatData.values.slice();
	    		for(var i=0;i<vals.length;i++){
	    			var currentRow = vals[i];
	    			for(var j=0;j<currentRow.length;j++){
	    				mekko.push({
	    					"row" : this.flatData.rowHeaders[i],
	    					"col" : this.flatData.columnHeaders[j],
	    					"value" : parseFloat(currentRow[j]) || null
	    				});
	    			}
	    		}
	    		var cp = ["#DFDFDF"];
	    		if(this.colorPalette()!=""){
	    			cp = this.colorPalette().split(",");
	    		}
	    		// X-Axis
	    		this.xScale = d3.scale.linear().range([0, this.dimensions.plotWidth]);
	    		this.xAxis = d3.svg.axis()
					.scale(this.xScale)
					.orient(this.xAxisOrientation())
					.tickSize(6)
					.tickFormat(d3.format(".0%"));
	    		if(xTicks > 0) this.xAxis.ticks(xTicks);
	    		this.xAxisGroup.call(this.xAxis);
	    		var maxh = 0;
	    		this.xAxisGroup.selectAll("text").each(function() {
	    		    if(this.getBBox().height > maxh) maxh = this.getBBox().height;
	    		});
	    		this.dimensions.xAxisHeight = maxh + 6 + 3;
	    		// Y-Axis
	    		this.yScale = d3.scale.linear().range([0, this.dimensions.plotHeight - this.dimensions.xAxisHeight]);
	    		this.yAxis = d3.svg.axis()
			    	.scale(this.yScale)
			    	.orient(this.yAxisOrientation())
			    	.tickSize(6)
			    	.tickFormat(d3.format(".0%"));
	    		if(yTicks > 0) this.yAxis.ticks(yTicks);
	    		this.yAxisGroup.call(this.yAxis);
	    		var maxw = 0;
	    		this.yAxisGroup.selectAll("text").each(function() {
	    		    if(this.getBBox().width > maxw) maxw = this.getBBox().width;
	    		});
	    		this.dimensions.yAxisWidth = maxw + 6 + 3;
	    		// Update X range now that we know y-axis width
	    		this.xScale.range([0, (this.dimensions.plotWidth - this.dimensions.yAxisWidth)]);
	    		this.xAxis.scale(this.xScale);
	    		this.xAxisGroup.call(this.xAxis);
	    		this.colorRange = d3.scale.ordinal().domain(this.flatData.rowHeaders).range(cp);
	    		// TODO: Measure widths
	    		//this.dimensions.yAxisWidth = 20;
	    		//this.dimensions.xAxisHeight = 20;
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
	    		
	    		
	    		
	    		
	    		var n = d3.format(",d"),
	    		    p = d3.format("%");
	    		// Nest values by col. We assume each row+col is unique.
	  		  var rows = d3.nest()
	  		      .key(function(d) { return d.col; })
	  		      .entries(mekko);

	  		  // Compute the total sum, the per-column sum, and the per-row offset.
	  		  // You can use reduce rather than reduceRight to reverse the ordering.
	  		  // We also record a reference to the parent column for each row.
	  		  var sum = rows.reduce(function(v, p) {
	  		    return (p.offset = v) + (p.sum = p.values.reduceRight(function(v, d) {
	  		      d.parent = p;
	  		      return (d.offset = v) + d.value;
	  		    }, 0));
	  		  }, 0);

	  		  // Add a row for each column.
	  		  var columns = this.plotLayer.selectAll(".column").data(rows);
	  		  
	  		  var newColumns = columns.enter()
	  		  	.append("g")
	  			  	.attr("class", "column")
	  			  	.attr("transform", function(d) { return "translate(" + that.xScale(d.offset / sum) + ")"; })
	  			  	.attr("opacity",0);
	  		  
	  		  newColumns.append("g")
	  		  	.attr("class","rectLayer")

	  		  newColumns.append("g")
	  		  	.attr("class","labelLayer")
	  		  
	  		  
	  		  columns.exit()
	  		  	.transition().duration(this.ms())
	  		  	.attr("opacity",0)
	  		  	.remove();
	  		  
	  		  columns
	  		  	  .transition().duration(this.ms())
	  		  	  .attr("opacity",1)
	  		      .attr("xlink:title", function(d) { return d.key; })
	  		      .attr("transform", function(d) { return "translate(" + that.xScale(d.offset / sum) + ")"; });

	  		  // Add a rect for each row.
	  		  var segs = columns.select(".rectLayer").selectAll(".row").data(function(d) { return d.values; });
	  		  var lbls = columns.select(".labelLayer").selectAll("text").data(function(d) { return d.values; });
	  		  var newRows = segs.enter();
	  		  newRows.append("a")
	  		  	.attr("class", "row")
	  		  		.append("rect")
	  		  		.attr("class","plot")
	  		  		.attr("opacity",0);
	  		  segs.exit()
	  		  	.select("rect")
	  		  	.transition().duration(this.ms())
	  		  	.attr("opacity",0);
	  		  segs.exit().transition().delay(this.ms()).remove();
	  		  
	  		  lbls.enter().append("text")
	  		  	.style("text-anchor","middle")
	  		  	.attr("dy",".5em")
	  		  	.attr("opacity",0);
	  		  
	  		  lbls.exit().remove();
	  		  
	  		  segs
	  		  	.transition().duration(this.ms())
	  		  	.attr("xlink:title", function(d) { return d.row + " " + d.parent.key + ": " + n(d.value); });
	  		  
	  		  columns.select(".labelLayer").selectAll("text")
	  		  //lbls
	  		  	.text(function(d) { 
	  		  		return that.formatter(d.value);
	  		  	})
	  		  	.attr("pointer-events", "none")
	  		  	.transition().duration(this.ms())    
	  		  	.attr("opacity",function(d){
	  		  		if(that.showValues()){
	  		  			return 1;
	  		  		}else{
	  		  			return 0;
	  		  		}
	  		  	})
	  		  	.attr("y", function(d) { return that.yScale((d.offset + (d.value/2)) / d.parent.sum); })
	  		  	.attr("x", function(d) { return that.xScale((d.parent.sum/2) / sum) })
	  		  	.attr("width", function(d) { return that.xScale(d.parent.sum / sum); });
	  		  	//.call(this.wrap);
	  		  
	  		  segs.selectAll("rect")
	  		  	.transition().duration(this.ms())    
	  		  	.attr("opacity",this.plotAlpha()/100)
	  		  	.attr("y", function(d) { return that.yScale(d.offset / d.parent.sum); })
	  		  	.attr("height", function(d) { return that.yScale(d.value / d.parent.sum); })
	  		  	.attr("width", function(d) { return that.xScale(d.parent.sum / sum); })
	  		  	.style("fill", function(d) { 
	  		  		if(d && d.row == that.selectedRow() && d.col == that.selectedColumn()){
	  		  			return that.selectedColor();
	  		  		}
	  		  		return that.colorRange(d.row);
	  		  	});
	  		  // Events
	  		  segs.select("rect").on('click', this.setSelection);
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
		sap.designstudio.sdk.Component.subclass("org.scn.community.databound.MarimekkoChart", MarimekkoChart);	// End of SDK
		sap.zen.Dispatcher.instance.resumeDispatching();
	 });//End of Require Callback 	
})();// End of closure