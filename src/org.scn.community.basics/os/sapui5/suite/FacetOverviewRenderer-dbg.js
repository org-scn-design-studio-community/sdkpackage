/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.FacetOverviewRenderer");

/**
 * @class FacetOverview renderer.
 * @static
 */
sap.suite.ui.commons.FacetOverviewRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.FacetOverviewRenderer.render = function(oRm, oControl) {
    var sTooltip = oControl.getTooltip_AsString();
    oRm.write("<div");
    oRm.writeControlData(oControl);
    if (sTooltip) {
        oRm.writeAttributeEscaped("title", sTooltip);
    }
    if (oControl.hasListeners("press")) {
    	oRm.addClass("sapSuiteFovClickable");
    }
    oRm.addClass("sapSuiteFov");
    oRm.writeClasses();
    oRm.addStyle("width", oControl.getWidth());
    oRm.addStyle("height", oControl.getHeight());
    oRm.writeStyles();
    oRm.writeAttribute("role", "listitem");
    oRm.write(">");
        oRm.write("<div");
        oRm.writeAttribute("id", oControl.getId() + "-title");
        oRm.addClass("sapSuiteFovTitle");
        oRm.writeClasses();
        oRm.write(">");
	        oRm.write("<div");
	        oRm.writeAttribute("id", oControl.getId() + "-title-text");
	        oRm.addClass("sapSuiteFovTitleText");
	        oRm.writeClasses();
	        oRm.write(">");
            	oRm.writeEscaped(oControl.getTitle());
            oRm.write("</div>");

            if (oControl.getQuantity() >= 0) {
                oRm.write("<div");
                oRm.writeAttribute("id", oControl.getId() + "-qty");
                oRm.addClass("sapSuiteFovQty");
                oRm.writeClasses();
                oRm.write(">");
                    oRm.writeEscaped("(" + oControl.getQuantity() + ")");
                oRm.write("</div>");
            }
                        
            if (oControl._oHoverIcon) {
	            oRm.write("<div");
	            oRm.writeAttribute("id", oControl.getId() + "-hover-icon");
	            oRm.addClass("sapSuiteFovHoverIcon");
	            oRm.writeClasses();
	            oRm.write(">");
	            	oRm.renderControl(oControl._oHoverIcon);
	            oRm.write("</div>");
	        }
        oRm.write("</div>");

        oRm.write("<div");
        oRm.writeAttribute("id", oControl.getId() + "-content");
        
        if (sap.suite.ui.commons.FacetOverviewHeight.Auto == oControl.getHeightType()) {
        	oRm.addStyle("height", "auto");
        	oRm.writeStyles();
        }
        oRm.addClass("sapSuiteFovContent");        
        oRm.writeClasses();
        oRm.write(">");
        	if (oControl.getContent()) {
        		oRm.renderControl(oControl.getContent());
        	} else if (sap.suite.ui.commons.FacetOverviewHeight.XS != oControl.getHeightType()) {
        		oRm.renderControl(oControl._oNoDataLabel);
        	}
        oRm.write("</div>");

    oRm.write("</div>");
};
