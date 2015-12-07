define(["../os/d3v3/d3.min","../os/d3v3/topojson.v1.min"],function(d3,topojson){
	/**
	 * Create Map Downloader Extension
	 */
	sap.ui.commons.Panel.extend("org.scn.community.aps.MapDownloader",{
		_mapData : "",
		_attrData : [],
		metadata : {                             
	        properties : {
	        	mapData : {
					type : "string",
					defaultValue : ""
	        	},
	        	showRatios : {
	        		type : "boolean",
	        		defaultValue : false
	        	},
	        	propSheet : {}
	        },
		    events : {
		    	mapDataChange : {}
		    }
		 },
		 setMapData : function(s){
			if(s!=this._mapData){
				try{
					var data;
					if(typeof s=="string"){
						this._mapData = JSON.stringify(jQuery.parseJSON(s));
						data = jQuery.parseJSON(s);	
					}else{
						this._mapData = JSON.stringify(s);
						data = s;				
					}
					this._mapData = JSON.stringify(this.processMapData(data));
					this._attrData = this.scanData(this._mapData);
					this.updateContents();	
				}catch(e){
					alert("Problem setting map data\n\n" + e);
				}			
			} 
		 },
		 getMapData : function(){
			 return this._mapData;
		 },
		updateContents: function(){
			try{
			var that = this;
			this.geoJSONText.setValue(this._mapData);
			this.tableAttributes.destroyColumns();
			var objs = {};
			for(var i=0;i<this._attrData.length;i++){
				for(var field in this._attrData[i]){
					objs[field]=field;
				}
			}
			for(var field in objs){
				var newColumn = new sap.ui.table.Column({
					label: new sap.ui.commons.Label({text: objs[field]}),
					template: new sap.ui.commons.TextView().bindProperty("text", objs[field]),
					width : "50px",
					sortProperty: objs[field],
					filterProperty: objs[field]
				});
				this.tableAttributes.addColumn(newColumn);
			}
			this.tableAttributes.getModel().setData({
				rows: this._attrData
			});
			this.drawMap();
			}catch(e){
				alert("Error updating property sheet contents\n\n"+e);
			}
		},
		/**
		 * Scan FeatureJSON for all attributes
		 */
		scanData : function(strMapData){
			var geoJSON = jQuery.parseJSON(strMapData);
			var attrs = [];
			var features = geoJSON.features || [];
			for(var i=0;i<features.length;i++){
				var feature = features[i];
				if(feature.properties) attrs.push(feature.properties);
			}
			return attrs;
		},
		/**
		 * Convert any TopoJSON data into GeoJSON
		 */
		processMapData : function(mapData) {
		    //var o = smd.options.topojsonObject;
		    var obj;
		    var returnObject = mapData;		// Assume GeoJSON
		    if (mapData && mapData.type && mapData.type.toLowerCase() === 'topology' && typeof topojson != 'undefined') {
		        for (var o in mapData.objects) {
		          if (mapData.objects.hasOwnProperty(o)) {
		            obj = mapData.objects[o];
		            break;
		          }
		        }
		      returnObject = topojson.feature(mapData, mapData.objects[o]);
		    }
		    return returnObject;
		},
		mapLoadComplete : function(data){
			try{
				this.presets = data; //jQuery.parseJSON(data);
				for(var i=0;i<this.presets.length;i++){
					if(this.presets[i].type && this.presets[i].type=="external"){
						$.ajax({
							url : this.presets[i].indexUrl + "index.json?ref=gh-pages",
							headers : this.presets[i].headers
						})
						.done(function(config){return function(data){
							var generatedMenuItem = new sap.ui.commons.MenuItem({
								text : data.label
							});
							that.presetMenu.addItem(generatedMenuItem);
							that.makeMapMenu(data, generatedMenuItem, config);
							that.presetMenu.addItem(generatedMenuItem);
						};}(this.presets[i]))
						.fail(function(config){return function(xhr, textStatus, errorThrown ){
							alert("Could not load\n\n"+errorThrown+JSON.stringify(config) );
						};}(this.presets[i]))
					}else{
						var generatedMenuItem = new sap.ui.commons.MenuItem({
							text : this.presets[i].label
						});
						this.makeMapMenu(this.presets[i], generatedMenuItem,this.presets[i]);
						this.presetMenu.addItem(generatedMenuItem);	
					}					
				}
			}catch(e){
				alert(e);
			}
		},
		makeMapMenu : function(o, menuitem, rootConfig){
			var that = this;
			menuitem.setText(o.label);
			if(o.maps){
				var newMenu = new sap.ui.commons.Menu({});
				menuitem.setSubmenu(newMenu);
				for(var i=0;i<o.maps.length;i++){
					var newMenuItem = new sap.ui.commons.MenuItem({
						text : o.maps[i].label
					});
					newMenu.addItem(newMenuItem);
					this.makeMapMenu(o.maps[i], newMenuItem, rootConfig);
				}
			}
			if(o.url) {
				var mapURL = o.url;
				if(o.type!="external") mapURL = "../os/maps/" + mapURL + "?r=" + Math.random();
				if(rootConfig.indexUrl) mapURL = rootConfig.indexUrl + mapURL;
				menuitem.attachSelect(function(mapURL,config){return function(oControlEvent){
					try{
						$.ajax({
							//async : false,
							url : mapURL,
							headers : config.headers
						}).done(function(data){
							// data = removeDiacritics(data);
							that._mapData = that.processMapData(data);
							that.updateContents();
							that.fireMapDataChange();
						})
						.fail(function(mapURL){return function(xhr, textStatus, errorThrown ){
							alert("An error occured while trying to download the map.\n\n"+errorThrown+mapURL );
						};}(mapURL));
					}catch(e){
						alert(e);
						throw("Error loading map:\n\nFile:" + mapURL + "\n\n" + e);
					}
					
	    		};}(mapURL,rootConfig), this);
			}
		},
		drawMap : function(){
			try{
				var map = d3.select("#" +this.getId() + "_map");
				if(map.empty()) {
					// Not rendered yet.
				}else{
					var svg = map.select("svg");
					if(svg.empty()) {
						svg = map.append("svg")
							.attr("width","400px")
							.attr("height","300px");
					}
					var projection = d3.geo.mercator()
						.scale(400 / 2 / Math.PI)
						.translate([400/2,300/2]);
					svg.on("click",function(){
						alert(projection.invert(d3.mouse(this)));
					});
					var projPath = d3.geo.path().projection(projection);
					var geoJson = jQuery.parseJSON(this._mapData);
					if(geoJson && geoJson.features){
						var featureSelection = svg.selectAll(".feature")
							.data(geoJson.features)
							.attr("d",projPath)
							.attr("class","feature")
							.attr("fill","#efefef")
							.attr("stroke","#009966")
							.attr("stroke-width",".25px");
						
						featureSelection.enter()
							.append("path")
							.attr("d",projPath)
							.attr("class","feature")
							.attr("fill","#efefef")
							.attr("stroke","#808080")
							.attr("stroke-width",".25px");
						
						
						//svg.selectAll(".feature")
							
						
						featureSelection.exit().remove();
					}
					
				}
				}catch(e){
					alert("Error on map rendering" + e);
				}
		},
		init : function(){
			try{
			var that = this;
			sap.ui.commons.Panel.prototype.init.apply(this,arguments);
			this.presetMenu = new sap.ui.commons.Menu({
				items :[ ]
			});
			this.mapStrip = new sap.ui.commons.TabStrip({
				width : "100%",
			});
			this.tableAttributes =  new sap.ui.table.Table({
				title: "Map Attributes",
				visibleRowCount: 10,
				selectionMode: sap.ui.table.SelectionMode.Single
			});
			var dataModel = new sap.ui.model.json.JSONModel();
			this.tableAttributes.setModel(dataModel);
			this.tableAttributes.bindRows("/rows");
			
			this.mapContents = this.mapStrip.createTab("Map Contents");
			this.mapProperties = this.mapStrip.createTab("Map Attributes");
			this.mapView = this.mapStrip.createTab("Map View");
			this.geoJSONText = new sap.ui.commons.TextArea({
				// value : this.mapData(),
				design : sap.ui.core.Design.Monospace,
				rows : 20,
				width : "100%",
				wrapping : sap.ui.core.Wrapping.Off
			});
			this.map = new sap.ui.core.HTML({
				content : "<div id='" + this.getId() + "_map'></div>"
			});
			this.map.attachAfterRendering(function(occ){
				var that = this;
				this.drawMap();
			},this);
			this.geoJSONText.attachChange(function(oControlEvent){
				var textvalue = oControlEvent.getSource().getValue();
				textvalue = removeDiacritics(textvalue);
				this._mapData = textvalue;
				that.fireMapDataChange();
			},this);
			this.mapContents.addContent(this.geoJSONText);
			this.mapView.addContent(this.map);
			this.mapProperties.addContent(this.tableAttributes);
			try{
				$.ajax({
					url : "../os/maps/index.json?r=" + Math.random(),
					context : this
				})
				.done(this.mapLoadComplete)
				.fail(function(){alert("Problem occured when loading maps menu.")});
				//this.presets = jQuery.parseJSON(indexJSON);
			}catch(e){
				alert(e);
				throw("Error loading maps index:\n\n" + e);
			}
			this.addButton(new sap.ui.commons.MenuButton({ 
				text : "Load Map...",
				menu : this.presetMenu
			}));
			this._vLayout = new sap.ui.commons.layout.VerticalLayout({
				width : "100%"
			});
			this._vLayout.addContent(this.mapStrip);
			this.addContent(this._vLayout);	
			this.updateContents();
			}catch(e){
				alert("Problem with Map Downloader Init\n\n"+e);
			}
		},
		renderer : {},
		needsLabel : function() {
			return false;
		}
	});	
	return {
		id : "mapdownload",
		setter : function(property, value){
			this["cmp_"+property].setMapData(value);
		},
		getter : function(property, control){
			return control.getMapData();
		},
		createComponent : function(property, propertyOptions, changeHandler){
			var component = new org.scn.community.aps.MapDownloader({
				width : "100%",
				title : new sap.ui.commons.Title({
					text: propertyOptions.desc
				}),
				//tooltip: this.metaProps[prop].tooltip,
				showCollapseIcon : false
			});
			component.attachMapDataChange(changeHandler,this);
			return component;
		}
	};
});