/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.BulletChartData");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.suite.ui.commons.BulletChartData",{metadata:{library:"sap.suite.ui.commons",properties:{"value":{type:"float",group:"Misc",defaultValue:0},"color":{type:"sap.suite.ui.commons.InfoTileValueColor",group:"Misc",defaultValue:sap.suite.ui.commons.InfoTileValueColor.Neutral}}}});
/*!
 * @copyright@
 */

sap.suite.ui.commons.BulletChartData.prototype.setValue=function(v,s){this._isValueSet=this._fnIsNumber(v);return this.setProperty("value",this._isValueSet?v:NaN,s);};
sap.suite.ui.commons.BulletChartData.prototype._fnIsNumber=function(n){return typeof n=='number'&&!isNaN(n)&&isFinite(n);};
sap.suite.ui.commons.BulletChartData.prototype.clone=function(i,l,o){var c=sap.ui.core.Control.prototype.clone.apply(this,arguments);c._isValueSet=this._isValueSet;return c;};
