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
	// Reworked using modified Karol script path detection code.
	var pathInfo = _readScriptPath();
	this.sdkPfx = pathInfo.mainSDKPath;
	this.resPfx = pathInfo.mainSDKPath + "org.scn.community.geovis/";
	this._alive = false;
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
		// Decorator Pattern
		conf.titleIndex = org_scn_community_geovis.dimensionIndex(conf.markerTitleDim, m);
		conf.dynamicColorIndex = org_scn_community_geovis.dimensionIndex(conf.dynamicColorDim, m);
		
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
		// Second pass - Geocode
		try{
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
				conf : conf,
				// Callback for future async requests.
				callback : this.geocodeComplete,
				scope : this
			},conf);
		}catch(e){
			throw("Problem Component-side with getLatLngs\n"+e);
		}
    };
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
				tuple : geocodeResults.solved[j].tuple.slice()
			}
			if(layerConfig.titleIndex) markerConfig.title = this.data().dimensions[layerConfig.titleIndex].members[loc.tuple[layerConfig.titleIndex]].text;
			markers.push(markerConfig);
		}
    	return markers;
    };
    this.geocodeComplete = function(results, conf){
		if(conf.type=="markerLayer") this.leafletMarkerLayer(results, conf);
		if(conf.type=="heatLayer") this.leafletHeatLayer(results, conf);
		if(conf.type=="clusterLayer") this.leafletClusterLayer(results, conf);
	};
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
    this.leafletMarkerLayer = function(geocodeResults, layerConfig){
    	var markers = this.buildMarkerBaseline(geocodeResults, layerConfig);
    	var dynamicPalette = layerConfig.dynamicPalette || "#1f77b4,#ff7f0e,#2ca02c,#d62728".toUpperCase().split(",");
    	var geoJSON = [];
    	   	for(var i=0;i<markers.length;i++){
    		var marker = markers[i];
    		if(marker.latlng.length>1){
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
    	org_scn_community_geovis.resourcePrefix = this.resPfx;
    	org_scn_community_geovis.mode = "component";
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
		return JSON.stringify(this._data);
	};
	this.getResultsAsString = function() {
		return "";
	};
});
})()