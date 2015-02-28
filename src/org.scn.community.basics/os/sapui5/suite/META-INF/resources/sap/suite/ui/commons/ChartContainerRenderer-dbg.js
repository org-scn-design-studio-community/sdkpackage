/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.ChartContainerRenderer");

/**
 * @class ChartContainer renderer.
 * @static
 */
sap.suite.ui.commons.ChartContainerRenderer = {};

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            oRm the RenderManager that can be used for writing to the render
 *            output buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.suite.ui.commons.ChartContainerRenderer.render = function(oRm, oControl) {
	var selectedChart = oControl.getSelectedChart();

	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass("sapSuiteUiCommonsChartContainer");
	oRm.writeClasses();
	oRm.write(">");

	// wrapper
	oRm.write("<div");
	oRm.writeAttributeEscaped("id", oControl.getId() + "-wrapper");
	oRm.addClass("sapSuiteUiCommonsChartContainerWrapper");
	oRm.writeClasses();
	oRm.write(">");
    
    oRm.write("<div");
	oRm.addClass("sapSuiteUiCommonsChartContainerToolBarArea");
	oRm.writeClasses();
	oRm.write(">");
	// toolbar
	oRm.renderControl(oControl._oToolBar);
	oRm.write("</div>");// end toolbar

	// chart part
	oRm.write("<div");
	oRm.addClass("sapSuiteUiCommonsChartContainerChartArea");
	oRm.writeClasses();
	oRm.write(">");

	oRm.renderControl(selectedChart);//oControl.getContent()[0]);

	oRm.write("</div>");// end chartArea
	oRm.write("</div>"); // end wrapper

	oRm.write("</div>");

};
