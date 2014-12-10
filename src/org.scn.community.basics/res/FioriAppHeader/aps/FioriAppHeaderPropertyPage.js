sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.basics.FioriAppHeaderPropertyPage",  function() {
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
		this.chkShowText = new sap.ui.commons.CheckBox({ text : "Show Text"});
		this.lblActionIcon = new sap.ui.commons.TextView({text : "Action Icon"});
		this.txtActionIcon = new sap.ui.commons.TextField({});
		this.lblActionItems = new sap.ui.commons.TextView({text : "Items"});
		this.actionItems = new org.scn.community.propertysheet.ListBuilder({
			width : "200px"
		});
		
		this.actionProps.addContent(this.lblActionKey);
		this.actionProps.addContent(this.txtActionKey);
		this.actionProps.addContent(this.lblActionText);
		this.actionProps.addContent(this.txtActionText);
		this.actionProps.addContent(this.chkShowText);
		this.actionProps.addContent(this.lblActionIcon);
		this.actionProps.addContent(this.txtActionIcon);
		this.actionProps.addContent(this.lblActionItems);
		this.actionProps.addContent(this.actionItems);
		
		this._content.addContent(this.actionList);
		this._content.addContent(this.actionProps);
		this._content.placeAt($("#content"));

		// Events
		this.actionList.attachItemAdded(this.addSection,this);
		this.actionList.attachItemSelected(this.showSection,this);
		this.actionList.attachItemDeleted(this.deleteSection,this);
		this.actionList.attachItemMoved(this.moveSection,this);

		this.actionItems.attachItemAdded(this.addItem,this);
		//this.actionItems.attachItemSelected(this.showItem,this);
		this.actionItems.attachItemDeleted(this.deleteItem,this);
		this.actionItems.attachItemMoved(this.moveItem,this);

		this.txtActionKey.attachChange(this.updateSection, this);
		this.txtActionText.attachChange(this.updateSection, this);
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
			//this.updateProps();
			return this;
		}
	};	
});