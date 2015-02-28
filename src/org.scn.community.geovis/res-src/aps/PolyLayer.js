/*
 * Marker Layer
 */
sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.PolyLayer",{
	metadata : {                             
        properties : {
        	value : "",
        	dsmetadata : "",
        	layerConfig : ""
        },
	    events : {
	    	valueChange : {}
	    }
	 },
	 setDsmetadata : function(o){
		 this._dsmetadata = jQuery.parseJSON(JSON.stringify(o));
		 this.renderComp();
	 },
	 getDsmetadata : function(){
		return this._dsmetadata; 
	 },
	 setValue : function(o){
		this._value = jQuery.parseJSON(JSON.stringify(o));
		this.renderComp();
	 },
	 getValue : function(){
		 return this._value;
	 },
	 renderComp : function(){
		 this.destroyContent();
		 var that = this;
		 var appearancePanel = new sap.ui.commons.Panel({
			text : "Appearance",
			showCollapseIcon : false,
			width : "100%"
		 });
		 var lblGeoJSON = new sap.ui.commons.TextView({
			 text : "GeoJSON"
		 });
		 var txtGeoJSON = new sap.ui.commons.TextArea({
			width : "100%",
			design : sap.ui.core.Design.Monospace,
			width : "100%",
			rows : 5,
			wrapping : sap.ui.core.Wrapping.Off,
			change : function(occ){
				var v = this.getValue();
				try {
					var o = jQuery.parseJSON(v);
					that._value.strGeoJSON = v;
					that.fireValueChange();
				}catch(e){
					alert("Warning, this appears to be invalid JSON.  Not saving.");
				}
			}
		 });
		 if(this._value.strGeoJSON) txtGeoJSON.setValue(this._value.strGeoJSON);
		 var lblLayerTitle = new sap.ui.commons.TextView({
			 text : "Layer Title"
		 });
		 var lblMarkerTitle = new sap.ui.commons.TextView({
			 text : "Marker Title Dimension"
		 });
		 var lblpolyColor = new sap.ui.commons.TextView({
			 text : "Static Marker Color"
		 });
		 var lblDynamicColor = new sap.ui.commons.TextView({
			 text : "Dynamic Marker Color Dimension"
		 });
		 var cboDynamicColor = new sap.ui.commons.ComboBox({});
		 var clrMarker = new org.scn.community.aps.ColorPicker({
			backgroundColor : this._value.polyColor || "#009966",
			showAlpha : false,
			colorChange : function(oControlEvent){
				 that._value.polyColor = this.getBackgroundColor(); 
				that.fireValueChange();
			}
		 });
		 var clrMarkers = new org.scn.community.aps.ColorBuilder({
			text : "Dynamic Marker Colors",
			showCollapseIcon : false,
			colors : (this._value.dynamicPalette)?this._value.dynamicPalette.join(","):"#009966",
			showAlpha : false,
			showRatios : false,
			colorChange : function(oControlEvent){
				 that._value.dynamicPalette = this.getColors().split(","); 
				that.fireValueChange();
			}
		 });
		 var geoPanel = new sap.ui.commons.Panel({
			text : "Geocoding",
			showCollapseIcon : false,
			width : "100%"
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
		 var txtLayerTitle = new sap.ui.commons.TextField({
			value : this._value.title 
		 });
		 var cboMarkerTitle = new sap.ui.commons.ComboBox({});
		 var cboGeoAddress = new sap.ui.commons.ComboBox({});
		 var cboGeoCity = new sap.ui.commons.ComboBox({});
		 var cboGeoRegion = new sap.ui.commons.ComboBox({});
		 var cboGeoZip = new sap.ui.commons.ComboBox({});
		 var cboGeoCountry = new sap.ui.commons.ComboBox({});
		 var filterList = new sap.ui.commons.ListBox({
			 width : "100px" 
		 });
		 // Set Keys
		 if(this._value.markerTitleDim) {
			 cboMarkerTitle.setSelectedKey(this._value.markerTitleDim);
		 }
		 if(this._value.dynamicColorDim) {
			 cboDynamicColor.setSelectedKey(this._value.dynamicColorDim);
		 }
		 if(this._value.geoDimAddress) {
			 cboGeoAddress.setSelectedKey(this._value.geoDimAddress);
		 }else{
			 cboGeoAddress.setSelectedKey("");
		 }
		 if(this._value.geoDimCity) {
			 cboGeoCity.setSelectedKey(this._value.geoDimCity);
		 }else{
			 cboGeoCity.setSelectedKey("");
		 }
		 if(this._value.geoDimRegion) {
			 cboGeoRegion.setSelectedKey(this._value.geoDimRegion);
		 }else{
			 cboGeoRegion.setSelectedKey("");
		 }
		 if(this._value.geoDimZip) {
			 cboGeoZip.setSelectedKey(this._value.geoDimZip);
		 }else{
			 cboGeoZip.setSelectedKey("");
		 }
		 if(this._value.geoDimCountry) {
			 cboGeoCountry.setSelectedKey(this._value.geoDimCountry);
		 }else{
			 cboGeoCountry.setSelectedKey("");
		 }
		 // Set Events
		 cboMarkerTitle.attachChange(function(oControlEvent){
			 this._value.markerTitleDim = oControlEvent.getSource().getSelectedKey();
			 this.fireValueChange();
		 },this);
		 cboDynamicColor.attachChange(function(oControlEvent){
			 this._value.dynamicColorDim = oControlEvent.getSource().getSelectedKey();
			 this.fireValueChange();
		 },this);
		 cboGeoAddress.attachChange(function(oControlEvent){
			 this._value.geoDimAddress = oControlEvent.getSource().getSelectedKey();
			 this.fireValueChange();
		 },this);
		 cboGeoCity.attachChange(function(oControlEvent){
			 this._value.geoDimCity = oControlEvent.getSource().getSelectedKey();
			 this.fireValueChange();
		 },this);
		 cboGeoRegion.attachChange(function(oControlEvent){
			 this._value.geoDimRegion = oControlEvent.getSource().getSelectedKey();
			 this.fireValueChange();
		 },this);
		 cboGeoZip.attachChange(function(oControlEvent){
			 this._value.geoDimZip = oControlEvent.getSource().getSelectedKey();
			 this.fireValueChange();
		 },this);
		 cboGeoCountry.attachChange(function(oControlEvent){
			 this._value.geoDimCountry = oControlEvent.getSource().getSelectedKey();
			 this.fireValueChange();
		 },this);
		cboMarkerTitle.addItem(new sap.ui.core.ListItem({
			key : "",
			text : "Select a location title dimension"
		}));
		cboDynamicColor.addItem(new sap.ui.core.ListItem({
			key : "",
			text : "Select a dimension for coloring"
		}));
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
			text : "Select a ZIP Region/State dimension"
		}));
		cboGeoCountry.addItem(new sap.ui.core.ListItem({
			key : "",
			text : "Select a Country dimension"
		}));
		 var m = this._dsmetadata;
		 if(m && m.dimensions){
			 for(var i=0;i<m.dimensions.length;i++){
				 filterList.addItem(new sap.ui.core.ListItem({
					 key : m.dimensions[i].key,
					 text : m.dimensions[i].text
				 }));
				 cboMarkerTitle.addItem(new sap.ui.core.ListItem({
					 key : m.dimensions[i].key,
					 text : m.dimensions[i].text
				 }));
				 cboDynamicColor.addItem(new sap.ui.core.ListItem({
					 key : m.dimensions[i].key,
					 text : m.dimensions[i].text
				 }));
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
		 txtLayerTitle.attachChange(function(oControlEvent){
			 // var si = this.layerList.getSelectedIndex();
			 // if(si==-1) return;
			 // this._selectedItem = si;
			 this._value.title = oControlEvent.getSource().getValue();
			 this.fireValueChange();
			 this.renderComp();
		 },this);
		 filterList.attachSelect(function(oControlEvent){
			 this._selectedFilterKey = oControlEvent.getSource().getSelectedItem().getKey();
			 this.renderFilterPanel();
		 },this);
		 
		 var appearanceLayout = new sap.ui.commons.layout.VerticalLayout({ });
		 var geoLayout = new sap.ui.commons.layout.VerticalLayout({ });
		 appearancePanel.addContent(appearanceLayout);
		 geoPanel.addContent(geoLayout);

		 var filterPanel = new sap.ui.commons.Panel({
			text : "Filters",
			showCollapseIcon : false,
			width : "100%"
		 });
		 var filterLayout = new sap.ui.commons.layout.HorizontalLayout({ });
		 filterPanel.addContent(filterLayout);
		 filterLayout.addContent(filterList);
		 this.filterProps = new sap.ui.commons.layout.VerticalLayout({
			width : "300px"
		 });
		 filterLayout.addContent(this.filterProps);
		 
		 
		 appearanceLayout.addContent(lblLayerTitle);
		 appearanceLayout.addContent(txtLayerTitle);
		 appearanceLayout.addContent(lblGeoJSON);
		 appearanceLayout.addContent(txtGeoJSON);
		 appearanceLayout.addContent(lblpolyColor);
		 appearanceLayout.addContent(clrMarker);
		 appearanceLayout.addContent(lblDynamicColor);
		 appearanceLayout.addContent(cboDynamicColor);
		 appearanceLayout.addContent(clrMarkers);
		 
		 geoLayout.addContent(lblMarkerTitle);
		 geoLayout.addContent(cboMarkerTitle);
		 geoLayout.addContent(lblGeoAddress);
		 geoLayout.addContent(cboGeoAddress);
		 geoLayout.addContent(lblGeoCity);
		 geoLayout.addContent(cboGeoCity);
		 geoLayout.addContent(lblGeoRegion);
		 geoLayout.addContent(cboGeoRegion);
		 geoLayout.addContent(lblGeoZip);
		 geoLayout.addContent(cboGeoZip);
		 geoLayout.addContent(lblGeoCountry);
		 geoLayout.addContent(cboGeoCountry);
		 
		 this.addContent(appearancePanel);
		 this.addContent(geoPanel);
		 this.addContent(filterPanel);
	 },
	 renderFilterPanel : function(){
		 var that = this;
		 if(this.filterProps) this.filterProps.destroyContent();
		 var m = this._dsmetadata;
		 var dimension;
		 if(m && m.dimensions && m.dimensions.length>0){
			 for(var i=0;i<m.dimensions.length;i++){
				 if(m.dimensions[i].key==this._selectedFilterKey) dimension = m.dimensions[i];
			 }
		 }
		 if(!dimension) {
			 alert(this._selectedFilterKey + " not found.");
			 return;
		 }else{
			 var memberList = new sap.ui.commons.ListBox({
				width : "100%",
				visibleItems : 10,
				allowMultiSelect : true,
				displaySecondaryValues : true,
				select : function(oControlEvent) {
					var ids = this.getSelectedIndices();
					var members = [];
					var items = this.getItems();
					for(var i=0;i<ids.length;i++){
						members.push(items[ids[i]].getKey());
					}
					try{
					that._value.filters = that._value.filters || {};
					that._value.filters[that._selectedFilterKey] = that._value.filters[that._selectedFilterKey] || {};
					that._value.filters[that._selectedFilterKey].selections = members;	
					that.fireValueChange();
					}catch(e){
						alert(e);
					}
				}
			 });
			 this.filterProps.addContent(memberList);
			 var selectionMembers = [];
			 if(this._value.filters && this._value.filters[this._selectedFilterKey]){
				 selectionMembers = this._value.filters[this._selectedFilterKey].selections;
			 }
			 var selIndices = [];
			 for(var i=0;i<dimension.members.length;i++){
				 memberList.addItem(new sap.ui.core.ListItem({
					 key : dimension.members[i].key,
					 text : dimension.members[i].text
				 }));
				 for(var j=0;j<selectionMembers.length;j++){
					 if(selectionMembers[j] == dimension.members[i].key) selIndices.push(i);
				 }
			 }
			 memberList.setSelectedIndices(selIndices);
		}
	 },
	init : function(){
		
	},
	renderer : {}
});
