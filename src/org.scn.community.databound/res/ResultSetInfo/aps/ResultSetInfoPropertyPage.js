
/**
 * Generated ZTL Class for Result Set Information (Test Phase)
 * 
 * DO NOT EDIT
 */
sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.ResultSetInfoPropertyPage",  function() {
	var that = this;

	this.init = function () {
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this._content.placeAt($("#content"));

		this.initDCentralProvisioning();
		
	};
	
	this.componentSelected = function(){
		this.updateDCentralProvisioning();
		
	};
	
	
	this.updatePropertyDCentralProvisioning = function(){
		this._inputDCentralProvisioning.setChecked(this._DCentralProvisioning);
	};
	
	this.initDCentralProvisioning = function(){
		this._labelDCentralProvisioning = new sap.ui.commons.Label({text: " Central Data Provisioning"});
		this._labelDCentralProvisioning.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDCentralProvisioning);
		
		this._inputDCentralProvisioning = new sap.ui.commons.CheckBox({width: "300px", text: "Central Data Provisioning"});
		this._content.addContent(this._inputDCentralProvisioning);
		this._inputDCentralProvisioning.attachChange(this.propertyChangedDCentralProvisioning, this);
		this._inputDCentralProvisioning.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDCentralProvisioning();
	};

	this.propertyChangedDCentralProvisioning = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		this._DCentralProvisioning = checked;
		this.firePropertiesChanged(["DCentralProvisioning"]);
	};
	
	this.DCentralProvisioning = function(s){
		if( s === undefined){
			return this._DCentralProvisioning;
		}else{
			this._DCentralProvisioning = s;
			this.updatePropertyDCentralProvisioning();
			return this;
		}
	};


});
