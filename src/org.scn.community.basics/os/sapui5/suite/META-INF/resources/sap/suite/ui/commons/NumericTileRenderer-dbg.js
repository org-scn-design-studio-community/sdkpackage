/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.NumericTileRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.suite.ui.commons.InfoTileRenderer");

/**
 * @class NumericTile renderer. 
 * @static
 */
sap.suite.ui.commons.NumericTileRenderer = sap.ui.core.Renderer.extend(sap.suite.ui.commons.InfoTileRenderer);

sap.suite.ui.commons.NumericTileRenderer._getFooterText = function(oRm, oControl) {
    var sFooter = oControl.getFooter();
    var sUnit = oControl.getUnit();
    return sUnit 
         ? (sap.ui.getCore().getConfiguration().getRTL() 
                ? ((sFooter ? sFooter + " ," : "") + sUnit) 
                : (sUnit + (sFooter ? ", " + sFooter : ""))) 
         : sFooter;                     
};

/**
 * Renders the HTML for the footer tooltip of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose footer tooltip should be rendered
 */
sap.suite.ui.commons.NumericTileRenderer.renderFooterTooltip = function(oRm, oControl) {
    oRm.writeAttributeEscaped("title", this._getFooterText(oRm, oControl));
};


/**
 * Renders the HTML for the footer text of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose footer text should be rendered
 */
sap.suite.ui.commons.NumericTileRenderer.renderFooterText = function(oRm, oControl) {
    oRm.writeEscaped(this._getFooterText(oRm, oControl));
};

