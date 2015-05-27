sap.designstudio.sdk.Component.subclass("org.scn.community.prototypes.BulletChart", function() {
  "use strict";

  var that = this;
  var chartIndex = {};
  var chartComponents = {};
  var chartProperties = {};
  var componentDimensions = {};
  var tooltip = undefined;
  var sourcedata = {};
  var data = undefined;
  var commaFormat = d3.format('.');
  var clickProperties = ["clickedgraphkey","clickedgraphtext","clickedserieskey","clickedseriestext","clickedvalue","clickedaxiskey","clickedaxistext"];
  var clicked = {};
  var oldscrollval = 0;
  var numberOfGraphs = 0;
  
  this.init = function(){
	  chartComponents.container = this.$()[0];
	  chartComponents.chart = d3.select(chartComponents.container);

	  	
  };
  
  
 
  this.beforeUpdate = function() {};
  
  // getter/setters for properties 
  this.columnmargin = function(e) { if (e === undefined) {return chartProperties.columnmargin;}else{chartProperties.columnmargin = e;return this;}};
  this.rowmargin = function(e) { if (e === undefined) {return chartProperties.rowmargin;}else{chartProperties.rowmargin = e;return this;}};
  this.charttopmargin = function(e) { if (e === undefined) {return chartProperties.topmargin;}else{chartProperties.topmargin = e;return this;}};
  this.chartbottommargin = function(e) { if (e === undefined) {return chartProperties.bottommargin;}else{chartProperties.bottommargin = e;return this;}};
  this.chartleftmargin = function(e) { if (e === undefined) {return chartProperties.leftmargin;}else{chartProperties.leftmargin = e;return this;}};
  this.chartrightmargin = function(e) { if (e === undefined) {return chartProperties.rightmargin;}else{chartProperties.rightmargin = e;return this;}};
  this.numberofcolumns = function(e) { if (e === undefined) {return chartProperties.numberofcolumns;}else{chartProperties.numberofcolumns = e;return this;}};
  this.graphtitle = function(e) { if (e === undefined) {return chartProperties.showgraphtitle;}else{chartProperties.showgraphtitle = e;return this;}};
  this.numberofticks = function(e) { if (e === undefined) {return chartProperties.ticks;}else{chartProperties.ticks = e;return this;}};
  this.headerxpos = function(e) { if (e === undefined) {return chartProperties.headerxpos;}else{chartProperties.headerxpos = e;return this;}};
  this.headerypos = function(e) { if (e === undefined) {return chartProperties.headerypos;}else{chartProperties.headerypos = e;return this;}};
  this.showalert = function(e) { if (e === undefined) {return chartProperties.showalert;}else{chartProperties.showalert = e;return this;}};
  this.higherisbetter = function(e) { if (e === undefined) {return chartProperties.higherisbetter;}else{chartProperties.higherisbetter = e;return this;}};
  this.showaxis = function(e) { if (e === undefined) {return chartProperties.showaxis;}else{chartProperties.showaxis = e;return this;}};
  
  this.maxgraphheight = function(e) { if (e === undefined) {return chartProperties.maxgraphheight;}else{chartProperties.maxgraphheight = e;return this;}};
  this.mingraphheight = function(e) { if (e === undefined) {return chartProperties.mingraphheight;}else{chartProperties.mingraphheight = e;return this;}};
  // getter/setter for clicked properties
  this.clickedgraphkey = function(e) { if (e === undefined) {return clicked.graphkey;}else{clicked.graphkey = e;return this;}};
  this.clickedgraphtext = function(e) { if (e === undefined) {return clicked.graphtext;}else{clicked.graphtext = e;return this;}};
  
  
  // getter/setter for the data
  this.data = function(e) { if (e === undefined) {return sourcedata.factdata;}else{sourcedata.factdata = e;return this;}};
  this.metadata = function(e) { if (e === undefined) {return sourcedata.metadata;}else{sourcedata.metadata = e;return this;}};
  
  this.realization = function(e) { if (e === undefined) {return chartProperties.realization;}else{chartProperties.realization = e;return this;}};
  this.extrapolation = function(e) { if (e === undefined) {return chartProperties.extrap;}else{chartProperties.extrap = e;return this;}};
  this.comparison = function(e) { if (e === undefined) {return chartProperties.comparison;}else{chartProperties.comparison = e;return this;}};
  this.threshold1 = function(e) { if (e === undefined) {return chartProperties.threshold1;}else{chartProperties.threshold1 = e;return this;}};
  this.threshold2 = function(e) { if (e === undefined) {return chartProperties.threshold2;}else{chartProperties.threshold2 = e;return this;}};
  this.threshold3 = function(e) { if (e === undefined) {return chartProperties.threshold3;}else{chartProperties.threshold3 = e;return this;}};
  this.threshold4 = function(e) { if (e === undefined) {return chartProperties.threshold4;}else{chartProperties.threshold4 = e;return this;}};
  this.threshold5 = function(e) { if (e === undefined) {return chartProperties.threshold5;}else{chartProperties.threshold5 = e;return this;}};
  this.keydimension = function(e) { if (e === undefined) {return chartProperties.keydimension;}else{chartProperties.keydimension = e;return this;}};
  this.sublabeldimension = function(e) { if (e === undefined) {return chartProperties.sublabeldimension;}else{chartProperties.sublabeldimension = e;return this;}};
  this.labeldimension = function(e) { if (e === undefined) {return chartProperties.labeldimension;}else{chartProperties.labeldimension = e;return this;}};
  
  this.afterUpdate = function() {
	  data = returnData(sourcedata);
	  componentDimensions.numberOfGraphs = data.length;
	  componentDimensions.width = that.$().outerWidth() - chartProperties.rightmargin - chartProperties.leftmargin;
	  componentDimensions.height = that.$().outerHeight() - chartProperties.topmargin - chartProperties.bottommargin;
	  componentDimensions.columnCutOff = Math.floor(componentDimensions.numberOfGraphs / chartProperties.numberofcolumns);
	  componentDimensions.modulusgraphs =  componentDimensions.numberOfGraphs % chartProperties.numberofcolumns ;
	  componentDimensions.graphWidth = componentDimensions.width  / chartProperties.numberofcolumns - chartProperties.columnmargin;
	  componentDimensions.maxRows = Math.ceil(componentDimensions.numberOfGraphs / chartProperties.numberofcolumns);
	  componentDimensions.graphHeight = componentDimensions.height / componentDimensions.maxRows - chartProperties.rowmargin;
	  if (chartProperties.maxgraphheight>0){componentDimensions.graphHeight =Math.min(componentDimensions.graphHeight,chartProperties.maxgraphheight)} 
	  if (chartProperties.mingraphheight>0){componentDimensions.graphHeight =Math.max(componentDimensions.graphHeight,chartProperties.mingraphheight)} 
	  chartProperties.positions = [];
	  componentDimensions.titlelength = Math.max.apply(this,$.map(data, function(o){ return o.title.length; }))* 8;
	  if (chartProperties.showalert!="none"){componentDimensions.titlelength+=5};
	
	var i=0, j=0;
	for (i = 0; i < chartProperties.numberofcolumns; i++){for (j = 0; j < componentDimensions.maxRows; j++){chartProperties.positions.push({"x":i, "y":j});}}
	
	
	chartComponents.chart
		.style("overflow-y","auto")
		.style("position", "relative")
		.style("top", function() {return chartProperties.topmargin + "px";})
		.style("height", function () {return  componentDimensions.height + "px";})
	 	.on("scroll", function()
	 			{
	 			var scrollheight = chartComponents.chart.property("scrollHeight");
	 			var scrolltop = chartComponents.chart.property("scrollTop");
	 			// console.log(scrollheight);
	 			  chartComponents.graphs 
	 			  	.transition().duration(500).delay(function(d,i)
	 			  			{	
	 			  				return oldscrollval<scrolltop?
	 			  						(componentDimensions.numberOfGraphs - i)*30:
	 			  		 				i * 30;

	 			  			})
	 			  	.style("opacity", function(d,i) 
	 			  			{
	 			  			 var calcpos = parseInt(d3.select(this).style("top").slice(0,-2));
	 			  			 calcpos = calcpos - scrolltop;
	 			  			 var result = 1;
	 			  			 
	 			  			 
	 			  			 if (calcpos < 0 || calcpos > componentDimensions.height - componentDimensions.graphHeight )
	 			  			 { 
	 			  				 result = 0;
	 			  			 }
	 			  			  
	 			  			
	 			  			 return result;
	 			  			});
	 			
	 			  			oldscrollval = scrolltop
	 			});
	            
	chartComponents.graphs = chartComponents.chart.selectAll("div.bulletgraphdiv").data(data);
	chartComponents.graphs .enter()
		.append("div")
	   		.attr("class", "bulletgraphdiv");	
	chartComponents.graphs .exit()
			.transition()
			.delay(0)
			.duration(375)
			.style("opacity", 0)
			.remove();
	chartComponents.graphs 
		   	.style("left", function(d, i) { return chartProperties.positions[i].x * ( componentDimensions.graphWidth + chartProperties.columnmargin) + "px";})
		   	.style("top", function(d, i) { return chartProperties.positions[i].y * ( componentDimensions.graphHeight + chartProperties.rowmargin) + "px";})
		   	.style("opacity", function(d,i) 
	 			  			{
	 			  			 var calcpos = parseInt(d3.select(this).style("top").slice(0,-2));
	 			  			 var result = 1;
	 			  			 if (calcpos > componentDimensions.height - 50 ) { result = 0;}
	 			  			 return result;
	 			  			})
		   	.each(function(d,i) { d3.select(this).call(bulletGraph);});
  };

  
  
  // ******************************   functions called internally *********************************

  
	function bulletGraph(selection) {
		selection.each(function(d, i) 
				  {
					var currentDiv = d3.select(this);
			  		var data = [];data.push(d);
			  		var thisGraph = currentDiv.selectAll("svg.bulletgraph").data(data);
			  		var barheight = componentDimensions.graphHeight - chartProperties.bottommargin - chartProperties.topmargin
			  		var maxBarWidth = componentDimensions.graphWidth-componentDimensions.titlelength-chartProperties.leftmargin-chartProperties.rightmargin;
			  		
			  		thisGraph.enter().append("svg").attr("class", "bulletgraph");
			  		thisGraph
			  			.attr("width", componentDimensions.graphWidth)
			  			.attr("height", componentDimensions.graphHeight);
		
			  		var labelgroup = thisGraph.selectAll("g.label").data(data);
			  		var xaxisgroup = thisGraph.selectAll("g.x.axis").data(data);
			  		var graphgroup = thisGraph.selectAll("g.grapharea").data(data);
			  		xaxisgroup.enter().append("g").attr("class", "x axis");
			  		labelgroup.enter().append("g").attr("class", "label");
			  		graphgroup.enter().append("g").attr("class","grapharea");
			  		labelgroup.attr("transform", "translate("+chartProperties.leftmargin+","+chartProperties.topmargin+")")
			  		graphgroup.attr("transform", "translate("+(chartProperties.leftmargin+componentDimensions.titlelength) + ","+(chartProperties.topmargin)+")")
			  		xaxisgroup.attr("transform", "translate("+(chartProperties.leftmargin+componentDimensions.titlelength) +","+(componentDimensions.graphHeight - chartProperties.bottommargin)+")")
			  		
			  		var header = labelgroup.selectAll("text.headerlabel").data(data);
			  		var subheader = labelgroup.selectAll("text.subheaderlabel").data(data);
			  		
			  		header.enter().append("text").attr("class", "headerlabel");
			  		subheader.enter().append("text").attr("class", "subheaderlabel");
			  		

			  		header
			  			.attr("x", 3)
			  			.attr("y",  barheight * 0.45)
			  			.text(function(d){ return d.title;})
			  		
			  		subheader
		  				.attr("x", 8)
		  				.attr("y",  barheight * 0.75)
		  				.text(function(d){ return d.subtitle;})
			  			
		  			labelgroup.select("circle").remove();
			  		
			  		if (showAlert(data[0])) {
		  			var sparkLineAlert = labelgroup.append("circle")
									   		.attr("class", "sparklinealert")
									   		.attr("cx", componentDimensions.titlelength - (barheight * 0.25) )
									   		.attr("cy",barheight * 0.5)
									   		.attr("r", barheight * 0.15)
									   		.attr("class", "alertbad");
			  		}						

			  		var thresholdsgroup = graphgroup.selectAll("g.threshholds").data(data);
			  		var actualgroup = graphgroup.selectAll("g.actuals").data(data);
			  		var comparegroup = graphgroup.selectAll("g.compare").data(data);
			  		
			  		
			  		thresholdsgroup.enter().append("g").attr("class","threshholds");
			  		actualgroup.enter().append("g").attr("class","actuals");
			  		comparegroup.enter().append("g").attr("class","compare");
			  		
			  		
			  		var thresholds = thresholdsgroup.selectAll("rect.thresh").data(data[0].threshholds);
			  		var comparison = comparegroup.selectAll("rect.act.compare").data(data);
			  		var realization = actualgroup.selectAll("rect.act.real").data(data);
			  		var extrapolation = actualgroup.selectAll("rect.act.extrapol").data(data);
			  		
			  		
			  		
			  		thresholds.enter().append("rect").attr("class", function(d,i) {return "thresh thresh" + i;});
			  		thresholds.exit().remove();
			  		comparison.enter().append("rect").attr("class","act compare");
			  		realization.enter().append("rect").attr("class","act real");
			  		extrapolation.enter().append("rect").attr("class","act extrapol");
			  		
			  		
			  		//xDomain = data[0].series[0].values.map(function(record) {return record.xaxis;});			  		
			  		var xScale = d3.scale.linear()
			  			.range([0,maxBarWidth])
			  			.domain([Math.min(0,d3.min(data[0].values, function(d) {return d;})),d3.max(data[0].values, function(d) {return d;})]);
			  		var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
			  		xaxisgroup.call(xAxis);
			  		xaxisgroup.select("path").remove();
			  		
			  		if (!chartProperties.showaxis) {xaxisgroup.selectAll("*").remove();}
			  		
			  		thresholds
					   .attr("width", function(d,i) {var returnval = 0; if(i!=0){ returnval = data[0].threshholds[i-1]}; return xScale(d-returnval);})
					   .attr("x", function(d,i){var returnval = 0; if(i!=0){ returnval = data[0].threshholds[i-1]}; return xScale(returnval);})
					   .attr("y", 0).attr("height",barheight * 0.9)					  		

					realization
					   .attr("width", function(d) {return xScale(d.real);})
					   .attr("x", 0).attr("y", barheight * 0.35).attr("height", barheight * 0.3);
			  		extrapolation
					   .attr("width", function(d) {return xScale(d.extrap-d.real);})
					   .attr("x", function(d) {return xScale(d.real);})
					   .attr("y", barheight * 0.35).attr("height", barheight * 0.3);
			  		comparison
					   .attr("width", 2)
					   .attr("x", function(d) {return xScale(d.compare);})
					   .attr("y", barheight * 0.25).attr("height", barheight * 0.5);					   
			  	  });
		
		
		  
	};
	function returnRandomData() {
		var Group_Data = new Array;

		for (var x = 0; x < Math.round(2 + Math.random() * 20); x++) {
			var singleGroup = {};
			singleGroup.title = "fakedata graph " + x;
			singleGroup.chartKey = "fakedata" + x;
			singleGroup.subtitle = "(in 1000 EUR)"
			singleGroup.real = getRandomInt(-20, 130) ;
			singleGroup.extrap = singleGroup.real + getRandomInt(0, 20);
			singleGroup.compare = getRandomInt(70, 100);
			singleGroup.threshholds = createRandomArray(5, 0,110) ;
			singleGroup.threshholds.sort(sortNumber);;
			singleGroup.values = [singleGroup.real,singleGroup.extrap,singleGroup.compare]
			singleGroup.values.push.apply(singleGroup.values,singleGroup.threshholds)
			Group_Data.push(singleGroup);
		}
		return Group_Data;
	}
	function sortNumber(a,b) {
	    return a - b;
	}

	function returnData(sourcedata){
		var returndata = undefined;
		if(sourcedata.factdata) 
		{returndata = returnBoundData(sourcedata);} 
		else 
		{returndata = returnRandomData();}
		
		return returndata;
	}
	function returnBoundData(sourcedata) {
		var factNumbers = sourcedata.factdata.data;
		var factTuples = sourcedata.factdata.tuples;
		
		// move dimensions, as the flatten api requires this
		sourcedata.factdata.dimensions = sourcedata.metadata ? sourcedata.metadata.dimensions: sourcedata.factdata.dimensions;
		var newData = new Array;
		
		// missing code...
		// try this method to make a simple view on result set
		var options = org_scn_community_databound.initializeOptions();
		
		// flatten the data
		that._flatData = org_scn_community_databound.flatten(sourcedata.factdata,options);
		org_scn_community_databound.toRowTable(that._flatData,options);
		
		var makeDebugOne = false;
		if(makeDebugOne) {
			var singleGroup = {};
			
			singleGroup.title = "The Text M";
			singleGroup.chartKey = "The Key M";
			singleGroup.subtitle = "Subtitle M";
			
			singleGroup.real = 200; // the dark blue
			singleGroup.extrap = 210; // the background light blue
			singleGroup.compare = 150; // the | sign
			
			singleGroup.threshholds = [50,180,300]; // black to gray values
			singleGroup.threshholds.sort(sortNumber);
			
			singleGroup.values = [singleGroup.real,singleGroup.extrap,singleGroup.compare];
			singleGroup.values.push.apply(singleGroup.values,singleGroup.threshholds);

			newData.push(singleGroup);
		} else {
			for(var row = 0; row < that._flatData.rowHeaders.length; row++) {
				var rowHeader = that._flatData.rowHeaders[row];
				var columnHeaders = that._flatData.columnHeadersKeys;
				var values = that._flatData.values[row];
				var dimensionHeader = that._flatData.dimensionHeadersKeys
				var rowheaderskeys = that._flatData.rowHeadersKeys2D[row];
				var rowheadertexts = that._flatData.rowHeaders2D[row];
				var singleGroup = {};
			
				chartIndex.key = dimensionHeader.indexOf(chartProperties.keydimension);
				chartIndex.sublabel = dimensionHeader.indexOf(chartProperties.sublabeldimension);
				chartIndex.label = dimensionHeader.indexOf(chartProperties.labeldimension);
		  
				
				
				chartIndex.real = columnHeaders.indexOf(chartProperties.realization)
				chartIndex.extrap = columnHeaders.indexOf(chartProperties.extrap)
				chartIndex.compare = columnHeaders.indexOf(chartProperties.comparison)
				chartIndex.thresh = [];
				chartIndex.thresh.push (columnHeaders.indexOf(chartProperties.threshold1));
				chartIndex.thresh.push (columnHeaders.indexOf(chartProperties.threshold2));
				chartIndex.thresh.push (columnHeaders.indexOf(chartProperties.threshold3));
				chartIndex.thresh.push (columnHeaders.indexOf(chartProperties.threshold4));
				chartIndex.thresh.push (columnHeaders.indexOf(chartProperties.threshold5));
				
				singleGroup.title =  chartIndex.label == -1 ? "" : rowheadertexts[chartIndex.label];
				singleGroup.subtitle =  chartIndex.sublabel == -1 ? "" : rowheadertexts[chartIndex.sublabel];
				singleGroup.chartKey = chartIndex.key == -1 ? "" : rowheaderskeys[chartIndex.key];

				
				singleGroup.real = chartIndex.real == -1 ? 0 : values[chartIndex.real]; // the dark blue
				singleGroup.extrap = chartIndex.extrap == -1 ? singleGroup.real : values[chartIndex.extrap]; // the background light blue
				singleGroup.compare = chartIndex.compare == -1 ? 0 : values[chartIndex.compare]; // the | sign

				
				singleGroup.threshholds = []; // black to gray values
				for(var threshcolumn = 0; threshcolumn < chartIndex.thresh.length; threshcolumn++) {
					var newValue = chartIndex.thresh[threshcolumn] != -1 ? values[chartIndex.thresh[threshcolumn]] : 0;
					singleGroup.threshholds.push(newValue);}

				singleGroup.threshholds.sort(sortNumber); // sort to avoid negative values;
				singleGroup.values = [singleGroup.real,singleGroup.extrap,singleGroup.compare];
				singleGroup.values.push.apply(singleGroup.values,singleGroup.threshholds);

				newData.push(singleGroup);
			}
		}
		
		return newData;
	};
	function showAlert(currentGraphData){
		var currentProp = chartProperties.showalert.slice(-1);
		chartProperties.higherisbetter
		
		var currentVal = 
			(
					currentProp == "1" && (currentGraphData.extrap < currentGraphData.threshholds[0] ==  chartProperties.higherisbetter) ||
					currentProp == "2" && (currentGraphData.extrap < currentGraphData.threshholds[1] ==  chartProperties.higherisbetter) ||
					currentProp == "3" && (currentGraphData.extrap < currentGraphData.threshholds[2] ==  chartProperties.higherisbetter) ||
					currentProp == "4" && (currentGraphData.extrap < currentGraphData.threshholds[3] ==  chartProperties.higherisbetter) ||
					currentProp == "5" && (currentGraphData.extrap < currentGraphData.threshholds[4] ==  chartProperties.higherisbetter) ||
					currentProp == "n" && (currentGraphData.extrap < currentGraphData.compare ==  chartProperties.higherisbetter)
			
			)
			
			return currentVal;
		
		
	};

	function createRandomArray(numberOfRandoms, minRandom,maxRandom) {
		var arr = [];
		var characters = "abcdefghijklmnopqrstuvwxyz";
		for (var i = 0; i < numberOfRandoms; i++) {
			var randomnumber = getRandomInt(minRandom, maxRandom);
			arr.push(randomnumber);
		}
		
		return arr;
	}


	;
	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	// called from Additional Properties Sheet JavaScript file
	this.getMetadataAsString = function() {
		return JSON.stringify(this.metadata());
	};
	
	
	// layout functions
	function formatNumber(number, symbol, scale, uom, decimals) {
		var roundednumber = undefined;
		if (typeof number == 'number') {

			var numberOfDecimals = parseInt(decimals);
			if (scale == 'none') {
				var num = d3.formatPrefix(number);
				roundednumber = num.scale(number).toFixed(numberOfDecimals)+ num.symbol;
			} 
			else 
			{
				var scalednumber = number / parseInt(scale);
				var decimalnumber = scalednumber
						.toFixed(numberOfDecimals);
				var roundednumber = numberWithCommas(decimalnumber);
				if (scale == "1000") {
					roundednumber += "k";
				}
				if (scale == "1000000") {
					roundednumber += "M";
				}
			}

			if (uom !== 'none' && uom !== "#") {
				roundednumber = roundednumber + " " + uom;
			}
			if (number > 0 && symbol) {
				roundednumber = "+" + roundednumber;
			}
			;
		} else {
			roundednumber = "";
		}

		return roundednumber;
	}
	
	
	function numberWithCommas(x) {
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,
				".");
		return parts.join(",");
	}

	    

});