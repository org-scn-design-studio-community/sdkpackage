
/**
 * Generated ZTL Class for Segmented Button
 * 
 * DO NOT EDIT
 */
sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.basics.SegmentedButtonPropertyPage",  function() {
	var that = this;

	this.init = function () {
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this._content.placeAt($("#content"));

		this.initDElementsContent();
		this.initDSelectionType();
		this.initDDefaultImage();
		this.initDWithImages();
		this.initDImageSize();
		
	};
	
	this.componentSelected = function(){
		this.updateDElementsContent();
		this.updateDSelectionType();
		this.updateDDefaultImage();
		this.updateDWithImages();
		this.updateDImageSize();
		
	};
	
	


	this._elementsContentDElementsContent = [];
	this._selectedElementKeyDElementsContent = "";
	this._selectedItemKeyDElementsContent = "";
	this._currentItemConfigDElementsContent = {};

	/*
	 * Retrieves JSON for Element Entry
	 */
	this.getElementDElementsContent = function(key){
		var sections = this.gatherElementsDElementsContent();
		for(var i=0;i<sections.length;i++){
			if(sections[i].key == key) return sections[i];
		}
	};
	/*
	 * Retrieves JSON for Item Entry
	 */
	this.getItemDElementsContent = function(sectionKey,key){
		for(var i=0;i<this._elementsContentDElementsContent.length;i++){
			if(this._elementsContentDElementsContent[i].key == key && this._elementsContentDElementsContent[i].parentKey==sectionKey) return this._elementsContentDElementsContent[i];
		}
	};
	/*
	 * Update Element JSON and notify Design Studio IDE
	 */
	this.updateElementDElementsContent = function(key,section){
		for(var i=0;i<this._elementsContentDElementsContent.length;i++){
			var element = this._elementsContentDElementsContent[i];
			if(!element.leaf && element.key==key){
				this._elementsContentDElementsContent[i] = section;
			}
		}
		this.firePropertiesChanged(["DElementsContent"]);
		this.updatePropertyDElementsContent();
	};
	/*
	 * Update Item JSON and notify Design Studio IDE
	 */
	this.updateItemDElementsContent = function(key){
		for(var i=0;i<this._elementsContentDElementsContent.length;i++){
			var element = this._elementsContentDElementsContent[i];
			if(element.leaf && element.key==key){
				this._elementsContentDElementsContent[i] = this._currentItemConfigDElementsContent;
			}
		}
		this.firePropertiesChanged(["DElementsContent"]);
		this.updatePropertyDElementsContent();
		this.closeDetailDElementsContent();
	};
	/*
	 * Displays Element Properties
	 */
	this.showElementPropertiesDElementsContent = function(){
		this._sectionPropertyLayoutDElementsContent.destroyContent();
		this._sectionPropertyListDElementsContent.destroyContent();
		
		this._selectedElementKeyDElementsContent = this._listBuilderDElementsContent.getSelectedKey();
		if(!this._selectedElementKeyDElementsContent) return;
		var selectedElement = this.getElementDElementsContent(this._selectedElementKeyDElementsContent);		
		if(!selectedElement) return;
		
		var items = this.gatherItemsDElementsContent(this._selectedElementKeyDElementsContent);
		
		var sectionKey = new sap.ui.commons.TextView({text : "Unique key of this button"});
		sectionKey.addStyleClass("org-scn-ApsLabelArray");
		var txtElementKey = new sap.ui.commons.TextField({value : selectedElement.key, width: "180px"});
		txtElementKey.addStyleClass("org-scn-ApsInputArray");
		txtElementKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			value = this._listBuilderDElementsContent.generateKey(value);
			var section = this.getElementDElementsContent(this._listBuilderDElementsContent.getSelectedKey());
			section.key = value;
			// Update Parent Key references
			for(var i=0;i<this._elementsContentDElementsContent.length;i++){
				var element = this._elementsContentDElementsContent[i];
				if(element.parentKey == this._listBuilderDElementsContent.getSelectedKey() && element.leaf) element.parentKey = value;
			}
			this.updateElementDElementsContent(this._listBuilderDElementsContent.getSelectedKey(),section);
			this._listBuilderDElementsContent.setSelectedKey(value);
			this.showElementPropertiesDElementsContent();
		}, this);
		this._sectionPropertyLayoutDElementsContent.addContent(sectionKey);
		this._sectionPropertyLayoutDElementsContent.addContent(txtElementKey);

		var sectiontext = new sap.ui.commons.TextView({text : "Text for the button"});
		sectiontext.addStyleClass("org-scn-ApsLabelArray");
		var txtElementtext = new sap.ui.commons.TextField({value : selectedElement.text, width: "180px"});
		txtElementtext.addStyleClass("org-scn-ApsInputArray");
		txtElementtext.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			var section = this.getElementDElementsContent(this._listBuilderDElementsContent.getSelectedKey());
			section.text = value;
			this.updateElementDElementsContent(this._listBuilderDElementsContent.getSelectedKey(),section);
		}, this);
		this._sectionPropertyLayoutDElementsContent.addContent(sectiontext);
		this._sectionPropertyLayoutDElementsContent.addContent(txtElementtext);

		var sectionimage = new sap.ui.commons.TextView({text : "Given image for the button"});
		sectionimage.addStyleClass("org-scn-ApsLabelArray");
		var txtElementimage = new sap.ui.commons.TextField({value : selectedElement.image, width: "180px"});
		txtElementimage.addStyleClass("org-scn-ApsInputArray");
		txtElementimage.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			var section = this.getElementDElementsContent(this._listBuilderDElementsContent.getSelectedKey());
			section.image = value;
			this.updateElementDElementsContent(this._listBuilderDElementsContent.getSelectedKey(),section);
		}, this);
		this._sectionPropertyLayoutDElementsContent.addContent(sectionimage);
		this._sectionPropertyLayoutDElementsContent.addContent(txtElementimage);

		var sectionselected = new sap.ui.commons.TextView({text : "Selection state of the button"});
		sectionselected.addStyleClass("org-scn-ApsLabelArray");
		var txtElementselected = new sap.ui.commons.CheckBox({checked : selectedElement.selected, width: "180px", text: "Selection state of the button"});
		txtElementselected.addStyleClass("org-scn-ApsInputArray");
		txtElementselected.attachChange(function(oControlEvent){
			var checked = oControlEvent.getParameter("checked");
			var section = this.getElementDElementsContent(this._listBuilderDElementsContent.getSelectedKey());
			section.selected = checked;
			this.updateElementDElementsContent(this._listBuilderDElementsContent.getSelectedKey(),section);
		}, this);
		this._sectionPropertyLayoutDElementsContent.addContent(sectionselected);
		this._sectionPropertyLayoutDElementsContent.addContent(txtElementselected);


		var itemsLabel = new sap.ui.commons.TextView({text : "Items"});
		itemsLabel.addStyleClass("org-scn-ApsLabelArray");
		var itemsList = new org.scn.community.propertysheet.ListBuilder({
			width : "200px",
			newKeyPrefix : "ITEM_",
			newTextPrefix : "Item ",
			list : this.gatherItemsDElementsContent(this._listBuilderDElementsContent.getSelectedKey()),
			showDetail : true,
			selectedKey : this._selectedItemKeyDElementsContent
		});
		
		itemsList.attachItemAdded(this.addItemDElementsContent,this);
		itemsList.attachItemDeleted(this.delItemDElementsContent,this);
		itemsList.attachItemDetail(this.showItemPropertiesDElementsContent,this);
		itemsList.attachItemMoved(this.moveItemDElementsContent,this);
		itemsList.attachItemSelected(this.itemSelectedDElementsContent,this);
		
		this._sectionPropertyListDElementsContent.addContent(itemsLabel);
		this._sectionPropertyListDElementsContent.addContent(itemsList);
	};
	/*
	 * Displays Item Properties in a Popup Panel
	 */
	this.showItemPropertiesDElementsContent = function(oControlEvent){
		var detailData = oControlEvent.getParameters();
		this._currentItemConfigDElementsContent = this.getItemDElementsContent(this._listBuilderDElementsContent.getSelectedKey(),detailData.key);
		if(!this._currentItemConfigDElementsContent) return;
		
		var itemDetailPanel = new sap.ui.commons.Panel({
			text : "Item Details",
			showCollapseIcon : false,
			width : "95%"
		});
		itemDetailPanel.addStyleClass("org-scn-ApsPopupPanel");
		var itemDetailLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		
		var itemKey = new sap.ui.commons.TextView({text : "Unique key of this item"});
		itemKey.addStyleClass("org-scn-ApsLabelArray");
		var txtItemKey = new sap.ui.commons.TextField({value : this._currentItemConfigDElementsContent.key, width: "300px"});
		txtItemKey.addStyleClass("org-scn-ApsInputArray");
		txtItemKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			var allItems = new org.scn.community.propertysheet.ListBuilder();		
			allItems.setList(this._elementsContentDElementsContent);
			var newItemKey = allItems.generateKey(value);
			delete allItems;
			this._currentItemConfigDElementsContent.key = newItemKey;		
		}, this);
		itemDetailLayout.addContent(itemKey);
		itemDetailLayout.addContent(txtItemKey);

		var itemtext = new sap.ui.commons.TextView({text : "Text for the item"});
		itemtext.addStyleClass("org-scn-ApsLabelArray");
		var txtItemtext = new sap.ui.commons.TextField({value : this._currentItemConfigDElementsContent.text, width: "300px"});
		txtItemtext.addStyleClass("org-scn-ApsInputArray");
		txtItemtext.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			this._currentItemConfigDElementsContent.text = value;		
		}, this);
		itemDetailLayout.addContent(itemtext);
		itemDetailLayout.addContent(txtItemtext);

		var itemimage = new sap.ui.commons.TextView({text : "Given image for the item"});
		itemimage.addStyleClass("org-scn-ApsLabelArray");
		var txtItemimage = new sap.ui.commons.TextField({value : this._currentItemConfigDElementsContent.image, width: "300px"});
		txtItemimage.addStyleClass("org-scn-ApsInputArray");
		txtItemimage.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			this._currentItemConfigDElementsContent.image = value;		
		}, this);
		itemDetailLayout.addContent(itemimage);
		itemDetailLayout.addContent(txtItemimage);

		var itemselected = new sap.ui.commons.TextView({text : "Selection state of the item"});
		itemselected.addStyleClass("org-scn-ApsLabelArray");
		var txtItemselected = new sap.ui.commons.CheckBox({checked : this._currentItemConfigDElementsContent.selected, width: "300px", text: "Selection state of the item"});
		txtItemselected.addStyleClass("org-scn-ApsInputArray");
		txtItemselected.attachChange(function(oControlEvent){
			var checked = oControlEvent.getParameter("checked");
			this._currentItemConfigDElementsContent.selected = checked;		
		}, this);
		itemDetailLayout.addContent(itemselected);
		itemDetailLayout.addContent(txtItemselected);


		var detailButtons = new sap.ui.commons.layout.HorizontalLayout({ });
		var closeButton = new sap.ui.commons.Button({
			text : "Cancel"
		});
		var okButton = new sap.ui.commons.Button({
			text : "Update"
		});
		
		closeButton.attachPress(this.closeDetailDElementsContent,this);
		okButton.attachPress(this.updateItemDElementsContent,this);
		
		detailButtons.addContent(closeButton);
		detailButtons.addContent(okButton);
		detailButtons.addStyleClass("org-scn-ApsPopUpButtons");
		
		itemDetailLayout.addContent(detailButtons);
		itemDetailPanel.addContent(itemDetailLayout);
		
		if(!this._popupDElementsContent) this._popupDElementsContent = new sap.ui.core.Popup(itemDetailPanel, true, true, true);
		
		//this._popupDElementsContent.destroyContent();
		this._popupDElementsContent.open(250,"center center", "center center", document.body, null);
	};
	/*
	 * Fires when Element Listbox is selected
	 */
	this.elementSelectedDElementsContent = function(oControlEvent){
		this._selectedElementKeyDElementsContent = "";
		if(oControlEvent.getParameters().key) this._selectedElementKeyDElementsContent = oControlEvent.getParameters().key;
		this.showElementPropertiesDElementsContent();
	};
	/*
	 * Fires when Item Listbox is selected
	 */
	this.itemSelectedDElementsContent = function(oControlEvent){
		this._selectedItemKeyDElementsContent = "";
		if(oControlEvent.getParameters().key) this._selectedItemKeyDElementsContent = oControlEvent.getParameters().key;
	};
	/*
	 * Fires when component is selected or when properties change to re-render
	 */
	this.updatePropertyDElementsContent = function(){
		this._listBuilderDElementsContent.setList(this.gatherElementsDElementsContent());
		this.showElementPropertiesDElementsContent(this._listBuilderDElementsContent.getSelectedKey());
	};
	/*
	 * Fires when item delete button clicked
	 */
	this.delItemDElementsContent = function(oControlEvent){
		var sectionKey = this._listBuilderDElementsContent.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		if(sectionKey && itemKey) {
			for(var i=0;i<this._elementsContentDElementsContent.length;i++){
				if(this._elementsContentDElementsContent[i].leaf == true && this._elementsContentDElementsContent[i].key == itemKey && this._elementsContentDElementsContent[i].parentKey==sectionKey) {
					this._elementsContentDElementsContent.splice(i,1);
					this.firePropertiesChanged(["DElementsContent"]);
					this.updatePropertyDElementsContent();
				}
			}
		}
		this.updatePropertyDElementsContent();
	}
	/*
	 * Fires when section delete button clicked
	 */
	this.delElementDElementsContent = function(oControlEvent){
		var key = oControlEvent.getParameter("key");
		if(key) {
			// Delete Element
			for(var i=0;i<this._elementsContentDElementsContent.length;i++){
				if(this._elementsContentDElementsContent[i].leaf == false && this._elementsContentDElementsContent[i].key == key) {
					this._elementsContentDElementsContent.splice(i,1);
				}
			}
			// Delete Items under Element
			for(var i=this._elementsContentDElementsContent.length-1;i>=0;i--){
				if(this._elementsContentDElementsContent[i].leaf == true && this._elementsContentDElementsContent[i].parentKey == key) {
					this._elementsContentDElementsContent.splice(i,1);
				}
			}
			this.firePropertiesChanged(["DElementsContent"]);
		}
		this.updatePropertyDElementsContent();
	};
	/*
	 * Fires when item add button clicked
	 */
	this.addItemDElementsContent = function(oControlEvent){
		var allItems = new org.scn.community.propertysheet.ListBuilder();		
		allItems.setList(this._elementsContentDElementsContent);
		var newItemKey = allItems.generateKey("Item");
		delete allItems;
		var sectionItems = new org.scn.community.propertysheet.ListBuilder();
		sectionItems.setList(this._elementsContentDElementsContent);
		var newItem = { 
			parentKey : this._listBuilderDElementsContent.getSelectedKey(),
			key : newItemKey, 
			leaf: true, 
			text:"", 
			image:"", 
			selected:false
		};
		this._elementsContentDElementsContent.push(newItem);
		this.firePropertiesChanged(["DElementsContent"]);
		this.updatePropertyDElementsContent();
	}
	/*
	 * Fires when section add button clicked
	 */
	this.addElementDElementsContent = function(oControlEvent){
		var newKey = this._listBuilderDElementsContent.generateKey("Element");
		var newElement = { 
			parentKey : "ROOT",
			key : newKey,
			leaf: false, 
			text:"", 
			image:"", 
			selected:false
		};
		this._listBuilderDElementsContent.setSelectedKey(newKey);
		this._elementsContentDElementsContent.push(newElement);
		this.firePropertiesChanged(["DElementsContent"]);
		this.updatePropertyDElementsContent();
	};
	/*
	 * Fires when section up or down button clicked
	 */
	this.moveElementDElementsContent = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		for(var i=0;i<this._elementsContentDElementsContent.length;i++){
			if(this._elementsContentDElementsContent[i].key == movementData.key && !this._elementsContentDElementsContent[i].leaf) sourceIndex = i;
			if(this._elementsContentDElementsContent[i].key == movementData.targetKey && !this._elementsContentDElementsContent[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = this._elementsContentDElementsContent[targetIndex];
			this._elementsContentDElementsContent[targetIndex] = this._elementsContentDElementsContent[sourceIndex];
			this._elementsContentDElementsContent[sourceIndex] = temp;
			this.firePropertiesChanged(["DElementsContent"]);
			this.updatePropertyDElementsContent();
		}
	};
	/*
	 * Close Item Properties Popup
	 */
	this.closeDetailDElementsContent = function(oControlEvent){
		if(this._popupDElementsContent) {
			this._popupDElementsContent.close();
			this._popupDElementsContent.destroy();
			delete this._popupDElementsContent;
		}
		
	};
	/*
	 * Fires when item up or down button clicked
	 */
	this.moveItemDElementsContent = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		var sectionKey = this._listBuilderDElementsContent.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		for(var i=0;i<this._elementsContentDElementsContent.length;i++){
			if(this._elementsContentDElementsContent[i].key == itemKey && this._elementsContentDElementsContent[i].parentKey == sectionKey && this._elementsContentDElementsContent[i].leaf) sourceIndex = i;
			if(this._elementsContentDElementsContent[i].key == movementData.targetKey && this._elementsContentDElementsContent[i].parentKey == sectionKey && this._elementsContentDElementsContent[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = this._elementsContentDElementsContent[targetIndex];
			this._elementsContentDElementsContent[targetIndex] = this._elementsContentDElementsContent[sourceIndex];
			this._elementsContentDElementsContent[sourceIndex] = temp;
			this.firePropertiesChanged(["DElementsContent"]);
			this.updatePropertyDElementsContent();
		}
	}
	/*
	 * Convenience Function to return only entries that are Elements
	 */
	this.gatherElementsDElementsContent = function(){
		var sections = [];
		for(var i=0;i<this._elementsContentDElementsContent.length;i++){
			if(this._elementsContentDElementsContent[i].leaf==false) sections.push(this._elementsContentDElementsContent[i]);
		}
		return sections;
	};
	/*
	 * Convenience Function to return only entries that are Items (Leafs)
	 */
	this.gatherItemsDElementsContent = function(sectionKey){
		var items = [];
		for(var i=0;i<this._elementsContentDElementsContent.length;i++){
			if(this._elementsContentDElementsContent[i].leaf==true && this._elementsContentDElementsContent[i].parentKey==sectionKey) items.push(this._elementsContentDElementsContent[i]);
		}
		return items;
	};
	/*
	 * Property Sheet Initialization
	 */
	this.initDElementsContent = function(){
		
		this._labelDElementsContent = new sap.ui.commons.Label({text: " List of Buttons with Sub-Items"});
		this._labelDElementsContent.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDElementsContent);
		
		this._hLayoutDElementsContent = new sap.ui.commons.layout.HorizontalLayout({ });
		this._content.addContent(this._hLayoutDElementsContent);
		this._listBuilderDElementsContent = new org.scn.community.propertysheet.ListBuilder({
			width : "200px"
		});
		
		this._listBuilderDElementsContent.attachItemAdded(this.addElementDElementsContent,this);
		this._listBuilderDElementsContent.attachItemDeleted(this.delElementDElementsContent,this);
		this._listBuilderDElementsContent.attachItemMoved(this.moveElementDElementsContent,this);
		this._listBuilderDElementsContent.attachItemSelected(this.elementSelectedDElementsContent,this);
		
		this._sectionPropertyLayoutDElementsContent = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		this._sectionPropertyListDElementsContent = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		this._sectionPropertyLayoutDElementsContent.addStyleClass("org-scn-ApsDoubleArrayVertical");
		this._sectionPropertyListDElementsContent.addStyleClass("org-scn-ApsDoubleArrayVertical");

		this._hLayoutDElementsContent.addContent(this._listBuilderDElementsContent);
		this._hLayoutDElementsContent.addContent(this._sectionPropertyLayoutDElementsContent);
		this._hLayoutDElementsContent.addContent(this._sectionPropertyListDElementsContent);
		this._sectionPropertyListDElementsContent.addStyleClass("org-scn-Aps-DetailList-DoubleArray");
		this._hLayoutDElementsContent.addStyleClass("org-scn-ApsDoubleArray");
		
		this.updatePropertyDElementsContent();
	};

	this.DElementsContent = function(s){
		if( s === undefined){
			return JSON.stringify(this._elementsContentDElementsContent);
		}else{
			var o = [];
			if(s && s!="") o = jQuery.parseJSON(s);
			this._elementsContentDElementsContent = o;
			this.updatePropertyDElementsContent();
			return this;
		}
	};







	this.updatePropertyDSelectionType = function(){
		this._inputDSelectionType.setSelectedKey(this._DSelectionType);
	};
	
	this.initDSelectionType = function(){
		this._labelDSelectionType = new sap.ui.commons.Label({text: " Selection Type"});
		this._labelDSelectionType.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDSelectionType);
		
		this._inputDSelectionType = new sap.ui.commons.ComboBox({width: "300px"});
		this._inputDSelectionType.addItem(new sap.ui.core.ListItem({key:"Single", text:"Single"}));
		this._inputDSelectionType.addItem(new sap.ui.core.ListItem({key:"Multiple", text:"Multiple"}));
		
		this._content.addContent(this._inputDSelectionType);
		this._inputDSelectionType.attachChange(this.propertyChangedDSelectionType, this);
		this._inputDSelectionType.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDSelectionType();
	};

	this.propertyChangedDSelectionType = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		this._DSelectionType = newValue;
		this.firePropertiesChanged(["DSelectionType"]);
	};
	
	this.DSelectionType = function(s){
		if( s === undefined){
			return this._DSelectionType;
		}else{
			this._DSelectionType = s;
			this.updatePropertyDSelectionType();
			return this;
		}
	};

	this.updatePropertyDDefaultImage = function(){
		this._inputDDefaultImage.setValue(this._DDefaultImage);
	};
	
	this.initDDefaultImage = function(){
		this._labelDDefaultImage = new sap.ui.commons.Label({text: " Url for Default Image"});
		this._labelDDefaultImage.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDDefaultImage);
		
		this._inputDDefaultImage = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDDefaultImage);
		this._inputDDefaultImage.attachChange(this.propertyChangedDDefaultImage, this);
		this._inputDDefaultImage.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDDefaultImage();
	};

	this.propertyChangedDDefaultImage = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DDefaultImage = value;
		this.firePropertiesChanged(["DDefaultImage"]);
	};
	
	this.DDefaultImage = function(s){
		if( s === undefined){
			return this._DDefaultImage;
		}else{
			this._DDefaultImage = s;
			this.updatePropertyDDefaultImage();
			return this;
		}
	};

	this.updatePropertyDWithImages = function(){
		this._inputDWithImages.setChecked(this._DWithImages);
	};
	
	this.initDWithImages = function(){
		this._labelDWithImages = new sap.ui.commons.Label({text: " Use Images"});
		this._labelDWithImages.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDWithImages);
		
		this._inputDWithImages = new sap.ui.commons.CheckBox({width: "300px", text: "Use Images"});
		this._content.addContent(this._inputDWithImages);
		this._inputDWithImages.attachChange(this.propertyChangedDWithImages, this);
		this._inputDWithImages.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDWithImages();
	};

	this.propertyChangedDWithImages = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		this._DWithImages = checked;
		this.firePropertiesChanged(["DWithImages"]);
	};
	
	this.DWithImages = function(s){
		if( s === undefined){
			return this._DWithImages;
		}else{
			this._DWithImages = s;
			this.updatePropertyDWithImages();
			return this;
		}
	};

	this.updatePropertyDImageSize = function(){
		this._inputDImageSize.setSelectedKey(this._DImageSize);
	};
	
	this.initDImageSize = function(){
		this._labelDImageSize = new sap.ui.commons.Label({text: " Size of the Image"});
		this._labelDImageSize.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDImageSize);
		
		this._inputDImageSize = new sap.ui.commons.ComboBox({width: "300px"});
		this._inputDImageSize.addItem(new sap.ui.core.ListItem({key:"16px", text:"16px"}));
		this._inputDImageSize.addItem(new sap.ui.core.ListItem({key:"32px", text:"32px"}));
		
		this._content.addContent(this._inputDImageSize);
		this._inputDImageSize.attachChange(this.propertyChangedDImageSize, this);
		this._inputDImageSize.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDImageSize();
	};

	this.propertyChangedDImageSize = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		this._DImageSize = newValue;
		this.firePropertiesChanged(["DImageSize"]);
	};
	
	this.DImageSize = function(s){
		if( s === undefined){
			return this._DImageSize;
		}else{
			this._DImageSize = s;
			this.updatePropertyDImageSize();
			return this;
		}
	};


});
