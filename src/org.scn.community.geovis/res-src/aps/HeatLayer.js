/*
 * Marker Layer
 */
sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.HeatLayer",{
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
		 this._dsmetadata = jQuery.parseJSON(JSON.stringify(o?o:{}));
		 this.renderComp();
	 },
	 getDsmetadata : function(){
		return this._dsmetadata; 
	 },
	 setValue : function(o){
		this._value = jQuery.parseJSON(JSON.stringify(o?o:{}));
		this.renderComp();
	 },
	 getValue : function(){
		 return this._value;
	 },
	 updateGradient : function(occ){
		this._value.colors = occ.getSource().getColors();
		this._value.ratios = occ.getSource().getRatios();
		this.fireValueChange();
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
		 var lblMarkerRadius = new sap.ui.commons.TextView({
			 text : "Heat Radius (px)"
		 });
		 var lblMarkerBlur = new sap.ui.commons.TextView({
			 text : "Heat Blur (px)"
		 });
		 var gradientBuilder = new org.scn.community.aps.ColorBuilder({
			 text : "Heat Gradient",
			 showCollapseIcon : false,
			 showRatios : true,
			 showAlphas : false
		 });
		 gradientBuilder.setColors(this._value.colors);
		 gradientBuilder.setRatios(this._value.ratios);
		 gradientBuilder.attachRatioChange(this.updateGradient,this);
		 gradientBuilder.attachColorChange(this.updateGradient,this);
		 var spnMarkerRadius = new org.scn.community.aps.Spinner({
			value : this._value.markerRadius || 25,
			min : 0,
			max : 50
		 });
		 var spnMarkerBlur = new org.scn.community.aps.Spinner({
			value : this._value.markerBlur || 15,
			min : 0,
			max : 50
		 });
		 var geoPanel = new sap.ui.commons.Panel({
			text : "Geocoding",
			showCollapseIcon : false,
			width : "100%"
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
		 
		 var txtLayerTitle = new sap.ui.commons.TextField({
			value : this._value.title 
		 });
		 var cboMarkerTitle = new sap.ui.commons.ComboBox({});
		 var filterList = new sap.ui.commons.ListBox({
			 width : "100px" 
		 });
		 // Set Keys
		 if(this._value.markerTitleDim) {
			 cboMarkerTitle.setSelectedKey(this._value.markerTitleDim);
		 }
		  // Set Events
		 cboMarkerTitle.attachChange(function(oControlEvent){
			 this._value.markerTitleDim = oControlEvent.getSource().getSelectedKey();
			 this.fireValueChange();
		 },this);
		 cboMarkerTitle.addItem(new sap.ui.core.ListItem({
			key : "",
			text : "Select a location title dimension"
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
		 spnMarkerRadius.attachValueChange(function(oControlEvent){
			 this._value.radius = oControlEvent.getSource().getValue();
			 this.fireValueChange();
		 },this);
		 spnMarkerBlur.attachValueChange(function(oControlEvent){
			 this._value.blur = oControlEvent.getSource().getValue();
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
		 appearanceLayout.addContent(lblMarkerBlur);
		 appearanceLayout.addContent(spnMarkerBlur);
		 appearanceLayout.addContent(lblMarkerRadius);
		 appearanceLayout.addContent(spnMarkerRadius);
		 appearanceLayout.addContent(gradientBuilder);
		 
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
						alert("Error in Heat Layer Filter Panel: " + e);
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
