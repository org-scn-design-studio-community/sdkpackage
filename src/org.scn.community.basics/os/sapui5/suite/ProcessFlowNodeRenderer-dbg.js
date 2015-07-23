/*
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowNodeRenderer");

/**
 * @class ProcessFlowNode renderer.
 * @static
 */
sap.suite.ui.commons.ProcessFlowNodeRenderer = {
};

/*
 * navigation focus is used for the keyboard support
 *
 * business focus comes from outside and just make different visual representation (blue rectangle around). The focus
 * is in the styles represents with the word selected (timing and historical reasons)
 *
 *
 */

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * @public
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 * @param {integer} nodeLevel of the node (0 - parent node, 1 - upper left (folded corner icon), 2 - top part of the node, 3 - bottom part of the node
 */
sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeClasses = function( oRm, oControl, nodeLevel ) { // EXC_SAP_006_1, EXC_JSHINT_047
  switch(nodeLevel) {
    case 0:
      //oRm.writeAttribute("id", oControl.getId() + "-base-container");
      break;
    case 1:
      oRm.writeAttribute("id", oControl.getId() + "-corner-container");
      break;
    case 2:
      oRm.writeAttribute("id", oControl.getId() + "-top-container");
      break;
    case 3:
      oRm.writeAttribute("id", oControl.getId() + "-content-container");
      break;
  }
  if (nodeLevel > 0) {
    // Planned
    switch(oControl.getState() ) {
      case sap.suite.ui.commons.ProcessFlowNodeState.Planned:
        if ((nodeLevel === 1) && (oControl._getFoldedCorner())) {
          oRm.addClass("sapSuiteUiCommonsProcessFlowFoldedCornerPlanned");
        }
        else {
          oRm.addClass("sapSuiteUiCommonsProcessFlowNodeStatePlanned");
          oRm.addClass("sapSuiteUiCommonsProcessFlowNodeStatePlannedDashedBorder");
        }
        break;
      case sap.suite.ui.commons.ProcessFlowNodeState.PlannedNegative:
        if ((nodeLevel === 1) && (oControl._getFoldedCorner())) {
          oRm.addClass("sapSuiteUiCommonsProcessFlowFoldedCornerPlanned");
        }
        else {
          oRm.addClass("sapSuiteUiCommonsProcessFlowNodeStatePlanned");
          oRm.addClass("sapSuiteUiCommonsProcessFlowNodeStatePlannedDashedBorder");
        }
        break;
    }
    if( oControl._getNavigationFocus() ) {
      oRm.addClass("sapSuiteUiCommonsProcessFlowFoldedCornerDisplayStateNavigation");
    }
    // Display state: Focused
    switch( oControl._getDisplayState() ) {
      case sap.suite.ui.commons.ProcessFlowDisplayState.RegularFocused:
      case sap.suite.ui.commons.ProcessFlowDisplayState.HighlightedFocused:
      case sap.suite.ui.commons.ProcessFlowDisplayState.DimmedFocused:
        if ((nodeLevel === 1) && (oControl._getFoldedCorner())) {
          oRm.addClass("sapSuiteUiCommonsProcessFlowFoldedCornerDisplayStateSelected");
        }
        else {
          oRm.addClass("sapSuiteUiCommonsProcessFlowNodeDisplayStateSelected");
        }
        break;
    }
    // Display state: Regular, Highlighted, Dimmed
    switch( oControl._getDisplayState() ) {
      case sap.suite.ui.commons.ProcessFlowDisplayState.Regular:
      case sap.suite.ui.commons.ProcessFlowDisplayState.RegularFocused:
        if ((nodeLevel === 1) && (oControl._getFoldedCorner())) {
          oRm.addClass("sapSuiteUiCommonsProcessFlowFoldedCornerDisplayStateRegular");
        }
        else {
            oRm.addClass("sapSuiteUiCommonsProcessFlowNodeDisplayStateRegular");
        }
        break;
      case sap.suite.ui.commons.ProcessFlowDisplayState.Highlighted:
      case sap.suite.ui.commons.ProcessFlowDisplayState.HighlightedFocused:
        if ((nodeLevel === 1) && (oControl._getFoldedCorner())) {
          oRm.addClass("sapSuiteUiCommonsProcessFlowFoldedCornerDisplayStateHighlighted");
        }
        else {
          oRm.addClass("sapSuiteUiCommonsProcessFlowNodeDisplayStateHighlighted");
        }
        break;
      case sap.suite.ui.commons.ProcessFlowDisplayState.Dimmed:
      case sap.suite.ui.commons.ProcessFlowDisplayState.DimmedFocused:
        if ((nodeLevel === 1) && (oControl._getFoldedCorner())) {
          oRm.addClass("sapSuiteUiCommonsProcessFlowFoldedCornerDisplayStateDimmed");
        }
        else {
          oRm.addClass("sapSuiteUiCommonsProcessFlowNodeDisplayStateDimmed");
        }
        break;
    }
  }
  if(nodeLevel === 0) {
    if( oControl._getNavigationFocus() ) {
        oRm.addClass("sapSuiteUiCommonsProcessFlowFoldedCornerDisplayStateNavigation");
    }
    if( oControl._getDisplayState() == sap.suite.ui.commons.ProcessFlowDisplayState.Highlighted ) {
      oRm.addClass("sapSuiteUiCommonsProcessFlowNodeDisplayStateHighlighted");
    }
  }
  switch( oControl._getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode" + nodeLevel + "ZoomLevel1");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode" + nodeLevel + "ZoomLevel2");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode" + nodeLevel + "ZoomLevel3");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode" + nodeLevel + "ZoomLevel4");
      break;
  }
  if (nodeLevel === 1) {
    if (oControl._getFoldedCorner()) {
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode1FoldedBorderStyle");
    } else {
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode1BorderStyle");
      oRm.addClass("sapSuiteUiCommonsProcessFlowNodeBorderStandard");
    }
  } else if (nodeLevel > 1) {
    oRm.addClass("sapSuiteUiCommonsProcessFlowNode" + nodeLevel + "BorderStyle");
    oRm.addClass("sapSuiteUiCommonsProcessFlowNodeBorderStandard");
  }

  if (((nodeLevel === 1) && (oControl._getFoldedCorner())))  {
    oRm.addClass("sapSuiteUiCommonsProcessFlowFoldedCornerNode1");
  }
  else {
    oRm.addClass("sapSuiteUiCommonsProcessFlowNode" + nodeLevel);
  }
  if (((nodeLevel === 0) && (oControl._getFoldedCorner())))  {
    oRm.addClass("sapSuiteUiCommonsProcessFlowFoldedCornerIndication");
  }

  oRm.writeClasses();
};

