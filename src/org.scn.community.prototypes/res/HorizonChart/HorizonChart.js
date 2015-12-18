/**
 * Copyright 2015 SCN Community Contributors
 *
 * Original Source Code Location:
 *  https://github.com/sap-design-studio-free-addons/sdk-package
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
// Looks like this is Jim's - Just porting to RequireJS pattern for loading - Did not modify your code.  -Mike
define(["css!./HorizonChart.css",
        "d3",
        "./../../../org.scn.community.shared/os/viz-modules/SDKCore",
		"sap/designstudio/sdk/component",
		"./../../../org.scn.community.shared/os/d3/plugins/horizon-chart/horizon"], function (css, d3,SDKCore, Component) {
	var ownComponentName = "org.scn.community.prototypes.horizonChart";

	Component.subclass("org.scn.community.prototypes.horizonChart", function () {

		var that = this;
		"use strict";

		this._poller = null;
		this._pollInterval = 250;
		this._previousWidth = -1;
		this._previousHeight = -1;

		var svg,
		x,
		focusEnter,
		chart,
		width,
		height,
		colorRange,
		trellisSet,
		margin = {
			top : 2,
			right : 20,
			bottom : 2,
			left : 20
		};

		/* Autogenerate setter/getter and their default values for the following properties. */
		this.autoProperties = {
			savedData : null,
			horizonMeasure : null,
			trellisDimension : null,
			bands : null,
			mode : null,
			positiveColor1 : null,
			positiveColor2 : null,
			negativeColor1 : null,
			negativeColor2 : null,
			labelSize : null,
			labelOffset : null,
			isEpoch : null,
			selectedNode : "",
			selectedYear : "",
			selectedMonth : "",
			selectedDate : ""
		};

		/* Create the aforementioned getter/setter and attach to 'this'. */
		for (var property in this.autoProperties) {
			this[property] = function (property) {
				return function (value) {
					try {
						if (value === undefined) {
							return this.autoProperties[property];
						} else {
							this.autoProperties[property] = value;
							return this;
						}
					} catch (e) {
						alert(e);
					}
				};
			}
			(property);
		}

		this.detectSize = function (that) {
			var currentWidth = that.$().innerWidth();
			var currentHeight = that.$().innerHeight();
			if (currentWidth != that._previousWidth || currentHeight != that._previousHeight) {
				// If width or height has changed since the last calculation, redraw.
				///*Debug alert:
				//alert("Resize detected.\n\nOld:" + that._previousWidth + " x " + that._previousHeight +
				//	"\n\nNew:" + currentWidth + " x " + currentHeight);
				//*/
				that._previousHeight = currentHeight;
				that._previousWidth = currentWidth;
				this.afterUpdate();
			} else {
				// Sizes are the same.  Don't redraw, but poll again after an interval.
				that._poller = window.setTimeout(function () {
						that.detectSize(that)
					}, that._pollInterval);
			}
		};

		this.init = function () {
			container = this.$();
			svg = initSvg(container);
		};

		this.afterUpdate = function () {

			width = that.$().innerWidth();
			height = that.$().innerHeight();

			colorRange = [that.negativeColor1(), that.negativeColor2(), that.positiveColor1(), that.positiveColor2()];

			//handle responsive component resize
			var svgResize = svg.attr("width", width)
				.attr("height", height);

			var horizon_data = that.savedData(),
			horizonRate = that.horizonMeasure().data,
			horizonAxisRows = horizon_data.axis_rows,
			horizonYearMember = horizon_data.dimensions[1].members,
			horizonMonthMember = horizon_data.dimensions[2].members,
			final_data = [];

			if (that.trellisDimension() !== "None" && that.isEpoch() == "true") {
				var horizonTrellisMember = horizon_data.dimensions[2].members
			} else if (that.trellisDimension() !== "None" && that.isEpoch() == "false") {
				var horizonTrellisMember = horizon_data.dimensions[3].members
			};

			horizonAxisRows.forEach(function (row, i) {
				var yearIndex = row[1],
				monthIndex = row[2],
				trellisValue = "None",
				trellisIndex = "";
				if (that.trellisDimension() !== "None" && that.isEpoch() == "false") {
					trellisIndex = row[3],
					trellisValue = horizonTrellisMember[trellisIndex].text;
				};
				//if date is already in seconds since Epoch use it as date
				if (that.trellisDimension() !== "None" && that.isEpoch() == "true") {
					trellisIndex = row[2];
					trellisValue = horizonTrellisMember[trellisIndex].text;
					var dateObject = new Date(parseInt(horizonYearMember[yearIndex].text)),
					dateUTC = parseInt(horizonYearMember[yearIndex].text),
					// time format for Design Studio ZTL
					dsHourFormat = d3.time.format("%Y%m%d%H"),
					dsHourString = dsHourFormat(dateObject),
					// time format for tooltip display
					hourFormat = d3.time.format("%x %X"),
					dateString = hourFormat(dateObject);
				} else {
					var dateUTC = Date.UTC(parseInt(horizonYearMember[yearIndex].text), parseInt(horizonMonthMember[monthIndex].text) - 1),
					dateString = horizonYearMember[yearIndex].text + "-" + horizonMonthMember[monthIndex].text;
				};

				var horizonRow = {
					"date" : dateUTC,
					"dateString" : dateString,
					"dateHourString" : dsHourString,
					"year" : horizonYearMember[yearIndex].text,
					"month" : horizonMonthMember[monthIndex].text,
					"measure" : horizonRate[i],
					"trellis" : trellisValue
				};
				final_data.push(horizonRow);
			});

			// Nest data by trellis dimension, even if it is "None".
			var trellis_data = [];
			trellisSet = d3.nest()
				.key(function (d) {
					return d.trellis;
				})
				.entries(final_data);

			// Transpose column values to rows per trellis.
			var trellis = trellisSet.forEach(function (object, i) {
					// Add new property to nested array removing special characters from key value
					// We need this at 2 levels, once to identify the right trellis array, and again inside to enable mousemove/click functions
					object.trellisSelector = object.key.replace(/\s|\./g, '');
					var values = object.values;
					var trellisMeasure = [];
					values.forEach(function (value, i) {
						trellisMeasure.push(value.measure);
					});
					var mean = trellisMeasure.reduce(function (p, v) {
							return p + v;
						}, 0) / trellisMeasure.length;
					// Transpose column values to rows.
					var trellis_node = trellisMeasure.map(function (rate, i) {
							return [values[i].date, rate - mean];
						});
					var maxMeasure = Math.max.apply(Math, trellisMeasure);
					//special characters are trouble when selecting right g.trellis for horizon chart
					var trellisSelector = object.key.replace(/\s|\./g, '');
					var trellis_dimension = {
						"id" : trellisSelector,
						"key" : object.key,
						"maxRate" : maxMeasure - mean,
						"horizonNodes" : trellis_node
					};
					trellis_data.push(trellis_dimension);
				});

			//append trellis horizon chart containers
			var chartContainers = svgResize.selectAll("g.trellis")
				.data(trellis_data);

			var trellisEnter = chartContainers.enter()
				.append("g")
				.attr("id", function (d) {
					return d.id
				})
				.attr("class", "trellis")
				.attr("width", width - margin.left - margin.right)
				.attr("height", (height / trellis_data.length) - margin.top - margin.bottom);

			var overlayRect = trellisEnter.append('rect')
				.attr('class', 'overlay')
				.attr("id", function (d) {
					return d.id
				})
				.attr('x', 0)
				.attr('y', 0)
				.attr('width', width - margin.left - margin.right)
				.attr('height', (height / trellis_data.length) - margin.top - margin.bottom);

			chart = d3.horizon()
				.width(width - margin.left - margin.right)
				.height((height / trellis_data.length) - margin.top - margin.bottom)
				.colors(colorRange)
				.bands(that.bands())
				.mode(that.mode())
				.interpolate("basis");

			chartContainers[0].forEach(function (container, i) {
				var trellisHeight = height / trellis_data.length,
				horizonProps = [],
				props = {
					"gId" : trellis_data[i].id,
					"key" : trellis_data[i].key
				},
				topTransform = margin.top + (trellisHeight * i);
				horizonProps.push(props);
				var gContainer = d3.select("#" + horizonProps[0].gId);
				gContainer.attr('transform', 'translate(' + margin.left + ', ' + topTransform + ')');
				//render the chart
				gContainer.data([trellis_data[i].horizonNodes]).call(chart);
				// add trellis labels
				var textLabel = gContainer.selectAll("text.label")
					.data(horizonProps);
				var widthOffset = width - that.labelOffset();
				var textSize = that.labelSize() + "px";
				var textEnter = textLabel.enter()
					.append("text")
					.attr("class", "label")
					.attr("x", 0)
					.style("text-anchor", "end")
					.style("font-size", textSize)
					.text(function (d) {
						if (that.trellisDimension() == "None") {
							return ""
						} else {
							return d.key
						}
					});
				//transition trellis labels on component resize
				var textTransition = textLabel.transition()
					.duration(0)
					.attr('transform', 'translate(' + widthOffset + ', ' + (trellisHeight - 6) + ')');

				focusEnter = gContainer.selectAll("g.focus")
					.data(horizonProps)
					.enter()
					.append("g")
					.attr("class", "focus")
					.attr("id", function (d) {
						return d.gId
					})
					.style("display", "none");

				focusEnter.append("circle")
				.attr("r", 4.5);

				focusEnter.append("text")
				.attr("class", "data_measure")
				.attr("text-anchor", "middle")
				.attr("dy", 20);

				focusEnter.append("text")
				.attr("class", "data_dimension")
				.attr("text-anchor", "middle")
				.attr("dy", -20);

				var overlaySelect = d3.select("rect#" + horizonProps[0].gId + ".overlay"),
				focusSelect = d3.select("g#" + horizonProps[0].gId + ".focus"),
				overlayMouse = overlaySelect.on("mouseover", function () {
						focusSelect.style("display", null);
					})
					.on("mouseout", function () {
						focusSelect.style("display", "none");
					})
					.on("mousemove", mousemove)
					.on("click", click);
			});

			// Set the ranges

			x = d3.time.scale().range([0, width - margin.right - margin.left]);

			// Scale the domain of the data
			x.domain(d3.extent(final_data, function (d) {
					return d.date;
				}));

			var bisectDate = d3.bisector(function (d) {
					return d.date;
				}).left;

			function mousemove(d) {
				var x0 = x.invert(d3.mouse(this)[0]),
				trellisId = this.id,
				filteredTrellis = trellisSet.filter(function (trellis) {
						if (trellis.trellisSelector === trellisId) {
							return trellis;
						}
					});
				var i = bisectDate(filteredTrellis[0].values, x0, 1);
				var d0 = filteredTrellis[0].values[i - 1];
				var d1 = filteredTrellis[0].values[i];
				var d = x0 - d0.date > d1.date - x0 ? d1 : d0;
				var selectFocus = d3.select("g#" + trellisId + ".focus");
				var selectTransform = selectFocus.attr("transform", "translate(" + x(d.date) + "," + d3.mouse(this)[1] + ")");
				selectTransform.select(".data_measure").text(d.measure);
				selectTransform.select(".data_dimension").text(d.dateString);
			}

			// Set clicked node and fire properties change to make trellis dimension and selected datetime accessible to BIAL
			function click(d) {
				var x0 = x.invert(d3.mouse(this)[0]),
				trellisId = this.id,
				filteredTrellis = trellisSet.filter(function (trellis) {
						if (trellis.trellisSelector === trellisId) {
							return trellis;
						}
					});
				var i = bisectDate(filteredTrellis[0].values, x0, 1);
				var d0 = filteredTrellis[0].values[i - 1];
				var d1 = filteredTrellis[0].values[i];
				var d = x0 - d0.date > d1.date - x0 ? d1 : d0;
				// set selected trellis
				if (that.trellisDimension() !== "None") {
					that.selectedNode(d.trellis);
				}
				if (that.isEpoch() == "false") {
					// set selected year and month values
					that.selectedYear(d.year);
					that.selectedMonth(d.month);
					// fire event so this change is also available via BIAL
					that.firePropertiesChangedAndEvent(["selectedNode", "selectedYear", "selectedMonth"], "onclick");
				} else {
					//set selected date
					that.selectedDate(d.dateHourString);
					that.firePropertiesChangedAndEvent(["selectedNode", "selectedDate"], "onclick");
				};
			}

			this._poller = window.setTimeout(function () {
					that.detectSize(that)
				}, that._pollInterval);

		}

		//Start helper functions

		function initSvg($container) {

			$container.empty();

			var svg = getSvg($container);

			function getSvg($container) {
				return d3.select($container[0]).append("svg").attr("class", "svg-container")
			}
			return svg;
		}

	});
});
