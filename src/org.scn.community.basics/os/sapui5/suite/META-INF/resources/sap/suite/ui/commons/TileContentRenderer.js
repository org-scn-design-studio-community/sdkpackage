/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.TileContentRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.suite.ui.commons.TileContentRenderer={};
sap.suite.ui.commons.TileContentRenderer.render=function(r,c){var t=c.getTooltip_AsString();r.write("<div");r.writeControlData(c);r.addClass("sapSuiteTileCnt");r.addClass(c._getContentType());r.addClass(c.getSize());if(t){r.writeAttributeEscaped("title",t)}r.writeClasses();r.write(">");this.renderContent(r,c);this.renderFooter(r,c);r.write("</div>")};
sap.suite.ui.commons.TileContentRenderer.renderContent=function(r,c){var C=c.getContent();r.write("<div");r.addClass("sapSuiteTileCntContent");r.addClass(c.getSize());r.writeClasses();r.writeAttribute("id",c.getId()+"-content");r.write(">");if(!C.hasStyleClass("sapSuiteUiTcInnerMarker")){C.addStyleClass("sapSuiteUiTcInnerMarker")}r.renderControl(C);r.write("</div>")};
sap.suite.ui.commons.TileContentRenderer.renderFooter=function(r,c){var f=c._getFooterText(r,c);r.write("<div");r.addClass("sapSuiteTileCntFtrTxt");r.addClass(c.getSize());r.writeClasses();r.writeAttribute("id",c.getId()+"-footer-text");r.writeAttributeEscaped("title",f);r.write(">");r.writeEscaped(f);r.write("</div>")};
