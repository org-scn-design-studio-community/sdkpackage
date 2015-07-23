/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.FeedItemHeader");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.m.ListItemBase");sap.m.ListItemBase.extend("sap.suite.ui.commons.FeedItemHeader",{metadata:{deprecated:true,library:"sap.suite.ui.commons",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"image":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"link":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"source":{type:"string",group:"Misc",defaultValue:null},"publicationDate":{type:"object",group:"Misc",defaultValue:null},"description":{type:"string",group:"Misc",defaultValue:null}}}});
sap.suite.ui.commons.FeedItemHeader.prototype.exit=function(e){if(this._htmlControl){this._htmlControl.destroy();}sap.m.ListItemBase.prototype.exit.apply(this);};
sap.suite.ui.commons.FeedItemHeader.prototype.setImage=function(i){if(i){var v=jQuery.sap.validateUrl(i);if(v){this.setProperty("image",i);}else{jQuery.sap.log.error("Invalid Url:'"+i+"'. Property 'image' of FeedItemHeader not set");}}};
sap.suite.ui.commons.FeedItemHeader.prototype.setLink=function(l){if(l){var v=jQuery.sap.validateUrl(l);if(v){this.setProperty("link",l);}else{jQuery.sap.log.error("Invalid Url:'"+l+"'. Property 'link' of FeedItemHeader not set");}}};
sap.suite.ui.commons.FeedItemHeader.prototype.onclick=function(e){this.firePress({link:this.getLink()});e.preventDefault();};
sap.suite.ui.commons.FeedItemHeader.prototype._getHtmlControl=function(){if(!this._htmlControl){this._htmlControl=new sap.ui.core.HTML({id:this.getId()+"-feedItemHeaderDescription",sanitizeContent:true});}return this._htmlControl;};
