/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.NumericContentRenderer");

/**
 * @class NumericContent renderer. 
 * @static
 */
sap.suite.ui.commons.NumericContentRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.NumericContentRenderer.render = function(oRm, oControl) {
	var sEmptyValue = oControl.getNullifyValue() ? "0" : "";
    var sSize = oControl.getSize();
    var sValue = oControl.getValue();
    var sIndicator = oControl.getIndicator();
    var sScale = oControl.getScale();
    var sState = oControl.getState();
    var sColor = oControl.getValueColor();
    var bIndicator = sap.suite.ui.commons.DeviationIndicator.None != sIndicator && "" != sValue;
    var oIcon = oControl._oIcon;
    
	if (oControl.getFormatterValue()) {
		var oFormattedValue = oControl._parseFormattedValue(sValue);
		
		sScale = oFormattedValue.scale;
		sValue = oFormattedValue.value;
	}
	var bScale = sScale && sValue;
    oRm.write("<div");
    oRm.writeControlData(oControl);
    var sTooltip = oControl.getTooltip_AsString();
    if (typeof sTooltip !== "string") {
    	sTooltip = "";
    }

    oRm.writeAttributeEscaped("title", sTooltip);
    oRm.writeAttribute("role", "presentation");
   	oRm.writeAttributeEscaped("aria-label", oControl.getAltText().replace(/\s/g, " ") + (sap.ui.Device.browser.firefox ? "" : " " + sTooltip ));
    if (sState == "Failed" || sState == "Loading") {
    	oRm.writeAttribute("aria-disabled", "true");
    }
    
    if(oControl.getAnimateTextChange()) {
	    oRm.addStyle("opacity", "0.25");
    }
    
    if (oControl.getWidth()) {
    	oRm.addStyle("width", oControl.getWidth());
    }
    
    oRm.writeStyles();
    oRm.addClass(sSize);
    oRm.addClass("sapSuiteUiCommonsNC");
	if (oControl.hasListeners("press")) {
		oRm.writeAttribute("tabindex", "0");
		oRm.addClass("sapSuiteUiCommonsPointer");
    }
    oRm.writeClasses();
    

    
    oRm.write(">");

        oRm.write("<div");
        oRm.addClass("sapSuiteUiCommonsNCInner");
        oRm.addClass(sSize);
        oRm.writeClasses();
        oRm.write(">");

	    if (bIndicator || bScale) {
	        oRm.write("<div");
	        oRm.addClass("sapSuiteUiCommonsNCIndScale");
	        oRm.addClass(sSize);
	        oRm.addClass(sState);
	        oRm.writeClasses();
	        oRm.write(">");
	
	        oRm.write("<div");
	        oRm.writeAttribute("id", oControl.getId() + "-indicator");
	        oRm.addClass("sapSuiteUiCommonsNCIndicator");
	        oRm.addClass(sSize);
	        oRm.addClass(sIndicator);
	        oRm.addClass(sState);
	        oRm.addClass(sColor);
	        oRm.writeClasses();
	        oRm.write("></div>");
		
		    if (bScale) {
		        oRm.write("<div");
		        oRm.writeAttribute("id", oControl.getId() + "-scale");
		        oRm.addClass("sapSuiteUiCommonsNCScale");
		        oRm.addClass(sSize);
		        oRm.addClass(sState);
		        oRm.addClass(sColor);
		        oRm.writeClasses();
		        oRm.write(">");
		        oRm.writeEscaped(sScale.substring(0,3));
		        oRm.write("</div>");
		    }
	        oRm.write("</div>");
	    }
	
        if (oIcon) {
        	oIcon.addStyleClass(sSize);
        	oIcon.addStyleClass(sState);
            oRm.renderControl(oIcon);
        	oIcon.removeStyleClass(sSize);
        	oIcon.removeStyleClass(sState);
        }
		    
	    oRm.write("<div");
	    
	    oRm.writeAttribute("id", oControl.getId() + "-value");
	    oRm.addClass("sapSuiteUiCommonsNCValue");
	    oRm.addClass(sColor);
	    oRm.addClass(sSize);
	    oRm.addClass(sState);
	    oRm.writeClasses();
	    oRm.write(">");
		    oRm.write("<div");
		    oRm.writeAttribute("id", oControl.getId() + "-value-scr");
		    oRm.addClass("sapSuiteUiCommonsNCValueScr");
		    oRm.addClass(sSize);
		    oRm.writeClasses();
		    oRm.write(">");
		    
		    var iChar = oControl.getTruncateValueTo();
		    //Control shows only iChar characters. If the last shown character is decimal separator - 
		    //show only first N-1 characters. So "144.5" is shown like "144" and not like "144.".
		    if (sValue.length >= iChar && (sValue[iChar-1] === "." || sValue[iChar-1] === ",")) {
		        oRm.writeEscaped(sValue.substring(0, iChar-1));
		    } else {
		        oRm.writeEscaped(sValue ? sValue.substring(0,iChar) : sEmptyValue);
		    }
	    	oRm.write("</div>");
	    	oRm.write("</div>");
	    	
	    oRm.write("</div>");
    oRm.write("</div>");
    
};
