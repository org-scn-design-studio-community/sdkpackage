/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.JamContentRenderer");

/**
 * @class JamContent renderer. 
 * @static
 */
sap.suite.ui.commons.JamContentRenderer = {};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.JamContentRenderer.render = function(oRm, oControl){ 
    var sSize = oControl.getSize();
    var sSubheader = oControl.getSubheader(); 
    var sValue = oControl.getValue();
    var sTooltip = oControl.getTooltip_AsString();
    if (typeof sTooltip !== "string") {
    	sTooltip = "";
    }

    oRm.write("<div");
    oRm.writeControlData(oControl);
	 
    oRm.writeAttributeEscaped("title", sTooltip);    
    oRm.writeAttribute("id", oControl.getId() + "-jam-content");
    oRm.writeAttribute("role", "presentation");
   	oRm.writeAttributeEscaped("aria-label", oControl.getAltText().replace(/\s/g, " ") + (sap.ui.Device.browser.firefox ? "" : " " + sTooltip ));
    
    oRm.addClass(sSize);
    oRm.addClass("sapSuiteUiCommonsJC");
	if (oControl.hasListeners("press")) { 
		oRm.writeAttribute("tabindex", "0");
		oRm.addClass("sapSuiteUiCommonsPointer");
    }
    oRm.writeClasses();
    oRm.write(">");
   
    oRm.write("<div");
    oRm.writeAttribute("id", oControl.getId() + "-value");
    oRm.addClass("sapSuiteUiCommonsJCValue");
    oRm.addClass(sSize);
    oRm.addClass(oControl.getValueColor());
    oRm.writeClasses();
    oRm.write(">");
    var iChar = oControl.getTruncateValueTo();
    //Control shows only iChar characters. If the last shown character is decimal separator - 
    //show only first N-1 characters. So "144.5" is shown like "144" and not like "144.".
    if (sValue.length >= iChar && (sValue[iChar-1] === "." || sValue[iChar-1] === ",")) {
        oRm.writeEscaped(sValue.substring(0, iChar-1));
    } else {
        oRm.writeEscaped(sValue ? sValue.substring(0,iChar) : "");
    }
    oRm.write("</div>");

    oRm.write("<div");
    oRm.addClass("sapSuiteUiCommonsJCCTxt");
    oRm.addClass(sSize);
    oRm.writeClasses();
    oRm.write(">");
	oRm.renderControl(oControl._oCText);
    oRm.write("</div>");
    
    oRm.write("<div");
    oRm.writeAttribute("id", oControl.getId() + "-subheader");
    oRm.addClass("sapSuiteUiCommonsJCSbh");
    oRm.addClass(sSize);
    oRm.writeClasses();
    oRm.write(">");
    oRm.writeEscaped(sSubheader);
    oRm.write("</div>");
    oRm.write("</div>");
    
};
