
/**
 * Generated ZTL Class for UI5 Table
 * 
 * DO NOT EDIT
 */
sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.UI5TablePropertyPage",  function() {
	var that = this;

	that.init = function () {
		that._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		that._content.placeAt($("#content"));

		that["fun_DAllowColumnReorder"].init();
		that["fun_DAllowFilter"].init();
		that["fun_DAllowSelection"].init();
		that["fun_DAllowSort"].init();
		that["fun_DColumnFormattingCondition"].init();
		that["fun_DDataColWidths"].init();
		that["fun_DDataProvisioner"].init();
		that["fun_DEmptyDataValue"].init();
		that["fun_DEmptyHeaderValue"].init();
		that["fun_DFixedHeader"].init();
		that["fun_DFormattingCondition"].init();
		that["fun_DFormattingOperator"].init();
		that["fun_DHeaderColWidth"].init();
		that["fun_DIgnoreResults"].init();
		that["fun_DNavigationMode"].init();
		that["fun_DRowHeight"].init();
		that["fun_DVisibleRowCount"].init();
		
	};
	
	that.componentSelected = function(){
		that["fun_DAllowColumnReorder"].update();
		that["fun_DAllowFilter"].update();
		that["fun_DAllowSelection"].update();
		that["fun_DAllowSort"].update();
		that["fun_DColumnFormattingCondition"].update();
		that["fun_DDataColWidths"].update();
		that["fun_DDataProvisioner"].update();
		that["fun_DEmptyDataValue"].update();
		that["fun_DEmptyHeaderValue"].update();
		that["fun_DFixedHeader"].update();
		that["fun_DFormattingCondition"].update();
		that["fun_DFormattingOperator"].update();
		that["fun_DHeaderColWidth"].update();
		that["fun_DIgnoreResults"].update();
		that["fun_DNavigationMode"].update();
		that["fun_DRowHeight"].update();
		that["fun_DVisibleRowCount"].update();
		
	};
	
	
	that["fun_DAllowColumnReorder"] = {};
	
	that["fun_DAllowColumnReorder"].update = function(){
		that["fun_DAllowColumnReorder"]._input.setChecked(that["fun_DAllowColumnReorder"]._);
	};
	
	that["fun_DAllowColumnReorder"].init = function(){
		that["fun_DAllowColumnReorder"]._label = new sap.ui.commons.Label({text: " Allow Reorder of Columns"});
		that["fun_DAllowColumnReorder"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DAllowColumnReorder"]._label);
		
		that["fun_DAllowColumnReorder"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Allow Reorder of Columns"});
		that._content.addContent(that["fun_DAllowColumnReorder"]._input);
		that["fun_DAllowColumnReorder"]._input.attachChange(that["fun_DAllowColumnReorder"].propertyChanged, that);
		that["fun_DAllowColumnReorder"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DAllowColumnReorder"].update();
	};

	that["fun_DAllowColumnReorder"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_DAllowColumnReorder"]._ = checked;
		that.firePropertiesChanged(["DAllowColumnReorder"]);
	};
	
	that.DAllowColumnReorder = function(s){
		if( s === undefined){
			return that["fun_DAllowColumnReorder"]._;
		}else{
			that["fun_DAllowColumnReorder"]._ = s;
			that["fun_DAllowColumnReorder"].update();
			return that;
		}
	};

	that["fun_DAllowFilter"] = {};
	
	that["fun_DAllowFilter"].update = function(){
		that["fun_DAllowFilter"]._input.setChecked(that["fun_DAllowFilter"]._);
	};
	
	that["fun_DAllowFilter"].init = function(){
		that["fun_DAllowFilter"]._label = new sap.ui.commons.Label({text: " Allow Sort in Columns"});
		that["fun_DAllowFilter"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DAllowFilter"]._label);
		
		that["fun_DAllowFilter"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Allow Sort in Columns"});
		that._content.addContent(that["fun_DAllowFilter"]._input);
		that["fun_DAllowFilter"]._input.attachChange(that["fun_DAllowFilter"].propertyChanged, that);
		that["fun_DAllowFilter"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DAllowFilter"].update();
	};

	that["fun_DAllowFilter"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_DAllowFilter"]._ = checked;
		that.firePropertiesChanged(["DAllowFilter"]);
	};
	
	that.DAllowFilter = function(s){
		if( s === undefined){
			return that["fun_DAllowFilter"]._;
		}else{
			that["fun_DAllowFilter"]._ = s;
			that["fun_DAllowFilter"].update();
			return that;
		}
	};

	that["fun_DAllowSelection"] = {};
	
	that["fun_DAllowSelection"].update = function(){
		that["fun_DAllowSelection"]._input.setChecked(that["fun_DAllowSelection"]._);
	};
	
	that["fun_DAllowSelection"].init = function(){
		that["fun_DAllowSelection"]._label = new sap.ui.commons.Label({text: " Allow Selection in the Table"});
		that["fun_DAllowSelection"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DAllowSelection"]._label);
		
		that["fun_DAllowSelection"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Allow Selection in the Table"});
		that._content.addContent(that["fun_DAllowSelection"]._input);
		that["fun_DAllowSelection"]._input.attachChange(that["fun_DAllowSelection"].propertyChanged, that);
		that["fun_DAllowSelection"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DAllowSelection"].update();
	};

	that["fun_DAllowSelection"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_DAllowSelection"]._ = checked;
		that.firePropertiesChanged(["DAllowSelection"]);
	};
	
	that.DAllowSelection = function(s){
		if( s === undefined){
			return that["fun_DAllowSelection"]._;
		}else{
			that["fun_DAllowSelection"]._ = s;
			that["fun_DAllowSelection"].update();
			return that;
		}
	};

	that["fun_DAllowSort"] = {};
	
	that["fun_DAllowSort"].update = function(){
		that["fun_DAllowSort"]._input.setChecked(that["fun_DAllowSort"]._);
	};
	
	that["fun_DAllowSort"].init = function(){
		that["fun_DAllowSort"]._label = new sap.ui.commons.Label({text: " Allow Sort in Columns"});
		that["fun_DAllowSort"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DAllowSort"]._label);
		
		that["fun_DAllowSort"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Allow Sort in Columns"});
		that._content.addContent(that["fun_DAllowSort"]._input);
		that["fun_DAllowSort"]._input.attachChange(that["fun_DAllowSort"].propertyChanged, that);
		that["fun_DAllowSort"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DAllowSort"].update();
	};

	that["fun_DAllowSort"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_DAllowSort"]._ = checked;
		that.firePropertiesChanged(["DAllowSort"]);
	};
	
	that.DAllowSort = function(s){
		if( s === undefined){
			return that["fun_DAllowSort"]._;
		}else{
			that["fun_DAllowSort"]._ = s;
			that["fun_DAllowSort"].update();
			return that;
		}
	};

	that["fun_DColumnFormattingCondition"] = {};
	
	that["fun_DColumnFormattingCondition"].update = function(){
		that["fun_DColumnFormattingCondition"]._input.setValue(that["fun_DColumnFormattingCondition"]._);
	};
	
	that["fun_DColumnFormattingCondition"].init = function(){
		that["fun_DColumnFormattingCondition"]._label = new sap.ui.commons.Label({text: " (non-stable) Column Based Formatting Condition"});
		that["fun_DColumnFormattingCondition"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DColumnFormattingCondition"]._label);
		
		that["fun_DColumnFormattingCondition"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DColumnFormattingCondition"]._input);
		that["fun_DColumnFormattingCondition"]._input.attachChange(that["fun_DColumnFormattingCondition"].propertyChanged, that);
		that["fun_DColumnFormattingCondition"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DColumnFormattingCondition"].update();
	};

	that["fun_DColumnFormattingCondition"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DColumnFormattingCondition"]._ = value;
		that.firePropertiesChanged(["DColumnFormattingCondition"]);
	};
	
	that.DColumnFormattingCondition = function(s){
		if( s === undefined){
			return that["fun_DColumnFormattingCondition"]._;
		}else{
			that["fun_DColumnFormattingCondition"]._ = s;
			that["fun_DColumnFormattingCondition"].update();
			return that;
		}
	};

	that["fun_DDataColWidths"] = {};
	
	that["fun_DDataColWidths"]._elementsContent = [];
	that["fun_DDataColWidths"]._selectedElementKey = "";
	that["fun_DDataColWidths"]._selectedItemKey = "";
	that["fun_DDataColWidths"]._currentItemConfig = {};

	/*
	 * Retrieves JSON for Element Entry
	 */
	that["fun_DDataColWidths"].getElement = function(key){
		var sections = that["fun_DDataColWidths"].gatherElements();
		for(var i=0;i<sections.length;i++){
			if(sections[i].key == key) return sections[i];
		}
	};
	/*
	 * Retrieves JSON for Item Entry
	 */
	that["fun_DDataColWidths"].getItem = function(sectionKey,key){
		for(var i=0;i<that["fun_DDataColWidths"]._elementsContent.length;i++){
			if(that["fun_DDataColWidths"]._elementsContent[i].key == key && that["fun_DDataColWidths"]._elementsContent[i].parentKey==sectionKey) return that["fun_DDataColWidths"]._elementsContent[i];
		}
	};
	/*
	 * Update Element JSON and notify Design Studio IDE
	 */
	that["fun_DDataColWidths"].updateElement = function(key,section){
		for(var i=0;i<that["fun_DDataColWidths"]._elementsContent.length;i++){
			var element = that["fun_DDataColWidths"]._elementsContent[i];
			if(!element.leaf && element.key==key){
				that["fun_DDataColWidths"]._elementsContent[i] = section;
			}
		}
		that.firePropertiesChanged(["DDataColWidths"]);
		that["fun_DDataColWidths"].update();
	};
	/*
	 * Update Item JSON and notify Design Studio IDE
	 */
	that["fun_DDataColWidths"].updateItem = function(key){
		for(var i=0;i<that["fun_DDataColWidths"]._elementsContent.length;i++){
			var element = that["fun_DDataColWidths"]._elementsContent[i];
			if(element.leaf && element.key==key){
				that["fun_DDataColWidths"]._elementsContent[i] = that["fun_DDataColWidths"]._currentItemConfig;
			}
		}
		that.firePropertiesChanged(["DDataColWidths"]);
		that["fun_DDataColWidths"].update();
		that["fun_DDataColWidths"].closeDetail();
	};
	/*
	 * Displays Element Properties
	 */
	that["fun_DDataColWidths"].showElementProperties = function(){
		that["fun_DDataColWidths"]._sectionPropertyLayout.destroyContent();
		that["fun_DDataColWidths"]._sectionPropertyList.destroyContent();
		
		that["fun_DDataColWidths"]._selectedElementKey = that["fun_DDataColWidths"]._listBuilder.getSelectedKey();
		if(!that["fun_DDataColWidths"]._selectedElementKey) return;
		var selectedElement = that["fun_DDataColWidths"].getElement(that["fun_DDataColWidths"]._selectedElementKey);		
		if(!selectedElement) return;
		
		var items = that["fun_DDataColWidths"].gatherItems(that["fun_DDataColWidths"]._selectedElementKey);
		
		var sectionKey = new sap.ui.commons.TextView({text : "Column index (0-based)"});
		sectionKey.addStyleClass("org-scn-ApsLabelArray");
		var txtElementKey = new sap.ui.commons.TextField({value : selectedElement.key, width: "180px"});
		txtElementKey.addStyleClass("org-scn-ApsInputArray");
		txtElementKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			value = that["fun_DDataColWidths"]._listBuilder.generateKey(value);
			var section = that["fun_DDataColWidths"].getElement(that["fun_DDataColWidths"]._listBuilder.getSelectedKey());
			section.key = value;
			// Update Parent Key references
			for(var i=0;i<that["fun_DDataColWidths"]._elementsContent.length;i++){
				var element = that["fun_DDataColWidths"]._elementsContent[i];
				if(element.parentKey == that["fun_DDataColWidths"]._listBuilder.getSelectedKey() && element.leaf) element.parentKey = value;
			}
			that["fun_DDataColWidths"].updateElement(that["fun_DDataColWidths"]._listBuilder.getSelectedKey(),section);
			that["fun_DDataColWidths"]._listBuilder.setSelectedKey(value);
			that["fun_DDataColWidths"].showElementProperties();
		}, that);
		that["fun_DDataColWidths"]._sectionPropertyLayout.addContent(sectionKey);
		that["fun_DDataColWidths"]._sectionPropertyLayout.addContent(txtElementKey);

		var sectionwidth = new sap.ui.commons.TextView({text : "Width with unit (e.g. 200px | 30%)"});
		sectionwidth.addStyleClass("org-scn-ApsLabelArray");
		var txtElementwidth = new sap.ui.commons.TextField({value : selectedElement.width, width: "180px"});
		txtElementwidth.addStyleClass("org-scn-ApsInputArray");
		txtElementwidth.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			var section = that["fun_DDataColWidths"].getElement(that["fun_DDataColWidths"]._listBuilder.getSelectedKey());
			section.width = value;
			that["fun_DDataColWidths"].updateElement(that["fun_DDataColWidths"]._listBuilder.getSelectedKey(),section);
		}, that);
		that["fun_DDataColWidths"]._sectionPropertyLayout.addContent(sectionwidth);
		that["fun_DDataColWidths"]._sectionPropertyLayout.addContent(txtElementwidth);


		var itemsLabel = new sap.ui.commons.TextView({text : "Items"});
		itemsLabel.addStyleClass("org-scn-ApsLabelArray");
		var itemsList = new org.scn.community.propertysheet.ListBuilder({
			width : "200px",
			newKeyPrefix : "ITEM_",
			newTextPrefix : "Item ",
			list : that["fun_DDataColWidths"].gatherItems(that["fun_DDataColWidths"]._listBuilder.getSelectedKey()),
			showDetail : true,
			selectedKey : that["fun_DDataColWidths"]._selectedItemKey
		});
		
		itemsList.attachItemAdded(that["fun_DDataColWidths"].addItem,that);
		itemsList.attachItemDeleted(that["fun_DDataColWidths"].delItem,that);
		itemsList.attachItemDetail(that["fun_DDataColWidths"].showItemProperties,that);
		itemsList.attachItemMoved(that["fun_DDataColWidths"].moveItem,that);
		itemsList.attachItemSelected(that["fun_DDataColWidths"].itemSelected,that);
		
		that["fun_DDataColWidths"]._sectionPropertyList.addContent(itemsLabel);
		that["fun_DDataColWidths"]._sectionPropertyList.addContent(itemsList);
	};
	/*
	 * Displays Item Properties in a Popup Panel
	 */
	that["fun_DDataColWidths"].showItemProperties = function(oControlEvent){
		var detailData = oControlEvent.getParameters();
		that["fun_DDataColWidths"]._currentItemConfig = that["fun_DDataColWidths"].getItem(that["fun_DDataColWidths"]._listBuilder.getSelectedKey(),detailData.key);
		if(!that["fun_DDataColWidths"]._currentItemConfig) return;
		
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
		var txtItemKey = new sap.ui.commons.TextField({value : that["fun_DDataColWidths"]._currentItemConfig.key, width: "300px"});
		txtItemKey.addStyleClass("org-scn-ApsInputArray");
		txtItemKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			var allItems = new org.scn.community.propertysheet.ListBuilder();		
			allItems.setList(that["fun_DDataColWidths"]._elementsContent);
			var newItemKey = allItems.generateKey(value);
			delete allItems;
			that["fun_DDataColWidths"]._currentItemConfig.key = newItemKey;		
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
		
		closeButton.attachPress(that["fun_DDataColWidths"].closeDetail,that);
		okButton.attachPress(that["fun_DDataColWidths"].updateItem,that);
		
		detailButtons.addContent(closeButton);
		detailButtons.addContent(okButton);
		detailButtons.addStyleClass("org-scn-ApsPopUpButtons");
		
		itemDetailLayout.addContent(detailButtons);
		itemDetailPanel.addContent(itemDetailLayout);
		
		if(!that["fun_DDataColWidths"]._popup) that["fun_DDataColWidths"]._popup = new sap.ui.core.Popup(itemDetailPanel, true, true, true);
		
		//that["fun_DDataColWidths"]._popup.destroyContent();
		that["fun_DDataColWidths"]._popup.open(250,"center center", "center center", document.body, null);
	};
	/*
	 * Fires when Element Listbox is selected
	 */
	that["fun_DDataColWidths"].elementSelected = function(oControlEvent){
		that["fun_DDataColWidths"]._selectedElementKey = "";
		if(oControlEvent.getParameters().key) that["fun_DDataColWidths"]._selectedElementKey = oControlEvent.getParameters().key;
		that["fun_DDataColWidths"].showElementProperties();
	};
	/*
	 * Fires when Item Listbox is selected
	 */
	that["fun_DDataColWidths"].itemSelected = function(oControlEvent){
		that["fun_DDataColWidths"]._selectedItemKey = "";
		if(oControlEvent.getParameters().key) that["fun_DDataColWidths"]._selectedItemKey = oControlEvent.getParameters().key;
	};
	/*
	 * Fires when component is selected or when properties change to re-render
	 */
	that["fun_DDataColWidths"].update = function(){
		that["fun_DDataColWidths"]._listBuilder.setList(that["fun_DDataColWidths"].gatherElements());
		that["fun_DDataColWidths"].showElementProperties(that["fun_DDataColWidths"]._listBuilder.getSelectedKey());
	};
	/*
	 * Fires when item delete button clicked
	 */
	that["fun_DDataColWidths"].delItem = function(oControlEvent){
		var sectionKey = that["fun_DDataColWidths"]._listBuilder.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		if(sectionKey && itemKey) {
			for(var i=0;i<that["fun_DDataColWidths"]._elementsContent.length;i++){
				if(that["fun_DDataColWidths"]._elementsContent[i].leaf == true && that["fun_DDataColWidths"]._elementsContent[i].key == itemKey && that["fun_DDataColWidths"]._elementsContent[i].parentKey==sectionKey) {
					that["fun_DDataColWidths"]._elementsContent.splice(i,1);
					that.firePropertiesChanged(["DDataColWidths"]);
					that["fun_DDataColWidths"].update();
				}
			}
		}
		that["fun_DDataColWidths"].update();
	}
	/*
	 * Fires when section delete button clicked
	 */
	that["fun_DDataColWidths"].delElement = function(oControlEvent){
		var key = oControlEvent.getParameter("key");
		if(key) {
			// Delete Element
			for(var i=0;i<that["fun_DDataColWidths"]._elementsContent.length;i++){
				if(that["fun_DDataColWidths"]._elementsContent[i].leaf == false && that["fun_DDataColWidths"]._elementsContent[i].key == key) {
					that["fun_DDataColWidths"]._elementsContent.splice(i,1);
				}
			}
			// Delete Items under Element
			for(var i=that["fun_DDataColWidths"]._elementsContent.length-1;i>=0;i--){
				if(that["fun_DDataColWidths"]._elementsContent[i].leaf == true && that["fun_DDataColWidths"]._elementsContent[i].parentKey == key) {
					that["fun_DDataColWidths"]._elementsContent.splice(i,1);
				}
			}
			that.firePropertiesChanged(["DDataColWidths"]);
		}
		that["fun_DDataColWidths"].update();
	};
	/*
	 * Fires when item add button clicked
	 */
	that["fun_DDataColWidths"].addItem = function(oControlEvent){
		var allItems = new org.scn.community.propertysheet.ListBuilder();		
		allItems.setList(that["fun_DDataColWidths"]._elementsContent);
		var newItemKey = allItems.generateKey("Item");
		delete allItems;
		var sectionItems = new org.scn.community.propertysheet.ListBuilder();
		sectionItems.setList(that["fun_DDataColWidths"]._elementsContent);
		var newItem = { 
			parentKey : that["fun_DDataColWidths"]._listBuilder.getSelectedKey(),
			key : newItemKey, 
			leaf: true, 
			
		};
		that["fun_DDataColWidths"]._elementsContent.push(newItem);
		that.firePropertiesChanged(["DDataColWidths"]);
		that["fun_DDataColWidths"].update();
	}
	/*
	 * Fires when section add button clicked
	 */
	that["fun_DDataColWidths"].addElement = function(oControlEvent){
		var newKey = that["fun_DDataColWidths"]._listBuilder.generateKey("Element");
		var newElement = { 
			parentKey : "ROOT",
			key : newKey,
			leaf: false, 
			width:""
		};
		that["fun_DDataColWidths"]._listBuilder.setSelectedKey(newKey);
		that["fun_DDataColWidths"]._elementsContent.push(newElement);
		that.firePropertiesChanged(["DDataColWidths"]);
		that["fun_DDataColWidths"].update();
	};
	/*
	 * Fires when section up or down button clicked
	 */
	that["fun_DDataColWidths"].moveElement = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		for(var i=0;i<that["fun_DDataColWidths"]._elementsContent.length;i++){
			if(that["fun_DDataColWidths"]._elementsContent[i].key == movementData.key && !that["fun_DDataColWidths"]._elementsContent[i].leaf) sourceIndex = i;
			if(that["fun_DDataColWidths"]._elementsContent[i].key == movementData.targetKey && !that["fun_DDataColWidths"]._elementsContent[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = that["fun_DDataColWidths"]._elementsContent[targetIndex];
			that["fun_DDataColWidths"]._elementsContent[targetIndex] = that["fun_DDataColWidths"]._elementsContent[sourceIndex];
			that["fun_DDataColWidths"]._elementsContent[sourceIndex] = temp;
			that.firePropertiesChanged(["DDataColWidths"]);
			that["fun_DDataColWidths"].update();
		}
	};
	/*
	 * Close Item Properties Popup
	 */
	that["fun_DDataColWidths"].closeDetail = function(oControlEvent){
		if(that["fun_DDataColWidths"]._popup) {
			that["fun_DDataColWidths"]._popup.close();
			that["fun_DDataColWidths"]._popup.destroy();
			delete that["fun_DDataColWidths"]._popup;
		}
		
	};
	/*
	 * Fires when item up or down button clicked
	 */
	that["fun_DDataColWidths"].moveItem = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		var sectionKey = that["fun_DDataColWidths"]._listBuilder.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		for(var i=0;i<that["fun_DDataColWidths"]._elementsContent.length;i++){
			if(that["fun_DDataColWidths"]._elementsContent[i].key == itemKey && that["fun_DDataColWidths"]._elementsContent[i].parentKey == sectionKey && that["fun_DDataColWidths"]._elementsContent[i].leaf) sourceIndex = i;
			if(that["fun_DDataColWidths"]._elementsContent[i].key == movementData.targetKey && that["fun_DDataColWidths"]._elementsContent[i].parentKey == sectionKey && that["fun_DDataColWidths"]._elementsContent[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = that["fun_DDataColWidths"]._elementsContent[targetIndex];
			that["fun_DDataColWidths"]._elementsContent[targetIndex] = that["fun_DDataColWidths"]._elementsContent[sourceIndex];
			that["fun_DDataColWidths"]._elementsContent[sourceIndex] = temp;
			that.firePropertiesChanged(["DDataColWidths"]);
			that["fun_DDataColWidths"].update();
		}
	}
	/*
	 * Convenience Function to return only entries that are Elements
	 */
	that["fun_DDataColWidths"].gatherElements = function(){
		var sections = [];
		for(var i=0;i<that["fun_DDataColWidths"]._elementsContent.length;i++){
			if(that["fun_DDataColWidths"]._elementsContent[i].leaf==false) sections.push(that["fun_DDataColWidths"]._elementsContent[i]);
		}
		return sections;
	};
	/*
	 * Convenience Function to return only entries that are Items (Leafs)
	 */
	that["fun_DDataColWidths"].gatherItems = function(sectionKey){
		var items = [];
		for(var i=0;i<that["fun_DDataColWidths"]._elementsContent.length;i++){
			if(that["fun_DDataColWidths"]._elementsContent[i].leaf==true && that["fun_DDataColWidths"]._elementsContent[i].parentKey==sectionKey) items.push(that["fun_DDataColWidths"]._elementsContent[i]);
		}
		return items;
	};
	/*
	 * Property Sheet Initialization
	 */
	that["fun_DDataColWidths"].init = function(){
		
		that["fun_DDataColWidths"]._label = new sap.ui.commons.Label({text: " Data Column Widths"});
		that["fun_DDataColWidths"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DDataColWidths"]._label);
		
		that["fun_DDataColWidths"]._hLayout = new sap.ui.commons.layout.HorizontalLayout({ });
		that._content.addContent(that["fun_DDataColWidths"]._hLayout);
		that["fun_DDataColWidths"]._listBuilder = new org.scn.community.propertysheet.ListBuilder({
			width : "200px"
		});
		
		that["fun_DDataColWidths"]._listBuilder.attachItemAdded(that["fun_DDataColWidths"].addElement,that);
		that["fun_DDataColWidths"]._listBuilder.attachItemDeleted(that["fun_DDataColWidths"].delElement,that);
		that["fun_DDataColWidths"]._listBuilder.attachItemMoved(that["fun_DDataColWidths"].moveElement,that);
		that["fun_DDataColWidths"]._listBuilder.attachItemSelected(that["fun_DDataColWidths"].elementSelected,that);
		
		that["fun_DDataColWidths"]._sectionPropertyLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		that["fun_DDataColWidths"]._sectionPropertyList = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		that["fun_DDataColWidths"]._sectionPropertyLayout.addStyleClass("org-scn-ApsDoubleArrayVertical");
		that["fun_DDataColWidths"]._sectionPropertyList.addStyleClass("org-scn-ApsDoubleArrayVertical");

		that["fun_DDataColWidths"]._hLayout.addContent(that["fun_DDataColWidths"]._listBuilder);
		that["fun_DDataColWidths"]._hLayout.addContent(that["fun_DDataColWidths"]._sectionPropertyLayout);
		that["fun_DDataColWidths"]._hLayout.addContent(that["fun_DDataColWidths"]._sectionPropertyList);
		that["fun_DDataColWidths"]._sectionPropertyList.addStyleClass("org-scn-Aps-DetailList-SingleArray");
		that["fun_DDataColWidths"]._hLayout.addStyleClass("org-scn-ApsDoubleArray");
		
		that["fun_DDataColWidths"].update();
	};

	that.DDataColWidths = function(s){
		if( s === undefined){
			return JSON.stringify(that["fun_DDataColWidths"]._elementsContent);
		}else{
			var o = [];
			if(s && s!="") o = jQuery.parseJSON(s);
			that["fun_DDataColWidths"]._elementsContent = o;
			that["fun_DDataColWidths"].update();
			return that;
		}
	};

	that["fun_DDataProvisioner"] = {};
	
	that["fun_DDataProvisioner"].update = function(){
		that["fun_DDataProvisioner"]._input.setValue(that["fun_DDataProvisioner"]._);
	};
	
	that["fun_DDataProvisioner"].init = function(){
		that["fun_DDataProvisioner"]._label = new sap.ui.commons.Label({text: " Central Data Provisioner for Result Set"});
		that["fun_DDataProvisioner"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DDataProvisioner"]._label);
		
		that["fun_DDataProvisioner"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DDataProvisioner"]._input);
		that["fun_DDataProvisioner"]._input.attachChange(that["fun_DDataProvisioner"].propertyChanged, that);
		that["fun_DDataProvisioner"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DDataProvisioner"].update();
	};

	that["fun_DDataProvisioner"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DDataProvisioner"]._ = value;
		that.firePropertiesChanged(["DDataProvisioner"]);
	};
	
	that.DDataProvisioner = function(s){
		if( s === undefined){
			return that["fun_DDataProvisioner"]._;
		}else{
			that["fun_DDataProvisioner"]._ = s;
			that["fun_DDataProvisioner"].update();
			return that;
		}
	};

	that["fun_DEmptyDataValue"] = {};
	
	that["fun_DEmptyDataValue"].update = function(){
		that["fun_DEmptyDataValue"]._input.setValue(that["fun_DEmptyDataValue"]._);
	};
	
	that["fun_DEmptyDataValue"].init = function(){
		that["fun_DEmptyDataValue"]._label = new sap.ui.commons.Label({text: " Empty Value For Data Cell"});
		that["fun_DEmptyDataValue"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DEmptyDataValue"]._label);
		
		that["fun_DEmptyDataValue"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DEmptyDataValue"]._input);
		that["fun_DEmptyDataValue"]._input.attachChange(that["fun_DEmptyDataValue"].propertyChanged, that);
		that["fun_DEmptyDataValue"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DEmptyDataValue"].update();
	};

	that["fun_DEmptyDataValue"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DEmptyDataValue"]._ = value;
		that.firePropertiesChanged(["DEmptyDataValue"]);
	};
	
	that.DEmptyDataValue = function(s){
		if( s === undefined){
			return that["fun_DEmptyDataValue"]._;
		}else{
			that["fun_DEmptyDataValue"]._ = s;
			that["fun_DEmptyDataValue"].update();
			return that;
		}
	};

	that["fun_DEmptyHeaderValue"] = {};
	
	that["fun_DEmptyHeaderValue"].update = function(){
		that["fun_DEmptyHeaderValue"]._input.setValue(that["fun_DEmptyHeaderValue"]._);
	};
	
	that["fun_DEmptyHeaderValue"].init = function(){
		that["fun_DEmptyHeaderValue"]._label = new sap.ui.commons.Label({text: " Empty Value For Header Cell"});
		that["fun_DEmptyHeaderValue"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DEmptyHeaderValue"]._label);
		
		that["fun_DEmptyHeaderValue"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DEmptyHeaderValue"]._input);
		that["fun_DEmptyHeaderValue"]._input.attachChange(that["fun_DEmptyHeaderValue"].propertyChanged, that);
		that["fun_DEmptyHeaderValue"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DEmptyHeaderValue"].update();
	};

	that["fun_DEmptyHeaderValue"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DEmptyHeaderValue"]._ = value;
		that.firePropertiesChanged(["DEmptyHeaderValue"]);
	};
	
	that.DEmptyHeaderValue = function(s){
		if( s === undefined){
			return that["fun_DEmptyHeaderValue"]._;
		}else{
			that["fun_DEmptyHeaderValue"]._ = s;
			that["fun_DEmptyHeaderValue"].update();
			return that;
		}
	};

	that["fun_DFixedHeader"] = {};
	
	that["fun_DFixedHeader"].update = function(){
		that["fun_DFixedHeader"]._input.setChecked(that["fun_DFixedHeader"]._);
	};
	
	that["fun_DFixedHeader"].init = function(){
		that["fun_DFixedHeader"]._label = new sap.ui.commons.Label({text: " Fiexd Header Rows"});
		that["fun_DFixedHeader"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DFixedHeader"]._label);
		
		that["fun_DFixedHeader"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Fiexd Header Rows"});
		that._content.addContent(that["fun_DFixedHeader"]._input);
		that["fun_DFixedHeader"]._input.attachChange(that["fun_DFixedHeader"].propertyChanged, that);
		that["fun_DFixedHeader"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DFixedHeader"].update();
	};

	that["fun_DFixedHeader"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_DFixedHeader"]._ = checked;
		that.firePropertiesChanged(["DFixedHeader"]);
	};
	
	that.DFixedHeader = function(s){
		if( s === undefined){
			return that["fun_DFixedHeader"]._;
		}else{
			that["fun_DFixedHeader"]._ = s;
			that["fun_DFixedHeader"].update();
			return that;
		}
	};

	that["fun_DFormattingCondition"] = {};
	
	that["fun_DFormattingCondition"].update = function(){
		that["fun_DFormattingCondition"]._input.setValue(that["fun_DFormattingCondition"]._);
	};
	
	that["fun_DFormattingCondition"].init = function(){
		that["fun_DFormattingCondition"]._label = new sap.ui.commons.Label({text: " (non-stable) Formatting Condition"});
		that["fun_DFormattingCondition"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DFormattingCondition"]._label);
		
		that["fun_DFormattingCondition"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DFormattingCondition"]._input);
		that["fun_DFormattingCondition"]._input.attachChange(that["fun_DFormattingCondition"].propertyChanged, that);
		that["fun_DFormattingCondition"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DFormattingCondition"].update();
	};

	that["fun_DFormattingCondition"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DFormattingCondition"]._ = value;
		that.firePropertiesChanged(["DFormattingCondition"]);
	};
	
	that.DFormattingCondition = function(s){
		if( s === undefined){
			return that["fun_DFormattingCondition"]._;
		}else{
			that["fun_DFormattingCondition"]._ = s;
			that["fun_DFormattingCondition"].update();
			return that;
		}
	};

	that["fun_DFormattingOperator"] = {};
	
	that["fun_DFormattingOperator"].update = function(){
		that["fun_DFormattingOperator"]._input.setSelectedKey(that["fun_DFormattingOperator"]._);
	};
	
	that["fun_DFormattingOperator"].init = function(){
		that["fun_DFormattingOperator"]._label = new sap.ui.commons.Label({text: " (non-stable) Formatting Operator"});
		that["fun_DFormattingOperator"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DFormattingOperator"]._label);
		
		that["fun_DFormattingOperator"]._input = new sap.ui.commons.ComboBox({width: "300px"});
		that["fun_DFormattingOperator"]._input.addItem(new sap.ui.core.ListItem({key:"UseFirst", text:"UseFirst"}));
		that["fun_DFormattingOperator"]._input.addItem(new sap.ui.core.ListItem({key:"UseLast", text:"UseLast"}));
		that["fun_DFormattingOperator"]._input.addItem(new sap.ui.core.ListItem({key:"Collect", text:"Collect"}));
		
		that._content.addContent(that["fun_DFormattingOperator"]._input);
		that["fun_DFormattingOperator"]._input.attachChange(that["fun_DFormattingOperator"].propertyChanged, that);
		that["fun_DFormattingOperator"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DFormattingOperator"].update();
	};

	that["fun_DFormattingOperator"].propertyChanged = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		that["fun_DFormattingOperator"]._ = newValue;
		that.firePropertiesChanged(["DFormattingOperator"]);
	};
	
	that.DFormattingOperator = function(s){
		if( s === undefined){
			return that["fun_DFormattingOperator"]._;
		}else{
			that["fun_DFormattingOperator"]._ = s;
			that["fun_DFormattingOperator"].update();
			return that;
		}
	};

	that["fun_DHeaderColWidth"] = {};
	
	that["fun_DHeaderColWidth"].update = function(){
		that["fun_DHeaderColWidth"]._input.setValue(that["fun_DHeaderColWidth"]._);
	};
	
	that["fun_DHeaderColWidth"].init = function(){
		that["fun_DHeaderColWidth"]._label = new sap.ui.commons.Label({text: " Header Column Width in px"});
		that["fun_DHeaderColWidth"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DHeaderColWidth"]._label);
		
		that["fun_DHeaderColWidth"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DHeaderColWidth"]._input);
		that["fun_DHeaderColWidth"]._input.attachChange(that["fun_DHeaderColWidth"].propertyChanged, that);
		that["fun_DHeaderColWidth"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DHeaderColWidth"].update();
	};

	that["fun_DHeaderColWidth"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DHeaderColWidth"]._ = value;
		that.firePropertiesChanged(["DHeaderColWidth"]);
	};
	
	that.DHeaderColWidth = function(s){
		if( s === undefined){
			return that["fun_DHeaderColWidth"]._;
		}else{
			that["fun_DHeaderColWidth"]._ = s;
			that["fun_DHeaderColWidth"].update();
			return that;
		}
	};

	that["fun_DIgnoreResults"] = {};
	
	that["fun_DIgnoreResults"].update = function(){
		that["fun_DIgnoreResults"]._input.setChecked(that["fun_DIgnoreResults"]._);
	};
	
	that["fun_DIgnoreResults"].init = function(){
		that["fun_DIgnoreResults"]._label = new sap.ui.commons.Label({text: " Ignore Results Rows and Columns"});
		that["fun_DIgnoreResults"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DIgnoreResults"]._label);
		
		that["fun_DIgnoreResults"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Ignore Results Rows and Columns"});
		that._content.addContent(that["fun_DIgnoreResults"]._input);
		that["fun_DIgnoreResults"]._input.attachChange(that["fun_DIgnoreResults"].propertyChanged, that);
		that["fun_DIgnoreResults"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DIgnoreResults"].update();
	};

	that["fun_DIgnoreResults"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_DIgnoreResults"]._ = checked;
		that.firePropertiesChanged(["DIgnoreResults"]);
	};
	
	that.DIgnoreResults = function(s){
		if( s === undefined){
			return that["fun_DIgnoreResults"]._;
		}else{
			that["fun_DIgnoreResults"]._ = s;
			that["fun_DIgnoreResults"].update();
			return that;
		}
	};

	that["fun_DNavigationMode"] = {};
	
	that["fun_DNavigationMode"].update = function(){
		that["fun_DNavigationMode"]._input.setSelectedKey(that["fun_DNavigationMode"]._);
	};
	
	that["fun_DNavigationMode"].init = function(){
		that["fun_DNavigationMode"]._label = new sap.ui.commons.Label({text: " Navigation Mode"});
		that["fun_DNavigationMode"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DNavigationMode"]._label);
		
		that["fun_DNavigationMode"]._input = new sap.ui.commons.ComboBox({width: "300px"});
		that["fun_DNavigationMode"]._input.addItem(new sap.ui.core.ListItem({key:"Paginator", text:"Paginator"}));
		that["fun_DNavigationMode"]._input.addItem(new sap.ui.core.ListItem({key:"Scrollbar", text:"Scrollbar"}));
		
		that._content.addContent(that["fun_DNavigationMode"]._input);
		that["fun_DNavigationMode"]._input.attachChange(that["fun_DNavigationMode"].propertyChanged, that);
		that["fun_DNavigationMode"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DNavigationMode"].update();
	};

	that["fun_DNavigationMode"].propertyChanged = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		that["fun_DNavigationMode"]._ = newValue;
		that.firePropertiesChanged(["DNavigationMode"]);
	};
	
	that.DNavigationMode = function(s){
		if( s === undefined){
			return that["fun_DNavigationMode"]._;
		}else{
			that["fun_DNavigationMode"]._ = s;
			that["fun_DNavigationMode"].update();
			return that;
		}
	};

	that["fun_DRowHeight"] = {};
	
	that["fun_DRowHeight"].update = function(){
		that["fun_DRowHeight"]._input.setValue(that["fun_DRowHeight"]._);
	};
	
	that["fun_DRowHeight"].init = function(){
		that["fun_DRowHeight"]._label = new sap.ui.commons.Label({text: " Row Height in px"});
		that["fun_DRowHeight"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DRowHeight"]._label);
		
		that["fun_DRowHeight"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DRowHeight"]._input);
		that["fun_DRowHeight"]._input.attachChange(that["fun_DRowHeight"].propertyChanged, that);
		that["fun_DRowHeight"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DRowHeight"].update();
	};

	that["fun_DRowHeight"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DRowHeight"]._ = value;
		that.firePropertiesChanged(["DRowHeight"]);
	};
	
	that.DRowHeight = function(s){
		if( s === undefined){
			return that["fun_DRowHeight"]._;
		}else{
			that["fun_DRowHeight"]._ = s;
			that["fun_DRowHeight"].update();
			return that;
		}
	};

	that["fun_DVisibleRowCount"] = {};
	
	that["fun_DVisibleRowCount"].update = function(){
		that["fun_DVisibleRowCount"]._input.setValue(that["fun_DVisibleRowCount"]._);
	};
	
	that["fun_DVisibleRowCount"].init = function(){
		that["fun_DVisibleRowCount"]._label = new sap.ui.commons.Label({text: " Visible Row Count"});
		that["fun_DVisibleRowCount"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DVisibleRowCount"]._label);
		
		that["fun_DVisibleRowCount"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DVisibleRowCount"]._input);
		that["fun_DVisibleRowCount"]._input.attachChange(that["fun_DVisibleRowCount"].propertyChanged, that);
		that["fun_DVisibleRowCount"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DVisibleRowCount"].update();
	};

	that["fun_DVisibleRowCount"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DVisibleRowCount"]._ = value;
		that.firePropertiesChanged(["DVisibleRowCount"]);
	};
	
	that.DVisibleRowCount = function(s){
		if( s === undefined){
			return that["fun_DVisibleRowCount"]._;
		}else{
			that["fun_DVisibleRowCount"]._ = s;
			that["fun_DVisibleRowCount"].update();
			return that;
		}
	};


});
