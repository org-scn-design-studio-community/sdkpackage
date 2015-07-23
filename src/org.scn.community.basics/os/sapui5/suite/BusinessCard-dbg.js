/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.BusinessCard.
jQuery.sap.declare("sap.suite.ui.commons.BusinessCard");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new BusinessCard.
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
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getIconPath iconPath} : sap.ui.core.URI</li>
 * <li>{@link #getSecondTitle secondTitle} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getImageTooltip imageTooltip} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
 * <li>{@link #getFirstTitle firstTitle} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control allows you to display business card information including an image, first title (either URL link or text), second title, and multiple text lines.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.BusinessCard
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.BusinessCard", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"type" : {type : "string", group : "Misc", defaultValue : null},
		"iconPath" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"secondTitle" : {type : "string", group : "Misc", defaultValue : null},
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"imageTooltip" : {type : "string", group : "Misc", defaultValue : null}
	},
	aggregations : {
		"content" : {type : "sap.ui.core.Control", multiple : false}, 
		"firstTitle" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.BusinessCard with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.BusinessCard.extend
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Title of the BusinessCard that describes its type.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>type</code>
 * @public
 * @name sap.suite.ui.commons.BusinessCard#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BusinessCard#setType
 * @function
 */


/**
 * Getter for property <code>iconPath</code>.
 * A path to the BusinessCard icon.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconPath</code>
 * @public
 * @name sap.suite.ui.commons.BusinessCard#getIconPath
 * @function
 */

/**
 * Setter for property <code>iconPath</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconPath  new value for property <code>iconPath</code>
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BusinessCard#setIconPath
 * @function
 */


/**
 * Getter for property <code>secondTitle</code>.
 * A short text line that describes this BusinessCard.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>secondTitle</code>
 * @public
 * @name sap.suite.ui.commons.BusinessCard#getSecondTitle
 * @function
 */

/**
 * Setter for property <code>secondTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSecondTitle  new value for property <code>secondTitle</code>
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BusinessCard#setSecondTitle
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Width of the BusinessCard. Alternatively, CSS size can be set in %, px, or em.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.suite.ui.commons.BusinessCard#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BusinessCard#setWidth
 * @function
 */


/**
 * Getter for property <code>imageTooltip</code>.
 * A tooltip that is set for an image.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>imageTooltip</code>
 * @public
 * @name sap.suite.ui.commons.BusinessCard#getImageTooltip
 * @function
 */

/**
 * Setter for property <code>imageTooltip</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sImageTooltip  new value for property <code>imageTooltip</code>
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BusinessCard#setImageTooltip
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content of the BusinessCard body must be provided by the application developer.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.suite.ui.commons.BusinessCard#getContent
 * @function
 */


/**
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BusinessCard#setContent
 * @function
 */
	

/**
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BusinessCard#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>firstTitle</code>.<br/>
 * Any control that can display a title. Content of this control appears at the first position in BusinessCard. Recomended controls: sap.ui.commons.Label and sap.ui.commons.Link.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.suite.ui.commons.BusinessCard#getFirstTitle
 * @function
 */


/**
 * Setter for the aggregated <code>firstTitle</code>.
 * @param {sap.ui.core.Control} oFirstTitle
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BusinessCard#setFirstTitle
 * @function
 */
	

/**
 * Destroys the firstTitle in the aggregation 
 * named <code>firstTitle</code>.
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BusinessCard#destroyFirstTitle
 * @function
 */

// Start of sap/suite/ui/commons/BusinessCard.js
///**
// * This file defines behavior for the control,
// */
//sap.suite.ui.commons.BusinessCard.prototype.init = function(){
//};