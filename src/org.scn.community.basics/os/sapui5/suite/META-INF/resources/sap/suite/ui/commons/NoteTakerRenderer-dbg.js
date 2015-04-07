/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.NoteTakerRenderer");

/**
 * @class NoteTaker renderer. 
 * @static
 */
sap.suite.ui.commons.NoteTakerRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.NoteTakerRenderer.render = function(rm, oControl){
    var sTooltip = oControl.getTooltip_AsString();
	rm.write("<div");
	rm.writeControlData(oControl);
    if (sTooltip) {
        rm.writeAttributeEscaped("title", sTooltip);
    }
	rm.addClass("sapSuiteUiCommonsNoteTaker");
	rm.writeClasses();
	rm.writeAttribute("style", "width:" + (oControl.getVisibleNotes() * 350 + 50) + "px");
	rm.write(">");
        rm.write("<div");
        rm.writeAttribute("id", oControl.getId() + "-filterPane");
        rm.addClass("sapSuiteUiCommonsNoteTakerFilterPane");
        rm.writeClasses();
        rm.write(">");
            // Left section
            rm.write("<div");
            rm.addClass("suiteUiNtFilterPaneLeftSection");
            rm.writeClasses();
            rm.write(">");
                rm.renderControl(oControl._oHomeButton);
                rm.write("<span");
                rm.writeAttribute("id", oControl.getId() + "-filterPane-header");
                rm.addClass("suiteUiNtFilterTitle");
                rm.writeClasses();
                rm.write(">");
                    rm.writeEscaped(oControl._rb.getText("NOTETAKER_FILTER_TITLE") + ":");
                rm.write("</span>");
                rm.renderControl(oControl._oFilterTagButton);
                rm.renderControl(oControl._oFilterThumbUpButton);
                rm.renderControl(oControl._oFilterThumbDownButton);
                rm.renderControl(oControl._oFilterAllButton);
            rm.write("</div>");

            // Right section
            rm.write("<div");
            rm.addClass("suiteUiNtFilterPaneRightSection");
            rm.writeClasses();
            rm.write(">");
                if (oControl.getVisibleNotes() > 1) {
                    rm.renderControl(oControl._oFilterSearchField);
                } else {
                	rm.renderControl(oControl._oSearchButton);
                }
            rm.write("</div>");
        rm.write("</div>");

        rm.renderControl(oControl._carousel);
        
        if (oControl.getVisibleNotes() == 1) {
        	this.searchTextRender(rm, oControl);
		}
        
        rm.write("<div");
        rm.writeAttribute("id", oControl.getId() + "-filterTag-panel");
        rm.addClass("sapSuiteUiCommonsNoteTakerFilterTagPanel");
        rm.addClass("sapUiShd");
        rm.writeClasses();
        rm.write(">");

            rm.write("<div");
            rm.writeAttribute("id", oControl.getId() + "-filterTag-arrow");
            rm.addClass("sapSuiteUiCommonsNoteTakerFilterTagArrow");
            rm.writeClasses();
            rm.write(">");
            rm.write("</div>");

            rm.write("<div");
            rm.writeAttribute("id", oControl.getId() + "-filterTag-header");
            rm.addClass("sapSuiteUiCommonsNoteTakerFilterTagHeader");
            rm.writeClasses();
            rm.write(">");
                rm.writeEscaped(oControl._rb.getText("NOTETAKERFEEDER_TOOLPOPUP_TITLE"));
            rm.write("</div>");

            rm.write("<div>");
                rm.renderControl(oControl._oFilterTagList);
            rm.write("</div>");

            rm.write("<div");
            rm.addClass("sapSuiteUiCommonsNoteTakerFilterTagButtons");
            rm.writeClasses();
            rm.write(">");
                rm.renderControl(oControl._oApplyFilterTagButton);
                rm.renderControl(oControl._oCancelFilterTagButton);
            rm.write("</div>");
        rm.write("</div>");
        
	rm.write("</div>");
};

sap.suite.ui.commons.NoteTakerRenderer.searchTextRender = function(rm, oControl){
    rm.write("<div");
    rm.writeAttribute("id", oControl.getId() + "-search-panel");
    rm.addClass("sapSuiteUiCommonsNoteTakerSearchPanel");
    rm.addClass("sapUiShd");
    rm.writeClasses();
    rm.write(">");
        rm.write("<div");
        rm.writeAttribute("id", oControl.getId() + "-search-arrow");
        rm.addClass("sapSuiteUiCommonsNoteTakerSearchArrow");
        rm.writeClasses();
        rm.write(">");
        rm.write("</div>");
        
        rm.write("<div>");
        rm.renderControl(oControl._oFilterSearchField);
        rm.write("</div>");
    rm.write("</div>");
};	
