/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.NumericTileRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.suite.ui.commons.InfoTileRenderer");sap.suite.ui.commons.NumericTileRenderer=sap.ui.core.Renderer.extend(sap.suite.ui.commons.InfoTileRenderer);
sap.suite.ui.commons.NumericTileRenderer._getFooterText=function(r,c){var f=c.getFooter();var u=c.getUnit();return u?(sap.ui.getCore().getConfiguration().getRTL()?((f?f+" ,":"")+u):(u+(f?", "+f:""))):f;};
sap.suite.ui.commons.NumericTileRenderer.renderFooterTooltip=function(r,c){r.writeAttributeEscaped("title",this._getFooterText(r,c));};
sap.suite.ui.commons.NumericTileRenderer.renderFooterText=function(r,c){r.writeEscaped(this._getFooterText(r,c));};
