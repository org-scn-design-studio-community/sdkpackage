/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.MonitoringContent");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.suite.ui.commons.MonitoringContent",{metadata:{deprecated:true,library:"sap.suite.ui.commons",properties:{"value":{type:"string",group:"Misc",defaultValue:null},"iconSrc":{type:"string",group:"Misc",defaultValue:null},"size":{type:"sap.suite.ui.commons.InfoTileSize",group:"Misc",defaultValue:sap.suite.ui.commons.InfoTileSize.Auto},"state":{type:"sap.suite.ui.commons.LoadState",group:"Misc",defaultValue:sap.suite.ui.commons.LoadState.Loaded},"animateTextChange":{type:"boolean",group:"Misc",defaultValue:true}},aggregations:{"icon":{type:"sap.ui.core.Icon",multiple:false}},events:{"press":{}}}});sap.suite.ui.commons.MonitoringContent.M_EVENTS={'press':'press'};
sap.suite.ui.commons.MonitoringContent.prototype.init=function(){this._oIcon=new sap.ui.core.Icon(this.getId()+"-icon");this.setAggregation("icon",this._oIcon);};
sap.suite.ui.commons.MonitoringContent.prototype.onAfterRendering=function(){if(sap.suite.ui.commons.LoadState.Loaded==this.getState()||this.getAnimateTextChange()){jQuery.sap.byId(this.getId()).animate({opacity:"1"},1000);}};
sap.suite.ui.commons.MonitoringContent.prototype.setIconSrc=function(i){this._oIcon.setSrc(i);return this;};
sap.suite.ui.commons.MonitoringContent.prototype.getIconSrc=function(){return this._oIcon.getImageSrc();};
sap.suite.ui.commons.MonitoringContent.prototype.ontap=function(e){this.firePress();};
sap.suite.ui.commons.MonitoringContent.prototype.onkeydown=function(e){if(e.which==jQuery.sap.KeyCodes.ENTER||e.which==jQuery.sap.KeyCodes.SPACE){this.firePress();e.preventDefault();}};
