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

(function() {
	 var myScript = $("script:last")[0].src;
	 var _readScriptPath = function () {
		 if(myScript) {
 			var myScriptSuffix = "res/NiceChart/";
 			var myPluginSuffix = "org.scn.community.databound/";
 			var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 			var mainSDKPathIndex = myScript.indexOf(myPluginSuffix);
 			var mainSDKPath = myScript.substring(0, mainSDKPathIndex);
 			var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 			return {
 				myScriptPath : ownScriptPath,	// http://localhost:9091/aad/zen/mimes/sdk_include/org.scn.community.databound/res/ScatterPlot/
 				mainSDKPath : mainSDKPath		// http://localhost:9091/aad/zen/mimes/sdk_include/
 			};
 		}
		 return {
	 			myScriptPath: "/aad/zen/mimes/sdk_include/org.scn.community.databound/res/HexBin/",
	 			mainSDKPath: "/aad/zen/mimes/sdk_include/"
	 		};
	 };
	 /** end of recognition of script path */
	 /** RequireJS Config **/
	 var pathInfo = _readScriptPath();
	 sap.zen.Dispatcher.instance.pauseDispatching();
	 
	//jQuery.sap.registerModulePath("lib.color.scheme", pathInfo.mainSDKPath + "org.scn.community.databound/os/color/scheme");
	//jQuery.sap.require("lib.color.scheme");

	     function NiceChart() {

/*AUTO PROPERTIES - START*/

	    	    this.data = function(value) { if (value === undefined) { return this._data; } else { this._data = value; return this; } };
	    		
	    		this.DChartType = function(value) {
	    			if (value === undefined) {
	    				return this._DChartType;
	    			} else {
	    				this._DChartType = value;
	    				return this;
	    			}
	    		};
	    		
	    		this.DColorHue = function(value) {
	    			if (value === undefined) {
	    				return this._DColorHue;
	    			} else {
	    				this._DColorHue = value;
	    				return this;
	    			}
	    		};

	    		this.DColorDistance = function(value) {
	    			if (value === undefined) {
	    				return this._DColorDistance;
	    			} else {
	    				this._DColorDistance = value;
	    				return this;
	    			}
	    		};

	    		this.DColorPalette = function(value) {
	    			if (value === undefined) {
	    				return this._DColorPalette;
	    			} else {
	    				this._DColorPalette = value;
	    				return this;
	    			}
	    		};
/*AUTO PROPERTIES - END*/
	    		var that = this;
    			
	    		this.init = function() {
	    			this._ownScript = _readScriptPath();
	    		};
	    		
	    		this.afterUpdate = function() {
	    			if(!that._afterRender) {
	    				// Get the context of the canvas element we want to select
	    				var $ = document; // shortcut
	    				that._jqThis = that.$();
	    				
	    				that._canvas = document.createElement('canvas');
	    				that._canvas.id = that._jqThis[0].id + "_canvas";
	    				that._canvas.className = "org-scn-NiceChart-Canvas";
	    				that._canvas.style.position = 'absolute';
	    				that._canvas.style.left = '200px';
	    				that._canvas.style.top = '0';
	    				that._canvas.style.width = (that._jqThis.outerWidth() - 200) + 'px';
	    				that._canvas.style.height =  that._jqThis.outerHeight() + 'px';
	    				
	    				that._jqThis[0].appendChild(that._canvas);
	    				
	    				that._tool = document.createElement('div');
	    				that._tool.id = that._jqThis[0].id + "_tooltip";
	    				that._tool.className = "org-scn-NiceChart-Tooltip";
	    				that._tool.style.position = 'absolute';
	    				that._tool.style.left = '0px';
	    				that._tool.style.top = '0px';
	    				that._tool.style.width = '200px';
	    				that._tool.style.height = '300px';
	    				that._jqThis[0].appendChild(that._tool);
	    				
	    				that._legend = document.createElement('div');
	    				that._legend.id = that._jqThis[0].id + "_legend";
	    				that._legend.className = "org-scn-NiceChart-Legend";
	    				that._legend.style.position = 'absolute';
	    				that._legend.style.left = '10px';
	    				that._legend.style.top = '10px';
	    				that._legend.style.width = '200px';
	    				that._legend.style.height =  (that._jqThis.outerHeight() - 20) + 'px';
	    				that._jqThis[0].appendChild(that._legend);
	    				
	    				that._ctx = that._canvas.getContext("2d");
	    				that._chartInstance = new Chart(that._ctx);
	    				
	    				that._afterRender = true;
	    			}

	    			that._options = that.getPreparedOptions();

	    			var afterPrepare = function () {
	    				// Destroys a specific chart instance
		    			if(that._chart) {
		    				that._chart.clear();
		    				that._chart.destroy();
		    			}
	
		    			that._chart = that._chartInstance[that._DChartType](that._chartdata, that._options);
	    				
	    				// var legend = that._chart.generateLegend();
	    				// var legendPlace = that._jqThis.find("#"+that._jqThis[0].id + "_legend");
	    				// legendPlace[0].innerHTML = legend;
		    			
		    			that.formatLegend();
	    				
						//    				if (that._chart.datasets[0].bars[4].value > 30) {
						//    					that._chart.datasets[0].bars[4].fillColor =  "lightgreen";
						//    					that._chart.update();
						//    				}
	    			}
	    			
	    			that.getPreparedData(afterPrepare);
	    		};
	    		
	    		this.getPreparedData = function (afterPrepare) {
	    			var data = {};
	    			
	    			var realSample = true;
	    			
	    			if(org_scn_community_databound.hasData(that._data) || realSample) {
	    				var flatData = {};
	    				if(realSample) {
	    					flatData = org_scn_community_databound.getSampleDataFlat(pathInfo, this.processData, afterPrepare);
	    					return;
	    				} else {
	    					var options = org_scn_community_databound.initializeOptions();
	    					options.ignoreResults = true;
	    					var flatData = org_scn_community_databound.flatten(that._data, options);
	    				}
	    				
	    				this.processData(flatData, afterPrepare);
	    				return;
	    			} else {
	    				var colors = this.simpleRandomColors();
	    				
	    				if (this._DChartType == "Line" || this._DChartType == "Bar" || this._DChartType == "Radar") {
	    					data = {};
		    				data.labels = ["January", "February", "March", "April", "May", "June", "July"];
		    				
		    				data.datasets = [];
		    				var dataSetsNumber = 7; 
		    				var reversIC = dataSetsNumber*4;
						    for (var iC = 0; iC < dataSetsNumber; iC++) {
						    	var dataSet = {};
		    					dataSet.label = "Data Set " + iC;
		    					
		    					dataSet.fillColor = "#"+colors.hard[iC];
		    					dataSet.strokeColor= "#"+colors.pastel[iC];
		    					dataSet.pointColor= "#"+colors.soft[iC];
		    					dataSet.pointStrokeColor= "#"+colors.hard[iC];
		    					dataSet.pointHighlightFill= "#fff";
		    					dataSet.pointHighlightStroke= "#"+colors.soft[iC];

		    					dataSet.data = [];			
		    					for (var iR = 0; iR < 7; iR++) {
		    						dataSet.data.push(Math.random() * 100 * (iR+1) * reversIC);
		    					}

		    					data.datasets.push(dataSet);
		    					reversIC = reversIC - 4;
						    }
	    				} else if (this._DChartType == "PolarArea" || this._DChartType == "Pie" || this._DChartType == "Doughnut") {
	    					data = [];
	    					
	    					var dataSetsNumber = 7; 
		    				var reversIC = dataSetsNumber*4;
						    for (var iC = 0; iC < dataSetsNumber; iC++) {
						    	var dataSet = {};
						    	
						    	dataSet.value = Math.random() * 100 * reversIC;
						    	dataSet.color = "#"+colors.hard[iC];
						    	dataSet.highlight = "#"+colors.pastel[iC];
						    	dataSet.label = "Data Set " + iC;

		    					data.push(dataSet);
						    }
	    				}
	    			}

	    			that._chartdata = data;
	    			afterPrepare();
	    		}
	    		
	    		this.processData = function (flatData, afterPrepare) {
	    			var data = {};
	    			var colors = that.simpleRandomColors();
	    			
	    			if (that._DChartType == "Line" || that._DChartType == "Bar" || that._DChartType == "Radar") {
	    				data.labels = [];
	    				for (var i = 0; i < flatData.geometry.rowLength; i++) {
	    					data.labels.push(flatData.rowHeaders[i]);
	    				}
	    				
    					data.datasets = [];
    					var max = Math.min(flatData.geometry.colLength, colors.hard.length);
    	    			for (var iC = 0; iC < flatData.geometry.colLength; iC++) {
	    					var dataSet = {};
	    					dataSet.label = flatData.columnHeaders[iC];
	    					
	    					dataSet.fillColor = "#"+colors.hard[iC];
	    					dataSet.strokeColor= "#"+colors.pastel[iC];
	    					dataSet.pointColor= "#"+colors.soft[iC];
	    					dataSet.pointStrokeColor= "#"+colors.hard[iC];
	    					dataSet.pointHighlightFill= "#fff";
	    					dataSet.pointHighlightStroke= "#"+colors.soft[iC];

	    					dataSet.data = [];			
	    					for (var iR = 0; iR < flatData.geometry.rowLength; iR++) {
	    						dataSet.data.push(flatData.values[iR][iC]);
	    					}

	    					data.datasets.push(dataSet);	
	    				}
    				} else if (that._DChartType == "PolarArea" || that._DChartType == "Pie" || that._DChartType == "Doughnut") {
    					data = [];
    					var multiplication = 1;
    					if(that._DChartType == "Pie" || that._DChartType == "Doughnut") {
    						multiplication = 100;
    					}
    					
    					var max = Math.min(flatData.geometry.rowLength, colors.hard.length);
    	    			for (var iR = 0; iR < max; iR++) {
					    	var dataSet = {};
					    	
					    	dataSet.value = flatData.values[iR][0] * multiplication;
					    	dataSet.color = "#"+colors.hard[iR];
					    	dataSet.highlight = "#"+colors.pastel[iR];
					    	dataSet.label = flatData.rowHeaders[iR];

	    					data.push(dataSet);
					    }
    				}
	    			
	    			that._chartdata = data;
	    			afterPrepare();
	    		}
	    		
	    		this.getPreparedOptions = function () {
	    			var options = {
//	    				    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
//	    				    scaleBeginAtZero : true,
//
//	    				    //Boolean - Whether grid lines are shown across the chart
//	    				    scaleShowGridLines : true,
//
//	    				    //String - Colour of the grid lines
//	    				    scaleGridLineColor : "rgba(0,0,0,.05)",
//
//	    				    //Number - Width of the grid lines
//	    				    scaleGridLineWidth : 1,
//
//	    				    //Boolean - Whether to show horizontal lines (except X axis)
//	    				    scaleShowHorizontalLines: true,
//
//	    				    //Boolean - Whether to show vertical lines (except Y axis)
//	    				    scaleShowVerticalLines: true,
//
//	    				    //Boolean - If there is a stroke on each bar
//	    				    barShowStroke : true,
//
//	    				    //Number - Pixel width of the bar stroke
//	    				    barStrokeWidth : 2,
//
//	    				    //Number - Spacing between each of the X value sets
//	    				    barValueSpacing : 5,
//
//	    				    //Number - Spacing between data sets within X values
//	    				    barDatasetSpacing : 1,
//
//	    				    //String - A legend template
//	    				    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
	    			};

	    			options.customTooltips = that.customTooltips;

	    			return options;
	    		};
	    		
	    		this.formatLegend = function () {
	    			var parent = that._legend;
	    			var data = that._chartdata;

	    		    var datas = data.hasOwnProperty('datasets') ? data.datasets : data;

	    		    // remove possible children of the parent
	    		    while(parent.hasChildNodes()) {
	    		        parent.removeChild(parent.lastChild);
	    		    }

	    		    datas.forEach(function(d) {
	    		        var title = document.createElement('span');
	    		        title.className = 'title';
	    		        parent.appendChild(title);

	    		        var colorSample = document.createElement('div');
	    		        colorSample.className = 'color-sample';
	    		        colorSample.style.backgroundColor = d.hasOwnProperty('strokeColor') ? d.strokeColor : d.color;
	    		        colorSample.style.borderColor = d.hasOwnProperty('fillColor') ? d.fillColor : d.color;
	    		        title.appendChild(colorSample);

	    		        var text = document.createTextNode(d.label);
	    		        title.appendChild(text);
	    		    });
	    		}
	    		
	    		this.simpleRandomColors = function () {
	    			var colors = {};
	    			
	    			var colorHue = this._DColorHue;
	    			var colorDistance = this._DColorDistance;
	    			var colorPalette = this._DColorPalette;
	    			
	    			var scm = new ColorScheme();
	    			scm.from_hue(colorHue)
	    			   .scheme(colorPalette)
	    			   .distance(colorDistance)
	    			   .add_complement(false)
	    			   .variation('light')
	    			   .web_safe(false);
	    			colors.light = scm.colors();
	    			scm.from_hue(colorHue)
	    			   .scheme(colorPalette)
	    			   .distance(colorDistance)
	    			   .add_complement(false)
	    			   .variation('hard')
	    			   .web_safe(false);
	    			colors.hard = scm.colors();
	    			scm.from_hue(colorHue)
	    			   .scheme(colorPalette)
	    			   .distance(colorDistance)
	    			   .add_complement(false)
	    			   .variation('soft')
	    			   .web_safe(false);
	    			colors.soft = scm.colors();
	    			scm.from_hue(colorHue)
	    			   .scheme(colorPalette)
	    			   .distance(colorDistance)
	    			   .add_complement(false)
	    			   .variation('pastel')
	    			   .web_safe(false);
	    			colors.pastel = scm.colors();
	    			return colors;
	    		}
	    		
	    		this.customTooltips = function(tooltip) {
	    			var tooltipEl = $("#" + that._jqThis[0].id + "_tooltip");
    		        if (!tooltip) {
    		            tooltipEl.css({
    		                //opacity: 0
    		            });
    		            return;
    		        }
    		        tooltipEl.removeClass('above below');
    		        tooltipEl.addClass(tooltip.yAlign);
    		        
    		        var locale = "en";
    		        if(that._data && that._data.locale) {
    		        	locale = that._data.locale;
    		        }
    		        
    		        var width = tooltipEl.outerWidth();
    		        width = width - 40;
    		        var innerHtml = '';

    		        if(tooltip.labels) {
						// worth a try to find a ttitle later on    		        
						//					innerHtml += [
						//		    		        		'<div class="chartjs-tooltip-title">',
						//		    		        		'	<span class="chartjs-tooltip-key" style="background-color:' + tooltip.legendColors[i].fill + '"></span>',
						//		    		        		'</div>'
						//		    		        	].join('');

	    		        for (var i = 0; i < tooltip.labels.length; i++) {
	    		        	var tooltipValue = org_scn_community_basics.getFormattedValue(tooltip.labels[i], locale, 2);
	    		        	var dataSetLabel = that._chartdata.datasets[i].label;
	    		        	
	    		        	innerHtml += [
	    		        		'<div class="chartjs-tooltip-section">',
	    		        		'	<span class="chartjs-tooltip-key" style="background-color:' + tooltip.legendColors[i].fill + '"></span>',
	    		        		'	<span class="chartjs-tooltip-text" style="width: '+((width-16)/2)+'px;">' + dataSetLabel + '</span>',
	    		        		'	<span class="chartjs-tooltip-value" style="width: '+((width-16)/2)+'px;">' + tooltipValue + '</span>',
	    		        		'</div>'
	    		        	].join('');
	    		        }
	    		        
	    		        tooltipEl.css({
	    		            opacity: 1,
	    		            left: tooltip.chart.canvas.offsetLeft + 60 + tooltip.x + 'px',
	    		            top: tooltip.chart.canvas.offsetTop - 100 + tooltip.y + 'px',
	    		            height: ((18 * tooltip.labels.length)) + 'px',
	    		            fontFamily: tooltip.fontFamily,
	    		            fontSize: tooltip.fontSize,
	    		            fontStyle: tooltip.fontStyle,
	    		        });
    		        } else {
    		        	var textValue = tooltip.text.split(":");
    		        	var multiplication = 1;
    					if(that._DChartType == "Pie" || that._DChartType == "Doughnut") {
    						multiplication = 100;
    					}
    					var tooltipValue = org_scn_community_basics.getFormattedValue(textValue[1] / multiplication, locale, 2);
    		        	
    					innerHtml += [
	    		        		'<div class="chartjs-tooltip-section">',
	    		        		'	<span class="chartjs-tooltip-text" style="width: '+((width-16)/2)+'px;">' + textValue[0] + '</span>',
	    		        		'	<span class="chartjs-tooltip-value" style="width: '+((width-16)/2)+'px;">' + tooltipValue + '</span>',
	    		        		'</div>'
	    		        	].join('');
    		        	
    		        	tooltipEl.css({
	    		            opacity: 1,
	    		            left: tooltip.chart.canvas.offsetLeft + 60 + tooltip.x + 'px',
	    		            top: tooltip.chart.canvas.offsetTop - 40 + tooltip.y + 'px',
	    		            height: (20) + 'px',
	    		            fontFamily: tooltip.fontFamily,
	    		            fontSize: tooltip.fontSize,
	    		            fontStyle: tooltip.fontStyle,
	    		        });
    		        }
    		        
    		        tooltipEl.html(innerHtml);
    		        
    		    };
	     	}
	     
	     	sap.designstudio.sdk.Component.subclass("org.scn.community.databound.NiceChart", NiceChart);	// End of SDK
	     	sap.zen.Dispatcher.instance.resumeDispatching(); 	
})();// End of closure

