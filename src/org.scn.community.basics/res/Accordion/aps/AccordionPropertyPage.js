sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.basics.AccordionPropertyPage",  function() {
	var that = this;
	this._elementsContent = [];
	this._selectedSectionKey = "";
	this._selectedItemKey = "";
	this._currentItemConfig = {};
	this._currentSectionConfig = {};
	this.componentSelected = function(){
		this.updateProps();
	};
	/*
	 * Retrieves JSON for Section Entry
	 */
	this.getSection = function(key){
		var sections = this.gatherSections();
		for(var i=0;i<sections.length;i++){
			if(sections[i].key == key) return sections[i];
		}
	};
	/*
	 * Retrieves JSON for Item Entry
	 */
	this.getItem = function(sectionKey,key){
		for(var i=0;i<this._elementsContent.length;i++){
			if(this._elementsContent[i].key == key && this._elementsContent[i].parent==sectionKey && this._elementsContent[i].leaf) return this._elementsContent[i];
		}
	};
	/*
	 * Update Section JSON and notify Design Studio IDE
	 */
	this.updateSection = function(key,section){
		for(var i=0;i<this._elementsContent.length;i++){
			var element = this._elementsContent[i];
			if(!element.leaf && element.key==key){
				this._elementsContent[i] = section;
			}
		}
		this.firePropertiesChanged(["elementsContent","cleanAll"]);
		this.updateProps();
	};
	/*
	 * Update Item JSON and notify Design Studio IDE
	 */
	this.updateItem = function(key){
		for(var i=0;i<this._elementsContent.length;i++){
			var element = this._elementsContent[i];
			if(element.leaf && element.key==key){
				this._elementsContent[i] = this._currentItemConfig;
			}
		}
		this.firePropertiesChanged(["elementsContent","cleanAll"]);
		this.updateProps();
		this.closeDetail();
	};
	/*
	 * Displays Section Properties
	 */
	this.showSectionProperties = function(){
		this._sectionPropertyLayout.destroyContent();
		this._selectedSectionKey = this._listBuilder.getSelectedKey();
		if(!this._selectedSectionKey) return;
		var selectedSection = this.getSection(this._selectedSectionKey);		
		if(!selectedSection) return;
		var items = this.gatherItems(this._selectedSectionKey);
		var sectionKey = new sap.ui.commons.TextView({text : "Section Key"});
		var txtSectionKey = new sap.ui.commons.TextField({value : selectedSection.key});
		var sectionTitle = new sap.ui.commons.TextView({text : "Section Title"});
		var txtSectionTitle = new sap.ui.commons.TextField({value : selectedSection.text});
		var sectionUrl = new sap.ui.commons.TextView({text : "Section Image URL"});
		var txtSectionUrl= new sap.ui.commons.TextField({value : selectedSection.url});
		var itemsLabel = new sap.ui.commons.TextView({text : "Items"});
		var itemsList = new org.scn.community.propertysheet.ListBuilder({
			width : "200px",
			newKeyPrefix : "item",
			newTextPrefix : "Item ",
			list : this.gatherItems(this._listBuilder.getSelectedKey()),
			showDetail : true,
			selectedKey : this._selectedItemKey
		});
		itemsList.attachItemAdded(this.addItem,this);
		itemsList.attachItemDeleted(this.delItem,this);
		itemsList.attachItemDetail(this.showItemProperties,this);
		itemsList.attachItemMoved(this.moveItem,this);
		itemsList.attachItemSelected(this.itemSelected,this);
		this._sectionPropertyLayout.addContent(sectionKey);
		this._sectionPropertyLayout.addContent(txtSectionKey);
		this._sectionPropertyLayout.addContent(sectionTitle);
		this._sectionPropertyLayout.addContent(txtSectionTitle);
		// I don't think Image support for Sections
		// this._sectionPropertyLayout.addContent(sectionUrl);
		// this._sectionPropertyLayout.addContent(txtSectionUrl);
		this._sectionPropertyLayout.addContent(itemsLabel);
		this._sectionPropertyLayout.addContent(itemsList);
		txtSectionKey.attachChange(this.sectionKeyChanged, this);
		txtSectionTitle.attachChange(this.sectionTextChanged, this);
		txtSectionUrl.attachChange(this.sectionUrlChanged, this);
	};
	/*
	 * Displays Item Properties in a Popup Panel
	 */
	this.showItemProperties = function(oControlEvent){
		var detailData = oControlEvent.getParameters();
		this._currentItemConfig = this.getItem(this._listBuilder.getSelectedKey(),detailData.key);
		if(!this._currentItemConfig) return;
		var itemDetailPanel = new sap.ui.commons.Panel({
			text : "Item Details",
			showCollapseIcon : false,
			width : "80%"
		});
		var itemDetailLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		var detailButtons = new sap.ui.commons.layout.HorizontalLayout({ });
		var closeButton = new sap.ui.commons.Button({
			text : "Cancel"
		});
		var okButton = new sap.ui.commons.Button({
			text : "Update"
		});
		detailButtons.addContent(closeButton);
		detailButtons.addContent(okButton);
		closeButton.attachPress(this.closeDetail,this);
		okButton.attachPress(this.updateItem,this);
		var itemKey = new sap.ui.commons.TextView({text : "Item Key"});
		var txtItemKey = new sap.ui.commons.TextField({value : this._currentItemConfig.key});
		var itemTitle = new sap.ui.commons.TextView({text : "Item Title"});
		var txtItemTitle = new sap.ui.commons.TextField({value : this._currentItemConfig.text});
		var itemUrl = new sap.ui.commons.TextView({text : "Item Image URL"});
		var txtItemUrl = new sap.ui.commons.TextField({value : this._currentItemConfig.url});
		itemDetailLayout.addContent(itemKey);
		itemDetailLayout.addContent(txtItemKey);
		itemDetailLayout.addContent(itemTitle);
		itemDetailLayout.addContent(txtItemTitle);
		itemDetailLayout.addContent(itemUrl);
		itemDetailLayout.addContent(txtItemUrl);
		itemDetailLayout.addContent(detailButtons);
		itemDetailPanel.addContent(itemDetailLayout);
		txtItemKey.attachChange(this.itemKeyChanged, this);
		txtItemTitle.attachChange(this.itemTextChanged, this);
		txtItemUrl.attachChange(this.itemUrlChanged, this);
		if(!this._popup) this._popup = new sap.ui.core.Popup(itemDetailPanel, true, true, true);
		
		//this._popup.destroyContent();
		this._popup.open(250,"center center", "center center", document.body, null);
	};
	/*
	 * Fires when item key is changed
	 */
	this.itemKeyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		// Protect Key
		var allItems = new org.scn.community.propertysheet.ListBuilder();		
		allItems.setList(this._elementsContent);
		var newItemKey = allItems.generateKey(value);
		delete allItems;
		this._currentItemConfig.key = newItemKey;		
	};
	/*
	 * Fires when item text is changed
	 */
	this.itemTextChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._currentItemConfig.text = value;		
	};
	/*
	 * Fires when item image URL is changed
	 */
	this.itemUrlChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._currentItemConfig.url = value;		
	};
	/*
	 * Fires when section key is changed
	 */
	this.sectionKeyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		// Protect Key
		value = this._listBuilder.generateKey(value);
		var section = this.getSection(this._listBuilder.getSelectedKey());
		section.key = value;
		// Update Parent Key references
		for(var i=0;i<this._elementsContent.length;i++){
			var element = this._elementsContent[i];
			if(element.parent == this._listBuilder.getSelectedKey() && element.leaf) element.parent = value;
		}
		this.updateSection(this._listBuilder.getSelectedKey(),section);
		this._listBuilder.setSelectedKey(value);
		this.showSectionProperties();
	};
	/*
	 * Fires when section text is changed
	 */
	this.sectionTextChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		var section = this.getSection(this._listBuilder.getSelectedKey());
		section.text = value;
		this.updateSection(this._listBuilder.getSelectedKey(),section);
	};
	/*
	 * Fires when section image URL is changed
	 */
	this.sectionUrlChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		var section = this.getSection(this._listBuilder.getSelectedKey());
		section.url = value;
		this.updateSection(this._listBuilder.getSelectedKey(),section);
	};
	/*
	 * Fires when Section Listbox is selected
	 */
	this.sectionSelected = function(oControlEvent){
		this._selectedSectionKey = "";
		if(oControlEvent.getParameters().key) this._selectedSectionKey = oControlEvent.getParameters().key;
		this.showSectionProperties();
	};
	/*
	 * Fires when Item Listbox is selected
	 */
	this.itemSelected = function(oControlEvent){
		this._selectedItemKey = "";
		if(oControlEvent.getParameters().key) this._selectedItemKey = oControlEvent.getParameters().key;
	};
	/*
	 * Fires when component is selected or when properties change to re-render
	 */
	this.updateProps = function(){
		this._listBuilder.setList(this.gatherSections());
		this.showSectionProperties(this._listBuilder.getSelectedKey());
	};
	/*
	 * Fires when item delete button clicked
	 */
	this.delItem = function(oControlEvent){
		var sectionKey = this._listBuilder.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		if(sectionKey && itemKey) {
			for(var i=0;i<this._elementsContent.length;i++){
				if(this._elementsContent[i].leaf == true && this._elementsContent[i].key == itemKey && this._elementsContent[i].parent==sectionKey) {
					this._elementsContent.splice(i,1);
					this.firePropertiesChanged(["elementsContent","cleanAll"]);
					this.updateProps();
				}
			}
		}
		this.updateProps();
	}
	/*
	 * Fires when section delete button clicked
	 */
	this.delSection = function(oControlEvent){
		var key = oControlEvent.getParameter("key");
		if(key) {
			// Delete Section
			for(var i=0;i<this._elementsContent.length;i++){
				if(this._elementsContent[i].leaf == false && this._elementsContent[i].key == key) {
					this._elementsContent.splice(i,1);
				}
			}
			// Delete Items under Section
			for(var i=this._elementsContent.length-1;i>=0;i--){
				if(this._elementsContent[i].leaf == true && this._elementsContent[i].parent == key) {
					this._elementsContent.splice(i,1);
				}
			}
			this.firePropertiesChanged(["elementsContent","cleanAll"]);
		}
		this.updateProps();
	};
	/*
	 * Fires when item add button clicked
	 */
	this.addItem = function(oControlEvent){
		var allItems = new org.scn.community.propertysheet.ListBuilder();		
		allItems.setList(this._elementsContent);
		var newItemKey = allItems.generateKey("Item");
		delete allItems;
		var sectionItems = new org.scn.community.propertysheet.ListBuilder();
		sectionItems.setList(this._elementsContent);
		var newItem = { 
			key : newItemKey, 
			text : "New Item " + this.gatherItems(this._listBuilder.getSelectedKey()).length, 
			url : "",
			parent : this._listBuilder.getSelectedKey(),
			leaf : true
		};
		this._elementsContent.push(newItem);
		this.firePropertiesChanged(["elementsContent","cleanAll"]);
		this.updateProps();
	}
	/*
	 * Fires when section add button clicked
	 */
	this.addSection = function(oControlEvent){
		var newKey = this._listBuilder.generateKey("Section");
		var newSection = { 
			key : newKey, 
			text : "Section " + (this._elementsContent.length + 1), 
			url : "",
			parent : "ROOT",
			leaf : false
		};
		this._listBuilder.setSelectedKey(newKey);
		this._elementsContent.push(newSection);
		this.firePropertiesChanged(["elementsContent","cleanAll"]);
		this.updateProps();
	};
	/*
	 * Fires when section up or down button clicked
	 */
	this.moveSection = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		for(var i=0;i<this._elementsContent.length;i++){
			if(this._elementsContent[i].key == movementData.key && !this._elementsContent[i].leaf) sourceIndex = i;
			if(this._elementsContent[i].key == movementData.targetKey && !this._elementsContent[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = this._elementsContent[targetIndex];
			this._elementsContent[targetIndex] = this._elementsContent[sourceIndex];
			this._elementsContent[sourceIndex] = temp;
			this.firePropertiesChanged(["elementsContent","cleanAll"]);
			this.updateProps();
		}
	};
	/*
	 * Close Item Properties Popup
	 */
	this.closeDetail = function(oControlEvent){
		if(this._popup) {
			this._popup.close();
			this._popup.destroy();
			delete this._popup;
		}
		
	};
	/*
	 * Fires when item up or down button clicked
	 */
	this.moveItem = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		var sectionKey = this._listBuilder.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		for(var i=0;i<this._elementsContent.length;i++){
			if(this._elementsContent[i].key == itemKey && this._elementsContent[i].parent == sectionKey && this._elementsContent[i].leaf) sourceIndex = i;
			if(this._elementsContent[i].key == movementData.targetKey && this._elementsContent[i].parent == sectionKey && this._elementsContent[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = this._elementsContent[targetIndex];
			this._elementsContent[targetIndex] = this._elementsContent[sourceIndex];
			this._elementsContent[sourceIndex] = temp;
			this.firePropertiesChanged(["elementsContent","cleanAll"]);
			this.updateProps();
		}
	}
	/*
	 * Convenience Function to return only entries that are Sections
	 */
	this.gatherSections = function(){
		var sections = [];
		for(var i=0;i<this._elementsContent.length;i++){
			if(this._elementsContent[i].leaf==false) sections.push(this._elementsContent[i]);
		}
		return sections;
	};
	/*
	 * Convenience Function to return only entries that are Items (Leafs)
	 */
	this.gatherItems = function(sectionKey){
		var items = [];
		for(var i=0;i<this._elementsContent.length;i++){
			if(this._elementsContent[i].leaf==true && this._elementsContent[i].parent==sectionKey) items.push(this._elementsContent[i]);
		}
		return items;
	};
	/*
	 * Property Sheet Initialization
	 */
	this.init = function(){
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this._hLayout = new sap.ui.commons.layout.HorizontalLayout({ });
		this._content.addContent(this._hLayout);
		this._listBuilder = new org.scn.community.propertysheet.ListBuilder({
			width : "200px"
		});
		this._listBuilder.attachItemAdded(this.addSection,this);
		this._listBuilder.attachItemDeleted(this.delSection,this);
		this._listBuilder.attachItemMoved(this.moveSection,this);
		this._listBuilder.attachItemSelected(this.sectionSelected,this);
		this._sectionPropertyLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "300px"
		});
		this._hLayout.addContent(this._listBuilder);
		this._hLayout.addContent(this._sectionPropertyLayout);
		this._content.placeAt($("#content"));	
		this.updateProps();
	};
	/*
	 * Propery Getter/Setters
	 */
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