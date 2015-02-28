/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.SplitButtonRenderer");

/**
 * @class SplitButton renderer.
 * @static
 */
sap.suite.ui.commons.SplitButtonRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control}
 *                oSplitButton an object representation of the control that should be rendered
 */
sap.suite.ui.commons.SplitButtonRenderer.render = function(oRm, oSplitButton) {

    // return immediately if control is invisible
    if (!oSplitButton.getVisible()) {
        return;
    }
    // write the HTML into the render manager
    oRm.write("<span");
    oRm.writeControlData(oSplitButton);
    oRm.addClass("sapSuiteUiCommonsSplitButton");
    oRm.writeClasses();
    oRm.write(">"); // span element
    oRm.renderControl(oSplitButton._oDefaultActionButton);
    oRm.renderControl(oSplitButton._oMenuButton);
    oRm.write("</span>");
};
