
/**
 * Generated ZTL Class for Gauge (Speedometer)
 * 
 * DO NOT EDIT
 */
sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.basics.GaugePropertyPage",  function() {
	var that = this;

	that.init = function () {
		that._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		that._content.placeAt($("#content"));

		that["fun_endValue"].init();
		that["fun_firstColor"].init();
		that["fun_gradientColor"].init();
		that["fun_haveNumbers"].init();
		that["fun_indicatorValue"].init();
		that["fun_mainColor"].init();
		that["fun_needleColor"].init();
		that["fun_numOfBigTicks"].init();
		that["fun_numOfSmallTicks"].init();
		that["fun_secondColor"].init();
		that["fun_showValue"].init();
		that["fun_showedValue"].init();
		that["fun_startSecondColor"].init();
		that["fun_startThirdColor"].init();
		that["fun_startValue"].init();
		that["fun_thirdColor"].init();
		that["fun_title"].init();
		that["fun_ttColor"].init();
		
	};
	
	that.componentSelected = function(){
		that["fun_endValue"].update();
		that["fun_firstColor"].update();
		that["fun_gradientColor"].update();
		that["fun_haveNumbers"].update();
		that["fun_indicatorValue"].update();
		that["fun_mainColor"].update();
		that["fun_needleColor"].update();
		that["fun_numOfBigTicks"].update();
		that["fun_numOfSmallTicks"].update();
		that["fun_secondColor"].update();
		that["fun_showValue"].update();
		that["fun_showedValue"].update();
		that["fun_startSecondColor"].update();
		that["fun_startThirdColor"].update();
		that["fun_startValue"].update();
		that["fun_thirdColor"].update();
		that["fun_title"].update();
		that["fun_ttColor"].update();
		
	};
	
	
	that["fun_endValue"] = {};
	
	that["fun_endValue"].update = function(){
		that["fun_endValue"]._input.setValue(that["fun_endValue"]._);
	};
	
	that["fun_endValue"].init = function(){
		that["fun_endValue"]._label = new sap.ui.commons.Label({text: " End Value"});
		that["fun_endValue"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_endValue"]._label);
		
		that["fun_endValue"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_endValue"]._input);
		that["fun_endValue"]._input.attachChange(that["fun_endValue"].propertyChanged, that);
		that["fun_endValue"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_endValue"].update();
	};

	that["fun_endValue"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_endValue"]._ = value;
		that.firePropertiesChanged(["endValue"]);
	};
	
	that.endValue = function(s){
		if( s === undefined){
			return that["fun_endValue"]._;
		}else{
			that["fun_endValue"]._ = s;
			that["fun_endValue"].update();
			return that;
		}
	};

	that["fun_firstColor"] = {};
	
	that["fun_firstColor"].update = function(){
		that["fun_firstColor"]._input.setValue(that["fun_firstColor"]._);
	};
	
	that["fun_firstColor"].init = function(){
		that["fun_firstColor"]._label = new sap.ui.commons.Label({text: " First Color"});
		that["fun_firstColor"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_firstColor"]._label);
		
		that["fun_firstColor"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_firstColor"]._input);
		that["fun_firstColor"]._input.attachChange(that["fun_firstColor"].propertyChanged, that);
		that["fun_firstColor"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_firstColor"].update();
	};

	that["fun_firstColor"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_firstColor"]._ = value;
		that.firePropertiesChanged(["firstColor"]);
	};
	
	that.firstColor = function(s){
		if( s === undefined){
			return that["fun_firstColor"]._;
		}else{
			that["fun_firstColor"]._ = s;
			that["fun_firstColor"].update();
			return that;
		}
	};

	that["fun_gradientColor"] = {};
	
	that["fun_gradientColor"].update = function(){
		that["fun_gradientColor"]._input.setChecked(that["fun_gradientColor"]._);
	};
	
	that["fun_gradientColor"].init = function(){
		that["fun_gradientColor"]._label = new sap.ui.commons.Label({text: " Gradient Color"});
		that["fun_gradientColor"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_gradientColor"]._label);
		
		that["fun_gradientColor"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Gradient Color"});
		that._content.addContent(that["fun_gradientColor"]._input);
		that["fun_gradientColor"]._input.attachChange(that["fun_gradientColor"].propertyChanged, that);
		that["fun_gradientColor"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_gradientColor"].update();
	};

	that["fun_gradientColor"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_gradientColor"]._ = checked;
		that.firePropertiesChanged(["gradientColor"]);
	};
	
	that.gradientColor = function(s){
		if( s === undefined){
			return that["fun_gradientColor"]._;
		}else{
			that["fun_gradientColor"]._ = s;
			that["fun_gradientColor"].update();
			return that;
		}
	};

	that["fun_haveNumbers"] = {};
	
	that["fun_haveNumbers"].update = function(){
		that["fun_haveNumbers"]._input.setChecked(that["fun_haveNumbers"]._);
	};
	
	that["fun_haveNumbers"].init = function(){
		that["fun_haveNumbers"]._label = new sap.ui.commons.Label({text: " Show Number"});
		that["fun_haveNumbers"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_haveNumbers"]._label);
		
		that["fun_haveNumbers"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Show Number"});
		that._content.addContent(that["fun_haveNumbers"]._input);
		that["fun_haveNumbers"]._input.attachChange(that["fun_haveNumbers"].propertyChanged, that);
		that["fun_haveNumbers"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_haveNumbers"].update();
	};

	that["fun_haveNumbers"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_haveNumbers"]._ = checked;
		that.firePropertiesChanged(["haveNumbers"]);
	};
	
	that.haveNumbers = function(s){
		if( s === undefined){
			return that["fun_haveNumbers"]._;
		}else{
			that["fun_haveNumbers"]._ = s;
			that["fun_haveNumbers"].update();
			return that;
		}
	};

	that["fun_indicatorValue"] = {};
	
	that["fun_indicatorValue"].update = function(){
		that["fun_indicatorValue"]._input.setValue(that["fun_indicatorValue"]._);
	};
	
	that["fun_indicatorValue"].init = function(){
		that["fun_indicatorValue"]._label = new sap.ui.commons.Label({text: " Indicator Value"});
		that["fun_indicatorValue"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_indicatorValue"]._label);
		
		that["fun_indicatorValue"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_indicatorValue"]._input);
		that["fun_indicatorValue"]._input.attachChange(that["fun_indicatorValue"].propertyChanged, that);
		that["fun_indicatorValue"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_indicatorValue"].update();
	};

	that["fun_indicatorValue"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_indicatorValue"]._ = value;
		that.firePropertiesChanged(["indicatorValue"]);
	};
	
	that.indicatorValue = function(s){
		if( s === undefined){
			return that["fun_indicatorValue"]._;
		}else{
			that["fun_indicatorValue"]._ = s;
			that["fun_indicatorValue"].update();
			return that;
		}
	};

	that["fun_mainColor"] = {};
	
	that["fun_mainColor"].update = function(){
		that["fun_mainColor"]._input.setValue(that["fun_mainColor"]._);
	};
	
	that["fun_mainColor"].init = function(){
		that["fun_mainColor"]._label = new sap.ui.commons.Label({text: " Main Color"});
		that["fun_mainColor"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_mainColor"]._label);
		
		that["fun_mainColor"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_mainColor"]._input);
		that["fun_mainColor"]._input.attachChange(that["fun_mainColor"].propertyChanged, that);
		that["fun_mainColor"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_mainColor"].update();
	};

	that["fun_mainColor"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_mainColor"]._ = value;
		that.firePropertiesChanged(["mainColor"]);
	};
	
	that.mainColor = function(s){
		if( s === undefined){
			return that["fun_mainColor"]._;
		}else{
			that["fun_mainColor"]._ = s;
			that["fun_mainColor"].update();
			return that;
		}
	};

	that["fun_needleColor"] = {};
	
	that["fun_needleColor"].update = function(){
		that["fun_needleColor"]._input.setValue(that["fun_needleColor"]._);
	};
	
	that["fun_needleColor"].init = function(){
		that["fun_needleColor"]._label = new sap.ui.commons.Label({text: " Needle Color"});
		that["fun_needleColor"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_needleColor"]._label);
		
		that["fun_needleColor"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_needleColor"]._input);
		that["fun_needleColor"]._input.attachChange(that["fun_needleColor"].propertyChanged, that);
		that["fun_needleColor"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_needleColor"].update();
	};

	that["fun_needleColor"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_needleColor"]._ = value;
		that.firePropertiesChanged(["needleColor"]);
	};
	
	that.needleColor = function(s){
		if( s === undefined){
			return that["fun_needleColor"]._;
		}else{
			that["fun_needleColor"]._ = s;
			that["fun_needleColor"].update();
			return that;
		}
	};

	that["fun_numOfBigTicks"] = {};
	
	that["fun_numOfBigTicks"].update = function(){
		that["fun_numOfBigTicks"]._input.setValue(that["fun_numOfBigTicks"]._);
	};
	
	that["fun_numOfBigTicks"].init = function(){
		that["fun_numOfBigTicks"]._label = new sap.ui.commons.Label({text: " Number of Big Ticks"});
		that["fun_numOfBigTicks"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_numOfBigTicks"]._label);
		
		that["fun_numOfBigTicks"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_numOfBigTicks"]._input);
		that["fun_numOfBigTicks"]._input.attachChange(that["fun_numOfBigTicks"].propertyChanged, that);
		that["fun_numOfBigTicks"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_numOfBigTicks"].update();
	};

	that["fun_numOfBigTicks"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_numOfBigTicks"]._ = value;
		that.firePropertiesChanged(["numOfBigTicks"]);
	};
	
	that.numOfBigTicks = function(s){
		if( s === undefined){
			return that["fun_numOfBigTicks"]._;
		}else{
			that["fun_numOfBigTicks"]._ = s;
			that["fun_numOfBigTicks"].update();
			return that;
		}
	};

	that["fun_numOfSmallTicks"] = {};
	
	that["fun_numOfSmallTicks"].update = function(){
		that["fun_numOfSmallTicks"]._input.setValue(that["fun_numOfSmallTicks"]._);
	};
	
	that["fun_numOfSmallTicks"].init = function(){
		that["fun_numOfSmallTicks"]._label = new sap.ui.commons.Label({text: " Number of Small Ticks"});
		that["fun_numOfSmallTicks"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_numOfSmallTicks"]._label);
		
		that["fun_numOfSmallTicks"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_numOfSmallTicks"]._input);
		that["fun_numOfSmallTicks"]._input.attachChange(that["fun_numOfSmallTicks"].propertyChanged, that);
		that["fun_numOfSmallTicks"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_numOfSmallTicks"].update();
	};

	that["fun_numOfSmallTicks"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_numOfSmallTicks"]._ = value;
		that.firePropertiesChanged(["numOfSmallTicks"]);
	};
	
	that.numOfSmallTicks = function(s){
		if( s === undefined){
			return that["fun_numOfSmallTicks"]._;
		}else{
			that["fun_numOfSmallTicks"]._ = s;
			that["fun_numOfSmallTicks"].update();
			return that;
		}
	};

	that["fun_secondColor"] = {};
	
	that["fun_secondColor"].update = function(){
		that["fun_secondColor"]._input.setValue(that["fun_secondColor"]._);
	};
	
	that["fun_secondColor"].init = function(){
		that["fun_secondColor"]._label = new sap.ui.commons.Label({text: " Second Color"});
		that["fun_secondColor"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_secondColor"]._label);
		
		that["fun_secondColor"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_secondColor"]._input);
		that["fun_secondColor"]._input.attachChange(that["fun_secondColor"].propertyChanged, that);
		that["fun_secondColor"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_secondColor"].update();
	};

	that["fun_secondColor"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_secondColor"]._ = value;
		that.firePropertiesChanged(["secondColor"]);
	};
	
	that.secondColor = function(s){
		if( s === undefined){
			return that["fun_secondColor"]._;
		}else{
			that["fun_secondColor"]._ = s;
			that["fun_secondColor"].update();
			return that;
		}
	};

	that["fun_showValue"] = {};
	
	that["fun_showValue"].update = function(){
		that["fun_showValue"]._input.setChecked(that["fun_showValue"]._);
	};
	
	that["fun_showValue"].init = function(){
		that["fun_showValue"]._label = new sap.ui.commons.Label({text: " Show Value"});
		that["fun_showValue"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_showValue"]._label);
		
		that["fun_showValue"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Show Value"});
		that._content.addContent(that["fun_showValue"]._input);
		that["fun_showValue"]._input.attachChange(that["fun_showValue"].propertyChanged, that);
		that["fun_showValue"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_showValue"].update();
	};

	that["fun_showValue"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_showValue"]._ = checked;
		that.firePropertiesChanged(["showValue"]);
	};
	
	that.showValue = function(s){
		if( s === undefined){
			return that["fun_showValue"]._;
		}else{
			that["fun_showValue"]._ = s;
			that["fun_showValue"].update();
			return that;
		}
	};

	that["fun_showedValue"] = {};
	
	that["fun_showedValue"].update = function(){
		that["fun_showedValue"]._input.setValue(that["fun_showedValue"]._);
	};
	
	that["fun_showedValue"].init = function(){
		that["fun_showedValue"]._label = new sap.ui.commons.Label({text: " Showed Value"});
		that["fun_showedValue"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_showedValue"]._label);
		
		that["fun_showedValue"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_showedValue"]._input);
		that["fun_showedValue"]._input.attachChange(that["fun_showedValue"].propertyChanged, that);
		that["fun_showedValue"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_showedValue"].update();
	};

	that["fun_showedValue"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_showedValue"]._ = value;
		that.firePropertiesChanged(["showedValue"]);
	};
	
	that.showedValue = function(s){
		if( s === undefined){
			return that["fun_showedValue"]._;
		}else{
			that["fun_showedValue"]._ = s;
			that["fun_showedValue"].update();
			return that;
		}
	};

	that["fun_startSecondColor"] = {};
	
	that["fun_startSecondColor"].update = function(){
		that["fun_startSecondColor"]._input.setValue(that["fun_startSecondColor"]._);
	};
	
	that["fun_startSecondColor"].init = function(){
		that["fun_startSecondColor"]._label = new sap.ui.commons.Label({text: " Start of Second Color"});
		that["fun_startSecondColor"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_startSecondColor"]._label);
		
		that["fun_startSecondColor"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_startSecondColor"]._input);
		that["fun_startSecondColor"]._input.attachChange(that["fun_startSecondColor"].propertyChanged, that);
		that["fun_startSecondColor"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_startSecondColor"].update();
	};

	that["fun_startSecondColor"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_startSecondColor"]._ = value;
		that.firePropertiesChanged(["startSecondColor"]);
	};
	
	that.startSecondColor = function(s){
		if( s === undefined){
			return that["fun_startSecondColor"]._;
		}else{
			that["fun_startSecondColor"]._ = s;
			that["fun_startSecondColor"].update();
			return that;
		}
	};

	that["fun_startThirdColor"] = {};
	
	that["fun_startThirdColor"].update = function(){
		that["fun_startThirdColor"]._input.setValue(that["fun_startThirdColor"]._);
	};
	
	that["fun_startThirdColor"].init = function(){
		that["fun_startThirdColor"]._label = new sap.ui.commons.Label({text: " Start of Third Color"});
		that["fun_startThirdColor"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_startThirdColor"]._label);
		
		that["fun_startThirdColor"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_startThirdColor"]._input);
		that["fun_startThirdColor"]._input.attachChange(that["fun_startThirdColor"].propertyChanged, that);
		that["fun_startThirdColor"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_startThirdColor"].update();
	};

	that["fun_startThirdColor"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_startThirdColor"]._ = value;
		that.firePropertiesChanged(["startThirdColor"]);
	};
	
	that.startThirdColor = function(s){
		if( s === undefined){
			return that["fun_startThirdColor"]._;
		}else{
			that["fun_startThirdColor"]._ = s;
			that["fun_startThirdColor"].update();
			return that;
		}
	};

	that["fun_startValue"] = {};
	
	that["fun_startValue"].update = function(){
		that["fun_startValue"]._input.setValue(that["fun_startValue"]._);
	};
	
	that["fun_startValue"].init = function(){
		that["fun_startValue"]._label = new sap.ui.commons.Label({text: " Start Value"});
		that["fun_startValue"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_startValue"]._label);
		
		that["fun_startValue"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_startValue"]._input);
		that["fun_startValue"]._input.attachChange(that["fun_startValue"].propertyChanged, that);
		that["fun_startValue"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_startValue"].update();
	};

	that["fun_startValue"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_startValue"]._ = value;
		that.firePropertiesChanged(["startValue"]);
	};
	
	that.startValue = function(s){
		if( s === undefined){
			return that["fun_startValue"]._;
		}else{
			that["fun_startValue"]._ = s;
			that["fun_startValue"].update();
			return that;
		}
	};

	that["fun_thirdColor"] = {};
	
	that["fun_thirdColor"].update = function(){
		that["fun_thirdColor"]._input.setValue(that["fun_thirdColor"]._);
	};
	
	that["fun_thirdColor"].init = function(){
		that["fun_thirdColor"]._label = new sap.ui.commons.Label({text: " Third Color"});
		that["fun_thirdColor"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_thirdColor"]._label);
		
		that["fun_thirdColor"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_thirdColor"]._input);
		that["fun_thirdColor"]._input.attachChange(that["fun_thirdColor"].propertyChanged, that);
		that["fun_thirdColor"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_thirdColor"].update();
	};

	that["fun_thirdColor"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_thirdColor"]._ = value;
		that.firePropertiesChanged(["thirdColor"]);
	};
	
	that.thirdColor = function(s){
		if( s === undefined){
			return that["fun_thirdColor"]._;
		}else{
			that["fun_thirdColor"]._ = s;
			that["fun_thirdColor"].update();
			return that;
		}
	};

	that["fun_title"] = {};
	
	that["fun_title"].update = function(){
		that["fun_title"]._input.setValue(that["fun_title"]._);
	};
	
	that["fun_title"].init = function(){
		that["fun_title"]._label = new sap.ui.commons.Label({text: " Title"});
		that["fun_title"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_title"]._label);
		
		that["fun_title"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_title"]._input);
		that["fun_title"]._input.attachChange(that["fun_title"].propertyChanged, that);
		that["fun_title"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_title"].update();
	};

	that["fun_title"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_title"]._ = value;
		that.firePropertiesChanged(["title"]);
	};
	
	that.title = function(s){
		if( s === undefined){
			return that["fun_title"]._;
		}else{
			that["fun_title"]._ = s;
			that["fun_title"].update();
			return that;
		}
	};

	that["fun_ttColor"] = {};
	
	that["fun_ttColor"].update = function(){
		that["fun_ttColor"]._input.setValue(that["fun_ttColor"]._);
	};
	
	that["fun_ttColor"].init = function(){
		that["fun_ttColor"]._label = new sap.ui.commons.Label({text: " Text and Ticks Color"});
		that["fun_ttColor"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_ttColor"]._label);
		
		that["fun_ttColor"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_ttColor"]._input);
		that["fun_ttColor"]._input.attachChange(that["fun_ttColor"].propertyChanged, that);
		that["fun_ttColor"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_ttColor"].update();
	};

	that["fun_ttColor"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_ttColor"]._ = value;
		that.firePropertiesChanged(["ttColor"]);
	};
	
	that.ttColor = function(s){
		if( s === undefined){
			return that["fun_ttColor"]._;
		}else{
			that["fun_ttColor"]._ = s;
			that["fun_ttColor"].update();
			return that;
		}
	};


});
