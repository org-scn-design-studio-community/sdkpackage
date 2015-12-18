/**
 * CC BY-NC-SA License
 * Pictogram by Mike Howles is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 * Based on a work at http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/HexBin
 *
 */

define(["./../../../org.scn.community.shared/os/viz-modules/VizAxisChart",
        "sap/designstudio/sdk/component"], function (VizAxisChart, Component) {
	var ownComponentName = "org.scn.community.databound.MarimekkoChart";
	/**
	 * Marimekko Chart
	 */
	MarimekkoChart.prototype = VizAxisChart;
	function MarimekkoChart() {
		// Call super
		VizAxisChart.call(this, {
			selectedValue : {
				value : "",
				opts : {
					desc : "Data",
					cat : "Data",
					tooltip : "Selected Value",
					noAps : true
				}
			},
			selectedColumn : {
				value : "",
				opts : {
					desc : "Data",
					cat : "Data",
					tooltip : "Selected Column",
					noAps : true
				}
			},
			selectedRow : {
				value : 0.0,
				opts : {
					desc : "Data",
					cat : "Data",
					tooltip : "Selected Row",
					noAps : true
				}
			}
		});
		this.d3tip.html(function (d) {
			var html = "<span>";
			var sep = "";
			html += d.col + "<br/>";
			html += d.row + "<br/>";
			html += d.value;
			/*
			for(var i=0;i<d.labels.length;i++){
			html+=d.labels[i]+"<br/>";
			}

			html += d.x + "," + d.y;
			if(d.z) html+= "," + d.z;
			 */
			html += "</span>";
			return html;
		});
		//var tipx = this.d3tip()
		//.attr('class', 'd3-tip')
		//.html(function (d) {
			//var html = "<span>";
			//var sep = "";
			//html += d.col + "<br/>";
			//html += d.row + "<br/>";
			//html += d.value;
			/*
			for(var i=0;i<d.labels.length;i++){
			html+=d.labels[i]+"<br/>";
			}

			html += d.x + "," + d.y;
			if(d.z) html+= "," + d.z;
			 */
			//html += "</span>";
			//return html;
		//})
		//.offset([-12, 0]);
		/*.offset(function(d) {
		return [(this.getBBox().height / 2) - 12, 0]
		});*/
		this.setSelection = function (d) {
			if (d) {
				var changes = [];
				if (d.row == that.selectedRow() && d.col == that.selectedColumn()) {
					that.selectedRow("");
					that.selectedColumn("");
					that.selectedValue(0.0);
				} else {
					that.selectedRow(d.row);
					that.selectedColumn(d.col);
					that.selectedValue(d.value);
				}
				that.firePropertiesChanged(["selectedRow", "selectedColumn", "selectedValue"]);
				that.fireEvent("onSelect");
			}
		};

		var parentInit = this.init;
		this.init = function () {
			parentInit.call(this);
			this.$().addClass("MarimekkoChart");
			this.svg.call(this.d3tip);
		}
		/**
		 * Compute X Scale
		 */
		var parentComputeXScale = this.computeXScale;
		this.computeXScale = function () {
			parentComputeXScale.apply(this);
			this.xScale
			.domain([0, 1])
			.range([0, this.dimensions.plotWidth - this.dimensions.yAxisWidth]);

			if (this.enableZoom()) {
				var reverseXDomain = [0, 1];
				reverseXDomain[0] = this.xScale.invert(this.zoomXScale.domain()[0]);
				reverseXDomain[1] = this.xScale.invert(this.zoomXScale.domain()[1]);

				this.xScale
				.domain(reverseXDomain)
				.range([0, this.dimensions.plotWidth - this.dimensions.yAxisWidth]);
			}
			return this;
		}
		/**
		 * Compute Y Scale
		 */
		var parentComputeYScale = this.computeYScale;
		this.computeYScale = function () {
			parentComputeYScale.apply(this);
			this.yScale
			.domain([1, 0])
			.range([0, this.dimensions.plotHeight - this.dimensions.xAxisHeight]);
			// Screwy zoom.
			if (this.enableZoom()) {
				var reverseDomain = [1, 0];
				reverseDomain[0] = this.yScale.invert(this.zoomYScale.domain()[1]);
				reverseDomain[1] = this.yScale.invert(this.zoomYScale.domain()[0]);
				this.yScale
				.domain(reverseDomain)
				.range([0, this.dimensions.plotHeight - this.dimensions.xAxisHeight]);
			}
			return this;
		}
		/**
		 * Update Plot
		 */
		var parentUpdatePlot = this.updatePlot;
		this.updatePlot = function () {
			parentUpdatePlot.call(this);
			var that = this;
			var mekko = [];
			var vals = [];
			vals = this.flatData.values.slice();
			for (var i = 0; i < vals.length; i++) {
				var currentRow = vals[i];
				for (var j = 0; j < currentRow.length; j++) {
					mekko.push({
						"row" : this.flatData.rowHeaders[i],
						"col" : this.flatData.columnHeaders[j],
						"value" : parseFloat(currentRow[j]) || null
					});
				}
			}
			var cp = ["#DFDFDF"];
			if (this.colorPalette() != "") {
				cp = this.colorPalette().split(",");
			}
			this.colorRange = d3.scale.ordinal().domain(this.flatData.rowHeaders).range(cp);
			var n = d3.format(",d"),
			p = d3.format("%");
			// Nest values by col. We assume each row+col is unique.
			var rows = d3.nest()
				.key(function (d) {
					return d.col;
				})
				.entries(mekko);

			// Compute the total sum, the per-column sum, and the per-row offset.
			// You can use reduce rather than reduceRight to reverse the ordering.
			// We also record a reference to the parent column for each row.
			var sum = rows.reduce(function (v, p) {
					return (p.offset = v) + (p.sum = p.values.reduceRight(function (v, d) {
								d.parent = p;
								return (d.offset = v) + d.value;
							}, 0));
				}, 0);

			// Add a row for each column.
			var columns = this.plotLayer.selectAll(".column").data(rows);

			var newColumns = columns.enter()
				.append("g")
				.attr("class", "column")
				.attr("transform", function (d) {
					return "translate(" + that.xScale(d.offset / sum) + ")";
				})
				.attr("opacity", 0);

			newColumns.append("g")
			.attr("class", "rectLayer")

			newColumns.append("g")
			.attr("class", "labelLayer")

			columns.exit()
			.transition().duration(this.ms())
			.attr("opacity", 0)
			.remove();

			columns
			.transition().duration(this.ms())
			.attr("opacity", 1)
			.attr("transform", function (d) {
				return "translate(" + that.xScale(d.offset / sum) + ")";
			});

			// Add a rect for each row.
			var segs = columns.select(".rectLayer").selectAll("rect").data(function (d) {
					return d.values;
				});
			var lbls = columns.select(".labelLayer").selectAll("text").data(function (d) {
					return d.values;
				});

			segs.enter().append("rect")
			.attr("class", "row")
			.attr("class", "plot")
			.attr("opacity", 0);

			segs.exit().remove();

			lbls.enter().append("text")
			.attr("text-anchor", "middle")
			.attr("dy", ".5em")
			.attr("opacity", 0);

			lbls.exit().remove();

			columns.select(".labelLayer").selectAll("text")
			.text(function (d) {
				return that.formatter(d.value);
			})
			.attr("pointer-events", "none")
			.attr("style", this.chartValueStyle())
			.transition().duration(this.ms())
			.attr("opacity", function (d) {
				if (that.showValues()) {
					return 1;
				} else {
					return 0;
				}
			})
			.attr("y", function (d) {
				return that.yScale((d.offset + (d.value / 2)) / d.parent.sum);
			})
			.attr("x", function (d) {
				return that.xScale((d.parent.sum / 2) / sum)
			})
			.attr("width", function (d) {
				return that.xScale(d.parent.sum / sum);
			});
			//.call(this.wrap);

			columns.select(".rectLayer").selectAll("rect")
			.transition().duration(this.ms())
			.attr("opacity", this.plotAlpha() / 100)
			.attr("y", function (d) {
				return that.yScale((d.offset + d.value) / d.parent.sum);
			})
			.attr("height", function (d) {
				return that.yScale((d.parent.sum - d.value) / d.parent.sum);
			})
			.attr("width", function (d) {
				return that.xScale(d.parent.sum / sum);
			})
			.style("fill", function (d) {
				if (d && d.row == that.selectedRow() && d.col == that.selectedColumn()) {
					return that.selectedColor();
				}
				return that.colorRange(d.row);
			});
			// Events
			segs.on("mouseover", this.d3tip.show)
			.on("mouseout", this.d3tip.hide)
			.on('click', this.setSelection);

			return this;
		}
		/**
		 * Update Legend
		 */
		var parentUpdateLegend = this.updateLegend;
		this.updateLegend = function () {
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
			.attr('y', function (d, i) {
				return (i * unit * 2) + (unit * 3);
			})
			.style('fill', function (d, i) {
				return that.colorRange(d);
			});

			// Enter swatch labels
			legendLabels.enter().append('text').attr('class', 'legend-amount');
			// Exit swatch labels
			legendLabels.exit().remove();
			// Update - why doesn't text update here, or does it?

			this.legendGroup.selectAll('text.legend-amount')
			.transition().duration(this.ms())
			.attr('font-size', unit)
			.attr('x', (unit * 3))
			.attr('y', function (d, i) {
				return (i * unit * 2) + (unit * 4 - 1);
			})
			.text(function (d, i) {
				return d;
			});

		}
	}
	MarimekkoChart.prototype.constructor = MarimekkoChart;
	MarimekkoChart.prototype.toString = function () {
		return ownComponentName;
	}
	Component.subclass(ownComponentName, MarimekkoChart); // End of SDK
});
