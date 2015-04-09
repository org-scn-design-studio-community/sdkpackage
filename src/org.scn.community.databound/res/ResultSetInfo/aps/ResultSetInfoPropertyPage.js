
/**
 * Generated ZTL Class for Result Set Information (Test Phase)
 * 
 * DO NOT EDIT
 */
sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.ResultSetInfoPropertyPage",  function() {
	var that = this;

	that.init = function () {
		that._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		that._content.placeAt($("#content"));

		that["fun_DCentralProvisioning"].init();
		
	};
	
	that.componentSelected = function(){
		that["fun_DCentralProvisioning"].update();
		
	};
	
	
	that["fun_DCentralProvisioning"] = {};
	
	that["fun_DCentralProvisioning"].update = function(){
		that["fun_DCentralProvisioning"]._input.setChecked(that["fun_DCentralProvisioning"]._);
	};
	
	that["fun_DCentralProvisioning"].init = function(){
		that["fun_DCentralProvisioning"]._label = new sap.ui.commons.Label({text: " Central Data Provisioning"});
		that["fun_DCentralProvisioning"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DCentralProvisioning"]._label);
		
		that["fun_DCentralProvisioning"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Central Data Provisioning"});
		that._content.addContent(that["fun_DCentralProvisioning"]._input);
		that["fun_DCentralProvisioning"]._input.attachChange(that["fun_DCentralProvisioning"].propertyChanged, that);
		that["fun_DCentralProvisioning"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DCentralProvisioning"].update();
	};

	that["fun_DCentralProvisioning"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_DCentralProvisioning"]._ = checked;
		that.firePropertiesChanged(["DCentralProvisioning"]);
	};
	
	that.DCentralProvisioning = function(s){
		if( s === undefined){
			return that["fun_DCentralProvisioning"]._;
		}else{
			that["fun_DCentralProvisioning"]._ = s;
			that["fun_DCentralProvisioning"].update();
			return that;
		}
	};


});
