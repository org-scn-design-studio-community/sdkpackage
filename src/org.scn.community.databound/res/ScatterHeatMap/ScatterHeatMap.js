/**
 * CC BY-NC-SA License
 * Pictogram by Mike Howles is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 * Based on a work at http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/ScatterHeatMap 
 *
 */

define(["../_modules/VizD3","sap/designstudio/sdk/component"], function(VizD3,Component) {
	var ownComponentName = "org.scn.community.databound.ScatterHeatMap";
	 /**
	 * ScatterHeatMap
	 */
	 ScatterHeatMap.prototype = VizD3;
     function ScatterHeatMap() {
    	 var that = this;
    	 // Call super
	 	VizD3.call(this, {
			radius : { 
				value : 20,
				opts : {
					desc : "Plot Radius",
					cat : "Cosmetics-Sizes",
					apsControl : "spinner"	
				}
			},
			bubbleMin : { 
				value : 5,
				opts : {
					desc : "Minimum Bubble Size",
					cat : "Cosmetics-Sizes",
					apsControl : "spinner"	
				}
			},
			bubbleMax : { 
				value : 20,
				opts : {
					desc : "Maximum Bubble Size",
					cat : "Cosmetics-Sizes",
					apsControl : "spinner"	
				}
			},
			measureX : { 
				opts : {
					desc : "X-Axis Measure",
					cat : "Data",
					apsControl : "measureselector"
				}
			},
			measureY : { 
				opts : {
					desc : "Y-Axis Measure",
					cat : "Data",
					apsControl : "measureselector"
				}
			},
			measureZ : { 
				opts : {
					desc : "Z-Axis Measure",
					cat : "Data",
					apsControl : "measureselector"
				}
			},
			colors : { 
				opts : {
					desc : "Colors",
					cat : "Data",
					apsControl : "palette"
				} 
			}
		});
    	this.componentInfo.title = "ScatterPlot Heat Map";
    	this.componentInfo.description = "This is a ScatterPlot Heat Map Component.  X and Y measures are taken from columns, defaulting to the first 2 columns."
    	this.afterUpdate = function(){
    		this.svg.selectAll("*").remove();
    		/*var heatmap = [
    		               [103,104,104,105,105,106,106,106,107,107,106,106,105,105,104,104,104,104,105,107,107,106,105,105,107,108,109,110,110,110,110,110,110,109,109,109,109,109,109,108,107,107,107,107,106,106,105,104,104,104,104,104,104,104,103,103,103,103,102,102,101,101,100,100,100,100,100,99,98,97,97,96,96,96,96,96,96,96,95,95,95,94,94,94,94,94,94],
    		               [104,104,105,105,106,106,107,107,107,107,107,107,107,106,106,106,106,106,106,108,108,108,106,106,108,109,110,110,112,112,113,112,111,110,110,110,110,109,109,109,108,107,107,107,107,106,106,105,104,104,104,104,104,104,104,103,103,103,103,102,102,101,101,100,100,100,100,99,99,98,97,97,96,96,96,96,96,96,96,95,95,95,94,94,94,94,94]
    		];*/
    		
    		var xy = [
    		    [0,0],
    		    [0,1],
    		    [0,1],
    		    [21,51],
    		    [21,20],
    		    [21,20],
    		    [21,20],
    		    [100,100]
    		];
    		var heatmap = [];
    		var xs = xy.map(function(obj){
    			return obj[0];
    		});
    		var ys = xy.map(function(obj){
    			return obj[1];
    		});
    		var maxX = d3.max(xs);
    		var maxY = d3.max(ys);
    		var emptyRow = [];
    		for(var x=0;x<=maxX;x++){
    			emptyRow.push(0);
    		}
    		for(var y=0;y<=maxY;y++){
    			heatmap.push(emptyRow.slice());
    		}
    		var hotPoint = 0;
    		for(var i=0;i<xy.length;i++){
    			heatmap[xy[i][1]][xy[i][0]]++;
    			hotPoint = (hotPoint<heatmap[xy[i][1]][xy[i][0]])?heatmap[xy[i][1]][xy[i][0]]:hotPoint;
    		}
    		this.heatmap = heatmap;
    		var width = this.$().width();
    		var height = this.$().height();
    		var dx = heatmap[0].length, dy = heatmap.length;
    	  // Fix the aspect ratio.
    	  // var ka = dy / dx, kb = height / width;
    	  // if (ka < kb) height = width * ka;
    	  // else width = height / ka;

    	  var x = d3.scale.linear()
    	      .domain([0, dx])
    	      .range([0, width]);

    	  var y = d3.scale.linear()
    	      .domain([0, dy])
    	      .range([height, 0]);

    	  this.color = d3.scale.quantile()
    	      .domain([0,hotPoint])
    	      .range(this.colors().split(","));

    	  var xAxis = d3.svg.axis()
    	      .scale(x)
    	      .orient("top")
    	      .ticks(20);

    	  var yAxis = d3.svg.axis()
    	      .scale(y)
    	      .orient("right");

    	  var canvas = this.svg.append("canvas");
    	  
    	  this.canvas
    	      .attr("width", dx)
    	      .attr("height", dy)
    	      .style("width", width + "px")
    	      .style("height", height + "px")
    	      .call(this.drawImage);

    	  this.svg.append("g")
    	      .attr("class", "x axis")
    	      .attr("transform", "translate(0," + height + ")")
    	      .call(xAxis)
    	      .call(this.removeZero);

    	  this.svg.append("g")
    	      .attr("class", "y axis")
    	      .call(yAxis)
    	      .call(this.removeZero);


    	  
    	
    	}
		this.drawImage = function(canvas) {
			var context = canvas.node().getContext("2d"),
				dx = canvas.node().width,
				dy = canvas.node().height,
				image = context.createImageData(dx, dy);
			
			for (var y = 0, p = -1; y < dy; ++y) {
				for (var x = 0; x < dx; ++x) {
					var c = d3.rgb(that.color(that.heatmap[y][x]));
					image.data[++p] = c.r;
					image.data[++p] = c.g;
					image.data[++p] = c.b;
					image.data[++p] = 255;
				}
			}
			context.putImageData(image, 0, 0);
		}
		this.removeZero = function(axis) {
			axis.selectAll("g").filter(function(d) { return !d; }).remove();
		}
		var parentInit = this.init;
    	this.init = function(){
    		parentInit.call(this);
    		this.$().addClass("ScatterHeatMap");
    		this.$().css({
    			position : "relative"
    		});
    		this.svg = d3.select("#" + this.$().attr("id")).select("svg");
    		this.canvas = d3.select("#" + this.$().attr("id")).select("canvas");
    		if(this.canvas.empty()){
				this.canvas = d3.select("#" + this.$().attr("id")).append("canvas")
					.style("position","absolute");
			}
    		if(this.svg.empty()){
				this.svg = d3.select("#" + this.$().attr("id")).append("svg")
					.style("position","absolute");
			}
    	}
    	
	}
	ScatterHeatMap.prototype.constructor = ScatterHeatMap;
	ScatterHeatMap.prototype.toString = function(){
		return ownComponentName;
	}
 	Component.subclass(ownComponentName, ScatterHeatMap);	// End of SDK
});