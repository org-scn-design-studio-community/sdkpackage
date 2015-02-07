/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowConnectionRenderer");

/**
 * @class ProcessFlowConnection renderer.
 * @static
 */
sap.suite.ui.commons.ProcessFlowConnectionRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @public
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.ProcessFlowConnectionRenderer.render = function(oRm, oControl) { // EXC_SAP_006_1, EXC_JSHINT_046, EXC_JSHINT_047
  var connection = oControl._traverseConnectionData();
  var zoomLevel = oControl.getZoomLevel();

  oRm.write("<div id = \"" + oControl.getId() + "\">");
  if (connection.hasOwnProperty("left") && connection.left.draw &&
    connection.hasOwnProperty("right") && connection.right.draw &&
    connection.hasOwnProperty("top") && !connection.top.draw &&
    connection.hasOwnProperty("bottom") && !connection.bottom.draw) {
    // horizontal connection

    // 1st row
    oRm.write("<div");
    oRm.addClass("boxWideWidth");
    switch (zoomLevel) {
      case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
        oRm.addClass("boxTopZoom1Height");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
        oRm.addClass("boxTopZoom3Height");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
        oRm.addClass("boxTopZoom4Height");
        break;
      default:
        oRm.addClass("boxTopZoom2Height");
    }
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");

    // 2nd row
    oRm.write("<div");
    if (connection.arrow) {
      // connection column
      oRm.addClass("parentPosition");
      switch (zoomLevel) {
        case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
          oRm.addClass("boxWideArrowZoom1Width");
          break;
        case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
          oRm.addClass("boxWideArrowZoom3Width");
          break;
        case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
          oRm.addClass("boxWideArrowZoom4Width");
          break;
        default:
          oRm.addClass("boxWideArrowZoom2Width");
      }
    } else {
      oRm.addClass("boxWideWidth");
    }
    oRm.addClass("boxMiddleBorderHeight");
    oRm.addClass("borderBottom");
    if (connection.right.state === "Planned") {
      oRm.addClass("borderBottomStatePlanned");
    } else {
      oRm.addClass("borderBottomStateCreated");
    }
    if (connection.right.display === "Highlighted") {
      oRm.addClass("borderBottomDisplayHighlighted");
      oRm.addClass("displayHighlighted");
    } else if (connection.right.display === "Dimmed") {
      oRm.addClass("borderBottomDisplayDimmed");
      oRm.addClass("displayDimmed");
    } else {
      oRm.addClass("borderBottomDisplayRegular");
      oRm.addClass("displayRegular");
    }
    oRm.writeClasses();
    oRm.write(">");
      if (connection.arrow) {
        oRm.write("<div");
        oRm.addClass("arrowRight");
        if (connection.right.display === "Highlighted") {
          oRm.addClass("borderLeftDisplayHighlighted");
        } else if (connection.right.display === "Dimmed") {
          oRm.addClass("borderLeftDisplayDimmed");
        } else {
          oRm.addClass("borderLeftDisplayRegular");
        }
        oRm.writeClasses();
        oRm.write(">");
        oRm.write("</div>");
      }
    oRm.write("</div>");

    // 3rd row
    // omitted

  } else if (connection.hasOwnProperty("left") && !connection.left.draw &&
    connection.hasOwnProperty("right") && !connection.right.draw &&
    connection.hasOwnProperty("top") && connection.top.draw &&
    connection.hasOwnProperty("bottom") && connection.bottom.draw) {
    // vertical connection

    // left column
    oRm.write("<div");
    oRm.addClass("floatLeft");
    switch (zoomLevel) {
      case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
        oRm.addClass("boxZoom1Width");
        oRm.addClass("boxWideZoom1Height");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
        oRm.addClass("boxZoom3Width");
        oRm.addClass("boxWideZoom3Height");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
        oRm.addClass("boxZoom4Width");
        oRm.addClass("boxWideZoom4Height");
        break;
      default:
        oRm.addClass("boxZoom2Width");
        oRm.addClass("boxWideZoom2Height");
    }
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");

    // middle column
    oRm.write("<div");
    oRm.addClass("floatLeft");
    oRm.addClass("boxMiddleBorderWidth");
    switch (zoomLevel) {
      case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
        oRm.addClass("boxWideZoom1Height");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
        oRm.addClass("boxWideZoom3Height");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
        oRm.addClass("boxWideZoom4Height");
        break;
      default:
        oRm.addClass("boxWideZoom2Height");
    }
    oRm.addClass("borderLeft");
    if (connection.top.state === "Planned") {
      oRm.addClass("borderLeftStatePlanned");
    } else {
      oRm.addClass("borderLeftStateCreated");
    }
    if (connection.top.display === "Highlighted") {
      oRm.addClass("borderLeftDisplayHighlighted");
      oRm.addClass("displayHighlighted");
    } else if (connection.top.display === "Dimmed") {
      oRm.addClass("borderLeftDisplayDimmed");
      oRm.addClass("displayDimmed");
    } else {
      oRm.addClass("borderLeftDisplayRegular");
      oRm.addClass("displayRegular");
    }
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");

    // right column
    // omitted

    // reset
    oRm.write("<div");
    oRm.addClass("floatClear");
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");

  } else {
    // other connections

    // 1st row

    // left column
    oRm.write("<div");
    oRm.addClass("floatLeft");
    switch (zoomLevel) {
      case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
        oRm.addClass("boxZoom1Width");
        oRm.addClass("boxTopZoom1Height");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
        oRm.addClass("boxZoom3Width");
        oRm.addClass("boxTopZoom3Height");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
        oRm.addClass("boxZoom4Width");
        oRm.addClass("boxTopZoom4Height");
        break;
      default:
        oRm.addClass("boxZoom2Width");
        oRm.addClass("boxTopZoom2Height");
    }
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");

    // middle column
    oRm.write("<div");
    oRm.addClass("floatLeft");
    switch (zoomLevel) {
      case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
        oRm.addClass("boxTopZoom1Height");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
        oRm.addClass("boxTopZoom3Height");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
        oRm.addClass("boxTopZoom4Height");
        break;
      default:
        oRm.addClass("boxTopZoom2Height");
    }
    if (connection.hasOwnProperty("top") && connection.top.draw) {
      oRm.addClass("boxMiddleBorderWidth");
      oRm.addClass("borderLeft");
      if (connection.top.state === "Planned") {
        oRm.addClass("borderLeftStatePlanned");
      } else {
        oRm.addClass("borderLeftStateCreated");
      }
      if (connection.top.display === "Highlighted") {
        oRm.addClass("borderLeftDisplayHighlighted");
        oRm.addClass("displayHighlighted");
      } else if (connection.top.display === "Dimmed") {
        oRm.addClass("borderLeftDisplayDimmed");
        oRm.addClass("displayDimmed");
      } else {
        oRm.addClass("borderLeftDisplayRegular");
        oRm.addClass("displayRegular");
      }
    } else {
      oRm.addClass("boxMiddleWidth");
    }
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");

    // right column
    // omitted

    // 2nd row
    oRm.write("<div");
    oRm.addClass("floatClear");
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");

    // left column
    oRm.write("<div");
    oRm.addClass("floatLeft");
    switch (zoomLevel) {
      case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
        oRm.addClass("boxZoom1Width");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
        oRm.addClass("boxZoom3Width");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
        oRm.addClass("boxZoom4Width");
        break;
      default:
        oRm.addClass("boxZoom2Width");
    }
    if (connection.hasOwnProperty("left") && connection.left.draw) {
      oRm.addClass("boxMiddleBorderHeight");
      oRm.addClass("borderBottom");
      if (connection.left.state === "Planned") {
        oRm.addClass("borderBottomStatePlanned");
      } else {
        oRm.addClass("borderBottomStateCreated");
      }
      if (connection.left.display === "Highlighted") {
        oRm.addClass("borderBottomDisplayHighlighted");
        oRm.addClass("displayHighlighted");
      } else if (connection.left.display === "Dimmed") {
        oRm.addClass("borderBottomDisplayDimmed");
        oRm.addClass("displayDimmed");
      } else {
        oRm.addClass("borderBottomDisplayRegular");
        oRm.addClass("displayRegular");
      }
    } else {
      oRm.addClass("boxMiddleHeight");
    }
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");

    // middle column
    oRm.write("<div");
    oRm.addClass("floatLeft");
    oRm.addClass("boxMiddleWidth");
    oRm.addClass("boxMiddleBorderHeight");
    if ((connection.hasOwnProperty("left") && connection.left.draw) ||
      (connection.hasOwnProperty("right") && connection.right.draw) ||
      (connection.hasOwnProperty("top") && connection.top.draw) ||
      (connection.hasOwnProperty("bottom") && connection.bottom.draw)) {
      oRm.addClass("borderBottom");
      oRm.addClass("borderBottomStateCreated");
      if (connection.right.display === "Highlighted" ||
        connection.top.display === "Highlighted" ||
        connection.left.display === "Highlighted" ||
        connection.bottom.display === "Highlighted") {
        oRm.addClass("borderBottomDisplayHighlighted");
        oRm.addClass("displayHighlighted");
      } else if (connection.right.display === "Dimmed" ||
        connection.top.display === "Dimmed" ||
        connection.left.display === "Dimmed" ||
        connection.bottom.display === "Dimmed") {
        oRm.addClass("borderBottomDisplayDimmed");
        oRm.addClass("displayDimmed");
      } else {
        oRm.addClass("borderBottomDisplayRegular");
        oRm.addClass("displayRegular");
      }
    }
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");

    // right column
    oRm.write("<div");
    oRm.addClass("floatLeft");
    if (connection.arrow) {
      oRm.addClass("parentPosition");
      switch (zoomLevel) {
        case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
          oRm.addClass("boxArrowZoom1Width");
          break;
        case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
          oRm.addClass("boxArrowZoom3Width");
          break;
        case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
          oRm.addClass("boxArrowZoom4Width");
          break;
        default:
          oRm.addClass("boxArrowZoom2Width");
      }
    } else {
      switch (zoomLevel) {
        case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
          oRm.addClass("boxZoom1Width");
          break;
        case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
          oRm.addClass("boxZoom3Width");
          break;
        case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
          oRm.addClass("boxZoom4Width");
          break;
        default:
          oRm.addClass("boxZoom2Width");
      }
    }
    if (connection.hasOwnProperty("right") && connection.right.draw) {
      oRm.addClass("boxMiddleBorderHeight");
      oRm.addClass("borderBottom");
      if (connection.right.state === "Planned") {
        oRm.addClass("borderBottomStatePlanned");
      } else {
        oRm.addClass("borderBottomStateCreated");
      }
      if (connection.right.display === "Highlighted") {
        oRm.addClass("borderBottomDisplayHighlighted");
        oRm.addClass("displayHighlighted");
      } else if (connection.right.display === "Dimmed") {
        oRm.addClass("borderBottomDisplayDimmed");
        oRm.addClass("displayDimmed");
      } else {
        oRm.addClass("borderBottomDisplayRegular");
        oRm.addClass("displayRegular");
      }
    } else {
      oRm.addClass("boxMiddleHeight");
    }
    oRm.writeClasses();
    oRm.write(">");
      if (connection.arrow) {
        oRm.write("<div");
        oRm.addClass("arrowRight");
        if (connection.hasOwnProperty("right")) {
          if (connection.right.display === "Highlighted") {
            oRm.addClass("borderLeftDisplayHighlighted");
          } else if (connection.right.display === "Dimmed") {
            oRm.addClass("borderLeftDisplayDimmed");
          } else {
            oRm.addClass("borderLeftDisplayRegular");
          }
        }
        oRm.writeClasses();
        oRm.write(">");
        oRm.write("</div>");
      }
    oRm.write("</div>");

    // 3rd row
    oRm.write("<div");
    oRm.addClass("floatClear");
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");

    // left column
    oRm.write("<div");
    oRm.addClass("floatLeft");
    switch (zoomLevel) {
      case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
        oRm.addClass("boxZoom1Width");
        oRm.addClass("boxBottomZoom1Height");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
        oRm.addClass("boxZoom3Width");
        oRm.addClass("boxBottomZoom3Height");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
        oRm.addClass("boxZoom4Width");
        oRm.addClass("boxBottomZoom4Height");
        break;
      default:
        oRm.addClass("boxZoom2Width");
        oRm.addClass("boxBottomZoom2Height");
    }
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");

    // middle column
    oRm.write("<div");
    oRm.addClass("floatLeft");
    switch (zoomLevel) {
      case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
        oRm.addClass("boxBottomZoom1Height");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
        oRm.addClass("boxBottomZoom3Height");
        break;
      case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
        oRm.addClass("boxBottomZoom4Height");
        break;
      default:
        oRm.addClass("boxBottomZoom2Height");
    }
    if (connection.hasOwnProperty("bottom") && connection.bottom.draw) {
      oRm.addClass("boxMiddleBorderWidth");
      oRm.addClass("borderLeft");
      if (connection.bottom.state === "Planned") {
        oRm.addClass("borderLeftStatePlanned");
      } else {
        oRm.addClass("borderLeftStateCreated");
      }
      if (connection.bottom.display === "Highlighted") {
        oRm.addClass("borderLeftDisplayHighlighted");
        oRm.addClass("displayHighlighted");
      } else if (connection.bottom.display === "Dimmed") {
        oRm.addClass("borderLeftDisplayDimmed");
        oRm.addClass("displayDimmed");
      } else {
        oRm.addClass("borderLeftDisplayRegular");
        oRm.addClass("displayRegular");
      }
    } else {
      oRm.addClass("boxMiddleWidth");
    }
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");

    // right column
    // omitted

    // reset
    oRm.write("<div");
    oRm.addClass("floatClear");
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");

  }
  oRm.write("</div>");
};
