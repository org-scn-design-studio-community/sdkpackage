sap.designstudio.sdk.Component.subclass("com.interdobs.analyticcharts.BulletGraph", function() {
  "use strict";

  var that = this;
  var chartComponents = {};
  var chartProperties = {};
  var componentDimensions = {};
  var tooltip = undefined;
  var sourcedata = {};
  var dataset = undefined;
  var commaFormat = d3.format('.');
  var clickProperties = ["clickedgraphkey","clickedgraphtext","clickedserieskey","clickedseriestext","clickedvalue","clickedaxiskey","clickedaxistext"];
  var clicked = {};
  
  
  this.init = function(){
	  chartComponents.container = this.$()[0];
	  chartComponents.chart = d3.select(chartComponents.container);
	  tooltip = d3.select(chartComponents.container).append("div").attr("class", "tooltip").style("opacity", 0);
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
  
  
  this.maxgraphheight = function(e) { if (e === undefined) {return chartProperties.maxgraphheight;}else{chartProperties.maxgraphheight = e;return this;}};
  this.mingraphheight = function(e) { if (e === undefined) {return chartProperties.mingraphheight;}else{chartProperties.mingraphheight = e;return this;}};
  // getter/setter for clicked properties
  this.clickedgraphkey = function(e) { if (e === undefined) {return clicked.graphkey;}else{clicked.graphkey = e;return this;}};
  this.clickedgraphtext = function(e) { if (e === undefined) {return clicked.graphtext;}else{clicked.graphtext = e;return this;}};
  
  
  // getter/setter for the dataset
  this.dataset = function(e) { if (e === undefined) {return sourcedata.factdata;}else{sourcedata.factdata = e;return this;}};
  this.metadata = function(e) { if (e === undefined) {return sourcedata.metadata;}else{sourcedata.metadata = e;return this;}};
  this.realization = function(e) { if (e === undefined) {return chartProperties.realization;}else{chartProperties.realization = e;return this;}};
  this.comparison = function(e) { if (e === undefined) {return chartProperties.comparison;}else{chartProperties.comparison = e;return this;}};
  this.threshold1 = function(e) { if (e === undefined) {return chartProperties.threshold1;}else{chartProperties.threshold1 = e;return this;}};
  this.threshold2 = function(e) { if (e === undefined) {return chartProperties.threshold2;}else{chartProperties.threshold2 = e;return this;}};
  this.threshold3 = function(e) { if (e === undefined) {return chartProperties.threshold3;}else{chartProperties.threshold3 = e;return this;}};
  this.threshold4 = function(e) { if (e === undefined) {return chartProperties.threshold4;}else{chartProperties.threshold4 = e;return this;}};
  this.threshold5 = function(e) { if (e === undefined) {return chartProperties.threshold5;}else{chartProperties.threshold5 = e;return this;}};
  
  this.afterUpdate = function() {
	  dataset = returnData(sourcedata);
	  
	  componentDimensions.width = that.$().outerWidth(true);
	  componentDimensions.height = that.$().outerHeight(true);
	  componentDimensions.columnCutOff = Math.floor(dataset.length / chartProperties.numberofcolumns);
	  componentDimensions.modulusgraphs =  dataset.length % chartProperties.numberofcolumns ;
	  componentDimensions.graphWidth = componentDimensions.width  / chartProperties.numberofcolumns - chartProperties.columnmargin;
	  componentDimensions.maxRows = Math.ceil(dataset.length / chartProperties.numberofcolumns);
	  componentDimensions.graphHeight = componentDimensions.height / componentDimensions.maxRows - chartProperties.rowmargin;
	  if (chartProperties.maxgraphheight>0){componentDimensions.graphHeight =Math.min(componentDimensions.graphHeight,chartProperties.maxgraphheight)} 
	  if (chartProperties.mingraphheight>0){componentDimensions.graphHeight =Math.max(componentDimensions.graphHeight,chartProperties.mingraphheight)} 

	  componentDimensions.position = $(that.$()[0].parentElement).position();
	  chartProperties.positions = [];
	  console.log(dataset);
	  componentDimensions.titlelength = Math.max.apply(this,$.map(dataset, function(o){ return o.title.length; }))* 8;
	  if (chartProperties.showalert!="none"){componentDimensions.titlelength+=5};
	
	var i=0, j=0;
	for (i = 0; i < chartProperties.numberofcolumns; i++){for (j = 0; j < componentDimensions.maxRows; j++){chartProperties.positions.push({"x":i, "y":j});}}
		chartComponents.graphs = chartComponents.chart .selectAll("div.bulletgraphdiv").data(dataset);
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
			  		
			  		
			  		thresholds
					   .attr("width", function(d,i) {var returnval = 0; if(i!=0){ returnval = data[0].threshholds[i-1]}; return xScale(d-returnval);})
					   .attr("x", function(d,i){var returnval = 0; if(i!=0){ returnval = data[0].threshholds[i-1]}; return xScale(returnval);})
					   .attr("y", 0).attr("height",barheight)					  		

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

		for (var x = 0; x < Math.round(2 + Math.random() * 13); x++) {
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
		if(sourcedata.factdata && sourcedata.metadata) 
		{returndata = returnBoundData(sourcedata);} 
		else 
		{returndata = returnRandomData();}
		
		return returndata;
	}
	function returnBoundData(sourcedata) {
		var factNumbers = sourcedata.factdata.data;
		var factTuples = sourcedata.factdata.tuples;
		var dimensions = sourcedata.metadata.dimensions;
		var newData = [];
		

		  
		  return data;
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