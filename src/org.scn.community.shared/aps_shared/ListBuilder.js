/**
 * List Builder SAPUI5 Extension
 * @author Mike Howles
 * Used for Additional Properties Panel to aid in working with array-like properties
 * Built to be reusable
 *   
 */
sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.propertysheet.ListBuilder",{
	renderer : { },
	metadata : {
		properties : {
			list : [],
			selectedKey : "",
			selectedIndex : -1,
			showDetail : false
		},
		events : {
			itemSelected : {},
			itemsChanged : {},
			itemAdded : {},
			itemDeleted : {},
			itemMoved : {},
			itemDetail : {}
		}
	},
	setList : function(a){
		this._list = a;
		this._listBox.destroyItems();
		for(var i=0;i<this._list.length;i++){
			var item = a[i];
			var key = item;
			if(item.key) key = item.key;
			var text = key;
			if(item.text) text = item.text;
			this._listBox.addItem(new sap.ui.core.Item({
				key : key,
				text : text
			}));
		}
		this._listBox.setSelectedKeys([this._lastKey]);
	},
	setShowDetail : function(b){
		if(b){
			this._tools.addContent(this._btnDetail);
		}else{
			this._tools.removeContent(this._btnDetail);
		}
	},
	getShowDetail : function(){
		return this._showDetail
	},
	getSelectedKey : function(){
		var key = "";
		var item = this._listBox.getSelectedItem();
		if(item) key = item.getKey();
		return key;
	},
	setSelectedKey : function(key){
		this._lastKey = key;
		this._listBox.setSelectedKeys([this._lastKey]);
	},
	getList : function(){
		return this._list;
	},
	itemSelect : function(oControlEvent){
		var si = this._listBox.getSelectedIndex();
		var item = this._listBox.getSelectedItem();
		var key = "";
		if(item) key = item.getKey();
		this._lastKey = key;
		this.fireItemSelected({
			key : key,
			ordinalPosition : si
		});
	},
	upClicked : function(oControlEvent){
		var si = this._listBox.getSelectedIndex();
		if(si==-1) return;
		if(si==0) return;
		var item = this._listBox.getSelectedItem();
		this.fireItemMoved({
			key : item.getKey(),
			targetKey : this._listBox.getItems()[si-1].getKey(),
			ordinalPosition : si,
			direction : "up"
		});
	},
	downClicked : function(oControlEvent){
		var si = this._listBox.getSelectedIndex();
		if(si==-1) return;
		if(si>=this._list.length-1) return;
		var item = this._listBox.getSelectedItem();
		this.fireItemMoved({
			key : item.getKey(),
			targetKey : this._listBox.getItems()[si+1].getKey(),
			ordinalPosition : si,
			direction : "down"
		});
	},
	addClicked : function(oControlEvent){
		this.fireItemAdded();
	},
	detailClicked : function(oControlEvent){
		var si = this._listBox.getSelectedIndex();
		if(si==-1) return;
		var item = this._listBox.getSelectedItem();
		this.fireItemDetail({
			key : item.getKey(),
			ordinalPosition : si
		});
	},
	delClicked : function(oControlEvent){
		var si = this._listBox.getSelectedIndex();
		if(si==-1) return;
		var item = this._listBox.getSelectedItem();
		this.fireItemDeleted({
			key : item.getKey(),
			ordinalPosition : si
		});
	},
	generateKey : function(prefix, index){
		// Key protection
		var match = true;
		var serial = 0;
		var candidate;
		while(match){
			match = false;
			candidate = prefix + ((serial==0)?"":serial);
			for(var i=0;i<this._list.length;i++){
				if(this._list[i].key == candidate && i!= index){
					match = true;
					serial++;
				}
			}
		}
		return candidate;
	},
	init : function(){
		this._tools = new sap.ui.commons.layout.HorizontalLayout({});
		this._listBox = new sap.ui.commons.ListBox({
			width : "100%"
		});
		this._btnAdd = new sap.m.Button({
			icon : "sap-icon://add"
		});
		this._btnDel = new sap.m.Button({
			icon : "sap-icon://delete",
		});
		this._btnUp = new sap.m.Button({
			icon : "sap-icon://arrow-top"
		});
		this._btnDown = new sap.m.Button({
			icon : "sap-icon://arrow-bottom"
		});
		this._btnDetail = new sap.m.Button({
			icon : "sap-icon://inspection"
		});
		// Add Event Listeners
		this._btnAdd.attachBrowserEvent("click",this.addClicked,this);
		this._btnDel.attachBrowserEvent("click",this.delClicked,this);
		this._btnUp.attachBrowserEvent("click",this.upClicked,this);
		this._btnDown.attachBrowserEvent("click",this.downClicked,this);
		this._btnDetail.attachBrowserEvent("click",this.detailClicked,this);
		this._listBox.attachSelect(this.itemSelect,this);
		// Build UI
		this._tools.addContent(this._btnAdd);
		this._tools.addContent(this._btnDel);
		this._tools.addContent(this._btnUp);
		this._tools.addContent(this._btnDown);
		this.addContent(this._tools);
		this.addContent(this._listBox);
	}
});