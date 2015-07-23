/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.MicroAreaChartPoint");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.suite.ui.commons.MicroAreaChartPoint",{metadata:{publicMethods:["getXValue","getYValue"],library:"sap.suite.ui.commons",properties:{"x":{type:"float",group:"Misc",defaultValue:null},"y":{type:"float",group:"Misc",defaultValue:null}}}});
sap.suite.ui.commons.MicroAreaChartPoint.prototype.setX=function(v,s){this._isXValue=this._isNumber(v);return this.setProperty("x",this._isXValue?v:NaN,s);};
sap.suite.ui.commons.MicroAreaChartPoint.prototype.setY=function(v,s){this._isYValue=this._isNumber(v);return this.setProperty("y",this._isYValue?v:NaN,s);};
sap.suite.ui.commons.MicroAreaChartPoint.prototype.getXValue=function(){return this._isXValue?this.getX():undefined;};
sap.suite.ui.commons.MicroAreaChartPoint.prototype.getYValue=function(){return this._isYValue?this.getY():undefined;};
sap.suite.ui.commons.MicroAreaChartPoint.prototype._isNumber=function(n){return typeof n=='number'&&!isNaN(n)&&isFinite(n);};
sap.suite.ui.commons.MicroAreaChartPoint.prototype.clone=function(i,l,o){var c=sap.ui.core.Control.prototype.clone.apply(this,arguments);c._isXValue=this._isXValue;c._isYValue=this._isYValue;return c;};
