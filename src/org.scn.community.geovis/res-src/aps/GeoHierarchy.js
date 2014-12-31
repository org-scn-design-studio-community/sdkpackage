/*
 * GeoHierarchy
 */
sap.ui.commons.layout.HorizontalLayout.extend("org.scn.community.aps.GeoHierarchy",{
	metadata : {                             
        properties : {
        	value : {
        		type : "string",
        		defaultValue : "[]",
        	},
        	dsmetadata : "",
        	dsresults : "",
        	propSheet : ""
        },
	    events : {
	    	valueChange : {}
	    }
	 },
	 refreshDS : function(){
		strData = this._propSheet.callRuntimeHandler("getDataAsString");
		this._dsmetadata = null;
		if (strData && strData != "") {
			try{
				this._dsmetadata = jQuery.parseJSON(strData);	
			}catch(e){
				alert("Problem reading data in GeoHier component:\n\n" + strData);
			}
		}else{
			
		}
	 },
	 setPropSheet : function(o){
		 this._propSheet = o;
	 },
	 getPropSheet : function(){
		return this._propSheet; 
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
		this.hierList.removeAllItems();
		for(var i=0;i<this._value.length;i++){
			this.hierList.addItem(new sap.ui.core.Item({
				text : this._value[i].title
			}));
		}
		if(this._selectedItem){
			this.hierList.setSelectedIndex(this._selectedItem);
			this.renderHierProps(this._selectedItem);
		}
	 },
	 removeHier : function(){
		var removeIndex = this.hierList.getSelectedIndex();
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
	 addHier : function(hierConfig){
		 if(!this._value) this._value = [];
		 this._value.push(hierConfig);
		 this._selectedItem = this._value.length - 1;
		 this.fireValueChange();
		 this.renderComp();
	 },
	 fetchRegionsByCountry : function(country, cbo){
		 cbo.removeAllItems();
		 cbo.addItem(new sap.ui.core.ListItem({
			key : "guess",
			text : "Try to Guess"
		 }));
		 if(country != "guess"){
			 if(!this.locationsJSON[country].loaded){	// On Demand Loading
				 // Try to load once and flag loaded
				 this.locationsJSON[country].loaded = true;
				 var countryDB = $.ajax({
		    		async : false,
		    		url : this.resourcePrefix + "res/Maps/geo/world/" + country + ".json"
		    	});
		    	var countryJSON = jQuery.parseJSON(countryDB.responseText);
		    	for(var region in countryJSON){
		    		this.locationsJSON[country].r[region] = {
		    			loaded : false,
		    			l : countryJSON[region],
		    			c : {}
		    		};
		    	}
			}
			 for(var region in this.locationsJSON[country].r){
				 
				 if(!cbo.getSelectedKey() == region) cbo.setSelectedKey(region);	// Take first entry
				 cbo.addItem(new sap.ui.core.ListItem({
					key : region,
					text : region
				}));
			 }
		}
	 },
	 renderHierProps : function(){
		 this.refreshDS();
		 try{
		 var that = this;
		 var si = this.hierList.getSelectedIndex();
		 this.hierProps.destroyContent();
		 if(si==-1) return;

		 var hierProp = this._value[si];
		 var layer = new sap.ui.commons.layout.VerticalLayout({
			 
		 });
		 var lblHierTitle = new sap.ui.commons.TextView({
			 text : "Hierarchy Title"
		 });
		 var lblGeoAddress = new sap.ui.commons.TextView({
			 text : "Street Address Dimension"
		 });
		 var lblGeoCity = new sap.ui.commons.TextView({
			 text : "City Dimension"
		 });
		 var lblGeoRegion = new sap.ui.commons.TextView({
			 text : "Region/State Dimension"
		 });
		 var lblGeoZip = new sap.ui.commons.TextView({
			 text : "ZIP Code Dimension"
		 });
		 var lblGeoCountry = new sap.ui.commons.TextView({
			 text : "Country Dimension"
		 });
		 var lblFallback = new sap.ui.commons.TextView({
			 text : "Country and Region Dimension Fallbacks"
		 });
		 var lblManualCountry = new sap.ui.commons.TextView({
			 text : "If no Country Dimension available, use:"
		 });
		 var lblManualRegion = new sap.ui.commons.TextView({
			 text : "If no Region Dimension available, use:"
		 });
		 var txtHierTitle = new sap.ui.commons.TextField({
			value : hierProp.title 
		 });
		 txtHierTitle.attachChange(function(oControlEvent){
			 hierProp.title = oControlEvent.getSource().getValue();
			 this.fireValueChange();
			 this.renderComp();
		 },this);
		 var cboGeoAddress = new sap.ui.commons.ComboBox({});
		 var cboGeoCity = new sap.ui.commons.ComboBox({});
		 var cboGeoRegion = new sap.ui.commons.ComboBox({});
		 var cboGeoZip = new sap.ui.commons.ComboBox({});
		 var cboGeoCountry = new sap.ui.commons.ComboBox({});
		 // Manual Support
		 var cboManualCountry = new sap.ui.commons.ComboBox({});
		 cboManualCountry.addItem(new sap.ui.core.ListItem({
			key : "guess",
			text : "Try to Guess"
		 }));
		 var cboManualRegion = new sap.ui.commons.ComboBox({});
		 for(var country in this.locationsJSON){
			cboManualCountry.addItem(new sap.ui.core.ListItem({
				key : country,
				text : country
			}));
		 }
		 if(!hierProp.manualCountry) hierProp.manualCountry = "us";
		 cboManualCountry.setSelectedKey(hierProp.manualCountry);
		 this.fetchRegionsByCountry(hierProp.manualCountry, cboManualRegion);
		 if(hierProp.manualRegion) {
			 cboManualRegion.setSelectedKey(hierProp.manualRegion);		 
		 }else{
			 hierProp.manualRegion = cboManualRegion.getSelectedKey(); 
		 }
		 cboManualCountry.attachChange(function(oControlEvent){
			 hierProp.manualCountry = oControlEvent.getParameter("selectedItem").getKey();
			 hierProp.manualRegion = null;
			 this.fetchRegionsByCountry(hierProp.manualCountry, cboManualRegion);
			 hierProp.manualRegion = cboManualRegion.getSelectedKey();
			 this.fireValueChange();
		 },this);
		 cboManualRegion.attachChange(function(oControlEvent){
			 hierProp.manualRegion = oControlEvent.getParameter("selectedItem").getKey();
			 this.fireValueChange();
		 },this);
		 
		 if(hierProp.geoDimAddress) {
			 cboGeoAddress.setSelectedKey(hierProp.geoDimAddress);
		 }else{
			 cboGeoAddress.setSelectedKey("");
		 }
		 if(hierProp.geoDimCity) {
			 cboGeoCity.setSelectedKey(hierProp.geoDimCity);
		 }else{
			 cboGeoCity.setSelectedKey("");
		 }
		 if(hierProp.geoDimRegion) {
			 cboGeoRegion.setSelectedKey(hierProp.geoDimRegion);
		 }else{
			 cboGeoRegion.setSelectedKey("");
		 }
		 if(hierProp.geoDimZip) {
			 cboGeoZip.setSelectedKey(hierProp.geoDimZip);
		 }else{
			 cboGeoZip.setSelectedKey("");
		 }
		 if(hierProp.geoDimCountry) {
			 cboGeoCountry.setSelectedKey(hierProp.geoDimCountry);
		 }else{
			 cboGeoCountry.setSelectedKey("");
		 }
		 cboGeoAddress.attachChange(function(oControlEvent){
			 hierProp.geoDimAddress = oControlEvent.getSource().getSelectedKey();
			 this.fireValueChange();
		 },this);
		 cboGeoCity.attachChange(function(oControlEvent){
			 hierProp.geoDimCity = oControlEvent.getSource().getSelectedKey();
			 this.fireValueChange();
		 },this);
		 cboGeoRegion.attachChange(function(oControlEvent){
			 hierProp.geoDimRegion = oControlEvent.getSource().getSelectedKey();
			 this.fireValueChange();
		 },this);
		 cboGeoZip.attachChange(function(oControlEvent){
			 hierProp.geoDimZip = oControlEvent.getSource().getSelectedKey();
			 this.fireValueChange();
		 },this);
		 cboGeoCountry.attachChange(function(oControlEvent){
			 hierProp.geoDimCountry = oControlEvent.getSource().getSelectedKey();
			 this.fireValueChange();
		 },this);
		 cboGeoAddress.addItem(new sap.ui.core.ListItem({
			key : "",
			text : "Select an address dimension"
		}));
		cboGeoCity.addItem(new sap.ui.core.ListItem({
			key : "",
			text : "Select a city dimension"
		}));
		cboGeoZip.addItem(new sap.ui.core.ListItem({
			key : "",
			text : "Select a ZIP Code dimension"
		}));
		cboGeoRegion.addItem(new sap.ui.core.ListItem({
			key : "",
			text : "Select a Region/State dimension"
		}));
		cboGeoCountry.addItem(new sap.ui.core.ListItem({
			key : "",
			text : "Select a Country dimension"
		}));
		
		var locationList =  new sap.ui.table.Table({
			visibleRowCount : 10,
			width : "100%"
		});
		var unsolvedList =  new sap.ui.table.Table({
			visibleRowCount : 10,
			width : "100%"
		});
		
		var geoLocColumn = new sap.ui.table.Column({
			label : "Location Key",
			template: new sap.ui.commons.TextView().bindProperty("text", "geoLoc"),
			sortProperty: "geoLoc",
			filterProperty: "geoLoc",
		});
		var geoLatColumn = new sap.ui.table.Column({
			label : "Latitude",
			template: new sap.ui.commons.TextView().bindProperty("text", "latitude"),
			sortProperty: "latitude",
			filterProperty: "latitude",
		});
		var geoLngColumn = new sap.ui.table.Column({
			label : "Longitude",
			template: new sap.ui.commons.TextView().bindProperty("text", "longitude"),
			sortProperty: "longitude",
			filterProperty: "longitude",
		});
		
		var unsolvedGeoLocColumn = new sap.ui.table.Column({
			label : "Location Key",
			template: new sap.ui.commons.TextView().bindProperty("text", "geoLoc"),
			sortProperty: "geoLoc",
			filterProperty: "geoLoc",
		});
		var unsolvedGeoLatColumn = new sap.ui.table.Column({
			label : "Latitude",
			template: new sap.ui.commons.TextView().bindProperty("text", "latitude"),
			sortProperty: "latitude",
			filterProperty: "latitude",
		});
		var unsolvedGeoLngColumn = new sap.ui.table.Column({
			label : "Longitude",
			template: new sap.ui.commons.TextView().bindProperty("text", "longitude"),
			sortProperty: "longitude",
			filterProperty: "longitude",
		});
		var unsolvedReason = new sap.ui.table.Column({
			label : "Reason",
			template: new sap.ui.commons.TextView().bindProperty("text", "reason"),
			sortProperty: "reason",
			filterProperty: "reason",
		});
		var tabStrip = new sap.ui.commons.TabStrip({
			width : "100%"
		});
		var solvedTab = new sap.ui.commons.Tab();
		var unsolvedTab = new sap.ui.commons.Tab();
		solvedTab.setText("Solved Locations");
		unsolvedTab.setText("Unsolved Locations");
		locationList.addColumn(geoLocColumn);
		locationList.addColumn(geoLatColumn);
		locationList.addColumn(geoLngColumn);
		unsolvedList.addColumn(unsolvedGeoLocColumn);
		unsolvedList.addColumn(unsolvedGeoLatColumn);
		unsolvedList.addColumn(unsolvedGeoLngColumn);
		unsolvedList.addColumn(unsolvedReason);
		tabStrip.addTab(solvedTab);
		tabStrip.addTab(unsolvedTab);
		var btnSample = new sap.ui.commons.Button({
			text : "Sample Locations"
		});
		btnSample.attachPress(function(occ){
			try{
			var strData = this._propSheet.callRuntimeHandler("getDataAsString");
			this._data = null;
			if (strData && strData !="") {
				try{
					this._data = jQuery.parseJSON(strData);	
				}catch(e){
					alert("Problem reading data during sampling:\n\n" + strData);
				}
			}else{
				
			}
			if (this._data && this._data.dimensions && this._data.dimensions.length>0) {
				try{
					org_scn_community_geovis.getLatLngs({
						geoDimCity : hierProp.geoDimCity,
						geoDimRegion : hierProp.geoDimRegion,
						geoDimZip : hierProp.geoDimZip,
						geoDimCountry : hierProp.geoDimCountry,
						geoDimAddress : hierProp.geoDimAddress,
						manualCountry : hierProp.manualCountry,
						manualRegion : hierProp.manualRegion,
						metadata : jQuery.parseJSON(strData),
						results : jQuery.parseJSON(strData),
						callback : function(r){  // We use a callback just so if we end up writing async GIS support later, we have a hook.						
							/* Locations come back at the tuple level so there will be duplicate locations
							 * when sampling.  Loop through the results and only display once unique occurence per location.
							 */
							var locationModel = new sap.ui.model.json.JSONModel();
							var locs = [];
							var hit = {};
							for(var i=0;i<r.solved.length;i++){
								var geoLocation = r.solved[i];
								if(!hit[geoLocation.locationKey]){
									locs.push({
										geoLoc : geoLocation.locationKey,
										latitude : geoLocation.latlng[0],
										longitude : geoLocation.latlng[1],
									});
									hit[geoLocation.locationKey] = true;
								}								
							}
							// Same procedure for unsolved locations							
							var unsolvedLocs = [];
							var unsolvedhit = {};
							for(var i=0;i<r.unsolved.length;i++){
								var geoLocation = r.unsolved[i];
								if(!unsolvedhit[geoLocation.locationKey]){
									unsolvedLocs.push({
										geoLoc : geoLocation.locationKey,
										reason : geoLocation.reason,
										latitude : geoLocation.latlng[0],
										longitude : geoLocation.latlng[1],
									});
									unsolvedhit[geoLocation.locationKey] = true;
								}
							}
							locationModel.setData({
								solved: locs,
								unsolved: unsolvedLocs
							});
							locationList.setModel(locationModel);
							locationList.bindRows("/solved");
							unsolvedList.setModel(locationModel);
							unsolvedList.bindRows("/unsolved");
						}
					});
				}catch(e){
					alert("Error getting latitude and longitude samples:\n\n" + e);
				}
			}
			}catch(e){
				alert("Error when sampling data:\n\n"+e);
			}
		},this);
		
		var m = this._dsmetadata;
		 if(m && m.dimensions){
			 for(var i=0;i<m.dimensions.length;i++){
				 cboGeoAddress.addItem(new sap.ui.core.ListItem({
					 key : m.dimensions[i].key,
					 text : m.dimensions[i].text
				 }));
				 cboGeoCity.addItem(new sap.ui.core.ListItem({
					 key : m.dimensions[i].key,
					 text : m.dimensions[i].text
				 }));
				 cboGeoRegion.addItem(new sap.ui.core.ListItem({
					 key : m.dimensions[i].key,
					 text : m.dimensions[i].text
				 }));
				 cboGeoZip.addItem(new sap.ui.core.ListItem({
					 key : m.dimensions[i].key,
					 text : m.dimensions[i].text
				 }));
				 cboGeoCountry.addItem(new sap.ui.core.ListItem({
					 key : m.dimensions[i].key,
					 text : m.dimensions[i].text
				 }));
			 }
			 layer.addContent(lblHierTitle);
			 layer.addContent(txtHierTitle);
			 //layer.addContent(lblGeoAddress);		Maybe with a GIS
			 //layer.addContent(cboGeoAddress);		Maybe with a GIS
			 layer.addContent(lblGeoCity);
			 layer.addContent(cboGeoCity);
			 layer.addContent(lblGeoRegion);
			 layer.addContent(cboGeoRegion);
			 layer.addContent(lblGeoZip);
			 layer.addContent(cboGeoZip);
			 layer.addContent(lblGeoCountry);
			 layer.addContent(cboGeoCountry);
			 // Manual support
			 layer.addContent(lblFallback);
			 layer.addContent(lblManualCountry);
			 layer.addContent(cboManualCountry);
			 layer.addContent(lblManualRegion);
			 layer.addContent(cboManualRegion);
			 layer.addContent(tabStrip);
			 solvedTab.addContent(locationList);
			 unsolvedTab.addContent(unsolvedList);
			 //layer.addContent(locationList);
			 layer.addContent(btnSample);
		}else{
			layer.addContent(new sap.ui.commons.TextView({
				 text : "Cannot determine a data source.  Make sure you have bound a data source to this component, and that it is not using Load in Script = true."
			}));
		}
		
	 this.hierProps.addContent(layer);
		 }catch(e){alert(e)};
	 },	 
	init : function(){
		var that = this;
		this.resourcePrefix = "/aad/zen/mimes/sdk_include/org.scn.community.geovis/";
		if(!this.locationsJSON){
	    	var geoDB = $.ajax({
	    		async : false,
	    		url : this.resourcePrefix + "res/Maps/geo/world.json"
	    	});
	    	var worldJSON = jQuery.parseJSON(geoDB.responseText);
	    	this.locationsJSON = {};
	    	for(var country in worldJSON){
	    		this.locationsJSON[country] = {
	    			loaded : false,
	    			l : worldJSON[country],
	    			r : {}
	    		};
	    	}
	    	//this.locationsJSON = jQuery.parseJSON(geoDB.responseText);
    	}
		this._value = [];
		this.leftSide = new sap.ui.commons.layout.VerticalLayout({
			width : "125px"
		});
		this.listOptions = new sap.ui.commons.layout.HorizontalLayout({	});
		this.hierList = new sap.ui.commons.ListBox({
			width : "100%"
		});
		this.hierList.attachSelect(this.renderHierProps, this);
		this.hierProps = new sap.ui.commons.layout.VerticalLayout({
			width : "400px"
		});
		var that = this;
		this.addButton = new sap.ui.commons.MenuButton({ 
			text : "Add...",
			menu : new sap.ui.commons.Menu({
				items :[
			        new sap.ui.commons.MenuItem({
			        	text : "Geographic Hierarchy",
			        	select : function(){
							try{
			        		that.addHier({
			        			id : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			        			    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
			        			    return v.toString(16);
			        			}),
								title : "New Geographic Hierarchy",
								geoDimAddress : null,
								geoDimCity : null,
								geoDimRegion : null,
								geoDimZip : null,
								geoDimCountry : null,
								manualCountry : "us",
								manualRegion : "tn"
							 });
							}catch(e){alert(e);}
						}
			        })
			   ]
			})
		});
		this.removeButton = new sap.ui.commons.Button({
			text : "-"
		});
		this.leftSide.addContent(this.listOptions);
		this.leftSide.addContent(this.hierList);
		this.removeButton.attachPress(this.removeHier, this);
		this.listOptions.addContent(this.addButton);
		this.listOptions.addContent(this.removeButton);
		this.addContent(this.leftSide);
		this.addContent(this.hierProps);
	},
	renderer : {}
});
