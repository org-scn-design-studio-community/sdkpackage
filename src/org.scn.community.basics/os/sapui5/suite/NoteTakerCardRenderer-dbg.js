/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.NoteTakerCardRenderer");

jQuery.sap.require("sap.suite.ui.commons.util.RenderUtils");

/**
 * @class NoteTakerCard renderer.
 * @static
 */
sap.suite.ui.commons.NoteTakerCardRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.NoteTakerCardRenderer.render = function(rm, oControl){

    // write the HTML into the render manager
    var sFullHeader = oControl.getHeader();
    var sTruncatedHeader = this.getTruncatedHeader(sFullHeader);
    var bShowViewAllLink = oControl.getBody().length > oControl.getViewAllTrigger();
    var bShowAttachment = oControl.getAttachmentFilename() !== "";
    var rh = new sap.suite.ui.commons.util.RenderingHelper(rm);
    var sTooltip = oControl.getTooltip_AsString();

    // main DIV element
    rm.write("<div");
    rm.writeControlData(oControl);
    if (sTooltip) {
        rm.writeAttributeEscaped("title", sTooltip);
    }
    rm.addClass("sapSuiteUiCommonsNoteTakerCard");
    if (oControl.getThumbUp()) {
        rm.addClass("suiteUiNtcPositiveCard");
    }
    if (oControl.getThumbDown()) {
        rm.addClass("suiteUiNtcNegativeCard");
    }
    rm.writeClasses();
    
    var ariaInfo = {role : 'region'};
    // For JAWS 15 is not needed.
//    if (!jQuery.browser.msie) {
//	    ariaInfo.describedby = [oControl.getId() + "-headerLabel", oControl.getId() + "-timestamp",
//	      		              oControl.getId() + "-toolbar", oControl.getId() + "-body"].join(" ");
//    }	
    rm.writeAccessibilityState(oControl, ariaInfo);
    rm.write(">");

        // header DIV element
//      rm.write("<div");
//      rm.writeAttribute("id", oControl.getId() + "-header");
//      rm.addClass("sapSuiteUiCommonsNoteTakerCardHeader");
//      rm.writeClasses();
//      rm.write(">");
        rh.writeOpeningTag('div', {
            attributes: {id: oControl.getId() + "-header"},
            classes: ['sapSuiteUiCommonsNoteTakerCardHeader']
        });
//	        rm.write("<div");
//	        rm.writeAttribute("id", oControl.getId() + "-header-buttons");
//          rm.addClass("sapSuiteUiCommonsNoteTakerCardHeaderButtons");
//          rm.writeClasses();
//	        rm.write(">");
            rh.writeOpeningTag('div', {
                attributes: {id: oControl.getId() + "-header-buttons"},
                classes: ['sapSuiteUiCommonsNoteTakerCardHeaderButtons']
            });
            	rm.renderControl(oControl._oEditButton);
	            rm.renderControl(oControl._oDeleteButton);
	        rh.writeClosingTag('div');
	        //rm.write("</div>");

            if (!sFullHeader) {
                rm.write("&nbsp;");
            } else {
                rm.write("<label");
                rm.writeAttribute("id", oControl.getId() + "-headerLabel");
                if (sFullHeader !== sTruncatedHeader) {
                    rm.writeAttributeEscaped("title", sFullHeader);
                }
                rm.write(">");
                    rm.writeEscaped(sTruncatedHeader);
                rm.write("</label>");
            }

            // timestamp DIV element
            rm.write("<div");
            rm.writeAttribute("id", oControl.getId() + "-timestamp");
            rm.addClass("sapSuiteUiCommonsNoteTakerCardTimestamp");
            rm.writeClasses();
            rm.write(">");
                rm.writeEscaped(oControl.getFormattedTimestamp());
            rm.write("</div>");
        rm.write("</div>");

        //body container DIV
        rm.write("<div");
        rm.addClass("sapSuiteUiCommonsNoteTakerCardBodyContent");
        rm.writeClasses();
        rm.write(">");

            //tag panel DIV
            rm.write("<div");
            rm.writeAttribute("id", oControl.getId() + "-toolbar");
            rm.addClass("suiteUiNtcToolbar");
            rm.writeClasses();
            rm.write(">");
                this.renderToolbar(rm, oControl);
            rm.write("</div>");

            //attachment bar DIV
            if (bShowAttachment) {
                rm.renderControl(oControl._prepareAttachmentPanel(false));
            }

            // body DIV element
            rm.write("<div");
            rm.writeAttribute("id", oControl.getId() + "-body");
            rm.addClass("sapSuiteUiCommonsNoteTakerCardBody");
            if (bShowAttachment && bShowViewAllLink) {
                rm.addClass("sapSuiteUiCommonsNtcBodyViewAllAttach");
            } else if (bShowViewAllLink) {
                rm.addClass("sapSuiteUiCommonsNtcBodyViewAll");
            } else if (bShowAttachment) {
                rm.addClass("sapSuiteUiCommonsNtcBodyAttach");
            }
            rm.writeClasses();
            rm.write(">");
                rm.write(oControl._getFormattedBody());
            rm.write("</div>");

            // view all DIV element
            if (bShowViewAllLink) {
                rm.write("<div");
                rm.writeAttribute("id", oControl.getId() + "-viewAll");
                rm.addClass("sapSuiteUiCommonsNoteTakerCardViewAll");
                rm.writeClasses();
                rm.write(">&nbsp;");
                    oControl._oViewAllLink.addStyleClass("sapSuiteUiCommonsNoteTakerCardViewAllLink");
                    rm.renderControl(oControl._oViewAllLink);
                rm.write("</div>");
            }

        rm.write("</div>"); // body container div

    rm.write("</div>"); // card div
};

