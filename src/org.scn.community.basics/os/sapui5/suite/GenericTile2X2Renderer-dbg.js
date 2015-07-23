/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.GenericTile2X2Renderer");

/**
 * @class GenericTile renderer. 
 * @static
 */
sap.suite.ui.commons.GenericTile2X2Renderer = {
};

/**
 * Renders the HTML for the header of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose title should be rendered
 */
sap.suite.ui.commons.GenericTile2X2Renderer.renderHeader = function(rm, oControl) {
 	rm.write("<div");
 	rm.addClass("sapSuiteGTHdrTxt");
 	rm.addClass(oControl.getSize());
 	rm.writeClasses();
 	rm.writeAttribute("id", oControl.getId() + "-hdr-text");
 	rm.write(">");
 		rm.renderControl(oControl._oTitle);
 	rm.write("</div>");	 	
};

/**
 * Renders the HTML for the subheader of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose description should be rendered
 */
sap.suite.ui.commons.GenericTile2X2Renderer.renderSubheader = function(rm, oControl) {
	rm.write("<div");
	rm.addClass("sapSuiteGTSubHdrTxt");
	rm.addClass(oControl.getSize());
	rm.writeClasses();
	rm.writeAttribute("id", oControl.getId() + "-subHdr-text");
	rm.write(">");
		rm.writeEscaped(oControl.getSubheader());
	rm.write("</div>");
};

/**
 * Renders the HTML for the content of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose content should be rendered
 */
sap.suite.ui.commons.GenericTile2X2Renderer.renderContent = function(rm, oControl) {
	rm.write("<div");
	rm.addClass("sapSuiteGTContent");
	
	rm.addClass(oControl.getSize());
	rm.writeClasses();
	rm.writeAttribute("id", oControl.getId() + "-content");
	rm.write(">");
		this.renderInnerContent(rm, oControl);
	rm.write("</div>");
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.GenericTile2X2Renderer.render = function(rm, oControl) { 
	 // write the HTML into the render manager
	 var sTooltip = oControl.getTooltip_AsString();
	 var sHeaderImage = oControl.getHeaderImage();
	 
	 rm.write("<div");

	 rm.writeControlData(oControl);
	 
	 if(sTooltip) {
		 rm.writeAttributeEscaped("title", sTooltip);
	 }
	 
	 rm.addClass("sapSuiteGT2x2");
	 rm.addClass(oControl.getSize());
	 rm.addClass("TwoByTwo");
	 
	var sDesc = "";
	var iLength = oControl.getTileContent().length;
	for(var i = 0; i < iLength; i++) {
		sDesc += oControl.getTileContent()[i].getId() + " ";
	}
	rm.writeAttribute("role", "presentation");
	rm.writeAttribute("aria-describedby", sDesc);

	 if (oControl.hasListeners("press") && oControl.getState() != "Disabled") {
		rm.addClass("sapSuiteUiCommonsPointer");
		rm.writeAttribute("tabindex", "0");
	 }
	 rm.writeClasses();
	 
	 if (oControl.getBackgroundImage()) {
		rm.write(" style='background-image:url(");
		rm.writeEscaped(oControl.getBackgroundImage());
		rm.write(");'");
	 }
	 
	 rm.write(">");
         var sState = oControl.getState();
         if(sState != sap.suite.ui.commons.LoadState.Loaded) {
        	 rm.write("<div");
			 rm.addClass("sapSuiteGTOverlay");
			 rm.writeClasses();
			 rm.writeAttribute("id", oControl.getId() + "-overlay");
			 rm.write(">");  
		        switch(sState) {
		        case sap.suite.ui.commons.LoadState.Disabled:
				case sap.suite.ui.commons.LoadState.Loading:
					oControl._oBusy.setBusy(sState == "Loading");
					rm.renderControl(oControl._oBusy);
					break;
				case sap.suite.ui.commons.LoadState.Failed:
					rm.write("<div");
					rm.writeAttribute("id", oControl.getId() + "-failed-ftr");
					rm.addClass("sapSuiteGenericTileFtrFld");
					rm.writeClasses();
					rm.write(">");
						rm.write("<div");
						rm.writeAttribute("id", oControl.getId() + "-failed-icon");
						rm.addClass("sapSuiteGenericTileFtrFldIcn");
						rm.writeClasses();
						rm.write(">");
							rm.renderControl(oControl._oWarningIcon);
						rm.write("</div>");
								
						rm.write("<div");
						rm.writeAttribute("id", oControl.getId() + "-failed-text");
						rm.addClass("sapSuiteGenericTileFtrFldTxt");
						rm.writeClasses();
						rm.write(">");
							rm.renderControl(oControl._oFailed);
						rm.write("</div>");

					rm.write("</div>");
					break;
				default:
			}
	         
	
			 rm.write("</div>");
         }
       
         
	 	 rm.write("<div");
		 rm.addClass("sapSuiteGTHdrContent");
		 rm.addClass(oControl.getSize());
		 rm.addClass("TwoByTwo");
		 rm.writeAttributeEscaped("title", oControl.getHeaderAltText());
		 rm.writeClasses();
		 rm.write(">");
	         if (sHeaderImage) {
	             rm.renderControl(oControl._oImage);
	         }
         
			this.renderHeader(rm, oControl);
			this.renderSubheader(rm, oControl);
		 rm.write("</div>");
		 
		rm.write("<div");
		rm.addClass("sapSuiteGTContent");
		rm.addClass(oControl.getSize());
		rm.writeClasses();
		rm.writeAttribute("id", oControl.getId() + "-content");
		rm.write(">");
			var iLength = oControl.getTileContent().length;
			for(var i = 0; i < iLength; i++) {
				rm.renderControl(oControl.getTileContent()[i]);
			}
		rm.write("</div>");
	 rm.write("</div>");
};
