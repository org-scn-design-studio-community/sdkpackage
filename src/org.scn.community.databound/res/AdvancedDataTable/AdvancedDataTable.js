/**
 * CC BY-NC-SA License
 * Advanced Data Table by Mike Howles is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 * Based on a work at http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/AdvancedDataTable
 *
 */
require.config({
	paths : {
		"datatables" : "../" + sap.zen.createStaticSdkMimeUrl("org.scn.community.databound","") + "os/jquery-datatables/js/jquery.dataTables",
		"pageresize" : "../" + sap.zen.createStaticSdkMimeUrl("org.scn.community.databound","") + "os/jquery-datatables/plugins/dataTables.pageResize"
	},
	shim : {
		"pageresize" : {
			deps : ["datatables"]
		}
	}
});
define(["./../../../org.scn.community.shared/os/viz-modules/VizCoreDatabound",
		"sap/designstudio/sdk/component",
		"../../os/jquery-datatables/plugins/dataTables.jqueryui",
		"pageresize",
		"../../os/jquery-datatables/plugins/dataTables.responsive",
		"../../os/jquery-datatables/plugins/dataTables.colVis",
		"css!../../os/jqueryui/smoothness.css",
		"css!../../os/jquery-datatables/plugins/dataTables.jqueryui.css",
		"css!../../os/jquery-datatables/plugins/dataTables.responsive.css",
		"css!../../os/jquery-datatables/plugins/dataTables.colVis.css",
		"css!../../os/jquery-datatables/plugins/dataTables.colvis.jqueryui.css",
		"css!./AdvancedDataTable.css"
		/*<!-- <cssInclude>os/jquery-datatables/css/jquery.dataTables.css</cssInclude> -->*/
	], function (VizCoreDatabound, Component) {
	var ownComponentName = "org.scn.community.databound.AdvancedDataTable";
	AdvancedDataTable.prototype = VizCoreDatabound;
	function AdvancedDataTable() {
		var that = this;
		// Call super
		VizCoreDatabound.call(this, {
			/*
			 * concatenateDimensions
			 * rowClicked
			 */
			colVis : {
				opts : {
					desc : "Allow Column Visibility Menu",
					cat : "Columns-Visibility",
					tooltip : "Allow Showing/Hiding Columns",
					apsControl : "checkbox"
				}
			},
			colVisShowAll : {
				opts : {
					desc : "Enable Show All",
					cat : "Columns-Visibility",
					tooltip : "Add 'Show All' Option",
					apsControl : "checkbox"
				}
			},
			colVisShowNone : {
				opts : {
					desc : "Enable 'Hide All' Option",
					cat : "Columns-Visibility",
					tooltip : "Enable 'Hide All' Option",
					apsControl : "checkbox"
				}
			},
			colVisRestore : {
				opts : {
					desc : "Enable Restore",
					cat : "Columns-Visibility",
					tooltip : "Add 'Restore' Option",
					apsControl : "checkbox"
				}
			},
			displayLength : {
				opts : {
					desc : "Rows per Page",
					cat : "Behavior",
					tooltip : "Rows per Page",
					apsControl : "spinner"
				}
			},
			displayStart : {
				opts : {
					desc : "Starting Row",
					cat : "Behavior",
					tooltip : "Starting Row",
					apsControl : "spinner"
				}
			},
			selectedRow : {
				value : "",
				opts : {
					desc : "Data",
					cat : "Data",
					tooltip : "Selected Value",
					noAps : true
				}
			},
			paging : {
				opts : {
					desc : "Enable Pagination",
					cat : "Behavior",
					tooltip : "Enable Pagination",
					apsControl : "checkbox"
				}
			},
			pageResize : {
				opts : {
					desc : "Enable Pagination Resize",
					cat : "Behavior",
					tooltip : "Enable Pagination Resize",
					apsControl : "checkbox"
				}
			},
			pagingType : {
				opts : {
					apsControl : "segmentedbutton",
					desc : "Paginaton Type",
					cat : "Behavior",
					options : [{
							key : 'simple',
							text : 'Simple'
						}, {
							key : 'simple_numbers',
							text : 'Simple Numbers'
						}, {
							key : 'full',
							text : 'Full'
						}, {
							key : 'full_numbers',
							text : 'Full Numbers'
						}
					]
				}
			},
			ordering : {
				opts : {
					desc : "Enable Sorting",
					cat : "Behavior",
					tooltip : "Enable Sorting",
					apsControl : "checkbox"
				}
			},
			responsive : {
				opts : {
					desc : "Responsive",
					cat : "Behavior",
					tooltip : "Enable Responsive behavior",
					apsControl : "checkbox"
				}
			},
			/*scrollX : {
			opts : {
			desc : "Horizontal Scroll Width",
			cat : "Behavior",
			tooltip : "Horizontal Scroll",
			apsControl : "text"
			}
			},scrollY : {
			opts : {
			desc : "Vertical Scroll Height",
			cat : "Behavior",
			tooltip : "Vertical Scroll",
			apsControl : "text"
			}
			},scrollCollapse : {
			opts : {
			desc : "Vertical Scroll Collapse",
			cat : "Behavior",
			tooltip : "Vertical Scroll Collapse",
			apsControl : "checkbox"
			}
			},*/
			searching : {
				opts : {
					order : 1,
					desc : "Enable Searching",
					cat : "Behavior-Search",
					tooltip : "Enable Searching",
					apsControl : "checkbox"
				}
			},
			searchTerm : {
				opts : {
					order : 2,
					desc : "Initial Search Term",
					cat : "Behavior-Search",
					tooltip : "Initial Search Term",
					apsControl : "text"
				}
			},
			searchCaseInsensitive : {
				opts : {
					desc : "Case Insensitive",
					cat : "Behavior-Search",
					tooltip : " Indicate is case-insensitive sorting should be performed.",
					apsControl : "checkbox"
				}
			},
			searchRegex : {
				opts : {
					desc : "Use Regular Expressions",
					cat : "Behavior-Search",
					tooltip : "Treat the search as a regular expression or not",
					apsControl : "checkbox"
				}
			},
			searchSmart : {
				opts : {
					desc : "Smart Filtering",
					cat : "Behavior-Search",
					tooltip : "Use DataTables' smart filtering or not",
					apsControl : "checkbox"
				}
			},
			info : {
				opts : {
					desc : "Enable Info",
					cat : "Behavior",
					tooltip : "Enable Info",
					apsControl : "checkbox"
				}
			},
			formatting : {
				value : "",
				opts : {
					desc : "Stay Tuned!",
					cat : "Formatting",
					tooltip : "Conditional Formatting Rules",
					apsControl : "formatting"
				}
			},
			columns : {
				value : "",
				opts : {
					desc : "Column Configuration",
					cat : "Columns",
					tooltip : "Column Configuration",
					apsControl : "columnconfig"
				}
			}
		});
		this.componentInfo.title = "Advanced Data Table";
		this.componentInfo.description = "Advanced Data Table is based off of the jQuery Data Tables Plugin.  (<a href='http://datatables.net/' target = '_blank'>http://datatables.net/</a>).  The Advanced Data Table (ADT) is a good option for visualizing a flattened view of a data source.  Additional features include responsive layout, being able to hide and show columns easily from a menu, pagination options, search, control over columns (widths, names, sorting, searchabiliy, etc) and more!";
		this.componentInfo.author = "Mike Howles";
		this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAFmSURBVDhPpZA7SwNBFIXnf/ggiK2Vf2DAv+ADROMUYmdjpQgSSBMfhWCCQQlYBXygloJNmoRoVBR8IBbiLzAiqDFrjufObsi6Zo3ohY+5e+bew5lVarwENXYENVqEGiHDeagM3FO+m2kyKzuyK03mHig9AkVy/sTBFeD6GTgtu0jv1844s/tAzdBERYu44kVPFjAHQPqEF2mgaxvo3HLp2qHGBHLWte49ajaBREuRpMcqiRag2hJk3mMBqmPRPetaO/u+fTfBJRP0bgITh8D6BQ0GCwjWze2d1zVqKbUWYtCf90Ya1cxgNpFs8gS+Xw0V7EIrZuLLIQkG8qg4NVSqjsX5qNkFOa32Tng/Ncf/9KOBDzGQ87Xi4OWtavvJ6TgNNnL4hsl9iRpGLBajAYelNBclQfa4bA2CJQvB+reBsQb+6HV++QTXICSB/wcKshDUjPEMZEnn/mqgGTnCxg+1iNYt0UbjE3akCrn/ESejAAAAAElFTkSuQmCC";
		this.componentInfo.topics.splice(1, 0, {
			title : "Data Tables License",
			content : "DataTables, and its components, are released under the MIT license.  Please refer to the licenses for the full copyright restrictions placed on this software.  (<a target='_blank' href='http://opensource.org/licenses/MIT'>MIT License</a>)"
		});
		this.componentInfo.topics.splice(1, 0, {
			title : "Advanced Data Tables Component License",
			// content : "Advanced Data Tables Component License is released under the Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)  You <b>may</b> distribute, modify or rename the source.  <b>You may not sublicense or use for commercial use.</b>  You must give credit and state any changes you make in modifications.  Please refer to the licenses for the full copyright restrictions placed on this software.  (<a target='_blank' href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY-NC-SA 4.0 License</a>)"
			content : '<a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAPCAIAAAD8q9/YAAABqklEQVRIx+WWMU8CMRTH3wewxRvZoGp0IpJOhDhwdMP1JhLHY3DSwU4kxAHYMIGlX+Gc1MXA4AQhpPEb8BX6FWq05Dyhd3Ju573ccGnea+/3/u+9K0AOTefGvoEfn4Lo07nuAMBwOLSGMcYwxhMxNs6r91XhsJAJXe3AEzHGGMfRhsynZ6fGf/o27fV6GQauX9TL5XJybUgpAaB91TYhS7lsXbayCowwMvJKKQkhAMAYU0oxxgCAECKlNCJXaTWs6tHDyDoXtg/7+W5djEZZnRNOSfC3A3fvuwAwm8201oQQz/O01vzLHMdRSgkhgiAwiwijsKrni7l1962XuA/azY41WXE5SucfBb69uwEAKaVSKjq3PM+jlEarmnOOMTZRL6/Pi9UiIfdWGeMg41Kzu+euvAkip1CYMeb7vlGYcy6E2CiMUiickHtrGf+q2FbsHxX+7GG06eEgCBzHAQDf98MeppSu12utdbPZrJxX9uzh/YH37+G4MZEauFavlUqlHE3piRgjdDAYDBKAXdc9Pjn6J//hcHT1+30rbcNtFIvFbN+08nWXzpV9AD9ivwErgn5oAAAAAElFTkSuQmCC" /></a>' +
			'<br /><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Advanced Data Table</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Mike Howles</span> is licensed under a <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" target="_blank" href="http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/AdvancedDataTable" rel="dct:source">sdkpackage repository on Github</a>.'
		});

		/**
		 * Fires after property change.
		 */
		this.afterUpdate = function () {
			try {
				this.$().empty();
				var columnDefs = [];
				var cols = jQuery.parseJSON(this.columns());
				var colDefaults = {
					orderable : true,
					searchable : true
				};
				for (var i = 0; i < cols.length; i++) {
					var col = cols[i];
					var newDef = {};
					newDef.targets = col.targets;
					for (prop in colDefaults) {
						newDef[prop] = colDefaults[prop];
					}
					if (col.orderable != undefined)
						newDef.orderable = col.orderable;
					if (col.searchable != undefined)
						newDef.searchable = col.searchable;
					if (col.title != undefined)
						newDef.title = col.title;
					// if(col.sortDirection != undefined && col.sortDirection != "none") newDef.orderSequence = [col.sortDirection]
					if (col.type != undefined && col.type != "auto")
						newDef.type = [col.type]
						columnDefs.push(newDef);
				}
				var dom = "lfrtip";
				var search = {};
				if (this.searchTerm())
					search.search = this.searchTerm();
				search.smart = this.searchSmart();
				search.regex = this.searchRegex();
				search.caseInsensitive = this.searchCaseInsensitive();
				var colVis = {};
				if (this.colVisShowAll()) {
					colVis.showAll = "Show All";
				}
				if (this.colVisShowNone()) {
					colVis.showNone = "Hide All";
				}
				if (this.colVisRestore()) {
					colVis.restore = "Restore";
				}
				var options = {
					colVis : colVis,
					displayLength : this.displayLength(),
					displayStart : this.displayStart(),
					pageResize : this.pageResize(),
					paging : this.paging(),
					pagingType : this.pagingType(),
					responsive : this.responsive(),
					order : [],
					ordering : this.ordering(),
					//scrollX : this.scrollX(),
					//scrollY : this.scrollY(),
					//scrollCollapse : this.scrollCollapse(),
					search : search,
					searching : this.searching(),
					info : this.info(),
					columnDefs : columnDefs,
					// dom: dom
				};
				// alert(JSON.stringify(options));
				var table = "<table id='" + this.$().attr("id") + "_table' class='display'>" +
					"<thead><tr>";
				// Dimensions
				for (var i = 0; i < this.flatData.dimensionHeaders.length; i++) {
					table += "<th class='" + this.flatData.dimensionHeadersKeys[i] + "'>" + this.flatData.dimensionHeaders[i] + "</th>";
				}
				// Columns (Concatenated)
				for (var i = 0; i < this.flatData.columnHeaders.length; i++) {
					table += "<th class='" + this.flatData.columnHeadersKeys[i] + "'>" + this.flatData.columnHeaders[i] + "</th>";
				}
				table += "</tr></thead>";
				// Rows
				table += "<tbody>";
				for (var i = 0; i < this.flatData.values.length; i++) {
					table += "<tr>";
					var rowHeader2D = this.flatData.rowHeaders2D[i];
					var dataRow = this.flatData.values[i];
					for (var j = 0; j < rowHeader2D.length; j++) {
						table += "<td>" + rowHeader2D[j];
					}
					for (var j = 0; j < dataRow.length; j++) {
						table += "<td>" + dataRow[j];
					}
					table += "</tr>";
				}
				table += "</tbody></table>";
				this.$().html(table);
				var table = $("#" + this.$().attr("id") + "_table").dataTable(options);
				//colVis.buttonText = this.$().attr("id");
				if (this.colVis()) {
					var colvis = new $.fn.dataTable.ColVis(table, colVis);
					$(colvis.button()).insertBefore(this.$().find('div.dataTables_length'));
				}
			} catch (e) {
				alert(e);
			}
		};
		var parentInit = this.init;
		this.init = function () {
			parentInit.call(this);
			this.$().addClass("AdvancedDataTable");
			this.$().css({
				"overflow" : "hidden"
			});
		}
		this.rowClicked = function (i) {
			// alert(i);
		};
	}
	AdvancedDataTable.prototype.constructor = AdvancedDataTable;
	AdvancedDataTable.prototype.toString = function () {
		return ownComponentName;
	}
	Component.subclass(ownComponentName, AdvancedDataTable); // End of SDK
});