/*
 * Returns truncated version of the header if it exceeds iLength
 */
sap.suite.ui.commons.NoteTakerCardRenderer.getTruncatedHeader = function(sFullHeader) {
    var iLength = 20;
    var sTerminator = "...";
    if (sFullHeader && sFullHeader.length > iLength) {
        return sFullHeader.substr(0, iLength - sTerminator.length) + sTerminator;
    } else {
        return sFullHeader;
    }
};

sap.suite.ui.commons.NoteTakerCardRenderer.renderToolbar = function(rm, oControl) {
    rm.write("<div");
    rm.writeAttribute("id", oControl.getId() + "-left-toolbar");
    rm.addClass("sapSuiteUiCommonsNoteTakerCardLeftPanel");
    if(oControl.getThumbUp() || oControl.getThumbDown()) {
        rm.addClass("sapSuiteUiCommonsNoteTakerCardWithThumbs"); 
    } else {
        rm.addClass("sapSuiteUiCommonsNoteTakerCardNoThumbs");
    }
    rm.writeClasses();
    rm.write(">");
    rm.write(oControl._getFormattedTags());
    rm.write("</div>");
    
    rm.write("<div");
    rm.writeAttribute("id", oControl.getId() + "-right-toolbar");
    rm.addClass("sapSuiteUiCommonsNoteTakerCardRightPanel");
    rm.writeClasses();
    rm.write(">");
        rm.write("<div");
        rm.writeAttribute("id", oControl.getId() + "-thumb");
        
        var thumbTooltip = "";
        if(oControl.getThumbUp() && !oControl.getThumbDown()) {
            rm.writeAttribute("class", "sapSuiteUiCommonsNoteTakerCardThumbUp");
            thumbTooltip = oControl._rb.getText("NOTETAKERCARD_ICON_THUMB_UP_TOOLTIP");
            rm.writeAttribute("title", thumbTooltip);
        } else if(!oControl.getThumbUp() && oControl.getThumbDown()) {
            rm.writeAttribute("class", "sapSuiteUiCommonsNoteTakerCardThumbDown");
            thumbTooltip = oControl._rb.getText("NOTETAKERCARD_ICON_THUMB_DOWN_TOOLTIP");
            rm.writeAttribute("title", thumbTooltip);
        }
        rm.write(">");
        
        //ARIA info
        rm.write("<span");
        rm.writeAttribute("style", "visibility: hidden; display: none;");
        rm.write(">");
        rm.writeEscaped(thumbTooltip);
        rm.write("</span>");
        
        rm.write("</div>");
    rm.write("</div>");
};