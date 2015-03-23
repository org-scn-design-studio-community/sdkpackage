
/**
 * Generated ZTL Class for Result Set Structure Blender
 * 
 * DO NOT EDIT
 */
sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.ResultSetStructureBlenderPropertyPage",  function() {
	var that = this;

	this.init = function () {
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this._content.placeAt($("#content"));

		this.initDMasterStructureProvisioner();
		this.initDSlaveResultSetProvisioner1();
		this.initDSlaveResultSetProvisioner2();
		this.initDSlave2ContentCondition();
		this.initDSlave2StructureRowCondition();
		this.initDSlave2StructureColumnCondition();
		
	};
	
	this.componentSelected = function(){
		this.updateDMasterStructureProvisioner();
		this.updateDSlaveResultSetProvisioner1();
		this.updateDSlaveResultSetProvisioner2();
		this.updateDSlave2ContentCondition();
		this.updateDSlave2StructureRowCondition();
		this.updateDSlave2StructureColumnCondition();
		
	};
	
	
	this.updatePropertyDMasterStructureProvisioner = function(){
		this._inputDMasterStructureProvisioner.setValue(this._DMasterStructureProvisioner);
	};
	
	this.initDMasterStructureProvisioner = function(){
		this._labelDMasterStructureProvisioner = new sap.ui.commons.Label({text: " Central Data Provisioner for Master Structure"});
		this._labelDMasterStructureProvisioner.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDMasterStructureProvisioner);
		
		this._inputDMasterStructureProvisioner = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDMasterStructureProvisioner);
		this._inputDMasterStructureProvisioner.attachChange(this.propertyChangedDMasterStructureProvisioner, this);
		this._inputDMasterStructureProvisioner.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDMasterStructureProvisioner();
	};

	this.propertyChangedDMasterStructureProvisioner = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DMasterStructureProvisioner = value;
		this.firePropertiesChanged(["DMasterStructureProvisioner"]);
	};
	
	this.DMasterStructureProvisioner = function(s){
		if( s === undefined){
			return this._DMasterStructureProvisioner;
		}else{
			this._DMasterStructureProvisioner = s;
			this.updatePropertyDMasterStructureProvisioner();
			return this;
		}
	};

	this.updatePropertyDSlaveResultSetProvisioner1 = function(){
		this._inputDSlaveResultSetProvisioner1.setValue(this._DSlaveResultSetProvisioner1);
	};
	
	this.initDSlaveResultSetProvisioner1 = function(){
		this._labelDSlaveResultSetProvisioner1 = new sap.ui.commons.Label({text: " Central Data Provisioner for Slave Row Based Result Set 1"});
		this._labelDSlaveResultSetProvisioner1.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDSlaveResultSetProvisioner1);
		
		this._inputDSlaveResultSetProvisioner1 = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDSlaveResultSetProvisioner1);
		this._inputDSlaveResultSetProvisioner1.attachChange(this.propertyChangedDSlaveResultSetProvisioner1, this);
		this._inputDSlaveResultSetProvisioner1.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDSlaveResultSetProvisioner1();
	};

	this.propertyChangedDSlaveResultSetProvisioner1 = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DSlaveResultSetProvisioner1 = value;
		this.firePropertiesChanged(["DSlaveResultSetProvisioner1"]);
	};
	
	this.DSlaveResultSetProvisioner1 = function(s){
		if( s === undefined){
			return this._DSlaveResultSetProvisioner1;
		}else{
			this._DSlaveResultSetProvisioner1 = s;
			this.updatePropertyDSlaveResultSetProvisioner1();
			return this;
		}
	};

	this.updatePropertyDSlaveResultSetProvisioner2 = function(){
		this._inputDSlaveResultSetProvisioner2.setValue(this._DSlaveResultSetProvisioner2);
	};
	
	this.initDSlaveResultSetProvisioner2 = function(){
		this._labelDSlaveResultSetProvisioner2 = new sap.ui.commons.Label({text: " Central Data Provisioner for Slave Row Based Result Set 2"});
		this._labelDSlaveResultSetProvisioner2.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDSlaveResultSetProvisioner2);
		
		this._inputDSlaveResultSetProvisioner2 = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDSlaveResultSetProvisioner2);
		this._inputDSlaveResultSetProvisioner2.attachChange(this.propertyChangedDSlaveResultSetProvisioner2, this);
		this._inputDSlaveResultSetProvisioner2.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDSlaveResultSetProvisioner2();
	};

	this.propertyChangedDSlaveResultSetProvisioner2 = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DSlaveResultSetProvisioner2 = value;
		this.firePropertiesChanged(["DSlaveResultSetProvisioner2"]);
	};
	
	this.DSlaveResultSetProvisioner2 = function(s){
		if( s === undefined){
			return this._DSlaveResultSetProvisioner2;
		}else{
			this._DSlaveResultSetProvisioner2 = s;
			this.updatePropertyDSlaveResultSetProvisioner2();
			return this;
		}
	};

	this.updatePropertyDSlave2ContentCondition = function(){
		this._inputDSlave2ContentCondition.setValue(this._DSlave2ContentCondition);
	};
	
	this.initDSlave2ContentCondition = function(){
		this._labelDSlave2ContentCondition = new sap.ui.commons.Label({text: " Condition to Read Slave Result Set 2 based on Content 1"});
		this._labelDSlave2ContentCondition.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDSlave2ContentCondition);
		
		this._inputDSlave2ContentCondition = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDSlave2ContentCondition);
		this._inputDSlave2ContentCondition.attachChange(this.propertyChangedDSlave2ContentCondition, this);
		this._inputDSlave2ContentCondition.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDSlave2ContentCondition();
	};

	this.propertyChangedDSlave2ContentCondition = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DSlave2ContentCondition = value;
		this.firePropertiesChanged(["DSlave2ContentCondition"]);
	};
	
	this.DSlave2ContentCondition = function(s){
		if( s === undefined){
			return this._DSlave2ContentCondition;
		}else{
			this._DSlave2ContentCondition = s;
			this.updatePropertyDSlave2ContentCondition();
			return this;
		}
	};

	this.updatePropertyDSlave2StructureRowCondition = function(){
		this._inputDSlave2StructureRowCondition.setValue(this._DSlave2StructureRowCondition);
	};
	
	this.initDSlave2StructureRowCondition = function(){
		this._labelDSlave2StructureRowCondition = new sap.ui.commons.Label({text: " Condition to Read Slave Result Set 2 based on header Column Content"});
		this._labelDSlave2StructureRowCondition.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDSlave2StructureRowCondition);
		
		this._inputDSlave2StructureRowCondition = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDSlave2StructureRowCondition);
		this._inputDSlave2StructureRowCondition.attachChange(this.propertyChangedDSlave2StructureRowCondition, this);
		this._inputDSlave2StructureRowCondition.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDSlave2StructureRowCondition();
	};

	this.propertyChangedDSlave2StructureRowCondition = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DSlave2StructureRowCondition = value;
		this.firePropertiesChanged(["DSlave2StructureRowCondition"]);
	};
	
	this.DSlave2StructureRowCondition = function(s){
		if( s === undefined){
			return this._DSlave2StructureRowCondition;
		}else{
			this._DSlave2StructureRowCondition = s;
			this.updatePropertyDSlave2StructureRowCondition();
			return this;
		}
	};

	this.updatePropertyDSlave2StructureColumnCondition = function(){
		this._inputDSlave2StructureColumnCondition.setValue(this._DSlave2StructureColumnCondition);
	};
	
	this.initDSlave2StructureColumnCondition = function(){
		this._labelDSlave2StructureColumnCondition = new sap.ui.commons.Label({text: " Condition to Read Slave Result Set 2 based on header Row Content"});
		this._labelDSlave2StructureColumnCondition.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDSlave2StructureColumnCondition);
		
		this._inputDSlave2StructureColumnCondition = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDSlave2StructureColumnCondition);
		this._inputDSlave2StructureColumnCondition.attachChange(this.propertyChangedDSlave2StructureColumnCondition, this);
		this._inputDSlave2StructureColumnCondition.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDSlave2StructureColumnCondition();
	};

	this.propertyChangedDSlave2StructureColumnCondition = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DSlave2StructureColumnCondition = value;
		this.firePropertiesChanged(["DSlave2StructureColumnCondition"]);
	};
	
	this.DSlave2StructureColumnCondition = function(s){
		if( s === undefined){
			return this._DSlave2StructureColumnCondition;
		}else{
			this._DSlave2StructureColumnCondition = s;
			this.updatePropertyDSlave2StructureColumnCondition();
			return this;
		}
	};


});
