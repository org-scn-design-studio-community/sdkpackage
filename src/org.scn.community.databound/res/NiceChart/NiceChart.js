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
 
//%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./NiceChartSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"shared/modules/component.databound",
	"../../../"+scn_pkg+"databound/os/chartjs/Chart",
	"../../../"+scn_pkg+"databound/os/color/ColorScheme"
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

NiceChart = function () {

	var that = this;
	
	that.init = function() {
		// define root component
		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	};
	
	that.initAsync = function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		// that.addStyleClass("scn-pack-?");
			
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	that.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

		var flatData = {};
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		if(!org_scn_community_databound.hasData(that.getData())) {
			flatData = org_scn_community_databound.getSampleDataFlat(that, that.processData, that.afterPrepare);
			return;
		} else {
			org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
			return;
		}

		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	};
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	that.onResize = function (width, height, parent) {
		that.resetSizes(width, height);
		that.afterUpdate(parent);
	}
	
	that.resetSizes = function (width, height) {
		if(!width) { width = that._containerWidth; }
		if(!height) { height = that._containerHeight; }
		
		var legendSize = that.getDLegendWidth();
		if(!that.getDShowLegend()) {
			legendSize = 0;
			that._legend.style.width = '0px';
			that._legend.style.display = "none";
		} else {
			that._legend.style.width = legendSize + 'px';
			that._legend.style.display = "block";
		}
		that._canvas.style.width = (width - legendSize) + 'px';
		that._canvas.style.height =  height + 'px';
		
		that._canvas.width = (width - legendSize);
		that._canvas.height =  height;
		
		if(that._chartInstance) {
			that._chartInstance.width = (width - legendSize);
			that._chartInstance.height =  height;
		}
		
		if(that.getDLegendPosition() == "Left") {
			that._canvas.style.left = legendSize + 'px';	
			that._legend.style.left = '10px';
		} else {
			that._canvas.style.left = '0px';
			that._legend.style.left = (width - legendSize + 10) + 'px';
		}
		
		if(that.makeOverflow > 0) {
			that._overflow.style.width =  '260px';
			that._overflow.style.height =  '20px';
			that._overflow.style.display = "block";
			that._overflow.innerHTML = "Overflow of " + that.makeOverflow + " data sets!";
		} else {
			that._overflow.style.width =  '0px';
			that._overflow.style.height =  '0px';
			that._overflow.style.display = "none";
		}
	}
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	that.processData = function (flatData, afterPrepare, owner) {
		var that = owner;
		
		if(flatData == undefined) {
			var options = org_scn_community_databound.initializeOptions();
			options.ignoreResults = true;

			flatData = org_scn_community_databound.flatten(that.getData(),options);
		}

		var data = {};
		var colors = that.simpleRandomColors();
		
		if (that.getDChartType() == "Line" || that.getDChartType() == "Bar" || that.getDChartType() == "LineBar" || that.getDChartType() == "Radar") {
			data.labels = [];
			var length = flatData.geometry.rowLength;
			var headers = flatData.rowHeaders;
			var otherLength = flatData.geometry.colLength;
			var otherHeaders = flatData.columnHeaders;
			if(that.getDSwapAxes()) {
				var length = flatData.geometry.colLength;
				var headers = flatData.columnHeaders;
				var otherLength = flatData.geometry.rowLength;
				var otherHeaders = flatData.rowHeaders;
			}
			that.maxRows = Math.min(length, that.getDMaxDataPoints());
			for (var i = 0; i < that.maxRows; i++) {
				data.labels.push(headers[i]);
			}
			
			data.datasets = [];
			that.maxSeries = Math.min(otherLength, colors.hard.length);
			that.makeOverflow = otherLength - that.maxSeries;
			for (var iC = 0; iC < that.maxSeries; iC++) {
				var dataSet = {};
				dataSet.label = otherHeaders[iC];
				
				dataSet.pointHighlightFill= "#fff";

				dataSet.strokeColor= "#"+colors.pastel[iC];
				dataSet.pointColor= "#"+colors.soft[iC];
				dataSet.pointStrokeColor= "#"+colors.hard[iC];
				dataSet.pointHighlightStroke= "#"+colors.soft[iC];
				dataSet.fillColor = "#"+colors.soft[iC];

				if(that.getDChartType() == "LineBar") {
					// for starting point, only the first one is line
					if(iC % 2 == 1) {
						dataSet.type = "line";
						dataSet.fillColor = "#fff";
					} else {
						dataSet.fillColor = "#"+colors.hard[iC];
					}
				}
				
				dataSet.data = [];			
				for (var iR = 0; iR < length; iR++) {
					if(that.getDSwapAxes()) {
						dataSet.data.push(flatData.values[iC][iR]);
					} else {
						dataSet.data.push(flatData.values[iR][iC]);	
					}
				}

				data.datasets.push(dataSet);	
			}
		} else if (that.getDChartType() == "PolarArea" || that.getDChartType() == "Pie" || that.getDChartType() == "Doughnut") {
			data = [];
			var multiplication = 1;
			if(that.getDChartType() == "Pie" || that.getDChartType() == "Doughnut") {
				multiplication = 100;
			}
			
			var length = flatData.geometry.rowLength;
			var headers = flatData.rowHeaders;
			if(that.getDSwapAxes()) {
				var length = flatData.geometry.colLength;
				var headers = flatData.columnHeaders;
			}
			
			that.maxSeries = Math.min(length, colors.hard.length);
			that.makeOverflow = length - that.maxSeries;
			for (var iR = 0; iR < that.maxSeries; iR++) {
		    	var dataSet = {};
		    	
		    	if(that.getDSwapAxes()) {
		    		dataSet.value = flatData.values[0][iR] * multiplication;
		    	} else {
		    		dataSet.value = flatData.values[iR][0] * multiplication;	
		    	}
		    	
		    	dataSet.color = "#"+colors.hard[iR];
		    	dataSet.fillColor = "#"+colors.hard[iR];
		    	dataSet.highlight = "#"+colors.pastel[iR];
		    	dataSet.label = headers[iR];

				data.push(dataSet);
		    }
		}
		
		that._data = data;

		// processing on data
		that.afterPrepare(that);
	};
	
	that.getPreparedOptions = function () {
		var options = {};

		options.customTooltips = that.customTooltips;
		
		var locale = "en";
        if(that._data && that._data.locale) {
        	locale = that._data.locale;
        }
        
        options.scaleLabel = "<%= org_scn_community_basics.getFormattedValue(value, '"+locale+"', 2)%>"

		return options;
	};
	
	that.formatLegend = function () {
		var parent = that._legend;
		var data = that._data;

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
	
	that.simpleRandomColors = function () {
		var colors = {};
		
		var colorHue = that.getDColorHue();
		var colorDistance = that.getDColorDistance();
		var colorPalette = that.getDColorPalette().toLowerCase();
		
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
	
	that.customTooltips = function(tooltip) {
		var tooltipEl = $("#" + that._jqThis[0].id + "_tooltip");
        if (!tooltip) {
            tooltipEl.css({
                opacity: 0
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
	        for (var i = 0; i < tooltip.labels.length; i++) {
	        	var tooltipValue = org_scn_community_basics.getFormattedValue(tooltip.labels[i], locale, 2);
	        	var dataSetLabel = that._data.datasets[i].label;
	        	
	        	innerHtml += [
	        		'<div class="chartjs-tooltip-section">',
	        		'	<span class="chartjs-tooltip-key" style="background-color:' + tooltip.legendColors[i].fill + '"></span>',
	        		'	<span class="chartjs-tooltip-text" style="width: '+((width-16)/4*2)+'px;">' + dataSetLabel + '</span>',
	        		'	<span class="chartjs-tooltip-value" style="width: '+((width-16)/4*2)+'px;">' + tooltipValue + '</span>',
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
			if(that.getDChartType() == "Pie" || that.getDChartType() == "Doughnut") {
				multiplication = 100;
			}
			var tooltipValue = org_scn_community_basics.getFormattedValue(textValue[1] / multiplication, locale, 2);
        	
			innerHtml += [
	        		'<div class="chartjs-tooltip-section">',
	        		'	<span class="chartjs-tooltip-text" style="width: '+((width-16)/4*2)+'px;">' + textValue[0] + '</span>',
	        		'	<span class="chartjs-tooltip-value" style="width: '+((width-16)/4*2)+'px;">' + tooltipValue + '</span>',
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

	that.afterPrepare = function (owner) {
		var that = owner;

		if(!that._oContentPlaced) {
			// Get the context of the canvas element we want to select
			var $ = document; // shortcut
			that._jqThis = that.$();
			
			that._canvas = document.createElement('canvas');
			that._canvas.id = that._jqThis[0].id + "_canvas";
			that._canvas.className = "org-scn-NiceChart-Canvas";
			that._canvas.style.position = 'absolute';
			that._canvas.style.top = '0';
			
			that._jqThis[0].appendChild(that._canvas);
			
			that._tool = document.createElement('div');
			that._tool.id = that._jqThis[0].id + "_tooltip";
			that._tool.className = "org-scn-NiceChart-Tooltip";
			that._tool.style.position = 'absolute';
			that._tool.style.left = '0px';
			that._tool.style.top = '0px';
			that._jqThis[0].appendChild(that._tool);
			
			that._legend = document.createElement('div');
			that._legend.id = that._jqThis[0].id + "_legend";
			that._legend.className = "org-scn-NiceChart-Legend";
			that._legend.style.position = 'absolute';
			that._legend.style.top = '10px';
			
			that._jqThis[0].appendChild(that._legend);
			
			that._overflow = document.createElement('div');
			that._overflow.id = that._jqThis[0].id + "_overflow";
			that._overflow.className = "org-scn-NiceChart-Overflow";
			that._overflow.innerHTML = "Overflow !"
			that._jqThis[0].appendChild(that._overflow);
			
			that._ctx = that._canvas.getContext("2d");
			that._chartInstance = new ChartJs(that._ctx);
			
			org_scn_community_basics.resizeContentAbsoluteLayout(that, that._canvas, that.onResize);
		}

		that._options = that.getPreparedOptions();
		
		org_scn_community_basics.determineOwnSize(that);
		that.resetSizes();

		// visualization on processed data 
		if(that._chart) {
			// destroy first
			that._chart.clear();
			that._chart.destroy();
		}
		
		// recreate instance
		that._chart = that._chartInstance[that.getDChartType()](that._data, that._options);
		
		// legend and other properties
		that.formatLegend();
	};

	/* COMPONENT SPECIFIC CODE - END METHODS*/

	org_scn_community_component_Core(that, myComponentData);
	
	return that;
};
//%INIT-START%
myComponentData.instance = NiceChart;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});