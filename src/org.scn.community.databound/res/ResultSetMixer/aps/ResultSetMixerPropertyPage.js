
/**
 * Generated ZTL Class for Result Set Mixer (Test Phase)
 * 
 * DO NOT EDIT
 */
sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.ResultSetMixerPropertyPage",  function() {
	var that = this;

	this.init = function () {
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this._content.placeAt($("#content"));

		this.initDMasterProvisioner();
		this.initDMasterGeometry();
		this.initDSlaveProvisioner();
		this.initDSlaveColumnIndex();
		this.initDCollectMultipleMatches();
		this.initDSlaveContentCondition();
		this.initDSlaveRowCondition();
		this.initDSlaveColumnCondition();
		
	};
	
	this.componentSelected = function(){
		this.updateDMasterProvisioner();
		this.updateDMasterGeometry();
		this.updateDSlaveProvisioner();
		this.updateDSlaveColumnIndex();
		this.updateDCollectMultipleMatches();
		this.updateDSlaveContentCondition();
		this.updateDSlaveRowCondition();
		this.updateDSlaveColumnCondition();
		
	};
	
	
	this.updatePropertyDMasterProvisioner = function(){
		this._inputDMasterProvisioner.setValue(this._DMasterProvisioner);
	};
	
	this.initDMasterProvisioner = function(){
		this._labelDMasterProvisioner = new sap.ui.commons.Label({text: " Master Central Data Provisioner"});
		this._labelDMasterProvisioner.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDMasterProvisioner);
		
		this._inputDMasterProvisioner = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDMasterProvisioner);
		this._inputDMasterProvisioner.attachChange(this.propertyChangedDMasterProvisioner, this);
		this._inputDMasterProvisioner.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDMasterProvisioner();
	};

	this.propertyChangedDMasterProvisioner = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DMasterProvisioner = value;
		this.firePropertiesChanged(["DMasterProvisioner"]);
	};
	
	this.DMasterProvisioner = function(s){
		if( s === undefined){
			return this._DMasterProvisioner;
		}else{
			this._DMasterProvisioner = s;
			this.updatePropertyDMasterProvisioner();
			return this;
		}
	};

	this.updatePropertyDMasterGeometry = function(){
		this._inputDMasterGeometry.setSelectedKey(this._DMasterGeometry);
	};
	
	this.initDMasterGeometry = function(){
		this._labelDMasterGeometry = new sap.ui.commons.Label({text: " Geometry of the Master Result Set"});
		this._labelDMasterGeometry.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDMasterGeometry);
		
		this._inputDMasterGeometry = new sap.ui.commons.ComboBox({width: "300px"});
		this._inputDMasterGeometry.addItem(new sap.ui.core.ListItem({key:"Structure", text:"Structure"}));
		this._inputDMasterGeometry.addItem(new sap.ui.core.ListItem({key:"Rows", text:"Rows"}));
		
		this._content.addContent(this._inputDMasterGeometry);
		this._inputDMasterGeometry.attachChange(this.propertyChangedDMasterGeometry, this);
		this._inputDMasterGeometry.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDMasterGeometry();
	};

	this.propertyChangedDMasterGeometry = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		this._DMasterGeometry = newValue;
		this.firePropertiesChanged(["DMasterGeometry"]);
	};
	
	this.DMasterGeometry = function(s){
		if( s === undefined){
			return this._DMasterGeometry;
		}else{
			this._DMasterGeometry = s;
			this.updatePropertyDMasterGeometry();
			return this;
		}
	};

	this.updatePropertyDSlaveProvisioner = function(){
		this._inputDSlaveProvisioner.setValue(this._DSlaveProvisioner);
	};
	
	this.initDSlaveProvisioner = function(){
		this._labelDSlaveProvisioner = new sap.ui.commons.Label({text: " Slave Central Data Provisioner"});
		this._labelDSlaveProvisioner.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDSlaveProvisioner);
		
		this._inputDSlaveProvisioner = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDSlaveProvisioner);
		this._inputDSlaveProvisioner.attachChange(this.propertyChangedDSlaveProvisioner, this);
		this._inputDSlaveProvisioner.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDSlaveProvisioner();
	};

	this.propertyChangedDSlaveProvisioner = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DSlaveProvisioner = value;
		this.firePropertiesChanged(["DSlaveProvisioner"]);
	};
	
	this.DSlaveProvisioner = function(s){
		if( s === undefined){
			return this._DSlaveProvisioner;
		}else{
			this._DSlaveProvisioner = s;
			this.updatePropertyDSlaveProvisioner();
			return this;
		}
	};

	this.updatePropertyDSlaveColumnIndex = function(){
		this._inputDSlaveColumnIndex.setValue(this._DSlaveColumnIndex);
	};
	
	this.initDSlaveColumnIndex = function(){
		this._labelDSlaveColumnIndex = new sap.ui.commons.Label({text: " Column Index for the Selection from Slave Result Set"});
		this._labelDSlaveColumnIndex.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDSlaveColumnIndex);
		
		this._inputDSlaveColumnIndex = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDSlaveColumnIndex);
		this._inputDSlaveColumnIndex.attachChange(this.propertyChangedDSlaveColumnIndex, this);
		this._inputDSlaveColumnIndex.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDSlaveColumnIndex();
	};

	this.propertyChangedDSlaveColumnIndex = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DSlaveColumnIndex = value;
		this.firePropertiesChanged(["DSlaveColumnIndex"]);
	};
	
	this.DSlaveColumnIndex = function(s){
		if( s === undefined){
			return this._DSlaveColumnIndex;
		}else{
			this._DSlaveColumnIndex = s;
			this.updatePropertyDSlaveColumnIndex();
			return this;
		}
	};

	this.updatePropertyDCollectMultipleMatches = function(){
		this._inputDCollectMultipleMatches.setSelectedKey(this._DCollectMultipleMatches);
	};
	
	this.initDCollectMultipleMatches = function(){
		this._labelDCollectMultipleMatches = new sap.ui.commons.Label({text: " Collect Multiple Matches"});
		this._labelDCollectMultipleMatches.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDCollectMultipleMatches);
		
		this._inputDCollectMultipleMatches = new sap.ui.commons.ComboBox({width: "300px"});
		this._inputDCollectMultipleMatches.addItem(new sap.ui.core.ListItem({key:"Collect", text:"Collect"}));
		this._inputDCollectMultipleMatches.addItem(new sap.ui.core.ListItem({key:"UseLast", text:"UseLast"}));
		
		this._content.addContent(this._inputDCollectMultipleMatches);
		this._inputDCollectMultipleMatches.attachChange(this.propertyChangedDCollectMultipleMatches, this);
		this._inputDCollectMultipleMatches.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDCollectMultipleMatches();
	};

	this.propertyChangedDCollectMultipleMatches = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		this._DCollectMultipleMatches = newValue;
		this.firePropertiesChanged(["DCollectMultipleMatches"]);
	};
	
	this.DCollectMultipleMatches = function(s){
		if( s === undefined){
			return this._DCollectMultipleMatches;
		}else{
			this._DCollectMultipleMatches = s;
			this.updatePropertyDCollectMultipleMatches();
			return this;
		}
	};

	this.updatePropertyDSlaveContentCondition = function(){
		this._inputDSlaveContentCondition.setValue(this._DSlaveContentCondition);
	};
	
	this.initDSlaveContentCondition = function(){
		this._labelDSlaveContentCondition = new sap.ui.commons.Label({text: " Condition to Read Slave Result Set based on Content"});
		this._labelDSlaveContentCondition.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDSlaveContentCondition);
		
		this._inputDSlaveContentCondition = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDSlaveContentCondition);
		this._inputDSlaveContentCondition.attachChange(this.propertyChangedDSlaveContentCondition, this);
		this._inputDSlaveContentCondition.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDSlaveContentCondition();
	};

	this.propertyChangedDSlaveContentCondition = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DSlaveContentCondition = value;
		this.firePropertiesChanged(["DSlaveContentCondition"]);
	};
	
	this.DSlaveContentCondition = function(s){
		if( s === undefined){
			return this._DSlaveContentCondition;
		}else{
			this._DSlaveContentCondition = s;
			this.updatePropertyDSlaveContentCondition();
			return this;
		}
	};

	this.updatePropertyDSlaveRowCondition = function(){
		this._inputDSlaveRowCondition.setValue(this._DSlaveRowCondition);
	};
	
	this.initDSlaveRowCondition = function(){
		this._labelDSlaveRowCondition = new sap.ui.commons.Label({text: " Condition to Read Slave Result Set based on header Row Content"});
		this._labelDSlaveRowCondition.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDSlaveRowCondition);
		
		this._inputDSlaveRowCondition = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDSlaveRowCondition);
		this._inputDSlaveRowCondition.attachChange(this.propertyChangedDSlaveRowCondition, this);
		this._inputDSlaveRowCondition.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDSlaveRowCondition();
	};

	this.propertyChangedDSlaveRowCondition = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DSlaveRowCondition = value;
		this.firePropertiesChanged(["DSlaveRowCondition"]);
	};
	
	this.DSlaveRowCondition = function(s){
		if( s === undefined){
			return this._DSlaveRowCondition;
		}else{
			this._DSlaveRowCondition = s;
			this.updatePropertyDSlaveRowCondition();
			return this;
		}
	};

	this.updatePropertyDSlaveColumnCondition = function(){
		this._inputDSlaveColumnCondition.setValue(this._DSlaveColumnCondition);
	};
	
	this.initDSlaveColumnCondition = function(){
		this._labelDSlaveColumnCondition = new sap.ui.commons.Label({text: " Condition to Read Slave Result Set based on header Column Content"});
		this._labelDSlaveColumnCondition.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDSlaveColumnCondition);
		
		this._inputDSlaveColumnCondition = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDSlaveColumnCondition);
		this._inputDSlaveColumnCondition.attachChange(this.propertyChangedDSlaveColumnCondition, this);
		this._inputDSlaveColumnCondition.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDSlaveColumnCondition();
	};

	this.propertyChangedDSlaveColumnCondition = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DSlaveColumnCondition = value;
		this.firePropertiesChanged(["DSlaveColumnCondition"]);
	};
	
	this.DSlaveColumnCondition = function(s){
		if( s === undefined){
			return this._DSlaveColumnCondition;
		}else{
			this._DSlaveColumnCondition = s;
			this.updatePropertyDSlaveColumnCondition();
			return this;
		}
	};


});
