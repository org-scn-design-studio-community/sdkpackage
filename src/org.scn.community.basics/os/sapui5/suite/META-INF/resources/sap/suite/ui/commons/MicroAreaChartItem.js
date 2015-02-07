/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.MicroAreaChartItem");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.suite.ui.commons.MicroAreaChartItem",{metadata:{library:"sap.suite.ui.commons",properties:{"color":{type:"sap.suite.ui.commons.InfoTileValueColor",group:"Misc",defaultValue:sap.suite.ui.commons.InfoTileValueColor.Neutral}},aggregations:{"points":{type:"sap.suite.ui.commons.MicroAreaChartPoint",multiple:true,singularName:"point",bindable:"bindable"}}}});
