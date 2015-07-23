/*
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowRenderer");
jQuery.sap.require("sap.suite.ui.commons.ProcessFlowLaneHeader");

/**
 * @class ProcessFlow renderer.
 * @static
 */
sap.suite.ui.commons.ProcessFlowRenderer = {};

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager}
 *            oRm the RenderManager that can be used for writing to the render
 *            output buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.suite.ui.commons.ProcessFlowRenderer.render = function(oRm, oControl) {
  var sStyleZoomLevelClass = this.getZoomStyleClass(oControl)
      , i, j, n, m
      , oNode
      , oNextNode
      , nCollNumber
      , calcMatrixNodes
      , mapPositionToLane
      , nLaneNumber
      , oLaneHeaderSymbol
      , bDrawProcessSymbol
      ;

  // write the HTML into the render manager

  oRm.write("<div"); // ProcessFlow container
  oRm.writeControlData(oControl);
  oRm.addClass("sapSuiteUiPFContainer");
  if (oControl._arrowScrollable) {
    oRm.addClass("sapPFHScrollable");
    if (oControl._bPreviousScrollForward) {
      oRm.addClass("sapPFHScrollForward");
    } else {
      oRm.addClass("sapPFHNoScrollForward");
    }
    if (oControl._bPreviousScrollBack) {
      oRm.addClass("sapPFHScrollBack");
    } else {
      oRm.addClass("sapPFHNoScrollBack");
    }
  } else {
    oRm.addClass("sapPFHNotScrollable");
  }
  oRm.writeClasses();
  oRm.write(">");

  this._writeCounter(oRm, oControl, "Left");
  oRm.renderControl(oControl._getScrollingArrow("left"));

  oRm.write("<div"); // scroll container
  oRm.writeAttribute("id", oControl.getId() + "-scrollContainer");
  oRm.addClass("sapSuiteUiScrollContainerPF");
  oRm.addClass("sapSuiteUiDefaultCursorPF");
  oRm.writeClasses();
  oRm.write(">"); // div element

  oRm.write("<div"); // scroll content
  oRm.writeAttribute("id", oControl.getId() + "-scroll-content");
  oRm.write(">"); // div element

  // nothing to render if there are no lanes
  if (!oControl.getLanes() || oControl.getLanes().length == 0) {
    oRm.write("</div>"); // scroll content
    oRm.write("</div>"); // scroll container
    oRm.write("</div>"); // whole control
    return;
  }


  try {
    calcMatrixNodes = oControl._getOrCreateProcessFlow();
    mapPositionToLane = oControl._getOrCreateLaneMap();
  } catch( exc ) {
    oControl._handleException( exc );
    return;
  }

  // fake field for accessibility keyboard interaction
  oRm.write("<span tabindex=0 ");
  oRm.writeAttribute("id", oControl.getId() + "-KbInteractionFakeElement");
  oRm.addClass("sapSuiteUiKbInteractionFakeElementPF");
  oRm.writeClasses();
  oRm.write("></span>");

  oRm.write("<table");
  oRm.writeAttribute("id", oControl.getId() + "-table");
  oRm.addClass("sapSuiteUiCommonsPF");
  oRm.addClass(sStyleZoomLevelClass);
  oRm.writeClasses();

  oRm.write(">");

  nLaneNumber = Object.keys(mapPositionToLane).length;

  oRm.write("<thead");
  oRm.writeAttribute("id", oControl.getId() + "-thead");
  oRm.write(">");

    oRm.write("<tr");
    oRm.addClass("sapSuiteUiCommonsPFHeader");
    oRm.addClass("sapSuiteUiCommonsPFHeaderHidden");
    oRm.writeClasses();
    oRm.write(">");

    // reserve space width for start symbol
      oRm.write("<th></th>");
      i = 0;
      while (i < nLaneNumber - 1) {
        // reserve space width for other parts to be displayed
        oRm.write("<th></th><th></th><th></th><th></th><th></th>");
        i++;
      }

      // space for the last node
      oRm.write("<th></th><th></th><th></th>");

      // reserve space width for end symbol
      oRm.write("<th></th>");
    oRm.write("</tr>");

    oRm.write("<tr");
    oRm.addClass("sapSuiteUiCommonsPFHeaderRow");
    oRm.writeClasses();
    oRm.write(">");

      oRm.write("<th>");
      oLaneHeaderSymbol = sap.suite.ui.commons.ProcessFlowLaneHeader.createNewStartSymbol(oControl._isHeaderMode());
      oRm.renderControl(oLaneHeaderSymbol);
      oRm.write("</th>");

      i = 0;
      // TODO
      // may be mistake here, that the position must be plus 1. What happens if e.g. there is 3 and 5 .... probably
      // fails with "null object" exception
      var nCount = 0;
      var aNodeStates = [];
      bDrawProcessSymbol = false;
      while (i < (nLaneNumber-1)) {
        var positionUp = 1; // each following artificial node has one more '1' at the end 
        oNode = mapPositionToLane[i];
        oNextNode = mapPositionToLane[i+1];
        if (oNode.getLaneId()+positionUp == oNextNode.getLaneId()) {
//        artificial node
          nCount = nCount + 1;
          aNodeStates.push(oNode.getState());
        }
        else {
          if (nCount == 0) {
            this._renderNormalNode(oRm, oControl, oNode, i, nLaneNumber);
          }
          else {
            aNodeStates.push(oNode.getState());
            bDrawProcessSymbol = true;
            this._renderMergedNode(oRm, oControl, oNode, nCount, aNodeStates, bDrawProcessSymbol);
            aNodeStates = [];
            nCount = 0;
          }
        }
        i++;
      }
      if (nCount == 0) {
        if (!oNextNode) {
          oNextNode = mapPositionToLane[0];
        }
        this._renderNormalNode(oRm, oControl, oNextNode, i, nLaneNumber);
      }
      else {
        aNodeStates.push(oNextNode.getState());
        bDrawProcessSymbol = false;
        this._renderMergedNode( oRm, oControl, oNode, nCount, aNodeStates, bDrawProcessSymbol);
        nCount = 0;
      } 
      oRm.write("<th>");
      oLaneHeaderSymbol = sap.suite.ui.commons.ProcessFlowLaneHeader.createNewEndSymbol(oControl._isHeaderMode());
      oRm.renderControl(oLaneHeaderSymbol);
      oRm.write("</th>");
    oRm.write("</tr>");
  oRm.write("</thead>");

  // end of the header (lane objects)

  // starting the body, which means table (node and connection rendering)
  oRm.write("<tbody>");
  m = calcMatrixNodes.length;
  //  first empty line to make the space betwen the header and table (see also visual design document)
  if (m > 0) {
    oRm.write("<tr>");
    oRm.write("<td colspan=\"" + (nLaneNumber*5).toString() + "\"></td>");
    oRm.write("</tr>");
  }

  i = 0;
  while (i < m) {
    oRm.write("<tr>");
    oRm.write("<td></td>");

    n = calcMatrixNodes[i].length;
    j = 0;

    while (j < n - 1) {
      oNode = calcMatrixNodes[i][j];

      if ((j == 0) || (j % 2)) {
        oRm.write("<td>");
      } else {
        oRm.write("<td colspan=\"4\">");
      }

      if (oNode) {
        if (oNode instanceof sap.suite.ui.commons.ProcessFlowNode) {
          oNode._setParentFlow(oControl);
          oNode._setZoomLevel(oControl.getZoomLevel());
          oNode._setFoldedCorner(oControl.getFoldedCorners());
          oRm.renderControl(oNode);
        } else {
          oNode.setZoomLevel(oControl.getZoomLevel());
          oControl.addAggregation("connections", oNode);
          oRm.renderControl(oNode);
        }
      }

      oRm.write("</td>");
      j++;
    }

    // the last space after a node + space under the end symbol
    oRm.write("<td></td>");
    oRm.write("<td></td>");
    oRm.write("</tr>");
    i++;
  }

  oRm.write("</tbody>");
  oRm.write("</table>");

  oRm.write("</div>"); // scroll content
  oRm.write("</div>"); // scroll container
  this._writeCounter(oRm, oControl, "Right");
  oRm.renderControl(oControl._getScrollingArrow("right"));

  oRm.write("</div>"); // ProcessFlow container
};


