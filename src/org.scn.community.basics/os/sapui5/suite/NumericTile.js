/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.NumericTile");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.suite.ui.commons.InfoTile");sap.suite.ui.commons.InfoTile.extend("sap.suite.ui.commons.NumericTile",{metadata:{deprecated:true,library:"sap.suite.ui.commons",properties:{"value":{type:"string",group:"Misc",defaultValue:null},"scale":{type:"string",group:"Misc",defaultValue:null},"unit":{type:"string",group:"Misc",defaultValue:null},"valueColor":{type:"sap.suite.ui.commons.InfoTileValueColor",group:"Misc",defaultValue:null},"indicator":{type:"sap.suite.ui.commons.DeviationIndicator",group:"Misc",defaultValue:null}}}});
sap.suite.ui.commons.NumericTile.prototype.init=function(){this._oTileCnt=new sap.suite.ui.commons.NumericContent(this.getId()+"-numeric-tile-cnt");this.setContent(this._oTileCnt);sap.suite.ui.commons.InfoTile.prototype.init.apply(this);};
sap.suite.ui.commons.NumericTile.prototype.exit=function(){var c=this.getContent();c.destroy();};
sap.suite.ui.commons.NumericTile.prototype.setScale=function(t){this._oTileCnt.setScale(t);return this;};
sap.suite.ui.commons.NumericTile.prototype.setValue=function(t){this._oTileCnt.setValue(t);this.rerender();return this;};
sap.suite.ui.commons.NumericTile.prototype.getScale=function(){return this._oTileCnt.getScale();};
sap.suite.ui.commons.NumericTile.prototype.getValue=function(){return this._oTileCnt.getValue();};
sap.suite.ui.commons.NumericTile.prototype.setSize=function(s){this._oTileCnt.setSize(s);return this;};
sap.suite.ui.commons.NumericTile.prototype.getSize=function(){return this._oTileCnt.getSize();};
sap.suite.ui.commons.NumericTile.prototype.setValueColor=function(v){this._oTileCnt.setValueColor(v);return this;};
sap.suite.ui.commons.NumericTile.prototype.getValueColor=function(){return this._oTileCnt.getValueColor();};
sap.suite.ui.commons.NumericTile.prototype.setIndicator=function(i){this._oTileCnt.setIndicator(i);return this;};
sap.suite.ui.commons.NumericTile.prototype.getIndicator=function(){return this._oTileCnt.getIndicator();};
sap.suite.ui.commons.NumericTile.prototype.setState=function(s){this.setProperty("state",s,false);this._oTileCnt.setState(s);return this;};
sap.suite.ui.commons.NumericTile.prototype.getState=function(){return this._oTileCnt.getState();};
