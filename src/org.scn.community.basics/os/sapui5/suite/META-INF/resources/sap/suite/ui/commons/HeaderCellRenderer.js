/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.HeaderCellRenderer");sap.suite.ui.commons.HeaderCellRenderer={};
sap.suite.ui.commons.HeaderCellRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapSuiteUiCommonsHeaderCell");r.addStyle("height",c.getHeight());r.writeStyles();r.writeClasses();r.write(">");var w=c.getWest();var n=c.getNorth();var e=c.getEast();var s=c.getSouth();var t="";if(w!=null){t+="W"}if(n!=null){t+="N"}if(e!=null){t+="E"}if(s!=null){t+="S"}if(w!=null){this._renderInnerCell(r,w,t,"sapSuiteHdrCellWest")}if(n!=null){this._renderInnerCell(r,n,t,"sapSuiteHdrCellNorth")}if(e!=null){this._renderInnerCell(r,e,t,"sapSuiteHdrCellEast")}if(s!=null){this._renderInnerCell(r,s,t,"sapSuiteHdrCellSouth")}r.write("</div>")};
sap.suite.ui.commons.HeaderCellRenderer._renderInnerCell=function(r,c,t,s){r.write("<div");r.addClass(t);r.addClass(s);r.addStyle("height",c.getHeight());r.writeStyles();r.writeClasses();r.write(">");r.renderControl(c.getContent());r.write("</div>")};
