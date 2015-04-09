/** code for recognition of script path */
(function() {
	var myScript = $("script:last")[0].src;
	var ownComponentName = "org.scn.community.geovis.Maps";
	var _readScriptPath = function () {
		var scriptInfo = org_scn_community_basics.readOwnScriptAccess(myScript, ownComponentName);
		return scriptInfo.myScriptPath;
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
    	this.localGeocoder.resourcePrefix = this.resPfx;
    	this.localGeocoder.mode = "component";
    	// Pull in world JSON geodata.  Perhaps move this out of component to local geocoder.
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
		return JSON.stringify(this.data());
	};
});
})()