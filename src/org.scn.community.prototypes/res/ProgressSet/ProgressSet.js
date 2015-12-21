/**
 * CC BY-NC-SA License
 * ProgressBarSet by Mike Howles is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 * Based on a work at http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/ProgressBarSet
 *
 */

define(["d3",
		"./../../../org.scn.community.shared/os/viz-modules/SDKCore",
		"sap/designstudio/sdk/component"], function (d3, SDKCore, Component) {
	var ownComponentName = "org.scn.community.prototypes.ProgressSet";
	/**
	 * Progress Set
	 */
	ProgressSet.prototype = SDKCore;
	function ProgressSet() {
		var that = this;
		// Call super
		SDKCore.call(this, {
			barConfig : { 
				opts : {
					desc : "Item Configuration",
					cat : "Items",
					keyField : "key",
					apsControl : "complexcollection",
					apsConfig : {
							title : {
								desc : "Title",
								defaultValue : "Some Title",
								apsControl : "text",
								key : true
							},
							number : {
								desc : "Number",
								defaultValue : 0,
								apsControl : "text",
							},
							numberUnit : {
								desc : "Number UOM",
								defaultValue : "",
								apsControl : "text",
							},fillColor : {
								desc : "Color",
								defaultValue : "auto",
								apsControl : "color"				
							}/*,
						type : {
							desc : "Button Type",
							defaultValue : "Default",
							apsControl : "combobox",
							options : [
							   {key : "Default", text : "Default"},
							   {key : "Accept", text : "Accept"},
							   {key : "Back", text : "Back"},
							   {key : "Emphasized", text : "Emphasized"},
							   {key : "Reject", text : "Reject"},
							   {key : "Transparent", text : "Transparent"},
							   {key : "Unstyled", text : "Unstyled"},
							   {key : "Up", text : "Up"}
							]
						}
						*/
					}
				}
			},
			selectedBar : {
				opts : {
					noAps : true
				}
			},
			palette : {
				value : "",
				opts : {
					desc : "Color Palette",
					order : 999,
					cat : "Colors",
					apsControl : "palette"
				}
			},
			inlineLabels : {
				opts : {
					desc : "Inline Labels",
					cat : "Cosmetics",
					tooltip : "Labels Inline or outside",
					apsControl : "checkbox"
				}
			},
			gradientStart : {
				opts : {
					desc : "Gradient Start",
					cat : "Cosmetics",
					tooltip : "Gradient Start",
					apsControl : "spinner"
				}
			},
			gradientStartColor : {
				opts : {
					desc : "Gradient Start Color",
					cat : "Cosmetics",
					tooltip : "Gradient Start Color",
					apsControl : "color"
				}
			},
			gradientStartOpacity : {
				opts : {
					desc : "Gradient Start Opacity",
					cat : "Cosmetics",
					tooltip : "Gradient Start Opacity",
					apsControl : "spinner"
				}
			},
			gradientStop : {
				opts : {
					desc : "Gradient Stop",
					cat : "Cosmetics",
					tooltip : "Gradient Stop",
					apsControl : "spinner"
				}
			},
			gradientStopColor : {
				opts : {
					desc : "Gradient Stop Color",
					cat : "Cosmetics",
					tooltip : "Gradient Stop Color",
					apsControl : "color"
				}
			},
			gradientStopOpacity : {
				opts : {
					desc : "Gradient Stop Opacity",
					cat : "Cosmetics",
					tooltip : "Gradient Stop Opacity",
					apsControl : "spinner"
				}
			},
			gradientFullWidth : {
				opts : {
					desc : "Gradient Full Width",
					cat : "Cosmetics",
					tooltip : "Full Width Gradient",
					apsControl : "checkbox"
				}
			},
			orientation : {
				opts : {
					apsControl : "segmentedbutton",
					desc : "Orientation",
					cat : "Cosmetics",
					options : [{
							key : 'horizontal',
							text : 'Horizontal'
						}, {
							key : 'vertical',
							text : 'Vertical'
						}
					]
				}
			},
			barFillOpacity : {
				opts : {
					desc : "Bar Fill Opacity",
					cat : "Cosmetics",
					tooltip : "Bar Fill Opacity",
					apsControl : "spinner"
				}
			},
			barRoundness : {
				opts : {
					desc : "Bar Roundness",
					cat : "Cosmetics",
					tooltip : "Bar Roundness",
					apsControl : "spinner"
				}
			},
			barHeight : {
				opts : {
					desc : "Bar Height",
					cat : "Cosmetics",
					tooltip : "Bar Height (-1 = Auto)",
					apsControl : "spinner"
				}
			},
			labelWidth : {
				opts : {
					desc : "Label Width",
					cat : "Cosmetics",
					tooltip : "Label Width",
					apsControl : "spinner"
				}
			}
		});
		this.componentInfo.title = "Progress Bar Set (Prototype)";
		this.componentInfo.description = "Progress Bar Set is a simple example of how to create a set of progress bars with manual data.  This is an prototype of the now databound Progress Bar Set found in the Visualizations category.";
		this.componentInfo.author = "Mike Howles";
		this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGvSURBVDjLpZO7alZREEbXiSdqJJDKYJNCkPBXYq12prHwBezSCpaidnY+graCYO0DpLRTQcR3EFLl8p+9525xgkRIJJApB2bN+gZmqCouU+NZzVef9isyUYeIRD0RTz482xouBBBNHi5u4JlkgUfx+evhxQ2aJRrJ/oFjUWysXeG45cUBy+aoJ90Sj0LGFY6anw2o1y/mK2ZS5pQ50+2XiBbdCvPk+mpw2OM/Bo92IJMhgiGCox+JeNEksIC11eLwvAhlzuAO37+BG9y9x3FTuiWTzhH61QFvdg5AdAZIB3Mw50AKsaRJYlGsX0tymTzf2y1TR9WwbogYY3ZhxR26gBmocrxMuhZNE435FtmSx1tP8QgiHEvj45d3jNlONouAKrjjzWaDv4CkmmNu/Pz9CzVh++Yd2rIz5tTnwdZmAzNymXT9F5AtMFeaTogJYkJfdsaaGpyO4E62pJ0yUCtKQFxo0hAT1JU2CWNOJ5vvP4AIcKeao17c2ljFE8SKEkVdWWxu42GYK9KE4c3O20pzSpyyoCx4v/6ECkCTCqccKorNxR5uSXgQnmQkw2Xf+Q+0iqQ9Ap64TwAAAABJRU5ErkJggg==";
		this.componentInfo.topics.splice(1, 0, {
			title : "Progress Bar Set License",
			content : '<a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAPCAIAAAD8q9/YAAABqklEQVRIx+WWMU8CMRTH3wewxRvZoGp0IpJOhDhwdMP1JhLHY3DSwU4kxAHYMIGlX+Gc1MXA4AQhpPEb8BX6FWq05Dyhd3Ju573ccGnea+/3/u+9K0AOTefGvoEfn4Lo07nuAMBwOLSGMcYwxhMxNs6r91XhsJAJXe3AEzHGGMfRhsynZ6fGf/o27fV6GQauX9TL5XJybUgpAaB91TYhS7lsXbayCowwMvJKKQkhAMAYU0oxxgCAECKlNCJXaTWs6tHDyDoXtg/7+W5djEZZnRNOSfC3A3fvuwAwm8201oQQz/O01vzLHMdRSgkhgiAwiwijsKrni7l1962XuA/azY41WXE5SucfBb69uwEAKaVSKjq3PM+jlEarmnOOMTZRL6/Pi9UiIfdWGeMg41Kzu+euvAkip1CYMeb7vlGYcy6E2CiMUiickHtrGf+q2FbsHxX+7GG06eEgCBzHAQDf98MeppSu12utdbPZrJxX9uzh/YH37+G4MZEauFavlUqlHE3piRgjdDAYDBKAXdc9Pjn6J//hcHT1+30rbcNtFIvFbN+08nWXzpV9AD9ivwErgn5oAAAAAElFTkSuQmCC" /></a>' +
			'<br /><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Progress Bar Set</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Mike Howles</span> is licensed under a <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" target="_blank" href="http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/ProgressBarSet" rel="dct:source">sdkpackage repository on Github</a>.'
		});
		this.afterUpdate = function () {
			this.drawBars();
		}
		this.orient = function (term) {
			var newTerm = term;
			if (this.orientation() == "vertical") {
				if (term == "width")
					newTerm = "height";
				if (term == "height")
					newTerm = "width";
				if (term == "x")
					newTerm = "y";
				if (term == "y")
					newTerm = "x";
			}
			return newTerm;
		};
		var parentInit = this.init;
		this.init = function () {
			parentInit.call(this);
			this.$().addClass("ProgressBarSet");
			this.$().css("overflow-y", "auto");
			this.$().css("overflow-x", "hidden");
			this.drawBars();
		};
		
		this.drawBars = function () {
			// Generate Data
			var that = this;
			var data = [];
			this._barConfig = [];
			var bc = this.barConfig();
			if(bc && bc != "") this._barConfig = JSON.parse(bc);
			for (var i = 0; i < this._barConfig.length; i++) {
				var bar = this._barConfig[i];
				var newItem = {
					title : "Title " + i,
					fillColor : "auto",
					value : 0,
					unit : ""
				};
				if (bar.title)
					newItem.title = bar.title;
				if (bar.number)
					newItem.value = parseFloat(bar.number);
				if (bar.numberUnit)
					newItem.unit = bar.numberUnit;
				if (bar.fillColor && newItem.value != "")
					newItem.fillColor = bar.fillColor;
				data.push(newItem);
			}

			// Positioning and Sizing
			var margin = {
				top : 5,
				bottom : 5,
				left : 5,
				right : 5,
				innerBarPadding : .1,
				outerBarPadding : 1,
				labelWidth : this.labelWidth(),
				valuePadding : 5
			};
			var height = this.$().height() - margin.top - margin.bottom - 2;
			var width = this.$().width() - margin.left - margin.right - 2;
			var colorScale = d3.scale.ordinal()
			.range(this.palette().split(","))
			.domain(data.map(function (d) {
					return d.title
				}));
			// Y Scale
			var y;
			if (this.barHeight() > -1) {
				y = d3.scale.ordinal()
					.rangeRoundBands([0, data.length * this.barHeight()], margin.innerBarPadding, margin.outerBarPadding)
					.domain(data.map(function (d) {
							return d.title
						}));
			} else {
				var upperBand = height;
				if (this.orientation() == "vertical")
					upperBand = width;
				y = d3.scale.ordinal()
					.rangeRoundBands([0, upperBand], margin.innerBarPadding, margin.outerBarPadding)
					.domain(data.map(function (d) {
							return d.title
						}));
			}
			var xRangeLow;
			var xRangeHigh;
			if (this.orientation() == "horizontal") {
				xRangeLow = 0;
				xRangeHigh = width - margin.labelWidth;
				if (this.inlineLabels())
					xRangeHigh = width; // Change range if inline labels
			}
			if (this.orientation() == "vertical") {
				xRangeLow = 0;
				xRangeHigh = height - margin.labelWidth;
				if (this.inlineLabels())
					xRangeHigh = height; // Change range if inline labels
			}

			// X Scale
			var x = d3.scale.linear()
				.range([0, xRangeHigh])
				.domain([0, d3.max(data, function (d) {
							return d.value;
						})]);
			// SVG
			var vis = d3.select("#" + this.$().attr("id") + "_viz");
			if (vis.empty()) {
				vis = d3.select(this.$().get(0))
					.append("svg")
					.attr("id", this.$().attr("id") + "_viz");

				vis.append("linearGradient")
				.attr("y1", 0)
				.attr("x1", "0")
				.attr("x2", "0")
				.attr("id", this.$().attr("id") + "_barGradient")
				.attr("gradientUnits", "userSpaceOnUse");
			} else {
				//alert("vis exists");
			}
			vis.transition().duration(250)
			.attr("width", this.$().innerWidth())
			.attr("height", this.$().innerHeight() - 2);

			var gradient = vis.select("#" + this.$().attr("id") + "_barGradient")
				.attr("y2", y.rangeBand());

			var stops = [{
					offset : this.gradientStart(),
					opacity : this.gradientStartOpacity(),
					color : this.gradientStartColor()
				}, {
					offset : this.gradientStop(),
					opacity : this.gradientStopOpacity(),
					color : this.gradientStopColor()
				}
			];

			gradient.selectAll("stop").data(stops).enter().append("stop");

			gradient.selectAll("stop")
			.attr("offset", function (d) {
				return d.offset;
			})
			.attr("stop-opacity", function (d) {
				return d.opacity;
			})
			.attr("stop-color", function (d) {
				return (d.color) ? d.color : "transparent";
			});

			// Bar Group
			var barGroup = vis.select("g");
			if (barGroup.empty())
				barGroup = vis.append("g");
			barGroup.attr("transform", function (d) {
				/*
				var rot="rotate(0) ";
				if(that.orientation() == "vertical"){
				rot = "rotate(-180," + (that.$().innerWidth() / 2) + "," + (that.$().innerHeight() / 2 )+ ") "//," + margin.width + "," + margin.height + ") ";
				}
				 */
				return "translate(" + margin.left + "," + margin.top + ")"
			});

			var bars = barGroup.selectAll(".progressBar")
				.data(data, function (d) {
					return d.title;
				});

			// ENTER
			var newBars = bars.enter()
				.append("g")
				.attr("class", "progressBar");
			/*
			.attr("transform", function(d,i){
			if(that.orientation()=="vertical"){
			return "translate(" + 0 + "," + y(d.title) + ")";
			}
			if(that.orientation()=="horizontal"){
			return "translate(" + y(d.title) + "," + 0 + ")";
			}
			});*/
			// Append new bars
			newBars.append("rect")
			.attr("class", "utilPackProgressSetBar")
			.attr(this.orient("x"), function (d) {
				if (that.inlineLabels()) {
					return 0;
				} else {
					return margin.labelWidth;
				}
			})
			.attr(this.orient("y"), function (d) {
				return 0;
			});
			// Gradient overlay
			newBars.append("rect")
			.attr("class", "utilPackProgressSetGradientOverlay")
			.attr(this.orient("y"), function (d) {
				return 0;
			})
			.attr("fill", function (d, i) {
				return ("url(#" + that.$().attr("id") + "_barGradient" + ")");
			});
			newBars.append("text")
			.attr("class", "progressLabel")
			.attr(this.orient("y"), function (d) {
				return y.rangeBand() / 2;
			})
			.text(function (d) {
				return d.title
			})
			.attr("text-anchor", "left")
			.attr("dominant-baseline", "middle");
			newBars.append("text")
			.attr("class", "progressValue")
			.attr(this.orient("y"), function (d) {
				return y.rangeBand() / 2;
			})
			.text(function (d) {
				return d.title
			})
			.attr("text-anchor", "left")
			.attr("dominant-baseline", "middle");
			// ENTER AND UPDATE
			barGroup.selectAll(".progressBar").transition()
			.duration(400)
			.attr("transform", function (d, i) {
				if (that.orientation() == "horizontal") {
					return "translate(0," + y(d.title) + ")";
				}
				if (that.orientation() == "vertical") {
					//alert(i+"\n\n"+y(d.title));
					var transform = "translate(" + (that.$().width() - y(d.title) - y.rangeBand()) + ",5)";
					transform = "rotate(180," + (that.$().width() / 2) + "," + that.$().height() / 2 + ") " + transform;
					return transform;
				}
			});

			// Cosmetic updates to rect and text
			barGroup.selectAll(".progressBar .utilPackProgressSetBar")
			.data(data, function (d) {
				return d.title;
			})
			.transition().duration(400)
			.attr(this.orient("x"), function (d) {
				if (that.inlineLabels()) {
					return 0;
				} else {
					return margin.labelWidth;
				}
			})
			.attr(this.orient("y"), function (d) {
				return 0;
			})
			.attr(this.orient("height"), function (d, i) {
				return y.rangeBand();
			})
			.attr("rx", this.barRoundness())
			.attr("ry", this.barRoundness())
			.style("fill-opacity", this.barFillOpacity())
			.attr("fill", function (d, i) {
				if (d.fillColor == "auto") {
					return colorScale(d.title);
				} else {
					return d.fillColor
				}
			})
			.transition().delay(400).duration(750).ease("bounce")
			.attr(this.orient("width"), function (d, i) {
				return x(d.value);
			});

			barGroup.selectAll(".progressBar .utilPackProgressSetGradientOverlay")
			.data(data, function (d) {
				return d.title;
			})
			.transition().duration(400)
			.attr(this.orient("x"), function (d) {
				if (that.inlineLabels()) {
					return 0;
				} else {
					return margin.labelWidth;
				}
			})
			.attr(this.orient("y"), function (d) {
				return 0;
			})
			.attr(this.orient("height"), function (d, i) {
				return y.rangeBand();
			})
			.attr("rx", this.barRoundness())
			.attr("ry", this.barRoundness())
			.transition().delay(400).duration(750).ease("bounce")
			.attr(this.orient("width"), function (d, i) {
				if (!that.gradientFullWidth()) {
					return x(d.value);
				} else {
					return x(d3.max(data, function (d) {
							return d.value;
						}));
				}
			})

			barGroup.selectAll(".progressBar .progressLabel")
			.data(data, function (d) {
				return d.title;
			})
			.transition().duration(400)
			.text(function (d) {
				return d.title
			})
			.attr(this.orient("x"), function (d) {
				return 0;
			})
			.attr(this.orient("y"), function (d) {
				return y.rangeBand() / 2;
			})
			.attr("transform", function (d) {
				if (that.orientation() == "horizontal") {
					return "rotate(0,0,0)";
				}
				if (that.orientation() == "vertical") {
					return "rotate(90, " + (y.rangeBand() / 2) + ",0)";
				}
			})
			.style("fill-opacity", function (d) {
				if (that.inlineLabels()) {
					return 0;
				} else {
					return 1;
				}
			});

			barGroup.selectAll(".progressBar .progressValue")
			.data(data, function (d) {
				return d.title;
			})
			.transition().duration(400)
			.text(function (d) {
				var s = "";
				if (that.inlineLabels())
					s = d.title + " : ";
				s += d.value + " " + d.unit
				return s;
			})
			.attr(this.orient("x"), function (d) {
				if (that.inlineLabels()) {
					return margin.valuePadding;
				} else {
					return margin.labelWidth + margin.valuePadding;
				}
			})
			.attr(this.orient("y"), function (d) {
				return y.rangeBand() / 2;
			})
			.attr("transform", function (d) {
				var vertOffset = margin.valuePadding;
				if (!that.inlineLabels())
					vertOffset += margin.labelWidth;
				if (that.orientation() == "horizontal") {
					return "rotate(0,0,0)";
				}
				if (that.orientation() == "vertical") {
					return "rotate(90, " + (y.rangeBand() / 2) + "," + vertOffset + ")";
				}
			});

			bars.exit().transition().duration(400)
			.style("fill-opacity", 1e-6)
			.remove();

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
				this.drawBars();
			} else {
				// Sizes are the same.  Don't redraw, but poll again after an interval.
				that._poller = window.setTimeout(function () {
						that.measureSize(that)
					}, that._pollInterval);
			}
		};
	
	}
	ProgressSet.prototype.constructor = ProgressSet;
	ProgressSet.prototype.toString = function () {
		return ownComponentName;
	}
	Component.subclass("org.scn.community.prototypes.ProgressSet", ProgressSet);
	
	
	
	/*
	
	Component.subclass("org.scn.community.prototypes.ProgressSet", function () {
		this._barConfig = [];
		
		this.barConfig = function (s) {
			if (s === undefined) {
				return JSON.stringify(this._barConfig);
			} else {
				this._barConfig = [];
				if (s && s != "")
					this._barConfig = jQuery.parseJSON(s);
				return this;
			}
		};
		
		this.barSelect = function (title, oControlEvent) {
			this._selectedTile = title;
			this.fireDesignStudioPropertiesChanged(["selectedTile"]);
			this.fireDesignStudioEvent("onTileSelect");
		};
		
		
		
	})
	*/
});
