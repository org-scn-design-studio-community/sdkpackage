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
			var myScriptSuffix = "res/Maps/";
			var myPluginSuffix = "org.scn.community.geovis/";
			var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
			var mainSDKPathIndex = myScript.indexOf(myPluginSuffix);
			var mainSDKPath = myScript.substring(0, mainSDKPathIndex);
			var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
			return {
				myScriptPath : ownScriptPath,
				mainSDKPath : mainSDKPath
			};
		}
		return "";
};
/** end of recognition of script path */
/**
 * Leaflet Wrapper
 */
sap.designstudio.sdk.Component.subclass("org.scn.community.geovis.Maps",function() {
	// Rework using Karol script path detection
	var pathInfo = _readScriptPath();
	this.sdkPfx = pathInfo.mainSDKPath;
	this.resPfx = pathInfo.mainSDKPath + "org.scn.community.geovis/";
	this._alive = false;
	this.batchLimit = 25;
	this._geoCache = {};
	// Property setter/getter functions	
    this.geoCodeCache = function(s){
    	if(s===undefined){
    		return JSON.stringify(this._geoCache);
    	}else{
    		if(!this._geoCache || s!=JSON.stringify(this._geoCache)){
    			this._geoCache = jQuery.parseJSON(s);
    		}
    		return this;
    	}
    };
	this.autoProperties = {
		// Blank for now.
    };
	/*
	 * Create the aforementioned getter/setter and attach to 'this'.
	 */
	for(var property in this.autoProperties){
		this[property] = function(property){
			return function(value){
				if(value===undefined){
					return this.autoProperties[property].value;
				}else{
					this.autoProperties[property].value = value;
					this.autoProperties[property].changed = true;
					return this;
				}
			};
		}(property);
	}
    this.loadCityLookup = function(){
    	if(!this.cityLookup){
			var geoDB = $.ajax({
	    		async : false,
	    		url : this.resPfx + "res/Maps/geo/citylookup.json"
	    	});
	    	this.cityLookup = jQuery.parseJSON(geoDB.responseText);
		}
    };
    this.loadRegionLookup = function(){
    	if(!this.regionLookup){
			var geoDB = $.ajax({
	    		async : false,
	    		url : this.resPfx + "res/Maps/geo/regionlookup.json"
	    	});
	    	this.regionLookup = jQuery.parseJSON(geoDB.responseText);
		}
    };
    // After Property Update
    this.afterUpdate = function(){
    	this.redraw();
    	return;
    	var redraw = false;
    	for(var property in this.autoProperties){
    		if(this.autoProperties[property].changed && this.autoProperties[property].redraw) redraw = true;
    	}
    	// Determine if a redraw is needed
    	if(redraw) this.redraw();
    	// Reset change flags
    	for(var property in this.autoProperties){
    		this.autoProperties[property].changed = false;
    	}
    };
    // Redraw HTML
    this.redraw = function(){
    	try{
	    	var that = this;
	    	// this.$().empty();
	    	// this.$().html("<div id='" + this.$().attr("id") + "_map'></div>");
	    	var latitude = 0;
	    	var longitude = 0;
	    	if(this.defaultLocation()){
	    		var latlng = jQuery.parseJSON(this.defaultLocation());
	    		if(latlng.length>0) latitude = latlng[0];		// Why do these flip??
	    		if(latlng.length>1) longitude = latlng[1];
	    	}else{
	    		
	    	}
	    	
	    	var tileConfig = {};
	    	var tilePattern = "";
	    	var tileJSONString = this.tileJSON();
	    	if(tileJSONString){
	    		tileConfig = jQuery.parseJSON(tileJSONString);
	    		// Special handling for relative URLs
	    		if(tileConfig.type=="internal") tileConfig.pattern = this.sdkPfx + tileConfig.pattern;
	    	}
	    	if(this._map) this._map.remove();
	    	this._map = new L.Map(this._mapContainer.get(0),{
	    		center : L.latLng(latitude,longitude),
	    		zoom : this.zoom(),
	    		//layers
	    		minZoom : tileConfig.options.minZoom,
	    		maxZoom : tileConfig.options.maxZoom,
	    		zoomControl : this.zoomControl(),
	    		attributionControl : false,
	    		//dragging
	    		//touchZoom
	    		//boxZoom
	    		//tap
	    		//tapTolerance	[1-15]
	    		//trackResize
	    		//worldCopyJump
	    		//closePopupOnClick
	    		//bounceAtZoomLimits
	    		maxBounds:[L.latLng(-85.0511,-180),
	    		        L.latLng(85.0511,180)
	    		]
	    	});
	    	var attributionControl = new L.control.attribution({
	    		prefix : false
	    	});
	    	attributionControl.addTo(this._map);
	    	var tileLayer = new L.TileLayer(tileConfig.pattern, tileConfig.options);
	    	this._map.addLayer(tileLayer);
    	}catch(e){
    		alert("Error during redraw:\n\n"+e);
    	}
    	var layerConf = [];
    	var layerConfString = this.layerConfig();
    	if(layerConfString && layerConfString != "") layerConf = jQuery.parseJSON(layerConfString);
    	for(var c=0;c<layerConf.length;c++){
    		var conf = layerConf[c];
    		// Marker Layer Types
    		if(conf.type=="markerLayer") this.renderMarkerLayer(conf);
    		if(conf.type=="heatLayer") this.renderMarkerLayer(conf);
    		if(conf.type=="clusterLayer") this.renderMarkerLayer(conf);
    		// Poly Layer Types
    		if(conf.type=="polyLayer") this.renderPolyLayer(conf);
		}
    };
    this.renderPolyLayer = function(conf){
    	var geoJSON = conf.strGeoJSON;
    	if(geoJSON) {
    		var o = jQuery.parseJSON(geoJSON);
    		//var layer = L.mapbox.featureLayer(o);
    		//layer.addTo(this._map);
    	}
    };
    this.data = function(o){
    	if(o===undefined){
    		return this._data;
    	}else{
    		this._data = o;
    		return this;
    	}
    }
    this.renderMarkerLayer = function(conf){
    	var m = this.data();
		var r = this.data();
		var geoCoderResults = [];
		var locations = [];
		var titles = [];
		var colors = [];
		// We will pre-fill cached arrays
		var cache = {
			geoCoderResults : [],
			locations : [],
			titles : [],
			colors : []
		};
		try{
			var geoH = conf.geoHierarchy;
			var strGeoHier = this.geoHierarchy();
			var hiers = [];
			if(strGeoHier && strGeoHier != "") hiers = jQuery.parseJSON(strGeoHier);
			var selectedHierarchy = {};
			if(hiers && hiers.length>0){
				for(var i=0;i<hiers.length;i++){
					if(geoH==hiers[i].id) selectedHierarchy = hiers[i];
				}
			}
			
			var titleIndex = org_scn_community_geovis.dimensionIndex(conf.markerTitleDim, m);
			var dynamicColorIndex = org_scn_community_geovis.dimensionIndex(conf.dynamicColorDim, m);
			
			var filters = {};
			if(conf.filters) filters = conf.filters;
			var filteredResults = {
				tuples : [],
				data : []
			};
			// First pass - Filter
			for(var i=0;i<r.tuples.length;i++){
				var tuple = r.tuples[i];
				var rowPass = true;
				for(var j=0;j<tuple.length;j++){
					var tupleDim = m.dimensions[j];
					var value = tupleDim.members[tuple[j]].key;
					var selectionMembers = [];
					if(filters[tupleDim.key]) selectionMembers = filters[tupleDim.key].selections;
					var pass=false;
					if(selectionMembers.length==0) pass = true;
					for(var k=0;k<selectionMembers.length;k++){
						if(selectionMembers[k]==value) pass = true;
					}
					if(!pass) rowPass = false;
				}
				// If tuple passed selection criteria, let it through.
				if(rowPass) {
					filteredResults.tuples.push(r.tuples[i]);
					filteredResults.data.push(r.data[i]);
					
				}
				
			}
			var leafletLocations = [];
			// Second pass - Geocode
			try{
				/*
				 * TODO: Use key caching
				 */
				var that = this;
				org_scn_community_geovis.getLatLngs({
					geoDimCity : selectedHierarchy.geoDimCity,
					geoDimRegion : selectedHierarchy.geoDimRegion,
					geoDimZip : selectedHierarchy.geoDimZip,
					geoDimCountry : selectedHierarchy.geoDimCountry,
					geoDimAddress : selectedHierarchy.geoDimAddress,
					manualCountry : selectedHierarchy.manualCountry,
					manualRegion : selectedHierarchy.manualRegion,
					metadata : m,
					results : filteredResults,
					// Callback for future async requests.
					callback : function(conf){return function(results){
						var markers = [];
						for(var j=0;j<results.solved.length;j++){
							var loc = results.solved[j];
							var markerConfig = {
								title : "Untitled",
								color : conf.markerColor,
								icon : conf.markerSymbol,
								latlng : loc.latlng,
								conf : conf
							}
							if(titleIndex) markerConfig.title = m.dimensions[titleIndex].members[loc.tuple[titleIndex]].text;//members[loc.tuple[titleIndex]].text;
							
							markers.push(markerConfig);
						}
						if(conf.type=="markerLayer") that.leafletMarkerLayer(markers);
						if(conf.type=="heatLayer") that.leafletHeatLayer(markers,conf);
						if(conf.type=="clusterLayer") that.leafletClusterLayer(markers,conf);
					};}(conf)
				});
			}catch(e){
				throw("Problem Component-side with getLatLngs\n"+e);
			}
			return;
			if(!title) title = "untitled";
			// Colors
			var markerColor = conf.markerColor;
			var dynamicColors = conf.dynamicPalette || "#1f77b4,#ff7f0e,#2ca02c,#d62728,#9467bd,#8c564b,#e377c2,#7f7f7f,#bcbd22,#17becf".toUpperCase().split(",");
			if(color!=undefined) markerColor = dynamicColors[color % dynamicColors.length];
			
			
			// See if we have this location in cache - Mapbox				
			if(this._geoCache && this._geoCache[locationstring]){
				cache.geoCoderResults.push(this._geoCache[locationstring]);
				cache.locations.push(locationstring);
				cache.titles.push(title);
				cache.colors.push(markerColor);
			}else{
				//alert("No cache for " + locationstring);
				// Location not in cache - add it to geocoder queue
				locations.push(locationstring);
				titles.push(title);				
				colors.push(markerColor);
				leafletLocations.push({
					title : title,
					color : markerColor,
					icon : conf.markerSymbol,
					latlng : latlng,
					conf : jQuery.parseJSON(JSON.stringify(conf))	// Lazy copy layer config
				});
			}
			
			if(conf.type=="markerLayer") this.leafletMarkerLayer(leafletLocations);
			if(conf.type=="heatLayer") this.leafletHeatLayer(leafletLocations,conf);
			if(conf.type=="clusterLayer") this.leafletClusterLayer(leafletLocations,conf);
		}catch(e){
			alert("GeoJSON error:\n\n"+ e);
		}
    };   
    this.leafletClusterLayer = function(locations,conf){
    	this._message.css({
    		display : "none"
    	});
    	var cluster = new L.MarkerClusterGroup();	
    	for(var i=0;i<locations.length;i++){
    		var location = locations[i];
    		if(location.latlng.length>1){
    			cluster.addLayer(new L.Marker(new L.LatLng(location.latlng[0],location.latlng[1])));
			}	
    	}
		this._map.addLayer(cluster);
    };
    this.leafletHeatLayer = function(locations,conf){
    	this._message.css({
    		display : "none"
    	});
		var colors = conf.colors || "";
		var ratios = conf.ratios || "";
		var r = [];
		var c = [];
		if(ratios && ratios!="") r = ratios.split(",");
		if(colors && colors!="") c = colors.split(",");
		var grad = {};
		var stop = 0.0;
		for(var i=0;i<c.length;i++){
			var g = r[i]/100;
			stop+=g;
			if(stop>1) stop = 1;
			grad[stop] = c[i];
		}
		if(c.length<1){
			grad = {".4":"blue",".6":"cyan",".7":"lime",".8":"yellow","1":"red"};
		}
		try{
    	var heat = L.heatLayer([],{
    		gradient : grad || {".4":"blue",".6":"cyan",".7":"lime",".8":"yellow","1":"red"},
    		radius : parseInt(conf.radius) || 25,
    		blur : parseInt(conf.blur) || 15	
    	}).addTo(this._map);
		}catch(e){
			alert("Bug in heat layer caught." + r.length+JSON.stringify(grad));
		}
    	for(var i=0;i<locations.length;i++){
    		var location = locations[i];
    		if(location.latlng.length>1){
    			heat.addLatLng(new L.LatLng(location.latlng[0],location.latlng[1]));
			}	
    	}
		
    	
    };
    this.leafletMarkerLayer = function(locations){
    	this._message.css({
    		display : "none"
    	});
    	var geoJSON = [];
    	for(var i=0;i<locations.length;i++){
    		var location = locations[i];
    		if(location.latlng.length>1){
    			var marker = new L.marker(location.latlng,{
    				icon : L.AwesomeMarkers.icon({
    					markerColor : location.color,
    					icon : location.icon,
    					iconSize : [location.conf.markerWidth || 32 , location.conf.markerHeight || 32],
    					anchorPosition : location.conf.anchorPosition || [.5,.5]
    				})
    			});
    			
    			marker.on('mouseover', function(loc){return function(evt) {
				  //evt.target is the marker that is being moused over 
				  //bindPopup() does not need to be called here if it was already called
				  //somewhere else for this marker.
				  evt.target.bindPopup(loc).openPopup();
				};}(location.title));
				/*
    			marker.on('click', function(evt) {
				  //again, evt.target will contain the marker that was clicked
				  console.log('you clicked a marker');
				});
				*/
				marker.addTo(this._map);
			}	
    	}
    };
    this.finalizeMarkerLayer = function(options){
    	/*	Example Point
    	 *  {
        	   type:"Feature",
        	   geometry:{
                 coordinates : [
                    -77.03865925788863, 38.93156715514535
                 ],
                 type:"Point"
              },
              properties:{
                 "description":"<a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.",
                 "id":"krhy93as",
                 "marker-color":"#AA0000",
                 "marker-size":"medium",
                 "marker-symbol":"shop",
                 "marker-zoom":"17",
                 "title":"Make it Mount Pleasant"
              }
           }
    	 * 
    	 */
    	this._message.css({
    		display : "none"
    	});
    	var geoJSON = [];
    	var cacheChange = 0;
    	// Start from cache
    	for(var i=0;i<options.cache.locations.length;i++){
    		var result = options.cache.geoCoderResults[i];
    		if(result.center){		// Check for Geometry
    			geoJSON.push(this.renderMarkerJSON({
    				result : result,
    				title : options.cache.titles[i],
    				color : options.cache.colors[i],
    				layerConfig : options.layerConfig
    			}));
    		}else{
    			// Blank geocoder query results.
    		}
    	}
    	// Finish with new lookups
    	for(var i=0;i<options.locations.length;i++){
    		var result = options.geoCoderResults[i];
    		// Cache the entry if it's new.
			if(!this._geoCache[options.locations[i]]){
				this._geoCache[options.locations[i]] = result;
				cacheChange++;
			}
    		if(result.center){
    			geoJSON.push(this.renderMarkerJSON({
    				result : result,
    				title : options.titles[i],
    				color : options.colors[i],
    				layerConfig : options.layerConfig
    			}));
    		}else{
    			// Blank geocoder query results.
    		}
    	}
    	if(cacheChange>0){
    		//alert(cacheChange + " new cache entries.");
    		this.firePropertiesChanged(["geoCodeCache"]);
    		// Fire Design Studio onclick event.
    		//this.fireEvent("onclick");
    	}
    	/*alert(cacheChange + " entries added to cache.\n\n"+
    			"Used " + options.cache.locations.length + " entries from cache.\n\n"+
    		"Used Mapbox for " + options.locations.length + " lookups.\n\n"+JSON.stringify(options.locations));
    		*/
    	
    	//var featureLayer = L.mapbox.featureLayer(geoJSON);
		//featureLayer.addTo(this._map);
    };
    
    this.renderMarkerJSON = function(options){
		var point = {
			type : "Feature",
			geometry : options.result.geometry,
    		properties : {
    			title : options.title,		// Account for chunking
    			description : options.result.place_name,				// Full Address
    			"marker-color" : options.color,
    			"marker-size" : "medium",						// Size
    			"marker-symbol" : options.layerConfig.markerSymbol || "marker"	// Marker Symbol
    		}
		};
		
		if(options.result.center){
			if(options.result.center[0] && options.result.center[1]){
				var marker = L.marker([options.result.center[1],options.result.center[0]]);
				marker.addTo(this._map);	
			}			
		}
		
		return point;
    };
    this.init = function() {
    	org_scn_community_geovis.resourcePrefix = this.resPfx;
    	org_scn_community_geovis.mode = "component";
    	try{
    	if(!this.locationsJSON){
	    	var geoDB = $.ajax({
	    		async : false,
	    		url : this.resPfx + "res/Maps/geo/world.json"
	    	});
	    	var worldJSON = jQuery.parseJSON(geoDB.responseText);
	    	this.locationsJSON = {};
	    	for(var country in worldJSON){
	    		this.locationsJSON[country] = {
	    			loaded : false,
	    			l : worldJSON[country],
	    			r : {}
	    		};
	    	}
	    	//this.locationsJSON = jQuery.parseJSON(geoDB.responseText);
    	}
		// Design Studio Utility Property Class
    	if (!this.propUtil)	this.propUtil = new AutoPropertyUtility({
    		properties : getDesignStudioProperties(),
    		componentRef : this
    	});
		this._mapContainer = $("<div/>");
		this._mapContainer.css({
			width : "100%",
			height : "100%"
		});
    	this._message = $("<div/>");
    	this._message.css({
			background : "#000000",
    		opacity : 0.7,
    		position : "absolute",
			top : 0,
			left : 0,
    		height : "100%",
    		width : "100%",
    		display : "none"
    		//z-index : 2
		});
		this.$().append(this._mapContainer);
    	this.$().append(this._message);
		// this.redraw();
		this._alive = true;
    	}catch(e){
    		alert("Error during component init:\n\n" + e);
    	}
	};
	this.getGeoCoderCacheAsString = function(){
		return JSON.stringify(this._geoCache);
	};
	/**
	 * Serialize SDK-Provided metadata as String
	 */
	this.getDataAsString = function() {
		return JSON.stringify(this._data);
	};
	this.getResultsAsString = function() {
		return "";
	};
});
})();



