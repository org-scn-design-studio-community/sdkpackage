/**
 * Base Visualization Class for use in databound D3 (V3) Visualizations.
 */
org_scn_community_databound_BaseViz.prototype = org_scn_community_databound_Base;
org_scn_community_databound_BaseViz.constructor = org_scn_community_databound_BaseViz;
function org_scn_community_databound_BaseViz(d3, options){
	var that = this;
	this.formatter = d3.format(',.2f');			// Make a DS property
	var properties = {
		styleCSS : { 
			value : "/* CSS */",
			onChange : function(value){
				this.props.styleCSS.value = value.replace(/__n__/g,"\n");
			},
			onSet : function(value){
				return value.replace(/__n__/g,"\r\n");
			},
			opts : {
				desc : "SVG CSS",
				cat : "CSS",
				onSet : true,
				apsControl : "textbox"
			}
		},
		legendOn : { 
			value : true,
			opts : {
				desc : "Show Legend",
				cat : "Legend",
				apsControl : "checkbox"	
			}
		},
		showValues : { 
			value : true,
			opts : {
				desc : "Show Values",
				cat : "Cosmetics",
				apsControl : "checkbox"	
			}
		},
		showTitle : { 
			value : true,
			opts : {
				desc : "Show Chart Title",
				cat : "Cosmetics",
				apsControl : "checkbox"	
			}
		},
		chartTitle : { 
			value : "Chart Title",
			opts : {
				desc : "Chart Title",
				cat : "Cosmetics",
				apsControl : "text"
			}
		},
		chartTitleStyle : { 
			value : "",
			opts : {
				desc : "Chart Title Style",
				cat : "CSS",
				apsControl : "text"
			}
		},
		chartValueStyle : { 
			value : "",
			opts : {
				desc : "Chart Value Style",
				cat : "CSS",
				apsControl : "text"
			}
		},
		legendTitle : { 
			value : "Legend",
			opts : {
				desc : "Legend Title",
				cat : "Legend",
				apsControl : "text"
			}
		},
		legendTitleStyle : { 
			value : "",
			opts : {
				desc : "Legend Title Style",
				cat : "CSS",
				apsControl : "text"
			}
		},
		legendWidth : {
			value : 150,
			opts : {
				desc : "Legend Width",
				cat : "Legend",
				apsControl : "spinner"	
			}
		},
		legendX : {
			value : 0,
			opts : {
				desc : "Legend X Offset",
				cat : "Legend",
				apsControl : "spinner"	
			}
		},
		legendY : {
			value : 0,
			opts : {
				desc : "Legend Y Offset",
				cat : "Legend",
				apsControl : "spinner"	
			}
		},
		makeRoomX : { 
			value : true,
			opts : {
				desc : "Chart Avoids Legend",
				cat : "Legend",
				apsControl : "checkbox"	
			}
		},
		legendScale : {
			value : 1,
			opts : {
				desc : "Legend Scale",
				cat : "Legend",
				apsControl : "spinner"	
			}
		},
		margin : {
			value : 15,
			opts : {
				desc : "Margins",
				cat : "Cosmetics",
				apsControl : "spinner"	
			}
		},
		plotAlpha : {
			value : 95,
			opts : {
				desc : "Plot Alpha (0-100)",
				cat : "Cosmetics",
				apsControl : "spinner"	
			}
		},
		ms : {
			value : 750,
			opts : {
				desc : "Animation Time",
				cat : "Cosmetics",
				apsControl : "spinner"	
			}
		},
		colorPalette :  { 
			value : "#F0F9E8,#CCEBC5,#A8DDB5,#7BCCC4,#43A2CA,#0868AC",
			opts : {
				desc : "Color Palette",
				cat : "Cosmetics",
				apsControl : "palette"	
			}
		},
		selectedColor :  { 
			value : "#000000",
			opts : {
				desc : "Selected Color",
				cat : "Cosmetics",
				apsControl : "color"	
			}
		},
		plotLeft : { 
			value : 0,
			opts : {
				desc : "Plot Left Offset",
				cat : "Cosmetics",
				apsControl : "spinner"	
			}
		},
		plotRight : { 
			value : 0,
			opts : {
				desc : "Plot Right Offset",
				cat : "Cosmetics",
				apsControl : "spinner"	
			}
		},
		plotTop : { 
			value : 0,
			opts : {
				desc : "Plot Top Offset",
				cat : "Cosmetics",
				apsControl : "spinner"	
			}
		},
		plotBottom : { 
			value : 0,
			opts : {
				desc : "Plot Bottom Offset",
				cat : "Cosmetics",
				apsControl : "spinner"	
			}
		},
		enableZoom : {
			value : false,
			opts : {
				desc : "Enable Zooming",
				cat : "Cosmetics",
				apsControl : "checkbox"	
			}
		},
		minZoom : {
			value : 1,
			opts : {
				desc : "Minimum Zoom Scale Extent",
				cat : "Cosmetics",
				apsControl : "spinner"	
			}
		},
		maxZoom : {
			value : 5,
			opts : {
				desc : "Maximum Zoom Scale Extent",
				cat : "Cosmetics",
				apsControl : "spinner"	
			}
		}
	};
	for(var prop in options) properties[prop] = options[prop];
	org_scn_community_databound_Base.call(this,properties);
	/**
	 * Update Labels
	 */
	this.updateLabels = function(){
		if(this.showTitle()){
			this.chartLabel.attr("display","inline");
			this.chartLabel
				.text(this.chartTitle())
				.attr("style",this.chartTitleStyle());
		}else{
			this.chartLabel.attr("display","none");
		}
		return this;
	}
	/**
	 * Update Cosmetics
	 */
	this.updateCosmetics = function(){ 
		this.svgStyle.text(this.styleCSS());
		this.chartLabel
			.attr("x",this.dimensions.width/2)
			.attr("y",(this.dimensions.chartLabelHeight / 2));
		// Reorient Canvas Group
		this.canvas
			.transition().duration(this.ms())
			.attr("transform", "translate(" + (this.dimensions.margin) + "," + this.dimensions.margin + ")");
		this.mainClipRect
			.transition().duration(this.ms())
			//.attr("transform", "translate(" + (this.dimensions.margin) + "," + this.dimensions.margin + ")")
			.attr("width", this.dimensions.width)
			.attr("height", this.dimensions.height);
		// Reorient Plot Area
		this.stage
			.transition().duration(this.ms())
			.attr("transform", "translate(" + (0) + "," + (this.dimensions.chartLabelHeight) + ")");
		this.plotArea
			.transition().duration(this.ms())
			.attr("transform", "translate(" + (this.dimensions.plotLeft) + "," + (this.dimensions.plotTop) + ")");
		this.plotBG
			.transition().duration(this.ms())
			.attr("width", this.dimensions.plotWidth)
			.attr("height", this.dimensions.plotHeight);
		/*
		this.legendGroup.attr("transform", function(d){
			return d.translate;
			//return "translate(" + that.dimensions.legendX + "," + that.dimensions.legendY + d.y + ") scale(" + that.legendScale() + ")";
			}).call(this.legendDrag);
			*/
		var legendTransition;
		if(this.legendOn()){
			legendTransition = this.legendGroup
				.attr("display", "inline")
				.transition().duration(this.ms())
				.attr("opacity", 1);
		}else{
			legendTransition = this.legendGroup
				.transition().duration(this.ms())
				.attr("opacity", 0)
				//.transition().delay(this.ms())	// Buggy
				.attr("display", "none");
		}
		// Reorient and Resize Legend Group		
			//.transition().duration(this.ms())
			

		// Reorient and Resize Message Box
		this.messageRect
			.transition().duration(this.ms())	
			.attr("width",this.dimensions.width)
			.attr("height",this.dimensions.height);
		
		return this;

	};
	this.calculateDimensions = function(){
		this.dimensions = {
			width : this.$().width(),
			height : this.$().height(),
			margin : this.margin(),
			stageWidth : 0,
			plotLeft : this.plotLeft(),
			plotTop : this.plotTop(),
			plotRight : this.plotRight(),
			plotBottom : this.plotBottom(),
			chartLabelHeight : 0,
			legendWidth : this.legendWidth() || (this.$().width() / 5),
			legendY : this.legendY(),
			legendX : this.legendX()
		};
		// Update Chart Label
		if(this.chartLabel !== undefined){
			this.dimensions.chartLabelHeight = this.chartLabel[0][0].getBBox().height;
		}
		this.dimensions.stageWidth = this.dimensions.width - (this.dimensions.margin * 2);
		// If Legend is on and Make Room for Legend is set, make room		
		if(this.legendOn()){
			if (this.makeRoomX()) this.dimensions.plotLeft += (this.dimensions.legendWidth + this.legendX());
		}
		// Calculate remaining plot area
		this.dimensions.plotWidth = this.dimensions.width - this.dimensions.plotLeft - this.dimensions.plotRight - (this.dimensions.margin * 2);
		//this.dimensions.plotTop = this.dimensions.chartLabelHeight;
		this.dimensions.plotHeight = this.dimensions.height - (this.dimensions.margin * 2) - this.dimensions.chartLabelHeight - this.dimensions.plotTop - this.dimensions.plotBottom;
		//alert(this.dimensions.chartLabelHeight);
		return this;
	};
	/**
	 * Calculates new and old sizes and if different, trigger afterUpdate.
	 */
	this.measureSize = function(that){
		var currentWidth = that.$().innerWidth();
		var currentHeight = that.$().innerHeight();
		if(currentWidth != that._previousWidth || currentHeight != that._previousHeight){
			that._previousHeight = currentHeight;
			that._previousWidth = currentWidth;
			this.calculateDimensions();
			this.zoomYScale
				.domain([0, this.dimensions.plotHeight])
				.range([0,this.dimensions.plotHeight]);
			this.zoomXScale
				.domain([0, this.dimensions.plotWidth])
				.range([0, this.dimensions.plotWidth]);				
			this.semanticZoom
				.x(this.zoomXScale)
				.y(this.zoomYScale)
				.scaleExtent([this.minZoom(),this.maxZoom()])
				.size([this.dimensions.plotWidth, this.dimensions.plotHeight])
				.scale(this.zoomScale || this.minZoom());
			this.afterUpdate();
		}else{
			// Sizes are the same.  Don't redraw, but poll again after an interval.
			that._poller = window.setTimeout(function(){that.measureSize(that)},that._pollInterval);	
		}
	};
	this.preReqCheck = function() {
		var success = true;
		var reason = "";
		if(this.flatData && this.flatData.values && this.flatData.values.length > 0){
			
		}else{
			success = false;
			reason = "No data found.  Try assigning a datasource and ensure Load in Script is set to false.";
		}
		return {
			success : success,
			reason : reason
		};
	};
	this.updateMessage = function(){
		this.messageRect
	    	.attr("width",this.dimensions.width)
	    	.attr("height",this.dimensions.height)
	    	
	 	this.messageText
	 		.attr("x",this.dimensions.width/2)
	 		.attr("y",this.dimensions.height/2);
		
		return this;
	}
	this.updatePlot = function() {
		this.messageGroup
			.transition().duration(this.ms())
			.attr("display", "none")
			.attr("opacity", 0);
		return this;
	};
	this.dragLegend = function(d) {
		d3.select(this)
			.attr("transform", d.translate = "translate(" + that.dimensions.legendX + "," + 
					that.dimensions.legendY + d3.event.y + ") scale(" + that.legendScale() + ")");
	}

	/**
	 * Fires after Design Studio property updates
	 */
	this.afterUpdate = function() {
		var that = this;
		this.updateLabels()
			.calculateDimensions()
			.updateMessage()
			.updateCosmetics();
		
		var check = this.preReqCheck();
		if(check.success){
			this.updatePlot()
				.updateLegend();
		}else{
			// Give informational window
			this.displayMessage(check.reason);
		}
		this._poller = window.setTimeout(function(){that.measureSize(that)},that._pollInterval);
	};
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
	// Semantic Zooming - not working
	var that = this;
	this.semanticZoomed = function(){
		//alert("X\n" + that.zoomXScale.domain() + "\n" + that.zoomXScale.range() + "\n\nY:\n" + that.zoomYScale.domain() + "\n" + that.zoomYScale.range());
		that.zoomScale = d3.event.scale;
		that.zoomTranslate = d3.event.translate;
		//alert(JSON.stringify(d3.event));
		if(d3.event.scale==that.minZoom()) {
			that.zoomYScale.domain([0, that.dimensions.plotHeight])
				.range([0, that.dimensions.plotHeight]);
			that.zoomXScale.domain([0, that.dimensions.plotWidth])
				.range([0, that.dimensions.plotWidth]);
		} 
		that.afterUpdate();
		/*
		
		 d3.select(this).attr("transform",function transform(d) {
			  return "translate(" + that.xScale(d[0]) + "," + that.yScale(d[1]) + ")";
		});
		*/
	}
	// Geometric Zooming
	this.zoomed = function(d){
		//d3.select(this).selectAll(".hexagon").style("stroke-width", .25 / d3.event.scale);
		/*function(d){
				var sw = d3.select(this).style("stroke-width");
				return (sw + 0) / d3.event.scale + "px";
		});*/
		if(that.previousZoom==d3.event.scale) return;
		that.previousZoom = d3.event.scale;
		that.afterUpdate();
		if(d3.event.scale>1){
			d3.select(this)
				//.transition().duration(200)
				.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");	
		}else{
			d3.select(this)
				//.transition().duration(200)
				.attr("transform", "translate(0 0)scale(" + d3.event.scale + ")");
		}
		
	};
	var parentInit = this.init;
	/**
	 *  _________________________________________________
	 * |svg                                              |
	 * |  _____________________________________________  |
	 * | |#canvas with clippath                        | |
	 * | |#chartTitle                                  | |
	 * | |  _________________________________________  | |
	 * | | |#stage                                   | | |
	 * | | |  ____________   ______________________  | | |
	 * | | | |#legendgroup| |#plotarea             | | | |
	 * | | | |            | | 1)plot layer         | | | |
	 * | | | |            | | 2)y-axis group       | | | |
	 * | | | |            | | 3)x-axis group       | | | |
	 * | | | |            | |                      | | | |
	 * | | | |____________| |______________________| | | |
	 * | | |_________________________________________| | |
	 * | |_____________________________________________| |
	 * |  _____________________________________________  |
	 * | |#message (hidden unless message)             | |
	 * | |_____________________________________________| |
	 * |                                                 |
	 * |_________________________________________________|
	 * 
	 */
	
	this.init = function(){
		parentInit.apply(this);
		this.$().addClass("Viz");
		this.$().css({"overflow":"hidden"});
		this.calculateDimensions();
		this.svg = d3.select("#" + this.$().attr("id")).select("svg");
		if(this.svg.empty()){
			// X, Y and Zoom Scales
			this.previousZoom = this.minZoom();
			this.zoomScale = this.minZoom();
			this.zoomTranslate = [0,0];
			this.zoomYScale = d3.scale.linear()
				.domain([0, this.dimensions.plotHeight])
				.range([0, this.dimensions.plotHeight]);
			this.zoomXScale = d3.scale.linear()
				.domain([0, this.dimensions.plotWidth])
				.range([0, this.dimensions.plotWidth]);
			this.yScale = d3.scale.linear()
				.domain([this.dimensions.plotHeight, 0])
				.range([0, this.dimensions.plotHeight]);
			this.xScale = d3.scale.linear()
				.domain([0, this.dimensions.plotWidth])
				.range([0, this.dimensions.plotWidth]);
			this.zoom = d3.behavior.zoom()
				.scaleExtent([this.minZoom(),this.maxZoom()])
				.on("zoom",this.zoomed);
			this.semanticZoom = d3.behavior.zoom()
				.scaleExtent([this.minZoom(),this.maxZoom()])
				.x(this.zoomXScale)
				.y(this.zoomYScale)
				.size([this.dimensions.plotWidth, this.dimensions.plotHeight])
				.on("zoom",this.semanticZoomed)
				.scale(this.minZoom());
			this.svg = d3.select("#" + this.$().attr("id")).append("svg");
			this.svg
				.attr("preserveAspectRatio","xMidYMid meet")
				.attr("width","100%")
				.attr("height","100%");
			//this.svg.call(this.semanticZoom);
			this.svgDefs = this.svg.append("defs");
			this.svgStyle = this.svgDefs.append("style")
				.attr("type","text/css");
			this.main = this.svg.append("g");
			// Main Plot Area
			this.canvas = this.main.append("g");
			// Clip Path
			this.mainClip = this.svgDefs.append("clipPath")
				.attr("id",this.$().attr("id")+"_mainclip");
			// Rectangle Shape for clip path
			this.mainClipRect = this.mainClip.append("rect");
			this.main.attr("clip-path","url(#" + this.$().attr("id")+"_mainclip)");
			// Chart Title
			this.chartLabel = this.canvas.append("text")
				.attr("text-anchor","middle")
				//.attr("dominant-baseline","hanging")	// Not supported in IE :(
				.attr("class","chartTitle");
			// Stage holding legend and plot
			this.stage = this.canvas.append("g")
				.attr("id",this.$().attr("id")+"_stage");
			// Clip Path
			this.clip = this.canvas.append("clipPath")
				.attr("id",this.$().attr("id")+"_clip");
			// Rectangle Shape for clip path
			this.clipRect = this.clip.append("rect")
				.attr("class","clipRect");
			// Plot Area
			this.plotArea = this.stage.append("g")
				.attr("id",this.$().attr("id") + "_plotarea")
				.call(this.semanticZoom);
			
			this.plotWindow = this.plotArea.append("g")
				.attr("id",this.$().attr("id") + "_plotwindow")
				.attr("clip-path","url(#" + this.$().attr("id")+"_clip)");
			// Plot Background
			this.plotBG = this.plotWindow.append("rect")
				.attr("id",this.$().attr("id")+"_plotBG")
				.attr("opacity", 0);
			
			// Plot Layer
			this.plotLayer = this.plotWindow.append("g")
				.attr("id",this.$().attr("id")+"_plotlayer");
			/*
			 * Legend
			 */
			this.legendDrag = d3.behavior.drag()
		    	.origin(Object)
		    	.on("drag", this.dragLegend);
			
			this.legendGroup = this.stage.append('g')
				.data([{x:0,y:0}])
        		.attr('class', "legend-group" )
				.attr("id",this.$().attr("id")+"_legend")
				.attr("transform", function(d){
					return d.translate;
				})
				.call(this.legendDrag);
			this.legendRect = this.legendGroup.append('rect')
	        	.attr("class", "legend-container")	
	        	.attr('x', 0)
	        	.attr('y', 0);
			this.legendLabel = this.legendGroup.append('text')
	        	.attr('class', 'legend-label');
			/*
			 * Messages
			 */
			this.messageGroup = this.main.append("g")
		    	.attr("display", "none")
		    	.attr("opacity", 0)
		    	.attr("id",this.$().attr("id")+"_message");
	    
		    this.messageRect = this.messageGroup.append("rect")
		    	.attr("fill", "#006699")
		    	.attr("x",0).attr("y",0)
		    	.attr("width",this.dimensions.width)
		    	.attr("height",this.dimensions.height)
		    	
	    	this.messageText = this.messageGroup.append("text")
		    	.style("text-anchor","middle")
		    	.style("fill","#FFFFFF")
		    	.attr("x",this.dimensions.width/2).attr("y",this.dimensions.height/2)
		    	.text("Message");
		}
	}
};