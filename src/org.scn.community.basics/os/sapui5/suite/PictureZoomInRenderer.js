/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.PictureZoomInRenderer");sap.suite.ui.commons.PictureZoomInRenderer={};
sap.suite.ui.commons.PictureZoomInRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapSuiteUiCommonsPictureZoomIn");r.writeClasses();r.writeAttribute("role","img");var t=c.getTooltip_AsString();if(t){r.writeAttribute("title",t);}r.write(">");if(c.getBusyIndicator()){r.write("<div");r.writeAttribute("id",c.getId()+"-busy");r.addClass("sapSuiteUiCommonsPictureZoomInBusy");r.writeClasses();r.write(">");r.renderControl(c.getBusyIndicator());r.write("</div>");}r.renderControl(c._oImage);r.renderControl(c._oDescription);r.write("</div>");};
