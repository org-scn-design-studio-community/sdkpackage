/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.UnifiedThingGroup");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.suite.ui.commons.UnifiedThingGroup",{metadata:{library:"sap.suite.ui.commons",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"description":{type:"string",group:"Misc",defaultValue:null},"design":{type:"sap.suite.ui.commons.ThingGroupDesign",group:"Misc",defaultValue:sap.suite.ui.commons.ThingGroupDesign.ZeroIndent}},aggregations:{"content":{type:"sap.ui.core.Control",multiple:false}}}});
