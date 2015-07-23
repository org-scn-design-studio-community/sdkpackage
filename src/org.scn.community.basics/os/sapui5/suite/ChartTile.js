/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.ChartTile");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.suite.ui.commons.InfoTile");sap.suite.ui.commons.InfoTile.extend("sap.suite.ui.commons.ChartTile",{metadata:{deprecated:true,library:"sap.suite.ui.commons",properties:{"unit":{type:"string",group:"Misc",defaultValue:null}}}});
/*!
 * @copyright@
 */

sap.suite.ui.commons.ChartTile.prototype.init=function(){sap.suite.ui.commons.InfoTile.prototype.init.apply(this);};
sap.suite.ui.commons.ChartTile.prototype.onAfterRendering=function(){this._addDescriptionMargin();};
sap.suite.ui.commons.ChartTile.prototype.onBeforeRendering=function(){this._setContentProperty("size",this.getSize());};
sap.suite.ui.commons.ChartTile.prototype._addDescriptionMargin=function(){if(this.getDescription()&&this.getUnit()){var d=jQuery.sap.byId(this.getId()+"-description").hide();var w=jQuery.sap.byId(this.getId()+"-unit").outerWidth()+1;d.css("margin-right","-"+w+"px").css("padding-right",w+"px").show();}};
sap.suite.ui.commons.ChartTile.prototype._setContentProperty=function(p,v){var c=this.getContent();if(c){c.setProperty(p,v);}};
