/**
 * Bullet Chart
 */
define(["css!./BulletChart.css", "d3", "../_modules/VizCoreDatabound", "sap/designstudio/sdk/component"], function (css, d3, VizCoreDatabound, Component) {
	var ownComponentName = "org.scn.community.databound.BulletChart";
	BulletChart.prototype = VizCoreDatabound;
	function BulletChart() {
		"use strict";
		var that = this;
		// getter/setters for properties
		var properties = {
			threshold1 : {
				opts : {
					desc : "Threshold 1",
					cat : "General",
					apsControl : "text"
				}
			},
			realization : {
				opts : {
					desc : "Realization Measure",
					cat : "General",
					apsControl : "text"
				}
			},
			extrapolation : {
				opts : {
					desc : "Extrapolation Measure",
					cat : "General",
					apsControl : "text"
				}
			},
			comparison : {
				opts : {
					desc : "Comparison Measure",
					cat : "General",
					apsControl : "text"
				}
			},
			labeldimension : {
				opts : {
					desc : "Label Dimension",
					cat : "General",
					apsControl : "text"
				}
			},
			sublabeldimension : {
				opts : {
					desc : "Sub-Label Dimension",
					cat : "General",
					apsControl : "text"
				}
			},
			keydimension : {
				opts : {
					desc : "Key Dimension",
					cat : "General",
					apsControl : "text"
				}
			},
			threshold2 : {
				opts : {
					desc : "Threshold 2",
					cat : "General",
					apsControl : "text"
				}
			},
			threshold3 : {
				opts : {
					desc : "Threshold 3",
					cat : "General",
					apsControl : "text"
				}
			},
			threshold4 : {
				opts : {
					desc : "Threshold 4",
					cat : "General",
					apsControl : "text"
				}
			},
			threshold5 : {
				opts : {
					desc : "Threshold 5",
					cat : "General",
					apsControl : "text"
				}
			},
			columnmargin : {
				opts : {
					desc : "Column Margin",
					cat : "General",
					apsControl : "spinner"
				}
			},
			rowmargin : {
				opts : {
					desc : "Row Margin",
					cat : "General",
					apsControl : "spinner"
				}
			},
			charttopmargin : {
				opts : {
					desc : "Chart Top Margin",
					cat : "General",
					apsControl : "spinner"
				}
			},
			chartleftmargin : {
				opts : {
					desc : "Chart Left Margin",
					cat : "General",
					apsControl : "spinner"
				}
			},
			chartrightmargin : {
				opts : {
					desc : "Chart Right Margin",
					cat : "General",
					apsControl : "spinner"
				}
			},
			chartbottommargin : {
				opts : {
					desc : "Chart Bottom Margin",
					cat : "General",
					apsControl : "spinner"
				}
			},
			numberofcolumns : {
				opts : {
					desc : "Number of Columns",
					cat : "General",
					apsControl : "spinner"
				}
			},
			numberofticks : {
				opts : {
					desc : "Number of Ticks",
					cat : "General",
					apsControl : "spinner"
				}
			},
			headerxpos : {
				opts : {
					desc : "Header X Position",
					cat : "General",
					apsControl : "spinner"
				}
			},
			headerypos : {
				opts : {
					desc : "Header Y Position",
					cat : "General",
					apsControl : "spinner"
				}
			},
			maxgraphheight : {
				opts : {
					desc : "Maximum Graph Height",
					cat : "General",
					apsControl : "spinner"
				}
			},
			mingraphheight : {
				opts : {
					desc : "Minimum Graph Height",
					cat : "General",
					apsControl : "spinner"
				}
			},
			showalert : {
				opts : {
					apsControl : "combobox",
					desc : "Show Alert",
					cat : "General",
					options : [{
							key : "never",
							text : "Never"
						},{
							key : "worse than comparison",
							text : "Worse than Comparison Measure"
						},{
							key : "worse than threshold 5",
							text : "Worse than Threshold 5"
						},{
							key : "worse than threshold 4",
							text : "Worse than Threshold 4"
						},{
							key : "worse than threshold 3",
							text : "Worse than Threshold 3"
						},{
							key : "worse than threshold 2",
							text : "Worse than Threshold 2"
						},{
							key : "worse than threshold 1",
							text : "Worse than Threshold 1"
						}
					]
				}
			},
			higherisbetter : {
				opts : {
					desc : "Higher is Better",
					cat : "General",
					apsControl : "checkbox"
				}
			},
			showaxis : {
				opts : {
					desc : "Show Axis",
					cat : "General",
					apsControl : "checkbox"
				}
			},
			tooltip : {
				opts : {
					desc : "Show Tooltip",
					cat : "General",
					apsControl : "checkbox"
				}
			},
			onclick : {
				opts : {
					desc : "On Click",
					cat : "General",
					apsControl : "script"
				}
			},
			clickedgraphkey : {
				opts : {
					cat : "General",
					noAps : true
				}
			},
		};
		// Call super
		VizCoreDatabound.call(this, properties);
		this.componentInfo.title = "Bullet Chart";
    	this.componentInfo.description = "D3 Bullet Chart by Jeroen van der A";
    	this.componentInfo.author = "Jeroen van der A";
    	this.componentInfo.description = "An D3 Tag Cloud component created by Jeroen van der A.  Original blog can be found here: <a target='_blank' href='http://scn.sap.com/community/businessobjects-design-studio/blog/2015/05/29/design-studio-extension-bullet-chart'>Design Studio Extension: Bullet Chart</a>";
    	this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH3wUNDAoGD6DnLAAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAABeUlEQVQ4jcWSMUvDUBDH/8lLGpPQJLZQWiitQwRdFUQcRIqDpAayCkVwcfIDOLq4Cn4Hv4SOxS1gHRwcNAUHEQpvsCZNWm0catLGUKkgeNPdvbvf/d97x4RhGOLLHMdBFIqiCJ7n8d1Ylk3kmUmAKIrwfR8AUKvVoOt6CqCqaiLPpip+aVzPecTbbQt5Yxf69j6C/mBErlRA1flUgysI6HWVMYBeXcJt3UDUF7GwYaH/PowPX6dM7XgTCvJ1E2J1AdLSMp5PL2IFpVIJiqKkmvlMBko2G8f//4gJBZTSeA9s24ZlWSCEoNFoQJZl6LoOhmFACAHP8ygWi+AmablcLvYlSUIQBCCEjCYxDDhuXB6BEoCnTheRHDecw9rWDh7uWj9eIQG4vn/BxzBCaDg6OcfZ8eHsAFXKxADPc9Fut+F77uyA+mo19pvNJvYOTBBCsLm+MhXwt99omiYGg9EmUkph2zYAoFwugxACWZZhGAYKhQI0TYMgCPgEg+V/FJt82PkAAAAASUVORK5CYII=";
		var chartIndex = {};
		var chartComponents = {};
		var chartProperties = {};
		var componentDimensions = {};
		var tooltip = undefined;
		var sourcedata = {};
		var data = undefined;
		var commaFormat = d3.format('.');
		var clicked = {};
		var oldscrollval = 0;
		var numberOfGraphs = 0;

		this.init = function () {
			chartComponents.container = this.$()[0];
			chartComponents.chart = d3.select(chartComponents.container);
			tooltip = d3.select(chartComponents.container).append("div").attr("class", "tooltip").style("opacity", 0);
		};

		this.beforeUpdate = function () {};
		/*
		this.metadata = function (e) {
			if (e === undefined) {
				return sourcedata.metadata;
			} else {
				sourcedata.metadata = e;
				return this;
			}
		};
		 */
		this.afterUpdate = function () {
			data = returnData({
				factdata : this.data(),
				metadata : this.data().metadata
			})
			componentDimensions.numberOfGraphs = data.length;
			componentDimensions.width = that.$().outerWidth() - that.chartrightmargin() - that.chartleftmargin();
			componentDimensions.height = that.$().outerHeight() - that.charttopmargin() - that.chartbottommargin();
			componentDimensions.columnCutOff = Math.floor(componentDimensions.numberOfGraphs / that.numberofcolumns());
			componentDimensions.modulusgraphs = componentDimensions.numberOfGraphs % that.numberofcolumns();
			componentDimensions.graphWidth = componentDimensions.width / that.numberofcolumns() - that.columnmargin();
			componentDimensions.maxRows = Math.ceil(componentDimensions.numberOfGraphs / that.numberofcolumns());
			componentDimensions.graphHeight = componentDimensions.height / componentDimensions.maxRows - that.rowmargin();
			if (that.maxgraphheight() > 0) {
				componentDimensions.graphHeight = Math.min(componentDimensions.graphHeight, that.maxgraphheight())
			}
			if (that.mingraphheight() > 0) {
				componentDimensions.graphHeight = Math.max(componentDimensions.graphHeight, that.mingraphheight())
			}
			chartProperties.positions = [];
			componentDimensions.position = $(that.$()[0].parentElement).position();
			componentDimensions.titlelength = Math.max.apply(this, $.map(data, function (o) {
						var returnval = Math.max(o.subtitle.length * 4, o.title.length * 6);
						return returnval;
					}));
			if (that.showalert() != "none") {
				componentDimensions.titlelength += 30
			};

			var i = 0,
			j = 0;
			for (i = 0; i < that.numberofcolumns(); i++) {
				for (j = 0; j < componentDimensions.maxRows; j++) {
					chartProperties.positions.push({
						"x" : i,
						"y" : j
					});
				}
			}

			chartComponents.chart
			.style("overflow-y", "auto")
			.style("position", "relative")
			.style("top", function () {
				return that.charttopmargin() + "px";
			})
			.style("height", function () {
				return componentDimensions.height + "px";
			})

			.on("scroll", function () {
				var scrollheight = chartComponents.chart.property("scrollHeight");
				var scrolltop = chartComponents.chart.property("scrollTop");
				chartComponents.graphs
				.transition().duration(500).delay(function (d, i) {
					return oldscrollval < scrolltop ?
					(componentDimensions.numberOfGraphs - i) * 30 :
					i * 30;

				})
				.style("opacity", function (d, i) {
					var calcpos = parseInt(d3.select(this).style("top").slice(0, -2));
					calcpos = calcpos - scrolltop;
					var result = 1;
					if (calcpos < 0 || calcpos > componentDimensions.height - componentDimensions.graphHeight) {
						result = 0;
					}

					return result;
				});

				oldscrollval = scrolltop
			});

			chartComponents.graphs = chartComponents.chart.selectAll("div.bulletgraphdiv").data(data);
			chartComponents.graphs.enter()
			.append("div")
			.attr("class", "bulletgraphdiv");
			chartComponents.graphs.exit()
			.transition()
			.delay(0)
			.duration(375)
			.style("opacity", 0)
			.remove();
			chartComponents.graphs
			.style("left", function (d, i) {
				return chartProperties.positions[i].x * (componentDimensions.graphWidth + that.columnmargin()) + "px";
			})
			.style("top", function (d, i) {
				return chartProperties.positions[i].y * (componentDimensions.graphHeight + that.rowmargin()) + "px";
			})
			.style("opacity", function (d, i) {
				var calcpos = parseInt(d3.select(this).style("top").slice(0, -2));
				var result = 1;
				if (calcpos > componentDimensions.height - 50) {
					result = 0;
				}
				return result;
			})
			.each(function (d, i) {
				d3.select(this).call(bulletGraph);
			});
		};

		// ******************************   functions called internally *********************************


		function bulletGraph(selection) {
			selection.each(function (d, i) {
				var currentDiv = d3.select(this);
				var data = [];
				data.push(d);
				var thisGraph = currentDiv.selectAll("svg.bulletgraph").data(data);
				var barheight = componentDimensions.graphHeight - that.chartbottommargin() - that.charttopmargin()
					var maxBarWidth = componentDimensions.graphWidth - componentDimensions.titlelength - that.chartleftmargin() - that.chartrightmargin();

				thisGraph.enter().append("svg").attr("class", "bulletgraph");
				thisGraph
				.attr("width", componentDimensions.graphWidth)
				.attr("height", componentDimensions.graphHeight)
				.on("click", function (d) {
					that.clickedgraphkey(d.chartKey);
					that.firePropertiesChanged(["clickedgraphkey"]);
					that.fireEvent("onclick");
				})
				.on("mouseover", function (d) {
					if (that.tooltip() == true) {
						tooltip.transition()
						.duration(500)
						.style("opacity", 1);
						var format = d3.format(",.2f");
						var newHtml = "<br>Current Realization: " + format(d.real) + "</br>";
						if (d.extrap > d.real) {
							newHtml += "<br>Period End Prediction: " + format(d.extrap) + "</br>";
						}
						newHtml += "<br>Comparison Value: " + format(d.compare) + "</br>";

						tooltip.html(newHtml)
						.style("left", (d3.event.pageX - componentDimensions.position.left) + "px")
						.style("top", (d3.event.pageY - componentDimensions.position.top) + "px");
					}
				})
				.on("mouseout", function (d) {
					tooltip.transition()
					.duration(500)
					.style("opacity", 0);
				});

				var labelgroup = thisGraph.selectAll("g.label").data(data);
				var xaxisgroup = thisGraph.selectAll("g.x.axis").data(data);
				var graphgroup = thisGraph.selectAll("g.grapharea").data(data);
				xaxisgroup.enter().append("g").attr("class", "x axis");
				labelgroup.enter().append("g").attr("class", "label");
				graphgroup.enter().append("g").attr("class", "grapharea");
				labelgroup.attr("transform", "translate(" + that.chartleftmargin() + "," + that.charttopmargin() + ")")
				graphgroup.attr("transform", "translate(" + (that.chartleftmargin() + componentDimensions.titlelength) + "," + (that.charttopmargin()) + ")")
				xaxisgroup.attr("transform", "translate(" + (that.chartleftmargin() + componentDimensions.titlelength) + "," + (componentDimensions.graphHeight - that.chartbottommargin()) + ")")

				var header = labelgroup.selectAll("text.headerlabel").data(data);
				var subheader = labelgroup.selectAll("text.subheaderlabel").data(data);

				header.enter().append("text").attr("class", "headerlabel");
				subheader.enter().append("text").attr("class", "subheaderlabel");

				header
				.attr("x", 3)
				.attr("y", barheight * 0.45)
				.text(function (d) {
					return d.title;
				})

				subheader
				.attr("x", 8)
				.attr("y", barheight * 0.75)
				.text(function (d) {
					return d.subtitle;
				})

				labelgroup.select("circle").remove();

				if (showAlert(data[0])) {
					var sparkLineAlert = labelgroup.append("circle")
						.attr("class", "sparklinealert")
						.attr("cx", componentDimensions.titlelength - (barheight * 0.25))
						.attr("cy", barheight * 0.5)
						.attr("r", barheight * 0.15)
						.attr("class", "alertbad");
				}

				var thresholdsgroup = graphgroup.selectAll("g.threshholds").data(data);
				var actualgroup = graphgroup.selectAll("g.actuals").data(data);
				var comparegroup = graphgroup.selectAll("g.compare").data(data);

				thresholdsgroup.enter().append("g").attr("class", "threshholds");
				actualgroup.enter().append("g").attr("class", "actuals");
				comparegroup.enter().append("g").attr("class", "compare");

				var thresholds = thresholdsgroup.selectAll("rect.thresh").data(data[0].threshholds);
				var comparison = comparegroup.selectAll("rect.act.compare").data(data);
				var realization = actualgroup.selectAll("rect.act.real").data(data);
				var extrapolation = actualgroup.selectAll("rect.act.extrapol").data(data);

				thresholds.enter().append("rect").attr("class", function (d, i) {
					return "thresh thresh" + i;
				});
				thresholds.exit().remove();
				comparison.enter().append("rect").attr("class", "act compare");
				realization.enter().append("rect").attr("class", "act real");
				extrapolation.enter().append("rect").attr("class", "act extrapol");

				//xDomain = data[0].series[0].values.map(function(record) {return record.xaxis;});
				var xScale = d3.scale.linear()
					.range([0, maxBarWidth])
					.domain([Math.min(0, d3.min(data[0].values, function (d) {
									return d;
								})), d3.max(data[0].values, function (d) {
								return d;
							})]);
				var xAxis = d3.svg.axis()
					.scale(xScale)
					.ticks(that.numberofticks())
					.orient("bottom")
					.tickFormat(d3.format("s"));
				xaxisgroup.call(xAxis);
				xaxisgroup.select("path").remove();

				if (!that.showaxis()) {
					xaxisgroup.selectAll("*").remove();
				}

				thresholds
				.attr("width", function (d, i) {
					var returnval = 0;
					if (i != 0) {
						returnval = data[0].threshholds[i - 1]
					};
					return Math.max(xScale(d - returnval), 0);
				})
				.attr("x", function (d, i) {
					var returnval = 0;
					if (i != 0) {
						returnval = data[0].threshholds[i - 1]
					};
					return xScale(returnval);
				})
				.attr("y", 0).attr("height", barheight * 0.9)

				realization
				.attr("width", function (d) {
					return xScale(d.real);
				})
				.attr("x", 0).attr("y", barheight * 0.35).attr("height", barheight * 0.3);
				extrapolation
				.attr("width", function (d) {
					return Math.max(xScale(d.extrap - d.real), 0);
				})
				.attr("x", function (d) {
					return xScale(d.real);
				})
				.attr("y", barheight * 0.35).attr("height", barheight * 0.3);
				comparison
				.attr("width", 2)
				.attr("x", function (d) {
					return xScale(d.compare);
				})
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
					singleGroup.real = getRandomInt(-20, 130);
				singleGroup.extrap = singleGroup.real + getRandomInt(0, 20);
				singleGroup.compare = getRandomInt(70, 100);
				singleGroup.threshholds = createRandomArray(5, 0, 110);
				singleGroup.threshholds.sort(sortNumber); ;
				singleGroup.values = [singleGroup.real, singleGroup.extrap, singleGroup.compare]
				singleGroup.values.push.apply(singleGroup.values, singleGroup.threshholds)
				Group_Data.push(singleGroup);
			}
			return Group_Data;
		}
		function sortNumber(a, b) {
			return a - b;
		}

		function returnData(sourcedata) {
			var returndata = undefined;
			if (sourcedata.factdata) {
				returndata = returnBoundData(sourcedata);
			} else {
				returndata = returnRandomData();
			}

			return returndata;
		}
		function returnBoundData(sourcedata) {
			var factNumbers = sourcedata.factdata.data;
			var factTuples = sourcedata.factdata.tuples;

			// move dimensions, as the flatten api requires this
			sourcedata.factdata.dimensions = sourcedata.metadata ? sourcedata.metadata.dimensions : sourcedata.factdata.dimensions;
			var newData = new Array;

			// try this method to make a simple view on result set
			var options = that.org_scn_community_databound.initializeOptions();

			// flatten the data
			// that.flatData = org_scn_community_databound.flatten(sourcedata.factdata, options);	-- Pre-flattened thanks to inheritance.
			that.org_scn_community_databound.toRowTable(that.flatData, options);

			var makeDebugOne = false;
			if (makeDebugOne) {
				var singleGroup = {};

				singleGroup.title = "The Text M";
				singleGroup.chartKey = "The Key M";
				singleGroup.subtitle = "Subtitle M";

				singleGroup.real = 200; // the dark blue
				singleGroup.extrap = 210; // the background light blue
				singleGroup.compare = 150; // the | sign

				singleGroup.threshholds = [50, 180, 300]; // black to gray values
				singleGroup.threshholds.sort(sortNumber);

				singleGroup.values = [singleGroup.real, singleGroup.extrap, singleGroup.compare];
				singleGroup.values.push.apply(singleGroup.values, singleGroup.threshholds);

				newData.push(singleGroup);
			} else {
				for (var row = 0; row < that.flatData.rowHeaders.length; row++) {
					var rowHeader = that.flatData.rowHeaders[row];
					var columnHeaders = that.flatData.columnHeadersKeys;
					var values = that.flatData.values[row];
					var dimensionHeader = that.flatData.dimensionHeadersKeys
						var rowheaderskeys = that.flatData.rowHeadersKeys2D[row];
					var rowheadertexts = that.flatData.rowHeaders2D[row];
					var singleGroup = {};

					chartIndex.key = dimensionHeader.indexOf(that.keydimension());
					chartIndex.sublabel = dimensionHeader.indexOf(that.sublabeldimension());
					chartIndex.label = dimensionHeader.indexOf(that.labeldimension());

					chartIndex.real = columnHeaders.indexOf(that.realization())
						chartIndex.extrap = columnHeaders.indexOf(that.extrapolation())
						chartIndex.compare = columnHeaders.indexOf(that.comparison())
						chartIndex.thresh = [];
					chartIndex.thresh.push(columnHeaders.indexOf(that.threshold1()));
					chartIndex.thresh.push(columnHeaders.indexOf(that.threshold2()));
					chartIndex.thresh.push(columnHeaders.indexOf(that.threshold3()));
					chartIndex.thresh.push(columnHeaders.indexOf(that.threshold4()));
					chartIndex.thresh.push(columnHeaders.indexOf(that.threshold5()));

					singleGroup.title = chartIndex.label == -1 ? "" : rowheadertexts[chartIndex.label];
					singleGroup.subtitle = chartIndex.sublabel == -1 ? "" : rowheadertexts[chartIndex.sublabel];
					singleGroup.chartKey = chartIndex.key == -1 ? "" : rowheaderskeys[chartIndex.key];

					singleGroup.real = chartIndex.real == -1 ? 0 : values[chartIndex.real]; // the dark blue
					singleGroup.extrap = chartIndex.extrap == -1 ? singleGroup.real : values[chartIndex.extrap]; // the background light blue
					singleGroup.compare = chartIndex.compare == -1 ? 0 : values[chartIndex.compare]; // the | sign


					singleGroup.threshholds = []; // black to gray values
					for (var threshcolumn = 0; threshcolumn < chartIndex.thresh.length; threshcolumn++) {
						var newValue = chartIndex.thresh[threshcolumn] != -1 ? values[chartIndex.thresh[threshcolumn]] : 0;
						singleGroup.threshholds.push(newValue);
					}

					singleGroup.threshholds.sort(sortNumber); // sort to avoid negative values;
					singleGroup.values = [singleGroup.real, singleGroup.extrap, singleGroup.compare];
					singleGroup.values.push.apply(singleGroup.values, singleGroup.threshholds);

					newData.push(singleGroup);
				}
			}

			return newData;
		};
		function showAlert(currentGraphData) {
			var currentProp = that.showalert().slice(-1);
			that.higherisbetter()

			var currentVal =
				(
				currentProp == "1" && (currentGraphData.extrap < currentGraphData.threshholds[0] == that.higherisbetter()) ||
				currentProp == "2" && (currentGraphData.extrap < currentGraphData.threshholds[1] == that.higherisbetter()) ||
				currentProp == "3" && (currentGraphData.extrap < currentGraphData.threshholds[2] == that.higherisbetter()) ||
				currentProp == "4" && (currentGraphData.extrap < currentGraphData.threshholds[3] == that.higherisbetter()) ||
				currentProp == "5" && (currentGraphData.extrap < currentGraphData.threshholds[4] == that.higherisbetter()) ||
				currentProp == "n" && (currentGraphData.extrap < currentGraphData.compare == that.higherisbetter()))

			return currentVal;

		};

		function createRandomArray(numberOfRandoms, minRandom, maxRandom) {
			var arr = [];
			var characters = "abcdefghijklmnopqrstuvwxyz";
			for (var i = 0; i < numberOfRandoms; i++) {
				var randomnumber = getRandomInt(minRandom, maxRandom);
				arr.push(randomnumber);
			}

			return arr;
		};
		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		// called from Additional Properties Sheet JavaScript file
		this.getMetadataAsString = function () {
			return JSON.stringify(this.metadata());
		};

		// layout functions
		function formatNumber(number, symbol, scale, uom, decimals) {
			var roundednumber = undefined;
			if (typeof number == 'number') {

				var numberOfDecimals = parseInt(decimals);
				if (scale == 'none') {
					var num = d3.formatPrefix(number);
					roundednumber = num.scale(number).toFixed(numberOfDecimals) + num.symbol;
				} else {
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
				};
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

	}
	BulletChart.prototype.constructor = BulletChart;
	BulletChart.prototype.toString = function () {
		return ownComponentName;
	}
	Component.subclass(ownComponentName, BulletChart); // End of SDK
});
