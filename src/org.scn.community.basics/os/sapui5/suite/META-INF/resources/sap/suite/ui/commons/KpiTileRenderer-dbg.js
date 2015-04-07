/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.KpiTileRenderer");

/**
 * @class KpiTile renderer.
 * @static
 */
sap.suite.ui.commons.KpiTileRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.KpiTileRenderer.render = function(oRm, oControl) {
    var sTooltip = oControl.getTooltip_AsString();
    oRm.write("<div");
    oRm.writeControlData(oControl);
    if (sTooltip) {
        oRm.writeAttributeEscaped("title", sTooltip);
    }
    oRm.addClass("sapSuiteKTile");
    oRm.writeClasses();
    oRm.write(">");
        oRm.write("<div");
        oRm.addClass("sapSuiteKTileBorder");
        oRm.writeClasses();
        oRm.write(">");
        oRm.write("</div>");
        oRm.write("<div");
        oRm.writeAttribute("id", oControl.getId() + "-value");
        oRm.addClass("sapSuiteKTileValue");
        oRm.addClass("sapSuiteKTileStatus" + oControl.getValueStatus());
        if (oControl.getDoubleFontSize()) {
            oRm.addClass("sapSuiteKTileValueLargeText");
        } else {
            oRm.addClass("sapSuiteKTileValueSmallText");
        }
        oRm.writeClasses();
        if (!sTooltip) {
        	oRm.writeAttributeEscaped("title", oControl.getValueScale() ? oControl.getValue() + ", " + oControl.getValueScale() : oControl.getValue());
        }
        oRm.write(">");
            oRm.writeEscaped(oControl.getValue());

        if (oControl.getValueScale()) {
            oRm.write("<span");
            oRm.writeAttribute("id", oControl.getId() + "-value-scale");
            oRm.addClass("sapSuiteKTileScale");
            oRm.writeClasses();
            oRm.write(">");
                oRm.writeEscaped(oControl.getValueScale());
            oRm.write("</span>");
        }
        oRm.write("</div>");

        oRm.write("<div");
        oRm.writeAttribute("id", oControl.getId() + "-desc");
        oRm.addClass("sapSuiteKTileDesc");
        
        oRm.writeClasses();
        var sBottomText = "";
        if (oControl.getValueUnit()) {
            sBottomText += oControl.getValueUnit()+", ";
        }
        sBottomText += oControl.getDescription();
        
        if (!sTooltip) {
        	oRm.writeAttributeEscaped("title", sBottomText);
        }
        oRm.write(">");
            oRm.writeEscaped(sBottomText);
        oRm.write("</div>");
    oRm.write("</div>");
};