var LZString={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_f:String.fromCharCode,compressToBase64:function(e){if(e==null)return"";var t="";var n,r,i,s,o,u,a;var f=0;e=LZString.compress(e);while(f<e.length*2){if(f%2==0){n=e.charCodeAt(f/2)>>8;r=e.charCodeAt(f/2)&255;if(f/2+1<e.length)i=e.charCodeAt(f/2+1)>>8;else i=NaN}else{n=e.charCodeAt((f-1)/2)&255;if((f+1)/2<e.length){r=e.charCodeAt((f+1)/2)>>8;i=e.charCodeAt((f+1)/2)&255}else r=i=NaN}f+=3;s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+LZString._keyStr.charAt(s)+LZString._keyStr.charAt(o)+LZString._keyStr.charAt(u)+LZString._keyStr.charAt(a)}return t},decompressFromBase64:function(e){if(e==null)return"";var t="",n=0,r,i,s,o,u,a,f,l,c=0,h=LZString._f;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(c<e.length){u=LZString._keyStr.indexOf(e.charAt(c++));a=LZString._keyStr.indexOf(e.charAt(c++));f=LZString._keyStr.indexOf(e.charAt(c++));l=LZString._keyStr.indexOf(e.charAt(c++));i=u<<2|a>>4;s=(a&15)<<4|f>>2;o=(f&3)<<6|l;if(n%2==0){r=i<<8;if(f!=64){t+=h(r|s)}if(l!=64){r=o<<8}}else{t=t+h(r|i);if(f!=64){r=s<<8}if(l!=64){t+=h(r|o)}}n+=3}return LZString.decompress(t)},compressToUTF16:function(e){if(e==null)return"";var t="",n,r,i,s=0,o=LZString._f;e=LZString.compress(e);for(n=0;n<e.length;n++){r=e.charCodeAt(n);switch(s++){case 0:t+=o((r>>1)+32);i=(r&1)<<14;break;case 1:t+=o(i+(r>>2)+32);i=(r&3)<<13;break;case 2:t+=o(i+(r>>3)+32);i=(r&7)<<12;break;case 3:t+=o(i+(r>>4)+32);i=(r&15)<<11;break;case 4:t+=o(i+(r>>5)+32);i=(r&31)<<10;break;case 5:t+=o(i+(r>>6)+32);i=(r&63)<<9;break;case 6:t+=o(i+(r>>7)+32);i=(r&127)<<8;break;case 7:t+=o(i+(r>>8)+32);i=(r&255)<<7;break;case 8:t+=o(i+(r>>9)+32);i=(r&511)<<6;break;case 9:t+=o(i+(r>>10)+32);i=(r&1023)<<5;break;case 10:t+=o(i+(r>>11)+32);i=(r&2047)<<4;break;case 11:t+=o(i+(r>>12)+32);i=(r&4095)<<3;break;case 12:t+=o(i+(r>>13)+32);i=(r&8191)<<2;break;case 13:t+=o(i+(r>>14)+32);i=(r&16383)<<1;break;case 14:t+=o(i+(r>>15)+32,(r&32767)+32);s=0;break}}return t+o(i+32)},decompressFromUTF16:function(e){if(e==null)return"";var t="",n,r,i=0,s=0,o=LZString._f;while(s<e.length){r=e.charCodeAt(s)-32;switch(i++){case 0:n=r<<1;break;case 1:t+=o(n|r>>14);n=(r&16383)<<2;break;case 2:t+=o(n|r>>13);n=(r&8191)<<3;break;case 3:t+=o(n|r>>12);n=(r&4095)<<4;break;case 4:t+=o(n|r>>11);n=(r&2047)<<5;break;case 5:t+=o(n|r>>10);n=(r&1023)<<6;break;case 6:t+=o(n|r>>9);n=(r&511)<<7;break;case 7:t+=o(n|r>>8);n=(r&255)<<8;break;case 8:t+=o(n|r>>7);n=(r&127)<<9;break;case 9:t+=o(n|r>>6);n=(r&63)<<10;break;case 10:t+=o(n|r>>5);n=(r&31)<<11;break;case 11:t+=o(n|r>>4);n=(r&15)<<12;break;case 12:t+=o(n|r>>3);n=(r&7)<<13;break;case 13:t+=o(n|r>>2);n=(r&3)<<14;break;case 14:t+=o(n|r>>1);n=(r&1)<<15;break;case 15:t+=o(n|r);i=0;break}s++}return LZString.decompress(t)},compress:function(e){if(e==null)return"";var t,n,r={},i={},s="",o="",u="",a=2,f=3,l=2,c="",h=0,p=0,d,v=LZString._f;for(d=0;d<e.length;d+=1){s=e.charAt(d);if(!Object.prototype.hasOwnProperty.call(r,s)){r[s]=f++;i[s]=true}o=u+s;if(Object.prototype.hasOwnProperty.call(r,o)){u=o}else{if(Object.prototype.hasOwnProperty.call(i,u)){if(u.charCodeAt(0)<256){for(t=0;t<l;t++){h=h<<1;if(p==15){p=0;c+=v(h);h=0}else{p++}}n=u.charCodeAt(0);for(t=0;t<8;t++){h=h<<1|n&1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n>>1}}else{n=1;for(t=0;t<l;t++){h=h<<1|n;if(p==15){p=0;c+=v(h);h=0}else{p++}n=0}n=u.charCodeAt(0);for(t=0;t<16;t++){h=h<<1|n&1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n>>1}}a--;if(a==0){a=Math.pow(2,l);l++}delete i[u]}else{n=r[u];for(t=0;t<l;t++){h=h<<1|n&1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n>>1}}a--;if(a==0){a=Math.pow(2,l);l++}r[o]=f++;u=String(s)}}if(u!==""){if(Object.prototype.hasOwnProperty.call(i,u)){if(u.charCodeAt(0)<256){for(t=0;t<l;t++){h=h<<1;if(p==15){p=0;c+=v(h);h=0}else{p++}}n=u.charCodeAt(0);for(t=0;t<8;t++){h=h<<1|n&1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n>>1}}else{n=1;for(t=0;t<l;t++){h=h<<1|n;if(p==15){p=0;c+=v(h);h=0}else{p++}n=0}n=u.charCodeAt(0);for(t=0;t<16;t++){h=h<<1|n&1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n>>1}}a--;if(a==0){a=Math.pow(2,l);l++}delete i[u]}else{n=r[u];for(t=0;t<l;t++){h=h<<1|n&1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n>>1}}a--;if(a==0){a=Math.pow(2,l);l++}}n=2;for(t=0;t<l;t++){h=h<<1|n&1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n>>1}while(true){h=h<<1;if(p==15){c+=v(h);break}else p++}return c},decompress:function(e){if(e==null)return"";if(e=="")return null;var t=[],n,r=4,i=4,s=3,o="",u="",a,f,l,c,h,p,d,v=LZString._f,m={string:e,val:e.charCodeAt(0),position:32768,index:1};for(a=0;a<3;a+=1){t[a]=a}l=0;h=Math.pow(2,2);p=1;while(p!=h){c=m.val&m.position;m.position>>=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c>0?1:0)*p;p<<=1}switch(n=l){case 0:l=0;h=Math.pow(2,8);p=1;while(p!=h){c=m.val&m.position;m.position>>=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c>0?1:0)*p;p<<=1}d=v(l);break;case 1:l=0;h=Math.pow(2,16);p=1;while(p!=h){c=m.val&m.position;m.position>>=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c>0?1:0)*p;p<<=1}d=v(l);break;case 2:return""}t[3]=d;f=u=d;while(true){if(m.index>m.string.length){return""}l=0;h=Math.pow(2,s);p=1;while(p!=h){c=m.val&m.position;m.position>>=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c>0?1:0)*p;p<<=1}switch(d=l){case 0:l=0;h=Math.pow(2,8);p=1;while(p!=h){c=m.val&m.position;m.position>>=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c>0?1:0)*p;p<<=1}t[i++]=v(l);d=i-1;r--;break;case 1:l=0;h=Math.pow(2,16);p=1;while(p!=h){c=m.val&m.position;m.position>>=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c>0?1:0)*p;p<<=1}t[i++]=v(l);d=i-1;r--;break;case 2:return u}if(r==0){r=Math.pow(2,s);s++}if(t[d]){o=t[d]}else{if(d===i){o=f+f.charAt(0)}else{return null}}u+=o;t[i++]=f+o.charAt(0);r--;f=o;if(r==0){r=Math.pow(2,s);s++}}}};if(typeof module!=="undefined"&&module!=null){module.exports=LZString}
;



/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var dateFormat = function () {
	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};