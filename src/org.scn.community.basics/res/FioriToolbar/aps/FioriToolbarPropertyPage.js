sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.basics.FioriToolbarPropertyPage",  function() {
	var that = this;
	this._items = [];
	this._selectedSectionKey = "";
	this._selectedItemKey = "";

	this.componentSelected = function(){
		this.updateProps();
	};
	this.getSection = function(key){
		for(var i=0;i<this._items.length;i++){
			if(this._items[i].key==key) return this._items[i];
		}
	};
	this.updateSection = function(oControlEvent){
		var item = this.getSection(this.actionList.getSelectedKey());
		if(!item) return;
		// Protect Key
		if(item.key != this.txtActionKey.getValue()) item.key = this.actionList.generateKey(this.txtActionKey.getValue());
		item.text = this.txtActionText.getValue();
		item.type = this.cboButtonType.getSelectedKey();
		item.icon = this.txtActionIcon.getValue();
		item.showTitle = this.chkShowText.getChecked();
		this.actionList.setSelectedKey(item.key);
		this.firePropertiesChanged(["itemConfig"]);
		this.updateProps();
	};
	this.showSection = function(index){
		this._selectedSectionKey = this.actionList.getSelectedKey();
		var item = this.getSection(this.actionList.getSelectedKey());
		if(!item){
			this.actionProps.setVisible(false);
		}else{
			this.actionProps.setVisible(true);
			this.txtActionKey.setValue(item.key);
			this.txtActionText.setValue(item.text);
			this.cboButtonType.setSelectedKey(item.type || "Default");
			this.chkShowText.setChecked(item.showTitle);
			this.txtActionIcon.setValue(item.icon);
			this.actionItems.setList(item.items);
		}
	};
	this.updateProps = function(){
		this.actionList.setList(this._items);
		this.showSection(this.actionList.getSelectedKey());
	};
	/*
	 * Fires when section add button clicked
	 */
	this.addSection = function(oControlEvent){
		var newKey = this.actionList.generateKey("Section");
		var newSection = {
			key : newKey,
			text : "Section " + (this._items.length + 1),
			showTitle : true,
			icon : "sap-icon://action",
			items : []
		};
		this.actionList.setSelectedKey(newKey);
		this._items.push(newSection);
		this.firePropertiesChanged(["itemConfig"]);
		this.updateProps();
	};
	/*
	 * Fires when item add button clicked
	 */
	this.addItem = function(oControlEvent){
		var section = this.getSection(this.actionList.getSelectedKey());
		if(!section) return;
		var newKey = this.actionItems.generateKey("Item");
		var newItem = {
			key : newKey,
			text : "Item " + (section.items.length + 1),
			icon : "sap-icon://action"
		};
		this.actionItems.setSelectedKey(newKey);
		section.items.push(newItem);
		this.firePropertiesChanged(["itemConfig"]);
		this.updateProps();
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
	this.moveItem = function(oControlEvent){
		var section = this.getSection(this.actionList.getSelectedKey());
		if(!section) return;
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		for(var i=0;i<section.items.length;i++){
			if(section.items[i].key == movementData.key) sourceIndex = i;
			if(section.items[i].key == movementData.targetKey) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = section.items[targetIndex];
			section.items[targetIndex] = section.items[sourceIndex];
			section.items[sourceIndex] = temp;
			this.firePropertiesChanged(["itemConfig"]);
			this.updateProps();
		}
	};
	this.moveSection = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		for(var i=0;i<this._items.length;i++){
			if(this._items[i].key == movementData.key) sourceIndex = i;
			if(this._items[i].key == movementData.targetKey) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = this._items[targetIndex];
			this._items[targetIndex] = this._items[sourceIndex];
			this._items[sourceIndex] = temp;
			this.firePropertiesChanged(["itemConfig"]);
			this.updateProps();
		}
	};
	this.deleteItem = function(oControlEvent){
		var section = this.getSection(this.actionList.getSelectedKey());
		if(!section) return;
		for(var i=0;i<section.items.length;i++){
			if(section.items[i].key==this.actionItems.getSelectedKey()){
				section.items.splice(i,1);
				this.firePropertiesChanged(["itemConfig"]);
				this.updateProps();
			}
		}	
	};
	this.deleteSection = function(oControlEvent){
		for(var i=0;i<this._items.length;i++){
			if(this._items[i].key==this.actionList.getSelectedKey()){
				this._items.splice(i,1);
				this.firePropertiesChanged(["itemConfig"]);
				this.updateProps();
			}
		}	
	};
	this.itemDetailsChanged = function(oControlEvent){	
		// Protect Key
		var allItems = new org.scn.community.propertysheet.ListBuilder();		
		allItems.setList(this.getSection(this._selectedSectionKey).items);
		if(this._currentItemConfig.key != this.txtItemKey.getValue()) this._currentItemConfig.key = allItems.generateKey(this.txtItemKey.getValue());
		delete allItems;	
		this._currentItemConfig.text = this.txtItemTitle.getValue();
		this._currentItemConfig.icon = this.txtItemUrl.getValue();
		this.firePropertiesChanged(["itemConfig"]);
		this.updateProps();
		this.closeDetail();
	}
	this.showItem = function(oControlEvent){
		var detailData = oControlEvent.getParameters();
		var section = this.getSection(this._selectedSectionKey);
		this._currentItemConfig = null;
		for(var i=0;i<section.items.length;i++){
			var item = section.items[i];
			if(item.key == detailData.key) this._currentItemConfig = item;
		}
		if(!this._currentItemConfig) return;
		this.txtItemKey.setValue(this._currentItemConfig.key);
		this.txtItemTitle.setValue(this._currentItemConfig.text);
		this.txtItemUrl.setValue(this._currentItemConfig.icon);
		if(!this._popup) this._popup = new sap.ui.core.Popup(this.itemDetailPanel, true, true, true);
		
		//this._popup.destroyContent();
		this._popup.open(250,"center center", "center center", document.body, null);
	};
	this.init = function(){
		// Build UI
		this._content = new sap.ui.commons.layout.HorizontalLayout({ });
		this.actionList = new org.scn.community.propertysheet.ListBuilder({
			width : "200px"
		});
		this.actionProps = new sap.ui.commons.layout.VerticalLayout({ });
		this.lblActionKey = new sap.ui.commons.TextView({text : "Action Key"});
		this.txtActionKey = new sap.ui.commons.TextField({});
		this.lblActionText = new sap.ui.commons.TextView({text : "Action Text"});
		this.txtActionText = new sap.ui.commons.TextField({});
		this.lblButtonType = new sap.ui.commons.TextView({text : "Button Type"});
		this.cboButtonType = new sap.ui.commons.ComboBox({
			items : [
			    new sap.ui.core.ListItem({
			    	key : "Default", text : "Default"
			    }),
			    new sap.ui.core.ListItem({
			    	key : "Accept", text : "Accept"
			    }),
			    new sap.ui.core.ListItem({
			    	key : "Back", text : "Back"
			    }),
			    new sap.ui.core.ListItem({
			    	key : "Emphasized", text : "Emphasized"
			    }),
			    new sap.ui.core.ListItem({
			    	key : "Reject", text : "Reject"
			    }),
			    new sap.ui.core.ListItem({
			    	key : "Transparent", text : "Transparent"
			    }),
			    new sap.ui.core.ListItem({
			    	key : "Unstyled", text : "Unstyled"
			    }),
			    new sap.ui.core.ListItem({
			    	key : "Up", text : "Up"
			    })
			]
		});
		this.chkShowText = new sap.ui.commons.CheckBox({ text : "Show Text"});
		this.lblActionIcon = new sap.ui.commons.TextView({text : "Action Icon"});
		this.txtActionIcon = new sap.ui.commons.TextField({});
		this.lblActionItems = new sap.ui.commons.TextView({text : "Items"});
		this.actionItems = new org.scn.community.propertysheet.ListBuilder({
			width : "200px",
			showDetail : true
		});
		
		this.actionProps.addContent(this.lblActionKey);
		this.actionProps.addContent(this.txtActionKey);
		this.actionProps.addContent(this.lblActionText);
		this.actionProps.addContent(this.txtActionText);
		this.actionProps.addContent(this.lblButtonType);
		this.actionProps.addContent(this.cboButtonType);
		this.actionProps.addContent(this.chkShowText);
		this.actionProps.addContent(this.lblActionIcon);
		this.actionProps.addContent(this.txtActionIcon);
		this.actionProps.addContent(this.lblActionItems);
		this.actionProps.addContent(this.actionItems);
		
		this._content.addContent(this.actionList);
		this._content.addContent(this.actionProps);
		this._content.placeAt($("#content"));

		// Item Detail Components
		this.itemDetailPanel = new sap.ui.commons.Panel({
			text : "Item Details",
			showCollapseIcon : false,
			width : "80%"
		});
		this.itemDetailLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this.detailButtons = new sap.ui.commons.layout.HorizontalLayout({ });
		this.closeButton = new sap.ui.commons.Button({
			text : "Cancel"
		});
		this.okButton = new sap.ui.commons.Button({
			text : "Update"
		});
		this.detailButtons.addContent(this.closeButton);
		this.detailButtons.addContent(this.okButton);
		this.closeButton.attachPress(this.closeDetail,this);
		this.okButton.attachPress(this.itemDetailsChanged,this);
		this.itemKey = new sap.ui.commons.TextView({text : "Item Key"});
		this.txtItemKey = new sap.ui.commons.TextField({ });
		this.itemTitle = new sap.ui.commons.TextView({text : "Item Title"});
		this.txtItemTitle = new sap.ui.commons.TextField({ });
		this.itemUrl = new sap.ui.commons.TextView({text : "Item Image URL"});
		this.txtItemUrl = new sap.ui.commons.TextField({ });
		this.itemDetailLayout.addContent(this.itemKey);
		this.itemDetailLayout.addContent(this.txtItemKey);
		this.itemDetailLayout.addContent(this.itemTitle);
		this.itemDetailLayout.addContent(this.txtItemTitle);
		this.itemDetailLayout.addContent(this.itemUrl);
		this.itemDetailLayout.addContent(this.txtItemUrl);
		this.itemDetailLayout.addContent(this.detailButtons);
		this.itemDetailPanel.addContent(this.itemDetailLayout);
		
		// Events
		this.actionList.attachItemAdded(this.addSection,this);
		this.actionList.attachItemSelected(this.showSection,this);
		this.actionList.attachItemDeleted(this.deleteSection,this);
		this.actionList.attachItemMoved(this.moveSection,this);

		this.actionItems.attachItemAdded(this.addItem,this);
		this.actionItems.attachItemDetail(this.showItem,this);
		this.actionItems.attachItemDeleted(this.deleteItem,this);
		this.actionItems.attachItemMoved(this.moveItem,this);

		this.txtActionKey.attachChange(this.updateSection, this);
		this.txtActionText.attachChange(this.updateSection, this);
		this.cboButtonType.attachChange(this.updateSection, this);
		this.txtActionIcon.attachChange(this.updateSection, this);
		this.chkShowText.attachChange(this.updateSection, this);
		
		this.updateProps();
	};
	this.itemConfig = function(s){
		if( s === undefined){
			return JSON.stringify(this._items);
		}else{
			var o = [];
			if(s && s!="") o = jQuery.parseJSON(s);
			this._items = o;
			this.updateProps();
			return this;
		}
	};	
});