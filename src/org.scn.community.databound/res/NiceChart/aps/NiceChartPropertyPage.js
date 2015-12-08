
/**
 * Generated ZTL Class for Nice Chart 1.0
 * 
 * DO NOT EDIT
 */
sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.NiceChartPropertyPage",  function() {
	var that = this;

	that.init = function () {
		that._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		that._content.placeAt($("#content"));

		that["fun_DChartType"].init();
		that["fun_DColorDistance"].init();
		that["fun_DColorHue"].init();
		that["fun_DColorPalette"].init();
		that["fun_DLegendPosition"].init();
		that["fun_DLegendWidth"].init();
		that["fun_DMaxDataPoints"].init();
		that["fun_DShowLegend"].init();
		that["fun_DSwapAxes"].init();
		
	};
	
	that.componentSelected = function(){
		that["fun_DChartType"].update();
		that["fun_DColorDistance"].update();
		that["fun_DColorHue"].update();
		that["fun_DColorPalette"].update();
		that["fun_DLegendPosition"].update();
		that["fun_DLegendWidth"].update();
		that["fun_DMaxDataPoints"].update();
		that["fun_DShowLegend"].update();
		that["fun_DSwapAxes"].update();
		
	};
	
	
	that["fun_DChartType"] = {};
	
	that["fun_DChartType"].update = function(){
		that["fun_DChartType"]._input.setSelectedKey(that["fun_DChartType"]._);
	};
	
	that["fun_DChartType"].init = function(){
		that["fun_DChartType"]._label = new sap.ui.commons.Label({text: " Chart Type"});
		that["fun_DChartType"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DChartType"]._label);
		
		that["fun_DChartType"]._input = new sap.ui.commons.ComboBox({width: "300px"});
		that["fun_DChartType"]._input.addItem(new sap.ui.core.ListItem({key:"Line", text:"Line"}));
		that["fun_DChartType"]._input.addItem(new sap.ui.core.ListItem({key:"Bar", text:"Bar"}));
		that["fun_DChartType"]._input.addItem(new sap.ui.core.ListItem({key:"LineBar", text:"LineBar"}));
		that["fun_DChartType"]._input.addItem(new sap.ui.core.ListItem({key:"Radar", text:"Radar"}));
		that["fun_DChartType"]._input.addItem(new sap.ui.core.ListItem({key:"PolarArea", text:"PolarArea"}));
		that["fun_DChartType"]._input.addItem(new sap.ui.core.ListItem({key:"Pie", text:"Pie"}));
		that["fun_DChartType"]._input.addItem(new sap.ui.core.ListItem({key:"Doughnut", text:"Doughnut"}));
		
		that._content.addContent(that["fun_DChartType"]._input);
		that["fun_DChartType"]._input.attachChange(that["fun_DChartType"].propertyChanged, that);
		that["fun_DChartType"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DChartType"].update();
	};

	that["fun_DChartType"].propertyChanged = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		that["fun_DChartType"]._ = newValue;
		that.firePropertiesChanged(["DChartType"]);
	};
	
	that.DChartType = function(s){
		if( s === undefined){
			return that["fun_DChartType"]._;
		}else{
			that["fun_DChartType"]._ = s;
			that["fun_DChartType"].update();
			return that;
		}
	};

	that["fun_DColorDistance"] = {};
	
	that["fun_DColorDistance"].update = function(){
		that["fun_DColorDistance"]._input.setValue(that["fun_DColorDistance"]._);
	};
	
	that["fun_DColorDistance"].init = function(){
		that["fun_DColorDistance"]._label = new sap.ui.commons.Label({text: " Starting Color Distance"});
		that["fun_DColorDistance"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DColorDistance"]._label);
		
		that["fun_DColorDistance"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DColorDistance"]._input);
		that["fun_DColorDistance"]._input.attachChange(that["fun_DColorDistance"].propertyChanged, that);
		that["fun_DColorDistance"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DColorDistance"].update();
	};

	that["fun_DColorDistance"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DColorDistance"]._ = value;
		that.firePropertiesChanged(["DColorDistance"]);
	};
	
	that.DColorDistance = function(s){
		if( s === undefined){
			return that["fun_DColorDistance"]._;
		}else{
			that["fun_DColorDistance"]._ = s;
			that["fun_DColorDistance"].update();
			return that;
		}
	};

	that["fun_DColorHue"] = {};
	
	that["fun_DColorHue"].update = function(){
		that["fun_DColorHue"]._input.setValue(that["fun_DColorHue"]._);
	};
	
	that["fun_DColorHue"].init = function(){
		that["fun_DColorHue"]._label = new sap.ui.commons.Label({text: " Starting Color Hue"});
		that["fun_DColorHue"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DColorHue"]._label);
		
		that["fun_DColorHue"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DColorHue"]._input);
		that["fun_DColorHue"]._input.attachChange(that["fun_DColorHue"].propertyChanged, that);
		that["fun_DColorHue"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DColorHue"].update();
	};

	that["fun_DColorHue"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DColorHue"]._ = value;
		that.firePropertiesChanged(["DColorHue"]);
	};
	
	that.DColorHue = function(s){
		if( s === undefined){
			return that["fun_DColorHue"]._;
		}else{
			that["fun_DColorHue"]._ = s;
			that["fun_DColorHue"].update();
			return that;
		}
	};

	that["fun_DColorPalette"] = {};
	
	that["fun_DColorPalette"].update = function(){
		that["fun_DColorPalette"]._input.setSelectedKey(that["fun_DColorPalette"]._);
	};
	
	that["fun_DColorPalette"].init = function(){
		that["fun_DColorPalette"]._label = new sap.ui.commons.Label({text: " Starting Color Palette"});
		that["fun_DColorPalette"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DColorPalette"]._label);
		
		that["fun_DColorPalette"]._input = new sap.ui.commons.ComboBox({width: "300px"});
		that["fun_DColorPalette"]._input.addItem(new sap.ui.core.ListItem({key:"mono", text:"mono"}));
		that["fun_DColorPalette"]._input.addItem(new sap.ui.core.ListItem({key:"monochromatic", text:"monochromatic"}));
		that["fun_DColorPalette"]._input.addItem(new sap.ui.core.ListItem({key:"contrast", text:"contrast"}));
		that["fun_DColorPalette"]._input.addItem(new sap.ui.core.ListItem({key:"triade", text:"triade"}));
		that["fun_DColorPalette"]._input.addItem(new sap.ui.core.ListItem({key:"tetrade", text:"tetrade"}));
		that["fun_DColorPalette"]._input.addItem(new sap.ui.core.ListItem({key:"analogic", text:"analogic"}));
		
		that._content.addContent(that["fun_DColorPalette"]._input);
		that["fun_DColorPalette"]._input.attachChange(that["fun_DColorPalette"].propertyChanged, that);
		that["fun_DColorPalette"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DColorPalette"].update();
	};

	that["fun_DColorPalette"].propertyChanged = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		that["fun_DColorPalette"]._ = newValue;
		that.firePropertiesChanged(["DColorPalette"]);
	};
	
	that.DColorPalette = function(s){
		if( s === undefined){
			return that["fun_DColorPalette"]._;
		}else{
			that["fun_DColorPalette"]._ = s;
			that["fun_DColorPalette"].update();
			return that;
		}
	};

	that["fun_DLegendPosition"] = {};
	
	that["fun_DLegendPosition"].update = function(){
		that["fun_DLegendPosition"]._input.setSelectedKey(that["fun_DLegendPosition"]._);
	};
	
	that["fun_DLegendPosition"].init = function(){
		that["fun_DLegendPosition"]._label = new sap.ui.commons.Label({text: " Legend Position"});
		that["fun_DLegendPosition"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DLegendPosition"]._label);
		
		that["fun_DLegendPosition"]._input = new sap.ui.commons.ComboBox({width: "300px"});
		that["fun_DLegendPosition"]._input.addItem(new sap.ui.core.ListItem({key:"Left", text:"Left"}));
		that["fun_DLegendPosition"]._input.addItem(new sap.ui.core.ListItem({key:"Right", text:"Right"}));
		
		that._content.addContent(that["fun_DLegendPosition"]._input);
		that["fun_DLegendPosition"]._input.attachChange(that["fun_DLegendPosition"].propertyChanged, that);
		that["fun_DLegendPosition"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DLegendPosition"].update();
	};

	that["fun_DLegendPosition"].propertyChanged = function(oControlEvent){
		var newValue = oControlEvent.getParameter("newValue");
		that["fun_DLegendPosition"]._ = newValue;
		that.firePropertiesChanged(["DLegendPosition"]);
	};
	
	that.DLegendPosition = function(s){
		if( s === undefined){
			return that["fun_DLegendPosition"]._;
		}else{
			that["fun_DLegendPosition"]._ = s;
			that["fun_DLegendPosition"].update();
			return that;
		}
	};

	that["fun_DLegendWidth"] = {};
	
	that["fun_DLegendWidth"].update = function(){
		that["fun_DLegendWidth"]._input.setValue(that["fun_DLegendWidth"]._);
	};
	
	that["fun_DLegendWidth"].init = function(){
		that["fun_DLegendWidth"]._label = new sap.ui.commons.Label({text: " Width of Legend in px"});
		that["fun_DLegendWidth"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DLegendWidth"]._label);
		
		that["fun_DLegendWidth"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DLegendWidth"]._input);
		that["fun_DLegendWidth"]._input.attachChange(that["fun_DLegendWidth"].propertyChanged, that);
		that["fun_DLegendWidth"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DLegendWidth"].update();
	};

	that["fun_DLegendWidth"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DLegendWidth"]._ = value;
		that.firePropertiesChanged(["DLegendWidth"]);
	};
	
	that.DLegendWidth = function(s){
		if( s === undefined){
			return that["fun_DLegendWidth"]._;
		}else{
			that["fun_DLegendWidth"]._ = s;
			that["fun_DLegendWidth"].update();
			return that;
		}
	};

	that["fun_DMaxDataPoints"] = {};
	
	that["fun_DMaxDataPoints"].update = function(){
		that["fun_DMaxDataPoints"]._input.setValue(that["fun_DMaxDataPoints"]._);
	};
	
	that["fun_DMaxDataPoints"].init = function(){
		that["fun_DMaxDataPoints"]._label = new sap.ui.commons.Label({text: " Maximum Number of Data Points"});
		that["fun_DMaxDataPoints"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DMaxDataPoints"]._label);
		
		that["fun_DMaxDataPoints"]._input = new sap.ui.commons.TextField({width: "300px"});
		that._content.addContent(that["fun_DMaxDataPoints"]._input);
		that["fun_DMaxDataPoints"]._input.attachChange(that["fun_DMaxDataPoints"].propertyChanged, that);
		that["fun_DMaxDataPoints"]._input.addStyleClass("org-scn-ApsSimple");
		
		that["fun_DMaxDataPoints"].update();
	};

	that["fun_DMaxDataPoints"].propertyChanged = function(oControlEvent){
		var value = oControlEvent.getParameter("newValue");
		that["fun_DMaxDataPoints"]._ = value;
		that.firePropertiesChanged(["DMaxDataPoints"]);
	};
	
	that.DMaxDataPoints = function(s){
		if( s === undefined){
			return that["fun_DMaxDataPoints"]._;
		}else{
			that["fun_DMaxDataPoints"]._ = s;
			that["fun_DMaxDataPoints"].update();
			return that;
		}
	};

	that["fun_DShowLegend"] = {};
	
	that["fun_DShowLegend"].update = function(){
		that["fun_DShowLegend"]._input.setChecked(that["fun_DShowLegend"]._);
	};
	
	that["fun_DShowLegend"].init = function(){
		that["fun_DShowLegend"]._label = new sap.ui.commons.Label({text: " Show Legend"});
		that["fun_DShowLegend"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DShowLegend"]._label);
		
		that["fun_DShowLegend"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Show Legend"});
		that._content.addContent(that["fun_DShowLegend"]._input);
		that["fun_DShowLegend"]._input.attachChange(that["fun_DShowLegend"].propertyChanged, that);
		that["fun_DShowLegend"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DShowLegend"].update();
	};

	that["fun_DShowLegend"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_DShowLegend"]._ = checked;
		that.firePropertiesChanged(["DShowLegend"]);
	};
	
	that.DShowLegend = function(s){
		if( s === undefined){
			return that["fun_DShowLegend"]._;
		}else{
			that["fun_DShowLegend"]._ = s;
			that["fun_DShowLegend"].update();
			return that;
		}
	};

	that["fun_DSwapAxes"] = {};
	
	that["fun_DSwapAxes"].update = function(){
		that["fun_DSwapAxes"]._input.setChecked(that["fun_DSwapAxes"]._);
	};
	
	that["fun_DSwapAxes"].init = function(){
		that["fun_DSwapAxes"]._label = new sap.ui.commons.Label({text: " Swap Axes"});
		that["fun_DSwapAxes"]._label.addStyleClass("org-scn-ApsLabel");
		that._content.addContent(that["fun_DSwapAxes"]._label);
		
		that["fun_DSwapAxes"]._input = new sap.ui.commons.CheckBox({width: "300px", text: "Swap Axes"});
		that._content.addContent(that["fun_DSwapAxes"]._input);
		that["fun_DSwapAxes"]._input.attachChange(that["fun_DSwapAxes"].propertyChanged, that);
		that["fun_DSwapAxes"]._input.addStyleClass("org-scn-ApsBoolean");
		
		that["fun_DSwapAxes"].update();
	};

	that["fun_DSwapAxes"].propertyChanged = function(oControlEvent){
		var checked = oControlEvent.getParameter("checked");
		that["fun_DSwapAxes"]._ = checked;
		that.firePropertiesChanged(["DSwapAxes"]);
	};
	
	that.DSwapAxes = function(s){
		if( s === undefined){
			return that["fun_DSwapAxes"]._;
		}else{
			that["fun_DSwapAxes"]._ = s;
			that["fun_DSwapAxes"].update();
			return that;
		}
	};


});
