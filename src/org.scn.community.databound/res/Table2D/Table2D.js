/**
 * 2D Table
 */
define(["css!./Table2D.css",
        "d3",
        "./../../../org.scn.community.shared/os/viz-modules/VizCoreDatabound",
        "sap/designstudio/sdk/component"], function (css, d3, VizCoreDatabound, Component) {
	var ownComponentName = "org.scn.community.databound.Table2D";
	Table2D.prototype = VizCoreDatabound;
	function Table2D() {
		var that = this;
		// Call super
		VizCoreDatabound.call(this, {
			/*
			 * concatenateDimensions
			 * rowClicked
			 */
			selectedRow : {
				value : "",
				opts : {
					desc : "Data",
					cat : "Data",
					tooltip : "Selected Value",
					noAps : true
				}
			}
		});
		this.componentInfo.title = "2D Crosstab";
		this.componentInfo.description = "A simple flattened two-dimensional (Rows and Columns) representation of your data source.  Multiple dimensions in either rows or columns are concatenated.";
		this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAFmSURBVDhPpZA7SwNBFIXnf/ggiK2Vf2DAv+ADROMUYmdjpQgSSBMfhWCCQQlYBXygloJNmoRoVBR8IBbiLzAiqDFrjufObsi6Zo3ohY+5e+bew5lVarwENXYENVqEGiHDeagM3FO+m2kyKzuyK03mHig9AkVy/sTBFeD6GTgtu0jv1844s/tAzdBERYu44kVPFjAHQPqEF2mgaxvo3HLp2qHGBHLWte49ajaBREuRpMcqiRag2hJk3mMBqmPRPetaO/u+fTfBJRP0bgITh8D6BQ0GCwjWze2d1zVqKbUWYtCf90Ya1cxgNpFs8gS+Xw0V7EIrZuLLIQkG8qg4NVSqjsX5qNkFOa32Tng/Ncf/9KOBDzGQ87Xi4OWtavvJ6TgNNnL4hsl9iRpGLBajAYelNBclQfa4bA2CJQvB+reBsQb+6HV++QTXICSB/wcKshDUjPEMZEnn/mqgGTnCxg+1iNYt0UbjE3akCrn/ESejAAAAAElFTkSuQmCC";
		this.componentInfo.topics.push({
			title : "2D Crosstab",
			content : "A simple HTML table containing your datasource values.  Table appearance intended to be managed by the CSS Class you assign to it."
		});

		/**
		 * Fires after property change.
		 */
		this.afterUpdate = function () {
			try {
				var vals = [];
				if (this.flatData && this.flatData.formattedValues && this.flatData.formattedValues.length > 0) {
					vals = this.flatData.formattedValues.slice();
				} else if (this.flatData && this.flatData.values && this.flatData.values.length > 0) {
					vals = this.flatData.values.slice();
				} else {
					// Something happened.
					this.flatData = {
						columnHeaders : ["No Data"],
						rowHeaders : ["No Data"],
						values : [[0]],
						formattedValues : [["0 data"]]
					};
					vals = this.flatData.formattedValues.slice();
				}
				vals = jQuery.parseJSON(JSON.stringify(vals)); // Deep copy, shallow copy doesn't work on deep arrays
				//this.firePropertiesChanged(["stringData"]);
				// Splice in row header label
				for (var i = 0; i < vals.length; i++) {
					if (this.flatData.rowHeaders.length >= i)
						vals[i].splice(0, 0, this.flatData.rowHeaders[i]);
				}
				// Create Column Headers
				var colHeaders = this.thead.selectAll(".col-header")
					.data(this.flatData.columnHeaders)
					.text(function (d) {
						return d
					});

				colHeaders.enter()
				.append("th")
				.attr("class", "header col-header")
				.html(function (d) {
					return d
				});

				colHeaders.exit().remove();
				// Create Rows and Row Headers
				var rows = this.tbody.selectAll(".row")
					.data(vals);
				// Create Rows
				rows.enter()
				.append("tr")
				.classed("row", true)
				.classed("row-secondary", function (d, i) {
					return ((i + 1) / 2 == Math.floor((i + 1) / 2));
				})
				.on("click", this.rowClicked);

				rows.exit().remove();

				// Create Row Cells
				var rowCells = rows.selectAll(".cell")
					.data(function (d, i) {
						return d;
					})
					.text(function (d, i, pI) {
						return d;
					});

				rowCells.enter()
				.append("td")
				.classed("cell", true)
				.classed("row-header", function (d, i) {
					return i == 0;
				})
				.text(function (d, i, pI) {
					return d;
				});

				rowCells.exit().remove();

			} catch (e) {
				alert(e);
			}
		};
		var parentInit = this.init;
		this.init = function () {
			parentInit.call(this);
			this.$().addClass("Table2D");
			this.$().css({
				"overflow" : "hidden"
			});
			this.table = d3.select("#" + this.$().attr("id")).append("table");
			this.thead = this.table.append("thead").append("tr");
			this.thead.append("th").classed("header top-left", true);
			this.tbody = this.table.append("tbody");
		}
		this.rowClicked = function (i) {
			// alert(i);
		};
	}
	Table2D.prototype.constructor = Table2D;
	Table2D.prototype.toString = function () {
		return ownComponentName;
	}
	Component.subclass(ownComponentName, Table2D); // End of SDK
});
