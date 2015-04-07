/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.DateRangeScrollerRenderer");

/**
 * @class DateRangeScroller renderer.
 * @static
 */
sap.suite.ui.commons.DateRangeScrollerRenderer = {};

/**
 * Render decrementScrollButton
 * 
 * @private
 */
sap.suite.ui.commons.DateRangeScrollerRenderer.renderDecrementScrollButton=function (oRm, oDateRangeScroller, oDisplay) {

    oRm.write("<a>");
    oRm.write('<span id="' + oDateRangeScroller.getId() + '-decrementScrollButton"');
    oRm.write('title="');
    oRm.writeEscaped(oDisplay.resBundle.getText("DATERANGESCROLLER_PREV_TEXT"));
    oRm.write('"');
    oRm.addClass("sapSuiteUiCommonsDateRangeScrollerScrollBtn");
    oRm.addClass("sapSuiteUiCommonsDateRangeScrollerDecBtnArrow");
    oRm.writeClasses();  
    oRm.write(">");
    oRm.write("</span>");
    oRm.write("</a>");
};

/**
 * Render incrementScrollButton
 * 
 * @private
 */
sap.suite.ui.commons.DateRangeScrollerRenderer.renderIncrementScrollButton = function (oRm, oDateRangeScroller, oDisplay) {

    oRm.write("<a>");
    oRm.write('<span id="' + oDateRangeScroller.getId() + '-incrementScrollButton"');
    oRm.write('title="');
    oRm.writeEscaped(oDisplay.resBundle.getText("DATERANGESCROLLER_NEXT_TEXT"));
    oRm.write('"');
    oRm.addClass("sapSuiteUiCommonsDateRangeScrollerScrollBtn");
    oRm.addClass("sapSuiteUiCommonsDateRangeScrollerIncBtnArrow");
    oRm.writeClasses();   
    oRm.write(">");    
    oRm.write("</span>");
    oRm.write("</a>");
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control}
 *                oDateRangeScroller an object representation of the control that should be rendered
 */
sap.suite.ui.commons.DateRangeScrollerRenderer.render = function(oRm, oDateRangeScroller) {

    var oLocale = sap.ui.getCore().getConfiguration().getLanguage();
    var oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons", oLocale);
    var sPrevArrowSymbol = "&#9668";
    var sNextArrowSymbol = "&#9658";
    var oDisplay = {
        resBundle : oResBundle,
        prevArrowSymbol : sPrevArrowSymbol,
        nextArrowSymbol : sNextArrowSymbol
    };

    // write the HTML into the render manager
    oRm.write("<span");
    oRm.writeControlData(oDateRangeScroller);
    oRm.addClass("sapSuiteUiCommonsDateRangeScroller");
    oRm.writeClasses();
    oRm.writeAttribute("tabindex", "-1");
    oRm.write(">"); // span element

    // invisible span with tooltip as text for aria
    if (oDateRangeScroller.getTooltip_AsString()) {
        oRm.write('<SPAN id="' + oDateRangeScroller.getId() + '-Descr" style="visibility: hidden; display: none;"');
        oRm.write('>');
        oRm.writeEscaped(oDateRangeScroller.getTooltip_AsString());
        oRm.write('</SPAN>');
    }

    this.renderDecrementScrollButton(oRm, oDateRangeScroller, oDisplay);

    this.renderIncrementScrollButton(oRm, oDateRangeScroller, oDisplay);

    // Start label area
    oRm.write("<span");
    oRm.writeAttribute("id", oDateRangeScroller.getId() + "-labelarea");
    oRm.writeAttribute("tabindex", "0");
    oRm.writeClasses();

    // ARIA
    oRm.writeAccessibilityState(oDateRangeScroller, {
        role : 'list',
        live : 'assertive',
        describedby : oDateRangeScroller.getTooltip_AsString() ? (oDateRangeScroller.getId() + '-Descr ' + oDateRangeScroller.getAriaDescribedBy().join(" ")) : undefined
    });

    oRm.write(">");

    oRm.renderControl(oDateRangeScroller._oDateRangeLabel);

    oRm.write("</span>"); // label span

    oRm.write("</span>");
};
