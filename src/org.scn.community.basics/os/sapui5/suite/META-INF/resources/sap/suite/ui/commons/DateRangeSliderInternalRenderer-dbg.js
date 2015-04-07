/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.DateRangeSliderInternalRenderer");
jQuery.sap.require("sap.ui.commons.RangeSliderRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class DateRangeSlider renderer.
 * @static
 */
sap.suite.ui.commons.DateRangeSliderInternalRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.RangeSliderRenderer);

/**
 * Render buffer div to accommodate bubbles height.
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.suite.ui.commons.DateRangeSliderInternal}
 *                oDateRangeSliderInternal an object representation of the control that should be rendered
 * @protected
 */
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderBufferDivForBubbles = function(oRm, oDateRangeSliderInternal) {

    if (oDateRangeSliderInternal.getShowBubbles()) {
        oRm.write('<DIV id="' + oDateRangeSliderInternal.getId() + '-bubbleBuffer" style="height:40px">');
        oRm.write('</DIV>');
    }
};

/**
 * Render enclosing DIV with styles and classes.
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.suite.ui.commons.DateRangeSliderInternal}
 *                oDateRangeSliderInternal an object representation of the control that should be rendered
 * @protected
 */
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderEnclosingDiv = function(oRm, oDateRangeSliderInternal) {

    oRm.write('<DIV');
    oRm.writeControlData(oDateRangeSliderInternal);
    oRm.addClass('sapUiSli');
    this.controlAdditionalCode(oRm, oDateRangeSliderInternal);
    if (oDateRangeSliderInternal.getTooltip_AsString()) {
        oRm.writeAttributeEscaped('title', oDateRangeSliderInternal.getTooltip_AsString());
    }

    if (!oDateRangeSliderInternal.getVertical() && oDateRangeSliderInternal.getWidth()) {
        oRm.writeAttribute('style', 'width:' + oDateRangeSliderInternal.getWidth() + ';');
    }

    if (!oDateRangeSliderInternal.getEnabled()) {
        oRm.addClass('sapUiSliDsbl');
    } else {
        if (!oDateRangeSliderInternal.getEditable()) {
            oRm.addClass('sapUiSliRo');
        } else {
            oRm.addClass('sapUiSliStd');
        }
    }

    if (!oDateRangeSliderInternal.getVertical()) {
        oRm.addClass('sapUiSliHori');
    }

    if (oDateRangeSliderInternal.getShowBubbles()) {
        oRm.addClass('sapUiSuiteDRSliBub');
    }

    oRm.writeClasses();
    oRm.write('>');
};

/**
 * Render closing tag for enclosing DIV.
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.suite.ui.commons.DateRangeSliderInternal}
 *                oDateRangeSliderInternal an object representation of the control that should be rendered
 * @protected
 */
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderEnclosingDivEnd = function(oRm, oDateRangeSliderInternal) {

    oRm.write('</DIV>');
};

/**
 * Render invisible span with tooltip as text for aria on grip.
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.suite.ui.commons.DateRangeSliderInternal}
 *                oDateRangeSliderInternal an object representation of the control that should be rendered
 * @protected
 */
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderAriaGripTooltip = function(oRm, oDateRangeSliderInternal) {

    if (oDateRangeSliderInternal.getTooltip_AsString()) {
        oRm.write('<SPAN id="' + oDateRangeSliderInternal.getId() + '-Descr" style="visibility: hidden; display: none;">');
        oRm.writeEscaped(oDateRangeSliderInternal.getTooltip_AsString());
        oRm.write('</SPAN>');
    }
};

/**
 * Renders the HTML for two bubbles to show selected dates on top of the slider. *
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.suite.ui.commons.DateRangeSliderInternal}
 *                oDateRangeSliderInternal an object representation of the control that should be rendered.
 * @protected
 */
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderBubbles = function(oRm, oDateRangeSliderInternal) {

    if (!oDateRangeSliderInternal.getShowBubbles()) {
        return;
    }

    oRm.write('<div id="' + oDateRangeSliderInternal.getId() + '-bubble"');
    oRm.addClass("sapSuiteUiCommonsDateRangeSliderBubble");
    oRm.writeClasses();
    oRm.write('>');
    oRm.write('<div');
    oRm.addClass("sapSuiteUiCommonsDateRangeSliderBubbleLbl");
    oRm.writeClasses();
    oRm.write('>');
    oRm.renderControl(oDateRangeSliderInternal._oBubble);
    oRm.write('</div>');
    oRm.write('</div>');
    oRm.write('<div id="' + oDateRangeSliderInternal.getId() + '-bubble2"');
    oRm.addClass("sapSuiteUiCommonsDateRangeSliderBubble");
    oRm.writeClasses();
    oRm.write('>');
    oRm.write('<div');
    oRm.addClass("sapSuiteUiCommonsDateRangeSliderBubbleLbl");
    oRm.writeClasses();
    oRm.write('>');
    oRm.renderControl(oDateRangeSliderInternal._oBubble2);
    oRm.write('</div>');
    oRm.write('</div>');
};

