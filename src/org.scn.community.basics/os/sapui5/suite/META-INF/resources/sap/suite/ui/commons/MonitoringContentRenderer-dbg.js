/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.MonitoringContentRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class MonitoringContent renderer. 
 * @static
 */
sap.suite.ui.commons.MonitoringContentRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.MonitoringContentRenderer.render = function(rm, oControl){ 
    var sSize = oControl.getSize();
    var sValue = oControl.getValue();
    var sState = oControl.getState();
    
    var sTooltip = oControl.getTooltip_AsString();

    rm.write("<div");
    rm.writeControlData(oControl);
	 
	 if(sTooltip) {
		 rm.writeAttributeEscaped("title", sTooltip);
	 }
    
    if(oControl.getAnimateTextChange()) {
	    rm.addStyle("opacity", "0.25");
	    rm.writeStyles();
    }
    
    rm.addClass(sSize);
    rm.addClass("sapSuiteUiCommonsMC");
	if (oControl.hasListeners("press")) {    
		rm.addClass("sapSuiteUiCommonsPointer");
    }
    rm.writeClasses();
	rm.writeAttribute("tabindex", "0");
    rm.write(">");
           
    rm.write("<div");
    rm.writeAttribute("id", oControl.getId() + "-value");
    rm.addClass("sapSuiteUiCommonsMCValue");
    rm.addClass(sSize);
    rm.addClass(sState);
    rm.writeClasses();
    rm.write(">");
    //Control shows only 4 characters. If last shown character is decimal separator - 
    //show only first 3 characters. So "144.5" is shown like "144" and not like "144.".
    if (sValue.length >= 4 && (sValue[3] === "." || sValue[3] === ",")) {
        rm.writeEscaped(sValue.substring(0, 3));
    } else {
        rm.writeEscaped(sValue ? sValue.substring(0,4) : "0");
    }
    rm.write("</div>");
    
    rm.write("<div");
    rm.writeAttribute("id", oControl.getId() + "-icon-container");
    rm.addClass("sapSuiteUiCommonsMCIcon");
    rm.addClass(sSize);
    rm.addClass(sState);
    rm.writeClasses();
    rm.write(">");
    rm.renderControl(oControl._oIcon);
    rm.write("</div>");

    rm.write("</div>");
    
};
