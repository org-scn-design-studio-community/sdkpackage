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
	var ownComponentName = "org.scn.community.geovis.Maps";
	var _readScriptPath = function () {
		var scriptInfo = org_scn_community_basics.readOwnScriptAccess(myScript, ownComponentName);
		return scriptInfo;
};
/** end of recognition of script path */
/**
 * Leaflet Wrapper
 */
sap.designstudio.sdk.Component.subclass(ownComponentName,function() {
	// Reworked using modified Karol script path detection code.
	var pathInfo = _readScriptPath();
	this.sdkPfx = pathInfo.mainSDKPath;
	this.resPfx = pathInfo.mainSDKPath + "org.scn.community.geovis/";
	this.lookupPfx = pathInfo.mainSDKPath + "org.scn.community.geovispack.standard/";
	this._alive = false;
	/*
	 * Fires after any Design Studio Property Change
	 */
    this.afterUpdate = function(){
    	this.redraw();		// Always redraw for now.
    };
    /*
     * Redraws entire Leaflet Container
     */
    this.redraw = function(){
    	try{
	    	var that = this;
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
    	// TODO: Poly Layers
    	var geoJSON = conf.strGeoJSON;
    	if(geoJSON) {
    		var o = jQuery.parseJSON(geoJSON);
    		//var layer = L.mapbox.featureLayer(o);
    		//layer.addTo(this._map);
    	}
    };
    this.renderMarkerLayer = function(layerConfig){
    	var d = this.data();
    	// Decorator Pattern
		layerConfig.titleIndex = this.localGeocoder.dimensionIndex(layerConfig.markerTitleDim, d);
		layerConfig.dynamicColorIndex = this.localGeocoder.dimensionIndex(layerConfig.dynamicColorDim, d);

		// Find what Geohierarchy we are working with.
		var selectedHierarchy = {};
		var geoHiers = [];
		var geoHierID = layerConfig.geoHierarchy;	// Key ID
		var strGeoHier = this.geoHierarchy();	// Serialized JSON
		if(strGeoHier && strGeoHier != "") geoHiers = jQuery.parseJSON(strGeoHier);
		if(geoHiers && geoHiers.length>0){
			for(var i=0;i<geoHiers.length;i++){
				if(geoHiers[i].id == geoHierID) selectedHierarchy = geoHiers[i];
			}
		}
		// First pass - Filter
		var filters = {};
		if(layerConfig.filters) filters = layerConfig.filters;
		var filteredResults = {
			tuples : [],
			data : []
		};
		for(var i=0;i<d.tuples.length;i++){
			var tuple = d.tuples[i];
			var rowPass = true;
			for(var j=0;j<tuple.length;j++){
				var tupleDim = d.dimensions[j];
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
				filteredResults.tuples.push(d.tuples[i]);
				filteredResults.data.push(d.data[i]);
				
			}
			
		}
		// Second pass - Geocode
		var geoCoderAdapter = null;
		if(selectedHierarchy.geoCoder == "local"){
			geoCoderAdapter = this.localGeocoder;
		}
		if(selectedHierarchy.geoCoder == "mapbox"){
			geoCoderAdapter = new org_scn_geocode_mapbox({
				apiKey : selectedHierarchy.apiKey
			});
		}
		if(selectedHierarchy.geoCoder == "esri"){
			geoCoderAdapter = new org_scn_geocode_esri({
				apiKey : selectedHierarchy.apiKey
			});
		}
		try{
			geoCoderAdapter.getLatLngs({
				geoDimCity : selectedHierarchy.geoDimCity,
				geoDimRegion : selectedHierarchy.geoDimRegion,
				geoDimZip : selectedHierarchy.geoDimZip,
				geoDimCountry : selectedHierarchy.geoDimCountry,
				geoDimAddress : selectedHierarchy.geoDimAddress,
				manualCountry : selectedHierarchy.manualCountry,
				manualRegion : selectedHierarchy.manualRegion,
				metadata : d,
				results : filteredResults,
				conf : layerConfig,
				// Callback for future async requests.
				callback : this.geocodeComplete,
				scope : this
			},layerConfig);
		}catch(e){
			throw("Problem Component-side with getLatLngs\n"+e);
		}
    };
    /**
     * Callback function for after geocoding is completed.
     */
    this.geocodeComplete = function(results, layerConfig){
		if(layerConfig.type=="markerLayer") this.leafletMarkerLayer(results, layerConfig);
		if(layerConfig.type=="heatLayer") this.leafletHeatLayer(results, layerConfig);
		if(layerConfig.type=="clusterLayer") this.leafletClusterLayer(results, layerConfig);
	};
	/**
	 * Baseline Marker Configuration Build
	 */
    this.buildMarkerBaseline = function(geocodeResults, layerConfig){
    	var markers = [];
    	for(var j=0;j<geocodeResults.solved.length;j++){
			var loc = geocodeResults.solved[j];
			var markerConfig = {
				title : "Untitled",
				color : layerConfig.markerColor,
				icon : layerConfig.markerSymbol,
				latlng : loc.latlng,
				conf : layerConfig,
				tuple : loc.tuple.slice()
			}
			if(layerConfig.titleIndex) markerConfig.title = this.data().dimensions[layerConfig.titleIndex].members[loc.tuple[layerConfig.titleIndex]].text;
			if(loc.latlng && loc.latlng.length>1) markers.push(markerConfig);
		}
    	return markers;
    };
    /**
     * Leaflet Cluster Layer
     */
    this.leafletClusterLayer = function(geocodeResults, layerConfig){
    	var markers = this.buildMarkerBaseline(geocodeResults, layerConfig);
    	var cluster = new L.MarkerClusterGroup();
    	for(var i=0;i<markers.length;i++){
    		var marker = markers[i];
    		if(marker.latlng.length>1){
    			cluster.addLayer(new L.Marker(new L.LatLng(marker.latlng[0],marker.latlng[1])));
			}	
    	}
		this._map.addLayer(cluster);
    };
    /**
     * Leaflet Heat Layer
     */
    this.leafletHeatLayer = function(geocodeResults, layerConfig){
    	var markers = this.buildMarkerBaseline(geocodeResults, layerConfig);
		var colors = layerConfig.colors || "";
		var ratios = layerConfig.ratios || "";
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
    		radius : parseInt(layerConfig.radius) || 25,
    		blur : parseInt(layerConfig.blur) || 15	
    	}).addTo(this._map);
		}catch(e){
			alert("Bug in heat layer caught." + r.length+JSON.stringify(grad));
		}
    	for(var i=0;i<markers.length;i++){
    		var marker = markers[i];
    		if(marker.latlng.length>1){
    			heat.addLatLng(new L.LatLng(marker.latlng[0],marker.latlng[1]));
			}	
    	}
    };
    /**
     * Leaflet Marker Layer
     */
    this.leafletMarkerLayer = function(geocodeResults, layerConfig){
    	var markers = this.buildMarkerBaseline(geocodeResults, layerConfig);
    	var dynamicPalette = layerConfig.dynamicPalette || "#1f77b4,#ff7f0e,#2ca02c,#d62728".toUpperCase().split(",");
    	var geoJSON = [];
    	   	for(var i=0;i<markers.length;i++){
    		var marker = markers[i];
    		if(marker.latlng && marker.latlng.length>1){
    			var markerColor = marker.color;		// Default.
    			if(layerConfig.dynamicColorIndex) {
    				var color = marker.tuple[layerConfig.dynamicColorIndex];
    				markerColor = dynamicPalette[color % dynamicPalette.length]
    			}
    			//if()
    			var Lmarker = new L.marker(marker.latlng,{
    				icon : L.SCNDesignStudioMarkers.icon({
    					markerColor : markerColor,
    					icon : marker.icon,
    					iconSize : [layerConfig.markerWidth || 32 , layerConfig.markerHeight || 32],
    					anchorPosition : layerConfig.anchorPosition || [.5,.5]
    				})
    			});
    			
    			Lmarker.on('mouseover', function(loc){return function(evt) {
				  //evt.target is the marker that is being moused over 
				  //bindPopup() does not need to be called here if it was already called
				  //somewhere else for this marker.
				  evt.target.bindPopup(loc).openPopup();
				};}(marker.title));
				/*
    			marker.on('click', function(evt) {
				  //again, evt.target will contain the marker that was clicked
				  console.log('you clicked a marker');
				});
				*/
				Lmarker.addTo(this._map);
			}	
    	}
    };
    /**
     * Fires on component creation or static width or height change.
     */
    this.init = function() {
    	// Configure shared geovis to work.
    	this.localGeocoder = new org_scn_geocode_local();
    	this.localGeocoder.resourcePrefix = this.lookupPfx;
    	this.localGeocoder.mode = "component";
    	// Pull in world JSON geodata.  Moved this out of component.
    	try{
    		if(!this.locationsJSON){
		    	var geoDB = $.ajax({
		    		async : false,
		    		url : this.lookupPfx + "res/geo/world.json"
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
    		}
    	}catch(e){
    		this.locationsJSON = {};
    		this.localMissing = true;
    		//alert("Local Geocoder DB files not found.  Load Standard Map Pack." + e);
    	}
    		// Design Studio Utility Property Class
	    	if (!this.propUtil)	this.propUtil = new AutoPropertyUtility({
	    		properties : getDesignStudioProperties(),
	    		componentRef : this
	    	});
	    	// Create Map Container DIV
	    	this._mapContainer = $("<div/>");
			this._mapContainer.css({
				width : "100%",
				height : "100%"
			});
	    	this.$().append(this._mapContainer);
	    	/*
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
	    	this.$().append(this._message);
	    	*/
	    	// this.redraw();
	    	this._alive = true;
	};
	this.getGeoCoderCacheAsString = function(){
		return JSON.stringify(this._geoCache);
	};
	/**
	 * Serialize SDK-Provided metadata as String
	 */
	this.getDataAsString = function() {
		return JSON.stringify(this.data());
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