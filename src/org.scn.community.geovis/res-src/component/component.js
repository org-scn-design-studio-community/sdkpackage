/**
 * Leaflet Wrapper
 */
sap.designstudio.sdk.Component.subclass("org.scn.community.geovis.Maps",function() {
	// Rework using Karol script path detection
	this.resPfx = "/aad/zen/mimes/sdk_include";
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
	    		url : this.resPfx + "/org.scn.community.geovis/res/Maps/geo/citylookup.json"
	    	});
	    	this.cityLookup = jQuery.parseJSON(geoDB.responseText);
		}
    };
    this.loadRegionLookup = function(){
    	if(!this.regionLookup){
			var geoDB = $.ajax({
	    		async : false,
	    		url : this.resPfx + "/org.scn.community.geovis/res/Maps/geo/regionlookup.json"
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
	    		if(tileConfig.type=="internal") tileConfig.pattern = this.resPfx + tileConfig.pattern;
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
			var geoIndexAddress = org_scn_community_geovis.dimensionIndex(selectedHierarchy.geoDimAddress, m);
			var geoIndexCity = org_scn_community_geovis.dimensionIndex(selectedHierarchy.geoDimCity, m);
			var geoIndexZip = org_scn_community_geovis.dimensionIndex(selectedHierarchy.geoDimZip, m);
			var geoIndexRegion = org_scn_community_geovis.dimensionIndex(selectedHierarchy.geoDimRegion, m);
			var geoIndexCountry = org_scn_community_geovis.dimensionIndex(selectedHierarchy.geoDimCountry, m);
			var titleIndex = org_scn_community_geovis.dimensionIndex(conf.markerTitleDim, m);
			var dynamicColorIndex = org_scn_community_geovis.dimensionIndex(conf.dynamicColorDim, m);
			
			var highest="none";
			if(geoIndexAddress) highest = "address";
			if(geoIndexZip) highest = "zip";
			if(geoIndexCity) highest = "city";
			if(geoIndexRegion) highest = "region";
			if(geoIndexCountry) highest = "country";


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
			for(var i=0;i<filteredResults.tuples.length;i++){
				var address = undefined, city=undefined, region=undefined, zip=undefined, country=undefined, title=undefined, color=undefined;
				var locbuilder = []; 
				var tuple = filteredResults.tuples[i];
				for(var j=0;j<tuple.length;j++){
					var tupleDim = m.dimensions[j];
					var value = tupleDim.members[tuple[j]].key;
					if(j==geoIndexAddress) address = value.toLowerCase();
					if(j==geoIndexCity) city = value.toLowerCase().replace(/[;#\/]/g,"");
					if(j==geoIndexZip) zip = value.toLowerCase();
					if(j==geoIndexRegion) region = value.toLowerCase().replace(/[;#\/]/g,"");
					if(j==geoIndexCountry) country = value.toLowerCase().replace(/[;#\/]/g,"");
					if(j==titleIndex) title = value;
					if(j==dynamicColorIndex) color = tuple[j];
				}
				if(zip){
					var za = zip.split("-");
					zip=za[0];
				}
				// Local Lat/Lng
				var latlng = [];
				if(city && !country && !region){
					this.loadCityLookup();
					var c = this.cityLookup[city];
					// Take first one because who knows?
					if(c){
						//alert(JSON.stringify(c));
						region = c[0].r.toLowerCase();
						country = c[0].cy.toLowerCase();;
					}
					
				}
				if(city && country && !region){
					if(!this.cityLookup){
						var geoDB = $.ajax({
				    		async : false,
				    		url : this.resPfx + "/org.scn.community.geovis/res/Maps/geo/citylookup.json"
				    	});
				    	this.cityLookup = jQuery.parseJSON(geoDB.responseText);
					}
					var c = this.cityLookup[city];
					if(c){
						for(var j=0;j<c.length;j++){
							if(c[j].cy.toLowerCase()==country) {
								region = c[j].r.toLowerCase();
							}
						}
					}
					
				}
				if(city && !country && region){
					if(!this.cityLookup){
						var geoDB = $.ajax({
				    		async : false,
				    		url : this.resPfx + "/org.scn.community.geovis/res/Maps/geo/citylookup.json"
				    	});
				    	this.cityLookup = jQuery.parseJSON(geoDB.responseText);
					}
					var c = this.cityLookup[city];
					if(c) {
						for(var j=0;j<c.length;j++){
							if(c[j].r.toLowerCase()==region) {
								country = c[j].cy.toLowerCase();
							}
						}
					}					
				}
				if(region && !country && !city){
					this.loadRegionLookup();
					var c = this.regionLookup[region];
					if(c && c.length>0) {
						country = c[0].toLowerCase();
					}
				}
				// Walk the lat/lng hierarchy
				if(country && this.locationsJSON[country]){
					if(!this.locationsJSON[country].loaded){	// On Demand Loading
						var countryDB = $.ajax({
				    		async : false,
				    		url : this.resPfx + "/org.scn.community.geovis/res/Maps/geo/world/" + country + ".json"
				    	});
				    	var countryJSON = jQuery.parseJSON(countryDB.responseText);
				    	for(var region in countryJSON){
				    		this.locationsJSON[country].r[region] = {
				    			loaded : false,
				    			l : countryJSON[region],
				    			c : {}
				    		};
				    	}
				    	this.locationsJSON[country].loaded = true;
					}
					latlng = this.locationsJSON[country].l;
					if(region && this.locationsJSON[country].r[region]){
						if(!this.locationsJSON[country].r[region].loaded){	// On Demand Loading
							var regionDB = $.ajax({
					    		async : false,
					    		url : this.resPfx + "/org.scn.community.geovis/res/Maps/geo/world/" + country + "/" + region +".json"
					    	});
							this.locationsJSON[country].r[region] = jQuery.parseJSON(regionDB.responseText);
							this.locationsJSON[country].r[region].loaded = true;
						}
						latlng = this.locationsJSON[country].r[region].l;
						if(city && this.locationsJSON[country].r[region].c[city]){
							latlng = this.locationsJSON[country].r[region].c[city].l;
							if(zip && this.locationsJSON[country].r[region].c[city].z[zip]){
								latlng = this.locationsJSON[country].r[region].c[city].z[zip];
							}
						}
					}
				}
				if(address) locbuilder.push(address);
				if(city) locbuilder.push(city);
				if(region) locbuilder.push(region);
				if(zip) locbuilder.push(zip);
				if(country) locbuilder.push(country);
				// Locations
				var locationstring = locbuilder.join(" ");
				locationstring = locationstring.toLowerCase().replace(/[;#\/]/g,"");				// Cleanse special characters
				//locationstring = locationstring.toLowerCase().replace(/[-]/g," ");					// Replace - with space
				// Titles
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
			alert(r.length+JSON.stringify(grad));
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
    	try{
    	if(!this.locationsJSON){
	    	var geoDB = $.ajax({
	    		async : false,
	    		url : this.resPfx + "/org.scn.community.geovis/res/Maps/geo/world.json"
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
		// Design Studio ComponentProperty Object
    	var cProps = new ComponentProperties({ componentRef : this });
		// Design Studio Utility Property Class
    	if (!this.propUtil)	this.propUtil = new propUtility(cProps.properties, this);
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