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
			
		},
		afterRenderHandler : function (oControlEvent) {
			try{
			var that = this;
			var myId = this.htmlArea.getId();
			var container = $("#" + myId);
			if(!this.map) {
				var osm = L.tileLayer("http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png", {
					minZoom: 0,
					maxZoom: 22,
					subdomains : "12",
					attribution: "&copy; Open StreetMap Contributors | Tiles Courtesy of MapQuest"
				});
				var sat = L.tileLayer("http://otile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png", {
					minZoom: 0,
					maxZoom: 22,
					subdomains : "12",
					attribution: "&copy; Open StreetMap Contributors | Tiles Courtesy of MapQuest"
				});
				this.map = new L.Map(container.get(0), {
					layers: [osm],
					center: new L.LatLng(34.513299, -94.1628807),
					zoom: 1,
					attributionControl : false
				});
				this.map.on("click",function(e){
					that.setValue([e.latlng.lat, e.latlng.lng]);
					that.fireValueChange();
				});
				var attributionControl = new L.control.attribution({
					position : "bottomright",
		    		prefix : false
		    	});
				attributionControl.addTo(this.map);
				this._controlLayer = L.control.layers({"Standard":osm, "Satellite" : sat },null,{ });
				this._controlLayer.addTo(this.map);				
			}
			}catch(e){
				alert(e);
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
