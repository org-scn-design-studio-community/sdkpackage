sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.basics.LaunchPadPropertyPage",  function() {
	var that = this;
	this._tileConfig = [];
	this._selectedIndex = -1;
	this.componentSelected = function(){
		this.updateProps();
	};
	this.updateSelection = function(oControlEvent){
		this._selectedIndex = oControlEvent.getParameter("selectedIndex");
		if(this._selectedIndex == -1){
			this._btnDelTile.setEnabled(false);
		}else{
			this._btnDelTile.setEnabled(true);
		}
		this.showSelectionProperties(this._selectedIndex);
	};
	this.showSelectionProperties = function(index){
		if(index<0) return;
		var tile = this._tileConfig[this._selectedIndex];
		this.txtTitle.setValue(tile.title);
		this.txtStyleClass.setValue(tile.styleClass);
		this.txtInfo.setValue(tile.info);
		this.txtIcon.setValue(tile.icon);
		this.txtNumber.setValue(tile.number);
		this.txtNumberUnit.setValue(tile.numberUnit);
		this.cboValueState.setSelectedKey(tile.valueState);		
	};
	this.tileConfigChanged = function(oControlEvent){
		this._tileConfig[this._selectedIndex].title = this.txtTitle.getValue();
		this._tileConfig[this._selectedIndex].styleClass = this.txtStyleClass.getValue();
		this._tileConfig[this._selectedIndex].info = this.txtInfo.getValue();
		this._tileConfig[this._selectedIndex].icon = this.txtIcon.getValue();
		this._tileConfig[this._selectedIndex].number = this.txtNumber.getValue();
		this._tileConfig[this._selectedIndex].numberUnit = this.txtNumberUnit.getValue();
		this._tileConfig[this._selectedIndex].valueState = this.cboValueState.getSelectedKey();
		this.firePropertiesChanged(["tileConfig"]);
		this.updateProps();
	};
	this.updateProps = function(){
		this._tileList.destroyItems();
		for(var i=0;i<this._tileConfig.length;i++){
			this._tileList.addItem(new sap.ui.core.Item({
				key : this._tileConfig[i].title,
				text : this._tileConfig[i].title
			}));
		}
		if(this._selectedIndex != -1 && this._selectedIndex < this._tileConfig.length) {
			this._tileList.setSelectedIndex(this._selectedIndex);
			this._btnDelTile.setEnabled(true);
		}else{
			this._selectedIndex = -1;
			this._btnDelTile.setEnabled(false);
		}
		this.showSelectionProperties(this._selectedIndex);
	};
	this.upTile = function(){
		var si = this._tileList.getSelectedIndex();
		if(si == 0 || si == -1) return;
		var temp = this._tileConfig[si-1];
		this._tileConfig[si-1] = this._tileConfig[si];
		this._tileConfig[si] = temp;
		this._selectedIndex = si-1;
		this.firePropertiesChanged(["tileConfig"]);
		this.updateProps();
	};
	this.downTile = function(){
		var si = this._tileList.getSelectedIndex();
		if(si >= this._tileConfig.length-1 || si == - 1) return;
		var temp = this._tileConfig[si+1];
		this._tileConfig[si+1] = this._tileConfig[si];
		this._tileConfig[si] = temp;
		this._selectedIndex = si+1;
		this.firePropertiesChanged(["tileConfig"]);
		this.updateProps();
	};
	this.delTile = function(){
		var si = this._tileList.getSelectedIndex();
		if(si==-1) return;
		this._tileConfig.splice(si,1);
		this.firePropertiesChanged(["tileConfig"]);
		this.updateProps();
	};
	this.addTile = function(){
		var newItem = {
			title : "Tile " + (this._tileConfig.length + 1),
			styleClass : "",
			info : "Info",
			icon : "sap-icon://action",
			number : "123",
			numberUnit : "USD",
			valueState : "None"
			// infoState : "Success"
		};
		this._selectedIndex = this._tileConfig.length;
		this._tileConfig.push(newItem);
		this.firePropertiesChanged(["tileConfig"]);
		this.updateProps();
	};
	this.init = function(){
		// Init
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this._hLayout = new sap.ui.commons.layout.HorizontalLayout({
			
		});
		this._content.addContent(this._hLayout);
		this._tileList = new sap.ui.commons.ListBox({
			width : "100%"
		});
		this._btnAddTile = new sap.ui.commons.Button({
			text : "+"
		});
		this._btnDelTile = new sap.ui.commons.Button({
			text : "-",
			enabled : false
		});
		this._btnUpTile = new sap.ui.commons.Button({
			text : "^"
		});
		this._btnDownTile = new sap.ui.commons.Button({
			text : "v"
		});
		this._tileOptions = new sap.ui.commons.layout.HorizontalLayout({
			content : [this._btnAddTile, this._btnDelTile, this._btnUpTile, this._btnDownTile]
		});
		this._tileLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "150px",
			content : [this._tileOptions, this._tileList]
		});
		this._tilePropertyLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "300px"
		});
		// Title
		this.lblTitle = new sap.ui.commons.TextView({text : "Tile Title"});
		this.txtTitle = new sap.ui.commons.TextField({});		
		this.txtTitle.attachChange(this.tileConfigChanged, this);
		// Title
		this.lblStyleClass = new sap.ui.commons.TextView({text : "CSS Class"});
		this.txtStyleClass = new sap.ui.commons.TextField({});		
		this.txtStyleClass.attachChange(this.tileConfigChanged, this);
		// Info
		this.lblInfo = new sap.ui.commons.TextView({text : "Info"});
		this.txtInfo = new sap.ui.commons.TextField({});		
		this.txtInfo.attachChange(this.tileConfigChanged, this);
		// Info State
		this.lblValueState = new sap.ui.commons.TextView({text : "Info State"});
		this.cboValueState = new sap.ui.commons.ComboBox({
			items : [
			    new sap.ui.core.ListItem({
			    	key : "None", text : "None"
			    }),
			    new sap.ui.core.ListItem({
			    	key : "Success", text : "Success"
			    }),
			    new sap.ui.core.ListItem({
			    	key : "Warning", text : "Warning"
			    }),
			    new sap.ui.core.ListItem({
			    	key : "Error", text : "Error"
			    })
			]
		});
		// Icon
		this.lblIcon = new sap.ui.commons.TextView({text : "Icon"});
		this.txtIcon = new sap.ui.commons.TextField({});		
		this.txtIcon.attachChange(this.tileConfigChanged, this);
		// Number
		this.lblNumber = new sap.ui.commons.TextView({text : "Number"});
		this.txtNumber = new sap.ui.commons.TextField({});		
		this.txtNumber.attachChange(this.tileConfigChanged, this);
		// Number Unit
		this.lblNumberUnit = new sap.ui.commons.TextView({text : "Number Unit"});
		this.txtNumberUnit = new sap.ui.commons.TextField({});		
		this.txtNumberUnit.attachChange(this.tileConfigChanged, this);
		
		this.cboValueState.attachChange(this.tileConfigChanged, this);
		
		// Layout
		this._tilePropertyLayout.addContent(this.lblTitle);
		this._tilePropertyLayout.addContent(this.txtTitle);
		this._tilePropertyLayout.addContent(this.lblStyleClass);
		this._tilePropertyLayout.addContent(this.txtStyleClass);
		this._tilePropertyLayout.addContent(this.lblInfo);
		this._tilePropertyLayout.addContent(this.txtInfo);
		this._tilePropertyLayout.addContent(this.lblValueState);
		this._tilePropertyLayout.addContent(this.cboValueState);
		this._tilePropertyLayout.addContent(this.lblIcon);
		this._tilePropertyLayout.addContent(this.txtIcon);
		this._tilePropertyLayout.addContent(this.lblNumber);
		this._tilePropertyLayout.addContent(this.txtNumber);
		this._tilePropertyLayout.addContent(this.lblNumberUnit);
		this._tilePropertyLayout.addContent(this.txtNumberUnit);
		
		
		this._hLayout.addContent(this._tileLayout);
		this._hLayout.addContent(this._tilePropertyLayout);
		// Events
		this._tileList.attachSelect(this.updateSelection, this);
		this._btnAddTile.attachPress(this.addTile, this);
		this._btnDelTile.attachPress(this.delTile, this);
		this._btnUpTile.attachPress(this.upTile, this);
		this._btnDownTile.attachPress(this.downTile, this);

		this._content.placeAt($("#content"));
		
		this.updateProps();
	};
	this.tileConfig = function(s){
		if( s === undefined){
			return JSON.stringify(this._tileConfig);
		}else{
			var o = [];
			if(s && s!="") o = jQuery.parseJSON(s);
			this._tileConfig = o;
			this.updateProps();
			return this;
		}
	};	
});