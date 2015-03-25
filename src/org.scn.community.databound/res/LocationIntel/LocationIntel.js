(function() {
	 var myScript = $("script:last")[0].src;
	 var ownComponentName = "org.scn.community.databound.LocationIntel";
	 var _readScriptPath = function () {
		 var scriptInfo = org_scn_community_basics.readOwnScriptAccess(myScript, ownComponentName);
		 return scriptInfo;
	 };
	 /** end of recognition of script path */
	 /** RequireJS Config **/
	 var pathInfo = _readScriptPath();
	 sap.zen.Dispatcher.instance.pauseDispatching();
	 var sdkReqs = require.config({
		 context : "sdk",
		 paths: {
			d3 :		pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3.min",
			d3tip :		pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3-tip",
			topojson : 	pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/topojson.v1.min",
			"d3-geo-projection" : 	pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3.geo.projection"
		 }
	 });
	 sdkReqs(["require","d3","d3tip","topojson","d3-geo-projection"], function(require,d3,d3tip,topojson,d3geoproj) {
		 LocationIntel.prototype = org_scn_community_databound_Map;
		 LocationIntel.prototype.constructor = LocationIntel;
		 LocationIntel.prototype.toString = function(){
	    	 return ownComponentName;
	     }
	     function LocationIntel() {
	    	 var that = this;
	    	// Call super
	    	org_scn_community_databound_Map.call(this, d3,topojson,{
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
						apsControl : "text"
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
	    	var parentUpdatePlot = this.updatePlot;
	    	this.updatePlot = function(){
	    		parentUpdatePlot.call(this);
				var markers = this.markerGroup.selectAll('circle').data(this.plots);
				var newMarkers = markers.enter().append("circle")
					.attr("cx", function(d) { return that.proj([d.longitude,d.latitude])[0]; })
					.attr("cy", function(d) { return that.proj([d.longitude,d.latitude])[1]; })
					//.attr("transform", function(d) { return "translate(" + that.proj([d.longitude,d.latitude]) + ")"; })
					.attr("r", 0)
					.attr("opacity", this.markerAlpha()/100)
					.attr("fill", this.markerColor());

				this.markerGroup.selectAll("circle")
					.attr("r", this.markerSize()/this.zoomScale)
					.transition().duration(this.ms())
					.attr("cx", function(d) { return that.proj([d.longitude,d.latitude])[0]; })
					.attr("cy", function(d) { return that.proj([d.longitude,d.latitude])[1]; })
					//.attr("transform", function(d) { return "translate(" + that.proj([d.longitude,d.latitude]) + ")"; })
					.attr("opacity", this.markerAlpha()/100)
					.attr("fill", this.markerColor());
					//var bm = that.bubbleMember();
				
				this.markerGroup.selectAll("circle")
					.on('mousemove', this.doTooltip)
					.on('mouseout', function(d) {
						that.tooltip.classed("hidden",true);
					});
				 markers.exit().remove();
				 return this;
				 //alert("!");
	    	};
			var parentAfterUpdate = this.afterUpdate;
			this.afterUpdate = function(){
				try{
					var that = this;
				var dimHeaders = this.flatData.dimensionHeaders.slice();
				this.plots = [];
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
							dsm[this.flatData.columnHeaders[j]] = this.flatData.values[j];
						}
						this.plots.push({
							latitude : row[latIndex],
							longitude : row[lngIndex],
							title : row[titleIndex],
							designStudioMeasures : dsm
						})
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
	    	
		sap.designstudio.sdk.Component.subclass(ownComponentName, LocationIntel);	// End of SDK
		sap.zen.Dispatcher.instance.resumeDispatching();
	 });//End of Require Callback 	
})();// End of closure