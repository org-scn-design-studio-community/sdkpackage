
/**
 * Generated ZTL Class for UI5 Table
 * 
 * DO NOT EDIT
 */
sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.UI5TablePropertyPage",  function() {
	var that = this;

	this.init = function () {
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this._content.placeAt($("#content"));

		this.initDDataProvisioner();
		this.initDVisibleRowCount();
		this.initDRowHeight();
		this.initDAllowSort();
		this.initDAllowFilter();
		this.initDAllowColumnReorder();
		this.initDAllowSelection();
		this.initDFixedHeader();
		this.initDHeaderColWidth();
		this.initDDataColWidths();
		this.initDFormattingOperator();
		this.initDFormattingCondition();
		this.initDColumnFormattingCondition();
		this.initDEmptyHeaderValue();
		this.initDEmptyDataValue();
		this.initDNavigationMode();
		
	};
	
	this.componentSelected = function(){
		this.updateDDataProvisioner();
		this.updateDVisibleRowCount();
		this.updateDRowHeight();
		this.updateDAllowSort();
		this.updateDAllowFilter();
		this.updateDAllowColumnReorder();
		this.updateDAllowSelection();
		this.updateDFixedHeader();
		this.updateDHeaderColWidth();
		this.updateDDataColWidths();
		this.updateDFormattingOperator();
		this.updateDFormattingCondition();
		this.updateDColumnFormattingCondition();
		this.updateDEmptyHeaderValue();
		this.updateDEmptyDataValue();
		this.updateDNavigationMode();
		
	};
	
	
	this.updatePropertyDDataProvisioner = function(){
		this._inputDDataProvisioner.setValue(this._DDataProvisioner);
	};
	
	this.initDDataProvisioner = function(){
		this._labelDDataProvisioner = new sap.ui.commons.Label({text: " Central Data Provisioner for Result Set"});
		this._labelDDataProvisioner.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDDataProvisioner);
		
		this._inputDDataProvisioner = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDDataProvisioner);
		this._inputDDataProvisioner.attachChange(this.propertyChangedDDataProvisioner, this);
		this._inputDDataProvisioner.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDDataProvisioner();
	};

	this.propertyChangedDDataProvisioner = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DDataProvisioner = value;
		this.firePropertiesChanged(["DDataProvisioner"]);
	};
	
	this.DDataProvisioner = function(s){
		if( s === undefined){
			return this._DDataProvisioner;
		}else{
			this._DDataProvisioner = s;
			this.updatePropertyDDataProvisioner();
			return this;
		}
	};

	this.updatePropertyDVisibleRowCount = function(){
		this._inputDVisibleRowCount.setValue(this._DVisibleRowCount);
	};
	
	this.initDVisibleRowCount = function(){
		this._labelDVisibleRowCount = new sap.ui.commons.Label({text: " Visible Row Count"});
		this._labelDVisibleRowCount.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDVisibleRowCount);
		
		this._inputDVisibleRowCount = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDVisibleRowCount);
		this._inputDVisibleRowCount.attachChange(this.propertyChangedDVisibleRowCount, this);
		this._inputDVisibleRowCount.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDVisibleRowCount();
	};

	this.propertyChangedDVisibleRowCount = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DVisibleRowCount = value;
		this.firePropertiesChanged(["DVisibleRowCount"]);
	};
	
	this.DVisibleRowCount = function(s){
		if( s === undefined){
			return this._DVisibleRowCount;
		}else{
			this._DVisibleRowCount = s;
			this.updatePropertyDVisibleRowCount();
			return this;
		}
	};

	this.updatePropertyDRowHeight = function(){
		this._inputDRowHeight.setValue(this._DRowHeight);
	};
	
	this.initDRowHeight = function(){
		this._labelDRowHeight = new sap.ui.commons.Label({text: " Row Height in px"});
		this._labelDRowHeight.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDRowHeight);
		
		this._inputDRowHeight = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDRowHeight);
		this._inputDRowHeight.attachChange(this.propertyChangedDRowHeight, this);
		this._inputDRowHeight.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDRowHeight();
	};

	this.propertyChangedDRowHeight = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DRowHeight = value;
		this.firePropertiesChanged(["DRowHeight"]);
	};
	
	this.DRowHeight = function(s){
		if( s === undefined){
			return this._DRowHeight;
		}else{
			this._DRowHeight = s;
			this.updatePropertyDRowHeight();
			return this;
		}
	};

	this.updatePropertyDAllowSort = function(){
		this._inputDAllowSort.setChecked(this._DAllowSort);
	};
	
	this.initDAllowSort = function(){
		this._labelDAllowSort = new sap.ui.commons.Label({text: " Allow Sort in Columns"});
		this._labelDAllowSort.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDAllowSort);
		
		this._inputDAllowSort = new sap.ui.commons.CheckBox({width: "300px", text: "Allow Sort in Columns"});
		this._content.addContent(this._inputDAllowSort);
		this._inputDAllowSort.attachChange(this.propertyChangedDAllowSort, this);
		this._inputDAllowSort.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDAllowSort();
	};

	this.propertyChangedDAllowSort = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		this._DAllowSort = checked;
		this.firePropertiesChanged(["DAllowSort"]);
	};
	
	this.DAllowSort = function(s){
		if( s === undefined){
			return this._DAllowSort;
		}else{
			this._DAllowSort = s;
			this.updatePropertyDAllowSort();
			return this;
		}
	};

	this.updatePropertyDAllowFilter = function(){
		this._inputDAllowFilter.setChecked(this._DAllowFilter);
	};
	
	this.initDAllowFilter = function(){
		this._labelDAllowFilter = new sap.ui.commons.Label({text: " Allow Sort in Columns"});
		this._labelDAllowFilter.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDAllowFilter);
		
		this._inputDAllowFilter = new sap.ui.commons.CheckBox({width: "300px", text: "Allow Sort in Columns"});
		this._content.addContent(this._inputDAllowFilter);
		this._inputDAllowFilter.attachChange(this.propertyChangedDAllowFilter, this);
		this._inputDAllowFilter.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDAllowFilter();
	};

	this.propertyChangedDAllowFilter = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		this._DAllowFilter = checked;
		this.firePropertiesChanged(["DAllowFilter"]);
	};
	
	this.DAllowFilter = function(s){
		if( s === undefined){
			return this._DAllowFilter;
		}else{
			this._DAllowFilter = s;
			this.updatePropertyDAllowFilter();
			return this;
		}
	};

	this.updatePropertyDAllowColumnReorder = function(){
		this._inputDAllowColumnReorder.setChecked(this._DAllowColumnReorder);
	};
	
	this.initDAllowColumnReorder = function(){
		this._labelDAllowColumnReorder = new sap.ui.commons.Label({text: " Allow Reorder of Columns"});
		this._labelDAllowColumnReorder.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDAllowColumnReorder);
		
		this._inputDAllowColumnReorder = new sap.ui.commons.CheckBox({width: "300px", text: "Allow Reorder of Columns"});
		this._content.addContent(this._inputDAllowColumnReorder);
		this._inputDAllowColumnReorder.attachChange(this.propertyChangedDAllowColumnReorder, this);
		this._inputDAllowColumnReorder.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDAllowColumnReorder();
	};

	this.propertyChangedDAllowColumnReorder = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		this._DAllowColumnReorder = checked;
		this.firePropertiesChanged(["DAllowColumnReorder"]);
	};
	
	this.DAllowColumnReorder = function(s){
		if( s === undefined){
			return this._DAllowColumnReorder;
		}else{
			this._DAllowColumnReorder = s;
			this.updatePropertyDAllowColumnReorder();
			return this;
		}
	};

	this.updatePropertyDAllowSelection = function(){
		this._inputDAllowSelection.setChecked(this._DAllowSelection);
	};
	
	this.initDAllowSelection = function(){
		this._labelDAllowSelection = new sap.ui.commons.Label({text: " Allow Selection in the Table"});
		this._labelDAllowSelection.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDAllowSelection);
		
		this._inputDAllowSelection = new sap.ui.commons.CheckBox({width: "300px", text: "Allow Selection in the Table"});
		this._content.addContent(this._inputDAllowSelection);
		this._inputDAllowSelection.attachChange(this.propertyChangedDAllowSelection, this);
		this._inputDAllowSelection.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDAllowSelection();
	};

	this.propertyChangedDAllowSelection = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		this._DAllowSelection = checked;
		this.firePropertiesChanged(["DAllowSelection"]);
	};
	
	this.DAllowSelection = function(s){
		if( s === undefined){
			return this._DAllowSelection;
		}else{
			this._DAllowSelection = s;
			this.updatePropertyDAllowSelection();
			return this;
		}
	};

	this.updatePropertyDFixedHeader = function(){
		this._inputDFixedHeader.setChecked(this._DFixedHeader);
	};
	
	this.initDFixedHeader = function(){
		this._labelDFixedHeader = new sap.ui.commons.Label({text: " Fiexd Header Rows"});
		this._labelDFixedHeader.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDFixedHeader);
		
		this._inputDFixedHeader = new sap.ui.commons.CheckBox({width: "300px", text: "Fiexd Header Rows"});
		this._content.addContent(this._inputDFixedHeader);
		this._inputDFixedHeader.attachChange(this.propertyChangedDFixedHeader, this);
		this._inputDFixedHeader.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDFixedHeader();
	};

	this.propertyChangedDFixedHeader = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		this._DFixedHeader = checked;
		this.firePropertiesChanged(["DFixedHeader"]);
	};
	
	this.DFixedHeader = function(s){
		if( s === undefined){
			return this._DFixedHeader;
		}else{
			this._DFixedHeader = s;
			this.updatePropertyDFixedHeader();
			return this;
		}
	};

	this.updatePropertyDHeaderColWidth = function(){
		this._inputDHeaderColWidth.setValue(this._DHeaderColWidth);
	};
	
	this.initDHeaderColWidth = function(){
		this._labelDHeaderColWidth = new sap.ui.commons.Label({text: " Header Column Width in px"});
		this._labelDHeaderColWidth.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDHeaderColWidth);
		
		this._inputDHeaderColWidth = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDHeaderColWidth);
		this._inputDHeaderColWidth.attachChange(this.propertyChangedDHeaderColWidth, this);
		this._inputDHeaderColWidth.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDHeaderColWidth();
	};

	this.propertyChangedDHeaderColWidth = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DHeaderColWidth = value;
		this.firePropertiesChanged(["DHeaderColWidth"]);
	};
	
	this.DHeaderColWidth = function(s){
		if( s === undefined){
			return this._DHeaderColWidth;
		}else{
			this._DHeaderColWidth = s;
			this.updatePropertyDHeaderColWidth();
			return this;
		}
	};

	this._elementsContentDDataColWidths = [];
	this._selectedElementKeyDDataColWidths = "";
	this._selectedItemKeyDDataColWidths = "";
	this._currentItemConfigDDataColWidths = {};

	/*
	 * Retrieves JSON for Element Entry
	 */
	this.getElementDDataColWidths = function(key){
		var sections = this.gatherElementsDDataColWidths();
		for(var i=0;i<sections.length;i++){
			if(sections[i].key == key) return sections[i];
		}
	};
	/*
	 * Retrieves JSON for Item Entry
	 */
	this.getItemDDataColWidths = function(sectionKey,key){
		for(var i=0;i<this._elementsContentDDataColWidths.length;i++){
			if(this._elementsContentDDataColWidths[i].key == key && this._elementsContentDDataColWidths[i].parentKey==sectionKey) return this._elementsContentDDataColWidths[i];
		}
	};
	/*
	 * Update Element JSON and notify Design Studio IDE
	 */
	this.updateElementDDataColWidths = function(key,section){
		for(var i=0;i<this._elementsContentDDataColWidths.length;i++){
			var element = this._elementsContentDDataColWidths[i];
			if(!element.leaf && element.key==key){
				this._elementsContentDDataColWidths[i] = section;
			}
		}
		this.firePropertiesChanged(["DDataColWidths"]);
		this.updatePropertyDDataColWidths();
	};
	/*
	 * Update Item JSON and notify Design Studio IDE
	 */
	this.updateItemDDataColWidths = function(key){
		for(var i=0;i<this._elementsContentDDataColWidths.length;i++){
			var element = this._elementsContentDDataColWidths[i];
			if(element.leaf && element.key==key){
				this._elementsContentDDataColWidths[i] = this._currentItemConfigDDataColWidths;
			}
		}
		this.firePropertiesChanged(["DDataColWidths"]);
		this.updatePropertyDDataColWidths();
		this.closeDetailDDataColWidths();
	};
	/*
	 * Displays Element Properties
	 */
	this.showElementPropertiesDDataColWidths = function(){
		this._sectionPropertyLayoutDDataColWidths.destroyContent();
		this._sectionPropertyListDDataColWidths.destroyContent();
		
		this._selectedElementKeyDDataColWidths = this._listBuilderDDataColWidths.getSelectedKey();
		if(!this._selectedElementKeyDDataColWidths) return;
		var selectedElement = this.getElementDDataColWidths(this._selectedElementKeyDDataColWidths);		
		if(!selectedElement) return;
		
		var items = this.gatherItemsDDataColWidths(this._selectedElementKeyDDataColWidths);
		
		var sectionKey = new sap.ui.commons.TextView({text : "Column index (0-based)"});
		sectionKey.addStyleClass("org-scn-ApsLabelArray");
		var txtElementKey = new sap.ui.commons.TextField({value : selectedElement.key, width: "180px"});
		txtElementKey.addStyleClass("org-scn-ApsInputArray");
		txtElementKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			value = this._listBuilderDDataColWidths.generateKey(value);
			var section = this.getElementDDataColWidths(this._listBuilderDDataColWidths.getSelectedKey());
			section.key = value;
			// Update Parent Key references
			for(var i=0;i<this._elementsContentDDataColWidths.length;i++){
				var element = this._elementsContentDDataColWidths[i];
				if(element.parentKey == this._listBuilderDDataColWidths.getSelectedKey() && element.leaf) element.parentKey = value;
			}
			this.updateElementDDataColWidths(this._listBuilderDDataColWidths.getSelectedKey(),section);
			this._listBuilderDDataColWidths.setSelectedKey(value);
			this.showElementPropertiesDDataColWidths();
		}, this);
		this._sectionPropertyLayoutDDataColWidths.addContent(sectionKey);
		this._sectionPropertyLayoutDDataColWidths.addContent(txtElementKey);

		var sectionwidth = new sap.ui.commons.TextView({text : "Width with unit (e.g. 200px | 30%)"});
		sectionwidth.addStyleClass("org-scn-ApsLabelArray");
		var txtElementwidth = new sap.ui.commons.TextField({value : selectedElement.width, width: "180px"});
		txtElementwidth.addStyleClass("org-scn-ApsInputArray");
		txtElementwidth.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			var section = this.getElementDDataColWidths(this._listBuilderDDataColWidths.getSelectedKey());
			section.width = value;
			this.updateElementDDataColWidths(this._listBuilderDDataColWidths.getSelectedKey(),section);
		}, this);
		this._sectionPropertyLayoutDDataColWidths.addContent(sectionwidth);
		this._sectionPropertyLayoutDDataColWidths.addContent(txtElementwidth);


		var itemsLabel = new sap.ui.commons.TextView({text : "Items"});
		itemsLabel.addStyleClass("org-scn-ApsLabelArray");
		var itemsList = new org.scn.community.propertysheet.ListBuilder({
			width : "200px",
			newKeyPrefix : "ITEM_",
			newTextPrefix : "Item ",
			list : this.gatherItemsDDataColWidths(this._listBuilderDDataColWidths.getSelectedKey()),
			showDetail : true,
			selectedKey : this._selectedItemKeyDDataColWidths
		});
		
		itemsList.attachItemAdded(this.addItemDDataColWidths,this);
		itemsList.attachItemDeleted(this.delItemDDataColWidths,this);
		itemsList.attachItemDetail(this.showItemPropertiesDDataColWidths,this);
		itemsList.attachItemMoved(this.moveItemDDataColWidths,this);
		itemsList.attachItemSelected(this.itemSelectedDDataColWidths,this);
		
		this._sectionPropertyListDDataColWidths.addContent(itemsLabel);
		this._sectionPropertyListDDataColWidths.addContent(itemsList);
	};
	/*
	 * Displays Item Properties in a Popup Panel
	 */
	this.showItemPropertiesDDataColWidths = function(oControlEvent){
		var detailData = oControlEvent.getParameters();
		this._currentItemConfigDDataColWidths = this.getItemDDataColWidths(this._listBuilderDDataColWidths.getSelectedKey(),detailData.key);
		if(!this._currentItemConfigDDataColWidths) return;
		
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
		var txtItemKey = new sap.ui.commons.TextField({value : this._currentItemConfigDDataColWidths.key, width: "300px"});
		txtItemKey.addStyleClass("org-scn-ApsInputArray");
		txtItemKey.attachChange(function(oControlEvent){
			var value = oControlEvent.getParameter("newValue");
			// Protect Key
			var allItems = new org.scn.community.propertysheet.ListBuilder();		
			allItems.setList(this._elementsContentDDataColWidths);
			var newItemKey = allItems.generateKey(value);
			delete allItems;
			this._currentItemConfigDDataColWidths.key = newItemKey;		
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
		
		closeButton.attachPress(this.closeDetailDDataColWidths,this);
		okButton.attachPress(this.updateItemDDataColWidths,this);
		
		detailButtons.addContent(closeButton);
		detailButtons.addContent(okButton);
		detailButtons.addStyleClass("org-scn-ApsPopUpButtons");
		
		itemDetailLayout.addContent(detailButtons);
		itemDetailPanel.addContent(itemDetailLayout);
		
		if(!this._popupDDataColWidths) this._popupDDataColWidths = new sap.ui.core.Popup(itemDetailPanel, true, true, true);
		
		//this._popupDDataColWidths.destroyContent();
		this._popupDDataColWidths.open(250,"center center", "center center", document.body, null);
	};
	/*
	 * Fires when Element Listbox is selected
	 */
	this.elementSelectedDDataColWidths = function(oControlEvent){
		this._selectedElementKeyDDataColWidths = "";
		if(oControlEvent.getParameters().key) this._selectedElementKeyDDataColWidths = oControlEvent.getParameters().key;
		this.showElementPropertiesDDataColWidths();
	};
	/*
	 * Fires when Item Listbox is selected
	 */
	this.itemSelectedDDataColWidths = function(oControlEvent){
		this._selectedItemKeyDDataColWidths = "";
		if(oControlEvent.getParameters().key) this._selectedItemKeyDDataColWidths = oControlEvent.getParameters().key;
	};
	/*
	 * Fires when component is selected or when properties change to re-render
	 */
	this.updatePropertyDDataColWidths = function(){
		this._listBuilderDDataColWidths.setList(this.gatherElementsDDataColWidths());
		this.showElementPropertiesDDataColWidths(this._listBuilderDDataColWidths.getSelectedKey());
	};
	/*
	 * Fires when item delete button clicked
	 */
	this.delItemDDataColWidths = function(oControlEvent){
		var sectionKey = this._listBuilderDDataColWidths.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		if(sectionKey && itemKey) {
			for(var i=0;i<this._elementsContentDDataColWidths.length;i++){
				if(this._elementsContentDDataColWidths[i].leaf == true && this._elementsContentDDataColWidths[i].key == itemKey && this._elementsContentDDataColWidths[i].parentKey==sectionKey) {
					this._elementsContentDDataColWidths.splice(i,1);
					this.firePropertiesChanged(["DDataColWidths"]);
					this.updatePropertyDDataColWidths();
				}
			}
		}
		this.updatePropertyDDataColWidths();
	}
	/*
	 * Fires when section delete button clicked
	 */
	this.delElementDDataColWidths = function(oControlEvent){
		var key = oControlEvent.getParameter("key");
		if(key) {
			// Delete Element
			for(var i=0;i<this._elementsContentDDataColWidths.length;i++){
				if(this._elementsContentDDataColWidths[i].leaf == false && this._elementsContentDDataColWidths[i].key == key) {
					this._elementsContentDDataColWidths.splice(i,1);
				}
			}
			// Delete Items under Element
			for(var i=this._elementsContentDDataColWidths.length-1;i>=0;i--){
				if(this._elementsContentDDataColWidths[i].leaf == true && this._elementsContentDDataColWidths[i].parentKey == key) {
					this._elementsContentDDataColWidths.splice(i,1);
				}
			}
			this.firePropertiesChanged(["DDataColWidths"]);
		}
		this.updatePropertyDDataColWidths();
	};
	/*
	 * Fires when item add button clicked
	 */
	this.addItemDDataColWidths = function(oControlEvent){
		var allItems = new org.scn.community.propertysheet.ListBuilder();		
		allItems.setList(this._elementsContentDDataColWidths);
		var newItemKey = allItems.generateKey("Item");
		delete allItems;
		var sectionItems = new org.scn.community.propertysheet.ListBuilder();
		sectionItems.setList(this._elementsContentDDataColWidths);
		var newItem = { 
			parentKey : this._listBuilderDDataColWidths.getSelectedKey(),
			key : newItemKey, 
			leaf: true, 
			
		};
		this._elementsContentDDataColWidths.push(newItem);
		this.firePropertiesChanged(["DDataColWidths"]);
		this.updatePropertyDDataColWidths();
	}
	/*
	 * Fires when section add button clicked
	 */
	this.addElementDDataColWidths = function(oControlEvent){
		var newKey = this._listBuilderDDataColWidths.generateKey("Element");
		var newElement = { 
			parentKey : "ROOT",
			key : newKey,
			leaf: false, 
			width:""
		};
		this._listBuilderDDataColWidths.setSelectedKey(newKey);
		this._elementsContentDDataColWidths.push(newElement);
		this.firePropertiesChanged(["DDataColWidths"]);
		this.updatePropertyDDataColWidths();
	};
	/*
	 * Fires when section up or down button clicked
	 */
	this.moveElementDDataColWidths = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		for(var i=0;i<this._elementsContentDDataColWidths.length;i++){
			if(this._elementsContentDDataColWidths[i].key == movementData.key && !this._elementsContentDDataColWidths[i].leaf) sourceIndex = i;
			if(this._elementsContentDDataColWidths[i].key == movementData.targetKey && !this._elementsContentDDataColWidths[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = this._elementsContentDDataColWidths[targetIndex];
			this._elementsContentDDataColWidths[targetIndex] = this._elementsContentDDataColWidths[sourceIndex];
			this._elementsContentDDataColWidths[sourceIndex] = temp;
			this.firePropertiesChanged(["DDataColWidths"]);
			this.updatePropertyDDataColWidths();
		}
	};
	/*
	 * Close Item Properties Popup
	 */
	this.closeDetailDDataColWidths = function(oControlEvent){
		if(this._popupDDataColWidths) {
			this._popupDDataColWidths.close();
			this._popupDDataColWidths.destroy();
			delete this._popupDDataColWidths;
		}
		
	};
	/*
	 * Fires when item up or down button clicked
	 */
	this.moveItemDDataColWidths = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		var sectionKey = this._listBuilderDDataColWidths.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		for(var i=0;i<this._elementsContentDDataColWidths.length;i++){
			if(this._elementsContentDDataColWidths[i].key == itemKey && this._elementsContentDDataColWidths[i].parentKey == sectionKey && this._elementsContentDDataColWidths[i].leaf) sourceIndex = i;
			if(this._elementsContentDDataColWidths[i].key == movementData.targetKey && this._elementsContentDDataColWidths[i].parentKey == sectionKey && this._elementsContentDDataColWidths[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = this._elementsContentDDataColWidths[targetIndex];
			this._elementsContentDDataColWidths[targetIndex] = this._elementsContentDDataColWidths[sourceIndex];
			this._elementsContentDDataColWidths[sourceIndex] = temp;
			this.firePropertiesChanged(["DDataColWidths"]);
			this.updatePropertyDDataColWidths();
		}
	}
	/*
	 * Convenience Function to return only entries that are Elements
	 */
	this.gatherElementsDDataColWidths = function(){
		var sections = [];
		for(var i=0;i<this._elementsContentDDataColWidths.length;i++){
			if(this._elementsContentDDataColWidths[i].leaf==false) sections.push(this._elementsContentDDataColWidths[i]);
		}
		return sections;
	};
	/*
	 * Convenience Function to return only entries that are Items (Leafs)
	 */
	this.gatherItemsDDataColWidths = function(sectionKey){
		var items = [];
		for(var i=0;i<this._elementsContentDDataColWidths.length;i++){
			if(this._elementsContentDDataColWidths[i].leaf==true && this._elementsContentDDataColWidths[i].parentKey==sectionKey) items.push(this._elementsContentDDataColWidths[i]);
		}
		return items;
	};
	/*
	 * Property Sheet Initialization
	 */
	this.initDDataColWidths = function(){
		
		this._labelDDataColWidths = new sap.ui.commons.Label({text: " Data Column Widths"});
		this._labelDDataColWidths.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDDataColWidths);
		
		this._hLayoutDDataColWidths = new sap.ui.commons.layout.HorizontalLayout({ });
		this._content.addContent(this._hLayoutDDataColWidths);
		this._listBuilderDDataColWidths = new org.scn.community.propertysheet.ListBuilder({
			width : "200px"
		});
		
		this._listBuilderDDataColWidths.attachItemAdded(this.addElementDDataColWidths,this);
		this._listBuilderDDataColWidths.attachItemDeleted(this.delElementDDataColWidths,this);
		this._listBuilderDDataColWidths.attachItemMoved(this.moveElementDDataColWidths,this);
		this._listBuilderDDataColWidths.attachItemSelected(this.elementSelectedDDataColWidths,this);
		
		this._sectionPropertyLayoutDDataColWidths = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		this._sectionPropertyListDDataColWidths = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		this._sectionPropertyLayoutDDataColWidths.addStyleClass("org-scn-ApsDoubleArrayVertical");
		this._sectionPropertyListDDataColWidths.addStyleClass("org-scn-ApsDoubleArrayVertical");

		this._hLayoutDDataColWidths.addContent(this._listBuilderDDataColWidths);
		this._hLayoutDDataColWidths.addContent(this._sectionPropertyLayoutDDataColWidths);
		this._hLayoutDDataColWidths.addContent(this._sectionPropertyListDDataColWidths);
		this._sectionPropertyListDDataColWidths.addStyleClass("org-scn-Aps-DetailList-SingleArray");
		this._hLayoutDDataColWidths.addStyleClass("org-scn-ApsDoubleArray");
		
		this.updatePropertyDDataColWidths();
	};

	this.DDataColWidths = function(s){
		if( s === undefined){
			return JSON.stringify(this._elementsContentDDataColWidths);
		}else{
			var o = [];
			if(s && s!="") o = jQuery.parseJSON(s);
			this._elementsContentDDataColWidths = o;
			this.updatePropertyDDataColWidths();
			return this;
		}
	};

	this.updatePropertyDFormattingOperator = function(){
		this._inputDFormattingOperator.setSelectedKey(this._DFormattingOperator);
	};
	
	this.initDFormattingOperator = function(){
		this._labelDFormattingOperator = new sap.ui.commons.Label({text: " (non-stable) Formatting Operator"});
		this._labelDFormattingOperator.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDFormattingOperator);
		
		this._inputDFormattingOperator = new sap.ui.commons.ComboBox({width: "300px"});
		this._inputDFormattingOperator.addItem(new sap.ui.core.ListItem({key:"UseFirst", text:"UseFirst"}));
		this._inputDFormattingOperator.addItem(new sap.ui.core.ListItem({key:"UseLast", text:"UseLast"}));
		this._inputDFormattingOperator.addItem(new sap.ui.core.ListItem({key:"Collect", text:"Collect"}));
		
		this._content.addContent(this._inputDFormattingOperator);
		this._inputDFormattingOperator.attachChange(this.propertyChangedDFormattingOperator, this);
		this._inputDFormattingOperator.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDFormattingOperator();
	};

	this.propertyChangedDFormattingOperator = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		this._DFormattingOperator = newValue;
		this.firePropertiesChanged(["DFormattingOperator"]);
	};
	
	this.DFormattingOperator = function(s){
		if( s === undefined){
			return this._DFormattingOperator;
		}else{
			this._DFormattingOperator = s;
			this.updatePropertyDFormattingOperator();
			return this;
		}
	};

	this.updatePropertyDFormattingCondition = function(){
		this._inputDFormattingCondition.setValue(this._DFormattingCondition);
	};
	
	this.initDFormattingCondition = function(){
		this._labelDFormattingCondition = new sap.ui.commons.Label({text: " (non-stable) Formatting Condition"});
		this._labelDFormattingCondition.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDFormattingCondition);
		
		this._inputDFormattingCondition = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDFormattingCondition);
		this._inputDFormattingCondition.attachChange(this.propertyChangedDFormattingCondition, this);
		this._inputDFormattingCondition.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDFormattingCondition();
	};

	this.propertyChangedDFormattingCondition = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DFormattingCondition = value;
		this.firePropertiesChanged(["DFormattingCondition"]);
	};
	
	this.DFormattingCondition = function(s){
		if( s === undefined){
			return this._DFormattingCondition;
		}else{
			this._DFormattingCondition = s;
			this.updatePropertyDFormattingCondition();
			return this;
		}
	};

	this.updatePropertyDColumnFormattingCondition = function(){
		this._inputDColumnFormattingCondition.setValue(this._DColumnFormattingCondition);
	};
	
	this.initDColumnFormattingCondition = function(){
		this._labelDColumnFormattingCondition = new sap.ui.commons.Label({text: " (non-stable) Column Based Formatting Condition"});
		this._labelDColumnFormattingCondition.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDColumnFormattingCondition);
		
		this._inputDColumnFormattingCondition = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDColumnFormattingCondition);
		this._inputDColumnFormattingCondition.attachChange(this.propertyChangedDColumnFormattingCondition, this);
		this._inputDColumnFormattingCondition.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDColumnFormattingCondition();
	};

	this.propertyChangedDColumnFormattingCondition = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DColumnFormattingCondition = value;
		this.firePropertiesChanged(["DColumnFormattingCondition"]);
	};
	
	this.DColumnFormattingCondition = function(s){
		if( s === undefined){
			return this._DColumnFormattingCondition;
		}else{
			this._DColumnFormattingCondition = s;
			this.updatePropertyDColumnFormattingCondition();
			return this;
		}
	};

	this.updatePropertyDEmptyHeaderValue = function(){
		this._inputDEmptyHeaderValue.setValue(this._DEmptyHeaderValue);
	};
	
	this.initDEmptyHeaderValue = function(){
		this._labelDEmptyHeaderValue = new sap.ui.commons.Label({text: " Empty Value For Header Cell"});
		this._labelDEmptyHeaderValue.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDEmptyHeaderValue);
		
		this._inputDEmptyHeaderValue = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDEmptyHeaderValue);
		this._inputDEmptyHeaderValue.attachChange(this.propertyChangedDEmptyHeaderValue, this);
		this._inputDEmptyHeaderValue.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDEmptyHeaderValue();
	};

	this.propertyChangedDEmptyHeaderValue = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DEmptyHeaderValue = value;
		this.firePropertiesChanged(["DEmptyHeaderValue"]);
	};
	
	this.DEmptyHeaderValue = function(s){
		if( s === undefined){
			return this._DEmptyHeaderValue;
		}else{
			this._DEmptyHeaderValue = s;
			this.updatePropertyDEmptyHeaderValue();
			return this;
		}
	};

	this.updatePropertyDEmptyDataValue = function(){
		this._inputDEmptyDataValue.setValue(this._DEmptyDataValue);
	};
	
	this.initDEmptyDataValue = function(){
		this._labelDEmptyDataValue = new sap.ui.commons.Label({text: " Empty Value For Data Cell"});
		this._labelDEmptyDataValue.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDEmptyDataValue);
		
		this._inputDEmptyDataValue = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDEmptyDataValue);
		this._inputDEmptyDataValue.attachChange(this.propertyChangedDEmptyDataValue, this);
		this._inputDEmptyDataValue.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDEmptyDataValue();
	};

	this.propertyChangedDEmptyDataValue = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DEmptyDataValue = value;
		this.firePropertiesChanged(["DEmptyDataValue"]);
	};
	
	this.DEmptyDataValue = function(s){
		if( s === undefined){
			return this._DEmptyDataValue;
		}else{
			this._DEmptyDataValue = s;
			this.updatePropertyDEmptyDataValue();
			return this;
		}
	};

	this.updatePropertyDNavigationMode = function(){
		this._inputDNavigationMode.setSelectedKey(this._DNavigationMode);
	};
	
	this.initDNavigationMode = function(){
		this._labelDNavigationMode = new sap.ui.commons.Label({text: " Navigation Mode"});
		this._labelDNavigationMode.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDNavigationMode);
		
		this._inputDNavigationMode = new sap.ui.commons.ComboBox({width: "300px"});
		this._inputDNavigationMode.addItem(new sap.ui.core.ListItem({key:"Paginator", text:"Paginator"}));
		this._inputDNavigationMode.addItem(new sap.ui.core.ListItem({key:"Scrollbar", text:"Scrollbar"}));
		
		this._content.addContent(this._inputDNavigationMode);
		this._inputDNavigationMode.attachChange(this.propertyChangedDNavigationMode, this);
		this._inputDNavigationMode.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDNavigationMode();
	};

	this.propertyChangedDNavigationMode = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		this._DNavigationMode = newValue;
		this.firePropertiesChanged(["DNavigationMode"]);
	};
	
	this.DNavigationMode = function(s){
		if( s === undefined){
			return this._DNavigationMode;
		}else{
			this._DNavigationMode = s;
			this.updatePropertyDNavigationMode();
			return this;
		}
	};


});
