/**
 * Copyright 2014 - 2015 SCN Community Contributors
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
 */;
 /** code for recognition of script path */
 (function() {
	 var myScript = $("script:last")[0].src;
 	_readScriptPath = function () {
 		if(myScript) {
 			var myScriptSuffix = "res/Choropleth/";
 			var myPluginSuffix = "org.scn.community.geovis/";
 			var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 			var mainSDKPathIndex = myScript.indexOf(myPluginSuffix);
 			var mainSDKPath = myScript.substring(0, mainSDKPathIndex);
 			var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 			return {
 				myScriptPath : ownScriptPath,	// http://localhost:9091/aad/zen/mimes/sdk_include/org.scn.community.geovis/res/Choropleth/
 				mainSDKPath : mainSDKPath		// http://localhost:9091/aad/zen/mimes/sdk_include/
 			};
 		}
 		return "";
 };
 /** end of recognition of script path */
 /** RequireJS Config **/
 var pathInfo = _readScriptPath();
 sap.zen.Dispatcher.instance.pauseDispatching();
 var sdkReqs = require.config({
	 context : "sdk",
	 paths: {
		d3:  pathInfo.mainSDKPath + "org.scn.community.geovis/os/d3/d3.min",
		topojson : pathInfo.mainSDKPath + "org.scn.community.geovis/os/d3/topojson",
		simplemaps : pathInfo.mainSDKPath + "org.scn.community.geovis/os/d3.plugins/simple-map-d3"
	},
	shim : {
		d3 : {
			// exports : "d3"
		},
		topojson : {
			deps : ["d3"],
			exports : "topojson"
		},
		simplemaps : {
			deps : ["d3","topojson"]
		}
	}
 });
 sdkReqs(["require","d3","topojson"], function(require, d3, topojson) {
	 require(["simplemaps"],function(){
		 //alert("loader: " + d3.version);
		 /**
		  * Choropleth Map
		  */
		 sap.designstudio.sdk.Component.subclass("org.scn.community.geovis.Choropleth",function() {
			_features = {};
			this.mapCache = {};
			this.props = {
				projection : { value : "equirectangular" },
				colorOn :  { value : true },
				tooltipOn :  { value : true },
				legendOn :  { value : true },
				legendWidth :  { value : 0 },
				graticuleOn :  { value : true },
				legendScale :  { value : 1 },
				legendTitle :  { value : "Legend Title" },
				canvasDragOn :  { value : true },
				mapDragOn :  { value : false },
				colorSet : { value : "Spectral" },
				colorReverse :  { value : false },
				colorProperty :  { value : "POP2005" },
				colorScale : { value : "quantile" },
				
				map : { value : "countries" },
				externalMap : { value : "http://code.minnpost.com/simple-map-d3/example-data/europe-population-density-geocommons.geo.json" },
				center : { value : "0,0" },
				scale : { value : 150 },
				rotationX : { value : 0.0 },
				rotationY : { value : 0.0 },
				rotationZ : { value : 0.0 },
				selectedFeature : { value : "x"}
			};
			/*
			 * Create the aforementioned getter/setter and attach to 'this'.
			 */
			for(var property in this.props){
				this[property] = function(property){
					return function(value){
						if(value===undefined){
							return this.props[property].value;
						}else{
							this.props[property].value = value;
							this.props[property].changed = true;
							return this;
						}
					};
				}(property);
			}
			/**
			 * @param value Design Studio ResultSet JSON Structure
			 * @return If value is undefined, returns data, else returns reference to itself.
			 */
			this.data = function(value) {
				if (value === undefined) {
					return _data;
				} else {
					_data = value;
					return this;
				}
			};
			 this.setSelectedFeature = function(o){
				//this.selectedFeature(JSON.stringify(o));
				this.firePropertiesChanged(["selectedFeature"]);
				this.fireEvent("onSelect");
			};
			this.redraw = function(){
				var that = this;
				this.$().empty();
		    	this.$().css("overflow","hidden");
		    	var width = this.$().width();
		    	var height = this.$().height();
		    	//alert("mapping" + d3.version);
		    	try{
		    		var map = new SimpleMapD3({
			    		sdkComponent : this,
			    		d3Object : d3,
			    	    container: '#' + this.$().attr("id"),
			    	    data : this.loadMap(this.map()),
			    	    projection: this.projection(),
			    	    rotation: [this.rotationX(), this.rotationY(), this.rotationZ()],
			    	    colorSet: this.colorSet(),
			    	    colorScale: this.colorScale(),
			    	    colorOn: this.colorOn(),
			    	    graticuleOn: this.graticuleOn(),
			    	    tooltipOn: this.tooltipOn(),
			    	    legendOn: this.legendOn(),
			    	    legendTitle: this.legendTitle(),
			    	    legendWidth: this.legendWidth(),
			    	    legendScale: this.legendScale(),
			    	    colorProperty: this.colorProperty(),
			    	    colorReverse: this.colorReverse(),
			    	    canvasDragOn: this.canvasDragOn(),
			    	    tooltipContent: function(d) {
			    	      /*var p = d.properties;
			    	      return '<h5>' + p.country + '</h5>' +
			    	        p.population + ' population per square kilometer';
			    	        */
			    	    }
			    	});	
		    	}catch(e){
		    		this.$().html(e);
		    	}
		    	
			};
			this.loadMap = function(mapFile){
				var mapURL = pathInfo.myScriptPath + 'maps/' + mapFile + ".json";
				if(mapFile=="external") {
					mapFile = this.externalMap();
					mapURL = this.externalMap();
				}
				if(this.mapCache[mapURL]) return this.mapCache[mapURL].features;
				this.mapCache[mapURL] = {
					fileName : mapFile,
					features : {}
				}
				try{
					var featureJSON = $.ajax({
						async : false,
						type : "GET",
						url : mapURL
					}).responseText;
					//alert(featureJSON);
					this.mapCache[mapURL].features = jQuery.parseJSON(featureJSON);
				}catch(e){
					throw("Error loading map:\n\nFile:" + mapURL + "\n\n" + e);
				}
				return this.mapCache[mapURL].features;
			}
			this.init = function() {
				try{
					this.redraw();
				}catch(e){
					alert("Error in init:\n\n" + e);
				}
			};
			
			this.afterUpdate = function() {
				var flatData;
				var vals = [];
				this.redraw();
				return;
				try{
					flatData = org_scn_community_databound.flatten(this.data(),{});
					if(flatData && flatData.formattedValues && flatData.formattedValues.length > 0) {
						vals = flatData.formattedValues.slice();
					}else if(flatData && flatData.values && flatData.values.length > 0){
						vals = flatData.values.slice();
					}else{
						// Something happened.
						throw("No formatted or unformatted values found.");
					}
				}catch(e){
					var errorMessage = e;
					if(e && e.indexOf("Incomplete data given.")>-1) errorMessage = "Incomplete data.  Try assigning a datasource.";
					if(!flatData) flatData = {
						columnHeaders : ["Error"],
						rowHeaders : [errorMessage]
					};
					vals = [[]];
				}
				
			};
		 });
		 // End of SDK
		 sap.zen.Dispatcher.instance.resumeDispatching(); 
	 });
	 // End of simple-map callback
 });
 // End of Require d3+topo Callback
})();
 // End of closure