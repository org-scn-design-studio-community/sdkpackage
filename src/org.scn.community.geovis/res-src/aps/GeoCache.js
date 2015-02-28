/*
 * GeoCoder/Cache Component (Not finished)
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

	init : function(){
		sap.ui.commons.Panel.prototype.init.apply(this,arguments);
		try{
		var that = this;
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
		this.addContent(this.locationList);
		this.locationModel = new sap.ui.model.json.JSONModel();
		this.locationList.setModel(this.locationModel);
		this.locationList.bindRows("/locData");

		}catch(e){
			alert(e);
		}
	},
	renderer : {}
});
