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
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.JamContentRenderer.render = function(rm, oControl){ 
    var sSize = oControl.getSize();
    var sContentText = oControl.getContentText();
    var sSubheader = oControl.getSubheader(); 
    var sValue = oControl.getValue();
    var sTooltip = oControl.getTooltip_AsString();
    if (!sTooltip) {
    	sTooltip = sValue + " " + sContentText + " " + sSubheader;
    }

    rm.write("<div");
    rm.writeControlData(oControl);
	 
    rm.writeAttributeEscaped("title", sTooltip);    
    rm.writeAttribute("id", oControl.getId() + "-jam-content");
    rm.addClass(sSize);
    rm.addClass("sapSuiteUiCommonsJC");
	if (oControl.hasListeners("press")) { 
		rm.writeAttribute("tabindex", "0");
		rm.addClass("sapSuiteUiCommonsPointer");
    }
    rm.writeClasses();
    rm.write(">");
   
    rm.write("<div");
    rm.writeAttribute("id", oControl.getId() + "-value");
    rm.addClass("sapSuiteUiCommonsJCValue");
    rm.addClass(sSize);
    rm.addClass(oControl.getValueColor());
    rm.writeClasses();
    rm.write(">");
    var iChar = oControl.getTruncateValueTo();
    //Control shows only iChar characters. If the last shown character is decimal separator - 
    //show only first N-1 characters. So "144.5" is shown like "144" and not like "144.".
    if (sValue.length >= iChar && (sValue[iChar-1] === "." || sValue[iChar-1] === ",")) {
        rm.writeEscaped(sValue.substring(0, iChar-1));
    } else {
        rm.writeEscaped(sValue ? sValue.substring(0,iChar) : "");
    }
    rm.write("</div>");

    rm.write("<div");
    rm.addClass("sapSuiteUiCommonsJCCTxt");
    rm.addClass(sSize);
    rm.writeClasses();
    rm.write(">");
	rm.renderControl(oControl._oCText);
    rm.write("</div>");
    
    rm.write("<div");
    rm.writeAttribute("id", oControl.getId() + "-subheader");
    rm.addClass("sapSuiteUiCommonsJCSbh");
    rm.addClass(sSize);
    rm.writeClasses();
    rm.write(">");
    rm.writeEscaped(sSubheader);
    rm.write("</div>");
    
    rm.write("</div>");
    
};
