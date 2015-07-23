/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.TileContentRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class TileContent renderer. 
 * @static
 */
sap.suite.ui.commons.TileContentRenderer = {};

/**
 * Renders the HTML for the title of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose title should be rendered
 */
sap.suite.ui.commons.TileContentRenderer.render = function(rm, oControl) {

    var sTooltip = oControl.getTooltip_AsString();
    var sAltText = oControl.getAltText ? oControl.getAltText() : "";

 	rm.write("<div");
 	rm.writeControlData(oControl);
 	rm.addClass("sapSuiteTileCnt");
 	rm.addClass(oControl._getContentType());	
 	rm.addClass(oControl.getSize());
 	rm.addClass("ft-"+oControl.getFrameType());
 	if(sTooltip) {
 		rm.writeAttributeEscaped("title", sTooltip);
 	}
 	rm.writeAttribute("aria-describedby", oControl.getId() + "-info");
	rm.writeClasses();
	rm.write(">");
		this.renderContent(rm, oControl);
		this.renderFooter(rm, oControl);
		
	    rm.write("<div");
	    rm.writeAttribute("id", oControl.getId() + "-info");
	    rm.addStyle("display", "none");
	    rm.writeAttribute("aria-hidden", "true");
	    rm.writeStyles();
	    rm.write(">");
	    	rm.writeEscaped(sAltText);
	    rm.write("</div>");
	rm.write("</div>");
	 	
};


/**
 * Renders the HTML for the content of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose content should be rendered
 */
sap.suite.ui.commons.TileContentRenderer.renderContent = function(rm, oControl) {
	var oCnt = oControl.getContent();
	if (oCnt) {
		rm.write("<div");
		rm.addClass("sapSuiteTileCntContent");
		rm.addClass(oControl.getSize());
		rm.writeClasses();
		rm.writeAttribute("id", oControl.getId() + "-content");
		rm.write(">");
			if(!oCnt.hasStyleClass("sapSuiteUiTcInnerMarker")) {
				oCnt.addStyleClass("sapSuiteUiTcInnerMarker");
			}
			rm.renderControl(oCnt);
		rm.write("</div>");
	}
};

/**
 * Renders the HTML for the footer of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose footer should be rendered
 */
sap.suite.ui.commons.TileContentRenderer.renderFooter = function(rm, oControl) {
	var sFooterTxt = oControl._getFooterText(rm, oControl);
	// footer text div
	rm.write("<div");
	rm.addClass("sapSuiteTileCntFtrTxt");
	rm.addClass(oControl.getSize());
	rm.writeClasses();
	rm.writeAttribute("id", oControl.getId() + "-footer-text");
	rm.writeAttributeEscaped("title", sFooterTxt);
	rm.write(">");
		rm.writeEscaped(sFooterTxt);
	rm.write("</div>");
};

//sap.suite.ui.commons.TileContentRenderer._getFooterText = function(oControl) {
//    var sFooter = oControl.getFooter();
//    var sUnit = oControl.getUnit();
//    return sUnit 
//         ? (sap.ui.getCore().getConfiguration().getRTL() 
//                ? ((sFooter ? sFooter + " ," : "") + sUnit) 
//                : (sUnit + (sFooter ? ", " + sFooter : ""))) 
//         : sFooter;                     
//};


