/**
 * @author Dimitry Kudrayvtsev
 * https://github.com/dk8996/Gantt-Chart
 * Licensed under the Apache License, Version 2.0
 * @version 2.0
 */
var d3plug = d3plug || {};

(function() {

    d3plug.gantt = function(oWidth, oHeight, margin) {
        var FIT_TIME_DOMAIN_MODE = "fit";
        var FIXED_TIME_DOMAIN_MODE = "fixed";

        var timeDomainStart = d3.time.day.offset(new Date(), -3);
        var timeDomainEnd = d3.time.hour.offset(new Date(), +3);
        var timeDomainMode = FIT_TIME_DOMAIN_MODE; // fixed or fit
        var taskTypes = [];
        var taskStatus = [];
        var tasks = [];
        var height = oHeight - margin.top - margin.bottom - 5;
        var width = oWidth - margin.right - margin.left - 5;
        
        var ownId = "";

        var tickFormat = "%H:%M";

        var keyFunction = function(d) {
        	if(d) {
        		return d.startDate + d.taskName + d.endDate + d.status + d.taskDesc + y(d.taskName) + y.rangeBand() + tasks.length + d.r;
        	}
        };

        var rectTextName = function(d, i) { 
			return d.taskName + " / " + d.taskDesc + " [ " + d.endDate + " - " + d.startDate + " ]"
		}
        var rectTextShort = function(d, i) { 
			return d.taskDesc
		}
        var rectTransform = function(d) {
            return "translate(" + x(d.startDate) + "," + y(d.taskName) + ")";
        };

        var x = d3.time.scale().domain([timeDomainStart, timeDomainEnd]).range([0, width]).clamp(true);

        var y = d3.scale.ordinal().domain(taskTypes).rangeRoundBands([0, height - margin.top - margin.bottom], .1);

        var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.time.format(tickFormat)).tickSubdivide(true)
            .tickSize(8).tickPadding(8);

        var yAxis = d3.svg.axis().scale(y).orient("left").tickSize(0);

        this.initTimeDomain = function(tasks) {
            if (timeDomainMode === FIT_TIME_DOMAIN_MODE) {
                if (tasks === undefined || tasks.length < 1) {
                    timeDomainStart = d3.time.day.offset(new Date(), -3);
                    timeDomainEnd = d3.time.hour.offset(new Date(), +3);
                    return;
                }
                tasks.sort(function(a, b) {
                    return a.endDate - b.endDate;
                });
                timeDomainEnd = tasks[tasks.length - 1].endDate;
                tasks.sort(function(a, b) {
                    return a.startDate - b.startDate;
                });
                timeDomainStart = tasks[0].startDate;
            }
        };

        this.initAxis = function() {
            x = d3.time.scale().domain([timeDomainStart, timeDomainEnd]).range([0, width]).clamp(true);
            y = d3.scale.ordinal().domain(taskTypes).rangeRoundBands([0, height - margin.top - margin.bottom], .1);
            xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.time.format(tickFormat)).tickSubdivide(true)
                .tickSize(8).tickPadding(8);

            yAxis = d3.svg.axis().scale(y).orient("left").tickSize(0);
        };

        this.draw = function(parentId, iTasks) {
        	ownId = parentId;
        	var that = this;

        	tasks = iTasks;

            this.initTimeDomain(tasks);
            this.initAxis();

            var parent = d3.select("#" + ownId);

            var svg = parent.append("svg");
			var main = svg.append("g");
			this.adjustContent(svg, main);

            var rects = main.selectAll(".gantt-chart")
                .data(tasks, keyFunction);
            rects.enter();
            var rect = rects.append("rect");
            this.adjustRect(rect);
            rects.exit().remove();

			var texts = main.selectAll(".gantt-chart")
                .data(tasks, keyFunction);
            texts.enter();
            var text = texts.append("text");
            this.adjustText(text);
            texts.exit().remove();

            var xa = svg.append("g");
            var ya = svg.append("g");
            this.adjustAxes(xa, ya);
			
			var rectSel = main.selectAll("rect");
			if(rectSel) {
				rectSel = rectSel[0];
				for (var rI in rectSel) {
					var rO = rectSel[rI];
					$(rO).click (
						function(event){that.onClickDelegator(event)}
					);
				}
			}

			var textSel = main.selectAll("text");
			if(textSel) {
				textSel = textSel[0];
				for (var rI in textSel) {
					var rO = textSel[rI];
					$(rO).click (
						function(event){that.onClickDelegator(event)}
					);
				}
			}

            return this;

        };

		this.adjustContent = function (svg, main) {
		    svg.attr("id", ownId + "_s")
		    	.attr("class", "chart")
            	.attr("width", width + margin.left + margin.right)
            	.attr("height", height + margin.top + margin.bottom);
			
		    main.attr("id", ownId + "_m")
	    		.attr("class", "gantt-chart")
                .attr("width", width)
                .attr("height", height)
                .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
		};
		this.adjustAxes = function (xa, ya) {
			xa.attr("id", ownId + "_x")
	    		.attr("class", "x axis")
	            .attr("transform", "translate("+ margin.left +", " + (height + margin.top - margin.bottom - 20) + ")")
	            .transition()
	            .call(xAxis)
		        .selectAll("text")  
		            .style("text-anchor", "end")
		            .attr("dx", "-.8em")
		            .attr("dy", ".15em")
		            .attr("transform", function(d) {
		                return "rotate(-65)" 
		              });
	        	// http://www.d3noob.org/2013/01/how-to-rotate-text-labels-for-x-axis-of.html
          	ya.attr("id", ownId + "_y")
          		.attr("class", "y axis")
            	.attr("transform", "translate("+ margin.left +", " + margin.top + ")")
            	.transition()
            	.call(yAxis);
		};

		this.adjustRect = function (rect) {
			rect.attr("rx", 5)
                .attr("ry", 5)
                .attr("class", function(d) {
                    if (taskStatus[d.status] == null) {
                        return "bar";
                    }
                    return taskStatus[d.status];
                })
                .attr("y", 0)
                .attr("transform", rectTransform)
            	.attr("height", function(d) {
                    return y.rangeBand();
                })
                .attr("width", function(d) {
                    return (x(d.endDate) - x(d.startDate));
                })
                .attr("key", function(d) {
                    return d.key;
                })
                .append("svg:title")
            		.text(rectTextName)
				.transition();
		};

		this.adjustText = function (text) {
			text.attr("rx", 5)
                .attr("ry", 2)
                .attr("y", 4)
                .attr("x", 10)
                .attr("class", "text")
                .attr("transform", rectTransform)
                .attr("key", function(d) {
                    return d.key;
                })
            	.text(rectTextShort)
				.transition();
		};

        this.redraw = function(iTasks) {
			var that = this;
			tasks = iTasks;

            this.initTimeDomain(tasks);
            this.initAxis();

            var parent = d3.select("#" + ownId);
            var svg = parent.select("#" + ownId + "_s");
			var main = svg.select("#" + ownId + "_m");
			
			this.adjustContent(svg, main);
                
            var rects = main.selectAll("rect").data(tasks, keyFunction);
            var rect = rects.enter()
                .insert("rect", ":first-child");
            this.adjustRect(rect);
            rects.exit().remove();

            texts = main.selectAll("text").data(tasks, keyFunction);
            var text = texts.enter()
                .insert("text");
            this.adjustText(text);
            texts.exit().remove();

            var xa = svg.select("#" + ownId + "_x");
            var ya = svg.select("#" + ownId + "_y");
            this.adjustAxes(xa, ya);

            return this;
        };

        this.margin = function(value) {
            if (!arguments.length)
                return margin;
            margin = value;
            return this;
        };

        this.timeDomain = function(value) {
            if (!arguments.length)
                return [timeDomainStart, timeDomainEnd];
            timeDomainStart = +value[0], timeDomainEnd = +value[1];
            return this;
        };

        /**
         * @param {string}
         *                vale The value can be "fit" - the domain fits the data or
         *                "fixed" - fixed domain.
         */
        this.timeDomainMode = function(value) {
            if (!arguments.length)
                return timeDomainMode;
            timeDomainMode = value;
            return this;

        };

        this.taskTypes = function(value) {
            if (!arguments.length)
                return taskTypes;
            taskTypes = value;
            return this;
        };

        this.taskStatus = function(value) {
            if (!arguments.length)
                return taskStatus;
            taskStatus = value;
            return this;
        };

        this.width = function(value) {
            if (!arguments.length)
                return width;
            width = +value;
            return this;
        };

        this.height = function(value) {
            if (!arguments.length)
                return height;
            height = +value;
            return this;
        };

        this.tickFormat = function(value) {
            if (!arguments.length)
                return tickFormat;
            tickFormat = value;
            return this;
        };

        this.onClickDelegator = function (event) {
        	event.stopPropagation();
        	event.preventDefault();
        	event.stopImmediatePropagation();
        	if(this.clickListener != undefined) {
				this.clickListener.processOnClick(event);
        	}
        }
        
        return this;
    };
})(); // End of closure