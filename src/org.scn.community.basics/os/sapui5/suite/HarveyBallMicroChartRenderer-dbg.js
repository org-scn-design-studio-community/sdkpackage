/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
 
jQuery.sap.declare("sap.suite.ui.commons.HarveyBallMicroChartRenderer");

/**
 * @class HarveyBallMicroChart renderer. 
 * @static
 */
sap.suite.ui.commons.HarveyBallMicroChartRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.HarveyBallMicroChartRenderer.render = function(oRm, oControl){ 
	 // write the HTML into the render manager
	 
	 var bRtl = sap.ui.getCore().getConfiguration().getRTL();
	 var sTooltip = oControl.getTooltip_AsString();
	 if (typeof sTooltip !== "string") {
    	sTooltip = "";
	 }
	 var sValueLabel = "";
	 var sValueScale = "";
	 var bFmtLabel = false;
	 var fValue = 0;
	 var sColor = "";
	 var sCpColor = false;
	 // support only value from first item
	 if (oControl.getItems().length) {
	 	 var oPieItem = oControl.getItems()[0];
		 fValue = oPieItem.getFraction();
		 sColor = oPieItem.getColor();
		 sValueLabel = oPieItem.getFractionLabel() ? oPieItem.getFractionLabel() : ""+oPieItem.getFraction();
		 sValueScale = oPieItem.getFractionScale().substring(0,3);
		 bFmtLabel = oPieItem.getFormattedLabel();
	 }
	 	
	 if (bFmtLabel) {
		 var oFormattedValue = oControl._parseFormattedValue(sValueLabel);
		
		 sValueScale = oFormattedValue.scale.substring(0,3);
		 sValueLabel = oFormattedValue.value;
	 }
	 
	 var fTotal = oControl.getTotal();
	 var sTotalLabel = oControl.getTotalLabel() ? oControl.getTotalLabel() : ""+oControl.getTotal();
	 var sTotalScale = oControl.getTotalScale().substring(0,3);
   
	 if (oControl.getFormattedLabel()) {
		 var oFormattedTotal = oControl._parseFormattedValue(sTotalLabel);
		
		 sTotalScale = oFormattedTotal.scale.substring(0,3);
		 sTotalLabel = oFormattedTotal.value;
	 }
	 var iTrunc = 5; //truncate values to 5 chars
	 if (sValueLabel) {
		 sValueLabel = (sValueLabel.length >= iTrunc && (sValueLabel[iTrunc-1] === "." || sValueLabel[iTrunc-1] === ",")) ? sValueLabel.substring(0, iTrunc-1) : sValueLabel.substring(0,iTrunc);
	 }
	 if (sTotalLabel) {
		 sTotalLabel = (sTotalLabel.length >= iTrunc && (sTotalLabel[iTrunc-1] === "." || sTotalLabel[iTrunc-1] === ",")) ? sTotalLabel.substring(0, iTrunc-1) : sTotalLabel.substring(0,iTrunc);
	 }
	if(oControl.getColorPalette()) {
		sCpColor = oControl.getColorPalette()[0];
	}
   
   var sSize = oControl.getSize();
	 oRm.write("<div");
	 oRm.writeControlData(oControl);
	 oRm.writeAttributeEscaped("title", sTooltip);
	 oRm.addClass("suiteHBMC");
	 oRm.addClass(sSize);
	 if (oControl.hasListeners("press")) {    
		oRm.addClass("sapSuiteUiCommonsPointer");
		oRm.writeAttribute("tabindex", "0");
	 }
	 oRm.writeClasses();
	 
   if (oControl.getWidth()) {
    oRm.addStyle("width", oControl.getWidth());
   }
   oRm.writeStyles();
    
	 oRm.write(">");
	 
	 	 oRm.write("<div");
	 	 oRm.addClass("suiteHBMCChartCnt");
	 	 oRm.addClass(sSize);
	 	 oRm.writeClasses();
	 	 oRm.addStyle("display", "inline-block");
	 	 oRm.writeStyles();
	 	 oRm.writeAttribute("role", "presentation");
	 	 oRm.writeAttributeEscaped("aria-label", oControl.getAltText().replace(/\s/g, " ") + (sap.ui.Device.browser.firefox ? "" : " " + sTooltip ));
	 	 
		 oRm.write(">");
		 	oRm.write("<svg");
		 	oRm.writeAttribute("id", oControl.getId() + "-harvey-ball");
			oRm.writeAttribute("width",oControl._oPath.size);
			oRm.writeAttribute("height",oControl._oPath.size);
			oRm.writeAttribute("focusable", false);
			oRm.write(">");
			 	oRm.write("<g>");
					oRm.write("<circle");
					oRm.writeAttribute("cx",oControl._oPath.center);
					oRm.writeAttribute("cy",oControl._oPath.center);
					oRm.writeAttribute("r", (sap.ui.getCore().getConfiguration().getTheme() === "sap_hcb") ? oControl._oPath.center-1 : oControl._oPath.center);
					oRm.addClass("suiteHBMCSBall");
				  oRm.writeClasses();
					oRm.write("/>");
					
					
					if(!fValue) {
						//no pie
					}	else if(fValue >= fTotal) {
						oRm.write("<circle");
						oRm.writeAttribute("cx",oControl._oPath.center);
						oRm.writeAttribute("cy",oControl._oPath.center);
						oRm.writeAttribute("r",oControl._oPath.center - oControl._oPath.border);
						oRm.addClass("suiteHBMCSgmnt");
						oRm.addClass(sColor);
					  oRm.writeClasses();
						
						if(oControl.getColorPalette()) {
							oRm.addStyle("fill", oControl.getColorPalette()[0]);
							oRm.writeStyles();							
						}
						
						oRm.write("/>");
					} else if(fValue > 0) {
						oRm.write("<path");
						oRm.writeAttribute("id", oControl.getId() + "-segment");
						oRm.addClass("suiteHBMCSgmnt");
						oRm.addClass(sColor);
					  oRm.writeClasses();
						oRm.writeAttribute("d",oControl.serializePieChart());
						//oRm.writeAttribute("d","M36,36 L36,4 A32,32 0 0,1 42,5 z");//remove hardcode
						
						if(oControl.getColorPalette().length != 0) {
							oRm.addStyle("fill", oControl.getColorPalette()[0]);
							oRm.writeStyles();
						}

						oRm.write("/>");					
					}
					
					
			 	oRm.write("</g>");
		 	oRm.write("</svg>");
		 oRm.write("</div>");
		 
	 	 oRm.write("<div");
	 	 oRm.addClass("suiteHBMCValSclCnt");
	 	 oRm.addClass(sSize);
	 	 oRm.addClass(sColor);
	 	 
	 	 if (sCpColor) {
	 		 oRm.addClass("CP");
	 	 }
	 	 
	 	 oRm.writeClasses();
	 	 oRm.addStyle("display", oControl.getShowFractions() ? "inline-block" :"none");
	 	 oRm.writeStyles();
		 oRm.write(">");
			 oRm.write("<p");
			 oRm.write(">");
				 this.renderLabel(oRm, oControl, [sColor, sSize, "suiteHBMCVal"], sValueLabel, "-fraction");
				 this.renderLabel(oRm, oControl, [sColor, sSize, "suiteHBMCValScale"], sValueScale, "-fraction-scale");
			 oRm.write("</p>");
		 oRm.write("</div>");
		 
		 oRm.write("<div");
		 oRm.addClass("suiteHBMCTtlSclCnt");
		 oRm.addClass(sSize);
		 oRm.writeClasses();
		 if (bRtl) {
			 oRm.addStyle("left", "0");
		 } else {
			 oRm.addStyle("right", "0");
		 }
		 oRm.addStyle("display", oControl.getShowTotal() ? "inline-block" :"none");
		 oRm.writeStyles();
		 oRm.write(">");
		 this.renderLabel(oRm, oControl, [sColor, sSize, "suiteHBMCTtl"], sTotalLabel, "-total");
		 this.renderLabel(oRm, oControl, [sColor, sSize, "suiteHBMCTtlScale"], sTotalScale, "-total-scale");
		 oRm.write("</div>");
	 oRm.write("</div>");
};

sap.suite.ui.commons.HarveyBallMicroChartRenderer.renderLabel = function(oRm, oControl, aClasses, sLabel, sId) {
	oRm.write("<span");
	oRm.writeAttribute("id", oControl.getId() + sId);
	for (var i=0; i<aClasses.length; i++) {
		oRm.addClass(aClasses[i]);
	}
	oRm.writeClasses();
	oRm.write(">");
		if (sLabel) {
			oRm.writeEscaped(sLabel);
		}
	oRm.write("</span>");

};

