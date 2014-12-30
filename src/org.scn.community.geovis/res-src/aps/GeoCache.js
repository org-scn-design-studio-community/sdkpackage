/*
 * GeoLayers
 */
sap.ui.commons.Panel.extend("org.scn.community.aps.GeoCache",{
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
	 renderComp : function(){
		//this.locationList.unbindRows();
		var locs = [];
		for(geoLocation in this._value){
			locs.push({
				geoLoc : geoLocation,
				latitude : (this._value[geoLocation].geometry&&this._value[geoLocation].geometry.coordinates)?this._value[geoLocation].geometry.coordinates[0]:null,
				longitude : (this._value[geoLocation].geometry&&this._value[geoLocation].geometry.coordinates)?this._value[geoLocation].geometry.coordinates[1]:null
			});
		}
		this.locationModel.setData({locData: locs});		
		return;
		
		if(this._selectedItem){
			this.locationList.setSelectedIndex(this._selectedItem);
			this.renderLayerProps(this._selectedItem);
		}
	 },
	 removeLayer : function(){
		var removeIndex = this.locationList.getSelectedIndex();
		if(removeIndex > -1) {
			this._value.splice(removeIndex,1);
			if(removeIndex >= this._value.length){
				this._selectedItem = this._value.length-1;
			}else{
				this._selectedItem = removeIndex;
			}
			this.fireValueChange();
			this.renderComp();
		}
		
	 },
	 addLayer : function(layerConfig){
		 this._value.push(layerConfig);
		 this._selectedItem = this._value.length - 1;
		 this.fireValueChange();
		 this.renderComp();
		//alert("!"); 
	 },
	 renderLayerProps : function(){
		 var that = this;
		 try{
			 var si = this.locationList.getSelectedIndex();
			 this.layerProps.destroyContent();
			 if(si==-1) return;
			 var layerProp = this._value[si];
			 if(!layerProp.type) layerProp.type="markerLayer";
			 var layerType = layerProp.type;
			 var layer;
			 switch(layerType){
			 	case "markerLayer" :
			 		layer = new org.scn.community.aps.MarkerLayer({
						width : "300px",
						value : layerProp,
						dsmetadata : this.getDsmetadata(),
						valueChange : function(occ){
							that._value[si] = this.getValue();
							that.fireValueChange();
						}
					 });
			 		break;
			 	case "polyLayer" :
			 		layer = new org.scn.community.aps.PolyLayer({
						width : "300px",
						value : layerProp,
						dsmetadata : this.getDsmetadata(),
						valueChange : function(occ){
							that._value[si] = this.getValue();
							that.fireValueChange();
						}
					 });
			 		break;
			 	default :
			 		layer = new sap.ui.commons.TextView({
			 			text : layerType + " not implemented yet."
			 		});
			 }
			 this.layerProps.addContent(layer);
		 }catch(e){
			 alert("Error when trying to render layer properties:\n\n"+e);
		 }

	 },	 
	init : function(){
		sap.ui.commons.Panel.prototype.init.apply(this,arguments);
		try{
		var that = this;
		//alert("!");
		//this.setWidths(["50px","auto","auto"]);
		this._value = [];
		this.listOptions = new sap.ui.commons.layout.HorizontalLayout({	});
		this.locationList =  new sap.ui.table.Table({
			visibleRowCount : 20,
			width : "100%"
		});
		this.geoLocColumn = new sap.ui.table.Column({
			label : "Location",
			template: new sap.ui.commons.TextView().bindProperty("text", "geoLoc"),
			sortProperty: "geoLoc",
			filterProperty: "geoLoc",
		});
		this.geoLatColumn = new sap.ui.table.Column({
			label : "Latitude",
			template: new sap.ui.commons.TextView().bindProperty("text", "latitude"),
			sortProperty: "latitude",
			filterProperty: "latitude",
		});
		this.geoLngColumn = new sap.ui.table.Column({
			label : "Longitude",
			template: new sap.ui.commons.TextView().bindProperty("text", "longitude"),
			sortProperty: "longitude",
			filterProperty: "longitude",
		});
		this.locationList.addColumn(this.geoLocColumn);
		this.locationList.addColumn(this.geoLatColumn);
		this.locationList.addColumn(this.geoLngColumn);
		
		//this.locationList.attachSelect(this.renderLayerProps, this);
		this.layerProps = new sap.ui.commons.layout.VerticalLayout({
			width : "400px"
		});
		var that = this;
		this.addButton = new sap.ui.commons.MenuButton({ 
			text : "Add...",
			menu : new sap.ui.commons.Menu({
				items :[
			        new sap.ui.commons.MenuItem({
			        	text : "Marker Layer",
			        	select : function(){
							that.addLayer({
								title : "New Marker Layer",
								type : "markerLayer",
								markerTitleDim : null,
								markerColor : "#009966",
								markerSymbol : "marker",
								dynamicColorDim : null,
								dynamicPalette : "#1f77b4,#ff7f0e,#2ca02c,#d62728,#9467bd,#8c564b,#e377c2,#7f7f7f,#bcbd22,#17becf".toUpperCase().split(","),
								geoDimAddress : null,
								geoDimCity : null,
								geoDimRegion : null,
								geoDimZip : null,
								geoDimCountry : null,
								filters : {}
							 });
						}
			        }),
			        new sap.ui.commons.MenuItem({
			        	text : "Poly Layer",
			        	select : function(){
							that.addLayer({
								title : "New Poly Layer",
								type : "polyLayer",
								strGeoJSON : '{\n'+
									'\ttype : "FeatureCollection",\n'+
									'\tfeatures : []\n'+
								'}',
								polyTitleDim : null,
								polyColor : "#009966",
								dynamicColorDim : null,
								dynamicPalette : "#1f77b4,#ff7f0e,#2ca02c,#d62728,#9467bd,#8c564b,#e377c2,#7f7f7f,#bcbd22,#17becf".toUpperCase().split(","),
								geoDimAddress : null,
								geoDimCity : null,
								geoDimRegion : null,
								geoDimZip : null,
								geoDimCountry : null,
								filters : {}
							 });
						}
			        }),
			        new sap.ui.commons.MenuItem({
			        	text : "Heat Layer",
			        	select : function(){
							that.addLayer({
								title : "New Heat Layer",
								type : "heatLayer",
								geoDimAddress : null,
								geoDimCity : null,
								geoDimRegion : null,
								geoDimZip : null,
								geoDimCountry : null,
								filters : {}
							 });
						}
			        })
			    ]
			})
		});
		this.removeButton = new sap.ui.commons.Button({
			text : "-"
		});
		this.addContent(this.listOptions);
		//this.addButton.attachPress(this.addLayer, this);
		this.removeButton.attachPress(this.removeLayer, this);
		this.listOptions.addContent(this.addButton);
		this.listOptions.addContent(this.removeButton);
		this.addContent(this.locationList);
		this.addContent(this.layerProps);
		this.locationModel = new sap.ui.model.json.JSONModel();
		this.locationList.setModel(this.locationModel);
		this.locationList.bindRows("/locData");

		}catch(e){
			alert(e);
		}
	},
	renderer : {}
});
