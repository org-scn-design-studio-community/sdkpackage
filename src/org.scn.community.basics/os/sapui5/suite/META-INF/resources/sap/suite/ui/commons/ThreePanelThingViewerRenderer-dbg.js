/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.ThreePanelThingViewerRenderer");
jQuery.sap.require("sap.ui.ux3.ThingViewerRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class ThreePanelThingViewer renderer. 
 * @static
 */
sap.suite.ui.commons.ThreePanelThingViewerRenderer = sap.ui.core.Renderer.extend(sap.ui.ux3.ThingViewerRenderer);


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.ThreePanelThingViewerRenderer.renderContent = function(oRm, oControl){ 
	oRm.write("<div");
	oRm.addClass("sapSuiteTvMinHeight");
	oRm.writeClasses();
	oRm.write(">");
	
    oRm.write("<header");
    oRm.writeAttribute("id", oControl.getId() + "-header");
    oRm.addClass("sapSuiteTvTitle");
    oRm.writeClasses();
    oRm.addStyle("width", oControl.getSidebarWidth());
    oRm.writeStyles();
    oRm.write(">");
        this.renderHeader(oRm, oControl);
    oRm.write("</header>");

    oRm.write("<nav");
    oRm.writeAttribute("id", oControl.getId() + "-navigation");
    oRm.addClass("sapSuiteTvNav");
    if (!oControl.getLogo()) {
        oRm.addClass("sapSuiteTvNavNoLogo");
    }
    oRm.writeClasses();
    oRm.addStyle("width", oControl.getSidebarWidth());
    oRm.writeStyles();
    oRm.write(">");
        oRm.renderControl(oControl._getNavBar());
    oRm.write("</nav>");

    oRm.write("<aside");
    oRm.writeAttribute("id", oControl.getId() + "-headerContent");
    oRm.addClass("sapSuiteTvHeader");
    oRm.writeClasses();
    oRm.write(">");
        this.renderHeaderContent(oRm, oControl);
    oRm.write("</aside>");

    oRm.write("<div");
    oRm.writeAttribute("id", oControl.getId() + "-facetContent");
    oRm.addClass("sapSuiteTvFacet");
    oRm.writeClasses();
    oRm.write(">");
        this.renderFacetContent(oRm, oControl);
    oRm.write("</div>");

    if (oControl.getLogo()) {
        oRm.write("<footer");
        oRm.writeAttribute("id", oControl.getId() + "-footer");
        oRm.addClass("sapSuiteTvLogo");
        oRm.writeClasses();
        oRm.addStyle("width", oControl.getSidebarWidth());
        oRm.writeStyles();
        oRm.write(">");
	        oRm.write("<img");
	        oRm.writeAttribute("id", oControl.getId() + "-logo");
	        oRm.writeAttribute("role", "presentation");
	        oRm.writeAttributeEscaped("src", oControl.getLogo());
	        oRm.addClass("sapSuiteTvLogoIcon");
	        oRm.writeClasses();
	        oRm.write("/>");
        oRm.write("</footer>");
    }    
    oRm.write("</div>");
};

sap.suite.ui.commons.ThreePanelThingViewerRenderer.renderHeader = function(oRm, oControl) {
    var iMenuContentLength = oControl.getMenuContent().length;

    oRm.write("<div");
    oRm.addClass("sapSuiteTvTitleBar");
    oRm.writeClasses();
    oRm.write(">");
        if (oControl.getIcon()) {
            oRm.write("<img");
            oRm.writeAttribute("id", oControl.getId() + "-swatch");
            oRm.writeAttribute("role", "presentation");
            oRm.writeAttributeEscaped("src", oControl.getIcon());
            oRm.addClass("sapSuiteTvTitleIcon");
            oRm.writeClasses();
            oRm.write("/>");
        }

        if (iMenuContentLength > 0) {
            oRm.renderControl(oControl._oMenuButton);
        }

        oRm.write("<div");
        oRm.writeAttribute("role", "heading");
        oRm.writeAttribute("aria-level", 1);
        oRm.writeAttributeEscaped("title", oControl.getType());
        oRm.addClass("sapSuiteTvTitleType");
        oRm.addClass("sapSuiteTvTextCrop");
        oRm.writeClasses();
        oRm.write(">");
            oRm.writeEscaped(oControl.getType());
        oRm.write("</div>");

        oRm.write("<div");
        oRm.writeAttribute("role", "heading");
        oRm.writeAttribute("aria-level", 2);
        oRm.writeAttributeEscaped("title", oControl.getTitle());
        oRm.addClass("sapSuiteTvTitleFirst");
        oRm.writeClasses();
        oRm.write(">");
            oRm.writeEscaped(oControl.getTitle());
        oRm.write("</div>");

        oRm.write("<div");
        oRm.writeAttribute("role", "heading");
        oRm.writeAttribute("aria-level", 3);
        oRm.writeAttributeEscaped("title", oControl.getSubtitle());
        oRm.addClass("sapSuiteTvTitleSecond");
        oRm.addClass("sapSuiteTvTextCrop");
        oRm.writeClasses();
        oRm.write(">");
            oRm.writeEscaped(oControl.getSubtitle());
        oRm.write("</div>");
    oRm.write("</div>");

    this.renderFlyOutMenu(oRm,  oControl);
};

sap.suite.ui.commons.ThreePanelThingViewerRenderer.renderFacetContent = function(oRm, oControl) {
    var aFacetContent = oControl.getFacetContent();
    for (var i = 0; i < aFacetContent.length; i++) {
        var oGroup = aFacetContent[i];

        oRm.write("<div");
        oRm.writeAttribute("role", "form");
        if (oGroup.getColspan()) {
            oRm.addClass("sapUiUx3TVFacetThingGroupSpan");
        } else {
            oRm.addClass("sapUiUx3TVFacetThingGroup");
        }
        oRm.writeClasses();
        oRm.write(">");
            oRm.write("<div");
            oRm.writeAttributeEscaped("title", oGroup.getTitle());
            oRm.addClass("sapUiUx3TVFacetThingGroupContentTitle");
            oRm.writeClasses();
            oRm.write(">");
                oRm.write("<span>");
                    oRm.writeEscaped(oGroup.getTitle());
                oRm.write("</span>");
            oRm.write("</div>");

            oRm.write("<div");
            oRm.addClass("sapUiUx3TVFacetThingGroupContent");
            oRm.writeClasses();
            oRm.write(">");
                var oGroupContent = oGroup.getContent();
                for (var j = 0; j < oGroupContent.length; j++) {
                    oRm.renderControl(oGroupContent[j]);
                }
            oRm.write("</div>");
        oRm.write("</div>");
    }
};

sap.suite.ui.commons.ThreePanelThingViewerRenderer.renderFlyOutMenu = function(oRm, oControl) {
    oRm.write("<div");
    oRm.writeAttribute("id", oControl.getId() + "-menu-popup");
    oRm.writeAttribute("role", "menu");
    oRm.addClass("sapSuiteTvPopupMenu");
    oRm.writeClasses();
    oRm.write(">");

    var aMenuContent = oControl.getMenuContent();
    for (var i = 0; i < aMenuContent.length; i++) {
        var oMenuItem = aMenuContent[i];
        oMenuItem.addStyleClass("sapSuiteTvPopupMenuLink");
        oRm.renderControl(oMenuItem);
    }

    oRm.write("</div>");
};
