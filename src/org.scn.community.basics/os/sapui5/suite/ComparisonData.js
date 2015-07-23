/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.ComparisonData");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.suite.ui.commons.ComparisonData",{metadata:{library:"sap.suite.ui.commons",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"value":{type:"float",group:"Misc",defaultValue:0},"color":{type:"sap.suite.ui.commons.InfoTileValueColor",group:"Misc",defaultValue:sap.suite.ui.commons.InfoTileValueColor.Neutral},"displayValue":{type:"string",group:"Misc",defaultValue:null}},events:{"press":{}}}});sap.suite.ui.commons.ComparisonData.M_EVENTS={'press':'press'};
/*!
 * @copyright@
 */

sap.suite.ui.commons.ComparisonData.prototype.setValue=function(v,s){this._isValueSet=this._fnIsNumber(v);return this.setProperty("value",this._isValueSet?v:NaN,s);};
sap.suite.ui.commons.ComparisonData.prototype._fnIsNumber=function(n){return typeof n=='number'&&!isNaN(n)&&isFinite(n);};
sap.suite.ui.commons.ComparisonData.prototype.clone=function(i,l,o){var c=sap.ui.core.Control.prototype.clone.apply(this,arguments);c._isValueSet=this._isValueSet;return c;};
sap.suite.ui.commons.ComparisonData.prototype.attachEvent=function(e,d,f,l){sap.ui.core.Control.prototype.attachEvent.call(this,e,d,f,l);if(this.getParent()){this.getParent().setBarPressable(this.getParent().getData().indexOf(this),true);}return this;};
sap.suite.ui.commons.ComparisonData.prototype.detachEvent=function(e,f,l){sap.ui.core.Control.prototype.detachEvent.call(this,e,f,l);if(this.getParent()){this.getParent().setBarPressable(this.getParent().getData().indexOf(this),false);}return this;};
