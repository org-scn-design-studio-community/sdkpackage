(function(){

var myComponentData = org_scn_community_require.knownComponents.databound.NiceChart;
myComponentData.instance = function () {

/*AUTO PROPERTIES - START*/

    this.data = function(value) { if (value === undefined) { return this._data; } else { this._data = value; return this; } };
	
    this.DChartType = function(value) { if (value === undefined) { return this._DChartType; } else { this._DChartType = value; return this; } };
    this.DColorHue = function(value) { if (value === undefined) { return this._DColorHue; } else { this._DColorHue = value; return this; } };
    this.DColorDistance = function(value) { if (value === undefined) { return this._DColorDistance; } else { this._DColorDistance = value; return this; } };
    this.DColorPalette = function(value) { if (value === undefined) { return this._DColorPalette; } else { this._DColorPalette = value; return this; } };
    this.DShowLegend = function(value) { if (value === undefined) { return this._DShowLegend; } else { this._DShowLegend = value; return this; } };
    this.DLegendPosition = function(value) { if (value === undefined) { return this._DLegendPosition; } else { this._DLegendPosition = value; return this; } };
    this.DLegendWidth = function(value) { if (value === undefined) { return this._DLegendWidth; } else { this._DLegendWidth = value; return this; } };
    this.DSwapAxes = function(value) { if (value === undefined) { return this._DSwapAxes; } else { this._DSwapAxes = value; return this; } };
    this.DMaxDataPoints = function(value) { if (value === undefined) { return this._DMaxDataPoints; } else { this._DMaxDataPoints = value; return this; } };
	    		
/*AUTO PROPERTIES - END*/

    var that = this;
	
	this.init = function() {
		// nothing to do
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
			that._chartInstance = new Chart(that._ctx);

			org_scn_community_basics.resizeContentAbsoluteLayout(that, that._canvas, this.onSizeChanged);
			
			that._afterRender = true;
		}

		that._options = that.getPreparedOptions();
		
		org_scn_community_basics.determineOwnSize(that);
		
		that.afterPrepare = function () {
			if(that._chart) {
				// destroy first
				that._chart.clear();
				that._chart.destroy();
			}
			
			// recreate instance
			that._chart = that._chartInstance[that._DChartType](that._chartdata, that._options);
			
			// legend and other properties
			that.formatLegend();
		}
		
		that.getPreparedData(that.afterPrepare);
	};
	
	this.onSizeChanged = function (width, height) {
		if(!width) { width = that._containerWidth; }
		if(!height) { height = that._containerHeight; }
		
		var legendSize = that._DLegendWidth;
		if(!that._DShowLegend) {
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
		
		if(that._DLegendPosition == "Left") {
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
		
		that.afterPrepare();
	}
	
	this.getPreparedData = function (afterPrepare) {
		var that = this;
		
		var data = {};
		
		var realSample = false;
		
		if(org_scn_community_databound.hasData(that._data) || realSample) {
			var flatData = {};
			if(realSample) {
				flatData = org_scn_community_databound.getSampleDataFlat(that, this.processData, afterPrepare);
				return;
			} else {
				var options = org_scn_community_databound.initializeOptions();
				options.ignoreResults = true;
				flatData = org_scn_community_databound.flatten(that._data, options);
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
	
	this.processData = function (flatData, afterPrepare, owner) {
		var that = this;
		if(owner) {that = owner;}
		
		var data = {};
		var colors = that.simpleRandomColors();
		
		if (that._DChartType == "Line" || that._DChartType == "Bar" || that._DChartType == "Radar") {
			data.labels = [];
			var length = flatData.geometry.rowLength;
			var headers = flatData.rowHeaders;
			var otherLength = flatData.geometry.colLength;
			var otherHeaders = flatData.columnHeaders;
			if(that._DSwapAxes) {
				var length = flatData.geometry.colLength;
				var headers = flatData.columnHeaders;
				var otherLength = flatData.geometry.rowLength;
				var otherHeaders = flatData.rowHeaders;
			}
			that.maxRows = Math.min(length, that._DMaxDataPoints);
			for (var i = 0; i < that.maxRows; i++) {
				data.labels.push(headers[i]);
			}
			
			data.datasets = [];
			that.maxSeries = Math.min(otherLength, colors.hard.length);
			that.makeOverflow = otherLength - that.maxSeries;
			for (var iC = 0; iC < that.maxSeries; iC++) {
				var dataSet = {};
				dataSet.label = otherHeaders[iC];
				
				dataSet.fillColor = "#"+colors.hard[iC];
				dataSet.strokeColor= "#"+colors.pastel[iC];
				dataSet.pointColor= "#"+colors.soft[iC];
				dataSet.pointStrokeColor= "#"+colors.hard[iC];
				dataSet.pointHighlightFill= "#fff";
				dataSet.pointHighlightStroke= "#"+colors.soft[iC];

				dataSet.data = [];			
				for (var iR = 0; iR < length; iR++) {
					if(that._DSwapAxes) {
						dataSet.data.push(flatData.values[iC][iR]);
					} else {
						dataSet.data.push(flatData.values[iR][iC]);	
					}
				}

				data.datasets.push(dataSet);	
			}
		} else if (that._DChartType == "PolarArea" || that._DChartType == "Pie" || that._DChartType == "Doughnut") {
			data = [];
			var multiplication = 1;
			if(that._DChartType == "Pie" || that._DChartType == "Doughnut") {
				multiplication = 100;
			}
			
			var length = flatData.geometry.rowLength;
			var headers = flatData.rowHeaders;
			if(that._DSwapAxes) {
				var length = flatData.geometry.colLength;
				var headers = flatData.columnHeaders;
			}
			
			that.maxSeries = Math.min(length, colors.hard.length);
			that.makeOverflow = length - that.maxSeries;
			for (var iR = 0; iR < that.maxSeries; iR++) {
		    	var dataSet = {};
		    	
		    	if(that._DSwapAxes) {
		    		dataSet.value = flatData.values[0][iR] * multiplication;
		    	} else {
		    		dataSet.value = flatData.values[iR][0] * multiplication;	
		    	}
		    	
		    	dataSet.color = "#"+colors.hard[iR];
		    	dataSet.highlight = "#"+colors.pastel[iR];
		    	dataSet.label = headers[iR];

				data.push(dataSet);
		    }
		}
		
		that._chartdata = data;
		afterPrepare();
	}
	
	this.getPreparedOptions = function () {
		var options = {};

		options.customTooltips = that.customTooltips;
		
		var locale = "en";
        if(that._data && that._data.locale) {
        	locale = that._data.locale;
        }
        
        options.scaleLabel = "<%= org_scn_community_basics.getFormattedValue(value, '"+locale+"', 2)%>"

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
};

define([myComponentData.requireName], function(databoundnicechart){
	return myComponentData.instance;
});

}).call(this);