sap.suite.ui.commons.ProcessFlowRenderer.getZoomStyleClass = function(oControl) {
  var sStyleClass = "";
  switch( oControl.getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
      sStyleClass = "sapSuiteUiCommonsPFZoomLevel1";
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
      sStyleClass = "sapSuiteUiCommonsPFZoomLevel2";
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
      sStyleClass = "sapSuiteUiCommonsPFZoomLevel3";
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      sStyleClass = "sapSuiteUiCommonsPFZoomLevel4";
      break;
  }
  return sStyleClass;
};

sap.suite.ui.commons.ProcessFlowRenderer._renderNormalNode = function(oRm, oControl, oNode, i, nLaneNumber) {
  oRm.write("<th colspan=\"3\">");
  oRm.renderControl(oNode);
  oRm.write("</th>");
  if (i < nLaneNumber - 1) {
    oRm.write("<th colspan=\"2\">");
    var oLaneHeaderSymbol = sap.suite.ui.commons.ProcessFlowLaneHeader.createNewProcessSymbol(oControl._isHeaderMode());
    // forward the icon click events from the lane header items to the flow control
    oLaneHeaderSymbol.attachPress(jQuery.proxy(oControl.ontouchend, oControl));
    oRm.renderControl(oLaneHeaderSymbol);
    oRm.write("</th>");
}
};

sap.suite.ui.commons.ProcessFlowRenderer._renderMergedNode = function( oRm, oControl, oNode, nCount, aLaneIdNodeStates, bDrawProcessSymbol) {
  var aNodeStates = oControl._mergeLaneIdNodeStates(aLaneIdNodeStates);
  oNode.setState(aNodeStates);
  nCount++;
  var nCollNumber = nCount*3 + (nCount-1)*2;
  oRm.write("<th colspan=\"" + nCollNumber + "\">");
  oRm.renderControl(oNode);
  oRm.write("</th>");
  if (bDrawProcessSymbol) {
    oRm.write("<th colspan=\"2\">");
    var oLaneHeaderSymbol = sap.suite.ui.commons.ProcessFlowLaneHeader.createNewProcessSymbol(oControl._isHeaderMode());
    // forward the icon click events from the lane header items to the flow control
    oLaneHeaderSymbol.attachPress(jQuery.proxy(oControl.ontouchend, oControl));
    oRm.renderControl(oLaneHeaderSymbol);
    oRm.write("</th>");
  }
};

sap.suite.ui.commons.ProcessFlowRenderer._writeCounter = function (oRm, oControl, sDirection) {
    oRm.write("<span");
    oRm.writeAttribute("id", oControl.getId() + "-counter" + sDirection);
    oRm.addClass("suiteUiPFHCounter");
    oRm.addClass("suiteUiPFHCounter" + sDirection);
    oRm.writeClasses();
    oRm.write(">"); // end span
    oRm.writeEscaped("0");
    oRm.write("</span>"); // text

};

