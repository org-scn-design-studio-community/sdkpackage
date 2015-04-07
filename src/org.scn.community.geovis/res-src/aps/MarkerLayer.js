/*
 * Marker Layer
 */
sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.MarkerLayer",{
	metadata : {                             
        properties : {
        	value : "",
        	dsmetadata : "",
        	layerConfig : "",
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
		 var obj = o;
		 if(!obj) obj = {};
		 this._dsmetadata = jQuery.parseJSON(JSON.stringify(obj));
		 this.renderComp();
	 },
	 getDsmetadata : function(){
		return this._dsmetadata; 
	 },
	 setValue : function(o){
		 var obj = o;
		 if(!obj) obj = {};
		 this._value = jQuery.parseJSON(JSON.stringify(obj));
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
		 var lblLayerTitle = new sap.ui.commons.TextView({
			 text : "Layer Title"
		 });
		 var lblMarkerTitle = new sap.ui.commons.TextView({
			 text : "Marker Title Dimension"
		 });
		 var lblMarkerColor = new sap.ui.commons.TextView({
			 text : "Static Marker Color"
		 });
		 var lblDynamicColor = new sap.ui.commons.TextView({
			 text : "Dynamic Marker Color Dimension"
		 });
		 var lblMarkerWidth = new sap.ui.commons.TextView({
			 text : "Marker Width (px)"
		 });
		 var lblMarkerHeight = new sap.ui.commons.TextView({
			 text : "Marker Height (px)"
		 });
		 var lblHierarchy= new sap.ui.commons.TextView({
			 text : "Geo Hierarchy"
		 });
		 var cboHierarchy = new sap.ui.commons.ComboBox({});
		 cboHierarchy.addItem(new sap.ui.core.ListItem({
			 key : "",
			 text : "Select a Geo Hierarchy"
		 }));
		 if(this._value.geoHierarchy) cboHierarchy.setSelectedKey(this._value.geoHierarchy);
		 var h = this.getHierarchies();
		 if(h && h.length>0) for(var i=0;i<h.length;i++){
			 cboHierarchy.addItem(new sap.ui.core.ListItem({
				 key : h[i].id,
				 text : h[i].title
			 }));
		 }
		 cboHierarchy.attachChange(function(oControlEvent){
			 this._value.geoHierarchy = oControlEvent.getSource().getSelectedKey();
			 this.fireValueChange();
		 },this);
		 var cboDynamicColor = new sap.ui.commons.ComboBox({});
		 var clrMarker = new org.scn.community.aps.ColorPicker({
			backgroundColor : this._value.markerColor || "#009966",
			showAlpha : false,
			colorChange : function(oControlEvent){
				 that._value.markerColor = this.getBackgroundColor(); 
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
		 var spnMarkerWidth = new org.scn.community.aps.Spinner({
			value : this._value.markerWidth	|| 32,
			min : 0,
			max : 48
		 });
		 var spnMarkerHeight = new org.scn.community.aps.Spinner({
			value : this._value.markerHeight	|| 32,
			min : 0,
			max : 48
		 });
		 var geoPanel = new sap.ui.commons.Panel({
			text : "Geocoding",
			showCollapseIcon : false,
			width : "100%"
		 });
		 
		 var txtLayerTitle = new sap.ui.commons.TextField({
			value : this._value.title 
		 });
		 var lblMarkerSymbol = new sap.ui.commons.TextView({
			 text : "Marker Symbol"
		 });
		 this.symbols = [
   		     { key : "marker", text : "Marker" , anchorPosition : [.5,1]},
		     { key : "marker-stroked", text : "Marker Stroked" , anchorPosition : [.5,1]},
		     { key : "circle", text : "Circle", anchorPosition : [.5,.5] }
		  ];
		 var cboMarkerSymbol = new sap.ui.commons.ComboBox({ });
		 for(var s=0;s<this.symbols.length;s++){
			 cboMarkerSymbol.addItem(new sap.ui.core.ListItem(this.symbols[s]));
		 }
		 var cboMarkerTitle = new sap.ui.commons.ComboBox({});
		 var filterList = new sap.ui.commons.ListBox({
			 width : "100px" 
		 });
		 // Set Keys
		 if(this._value.markerSymbol) {
			 cboMarkerSymbol.setSelectedKey(this._value.markerSymbol);
		 }
		 if(this._value.markerTitleDim) {
			 cboMarkerTitle.setSelectedKey(this._value.markerTitleDim);
		 }
		 if(this._value.dynamicColorDim) {
			 cboDynamicColor.setSelectedKey(this._value.dynamicColorDim);
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
		 cboMarkerSymbol.attachChange(function(oControlEvent){
			 this._value.markerSymbol = oControlEvent.getSource().getSelectedKey();
			 for(var i=0;i<this.symbols.length;i++){
				 var s = this.symbols[i];
				 if(s.key==this._value.markerSymbol){
					 this._value.anchorPosition = s.anchorPosition || [.5,.5];
				 }
			 }
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
		 spnMarkerWidth.attachValueChange(function(oControlEvent){
			 this._value.markerWidth = oControlEvent.getSource().getValue();
			 this.fireValueChange();
		 },this);
		 spnMarkerHeight.attachValueChange(function(oControlEvent){
			 this._value.markerHeight = oControlEvent.getSource().getValue();
			 this.fireValueChange();
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
		 appearanceLayout.addContent(lblMarkerColor);
		 appearanceLayout.addContent(clrMarker);
		 appearanceLayout.addContent(lblMarkerSymbol);
		 appearanceLayout.addContent(cboMarkerSymbol);
		 appearanceLayout.addContent(lblMarkerWidth);
		 appearanceLayout.addContent(spnMarkerWidth);
		 appearanceLayout.addContent(lblMarkerHeight);
		 appearanceLayout.addContent(spnMarkerHeight);
		 appearanceLayout.addContent(lblDynamicColor);
		 appearanceLayout.addContent(cboDynamicColor);
		 appearanceLayout.addContent(clrMarkers);
		 
		 geoLayout.addContent(lblHierarchy);
		 geoLayout.addContent(cboHierarchy);
		 geoLayout.addContent(lblMarkerTitle);
		 geoLayout.addContent(cboMarkerTitle);
		 
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
