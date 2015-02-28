/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.BusinessCardRenderer");
jQuery.sap.require("sap.ui.commons.Link");
/**
 * @class BusinessCard renderer. 
 * @static
 */
sap.suite.ui.commons.BusinessCardRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.BusinessCardRenderer.render = function(rm, oControl){ 
	// accessibility
    var bAcc = sap.ui.getCore().getConfiguration().getAccessibility();

    // control properties
    var sId = oControl.getId();
    var sType = oControl.getType();
    var oFirstTitle = oControl.getFirstTitle();
    var sImageTooltip = oControl.getImageTooltip();
    var sIcon = oControl.getIconPath();
    var sDesc = oControl.getSecondTitle();
    var sWidth = oControl.getWidth();
    var sTooltip = oControl.getTooltip_AsString();

    rm.write("<div");
    rm.writeControlData(oControl);
    if (sTooltip) {
        rm.writeAttributeEscaped("title", sTooltip);
    }
    rm.addClass("suiteUiCard");
    rm.writeClasses();
    if (sWidth) {
        rm.addStyle("width", sWidth);
        rm.writeStyles();
    }
    rm.write(">");

        if (sType) {
            rm.write("<div");
            rm.addClass("suiteUiCardTypeHolder");
            rm.writeClasses();
            rm.writeAttribute("id", sId + "-type");
            rm.write(">");
                var oTypeLabel = new sap.ui.commons.Label({
                    id: sId + "-type-label",
                    text: sType,
                    tooltip: sType
                });
                oTypeLabel.addStyleClass("suiteUiCardType");
                rm.renderControl(oTypeLabel);
                oTypeLabel.destroy();
            rm.write("</div>");
        }

        rm.write("<div");
        rm.addClass("suiteUiCardContainer");
        rm.writeClasses();
        rm.writeAttribute("id", sId + "-container");
        rm.write(">");

            //icon
            if (sIcon) {
                rm.write("<div");
                rm.addClass("suiteUiCardIconHolder");
                rm.writeClasses();
                rm.writeAttribute("id", sId + "-icon");
                rm.write(">");
                    rm.write("<img");
                    rm.addClass("suiteUiCardIcon");
                    rm.writeClasses();
                    rm.writeAttributeEscaped("src", sIcon);
                    rm.writeAttributeEscaped("title", (sImageTooltip || ""));
                    rm.writeAttribute("alt", "");
                    rm.writeAttribute("id",sId + "-img");
                    rm.writeAttribute("tabindex", "-1");
                    if (bAcc) {
                        // ARIA - icon is decorative
                        rm.writeAttribute("role", "presentation");
                    }
                    rm.write("></img>");
                rm.write("</div>");
            }

            rm.write("<div");
            rm.addClass("suiteUiCardNameHolder");
            rm.writeClasses();
            rm.writeAttribute("id", sId + "-name");
            if (bAcc && sDesc){
                rm.writeAttribute("aria-describedby", sId + "-desc-label");
            }
            rm.write(">");
            if (oFirstTitle) {
                oFirstTitle.addStyleClass("suiteUiCardName");
                rm.renderControl(oFirstTitle);
            }
            rm.write("</div>");

            //title2
            if (sDesc) {
                rm.write("<div");
                rm.addClass("suiteUiCardDescHolder");
                rm.writeClasses();
                rm.writeAttribute("id", sId + "-desc");
                rm.write(">");
                    var oDescLabel = new sap.ui.commons.Label({
                        id: sId + "-desc-label",
                        text: sDesc,
                        tooltip: sDesc
                    });
                    oDescLabel.addStyleClass("suiteUiCardDesc");
                    rm.renderControl(oDescLabel);
                    oDescLabel.destroy();
                rm.write("</div>");
            }

            rm.write("<div");
            rm.addClass("suiteUiCardContent");
            rm.writeClasses();
            rm.writeAttribute("id", sId + "-content");
            rm.write(">");
                rm.renderControl(oControl.getContent());
            rm.write("</div>");
        rm.write("</div>");
    rm.write("</div>");
};
