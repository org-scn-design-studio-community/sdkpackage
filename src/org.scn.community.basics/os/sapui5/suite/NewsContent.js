/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.NewsContent");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.suite.ui.commons.NewsContent",{metadata:{library:"sap.suite.ui.commons",properties:{"size":{type:"sap.suite.ui.commons.InfoTileSize",group:"Misc",defaultValue:sap.suite.ui.commons.InfoTileSize.Auto},"contentText":{type:"string",group:"Misc",defaultValue:null},"subheader":{type:"string",group:"Misc",defaultValue:null}},aggregations:{"contentTextAgr":{type:"sap.m.Text",multiple:false,visibility:"hidden"}},events:{"press":{}}}});sap.suite.ui.commons.NewsContent.M_EVENTS={'press':'press'};
sap.suite.ui.commons.NewsContent.prototype.init=function(){this._oCText=new sap.m.Text(this.getId()+"-content-text",{maxLines:2});this._oCText.cacheLineHeight=false;this.setAggregation("contentTextAgr",this._oCText);this.setTooltip("{AltText}");};
sap.suite.ui.commons.NewsContent.prototype.ontap=function(e){if(sap.ui.Device.browser.internet_explorer){this.$().focus();}this.firePress();};
sap.suite.ui.commons.NewsContent.prototype.onkeydown=function(e){if(e.which==jQuery.sap.KeyCodes.ENTER||e.which==jQuery.sap.KeyCodes.SPACE){this.firePress();e.preventDefault();}};
sap.suite.ui.commons.NewsContent.prototype.getContentText=function(){return this._oCText.getText();};
sap.suite.ui.commons.NewsContent.prototype.setContentText=function(t){this._oCText.setText(t);return this;};
sap.suite.ui.commons.NewsContent.prototype.attachEvent=function(e,d,f,l){sap.ui.core.Control.prototype.attachEvent.call(this,e,d,f,l);if(this.hasListeners("press")){this.$().attr("tabindex",0).addClass("sapSuiteUiCommonsPointer");}return this;};
sap.suite.ui.commons.NewsContent.prototype.detachEvent=function(e,f,l){sap.ui.core.Control.prototype.detachEvent.call(this,e,f,l);if(!this.hasListeners("press")){this.$().removeAttr("tabindex").removeClass("sapSuiteUiCommonsPointer");}return this;};
sap.suite.ui.commons.NewsContent.prototype.getAltText=function(){var a="";var i=true;if(this.getContentText()){a+=this.getContentText();i=false;}if(this.getSubheader()){a+=(i?"":"\n")+this.getSubheader();}return a;};
sap.suite.ui.commons.NewsContent.prototype.getTooltip_AsString=function(){var t=this.getTooltip();var T=this.getAltText();if(typeof t==="string"||t instanceof String){T=t.split("{AltText}").join(T).split("((AltText))").join(T);return T;}return t?t:"";};
