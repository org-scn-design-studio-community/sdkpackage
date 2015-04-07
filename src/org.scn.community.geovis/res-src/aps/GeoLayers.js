/*
 * GeoLayers
 */
sap.ui.commons.layout.HorizontalLayout.extend("org.scn.community.aps.GeoLayers",{
	_geoHiers : [],
	metadata : {              
        properties : {
        	value : {
        		type : "string",
        		defaultValue : "[]",
        	},
        	dsmetadata : "",
        	hierarchies : ""
        },
	    events : {
	    	valueChange : {}
	    }
	 },
	 setHierarchies : function(a){
		 this._geoHiers = a;
		 this.renderComp();
	 },
	 getHierarchies : function(){
		return this._geoHiers; 
	 },
	 setDsmetadata : function(o){
		 this._dsmetadata = jQuery.parseJSON(JSON.stringify(o));
		 this.renderComp();
	 },
	 getDsmetadata : function(){
		return this._dsmetadata; 
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
		this.layerList.removeAllItems();
		for(var i=0;i<this._value.length;i++){
			this.layerList.addItem(new sap.ui.core.Item({
				text : this._value[i].title
			}));
		}
		if(this._selectedItem){
			this.layerList.setSelectedIndex(this._selectedItem);
			this.renderLayerProps(this._selectedItem);
		}
	 },
	 removeLayer : function(){
		var removeIndex = this.layerList.getSelectedIndex();
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
			 var si = this.layerList.getSelectedIndex();
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
						hierarchies : this.getHierarchies(),
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
						hierarchies : this.getHierarchies(),
						valueChange : function(occ){
							that._value[si] = this.getValue();
							that.fireValueChange();
						}
					 });
			 		break;
			 	case "heatLayer" :
			 		layer = new org.scn.community.aps.HeatLayer({
						width : "300px",
						value : layerProp,
						dsmetadata : this.getDsmetadata(),
						hierarchies : this.getHierarchies(),
						valueChange : function(occ){
							that._value[si] = this.getValue();
							that.fireValueChange();
						}
					 });
			 		break;
			 	case "clusterLayer" :
			 		layer = new org.scn.community.aps.ClusterLayer({
						width : "300px",
						value : layerProp,
						dsmetadata : this.getDsmetadata(),
						hierarchies : this.getHierarchies(),
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
		var that = this;
		this._value = [];
		this.leftSide = new sap.ui.commons.layout.VerticalLayout({
			width : "125px"
		});
		this.listOptions = new sap.ui.commons.layout.HorizontalLayout({	});
		this.layerList = new sap.ui.commons.ListBox({
			width : "100%"
		});
		this.layerList.attachSelect(this.renderLayerProps, this);
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
								markerWidth : 32,
								markerHeight : 32,
								dynamicColorDim : null,
								dynamicPalette : "#1f77b4,#ff7f0e,#2ca02c,#d62728,#9467bd,#8c564b,#e377c2,#7f7f7f,#bcbd22,#17becf".toUpperCase().split(","),
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
								filters : {}
							 });
						}
			        }),
			        new sap.ui.commons.MenuItem({
			        	text : "Cluster Layer",
			        	select : function(){
							that.addLayer({
								title : "New Cluster Layer",
								type : "clusterLayer",
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
		this.leftSide.addContent(this.listOptions);
		this.leftSide.addContent(this.layerList);
		//this.addButton.attachPress(this.addLayer, this);
		this.removeButton.attachPress(this.removeLayer, this);
		this.listOptions.addContent(this.addButton);
		this.listOptions.addContent(this.removeButton);
		this.addContent(this.leftSide);
		this.addContent(this.layerProps);
	},
	renderer : {}
});
