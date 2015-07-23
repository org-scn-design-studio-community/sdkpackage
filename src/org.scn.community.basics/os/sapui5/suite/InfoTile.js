/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.InfoTile");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.suite.ui.commons.InfoTile",{metadata:{deprecated:true,library:"sap.suite.ui.commons",properties:{"description":{type:"string",group:"Appearance",defaultValue:null},"title":{type:"string",group:"Appearance",defaultValue:null},"footer":{type:"string",group:"Appearance",defaultValue:null},"size":{type:"sap.suite.ui.commons.InfoTileSize",group:"Misc",defaultValue:"Auto"},"state":{type:"sap.suite.ui.commons.LoadState",group:"Misc",defaultValue:sap.suite.ui.commons.LoadState.Loading}},aggregations:{"content":{type:"sap.ui.core.Control",multiple:false},"titleText":{type:"sap.m.Text",multiple:false,visibility:"hidden"}},events:{"press":{}}}});sap.suite.ui.commons.InfoTile.M_EVENTS={'press':'press'};jQuery.sap.require("sap.m.Text");
sap.suite.ui.commons.InfoTile.prototype.init=function(){this._rb=sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");this._oTitle=new sap.m.Text(this.getId()+"-title",{maxLines:2});this.setAggregation("titleText",this._oTitle);this._sFailedToLoad=this._rb.getText("INFOTILE_CANNOT_LOAD_TILE");this._oWarningIcon=new sap.ui.core.Icon(this.getId()+"-warn-icon",{src:"sap-icon://notification"});};
sap.suite.ui.commons.InfoTile.prototype.ontap=function(e){this.firePress();};
sap.suite.ui.commons.InfoTile.prototype.onkeydown=function(e){if(e.which==jQuery.sap.KeyCodes.ENTER||e.which==jQuery.sap.KeyCodes.SPACE){this.firePress();}};
sap.suite.ui.commons.InfoTile.prototype.getTitle=function(){return this._oTitle.getText();};
sap.suite.ui.commons.InfoTile.prototype.setTitle=function(d){this._oTitle.setProperty("text",d,true);this.invalidate();return this;};
sap.suite.ui.commons.InfoTile.prototype.exit=function(){this._oWarningIcon.destroy();};
