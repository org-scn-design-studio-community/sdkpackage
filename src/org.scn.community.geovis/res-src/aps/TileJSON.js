/*
 * GeoLayers
 */
sap.ui.commons.Panel.extend("org.scn.community.aps.TileJSON",{
	metadata : {                             
        properties : {
        	value : {
        		type : "string",
        		defaultValue : "{}",
        	}
        },
	    events : {
	    	valueChange : {}
	    }
	 },
	 setValue : function(s){
		 if(s && s!="" && s!=JSON.stringify(this._value)){
			this._value = jQuery.parseJSON(s);
			this.renderComp();
		 }
	 },
	 getValue : function(){
		 return JSON.stringify(this._value);
	 },
	 renderExternalTileProps : function(){
		 var lblPattern = new sap.ui.commons.TextView({
			text : "Tile Server URL Pattern" 
		 });
		 var lblSubdomains = new sap.ui.commons.TextView({
			text : "Sub-Domains (Comma-Seperated)" 
		 });
		 var lblAttribution = new sap.ui.commons.TextView({
			text : "Attribution (Check terms of service for external map providers for appropriate attribution, where applicable)" 
		 });
		 var lblMinZoom = new sap.ui.commons.TextView({
			text : "Min Zoom (0-22)" 
		 });
		 var lblMaxZoom = new sap.ui.commons.TextView({
			text : "Max Zoom (0-22)" 
		 });
		 var txtPattern = new sap.ui.commons.TextField({
			value : this._value.pattern,
			width : "100%"
		 });
		 var txtSubdomains = new sap.ui.commons.TextField({
			value : (this._value.options.subdomains)?this._value.options.subdomains.join(","):"",
			width : "100%"
		 });
		 var txtAttribution = new sap.ui.commons.TextField({
			value : this._value.options.attribution,
			width : "100%"
		 });
		 var spnMinZoom = new org.scn.community.aps.Spinner({
			value : this._value.options.minZoom	|| 0,
			min : 0,
			max : 22
		 });
		 var spnMaxZoom = new org.scn.community.aps.Spinner({
			value : this._value.options.maxZoom	|| 22,
			min : 0,
			max : 22
		 });
		 var that = this;
		 var changeHandler = function(controls){
			 return function(oCC){
				 that._value.options = that._value.options || {};
				 that._value.pattern = controls.patternControl.getValue();
				 that._value.options.subdomains = controls.subdomainControl.getValue().split(",");
				 that._value.options.attribution = controls.attributionControl.getValue();
				 that._value.options.minZoom = controls.minZoomControl.getValue();
				 that._value.options.maxZoom = controls.maxZoomControl.getValue();
				 that.fireValueChange();
			 };
		 }({
			patternControl : txtPattern,
			subdomainControl : txtSubdomains,
			attributionControl : txtAttribution,
			minZoomControl : spnMinZoom,
			maxZoomControl : spnMaxZoom
		 });
		 this.tileJSONProps.addContent(lblPattern);
		 this.tileJSONProps.addContent(txtPattern);
		 this.tileJSONProps.addContent(lblSubdomains);
		 this.tileJSONProps.addContent(txtSubdomains);
		 this.tileJSONProps.addContent(lblAttribution);
		 this.tileJSONProps.addContent(txtAttribution);
		 this.tileJSONProps.addContent(lblMinZoom);
		 this.tileJSONProps.addContent(spnMinZoom);
		 this.tileJSONProps.addContent(lblMaxZoom);
		 this.tileJSONProps.addContent(spnMaxZoom);
		 
		 txtPattern.attachChange(changeHandler);
		 txtAttribution.attachChange(changeHandler);
		 txtSubdomains.attachChange(changeHandler);
		 spnMinZoom.attachValueChange(changeHandler);
		 spnMaxZoom.attachValueChange(changeHandler); 
	 },
	 renderComp : function(){
		 this.tileJSONProps.destroyContent();
		 var type = this._value.type;
		 switch(type){
		 	case "internal":
		 		this.tileJSONProps.addContent(new sap.ui.commons.TextView({
		 			text : this._value.description
		 		}));
		 		break;
		 	case "external":
		 		this.renderExternalTileProps();
		 }
	 },
	init : function(){
		sap.ui.commons.Panel.prototype.init.apply(this,arguments);
		var that = this;
		this._value = {
			pattern : "http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png",
			options : {
				maxZoom: 18,         
				subdomains: ['1','2','3','4']
			}
		};
		this.vLayout = new sap.ui.commons.layout.VerticalLayout({width:"100%"});
		this.listOptions = new sap.ui.commons.layout.HorizontalLayout({	});
		this.tileJSONProps = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		var that = this;
		this.addButton = new sap.ui.commons.MenuButton({ 
			text : "Pick...",
			menu : new sap.ui.commons.Menu({
				items :[
					new sap.ui.commons.MenuItem({
						text : "External Map Examples",
						submenu : new sap.ui.commons.Menu({
							items : [
								new sap.ui.commons.MenuItem({
									text : "MapQuest Open",
									select : function(){
										that._value = {
											pattern : "http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png",
											type : "external",
											options : {
												attribution : "<p>Tiles Courtesy of <a href='http://www.mapquest.com/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png'></p>",
												maxZoom: 18,         
												subdomains: ['1','2','3','4']
											}
										};
										that.renderComp();
										that.fireValueChange();
									}
								}),
								new sap.ui.commons.MenuItem({
									text : "MapQuest Open - Satellite",
									select : function(){
										that._value = {
											pattern : "http://otile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png",
											type : "external",
											options : {
												attribution : "<p>Tiles Courtesy of <a href='http://www.mapquest.com/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png'> Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency</p>",
												maxZoom: 18,         
												subdomains: ['1','2','3','4']
											}
										};
										that.renderComp();
										that.fireValueChange();
									}
								}),
								new sap.ui.commons.MenuItem({
									text : "OpenStreetMap",
									select : function(){
										that._value = {
											pattern : "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
											type : "external",
											options : {
												attribution : "(c) OpenStreetMap contributors",
												maxZoom: 18,         
												subdomains: ['a','b']
											}
										};
										that.renderComp();
										that.fireValueChange();
									}
								}),
								new sap.ui.commons.MenuItem({
									text : "OpenStreetMap - Cycling",
									select : function(){
										that._value = {
											pattern : "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
											type : "external",
											options : {
												attribution : "(c) OpenStreetMap contributors",
												maxZoom: 18,         
												subdomains: ['a','b']
											}
										};
										that.renderComp();
										that.fireValueChange();
									}
								}),
								new sap.ui.commons.MenuItem({
									text : "MapBox",
									select : function(){
										that._value = {
											pattern : "http://{s}.tiles.mapbox.com/v4/examples.map-zr0njcqy/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXJjaGl1cyIsImEiOiItTmhiUkJnIn0.yibqVMulj5i0dR_sClqoCg",
											type : "external",
											options : {
												attribution : "<a href='https://www.mapbox.com/about/maps/' target='_blank'>&copy; Mapbox &copy; OpenStreetMap</a> <a class='mapbox-improve-map' href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a>",
												minZoom : 0,
												maxZoom : 22,         
												subdomains: ['a','b']
											}
										};
										that.renderComp();
										that.fireValueChange();
									}
								}),
								//
								//
								new sap.ui.commons.MenuItem({
									text : "ESRI",
									select : function(){
										that._value = {
											pattern : "http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
											type : "external",
											options : {
												attribution :  [
									                'Esri, FAO, NOAA, AAFC, NRCan'
									            ].join(""),
												minZoom : 0,
												maxZoom : 22
											}
										};
										that.renderComp();
										that.fireValueChange();
									}
								}),
								new sap.ui.commons.MenuItem({
									text : "Nokia HERE",
									select : function(){
										that._value = {
											pattern : "http://{s}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg",
											type : "external",
											options : {
												attribution :  [
												    "&copy; 2013 Nokia</span>&nbsp;<a href='http://maps.nokia.com/services/terms' target='_blank' ",
												    "title='Terms of Use' style='color:#333;text-decoration: underline;'>Terms of Use</a></div> ",
												    "<img src='http://api.maps.nokia.com/2.2.4/assets/ovi/mapsapi/by_here.png' border='0'>"
									            ].join(""),
									            subdomains: ['1','2','3','4'],
												minZoom : 0,
												maxZoom : 20
											}
										};
										that.renderComp();
										that.fireValueChange();
									}
								}),
								new sap.ui.commons.MenuItem({
									text : "Stamen - Watercolor",
									select : function(){
										that._value = {
											pattern : "http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png",
											type : "external",
											options : {
												attribution :  [
												                'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ',
												                'under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. ',
												                'Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, ',
												                'under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
												            ].join(""),
												minZoom : 0,
												maxZoom : 17,         
												subdomains: ['a','b']
											}
										};
										that.renderComp();
										that.fireValueChange();
									}
								}),
								new sap.ui.commons.MenuItem({
									text : "Stamen - Toner",
									select : function(){
										that._value = {
											pattern : "http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png",
											type : "external",
											options : {
												attribution :  [
												                'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ',
												                'under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. ',
												                'Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, ',
												                'under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
												            ].join(""),
												minZoom : 0,
												maxZoom : 20,         
												subdomains: ['a','b']
											}
										};
										that.renderComp();
										that.fireValueChange();
									}
								}),
								new sap.ui.commons.MenuItem({
									text : "Stamen - Terrain",
									select : function(){
										that._value = {
											pattern : "http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png",
											type : "external",
											options : {
												attribution :  [
												                'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ',
												                'under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. ',
												                'Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, ',
												                'under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
												            ].join(""),
												minZoom : 0,
												maxZoom : 18,
												subdomains: ['a','b']
											}
										};
										that.renderComp();
										that.fireValueChange();
									}
								}),
								new sap.ui.commons.MenuItem({
									text : "Stamen - MapStack",
									select : function(){
										that._value = {
											pattern : "http://{s}.sm.mapstack.stamen.com/(toner-lite,$fff[difference],$000[@40],$fff[hsl-saturation@40],$5999a6[hsl-color],buildings[destination-out])[hsl-saturation@90]/{z}/{x}/{y}.png",
											type : "external",
											options : {
												attribution :  [
												                'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ',
												                'under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. ',
												                'Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, ',
												                'under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
												            ].join(""),
												minZoom : 0,
												maxZoom : 18,
												subdomains: ['a','b']
											}
										};
										that.renderComp();
										that.fireValueChange();
									}
								})
						    ]
						})
					}),
					new sap.ui.commons.MenuItem({
						text : "Internal Maps",
						submenu : new sap.ui.commons.Menu({
							items : [
								new sap.ui.commons.MenuItem({
									text : "Simple Map [0-4]",
									select : function(){
										that._value = {
											pattern : "org.scn.community.geovis/res/Maps/tiles/simple/{z}/{x}/{y}.png",
											type : "internal",
											description : "Small sized starter map.  Requires no map pack install.  No usage restrictions or attribution required and no external tile resources are needed.  Zoom up to level 4 supported.",
											options : {
												maxZoom: 4
											}
										};
										that.renderComp();
										that.fireValueChange();
									}
								}),
								new sap.ui.commons.MenuItem({
									text : "Simple Terrain [0-4]",
									select : function(){
										that._value = {
											pattern : "org.scn.community.geovis/res/Maps/tiles/terrain/{z}/{x}/{y}.jpg",
											type : "internal",
											description : "Small sized terrain map.  Requires no map pack install.  No usage restrictions or attribution required and no external tile resources are needed.  Zoom up to level 4 supported.",
											options : {
												maxZoom: 4
											}
										};
										that.renderComp();
										that.fireValueChange();
									}
								}),
								new sap.ui.commons.MenuItem({
									text : "Standard Map [0-7]",
									select : function(){
										that._value = {
											pattern : "org.scn.community.geovispack.standard/res/StandardMapPack/tiles/{z}/{x}/{y}.png",
											type : "internal",
											description : "(SDK Map Pack Required) Standard Map with common features such as countries, regions, and major urban population features.  Includes major US roadways.  Zoom up to level 7 supported.  No attribution or external resources needed.",
											options : {
												maxZoom: 7
											}
										};
										that.renderComp();
										that.fireValueChange();
									}
								}),
								new sap.ui.commons.MenuItem({
									text : "Terrain Map [0-7]",
									select : function(){
										that._value = {
											pattern : "org.scn.community.geovispack.terrain/res/TerrainMapPack/tiles/{z}/{x}/{y}.jpg",
											description : "(SDK Map Pack Required) Terrain Map with common features such as countries, regions, and major urban population features.  Includes major US roadways.  Zoom up to level 5 supported.  No attribution or external resources needed.",
											type : "internal",
											options : {
												maxZoom: 7
											}
										};
										that.renderComp();
										that.fireValueChange();
									}
								})
						    ]
						})
					})
				]
			})
		});
		this.listOptions.addContent(this.addButton);
		this.addContent(this.vLayout);
		this.vLayout.addContent(this.listOptions);
		this.vLayout.addContent(this.tileJSONProps);
	},
	renderer : {}
});
