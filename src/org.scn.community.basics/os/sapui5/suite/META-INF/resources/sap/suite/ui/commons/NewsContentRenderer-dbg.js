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
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.NewsContentRenderer.render = function(rm, oControl){ 
    var sSize = oControl.getSize();
    var sContentText = oControl.getContentText();
    var sSubheader = oControl.getSubheader(); 
    var sTooltip = oControl.getTooltip_AsString();
    if (!sTooltip) {
    	sTooltip = sContentText + " " + sSubheader;
    }

    rm.write("<div");
    rm.writeControlData(oControl);
    rm.writeAttributeEscaped("title", sTooltip);
    rm.writeAttribute("id", oControl.getId() + "-news-content");
    rm.addClass(sSize);
    rm.addClass("sapSuiteUiCommonsNwC");
	if (oControl.hasListeners("press")) {
		rm.addClass("sapSuiteUiCommonsPointer");
		rm.writeAttribute("tabindex", "0");
    }
    rm.writeClasses();
    rm.write(">");
   
    rm.write("<div");
    rm.addClass("sapSuiteUiCommonsNwCCTxt");
    rm.addClass(sSize);
    rm.writeClasses();
    rm.write(">");
	rm.renderControl(oControl._oCText);
    rm.write("</div>");
    
    rm.write("<div");
    rm.writeAttribute("id", oControl.getId() + "-subheader");
    rm.addClass("sapSuiteUiCommonsNwCSbh");
    rm.addClass(sSize);
    rm.writeClasses();
    rm.write(">");
    rm.writeEscaped(sSubheader);
    rm.write("</div>");
    
    rm.write("</div>");
};
