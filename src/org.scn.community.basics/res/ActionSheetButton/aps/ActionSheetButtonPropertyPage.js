sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.basics.ActionSheetButtonPropertyPage",  function() {
	var that = this;
	this._items = [];
	this.items = function(s){
		if(s===undefined){
			return this._items.join("\n");
		}else{
			this._items = [];
			if(s && s!="") this._items=s.split("\n");
			this.updateProps();
			return this;
		}
	};
	this.componentSelected = function(){
		this.updateProps();
	};
	this.updateProps = function(){
		this.itemsList.setValue(this._items.join("\n"));
	};
	this.itemListChanged = function(){
		this._items = this.itemsList.getValue().split("\n");
		this.firePropertiesChanged(["items"]);
	};
	this.init = function(){
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this.itemsLabel = new sap.ui.commons.TextView({text : "Items"});
		this.itemsList = new sap.ui.commons.TextArea({
			value : this._items.join("\n"),
			design : sap.ui.core.Design.Monospace,
			rows : 10,
			width : "100%",
			wrapping : sap.ui.core.Wrapping.Off
		});
		this.itemsList.attachChange(this.itemListChanged, this);
		this._content.addContent(this.itemsLabel);
		this._content.addContent(this.itemsList);
		this._content.placeAt($("#content"));
		this.updateProps();
		
	};
});