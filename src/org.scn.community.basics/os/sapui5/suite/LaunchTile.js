/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.LaunchTile");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.suite.ui.commons.LaunchTile",{metadata:{deprecated:true,library:"sap.suite.ui.commons",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"icon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"link":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null}},events:{"press":{}}}});sap.suite.ui.commons.LaunchTile.M_EVENTS={'press':'press'};jQuery.sap.require("sap.ui.core.IconPool");
sap.suite.ui.commons.LaunchTile.prototype.exit=function(){if(this._iconImage){this._iconImage.destroy();this._iconImage=undefined;}};
sap.suite.ui.commons.LaunchTile.prototype.setIcon=function(u){this.setProperty("icon",u,true);var i=this.getId()+"-img";var s="72px";var p={src:u,height:s,width:s,size:s};this._iconImage=sap.m.ImageHelper.getImageControl(i,this._iconImage,this,p);return this;};
sap.suite.ui.commons.LaunchTile.prototype.onclick=function(e){this.firePress({title:this.getTitle(),link:this.getLink()});};
