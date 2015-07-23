/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.DateRangeSliderRenderer");sap.suite.ui.commons.DateRangeSliderRenderer={};
sap.suite.ui.commons.DateRangeSliderRenderer.render=function(r,d){if(!d.getVisible()){return;}r.write("<span");r.writeControlData(d);r.addClass("sapSuiteUiCommonsDateRangeSlider");r.writeClasses();r.write(">");r.renderControl(d._oDateRangeSliderInternal);r.write("</span>");};
