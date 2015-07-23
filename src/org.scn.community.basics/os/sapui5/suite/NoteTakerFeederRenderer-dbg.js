/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.NoteTakerFeederRenderer");

/**
 * @class NoteTakerFeeder renderer. 
 * @static
 */
sap.suite.ui.commons.NoteTakerFeederRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.NoteTakerFeederRenderer.render = function(oRm, oControl){
    var sTooltip = oControl.getTooltip_AsString();
    oRm.write("<div");
    oRm.writeControlData(oControl);
    if (sTooltip) {
        oRm.writeAttributeEscaped("title", sTooltip);
    }
    oRm.addClass("sapSuiteUiCommonsNoteTakerFeeder");
    oRm.writeClasses();
    oRm.writeAccessibilityState(oControl, {
		role : 'region',
		describedby : oControl.getId() + "-header"
	});
    oRm.write(">");

    //write header
        oRm.write("<div");
        oRm.writeAttribute("id", oControl.getId() + "-header");
        oRm.addClass("sapSuiteUiCommonsNoteTakerFeederHeader");
        oRm.writeClasses();
        oRm.write(">");
            oRm.write("<div");
            oRm.writeAttribute("id", oControl.getId() + "-header-text");
            oRm.writeAccessibilityState(oControl, {
        		role : 'heading'
            });
            oRm.write(">");
                oRm.writeEscaped(oControl._rb.getText("NOTETAKERFEEDER_TITLE"));
            oRm.write("</div>");
        oRm.write("</div>");

    //write tag panel
        oRm.write("<div");
        oRm.writeAttribute("id", oControl.getId() + "-tag-panel");
        oRm.addClass("sapSuiteUiCommonsNoteTakerFeederTagPanel");
        oRm.writeClasses();
        oRm.write(">");

            oRm.write("<div");
            oRm.writeAttribute("id", oControl.getId() + "-left-toolbar");
            oRm.addClass("sapSuiteUiCommonsNoteTakerFeederLeftPanel");
            oRm.writeClasses();
            oRm.write(">");
                oRm.renderControl(oControl._oTagButton);
            oRm.write("</div>");

            oRm.write("<div");
            oRm.writeAttribute("id", oControl.getId() + "-right-toolbar");
            oRm.addClass("sapSuiteUiCommonsNoteTakerFeederRightPanel");
            oRm.writeClasses();
            oRm.write(">");
                oRm.renderControl(oControl._oThumbUpButton);
                oRm.renderControl(oControl._oThumbDownButton);
                oRm.renderControl(oControl._oAddAttachButton);
                oRm.renderControl(oControl._oFileUploader);
            oRm.write("</div>");
        oRm.write("</div>");

        //write attachment panel
        oRm.write("<div");
        oRm.writeAttribute("id", oControl.getId() + "-attachment-panel");
        oRm.addClass("sapSuiteUiCommonsNoteTakerFeederAttachmentPanel");
        oRm.writeClasses();
        oRm.write(">");
            oRm.write("<div");
            oRm.writeAttribute("id", oControl.getId() + "-attachment-content");
            oRm.addClass("sapSuiteUiCommonsNoteTakerFeederAttachmentContent");
            oRm.writeClasses();
            oRm.write(">");
                oRm.write("<div");
                oRm.writeAttribute("id", oControl.getId() + "-attachment-name");
                oRm.addClass("sapSuiteUiCommonsNtfAttachmentNamelbl");
                oRm.writeClasses();
                oRm.write(">");
                    oRm.write("<div");
                    oRm.writeAttribute("id", oControl.getId() + "-attachment-image");
                    oRm.addClass("sapSuiteUiCommonsNtfAttachImg");
                    oRm.writeClasses();
                    oRm.write("/>");
                    oRm.renderControl(oControl._oAttachmentLink);
                oRm.write("</div>"); 
                
                oRm.write("<div");
                oRm.writeAttribute("id", oControl.getId() + "-attachment-loading");
                oRm.addClass("sapSuiteUiCommonsNtfLoadingLbl");
                oRm.writeClasses();
                oRm.write(">");
                    oRm.renderControl(oControl._oAttachmentLoadingLabel);
                oRm.write("</div>");
                
                oRm.write("<div");
                oRm.writeAttribute("id", oControl.getId() + "-attachment-delete");
                oRm.addClass("sapSuiteUiCommonsNtfDeleteBtn");
                oRm.writeClasses();
                oRm.write(">");
                    oRm.renderControl(oControl._oDeleteAttachButton);
                oRm.write("</div>");
            oRm.write("</div>"); 
        oRm.write("</div>");
        
    //write title panel
        oRm.write("<div");
        oRm.writeAttribute("id", oControl.getId() + "-title-panel");
        oRm.addClass("sapSuiteUiCommonsNoteTakerFeederTitlePanel");
        oRm.writeClasses();
        oRm.write(">");
            oRm.renderControl(oControl._oTitle);
        oRm.write("</div>");

    //write body
        oRm.write("<div");
        oRm.writeAttribute("id", oControl.getId() + "-body");
        if(oControl._oAddAttachButton.getEnabled()) {
            oRm.addClass("sapSuiteUiCommonsNoteTakerFeederBody");            
        } else {
            oRm.addClass("sapSuiteUiCommonsNoteTakerFeederBodySmaller");
        }
        oRm.writeClasses();
        oRm.write(">");
        	oRm.renderControl(oControl._oRequiredLbl);
            oRm.renderControl(oControl._oBody);
        oRm.write("</div>");

        oRm.renderControl(oControl._oAddButton);

        oRm.write("<div");
        oRm.writeAttribute("id", oControl.getId() + "-selectTag-panel");
        oRm.addClass("sapSuiteUiCommonsNoteTakerFeederSelectTagPanel");
        oRm.addClass("sapUiShd");
        oRm.writeClasses();
        oRm.write(">");

            oRm.write("<div");
            oRm.writeAttribute("id", oControl.getId() + "-selectTag-arrow");
            oRm.addClass("sapSuiteUiCommonsNoteTakerFeederSelectTagArrow");
            oRm.writeClasses();
            oRm.write(">");
            oRm.write("</div>");

            oRm.write("<div");
            oRm.writeAttribute("id", oControl.getId() + "-selectTag-header");
            oRm.addClass("sapSuiteUiCommonsNoteTakerFeederSelectTagHeader");
            oRm.writeClasses();
            oRm.write(">");
                oRm.writeEscaped(oControl._rb.getText("NOTETAKERFEEDER_TOOLPOPUP_TITLE"));
            oRm.write("</div>");

            oRm.write("<div>");
                oRm.renderControl(oControl._oTagInput);
            oRm.write("</div>");

            oRm.write("<div>");
                oRm.renderControl(oControl._oTagList);
            oRm.write("</div>");

            oRm.write("<div");
            oRm.addClass("sapSuiteUiCommonsNoteTakerFeederSelectTagButtons");
            oRm.writeClasses();
            oRm.write(">");
                oRm.renderControl(oControl._oAddTagButton);
                oRm.renderControl(oControl._oCancelTagButton);
            oRm.write("</div>");
        oRm.write("</div>");
    oRm.write("</div>");
};