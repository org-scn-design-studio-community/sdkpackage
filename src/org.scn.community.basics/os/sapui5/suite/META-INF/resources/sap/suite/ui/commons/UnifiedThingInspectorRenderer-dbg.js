/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.UnifiedThingInspectorRenderer");

/**
 * @class UnifiedThingInspector renderer. 
 * @static
 */
sap.suite.ui.commons.UnifiedThingInspectorRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.UnifiedThingInspectorRenderer.render = function(oRm, oControl){
    var sTooltip = oControl.getTooltip_AsString();
    oRm.write("<div");
    oRm.writeControlData(oControl);
    if (sTooltip) {
        oRm.writeAttributeEscaped("title", sTooltip);
    }
    oRm.addStyle("height", oControl.getHeight());
    oRm.writeStyles();
    oRm.addClass("sapSuiteUti");
    oRm.writeClasses();
    oRm.write(">");
        oRm.renderControl(oControl._oNavContainer);
    oRm.write("</div>");
};
