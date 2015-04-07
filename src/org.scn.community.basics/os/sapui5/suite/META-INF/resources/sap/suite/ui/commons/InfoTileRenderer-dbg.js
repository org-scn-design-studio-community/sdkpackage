/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.InfoTileRenderer");

/**
 * @class InfoTile renderer. 
 * @static
 */
sap.suite.ui.commons.InfoTileRenderer = {
};

/**
 * Renders the HTML for the title of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose title should be rendered
 */
sap.suite.ui.commons.InfoTileRenderer.renderTitle = function(rm, oControl) {
 	if(oControl.getTitle() !== "") {
	 	rm.write("<div");
	 	rm.addClass("sapSuiteInfoTileTitleTxt");
	 	rm.addClass(oControl.getState());
	 	rm.addClass(oControl.getSize());
	 	rm.writeClasses();
	 	rm.writeAttribute("id", oControl.getId() + "-title-text");
	 	rm.writeAttributeEscaped("title", oControl.getTitle());
	 	rm.write(">");
	 		rm.renderControl(oControl._oTitle);
	 	rm.write("</div>");	 	
 	}
};

/**
 * Renders the HTML for the description of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose description should be rendered
 */
sap.suite.ui.commons.InfoTileRenderer.renderDescription = function(rm, oControl) {
 	if(oControl.getDescription() !== "") {
		rm.write("<div");
		rm.addClass("sapSuiteInfoTileDescTxt");
	 	rm.addClass(oControl.getState());
		rm.addClass(oControl.getSize());
		rm.writeClasses();
		rm.writeAttribute("id", oControl.getId() + "-description-text");
		rm.writeAttributeEscaped("title", oControl.getDescription());
		rm.write(">");
			rm.writeEscaped(oControl.getDescription());
		rm.write("</div>");
 	}
};

/**
 * Renders the HTML for the inner content of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose inner content should be rendered
 */
sap.suite.ui.commons.InfoTileRenderer.renderInnerContent = function(rm, oControl) {
	rm.renderControl(oControl.getContent());
};

/**
 * Renders the HTML for the content of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose content should be rendered
 */
sap.suite.ui.commons.InfoTileRenderer.renderContent = function(rm, oControl) {
	rm.write("<div");
	rm.addClass("sapSuiteInfoTileContent");
	
	rm.addClass(oControl.getSize());
	rm.writeClasses();
	rm.writeAttribute("id", oControl.getId() + "-content");
	rm.write(">");
		this.renderInnerContent(rm, oControl);
	rm.write("</div>");
};

/**
 * Renders the HTML for the footer text of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose footer text should be rendered
 */
sap.suite.ui.commons.InfoTileRenderer.renderFooterText = function(rm, oControl) {
    if(oControl.getFooter() !== "") {
            rm.writeEscaped(oControl.getFooter());          
    }
};

/**
 * Renders the HTML for the footer tooltip of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose footer tooltip should be rendered
 */
sap.suite.ui.commons.InfoTileRenderer.renderFooterTooltip = function(rm, oControl) {
    rm.writeAttributeEscaped("title", oControl.getFooter());
};


/**
 * Renders the HTML for the footer of the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose footer should be rendered
 */
sap.suite.ui.commons.InfoTileRenderer.renderFooter = function(rm, oControl) {
	// footer text div
	var sState = oControl.getState();
	rm.write("<div");
	rm.addClass("sapSuiteInfoTileFtrTxt");

	rm.addClass(oControl.getSize());
	rm.addClass(oControl.getState());
	rm.writeClasses();
	rm.writeAttribute("id", oControl.getId() + "-footer-text");
	if(sState == sap.suite.ui.commons.LoadState.Loaded) {
	    this.renderFooterTooltip(rm, oControl);
	}
	rm.write(">");
	switch(sState) {
		case sap.suite.ui.commons.LoadState.Loading:
				var oBusy = new sap.ui.core.HTML({
					content:"<div class='sapSuiteInfoTileLoading'><div>"
				});
				oBusy.setBusyIndicatorDelay(0);
				oBusy.setBusy(true);
				rm.renderControl(oBusy);
			break;
		case sap.suite.ui.commons.LoadState.Failed:
			rm.renderControl(oControl._oWarningIcon);
			
			rm.write("<span");
			rm.writeAttribute("id", oControl.getId() + "-failed-text");
			rm.addClass("sapSuiteInfoTileFtrFldTxt");
			rm.writeClasses();
			rm.write(">");
					rm.writeEscaped(oControl._sFailedToLoad);
			rm.write("</span>");
			break;
		default:
		    this.renderFooterText(rm, oControl);
	}
	rm.write("</div>");
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.InfoTileRenderer.render = function(rm, oControl) { 
	 // write the HTML into the render manager
	 var sTooltip = oControl.getTooltip_AsString();
	 rm.write("<div");
	 rm.writeControlData(oControl);
	 
	 if(sTooltip) {
		 rm.writeAttributeEscaped("title", sTooltip);
	 }
	 
	 rm.addClass("sapSuiteInfoTile");
	 rm.addClass(oControl.getSize());
	 rm.addClass(oControl.getState());
	 rm.writeClasses();
	 rm.writeAttribute("tabindex", "0");
	 rm.write(">");
		this.renderTitle(rm, oControl);
		this.renderDescription(rm, oControl);
		this.renderContent(rm, oControl);
		this.renderFooter(rm, oControl);
	 rm.write("</div>");
};
