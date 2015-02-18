/**
 * Marimeko Chart based on D3 Example:
 * http://bl.ocks.org/mbostock/1005090
 */
sap.designstudio.sdk.Component.subclass("org.scn.community.databound.MarimekkoChart", function() {
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
		this.$().addClass("MarimekkoChart");
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
		if(this.colorPalette()!="") cp = this.colorPalette().split(",");
		var colorRange = d3.scale.ordinal()
    		.domain(this.flatData.rowHeaders)
    		.range(cp);
		this.legendRect
    		.transition().duration(this.ms())
			.attr('width', this.dimensions.legendWidth)
			.attr('height', this.flatData.rowHeaders.length * (unit * 2) + (unit * 3));
    	this.legendLabel
    		.transition().duration(this.ms())	
    		.attr('font-size', unit)
	        .attr('x', (unit * 1))
	        .attr('y', (unit * 2))
	        .text(that.legendTitle());
		// Add colors swatches
		
		
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
			.style('fill', function(d, i) { return colorRange(d); });
		
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
		this.svg
			.transition().duration(this.ms())
			.attr("width", this.dimensions.width)
			.attr("height", this.dimensions.height);
		
		this.svgG
			.transition().duration(this.ms())
			.attr("transform", "translate(" + (this.dimensions.margin + this.dimensions.chartLeft) + "," + this.dimensions.margin + ")");
		
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
		try{
			this.flatData = org_scn_community_databound.flatten(this.data(),{});
			if(this.flatData && this.flatData.formattedValues && this.flatData.formattedValues.length > 0) {
				vals = this.flatData.formattedValues.slice();
			}else if(this.flatData && this.flatData.values && this.flatData.values.length > 0){
				vals = this.flatData.values.slice();
			}else{
				// Something happened.
				throw("No formatted or unformatted values found.");
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
		var mekko = [];
		for(var i=0;i<vals.length;i++){
			var currentRow = vals[i];
			for(var j=0;j<currentRow.length;j++){
				mekko.push({
					"row" : this.flatData.rowHeaders[i],
					"col" : this.flatData.columnHeaders[j],
					"value" : parseFloat(currentRow[j])
				});
			}
		}
		this.calculateDimensions();
		var cp = ["#DFDFDF"];
		if(this.colorPalette()!=""){
			cp = this.colorPalette().split(",");
		}
		var x = d3.scale.linear().range([0, this.dimensions.chartWidth /*width - 3 * margin*/]),
			y = d3.scale.linear().range([0, this.dimensions.chartHeight /*height - 2 * margin*/]),
			z = d3.scale.ordinal()
				.domain(this.flatData.rowHeaders)
				.range(cp);
			//z = d3.scale.category10();

		var n = d3.format(",d"),
		    p = d3.format("%");

		this.svg = d3.select("#" + this.$().attr("id")).select("svg");
		if(this.svg.empty()){
			this.svg = d3.select("#" + this.$().attr("id")).append("svg");
			this.svgG = this.svg.append("g");
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
		

		var offset = 20;
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

		  // Add x-axis ticks.
		  var xtick = this.svgG.selectAll(".x")
		  	.data(x.ticks(10));
		  
		  var newX = xtick.enter().append("g").attr("class", "x");

		  newX.append("line").attr("y2", 6).style("stroke", "#000");
		  newX.append("text").attr("y", 8).attr("text-anchor", "middle").attr("dy", ".71em").text(p);

		  this.svg.selectAll(".x")
		  	.transition().duration(this.ms())
		  	.attr("transform", function(d) { return "translate(" + x(d) + "," + y(1) + ")"; });
		  this.svg.selectAll(".x").select("text").text(p);
		  
		  // Add y-axis ticks.
		  var ytick = this.svgG.selectAll(".y")
		      .data(y.ticks(10));
		  
		  var newY = ytick.enter().append("g").attr("class", "y");
		  
		  newY.append("line").attr("x1", -6).style("stroke", "#000");
		  newY.append("text").attr("x", -8).attr("text-anchor", "end").attr("dy", ".35em");
		  
		  this.svg.selectAll(".y")
		  	.transition().duration(this.ms())
		  	.attr("transform", function(d) { return "translate(0," + y(1 - d) + ")"; });
		  this.svg.selectAll(".y").select("text").text(p);

		  // Add a row for each column.
		  var columns = this.svgG.selectAll(".column").data(rows);
		  
		  var newColumns = columns.enter()
		  	.append("g")
			  	.attr("class", "column")
			  	.attr("transform", function(d) { return "translate(" + x(d.offset / sum) + ")"; })
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
		      .attr("transform", function(d) { return "translate(" + x(d.offset / sum) + ")"; });

		  // Add a rect for each row.
		  var segs = columns.select(".rectLayer").selectAll(".row").data(function(d) { return d.values; });
		  var lbls = columns.select(".labelLayer").selectAll("text").data(function(d) { return d.values; });
		  var newRows = segs.enter();
		  newRows.append("a")
		  	.attr("class", "row")
		  		.append("rect")
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
		  	.attr("y", function(d) { return y((d.offset + (d.value/2)) / d.parent.sum); })
		  	.attr("x", function(d) { return x((d.parent.sum/2) / sum) })
		  	.attr("width", function(d) { return x(d.parent.sum / sum); });
		  	//.call(this.wrap);
		  
		  segs.selectAll("rect")
		  	.transition().duration(this.ms())    
		  	.attr("opacity",1)
		  	.attr("y", function(d) { return y(d.offset / d.parent.sum); })
		  	.attr("height", function(d) { return y(d.value / d.parent.sum); })
		  	.attr("width", function(d) { return x(d.parent.sum / sum); })
		  	.style("fill", function(d) { 
		  		if(d && d.row == that.selectedRow() && d.col == that.selectedColumn()){
		  			return that.selectedColor();
		  		}
		  		return z(d.row);
		  	});
		  // Events
		  segs.select("rect").on('click', this.setSelection);
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
});
