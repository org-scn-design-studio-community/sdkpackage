
/**
 * Generated ZTL Class for Segmented Button
 * 
 * DO NOT EDIT
 */
sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.basics.SegmentedButtonPropertyPage",  function() {
	var that = this;

	that.init = function () {
		that._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		that._content.placeAt($("#content"));

		that["fun_DElementsContent"].init();
		that["fun_DSelectionType"].init();
		that["fun_DDefaultImage"].init();
		that["fun_DWithImages"].init();
		that["fun_DImageSize"].init();
		
	};
	
	that.componentSelected = function(){
		that["fun_DElementsContent"].update();
		that["fun_DSelectionType"].update();
		that["fun_DDefaultImage"].update();
		that["fun_DWithImages"].update();
		that["fun_DImageSize"].update();
		
	};
	
	


	that["fun_DElementsContent"] = {};
	
	that["fun_DElementsContent"]._elementsContent = [];
	that["fun_DElementsContent"]._selectedElementKey = "";
	that["fun_DElementsContent"]._selectedItemKey = "";
	that["fun_DElementsContent"]._currentItemConfig = {};

	/*
	 * Retrieves JSON for Element Entry
	 */
	that["fun_DElementsContent"].getElement = function(key){
		var sections = that["fun_DElementsContent"].gatherElements();
		for(var i=0;i<sections.length;i++){
			if(sections[i].key == key) return sections[i];
		}
	};
	/*
	 * Retrieves JSON for Item Entry
	 */
	that["fun_DElementsContent"].getItem = function(sectionKey,key){
		for(var i=0;i<that["fun_DElementsContent"]._elementsContent.length;i++){
			if(that["fun_DElementsContent"]._elementsContent[i].key == key && that["fun_DElementsContent"]._elementsContent[i].parentKey==sectionKey) return that["fun_DElementsContent"]._elementsContent[i];
		}
	};
	/*
	 * Update Element JSON and notify Design Studio IDE
	 */
	that["fun_DElementsContent"].updateElement = function(key,section){
		for(var i=0;i<that["fun_DElementsContent"]._elementsContent.length;i++){
			var element = that["fun_DElementsContent"]._elementsContent[i];
			if(!element.leaf && element.key==key){
				that["fun_DElementsContent"]._elementsContent[i] = section;
			}
		}
		that.firePropertiesChanged(["DElementsContent"]);
		that["fun_DElementsContent"].update();
	};
	/*
	 * Update Item JSON and notify Design Studio IDE
	 */
	that["fun_DElementsContent"].updateItem = function(key){
		for(var i=0;i<that["fun_DElementsContent"]._elementsContent.length;i++){
			var element = that["fun_DElementsContent"]._elementsContent[i];
			if(element.leaf && element.key==key){
				that["fun_DElementsContent"]._elementsContent[i] = that["fun_DElementsContent"]._currentItemConfig;
			}
		}
		that.firePropertiesChanged(["DElementsContent"]);
		that["fun_DElementsContent"].update();
		that["fun_DElementsContent"].closeDetail();
	};
	/*
	 * Displays Element Properties
	 */
	that["fun_DElementsContent"].showElementProperties = function(){
		that["fun_DElementsContent"]._sectionPropertyLayout.destroyContent();
		that["fun_DElementsContent"]._sectionPropertyList.destroyContent();
		
		that["fun_DElementsContent"]._selectedElementKey = that["fun_DElementsContent"]._listBuilder.getSelectedKey();
		if(!that["fun_DElementsContent"]._selectedElementKey) return;
		var selectedElement = that["fun_DElementsContent"].getElement(that["fun_DElementsContent"]._selectedElementKey);		
		if(!selectedElement) return;
		
		var items = that["fun_DElementsContent"].gatherItems(that["fun_DElementsContent"]._selectedElementKey);
		
		var sectionKey = new sap.ui.commons.TextView({text : "Unique key of this button"});
		sectionKey.addStyleClass("org-scn-ApsLabelArray");
		var txtElementKey = new sap.ui.commons.TextField({value : selectedElement.key, width: "180px"});
		txtElementKey.addStyleClass("org-scn-ApsInputArray");
		txtElementKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			value = that["fun_DElementsContent"]._listBuilder.generateKey(value);
			var section = that["fun_DElementsContent"].getElement(that["fun_DElementsContent"]._listBuilder.getSelectedKey());
			section.key = value;
			// Update Parent Key references
			for(var i=0;i<that["fun_DElementsContent"]._elementsContent.length;i++){
				var element = that["fun_DElementsContent"]._elementsContent[i];
				if(element.parentKey == that["fun_DElementsContent"]._listBuilder.getSelectedKey() && element.leaf) element.parentKey = value;
			}
			that["fun_DElementsContent"].updateElement(that["fun_DElementsContent"]._listBuilder.getSelectedKey(),section);
			that["fun_DElementsContent"]._listBuilder.setSelectedKey(value);
			that["fun_DElementsContent"].showElementProperties();
		}, that);
		that["fun_DElementsContent"]._sectionPropertyLayout.addContent(sectionKey);
		that["fun_DElementsContent"]._sectionPropertyLayout.addContent(txtElementKey);

		var sectiontext = new sap.ui.commons.TextView({text : "Text for the button"});
		sectiontext.addStyleClass("org-scn-ApsLabelArray");
		var txtElementtext = new sap.ui.commons.TextField({value : selectedElement.text, width: "180px"});
		txtElementtext.addStyleClass("org-scn-ApsInputArray");
		txtElementtext.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			var section = that["fun_DElementsContent"].getElement(that["fun_DElementsContent"]._listBuilder.getSelectedKey());
			section.text = value;
			that["fun_DElementsContent"].updateElement(that["fun_DElementsContent"]._listBuilder.getSelectedKey(),section);
		}, that);
		that["fun_DElementsContent"]._sectionPropertyLayout.addContent(sectiontext);
		that["fun_DElementsContent"]._sectionPropertyLayout.addContent(txtElementtext);

		var sectionimage = new sap.ui.commons.TextView({text : "Given image for the button"});
		sectionimage.addStyleClass("org-scn-ApsLabelArray");
		var txtElementimage = new sap.ui.commons.TextField({value : selectedElement.image, width: "180px"});
		txtElementimage.addStyleClass("org-scn-ApsInputArray");
		txtElementimage.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			var section = that["fun_DElementsContent"].getElement(that["fun_DElementsContent"]._listBuilder.getSelectedKey());
			section.image = value;
			that["fun_DElementsContent"].updateElement(that["fun_DElementsContent"]._listBuilder.getSelectedKey(),section);
		}, that);
		that["fun_DElementsContent"]._sectionPropertyLayout.addContent(sectionimage);
		that["fun_DElementsContent"]._sectionPropertyLayout.addContent(txtElementimage);

		var sectionselected = new sap.ui.commons.TextView({text : "Selection state of the button"});
		sectionselected.addStyleClass("org-scn-ApsLabelArray");
		var txtElementselected = new sap.ui.commons.CheckBox({checked : selectedElement.selected, width: "180px", text: "Selection state of the button"});
		txtElementselected.addStyleClass("org-scn-ApsInputArray");
		txtElementselected.attachChange(function(oControlEvent){
			var checked = oControlEvent.getParameter("checked");
			var section = that["fun_DElementsContent"].getElement(that["fun_DElementsContent"]._listBuilder.getSelectedKey());
			section.selected = checked;
			that["fun_DElementsContent"].updateElement(that["fun_DElementsContent"]._listBuilder.getSelectedKey(),section);
		}, that);
		that["fun_DElementsContent"]._sectionPropertyLayout.addContent(sectionselected);
		that["fun_DElementsContent"]._sectionPropertyLayout.addContent(txtElementselected);


		var itemsLabel = new sap.ui.commons.TextView({text : "Items"});
		itemsLabel.addStyleClass("org-scn-ApsLabelArray");
		var itemsList = new org.scn.community.propertysheet.ListBuilder({
			width : "200px",
			newKeyPrefix : "ITEM_",
			newTextPrefix : "Item ",
			list : that["fun_DElementsContent"].gatherItems(that["fun_DElementsContent"]._listBuilder.getSelectedKey()),
			showDetail : true,
			selectedKey : that["fun_DElementsContent"]._selectedItemKey
		});
		
		itemsList.attachItemAdded(that["fun_DElementsContent"].addItem,that);
		itemsList.attachItemDeleted(that["fun_DElementsContent"].delItem,that);
		itemsList.attachItemDetail(that["fun_DElementsContent"].showItemProperties,that);
		itemsList.attachItemMoved(that["fun_DElementsContent"].moveItem,that);
		itemsList.attachItemSelected(that["fun_DElementsContent"].itemSelected,that);
		
		that["fun_DElementsContent"]._sectionPropertyList.addContent(itemsLabel);
		that["fun_DElementsContent"]._sectionPropertyList.addContent(itemsList);
	};
	/*
	 * Displays Item Properties in a Popup Panel
	 */
	that["fun_DElementsContent"].showItemProperties = function(oControlEvent){
		var detailData = oControlEvent.getParameters();
		that["fun_DElementsContent"]._currentItemConfig = that["fun_DElementsContent"].getItem(that["fun_DElementsContent"]._listBuilder.getSelectedKey(),detailData.key);
		if(!that["fun_DElementsContent"]._currentItemConfig) return;
		
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
		var txtItemKey = new sap.ui.commons.TextField({value : that["fun_DElementsContent"]._currentItemConfig.key, width: "300px"});
		txtItemKey.addStyleClass("org-scn-ApsInputArray");
		txtItemKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			var allItems = new org.scn.community.propertysheet.ListBuilder();		
			allItems.setList(that["fun_DElementsContent"]._elementsContent);
			var newItemKey = allItems.generateKey(value);
			delete allItems;
			that["fun_DElementsContent"]._currentItemConfig.key = newItemKey;		
		}, that);
		itemDetailLayout.addContent(itemKey);
		itemDetailLayout.addContent(txtItemKey);

		var itemtext = new sap.ui.commons.TextView({text : "Text for the item"});
		itemtext.addStyleClass("org-scn-ApsLabelArray");
		var txtItemtext = new sap.ui.commons.TextField({value : that["fun_DElementsContent"]._currentItemConfig.text, width: "300px"});
		txtItemtext.addStyleClass("org-scn-ApsInputArray");
		txtItemtext.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			that["fun_DElementsContent"]._currentItemConfig.text = value;		
		}, that);
		itemDetailLayout.addContent(itemtext);
		itemDetailLayout.addContent(txtItemtext);

		var itemimage = new sap.ui.commons.TextView({text : "Given image for the item"});
		itemimage.addStyleClass("org-scn-ApsLabelArray");
		var txtItemimage = new sap.ui.commons.TextField({value : that["fun_DElementsContent"]._currentItemConfig.image, width: "300px"});
		txtItemimage.addStyleClass("org-scn-ApsInputArray");
		txtItemimage.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			that["fun_DElementsContent"]._currentItemConfig.image = value;		
		}, that);
		itemDetailLayout.addContent(itemimage);
		itemDetailLayout.addContent(txtItemimage);

		var itemselected = new sap.ui.commons.TextView({text : "Selection state of the item"});
		itemselected.addStyleClass("org-scn-ApsLabelArray");
		var txtItemselected = new sap.ui.commons.CheckBox({checked : that["fun_DElementsContent"]._currentItemConfig.selected, width: "300px", text: "Selection state of the item"});
		txtItemselected.addStyleClass("org-scn-ApsInputArray");
		txtItemselected.attachChange(function(oControlEvent){
			var checked = oControlEvent.getParameter("checked");
			that["fun_DElementsContent"]._currentItemConfig.selected = checked;		
		}, that);
		itemDetailLayout.addContent(itemselected);
		itemDetailLayout.addContent(txtItemselected);


		var detailButtons = new sap.ui.commons.layout.HorizontalLayout({ });
		var closeButton = new sap.ui.commons.Button({
			text : "Cancel"
		});
		var okButton = new sap.ui.commons.Button({
			text : "Update"
		});
		
		closeButton.attachPress(that["fun_DElementsContent"].closeDetail,that);
		okButton.attachPress(that["fun_DElementsContent"].updateItem,that);
		
		detailButtons.addContent(closeButton);
		detailButtons.addContent(okButton);
		detailButtons.addStyleClass("org-scn-ApsPopUpButtons");
		
		itemDetailLayout.addContent(detailButtons);
		itemDetailPanel.addContent(itemDetailLayout);
		
		if(!that["fun_DElementsContent"]._popup) that["fun_DElementsContent"]._popup = new sap.ui.core.Popup(itemDetailPanel, true, true, true);
		
		//that["fun_DElementsContent"]._popup.destroyContent();
		that["fun_DElementsContent"]._popup.open(250,"center center", "center center", document.body, null);
	};
	/*
	 * Fires when Element Listbox is selected
	 */
	that["fun_DElementsContent"].elementSelected = function(oControlEvent){
		that["fun_DElementsContent"]._selectedElementKey = "";
		if(oControlEvent.getParameters().key) that["fun_DElementsContent"]._selectedElementKey = oControlEvent.getParameters().key;
		that["fun_DElementsContent"].showElementProperties();
	};
	/*
	 * Fires when Item Listbox is selected
	 */
	that["fun_DElementsContent"].itemSelected = function(oControlEvent){
		that["fun_DElementsContent"]._selectedItemKey = "";
		if(oControlEvent.getParameters().key) that["fun_DElementsContent"]._selectedItemKey = oControlEvent.getParameters().key;
	};
	/*
	 * Fires when component is selected or when properties change to re-render
	 */
	that["fun_DElementsContent"].update = function(){
		that["fun_DElementsContent"]._listBuilder.setList(that["fun_DElementsContent"].gatherElements());
		that["fun_DElementsContent"].showElementProperties(that["fun_DElementsContent"]._listBuilder.getSelectedKey());
	};
	/*
	 * Fires when item delete button clicked
	 */
	that["fun_DElementsContent"].delItem = function(oControlEvent){
		var sectionKey = that["fun_DElementsContent"]._listBuilder.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		if(sectionKey && itemKey) {
			for(var i=0;i<that["fun_DElementsContent"]._elementsContent.length;i++){
				if(that["fun_DElementsContent"]._elementsContent[i].leaf == true && that["fun_DElementsContent"]._elementsContent[i].key == itemKey && that["fun_DElementsContent"]._elementsContent[i].parentKey==sectionKey) {
					that["fun_DElementsContent"]._elementsContent.splice(i,1);
					that.firePropertiesChanged(["DElementsContent"]);
					that["fun_DElementsContent"].update();
				}
			}
		}
		that["fun_DElementsContent"].update();
	}
	/*
	 * Fires when section delete button clicked
	 */
	that["fun_DElementsContent"].delElement = function(oControlEvent){
		var key = oControlEvent.getParameter("key");
		if(key) {
			// Delete Element
			for(var i=0;i<that["fun_DElementsContent"]._elementsContent.length;i++){
				if(that["fun_DElementsContent"]._elementsContent[i].leaf == false && that["fun_DElementsContent"]._elementsContent[i].key == key) {
					that["fun_DElementsContent"]._elementsContent.splice(i,1);
				}
			}
			// Delete Items under Element
			for(var i=that["fun_DElementsContent"]._elementsContent.length-1;i>=0;i--){
				if(that["fun_DElementsContent"]._elementsContent[i].leaf == true && that["fun_DElementsContent"]._elementsContent[i].parentKey == key) {
					that["fun_DElementsContent"]._elementsContent.splice(i,1);
				}
			}
			that.firePropertiesChanged(["DElementsContent"]);
		}
		that["fun_DElementsContent"].update();
	};
	/*
	 * Fires when item add button clicked
	 */
	that["fun_DElementsContent"].addItem = function(oControlEvent){
		var allItems = new org.scn.community.propertysheet.ListBuilder();		
		allItems.setList(that["fun_DElementsContent"]._elementsContent);
		var newItemKey = allItems.generateKey("Item");
		delete allItems;
		var sectionItems = new org.scn.community.propertysheet.ListBuilder();
		sectionItems.setList(that["fun_DElementsContent"]._elementsContent);
		var newItem = { 
			parentKey : that["fun_DElementsContent"]._listBuilder.getSelectedKey(),
			key : newItemKey, 
			leaf: true, 
			text:"", 
			image:"", 
			selected:false
		};
		that["fun_DElementsContent"]._elementsContent.push(newItem);
		that.firePropertiesChanged(["DElementsContent"]);
		that["fun_DElementsContent"].update();
	}
	/*
	 * Fires when section add button clicked
	 */
	that["fun_DElementsContent"].addElement = function(oControlEvent){
		var newKey = that["fun_DElementsContent"]._listBuilder.generateKey("Element");
		var newElement = { 
			parentKey : "ROOT",
			key : newKey,
			leaf: false, 
			text:"", 
			image:"", 
			selected:false
		};
		that["fun_DElementsContent"]._listBuilder.setSelectedKey(newKey);
		that["fun_DElementsContent"]._elementsContent.push(newElement);
		that.firePropertiesChanged(["DElementsContent"]);
		that["fun_DElementsContent"].update();
	};
	/*
	 * Fires when section up or down button clicked
	 */
	that["fun_DElementsContent"].moveElement = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		for(var i=0;i<that["fun_DElementsContent"]._elementsContent.length;i++){
			if(that["fun_DElementsContent"]._elementsContent[i].key == movementData.key && !that["fun_DElementsContent"]._elementsContent[i].leaf) sourceIndex = i;
			if(that["fun_DElementsContent"]._elementsContent[i].key == movementData.targetKey && !that["fun_DElementsContent"]._elementsContent[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = that["fun_DElementsContent"]._elementsContent[targetIndex];
			that["fun_DElementsContent"]._elementsContent[targetIndex] = that["fun_DElementsContent"]._elementsContent[sourceIndex];
			that["fun_DElementsContent"]._elementsContent[sourceIndex] = temp;
			that.firePropertiesChanged(["DElementsContent"]);
			that["fun_DElementsContent"].update();
		}
	};
	/*
	 * Close Item Properties Popup
	 */
	that["fun_DElementsContent"].closeDetail = function(oControlEvent){
		if(that["fun_DElementsContent"]._popup) {
			that["fun_DElementsContent"]._popup.close();
			that["fun_DElementsContent"]._popup.destroy();
			delete that["fun_DElementsContent"]._popup;
		}
		
	};
	/*
	 * Fires when item up or down button clicked
	 */
	that["fun_DElementsContent"].moveItem = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		var sectionKey = that["fun_DElementsContent"]._listBuilder.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		for(var i=0;i<that["fun_DElementsContent"]._elementsContent.length;i++){
			if(that["fun_DElementsContent"]._elementsContent[i].key == itemKey && that["fun_DElementsContent"]._elementsContent[i].parentKey == sectionKey && that["fun_DElementsContent"]._elementsContent[i].leaf) sourceIndex = i;
			if(that["fun_DElementsContent"]._elementsContent[i].key == movementData.targetKey && that["fun_DElementsContent"]._elementsContent[i].parentKey == sectionKey && that["fun_DElementsContent"]._elementsContent[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = that["fun_DElementsContent"]._elementsContent[targetIndex];
			that["fun_DElementsContent"]._elementsContent[targetIndex] = that["fun_DElementsContent"]._elementsContent[sourceIndex];
			that["fun_DElementsContent"]._elementsContent[sourceIndex] = temp;
			that.firePropertiesChanged(["DElementsContent"]);
			that["fun_DElementsContent"].update();
		}
	}
	/*
	 * Convenience Function to return only entries that are Elements
	 */
	that["fun_DElementsContent"].gatherElements = function(){
		var sections = [];
		for(var i=0;i<that["fun_DElementsContent"]._elementsContent.length;i++){
			if(that["fun_DElementsContent"]._elementsContent[i].leaf==false) sections.push(that["fun_DElementsContent"]._elementsContent[i]);
		}
		return sections;
	};
	/*
	 * Convenience Function to return only entries that are Items (Leafs)
	 */
	that["fun_DElementsContent"].gatherItems = function(sectionKey){
		var items = [];
		for(var i=0;i<that["fun_DElementsContent"]._elementsContent.length;i++){
			if(that["fun_DElementsContent"]._elementsContent[i].leaf==true && that["fun_DElementsContent"]._elementsContent[i].parentKey==sectionKey) items.push(that["fun_DElementsContent"]._elementsContent[i]);
		}
		return items;
	};
	/*
	 * Property Sheet Initialization
	 */
	that["fun_DElementsContent"].init = function(){
		
		that["fun_DElementsContent"]._label = new sap.ui.commons.Label({text: " List of Buttons with Sub-Items"});
		that["fun_DElementsContent"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DElementsContent"]._label);
		
		that["fun_DElementsContent"]._hLayout = new sap.ui.commons.layout.HorizontalLayout({ });
		that._content.addContent(that["fun_DElementsContent"]._hLayout);
		that["fun_DElementsContent"]._listBuilder = new org.scn.community.propertysheet.ListBuilder({
			width : "200px"
		});
		
		that["fun_DElementsContent"]._listBuilder.attachItemAdded(that["fun_DElementsContent"].addElement,that);
		that["fun_DElementsContent"]._listBuilder.attachItemDeleted(that["fun_DElementsContent"].delElement,that);
		that["fun_DElementsContent"]._listBuilder.attachItemMoved(that["fun_DElementsContent"].moveElement,that);
		that["fun_DElementsContent"]._listBuilder.attachItemSelected(that["fun_DElementsContent"].elementSelected,that);
		
		that["fun_DElementsContent"]._sectionPropertyLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		that["fun_DElementsContent"]._sectionPropertyList = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		that["fun_DElementsContent"]._sectionPropertyLayout.addStyleClass("org-scn-ApsDoubleArrayVertical");
		that["fun_DElementsContent"]._sectionPropertyList.addStyleClass("org-scn-ApsDoubleArrayVertical");

		that["fun_DElementsContent"]._hLayout.addContent(that["fun_DElementsContent"]._listBuilder);
		that["fun_DElementsContent"]._hLayout.addContent(that["fun_DElementsContent"]._sectionPropertyLayout);
		that["fun_DElementsContent"]._hLayout.addContent(that["fun_DElementsContent"]._sectionPropertyList);
		that["fun_DElementsContent"]._sectionPropertyList.addStyleClass("org-scn-Aps-DetailList-DoubleArray");
		that["fun_DElementsContent"]._hLayout.addStyleClass("org-scn-ApsDoubleArray");
		
		that["fun_DElementsContent"].update();
	};

	that.DElementsContent = function(s){
		if( s === undefined){
			return JSON.stringify(that["fun_DElementsContent"]._elementsContent);
		}else{
			var o = [];
			if(s && s!="") o = jQuery.parseJSON(s);
			that["fun_DElementsContent"]._elementsContent = o;
			that["fun_DElementsContent"].update();
			return that;
		}
	};







	that["fun_DSelectionType"] = {};
	
	that["fun_DSelectionType"].update = function(){
		that["fun_DSelectionType"]._input.setSelectedKey(that["fun_DSelectionType"]._);
	};
	
	that["fun_DSelectionType"].init = function(){
		that["fun_DSelectionType"]._label = new sap.ui.commons.Label({text: " Selection Type"});
		that["fun_DSelectionType"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DSelectionType"]._label);
		
		that["fun_DSelectionType"]._input = new sap.ui.commons.ComboBox({width: "300px"});
		that["fun_DSelectionType"]._input.addItem(new sap.ui.core.ListItem({key:"Single", text:"Single"}));
		that["fun_DSelectionType"]._input.addItem(new sap.ui.core.ListItem({key:"Multiple", text:"Multiple"}));
		
		that._content.addContent(that["fun_DSelectionType"]._input);
		that["fun_DSelectionType"]._input.attachChange(that["fun_DSelectionType"].propertyChanged, that);
		that["fun_DSelectionType"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DSelectionType"].update();
	};

	that["fun_DSelectionType"].propertyChanged = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		that["fun_DSelectionType"]._ = newValue;
		that.firePropertiesChanged(["DSelectionType"]);
	};
	
	that.DSelectionType = function(s){
		if( s === undefined){
			return that["fun_DSelectionType"]._;
		}else{
			that["fun_DSelectionType"]._ = s;
			that["fun_DSelectionType"].update();
			return that;
		}
	};

	that["fun_DDefaultImage"] = {};
	
	that["fun_DDefaultImage"].update = function(){
		that["fun_DDefaultImage"]._input.setValue(that["fun_DDefaultImage"]._);
	};
	
	that["fun_DDefaultImage"].init = function(){
		that["fun_DDefaultImage"]._label = new sap.ui.commons.Label({text: " Url for Default Image"});
		that["fun_DDefaultImage"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DDefaultImage"]._label);
		
		that["fun_DDefaultImage"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DDefaultImage"]._input);
		that["fun_DDefaultImage"]._input.attachChange(that["fun_DDefaultImage"].propertyChanged, that);
		that["fun_DDefaultImage"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DDefaultImage"].update();
	};

	that["fun_DDefaultImage"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DDefaultImage"]._ = value;
		that.firePropertiesChanged(["DDefaultImage"]);
	};
	
	that.DDefaultImage = function(s){
		if( s === undefined){
			return that["fun_DDefaultImage"]._;
		}else{
			that["fun_DDefaultImage"]._ = s;
			that["fun_DDefaultImage"].update();
			return that;
		}
	};

	that["fun_DWithImages"] = {};
	
	that["fun_DWithImages"].update = function(){
		that["fun_DWithImages"]._input.setChecked(that["fun_DWithImages"]._);
	};
	
	that["fun_DWithImages"].init = function(){
		that["fun_DWithImages"]._label = new sap.ui.commons.Label({text: " Use Images"});
		that["fun_DWithImages"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DWithImages"]._label);
		
		that["fun_DWithImages"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Use Images"});
		that._content.addContent(that["fun_DWithImages"]._input);
		that["fun_DWithImages"]._input.attachChange(that["fun_DWithImages"].propertyChanged, that);
		that["fun_DWithImages"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DWithImages"].update();
	};

	that["fun_DWithImages"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_DWithImages"]._ = checked;
		that.firePropertiesChanged(["DWithImages"]);
	};
	
	that.DWithImages = function(s){
		if( s === undefined){
			return that["fun_DWithImages"]._;
		}else{
			that["fun_DWithImages"]._ = s;
			that["fun_DWithImages"].update();
			return that;
		}
	};

	that["fun_DImageSize"] = {};
	
	that["fun_DImageSize"].update = function(){
		that["fun_DImageSize"]._input.setSelectedKey(that["fun_DImageSize"]._);
	};
	
	that["fun_DImageSize"].init = function(){
		that["fun_DImageSize"]._label = new sap.ui.commons.Label({text: " Size of the Image"});
		that["fun_DImageSize"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DImageSize"]._label);
		
		that["fun_DImageSize"]._input = new sap.ui.commons.ComboBox({width: "300px"});
		that["fun_DImageSize"]._input.addItem(new sap.ui.core.ListItem({key:"16px", text:"16px"}));
		that["fun_DImageSize"]._input.addItem(new sap.ui.core.ListItem({key:"32px", text:"32px"}));
		
		that._content.addContent(that["fun_DImageSize"]._input);
		that["fun_DImageSize"]._input.attachChange(that["fun_DImageSize"].propertyChanged, that);
		that["fun_DImageSize"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DImageSize"].update();
	};

	that["fun_DImageSize"].propertyChanged = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		that["fun_DImageSize"]._ = newValue;
		that.firePropertiesChanged(["DImageSize"]);
	};
	
	that.DImageSize = function(s){
		if( s === undefined){
			return that["fun_DImageSize"]._;
		}else{
			that["fun_DImageSize"]._ = s;
			that["fun_DImageSize"].update();
			return that;
		}
	};


});
