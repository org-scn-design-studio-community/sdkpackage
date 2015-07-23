/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
 
jQuery.sap.declare("sap.suite.ui.commons.TargetFilterRenderer");

/**
 * @class TargetFilter renderer. 
 * @static
 */
sap.suite.ui.commons.TargetFilterRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.TargetFilterRenderer.render = function(oRm, oControl){ 
	 oRm.write("<div");
	 oRm.writeControlData(oControl);
	 oRm.addClass("sapSuiteUiTF");
	 oRm.writeClasses();
	 oRm.write(">");
		oRm.write("<div");
		oRm.addClass("sapSuiteUiTFOuterCont");
		oRm.writeClasses();
		oRm.write(">");

			 oRm.write("<div");
			 oRm.addClass("sapSuiteUiTFOuterCircle");
			 oRm.writeClasses();
			 oRm.write(">");

				 oRm.write("<div");
				 oRm.addClass("sapSuiteUiTFVerticalLine");
				 oRm.writeClasses();
				 oRm.write(">");
				 oRm.write("</div>");

//				 for (var iOthers = 0; iOthers < 4; iOthers++) {
//					 if (oControl.oLinkOthers[iOthers]) {
//						 oRm.write("<div>");
//				//			 oRm.renderControl(oControl.oLinkOthers[iOthers]);
//						 oRm.write("</div>");
//					 }
//				 }

//				var aLinkClouds = oControl._oModel.getLinkClouds();
//				for (var i = 0; i < aLinkClouds.length; i++) {
//					oRm.renderControl(aLinkClouds[i]);
//			 	}
			for (var i = 0; i < oControl._aQudrants.length; i++) {
				oRm.renderControl(oControl._aQudrants[i]);
		 	}
			 oRm.write("</div>");

//			 oRm.write("<div");
//			 oRm.addClass("sapSuiteUiTFParCont");
//			 oRm.addClass("Quad1");
//			 oRm.writeClasses();
//			 oRm.write(">");
//			 	oRm.renderControl(oControl._oFilterCb0);
//			 oRm.write("</div>");
//
//			 oRm.write("<div");
//			 oRm.addClass("sapSuiteUiTFValHel");
//			 oRm.addClass("Quad1");
//			 oRm.writeClasses();
//			 oRm.write(">");
//			 	oRm.renderControl(oControl._oValueHelpBtn1);
//			 oRm.write("</div>");
//			 
//			 oRm.write("<div");
//			 oRm.addClass("sapSuiteUiTFParCont");
//			 oRm.addClass("Quad2");
//			 oRm.writeClasses();
//			 oRm.write(">");
//			 	oRm.renderControl(oControl._oFilterCb1);
//			 oRm.write("</div>");
//
//			 oRm.write("<div");
//			 oRm.addClass("sapSuiteUiTFParCont");
//			 oRm.addClass("Quad3");
//			 oRm.writeClasses();
//			 oRm.write(">");
//			 	oRm.renderControl(oControl._oFilterCb2);
//			 oRm.write("</div>");
//
//			 oRm.write("<div");
//			 oRm.addClass("sapSuiteUiTFParCont");
//			 oRm.addClass("Quad4");
//			 oRm.writeClasses();
//			 oRm.write(">");
//			 	oRm.renderControl(oControl._oFilterCb3);
//			 oRm.write("</div>");
//
//
//
//			 oRm.write("<div");
//			 oRm.addClass("sapSuiteUiTFValHel");
//			 oRm.addClass("Quad2");
//			 oRm.writeClasses();
//			 oRm.write(">");
//			 	oRm.renderControl(oControl._oValueHelpBtn2);
//			 oRm.write("</div>");
//
//			 oRm.write("<div");
//			 oRm.addClass("sapSuiteUiTFValHel");
//			 oRm.addClass("Quad3");
//			 oRm.writeClasses();
//			 oRm.write(">");
//			 	oRm.renderControl(oControl._oValueHelpBtn3);
//			 oRm.write("</div>");
//
//			 oRm.write("<div");
//			 oRm.addClass("sapSuiteUiTFValHel");
//			 oRm.addClass("Quad4");
//			 oRm.writeClasses();
//			 oRm.write(">");
//			 	oRm.renderControl(oControl._oValueHelpBtn4);
//			 oRm.write("</div>");

			 oRm.write("<div");
			 oRm.addClass("sapSuiteUiTFHorizontalLine");
			 oRm.writeClasses();
			 oRm.write(">");
			 oRm.write("</div>");

			 oRm.write("<div");
			 oRm.addClass("sapSuiteUiTFCentralCircle");
			 oRm.writeClasses();
			 oRm.write(">");

				 oRm.write("<div");
				 oRm.addClass("sapSuiteUiTFCentralTopLabel");
				 oRm.writeClasses();
				 oRm.write(">");
				 oRm.writeEscaped("Show Selected");
				 oRm.write("</div>");
	
				 oRm.renderControl(oControl._oCountDisplay);

			 oRm.write("</div>");

/*
			 oRm.write("<div");
			 oRm.addClass("sapSuiteUiTFSettingsCont");
			 oRm.writeClasses();
			 oRm.write(">");
			 	oRm.renderControl(oControl._oSettingsBtn);
			 oRm.write("</div>");
*/
			 oRm.write("<div");
			 oRm.addClass("sapSuiteUiTFRightPanel");
			 oRm.writeClasses();
			 oRm.write(">");
			 	oRm.renderControl(oControl._oRightPanel);
			 oRm.write("</div>");

		oRm.write("</div>");

	oRm.write("<div");
	oRm.addClass("sapSuiteUiTFShutter");
	oRm.addClass("Top");
	oRm.writeClasses();
	oRm.write(">");
	oRm.write("</div>");
	
	oRm.write("<div");
	oRm.addClass("sapSuiteUiTFShutter");
	oRm.addClass("Bottom");
	oRm.writeClasses();
	oRm.write(">");
	oRm.write("</div>");

	oRm.write("</div>");
};
