
/**
 * Generated ZTL Class for Gauge (Speedometer)
 * 
 * DO NOT EDIT
 */
sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.basics.GaugePropertyPage",  function() {
	var that = this;

	this.init = function () {
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this._content.placeAt($("#content"));

		this.inithaveNumbers();
		this.initnumOfBigTicks();
		this.initnumOfSmallTicks();
		this.initindicatorValue();
		this.initshowValue();
		this.initshowedValue();
		this.initneedleColor();
		this.inittitle();
		this.initstartValue();
		this.initendValue();
		this.initgradientColor();
		this.initfirstColor();
		this.initsecondColor();
		this.initthirdColor();
		this.initstartSecondColor();
		this.initstartThirdColor();
		this.initmainColor();
		this.initttColor();
		
	};
	
	this.componentSelected = function(){
		this.updatehaveNumbers();
		this.updatenumOfBigTicks();
		this.updatenumOfSmallTicks();
		this.updateindicatorValue();
		this.updateshowValue();
		this.updateshowedValue();
		this.updateneedleColor();
		this.updatetitle();
		this.updatestartValue();
		this.updateendValue();
		this.updategradientColor();
		this.updatefirstColor();
		this.updatesecondColor();
		this.updatethirdColor();
		this.updatestartSecondColor();
		this.updatestartThirdColor();
		this.updatemainColor();
		this.updatettColor();
		
	};
	
	
	this.updatePropertyhaveNumbers = function(){
		this._inputhaveNumbers.setChecked(this._haveNumbers);
	};
	
	this.inithaveNumbers = function(){
		this._labelhaveNumbers = new sap.ui.commons.Label({text: " Show Number"});
		this._labelhaveNumbers.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelhaveNumbers);
		
		this._inputhaveNumbers = new sap.ui.commons.CheckBox({width: "300px", text: "Show Number"});
		this._content.addContent(this._inputhaveNumbers);
		this._inputhaveNumbers.attachChange(this.propertyChangedhaveNumbers, this);
		this._inputhaveNumbers.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyhaveNumbers();
	};

	this.propertyChangedhaveNumbers = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		this._haveNumbers = checked;
		this.firePropertiesChanged(["haveNumbers"]);
	};
	
	this.haveNumbers = function(s){
		if( s === undefined){
			return this._haveNumbers;
		}else{
			this._haveNumbers = s;
			this.updatePropertyhaveNumbers();
			return this;
		}
	};

	this.updatePropertynumOfBigTicks = function(){
		this._inputnumOfBigTicks.setValue(this._numOfBigTicks);
	};
	
	this.initnumOfBigTicks = function(){
		this._labelnumOfBigTicks = new sap.ui.commons.Label({text: " Number of Big Ticks"});
		this._labelnumOfBigTicks.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelnumOfBigTicks);
		
		this._inputnumOfBigTicks = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputnumOfBigTicks);
		this._inputnumOfBigTicks.attachChange(this.propertyChangednumOfBigTicks, this);
		this._inputnumOfBigTicks.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertynumOfBigTicks();
	};

	this.propertyChangednumOfBigTicks = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._numOfBigTicks = value;
		this.firePropertiesChanged(["numOfBigTicks"]);
	};
	
	this.numOfBigTicks = function(s){
		if( s === undefined){
			return this._numOfBigTicks;
		}else{
			this._numOfBigTicks = s;
			this.updatePropertynumOfBigTicks();
			return this;
		}
	};

	this.updatePropertynumOfSmallTicks = function(){
		this._inputnumOfSmallTicks.setValue(this._numOfSmallTicks);
	};
	
	this.initnumOfSmallTicks = function(){
		this._labelnumOfSmallTicks = new sap.ui.commons.Label({text: " Number of Small Ticks"});
		this._labelnumOfSmallTicks.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelnumOfSmallTicks);
		
		this._inputnumOfSmallTicks = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputnumOfSmallTicks);
		this._inputnumOfSmallTicks.attachChange(this.propertyChangednumOfSmallTicks, this);
		this._inputnumOfSmallTicks.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertynumOfSmallTicks();
	};

	this.propertyChangednumOfSmallTicks = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._numOfSmallTicks = value;
		this.firePropertiesChanged(["numOfSmallTicks"]);
	};
	
	this.numOfSmallTicks = function(s){
		if( s === undefined){
			return this._numOfSmallTicks;
		}else{
			this._numOfSmallTicks = s;
			this.updatePropertynumOfSmallTicks();
			return this;
		}
	};

	this.updatePropertyindicatorValue = function(){
		this._inputindicatorValue.setValue(this._indicatorValue);
	};
	
	this.initindicatorValue = function(){
		this._labelindicatorValue = new sap.ui.commons.Label({text: " Indicator Value"});
		this._labelindicatorValue.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelindicatorValue);
		
		this._inputindicatorValue = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputindicatorValue);
		this._inputindicatorValue.attachChange(this.propertyChangedindicatorValue, this);
		this._inputindicatorValue.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyindicatorValue();
	};

	this.propertyChangedindicatorValue = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._indicatorValue = value;
		this.firePropertiesChanged(["indicatorValue"]);
	};
	
	this.indicatorValue = function(s){
		if( s === undefined){
			return this._indicatorValue;
		}else{
			this._indicatorValue = s;
			this.updatePropertyindicatorValue();
			return this;
		}
	};

	this.updatePropertyshowValue = function(){
		this._inputshowValue.setChecked(this._showValue);
	};
	
	this.initshowValue = function(){
		this._labelshowValue = new sap.ui.commons.Label({text: " Show Value"});
		this._labelshowValue.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelshowValue);
		
		this._inputshowValue = new sap.ui.commons.CheckBox({width: "300px", text: "Show Value"});
		this._content.addContent(this._inputshowValue);
		this._inputshowValue.attachChange(this.propertyChangedshowValue, this);
		this._inputshowValue.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyshowValue();
	};

	this.propertyChangedshowValue = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		this._showValue = checked;
		this.firePropertiesChanged(["showValue"]);
	};
	
	this.showValue = function(s){
		if( s === undefined){
			return this._showValue;
		}else{
			this._showValue = s;
			this.updatePropertyshowValue();
			return this;
		}
	};

	this.updatePropertyshowedValue = function(){
		this._inputshowedValue.setValue(this._showedValue);
	};
	
	this.initshowedValue = function(){
		this._labelshowedValue = new sap.ui.commons.Label({text: " Showed Value"});
		this._labelshowedValue.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelshowedValue);
		
		this._inputshowedValue = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputshowedValue);
		this._inputshowedValue.attachChange(this.propertyChangedshowedValue, this);
		this._inputshowedValue.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyshowedValue();
	};

	this.propertyChangedshowedValue = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._showedValue = value;
		this.firePropertiesChanged(["showedValue"]);
	};
	
	this.showedValue = function(s){
		if( s === undefined){
			return this._showedValue;
		}else{
			this._showedValue = s;
			this.updatePropertyshowedValue();
			return this;
		}
	};

	this.updatePropertyneedleColor = function(){
		this._inputneedleColor.setValue(this._needleColor);
	};
	
	this.initneedleColor = function(){
		this._labelneedleColor = new sap.ui.commons.Label({text: " Needle Color"});
		this._labelneedleColor.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelneedleColor);
		
		this._inputneedleColor = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputneedleColor);
		this._inputneedleColor.attachChange(this.propertyChangedneedleColor, this);
		this._inputneedleColor.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyneedleColor();
	};

	this.propertyChangedneedleColor = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._needleColor = value;
		this.firePropertiesChanged(["needleColor"]);
	};
	
	this.needleColor = function(s){
		if( s === undefined){
			return this._needleColor;
		}else{
			this._needleColor = s;
			this.updatePropertyneedleColor();
			return this;
		}
	};

	this.updatePropertytitle = function(){
		this._inputtitle.setValue(this._title);
	};
	
	this.inittitle = function(){
		this._labeltitle = new sap.ui.commons.Label({text: " Title"});
		this._labeltitle.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labeltitle);
		
		this._inputtitle = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputtitle);
		this._inputtitle.attachChange(this.propertyChangedtitle, this);
		this._inputtitle.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertytitle();
	};

	this.propertyChangedtitle = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._title = value;
		this.firePropertiesChanged(["title"]);
	};
	
	this.title = function(s){
		if( s === undefined){
			return this._title;
		}else{
			this._title = s;
			this.updatePropertytitle();
			return this;
		}
	};

	this.updatePropertystartValue = function(){
		this._inputstartValue.setValue(this._startValue);
	};
	
	this.initstartValue = function(){
		this._labelstartValue = new sap.ui.commons.Label({text: " Start Value"});
		this._labelstartValue.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelstartValue);
		
		this._inputstartValue = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputstartValue);
		this._inputstartValue.attachChange(this.propertyChangedstartValue, this);
		this._inputstartValue.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertystartValue();
	};

	this.propertyChangedstartValue = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._startValue = value;
		this.firePropertiesChanged(["startValue"]);
	};
	
	this.startValue = function(s){
		if( s === undefined){
			return this._startValue;
		}else{
			this._startValue = s;
			this.updatePropertystartValue();
			return this;
		}
	};

	this.updatePropertyendValue = function(){
		this._inputendValue.setValue(this._endValue);
	};
	
	this.initendValue = function(){
		this._labelendValue = new sap.ui.commons.Label({text: " End Value"});
		this._labelendValue.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelendValue);
		
		this._inputendValue = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputendValue);
		this._inputendValue.attachChange(this.propertyChangedendValue, this);
		this._inputendValue.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyendValue();
	};

	this.propertyChangedendValue = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._endValue = value;
		this.firePropertiesChanged(["endValue"]);
	};
	
	this.endValue = function(s){
		if( s === undefined){
			return this._endValue;
		}else{
			this._endValue = s;
			this.updatePropertyendValue();
			return this;
		}
	};

	this.updatePropertygradientColor = function(){
		this._inputgradientColor.setChecked(this._gradientColor);
	};
	
	this.initgradientColor = function(){
		this._labelgradientColor = new sap.ui.commons.Label({text: " Gradient Color"});
		this._labelgradientColor.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelgradientColor);
		
		this._inputgradientColor = new sap.ui.commons.CheckBox({width: "300px", text: "Gradient Color"});
		this._content.addContent(this._inputgradientColor);
		this._inputgradientColor.attachChange(this.propertyChangedgradientColor, this);
		this._inputgradientColor.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertygradientColor();
	};

	this.propertyChangedgradientColor = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		this._gradientColor = checked;
		this.firePropertiesChanged(["gradientColor"]);
	};
	
	this.gradientColor = function(s){
		if( s === undefined){
			return this._gradientColor;
		}else{
			this._gradientColor = s;
			this.updatePropertygradientColor();
			return this;
		}
	};

	this.updatePropertyfirstColor = function(){
		this._inputfirstColor.setValue(this._firstColor);
	};
	
	this.initfirstColor = function(){
		this._labelfirstColor = new sap.ui.commons.Label({text: " First Color"});
		this._labelfirstColor.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelfirstColor);
		
		this._inputfirstColor = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputfirstColor);
		this._inputfirstColor.attachChange(this.propertyChangedfirstColor, this);
		this._inputfirstColor.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyfirstColor();
	};

	this.propertyChangedfirstColor = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._firstColor = value;
		this.firePropertiesChanged(["firstColor"]);
	};
	
	this.firstColor = function(s){
		if( s === undefined){
			return this._firstColor;
		}else{
			this._firstColor = s;
			this.updatePropertyfirstColor();
			return this;
		}
	};

	this.updatePropertysecondColor = function(){
		this._inputsecondColor.setValue(this._secondColor);
	};
	
	this.initsecondColor = function(){
		this._labelsecondColor = new sap.ui.commons.Label({text: " Second Color"});
		this._labelsecondColor.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelsecondColor);
		
		this._inputsecondColor = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputsecondColor);
		this._inputsecondColor.attachChange(this.propertyChangedsecondColor, this);
		this._inputsecondColor.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertysecondColor();
	};

	this.propertyChangedsecondColor = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._secondColor = value;
		this.firePropertiesChanged(["secondColor"]);
	};
	
	this.secondColor = function(s){
		if( s === undefined){
			return this._secondColor;
		}else{
			this._secondColor = s;
			this.updatePropertysecondColor();
			return this;
		}
	};

	this.updatePropertythirdColor = function(){
		this._inputthirdColor.setValue(this._thirdColor);
	};
	
	this.initthirdColor = function(){
		this._labelthirdColor = new sap.ui.commons.Label({text: " Third Color"});
		this._labelthirdColor.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelthirdColor);
		
		this._inputthirdColor = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputthirdColor);
		this._inputthirdColor.attachChange(this.propertyChangedthirdColor, this);
		this._inputthirdColor.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertythirdColor();
	};

	this.propertyChangedthirdColor = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._thirdColor = value;
		this.firePropertiesChanged(["thirdColor"]);
	};
	
	this.thirdColor = function(s){
		if( s === undefined){
			return this._thirdColor;
		}else{
			this._thirdColor = s;
			this.updatePropertythirdColor();
			return this;
		}
	};

	this.updatePropertystartSecondColor = function(){
		this._inputstartSecondColor.setValue(this._startSecondColor);
	};
	
	this.initstartSecondColor = function(){
		this._labelstartSecondColor = new sap.ui.commons.Label({text: " Start of Second Color"});
		this._labelstartSecondColor.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelstartSecondColor);
		
		this._inputstartSecondColor = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputstartSecondColor);
		this._inputstartSecondColor.attachChange(this.propertyChangedstartSecondColor, this);
		this._inputstartSecondColor.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertystartSecondColor();
	};

	this.propertyChangedstartSecondColor = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._startSecondColor = value;
		this.firePropertiesChanged(["startSecondColor"]);
	};
	
	this.startSecondColor = function(s){
		if( s === undefined){
			return this._startSecondColor;
		}else{
			this._startSecondColor = s;
			this.updatePropertystartSecondColor();
			return this;
		}
	};

	this.updatePropertystartThirdColor = function(){
		this._inputstartThirdColor.setValue(this._startThirdColor);
	};
	
	this.initstartThirdColor = function(){
		this._labelstartThirdColor = new sap.ui.commons.Label({text: " Start of Third Color"});
		this._labelstartThirdColor.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelstartThirdColor);
		
		this._inputstartThirdColor = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputstartThirdColor);
		this._inputstartThirdColor.attachChange(this.propertyChangedstartThirdColor, this);
		this._inputstartThirdColor.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertystartThirdColor();
	};

	this.propertyChangedstartThirdColor = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._startThirdColor = value;
		this.firePropertiesChanged(["startThirdColor"]);
	};
	
	this.startThirdColor = function(s){
		if( s === undefined){
			return this._startThirdColor;
		}else{
			this._startThirdColor = s;
			this.updatePropertystartThirdColor();
			return this;
		}
	};

	this.updatePropertymainColor = function(){
		this._inputmainColor.setValue(this._mainColor);
	};
	
	this.initmainColor = function(){
		this._labelmainColor = new sap.ui.commons.Label({text: " Main Color"});
		this._labelmainColor.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelmainColor);
		
		this._inputmainColor = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputmainColor);
		this._inputmainColor.attachChange(this.propertyChangedmainColor, this);
		this._inputmainColor.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertymainColor();
	};

	this.propertyChangedmainColor = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._mainColor = value;
		this.firePropertiesChanged(["mainColor"]);
	};
	
	this.mainColor = function(s){
		if( s === undefined){
			return this._mainColor;
		}else{
			this._mainColor = s;
			this.updatePropertymainColor();
			return this;
		}
	};

	this.updatePropertyttColor = function(){
		this._inputttColor.setValue(this._ttColor);
	};
	
	this.initttColor = function(){
		this._labelttColor = new sap.ui.commons.Label({text: " Text and Ticks Color"});
		this._labelttColor.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelttColor);
		
		this._inputttColor = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputttColor);
		this._inputttColor.attachChange(this.propertyChangedttColor, this);
		this._inputttColor.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyttColor();
	};

	this.propertyChangedttColor = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._ttColor = value;
		this.firePropertiesChanged(["ttColor"]);
	};
	
	this.ttColor = function(s){
		if( s === undefined){
			return this._ttColor;
		}else{
			this._ttColor = s;
			this.updatePropertyttColor();
			return this;
		}
	};


});
