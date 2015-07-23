/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.FeedItemHeader.
jQuery.sap.declare("sap.suite.ui.commons.FeedItemHeader");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.m.ListItemBase");


/**
 * Constructor for a new FeedItemHeader.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getImage image} : sap.ui.core.URI</li>
 * <li>{@link #getLink link} : sap.ui.core.URI</li>
 * <li>{@link #getSource source} : string</li>
 * <li>{@link #getPublicationDate publicationDate} : object</li>
 * <li>{@link #getDescription description} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control displays feed item header information.
 * @extends sap.m.ListItemBase
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @deprecated Since version 1.25. 
 * This control has been deprecated in favor of new sap.suite.ui.commons.GenericTile.
 * @name sap.suite.ui.commons.FeedItemHeader
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.m.ListItemBase.extend("sap.suite.ui.commons.FeedItemHeader", { metadata : {

	deprecated : true,
	library : "sap.suite.ui.commons",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"image" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"link" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"source" : {type : "string", group : "Misc", defaultValue : null},
		"publicationDate" : {type : "object", group : "Misc", defaultValue : null},
		"description" : {type : "string", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.FeedItemHeader with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.suite.ui.commons.FeedItemHeader.extend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * The title of the feed item.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.suite.ui.commons.FeedItemHeader#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.FeedItemHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedItemHeader#setTitle
 * @function
 */


/**
 * Getter for property <code>image</code>.
 * The image associated with the feed item.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>image</code>
 * @public
 * @name sap.suite.ui.commons.FeedItemHeader#getImage
 * @function
 */

/**
 * Setter for property <code>image</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sImage  new value for property <code>image</code>
 * @return {sap.suite.ui.commons.FeedItemHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedItemHeader#setImage
 * @function
 */


/**
 * Getter for property <code>link</code>.
 * The target location of the feed item.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>link</code>
 * @public
 * @name sap.suite.ui.commons.FeedItemHeader#getLink
 * @function
 */

/**
 * Setter for property <code>link</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sLink  new value for property <code>link</code>
 * @return {sap.suite.ui.commons.FeedItemHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedItemHeader#setLink
 * @function
 */


/**
 * Getter for property <code>source</code>.
 * The source of the feed item.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>source</code>
 * @public
 * @name sap.suite.ui.commons.FeedItemHeader#getSource
 * @function
 */

/**
 * Setter for property <code>source</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSource  new value for property <code>source</code>
 * @return {sap.suite.ui.commons.FeedItemHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedItemHeader#setSource
 * @function
 */


/**
 * Getter for property <code>publicationDate</code>.
 * The date the feed item was published.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>publicationDate</code>
 * @public
 * @name sap.suite.ui.commons.FeedItemHeader#getPublicationDate
 * @function
 */

/**
 * Setter for property <code>publicationDate</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oPublicationDate  new value for property <code>publicationDate</code>
 * @return {sap.suite.ui.commons.FeedItemHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedItemHeader#setPublicationDate
 * @function
 */


/**
 * Getter for property <code>description</code>.
 * The description of the feed item.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>description</code>
 * @public
 * @name sap.suite.ui.commons.FeedItemHeader#getDescription
 * @function
 */

/**
 * Setter for property <code>description</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.suite.ui.commons.FeedItemHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedItemHeader#setDescription
 * @function
 */

// Start of sap/suite/ui/commons/FeedItemHeader.js
///**
// * This file defines behavior for the control,
// */
//sap.suite.ui.commons.FeedItemHeader.prototype.init = function(){
//   // do something for initialization...
//};


sap.suite.ui.commons.FeedItemHeader.prototype.exit = function(oEvent) {

	if (this._htmlControl) {
		this._htmlControl.destroy();
	}
	
	sap.m.ListItemBase.prototype.exit.apply(this);
};

/**
 * Sets the specified image URI if it is valid, otherwise an error messsage is logged.
 * 
 * @param sImageUri {String}
 * @public
 */
sap.suite.ui.commons.FeedItemHeader.prototype.setImage = function(sImageUri) {

    if (sImageUri) {
        var validUrl = jQuery.sap.validateUrl(sImageUri);
        if (validUrl) {
            this.setProperty("image", sImageUri);
        } else {
            jQuery.sap.log.error("Invalid Url:'" + sImageUri
                    + "'. Property 'image' of FeedItemHeader not set");
        }
    }
};

/**
 * Sets the specified link URL if it is valid, otherwise an error messsage is logged.
 * 
 * @param sLinkUri {String}
 * @public
 */
sap.suite.ui.commons.FeedItemHeader.prototype.setLink = function(sLinkUri) {

    if (sLinkUri) {
        var validUrl = jQuery.sap.validateUrl(sLinkUri);
        if (validUrl) {
            this.setProperty("link", sLinkUri);
        } else {
            jQuery.sap.log.error("Invalid Url:'" + sLinkUri
                    + "'. Property 'link' of FeedItemHeader not set");
        }
    }
};

/**
 * Fire press event.
 * 
 * @private
 */
sap.suite.ui.commons.FeedItemHeader.prototype.onclick = function(oEvent) {

    this.firePress({
        link : this.getLink()
    });

    // Prevent the browser from acting on events triggered by clicking on html markup inside of the description (like anchors)
    oEvent.preventDefault();
};	

/**
 * Get the HTML control used to render description content that may contain HTML markup.
 * @private
 * @returns HTML control
 */
sap.suite.ui.commons.FeedItemHeader.prototype._getHtmlControl = function() {
	if(!this._htmlControl) {
		this._htmlControl = new sap.ui.core.HTML({
			id: this.getId() + "-feedItemHeaderDescription",
			sanitizeContent: true
		});		
	}
	return this._htmlControl;
};	

