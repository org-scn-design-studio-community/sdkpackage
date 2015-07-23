/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.SplitButtonRenderer");sap.suite.ui.commons.SplitButtonRenderer={};
sap.suite.ui.commons.SplitButtonRenderer.render=function(r,s){if(!s.getVisible()){return;}r.write("<span");r.writeControlData(s);r.addClass("sapSuiteUiCommonsSplitButton");r.writeClasses();r.write(">");r.renderControl(s._oDefaultActionButton);r.renderControl(s._oMenuButton);r.write("</span>");};
