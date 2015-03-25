
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
		this.initDHeaderColWidth();
		this.initDFormatingCondition();
		this.initDNavigationMode();
		
	};
	
	this.componentSelected = function(){
		this.updateDDataProvisioner();
		this.updateDVisibleRowCount();
		this.updateDRowHeight();
		this.updateDHeaderColWidth();
		this.updateDFormatingCondition();
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

	this.updatePropertyDFormatingCondition = function(){
		this._inputDFormatingCondition.setValue(this._DFormatingCondition);
	};
	
	this.initDFormatingCondition = function(){
		this._labelDFormatingCondition = new sap.ui.commons.Label({text: " Formating Condition"});
		this._labelDFormatingCondition.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDFormatingCondition);
		
		this._inputDFormatingCondition = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDFormatingCondition);
		this._inputDFormatingCondition.attachChange(this.propertyChangedDFormatingCondition, this);
		this._inputDFormatingCondition.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDFormatingCondition();
	};

	this.propertyChangedDFormatingCondition = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DFormatingCondition = value;
		this.firePropertiesChanged(["DFormatingCondition"]);
	};
	
	this.DFormatingCondition = function(s){
		if( s === undefined){
			return this._DFormatingCondition;
		}else{
			this._DFormatingCondition = s;
			this.updatePropertyDFormatingCondition();
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
