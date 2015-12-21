 /**
 * Location Intelligence
 */
define(["./../../../org.scn.community.shared/os/viz-modules/VizMap",
        "sap/designstudio/sdk/component"
    ], function(VizMap,Component) {
	var ownComponentName = "org.scn.community.databound.LocationIntel";
	LocationIntel.prototype = VizMap;
	function LocationIntel() {
    	 var that = this;
    	 // Call super
    	 VizMap.call(this, {
	    		latitudeField :  { 
					value : "",
					opts : {
						desc : "Latitude Field",
						cat : "Data",
						apsControl : "text"
					}					
				},
				longitudeField :  { 
					value : "",
					opts : {
						desc : "Longitude Field",
						cat : "Data",
						apsControl : "text"
					}					
				},
				markerTitle :  { 
					value : "",
					opts : {
						desc : "Marker Title",
						cat : "Data",
						apsControl : "text"
					}					
				},
				markerSize : { 
					value : 5,
					opts : {
						desc : "Marker Size",
						cat : "Cosmetics-Plot",
						apsControl : "spinner"	
					}
				},
				markerColor :  { 
					value : "#006699",
					opts : {
						desc : "Marker Color",
						cat : "Cosmetics-Colors",
						apsControl : "color"	
					}
				},
				markerAlpha : { 
					value : 70,
					opts : {
						desc : "Marker Alpha",
						cat : "Cosmetics-Plot",
						apsControl : "spinner"	
					}
				},
				markerSizeMeasure :  { 
					value : "",
					opts : {
						desc : "Marker Size Measure (Optional)",
						cat : "Data",
						apsControl : "measureselector"
					}					
				},
				markerMin : { 
					value : 5,
					opts : {
						desc : "Marker Minimum",
						cat : "Cosmetics-Scale",
						apsControl : "spinner"	
					}
				},
				markerMax : { 
					value : 5,
					opts : {
						desc : "Marker Maximum",
						cat : "Cosmetics-Scale",
						apsControl : "spinner"	
					}
				},
				selectedMarker : { 
	    			value : "",
	    			opts : {
	    				desc : "Data",
	    				cat : "Data",
	    				tooltip : "Selected Plot",
	    				value : null,
	    				noAps : true
	    			}
				}
			});
	    	
	    	this.componentInfo.title = "Location Intelligence Map";
	    	this.componentInfo.description = "A Location Intel Map is ???";
	    	this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgVJREFUeNqcU01vEkEYfmZmF+JWsECTViyQaGs9eNCYaPTkD/DimYNnEo8eOfsT7JkDP8CDv8GLMWliNWqKTSm0gHZBY6W78+E7Q9iCPclmdjP7zvs879czrNFovAJQw2LPtqe1rlWr1YXQzWaz5iml3M+L16eQv2Nwj2HYayFX3AAYLcboBeSPjyhX1pHxzzA2KTx/XITFJgTC5zBpAUYEnPY8JRzQfu6ttBF5XZTXPHBmoBmngxkCYwzEJQ9MUDTO4QUe/CXfZZASCjdXR+iMJQrLlCHZODcOM5fBqN+CUdqeQqQ9jAYtF30z26d9B5kACHvfHAFsAmv3JwRSSse2cuMWoA2sR3jwBfnKFnyK/vT6EJf9a2jttbGxue7KshwWY7EJQSn7E0ozDKKM60GQVnhS+oB8MMbn4694u/ce+3EegjKsFMq4c/XhOQGg8Cj3Bpn0EpaDK3hnTnB36whGR9hpf8LR8DgZndIaByeHRIBzgjM5xu7hrnMIUgFOQ0n/BfR/DSCVvDB/a/unBI3u/neYGadO2L0A7JCPdeJCwNyeIdBaIV/MUle1E06vHWK1lJsDT202iOBiksmUQGkqI5KIaSy2y+M4xp8omiOYtXESUlKCExINVpuJOGhR80ht2swRzNoM05OGToUU+Fk8e/Dyvy5SokS6jdv1en3h6/xXgAEArt0tznrHscwAAAAASUVORK5CYII=";
	    	this.componentInfo.topics.push({
	    		title : "Location Intelligence Map",
	    		content : "TODO"
	    	});
			/**
			 * Sets BIAL-level selected plot and fires onSelect event.
			 */
			this.setSelectedMarker = function(d){				
				if(!d.title) {
					this.selectedMarker("");
				}else{
					this.selectedMarker(d.title);	
				}
				this.firePropertiesChanged(["selectedMarker"]);
				this.fireEvent("onSelect");
			};
	    	/**
			 * Handle tooltip updates
			 */
			this.doTooltip = function(d) {
				if(that.showTooltips()){
					var html = "<span>";
					/*
			 		var mm = that.measureMember();
			 		if(!mm){
			 			if(that.flatData && that.flatData.columnHeaders && that.flatData.columnHeaders.length > 1) mm = that.flatData.columnHeaders[0];
			 		}
			 		var val = null;
			 		if(d.propertiees && d.designStudioMeasures && d.designStudioMeasures[mm]){
			 			val = d.designStudioMeasures[mm];
			 		}
			 		*/
		 			var tt = "";
		 				if(d.title){
			 				tt+="<b>" + d.title + "</b>";
			 			}
			 			if(d.designStudioMeasures){
			 				tt +="<br/><ul>"
			 				var dsm = d.designStudioMeasures;
			 				for(var measure in dsm){
			 					tt+="<li><b>" + measure + "</b>: " + that.formatter(dsm[measure]) + "</li>";
			 				}
			 				tt +="</ul>";
			 			}
			 		html+=tt;
			 		html+="</span>";
					//tip.show.call(this,d);
					//offsets for tooltips
					var offsetL = that.$()[0].offsetLeft+20;
					var offsetT = that.$()[0].offsetTop+10;
				    // Approach 1
					that.tooltip
						.classed("hidden", false)
						.html(html);
					// Follow Mouse approach
					if(that.tooltipPositioning()=="followmouse"){
						var mouse = d3.mouse(that.svg.node()).map( function(d) { return parseInt(d); } );
					    var x = mouse[0];
					    var y = mouse[1];
					    that.tooltip
					    	.attr("style", "left:"+(x + offsetL)+"px;top:"+(y + offsetT)+"px");
					}
					// Static Approach
					if(that.tooltipPositioning()=="static"){
					    var marginLeft = that.tooltipLeft();
					    var marginRight = that.tooltipRight();
					    var marginTop = that.tooltipTop();
					    var marginBottom = that.tooltipBottom();
					    // Cannot have opposing auto.
					    if(marginLeft.toLowerCase()=="auto" && marginRight.toLowerCase()=="auto") marginRight = "0px";
					    if(marginTop.toLowerCase()=="auto" && marginBottom.toLowerCase()=="auto") marginTop = "0px";
					    that.tooltip
					    	.style("left", marginLeft)
					    	.style("right", marginRight)
					    	.style("top", marginTop)
					    	.style("bottom", marginBottom);
					}
				}			
			}
			/**
			 * Update Scales
			 */
			this.updateScales = function(){
		        var d, domain;
		        this.bubbleSet = [0];
		        if(this.markerSizeMeasure()){
		        	var msObj = jQuery.parseJSON(this.markerSizeMeasure());
		        	var msm;
		        	if(typeof msObj == "object"){
						msm = this.determineMeasureName(msObj);
					}else{
						msm = msObj;			// Backwards compat
					}
		        	for(var i=0;i<this.plots.length;i++){
		        		var plot = this.plots[i];
		        		if(plot.designStudioMeasures && plot.designStudioMeasures[msm]){
		        			this.bubbleSet.push(plot.designStudioMeasures[msm]);
		        		}else{
		        			// No value
		        		}
		        	}
		        }
		        this.bubbleScale = d3.scale.linear()
					.range([this.markerMin(),this.markerMax()]);
		        this.bubbleScale.domain([d3.min(this.bubbleSet),d3.max(this.bubbleSet)]);
		        /*
		        // Make range with appropriate values
		        var cp = [];
				this.valuesSet.sort(function(a, b) { return a - b; });
		        if(this.colorPalette()!="") cp = this.colorPalette().split(",");
		        this.colorRange = d3.scale[this.colorScale()]()
		        	.domain(this.valuesSet)
		        	.range(cp);
		        // Clamp if can
		        if (typeof this.colorRange.clamp == 'function') {
		        	this.colorRange.clamp(true);
		        }
		        */
		        	
		        return this;
			};
	    	var parentUpdatePlot = this.updatePlot;
	    	this.updatePlot = function(){
	    		parentUpdatePlot.call(this);
	    		this.updateScales();
				var markers = this.markerGroup.selectAll('circle').data(this.plots);
				var newMarkers = markers.enter().append("circle")
					.attr("cx", function(d) { 
						var a = that.proj([d.longitude,d.latitude]);
						if(a && a.length && a.length>0) return a[0];
					})
					.attr("cy", function(d) { 
						var a = that.proj([d.longitude,d.latitude]);
						if(a && a.length && a.length>1) return a[1];
					})
					//.attr("transform", function(d) { return "translate(" + that.proj([d.longitude,d.latitude]) + ")"; })
					.attr("r", 0)
					.attr("opacity", this.markerAlpha()/100)
					.attr("fill", this.markerColor());
				var msObj = jQuery.parseJSON(this.markerSizeMeasure());
				var msm;
	        	if(typeof msObj == "object"){
					msm = this.determineMeasureName(msObj);
				}else{
					msm = msObj;			// Backwards compat
				}
				this.markerGroup.selectAll("circle")
					.transition().duration(this.ms())	
					.attr("r",function(d){
						if(d.designStudioMeasures){
							if(msm){
								if(d.designStudioMeasures[msm]){
									return that.bubbleScale(d.designStudioMeasures[msm])/that.zoomScale;
									// linear scale
								}else{
									return that.markerSize()/that.zoomScale;	
								}
								//that.colorRange(d.properties.designStudioMeasures[mm]) || that.defaultFillColor();
								//if(that.flatData && that.flatData.columnHeaders && that.flatData.columnHeaders.length > 0 && ) mm = that.flatData.columnHeaders[0];
							}else{
								return that.markerSize()/that.zoomScale;
							}
						}
						return that.markerSize()/that.zoomScale;
					})
					//.transition().duration(this.ms())
					.attr("cx", function(d) { 
						var a = that.proj([d.longitude,d.latitude]);
						if(a && a.length && a.length>0) return a[0];
					})
					.attr("cy", function(d) { 
						var a = that.proj([d.longitude,d.latitude]);
						if(a && a.length && a.length>1) return a[1];
					})
					//.attr("transform", function(d) { return "translate(" + that.proj([d.longitude,d.latitude]) + ")"; })
					.attr("opacity", this.markerAlpha()/100)
					.attr("fill", this.markerColor());
					//var bm = that.bubbleMember();
				
				this.markerGroup.selectAll("circle")
					.on('mousemove', this.doTooltip)
					.on('mouseout', function(d) {
						that.tooltip.classed("hidden",true);
					})
					.on('click', function(d){ 
						if(that.moved) {
							that.moved = false;
							return;
						}
					d3.select(this)
						.transition().duration(that.ms())
						.attr("fill",that.selectedColor());
					that.setSelectedMarker(d);
				});
				// Events
				 markers.exit().remove();
				 return this;
				 //alert("!");
	    	};
			var parentAfterUpdate = this.afterUpdate;
			this.afterUpdate = function(){
				this.plots = [];
				try{
					var that = this;
					if(this.flatData && this.flatData.dimensionHeaders){
						var dimHeaders = this.flatData.dimensionHeaders.slice();
						
						var latIndex = -1;
						var lngIndex = -1;
						var titleIndex = -1;
						for(var i=0;i<dimHeaders.length;i++){
							if(dimHeaders[i] == this.latitudeField()) latIndex = i;
							if(dimHeaders[i] == this.longitudeField()) lngIndex = i;
							if(dimHeaders[i] == this.markerTitle()) titleIndex = i;
						}
						if(latIndex != -1 && lngIndex !=-1){
							for(var i=0;i<this.flatData.rowHeaders2D.length;i++){
								var row = this.flatData.rowHeaders2D[i];
								var dsm = {};
								for(var j=0;j<this.flatData.columnHeaders.length;j++){
									dsm[this.flatData.columnHeaders[j]] = this.flatData.values[i][j];
								}
								this.plots.push({
									latitude : row[latIndex],
									longitude : row[lngIndex],
									title : row[titleIndex],
									designStudioMeasures : dsm
								})
							}
						}						
					}
				}catch(e){
					alert(e);
				}
				//this.applyMeasures(this._mapJSON,this.flatData);
				parentAfterUpdate.call(this);
			};
	    				
	    	var parentInit = this.init;
	    	this.init = function(){
	    		parentInit.call(this);
	    		this.$().addClass("LocationIntel");
	    		this.markerGroup = this.plotLayer.append('g')
					.attr('class', 'marker-group');
			    return this;
	    	}
	     }
	    	
		 LocationIntel.prototype.constructor = LocationIntel;
		 LocationIntel.prototype.toString = function(){
			 return ownComponentName;
		 }
		 Component.subclass(ownComponentName, LocationIntel);	// End of SDK
});// End of closure