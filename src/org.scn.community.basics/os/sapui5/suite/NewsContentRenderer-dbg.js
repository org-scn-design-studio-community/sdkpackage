/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.NewsContentRenderer");

/**
 * @class NewsContent renderer. 
 * @static
 */
sap.suite.ui.commons.NewsContentRenderer = {};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.NewsContentRenderer.render = function(oRm, oControl){ 
    var sSize = oControl.getSize();
    var sSubheader = oControl.getSubheader(); 
    var sTooltip = oControl.getTooltip_AsString();
    if (typeof sTooltip !== "string") {
    	sTooltip = "";
    }

    oRm.write("<div");
    oRm.writeControlData(oControl);
    oRm.writeAttributeEscaped("title", sTooltip);
    oRm.writeAttribute("id", oControl.getId() + "-news-content");
    oRm.writeAttribute("role", "presentation");
   	oRm.writeAttributeEscaped("aria-label", oControl.getAltText().replace(/\s/g, " ") + (sap.ui.Device.browser.firefox ? "" : " " + sTooltip ));
        
    oRm.addClass(sSize);
    oRm.addClass("sapSuiteUiCommonsNwC");
	if (oControl.hasListeners("press")) {
		oRm.addClass("sapSuiteUiCommonsPointer");
		oRm.writeAttribute("tabindex", "0");
    }
    oRm.writeClasses();
    oRm.write(">");
   
    oRm.write("<div");
    oRm.addClass("sapSuiteUiCommonsNwCCTxt");
    oRm.addClass(sSize);
    oRm.writeClasses();
    oRm.write(">");
	oRm.renderControl(oControl._oCText);
    oRm.write("</div>");
    
    oRm.write("<div");
    oRm.writeAttribute("id", oControl.getId() + "-subheader");
    oRm.addClass("sapSuiteUiCommonsNwCSbh");
    oRm.addClass(sSize);
    oRm.writeClasses();
    oRm.write(">");
    oRm.writeEscaped(sSubheader);
    oRm.write("</div>");
    oRm.write("</div>");
};
