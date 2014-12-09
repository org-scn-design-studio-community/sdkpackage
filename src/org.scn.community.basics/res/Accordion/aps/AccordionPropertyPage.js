sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.basics.AccordionPropertyPage",  function() {
	var that = this;
	this._elementsContent = [];
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
		this._sectionPropertyLayout.destroyContent();
		this._selectedItemIndex = -1;
		if(index<0) return;
		var section = this._elementsContent[this._selectedIndex];
		if(!section.items) section.items = [];
		var sectionKey = new sap.ui.commons.TextView({text : "Section Key"});
		var txtSectionKey = new sap.ui.commons.TextField({value : this._elementsContent[index].key});
		var sectionTitle = new sap.ui.commons.TextView({text : "Section Title"});
		var txtSectionTitle = new sap.ui.commons.TextField({value : this._elementsContent[index].text});
		var itemsLabel = new sap.ui.commons.TextView({text : "Items"});
		var itemsList = new sap.ui.commons.TextArea({
			value : section.items.join("\n"),
			design : sap.ui.core.Design.Monospace,
			rows : 5,
			width : "200px",
			wrapping : sap.ui.core.Wrapping.Off
		});
		this._sectionPropertyLayout.addContent(sectionKey);
		this._sectionPropertyLayout.addContent(txtSectionKey);
		this._sectionPropertyLayout.addContent(sectionTitle);
		this._sectionPropertyLayout.addContent(txtSectionTitle);
		this._sectionPropertyLayout.addContent(itemsLabel);
		this._sectionPropertyLayout.addContent(itemsList);
		txtSectionKey.attachChange(this.sectionKeyChanged, this);
		txtSectionTitle.attachChange(this.sectionTitleChanged, this);
		itemsList.attachChange(this.itemListChanged, this);
	};
	this.sectionKeyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._elementsContent[this._selectedIndex].key = value;
		this.firePropertiesChanged(["elementsContent"]);
		this.updateProps();
	};
	this.sectionTitleChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._elementsContent[this._selectedIndex].text = value;
		this.firePropertiesChanged(["elementsContent"]);
		this.updateProps();
	};
	this.itemListChanged = function(oControlEvent){
		var section = this._elementsContent[this._selectedIndex];
		if(!section.items) section.items = [];
		section.items = oControlEvent.getSource().getValue().split("\n");
		this.firePropertiesChanged(["elementsContent"]);		
	};
	this.itemSelected = function(oControlEvent){
		alert(oControlEvent.getParameter("selectedIndex"));
	};
	this.updateProps = function(){
		this._sectionList.destroyItems();
		for(var i=0;i<this._elementsContent.length;i++){
			if(this._elementsContent[i].leaf==false) this._sectionList.addItem(new sap.ui.core.Item({
				key : this._elementsContent[i].key,
				text : this._elementsContent[i].text
			}));
		}
		if(this._selectedIndex != -1 && this._selectedIndex < this._elementsContent.length) {
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
		var temp = this._elementsContent[si-1];
		this._elementsContent[si-1] = this._elementsContent[si];
		this._elementsContent[si] = temp;
		this._selectedIndex = si-1;
		this.firePropertiesChanged(["elementsContent"]);
		this.updateProps();
	};
	this.downSection = function(){
		var si = this._sectionList.getSelectedIndex();
		if(si >= this._elementsContent.length-1 || si == - 1) return;
		var temp = this._elementsContent[si+1];
		this._elementsContent[si+1] = this._elementsContent[si];
		this._elementsContent[si] = temp;
		this._selectedIndex = si+1;
		this.firePropertiesChanged(["elementsContent"]);
		this.updateProps();
	};
	this.delSection = function(){
		var selectedSection = this._sectionList.getSelectedItem();
		if(selectedSection) {
			var key = selectedSection.getKey();
			for(var i=0;i<this._elementsContent.length;i++){
				if(this._elementsContent[i].leaf == false && this._elementsContent[i].key == key) {
					this._elementsContent.splice(i,1);
					this.firePropertiesChanged(["elementsContent","cleanAll"]);
					this.updateProps();
				}
			}
		}
	};
	this.addSection = function(){
		var newItem = { 
			"key": "Section" + (this._elementsContent.length + 1), 
			"text": "Section " + (this._elementsContent.length + 1), 
			"url": "",
			"parent": "ROOT",
			"leaf": false
		};		
		this._selectedIndex = this._elementsContent.length;
		this._elementsContent.push(newItem);
		this.firePropertiesChanged(["elementsContent"]);
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
	this.cleanAll = function(b){
		if( b === undefined){
			return true;
		}else{
			return this;
		}
	}
	this.elementsContent = function(s){
		if( s === undefined){
			return JSON.stringify(this._elementsContent);
		}else{
			var o = [];
			if(s && s!="") o = jQuery.parseJSON(s);
			this._elementsContent = o;
			this.updateProps();
			return this;
		}
	};	
});