/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.ChartContainerContentRenderer");

/**
 * @class ChartContainerContent renderer. 
 * @static
 */
sap.suite.ui.commons.ChartContainerContentRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.ChartContainerContentRenderer.render = function(oRm, oControl){ 
//just render the embedded control as it is. The purpose is to only provide extra properties.
   oRm.renderControl(oControl.getContent());
};
