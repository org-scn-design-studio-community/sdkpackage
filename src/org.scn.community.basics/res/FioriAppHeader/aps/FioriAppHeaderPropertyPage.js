sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.basics.FioriAppHeaderPropertyPage",  function() {
	var that = this;
	this._itemConfig = [];
	this._selectedIndex = -1;
	this._selectedItemIndex = -1;
	this.componentSelected = function(){
		this.updateProps();
	};
	this.updateSelection = function(oControlEvent){
		this._selectedIndex = oControlEvent.getParameter("selectedIndex");
		if(this._selectedIndex == -1){
			this._btnDelSection.setEnabled(false);
		}else{
			this._btnDelSection.setEnabled(true);
		}
		this.showSelectionProperties(this._selectedIndex);
	};
	this.showSelectionProperties = function(index){
		try{
		this._sectionPropertyLayout.destroyContent();
		this._selectedItemIndex = -1;
		if(index<0) return;
		var section = this._itemConfig[this._selectedIndex];
		if(!section.items) section.items = [];
		var sectionTitle = new sap.ui.commons.TextView({text : "Button Title"});
		var txtSectionTitle = new sap.ui.commons.TextField({value : this._itemConfig[index].title});
		var chkShowTitle = new sap.ui.commons.CheckBox({
			text : "Show Title",
			checked : this._itemConfig[index].showTitle || false
		});
		var sectionIcon = new sap.ui.commons.TextView({text : "Button Icon (Optional)"});
		var txtSectionIcon = new sap.ui.commons.TextField({value : this._itemConfig[index].icon});
		var itemsLabel = new sap.ui.commons.TextView({text : "Items"});
		var itemsList = new sap.ui.commons.TextArea({
			value : section.items.join("\n"),
			design : sap.ui.core.Design.Monospace,
			rows : 5,
			width : "200px",
			wrapping : sap.ui.core.Wrapping.Off
		});
		
		this._sectionPropertyLayout.addContent(sectionTitle);
		this._sectionPropertyLayout.addContent(txtSectionTitle);
		this._sectionPropertyLayout.addContent(chkShowTitle);
		this._sectionPropertyLayout.addContent(sectionIcon);
		this._sectionPropertyLayout.addContent(txtSectionIcon);
		this._sectionPropertyLayout.addContent(itemsLabel);
		this._sectionPropertyLayout.addContent(itemsList);
		txtSectionTitle.attachChange(this.sectionTitleChanged, this);
		chkShowTitle.attachChange(this.sectionShowTitleChanged, this);
		txtSectionIcon.attachChange(this.sectionIconChanged, this);
		itemsList.attachChange(this.itemListChanged, this);
		}catch(e){
			alert(e);
		}
	};
	this.sectionTitleChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._itemConfig[this._selectedIndex].title = value;
		this.firePropertiesChanged(["itemConfig"]);
		this.updateProps();
	};
	this.sectionShowTitleChanged = function(oControlEvent){
		var value = oControlEvent.getSource().getChecked();
		this._itemConfig[this._selectedIndex].showTitle = value;
		this.firePropertiesChanged(["itemConfig"]);
		this.updateProps();
	};
	this.sectionIconChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._itemConfig[this._selectedIndex].icon = value;
		this.firePropertiesChanged(["itemConfig"]);
		this.updateProps();
	};
	this.itemListChanged = function(oControlEvent){
		var section = this._itemConfig[this._selectedIndex];
		if(!section.items) section.items = [];
		section.items = oControlEvent.getSource().getValue().split("\n");
		this.firePropertiesChanged(["itemConfig"]);		
	};
	this.itemSelected = function(oControlEvent){
		alert(oControlEvent.getParameter("selectedIndex"));
	};
	this.updateProps = function(){
		this._sectionList.destroyItems();
		for(var i=0;i<this._itemConfig.length;i++){
			this._sectionList.addItem(new sap.ui.core.Item({
				key : this._itemConfig[i].title,
				text : this._itemConfig[i].title
			}));
		}
		if(this._selectedIndex != -1 && this._selectedIndex < this._itemConfig.length) {
			this._sectionList.setSelectedIndex(this._selectedIndex);
			this._btnDelSection.setEnabled(true);
		}else{
			this._selectedIndex = -1;
			this._btnDelSection.setEnabled(false);
		}
		this.showSelectionProperties(this._selectedIndex);
	};
	this.upSection = function(){
		var si = this._sectionList.getSelectedIndex();
		if(si == 0 || si == -1) return;
		var temp = this._itemConfig[si-1];
		this._itemConfig[si-1] = this._itemConfig[si];
		this._itemConfig[si] = temp;
		this._selectedIndex = si-1;
		this.firePropertiesChanged(["itemConfig"]);
		this.updateProps();
	};
	this.downSection = function(){
		var si = this._sectionList.getSelectedIndex();
		if(si >= this._itemConfig.length-1 || si == - 1) return;
		var temp = this._itemConfig[si+1];
		this._itemConfig[si+1] = this._itemConfig[si];
		this._itemConfig[si] = temp;
		this._selectedIndex = si+1;
		this.firePropertiesChanged(["itemConfig"]);
		this.updateProps();
	};
	this.delSection = function(){
		var si = this._sectionList.getSelectedIndex();
		if(si==-1) return;
		
		this._itemConfig.splice(si,1);
		this.firePropertiesChanged(["itemConfig"]);
		this.updateProps();
	};
	this.addSection = function(){
		var newItem = {
			title : "Section " + (this._itemConfig.length + 1),
			showTitle : true,
			icon : "sap-icon://action",
			items : []
		};
		this._selectedIndex = this._itemConfig.length;
		this._itemConfig.push(newItem);
		this.firePropertiesChanged(["itemConfig"]);
		this.updateProps();
	};
	this.init = function(){
		// Init
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this._hLayout = new sap.ui.commons.layout.HorizontalLayout({
			
		});
		this._content.addContent(this._hLayout);
		this._sectionList = new sap.ui.commons.ListBox({
			width : "100%"
		});
		this._btnAddSection = new sap.ui.commons.Button({
			text : "+"
		});
		this._btnDelSection = new sap.ui.commons.Button({
			text : "-",
			enabled : false
		});
		this._btnUpSection = new sap.ui.commons.Button({
			text : "^"
		});
		this._btnDownSection = new sap.ui.commons.Button({
			text : "v"
		});
		this._sectionOptions = new sap.ui.commons.layout.HorizontalLayout({
			content : [this._btnAddSection, this._btnDelSection, this._btnUpSection, this._btnDownSection]
		});
		this._sectionLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "150px",
			content : [this._sectionOptions, this._sectionList]
		});
		this._sectionPropertyLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "300px"
		});
		this._hLayout.addContent(this._sectionLayout);
		this._hLayout.addContent(this._sectionPropertyLayout);
		// Events
		this._sectionList.attachSelect(this.updateSelection, this);
		this._btnAddSection.attachPress(this.addSection, this);
		this._btnDelSection.attachPress(this.delSection, this);
		this._btnUpSection.attachPress(this.upSection, this);
		this._btnDownSection.attachPress(this.downSection, this);

		this._content.placeAt($("#content"));
		
		this.updateProps();
	};
	this.itemConfig = function(s){
		if( s === undefined){
			return JSON.stringify(this._itemConfig);
		}else{
			var o = [];
			if(s && s!="") o = jQuery.parseJSON(s);
			this._itemConfig = o;
			this.updateProps();
			return this;
		}
	};	
});