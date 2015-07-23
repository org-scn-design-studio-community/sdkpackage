/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.MonitoringTile");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.suite.ui.commons.InfoTile");sap.suite.ui.commons.InfoTile.extend("sap.suite.ui.commons.MonitoringTile",{metadata:{deprecated:true,library:"sap.suite.ui.commons",properties:{"value":{type:"string",group:"Misc",defaultValue:null},"iconSrc":{type:"string",group:"Misc",defaultValue:null},"footerColor":{type:"sap.suite.ui.commons.InfoTileTextColor",group:"Misc",defaultValue:sap.suite.ui.commons.InfoTileTextColor.Positive}}}});
sap.suite.ui.commons.MonitoringTile.prototype.init=function(){this._oTileCnt=new sap.suite.ui.commons.MonitoringContent(this.getId()+"-monitoring-tile-cnt");this.setContent(this._oTileCnt);sap.suite.ui.commons.InfoTile.prototype.init.apply(this);};
sap.suite.ui.commons.MonitoringTile.prototype.setScale=function(t){this._oTileCnt.setScale(t);return this;};
sap.suite.ui.commons.MonitoringTile.prototype.getScale=function(){return this._oTileCnt.getScale();};
sap.suite.ui.commons.MonitoringTile.prototype.setValue=function(t){this._oTileCnt.setValue(t);return this;};
sap.suite.ui.commons.MonitoringTile.prototype.getValue=function(){return this._oTileCnt.getValue();};
sap.suite.ui.commons.MonitoringTile.prototype.setSize=function(s){this._oTileCnt.setSize(s);return this;};
sap.suite.ui.commons.MonitoringTile.prototype.getSize=function(){return this._oTileCnt.getSize();};
sap.suite.ui.commons.MonitoringTile.prototype.setState=function(s){this._oTileCnt.setProperty("state",s,true);this.setProperty("state",s);return this;};
sap.suite.ui.commons.MonitoringTile.prototype.getState=function(){return this._oTileCnt.getState();};
sap.suite.ui.commons.MonitoringTile.prototype.setIconSrc=function(i){this._oTileCnt.setIconSrc(i);return this;};
sap.suite.ui.commons.MonitoringTile.prototype.getIconSrc=function(){return this._oTileCnt.getIconSrc();};
