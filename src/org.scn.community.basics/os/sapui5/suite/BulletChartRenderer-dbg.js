/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.BulletChartRenderer");

/**
 * @class BulletChart renderer. 
 * @static
 */
sap.suite.ui.commons.BulletChartRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.BulletChartRenderer.render = function (oRm, oControl) {
    var oChartData = oControl._calculateChartData();
    var fForecastValuePct = +oChartData.forecastValuePct;
    var sSize = oControl.getSize();
    var sScale = oControl.getScale();
    var bRtl = sap.ui.getCore().getConfiguration().getRTL();
    var sOrientation = bRtl ? "right" : "left";
    var sMode = oControl.getMode();
    var sDeltaValue = (sap.suite.ui.commons.BulletChartMode.Delta == sMode) ? oControl._calculateDeltaValue() : 0;
    var bIsActualSet = oControl.getActual() && oControl.getActual()._isValueSet;
    var bShowActualValue = oControl.getShowActualValue() && (sap.suite.ui.commons.InfoTileSize.XS != sSize) && sap.suite.ui.commons.BulletChartMode.Actual == sMode;
    var bShowDeltaValue = oControl.getShowDeltaValue() && (sap.suite.ui.commons.InfoTileSize.XS != sSize) && sap.suite.ui.commons.BulletChartMode.Delta == sMode;
    var bShowTargetValue = oControl.getShowTargetValue() && (sap.suite.ui.commons.InfoTileSize.XS != sSize);
	var sActualValueLabel = oControl.getActualValueLabel();
	var sDeltaValueLabel = oControl.getDeltaValueLabel();
	var sTargetValueLabel = oControl.getTargetValueLabel();
	var aData = oControl.getThresholds();
    var sTooltip = oControl.getTooltip_AsString();
    if (typeof sTooltip !== "string") {
    	sTooltip = "";
    }

    oRm.write("<div");
    oRm.writeControlData(oControl);
    oRm.addClass("sapSuiteBCContent");
    oRm.addClass(sSize);
	if (oControl.hasListeners("press")) {    
		oRm.addClass("sapSuiteUiCommonsPointer");
		oRm.writeAttribute("tabindex", "0");
    }
    oRm.writeAttribute("role", "presentation");
   	oRm.writeAttributeEscaped("aria-label", oControl.getAltText().replace(/\s/g, " ") + (sap.ui.Device.browser.firefox ? "" : " " + sTooltip ));
    
    oRm.writeClasses();
    
    if (oControl.getWidth()) {
    	oRm.addStyle("width", oControl.getWidth());
    	oRm.writeStyles();
    }
    oRm.writeAttribute("id", oControl.getId() + "-bc-content");
    oRm.writeAttributeEscaped("title", sTooltip);
    oRm.write(">");

        oRm.write("<div");
        oRm.addClass("sapSuiteBCChart");
        oRm.addClass(sSize);
        oRm.writeClasses();
        oRm.writeAttribute("id", oControl.getId() + "-bc-chart");
        oRm.write(">");

    	if (bIsActualSet && bShowActualValue) {
    		var sAValToShow = (sActualValueLabel) ? sActualValueLabel : ""+oControl.getActual().getValue();
    		var sValScale = sAValToShow + sScale;
            oRm.write("<div");  
            oRm.addClass("sapSuiteBCItemValue");
            oRm.addClass(oControl.getActual().getColor());
            oRm.addClass(sSize);
            oRm.writeClasses();
            oRm.writeStyles();
            oRm.writeAttribute("id", oControl.getId() + "-bc-item-value");
            oRm.write(">");
            oRm.writeEscaped(sValScale);
            oRm.write("</div>");
	    } else if (bIsActualSet && oControl._isTargetValueSet && bShowDeltaValue) {
    		var sDValToShow = (sDeltaValueLabel) ? sDeltaValueLabel : ""+sDeltaValue;
    		var sValScale = sDValToShow + sScale;
            oRm.write("<div");  
            oRm.addClass("sapSuiteBCItemValue");
            oRm.addClass(oControl.getActual().getColor());
            oRm.addClass(sSize);
            oRm.writeClasses();
            oRm.writeStyles();
            oRm.writeAttribute("id", oControl.getId() + "-bc-item-value");
            oRm.write(">");
            oRm.write("&Delta;");
            oRm.writeEscaped(sValScale);
            oRm.write("</div>");
	    }

    	for (var i = 0; i < oChartData.thresholdsPct.length; i++) {
    		if (aData[i]._isValueSet) {
            	this.renderThreshold(oRm,  oControl, oChartData.thresholdsPct[i]);
            }
        }
 
        oRm.write("<div");
        oRm.writeAttribute("id", oControl.getId() + "-chart-bar");
        oRm.addClass("sapSuiteBCBar");
        oRm.addClass(sSize);
        oRm.addClass(oControl.getScaleColor());
        oRm.writeClasses();
        oRm.write(">");
        oRm.write("</div>");

        if (oControl._isForecastValueSet && "Actual"==sMode) {
            oRm.write("<div");
            oRm.addClass("sapSuiteBCForecastBarValue");
            oRm.addClass(oControl.getActual().getColor());
            oRm.addClass(sSize);
            oRm.writeClasses();
            oRm.addStyle("width", fForecastValuePct + "%");
            oRm.writeStyles();
            oRm.writeAttribute("id", oControl.getId() + "-forecast-bar-value");
            oRm.write("></div>");
        }

        if (bIsActualSet) {
        
            oRm.write("<div");
            oRm.addClass("sapSuiteBCBarValueMarker");
            oRm.addClass(sMode);
        	if (!oControl.getShowValueMarker()) {
        		oRm.addClass("sapSuiteBCBarValueMarkerHidden");
	        }
            oRm.addClass(oControl.getActual().getColor());
            oRm.addClass(sSize);
            oRm.writeClasses();
            oRm.addStyle(sOrientation, parseFloat(oChartData.actualValuePct) + parseFloat(1) + "%");
            if ("Delta" == sMode && oChartData.actualValuePct <= oChartData.targetValuePct) {
            	oRm.addStyle("margin", "0");
            }           
            oRm.writeStyles();
            oRm.writeAttribute("id", oControl.getId() + "-bc-bar-value-marker");
            oRm.write("></div>");
        
	        if ("Actual"==sMode) {
	            oRm.write("<div");
	            oRm.addClass("sapSuiteBCBarValue");
	            oRm.addClass(oControl.getActual().getColor());
	            oRm.addClass(sSize);
	            if (oControl._isForecastValueSet) {
	            	oRm.addClass("sapSuiteBCForecast");
	            }
	            oRm.writeClasses();
	            oRm.addStyle("width", oChartData.actualValuePct + "%");
	            oRm.writeStyles();
	            oRm.writeAttribute("id", oControl.getId() + "-bc-bar-value");
	            oRm.write("></div>");
	        } else if (oControl._isTargetValueSet && "Delta"==sMode) {
	            oRm.write("<div");
	            oRm.addClass("sapSuiteBCBarValue");
	            oRm.addClass(oControl.getActual().getColor());
	            oRm.addClass(sSize);
	            oRm.writeClasses();
	            oRm.addStyle("width", Math.abs(oChartData.actualValuePct-oChartData.targetValuePct) + "%");
	            oRm.addStyle(sOrientation, 1 + Math.min(oChartData.actualValuePct, oChartData.targetValuePct) + "%");
	            oRm.writeStyles();
	            oRm.writeAttribute("id", oControl.getId() + "-bc-bar-value");
	            oRm.write("></div>");
	        }
        }
        
        if (oControl._isTargetValueSet) {
            oRm.write("<div");
            oRm.addClass("sapSuiteBCTargetBarValue");
            oRm.addClass(sSize);
            oRm.writeClasses();
            oRm.addStyle(sOrientation, parseFloat(oChartData.targetValuePct).toFixed(2) + "%");
            oRm.writeStyles();
            oRm.writeAttribute("id", oControl.getId() + "-bc-target-bar-value");
            oRm.write("></div>");

            if (bShowTargetValue) {
	        	var sTValToShow = (sTargetValueLabel) ? sTargetValueLabel : ""+oControl.getTargetValue();
	        	var sTValScale = sTValToShow + sScale;
	            oRm.write("<div");
	            oRm.addClass("sapSuiteBCTargetValue");
	            oRm.addClass(sSize);
	            oRm.writeClasses();
	            oRm.writeStyles();
	            oRm.writeAttribute("id", oControl.getId() + "-bc-target-value");
	            oRm.write(">");
	            oRm.writeEscaped(sTValScale);
	            oRm.write("</div>");
            }
        }
        oRm.write("</div>");

        oRm.write("<div");
	    oRm.writeAttribute("id", oControl.getId() + "-info");
	    oRm.writeAttribute("aria-hidden", "true");
	    oRm.addStyle("display", "none");
	    oRm.writeStyles();
	    oRm.write(">");
	    	oRm.writeEscaped(sTooltip);
	    oRm.write("</div>");

    oRm.write("</div>");
};

/**
 * Renders the HTML for the thresholds, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control whose thresholds should be rendered
 * @param {sap.ui.core.Control} oThreshold an object containing threshold values and colors
 */
sap.suite.ui.commons.BulletChartRenderer.renderThreshold = function(oRm, oControl, oThreshold) {
    var sOrientation = sap.ui.getCore().getConfiguration().getRTL() ? "right" : "left";
    var fValuePct = .98 * oThreshold.valuePct + 1;
    var sColor = oThreshold.color;
    var sSize = oControl.getSize();
  
    if (sap.suite.ui.commons.InfoTileValueColor.Error == oThreshold.color) {
        oRm.write("<div");
        oRm.addClass("sapSuiteBCDiamond");
        oRm.addClass(sSize);
        oRm.addClass(sColor);
        oRm.writeClasses();
        oRm.addStyle(sOrientation, fValuePct + "%");
        oRm.writeStyles();
        oRm.write("></div>");
    } 
    oRm.write("<div");
    oRm.addClass("sapSuiteBCThreshold");
    oRm.addClass(sSize);
    oRm.addClass(sColor);
    oRm.writeClasses();
    oRm.addStyle(sOrientation, fValuePct + "%");
    oRm.writeStyles();
    oRm.write("></div>");
};

