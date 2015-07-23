/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.ChartContainerContent");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.suite.ui.commons.ChartContainerContent",{metadata:{library:"sap.suite.ui.commons",properties:{"icon":{type:"string",group:"Misc",defaultValue:null},"title":{type:"string",group:"Misc",defaultValue:null}},aggregations:{"content":{type:"sap.ui.core.Control",multiple:false}}}});
sap.suite.ui.commons.ChartContainerContent.prototype.init=function(){this._oldWidth=0;this._oldHeight=0;};
