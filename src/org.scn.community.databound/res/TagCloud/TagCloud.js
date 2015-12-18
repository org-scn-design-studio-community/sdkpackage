
/**
 * Copyright 2014 Scn Community Contributors
 *
 * Original Source Code Location:
 *  https://github.com/org-scn-design-studio-community/sdkpackage/
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
 */
define(["css!./TagCloud.css",
        "d3",
        "./../../../org.scn.community.shared/os/viz-modules/SDKCore",
        "sap/designstudio/sdk/component",
        "./../../../org.scn.community.shared/os/d3/plugins/word-cloud/layout.cloud"], function (css, d3, SDKCore, Component) {
	var ownComponentName = "org.scn.community.databound.tagCloud";
	tagCloud.prototype = SDKCore;

	/* Autogenerate setter/getter and their default values for the following properties. */
	var properties = {
		savedData : {
			opts : {
				desc : "Data",
				cat : "General",
				apsControl : "dataselection"
			}
		},
		tagFont : {
			opts : {
				apsControl : "combobox",
				desc : "Font",
				cat : "General",
				options : [{
						key : "Impact",
						text : "Impact"
					}, {
						key : "latobold",
						text : "Lato Bold"
					}, {
						key : "Lucida Console",
						text : "Lucida Console"
					}
				]
			}
		},
		tagRotation : {
			opts : {
				apsControl : "segmentedbutton",
				desc : "Tag Rotation",
				cat : "General",
				options : [{
						key : "None",
						text : "None"
					}, {
						key : "90 degrees",
						text : "90 Degrees"
					}, {
						key : "Random",
						text : "Random"
					}
				]
			}
		},
		tagDuration : {
			opts : {
				desc : "Tag Duration (ms)",
				cat : "General",
				apsControl : "spinner"
			}
		},
		selectedNode : {
			opts : {
				cat : "General",
				noAps : true
			}
		},
		dimTag : {
			opts : {
				desc : "Dimension Tag",
				cat : "General",
				apsControl : "text"
			}
		},
		measureSize : {
			opts : {
				desc : "Measure Size",
				cat : "General",
				apsControl : "dataselection"
			}
		},
		measureScaleMinimum : {
			opts : {
				desc : "Measure Scale Minimum",
				cat : "General",
				apsControl : "spinner"
			}
		},
		measureScaleMaximum : {
			opts : {
				desc : "Measure Scale Maximum",
				cat : "General",
				apsControl : "spinner"
			}
		},
		measureColor : {
			opts : {
				desc : "Measure Color",
				cat : "General",
				apsControl : "dataselection"
			}
		},
		measureColorScale : {
			opts : {
				desc : "Measure Color Scale",
				cat : "General",
				apsControl : "palette"
			}
		}
	};

	function tagCloud() {
		var that = this;
		SDKCore.call(this, properties);
		this.componentInfo.title = "D3 Tag Cloud";
    	this.componentInfo.description = "D3 Tag Cloud Component by Jim Rapp";
    	this.componentInfo.author = "Jim Rapp";
    	this.componentInfo.description = "An D3 Tag Cloud component created by Jim Rapp.  Original blog can be found here: <a target='_blank' href='http://scn.sap.com/community/businessobjects-design-studio/blog/2015/05/13/design-studio-extension-d3-word-cloud'>Design Studio Extension: D3 Word Cloud</a>";
    	this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAADAFBMVEVGYXxHYn1JY3xJZH9KY31LZYBMaINOaYVRb4xRb41Wd5lYeJhZboFdgqdeoiZfoyhgoS1goiphhKhhpCpipCpipStjjLVjpStjpS1kpSxkpixloDhlpTJmnj5mpy9npzBolMBom85oqDRrmchrntFrqjpsmU9tqjZunc5uodRvn9BwqzpxpNdxrUFzqbZ0mb10rj51qNt1rj92rbR4kHJ4o894sEJ5sUR6l3V6sUR8tE99nXR+s0p/iomAtlWBiZCBiZGBtOKCipGCipKCtk2DipGDi5OFt1CGuV2GueyHjZOHrtCHs+CHul2IuVSJuFWJuVSJulWKu+yKvfCLqnqLuVaLu1iMuleMuliMv/GNu1iOwfSPlZqRs3uRxPeSvV+SvYGTv2CTxc+UspOVoJmVwGKWwnGXwWSXyv2ZwHuZyuSaw2icxGqdp7GexWufxWyfxW2gxm6gyH+gyJGh0P+iwKaix3Cjx3GlyHOmyXSnyXWqy3mt1Pa21J7E2rTE4v/J3drL2efM08nW5vTW58nd7fzf7vzf7/Hg8P/i8f/l8v/m6Orr8+T09PX1+fH6/Pj7+/z8/Pz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAxz7kAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH3wUNERUEOAq4vQAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAAA4klEQVQImWOoKQGDrCQwVc+QMWlSX5GvLx9fWv+kSZOiGeIm9VjxAQE/n13thImRDNEtEnx8ZnyWRkCxut4ghmAPPkm5bL/8MHNtvsxuHwZPJb7Q7LKqqvIcAz6ZJlMGR10+l7yK6urKgih5vlh9BmM+yUQIP12dL0SIQY9PxB2iPoJPMIWbwVCVTz41vjAwJ9yfTzqGg0GnnY9fStyGL0CUj0/Wi41Bs6sY7BphPj4BE1dmBpXOtoYEkAP51GztnRgZFDtamxtLk3OtLdwcHJwZGLy1NJQVxHi5ONlZmZhYeAAy5zv57aQ7fwAAAABJRU5ErkJggg==";
    	
		"use strict";

		this._poller = null;
		this._pollInterval = 250;
		this._previousWidth = -1;
		this._previousHeight = -1;

		var svg,
		svgNode,
		tagIndex,
		tagMember,
		tags,
		container,
		wordScale = d3.scale.log().range([3, 30]),
		wordColor = "gray";

		this.detectSize = function (that) {
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
				//execute draw instead of afterUpdate function. This prevents the cloud layout from re-running on browser resize when using auto width/height
				draw(tags);
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
			svgNode = svg.append("g");
		};

		this.afterUpdate = function () {

			if (that.dimTag() && that.measureSize()) {
				//Find the index by key value of the tag dimension specified at design time
				var word_data = that.savedData();
				tag1Index = dimensionIndexByKey(that.dimTag(), word_data);
				tagMember = word_data.dimensions[tag1Index].members;
				tags = [];
				var wordFont = that.tagFont();
				tagMember.forEach(function (member, i) {
					if (that.measureColor().data) {
						wordColor = that.measureColor().data[i]
					}
					var tag = {
						"key" : member.key,
						"text" : member.text,
						"frequency" : that.measureSize().data[i],
						"color" : getColor(wordColor),
						"tagFont" : wordFont,
						"tagRotation" : that.tagRotation()
					};
					tags.push(tag);
				});

				that.drawCloud();

			}
		};

		this.drawCloud = function () {

			var width = that.$().innerWidth();
			var height = that.$().innerHeight();

			d3.layout.cloud().size([width, height])
			.words(tags)
			.padding(2)
			//.rotate(function(d) { return d.text.length > 5 ? 0 : 90; })
			.rotate(function (d) {
				if (d.tagRotation === "90 degrees") {
					return d.text.length > 5 ? 0 : 90
				} else if (d.tagRotation === "Random") {
					return d.text.length > 5 ? 0 : ~~(Math.random() * 5) * 30 - 60
				} else {
					return 0
				};
			})
			.text(function (d) {
				return d.text;
			})
			.font(function (d) {
				return d.tagFont;
			})
			.fontSize(function (d) {
				return wordScale(+d.frequency);
			})
			.on("end", draw)
			.start();
		}

		function draw(words) {

			words.forEach(function (d) {
				d.id = d.key; // set the ID dynamically ... otherwise there are errors getting the right element
			});

			var svgWidth = that.$().innerWidth();
			var svgHeight = that.$().innerHeight();

			//handle responsive component resize
			var svgResize = svg.attr("width", svgWidth)
				.attr("height", svgHeight);

			var gResize = svgResize.selectAll("g")
				.attr("transform", "translate(" + (svgWidth / 2) + "," + (svgHeight / 2) + ")");
			//var tagNodes = svg.attr("width", svgWidth)
			//.attr("height", svgHeight);

			var cloud = gResize.selectAll("g text")
				.data(words, function (d) {
					return d.text;
				});
			//if(tagGroup.empty()) tagGroup = svg.append("g");
			//tagGroup.selectAll("text").remove();
			console.log("debug");
			//Enter new words
			var cloudEnter = cloud
				.enter().append("text")
				.attr("class", "wordcloud")
				.style("font-size", function (d) {
					return wordScale(d.frequency) + "px";
				})
				.style("font-family", function (d) {
					return d.tagFont;
				})
				.style("fill", function (d, i) {
					return d.color;
				})
				.attr("text-anchor", "middle")
				.attr("transform", function (d) {
					return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
				})
				.text(function (d) {
					return d.text;
				})
				.on("click", function (d) {
					click(d);
				});

			//Transition existing words
			var cloudTransition = cloud
				.transition()
				.duration(that.tagDuration())
				.style("font-size", function (d) {
					return d.size + "px";
				})
				.attr("transform", function (d) {
					return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
				})
				.style("fill-opacity", 1);

			//Exit departing or filtered words
			var cloudExit = cloud.exit()
				.transition()
				.duration(200)
				.style('fill-opacity', 1e-6)
				.attr('font-size', 1)
				.remove();

			that._poller = window.setTimeout(function () {
					that.detectSize(that)
				}, that._pollInterval);

		}

		//Start helper functions

		function initSvg($container) {

			$container.empty();

			var svg = getSvg($container);

			function getSvg($container) {
				return d3.select($container[0]).append("svg")
			}
			return svg;
		}

		function dimensionIndexByKey(key, data) {
			if (key == "NONE")
				return -1;
			if (!data)
				return null;
			for (var i = 0; i < data.dimensions.length; i++) {
				if (data.dimensions[i].key == key)
					return i;
			}
			return null;
		};

		function getColor(colorValue) {

			if (colorValue !== "gray") {
				var colorScale = d3.scale.quantize()//linear()
					.domain([that.measureScaleMinimum(),that.measureScaleMaximum()])
					.range(that.measureColorScale().split(","));

				var color = colorScale(colorValue);
				return color;
			}
			return "gray";
		};

		// Set clicked tag and fire properties change
		function click(d) {
			// set text of selected node
			that.selectedNode(d.key);
			// fire event so this change is also available via BIAL
			that.firePropertiesChangedAndEvent(["selectedNode"], "onclick");

		}

	}
	tagCloud.prototype.constructor = tagCloud;
	tagCloud.prototype.toString = function () {
		return ownComponentName;
	}
	Component.subclass(ownComponentName, tagCloud); // End of SDK
});
