/*
 * GeoLayers
 */
sap.ui.commons.Panel.extend("org.scn.community.aps.GeoLookupLocal",{
	metadata : {                             
        properties : {
        	value : {
        		type : "string",
        		defaultValue : "[]",
        	},
        	dsmetadata : ""
        },
	    events : {
	    	valueChange : {}
	    }
	 },
	 setValue : function(s){
		this._value = jQuery.parseJSON(s);
		this.renderComp();
	 },
	 getValue : function(){
		 return JSON.stringify(this._value);
	 },
	 renderComp : function(){
		 if(this.map){
			 this.map.setView(L.latLng(this._value[0],this._value[1]));
		 }
		/*if(this._value){
			this._latlngBox.setValue(this._value);
		}*/
	 },
	 geoDrill : function(occ){
		 var key = occ.getSource().getSelectedKey();
		 alert(key);
		 switch(this.level){
		 	case "world":
		 		break;
		 	case "country":
		 		break;
		 	case "region":
		 		break;
		 	case "city":
		 		break;
		 }
	 },
	init : function(){
		sap.ui.commons.Panel.prototype.init.apply(this,arguments);
		this.vLayout = new sap.ui.commons.layout.VerticalLayout({
			
		});
		this.hLayout = new sap.ui.commons.layout.HorizontalLayout({
			
		});
		this.mapPanel = new sap.ui.core.HTML({
			content : "<div id='geoLookupMap' style='width:300px;height:300px;background-color:green'>map</div>"
		});
		this.mapPanel.attachAfterRendering(function(occ){
			var that = this;
			try{
			if(!this.map) this.map = new L.Map($("#geoLookupMap").get(0),{
				center : L.latLng(0,0),
				minZoom : 0,
				zoom : 3,
				attributionControl : false,
				maxBounds:[L.latLng(-85.0511,-180), L.latLng(85.0511,180)]
			});
			if(this._value) this.map.setView(L.latLng(this._value[0],this._value[1]));
			this.map.on("click",function(e){
				that._value = [e.latlng.lat, e.latlng.lng];
				//that.map.panTo([e.latlng.lat,e.latlng.lng]);
				try{
					that.fireValueChange();
				}catch(e){/*alert(e);*/}
				
			});
			var attributionControl = new L.control.attribution({
	    		prefix : false
	    	});
	    	attributionControl.addTo(this.map);
	    	var tileLayer = new L.TileLayer("tiles/simple/{z}/{x}/{y}.png", {
				maxZoom: 4
			});
			
	    	this.map.addLayer(tileLayer);
			}catch(e){
				alert(e);
			}
		},this);
		this.addContent(this.vLayout);
		this.vLayout.addContent(new sap.ui.commons.TextView({
			text : "Click the map to set the default location."
		}));
		this.hLayout.addContent(this.navList);
		this.hLayout.addContent(this.mapPanel);
		this.vLayout.addContent(this.hLayout);
	},
	renderer : {}
});
