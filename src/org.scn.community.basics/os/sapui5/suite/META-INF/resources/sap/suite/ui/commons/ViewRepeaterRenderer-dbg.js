/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.ViewRepeaterRenderer");
jQuery.sap.require("sap.ui.commons.RowRepeaterRenderer");

/**
 * @class RowRepeater renderer. 
 * @static
 */
sap.suite.ui.commons.ViewRepeaterRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.RowRepeaterRenderer);

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.ViewRepeaterRenderer.render = function(oRenderManager, oControl) { 
	// escape directly if control is not visible
	if(!oControl.getVisible()) {
	    return;
	}

    var sTooltip = oControl.getTooltip_AsString();
	// opening root DIV
	oRenderManager.write("<div");
	oRenderManager.writeControlData(oControl);
    if (sTooltip) {
        oRenderManager.writeAttributeEscaped("title", sTooltip);
    }
    // add design CSS class: sapUiRrDesignStandard/sapUiRrDesignTransparent/sapUiRrDesignBareShell
	oRenderManager.addClass("sapUiRrDesign" + oControl.getDesign() );
	
	if (oControl.getResponsive() && oControl.getShowMoreSteps() == 0) {
		oRenderManager.addClass("suiteUiVrResp");
	}
	
	oRenderManager.writeClasses();
	
	if (oControl.getResponsive() && oControl.getShowMoreSteps() == 0) {
		oRenderManager.write(" style='height:" + oControl.getHeight() +"'");
	}
	
	oRenderManager.write(">");
	
	// render the row repeater header (not in BARESHELL design)
	if( oControl.getDesign() !== sap.ui.commons.RowRepeaterDesign.BareShell){
	    this.renderHeader(oRenderManager, oControl);
	}
	
	if (oControl.getExternal() !== true) {
	    // render the row repeater body
	    this.renderBody(oRenderManager, oControl);
	
	    // render the row repeater footer (not in BARESHELL design)
	    if( oControl.getDesign() !== sap.ui.commons.RowRepeaterDesign.BareShell){
	        this.renderFooter(oRenderManager, oControl);
	    }
	} else {
	    oRenderManager.renderControl(sap.ui.getCore().byId(oControl.getAssociation("externalRepresentation")));
	}
	
	// closing root DIV
	oRenderManager.write("</div>");
};

sap.suite.ui.commons.ViewRepeaterRenderer.renderHeader = function(oRenderManager, oControl) {
    this.renderViewSwitcher(oRenderManager, oControl);
    if (oControl.getExternal() !== true) {
        sap.ui.commons.RowRepeaterRenderer.renderHeader.call(this, oRenderManager, oControl);
    }
};

sap.suite.ui.commons.ViewRepeaterRenderer.renderFooter = function(oRenderManager, oControl) {
    if (oControl.getExternal() !== true) {
        sap.ui.commons.RowRepeaterRenderer.renderFooter.call(this, oRenderManager, oControl);
    }
};

sap.suite.ui.commons.ViewRepeaterRenderer.renderViewSwitcher = function(oRenderManager, oControl) {
	if (oControl.getShowViews() || oControl.getShowSearchField()) {
        oRenderManager.write("<div");
        oRenderManager.addClass("suiteUiVrViewSwHolder");
        oRenderManager.writeClasses();
        oRenderManager.write(">");

        if (oControl.getShowViews()) {
            // opening view switcher DIV
            oRenderManager.write("<div");
            oRenderManager.addClass("suiteUiVrViewSw");
            oRenderManager.writeClasses();
            oRenderManager.write(">");
                oRenderManager.renderControl(oControl._oSegBtn);
            // closing view switcher DIV
            oRenderManager.write("</div>");
        }

        if (oControl.getShowSearchField()) {
            // opening view switcher DIV
            oRenderManager.write("<div");
            oRenderManager.addClass("suiteUiVrSearchFld");
            oRenderManager.writeClasses();
            oRenderManager.write(">");
                oRenderManager.renderControl(oControl._oSearchField);
            // closing view switcher DIV
            oRenderManager.write("</div>");
        }
        oRenderManager.write("</div>");
    }
    oRenderManager.write("<div style='clear:both;'/>");
};