/**
 * Render the slide bar.
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.suite.ui.commons.DateRangeSliderInternal}
 *                oDateRangeSliderInternal an object representation of the control that should be rendered
 * @protected
 */
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderSliderBar = function(oRm, oDateRangeSliderInternal) {

    oRm.write('<DIV');
    oRm.writeAttribute('id', oDateRangeSliderInternal.getId() + '-right');
    oRm.write('class="sapUiSliR"> <DIV');

    oRm.writeAttribute('id', oDateRangeSliderInternal.getId() + '-left');
    oRm.write('class="sapUiSliL"> <DIV');

    oRm.writeAttribute('id', oDateRangeSliderInternal.getId() + '-bar');
    oRm.write('class="sapUiSliBar">');
};

/**
 * Render closing tag for the slide bar.
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.suite.ui.commons.DateRangeSliderInternal}
 *                oDateRangeSliderInternal an object representation of the control that should be rendered
 * @protected
 */
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderSliderBarEnd = function(oRm, oDateRangeSliderInternal) {

    oRm.write('</DIV></DIV></DIV>');
};

/**
 * Render labels and ticks.
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.suite.ui.commons.DateRangeSliderInternal}
 *                oDateRangeSliderInternal an object representation of the control that should be rendered
 * @protected
 */
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderTicksAndLabels = function(oRm, oDateRangeSliderInternal) {

    var bUseTextLabels = false;
    if (oDateRangeSliderInternal.getLabels() && oDateRangeSliderInternal.getLabels().length > 0) {
        bUseTextLabels = true;
    }

    if (oDateRangeSliderInternal.getTotalUnits() > 0 || bUseTextLabels) {
        var iTotalUnits = oDateRangeSliderInternal.getTotalUnits();
        if (bUseTextLabels) {
            iTotalUnits = oDateRangeSliderInternal.getLabels().length - 1;
        }

        // Add ticks
        for ( var i = 0; i <= iTotalUnits; i++) {
            oRm.write('<DIV');
            oRm.writeAttribute('id', oDateRangeSliderInternal.getId() + '-tick' + i);
            oRm.write('class="sapUiSliTick" ');
            oRm.write('></DIV>'); // tick

            if (oDateRangeSliderInternal.getStepLabels()) {
                // Texts
                oRm.write('<DIV');
                oRm.writeAttribute('id', oDateRangeSliderInternal.getId() + '-text' + i);
                switch (i) {
                    case (0):
                        oRm.write('class="sapUiSliText sapUiSliTextLeft" >');
                        break;
                    case (iTotalUnits):
                        oRm.write('class="sapUiSliText sapUiSliTextRight" >');
                        break;
                    default:
                        oRm.write('class="sapUiSliText" >');
                        break;
                }

                if (bUseTextLabels) {
                    oRm.write(oDateRangeSliderInternal.getLabels()[i]);
                } else {
                    var fStepSize = (oDateRangeSliderInternal.getMax() - oDateRangeSliderInternal.getMin()) / iTotalUnits;
                    oRm.write(oDateRangeSliderInternal.getMin() + i * fStepSize);
                }

                oRm.write('</DIV>'); // Text
            }
        }
    }
};

/**
 * Render highlight bar between grips.
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.suite.ui.commons.DateRangeSliderInternal}
 *                oDateRangeSliderInternal an object representation of the control that should be rendered
 * @protected
 */
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderHighlightBar = function(oRm, oDateRangeSliderInternal) {

    // Highlight bar
    oRm.write('<DIV');
    oRm.writeAttribute('id', oDateRangeSliderInternal.getId() + '-hili');
    oRm.write('class="sapUiSliHiLi"></DIV>');
};

/**
 * Renders the Grip for the slider control, using the provided {@link sap.ui.fw.RenderManager}.
 * 
 * @param {sap.ui.fw.RenderManager}
 *                oRm The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.suite.ui.commons.DateRangeSliderInternal}
 *                oDateRangeSliderInternal An object representation of the control that should be rendered.
 */
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderGrip = function(oRm, oDateRangeSliderInternal) {

    // Left Grip
    oRm.write('<DIV');

    // Icon for grip
    oRm.writeAttribute('id', oDateRangeSliderInternal.getId() + '-grip');
    if (oDateRangeSliderInternal.getEnabled()) {
        oRm.writeAttribute('tabIndex', '0');
    } else {
        oRm.writeAttribute('tabIndex', '-1');
    }

    if (oDateRangeSliderInternal.getPinGrip()) {
        oRm.write('class="sapUiSliGrip sapUiSliGripPin"');
    } else {
        oRm.write('class="sapUiSliGrip"');
    }
    
    oRm.writeAccessibilityState(oDateRangeSliderInternal, {
        role : 'slider',
        controls : oDateRangeSliderInternal.getId() + '-grip',
        orientation : 'horizontal',
        valuemin : oDateRangeSliderInternal.getFormattedDate(oDateRangeSliderInternal.getMinDate()),
        valuemax : oDateRangeSliderInternal.getFormattedDate(oDateRangeSliderInternal.getValue2Date()),
        valuenow: oDateRangeSliderInternal.getValue(),
        valuetext : oDateRangeSliderInternal.getFormattedDate(oDateRangeSliderInternal.getValueDate()),
        disabled : !oDateRangeSliderInternal.getEditable() || !oDateRangeSliderInternal.getEnabled(),
        describedby : oDateRangeSliderInternal.getTooltip_AsString() ? (oDateRangeSliderInternal.getId() + '-Descr ' + oDateRangeSliderInternal.getAriaDescribedBy().join(" ")) : undefined,
        live : 'assertive'
    });
    

    oRm.write('>&#9650;</DIV>'); // Symbol for HCB Theme (Must be hidden in other themes)
};

