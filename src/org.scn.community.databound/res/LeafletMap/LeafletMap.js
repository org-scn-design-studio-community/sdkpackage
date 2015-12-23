/**
 * CC BY-NC-SA License
 * LeafletMap by Mike Howles is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 * Based on a work at http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/LeafletMap
 *
 */
require.config({
	paths : {
		"leaflet-markers" : "../" + sap.zen.createStaticSdkMimeUrl("org.scn.community.shared","") + "os/leaflet-plugins/scn-markers/leaflet.scn-designstudio-markers",
		"leaflet" : "../" + sap.zen.createStaticSdkMimeUrl("org.scn.community.shared","") + "os/leaflet/leaflet"
	}
});
define(["css!./../../../org.scn.community.shared/os/leaflet/leaflet.css",
        "css!./../../../org.scn.community.shared/os/leaflet-plugins/scn-markers/leaflet.scn-designstudio-markers.css",
		"leaflet",
		"./../../../org.scn.community.shared/os/viz-modules/VizCoreDatabound",
		"sap/designstudio/sdk/component",
		"leaflet-markers"],
	function (Lcss, Lmarkercss, L, VizCoreDatabound, Component) {
	var ownComponentName = "org.scn.community.databound.LeafletMap";
	/**
	 * LeafletMap
	 */
	LeafletMap.prototype = VizCoreDatabound;
	function LeafletMap() {
		var that = this;
		// Call super
		VizCoreDatabound.call(this, {
			tileOptions : {
				opts : {
					desc : "Tile Options",
					cat : "General",
					apsControl : "tileconfig"
				}
			},
			markers : {
				opts : {
					desc : "Markers",
					cat : "Items",
					keyField : "key",
					apsControl : "complexcollection",
					apsConfig : {
						key : {
							desc : "Key",
							defaultValue : "SOME_KEY",
							apsControl : "text",
							key : true
						},
						latitude : {
							desc : "Latitude",
							defaultValue : 51.505,
							apsControl : "text"
						},
						longitude : {
							desc : "Longitude",
							defaultValue : -0.09,
							apsControl : "text"
						},
						marker : {
							desc : "Marker Type",
							defaultValue : "marker",
							apsControl : "combobox",
							options : [{
									key : "marker",
									text : "Marker"
								}, {
									key : "circle",
									text : "Circle"
								}
							]
						}
					}
				}
			}
		});
		this.componentInfo.title = "Leaflet Map";
		this.componentInfo.description = "Leaflet Map Description";
		this.componentInfo.author = "Mike Howles";
		this.componentInfo.icon = "data:image/png;base64,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";
		this.componentInfo.topics.splice(1, 0, {
			title : "Leaflet Map License",
			content : '<a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAPCAIAAAD8q9/YAAABqklEQVRIx+WWMU8CMRTH3wewxRvZoGp0IpJOhDhwdMP1JhLHY3DSwU4kxAHYMIGlX+Gc1MXA4AQhpPEb8BX6FWq05Dyhd3Ju573ccGnea+/3/u+9K0AOTefGvoEfn4Lo07nuAMBwOLSGMcYwxhMxNs6r91XhsJAJXe3AEzHGGMfRhsynZ6fGf/o27fV6GQauX9TL5XJybUgpAaB91TYhS7lsXbayCowwMvJKKQkhAMAYU0oxxgCAECKlNCJXaTWs6tHDyDoXtg/7+W5djEZZnRNOSfC3A3fvuwAwm8201oQQz/O01vzLHMdRSgkhgiAwiwijsKrni7l1962XuA/azY41WXE5SucfBb69uwEAKaVSKjq3PM+jlEarmnOOMTZRL6/Pi9UiIfdWGeMg41Kzu+euvAkip1CYMeb7vlGYcy6E2CiMUiickHtrGf+q2FbsHxX+7GG06eEgCBzHAQDf98MeppSu12utdbPZrJxX9uzh/YH37+G4MZEauFavlUqlHE3piRgjdDAYDBKAXdc9Pjn6J//hcHT1+30rbcNtFIvFbN+08nWXzpV9AD9ivwErgn5oAAAAAElFTkSuQmCC" /></a>' +
			'<br /><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">LeafletMap</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Mike Howles</span> is licensed under a <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" target="_blank" href="http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/LeafletMap" rel="dct:source">sdkpackage repository on Github</a>.'
		});

		/**
		 * Fires after property change.
		 */
		this.afterUpdate = function () {
			this.updateMap();
		};
		this.updateMap = function () {
			var tileOptions = {
				baseUrl : "http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png",
				subdomains : "12"
			};
			var markers = [];
			var sTileOptions = this.tileOptions();
			var sMarkers = this.markers();
			if (sTileOptions && sTileOptions != "") tileOptions = JSON.parse(sTileOptions);
			if (sMarkers && sMarkers != "") markers = JSON.parse(sMarkers);
			// Ensure right data types.
			// if(tileOptions.minZoom) tileOptions.minZoom = parseInt(tileOptions.minZoom);
			// if(tileOptions.maxZoom) tileOptions.maxZoom = parseInt(tileOptions.maxZoom);

			if (this._layer) this._map.removeLayer(this._layer);
			if (this._markerLayer) this._map.removeLayer(this._markerLayer);
			this._layer = L.tileLayer(tileOptions.baseUrl, tileOptions);
			this._markerLayer = L.featureGroup();
			for(var i=0;i<markers.length;i++){
				var marker = markers[i];
				// alert([marker.latitude, marker.longitude]);
				var Lmarker = new L.marker([marker.latitude, marker.longitude],{
					icon : L.SCNDesignStudioMarkers.icon({
						markerColor : "#009966",
						icon : marker.marker,
						iconSize : [32 , 32],
						anchorPosition : [.5,1]		// .5, .5 for circle
					})
				});
				Lmarker.addTo(this._markerLayer);
			}
			this._layer.addTo(this._map);
			this._markerLayer.addTo(this._map);
			try{
				this._map.fitBounds(this._markerLayer.getBounds(),{
					paddingTopLeft : [15,15]
				});
			}catch(e){
				
			}
			
		};
		var parentInit = this.init;
		this.init = function () {
			parentInit.call(this);
			// Create Map Container DIV
			this._mapContainer = $("<div/>");
			this._mapContainer.css({
				width : "100%",
				height : "100%"
			});
			this.$().append(this._mapContainer);
			this._map = new L.Map(this._mapContainer.get(0), {});
			this._map.setView([51.505, -0.09], 3);
			this.updateMap();
		};
	}
	LeafletMap.prototype.constructor = LeafletMap;
	LeafletMap.prototype.toString = function () {
		return ownComponentName;
	}
	Component.subclass(ownComponentName, LeafletMap); // End of SDK
});
