/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.MonitoringTileRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.suite.ui.commons.InfoTileRenderer");

/**
 * @class MonitoringTile renderer. 
 * @static
 */
sap.suite.ui.commons.MonitoringTileRenderer = sap.ui.core.Renderer.extend(sap.suite.ui.commons.InfoTileRenderer);

/**
 * Renders the HTML for the footer text of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose footer text should be rendered
 */
sap.suite.ui.commons.MonitoringTileRenderer.renderFooterText = function(oRm, oControl) {
    oRm.write("<span");
    oRm.writeAttribute("id", oControl.getId() + "-footer-text");
    oRm.addClass("sapSuiteUiCommonsMTFooterText");
    oRm.addClass(oControl.getFooterColor());
    oRm.writeClasses();
    oRm.write(">");
    oRm.writeEscaped(oControl.getFooter());
    oRm.write("</span>");
};

