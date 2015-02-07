/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.HeaderContainerRenderer");

/**
 * @class HeaderContainer renderer. 
 * @static
 */
sap.suite.ui.commons.HeaderContainerRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.HeaderContainerRenderer.render = function(rm, oControl){ 
     var sTooltip = oControl.getTooltip_AsString();
	 // write the HTML into the render manager
	 rm.write("<div");
	 rm.writeControlData(oControl);
	 if (sTooltip) {
         rm.writeAttributeEscaped("title", sTooltip);
     }
	 rm.addClass("sapSuiteHdrCntr");
	 rm.writeClasses();
	 rm.write(">");

     if (oControl._oArrowPrev) {
         rm.write("<div");
         rm.addClass("sapSuiteHdrCntrBtnCntr");
		 rm.addClass("sapSuiteHdrCntrLeft");
		 rm.writeClasses();
		 rm.write(">");
		 rm.renderControl(oControl._oArrowPrev);
         rm.write("</div>");
     }

	 rm.write("<div");
	 rm.writeAttributeEscaped("id", oControl.getId() + "-scroll-area");
	 rm.addClass("sapSuiteHdrCntrCntr");
	 rm.writeClasses();
	 rm.write(">");
	 rm.renderControl(oControl._oScrollCntr);
     rm.write("</div>");
 
     if (oControl._oArrowNext) {
         rm.write("<div");
         rm.addClass("sapSuiteHdrCntrBtnCntr");
		 rm.addClass("sapSuiteHdrCntrRight");
		 rm.writeClasses();
		 rm.write(">");
         rm.renderControl(oControl._oArrowNext);
         rm.write("</div>");
     }
	 rm.write("</div>");
};
