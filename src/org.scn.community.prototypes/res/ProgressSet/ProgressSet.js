sap.designstudio.sdk.Component.subclass("org.scn.community.prototypes.ProgressSet", function() {
	this._barConfig = [];
	this._selectedBar = "";
	this.props = {
		orientation : { value : "horizontal" },
		inlineLabels : { value : false },
		gradientFullWidth : { value : false },
		barFillOpacity : { value : 1 },
		barRoundness : { value : 5 },
		barHeight : { value : -1 },
		labelWidth : { value : 150 },
		gradientStart : { value : 0 },
		gradientStartColor : { value : "" },
		gradientStartOpacity : { value : 0 },
		gradientStop : { value : 1 },
		gradientStopColor : { value : "#C0C0C0" },
		gradientStopOpacity : { value : .5 },
	};
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
					return this;
				}
			};
		}(property);
	}
	this.orient = function(term){
		var newTerm = term;
		if(this.orientation()=="vertical"){
			if(term == "width") newTerm = "height";
			if(term == "height") newTerm = "width";
			if(term == "x") newTerm = "y";
			if(term == "y") newTerm = "x";
		}
		return newTerm;
	}
	this.barConfig = function(s){
		if(s===undefined){
			return JSON.stringify(this._barConfig);
		}else{
			this._barConfig = [];
			if(s && s !="") this._barConfig = jQuery.parseJSON(s);
			return this;
		}
	};
	this.afterUpdate = function(){
		this.drawBars();
	}
	this.barSelect = function(title,oControlEvent){
		this._selectedTile = title;
		this.fireDesignStudioPropertiesChanged(["selectedTile"]);
		this.fireDesignStudioEvent("onTileSelect");
	};
	this.init = function(){
		this.$().addClass("utilPackProgressSet");
		this.$().css("overflow-y","auto");
		this.$().css("overflow-x","hidden");
		this.drawBars();
	};
	this.drawBars = function(){
		// Generate Data
		var that = this;
		var data = [];
		for(var i=0;i<this._barConfig.length;i++){
			var bar = this._barConfig[i];
			var newItem = {
				title : "Title " + i,
				fillColor : "auto",
				value : 0,
				unit : ""
			};
			if(bar.title) newItem.title = bar.title;
			if(bar.number) newItem.value = parseFloat(bar.number);
			if(bar.numberUnit) newItem.unit = bar.numberUnit;
			if(bar.fillColor && newItem.value != "") newItem.fillColor = bar.fillColor; 
			data.push(newItem);
		}
		
		// Positioning and Sizing
		var margin = {
			top : 5,
			bottom : 5,
			left : 5,
			right : 5,
			innerBarPadding : .1,
			outerBarPadding : 1,
			labelWidth : this.labelWidth(),
			valuePadding : 5
		};
		var height = this.$().height() - margin.top - margin.bottom - 2;
		var width = this.$().width() - margin.left - margin.right - 2;
		// Color Scale (optional)
		var colorScale = d3.scale.category20()
			.domain(data.map(function(d){return d.title}));
		// Y Scale
		var y;
		if(this.barHeight()>-1){
			y = d3.scale.ordinal()
				.rangeRoundBands([0, data.length * this.barHeight()], margin.innerBarPadding, margin.outerBarPadding)
				.domain(data.map(function(d){return d.title}));
		}else{
			var upperBand = height;
			if(this.orientation()=="vertical") upperBand = width;
			y = d3.scale.ordinal()
				.rangeRoundBands([0, upperBand], margin.innerBarPadding, margin.outerBarPadding)
				.domain(data.map(function(d){return d.title}));
		}
		var xRangeLow;
		var xRangeHigh;
		if(this.orientation()=="horizontal") {
			xRangeLow = 0;
			xRangeHigh = width - margin.labelWidth;
			if(this.inlineLabels()) xRangeHigh = width;	// Change range if inline labels
		}
		if(this.orientation()=="vertical") {
			xRangeLow = 0;
			xRangeHigh = height - margin.labelWidth;
			if(this.inlineLabels()) xRangeHigh = height;	// Change range if inline labels
		}
		
		// X Scale
		var x = d3.scale.linear()
	    	.range([0, xRangeHigh])
	    	.domain([0, d3.max(data, function(d) { return d.value; })]);
		// SVG
		var vis = d3.select("#" + this.$().attr("id")+"_viz");
		if(vis.empty()) {
			vis = d3.select(this.$().get(0))
			.append("svg")
				.attr("id", this.$().attr("id")+"_viz")
				.attr("width", this.$().innerWidth())
				.attr("height", this.$().innerHeight() - 2);
			
			vis.append("linearGradient")
			    .attr("y1", 0)
			    .attr("x1", "0")
			    .attr("x2", "0")
			    .attr("id", this.$().attr("id")+"_barGradient")
			    .attr("gradientUnits", "userSpaceOnUse");
		}else{
			//alert("vis exists");
		}
		var gradient = vis.select("#" + this.$().attr("id")+"_barGradient")
			.attr("y2", y.rangeBand());
		
		var stops = [{
			offset : this.gradientStart(),
			opacity : this.gradientStartOpacity(),
			color : this.gradientStartColor()
		},{
			offset : this.gradientStop(),
			opacity : this.gradientStopOpacity(),
			color : this.gradientStopColor()
		}];
		
		gradient.selectAll("stop").data(stops).enter().append("stop");
			
	    gradient.selectAll("stop")
	    	.attr("offset",function(d){return d.offset;})
			.attr("stop-opacity",function(d){return d.opacity;})
			.attr("stop-color",function(d){return (d.color)?d.color:"transparent";});
		
		// Bar Group
		var barGroup = vis.select("g");
		if(barGroup.empty()) barGroup = vis.append("g");
		barGroup.attr("transform", function(d){
			/*
			var rot="rotate(0) ";
			if(that.orientation() == "vertical"){
				rot = "rotate(-180," + (that.$().innerWidth() / 2) + "," + (that.$().innerHeight() / 2 )+ ") "//," + margin.width + "," + margin.height + ") ";	
			}
			*/
			return "translate(" + margin.left + "," + margin.top + ")"
		});
		
		var bars = barGroup.selectAll(".progressBar")
			.data(data, function(d) { return d.title; });
		
		// ENTER
		var newBars = bars.enter()
			.append("g")
			.attr("class","progressBar");/*
			.attr("transform", function(d,i){
				if(that.orientation()=="vertical"){
					return "translate(" + 0 + "," + y(d.title) + ")";	
				}
				if(that.orientation()=="horizontal"){
					return "translate(" + y(d.title) + "," + 0 + ")";	
				}
			});*/
		// Append new bars
		newBars.append("rect")
			.attr("class","utilPackProgressSetBar")
			.attr(this.orient("x"), function(d){
				if(that.inlineLabels()){
					return 0;
				}else{
					return margin.labelWidth;
				}
			})
			.attr(this.orient("y"), function(d){
				return 0;
			});
		// Gradient overlay
		newBars.append("rect")
			.attr("class","utilPackProgressSetGradientOverlay")
			.attr(this.orient("y"),function(d){
				return 0;
			})
			.attr("fill", function(d,i){
				return("url(#" + that.$().attr("id")+"_barGradient" + ")");
			});
		newBars.append("text")
			.attr("class","progressLabel")
			.attr(this.orient("y"),function(d){
				return y.rangeBand()/2;
			})
			.text(function(d){return d.title})
			.attr("text-anchor", "left")
			.attr("dominant-baseline","middle");
		newBars.append("text")
			.attr("class","progressValue")
			.attr(this.orient("y"),function(d){return y.rangeBand()/2;})
			.text(function(d){return d.title})
			.attr("text-anchor", "left")
			.attr("dominant-baseline","middle");
		// ENTER AND UPDATE
		barGroup.selectAll(".progressBar").transition()
			.duration(400)
			.attr("transform", function(d,i){
				if(that.orientation()=="horizontal"){
					return "translate(0," + y(d.title) + ")";
				}
				if(that.orientation()=="vertical"){
					//alert(i+"\n\n"+y(d.title));
					var transform = "translate(" + (that.$().width() - y(d.title) - y.rangeBand()) + ",5)";
					transform="rotate(180," + (that.$().width()/ 2)  + "," + that.$().height() / 2 + ") " + transform;	
					return transform;
				}
			});
		
		// Cosmetic updates to rect and text
		barGroup.selectAll(".progressBar .utilPackProgressSetBar")
			.data(data, function(d){return d.title;})
			.transition().duration(400)
			.attr(this.orient("x"),function(d){ 
				if(that.inlineLabels()){
					return 0;
				}else{
					return margin.labelWidth;
				}
			})
			.attr(this.orient("y"),function(d){ return 0; })
			.attr(this.orient("height"),function(d,i){ return y.rangeBand(); })			
			.attr("rx", this.barRoundness())
			.attr("ry", this.barRoundness())
			.style("fill-opacity", this.barFillOpacity())
			.attr("fill", function(d,i){
				if(d.fillColor=="auto") {
					return colorScale(d.title);
				}else{
					return d.fillColor
				}
			})
			.transition().delay(400).duration(750).ease("bounce")
			.attr(this.orient("width"),function(d,i){ return x(d.value); });
			
		
		barGroup.selectAll(".progressBar .utilPackProgressSetGradientOverlay")
			.data(data, function(d){return d.title;})
			.transition().duration(400)
			.attr(this.orient("x"),function(d){ 
				if(that.inlineLabels()){
					return 0;
				}else{
					return margin.labelWidth;
				}
			})
			.attr(this.orient("y"),function(d){ return 0; })
			.attr(this.orient("height"),function(d,i){ return y.rangeBand(); })			
			.attr("rx", this.barRoundness())
			.attr("ry", this.barRoundness())
			.transition().delay(400).duration(750).ease("bounce")
			.attr(this.orient("width"),function(d,i){ 
				if(!that.gradientFullWidth()) {
					return x(d.value);
				}else{
					return x(d3.max(data, function(d) { return d.value; }));
				} 
			})
		
		barGroup.selectAll(".progressBar .progressLabel")
			.data(data, function(d){return d.title;})
			.transition().duration(400)
			.text(function(d){return d.title})
			.attr(this.orient("x"),function(d){return 0;})
			.attr(this.orient("y"),function(d){return y.rangeBand()/2;})
			.attr("transform",function(d){
				if(that.orientation()=="horizontal"){
					return "rotate(0,0,0)";
				}
				if(that.orientation()=="vertical"){
					return "rotate(90, "+ (y.rangeBand()/2) + ",0)";
				}
			})
			.style("fill-opacity", function(d){
				if(that.inlineLabels()){
					return 0;
				}else{
					return 1;
			}});
		
		barGroup.selectAll(".progressBar .progressValue")
			.data(data, function(d){return d.title;})
			.transition().duration(400)
			.text(function(d){
				var s = "";
				if(that.inlineLabels()) s = d.title + " : ";
				s+= d.value + " " + d.unit
				return s;
			})
			.attr(this.orient("x"),function(d){
				if(that.inlineLabels()){
					return margin.valuePadding;
				}else{
					return margin.labelWidth + margin.valuePadding;
				}
			})
			.attr(this.orient("y"),function(d){
				return y.rangeBand()/2;
			})
			.attr("transform",function(d){
				var vertOffset = margin.valuePadding;
				if(!that.inlineLabels()) vertOffset += margin.labelWidth;
				if(that.orientation()=="horizontal"){
					return "rotate(0,0,0)";
				}
				if(that.orientation()=="vertical"){
					return "rotate(90, "+ (y.rangeBand()/2) + "," + vertOffset + ")";
				}
			});
		
		bars.exit().transition().duration(400)
			.style("fill-opacity", 1e-6)
			.remove();
	};
});