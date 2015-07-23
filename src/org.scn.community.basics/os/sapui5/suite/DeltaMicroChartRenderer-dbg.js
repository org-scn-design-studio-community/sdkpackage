/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.DeltaMicroChartRenderer");

/**
 * @class DeltaMicroChart renderer. 
 * @static
 */
sap.suite.ui.commons.DeltaMicroChartRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.DeltaMicroChartRenderer.render = function(oRm, oControl){ 
    var sDv1 = oControl.getDisplayValue1();
    var sDv2 = oControl.getDisplayValue2();
    var fVal1 = oControl.getValue1();
    var fVal2 = oControl.getValue2();
    var sDdv = oControl.getDeltaDisplayValue();
	var sAdv1ToShow = sDv1 ? sDv1 : "" + fVal1;
	var sAdv2ToShow = sDv2 ? sDv2 : "" + fVal2;
	var sAddvToShow = sDdv ? sDdv : "" + Math.abs(fVal1 - fVal2).toFixed(Math.max(oControl._digitsAfterDecimalPoint(fVal1), oControl._digitsAfterDecimalPoint(fVal2)));
	var sColor = oControl.getColor();
	var sTooltip = oControl.getTooltip_AsString();
    if (typeof sTooltip !== "string") {
    	sTooltip = "";
    }

	var sSize = oControl.getSize();
	var bNoTitles = (!oControl.getTitle1() && !oControl.getTitle2());
	
	function getDir(bLeft) {
		return bLeft ? "Left" : "Right";
	};
	
	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass("sapSuiteDmc");
		if (oControl.hasListeners("press")) {    
		oRm.addClass("sapSuiteUiCommonsPointer");
		oRm.writeAttribute("tabindex", "0");
    }
    oRm.addClass(sSize);
    oRm.writeAttribute("role", "presentation");
   	oRm.writeAttributeEscaped("aria-label", oControl.getAltText().replace(/\s/g, " ") + (sap.ui.Device.browser.firefox ? "" : " " + sTooltip ));
	oRm.writeAttributeEscaped("title", sTooltip);
	oRm.writeClasses();
    if (oControl.getWidth()) {
    	oRm.addStyle("width", oControl.getWidth());
    	oRm.writeStyles();
    }
    
	oRm.write(">");
		oRm.write("<div");
		oRm.addClass("sapSuiteDmcCnt");
		oRm.addClass(sSize);
		oRm.writeClasses();
		oRm.write(">");
			oRm.write("<div");
			oRm.writeAttribute("id", oControl.getId() + "-title1");
			oRm.addClass("sapSuiteDmcTitle");
			oRm.addClass("Top");
			oRm.writeClasses();
			oRm.write(">");
				oRm.writeEscaped(oControl.getTitle1());
			oRm.write("</div>");
			
			oRm.write("<div");
			oRm.addClass("sapSuiteDmcChart");
			oRm.addClass(sSize);
			if (bNoTitles){
				oRm.addClass("NoTitles");
			}
			oRm.writeClasses();
			oRm.writeAttribute("id", oControl.getId() + "-dmc-chart");
			oRm.write(">");
				oRm.write("<div");
				oRm.addClass("sapSuiteDmcBar");
				oRm.addClass("Bar1");
				oRm.addClass(sSize);
				if (oControl._oChartData.delta.isMax) {
					oRm.addClass("MaxDelta");
				}
				if (oControl._oChartData.bar1.isSmaller) {
					oRm.addClass("Smaller");
				}
				oRm.addClass(getDir(oControl._oChartData.bar1.left));
				oRm.writeClasses();
				oRm.addStyle("width", oControl._oChartData.bar1.width + "%");
				oRm.writeStyles();
				oRm.writeAttribute("id", oControl.getId() + "-dmc-bar1");
				oRm.write(">");
					oRm.write("<div");
					oRm.addClass("sapSuiteDmcBarInternal");
					oRm.addClass(getDir(oControl._oChartData.bar2.left));
					oRm.writeClasses();
					oRm.write(">");
					oRm.write("</div>");
				oRm.write("</div>");
				
				oRm.write("<div");
				oRm.addClass("sapSuiteDmcBar");
				oRm.addClass("Bar2");
				oRm.addClass(sSize);
				if (oControl._oChartData.delta.isMax) {
					oRm.addClass("MaxDelta");
				}
				if (oControl._oChartData.bar2.isSmaller) {
					oRm.addClass("Smaller");
				}
				oRm.addClass(getDir(oControl._oChartData.bar2.left));
				oRm.writeClasses();
				oRm.addStyle("width", oControl._oChartData.bar2.width + "%");
				oRm.writeStyles();
				oRm.writeAttribute("id", oControl.getId() + "-dmc-bar2");
				oRm.write(">");
					oRm.write("<div");
					oRm.addClass("sapSuiteDmcBarInternal");
					oRm.addClass(getDir(oControl._oChartData.bar1.left));
					oRm.writeClasses();
					oRm.write(">");
					oRm.write("</div>");
				oRm.write("</div>");

				oRm.write("<div");
				oRm.addClass("sapSuiteDmcBar");
				oRm.addClass("Delta");
				oRm.addClass(sSize);
				if (!oControl._oChartData.delta.isMax) {
					oRm.addClass("NotMax");
				}
				if (oControl._oChartData.delta.isZero) {
					oRm.addClass("Zero");
				}
				if (oControl._oChartData.delta.isEqual) {
					oRm.addClass("Equal");
				}
				oRm.addClass(getDir(oControl._oChartData.delta.left));
				oRm.writeClasses();
				oRm.addStyle("width", oControl._oChartData.delta.width + "%");
				oRm.writeStyles();
				oRm.writeAttribute("id", oControl.getId() + "-dmc-bar-delta");
				oRm.write(">");
					oRm.write("<div");
					oRm.addClass(sColor);
					oRm.addClass("sapSuiteDmcBarDeltaInt");
					oRm.writeClasses();
					oRm.write(">");
					oRm.write("</div>");
					
					oRm.write("<div");
					oRm.addClass("sapSuiteDmcBarDeltaStripe");
					oRm.addClass(getDir(true));
					if (oControl._oChartData.delta.isEqual) {
						oRm.addClass("Equal");
					}
					oRm.addClass(oControl._oChartData.delta.isFirstStripeUp ? "Up" : "Down");
					oRm.writeClasses();
					oRm.write(">");
					oRm.write("</div>");
					
					oRm.write("<div");
					oRm.addClass("sapSuiteDmcBarDeltaStripe");
					oRm.addClass(getDir(false));
					oRm.addClass(oControl._oChartData.delta.isFirstStripeUp ? "Down" : "Up");
					oRm.writeClasses();
					oRm.write(">");
					oRm.write("</div>");
				oRm.write("</div>");
				
			oRm.write("</div>");
			
			oRm.write("<div");
			oRm.writeAttribute("id", oControl.getId() + "-title2");
			oRm.addClass("sapSuiteDmcTitle");
			oRm.addClass("Btm");
			oRm.writeClasses();
			oRm.write(">");
				oRm.writeEscaped(oControl.getTitle2());
			oRm.write("</div>");
		oRm.write("</div>");
		 
		oRm.write("<div");
		oRm.addClass("sapSuiteDmcLbls");
		oRm.addClass(sSize);
		oRm.writeClasses();
		oRm.write(">");
			oRm.write("<div");
			oRm.writeAttribute("id", oControl.getId() + "-value1");
			oRm.addClass("sapSuiteDmcValue1");
			oRm.writeClasses();
			oRm.write(">");
				oRm.writeEscaped(sAdv1ToShow);
			oRm.write("</div>");

			oRm.write("<div");
			oRm.writeAttribute("id", oControl.getId() + "-delta");
			oRm.addClass("sapSuiteDmcDelta");
			oRm.addClass(sColor);
			oRm.writeClasses();
			oRm.write(">");
				oRm.writeEscaped(sAddvToShow);
			oRm.write("</div>");
			
			oRm.write("<div");
			oRm.writeAttribute("id", oControl.getId() + "-value2");
			oRm.addClass("sapSuiteDmcValue2");
			oRm.writeClasses();
			oRm.write(">");
				oRm.writeEscaped(sAdv2ToShow);
			oRm.write("</div>");
		oRm.write("</div>");
		
		oRm.write("<div");
		oRm.writeAttribute("id", oControl.getId() + "-calc");
		oRm.addClass("sapSuiteDmcCalc");
		oRm.writeClasses();
		oRm.write(">");
			oRm.write("<div");
			oRm.writeAttribute("id", oControl.getId() + "-calc1");
			oRm.addClass("sapSuiteDmcCalc1");
			oRm.writeClasses();
			oRm.write("></div>");
			oRm.write("<div");
			oRm.writeAttribute("id", oControl.getId() + "-calc2");
			oRm.addClass("sapSuiteDmcCalc2");
			oRm.writeClasses();
			oRm.write("></div>");
		oRm.write("</div>");
	oRm.write("</div>");
};
