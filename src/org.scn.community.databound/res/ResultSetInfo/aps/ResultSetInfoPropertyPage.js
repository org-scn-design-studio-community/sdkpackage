
/**
 * Generated ZTL Class for Result Set Information 1.0
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
		that["fun_DIgnoreResults"].init();
		that["fun_DInformationEventActive"].init();
		
	};
	
	that.componentSelected = function(){
		that["fun_DCentralProvisioning"].update();
		that["fun_DIgnoreResults"].update();
		that["fun_DInformationEventActive"].update();
		
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

	that["fun_DIgnoreResults"] = {};
	
	that["fun_DIgnoreResults"].update = function(){
		that["fun_DIgnoreResults"]._input.setChecked(that["fun_DIgnoreResults"]._);
	};
	
	that["fun_DIgnoreResults"].init = function(){
		that["fun_DIgnoreResults"]._label = new sap.ui.commons.Label({text: " Ignore Results Rows and Columns"});
		that["fun_DIgnoreResults"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DIgnoreResults"]._label);
		
		that["fun_DIgnoreResults"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Ignore Results Rows and Columns"});
		that._content.addContent(that["fun_DIgnoreResults"]._input);
		that["fun_DIgnoreResults"]._input.attachChange(that["fun_DIgnoreResults"].propertyChanged, that);
		that["fun_DIgnoreResults"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DIgnoreResults"].update();
	};

	that["fun_DIgnoreResults"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_DIgnoreResults"]._ = checked;
		that.firePropertiesChanged(["DIgnoreResults"]);
	};
	
	that.DIgnoreResults = function(s){
		if( s === undefined){
			return that["fun_DIgnoreResults"]._;
		}else{
			that["fun_DIgnoreResults"]._ = s;
			that["fun_DIgnoreResults"].update();
			return that;
		}
	};

	that["fun_DInformationEventActive"] = {};
	
	that["fun_DInformationEventActive"].update = function(){
		that["fun_DInformationEventActive"]._input.setChecked(that["fun_DInformationEventActive"]._);
	};
	
	that["fun_DInformationEventActive"].init = function(){
		that["fun_DInformationEventActive"]._label = new sap.ui.commons.Label({text: " Information Event Active"});
		that["fun_DInformationEventActive"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DInformationEventActive"]._label);
		
		that["fun_DInformationEventActive"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Information Event Active"});
		that._content.addContent(that["fun_DInformationEventActive"]._input);
		that["fun_DInformationEventActive"]._input.attachChange(that["fun_DInformationEventActive"].propertyChanged, that);
		that["fun_DInformationEventActive"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DInformationEventActive"].update();
	};

	that["fun_DInformationEventActive"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_DInformationEventActive"]._ = checked;
		that.firePropertiesChanged(["DInformationEventActive"]);
	};
	
	that.DInformationEventActive = function(s){
		if( s === undefined){
			return that["fun_DInformationEventActive"]._;
		}else{
			that["fun_DInformationEventActive"]._ = s;
			that["fun_DInformationEventActive"].update();
			return that;
		}
	};


});
