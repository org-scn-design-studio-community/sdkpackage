/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.DateRangeSliderRenderer");

/**
 * @class DateRangeSlider renderer.
 * @static
 */
sap.suite.ui.commons.DateRangeSliderRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.suite.ui.commons.DateRangeSlider}
 *                oDateRangeSlider an object representation of the control that should be rendered
 */
sap.suite.ui.commons.DateRangeSliderRenderer.render = function(oRm, oDateRangeSlider) {

    if (!oDateRangeSlider.getVisible()) {
        return;
    }
    // write the HTML into the render manager
    oRm.write("<span");
    oRm.writeControlData(oDateRangeSlider);
    oRm.addClass("sapSuiteUiCommonsDateRangeSlider");
    oRm.writeClasses();
    oRm.write(">"); // span element
    oRm.renderControl(oDateRangeSlider._oDateRangeSliderInternal);
    oRm.write("</span>");
};
