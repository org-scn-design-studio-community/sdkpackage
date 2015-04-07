
/**
 * Generated ZTL Class for Post Response Parser
 * 
 * DO NOT EDIT
 */
sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.utils.PostResponseParserPropertyPage",  function() {
	var that = this;

	this.init = function () {
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this._content.placeAt($("#content"));

		this.initDUrl();
		this.initDRequestType();
		this.initDRequestMethod();
		this.initDCrossDomain();
		this.initDBasicAuthorisation();
		this.initDContentType();
		this.initDExpectedResponseStatus();
		this.initDExpectedContentType();
		this.initDParameters();
		this.initDHeaders();
		this.initDRawParameters();
		
	};
	
	this.componentSelected = function(){
		this.updateDUrl();
		this.updateDRequestType();
		this.updateDRequestMethod();
		this.updateDCrossDomain();
		this.updateDBasicAuthorisation();
		this.updateDContentType();
		this.updateDExpectedResponseStatus();
		this.updateDExpectedContentType();
		this.updateDParameters();
		this.updateDHeaders();
		this.updateDRawParameters();
		
	};
	
	
	this.updatePropertyDUrl = function(){
		this._inputDUrl.setValue(this._DUrl);
	};
	
	this.initDUrl = function(){
		this._labelDUrl = new sap.ui.commons.Label({text: " Url To Send the Request"});
		this._labelDUrl.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDUrl);
		
		this._inputDUrl = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDUrl);
		this._inputDUrl.attachChange(this.propertyChangedDUrl, this);
		this._inputDUrl.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDUrl();
	};

	this.propertyChangedDUrl = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DUrl = value;
		this.firePropertiesChanged(["DUrl"]);
	};
	
	this.DUrl = function(s){
		if( s === undefined){
			return this._DUrl;
		}else{
			this._DUrl = s;
			this.updatePropertyDUrl();
			return this;
		}
	};

	this.updatePropertyDRequestType = function(){
		this._inputDRequestType.setSelectedKey(this._DRequestType);
	};
	
	this.initDRequestType = function(){
		this._labelDRequestType = new sap.ui.commons.Label({text: " Request Type (JQuery | HTTP)"});
		this._labelDRequestType.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDRequestType);
		
		this._inputDRequestType = new sap.ui.commons.ComboBox({width: "300px"});
		this._inputDRequestType.addItem(new sap.ui.core.ListItem({key:"JQuery", text:"JQuery"}));
		this._inputDRequestType.addItem(new sap.ui.core.ListItem({key:"HTTPRequest", text:"HTTPRequest"}));
		
		this._content.addContent(this._inputDRequestType);
		this._inputDRequestType.attachChange(this.propertyChangedDRequestType, this);
		this._inputDRequestType.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDRequestType();
	};

	this.propertyChangedDRequestType = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		this._DRequestType = newValue;
		this.firePropertiesChanged(["DRequestType"]);
	};
	
	this.DRequestType = function(s){
		if( s === undefined){
			return this._DRequestType;
		}else{
			this._DRequestType = s;
			this.updatePropertyDRequestType();
			return this;
		}
	};

	this.updatePropertyDRequestMethod = function(){
		this._inputDRequestMethod.setSelectedKey(this._DRequestMethod);
	};
	
	this.initDRequestMethod = function(){
		this._labelDRequestMethod = new sap.ui.commons.Label({text: " Request Method (POST | GET | PUT)"});
		this._labelDRequestMethod.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDRequestMethod);
		
		this._inputDRequestMethod = new sap.ui.commons.ComboBox({width: "300px"});
		this._inputDRequestMethod.addItem(new sap.ui.core.ListItem({key:"POST", text:"POST"}));
		this._inputDRequestMethod.addItem(new sap.ui.core.ListItem({key:"GET", text:"GET"}));
		this._inputDRequestMethod.addItem(new sap.ui.core.ListItem({key:"PUT", text:"PUT"}));
		
		this._content.addContent(this._inputDRequestMethod);
		this._inputDRequestMethod.attachChange(this.propertyChangedDRequestMethod, this);
		this._inputDRequestMethod.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDRequestMethod();
	};

	this.propertyChangedDRequestMethod = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		this._DRequestMethod = newValue;
		this.firePropertiesChanged(["DRequestMethod"]);
	};
	
	this.DRequestMethod = function(s){
		if( s === undefined){
			return this._DRequestMethod;
		}else{
			this._DRequestMethod = s;
			this.updatePropertyDRequestMethod();
			return this;
		}
	};

	this.updatePropertyDCrossDomain = function(){
		this._inputDCrossDomain.setChecked(this._DCrossDomain);
	};
	
	this.initDCrossDomain = function(){
		this._labelDCrossDomain = new sap.ui.commons.Label({text: " Is this Request Cross-Domain"});
		this._labelDCrossDomain.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDCrossDomain);
		
		this._inputDCrossDomain = new sap.ui.commons.CheckBox({width: "300px", text: "Is this Request Cross-Domain"});
		this._content.addContent(this._inputDCrossDomain);
		this._inputDCrossDomain.attachChange(this.propertyChangedDCrossDomain, this);
		this._inputDCrossDomain.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDCrossDomain();
	};

	this.propertyChangedDCrossDomain = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		this._DCrossDomain = checked;
		this.firePropertiesChanged(["DCrossDomain"]);
	};
	
	this.DCrossDomain = function(s){
		if( s === undefined){
			return this._DCrossDomain;
		}else{
			this._DCrossDomain = s;
			this.updatePropertyDCrossDomain();
			return this;
		}
	};

	this.updatePropertyDBasicAuthorisation = function(){
		this._inputDBasicAuthorisation.setValue(this._DBasicAuthorisation);
	};
	
	this.initDBasicAuthorisation = function(){
		this._labelDBasicAuthorisation = new sap.ui.commons.Label({text: " Basic Authorization Content [Basic: GUID]"});
		this._labelDBasicAuthorisation.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDBasicAuthorisation);
		
		this._inputDBasicAuthorisation = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDBasicAuthorisation);
		this._inputDBasicAuthorisation.attachChange(this.propertyChangedDBasicAuthorisation, this);
		this._inputDBasicAuthorisation.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDBasicAuthorisation();
	};

	this.propertyChangedDBasicAuthorisation = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DBasicAuthorisation = value;
		this.firePropertiesChanged(["DBasicAuthorisation"]);
	};
	
	this.DBasicAuthorisation = function(s){
		if( s === undefined){
			return this._DBasicAuthorisation;
		}else{
			this._DBasicAuthorisation = s;
			this.updatePropertyDBasicAuthorisation();
			return this;
		}
	};

	this.updatePropertyDContentType = function(){
		this._inputDContentType.setValue(this._DContentType);
	};
	
	this.initDContentType = function(){
		this._labelDContentType = new sap.ui.commons.Label({text: " Content Type"});
		this._labelDContentType.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDContentType);
		
		this._inputDContentType = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDContentType);
		this._inputDContentType.attachChange(this.propertyChangedDContentType, this);
		this._inputDContentType.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDContentType();
	};

	this.propertyChangedDContentType = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DContentType = value;
		this.firePropertiesChanged(["DContentType"]);
	};
	
	this.DContentType = function(s){
		if( s === undefined){
			return this._DContentType;
		}else{
			this._DContentType = s;
			this.updatePropertyDContentType();
			return this;
		}
	};

	this.updatePropertyDExpectedResponseStatus = function(){
		this._inputDExpectedResponseStatus.setValue(this._DExpectedResponseStatus);
	};
	
	this.initDExpectedResponseStatus = function(){
		this._labelDExpectedResponseStatus = new sap.ui.commons.Label({text: " Response Status for Good Response"});
		this._labelDExpectedResponseStatus.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDExpectedResponseStatus);
		
		this._inputDExpectedResponseStatus = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDExpectedResponseStatus);
		this._inputDExpectedResponseStatus.attachChange(this.propertyChangedDExpectedResponseStatus, this);
		this._inputDExpectedResponseStatus.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDExpectedResponseStatus();
	};

	this.propertyChangedDExpectedResponseStatus = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DExpectedResponseStatus = value;
		this.firePropertiesChanged(["DExpectedResponseStatus"]);
	};
	
	this.DExpectedResponseStatus = function(s){
		if( s === undefined){
			return this._DExpectedResponseStatus;
		}else{
			this._DExpectedResponseStatus = s;
			this.updatePropertyDExpectedResponseStatus();
			return this;
		}
	};

	this.updatePropertyDExpectedContentType = function(){
		this._inputDExpectedContentType.setSelectedKey(this._DExpectedContentType);
	};
	
	this.initDExpectedContentType = function(){
		this._labelDExpectedContentType = new sap.ui.commons.Label({text: " Expected Content Type"});
		this._labelDExpectedContentType.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDExpectedContentType);
		
		this._inputDExpectedContentType = new sap.ui.commons.ComboBox({width: "300px"});
		this._inputDExpectedContentType.addItem(new sap.ui.core.ListItem({key:"text", text:"text"}));
		this._inputDExpectedContentType.addItem(new sap.ui.core.ListItem({key:"json", text:"json"}));
		
		this._content.addContent(this._inputDExpectedContentType);
		this._inputDExpectedContentType.attachChange(this.propertyChangedDExpectedContentType, this);
		this._inputDExpectedContentType.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDExpectedContentType();
	};

	this.propertyChangedDExpectedContentType = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		this._DExpectedContentType = newValue;
		this.firePropertiesChanged(["DExpectedContentType"]);
	};
	
	this.DExpectedContentType = function(s){
		if( s === undefined){
			return this._DExpectedContentType;
		}else{
			this._DExpectedContentType = s;
			this.updatePropertyDExpectedContentType();
			return this;
		}
	};









	this._elementsContentDParameters = [];
	this._selectedElementKeyDParameters = "";
	this._selectedItemKeyDParameters = "";
	this._currentItemConfigDParameters = {};

	/*
	 * Retrieves JSON for Element Entry
	 */
	this.getElementDParameters = function(key){
		var sections = this.gatherElementsDParameters();
		for(var i=0;i<sections.length;i++){
			if(sections[i].key == key) return sections[i];
		}
	};
	/*
	 * Retrieves JSON for Item Entry
	 */
	this.getItemDParameters = function(sectionKey,key){
		for(var i=0;i<this._elementsContentDParameters.length;i++){
			if(this._elementsContentDParameters[i].key == key && this._elementsContentDParameters[i].parentKey==sectionKey) return this._elementsContentDParameters[i];
		}
	};
	/*
	 * Update Element JSON and notify Design Studio IDE
	 */
	this.updateElementDParameters = function(key,section){
		for(var i=0;i<this._elementsContentDParameters.length;i++){
			var element = this._elementsContentDParameters[i];
			if(!element.leaf && element.key==key){
				this._elementsContentDParameters[i] = section;
			}
		}
		this.firePropertiesChanged(["DParameters"]);
		this.updatePropertyDParameters();
	};
	/*
	 * Update Item JSON and notify Design Studio IDE
	 */
	this.updateItemDParameters = function(key){
		for(var i=0;i<this._elementsContentDParameters.length;i++){
			var element = this._elementsContentDParameters[i];
			if(element.leaf && element.key==key){
				this._elementsContentDParameters[i] = this._currentItemConfigDParameters;
			}
		}
		this.firePropertiesChanged(["DParameters"]);
		this.updatePropertyDParameters();
		this.closeDetailDParameters();
	};
	/*
	 * Displays Element Properties
	 */
	this.showElementPropertiesDParameters = function(){
		this._sectionPropertyLayoutDParameters.destroyContent();
		this._sectionPropertyListDParameters.destroyContent();
		
		this._selectedElementKeyDParameters = this._listBuilderDParameters.getSelectedKey();
		if(!this._selectedElementKeyDParameters) return;
		var selectedElement = this.getElementDParameters(this._selectedElementKeyDParameters);		
		if(!selectedElement) return;
		
		var items = this.gatherItemsDParameters(this._selectedElementKeyDParameters);
		
		var sectionKey = new sap.ui.commons.TextView({text : "Parameter Name"});
		sectionKey.addStyleClass("org-scn-ApsLabelArray");
		var txtElementKey = new sap.ui.commons.TextField({value : selectedElement.key, width: "180px"});
		txtElementKey.addStyleClass("org-scn-ApsInputArray");
		txtElementKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			value = this._listBuilderDParameters.generateKey(value);
			var section = this.getElementDParameters(this._listBuilderDParameters.getSelectedKey());
			section.key = value;
			// Update Parent Key references
			for(var i=0;i<this._elementsContentDParameters.length;i++){
				var element = this._elementsContentDParameters[i];
				if(element.parentKey == this._listBuilderDParameters.getSelectedKey() && element.leaf) element.parentKey = value;
			}
			this.updateElementDParameters(this._listBuilderDParameters.getSelectedKey(),section);
			this._listBuilderDParameters.setSelectedKey(value);
			this.showElementPropertiesDParameters();
		}, this);
		this._sectionPropertyLayoutDParameters.addContent(sectionKey);
		this._sectionPropertyLayoutDParameters.addContent(txtElementKey);

		var sectionvalue = new sap.ui.commons.TextView({text : "Parameter Value"});
		sectionvalue.addStyleClass("org-scn-ApsLabelArray");
		var txtElementvalue = new sap.ui.commons.TextField({value : selectedElement.value, width: "180px"});
		txtElementvalue.addStyleClass("org-scn-ApsInputArray");
		txtElementvalue.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			var section = this.getElementDParameters(this._listBuilderDParameters.getSelectedKey());
			section.value = value;
			this.updateElementDParameters(this._listBuilderDParameters.getSelectedKey(),section);
		}, this);
		this._sectionPropertyLayoutDParameters.addContent(sectionvalue);
		this._sectionPropertyLayoutDParameters.addContent(txtElementvalue);


		var itemsLabel = new sap.ui.commons.TextView({text : "Items"});
		itemsLabel.addStyleClass("org-scn-ApsLabelArray");
		var itemsList = new org.scn.community.propertysheet.ListBuilder({
			width : "200px",
			newKeyPrefix : "ITEM_",
			newTextPrefix : "Item ",
			list : this.gatherItemsDParameters(this._listBuilderDParameters.getSelectedKey()),
			showDetail : true,
			selectedKey : this._selectedItemKeyDParameters
		});
		
		itemsList.attachItemAdded(this.addItemDParameters,this);
		itemsList.attachItemDeleted(this.delItemDParameters,this);
		itemsList.attachItemDetail(this.showItemPropertiesDParameters,this);
		itemsList.attachItemMoved(this.moveItemDParameters,this);
		itemsList.attachItemSelected(this.itemSelectedDParameters,this);
		
		this._sectionPropertyListDParameters.addContent(itemsLabel);
		this._sectionPropertyListDParameters.addContent(itemsList);
	};
	/*
	 * Displays Item Properties in a Popup Panel
	 */
	this.showItemPropertiesDParameters = function(oControlEvent){
		var detailData = oControlEvent.getParameters();
		this._currentItemConfigDParameters = this.getItemDParameters(this._listBuilderDParameters.getSelectedKey(),detailData.key);
		if(!this._currentItemConfigDParameters) return;
		
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
		var txtItemKey = new sap.ui.commons.TextField({value : this._currentItemConfigDParameters.key, width: "300px"});
		txtItemKey.addStyleClass("org-scn-ApsInputArray");
		txtItemKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			var allItems = new org.scn.community.propertysheet.ListBuilder();		
			allItems.setList(this._elementsContentDParameters);
			var newItemKey = allItems.generateKey(value);
			delete allItems;
			this._currentItemConfigDParameters.key = newItemKey;		
		}, this);
		itemDetailLayout.addContent(itemKey);
		itemDetailLayout.addContent(txtItemKey);


		var detailButtons = new sap.ui.commons.layout.HorizontalLayout({ });
		var closeButton = new sap.ui.commons.Button({
			text : "Cancel"
		});
		var okButton = new sap.ui.commons.Button({
			text : "Update"
		});
		
		closeButton.attachPress(this.closeDetailDParameters,this);
		okButton.attachPress(this.updateItemDParameters,this);
		
		detailButtons.addContent(closeButton);
		detailButtons.addContent(okButton);
		detailButtons.addStyleClass("org-scn-ApsPopUpButtons");
		
		itemDetailLayout.addContent(detailButtons);
		itemDetailPanel.addContent(itemDetailLayout);
		
		if(!this._popupDParameters) this._popupDParameters = new sap.ui.core.Popup(itemDetailPanel, true, true, true);
		
		//this._popupDParameters.destroyContent();
		this._popupDParameters.open(250,"center center", "center center", document.body, null);
	};
	/*
	 * Fires when Element Listbox is selected
	 */
	this.elementSelectedDParameters = function(oControlEvent){
		this._selectedElementKeyDParameters = "";
		if(oControlEvent.getParameters().key) this._selectedElementKeyDParameters = oControlEvent.getParameters().key;
		this.showElementPropertiesDParameters();
	};
	/*
	 * Fires when Item Listbox is selected
	 */
	this.itemSelectedDParameters = function(oControlEvent){
		this._selectedItemKeyDParameters = "";
		if(oControlEvent.getParameters().key) this._selectedItemKeyDParameters = oControlEvent.getParameters().key;
	};
	/*
	 * Fires when component is selected or when properties change to re-render
	 */
	this.updatePropertyDParameters = function(){
		this._listBuilderDParameters.setList(this.gatherElementsDParameters());
		this.showElementPropertiesDParameters(this._listBuilderDParameters.getSelectedKey());
	};
	/*
	 * Fires when item delete button clicked
	 */
	this.delItemDParameters = function(oControlEvent){
		var sectionKey = this._listBuilderDParameters.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		if(sectionKey && itemKey) {
			for(var i=0;i<this._elementsContentDParameters.length;i++){
				if(this._elementsContentDParameters[i].leaf == true && this._elementsContentDParameters[i].key == itemKey && this._elementsContentDParameters[i].parentKey==sectionKey) {
					this._elementsContentDParameters.splice(i,1);
					this.firePropertiesChanged(["DParameters"]);
					this.updatePropertyDParameters();
				}
			}
		}
		this.updatePropertyDParameters();
	}
	/*
	 * Fires when section delete button clicked
	 */
	this.delElementDParameters = function(oControlEvent){
		var key = oControlEvent.getParameter("key");
		if(key) {
			// Delete Element
			for(var i=0;i<this._elementsContentDParameters.length;i++){
				if(this._elementsContentDParameters[i].leaf == false && this._elementsContentDParameters[i].key == key) {
					this._elementsContentDParameters.splice(i,1);
				}
			}
			// Delete Items under Element
			for(var i=this._elementsContentDParameters.length-1;i>=0;i--){
				if(this._elementsContentDParameters[i].leaf == true && this._elementsContentDParameters[i].parentKey == key) {
					this._elementsContentDParameters.splice(i,1);
				}
			}
			this.firePropertiesChanged(["DParameters"]);
		}
		this.updatePropertyDParameters();
	};
	/*
	 * Fires when item add button clicked
	 */
	this.addItemDParameters = function(oControlEvent){
		var allItems = new org.scn.community.propertysheet.ListBuilder();		
		allItems.setList(this._elementsContentDParameters);
		var newItemKey = allItems.generateKey("Item");
		delete allItems;
		var sectionItems = new org.scn.community.propertysheet.ListBuilder();
		sectionItems.setList(this._elementsContentDParameters);
		var newItem = { 
			parentKey : this._listBuilderDParameters.getSelectedKey(),
			key : newItemKey, 
			leaf: true, 
			
		};
		this._elementsContentDParameters.push(newItem);
		this.firePropertiesChanged(["DParameters"]);
		this.updatePropertyDParameters();
	}
	/*
	 * Fires when section add button clicked
	 */
	this.addElementDParameters = function(oControlEvent){
		var newKey = this._listBuilderDParameters.generateKey("Element");
		var newElement = { 
			parentKey : "ROOT",
			key : newKey,
			leaf: false, 
			value:""
		};
		this._listBuilderDParameters.setSelectedKey(newKey);
		this._elementsContentDParameters.push(newElement);
		this.firePropertiesChanged(["DParameters"]);
		this.updatePropertyDParameters();
	};
	/*
	 * Fires when section up or down button clicked
	 */
	this.moveElementDParameters = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		for(var i=0;i<this._elementsContentDParameters.length;i++){
			if(this._elementsContentDParameters[i].key == movementData.key && !this._elementsContentDParameters[i].leaf) sourceIndex = i;
			if(this._elementsContentDParameters[i].key == movementData.targetKey && !this._elementsContentDParameters[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = this._elementsContentDParameters[targetIndex];
			this._elementsContentDParameters[targetIndex] = this._elementsContentDParameters[sourceIndex];
			this._elementsContentDParameters[sourceIndex] = temp;
			this.firePropertiesChanged(["DParameters"]);
			this.updatePropertyDParameters();
		}
	};
	/*
	 * Close Item Properties Popup
	 */
	this.closeDetailDParameters = function(oControlEvent){
		if(this._popupDParameters) {
			this._popupDParameters.close();
			this._popupDParameters.destroy();
			delete this._popupDParameters;
		}
		
	};
	/*
	 * Fires when item up or down button clicked
	 */
	this.moveItemDParameters = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		var sectionKey = this._listBuilderDParameters.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		for(var i=0;i<this._elementsContentDParameters.length;i++){
			if(this._elementsContentDParameters[i].key == itemKey && this._elementsContentDParameters[i].parentKey == sectionKey && this._elementsContentDParameters[i].leaf) sourceIndex = i;
			if(this._elementsContentDParameters[i].key == movementData.targetKey && this._elementsContentDParameters[i].parentKey == sectionKey && this._elementsContentDParameters[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = this._elementsContentDParameters[targetIndex];
			this._elementsContentDParameters[targetIndex] = this._elementsContentDParameters[sourceIndex];
			this._elementsContentDParameters[sourceIndex] = temp;
			this.firePropertiesChanged(["DParameters"]);
			this.updatePropertyDParameters();
		}
	}
	/*
	 * Convenience Function to return only entries that are Elements
	 */
	this.gatherElementsDParameters = function(){
		var sections = [];
		for(var i=0;i<this._elementsContentDParameters.length;i++){
			if(this._elementsContentDParameters[i].leaf==false) sections.push(this._elementsContentDParameters[i]);
		}
		return sections;
	};
	/*
	 * Convenience Function to return only entries that are Items (Leafs)
	 */
	this.gatherItemsDParameters = function(sectionKey){
		var items = [];
		for(var i=0;i<this._elementsContentDParameters.length;i++){
			if(this._elementsContentDParameters[i].leaf==true && this._elementsContentDParameters[i].parentKey==sectionKey) items.push(this._elementsContentDParameters[i]);
		}
		return items;
	};
	/*
	 * Property Sheet Initialization
	 */
	this.initDParameters = function(){
		
		this._labelDParameters = new sap.ui.commons.Label({text: " List of Parameters (Name / Value)"});
		this._labelDParameters.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDParameters);
		
		this._hLayoutDParameters = new sap.ui.commons.layout.HorizontalLayout({ });
		this._content.addContent(this._hLayoutDParameters);
		this._listBuilderDParameters = new org.scn.community.propertysheet.ListBuilder({
			width : "200px"
		});
		
		this._listBuilderDParameters.attachItemAdded(this.addElementDParameters,this);
		this._listBuilderDParameters.attachItemDeleted(this.delElementDParameters,this);
		this._listBuilderDParameters.attachItemMoved(this.moveElementDParameters,this);
		this._listBuilderDParameters.attachItemSelected(this.elementSelectedDParameters,this);
		
		this._sectionPropertyLayoutDParameters = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		this._sectionPropertyListDParameters = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		this._sectionPropertyLayoutDParameters.addStyleClass("org-scn-ApsDoubleArrayVertical");
		this._sectionPropertyListDParameters.addStyleClass("org-scn-ApsDoubleArrayVertical");

		this._hLayoutDParameters.addContent(this._listBuilderDParameters);
		this._hLayoutDParameters.addContent(this._sectionPropertyLayoutDParameters);
		this._hLayoutDParameters.addContent(this._sectionPropertyListDParameters);
		this._sectionPropertyListDParameters.addStyleClass("org-scn-Aps-DetailList-SingleArray");
		this._hLayoutDParameters.addStyleClass("org-scn-ApsDoubleArray");
		
		this.updatePropertyDParameters();
	};

	this.DParameters = function(s){
		if( s === undefined){
			return JSON.stringify(this._elementsContentDParameters);
		}else{
			var o = [];
			if(s && s!="") o = jQuery.parseJSON(s);
			this._elementsContentDParameters = o;
			this.updatePropertyDParameters();
			return this;
		}
	};

	this._elementsContentDHeaders = [];
	this._selectedElementKeyDHeaders = "";
	this._selectedItemKeyDHeaders = "";
	this._currentItemConfigDHeaders = {};

	/*
	 * Retrieves JSON for Element Entry
	 */
	this.getElementDHeaders = function(key){
		var sections = this.gatherElementsDHeaders();
		for(var i=0;i<sections.length;i++){
			if(sections[i].key == key) return sections[i];
		}
	};
	/*
	 * Retrieves JSON for Item Entry
	 */
	this.getItemDHeaders = function(sectionKey,key){
		for(var i=0;i<this._elementsContentDHeaders.length;i++){
			if(this._elementsContentDHeaders[i].key == key && this._elementsContentDHeaders[i].parentKey==sectionKey) return this._elementsContentDHeaders[i];
		}
	};
	/*
	 * Update Element JSON and notify Design Studio IDE
	 */
	this.updateElementDHeaders = function(key,section){
		for(var i=0;i<this._elementsContentDHeaders.length;i++){
			var element = this._elementsContentDHeaders[i];
			if(!element.leaf && element.key==key){
				this._elementsContentDHeaders[i] = section;
			}
		}
		this.firePropertiesChanged(["DHeaders"]);
		this.updatePropertyDHeaders();
	};
	/*
	 * Update Item JSON and notify Design Studio IDE
	 */
	this.updateItemDHeaders = function(key){
		for(var i=0;i<this._elementsContentDHeaders.length;i++){
			var element = this._elementsContentDHeaders[i];
			if(element.leaf && element.key==key){
				this._elementsContentDHeaders[i] = this._currentItemConfigDHeaders;
			}
		}
		this.firePropertiesChanged(["DHeaders"]);
		this.updatePropertyDHeaders();
		this.closeDetailDHeaders();
	};
	/*
	 * Displays Element Properties
	 */
	this.showElementPropertiesDHeaders = function(){
		this._sectionPropertyLayoutDHeaders.destroyContent();
		this._sectionPropertyListDHeaders.destroyContent();
		
		this._selectedElementKeyDHeaders = this._listBuilderDHeaders.getSelectedKey();
		if(!this._selectedElementKeyDHeaders) return;
		var selectedElement = this.getElementDHeaders(this._selectedElementKeyDHeaders);		
		if(!selectedElement) return;
		
		var items = this.gatherItemsDHeaders(this._selectedElementKeyDHeaders);
		
		var sectionKey = new sap.ui.commons.TextView({text : "Header Name"});
		sectionKey.addStyleClass("org-scn-ApsLabelArray");
		var txtElementKey = new sap.ui.commons.TextField({value : selectedElement.key, width: "180px"});
		txtElementKey.addStyleClass("org-scn-ApsInputArray");
		txtElementKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			value = this._listBuilderDHeaders.generateKey(value);
			var section = this.getElementDHeaders(this._listBuilderDHeaders.getSelectedKey());
			section.key = value;
			// Update Parent Key references
			for(var i=0;i<this._elementsContentDHeaders.length;i++){
				var element = this._elementsContentDHeaders[i];
				if(element.parentKey == this._listBuilderDHeaders.getSelectedKey() && element.leaf) element.parentKey = value;
			}
			this.updateElementDHeaders(this._listBuilderDHeaders.getSelectedKey(),section);
			this._listBuilderDHeaders.setSelectedKey(value);
			this.showElementPropertiesDHeaders();
		}, this);
		this._sectionPropertyLayoutDHeaders.addContent(sectionKey);
		this._sectionPropertyLayoutDHeaders.addContent(txtElementKey);

		var sectionvalue = new sap.ui.commons.TextView({text : "Header Value"});
		sectionvalue.addStyleClass("org-scn-ApsLabelArray");
		var txtElementvalue = new sap.ui.commons.TextField({value : selectedElement.value, width: "180px"});
		txtElementvalue.addStyleClass("org-scn-ApsInputArray");
		txtElementvalue.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			var section = this.getElementDHeaders(this._listBuilderDHeaders.getSelectedKey());
			section.value = value;
			this.updateElementDHeaders(this._listBuilderDHeaders.getSelectedKey(),section);
		}, this);
		this._sectionPropertyLayoutDHeaders.addContent(sectionvalue);
		this._sectionPropertyLayoutDHeaders.addContent(txtElementvalue);


		var itemsLabel = new sap.ui.commons.TextView({text : "Items"});
		itemsLabel.addStyleClass("org-scn-ApsLabelArray");
		var itemsList = new org.scn.community.propertysheet.ListBuilder({
			width : "200px",
			newKeyPrefix : "ITEM_",
			newTextPrefix : "Item ",
			list : this.gatherItemsDHeaders(this._listBuilderDHeaders.getSelectedKey()),
			showDetail : true,
			selectedKey : this._selectedItemKeyDHeaders
		});
		
		itemsList.attachItemAdded(this.addItemDHeaders,this);
		itemsList.attachItemDeleted(this.delItemDHeaders,this);
		itemsList.attachItemDetail(this.showItemPropertiesDHeaders,this);
		itemsList.attachItemMoved(this.moveItemDHeaders,this);
		itemsList.attachItemSelected(this.itemSelectedDHeaders,this);
		
		this._sectionPropertyListDHeaders.addContent(itemsLabel);
		this._sectionPropertyListDHeaders.addContent(itemsList);
	};
	/*
	 * Displays Item Properties in a Popup Panel
	 */
	this.showItemPropertiesDHeaders = function(oControlEvent){
		var detailData = oControlEvent.getParameters();
		this._currentItemConfigDHeaders = this.getItemDHeaders(this._listBuilderDHeaders.getSelectedKey(),detailData.key);
		if(!this._currentItemConfigDHeaders) return;
		
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
		var txtItemKey = new sap.ui.commons.TextField({value : this._currentItemConfigDHeaders.key, width: "300px"});
		txtItemKey.addStyleClass("org-scn-ApsInputArray");
		txtItemKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			var allItems = new org.scn.community.propertysheet.ListBuilder();		
			allItems.setList(this._elementsContentDHeaders);
			var newItemKey = allItems.generateKey(value);
			delete allItems;
			this._currentItemConfigDHeaders.key = newItemKey;		
		}, this);
		itemDetailLayout.addContent(itemKey);
		itemDetailLayout.addContent(txtItemKey);


		var detailButtons = new sap.ui.commons.layout.HorizontalLayout({ });
		var closeButton = new sap.ui.commons.Button({
			text : "Cancel"
		});
		var okButton = new sap.ui.commons.Button({
			text : "Update"
		});
		
		closeButton.attachPress(this.closeDetailDHeaders,this);
		okButton.attachPress(this.updateItemDHeaders,this);
		
		detailButtons.addContent(closeButton);
		detailButtons.addContent(okButton);
		detailButtons.addStyleClass("org-scn-ApsPopUpButtons");
		
		itemDetailLayout.addContent(detailButtons);
		itemDetailPanel.addContent(itemDetailLayout);
		
		if(!this._popupDHeaders) this._popupDHeaders = new sap.ui.core.Popup(itemDetailPanel, true, true, true);
		
		//this._popupDHeaders.destroyContent();
		this._popupDHeaders.open(250,"center center", "center center", document.body, null);
	};
	/*
	 * Fires when Element Listbox is selected
	 */
	this.elementSelectedDHeaders = function(oControlEvent){
		this._selectedElementKeyDHeaders = "";
		if(oControlEvent.getParameters().key) this._selectedElementKeyDHeaders = oControlEvent.getParameters().key;
		this.showElementPropertiesDHeaders();
	};
	/*
	 * Fires when Item Listbox is selected
	 */
	this.itemSelectedDHeaders = function(oControlEvent){
		this._selectedItemKeyDHeaders = "";
		if(oControlEvent.getParameters().key) this._selectedItemKeyDHeaders = oControlEvent.getParameters().key;
	};
	/*
	 * Fires when component is selected or when properties change to re-render
	 */
	this.updatePropertyDHeaders = function(){
		this._listBuilderDHeaders.setList(this.gatherElementsDHeaders());
		this.showElementPropertiesDHeaders(this._listBuilderDHeaders.getSelectedKey());
	};
	/*
	 * Fires when item delete button clicked
	 */
	this.delItemDHeaders = function(oControlEvent){
		var sectionKey = this._listBuilderDHeaders.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		if(sectionKey && itemKey) {
			for(var i=0;i<this._elementsContentDHeaders.length;i++){
				if(this._elementsContentDHeaders[i].leaf == true && this._elementsContentDHeaders[i].key == itemKey && this._elementsContentDHeaders[i].parentKey==sectionKey) {
					this._elementsContentDHeaders.splice(i,1);
					this.firePropertiesChanged(["DHeaders"]);
					this.updatePropertyDHeaders();
				}
			}
		}
		this.updatePropertyDHeaders();
	}
	/*
	 * Fires when section delete button clicked
	 */
	this.delElementDHeaders = function(oControlEvent){
		var key = oControlEvent.getParameter("key");
		if(key) {
			// Delete Element
			for(var i=0;i<this._elementsContentDHeaders.length;i++){
				if(this._elementsContentDHeaders[i].leaf == false && this._elementsContentDHeaders[i].key == key) {
					this._elementsContentDHeaders.splice(i,1);
				}
			}
			// Delete Items under Element
			for(var i=this._elementsContentDHeaders.length-1;i>=0;i--){
				if(this._elementsContentDHeaders[i].leaf == true && this._elementsContentDHeaders[i].parentKey == key) {
					this._elementsContentDHeaders.splice(i,1);
				}
			}
			this.firePropertiesChanged(["DHeaders"]);
		}
		this.updatePropertyDHeaders();
	};
	/*
	 * Fires when item add button clicked
	 */
	this.addItemDHeaders = function(oControlEvent){
		var allItems = new org.scn.community.propertysheet.ListBuilder();		
		allItems.setList(this._elementsContentDHeaders);
		var newItemKey = allItems.generateKey("Item");
		delete allItems;
		var sectionItems = new org.scn.community.propertysheet.ListBuilder();
		sectionItems.setList(this._elementsContentDHeaders);
		var newItem = { 
			parentKey : this._listBuilderDHeaders.getSelectedKey(),
			key : newItemKey, 
			leaf: true, 
			
		};
		this._elementsContentDHeaders.push(newItem);
		this.firePropertiesChanged(["DHeaders"]);
		this.updatePropertyDHeaders();
	}
	/*
	 * Fires when section add button clicked
	 */
	this.addElementDHeaders = function(oControlEvent){
		var newKey = this._listBuilderDHeaders.generateKey("Element");
		var newElement = { 
			parentKey : "ROOT",
			key : newKey,
			leaf: false, 
			value:""
		};
		this._listBuilderDHeaders.setSelectedKey(newKey);
		this._elementsContentDHeaders.push(newElement);
		this.firePropertiesChanged(["DHeaders"]);
		this.updatePropertyDHeaders();
	};
	/*
	 * Fires when section up or down button clicked
	 */
	this.moveElementDHeaders = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		for(var i=0;i<this._elementsContentDHeaders.length;i++){
			if(this._elementsContentDHeaders[i].key == movementData.key && !this._elementsContentDHeaders[i].leaf) sourceIndex = i;
			if(this._elementsContentDHeaders[i].key == movementData.targetKey && !this._elementsContentDHeaders[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = this._elementsContentDHeaders[targetIndex];
			this._elementsContentDHeaders[targetIndex] = this._elementsContentDHeaders[sourceIndex];
			this._elementsContentDHeaders[sourceIndex] = temp;
			this.firePropertiesChanged(["DHeaders"]);
			this.updatePropertyDHeaders();
		}
	};
	/*
	 * Close Item Properties Popup
	 */
	this.closeDetailDHeaders = function(oControlEvent){
		if(this._popupDHeaders) {
			this._popupDHeaders.close();
			this._popupDHeaders.destroy();
			delete this._popupDHeaders;
		}
		
	};
	/*
	 * Fires when item up or down button clicked
	 */
	this.moveItemDHeaders = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		var sectionKey = this._listBuilderDHeaders.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		for(var i=0;i<this._elementsContentDHeaders.length;i++){
			if(this._elementsContentDHeaders[i].key == itemKey && this._elementsContentDHeaders[i].parentKey == sectionKey && this._elementsContentDHeaders[i].leaf) sourceIndex = i;
			if(this._elementsContentDHeaders[i].key == movementData.targetKey && this._elementsContentDHeaders[i].parentKey == sectionKey && this._elementsContentDHeaders[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = this._elementsContentDHeaders[targetIndex];
			this._elementsContentDHeaders[targetIndex] = this._elementsContentDHeaders[sourceIndex];
			this._elementsContentDHeaders[sourceIndex] = temp;
			this.firePropertiesChanged(["DHeaders"]);
			this.updatePropertyDHeaders();
		}
	}
	/*
	 * Convenience Function to return only entries that are Elements
	 */
	this.gatherElementsDHeaders = function(){
		var sections = [];
		for(var i=0;i<this._elementsContentDHeaders.length;i++){
			if(this._elementsContentDHeaders[i].leaf==false) sections.push(this._elementsContentDHeaders[i]);
		}
		return sections;
	};
	/*
	 * Convenience Function to return only entries that are Items (Leafs)
	 */
	this.gatherItemsDHeaders = function(sectionKey){
		var items = [];
		for(var i=0;i<this._elementsContentDHeaders.length;i++){
			if(this._elementsContentDHeaders[i].leaf==true && this._elementsContentDHeaders[i].parentKey==sectionKey) items.push(this._elementsContentDHeaders[i]);
		}
		return items;
	};
	/*
	 * Property Sheet Initialization
	 */
	this.initDHeaders = function(){
		
		this._labelDHeaders = new sap.ui.commons.Label({text: " List of Headers (Name / Value)"});
		this._labelDHeaders.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDHeaders);
		
		this._hLayoutDHeaders = new sap.ui.commons.layout.HorizontalLayout({ });
		this._content.addContent(this._hLayoutDHeaders);
		this._listBuilderDHeaders = new org.scn.community.propertysheet.ListBuilder({
			width : "200px"
		});
		
		this._listBuilderDHeaders.attachItemAdded(this.addElementDHeaders,this);
		this._listBuilderDHeaders.attachItemDeleted(this.delElementDHeaders,this);
		this._listBuilderDHeaders.attachItemMoved(this.moveElementDHeaders,this);
		this._listBuilderDHeaders.attachItemSelected(this.elementSelectedDHeaders,this);
		
		this._sectionPropertyLayoutDHeaders = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		this._sectionPropertyListDHeaders = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		this._sectionPropertyLayoutDHeaders.addStyleClass("org-scn-ApsDoubleArrayVertical");
		this._sectionPropertyListDHeaders.addStyleClass("org-scn-ApsDoubleArrayVertical");

		this._hLayoutDHeaders.addContent(this._listBuilderDHeaders);
		this._hLayoutDHeaders.addContent(this._sectionPropertyLayoutDHeaders);
		this._hLayoutDHeaders.addContent(this._sectionPropertyListDHeaders);
		this._sectionPropertyListDHeaders.addStyleClass("org-scn-Aps-DetailList-SingleArray");
		this._hLayoutDHeaders.addStyleClass("org-scn-ApsDoubleArray");
		
		this.updatePropertyDHeaders();
	};

	this.DHeaders = function(s){
		if( s === undefined){
			return JSON.stringify(this._elementsContentDHeaders);
		}else{
			var o = [];
			if(s && s!="") o = jQuery.parseJSON(s);
			this._elementsContentDHeaders = o;
			this.updatePropertyDHeaders();
			return this;
		}
	};

	this.updatePropertyDRawParameters = function(){
		this._inputDRawParameters.setValue(this._DRawParameters);
	};
	
	this.initDRawParameters = function(){
		this._labelDRawParameters = new sap.ui.commons.Label({text: " Raw Parameters as String Content"});
		this._labelDRawParameters.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDRawParameters);
		
		this._inputDRawParameters = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDRawParameters);
		this._inputDRawParameters.attachChange(this.propertyChangedDRawParameters, this);
		this._inputDRawParameters.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDRawParameters();
	};

	this.propertyChangedDRawParameters = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DRawParameters = value;
		this.firePropertiesChanged(["DRawParameters"]);
	};
	
	this.DRawParameters = function(s){
		if( s === undefined){
			return this._DRawParameters;
		}else{
			this._DRawParameters = s;
			this.updatePropertyDRawParameters();
			return this;
		}
	};


});
