/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.PictureZoomInRenderer");

/**
 * @class PictureZoomIn renderer. 
 * @static
 */
sap.suite.ui.commons.PictureZoomInRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.PictureZoomInRenderer.render = function(oRm, oControl){ 
	// write the HTML into the render manager
	
	
	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass("sapSuiteUiCommonsPictureZoomIn");
	oRm.writeClasses();
	oRm.writeAttribute("role", "img");
	var sTooltip = oControl.getTooltip_AsString();
	if (sTooltip) {
		oRm.writeAttribute("title", sTooltip);
	}
	oRm.write(">");
    if (oControl.getBusyIndicator()) {
        oRm.write("<div");
        oRm.writeAttribute("id", oControl.getId() + "-busy");
        oRm.addClass("sapSuiteUiCommonsPictureZoomInBusy");
        oRm.writeClasses();
        oRm.write(">");
            oRm.renderControl(oControl.getBusyIndicator());
        oRm.write("</div>");
    }
	oRm.renderControl(oControl._oImage);
	oRm.renderControl(oControl._oDescription);
	oRm.write("</div>");
};
