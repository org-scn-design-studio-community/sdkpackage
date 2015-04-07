/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.ChartTileRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.suite.ui.commons.InfoTileRenderer");

/**
 * @class ChartTile renderer.
 * @static
 */
sap.suite.ui.commons.ChartTileRenderer = sap.ui.core.Renderer.extend(sap.suite.ui.commons.InfoTileRenderer);

/**
 * Renders the HTML for the content of the given control, using the provided {@link sap.ui.core.RenderManager}.
 */
sap.suite.ui.commons.ChartTileRenderer.renderContent = function(oRm, oControl) {
    oRm.write("<div");
    oRm.writeAttribute("id", oControl.getId() + "-content");
    oRm.addClass("sapSuiteCmpTileContent");
    oRm.addClass(oControl.getSize());
    oRm.writeClasses();
    oRm.write(">");
        if (sap.suite.ui.commons.LoadState.Loaded == oControl.getState() ) {
            this.renderInnerContent(oRm, oControl);
        }
    oRm.write("</div>");
};

/**
 * Renders the HTML for the description along with the unit of measure text of the given control, using the provided {@link sap.ui.core.RenderManager}.
 **/

sap.suite.ui.commons.ChartTileRenderer.renderDescription = function(oRm, oControl) {
    if (oControl.getDescription() || oControl.getUnit()) {
        oRm.write("<div");
        oRm.addClass("sapSuiteInfoTileDescTxt");
        oRm.addClass(oControl.getState());
        oRm.addClass(oControl.getSize());
        oRm.writeClasses();
        oRm.writeAttribute("id", oControl.getId() + "-description-text");
        oRm.writeAttributeEscaped("title", this.createDescriptionTooltip(oControl));
        oRm.write(">");

        if (oControl.getDescription()) {
            oRm.write("<span");
            oRm.writeAttribute("id", oControl.getId() + "-description");
            oRm.addClass("sapSuiteCmpTileDescInner");
            oRm.writeClasses();
            oRm.write(">");
                oRm.writeEscaped(oControl.getDescription());
            oRm.write("</span>");
        }

        if (oControl.getUnit()) {
            oRm.write("<span");
            oRm.writeAttribute("id", oControl.getId() + "-unit");
            oRm.addClass("sapSuiteCmpTileUnitInner");
            oRm.writeClasses();
            oRm.write(">(");
                oRm.writeEscaped(oControl.getUnit());
            oRm.write(")</span>");
        }

        oRm.write("</div>");
    }
};

/**
 * Creates the tooltip text of the description and the unit of measure of the given control
 */
 
sap.suite.ui.commons.ChartTileRenderer.createDescriptionTooltip = function(oControl) {
    var aResult = [];

    if (oControl.getDescription()) {
        aResult.push(oControl.getDescription());
    }

    if (oControl.getUnit()) {
        aResult.push("(" + oControl.getUnit() + ")");
    }

    return aResult.join(" ");
};
