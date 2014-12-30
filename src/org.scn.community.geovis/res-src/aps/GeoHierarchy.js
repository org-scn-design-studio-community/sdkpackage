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
	 renderHierProps : function(){
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
		var btnSample = new sap.ui.commons.Button({
			text : "Sample Locations"
		});
		btnSample.attachPress(function(occ){
			try{
			var strResults = "";
			var useDD = this._propSheet.useDummyData();
			if(useDD==null || this._propSheet.dummyDataSet() == null ) {
				strResults = this._propSheet.callRuntimeHandler("getResultsAsString");
				strMetadata = this._propSheet.callRuntimeHandler("getMetadataAsString");
			}else{
				strResults= this._propSheet.callRuntimeHandler("getResultsAsString", 
						useDD, this._propSheet.dummyDataSet(), LZString.compressToBase64(this._propSheet.localData()));
				strMetadata= this._propSheet.callRuntimeHandler("getMetadataAsString", 
						useDD, this._propSheet.dummyDataSet(), LZString.compressToBase64(this._propSheet.localData()));
			}
			org_scn_community_geovis.geoUtils.getLatLngs({
				geoDimCity : hierProp.geoDimCity,
				geoDimRegion : hierProp.geoDimRegion,
				geoDimZip : hierProp.geoDimZip,
				geoDimCountry : hierProp.geoDimCountry,
				geoDimAddress : hierProp.geoDimAddress,
				metadata : jQuery.parseJSON(strMetadata),
				results : jQuery.parseJSON(strResults),
				callback : function(r){
					alert(JSON.stringify(r.solved));
				}
			});
			alert(strResults);
			}catch(e){alert(e);}
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
		}
		 layer.addContent(lblHierTitle);
		 layer.addContent(txtHierTitle);
		 layer.addContent(lblGeoAddress);
		 layer.addContent(cboGeoAddress);
		 layer.addContent(lblGeoCity);
		 layer.addContent(cboGeoCity);
		 layer.addContent(lblGeoRegion);
		 layer.addContent(cboGeoRegion);
		 layer.addContent(lblGeoZip);
		 layer.addContent(cboGeoZip);
		 layer.addContent(lblGeoCountry);
		 layer.addContent(cboGeoCountry);
		 layer.addContent(btnSample);
	 this.hierProps.addContent(layer);
		 }catch(e){alert(e)};
	 },	 
	init : function(){
		var that = this;
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
								geoDimCountry : null
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