/**
 * Renders the HTML shadow borders for the given highlighted node, using the provided {@link sap.ui.core.RenderManager}.
 * @public
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 * @param {string} border type: "top", "bottom", "left", "right"
 */
sap.suite.ui.commons.ProcessFlowNodeRenderer.assignShadowClasses = function(oRm, oControl, border) {
  oRm.addClass("shadowedDivCommon");

  switch(border) {
    case "top":
      if (oControl._getFoldedCorner()) {
        oRm.addClass("shadowedDivFoldedCornerBorderTop");
      }
      else {
        oRm.addClass("shadowedDivBorderTop");
      }
      break;
    case "right":
      oRm.addClass("shadowedDivBorderRight");
      break;
    case "bottom":
      oRm.addClass("shadowedDivBorderBottom");
      break;
    case "left":
      if (oControl._getFoldedCorner()) {
        oRm.addClass("shadowedDivFoldedCornerBorderLeft");
      }
      else {
        oRm.addClass("shadowedDivBorderLeft");
      }
      break;
    case "corner":
      if (this._isSafari()) {
        oRm.addClass("shadowedDivFoldedCornerSafari");
      }
      else {
        oRm.addClass("shadowedDivFoldedCorner");
      }
      break;
  }

  oRm.writeClasses();
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * @public
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeTitleClasses = function( oRm, oControl ) {
  oRm.writeAttribute("id", oControl.getId() + "-title");

  switch( oControl._getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3TitleZoomLevel1");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3TitleZoomLevel2");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3TitleZoomLevel3");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3TitleZoomLevel4");
      break;
  }
  oRm.addClass("sapSuiteUiCommonsProcessFlowNode3Title");
  oRm.writeClasses();
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * @public
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeStateClasses = function( oRm, oControl ) {
   oRm.writeAttribute("id", oControl.getId() + "-state");

   switch( oControl._getZoomLevel() ) {
     case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
       oRm.addClass("sapSuiteUiCommonsProcessFlowNode3StateZoomLevel1");
       break;
     case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
       oRm.addClass("sapSuiteUiCommonsProcessFlowNode3StateZoomLevel2");
       break;
     case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
       oRm.addClass("sapSuiteUiCommonsProcessFlowNode3StateZoomLevel3");
       break;
     case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
       oRm.addClass("sapSuiteUiCommonsProcessFlowNode3StateZoomLevel4");
       break;
   }
  oRm.addClass("sapSuiteUiCommonsProcessFlowNode3State");
  oRm.writeClasses();
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * @public
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeIconClasses = function( oRm, oControl ) {
   oRm.writeAttribute("id", oControl.getId() + "-icon-container");

   switch( oControl.getState() ) {
     case sap.suite.ui.commons.ProcessFlowNodeState.Positive:
       oRm.addClass("sapSuiteUiCommonsProcessFlowNodeStatePositive");
       break;
     case sap.suite.ui.commons.ProcessFlowNodeState.Negative:
       oRm.addClass("sapSuiteUiCommonsProcessFlowNodeStateNegative");
       break;
     case sap.suite.ui.commons.ProcessFlowNodeState.Planned:
       oRm.addClass("sapSuiteUiCommonsProcessFlowNodeStatePlanned");
       break;
     case sap.suite.ui.commons.ProcessFlowNodeState.Neutral:
       oRm.addClass("sapSuiteUiCommonsProcessFlowNodeStateNeutral");
       break;
     case sap.suite.ui.commons.ProcessFlowNodeState.PlannedNegative:
       oRm.addClass("sapSuiteUiCommonsProcessFlowNodeStateNegative");
       break;
   }
   switch( oControl._getZoomLevel() ) {
     case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
       oRm.addClass("sapSuiteUiCommonsProcessFlowNode3StateIconZoomLevel1");
       break;
     case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
       oRm.addClass("sapSuiteUiCommonsProcessFlowNode3StateIconZoomLevel2");
       break;
     case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
       oRm.addClass("sapSuiteUiCommonsProcessFlowNode3StateIconZoomLevel3");
       break;
     case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
       oRm.addClass("sapSuiteUiCommonsProcessFlowNode3StateIconZoomLevel4");
       break;
   }
   oRm.addClass("sapSuiteUiCommonsProcessFlowNode3StateIcon");
   oRm.writeClasses();
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * @public
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeStateTextClasses = function(oRm, oControl){
  oRm.writeAttribute("id", oControl.getId() + "-state-text");

  switch( oControl.getState() ) {
    case sap.suite.ui.commons.ProcessFlowNodeState.Positive:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNodeStatePositive");
      break;
    case sap.suite.ui.commons.ProcessFlowNodeState.Negative:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNodeStateNegative");
      break;
    case sap.suite.ui.commons.ProcessFlowNodeState.Planned:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNodeStatePlanned");
      break;
    case sap.suite.ui.commons.ProcessFlowNodeState.Neutral:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNodeStateNeutral");
      break;
    case sap.suite.ui.commons.ProcessFlowNodeState.PlannedNegative:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNodeStateNegative");
      break;
  }
  switch( oControl._getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3StateTextZoomLevel1");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3StateTextZoomLevel2");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3StateTextZoomLevel3");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3StateTextZoomLevel4");
      break;
  }
  oRm.addClass("sapSuiteUiCommonsProcessFlowNode3StateText");
  oRm.writeClasses();
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeText1Classes = function(oRm, oControl){
  oRm.writeAttribute("id", oControl.getId() + "-text1");

  switch( oControl._getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3TextWithGapZoomLevel1");
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel1");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3TextWithGapZoomLevel2");
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel2");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel3");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel4");
      break;
  }
  oRm.addClass("sapSuiteUiCommonsProcessFlowNode3Text");
  oRm.writeClasses();
};
/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeText2Classes = function(oRm, oControl){
  oRm.writeAttribute("id", oControl.getId() + "-text2");

  switch( oControl._getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel1");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel2");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel3");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      oRm.addClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel4");
      break;
  }
  oRm.addClass("sapSuiteUiCommonsProcessFlowNode3Text");
  oRm.writeClasses();
};

