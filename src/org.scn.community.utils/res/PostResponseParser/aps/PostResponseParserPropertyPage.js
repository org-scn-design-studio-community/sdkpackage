
/**
 * Generated ZTL Class for Post Response Parser 1.X
 * 
 * DO NOT EDIT
 */
sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.utils.PostResponseParserPropertyPage",  function() {
	var that = this;

	that.init = function () {
		that._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		that._content.placeAt($("#content"));

		that["fun_DBasicAuthorisation"].init();
		that["fun_DContentType"].init();
		that["fun_DCrossDomain"].init();
		that["fun_DExpectedContentType"].init();
		that["fun_DExpectedResponseStatus"].init();
		that["fun_DHeaders"].init();
		that["fun_DJsonp"].init();
		that["fun_DParameters"].init();
		that["fun_DPayload"].init();
		that["fun_DRawParameters"].init();
		that["fun_DRequestMethod"].init();
		that["fun_DRequestType"].init();
		that["fun_DUrl"].init();
		that["fun_DWithCredentials"].init();
		
	};
	
	that.componentSelected = function(){
		that["fun_DBasicAuthorisation"].update();
		that["fun_DContentType"].update();
		that["fun_DCrossDomain"].update();
		that["fun_DExpectedContentType"].update();
		that["fun_DExpectedResponseStatus"].update();
		that["fun_DHeaders"].update();
		that["fun_DJsonp"].update();
		that["fun_DParameters"].update();
		that["fun_DPayload"].update();
		that["fun_DRawParameters"].update();
		that["fun_DRequestMethod"].update();
		that["fun_DRequestType"].update();
		that["fun_DUrl"].update();
		that["fun_DWithCredentials"].update();
		
	};
	
	
	that["fun_DBasicAuthorisation"] = {};
	
	that["fun_DBasicAuthorisation"].update = function(){
		that["fun_DBasicAuthorisation"]._input.setValue(that["fun_DBasicAuthorisation"]._);
	};
	
	that["fun_DBasicAuthorisation"].init = function(){
		that["fun_DBasicAuthorisation"]._label = new sap.ui.commons.Label({text: " Basic Authorization Content [Basic: GUID]"});
		that["fun_DBasicAuthorisation"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DBasicAuthorisation"]._label);
		
		that["fun_DBasicAuthorisation"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DBasicAuthorisation"]._input);
		that["fun_DBasicAuthorisation"]._input.attachChange(that["fun_DBasicAuthorisation"].propertyChanged, that);
		that["fun_DBasicAuthorisation"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DBasicAuthorisation"].update();
	};

	that["fun_DBasicAuthorisation"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DBasicAuthorisation"]._ = value;
		that.firePropertiesChanged(["DBasicAuthorisation"]);
	};
	
	that.DBasicAuthorisation = function(s){
		if( s === undefined){
			return that["fun_DBasicAuthorisation"]._;
		}else{
			that["fun_DBasicAuthorisation"]._ = s;
			that["fun_DBasicAuthorisation"].update();
			return that;
		}
	};



	that["fun_DContentType"] = {};
	
	that["fun_DContentType"].update = function(){
		that["fun_DContentType"]._input.setValue(that["fun_DContentType"]._);
	};
	
	that["fun_DContentType"].init = function(){
		that["fun_DContentType"]._label = new sap.ui.commons.Label({text: " Content Type"});
		that["fun_DContentType"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DContentType"]._label);
		
		that["fun_DContentType"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DContentType"]._input);
		that["fun_DContentType"]._input.attachChange(that["fun_DContentType"].propertyChanged, that);
		that["fun_DContentType"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DContentType"].update();
	};

	that["fun_DContentType"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DContentType"]._ = value;
		that.firePropertiesChanged(["DContentType"]);
	};
	
	that.DContentType = function(s){
		if( s === undefined){
			return that["fun_DContentType"]._;
		}else{
			that["fun_DContentType"]._ = s;
			that["fun_DContentType"].update();
			return that;
		}
	};

	that["fun_DCrossDomain"] = {};
	
	that["fun_DCrossDomain"].update = function(){
		that["fun_DCrossDomain"]._input.setChecked(that["fun_DCrossDomain"]._);
	};
	
	that["fun_DCrossDomain"].init = function(){
		that["fun_DCrossDomain"]._label = new sap.ui.commons.Label({text: " Is this Request Cross-Domain"});
		that["fun_DCrossDomain"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DCrossDomain"]._label);
		
		that["fun_DCrossDomain"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Is this Request Cross-Domain"});
		that._content.addContent(that["fun_DCrossDomain"]._input);
		that["fun_DCrossDomain"]._input.attachChange(that["fun_DCrossDomain"].propertyChanged, that);
		that["fun_DCrossDomain"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DCrossDomain"].update();
	};

	that["fun_DCrossDomain"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_DCrossDomain"]._ = checked;
		that.firePropertiesChanged(["DCrossDomain"]);
	};
	
	that.DCrossDomain = function(s){
		if( s === undefined){
			return that["fun_DCrossDomain"]._;
		}else{
			that["fun_DCrossDomain"]._ = s;
			that["fun_DCrossDomain"].update();
			return that;
		}
	};

	that["fun_DExpectedContentType"] = {};
	
	that["fun_DExpectedContentType"].update = function(){
		that["fun_DExpectedContentType"]._input.setSelectedKey(that["fun_DExpectedContentType"]._);
	};
	
	that["fun_DExpectedContentType"].init = function(){
		that["fun_DExpectedContentType"]._label = new sap.ui.commons.Label({text: " Expected Content Type"});
		that["fun_DExpectedContentType"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DExpectedContentType"]._label);
		
		that["fun_DExpectedContentType"]._input = new sap.ui.commons.ComboBox({width: "300px"});
		that["fun_DExpectedContentType"]._input.addItem(new sap.ui.core.ListItem({key:"text", text:"text"}));
		that["fun_DExpectedContentType"]._input.addItem(new sap.ui.core.ListItem({key:"json", text:"json"}));
		
		that._content.addContent(that["fun_DExpectedContentType"]._input);
		that["fun_DExpectedContentType"]._input.attachChange(that["fun_DExpectedContentType"].propertyChanged, that);
		that["fun_DExpectedContentType"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DExpectedContentType"].update();
	};

	that["fun_DExpectedContentType"].propertyChanged = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		that["fun_DExpectedContentType"]._ = newValue;
		that.firePropertiesChanged(["DExpectedContentType"]);
	};
	
	that.DExpectedContentType = function(s){
		if( s === undefined){
			return that["fun_DExpectedContentType"]._;
		}else{
			that["fun_DExpectedContentType"]._ = s;
			that["fun_DExpectedContentType"].update();
			return that;
		}
	};

	that["fun_DExpectedResponseStatus"] = {};
	
	that["fun_DExpectedResponseStatus"].update = function(){
		that["fun_DExpectedResponseStatus"]._input.setValue(that["fun_DExpectedResponseStatus"]._);
	};
	
	that["fun_DExpectedResponseStatus"].init = function(){
		that["fun_DExpectedResponseStatus"]._label = new sap.ui.commons.Label({text: " Response Status for Good Response"});
		that["fun_DExpectedResponseStatus"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DExpectedResponseStatus"]._label);
		
		that["fun_DExpectedResponseStatus"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DExpectedResponseStatus"]._input);
		that["fun_DExpectedResponseStatus"]._input.attachChange(that["fun_DExpectedResponseStatus"].propertyChanged, that);
		that["fun_DExpectedResponseStatus"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DExpectedResponseStatus"].update();
	};

	that["fun_DExpectedResponseStatus"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DExpectedResponseStatus"]._ = value;
		that.firePropertiesChanged(["DExpectedResponseStatus"]);
	};
	
	that.DExpectedResponseStatus = function(s){
		if( s === undefined){
			return that["fun_DExpectedResponseStatus"]._;
		}else{
			that["fun_DExpectedResponseStatus"]._ = s;
			that["fun_DExpectedResponseStatus"].update();
			return that;
		}
	};

	that["fun_DHeaders"] = {};
	
	that["fun_DHeaders"]._elementsContent = [];
	that["fun_DHeaders"]._selectedElementKey = "";
	that["fun_DHeaders"]._selectedItemKey = "";
	that["fun_DHeaders"]._currentItemConfig = {};

	/*
	 * Retrieves JSON for Element Entry
	 */
	that["fun_DHeaders"].getElement = function(key){
		var sections = that["fun_DHeaders"].gatherElements();
		for(var i=0;i<sections.length;i++){
			if(sections[i].key == key) return sections[i];
		}
	};
	/*
	 * Retrieves JSON for Item Entry
	 */
	that["fun_DHeaders"].getItem = function(sectionKey,key){
		for(var i=0;i<that["fun_DHeaders"]._elementsContent.length;i++){
			if(that["fun_DHeaders"]._elementsContent[i].key == key && that["fun_DHeaders"]._elementsContent[i].parentKey==sectionKey) return that["fun_DHeaders"]._elementsContent[i];
		}
	};
	/*
	 * Update Element JSON and notify Design Studio IDE
	 */
	that["fun_DHeaders"].updateElement = function(key,section){
		for(var i=0;i<that["fun_DHeaders"]._elementsContent.length;i++){
			var element = that["fun_DHeaders"]._elementsContent[i];
			if(!element.leaf && element.key==key){
				that["fun_DHeaders"]._elementsContent[i] = section;
			}
		}
		that.firePropertiesChanged(["DHeaders"]);
		that["fun_DHeaders"].update();
	};
	/*
	 * Update Item JSON and notify Design Studio IDE
	 */
	that["fun_DHeaders"].updateItem = function(key){
		for(var i=0;i<that["fun_DHeaders"]._elementsContent.length;i++){
			var element = that["fun_DHeaders"]._elementsContent[i];
			if(element.leaf && element.key==key){
				that["fun_DHeaders"]._elementsContent[i] = that["fun_DHeaders"]._currentItemConfig;
			}
		}
		that.firePropertiesChanged(["DHeaders"]);
		that["fun_DHeaders"].update();
		that["fun_DHeaders"].closeDetail();
	};
	/*
	 * Displays Element Properties
	 */
	that["fun_DHeaders"].showElementProperties = function(){
		that["fun_DHeaders"]._sectionPropertyLayout.destroyContent();
		that["fun_DHeaders"]._sectionPropertyList.destroyContent();
		
		that["fun_DHeaders"]._selectedElementKey = that["fun_DHeaders"]._listBuilder.getSelectedKey();
		if(!that["fun_DHeaders"]._selectedElementKey) return;
		var selectedElement = that["fun_DHeaders"].getElement(that["fun_DHeaders"]._selectedElementKey);		
		if(!selectedElement) return;
		
		var items = that["fun_DHeaders"].gatherItems(that["fun_DHeaders"]._selectedElementKey);
		
		var sectionKey = new sap.ui.commons.TextView({text : "Header Name"});
		sectionKey.addStyleClass("org-scn-ApsLabelArray");
		var txtElementKey = new sap.ui.commons.TextField({value : selectedElement.key, width: "180px"});
		txtElementKey.addStyleClass("org-scn-ApsInputArray");
		txtElementKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			value = that["fun_DHeaders"]._listBuilder.generateKey(value);
			var section = that["fun_DHeaders"].getElement(that["fun_DHeaders"]._listBuilder.getSelectedKey());
			section.key = value;
			// Update Parent Key references
			for(var i=0;i<that["fun_DHeaders"]._elementsContent.length;i++){
				var element = that["fun_DHeaders"]._elementsContent[i];
				if(element.parentKey == that["fun_DHeaders"]._listBuilder.getSelectedKey() && element.leaf) element.parentKey = value;
			}
			that["fun_DHeaders"].updateElement(that["fun_DHeaders"]._listBuilder.getSelectedKey(),section);
			that["fun_DHeaders"]._listBuilder.setSelectedKey(value);
			that["fun_DHeaders"].showElementProperties();
		}, that);
		that["fun_DHeaders"]._sectionPropertyLayout.addContent(sectionKey);
		that["fun_DHeaders"]._sectionPropertyLayout.addContent(txtElementKey);

		var sectionvalue = new sap.ui.commons.TextView({text : "Header Value"});
		sectionvalue.addStyleClass("org-scn-ApsLabelArray");
		var txtElementvalue = new sap.ui.commons.TextField({value : selectedElement.value, width: "180px"});
		txtElementvalue.addStyleClass("org-scn-ApsInputArray");
		txtElementvalue.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			var section = that["fun_DHeaders"].getElement(that["fun_DHeaders"]._listBuilder.getSelectedKey());
			section.value = value;
			that["fun_DHeaders"].updateElement(that["fun_DHeaders"]._listBuilder.getSelectedKey(),section);
		}, that);
		that["fun_DHeaders"]._sectionPropertyLayout.addContent(sectionvalue);
		that["fun_DHeaders"]._sectionPropertyLayout.addContent(txtElementvalue);


		var itemsLabel = new sap.ui.commons.TextView({text : "Items"});
		itemsLabel.addStyleClass("org-scn-ApsLabelArray");
		var itemsList = new org.scn.community.propertysheet.ListBuilder({
			width : "200px",
			newKeyPrefix : "ITEM_",
			newTextPrefix : "Item ",
			list : that["fun_DHeaders"].gatherItems(that["fun_DHeaders"]._listBuilder.getSelectedKey()),
			showDetail : true,
			selectedKey : that["fun_DHeaders"]._selectedItemKey
		});
		
		itemsList.attachItemAdded(that["fun_DHeaders"].addItem,that);
		itemsList.attachItemDeleted(that["fun_DHeaders"].delItem,that);
		itemsList.attachItemDetail(that["fun_DHeaders"].showItemProperties,that);
		itemsList.attachItemMoved(that["fun_DHeaders"].moveItem,that);
		itemsList.attachItemSelected(that["fun_DHeaders"].itemSelected,that);
		
		that["fun_DHeaders"]._sectionPropertyList.addContent(itemsLabel);
		that["fun_DHeaders"]._sectionPropertyList.addContent(itemsList);
	};
	/*
	 * Displays Item Properties in a Popup Panel
	 */
	that["fun_DHeaders"].showItemProperties = function(oControlEvent){
		var detailData = oControlEvent.getParameters();
		that["fun_DHeaders"]._currentItemConfig = that["fun_DHeaders"].getItem(that["fun_DHeaders"]._listBuilder.getSelectedKey(),detailData.key);
		if(!that["fun_DHeaders"]._currentItemConfig) return;
		
		var itemDetailPanel = new sap.ui.commons.Panel({
			text : "Item Details",
			showCollapseIcon : false,
			width : "95%"
		});
		itemDetailPanel.addStyleClass("org-scn-ApsPopupPanel");
		var itemDetailLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		
		var itemKey = new sap.ui.commons.TextView({text : "%ITEM_PROPERTY_DESCRIPTION%"});
		itemKey.addStyleClass("org-scn-ApsLabelArray");
		var txtItemKey = new sap.ui.commons.TextField({value : that["fun_DHeaders"]._currentItemConfig.key, width: "300px"});
		txtItemKey.addStyleClass("org-scn-ApsInputArray");
		txtItemKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			var allItems = new org.scn.community.propertysheet.ListBuilder();		
			allItems.setList(that["fun_DHeaders"]._elementsContent);
			var newItemKey = allItems.generateKey(value);
			delete allItems;
			that["fun_DHeaders"]._currentItemConfig.key = newItemKey;		
		}, that);
		itemDetailLayout.addContent(itemKey);
		itemDetailLayout.addContent(txtItemKey);


		var detailButtons = new sap.ui.commons.layout.HorizontalLayout({ });
		var closeButton = new sap.ui.commons.Button({
			text : "Cancel"
		});
		var okButton = new sap.ui.commons.Button({
			text : "Update"
		});
		
		closeButton.attachPress(that["fun_DHeaders"].closeDetail,that);
		okButton.attachPress(that["fun_DHeaders"].updateItem,that);
		
		detailButtons.addContent(closeButton);
		detailButtons.addContent(okButton);
		detailButtons.addStyleClass("org-scn-ApsPopUpButtons");
		
		itemDetailLayout.addContent(detailButtons);
		itemDetailPanel.addContent(itemDetailLayout);
		
		if(!that["fun_DHeaders"]._popup) that["fun_DHeaders"]._popup = new sap.ui.core.Popup(itemDetailPanel, true, true, true);
		
		//that["fun_DHeaders"]._popup.destroyContent();
		that["fun_DHeaders"]._popup.open(250,"center center", "center center", document.body, null);
	};
	/*
	 * Fires when Element Listbox is selected
	 */
	that["fun_DHeaders"].elementSelected = function(oControlEvent){
		that["fun_DHeaders"]._selectedElementKey = "";
		if(oControlEvent.getParameters().key) that["fun_DHeaders"]._selectedElementKey = oControlEvent.getParameters().key;
		that["fun_DHeaders"].showElementProperties();
	};
	/*
	 * Fires when Item Listbox is selected
	 */
	that["fun_DHeaders"].itemSelected = function(oControlEvent){
		that["fun_DHeaders"]._selectedItemKey = "";
		if(oControlEvent.getParameters().key) that["fun_DHeaders"]._selectedItemKey = oControlEvent.getParameters().key;
	};
	/*
	 * Fires when component is selected or when properties change to re-render
	 */
	that["fun_DHeaders"].update = function(){
		that["fun_DHeaders"]._listBuilder.setList(that["fun_DHeaders"].gatherElements());
		that["fun_DHeaders"].showElementProperties(that["fun_DHeaders"]._listBuilder.getSelectedKey());
	};
	/*
	 * Fires when item delete button clicked
	 */
	that["fun_DHeaders"].delItem = function(oControlEvent){
		var sectionKey = that["fun_DHeaders"]._listBuilder.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		if(sectionKey && itemKey) {
			for(var i=0;i<that["fun_DHeaders"]._elementsContent.length;i++){
				if(that["fun_DHeaders"]._elementsContent[i].leaf == true && that["fun_DHeaders"]._elementsContent[i].key == itemKey && that["fun_DHeaders"]._elementsContent[i].parentKey==sectionKey) {
					that["fun_DHeaders"]._elementsContent.splice(i,1);
					that.firePropertiesChanged(["DHeaders"]);
					that["fun_DHeaders"].update();
				}
			}
		}
		that["fun_DHeaders"].update();
	}
	/*
	 * Fires when section delete button clicked
	 */
	that["fun_DHeaders"].delElement = function(oControlEvent){
		var key = oControlEvent.getParameter("key");
		if(key) {
			// Delete Element
			for(var i=0;i<that["fun_DHeaders"]._elementsContent.length;i++){
				if(that["fun_DHeaders"]._elementsContent[i].leaf == false && that["fun_DHeaders"]._elementsContent[i].key == key) {
					that["fun_DHeaders"]._elementsContent.splice(i,1);
				}
			}
			// Delete Items under Element
			for(var i=that["fun_DHeaders"]._elementsContent.length-1;i>=0;i--){
				if(that["fun_DHeaders"]._elementsContent[i].leaf == true && that["fun_DHeaders"]._elementsContent[i].parentKey == key) {
					that["fun_DHeaders"]._elementsContent.splice(i,1);
				}
			}
			that.firePropertiesChanged(["DHeaders"]);
		}
		that["fun_DHeaders"].update();
	};
	/*
	 * Fires when item add button clicked
	 */
	that["fun_DHeaders"].addItem = function(oControlEvent){
		var allItems = new org.scn.community.propertysheet.ListBuilder();		
		allItems.setList(that["fun_DHeaders"]._elementsContent);
		var newItemKey = allItems.generateKey("Item");
		delete allItems;
		var sectionItems = new org.scn.community.propertysheet.ListBuilder();
		sectionItems.setList(that["fun_DHeaders"]._elementsContent);
		var newItem = { 
			parentKey : that["fun_DHeaders"]._listBuilder.getSelectedKey(),
			key : newItemKey, 
			leaf: true, 
			
		};
		that["fun_DHeaders"]._elementsContent.push(newItem);
		that.firePropertiesChanged(["DHeaders"]);
		that["fun_DHeaders"].update();
	}
	/*
	 * Fires when section add button clicked
	 */
	that["fun_DHeaders"].addElement = function(oControlEvent){
		var newKey = that["fun_DHeaders"]._listBuilder.generateKey("Element");
		var newElement = { 
			parentKey : "ROOT",
			key : newKey,
			leaf: false, 
			value:""
		};
		that["fun_DHeaders"]._listBuilder.setSelectedKey(newKey);
		that["fun_DHeaders"]._elementsContent.push(newElement);
		that.firePropertiesChanged(["DHeaders"]);
		that["fun_DHeaders"].update();
	};
	/*
	 * Fires when section up or down button clicked
	 */
	that["fun_DHeaders"].moveElement = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		for(var i=0;i<that["fun_DHeaders"]._elementsContent.length;i++){
			if(that["fun_DHeaders"]._elementsContent[i].key == movementData.key && !that["fun_DHeaders"]._elementsContent[i].leaf) sourceIndex = i;
			if(that["fun_DHeaders"]._elementsContent[i].key == movementData.targetKey && !that["fun_DHeaders"]._elementsContent[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = that["fun_DHeaders"]._elementsContent[targetIndex];
			that["fun_DHeaders"]._elementsContent[targetIndex] = that["fun_DHeaders"]._elementsContent[sourceIndex];
			that["fun_DHeaders"]._elementsContent[sourceIndex] = temp;
			that.firePropertiesChanged(["DHeaders"]);
			that["fun_DHeaders"].update();
		}
	};
	/*
	 * Close Item Properties Popup
	 */
	that["fun_DHeaders"].closeDetail = function(oControlEvent){
		if(that["fun_DHeaders"]._popup) {
			that["fun_DHeaders"]._popup.close();
			that["fun_DHeaders"]._popup.destroy();
			delete that["fun_DHeaders"]._popup;
		}
		
	};
	/*
	 * Fires when item up or down button clicked
	 */
	that["fun_DHeaders"].moveItem = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		var sectionKey = that["fun_DHeaders"]._listBuilder.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		for(var i=0;i<that["fun_DHeaders"]._elementsContent.length;i++){
			if(that["fun_DHeaders"]._elementsContent[i].key == itemKey && that["fun_DHeaders"]._elementsContent[i].parentKey == sectionKey && that["fun_DHeaders"]._elementsContent[i].leaf) sourceIndex = i;
			if(that["fun_DHeaders"]._elementsContent[i].key == movementData.targetKey && that["fun_DHeaders"]._elementsContent[i].parentKey == sectionKey && that["fun_DHeaders"]._elementsContent[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = that["fun_DHeaders"]._elementsContent[targetIndex];
			that["fun_DHeaders"]._elementsContent[targetIndex] = that["fun_DHeaders"]._elementsContent[sourceIndex];
			that["fun_DHeaders"]._elementsContent[sourceIndex] = temp;
			that.firePropertiesChanged(["DHeaders"]);
			that["fun_DHeaders"].update();
		}
	}
	/*
	 * Convenience Function to return only entries that are Elements
	 */
	that["fun_DHeaders"].gatherElements = function(){
		var sections = [];
		for(var i=0;i<that["fun_DHeaders"]._elementsContent.length;i++){
			if(that["fun_DHeaders"]._elementsContent[i].leaf==false) sections.push(that["fun_DHeaders"]._elementsContent[i]);
		}
		return sections;
	};
	/*
	 * Convenience Function to return only entries that are Items (Leafs)
	 */
	that["fun_DHeaders"].gatherItems = function(sectionKey){
		var items = [];
		for(var i=0;i<that["fun_DHeaders"]._elementsContent.length;i++){
			if(that["fun_DHeaders"]._elementsContent[i].leaf==true && that["fun_DHeaders"]._elementsContent[i].parentKey==sectionKey) items.push(that["fun_DHeaders"]._elementsContent[i]);
		}
		return items;
	};
	/*
	 * Property Sheet Initialization
	 */
	that["fun_DHeaders"].init = function(){
		
		that["fun_DHeaders"]._label = new sap.ui.commons.Label({text: " List of Headers (Name / Value)"});
		that["fun_DHeaders"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DHeaders"]._label);
		
		that["fun_DHeaders"]._hLayout = new sap.ui.commons.layout.HorizontalLayout({ });
		that._content.addContent(that["fun_DHeaders"]._hLayout);
		that["fun_DHeaders"]._listBuilder = new org.scn.community.propertysheet.ListBuilder({
			width : "200px"
		});
		
		that["fun_DHeaders"]._listBuilder.attachItemAdded(that["fun_DHeaders"].addElement,that);
		that["fun_DHeaders"]._listBuilder.attachItemDeleted(that["fun_DHeaders"].delElement,that);
		that["fun_DHeaders"]._listBuilder.attachItemMoved(that["fun_DHeaders"].moveElement,that);
		that["fun_DHeaders"]._listBuilder.attachItemSelected(that["fun_DHeaders"].elementSelected,that);
		
		that["fun_DHeaders"]._sectionPropertyLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		that["fun_DHeaders"]._sectionPropertyList = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		that["fun_DHeaders"]._sectionPropertyLayout.addStyleClass("org-scn-ApsDoubleArrayVertical");
		that["fun_DHeaders"]._sectionPropertyList.addStyleClass("org-scn-ApsDoubleArrayVertical");

		that["fun_DHeaders"]._hLayout.addContent(that["fun_DHeaders"]._listBuilder);
		that["fun_DHeaders"]._hLayout.addContent(that["fun_DHeaders"]._sectionPropertyLayout);
		that["fun_DHeaders"]._hLayout.addContent(that["fun_DHeaders"]._sectionPropertyList);
		that["fun_DHeaders"]._sectionPropertyList.addStyleClass("org-scn-Aps-DetailList-SingleArray");
		that["fun_DHeaders"]._hLayout.addStyleClass("org-scn-ApsDoubleArray");
		
		that["fun_DHeaders"].update();
	};

	that.DHeaders = function(s){
		if( s === undefined){
			return JSON.stringify(that["fun_DHeaders"]._elementsContent);
		}else{
			var o = [];
			if(s && s!="") o = jQuery.parseJSON(s);
			that["fun_DHeaders"]._elementsContent = o;
			that["fun_DHeaders"].update();
			return that;
		}
	};

	that["fun_DJsonp"] = {};
	
	that["fun_DJsonp"].update = function(){
		that["fun_DJsonp"]._input.setChecked(that["fun_DJsonp"]._);
	};
	
	that["fun_DJsonp"].init = function(){
		that["fun_DJsonp"]._label = new sap.ui.commons.Label({text: " Do you want to use JSONP"});
		that["fun_DJsonp"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DJsonp"]._label);
		
		that["fun_DJsonp"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Do you want to use JSONP"});
		that._content.addContent(that["fun_DJsonp"]._input);
		that["fun_DJsonp"]._input.attachChange(that["fun_DJsonp"].propertyChanged, that);
		that["fun_DJsonp"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DJsonp"].update();
	};

	that["fun_DJsonp"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_DJsonp"]._ = checked;
		that.firePropertiesChanged(["DJsonp"]);
	};
	
	that.DJsonp = function(s){
		if( s === undefined){
			return that["fun_DJsonp"]._;
		}else{
			that["fun_DJsonp"]._ = s;
			that["fun_DJsonp"].update();
			return that;
		}
	};

	that["fun_DParameters"] = {};
	
	that["fun_DParameters"]._elementsContent = [];
	that["fun_DParameters"]._selectedElementKey = "";
	that["fun_DParameters"]._selectedItemKey = "";
	that["fun_DParameters"]._currentItemConfig = {};

	/*
	 * Retrieves JSON for Element Entry
	 */
	that["fun_DParameters"].getElement = function(key){
		var sections = that["fun_DParameters"].gatherElements();
		for(var i=0;i<sections.length;i++){
			if(sections[i].key == key) return sections[i];
		}
	};
	/*
	 * Retrieves JSON for Item Entry
	 */
	that["fun_DParameters"].getItem = function(sectionKey,key){
		for(var i=0;i<that["fun_DParameters"]._elementsContent.length;i++){
			if(that["fun_DParameters"]._elementsContent[i].key == key && that["fun_DParameters"]._elementsContent[i].parentKey==sectionKey) return that["fun_DParameters"]._elementsContent[i];
		}
	};
	/*
	 * Update Element JSON and notify Design Studio IDE
	 */
	that["fun_DParameters"].updateElement = function(key,section){
		for(var i=0;i<that["fun_DParameters"]._elementsContent.length;i++){
			var element = that["fun_DParameters"]._elementsContent[i];
			if(!element.leaf && element.key==key){
				that["fun_DParameters"]._elementsContent[i] = section;
			}
		}
		that.firePropertiesChanged(["DParameters"]);
		that["fun_DParameters"].update();
	};
	/*
	 * Update Item JSON and notify Design Studio IDE
	 */
	that["fun_DParameters"].updateItem = function(key){
		for(var i=0;i<that["fun_DParameters"]._elementsContent.length;i++){
			var element = that["fun_DParameters"]._elementsContent[i];
			if(element.leaf && element.key==key){
				that["fun_DParameters"]._elementsContent[i] = that["fun_DParameters"]._currentItemConfig;
			}
		}
		that.firePropertiesChanged(["DParameters"]);
		that["fun_DParameters"].update();
		that["fun_DParameters"].closeDetail();
	};
	/*
	 * Displays Element Properties
	 */
	that["fun_DParameters"].showElementProperties = function(){
		that["fun_DParameters"]._sectionPropertyLayout.destroyContent();
		that["fun_DParameters"]._sectionPropertyList.destroyContent();
		
		that["fun_DParameters"]._selectedElementKey = that["fun_DParameters"]._listBuilder.getSelectedKey();
		if(!that["fun_DParameters"]._selectedElementKey) return;
		var selectedElement = that["fun_DParameters"].getElement(that["fun_DParameters"]._selectedElementKey);		
		if(!selectedElement) return;
		
		var items = that["fun_DParameters"].gatherItems(that["fun_DParameters"]._selectedElementKey);
		
		var sectionKey = new sap.ui.commons.TextView({text : "Parameter Name"});
		sectionKey.addStyleClass("org-scn-ApsLabelArray");
		var txtElementKey = new sap.ui.commons.TextField({value : selectedElement.key, width: "180px"});
		txtElementKey.addStyleClass("org-scn-ApsInputArray");
		txtElementKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			value = that["fun_DParameters"]._listBuilder.generateKey(value);
			var section = that["fun_DParameters"].getElement(that["fun_DParameters"]._listBuilder.getSelectedKey());
			section.key = value;
			// Update Parent Key references
			for(var i=0;i<that["fun_DParameters"]._elementsContent.length;i++){
				var element = that["fun_DParameters"]._elementsContent[i];
				if(element.parentKey == that["fun_DParameters"]._listBuilder.getSelectedKey() && element.leaf) element.parentKey = value;
			}
			that["fun_DParameters"].updateElement(that["fun_DParameters"]._listBuilder.getSelectedKey(),section);
			that["fun_DParameters"]._listBuilder.setSelectedKey(value);
			that["fun_DParameters"].showElementProperties();
		}, that);
		that["fun_DParameters"]._sectionPropertyLayout.addContent(sectionKey);
		that["fun_DParameters"]._sectionPropertyLayout.addContent(txtElementKey);

		var sectionvalue = new sap.ui.commons.TextView({text : "Parameter Value"});
		sectionvalue.addStyleClass("org-scn-ApsLabelArray");
		var txtElementvalue = new sap.ui.commons.TextField({value : selectedElement.value, width: "180px"});
		txtElementvalue.addStyleClass("org-scn-ApsInputArray");
		txtElementvalue.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			var section = that["fun_DParameters"].getElement(that["fun_DParameters"]._listBuilder.getSelectedKey());
			section.value = value;
			that["fun_DParameters"].updateElement(that["fun_DParameters"]._listBuilder.getSelectedKey(),section);
		}, that);
		that["fun_DParameters"]._sectionPropertyLayout.addContent(sectionvalue);
		that["fun_DParameters"]._sectionPropertyLayout.addContent(txtElementvalue);


		var itemsLabel = new sap.ui.commons.TextView({text : "Items"});
		itemsLabel.addStyleClass("org-scn-ApsLabelArray");
		var itemsList = new org.scn.community.propertysheet.ListBuilder({
			width : "200px",
			newKeyPrefix : "ITEM_",
			newTextPrefix : "Item ",
			list : that["fun_DParameters"].gatherItems(that["fun_DParameters"]._listBuilder.getSelectedKey()),
			showDetail : true,
			selectedKey : that["fun_DParameters"]._selectedItemKey
		});
		
		itemsList.attachItemAdded(that["fun_DParameters"].addItem,that);
		itemsList.attachItemDeleted(that["fun_DParameters"].delItem,that);
		itemsList.attachItemDetail(that["fun_DParameters"].showItemProperties,that);
		itemsList.attachItemMoved(that["fun_DParameters"].moveItem,that);
		itemsList.attachItemSelected(that["fun_DParameters"].itemSelected,that);
		
		that["fun_DParameters"]._sectionPropertyList.addContent(itemsLabel);
		that["fun_DParameters"]._sectionPropertyList.addContent(itemsList);
	};
	/*
	 * Displays Item Properties in a Popup Panel
	 */
	that["fun_DParameters"].showItemProperties = function(oControlEvent){
		var detailData = oControlEvent.getParameters();
		that["fun_DParameters"]._currentItemConfig = that["fun_DParameters"].getItem(that["fun_DParameters"]._listBuilder.getSelectedKey(),detailData.key);
		if(!that["fun_DParameters"]._currentItemConfig) return;
		
		var itemDetailPanel = new sap.ui.commons.Panel({
			text : "Item Details",
			showCollapseIcon : false,
			width : "95%"
		});
		itemDetailPanel.addStyleClass("org-scn-ApsPopupPanel");
		var itemDetailLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		
		var itemKey = new sap.ui.commons.TextView({text : "%ITEM_PROPERTY_DESCRIPTION%"});
		itemKey.addStyleClass("org-scn-ApsLabelArray");
		var txtItemKey = new sap.ui.commons.TextField({value : that["fun_DParameters"]._currentItemConfig.key, width: "300px"});
		txtItemKey.addStyleClass("org-scn-ApsInputArray");
		txtItemKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			var allItems = new org.scn.community.propertysheet.ListBuilder();		
			allItems.setList(that["fun_DParameters"]._elementsContent);
			var newItemKey = allItems.generateKey(value);
			delete allItems;
			that["fun_DParameters"]._currentItemConfig.key = newItemKey;		
		}, that);
		itemDetailLayout.addContent(itemKey);
		itemDetailLayout.addContent(txtItemKey);


		var detailButtons = new sap.ui.commons.layout.HorizontalLayout({ });
		var closeButton = new sap.ui.commons.Button({
			text : "Cancel"
		});
		var okButton = new sap.ui.commons.Button({
			text : "Update"
		});
		
		closeButton.attachPress(that["fun_DParameters"].closeDetail,that);
		okButton.attachPress(that["fun_DParameters"].updateItem,that);
		
		detailButtons.addContent(closeButton);
		detailButtons.addContent(okButton);
		detailButtons.addStyleClass("org-scn-ApsPopUpButtons");
		
		itemDetailLayout.addContent(detailButtons);
		itemDetailPanel.addContent(itemDetailLayout);
		
		if(!that["fun_DParameters"]._popup) that["fun_DParameters"]._popup = new sap.ui.core.Popup(itemDetailPanel, true, true, true);
		
		//that["fun_DParameters"]._popup.destroyContent();
		that["fun_DParameters"]._popup.open(250,"center center", "center center", document.body, null);
	};
	/*
	 * Fires when Element Listbox is selected
	 */
	that["fun_DParameters"].elementSelected = function(oControlEvent){
		that["fun_DParameters"]._selectedElementKey = "";
		if(oControlEvent.getParameters().key) that["fun_DParameters"]._selectedElementKey = oControlEvent.getParameters().key;
		that["fun_DParameters"].showElementProperties();
	};
	/*
	 * Fires when Item Listbox is selected
	 */
	that["fun_DParameters"].itemSelected = function(oControlEvent){
		that["fun_DParameters"]._selectedItemKey = "";
		if(oControlEvent.getParameters().key) that["fun_DParameters"]._selectedItemKey = oControlEvent.getParameters().key;
	};
	/*
	 * Fires when component is selected or when properties change to re-render
	 */
	that["fun_DParameters"].update = function(){
		that["fun_DParameters"]._listBuilder.setList(that["fun_DParameters"].gatherElements());
		that["fun_DParameters"].showElementProperties(that["fun_DParameters"]._listBuilder.getSelectedKey());
	};
	/*
	 * Fires when item delete button clicked
	 */
	that["fun_DParameters"].delItem = function(oControlEvent){
		var sectionKey = that["fun_DParameters"]._listBuilder.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		if(sectionKey && itemKey) {
			for(var i=0;i<that["fun_DParameters"]._elementsContent.length;i++){
				if(that["fun_DParameters"]._elementsContent[i].leaf == true && that["fun_DParameters"]._elementsContent[i].key == itemKey && that["fun_DParameters"]._elementsContent[i].parentKey==sectionKey) {
					that["fun_DParameters"]._elementsContent.splice(i,1);
					that.firePropertiesChanged(["DParameters"]);
					that["fun_DParameters"].update();
				}
			}
		}
		that["fun_DParameters"].update();
	}
	/*
	 * Fires when section delete button clicked
	 */
	that["fun_DParameters"].delElement = function(oControlEvent){
		var key = oControlEvent.getParameter("key");
		if(key) {
			// Delete Element
			for(var i=0;i<that["fun_DParameters"]._elementsContent.length;i++){
				if(that["fun_DParameters"]._elementsContent[i].leaf == false && that["fun_DParameters"]._elementsContent[i].key == key) {
					that["fun_DParameters"]._elementsContent.splice(i,1);
				}
			}
			// Delete Items under Element
			for(var i=that["fun_DParameters"]._elementsContent.length-1;i>=0;i--){
				if(that["fun_DParameters"]._elementsContent[i].leaf == true && that["fun_DParameters"]._elementsContent[i].parentKey == key) {
					that["fun_DParameters"]._elementsContent.splice(i,1);
				}
			}
			that.firePropertiesChanged(["DParameters"]);
		}
		that["fun_DParameters"].update();
	};
	/*
	 * Fires when item add button clicked
	 */
	that["fun_DParameters"].addItem = function(oControlEvent){
		var allItems = new org.scn.community.propertysheet.ListBuilder();		
		allItems.setList(that["fun_DParameters"]._elementsContent);
		var newItemKey = allItems.generateKey("Item");
		delete allItems;
		var sectionItems = new org.scn.community.propertysheet.ListBuilder();
		sectionItems.setList(that["fun_DParameters"]._elementsContent);
		var newItem = { 
			parentKey : that["fun_DParameters"]._listBuilder.getSelectedKey(),
			key : newItemKey, 
			leaf: true, 
			
		};
		that["fun_DParameters"]._elementsContent.push(newItem);
		that.firePropertiesChanged(["DParameters"]);
		that["fun_DParameters"].update();
	}
	/*
	 * Fires when section add button clicked
	 */
	that["fun_DParameters"].addElement = function(oControlEvent){
		var newKey = that["fun_DParameters"]._listBuilder.generateKey("Element");
		var newElement = { 
			parentKey : "ROOT",
			key : newKey,
			leaf: false, 
			value:""
		};
		that["fun_DParameters"]._listBuilder.setSelectedKey(newKey);
		that["fun_DParameters"]._elementsContent.push(newElement);
		that.firePropertiesChanged(["DParameters"]);
		that["fun_DParameters"].update();
	};
	/*
	 * Fires when section up or down button clicked
	 */
	that["fun_DParameters"].moveElement = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		for(var i=0;i<that["fun_DParameters"]._elementsContent.length;i++){
			if(that["fun_DParameters"]._elementsContent[i].key == movementData.key && !that["fun_DParameters"]._elementsContent[i].leaf) sourceIndex = i;
			if(that["fun_DParameters"]._elementsContent[i].key == movementData.targetKey && !that["fun_DParameters"]._elementsContent[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = that["fun_DParameters"]._elementsContent[targetIndex];
			that["fun_DParameters"]._elementsContent[targetIndex] = that["fun_DParameters"]._elementsContent[sourceIndex];
			that["fun_DParameters"]._elementsContent[sourceIndex] = temp;
			that.firePropertiesChanged(["DParameters"]);
			that["fun_DParameters"].update();
		}
	};
	/*
	 * Close Item Properties Popup
	 */
	that["fun_DParameters"].closeDetail = function(oControlEvent){
		if(that["fun_DParameters"]._popup) {
			that["fun_DParameters"]._popup.close();
			that["fun_DParameters"]._popup.destroy();
			delete that["fun_DParameters"]._popup;
		}
		
	};
	/*
	 * Fires when item up or down button clicked
	 */
	that["fun_DParameters"].moveItem = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		var sectionKey = that["fun_DParameters"]._listBuilder.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		for(var i=0;i<that["fun_DParameters"]._elementsContent.length;i++){
			if(that["fun_DParameters"]._elementsContent[i].key == itemKey && that["fun_DParameters"]._elementsContent[i].parentKey == sectionKey && that["fun_DParameters"]._elementsContent[i].leaf) sourceIndex = i;
			if(that["fun_DParameters"]._elementsContent[i].key == movementData.targetKey && that["fun_DParameters"]._elementsContent[i].parentKey == sectionKey && that["fun_DParameters"]._elementsContent[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = that["fun_DParameters"]._elementsContent[targetIndex];
			that["fun_DParameters"]._elementsContent[targetIndex] = that["fun_DParameters"]._elementsContent[sourceIndex];
			that["fun_DParameters"]._elementsContent[sourceIndex] = temp;
			that.firePropertiesChanged(["DParameters"]);
			that["fun_DParameters"].update();
		}
	}
	/*
	 * Convenience Function to return only entries that are Elements
	 */
	that["fun_DParameters"].gatherElements = function(){
		var sections = [];
		for(var i=0;i<that["fun_DParameters"]._elementsContent.length;i++){
			if(that["fun_DParameters"]._elementsContent[i].leaf==false) sections.push(that["fun_DParameters"]._elementsContent[i]);
		}
		return sections;
	};
	/*
	 * Convenience Function to return only entries that are Items (Leafs)
	 */
	that["fun_DParameters"].gatherItems = function(sectionKey){
		var items = [];
		for(var i=0;i<that["fun_DParameters"]._elementsContent.length;i++){
			if(that["fun_DParameters"]._elementsContent[i].leaf==true && that["fun_DParameters"]._elementsContent[i].parentKey==sectionKey) items.push(that["fun_DParameters"]._elementsContent[i]);
		}
		return items;
	};
	/*
	 * Property Sheet Initialization
	 */
	that["fun_DParameters"].init = function(){
		
		that["fun_DParameters"]._label = new sap.ui.commons.Label({text: " List of Parameters (Name / Value)"});
		that["fun_DParameters"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DParameters"]._label);
		
		that["fun_DParameters"]._hLayout = new sap.ui.commons.layout.HorizontalLayout({ });
		that._content.addContent(that["fun_DParameters"]._hLayout);
		that["fun_DParameters"]._listBuilder = new org.scn.community.propertysheet.ListBuilder({
			width : "200px"
		});
		
		that["fun_DParameters"]._listBuilder.attachItemAdded(that["fun_DParameters"].addElement,that);
		that["fun_DParameters"]._listBuilder.attachItemDeleted(that["fun_DParameters"].delElement,that);
		that["fun_DParameters"]._listBuilder.attachItemMoved(that["fun_DParameters"].moveElement,that);
		that["fun_DParameters"]._listBuilder.attachItemSelected(that["fun_DParameters"].elementSelected,that);
		
		that["fun_DParameters"]._sectionPropertyLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		that["fun_DParameters"]._sectionPropertyList = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		that["fun_DParameters"]._sectionPropertyLayout.addStyleClass("org-scn-ApsDoubleArrayVertical");
		that["fun_DParameters"]._sectionPropertyList.addStyleClass("org-scn-ApsDoubleArrayVertical");

		that["fun_DParameters"]._hLayout.addContent(that["fun_DParameters"]._listBuilder);
		that["fun_DParameters"]._hLayout.addContent(that["fun_DParameters"]._sectionPropertyLayout);
		that["fun_DParameters"]._hLayout.addContent(that["fun_DParameters"]._sectionPropertyList);
		that["fun_DParameters"]._sectionPropertyList.addStyleClass("org-scn-Aps-DetailList-SingleArray");
		that["fun_DParameters"]._hLayout.addStyleClass("org-scn-ApsDoubleArray");
		
		that["fun_DParameters"].update();
	};

	that.DParameters = function(s){
		if( s === undefined){
			return JSON.stringify(that["fun_DParameters"]._elementsContent);
		}else{
			var o = [];
			if(s && s!="") o = jQuery.parseJSON(s);
			that["fun_DParameters"]._elementsContent = o;
			that["fun_DParameters"].update();
			return that;
		}
	};

	that["fun_DPayload"] = {};
	
	that["fun_DPayload"].update = function(){
		that["fun_DPayload"]._input.setValue(that["fun_DPayload"]._);
	};
	
	that["fun_DPayload"].init = function(){
		that["fun_DPayload"]._label = new sap.ui.commons.Label({text: " HTTP reuqest payload"});
		that["fun_DPayload"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DPayload"]._label);
		
		that["fun_DPayload"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DPayload"]._input);
		that["fun_DPayload"]._input.attachChange(that["fun_DPayload"].propertyChanged, that);
		that["fun_DPayload"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DPayload"].update();
	};

	that["fun_DPayload"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DPayload"]._ = value;
		that.firePropertiesChanged(["DPayload"]);
	};
	
	that.DPayload = function(s){
		if( s === undefined){
			return that["fun_DPayload"]._;
		}else{
			that["fun_DPayload"]._ = s;
			that["fun_DPayload"].update();
			return that;
		}
	};

	that["fun_DRawParameters"] = {};
	
	that["fun_DRawParameters"].update = function(){
		that["fun_DRawParameters"]._input.setValue(that["fun_DRawParameters"]._);
	};
	
	that["fun_DRawParameters"].init = function(){
		that["fun_DRawParameters"]._label = new sap.ui.commons.Label({text: " Raw Parameters as String Content"});
		that["fun_DRawParameters"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DRawParameters"]._label);
		
		that["fun_DRawParameters"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DRawParameters"]._input);
		that["fun_DRawParameters"]._input.attachChange(that["fun_DRawParameters"].propertyChanged, that);
		that["fun_DRawParameters"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DRawParameters"].update();
	};

	that["fun_DRawParameters"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DRawParameters"]._ = value;
		that.firePropertiesChanged(["DRawParameters"]);
	};
	
	that.DRawParameters = function(s){
		if( s === undefined){
			return that["fun_DRawParameters"]._;
		}else{
			that["fun_DRawParameters"]._ = s;
			that["fun_DRawParameters"].update();
			return that;
		}
	};

	that["fun_DRequestMethod"] = {};
	
	that["fun_DRequestMethod"].update = function(){
		that["fun_DRequestMethod"]._input.setSelectedKey(that["fun_DRequestMethod"]._);
	};
	
	that["fun_DRequestMethod"].init = function(){
		that["fun_DRequestMethod"]._label = new sap.ui.commons.Label({text: " Request Method (POST | GET | PUT)"});
		that["fun_DRequestMethod"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DRequestMethod"]._label);
		
		that["fun_DRequestMethod"]._input = new sap.ui.commons.ComboBox({width: "300px"});
		that["fun_DRequestMethod"]._input.addItem(new sap.ui.core.ListItem({key:"POST", text:"POST"}));
		that["fun_DRequestMethod"]._input.addItem(new sap.ui.core.ListItem({key:"GET", text:"GET"}));
		that["fun_DRequestMethod"]._input.addItem(new sap.ui.core.ListItem({key:"PUT", text:"PUT"}));
		
		that._content.addContent(that["fun_DRequestMethod"]._input);
		that["fun_DRequestMethod"]._input.attachChange(that["fun_DRequestMethod"].propertyChanged, that);
		that["fun_DRequestMethod"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DRequestMethod"].update();
	};

	that["fun_DRequestMethod"].propertyChanged = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		that["fun_DRequestMethod"]._ = newValue;
		that.firePropertiesChanged(["DRequestMethod"]);
	};
	
	that.DRequestMethod = function(s){
		if( s === undefined){
			return that["fun_DRequestMethod"]._;
		}else{
			that["fun_DRequestMethod"]._ = s;
			that["fun_DRequestMethod"].update();
			return that;
		}
	};

	that["fun_DRequestType"] = {};
	
	that["fun_DRequestType"].update = function(){
		that["fun_DRequestType"]._input.setSelectedKey(that["fun_DRequestType"]._);
	};
	
	that["fun_DRequestType"].init = function(){
		that["fun_DRequestType"]._label = new sap.ui.commons.Label({text: " Request Type (JQuery | HTTP)"});
		that["fun_DRequestType"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DRequestType"]._label);
		
		that["fun_DRequestType"]._input = new sap.ui.commons.ComboBox({width: "300px"});
		that["fun_DRequestType"]._input.addItem(new sap.ui.core.ListItem({key:"JQuery", text:"JQuery"}));
		that["fun_DRequestType"]._input.addItem(new sap.ui.core.ListItem({key:"HTTPRequest", text:"HTTPRequest"}));
		
		that._content.addContent(that["fun_DRequestType"]._input);
		that["fun_DRequestType"]._input.attachChange(that["fun_DRequestType"].propertyChanged, that);
		that["fun_DRequestType"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DRequestType"].update();
	};

	that["fun_DRequestType"].propertyChanged = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		that["fun_DRequestType"]._ = newValue;
		that.firePropertiesChanged(["DRequestType"]);
	};
	
	that.DRequestType = function(s){
		if( s === undefined){
			return that["fun_DRequestType"]._;
		}else{
			that["fun_DRequestType"]._ = s;
			that["fun_DRequestType"].update();
			return that;
		}
	};









	that["fun_DUrl"] = {};
	
	that["fun_DUrl"].update = function(){
		that["fun_DUrl"]._input.setValue(that["fun_DUrl"]._);
	};
	
	that["fun_DUrl"].init = function(){
		that["fun_DUrl"]._label = new sap.ui.commons.Label({text: " Url To Send the Request"});
		that["fun_DUrl"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DUrl"]._label);
		
		that["fun_DUrl"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DUrl"]._input);
		that["fun_DUrl"]._input.attachChange(that["fun_DUrl"].propertyChanged, that);
		that["fun_DUrl"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DUrl"].update();
	};

	that["fun_DUrl"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DUrl"]._ = value;
		that.firePropertiesChanged(["DUrl"]);
	};
	
	that.DUrl = function(s){
		if( s === undefined){
			return that["fun_DUrl"]._;
		}else{
			that["fun_DUrl"]._ = s;
			that["fun_DUrl"].update();
			return that;
		}
	};

	that["fun_DWithCredentials"] = {};
	
	that["fun_DWithCredentials"].update = function(){
		that["fun_DWithCredentials"]._input.setChecked(that["fun_DWithCredentials"]._);
	};
	
	that["fun_DWithCredentials"].init = function(){
		that["fun_DWithCredentials"]._label = new sap.ui.commons.Label({text: " Do you need with credentials"});
		that["fun_DWithCredentials"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DWithCredentials"]._label);
		
		that["fun_DWithCredentials"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Do you need with credentials"});
		that._content.addContent(that["fun_DWithCredentials"]._input);
		that["fun_DWithCredentials"]._input.attachChange(that["fun_DWithCredentials"].propertyChanged, that);
		that["fun_DWithCredentials"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DWithCredentials"].update();
	};

	that["fun_DWithCredentials"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_DWithCredentials"]._ = checked;
		that.firePropertiesChanged(["DWithCredentials"]);
	};
	
	that.DWithCredentials = function(s){
		if( s === undefined){
			return that["fun_DWithCredentials"]._;
		}else{
			that["fun_DWithCredentials"]._ = s;
			that["fun_DWithCredentials"].update();
			return that;
		}
	};


});
