/*
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowLaneHeaderRenderer");

/**
 * @class ProcessFlowLaneHeader renderer.
 * @static
 */
sap.suite.ui.commons.ProcessFlowLaneHeaderRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * @public
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.ProcessFlowLaneHeaderRenderer.render = function(oRm, oControl) {
    // write the HTML into the render manager
    switch(oControl.getSymbolType()) {
      case sap.suite.ui.commons.ProcessFlowLaneHeader.symbolType.startSymbol:
        this._writeSymbolNodeType(
          oRm
          , oControl
          , "-start"
          , ["suiteUiProcessFlowLaneHeaderStartEndSymbol", "suiteUiProcessFlowLaneHeaderStartSymbol"]
          , ["suiteUiProcessFlowLaneHeaderStartEndSymbolContainer", "suiteUiProcessFlowLaneHeaderNoSelection"]
          , false /* do not draw icon */
          , oControl._isHeaderMode()
        );
        break;
      case sap.suite.ui.commons.ProcessFlowLaneHeader.symbolType.endSymbol:
        this._writeSymbolNodeType(
          oRm
          , oControl
          , "-end"
          , ["suiteUiProcessFlowLaneHeaderStartEndSymbol", "suiteUiProcessFlowLaneHeaderEndSymbol"]
          , ["suiteUiProcessFlowLaneHeaderStartEndSymbolContainer", "suiteUiProcessFlowLaneHeaderNoSelection"]
          , false /* do not draw icon */
          , oControl._isHeaderMode()
        );
        break;
      case sap.suite.ui.commons.ProcessFlowLaneHeader.symbolType.processSymbol:
        this._writeSymbolNodeType(
          oRm
          , oControl
          , "-process"
          , ["suiteUiProcessFlowLaneHeaderProcessSymbol"]
          , ["suiteUiProcessFlowLaneHeaderProcessSymbolContainer", "suiteUiProcessFlowLaneHeaderNoSelection"]
          , true /* draw icon */
          , oControl._isHeaderMode()
        );
        break;
      default:
        this._writeDefaultNodeType(oRm, oControl);
    }
};

/**
 * Node symbol renderer.
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 * @param {String} sId id suffix of the symbol node
 * @param {String[]} aSC array of names of classes for symbol node div element
 * @param {String[]} aCC array of names of classes for the symbol container div element
 * @param {boolean} bDrawIcon true if the icon should be rendered
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeaderRenderer._writeSymbolNodeType = function (oRm, oControl, sId, aSC, aCC, bDrawIcon) { // EXC_JSHINT_034
  oRm.write("<div");
  oRm.writeControlData(oControl);
  aCC.forEach(function(sCClass) {
    oRm.addClass(sCClass);
  });

  oRm.writeClasses();
  oRm.write(">"); // symbol container
    oRm.write("<div"); // symbol
    oRm.writeAttribute("id", oControl.getId() + sId);
    aSC.forEach(function(sSClass) {
      oRm.addClass(sSClass);
    });
    oRm.writeClasses();
    oRm.write(">");
      if(bDrawIcon) {
        var sIconSrc = oControl.getIconSrc();
        if (sIconSrc) {
          var oIcon = oControl._getImage(oControl.getId() + "-lh-icon", sIconSrc);
          oRm.renderControl(oIcon);
        }
      }
    oRm.write("</div>"); // symbol
  oRm.write("</div>"); // symbol container
};

/**
 * Default node renderer.
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeaderRenderer._writeDefaultNodeType = function (oRm, oControl) {  // EXC_SAP_006_1, EXC_JSHINT_046
  oRm.write("<div");
  oRm.writeControlData(oControl);
  oRm.addClass("suiteUiProcessFlowLaneHeaderContainer");
  oRm.addClass("suiteUiProcessFlowLaneHeaderNoSelection");

  oRm.writeClasses();
  oRm.write(">"); // div element for the whole control

    oRm.write("<div");
    oRm.writeAttribute("id", oControl.getId() + "-standard");

    //Write ARIA details
    oRm.writeAttribute("role", "textbox");
    oRm.writeAttribute("aria-readonly", true);
    var statusText = oControl.getText() + ", " + oControl._getAriaText();
    oRm.writeAttributeEscaped("aria-label", statusText);

    oRm.addClass("suiteUiProcessFlowLaneHeaderBodyContainer");
    oRm.writeClasses();
    oRm.write(">"); // div element for header
      oRm.write("<div");
      oRm.writeAttribute("id", oControl.getId() + "-horizontal-line");
      oRm.addClass("suiteUiProcessFlowLaneHeaderHorizontalLine");
      oRm.writeClasses();
      oRm.write("></div>");

      oRm.write("<svg");
      oRm.writeAttribute("id", oControl.getId() + "-donut-chart");
      oRm.addClass("suiteUiProcessFlowLaneHeaderDonutSvg");
      oRm.writeClasses();
      oRm.write(">");
        oControl._renderDonutPercentages(oRm);
      oRm.write("</svg>"); // div element for the donut chart

      oRm.write("<div");
      oRm.writeAttribute("id", oControl.getId() + "-lh-icon-container");
      oRm.addClass("suiteUiProcessFlowLaneHeaderIconContainer");
      oRm.writeClasses();
      oRm.write(">"); // div element for header

        var sIconSrc = oControl.getIconSrc();
        if (sIconSrc) {
          var oIcon = oControl._getImage(oControl.getId() + "-lh-icon", sIconSrc);
          oIcon.addStyleClass("suiteUiProcessFlowLaneHeaderProcessSymbolIcon");
          oRm.renderControl(oIcon);
        }
      oRm.write("</div>"); // icon container
    oRm.write("</div>"); // body container

    oRm.write("<div");
    oRm.writeAttribute("id", oControl.getId() + "-lh-text-container");
    oRm.addClass("suiteUiProcessFlowLaneHeaderTextContainer");
    oRm.writeClasses();
    oRm.write(">"); // div element for the text container

      oRm.write("<span");
      oRm.writeAttribute("id", oControl.getId() + "-lh-text");
      oRm.addClass("suiteUiProcessFlowLaneHeaderText");
      oRm.writeClasses();
      oRm.writeAttribute("aria-hidden", true);
      oRm.write(">"); // div element for the text span
        oRm.writeEscaped(oControl.getText());
      oRm.write("</span>"); // text

    oRm.write("</div>"); // text container

  oRm.write("</div>"); // whole control
};