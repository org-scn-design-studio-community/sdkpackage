
/**
 * Generated ZTL Class for Nice Chart
 * 
 * DO NOT EDIT
 */
sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.NiceChartPropertyPage",  function() {
	var that = this;

	this.init = function () {
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this._content.placeAt($("#content"));

		this.initDChartType();
		this.initDSwapAxes();
		this.initDColorHue();
		this.initDColorDistance();
		this.initDColorPalette();
		this.initDShowLegend();
		this.initDLegendPosition();
		this.initDLegendWidth();
		
	};
	
	this.componentSelected = function(){
		this.updateDChartType();
		this.updateDSwapAxes();
		this.updateDColorHue();
		this.updateDColorDistance();
		this.updateDColorPalette();
		this.updateDShowLegend();
		this.updateDLegendPosition();
		this.updateDLegendWidth();
		
	};
	
	
	this.updatePropertyDChartType = function(){
		this._inputDChartType.setSelectedKey(this._DChartType);
	};
	
	this.initDChartType = function(){
		this._labelDChartType = new sap.ui.commons.Label({text: " Chart Type"});
		this._labelDChartType.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDChartType);
		
		this._inputDChartType = new sap.ui.commons.ComboBox({width: "300px"});
		this._inputDChartType.addItem(new sap.ui.core.ListItem({key:"Line", text:"Line"}));
		this._inputDChartType.addItem(new sap.ui.core.ListItem({key:"Bar", text:"Bar"}));
		this._inputDChartType.addItem(new sap.ui.core.ListItem({key:"Radar", text:"Radar"}));
		this._inputDChartType.addItem(new sap.ui.core.ListItem({key:"PolarArea", text:"PolarArea"}));
		this._inputDChartType.addItem(new sap.ui.core.ListItem({key:"Pie", text:"Pie"}));
		this._inputDChartType.addItem(new sap.ui.core.ListItem({key:"Doughnut", text:"Doughnut"}));
		
		this._content.addContent(this._inputDChartType);
		this._inputDChartType.attachChange(this.propertyChangedDChartType, this);
		this._inputDChartType.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDChartType();
	};

	this.propertyChangedDChartType = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		this._DChartType = newValue;
		this.firePropertiesChanged(["DChartType"]);
	};
	
	this.DChartType = function(s){
		if( s === undefined){
			return this._DChartType;
		}else{
			this._DChartType = s;
			this.updatePropertyDChartType();
			return this;
		}
	};

	this.updatePropertyDSwapAxes = function(){
		this._inputDSwapAxes.setChecked(this._DSwapAxes);
	};
	
	this.initDSwapAxes = function(){
		this._labelDSwapAxes = new sap.ui.commons.Label({text: " Swap Axes"});
		this._labelDSwapAxes.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDSwapAxes);
		
		this._inputDSwapAxes = new sap.ui.commons.CheckBox({width: "300px", text: "Swap Axes"});
		this._content.addContent(this._inputDSwapAxes);
		this._inputDSwapAxes.attachChange(this.propertyChangedDSwapAxes, this);
		this._inputDSwapAxes.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDSwapAxes();
	};

	this.propertyChangedDSwapAxes = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		this._DSwapAxes = checked;
		this.firePropertiesChanged(["DSwapAxes"]);
	};
	
	this.DSwapAxes = function(s){
		if( s === undefined){
			return this._DSwapAxes;
		}else{
			this._DSwapAxes = s;
			this.updatePropertyDSwapAxes();
			return this;
		}
	};

	this.updatePropertyDColorHue = function(){
		this._inputDColorHue.setValue(this._DColorHue);
	};
	
	this.initDColorHue = function(){
		this._labelDColorHue = new sap.ui.commons.Label({text: " Starting Color Hue"});
		this._labelDColorHue.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDColorHue);
		
		this._inputDColorHue = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDColorHue);
		this._inputDColorHue.attachChange(this.propertyChangedDColorHue, this);
		this._inputDColorHue.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDColorHue();
	};

	this.propertyChangedDColorHue = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DColorHue = value;
		this.firePropertiesChanged(["DColorHue"]);
	};
	
	this.DColorHue = function(s){
		if( s === undefined){
			return this._DColorHue;
		}else{
			this._DColorHue = s;
			this.updatePropertyDColorHue();
			return this;
		}
	};

	this.updatePropertyDColorDistance = function(){
		this._inputDColorDistance.setValue(this._DColorDistance);
	};
	
	this.initDColorDistance = function(){
		this._labelDColorDistance = new sap.ui.commons.Label({text: " Starting Color Distance"});
		this._labelDColorDistance.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDColorDistance);
		
		this._inputDColorDistance = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDColorDistance);
		this._inputDColorDistance.attachChange(this.propertyChangedDColorDistance, this);
		this._inputDColorDistance.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDColorDistance();
	};

	this.propertyChangedDColorDistance = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DColorDistance = value;
		this.firePropertiesChanged(["DColorDistance"]);
	};
	
	this.DColorDistance = function(s){
		if( s === undefined){
			return this._DColorDistance;
		}else{
			this._DColorDistance = s;
			this.updatePropertyDColorDistance();
			return this;
		}
	};

	this.updatePropertyDColorPalette = function(){
		this._inputDColorPalette.setSelectedKey(this._DColorPalette);
	};
	
	this.initDColorPalette = function(){
		this._labelDColorPalette = new sap.ui.commons.Label({text: " Starting Color Palette"});
		this._labelDColorPalette.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDColorPalette);
		
		this._inputDColorPalette = new sap.ui.commons.ComboBox({width: "300px"});
		this._inputDColorPalette.addItem(new sap.ui.core.ListItem({key:"mono", text:"mono"}));
		this._inputDColorPalette.addItem(new sap.ui.core.ListItem({key:"monochromatic", text:"monochromatic"}));
		this._inputDColorPalette.addItem(new sap.ui.core.ListItem({key:"contrast", text:"contrast"}));
		this._inputDColorPalette.addItem(new sap.ui.core.ListItem({key:"triade", text:"triade"}));
		this._inputDColorPalette.addItem(new sap.ui.core.ListItem({key:"tetrade", text:"tetrade"}));
		this._inputDColorPalette.addItem(new sap.ui.core.ListItem({key:"analogic", text:"analogic"}));
		
		this._content.addContent(this._inputDColorPalette);
		this._inputDColorPalette.attachChange(this.propertyChangedDColorPalette, this);
		this._inputDColorPalette.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDColorPalette();
	};

	this.propertyChangedDColorPalette = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		this._DColorPalette = newValue;
		this.firePropertiesChanged(["DColorPalette"]);
	};
	
	this.DColorPalette = function(s){
		if( s === undefined){
			return this._DColorPalette;
		}else{
			this._DColorPalette = s;
			this.updatePropertyDColorPalette();
			return this;
		}
	};

	this.updatePropertyDShowLegend = function(){
		this._inputDShowLegend.setChecked(this._DShowLegend);
	};
	
	this.initDShowLegend = function(){
		this._labelDShowLegend = new sap.ui.commons.Label({text: " Show Legend"});
		this._labelDShowLegend.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDShowLegend);
		
		this._inputDShowLegend = new sap.ui.commons.CheckBox({width: "300px", text: "Show Legend"});
		this._content.addContent(this._inputDShowLegend);
		this._inputDShowLegend.attachChange(this.propertyChangedDShowLegend, this);
		this._inputDShowLegend.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDShowLegend();
	};

	this.propertyChangedDShowLegend = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		this._DShowLegend = checked;
		this.firePropertiesChanged(["DShowLegend"]);
	};
	
	this.DShowLegend = function(s){
		if( s === undefined){
			return this._DShowLegend;
		}else{
			this._DShowLegend = s;
			this.updatePropertyDShowLegend();
			return this;
		}
	};

	this.updatePropertyDLegendPosition = function(){
		this._inputDLegendPosition.setSelectedKey(this._DLegendPosition);
	};
	
	this.initDLegendPosition = function(){
		this._labelDLegendPosition = new sap.ui.commons.Label({text: " Legend Position"});
		this._labelDLegendPosition.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDLegendPosition);
		
		this._inputDLegendPosition = new sap.ui.commons.ComboBox({width: "300px"});
		this._inputDLegendPosition.addItem(new sap.ui.core.ListItem({key:"Left", text:"Left"}));
		this._inputDLegendPosition.addItem(new sap.ui.core.ListItem({key:"Right", text:"Right"}));
		
		this._content.addContent(this._inputDLegendPosition);
		this._inputDLegendPosition.attachChange(this.propertyChangedDLegendPosition, this);
		this._inputDLegendPosition.addStyleClass("org-scn-ApsBoolean");
		
		this.updatePropertyDLegendPosition();
	};

	this.propertyChangedDLegendPosition = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		this._DLegendPosition = newValue;
		this.firePropertiesChanged(["DLegendPosition"]);
	};
	
	this.DLegendPosition = function(s){
		if( s === undefined){
			return this._DLegendPosition;
		}else{
			this._DLegendPosition = s;
			this.updatePropertyDLegendPosition();
			return this;
		}
	};

	this.updatePropertyDLegendWidth = function(){
		this._inputDLegendWidth.setValue(this._DLegendWidth);
	};
	
	this.initDLegendWidth = function(){
		this._labelDLegendWidth = new sap.ui.commons.Label({text: " Width of Legend in px"});
		this._labelDLegendWidth.addStyleClass("org-scn-ApsLabel");
		this._content.addContent(this._labelDLegendWidth);
		
		this._inputDLegendWidth = new sap.ui.commons.TextField({width: "300px"});
		this._content.addContent(this._inputDLegendWidth);
		this._inputDLegendWidth.attachChange(this.propertyChangedDLegendWidth, this);
		this._inputDLegendWidth.addStyleClass("org-scn-ApsSimple");
		
		this.updatePropertyDLegendWidth();
	};

	this.propertyChangedDLegendWidth = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		this._DLegendWidth = value;
		this.firePropertiesChanged(["DLegendWidth"]);
	};
	
	this.DLegendWidth = function(s){
		if( s === undefined){
			return this._DLegendWidth;
		}else{
			this._DLegendWidth = s;
			this.updatePropertyDLegendWidth();
			return this;
		}
	};


});