/*========================================================================================================
 *  RENDERER
 * =======================================================================================================
 */

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * @public
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 *
 */
sap.suite.ui.commons.ProcessFlowNodeRenderer.render = function(oRm, oControl){ // EXC_SAP_006_1, EXC_JSHINT_046
  var foldedCornerControl;

  if (oControl._getFoldedCorner()) {
    foldedCornerControl = oControl._getFoldedCornerControl();
  }
  var headerControl = oControl._getHeaderControl();
  var iconControl = oControl._getIconControl();
  var stateControl = oControl._getStateTextControl();
  var text1Control = oControl._getText1Control();
  var text2Control = oControl._getText2Control();

  /*
   in order to be able to display folded corner we have add another four div containers -
    - node1-node4
   node0 - base container contains all subparts
   node1 - corner container contains folded corner
   node2 - top container
   node3 - node components
  */
  // node0
  oRm.write("<div");
  oRm.writeControlData(oControl);
  sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeClasses(oRm, oControl, 0);

  //Write ARIA details
  oRm.writeAttribute("role", "textbox");
  oRm.writeAttribute("aria-readonly", true);
  oRm.writeAttributeEscaped("aria-label", oControl._getAriaText());

  oRm.write(">");
  switch( oControl._getDisplayState() ) {
    case sap.suite.ui.commons.ProcessFlowDisplayState.Highlighted:
    case sap.suite.ui.commons.ProcessFlowDisplayState.HighlightedFocused:
        //border-top shadowing
      oRm.write("<div");
        sap.suite.ui.commons.ProcessFlowNodeRenderer.assignShadowClasses(oRm, oControl, "top");
      oRm.write("></div>");

      //border-right shadowing
      oRm.write("<div");
        sap.suite.ui.commons.ProcessFlowNodeRenderer.assignShadowClasses(oRm, oControl, "right");
      oRm.write("></div>");

      //border-bottom shadowing
      oRm.write("<div");
        sap.suite.ui.commons.ProcessFlowNodeRenderer.assignShadowClasses(oRm, oControl, "bottom");
      oRm.write("></div>");

      //border-left shadowing
      oRm.write("<div");
        sap.suite.ui.commons.ProcessFlowNodeRenderer.assignShadowClasses(oRm, oControl, "left");
      oRm.write("></div>");

      if (oControl._getFoldedCorner()) {
        //folded corner shadowing
        oRm.write("<div");
          sap.suite.ui.commons.ProcessFlowNodeRenderer.assignShadowClasses(oRm, oControl, "corner");
        oRm.write("></div>");
      }
      break;
  }
    // node1
    oRm.write("<div");
    sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeClasses(oRm, oControl, 1);
    oRm.write(">");
    if (oControl._getFoldedCorner()) {
      oRm.renderControl(foldedCornerControl);
    }
    oRm.write("</div>");
    // node2
    oRm.write("<div");
    sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeClasses(oRm, oControl, 2);
    oRm.write(">");
    oRm.write("</div>");
    // node3
    oRm.write("<div");
    sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeClasses(oRm, oControl, 3);
    oRm.writeAttribute("aria-hidden", "true");
    oRm.write(">");
      // node3 contents (actual node contents - title, state, texts)
      // title
      oRm.write("<div");
      sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeTitleClasses(oRm, oControl );
      oRm.write(">");
      oRm.renderControl(headerControl);
      oRm.write("</div>");
      // state area
      oRm.write("<div");
      sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeStateClasses(oRm, oControl );
      oRm.write(">");
      // state icon
      oRm.write("<div");
      sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeIconClasses(oRm, oControl);
      oRm.write(">");
      oRm.renderControl(iconControl);
      oRm.write("</div>");
      // state text
      oRm.write("<div");
      sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeStateTextClasses(oRm, oControl);
      oRm.write(">");
      oRm.renderControl(stateControl);
      oRm.write("</div>");
      oRm.write("</div>");
      // end of state
      // text1
    oRm.write("<div");
    sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeText1Classes(oRm, oControl);
    oRm.write(">");
    oRm.renderControl(text1Control);
    oRm.write("</div>");
    // text2
    oRm.write("<div");
    sap.suite.ui.commons.ProcessFlowNodeRenderer.assignNodeText2Classes(oRm, oControl);
    oRm.write(">"); // div element for text2
    oRm.renderControl(text2Control);
    oRm.write("</div>");
    oRm.write("</div>"); // end of node3
  oRm.write("</div>"); // end of node0
};

/**
 * @private
 * @returns {Boolean}
 */
sap.suite.ui.commons.ProcessFlowNodeRenderer._isSafari = function() {
  return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
};