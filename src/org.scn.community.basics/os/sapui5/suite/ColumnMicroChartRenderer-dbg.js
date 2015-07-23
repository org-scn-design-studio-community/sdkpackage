/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.ColumnMicroChartRenderer");

/**
 * @class ColumnMicroChart renderer. 
 * @static
 */
sap.suite.ui.commons.ColumnMicroChartRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.ColumnMicroChartRenderer.render = function(oRm, oControl) {
	function fnWriteLbl(oLabel, sId, sClass, bWideBtmLbl) {
		oRm.write("<div");
		oRm.writeAttribute("id", oControl.getId() + sId);
		oRm.addClass("sapSuiteCmcLbl");
		oRm.addClass(sClass);
		oRm.addClass(oLabel.getColor());
		if (bWideBtmLbl) {
			oRm.addClass("W");
		}
		oRm.writeClasses();
		oRm.write(">");
			oRm.writeEscaped(oLabel.getLabel());
		oRm.write("</div>");
	};
	 
	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass("sapSuiteCmc");
	oRm.addClass(oControl.getSize());
    var sTooltip = oControl.getTooltip_AsString();

    if (typeof sTooltip !== "string") {
    	sTooltip = "";
    }
    oRm.writeAttributeEscaped("title", sTooltip);
    
	if (oControl.hasListeners("press")) {    
		oRm.addClass("sapSuiteUiCommonsPointer");
		oRm.writeAttribute("tabindex", "0");
    }
    oRm.writeAttribute("role", "presentation");
   	oRm.writeAttributeEscaped("aria-label", oControl.getAltText().replace(/\s/g, " ") + (sap.ui.Device.browser.firefox ? "" : " " + sTooltip ));
    
    oRm.writeClasses();
	oRm.addStyle("width", oControl.getWidth());
	oRm.addStyle("height", oControl.getHeight());
	oRm.writeStyles();
	oRm.write(">");
		var bLeftTopLbl = oControl.getLeftTopLabel() && oControl.getLeftTopLabel().getLabel() != "";
		var bRightTopLbl = oControl.getRightTopLabel() && oControl.getRightTopLabel().getLabel() != "";
		var bLeftBtmLbl = oControl.getLeftBottomLabel() && oControl.getLeftBottomLabel().getLabel() != "";
		var bRightBtmLbl = oControl.getRightBottomLabel() && oControl.getRightBottomLabel().getLabel() != "";
		
		if (bLeftTopLbl || bRightTopLbl) {
			oRm.write("<div");
			oRm.writeAttribute("id", oControl.getId() + "-top-lbls");
			oRm.addClass("sapSuiteCmcLbls");
			oRm.addClass("T");
			oRm.writeClasses();
			oRm.write(">");
				var bWideTopLbl = bLeftTopLbl ^ bRightTopLbl;
				if (bLeftTopLbl) {
					fnWriteLbl(oControl.getLeftTopLabel(), "-left-top-lbl", "L", bWideTopLbl);
				}
				
				if (bRightTopLbl) {
					fnWriteLbl(oControl.getRightTopLabel(), "-right-top-lbl", "R", bWideTopLbl);
				}
			oRm.write("</div>");
		}

		oRm.write("<div");
		oRm.writeAttributeEscaped("id", oControl.getId() + "-content");
		oRm.addClass("sapSuiteCmcCnt");
		if (bLeftTopLbl || bRightTopLbl) {
			oRm.addClass("T");
		}
		if (bLeftBtmLbl || bRightBtmLbl) {
			oRm.addClass("B");
		}
		oRm.writeClasses();
		oRm.write(">");
			oRm.write("<div");
			oRm.writeAttributeEscaped("id", oControl.getId() + "-bars");
			oRm.addClass("sapSuiteCmcBars");
			oRm.writeClasses();
			oRm.write(">");
				var iColumnsNum = oControl.getColumns().length;
				for (var i = 0; i < iColumnsNum; i++) {
					var oColumn = oControl.getColumns()[i];
					oRm.write("<div");
					oRm.writeAttribute("id", oControl.getId() + "-bar-" + i);
					oRm.addClass("sapSuiteCmcBar");
					oRm.addClass(oColumn.getColor());
					if (oColumn.hasListeners("press")) {
						oRm.writeAttribute("tabindex", "0");
						oRm.writeAttribute("role", "presentation");
						var sBarAltText = oControl._getBarAltText(i);
						oRm.writeAttributeEscaped("title", sBarAltText);
						oRm.writeAttributeEscaped("aria-label", sBarAltText);
						oRm.addClass("sapSuiteUiCommonsPointer");
					}			
					oRm.writeClasses();
					oRm.write(">");
					oRm.write("</div>");
				}
			oRm.write("</div>");
		oRm.write("</div>");

		if (bLeftBtmLbl || bRightBtmLbl) {
			oRm.write("<div");
			oRm.writeAttribute("id", oControl.getId() + "-btm-lbls");
			oRm.addClass("sapSuiteCmcLbls");
			oRm.addClass("B");
			oRm.writeClasses();
			oRm.write(">");
				var bWideBtmLbl = bLeftBtmLbl ^ bRightBtmLbl;
				if (bLeftBtmLbl) {
					fnWriteLbl(oControl.getLeftBottomLabel(), "-left-btm-lbl", "L", bWideBtmLbl);
				}
				
				if (bRightBtmLbl) {
					fnWriteLbl(oControl.getRightBottomLabel(), "-right-btm-lbl", "R", bWideBtmLbl);
				}
			oRm.write("</div>");
		}
		
		oRm.write("<div");
		oRm.writeAttribute("id", oControl.getId() + "-hidden");
		oRm.writeAttribute("aria-hidden", "true");
		oRm.writeAttribute("tabindex", "0");
		oRm.writeStyles();
		oRm.write(">");
		oRm.write("</div>");	
	oRm.write("</div>");
};