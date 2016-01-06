/**
 * Layer Editor Handler
 */
define(["../../org.scn.community.shared/os/d3v3/d3",
        "../../org.scn.community.shared/os/d3v3/topojson.v1",
        "./complexitem","./segmentedbutton","./mapeditor","./text-presets"], function (d3, topojson) {
	/**
	 * Create UI5 Extension
	 */
	org.scn.community.aps.ComplexItem.extend("org.scn.community.aps.LayerEditor", {
		needsLabel : function () {
			return false;
		},
		metadata : {},
		/*
		 * Overrides parent
		 */
		hLabel : function (label, component, tt) {
			if (component instanceof org.scn.community.aps.ColorBuilder) {
				return component;
			} else {
				var hLayout = new sap.ui.commons.layout.HorizontalLayout({})
					//hLayout.addStyleClass("MeasureSelectorLayout");
					hLayout.addContent(new sap.ui.commons.Label({
						text : label,
						tooltip : tt,
						width : "100px"
					}));
				hLayout.addContent(component);
				return hLayout;
			}
		},
		_config : {},
		setValue : function (value) {
			var deltas = ["mapType","url","geoJSON"];
			var oldValues = [];
			for (var i = 0; i < deltas.length; i++) {
				oldValues.push(this.getValue()[deltas[i]]);
			}
			org.scn.community.aps.ComplexItem.prototype.setValue.apply(this, arguments);
			var changed = false;
			for (var i = 0; i < deltas.length; i++) {
				if (oldValues[i] != this.getValue()[deltas[i]])
					changed = true;
			}
			if (changed) {
				this.makeLayout();
				this.layoutComponents();
			}
		},
		modulesLoaded : function(){
			this.makeLayout();
			this.layoutComponents();
			//this.updateFeaturePropertiesList(this.determineFeatureProperties({},this.processMap(this.getValue().geoJSON)));
		},
		createComponents : function () {
			try {
				this._props = {
					mapType : {
						opts : {
							apsControl : "segmentedbutton",
							desc : "Map Type",
							options : [
							    {key : "url", text : "By URL"},
							    {key : "custom", text : "Custom"}
							],
							afterCreate : function(component){
								
							}
						}
					},
					url : {
						opts : {
							desc : "URL",
							apsControl : "text-presets",
							presetsIndex : "os/maps/presets.json"
						}
					},
					featureKey : {
						opts : {
							desc : "Feature Key",
							apsControl : "combobox",
							afterCreate : function(component){
								component.setDisplaySecondaryValues(true);
							}
						}
					},
					geoJSON : {
						opts : {
							desc : "Custom GeoJSON",
							apsControl : "mapeditor"
						}
					}
				};
			} catch (e) {
				alert(e);
			}
		},
		makeLayout : function () {
			this.layout = [];
			this.layout.push({
				desc : "Map Type",
				comp : "mapType"
			});
			this.layout.push({
				desc : "Key Feature",
				comp : "featureKey",
				tooltip : "Feature to use as a key to match a map feature to your data."
			});
			if (this.getValue().mapType == "url"){
				this.layout.push({
					desc : "URL",
					comp : "url"
				});
				var url = this.getValue().url;
				// http://localhost:9091/aad/zen.rt.components.geomaps/resources/js/geo/countries_medium.json
				// {ds-maps}/countries_medium.json
				url = url.replace(/{os-maps}/g, "/aad/zen/mimes/sdk_include/org.scn.community.shared/os/maps");
				url = url.replace(/{ds-maps}/g, "/aad/zen.rt.components.geomaps/resources/js/geo");
				var that = this;
				$.ajax({
					dataType : "json",
					url : url,
					success : function(){return function(data){
						that.updateFeaturePropertiesList(that.determineFeatureProperties({},that.processMap(data)));
					};}(),
					error : function(jqxhr, textStatus, error){
						alert(error);
					}
				});
			}
			if (this.getValue().mapType == "custom"){
				this.layout.push({
					desc : "Custom Map",
					comp : "geoJSON"
				});
			}
		},
		processMap : function(geoJSON){
			try{
				var mapdata = geoJSON;
				if (geoJSON && geoJSON.type && geoJSON.type.toLowerCase() === 'topology' && typeof topojson != 'undefined') {
					for (var o in geoJSON.objects) {
						if (geoJSON.objects.hasOwnProperty(o)) {
							obj = geoJSON.objects[o];
							break;
						}
					}
					mapdata = topojson.feature(geoJSON, geoJSON.objects[o]);
				}
				return mapdata;
			}catch(e){
				alert("Error processing map data: \n\n" + e);
			}
		},
		updateFeaturePropertiesList : function(p){
			if(this.checkLoadState()){
				this["cmp_featureKey"].destroyItems();
				for(var field in p){
					var newItem = new sap.ui.core.ListItem({
						key : field,
						text : field,
						additionalText : p[field].sample
					});
					this["cmp_featureKey"].addItem(newItem);
				}
			}
		},
		determineFeatureProperties : function(p,o){
			if(o && o.properties){
				for(var field in o.properties){
					if(!p[field]){
						p[field]={
							count : 0,
							sample : o.properties[field]
						};
					}
					p[field].count++;
				}
			}
			if(o && o.features){
				for(var i=0;i<o.features.length;i++){
					this.determineFeatureProperties(p,o.features[i]);					
				}
			}
			return p;
		},
		renderer : {}
	});
	return {
		id : "layereditor",
		serialized : true,
		setter : function (property, value) {
			var newValue = jQuery.parseJSON(value);
			this["cmp_" + property].setValue(newValue);
		},
		getter : function (property, control) {
			var arrayValue = control.getValue();
			newValue = JSON.stringify(arrayValue);
			return newValue;
		},
		createComponent : function (property, propertyOptions, changeHandler) {
			var component = new org.scn.community.aps.LayerEditor({
				width : "100%",
				title : new sap.ui.commons.Title({
					text : propertyOptions.desc
				}),
				showCollapseIcon : false
			});
			component.attachValueChange(changeHandler, this);
			return component;
		}
	};
});