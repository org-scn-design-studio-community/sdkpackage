/**
 * CC BY-NC-SA License
 * CalendarViz by Mike Howles is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 * Based on a work at http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/CalendarViz
 *
 */

define(["css!./CalendarViz.css",
        "d3",
        "./../../../org.scn.community.shared/os/viz-modules/VizCoreDatabound",
        "sap/designstudio/sdk/component"], function (css,d3, VizCoreDatabound, Component) {
	var ownComponentName = "org.scn.community.databound.CalendarViz";
	/**
	 * Progress Bar Set
	 */
	CalendarViz.prototype = VizCoreDatabound;
	function CalendarViz() {
		var that = this;
		// Call super
		VizCoreDatabound.call(this, {
			/*
			 * concatenateDimensions
			 * rowClicked
			 */
			colorMeasure : {
				opts : {
					desc : "Color Measure",
					cat : "General",
					apsControl : "measureselector"
				}
			},
			colorScaleConfig : {
				opts : {
					apsControl : "scaleeditor",
					cat : "General",
					desc : "Color Scale Config"
				}
			},
			cellSize : {
				opts : {
					desc : "Cell Size",
					cat : "General",
					apsControl : "spinner"
				}
			},
			dateDimension : {
				opts : {
					desc : "Date Dimension",
					cat : "General",
					apsControl : "dimensionselector"
				}
			},
			dateKeyOrText : {
				opts : {
					apsControl : "segmentedbutton",
					desc : "Date - Use Key or Text",
					cat : "General",
					options : [{
							key : 'key',
							text : 'Key'
						}, {
							key : 'text',
							text : 'Text'
						}
					]
				}
			},
			dateFormat : {
				opts : {
					desc : "Date Format in Datasource",
					cat : "General",
					apsControl : "text"
				}
			}
		});
		this.componentInfo.title = "Calendar Visualization";
		this.componentInfo.description = "Calendar Visualization is a databound example of how to visualize data in a calendar format.  This is based of D3 Example <a href='http://bl.ocks.org/KathyZ/c2d4694c953419e0509b' target = '_blank'>Alternative Calendar View</a>";
		this.componentInfo.author = "Mike Howles";
		this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGvSURBVDjLpZO7alZREEbXiSdqJJDKYJNCkPBXYq12prHwBezSCpaidnY+graCYO0DpLRTQcR3EFLl8p+9525xgkRIJJApB2bN+gZmqCouU+NZzVef9isyUYeIRD0RTz482xouBBBNHi5u4JlkgUfx+evhxQ2aJRrJ/oFjUWysXeG45cUBy+aoJ90Sj0LGFY6anw2o1y/mK2ZS5pQ50+2XiBbdCvPk+mpw2OM/Bo92IJMhgiGCox+JeNEksIC11eLwvAhlzuAO37+BG9y9x3FTuiWTzhH61QFvdg5AdAZIB3Mw50AKsaRJYlGsX0tymTzf2y1TR9WwbogYY3ZhxR26gBmocrxMuhZNE435FtmSx1tP8QgiHEvj45d3jNlONouAKrjjzWaDv4CkmmNu/Pz9CzVh++Yd2rIz5tTnwdZmAzNymXT9F5AtMFeaTogJYkJfdsaaGpyO4E62pJ0yUCtKQFxo0hAT1JU2CWNOJ5vvP4AIcKeao17c2ljFE8SKEkVdWWxu42GYK9KE4c3O20pzSpyyoCx4v/6ECkCTCqccKorNxR5uSXgQnmQkw2Xf+Q+0iqQ9Ap64TwAAAABJRU5ErkJggg==";
		this.componentInfo.topics.splice(1, 0, {
			title : "Calendar Visualization License",
			content : '<a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAPCAIAAAD8q9/YAAABqklEQVRIx+WWMU8CMRTH3wewxRvZoGp0IpJOhDhwdMP1JhLHY3DSwU4kxAHYMIGlX+Gc1MXA4AQhpPEb8BX6FWq05Dyhd3Ju573ccGnea+/3/u+9K0AOTefGvoEfn4Lo07nuAMBwOLSGMcYwxhMxNs6r91XhsJAJXe3AEzHGGMfRhsynZ6fGf/o27fV6GQauX9TL5XJybUgpAaB91TYhS7lsXbayCowwMvJKKQkhAMAYU0oxxgCAECKlNCJXaTWs6tHDyDoXtg/7+W5djEZZnRNOSfC3A3fvuwAwm8201oQQz/O01vzLHMdRSgkhgiAwiwijsKrni7l1962XuA/azY41WXE5SucfBb69uwEAKaVSKjq3PM+jlEarmnOOMTZRL6/Pi9UiIfdWGeMg41Kzu+euvAkip1CYMeb7vlGYcy6E2CiMUiickHtrGf+q2FbsHxX+7GG06eEgCBzHAQDf98MeppSu12utdbPZrJxX9uzh/YH37+G4MZEauFavlUqlHE3piRgjdDAYDBKAXdc9Pjn6J//hcHT1+30rbcNtFIvFbN+08nWXzpV9AD9ivwErgn5oAAAAAElFTkSuQmCC" /></a>' +
			'<br /><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Progress Bar Set</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Mike Howles</span> is licensed under a <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" target="_blank" href="http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/CalendarViz" rel="dct:source">sdkpackage repository on Github</a>.'
		});
		this._selectedBar = "";
		this._poller = null;
		this._pollInterval = 250;
		this._previousWidth = -1;
		this._previousHeight = -1;

		this.barSelect = function (title, oControlEvent) {
			this._selectedTile = title;
			this.fireDesignStudioPropertiesChanged(["selectedTile"]);
			this.fireDesignStudioEvent("onTileSelect");
		};
		/**
		 * Fires after property change.
		 */
		this.afterUpdate = function () {
			this.drawCalendar();
		};
		var parentInit = this.init;
		this.init = function () {
			parentInit.call(this);
			// Tooltip Object
		    this.tooltip = d3.select("#" + this.$().attr("id"))
		      .append("div")
		      .attr("class", "calendar_tooltip")
		      .attr("id", this.$().attr("id") + "_tooltip")
		      .style("position", "absolute")
		      .style("z-index", "10")
		      .style("visibility", "hidden")
		      .text("a simple tooltip");
			this.measurements = {};
			this.$().addClass("CalendarViz");
			this.$().css("overflow-y", "auto");
			this.$().css("overflow-x", "hidden");
			//this.drawCalendar();
		};
		this.drawCalendar = function () {
			// Generate Data
			var that = this;
			var csc = this.parse(this.colorScaleConfig(),{
				scaleType : "linear",
				colors : "#FFFFFF,#000000"
			});
			var day = d3.time.format("%w"), // day of the week
				day_of_month = d3.time.format("%e") // day of the month
				day_of_year = d3.time.format("%j")
				week = d3.time.format("%U"), // week number of the year
				month = d3.time.format("%m"), // month number
				year = d3.time.format("%Y"),
				percent = d3.format(".1%"),
				format = d3.time.format("%Y-%m-%d");
			var arrData = [];
			var dates = {};
			var pm = this.colorMeasure() || "{}";
			var dd = this.dateDimension() || "{}";
			var progressObj = jQuery.parseJSON(pm);
			var dateObj = jQuery.parseJSON(dd);
			var measureIndex = this.determineMeasureIndex(progressObj);
			var dateIndex = this.determineDimensionIndex(dateObj);
			if(dateIndex ==-1 || measureIndex == -1){
				return;
			}
			var fullYears = {};
			for (var i = 0; i < this.flatData.values.length; i++) {
				var dateKey = this.flatData.rowHeadersKeys2D[i][dateIndex];
				if(this.dateKeyOrText()=="text"){
					dateKey = this.flatData.rowHeaders2D[i][dateIndex];
				}
				var key = format(new Date(dateKey));
				var row = dates[key];
				if(row === undefined){
					row = {
						key : key,
						date : dateKey,
						colorValue : 0,
						count : 0
					};
					dates[key] = row;
				}
				row.count++;
				row.colorValue += parseFloat(this.flatData.values[i][measureIndex]);
				var d = new Date(key);
				fullYears[d.getFullYear()] = true;
				for(key in dates){
					arrData.push(dates[key]);
				}
			}
			
			
			var min = d3.min(arrData,function(e){return e.colorValue});
			var max = d3.max(arrData,function(e){return e.colorValue});
			var mean = d3.mean(arrData,function(e){return e.colorValue});
			var median = d3.median(arrData,function(e){return e.colorValue});
			var dataRange = max - min;

			var pal = csc.colors.split(",") || [];
			var colorScale;
			if(csc.scaleType =="quantile" || csc.scaleType == "quantize"){
				colorScale = d3.scale[csc.scaleType]()
					.domain([])
					.range(pal);
				
				if(colorScale.interpolate) colorScale.interpolate(d3.interpolateRgb);
			}					
			if(csc.scaleType == "linear"){
				var rangeType = csc.rangeType || "minmax";
				if(rangeType == "minmax"){
					// Default
				}
				if(rangeType =="mean"){
					min = 0;
					dataRange = mean * 2;
				}
				if(rangeType =="median"){
					min = 0;
					dataRange = median * 2;
				}
				if(rangeType =="manual"){
					min = csc.min || 0;
					r = (csc.max || 100) - min;
				}
			    var stops = [];
				var rate = dataRange/pal.length;
				for(var i=0;i<pal.length;i++){
					stops.push(min + (rate*i));
				}
				colorScale = d3.scale.linear()
		    		.domain(stops)
		    		.range(pal);
		    		
				if(csc.interpolation) colorScale.interpolate(d3[csc.interpolation]);					
			}
	        // Clamp if can
	        if (typeof colorScale.clamp == 'function') {
	        	if(csc.clamp) colorScale.clamp(true);
	        }
			//alert(JSON.stringify(arrData));
			var height = this.$().height();
			var width = this.$().width();
/*
			// Color Scale (optional)
			var colorScale = d3.scale.ordinal()
				.range(this.palette().split(","))
				.domain(data.map(function (d) {
					return d.title
				}));
*/
			// SVG
			var vis = d3.select("#" + this.$().attr("id") + "_viz");
			if (vis.empty()) {
				vis = d3.select(this.$().get(0))
					.append("svg")
					.attr("id", this.$().attr("id") + "_viz");
			} else {
				// alert("vis exists");
			}
			vis.transition().duration(250)
				.attr("width", this.$().innerWidth())
				.attr("height", this.$().innerHeight() - 2);

		    // http://bl.ocks.org/KathyZ/c2d4694c953419e0509b
			
			var cellSize = this.cellSize(); // cell size

		    this.monthsPerRow = Math.floor(width / (cellSize * 7 * 1.2));
		    var shift_up = cellSize * 3;

		   

		    /*var color = d3.scale.quantize()
		        .domain([-.05, .05])
		        .range(d3.range(11).map(function(d) { return "q" + d + "-11"; }));
		    */

		    var yearData = [];
		    var yOffset = 50;
		    for(var yearKey in fullYears){
		    	var yr = parseInt(yearKey);
		    	if(yr!="NaN"){
		    		
			    	var heights = [];
		        	var numRows = Math.ceil(12 / (this.monthsPerRow));
		        	// Determine number of weeks in each month
		        	for(var m=0;m<12;m++){
		        		var week_diff = week(new Date(yr, m+1, 0)) - week(new Date(yr, m, 1));
		        		heights.push(week_diff);
		        	}
		        	// Determine highest month in each row
		        	var rowHeights = [];
		        	var yearWeeks = 0;
		        	for(var r=0;r<numRows;r++){
		        		var maxWeeks = 0;
		        		for(var c=0;c<this.monthsPerRow;c++){
		        			var index = r * this.monthsPerRow + c;
		        			if(index < 12){
		        				if(heights[index] > maxWeeks) maxWeeks = heights[index];
		        			}
		        		}
		        		// Store in array just because
		        		// rowHeights.push(maxWeeks); more accurate
		        		rowHeights.push(7);
		        		// Add heights number of weeks per row to total
		        		yearWeeks += maxWeeks;
		        	}
		        	var yearHeight = (yearWeeks * cellSize) + (numRows * cellSize) + 50; 
	        		yearData.push({
			    		year : yr,
			    		y : yOffset,
			    		height : yearHeight
			    	});
		        	yOffset += yearHeight + 50;     		
		    	}
		    }

		    var yearSelection = vis.selectAll(".year")
		    	.data(yearData/*,function(d){return yearData.year}*/);
		    
		    var newYears = yearSelection.enter()
		    	.append("g")
		    	.attr("class","year");
		   
		    newYears.append("text")
		    	.attr("class","year-title")
		    	//.attr("y", function(d, i) { return 0 })
		    	.attr("dy", -25)
		    	.text(function(d){return d.year});

		    yearSelection.selectAll(".year .year-title")
		    	.attr("x", function(d, i) { return width / 2;});
		    yearSelection.exit().remove();
		    var years = vis.selectAll("g");
		    
		    years.transition().duration(250).attr("transform", function (d,i) {
	    		console.log(d);
	    		return "translate(0," + (d.y + 25) + ")";
	    	});
		    
	        var monthYear = vis.selectAll(".year").selectAll(".month")
	    	.data(function(d) {
	    		return d3.time.months(new Date(d.year, 0, 1), new Date(d.year + 1, 0, 1));
	    	},function(d){return d;});
		    // enter
		    var newMonthYear = monthYear
		    	.enter()
		    	.append("g")
		    	.attr("class","month");
		    
		    newMonthYear.append("text").text(monthTitle);
		    
		    years.selectAll(".month")
		    	.transition().duration(250)
		    	.attr("transform",function(d, i){
		    	var x = 1.2 * cellSize * 7 * ((month(d)-1) % (that.monthsPerRow));
		    	var week_diff = week(d) - week(new Date(year(d), month(d)-1, 1) );
			    var row_level = (Math.ceil(month(d) / (that.monthsPerRow))) - 1;
			    var y = (week_diff * cellSize) + (row_level * cellSize * 7);
			    //debugger;
		    	return "translate("+x+","+y+")";
		    });
		    
		    var rect = monthYear.selectAll(".day")
		       .data(function(d) {
		        	// Fill with all days
		    	   var endDate = new Date(year(d), parseInt(month(d)), 1);
		    	   var days = d3.time.days(d, endDate);
		    	   var dayData = [];
		    	   days.map(function(e){
		    		   var key = format(e);
		    		   var colorValue = null;
		    		   if(dates[key]) colorValue = dates[key].colorValue;
		    		   var dayObj = {
		    			   key : key,
		    			   date : e,
		    			   colorValue : colorValue
		    		   };
		    		   dayData.push(dayObj);
		    	   })
		    	   return dayData;
		       },function(d){return d.key;});
		    	    
		    rect.enter()
		    	.append("rect")
		    	.attr("class", "day");
		    
		    monthYear.selectAll(".day")
		    	.attr("width", cellSize)
		        .attr("height", cellSize)
		        .style("fill", function(d){
		        	return(colorScale(d.colorValue));
		        })
		        .attr("x", function(d) {
		          var month_padding = 1.2 * cellSize*7 * ((month(d.date)-1) % (that.monthsPerRow));
		          return day(d.date) * cellSize;// + month_padding; 
		        })
		        .attr("y", function(d) { 
		          var week_diff = week(d.date) - week(new Date(year(d.date), month(d.date)-1, 1) );
		          var row_level = Math.ceil(month(d.date) / (that.monthsPerRow));
		          return week_diff*cellSize;
		        });
		        //.datum(format);
		   
		  

		      var data = d3.nest()
		        .key(function(d) { return d.key; })
		        .rollup(function(d) { // Move DS aggregation here? 
		        	return {
		        		colorValue : d[0].colorValue
		        	};
		        	// return (d[0].Close - d[0].Open) / d[0].Open;
		        })
		        .map(arrData);

		      //  Tooltip
		      //rect.on("mouseover", mouseover);
		      //rect.on("mouseout", mouseout);
		      function mouseover(d) {
		        var dateKey = d.key;
		    	that.tooltip.style("visibility", "visible");
		        var percentData = (data[dateKey] !== undefined) ? percent(data[dateKey].colorValue) : percent(0);
		        //console.log(dateKey);
		        //console.log(data[dateKey]);
		        var purchase_text = d.date + ": " + percentData;
		        that.tooltip.transition().duration(200).style("opacity", .9);      
		        that.tooltip.html(purchase_text)
                    .style("left", (d3.event.pageX)+30 + "px")     
                    .style("top", (d3.event.pageY) + "px"); 
		      }
		      function mouseout (d) {
		        that.tooltip.transition().duration(500).style("opacity", 0); 
		        var $tooltip = $("#" + that.$().attr("id") + "_tooltip");
		        $tooltip.empty();
		      }

		    function dayTitle (t0) {
		      return t0.toString().split(" ")[2];
		    }
		    function monthTitle (t0) {
		      return t0.toLocaleString("en-us", { month: "long" });
		    }
		    function yearTitle (t0) {
		      return t0.toString().split(" ")[3];
		    }
			
			this._poller = window.setTimeout(function () {
				that.measureSize(that)
			}, that._pollInterval);
		};
		this.measureSize = function (that) {
			var currentWidth = that.$().innerWidth();
			var currentHeight = that.$().innerHeight();
			if (currentWidth != that._previousWidth || currentHeight != that._previousHeight) {
				// If width or height has changed since the last calculation, redraw.
				/* Debug alert:
				alert("Resize detected.\n\nOld:" + that._previousWidth + " x " + that._previousHeight +
				"\n\nNew:" + currentWidth + " x " + currentHeight);
				 */
				that._previousHeight = currentHeight;
				that._previousWidth = currentWidth;
				this.drawCalendar();
			} else {
				// Sizes are the same.  Don't redraw, but poll again after an interval.
				that._poller = window.setTimeout(function () {
						that.measureSize(that)
					}, that._pollInterval);
			}
		};
	}
	CalendarViz.prototype.constructor = CalendarViz;
	CalendarViz.prototype.toString = function () {
		return ownComponentName;
	}
	Component.subclass(ownComponentName, CalendarViz); // End of SDK
});
