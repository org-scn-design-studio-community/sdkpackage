
/**
 * Generated ZTL Class for Result Set Mixer (Test Phase)
 * 
 * DO NOT EDIT
 */
sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.ResultSetMixerPropertyPage",  function() {
	var that = this;

	that.init = function () {
		that._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		that._content.placeAt($("#content"));

		that["fun_DMasterProvisioner"].init();
		that["fun_DMasterGeometry"].init();
		that["fun_DSlaveProvisioner"].init();
		that["fun_DSlaveColumnIndex"].init();
		that["fun_DCollectMultipleMatches"].init();
		that["fun_DSlaveContentCondition"].init();
		that["fun_DSlaveRowCondition"].init();
		that["fun_DSlaveColumnCondition"].init();
		
	};
	
	that.componentSelected = function(){
		that["fun_DMasterProvisioner"].update();
		that["fun_DMasterGeometry"].update();
		that["fun_DSlaveProvisioner"].update();
		that["fun_DSlaveColumnIndex"].update();
		that["fun_DCollectMultipleMatches"].update();
		that["fun_DSlaveContentCondition"].update();
		that["fun_DSlaveRowCondition"].update();
		that["fun_DSlaveColumnCondition"].update();
		
	};
	
	


	that["fun_DMasterProvisioner"] = {};
	
	that["fun_DMasterProvisioner"].update = function(){
		that["fun_DMasterProvisioner"]._input.setValue(that["fun_DMasterProvisioner"]._);
	};
	
	that["fun_DMasterProvisioner"].init = function(){
		that["fun_DMasterProvisioner"]._label = new sap.ui.commons.Label({text: " Master Central Data Provisioner"});
		that["fun_DMasterProvisioner"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DMasterProvisioner"]._label);
		
		that["fun_DMasterProvisioner"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DMasterProvisioner"]._input);
		that["fun_DMasterProvisioner"]._input.attachChange(that["fun_DMasterProvisioner"].propertyChanged, that);
		that["fun_DMasterProvisioner"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DMasterProvisioner"].update();
	};

	that["fun_DMasterProvisioner"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DMasterProvisioner"]._ = value;
		that.firePropertiesChanged(["DMasterProvisioner"]);
	};
	
	that.DMasterProvisioner = function(s){
		if( s === undefined){
			return that["fun_DMasterProvisioner"]._;
		}else{
			that["fun_DMasterProvisioner"]._ = s;
			that["fun_DMasterProvisioner"].update();
			return that;
		}
	};

	that["fun_DMasterGeometry"] = {};
	
	that["fun_DMasterGeometry"].update = function(){
		that["fun_DMasterGeometry"]._input.setSelectedKey(that["fun_DMasterGeometry"]._);
	};
	
	that["fun_DMasterGeometry"].init = function(){
		that["fun_DMasterGeometry"]._label = new sap.ui.commons.Label({text: " Geometry of the Master Result Set"});
		that["fun_DMasterGeometry"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DMasterGeometry"]._label);
		
		that["fun_DMasterGeometry"]._input = new sap.ui.commons.ComboBox({width: "300px"});
		that["fun_DMasterGeometry"]._input.addItem(new sap.ui.core.ListItem({key:"Structure", text:"Structure"}));
		that["fun_DMasterGeometry"]._input.addItem(new sap.ui.core.ListItem({key:"Rows", text:"Rows"}));
		
		that._content.addContent(that["fun_DMasterGeometry"]._input);
		that["fun_DMasterGeometry"]._input.attachChange(that["fun_DMasterGeometry"].propertyChanged, that);
		that["fun_DMasterGeometry"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DMasterGeometry"].update();
	};

	that["fun_DMasterGeometry"].propertyChanged = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		that["fun_DMasterGeometry"]._ = newValue;
		that.firePropertiesChanged(["DMasterGeometry"]);
	};
	
	that.DMasterGeometry = function(s){
		if( s === undefined){
			return that["fun_DMasterGeometry"]._;
		}else{
			that["fun_DMasterGeometry"]._ = s;
			that["fun_DMasterGeometry"].update();
			return that;
		}
	};

	that["fun_DSlaveProvisioner"] = {};
	
	that["fun_DSlaveProvisioner"].update = function(){
		that["fun_DSlaveProvisioner"]._input.setValue(that["fun_DSlaveProvisioner"]._);
	};
	
	that["fun_DSlaveProvisioner"].init = function(){
		that["fun_DSlaveProvisioner"]._label = new sap.ui.commons.Label({text: " Slave Central Data Provisioner"});
		that["fun_DSlaveProvisioner"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DSlaveProvisioner"]._label);
		
		that["fun_DSlaveProvisioner"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DSlaveProvisioner"]._input);
		that["fun_DSlaveProvisioner"]._input.attachChange(that["fun_DSlaveProvisioner"].propertyChanged, that);
		that["fun_DSlaveProvisioner"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DSlaveProvisioner"].update();
	};

	that["fun_DSlaveProvisioner"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DSlaveProvisioner"]._ = value;
		that.firePropertiesChanged(["DSlaveProvisioner"]);
	};
	
	that.DSlaveProvisioner = function(s){
		if( s === undefined){
			return that["fun_DSlaveProvisioner"]._;
		}else{
			that["fun_DSlaveProvisioner"]._ = s;
			that["fun_DSlaveProvisioner"].update();
			return that;
		}
	};

	that["fun_DSlaveColumnIndex"] = {};
	
	that["fun_DSlaveColumnIndex"].update = function(){
		that["fun_DSlaveColumnIndex"]._input.setValue(that["fun_DSlaveColumnIndex"]._);
	};
	
	that["fun_DSlaveColumnIndex"].init = function(){
		that["fun_DSlaveColumnIndex"]._label = new sap.ui.commons.Label({text: " Column Index for the Selection from Slave Result Set"});
		that["fun_DSlaveColumnIndex"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DSlaveColumnIndex"]._label);
		
		that["fun_DSlaveColumnIndex"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DSlaveColumnIndex"]._input);
		that["fun_DSlaveColumnIndex"]._input.attachChange(that["fun_DSlaveColumnIndex"].propertyChanged, that);
		that["fun_DSlaveColumnIndex"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DSlaveColumnIndex"].update();
	};

	that["fun_DSlaveColumnIndex"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DSlaveColumnIndex"]._ = value;
		that.firePropertiesChanged(["DSlaveColumnIndex"]);
	};
	
	that.DSlaveColumnIndex = function(s){
		if( s === undefined){
			return that["fun_DSlaveColumnIndex"]._;
		}else{
			that["fun_DSlaveColumnIndex"]._ = s;
			that["fun_DSlaveColumnIndex"].update();
			return that;
		}
	};

	that["fun_DCollectMultipleMatches"] = {};
	
	that["fun_DCollectMultipleMatches"].update = function(){
		that["fun_DCollectMultipleMatches"]._input.setSelectedKey(that["fun_DCollectMultipleMatches"]._);
	};
	
	that["fun_DCollectMultipleMatches"].init = function(){
		that["fun_DCollectMultipleMatches"]._label = new sap.ui.commons.Label({text: " Collect Multiple Matches"});
		that["fun_DCollectMultipleMatches"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DCollectMultipleMatches"]._label);
		
		that["fun_DCollectMultipleMatches"]._input = new sap.ui.commons.ComboBox({width: "300px"});
		that["fun_DCollectMultipleMatches"]._input.addItem(new sap.ui.core.ListItem({key:"Collect", text:"Collect"}));
		that["fun_DCollectMultipleMatches"]._input.addItem(new sap.ui.core.ListItem({key:"UseLast", text:"UseLast"}));
		
		that._content.addContent(that["fun_DCollectMultipleMatches"]._input);
		that["fun_DCollectMultipleMatches"]._input.attachChange(that["fun_DCollectMultipleMatches"].propertyChanged, that);
		that["fun_DCollectMultipleMatches"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DCollectMultipleMatches"].update();
	};

	that["fun_DCollectMultipleMatches"].propertyChanged = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		that["fun_DCollectMultipleMatches"]._ = newValue;
		that.firePropertiesChanged(["DCollectMultipleMatches"]);
	};
	
	that.DCollectMultipleMatches = function(s){
		if( s === undefined){
			return that["fun_DCollectMultipleMatches"]._;
		}else{
			that["fun_DCollectMultipleMatches"]._ = s;
			that["fun_DCollectMultipleMatches"].update();
			return that;
		}
	};

	that["fun_DSlaveContentCondition"] = {};
	
	that["fun_DSlaveContentCondition"].update = function(){
		that["fun_DSlaveContentCondition"]._input.setValue(that["fun_DSlaveContentCondition"]._);
	};
	
	that["fun_DSlaveContentCondition"].init = function(){
		that["fun_DSlaveContentCondition"]._label = new sap.ui.commons.Label({text: " Content Condition to Read Slave Result Set"});
		that["fun_DSlaveContentCondition"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DSlaveContentCondition"]._label);
		
		that["fun_DSlaveContentCondition"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DSlaveContentCondition"]._input);
		that["fun_DSlaveContentCondition"]._input.attachChange(that["fun_DSlaveContentCondition"].propertyChanged, that);
		that["fun_DSlaveContentCondition"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DSlaveContentCondition"].update();
	};

	that["fun_DSlaveContentCondition"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DSlaveContentCondition"]._ = value;
		that.firePropertiesChanged(["DSlaveContentCondition"]);
	};
	
	that.DSlaveContentCondition = function(s){
		if( s === undefined){
			return that["fun_DSlaveContentCondition"]._;
		}else{
			that["fun_DSlaveContentCondition"]._ = s;
			that["fun_DSlaveContentCondition"].update();
			return that;
		}
	};

	that["fun_DSlaveRowCondition"] = {};
	
	that["fun_DSlaveRowCondition"].update = function(){
		that["fun_DSlaveRowCondition"]._input.setValue(that["fun_DSlaveRowCondition"]._);
	};
	
	that["fun_DSlaveRowCondition"].init = function(){
		that["fun_DSlaveRowCondition"]._label = new sap.ui.commons.Label({text: " Row Condition to Read Slave Result Set"});
		that["fun_DSlaveRowCondition"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DSlaveRowCondition"]._label);
		
		that["fun_DSlaveRowCondition"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DSlaveRowCondition"]._input);
		that["fun_DSlaveRowCondition"]._input.attachChange(that["fun_DSlaveRowCondition"].propertyChanged, that);
		that["fun_DSlaveRowCondition"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DSlaveRowCondition"].update();
	};

	that["fun_DSlaveRowCondition"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DSlaveRowCondition"]._ = value;
		that.firePropertiesChanged(["DSlaveRowCondition"]);
	};
	
	that.DSlaveRowCondition = function(s){
		if( s === undefined){
			return that["fun_DSlaveRowCondition"]._;
		}else{
			that["fun_DSlaveRowCondition"]._ = s;
			that["fun_DSlaveRowCondition"].update();
			return that;
		}
	};

	that["fun_DSlaveColumnCondition"] = {};
	
	that["fun_DSlaveColumnCondition"].update = function(){
		that["fun_DSlaveColumnCondition"]._input.setValue(that["fun_DSlaveColumnCondition"]._);
	};
	
	that["fun_DSlaveColumnCondition"].init = function(){
		that["fun_DSlaveColumnCondition"]._label = new sap.ui.commons.Label({text: " Column Condition to Read Slave Result Set"});
		that["fun_DSlaveColumnCondition"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DSlaveColumnCondition"]._label);
		
		that["fun_DSlaveColumnCondition"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DSlaveColumnCondition"]._input);
		that["fun_DSlaveColumnCondition"]._input.attachChange(that["fun_DSlaveColumnCondition"].propertyChanged, that);
		that["fun_DSlaveColumnCondition"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DSlaveColumnCondition"].update();
	};

	that["fun_DSlaveColumnCondition"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DSlaveColumnCondition"]._ = value;
		that.firePropertiesChanged(["DSlaveColumnCondition"]);
	};
	
	that.DSlaveColumnCondition = function(s){
		if( s === undefined){
			return that["fun_DSlaveColumnCondition"]._;
		}else{
			that["fun_DSlaveColumnCondition"]._ = s;
			that["fun_DSlaveColumnCondition"].update();
			return that;
		}
	};


});
