/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.DynamicContainerRenderer");sap.suite.ui.commons.DynamicContainerRenderer={};
sap.suite.ui.commons.DynamicContainerRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapSuiteDC");r.writeClasses();var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t);}r.writeAttribute("tabindex","0");r.writeAttribute("role","presentation");r.write(">");var l=c.getTiles().length;for(var i=0;i<l;i++){r.write("<div");r.writeAttribute("id",c.getId()+"-wrapper-"+i);r.addClass("sapSuiteDCWrapper");r.writeClasses();r.write(">");r.renderControl(c.getTiles()[i]);r.write("</div>");}r.write("</div>");};
