/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.ColumnData");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.suite.ui.commons.ColumnData",{metadata:{library:"sap.suite.ui.commons",properties:{"label":{type:"string",group:"Misc",defaultValue:null},"value":{type:"float",group:"Misc",defaultValue:null},"color":{type:"sap.suite.ui.commons.InfoTileValueColor",group:"Misc",defaultValue:sap.suite.ui.commons.InfoTileValueColor.Neutral}},events:{"press":{}}}});sap.suite.ui.commons.ColumnData.M_EVENTS={'press':'press'};
/*!
 * @copyright@
 */

sap.suite.ui.commons.ColumnData.prototype.attachEvent=function(e,d,f,l){sap.ui.core.Control.prototype.attachEvent.call(this,e,d,f,l);if(this.getParent()){this.getParent().setBarPressable(this.getParent().getColumns().indexOf(this),true);}return this;};
sap.suite.ui.commons.ColumnData.prototype.detachEvent=function(e,f,l){sap.ui.core.Control.prototype.detachEvent.call(this,e,f,l);if(this.getParent()){this.getParent().setBarPressable(this.getParent().getColumns().indexOf(this),false);}return this;};