/**
 * Renders the Grip2 for the slider control, using the provided {@link sap.ui.fw.RenderManager}.
 * 
 * @param {sap.ui.fw.RenderManager}
 *                oRm The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.suite.ui.commons.DateRangeSliderInternal}
 *                oDateRangeSliderInternal An object representation of the control that should be rendered.
 */
sap.suite.ui.commons.DateRangeSliderInternalRenderer.renderGrip2 = function(oRm, oDateRangeSliderInternal) {

    // Right Grip
    oRm.write('<DIV');

    // Icon for grip
    oRm.writeAttribute('id', oDateRangeSliderInternal.getId() + '-grip2');
    if (oDateRangeSliderInternal.getEnabled()) {
        oRm.writeAttribute('tabIndex', '0');
    } else {
        oRm.writeAttribute('tabIndex', '-1');
    }

    if (oDateRangeSliderInternal.getPinGrip2()) {
        oRm.write('class="sapUiSliGrip sapUiSliGripPin"');
    } else {
        oRm.write('class="sapUiSliGrip"');
    }

    oRm.writeAttribute('title', oDateRangeSliderInternal.getValue2());
    
    oRm.writeAccessibilityState(oDateRangeSliderInternal, {
        role : 'slider',
        controls : oDateRangeSliderInternal.getId() + '-grip2',
        orientation : 'horizontal',
        valuemin : oDateRangeSliderInternal.getFormattedDate(oDateRangeSliderInternal.getValueDate()),
        valuemax : oDateRangeSliderInternal.getFormattedDate(oDateRangeSliderInternal.getMaxDate()),
        valuenow : oDateRangeSliderInternal.getValue2(),
        valuetext : oDateRangeSliderInternal.getFormattedDate(oDateRangeSliderInternal.getValue2Date()),
        disabled : !oDateRangeSliderInternal.getEditable() || !oDateRangeSliderInternal.getEnabled(),
        describedby : oDateRangeSliderInternal.getTooltip_AsString() ? (oDateRangeSliderInternal.getId() + '-Descr ' + oDateRangeSliderInternal.getAriaDescribedBy().join(" ")) : undefined,
        live : 'assertive'
    });    
    oRm.write('>&#9650;</DIV>'); // Symbol for HCB Theme (Must be hidden in other themes)

};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.suite.ui.commons.DateRangeSliderInternal}
 *                oDateRangeSliderInternal an object representation of the control that should be rendered
 */
sap.suite.ui.commons.DateRangeSliderInternalRenderer.render = function(oRm, oDateRangeSliderInternal) {

    // Return immediately if control is invisible
    if (!oDateRangeSliderInternal.getVisible()) {
        return;
    }

    this.renderEnclosingDiv(oRm, oDateRangeSliderInternal);
    this.renderBufferDivForBubbles(oRm, oDateRangeSliderInternal);
    this.renderAriaGripTooltip(oRm, oDateRangeSliderInternal);
    this.renderBubbles(oRm, oDateRangeSliderInternal);
    this.renderSliderBar(oRm, oDateRangeSliderInternal);
    this.renderTicksAndLabels(oRm, oDateRangeSliderInternal);
    this.renderHighlightBar(oRm, oDateRangeSliderInternal);

    if (oDateRangeSliderInternal.getPinGrip() || 
       (oDateRangeSliderInternal.getPinGrip() && oDateRangeSliderInternal.getPinGrip2()) || 
       (!oDateRangeSliderInternal.getPinGrip() && !oDateRangeSliderInternal.getPinGrip2())) {
        this.renderGrip(oRm, oDateRangeSliderInternal);
        this.renderGrip2(oRm, oDateRangeSliderInternal);
    } else if (oDateRangeSliderInternal.getPinGrip2()) {
        this.renderGrip2(oRm, oDateRangeSliderInternal);
        this.renderGrip(oRm, oDateRangeSliderInternal);
    }

    this.renderSliderBarEnd(oRm, oDateRangeSliderInternal);
    this.renderEnclosingDivEnd(oRm, oDateRangeSliderInternal);
};
