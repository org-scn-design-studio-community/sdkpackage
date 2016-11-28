/**
 * MapEditor Handler
 */
var sharedPath = "../../org.scn.community.shared/os/"

require.config({
	paths : {
		lf : sharedPath + "leaflet"
	}
	
});
define([
        "css!../../org.scn.community.shared/os/leaflet/leaflet.css",
	    "lf/leaflet"
        ], function (css,L) {
	/**
	 * Create UI5 Extension
	 */
	sap.ui.commons.Panel.extend("org.scn.community.aps.LatLng", {
		needsLabel : function () {
			return false;
		},
		metadata : {
			properties : {
				"options" : {
					type : "object",
					defaultValue : {}
				},
				"value" : {
					type : "object",
					defaultValue : {}
				}
			},
			events : {
				valueChange : {}
			}
		},
		renderer : {},
		setValue : function (s) {
			sap.ui.core.Control.prototype.setProperty.apply(this, ["value", s]);
			if (this.map) this.updateMap();
			return this;
		},
		updateMap : function(){
			this.marker.setLatLng(this.getValue());
		},
		afterRenderHandler : function (oControlEvent) {
			try{
			var that = this;
			var myId = this.htmlArea.getId();
			var container = $("#" + myId);
			if(!this.map) {
				var osm = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
					minZoom: 0,
					maxZoom: 22,
					subdomains : "abc",
					attribution: "&copy; OpenStreetMap Contributors"
				});
				var ff = L.tileLayer("/aad/zen/mimes/sdk_include/org.scn.community.shared/os/tiles/standard/{z}/{x}/{y}.png", {
					minZoom: 0,
					maxZoom: 4,
					subdomains : "",
					attribution: "Using internal maps.  No internet connection needed."
				});
				this.map = new L.Map(container.get(0), {
					layers: [osm],
					center: this.getValue(),
					zoom: 1,
					attributionControl : false
				});
				this.marker = new L.marker(new L.LatLng(34.513299, -94.1628807));
				this.marker.setLatLng(this.getValue());
				this.marker.addTo(this.map);
				this.map.on("click",function(e){
					that.marker.setLatLng(e.latlng);
					that.setValue([e.latlng.lat, e.latlng.lng]);
					that.fireValueChange();
				});
				var attributionControl = new L.control.attribution({
					position : "bottomright",
		    		prefix : false
		    	});
				attributionControl.addTo(this.map);
				this._controlLayer = L.control.layers({"OpenStreetMap Standard":osm, "Firewall-Friendly" : ff },null,{ });
				this._controlLayer.addTo(this.map);				
			}
			}catch(e){
				alert("Error in latlng APS Control\n\n" + e);
			}
		},
		init : function () {
			var that = this;
			sap.ui.commons.Panel.prototype.init.apply(this, arguments);
			this.htmlArea = new sap.ui.core.HTML({
				preferDOM : true,
				//width : "400px",
				//height : "350px",
				content : "<div style='width:300px;height:300px;'></div>"
			});
			this.htmlArea.attachAfterRendering(this.afterRenderHandler, this);
			this.addContent(this.htmlArea);
		}
	});
	return {
		id : "latlng",
		setter : function (property, value) {
			var a = [];
			if(value && value!="") a = JSON.parse(value);
			this["cmp_" + property].setValue(a);
		},
		getter : function (property, control) {
			return JSON.stringify(control.getValue());
		},
		createComponent : function (property, propertyOptions, changeHandler) {
			var component = new org.scn.community.aps.LatLng({
				//width : "320px",
				//height : "320px",
				options : propertyOptions.apsConfig,
				showCollapseIcon : false,
				presets : propertyOptions.presets,
				text : propertyOptions.desc
			});
			component.attachValueChange(changeHandler, this);
			return component;
		}
	};
});
