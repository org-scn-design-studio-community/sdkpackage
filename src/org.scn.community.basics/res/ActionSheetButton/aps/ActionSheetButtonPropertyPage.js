sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.basics.ActionSheetButtonPropertyPage",  function() {
	var that = this;
	this._items = [];
	// Getter/Setter
	this.items = function(s){
		if(s===undefined){
			return JSON.stringify(this._items);
		}else{
			this._items = [];
			if(s && s!="") this._items=jQuery.parseJSON(s);
			this.updateProps();
			return this;
		}
	};
	this.componentSelected = function(){
		this.updateProps();
	};
	this.updateProps = function(){
		this.actionList.setList(this._items);
		this.showItem();
	};
	this.addItem = function(){
		var newKey = this.actionList.generateKey("action");
		var newItem = {
			key : newKey,
			text : "Action " + (this._items.length + 1),
			icon : ""
		}
		this._items.push(newItem);
		this.firePropertiesChanged(["items"]);
		this.updateProps();
	};
	this.updateItem = function(oControlEvent){
		var item = this.getItem(this.actionList.getSelectedKey());
		if(!item) return;
		// Protect Key
		if(item.key != this.txtActionKey.getValue()) item.key = this.actionList.generateKey(this.txtActionKey.getValue());
		item.text = this.txtActionText.getValue();
		item.icon = this.txtActionIcon.getValue();
		this.actionList.setSelectedKey(item.key);
		this.firePropertiesChanged(["items"]);
		this.updateProps();
	};
	this.moveItem = function(oControlEvent){
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		for(var i=0;i<this._items.length;i++){
			if(this._items[i].key == movementData.key && !this._items[i].leaf) sourceIndex = i;
			if(this._items[i].key == movementData.targetKey && !this._items[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = this._items[targetIndex];
			this._items[targetIndex] = this._items[sourceIndex];
			this._items[sourceIndex] = temp;
			this.firePropertiesChanged(["items"]);
			this.updateProps();
		}
	};
	this.deleteItem = function(oControlEvent){
		for(var i=0;i<this._items.length;i++){
			if(this._items[i].key==this.actionList.getSelectedKey()){
				this._items.splice(i,1);
				this.firePropertiesChanged(["items"]);
				this.updateProps();
			}
		}	
	};	
	this.showItem = function(oControlEvent){
		var item = this.getItem(this.actionList.getSelectedKey());
		if(!item){
			this.actionProps.setVisible(false);
		}else{
			this.actionProps.setVisible(true);
			this.txtActionKey.setValue(item.key);
			this.txtActionText.setValue(item.text);
			this.txtActionIcon.setValue(item.icon);
			
			this.btnActionPreview.setIcon(item.icon);
			this.btnActionPreview.setText(item.text);
		}
	};
	this.getItem = function(key){
		for(var i=0;i<this._items.length;i++){
			if(this._items[i].key==key) return this._items[i];
		}
	};
	this.init = function(){
		// Build UI
		this._content = new sap.ui.commons.layout.HorizontalLayout({ });
		this.actionList = new org.scn.community.propertysheet.ListBuilder({
			width : "200px",
			list : this._items
		});
		this.actionProps = new sap.ui.commons.layout.VerticalLayout({ });
		this.lblActionKey = new sap.ui.commons.TextView({text : "Action Key"});
		this.txtActionKey = new sap.ui.commons.TextField({});
		this.lblActionText = new sap.ui.commons.TextView({text : "Action Text"});
		this.txtActionText = new sap.ui.commons.TextField({});
		this.lblActionIcon = new sap.ui.commons.TextView({text : "Action Icon"});
		this.txtActionIcon = new sap.ui.commons.TextField({});
		this.lblActionPreview = new sap.ui.commons.TextView({text : "Preview"});
		this.btnActionPreview = new sap.m.Button();
		
		this.actionProps.addContent(this.lblActionKey);
		this.actionProps.addContent(this.txtActionKey);
		this.actionProps.addContent(this.lblActionText);
		this.actionProps.addContent(this.txtActionText);
		this.actionProps.addContent(this.lblActionIcon);
		this.actionProps.addContent(this.txtActionIcon);
		this.actionProps.addContent(this.lblActionPreview);
		this.actionProps.addContent(this.btnActionPreview);
		
		this._content.addContent(this.actionList);
		this._content.addContent(this.actionProps);
		this._content.placeAt($("#content"));
		
		// Events
		this.actionList.attachItemAdded(this.addItem,this);
		this.actionList.attachItemSelected(this.showItem,this);
		this.actionList.attachItemDeleted(this.deleteItem,this);
		this.actionList.attachItemMoved(this.moveItem,this);
		
		this.txtActionKey.attachChange(this.updateItem, this);
		this.txtActionText.attachChange(this.updateItem, this);
		this.txtActionIcon.attachChange(this.updateItem, this);
		
		this.updateProps();		
	};
});