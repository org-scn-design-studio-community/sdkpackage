/**
 * CC BY-NC-SA License
 * Pictogram by Mike Howles is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 * Based on a work at http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/Pictogram 
 *
 */

define(["d3",
        "./../../../org.scn.community.shared/os/viz-modules/VizCoreDatabound",
        "sap/designstudio/sdk/component"], function(d3,VizCoreDatabound,Component) {
	var ownComponentName = "org.scn.community.databound.Pictogram";
	 /**
	 * Pictogram
	 */
	 Pictogram.prototype = VizCoreDatabound;
     function Pictogram() {
    	 var that = this;
    	 // Call super
    	 VizCoreDatabound.call(this,{
    		 preserveAspectRatio : {
    			opts : {
    				apsControl : "combobox",
    				desc : "Align",
    				cat : "General",
    				options : [
    					{ key : 'xMinYMin', text : 'xMinYMin (Top Left)'},
    					{ key : 'xMidYMin', text : 'xMidYMin (Top Center)'},
    					{ key : 'xMaxYMin', text : 'xMaxYMin (Top Right)'},
    					{ key : 'xMinYMid', text : 'xMinYMid (Middle Left)'},
    					{ key : 'xMidYMid', text : 'xMidYMid (Middle Center)'},
    					{ key : 'xMaxYMid', text : 'xMaxYMid (Middle Right)'},    					
    					{ key : 'xMinYMax', text : 'xMinYMax (Bottom Left)'},
    					{ key : 'xMaxYMax', text : 'xMaxYMax (Bottom Right)'},
    					{ key : 'xMidYMax', text : 'xMidYMax (Bottom Center)'},
    					{ key : 'none', text : 'None'}
    				]
    			}
    		},
    		fillDirection : {
    			opts : {
    				apsControl : "combobox",
    				desc : "Partial Fill Direction",
    				cat : "General",
    				options : [
    					{ key : 'ltr', text : 'Left to Right'},
    					{ key : 'btt', text : 'Bottom to Top'},
    					{ key : 'rtl', text : 'Right to Left'},
    					{ key : 'ttb', text : 'Top to Bottom'}
    				]
    			}
    		},
    		fillOrder : {
    			opts : {
    				apsControl : "segmentedbutton",
    				desc : "Fill Order",
    				cat : "General",
    				options : [
    					{ key : 'forward', text : 'Forward'},
    					{ key : 'backward', text : 'Backward'}
    				]
    			}
    		},
    		 title :  {
				opts : {
					desc : "Title",
					cat : "General",
					apsControl : "text"
				}					
			},
			precision :  {
				opts : {
					desc : "Decimal Precision",
					cat : "General",
					apsControl : "spinner"
				}	
			},
			kpi :  {
				opts : {
					desc : "KPI",
					cat : "Data",
					apsControl : "dataselection"
				}	
			},
			manualKpi :  {
				opts : {
					desc : "Manual KPI",
					cat : "Data",
					apsControl : "spinner"
				}	
			},
			maxKpi :  {
				opts : {
					desc : "Max KPI",
					cat : "Data",
					apsControl : "spinner"
				}	
			},
			scaleByMax :  {
				opts : {
					desc : "Scale By Max KPI value",
					cat : "Data",
					apsControl : "checkbox"
				}	
			},
    		shape : {
				opts : {
					desc : "Shape",
					cat : "General",
					apsControl : "text"
				}
			},
			backgroundColor : {
				opts : {
					desc : "Background Color",
					cat : "General",
					apsControl : "color"
				}
			},
			fontColor : {
				opts : {
					desc : "Font Color",
					cat : "General",
					apsControl : "color"
				}
			},
			shapeColorEmpty : {
				opts : {
					desc : "Empty Shape Color",
					cat : "General",
					apsControl : "color"
				}
			},
			shapeColorFill : {
				opts : {
					desc : "Full Shape Color",
					cat : "General",
					apsControl : "color"
				}
			},
			numColumns :  {
				opts : {
					desc : "Number of Columns",
					cat : "General",
					apsControl : "spinner"
				}					
			},
			numRows :  {
				opts : {
					desc : "Number of Rows",
					cat : "General",
					apsControl : "spinner"
				}					
			},
			fontSize :  {
				opts : {
					desc : "Font Size",
					cat : "General",
					apsControl : "spinner"
				}					
			},
			fontFamily :  {
				opts : {
					desc : "Font Family",
					cat : "General",
					apsControl : "text"
				}					
			},
			fontWeight :  {
				opts : {
					desc : "Font Weight",
					cat : "General",
					apsControl : "text"
				}					
			},
			paddingX :  {
				opts : {
					desc : "Padding X",
					cat : "General",
					apsControl : "spinner"
				}					
			},
			paddingY :  {
				opts : {
					desc : "Padding Y",
					cat : "General",
					apsControl : "spinner"
				}					
			},
			textSpacing :  {
				opts : {
					desc : "Text Spacing",
					cat : "General",
					apsControl : "spinner"
				}					
			}
    	});
    	this.componentInfo.title = "Pictogram";
    	this.componentInfo.description = "Pictogram Description";
    	this.componentInfo.author = "Mike Howles";
    	this.componentInfo.icon = "data:image/png;base64,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";
    	this.componentInfo.topics.splice(1,0,{
    		title : "Pictogram License",
    		content : '<a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAPCAIAAAD8q9/YAAABqklEQVRIx+WWMU8CMRTH3wewxRvZoGp0IpJOhDhwdMP1JhLHY3DSwU4kxAHYMIGlX+Gc1MXA4AQhpPEb8BX6FWq05Dyhd3Ju573ccGnea+/3/u+9K0AOTefGvoEfn4Lo07nuAMBwOLSGMcYwxhMxNs6r91XhsJAJXe3AEzHGGMfRhsynZ6fGf/o27fV6GQauX9TL5XJybUgpAaB91TYhS7lsXbayCowwMvJKKQkhAMAYU0oxxgCAECKlNCJXaTWs6tHDyDoXtg/7+W5djEZZnRNOSfC3A3fvuwAwm8201oQQz/O01vzLHMdRSgkhgiAwiwijsKrni7l1962XuA/azY41WXE5SucfBb69uwEAKaVSKjq3PM+jlEarmnOOMTZRL6/Pi9UiIfdWGeMg41Kzu+euvAkip1CYMeb7vlGYcy6E2CiMUiickHtrGf+q2FbsHxX+7GG06eEgCBzHAQDf98MeppSu12utdbPZrJxX9uzh/YH37+G4MZEauFavlUqlHE3piRgjdDAYDBKAXdc9Pjn6J//hcHT1+30rbcNtFIvFbN+08nWXzpV9AD9ivwErgn5oAAAAAElFTkSuQmCC" /></a>'+
    		'<br /><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Pictogram</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Mike Howles</span> is licensed under a <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" target="_blank" href="http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/Pictogram" rel="dct:source">sdkpackage repository on Github</a>.'
    	});


		/**
		 * Fires after property change.
		 */
		this.afterUpdate = function() {
			this.redraw();
		};
		var parentInit = this.init;
    	this.init = function(){
    		parentInit.call(this);
	    	this._poller = null;
	    	this._pollInterval = 250;
	    	this._previousWidth = -1;
	    	this._previousHeight = -1;
    		this.$().addClass("Pictogram");
    		//this.$().css("overflow-y","auto");
    		//this.$().css("overflow-x","hidden");
    	};
    	this.redraw = function(){
    		try{
    		if(!this.$().attr("id")) return;	// Dead poller
    		// Loosely (very loosely) based on:
    		// http://bl.ocks.org/alansmithy/d832fc03f6e6a91e99f4
            var measure = this.manualKpi();
            var title = this.title();
            var k = this.kpi();
            if(k && k.data && k.data.length>0) {
            	measure = k.data[0];
            }
    		var that = this;
    		//padding for the tile
            var xPadding = this.paddingX();
            var yPadding = this.paddingY();
            var path = this.shape();
            //var apple = "m127.805969,90.003128c0.224838,24.213104 21.241287,32.270615 21.474121,32.373459c-0.177704,0.56826 -3.358078,11.482742 -11.072464,22.756622c-6.668747,9.746841 -13.590027,19.457977 -24.493088,19.659103c-10.713348,0.197403 -14.158287,-6.353043 -26.406677,-6.353043c-12.24469,0 -16.072174,6.151901 -26.213551,6.550446c-10.52422,0.398254 -18.538303,-10.539917 -25.26247,-20.251053c-13.740021,-19.864456 -24.24024,-56.132286 -10.1411,-80.613663c7.004152,-12.157551 19.521101,-19.85622 33.10713,-20.053638c10.334515,-0.197132 20.089069,6.952717 26.406689,6.952717c6.313614,0 18.167473,-8.59832 30.628998,-7.335548c5.21682,0.217129 19.860519,2.1073 29.263641,15.871029c-0.75766,0.469692 -17.472931,10.200527 -17.291229,30.443592m-20.134499,-59.456692c5.587379,-6.7633 9.348007,-16.178439 8.322067,-25.546439c-8.053787,0.32369 -17.792625,5.36682 -23.569427,12.126399c-5.177124,5.985922 -9.711121,15.566772 -8.48777,24.749359c8.976891,0.69453 18.147476,-4.561718 23.73513,-11.329308";
            //var headcount = "M3.5,2H2.7C3,1.8,3.3,1.5,3.3,1.1c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1c0,0.4,0.2,0.7,0.6,0.9H1.1C0.7,2,0.4,2.3,0.4,2.6v1.9c0,0.3,0.3,0.6,0.6,0.6h0.2c0,0,0,0.1,0,0.1v1.9c0,0.3,0.2,0.6,0.3,0.6h1.3c0.2,0,0.3-0.3,0.3-0.6V5.3c0,0,0-0.1,0-0.1h0.2c0.3,0,0.6-0.3,0.6-0.6V2.6C4.1,2.3,3.8,2,3.5,2z";
            // Positioning and Sizing
    		// SVG
    		var svgDoc = d3.select("#" + this.$().attr("id")+"_viz");
    		var shadowSVG = d3.select("#" + this.$().attr("id")+"_shadow");
    		if(svgDoc.empty()) {
    			svgDoc = d3.select(this.$().get(0))
    				.append("svg")
    				.attr("id", this.$().attr("id")+"_viz");
    			
    			shadowSVG = d3.select(this.$().get(0))
    				.append("svg")
    				.style("position","relative")
    				.style("z-index",-1000)
    				.attr("id", this.$().attr("id")+"_shadow");

    			//background rectangle
                svgDoc.append("rect")
                	.attr("width",0)
                	.attr("height",0);

                // Plotting SVG - We use this because paths could be any size and we can use viewbox to resize it.
    			svgDoc.append("svg")
					.attr("class","plots")
					.attr("preserveAspectRatio",this.preserveAspectRatio() + " meet");
    			
    			svgDoc.select(".plots").append("defs")
	                .append("g")
	                .attr("id", this.$().attr("id") + "_iconCustom")
	                .append("path")
	                .attr("d",path);
    			
    			svgDoc.select(".plots").select("defs")
    				.append("clipPath")
	                .attr("id", this.$().attr("id") + "_iconClip")
	                .append("path")
	                .attr("d",path);
    			
                //text element to display number of icons highlighted
                
    			svgDoc.append("text")
                    .attr("class","txtValue")
                    .attr("x",this.paddingX())
                    .text(title);
				//create group element and create an svg <use> element for each icon
				svgDoc.select(".plots").append("g")
				
                //svgDoc.append("g")
					.attr("class","pictoLayer")
					
    		}else{
    			//alert("svgDoc exists");
    		}
    		// Update icon def
    		svgDoc.select("#" + this.$().attr("id") + "_iconCustom").select("path")
    			.transition().duration(250)
    			.attr("d",path);
    		svgDoc.select("#" + this.$().attr("id") + "_iconClip").select("path")
				.transition().duration(250)
				.attr("d",path);
    		svgDoc
    			.attr("width",this.$().width())
    			.attr("height",this.$().height());
    		 
    		var cells = this.numRows() * this.numColumns();
    		var ratio = this.maxKpi() / cells;
    		var scale = 1;
    		if(this.scaleByMax()) scale = ratio;
    		
    		
			title = title.replace(/{scaledvalue}/g, this.round(measure / ratio));
			title = title.replace(/{scaledmax}/g, this.round(cells));
			title = title.replace(/{value}/g, this.round(measure));
			title = title.replace(/{max}/g, this.round(this.maxKpi()));
			title = title.replace(/{percent}/g, ((this.round(measure / this.maxKpi() * 100 )) + "%"));
			title = title.replace(/{scale}/g, this.round(scale));
            
            
    		// Measure some pixels
    		shadowSVG.selectAll("*").remove();
    		var sText = shadowSVG.append("text")
                .attr("class","txtValue")
                .attr("x",0)
                .attr("y",0)
                .style("font-size", this.fontSize() + "px")	
                .style("font-weight", this.fontWeight())
                .style("font-family", this.fontFamily())
                .text(title);
    		var symbol = shadowSVG
    			.append("g")
    			.append("path")
    			.attr("d",path)
    			[0][0];
    		
    		var shadowText = shadowSVG.select("text")[0][0];
    		var tbb = shadowText.getBBox();
    		var bb = shadowSVG.select("g")[0][0].getBBox();
    		shadowSVG.selectAll("*").remove();
    		//specify the number of columns and rows for pictogram layout
            var numCols = this.numColumns();
            var numRows = this.numRows();
            
            //horizontal and vertical spacing between the icons
            var hBuffer = bb.height * 1.5;//9;
            var wBuffer = bb.width * 1.5;//8;
            
            var viewWidth = (numCols * wBuffer);// + (this.paddingX() * 2);
            var viewHeight = (numRows * hBuffer);// + (this.paddingY() * 2);
            
            svgDoc.select(".plots").transition().duration(250)
            	.attr("viewBox", "0 0 " + viewWidth + " " + viewHeight)
            	.attr("preserveAspectRatio",this.preserveAspectRatio() + " meet")
            	.transition().duration(250)
            	.attr("y", tbb.height + this.paddingY() + this.textSpacing())
            	.attr("x", this.paddingX())
            	.attr("height", this.$().height() - tbb.height - (this.paddingY() * 2) - + this.textSpacing())
            	.attr("width", this.$().width() /*- tbb.height */ - (this.paddingX() * 2));
            	
            
            svgDoc.select("rect")
				.transition().duration(250)
					.style("fill",this.backgroundColor())
					.attr("width",this.$().width())
					.attr("height",this.$().height());
				
            
            //generate a d3 range for the total number of required elements
            var myIndex = d3.range(0,cells,1);	            
            
            //Update text element to display number of icons highlighted
            svgDoc.select("text")
            	.text(title)
            	.style("font-weight", this.fontWeight())
                .style("font-family", this.fontFamily())
            	.transition().duration(250)
            		.style("font-size", this.fontSize() + "px")	
            		.style("fill", this.fontColor())
            		.attr("x",this.paddingX())
                	.attr("y",this.paddingY())
                    //.style("dominant-baseline","text-after-edge")	// Does not work in IE :P
                    .attr("dy",this.fontSize() + "px");
                
            
            //var picts = svgDoc.select(".plots").select(".pictoLayer").selectAll("use").data(myIndex);
            var that = this;
            var picts = svgDoc.select(".plots").select(".pictoLayer")
            	.selectAll(".pic").data(myIndex);
            
            var picGroup = picts.enter()
				.append("g")
				.attr("class","pic");
			
			picGroup.append("rect")	
				.attr("class", "back")
				.attr("clip-path", "url(#" + this.$().attr("id")+"_iconClip)");

			picGroup.append("rect")	
				.attr("class", "fore")
				.attr("clip-path", "url(#" + this.$().attr("id")+"_iconClip)");		
            
           
            // Handle children
            picts.each(function(d,i){
            	var h = bb.height,
            		w = bb.width,
            		x = bb.x,
            		y = bb.y;
            	var position = d;
            	if(that.fillOrder()=="backward"){
            		position = cells - d - 1;
            	}
            	if ((position + 1) * scale > measure) {
            		var delta = ((position + 1) * scale) - measure;
            		if(delta < scale) {	// Partial Fill
            			var hs = d3.scale.linear()
			    			.range([bb.height, bb.x])
			    			.domain([0,scale]);
            			
            			var ws = d3.scale.linear()
		    				.range([bb.width, bb.y])
		    				.domain([0,scale]);
            			
            			switch(that.fillDirection()){
		            		case "ttb" :
	    						h = hs(delta);
		    	            	break;
		            		case "btt" :
	    						y = bb.height + bb.y - hs(delta);
	    	            		h = bb.height - y + bb.y;
	    	            		break;
		            		case "ltr" :
		            			w = ws(delta);
		            			break;
		            		case "rtl" :
	    						x = bb.width - ws(delta) + bb.x;
	    	            		w = bb.width - x + bb.x;
	    	            		break;
            			}
		            }else{ // total empty
		            	w = 0, h = 0;
		            }
            	}
            	try{
            	// Group 
            	d3.select(this).transition().duration(250)
	            	.attr("transform",function(d){
	            		var remainder = d % numCols;		//calculates the x position (column number) using modulus
	            		var x = remainder * wBuffer;
						var whole = Math.floor(d/numCols)	//calculates the y position (row number)
						var y = whole * hBuffer;
						return "translate(" + x + "," + y + ")";
	            	});
            	// Background rectangle
            	d3.select(this).select(".back").transition().duration(250)
	            	.attr("width", bb.width)
	            	.attr("height", bb.height)
	            	.attr("x", bb.x)
					.attr("y", bb.y)
					.style("fill", that.shapeColorEmpty());
            	// Foreground
            	d3.select(this).select(".fore").transition().duration(250)
	            	.attr("width", w)
					.attr("height",h)
					.attr("x", x)
					.attr("y", y)
					.style("fill", that.shapeColorFill());
            	}catch(e){
            		alert(e);
            	}
            });
			picts.exit().remove();
    		this._poller = window.setTimeout(function(){that.measureSize(that)},that._pollInterval);
    		}catch(e){
    			alert(e);
    		}
    	};
    	this.round = function(n){
    		var p = this.precision();
    		if(p<0) return n;
    		var multiplier = Math.pow(10, p);
    		return Math.round(n * multiplier) / multiplier;
    	};
    	this.measureSize = function(that){
    		var currentWidth = that.$().innerWidth();
    		var currentHeight = that.$().innerHeight();
    		if(currentWidth != that._previousWidth || currentHeight != that._previousHeight){
    			that._previousHeight = currentHeight;
    			that._previousWidth = currentWidth;	
    			this.redraw();
    		}else{
    			// Sizes are the same.  Don't redraw, but poll again after an interval.
    			that._poller = window.setTimeout(function(){that.measureSize(that)},that._pollInterval);	
    		}
    	};
     }
     Pictogram.prototype.constructor = Pictogram;
	 Pictogram.prototype.toString = function(){
    	 return ownComponentName;
     }
	 Component.subclass(ownComponentName, Pictogram);	// End of SDK
});
