sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.geovis.ChoroplethPropertyPage", function() {
	var that = this;
	this.presets = [
     	{
    		label : "Canned Maps",
    		maps : [
    		    {
    			  	label : "Global",
    			   	maps : [
    			   	     {label : "Countries", url : "maps/world-countries.json"}
    			    ]
    			},{
    			   	label : "North America",
    			   	maps : [
    			   	     {label : "United States", url : "maps/USA-regions.json"},
    			   	     {label : "Canada", url : "maps/Canada-regions.json"},
    			   	     {label : "Mexico", url : "maps/Mexico-regions.json"}
    			   	]
    			},{
    			   	label : "South America",
    			   	maps : [
    			   	     {label : "United States", url : "maps/USA-regions.json"},
    			   	     {label : "Canada", url : "maps/Canada-regions.json"},
    			   	     {label : "Mexico", url : "maps/Mexico-regions.json"}
    			   	]
    			},{
    			   	label : "Europe",
    			   	maps : [
    			   	     {label : "United Kingdom", url : "maps/United-Kingdom-regions.json"},
    			   	     {label : "France", url : "maps/France-regions.json"},
    			   	     {label : "Germany", url : "maps/Germany-regions.json"},
    			   	     {label : "Greenland", url : "maps/Greenland-regions.json"},
    			   	     {label : "Albania", url : "maps/Aland-regions.json"},
    			   	     {label : "Åland Islands", url : "maps/Aland-regions.json"}    			   	  
    			   	]
    			},{
    			   	label : "Africa",
    			   	maps : [
    			   	     {label : "Nigeria", url : "maps/Nigeria-regions.json"},
    			   	     {label : "Ethiopia", url : "maps/Ethiopia-regions.json"},
    			   	     {label : "Egypt", url : "maps/Egypt-regions.json"}
    			   	]
    			},{
    			   	label : "Asia",
    			   	maps : [
    			   	     {label : "China", url : "maps/China-regions.json"},
    			   	     {label : "Hong Kong", url : "maps/Hong-Kong-regions.json"},
    			   	     {label : "India", url : "maps/India-regions.json"},
    			   	     {label : "Indonesia", url : "maps/Indonesia-regions.json"},
    			   	     {label : "Iraq", url : "maps/Iraq-regions.json"},
    			   	     {label : "Afghanistan", url : "maps/Afghanistan-regions.json"}
    			   	]
    			}
    		]
    	},{
	    	label : "Community Maps",
	    	maps : [
				 {
    			  	label : "Global",
    			   	urls : [
    			   	     {label : "Countries", url : "world-countries.json"}
    			    ]
    			}
			]
    	}
    ];
	/**
	 * Setter/Getters
	 */
	this.projection = function(s){
		if(s===undefined){
			return this._projection;
		}else{
			this._projection = s;
			this.compProjection.setSelectedKey(s);
			return this;
		}
	};
	this.ms = function(f){
		if(f===undefined){
			return this._ms;
		}else{
			this._ms = f;
			this.compMs.setValue(f);
			return this;
		}
	};
	this.compMs = new org.scn.community.aps.Spinner({
		min : 0,
		max : 2000,
		valueChange : function(oControlEvent){
			that._ms = this.getValue();
			that.firePropertiesChanged(["ms"]);			
		}
	});
	this.mapLeft = function(f){
		if(f===undefined){
			return this._mapLeft;
		}else{
			this._mapLeft = f;
			this.compMapLeft.setValue(f);
			return this;
		}
	};
	this.compMapLeft = new org.scn.community.aps.Spinner({
		min : 0,
		max : 500,
		valueChange : function(oControlEvent){
			that._mapLeft = this.getValue();
			that.firePropertiesChanged(["mapLeft"]);			
		}
	});
	this.mapRight = function(f){
		if(f===undefined){
			return this._mapRight;
		}else{
			this._mapRight = f;
			this.compMapRight.setValue(f);
			return this;
		}
	};
	this.compMapRight = new org.scn.community.aps.Spinner({
		min : 0,
		max : 500,
		valueChange : function(oControlEvent){
			that._mapRight = this.getValue();
			that.firePropertiesChanged(["mapRight"]);			
		}
	});
	this.mapBottom = function(f){
		if(f===undefined){
			return this._mapBottom;
		}else{
			this._mapBottom = f;
			this.compMapBottom.setValue(f);
			return this;
		}
	};
	this.compMapBottom = new org.scn.community.aps.Spinner({
		min : 0,
		max : 500,
		valueChange : function(oControlEvent){
			that._mapBottom = this.getValue();
			that.firePropertiesChanged(["mapBottom"]);			
		}
	});
	this.mapTop = function(f){
		if(f===undefined){
			return this._mapTop;
		}else{
			this._mapTop = f;
			this.compMapTop.setValue(f);
			return this;
		}
	};
	this.compMapTop = new org.scn.community.aps.Spinner({
		min : 0,
		max : 500,
		valueChange : function(oControlEvent){
			that._mapTop = this.getValue();
			that.firePropertiesChanged(["mapTop"]);			
		}
	});
	this.legendOn = function(b){
		if(b===undefined){
			return this._legendOn;
		}else{
			this._legendOn = b;
			this.compLegendOn.setChecked(b);
			return this; 
		}
	};
	this.compLegendOn =  new sap.ui.commons.CheckBox({
		text : "Display Legend",
		change : function(oControlEvent){
			that.legendOn(this.getChecked());
			that.firePropertiesChanged(["legendOn"]);
		} 
	});
	this.tooltipOn = function(b){
		if(b===undefined){
			return this._tooltipOn;
		}else{
			this._tooltipOn = b;
			this.compTooltipOn.setChecked(b);
			return this; 
		}
	};
	this.compTooltipOn =  new sap.ui.commons.CheckBox({
		text : "Display Tooltips",
		change : function(oControlEvent){
			that.tooltipOn(this.getChecked());
			that.firePropertiesChanged(["tooltipOn"]);
		} 
	});
	this.backgroundColor = function(s){
		if(s===undefined){
			return this._backgroundColor;
		}else{
			this._backgroundColor = s;
			this.compBackgroundColor.setBackgroundColor(s);
			return this;
		}
	};
	this.defaultFillColor = function(s){
		if(s===undefined){
			return this._defaultFillColor
		}else{
			this._defaultFillColor = s;
			this.compFillColor.setBackgroundColor(s);
			return this;
		}
	};
	this.colorPalette = function(s){
		if(s===undefined){
			return this._colorPalette
		}else{
			this._colorPalette = s;
			this.brewer.setColors(s);
			return this;
		}
	};
	this.mapData = function(s){
		if(s===undefined){
			return this._mapData;
		}else{
			this._mapData = s;
			this.byoMap.setValue(s);
			var data = jQuery.parseJSON(s);
			this._geoData = this.processMapData(data);
			this._attrData = this.scanData(this._geoData);
			this.updateTable();
			return this;
		}
	};
	/**
	 * UI5 Components
	 */
	this.compProjection = new sap.ui.commons.ComboBox({
		items : [
		  new sap.ui.core.ListItem({ key : "mercator", text : "Mercator" }),
		  new sap.ui.core.ListItem({ key : "albersUsa", text : "Albers USA" }),
		  new sap.ui.core.ListItem({ key : "conicEqualArea", text : "Albers Conic Equal Area" }),
		  new sap.ui.core.ListItem({ key : "equirectangular", text : "Equirectangular" }),
		  new sap.ui.core.ListItem({ key : "conicConformal", text : "Conformal Conic" }),
		  new sap.ui.core.ListItem({ key : "conicEquidistant", text : "Conic Equal Area" }),
		  new sap.ui.core.ListItem({ key : "orthographic", text : "Orthographic Sphere" }),
		  new sap.ui.core.ListItem({ key : "azimuthalEqualArea", text : "Azimuthal Equal-Area" }),
		  new sap.ui.core.ListItem({ key : "azimuthalEquidistant", text : "Azimuthal Equidistant" }),
		  new sap.ui.core.ListItem({ key : "gnomonic", text : "Gnomonic" }),
		  new sap.ui.core.ListItem({ key : "stereographic", text : "Stereographic" }),
		  new sap.ui.core.ListItem({ key : "transverseMercator", text : "Transverse Mercator" })
		]
	});
	this.compProjection.attachChange(function(oControlEvent){
		that.projection(this.getSelectedKey());
		that.firePropertiesChanged(["projection"]);
	});
	this.brewer = new org.scn.community.aps.ColorBuilder({
		width : "100%",
		title : new sap.ui.commons.Title({
			text: "Colors"
		}),
		tooltip: "Choropleth Colors",
		showCollapseIcon : false,
		showAlpha : false,
		showRatios : false,
		colorChange : function(oControlEvent){
			that.colorPalette(this.getColors());
			that.firePropertiesChanged(["colorPalette"]);
		}
	});
	this.compBackgroundColor = new org.scn.community.aps.ColorPicker({
		title : new sap.ui.commons.Title({
			text: "Background Color"
		}),
		showAlpha : false,
		colorChange : function(oControlEvent){
			that.backgroundColor(this.getBackgroundColor());
			that.firePropertiesChanged(["backgroundColor"]);
		}
	});
	this.compFillColor = new org.scn.community.aps.ColorPicker({
		showAlpha : false,
		colorChange : function(oControlEvent){
			that.defaultFillColor(this.getBackgroundColor());
			that.firePropertiesChanged(["defaultFillColor"]);
		}
	});
	this.byoMap = new sap.ui.commons.TextArea({
		value : this.mapData(),
		design : sap.ui.core.Design.Monospace,
		rows : 10,
		width : "100%",
		wrapping : sap.ui.core.Wrapping.Off
	});
	this.byoMap.attachChange(function(oControlEvent){
		this._mapData = oControlEvent.getSource().getValue();
		this.firePropertiesChanged(["mapData"]);
	}, this);
	this.presetMenu = new sap.ui.commons.Menu({
		items :[
	        /*new sap.ui.commons.MenuItem({
	        	text : "Blank Map",
	        	select : function(){
					that.mapData("Hello");
				}
	        })*/
        ]
	});
	this.tableAttributes =  new sap.ui.table.Table({
		title: "Map Attributes",
		visibleRowCount: 10,
		selectionMode: sap.ui.table.SelectionMode.Single
	});
	var dataModel = new sap.ui.model.json.JSONModel();
	this.tableAttributes.setModel(dataModel);
	this.tableAttributes.bindRows("/rows");
	/**
	 * Design Studio Events
	 */
	this.init = function(){
		// Build UI
		
			this.content = new sap.ui.commons.TabStrip({
				width : "100%",
				//height : "500px"
			});
			var cosmeticsLayout = new sap.ui.commons.layout.VerticalLayout({
				width : "100%"
			});
			
			var mappingLayout = new sap.ui.commons.layout.VerticalLayout({
				width : "100%"
			});
			this.content.createTab("Cosmetics", cosmeticsLayout);
			this.content.createTab("Mapping", mappingLayout);
			try{
				for(var i=0;i<this.presets.length;i++){
					var generatedMenuItem = new sap.ui.commons.MenuItem({
						text : this.presets[i].label
					});
					this.makeMapMenu(this.presets[i], generatedMenuItem);
					this.presetMenu.addItem(generatedMenuItem);
				}
			}catch(e){
				alert(e);
			}
			this.presetsButton = new sap.ui.commons.MenuButton({ 
				text : "Load Map...",
				menu : this.presetMenu
			});
			cosmeticsLayout.addContent(this.compLegendOn);
			cosmeticsLayout.addContent(this.compTooltipOn);
			cosmeticsLayout.addContent(this.hLabel("Animation Duration (ms)",this.compMs));
			cosmeticsLayout.addContent(this.hLabel("Map Left",this.compMapLeft));
			cosmeticsLayout.addContent(this.hLabel("Map Right",this.compMapRight));
			cosmeticsLayout.addContent(this.hLabel("Map Top",this.compMapTop));
			cosmeticsLayout.addContent(this.hLabel("Map Bottom",this.compMapBottom));
			cosmeticsLayout.addContent(this.hLabel("Background Color",this.compBackgroundColor));
			cosmeticsLayout.addContent(this.hLabel("Default Land Color",this.compFillColor));
			cosmeticsLayout.addContent(this.brewer);
			mappingLayout.addContent(this.hLabel("Projection Method",this.compProjection));
			mappingLayout.addContent(this.presetsButton);
			mappingLayout.addContent(this.byoMap);
			mappingLayout.addContent(this.tableAttributes);
			this.content.placeAt("content");
	};
	this.hLabel = function(label,component){
		var hLayout = new sap.ui.commons.layout.HorizontalLayout({})
		hLayout.addContent(new sap.ui.commons.TextView({ text : label, width : "150px"}));
		hLayout.addContent(component);
		return hLayout;
	}
	/**
	 * Utility Functions
	 */
	this.makeMapMenu = function(o, menuitem){
		menuitem.setText(o.label);
		if(o.maps){
			var newMenu = new sap.ui.commons.Menu({});
			menuitem.setSubmenu(newMenu);
			for(var i=0;i<o.maps.length;i++){
				var newMenuItem = new sap.ui.commons.MenuItem({
					text : o.maps[i].label
				});
				newMenu.addItem(newMenuItem);
				this.makeMapMenu(o.maps[i], newMenuItem);
			}
		}
		if(o.url) {
			menuitem.attachSelect(function(mapURL){return function(oControlEvent){
				try{
					var featureJSON = $.ajax({
						async : false,
						type : "GET",
						url : mapURL
					}).responseText;
					this.mapData(featureJSON);
				}catch(e){
					alert(e);
					throw("Error loading map:\n\nFile:" + mapURL + "\n\n" + e);
				}
				this.firePropertiesChanged(["mapData"]);
    		};}(o.url), this);
		}
	}
	/**
	 * Update data table
	 */
	this.updateTable = function(){
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
	}
	/**
	 * Scan FeatureJSON for all attributes
	 */
	this.scanData = function(geoJSON){
		var attrs = [];
		var features = geoJSON.features;
		for(var i=0;i<features.length;i++){
			var feature = features[i];
			if(feature.properties) attrs.push(feature.properties);
		}
		return attrs;
	}
	/**
	 * Convert any TopoJSON data into GeoJSON
	 */
	this.processMapData = function(mapData) {
	    //var o = smd.options.topojsonObject;
	    var obj;
	    var returnObject = mapData;		// Assume GeoJSON
	    if (mapData.type.toLowerCase() === 'topology' && typeof topojson != 'undefined') {
	    	// Use first object found if object not defined
	    	//if (typeof o == 'undefined') {
	        for (var o in mapData.objects) {
	          if (mapData.objects.hasOwnProperty(o)) {
	            obj = mapData.objects[o];
	            break;
	          }
	        }
	      //}
	      returnObject = topojson.feature(mapData, mapData.objects[o]);
	    }
	    return returnObject;
	};
});