sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.prototypes.ProgressSetPropertyPage",  function() {
	var that = this;
	this._barConfig = [];
	this._selectedIndex = -1;
	this.componentSelected = function(){
		this.updateProps();
	};
	this.updateSelection = function(oControlEvent){
		this._selectedIndex = oControlEvent.getParameter("selectedIndex");
		if(this._selectedIndex == -1){
			this._btndelMeasure.setEnabled(false);
		}else{
			this._btndelMeasure.setEnabled(true);
		}
		this.showSelectionProperties(this._selectedIndex);
	};
	this.showSelectionProperties = function(index){
		if(index<0) return;
		var bar = this._barConfig[this._selectedIndex];
		this.txtTitle.setValue(bar.title);
		this.txtFillColor.setValue(bar.fillColor);
		this.txtNumber.setValue(bar.number);
		this.txtNumberUnit.setValue(bar.numberUnit);	
		this.txtStyleClass.setValue(bar.styleClass);
	};
	this.barConfigChanged = function(oControlEvent){
		this._barConfig[this._selectedIndex].title = this.keyProtect(this.txtTitle.getValue(), this._selectedIndex);
		this._barConfig[this._selectedIndex].fillColor = this.txtFillColor.getValue();
		this._barConfig[this._selectedIndex].number = this.txtNumber.getValue();
		this._barConfig[this._selectedIndex].numberUnit = this.txtNumberUnit.getValue();
		this._barConfig[this._selectedIndex].styleClass = this.txtStyleClass.getValue();
		this.firePropertiesChanged(["barConfig"]);
		this.updateProps();
	};
	this.updateProps = function(){
		this._measureList.destroyItems();
		for(var i=0;i<this._barConfig.length;i++){
			this._measureList.addItem(new sap.ui.core.Item({
				key : this._barConfig[i].title,
				text : this._barConfig[i].title
			}));
		}
		if(this._selectedIndex != -1 && this._selectedIndex < this._barConfig.length) {
			this._measureList.setSelectedIndex(this._selectedIndex);
			this._btndelMeasure.setEnabled(true);
		}else{
			this._selectedIndex = -1;
			this._btndelMeasure.setEnabled(false);
		}
		this.showSelectionProperties(this._selectedIndex);
	};
	this.upMeasure = function(){
		var si = this._measureList.getSelectedIndex();
		if(si == 0 || si == -1) return;
		var temp = this._barConfig[si-1];
		this._barConfig[si-1] = this._barConfig[si];
		this._barConfig[si] = temp;
		this._selectedIndex = si-1;
		this.firePropertiesChanged(["barConfig"]);
		this.updateProps();
	};
	this.downMeasure = function(){
		var si = this._measureList.getSelectedIndex();
		if(si >= this._barConfig.length-1 || si == - 1) return;
		var temp = this._barConfig[si+1];
		this._barConfig[si+1] = this._barConfig[si];
		this._barConfig[si] = temp;
		this._selectedIndex = si+1;
		this.firePropertiesChanged(["barConfig"]);
		this.updateProps();
	};
	this.delMeasure = function(){
		var si = this._measureList.getSelectedIndex();
		if(si==-1) return;
		this._barConfig.splice(si,1);
		this.firePropertiesChanged(["barConfig"]);
		this.updateProps();
	};
	this.keyProtect = function(title, index){
		// Key protection
		var match = true;
		var serial = 0;
		var candidate;
		while(match){
			match = false;
			candidate = title + ((serial==0)?"":serial);
			for(var i=0;i<this._barConfig.length;i++){
				if(this._barConfig[i].title == candidate && i!= index){
					match = true;
					serial++;
				}
			}
		}
		return candidate;
	}
	this.addMeasure = function(){
		var newItem = {
			title : this.keyProtect("Measure", -1),
			fillColor : "auto",
			number : "123",
			numberUnit : "USD",
			styleClass : ""		
		};
		this._selectedIndex = this._barConfig.length;
		this._barConfig.push(newItem);
		this.firePropertiesChanged(["barConfig"]);
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
		this._measureList = new sap.ui.commons.ListBox({
			width : "100%"
		});
		this._btnaddMeasure = new sap.m.Button({
			icon : "sap-icon://add"
		});
		this._btndelMeasure = new sap.m.Button({
			icon : "sap-icon://delete",
			enabled : false
		});
		this._btnupMeasure = new sap.m.Button({
			icon : "sap-icon://arrow-top"
		});
		this._btndownMeasure = new sap.m.Button({
			icon : "sap-icon://arrow-bottom"
		});
		this._tileOptions = new sap.ui.commons.layout.HorizontalLayout({
			content : [this._btnaddMeasure, this._btndelMeasure, this._btnupMeasure, this._btndownMeasure]
		});
		this._measureLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "200px",
			content : [this._tileOptions, this._measureList]
		});
		this._measurePropertyLayout = new sap.ui.commons.layout.VerticalLayout({
			// width : "300px"
		});
		// Title
		this.lblTitle = new sap.ui.commons.TextView({text : "Tile Title"});
		this.txtTitle = new sap.ui.commons.TextField({});		
		this.txtTitle.attachChange(this.barConfigChanged, this);
		// Fill Color
		this.lblFillColor = new sap.ui.commons.TextView({text : "Fill Color"});
		this.txtFillColor = new sap.ui.commons.TextField({});		
		this.txtFillColor.attachChange(this.barConfigChanged, this);
		// Number
		this.lblNumber = new sap.ui.commons.TextView({text : "Number"});
		this.txtNumber = new sap.ui.commons.TextField({});		
		this.txtNumber.attachChange(this.barConfigChanged, this);
		// Number Unit
		this.lblNumberUnit = new sap.ui.commons.TextView({text : "Number Unit"});
		this.txtNumberUnit = new sap.ui.commons.TextField({});		
		this.txtNumberUnit.attachChange(this.barConfigChanged, this);
		// CSS Class
		this.lblStyleClass = new sap.ui.commons.TextView({text : "CSS Class"});
		this.txtStyleClass = new sap.ui.commons.TextField({});		
		this.txtStyleClass.attachChange(this.barConfigChanged, this);
				
		// Layout
		this._measurePropertyLayout.addContent(this.lblTitle);
		this._measurePropertyLayout.addContent(this.txtTitle);
		this._measurePropertyLayout.addContent(this.lblFillColor);
		this._measurePropertyLayout.addContent(this.txtFillColor);
		this._measurePropertyLayout.addContent(this.lblNumber);
		this._measurePropertyLayout.addContent(this.txtNumber);
		this._measurePropertyLayout.addContent(this.lblNumberUnit);
		this._measurePropertyLayout.addContent(this.txtNumberUnit);		
		this._measurePropertyLayout.addContent(this.lblStyleClass);
		this._measurePropertyLayout.addContent(this.txtStyleClass);
		
		this._hLayout.addContent(this._measureLayout);
		this._hLayout.addContent(this._measurePropertyLayout);
		// Events
		this._measureList.attachSelect(this.updateSelection, this);
		this._btnaddMeasure.attachPress(this.addMeasure, this);
		this._btndelMeasure.attachPress(this.delMeasure, this);
		this._btnupMeasure.attachPress(this.upMeasure, this);
		this._btndownMeasure.attachPress(this.downMeasure, this);

		this._content.placeAt($("#content"));
		
		this.updateProps();
	};
	this.barConfig = function(s){
		if( s === undefined){
			return JSON.stringify(this._barConfig);
		}else{
			var o = [];
			if(s && s!="") o = jQuery.parseJSON(s);
			this._barConfig = o;
			this.updateProps();
			return this;
		}
	};	
});