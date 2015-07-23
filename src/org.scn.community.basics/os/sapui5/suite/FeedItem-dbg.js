/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.FeedItem.
jQuery.sap.declare("sap.suite.ui.commons.FeedItem");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new FeedItem.
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
 * <li>{@link #getPublicationDate publicationDate} : object</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This element represents a news feed item.
 * @extends sap.ui.core.Element
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.FeedItem
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Element.extend("sap.suite.ui.commons.FeedItem", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"image" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"link" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"source" : {type : "string", group : "Misc", defaultValue : null},
		"publicationDate" : {type : "object", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.FeedItem with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.FeedItem.extend
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
 * @name sap.suite.ui.commons.FeedItem#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.FeedItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedItem#setTitle
 * @function
 */


/**
 * Getter for property <code>image</code>.
 * The background image for the feed item.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>image</code>
 * @public
 * @name sap.suite.ui.commons.FeedItem#getImage
 * @function
 */

/**
 * Setter for property <code>image</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sImage  new value for property <code>image</code>
 * @return {sap.suite.ui.commons.FeedItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedItem#setImage
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
 * @name sap.suite.ui.commons.FeedItem#getLink
 * @function
 */

/**
 * Setter for property <code>link</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sLink  new value for property <code>link</code>
 * @return {sap.suite.ui.commons.FeedItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedItem#setLink
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
 * @name sap.suite.ui.commons.FeedItem#getSource
 * @function
 */

/**
 * Setter for property <code>source</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSource  new value for property <code>source</code>
 * @return {sap.suite.ui.commons.FeedItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedItem#setSource
 * @function
 */


/**
 * Getter for property <code>publicationDate</code>.
 * The date the feed was published.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>publicationDate</code>
 * @public
 * @name sap.suite.ui.commons.FeedItem#getPublicationDate
 * @function
 */

/**
 * Setter for property <code>publicationDate</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oPublicationDate  new value for property <code>publicationDate</code>
 * @return {sap.suite.ui.commons.FeedItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedItem#setPublicationDate
 * @function
 */

// Start of sap/suite/ui/commons/FeedItem.js
/**
 * validate the url first and then set the image property
 * 
 * @param oImage
 *                {object}
 * @public
 */
sap.suite.ui.commons.FeedItem.prototype.setImage = function(oImage) {

    if (oImage) {
        var validUrl = jQuery.sap.validateUrl(oImage);
        if (validUrl) {
            this.setProperty("image", oImage);
        } else {
            jQuery.sap.log.error("Invalid Url:'" + oImage
                    + "'. Property 'image' of FeedItem not set");
        }
    }
};

/**
 * validate the url first and then set the link property
 * 
 * @param sLink
 *                {string}
 * @public
 */
sap.suite.ui.commons.FeedItem.prototype.setLink = function(sLink) {

    if (sLink) {
        var validUrl = jQuery.sap.validateUrl(sLink);
        if (validUrl) {
            this.setProperty("link", sLink);
        } else {
            jQuery.sap.log.error("Invalid Url:'" + sLink
                    + "'. Property 'link' of FeedItem not set");
        }
    }
};