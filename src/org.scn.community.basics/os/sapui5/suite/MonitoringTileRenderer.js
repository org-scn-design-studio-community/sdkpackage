/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.MonitoringTileRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.suite.ui.commons.InfoTileRenderer");sap.suite.ui.commons.MonitoringTileRenderer=sap.ui.core.Renderer.extend(sap.suite.ui.commons.InfoTileRenderer);
sap.suite.ui.commons.MonitoringTileRenderer.renderFooterText=function(r,c){r.write("<span");r.writeAttribute("id",c.getId()+"-footer-text");r.addClass("sapSuiteUiCommonsMTFooterText");r.addClass(c.getFooterColor());r.writeClasses();r.write(">");r.writeEscaped(c.getFooter());r.write("</span>");};
