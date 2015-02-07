/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.ColumnMicroChartRenderer");

/**
 * @class ColumnMicroChart renderer. 
 * @static
 */
sap.suite.ui.commons.ColumnMicroChartRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.ColumnMicroChartRenderer.render = function(oRm, oControl){ 
	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass("sapSuiteCmc");
	oRm.addClass(oControl.getSize());
	
    oRm.writeAttributeEscaped("title", oControl.getTooltip_AsString());
    
	if (oControl.hasListeners("press")) {    
		oRm.addClass("sapSuiteUiCommonsPointer");
		oRm.writeAttribute("tabindex", "0");
	    oRm.writeAttribute("role", "button");
    } else {
    	oRm.writeAttribute("role", "img");
    }
    oRm.writeClasses();
	oRm.addStyle("width", oControl.getWidth());
	oRm.addStyle("height", oControl.getHeight());
	oRm.writeStyles();
	oRm.write(">");
		oRm.write("<div");
		oRm.writeAttributeEscaped("id", oControl.getId() + "-content");
		oRm.addClass("sapSuiteCmcCnt");
		oRm.writeClasses();
		oRm.write(">");
			var iColumnsNum = oControl.getColumns().length;
			for (var i = 0; i < iColumnsNum; i++) {
				var oColumn = oControl.getColumns()[i];
				oRm.write("<div");
				oRm.writeAttribute("id", oControl.getId() + "-bar-" + i);
				oRm.addClass("sapSuiteCmcBar");
				oRm.addClass(oColumn.getColor());
				oRm.writeClasses();
				oRm.write(">");
				oRm.write("</div>");
			}
		
		oRm.write("</div>");
	oRm.write("</div>");
};