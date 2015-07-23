/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.FeedItem");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.suite.ui.commons.FeedItem",{metadata:{library:"sap.suite.ui.commons",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"image":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"link":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"source":{type:"string",group:"Misc",defaultValue:null},"publicationDate":{type:"object",group:"Misc",defaultValue:null}}}});
sap.suite.ui.commons.FeedItem.prototype.setImage=function(i){if(i){var v=jQuery.sap.validateUrl(i);if(v){this.setProperty("image",i);}else{jQuery.sap.log.error("Invalid Url:'"+i+"'. Property 'image' of FeedItem not set");}}};
sap.suite.ui.commons.FeedItem.prototype.setLink=function(l){if(l){var v=jQuery.sap.validateUrl(l);if(v){this.setProperty("link",l);}else{jQuery.sap.log.error("Invalid Url:'"+l+"'. Property 'link' of FeedItem not set");}}};
