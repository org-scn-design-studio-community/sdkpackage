define(["d3",
        "./../../../org.scn.community.shared/os/viz-modules/SDKCore",
        "sap/designstudio/sdk/component",
        "css!./Hierarchy.css"
        ], function (d3, SDKCore, Component) {
	var ownComponentName = "org.scn.community.databound.jpd3hier";
	Hierarchy.prototype = SDKCore;
	function Hierarchy() {
		var that = this;
		//VizCoreDatabound oder SDKCore
		SDKCore.call(this, {
			selectedNode : {
				opts : {
					cat : "General",
					noAps : true
				}
			},
			rsltSet : {
				value : null,
				opts : {
					desc : "Data to display",
					cat : "Data",
					tooltip : "Data from datasource",
					apsControl : "dataselection"
				}
			},
			useDummyData : {
				opts : {
					desc : "Use Dummy Data",
					cat : "Data",
					apsControl : "checkbox"
				}
			},
			showRootBubble : {
				opts : {
					desc : "Show Root Bubble",
					cat : "General",
					apsControl : "checkbox"
				}
			},
			showWarnings : {
				opts : {
					desc : "Show Warnings",
					cat : "General",
					apsControl : "checkbox"
				}
			},
			showText : {
				opts : {
					desc : "Show Text",
					cat : "General",
					apsControl : "checkbox"
				}
			},
			alerterUsePercentage : {
				opts : {
					desc : "Use Percentages",
					cat : "General",
					apsControl : "checkbox"
				}
			},
			alerterHighValuesAreGood : {
				opts : {
					desc : "High Values are Good",
					cat : "General",
					apsControl : "checkbox"
				}
			},
			alertColorRed : {
				opts : {
					desc : "Alert Color Red",
					cat : "General",
					apsControl : "color"
				}
			},
			alertColorYellow : {
				opts : {
					desc : "Alert Color Yellow",
					cat : "General",
					apsControl : "color"
				}
			},
			alertColorGreen : {
				opts : {
					desc : "Alert Color Green",
					cat : "General",
					apsControl : "color"
				}
			},
			AlerterColorGreenVal : {
				opts : {
					desc : "Alert Color Green Value",
					cat : "General",
					apsControl : "spinner"
				}
			},
			AlerterColorYellowVal : {
				opts : {
					desc : "Alert Color Green Value",
					cat : "General",
					apsControl : "spinner"
				}
			},
			BubbleSizeBoderSize : {
				opts : {
					desc : "Bubble Size Border Size",
					cat : "General",
					apsControl : "spinner"
				}
			},
			BubbleRootXTranslation : {
				opts : {
					desc : "Bubble Root X Translation",
					cat : "General",
					apsControl : "spinner"
				}
			},
			BubbleSizeMaxSize : {
				opts : {
					desc : "Bubble Size Max",
					cat : "General",
					apsControl : "spinner"
				}
			},
			whichTextShown : {
				opts : {
					//apsControl : "segmentedbutton",
					apsControl : "combobox",
					desc : "Text - Property",
					cat : "General",
					options : [{
							key : "value",
							text : "Only Value"
						}, {
							key : "value_text",
							text : "Value and Text"
						}, {
							key : "text_value",
							text : "Text and Value"
						}, {
							key : "text",
							text : "Only Text"
						}
					]
				}
			},
			overrideLocale : {
				opts : {
					//apsControl : "segmentedbutton",
					apsControl : "combobox",
					desc : "Number format Locale",
					cat : "General",
					options : [{
							key : "default",
							text : "use DS Default"
						}, {
							key : "de_DE",
							text : "Deutsch"
						}, {
							key : "en_EN",
							text : "English"
						}
					]
				}
			},
			kfColBub : {
				opts : {
					desc : "Measure for Bubble Color",
					cat : "Data",
					//apsControl : "text",
					//apsControl : "measurelist"
					apsControl : "combobox",
					options : [{
						key : "KZ1",
						text : "KZ1"
					}
				]
				}
			},
			kfBubbleSize : {
				/*opts : {
					desc : "Measure for Bubble Size - Please use technical name out of Data selection dialog (looks like 003N81FHQ23F05W0SD0MUICVE)",
					cat : "Data",
					//apsControl : "text",
					apsControl : "measurelist"
				}*/
				opts : {
					//apsControl : "segmentedbutton",
					apsControl : "combobox",
					desc : "Measure for Bubble Size",
					cat : "Data",
					options : [{
							key : "KZ1",
							text : "KZ1"
						}
					]
				}
			
			},
			dimHierarchy : {
				opts : {
					desc : "Hierarchy Dimension",
					cat : "Data",
					apsControl : "text",
					noAps : true
				}
			}
		});
		this.componentInfo.title = "D3 Hierarchy";
    	this.componentInfo.description = "D3 Hierarchy Component by Manfred Schwarz";
    	this.componentInfo.author = "Manfred Schwarz";
    	this.componentInfo.description = "An D3 Hierarchy component created by Manfred Schwarz.  Original blog can be found here: <a target='_blank' href='http://scn.sap.com/docs/DOC-61427'>D3 Hierarchy component</a>";
    	this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABv9AAAb/QGX0Qc2AAAAB3RJTUUH3gsEDScJt5PoKwAAAthJREFUOMudk0tonGUUhp/zTybJzGSMuYzYXEgsbYIUKyJemFKwUokVGqlGpVhKQCwEBFdKQdwYoYu6qqJkNatYG1urLiroQhOqjVCkUmhLNVijDZrM5Dadn3/+y/e6SFpd+2zO5pwXXg6PSRIAcmAGGDcXV7g6X+by9RsoqtPfXWDHtm4G+nswBBgSmIkGbrN5PPbep5z65ifWVlZxSQhRAPU1cml4dLCXc1Mf0JxKAUIyzEkyoBqEDL3+IRd+nocGwDks8VEUYGEN6lUUrJD1xKXps2zv68EZeLDR4I0Tn3Ph6iKpxjS9hTb67rkbE5gcGIDDvCaCKGLf86NghofhGfDrQoWJU9/RlE54dfgRJscPc+RAkdZ8M3IxCkNGX9hHU9pDcsxdm2P8+AkAPDDeev8MGOzc2s3hpx9moLuD+YUK68vLmHMQhXQVWnn52SdBhmUamShNEicJHsCPl66Dl/D3XwtU1qocL33Jma/PM7q/yCvDu8jnGjl99hx7dj2GXASIWzWfpfIyDYlEVPex2OePmyFL5VV+uHiFsRef4MjIHpyM3kKOj0pTtOYzIJAgTmJ836chZUaaACIfkeLa3A0eHNzC+LEJpmdmIQ6Z+Xaaoace55e538A5ICGdznBXvmWjwv7dO9H6MtRrnPzsKw49txeSgJnzs8x8PwsWceilA3wy9QVmDnB05nMUOjswyemWXyc/sBsvncHFEZ3t7VRWy3hRCC4hcQmF9haWFiukCEmqNT4+WeLgyPDGF1qyzRw7OoYL1vFcRHlxAYUBLolJXAQuprxYwSMhkcfeZ4Y4ODKMJHDOSZKcnF47+o7I9MgK98sKg7KO7aJjm2i7T9bWL7L3auChotbWq5KT5CS0ye2g0uRp7SgOyWvfKrJdIrtF5LrU90BRb779ru7sb067YyMgCTMjqAfU/Dq/z/9JnCT09nTR2pIhm82xKeO/Dv434P/wDw5si0bz8UAbAAAAAElFTkSuQmCC";
    	

		// Design Studio global variables
		var xyzExample = 0;
		// http://www.d3noob.org/2014/01/tree-diagrams-in-d3js_11.html

		var that = this;

		"use strict"; // use HTML strict mode so that no variable can be used without declaring it !! Fault prevention
		// variables for this component
		this.variables = {}; // array for storing component variables

		this.variables.tree = null; // D3 component
		this.variables.diagonal = null; // D3 component
		this.variables.vis = null; // D3 SVG Print canvas
		this.variables.canvasWarnObject = ""; // Text element inside svg canvas
		this.variables.canvasWarnTextString = ""; // Text element inside svg canvas
		this.variables.root = null; // Root Element der Hierarchy -> JSON Objekt
		this.variables.jsondata = null; // JSON Data Object that represents all OLAP-Hierartchy Data
		this.variables.dataMaxValue = 0; // element retrieves the highest value for the selected keyfigure
		this.variables.dataSumValue = 0; // element retrieves the sum for the selected keyfigure
		this.variables.tupelColumnHier = -1; // columnindex of the hierarchyDimension
		this.variables.tupelColumnKeyFig = -1; // columnindex of the KeyfigureDimension
		this.variables.bubbleSizeKeyFigId = -1; //iIndex of the Bubblesize Keyfigure inside the KeyfigureDimension
		this.variables.bubbleSizeKeyFigureInfo = {}; // The information of the bubble size keyfigure Dimension (attributes are formatString, key, scalingFactor, text and unitOfMeasure
		this.variables.bubbleAlertColorKeyFigureInfo = {}; // The information of the bubble alerter color keyfigure Dimension (attributes are formatString, key, scalingFactor, text and unitOfMeasure
		this.variables.tooltipDiv = null; // sets a javascript Variable for tooltipdiv element
		this.variables.m = [5, 5, 5, 5]; // sets the margins of the component
		this.variables.defaultFormatString = "#.##0,00;'-'#.##0,00";

		/*
		 * Wird zum Initialisieren der Komponente einmal aufgerufen
		 */
		this.init = function () {
			// connect the TextScript Property to a Javascript event
			/*
			this.$().click(function() {
			that.fireEvent("onclick");
			});
			 */

			// start with creating a div in the root component element ...
			this.$().append("<div id='d3hier_" + this.owner.sId + "' style='overflow: auto;'>"); // style='width: 100%; height: 100%;'></div>" );

			// append Tooltip div
			//tooltipDiv = this.$().append("<div id='d3hierTooltipDiv_" + this.owner.sId + "' class='tooltip'>");
			that.variables.tooltipDiv = d3.select("#d3hier_" + this.owner.sId).
				append("div")
				.attr("id", "d3hierTooltipDiv_" + this.owner.sId)
				.attr("class", "tooltip")
				.style("opacity", 0); // set the opacity to nil;

			// ... initialize the Tree
			drawHierInit();

			if (that.showWarnings()) {
				that.variables.canvasWarnObject.text(that.variables.canvasWarnTextString);
			} else {
				that.variables.canvasWarnObject.text("");
			}
		};

		/*
		 * Wird bei jedem Update der Komponente aufgerufen
		 * (After Update)
		 */
		this.afterUpdate = function () {
			var w = that.$().outerWidth(true) - that.variables.m[1] - that.variables.m[3], // that.$().outerWidth(true) brings back total width in pixels for div-box
			h = that.$().outerHeight(true) - that.variables.m[0] - that.variables.m[2]; // that.$().outerHeight(true) brings back total heigth in pixels for div-box

			$("#d3HierSVG_" + that.owner.sId).attr("transform", "translate(" + ((that.variables.m[3] * 1) + (that.BubbleRootXTranslation() * 1)) + "," + that.variables.m[0] + ")");

			//jsondata = that.updateChartdata();
			that.variables.root = that.updateChartdata();
			if (that.variables.root) {
				that.variables.root.x0 = h / 2;
				that.variables.root.y0 = 0;
				
				that.update(that.variables.root);
			}

			/*/
			 / fillwarningstext
			that.variables.canvasWarnTextString += "afterupdate: green: " + that.AlerterColorGreenVal()
			 + " yellow: " + that.AlerterColorYellowVal()
			//+ " red: " + that.AlerterColorRedVal()
			 + " useDummyData: " + that.useDummyData()
			//+ " sumval: " + that.variables.dataSumValue
			//+ " sumval2: " + that.dataSumValue
			 + " showText: " + that.showText()
			 + " showWarnings: " + that.showWarnings()
			 + " alerterUsePercentage: " + that.alerterUsePercentage()
			 + " alerterHighValuesAreGood: " + that.alerterHighValuesAreGood()
			 + " whichTextShown: " + that.whichTextShown()
			 + " AlerterColorGreenVal: " + that.AlerterColorGreenVal()
			 + " AlerterColorYellowVal: " + that.AlerterColorYellowVal()
			 + " AlerterColorRedVal: " + that.AlerterColorRedVal()
			 + " alertColorRed: " + that.alertColorRed()
			 + ": " + that.()
			 + ": " + that.()
			 + ": " + that.()
			 + ": " + that.()
			 + ": " + that.()
			 + ": " + that.()
			 + ": " + that.() *  / ;

			

			// Display Warning messages ?!
			/*if (canvasWarnTextString != "") {

			}*/
			if (that.showWarnings()) {
				that.variables.canvasWarnObject.text(that.variables.canvasWarnTextString);
			} else {
				that.variables.canvasWarnObject.text("");
			}
			//canvasWarnObject.text("Updated Testtext " + that.BubbleSizeMaxSize() +
			//		" - " + that.dimHierarchy() + " max: " + dataMaxValue);
		};
		/************************************
		 * Visualization methods .... BEGIN
		 ************************************ */

		/*
		 * This function initializes a tree with svg
		 */
		function drawHierInit() {
			//that.variables.jsondata = that.updateChartdata();

			//var m = [20, 120, 20, 120],
			// [top, left, bottom, right];
			var w = that.$().outerWidth(true) - that.variables.m[1] - that.variables.m[3], // that.$().outerWidth(true) brings back total width in pixels for div-box
			h = that.$().outerHeight(true) - that.variables.m[0] - that.variables.m[2]; // that.$().outerHeight(true) brings back total heigth in pixels for div-box


			that.variables.tree = d3.layout.tree()
				.size([h, w]);

			that.variables.diagonal = d3.svg.diagonal()
				.projection(function (d) {
					return [d.y, d.x];
				});

			var tempBubbleRootXTranslation = 0;
			if (that.BubbleRootXTranslation()) {
				tempBubbleRootXTranslation = that.BubbleRootXTranslation();
			}
			that.variables.vis = d3.select("#d3hier_" + that.owner.sId).append("svg:svg")
				.attr("width", w + that.variables.m[1] + that.variables.m[3]) // - (w*0.04))
				//.attr("width", "100%")
				.attr("height", h + that.variables.m[0] + that.variables.m[2]) // - (h*0.04))
				//.attr("height", "100%")
				.append("svg:g")
				.attr("id", "d3HierSVG_" + that.owner.sId)
				.attr("transform", "translate(" + ((that.variables.m[3] * 1) + (tempBubbleRootXTranslation * 1)) + "," + that.variables.m[0] + ")");

			/*: Show a Text with Warnings/Errors in the canvas */
			that.variables.canvasWarnObject = that.variables.vis.append("svg:g")
				.attr("class", "textnode")
				.attr("transform", "translate(10,10)")
				.append("svg:text")
				.attr("x", 0)
				.attr("y", 0)
				.attr("dy", ".35em")
				.text("Testtext " + that.BubbleSizeMaxSize() + " - "); // + that.dimHierarchy());

			//d3.json(jsondata, function(json) {
			if (that.variables.root) {
				that.variables.root = that.variables.jsondata;
				that.variables.root.x0 = h / 2;
				that.variables.root.y0 = 0;
			
				// Update Hierarchy component
				that.update(that.variables.root);
			}

			//that.update();
		}

		// Toggle children.
		this.toggle = function (d, eventTextSelf) {
			// Prevent clicks on the root element. This will lead to an error - therefore ignore it
			if (!(d.key == "JPRoot")) {
				// set text of selected node
				that.selectedNode(d.key);
				// fire event that this change is also available via BIAL
				that.firePropertiesChanged(["selectedNode"]);

				// fire the onClick Event
				if (eventTextSelf != null && eventTextSelf == "mouseClickSelf") {
					that.fireEvent("onclick");
				}

				if (d.nodeState != "" && d.nodeState == "EXPANDED") {
					d._children = d.children;
					d.children = null;
					if (eventTextSelf != null && eventTextSelf == "mouseClickSelf") {
						// trigger Event on Hierarchy Collapse
						that.fireEvent("onHCollapse");
						//that.fireEvent("onHCollapseInv");

						//$("#circleText1ExpCol_" + d.key).html("[+]");
					}
				} else if (d.nodeState != "" && d.nodeState == "COLLAPSED") {
					d.children = d._children;
					d._children = null;
					if (eventTextSelf != null && eventTextSelf == "mouseClickSelf") {
						// trigger Event on Hierarchy Expand
						that.fireEvent("onHExpand");
						//that.fireEvent("onHExpandInv");

						//$("#circleText1ExpCol_" + d.key).html("[-]");
					}
				}
			}
		};

		this.elemClick = function (d) {
			// set text of selected node
			that.selectedNode(d.key);
			// fire event that this change is also available via BIAL
			that.firePropertiesChanged(["selectedNode"]);

			// fire the onClick Event
			that.fireEvent("onclick");
		};

		/* Start - Tooltip Div elements - Start */
		this.mouseover = function () {
			that.variables.tooltipDiv.transition()
			.duration(200)
			.style("opacity", 1);
		};

		this.mousemove = function (d) {
			/// INFO : Here Tooltip is definded
			that.variables.tooltipDiv.text("Node Info\n" +
				"Name: " + d.name + "\n" +
				"Keyfigure: " + that.variables.bubbleSizeKeyFigureInfo.text + "\n" +
				"Value: " + that.formatValue(d.size, that.variables.bubbleSizeKeyFigureInfo.formatString) + "\n" +
				"max value: " + that.formatValue(that.variables.dataMaxValue, that.variables.bubbleSizeKeyFigureInfo.formatString) + "\n" +
				"total sum value: " + that.formatValue(that.variables.dataSumValue, that.variables.bubbleSizeKeyFigureInfo.formatString) + "\n" +
				"value ratio: " + that.formatValue((d.size / that.variables.dataSumValue), that.variables.defaultFormatString) + "\n" +
				"Level: " + d.depth + "\n" //+
				//"NodeState: " + d.nodeState
				//"globalVar-Rest: " + xyzExample + "\n"
				//" Coord:" + d3.event.pageX + " : " + d3.event.pageY)
			)
			.style("left", (d3.mouse(that.$()[0])[0]) + "px")
			.style("top", (d3.mouse(that.$()[0])[1]) + "px");
		};

		this.mouseout = function () {
			that.variables.tooltipDiv.transition()
			.duration(200)
			.style("opacity", 1e-6);
		};
		/* End - Tooltip Div elements - End */

		/* updates the tree and paints updates to the canvas*/
		this.update = function (source) {
			var i = 0;
			var duration = d3.event && d3.event.altKey ? 5000 : 500;

			// Generate Warnings for wrong settings !!
			if ((that.AlerterColorGreenVal() > that.AlerterColorYellowVal())) { // && (that.AlerterColorYellowVal() > that.AlerterColorRedVal())) {
			} else {
				// canvasWarnTextString is initialized in function updateChartData - therefore just extend it in case of warnings ...
				that.variables.canvasWarnTextString += "Please correct Alertcolors. \n\n\nKeep in mind that the green value has to be higher than the yellow one and the yellow value has to be higher than the red value";
			}
			if (that.BubbleSizeBoderSize() < 1) {
				that.BubbleSizeBoderSize(1);
				that.variables.canvasWarnTextString += "The bubbel border size was set to the minimum of 1";
			}
			if (that.BubbleSizeBoderSize() > 15) {
				that.BubbleSizeBoderSize(15);
				that.variables.canvasWarnTextString += "The bubbel border size was set to the maximum of 15";
			}
			if (!that.BubbleSizeBoderSize()) {
				that.BubbleSizeBoderSize(10);
			}
			if (!that.BubbleSizeMaxSize()) {
				that.BubbleSizeMaxSize(20);
			}

			// Compute the new tree layout.
			var nodes = that.variables.tree.nodes(that.variables.root).reverse();

			// Normalize for fixed-depth.
			nodes.forEach(function (d) {
				d.y = d.depth * 180;
				d.id = d.key; // set the ID dynamically ... otherwise there are errors getting the right element
			});

			// Update the nodes… with the correct data
			var node = that.variables.vis.selectAll("g.node")
				.data(nodes, function (d) {
					//return d.id || (d.id = ++i);
					return d.id; // || (d.id = ++i);
				});

			/******* ENTER *********/
			// Enter any new nodes at the parent's previous position.
			var nodeEnter = node.enter().append("svg:g")
				.attr("class", "node")
				.attr("transform", function (d) {
					return "translate(" + source.y0 + "," + source.x0 + ")";
				})
				.on("click", function (d) {
					that.elemClick(d);
					that.update(d);
				})
				// Register Tooltip events
				.on("mouseover", that.mouseover)
				.on("mousemove", function (d) {
					that.mousemove(d);
				})
				.on("mouseout", that.mouseout);

			nodeEnter.append("svg:circle")
			.attr("r", 1e-6)
			.style("fill", function (d) {
				return d._children ? "lightsteelblue" : "#fff";
			})
			.style("stroke-width", that.BubbleSizeBoderSize()) // set the stroke width
			.style("stroke", "black"); // set the line colour

			nodeEnter.append("svg:text")
			.attr("class", function (d) {
				return "circleText1ExpCol_" + that.owner.sId;
			})
			.attr("x", function (d) {
				return -9;
				/*d.children || d._children ? -10 : 10;*/
			})
			.attr("dy", ".30em")
			.on("click", function (d) {
				that.toggle(d, "mouseClickSelf");
				that.update(d);
			});

			nodeEnter.append("svg:text")
			.attr("class", function (d) {
				return "circleText2ExpCol_" + that.owner.sId;
			})
			.attr("x", function (d) {
				return d.children || d._children ? -10 : 10;
			})
			.attr("dy", ".30em")
			.attr("text-anchor", function (d) {
				return d.children || d._children ? "end" : "start";
			})
			.text(function (d) {
				if (that.showText()) {
					// possible values are value, value_text, text_value, text
					switch (that.whichTextShown()) {
					case "value":
						return that.formatValue(d.size, that.variables.bubbleSizeKeyFigureInfo.formatString);
						break;
					case "value_text":
						return that.formatValue(d.size, that.variables.bubbleSizeKeyFigureInfo.formatString) + " " + d.name;
						break;
					case "text_value":
						return d.name + " " + that.formatValue(d.size, that.variables.bubbleSizeKeyFigureInfo.formatString);
						break;
					case "text":
						return d.name;
						break;
					default:
						return d.name + " " + that.formatValue(d.size, that.variables.bubbleSizeKeyFigureInfo.formatString);
					}

				} else {
					return "";
				}

			});
			//.text(function(d) { return d.name + " - " + d.size + " (" + d.level + " " + d.nodeState + ")"; })


			/******* Update *********/
			// Transition nodes to their new position.
			var nodeUpdate = node.transition()
				.duration(duration)
				.attr("transform", function (d) {
					return "translate(" + d.y + "," + d.x + ")";
				});

			
			// adjust circles after dataupdate to the new size
			nodeUpdate.select("circle")
			// set the size of the circle according to the value (proportional to the max value)
			.attr("r", function (d) {
				var actSize = 0;
				if (d.size > 0) {
					//actSize = (d.size / dataMaxValue) * that.BubbleSizeMaxSize();
					if (that.variables.dataSumValue == 0) {
						actSize = (d.size / that.variables.dataMaxValue) * that.BubbleSizeMaxSize();
					} else {
						actSize = (d.size / that.variables.dataSumValue) * that.BubbleSizeMaxSize();
					}
				} else {
					actSize = 0;
				}
				return actSize;
			})
			.style("stroke-width", that.BubbleSizeBoderSize()) // set the stroke width
			/// TODO: Alerterfarbe und Bordergröße einbauen
			//.style("fill", function(d) {
			.style("stroke", function (d) {
				if (that.kfColBub() == "NONE") {
					return "lightsteelblue";
				} else {
					if (that.alerterUsePercentage()) {
						var ratio = (d.size / that.variables.dataSumValue) * 100;
						// fill color dependant of ratio
						if (ratio >= that.AlerterColorGreenVal()) {
							if (that.alerterHighValuesAreGood()) {
								return that.alertColorGreen();
							} else {
								return that.alertColorRed();
							}
						} else if (ratio < that.AlerterColorGreenVal() && ratio >= that.AlerterColorYellowVal()) {
							return that.alertColorYellow();
						} else if (ratio <= that.AlerterColorYellowVal()) {
							if (that.alerterHighValuesAreGood()) {
								return that.alertColorRed();
							} else {
								return that.alertColorGreen();
							}
						}

					} else {
						// fill color dependant of size
						if (d.size >= that.AlerterColorGreenVal()) {
							if (that.alerterHighValuesAreGood()) {
								return that.alertColorGreen();
							} else {
								return that.alertColorRed();
							}
						} else if (d.size < that.AlerterColorGreenVal() && d.size >= that.AlerterColorYellowVal()) {
							return that.alertColorYellow();
						} else if (d.size <= that.AlerterColorYellowVal()) {
							if (that.alerterHighValuesAreGood()) {
								return that.alertColorRed();
							} else {
								return that.alertColorGreen();
							}
						}
					}
				}

				//return d._children ? "lightsteelblue" : "#fff";
			});

			// update text for the nodes (if hierarchy is getting expanded / collapsed
			//nodeUpdate.select("text")
			nodeUpdate.select(".circleText1ExpCol_" + that.owner.sId)
			.text(function (d) {
				if (d.nodeState) {  //|| d._children) {
					if (d.nodeState == "COLLAPSED") {
						return "[+]";
					} else {
						return "[-]";
					}
				} else {
					return "";
				}
			})
			.style("fill-opacity", 1);
			
			/*
			
			nodeEnter.append("svg:text")
			.attr("class", function (d) {
				return "circleText1ExpCol_" + that.owner.sId;
			})
			.attr("x", function (d) {
				return -9;
			})
			.attr("dy", ".30em")
			.on("click", function (d) {
				that.toggle(d, "mouseClickSelf");
				that.update(d);
			});

			
			 */
			
			

			//nodeUpdate.select("text")
			nodeUpdate.select(".circleText2ExpCol_" + that.owner.sId)
			.attr("x", function (d) {
				return d.children || d._children ? -10 : 10;
			})
			.attr("dy", ".30em")
			.attr("text-anchor", function (d) {
				return d.children || d._children ? "end" : "start";
			})
			.text(function (d) {
				if (that.showText()) {
					// possible values are value, value_text, text_value, text
					switch (that.whichTextShown()) {
					case "value":
						return that.formatValue(d.size, that.variables.bubbleSizeKeyFigureInfo.formatString);
						break;
					case "value_text":
						return that.formatValue(d.size, that.variables.bubbleSizeKeyFigureInfo.formatString) + " " + d.name;
						break;
					case "text_value":
						return d.name + " " + that.formatValue(d.size, that.variables.bubbleSizeKeyFigureInfo.formatString);
						break;
					case "text":
						return d.name;
						break;
					default:
						return d.name + " " + that.formatValue(d.size, that.variables.bubbleSizeKeyFigureInfo.formatString);
					}

				} else {
					return "";
				}
			});

			/******* EXIT *********/
			// Transition exiting nodes to the parent's new position.
			var nodeExit = node.exit().transition()
				.duration(duration)
				.attr("transform", function (d) {
					return "translate(" + source.y + "," + source.x + ")";
				})
				.remove();

			nodeExit.select("circle")
			.attr("r", function (d) {
				return d.size;
			});

			nodeExit.select("text")
			.style("fill-opacity", 1e-6);

			// Update the links… (that are the graphs between the bubbles)
			var link = that.variables.vis.selectAll("path.link")
				.data(that.variables.tree.links(nodes), function (d) {
					return d.target.id;
				});

			// Enter any new links at the parent's previous position.
			link.enter().insert("svg:path", "g")
			.attr("class", "link")
			.attr("d", function (d) {
				var o = {
					x : source.x0,
					y : source.y0
				};
				return that.variables.diagonal({
					source : o,
					target : o
				});
			})
			.transition()
			.duration(duration)
			.attr("d", that.variables.diagonal);

			// Transition links to their new position.
			link.transition()
			.duration(duration)
			.attr("d", that.variables.diagonal);

			// Transition exiting nodes to the parent's new position.
			link.exit().transition()
			.duration(duration)
			.attr("d", function (d) {
				var o = {
					x : source.x,
					y : source.y
				};
				return that.variables.diagonal({
					source : o,
					target : o
				});
			})
			.remove();

			// Stash the old positions for transition.
			nodes.forEach(function (d) {
				d.x0 = d.x;
				d.y0 = d.y;
			});
		};

		/************************************
		 * Visualization methods END
		 ************************************ */

		/************************************
		 * Data-Helper methods .... BEGIN
		 ************************************ */

		// Updatefunction for chart data
		this.updateChartdata = function () {
			// initialize variables
			that.variables.dataMaxValue = 0;
			that.variables.dataSumValue = 0;
			var tempJsonData = null;
			var dataset = {};
			var numTuples = 0,
			uniqueDimKF = 0;
			var lastLevel = -1;
			var DynamicLevelIterator = []; //Key is the level value, Value is the current element of this level ... is used to fill the right childelements
			var DynamicLevelLastObject = []; //Key is the level value, Value is the last used object of this level ... is used to fill the right childelements

			// check if there is dummydata set. otherwise try to load resultset data of Datasource
			// Which data should get used - dummy or real time data ...
			if (that.rsltSet() && !that.useDummyData()) {

				// check if data has lines with data and is not empty
				try {
					numTuples = that.rsltSet().tuples.length;
				} catch (e) {
					//return datasetQuery;
					//entrypoint=false;
				}

				// Ablauf
				// Check if datasoruce has more than two dimensions - if so - return warning message
				that.variables.canvasWarnTextString = "";
				if (numTuples > 0 && that.rsltSet().tuples[0].length > 2) {
					that.variables.canvasWarnTextString += "Your Datasource has more than two dimensions. Please use only a hierarchy and one Keyfigure Dimension!";
				}

				// get to know dimension with measures(with that.dimensionKFIndex)
				that.variables.tupelColumnKeyFig = that.dimensionKFIndex(); // columnindex of the KeyfigureDimension
				// get to know measureIndex (with that.memberIndex)

				that.variables.bubbleSizeKeyFigId = that.memberIndex(that.kfBubbleSize(), that.variables.tupelColumnKeyFig);
				// get to know dimension with hierarchy (with that.dimensionIndexByKey)
				//that.variables.tupelColumnHier = that.dimensionIndexByKey(that.dimHierarchy()); // columnindex of the hierarchyDimension
				that.variables.tupelColumnHier = that.dimensionIndexByHierarchy(); // columnindex of the hierarchyDimension

				if (that.variables.tupelColumnHier) {
					/*
					alert("Hurra! - Es gibt Daten - " + numTuples + 
							" - BubbleRootXTranslation " + (that.BubbleRootXTranslation() * 1) +
							" - BubbleSizeMaxSize " + (that.BubbleSizeMaxSize() * 1)
							);
							*/
				}

				// retrieve the Text for the keyfigure Deimension to use it in various positions
				for (var i = 0; i < that.rsltSet().dimensions[that.variables.tupelColumnKeyFig].members.length; i++) {
					if (that.rsltSet().dimensions[that.variables.tupelColumnKeyFig].members[i].key == that.kfBubbleSize()) {
						// formatString, key, scalingFactor, text and unitOfMeasure
						that.variables.bubbleSizeKeyFigureInfo.formatString = that.rsltSet().dimensions[that.variables.tupelColumnKeyFig].members[i].formatString;
						that.variables.bubbleSizeKeyFigureInfo.key = that.rsltSet().dimensions[that.variables.tupelColumnKeyFig].members[i].key;
						that.variables.bubbleSizeKeyFigureInfo.scalingFactor = that.rsltSet().dimensions[that.variables.tupelColumnKeyFig].members[i].scalingFactor;
						that.variables.bubbleSizeKeyFigureInfo.text = that.rsltSet().dimensions[that.variables.tupelColumnKeyFig].members[i].text;
						that.variables.bubbleSizeKeyFigureInfo.unitOfMeasure = that.rsltSet().dimensions[that.variables.tupelColumnKeyFig].members[i].unitOfMeasure;
					} else if (that.rsltSet().dimensions[that.variables.tupelColumnKeyFig].members[i].key == that.kfColBub()) {
						// formatString, key, scalingFactor, text and unitOfMeasure
						that.variables.bubbleAlertColorKeyFigureInfo.formatString = that.rsltSet().dimensions[that.variables.tupelColumnKeyFig].members[i].formatString;
						that.variables.bubbleAlertColorKeyFigureInfo.key = that.rsltSet().dimensions[that.variables.tupelColumnKeyFig].members[i].key;
						that.variables.bubbleAlertColorKeyFigureInfo.scalingFactor = that.rsltSet().dimensions[that.variables.tupelColumnKeyFig].members[i].scalingFactor;
						that.variables.bubbleAlertColorKeyFigureInfo.text = that.rsltSet().dimensions[that.variables.tupelColumnKeyFig].members[i].text;
						that.variables.bubbleAlertColorKeyFigureInfo.unitOfMeasure = that.rsltSet().dimensions[that.variables.tupelColumnKeyFig].members[i].unitOfMeasure;
					}

					this.variables.bubbleAlertColorKeyFigureInfo = {}; // The information of the keyfigure Dimension (attributes are formatString, key, scalingFactor, text and unitOfMeasure
				}

				// TODO: room for more checks in data
				/*
				canvasWarnTextString += "tupelColumnHier=" + tupelColumnHier +
				" tupelColumnKeyFig=" + tupelColumnKeyFig +
				" bubbleSizeKeyFigId=" + bubbleSizeKeyFigId;
				 */

				// fill the default root
				dataset.key = "JPRoot";
				dataset.type = "root";
				dataset.nodeState = "EXPANDED";
				dataset.level = -1;
				dataset.text = "";
				dataset.name = "root";
				dataset.size = 0;
				dataset.children = [];

				// run through all tuples
				for (var i = 0; i < numTuples; i++) { //Loop numTuples times
					// Declaration/initialization of Variables
					var localKey = "",
					localText = "",
					localType = "",
					localNodestate = "",
					localLevel = "",
					localname = "",
					localSize = -1,
					hierDimInstance = -1,
					kfDimInstance = -1;

					// Create heirarchy structure
					// Possible attributes: "Key", "text", "type" HIERARCHY_NODE, "nodestate" EXPANDED oder COLLAPSED und "level" leer bis xx
					try {
						hierDimInstance = that.rsltSet().tuples[i][that.variables.tupelColumnHier];
						kfDimInstance = that.rsltSet().tuples[i][that.variables.tupelColumnKeyFig];

						// only when the right keyfigure is in tupels fill json object
						if (kfDimInstance === that.variables.bubbleSizeKeyFigId) {
							// fill local attributes with the values needed for the tree
							if (this.rsltSet().dimensions[that.variables.tupelColumnHier].members[hierDimInstance].hasOwnProperty("key")) {
								localKey = this.rsltSet().dimensions[that.variables.tupelColumnHier].members[hierDimInstance].key;
							};
							if (this.rsltSet().dimensions[that.variables.tupelColumnHier].members[hierDimInstance].hasOwnProperty("type")) {
								localType = this.rsltSet().dimensions[that.variables.tupelColumnHier].members[hierDimInstance].type;
							};
							if (this.rsltSet().dimensions[that.variables.tupelColumnHier].members[hierDimInstance].hasOwnProperty("nodeState")) {
								localNodestate = this.rsltSet().dimensions[that.variables.tupelColumnHier].members[hierDimInstance].nodeState;
							};
							if (this.rsltSet().dimensions[that.variables.tupelColumnHier].members[hierDimInstance].hasOwnProperty("level")) {
								localLevel = this.rsltSet().dimensions[that.variables.tupelColumnHier].members[hierDimInstance].level;
							};
							if (this.rsltSet().dimensions[that.variables.tupelColumnHier].members[hierDimInstance].hasOwnProperty("text")) {
								localText = this.rsltSet().dimensions[that.variables.tupelColumnHier].members[hierDimInstance].text;
								localname = this.rsltSet().dimensions[that.variables.tupelColumnHier].members[hierDimInstance].text;
							};

							// do a check - the first element has an empty level
							if (localLevel == "" || isNaN(localLevel)) {
								localLevel = 0;
							}

							// fill keyfigure value
							dataValue = this.rsltSet().data[i];

							// retrieve the maximum value for the Bubblesize keyfigure
							if (dataValue > that.variables.dataMaxValue) {
								that.variables.dataMaxValue = dataValue;
							}
							// calculate the sum of all values that are on level 0!!
							if (localLevel == 0) {
								that.variables.dataSumValue += dataValue;
							}

							// fill childset
							var childset = {};
							childset.key = localKey;
							childset.type = localType;
							childset.nodeState = localNodestate;
							childset.level = localLevel;
							childset.text = localText;
							childset.name = localText;
							childset.size = dataValue;
							if (localType == "HIERARCHY_NODE") {
								childset.children = [];
							}

							// if the default root should not get painted ... use the first entry as root
							if (!that.showRootBubble() && uniqueDimKF == 0) {
								dataset = childset
							}

							// fill the childset to the correct position in the dataset JSON object
							if (isNaN(DynamicLevelIterator[localLevel])) {
								DynamicLevelIterator[localLevel] = 0;
							}
							DynamicLevelIterator[localLevel] += 1;
							DynamicLevelLastObject[localLevel] = childset;

							if (localLevel == 0) {
								// if the default root should not get painted - skip the step to attach first element to default root.
								if (!that.showRootBubble() && uniqueDimKF == 0) {}
								else {
									dataset.children.push(childset);
								}
							} else {
								//if ( localLevel > lastLevel ) {
								DynamicLevelLastObject[localLevel - 1].children.push(childset);
							}

							// increase uniqueDimKF
							lastLevel = localLevel;
							uniqueDimKF += 1;

						}
					} catch (e) {}
				}

				//canvasWarnTextString += " dataMaxValue=" + dataMaxValue;
				tempJsonData = dataset;
			} else {
				if (!that.rsltSet() && !that.useDummyData()) {
					tempJsonData = null;
					return null;
				} else if (that.useDummyData()) {
					//small set of Dummydata with values
					tempJsonData = {
						"name" : "World",
						"size" : 2311,
						"key" : "HIERARCHY_NODE/0HIER_NODE/WELT",
						"text" : "WORLD",
						"type" : "HIERARCHY_NODE",
						"nodeState" : "COLLAPSED",
						"level" : 1,
						"children" : [{
								"name" : "North America",
								"size" : 814,
								"key" : "HIERARCHY_NODE/0HIER_NODE/NORDAMERIKA",
								"text" : "NORDAMERIKA",
								"type" : "HIERARCHY_NODE",
								"nodeState" : "COLLAPSED",
								"level" : 2,
								"children" : [{
										"name" : "JFK",
										"size" : 394,
										"key" : "JFK",
										"text" : "JFK",
										"level" : 3
									}, {
										"name" : "SFO",
										"size" : 420,
										"key" : "SFO",
										"text" : "SFO",
										"level" : 3
									}
								]
							}, {
								"name" : "Asia",
								"size" : 498,
								"key" : "HIERARCHY_NODE/0HIER_NODE/ASIEN",
								"text" : "ASIA",
								"type" : "HIERARCHY_NODE",
								"nodeState" : "COLLAPSED",
								"level" : 2,
								"children" : [{
										"name" : "NRT",
										"size" : 112,
										"key" : "NRT",
										"text" : "NRT",
										"level" : 3
									}, {
										"name" : "SIN",
										"size" : 278,
										"key" : "SIN",
										"text" : "SIN",
										"level" : 3
									}, {
										"name" : "TYO",
										"size" : 108,
										"key" : "TYO",
										"text" : "TYO",
										"level" : 3
									}
								]
							}, {
								"name" : "Europe",
								"size" : 1000,
								"key" : "HIERARCHY_NODE/0HIER_NODE/EUROPA",
								"text" : "EUROPE",
								"type" : "HIERARCHY_NODE",
								"nodeState" : "COLLAPSED",
								"level" : 2,
								"children" : [{
										"name" : "FCO",
										"size" : 268,
										"key" : "FCO",
										"text" : "FCO",
										"level" : 3
									}, {
										"name" : "TXL",
										"size" : 46,
										"key" : "TXL",
										"text" : "TXL",
										"level" : 3
									}, {
										"name" : "FRA",
										"size" : 686,
										"key" : "FRA",
										"text" : "FRA",
										"level" : 3
									}
								]
							}
						]
					};
				}
				that.variables.dataMaxValue = 2311;
				that.variables.canvasWarnTextString += "This is demodata. <br />To see your own data attach a datasource to this component and select a hierarchy dimension and a keyfigure for the bubble size.<br />";
			}

			if (tempJsonData.key == "JPRoot") {
				tempJsonData.size = that.variables.dataSumValue;
			}
			// fill DS global variable with the maximum value of all charts
			if (that.variables.dataMaxValue > xyzExample) {
				xyzExample = that.variables.dataMaxValue;
			}

			return tempJsonData;
		};

		// Returns Dimension key out of metadata - needs position of metadata array
		this.indexDimension = function (idx) {
			if (idx == -1)
				return "NONE";
			if (!this.rsltSet())
				return null;
			if (this.rsltSet().dimensions.length >= idx)
				return this.rsltSet().dimensions[idx].key;
			return null;
		};
		// Returns position of metadata array - needs the dimensions key used in metadata and provided by additional property sheet dropdownboxes
		this.dimensionIndexByKey = function (key) {
			if (key == "NONE")
				return -1;
			if (!this.rsltSet())
				return null;
			for (var i = 0; i < this.rsltSet().dimensions.length; i++) {
				if (this.rsltSet().dimensions[i].key == key)
					return i;
			}
			return null;
		};
		// Returns position of metadata array - returns the Dimension with Hierarchy
		this.dimensionIndexByHierarchy = function () {
			if (!this.rsltSet())
				return null;
			for (var i = 0; i < this.rsltSet().dimensions.length; i++) {
				if (this.rsltSet().dimensions[i].hierarchy) {
					that.dimHierarchy(this.rsltSet().dimensions[i].key);
					// fire event that this change is also available via BIAL
					that.firePropertiesChanged(["dimHierarchy"]);
					
					return i;
				}
			}
			return null;
		};
		// Returns position of Keyfigure dimension
		this.dimensionKFIndex = function () {
			if (this.rsltSet()) { // otherwise there is an exception with no data connection ..
				if (this.rsltSet().dimensions) { // check if there is a dimensions property ...
					
					var tempOptions = [];
					
					for (var i = 0; i < this.rsltSet().dimensions.length; i++) {
						if (this.rsltSet().dimensions[i].hasOwnProperty("containsMeasures"))
							
							/*
					[{
							key : "value",
							text : "Value"
						}, {
							key : "value_text",
							text : "Value and Text"
						}, {
							key : "text_value",
							text : "Text and Value"
						}, {
							key : "text",
							text : "Text"
						}
					]
							 */
						// Fill the List of value with possible keyfigures
						for (var int = 0; int < this.rsltSet().dimensions[i].members.length; int++) {
							var tempObj = {};
							tempObj.key = this.rsltSet().dimensions[i].members[int].key ;
							tempObj.text = this.rsltSet().dimensions[i].members[int].text;
							tempOptions[int] = tempObj;
						}
						that.props.kfBubbleSize.opts.options = tempOptions;
						that.props.kfColBub.opts.options = tempOptions;
							
						return i;
					}
					return null;
				} else { // there is no this.rsltSet().dimensions
					return null;
				}
			} else { // there is no this.rsltSet()
				return null;
			}

		};
		// Returns position of members inside a dimension - needs the dimension position and the key of the member
		this.memberIndex = function (key, dimId) {
			if (!this.rsltSet())
				return null;
			var dim = this.rsltSet().dimensions[dimId];
			for (var i = 0; i < dim.members.length; i++) {
				if (dim.members[i].key == key)
					return i;
			}
			return null;
		};

		// Format a measure based on CVOM library methods
		this.formatValue = function (value, strFormat) {
			//return value; // TEMP fix - Mike
			if (value === null)
				return "";
			if (this.rsltSet()) {
				if (strFormat) {
					if (that.overrideLocale() && that.overrideLocale() === "default") {
					//sap.common.globalization.NumericFormatManager.setPVL(this.rsltSet().locale);
					//return sap.common.globalization.NumericFormatManager.format(value, strFormat);
						return jQuery.formatNumber(value, {format:strFormat, locale:this.rsltSet().locale});
					} else if (that.overrideLocale() && that.overrideLocale() !== "default") {
						if (that.overrideLocale() === "de_DE") {
							strFormat = strFormat.replace(",", "=");
							strFormat = strFormat.replace(".", ",");
							strFormat = strFormat.replace("=", ".");
						}
						return jQuery.formatNumber(value, {format:strFormat, locale:that.overrideLocale()});
					}
				}
			}
			if (strFormat) {
				return jQuery.formatNumber(value, {format:strFormat});
			}
			return value;
		};
		// Comp

		/************************************
		 * Data-Helper methods END
		 ************************************ */

		/*************************
		 * GETTER and SETTER BEGIN
		 ************************** */

		/*
		 * Serialize data of resultset property in contribution.xml. Function is used in the 'Additional Properties' sheet to obtain data.
		 */
		this.getMetadataAsString = function () {
			//return JSON.stringify(this.metadata());
			if (this.rsltSet()) { // otherwise there is an exception with no data connection ..
				if (this.rsltSet().dimensions) { // check if there is a dimensions property ...
					return JSON.stringify(this.rsltSet()); // return result
				}
			}
		};

		/*************************
		 * GETTER and SETTER END
		 ************************** */
	}
	Hierarchy.prototype.constructor = Hierarchy;
	Hierarchy.prototype.toString = function () {
		return ownComponentName;
	}
	Component.subclass(ownComponentName, Hierarchy); // End of SDK
});
