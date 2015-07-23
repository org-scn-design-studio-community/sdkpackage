/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.UnifiedThingInspectorRenderer");sap.suite.ui.commons.UnifiedThingInspectorRenderer={};
sap.suite.ui.commons.UnifiedThingInspectorRenderer.render=function(r,c){var t=c.getTooltip_AsString();r.write("<div");r.writeControlData(c);if(t){r.writeAttributeEscaped("title",t);}r.addStyle("height",c.getHeight());r.writeStyles();r.addClass("sapSuiteUti");r.writeClasses();r.write(">");r.renderControl(c._oNavContainer);r.write("</div>");};
