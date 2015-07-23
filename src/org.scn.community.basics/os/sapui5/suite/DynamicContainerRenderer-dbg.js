/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.DynamicContainerRenderer");

/**
 * @class DynamicContainer renderer. 
 * @static
 */
sap.suite.ui.commons.DynamicContainerRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose title should be rendered
 */
sap.suite.ui.commons.DynamicContainerRenderer.render = function(rm, oControl) {
 	rm.write("<div");
 	rm.writeControlData(oControl);
 	rm.addClass("sapSuiteDC");
 	rm.writeClasses();
 	
 	var sTooltip = oControl.getTooltip_AsString();
	if (sTooltip) {
        rm.writeAttributeEscaped("title", sTooltip);
    }
    rm.writeAttribute("tabindex", "0");
    rm.writeAttribute("role", "presentation");
 	rm.write(">");
 		var iLength = oControl.getTiles().length;
 		
 		for (var i = 0; i < iLength; i++) {
 		 	rm.write("<div");
 		 	rm.writeAttribute("id", oControl.getId() + "-wrapper-" + i);
		 	rm.addClass("sapSuiteDCWrapper");
		 	rm.writeClasses();
		 	rm.write(">");
 				rm.renderControl(oControl.getTiles()[i]);
 			rm.write("</div>");
 		}
 	rm.write("</div>");
};
