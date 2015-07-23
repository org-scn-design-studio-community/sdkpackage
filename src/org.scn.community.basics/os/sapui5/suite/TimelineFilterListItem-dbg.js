/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.TimelineFilterListItem.
jQuery.sap.declare("sap.suite.ui.commons.TimelineFilterListItem");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new TimelineFilterListItem.
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
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getText text} : string</li></ul>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Provides Filter List Item for Timeline Control
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.TimelineFilterListItem
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.TimelineFilterListItem", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"key" : {type : "string", group : "Data", defaultValue : null},
		"text" : {type : "string", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.TimelineFilterListItem with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.TimelineFilterListItem.extend
 * @function
 */


/**
 * Getter for property <code>key</code>.
 * Can be used as input for subsequent actions.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>key</code>
 * @public
 * @name sap.suite.ui.commons.TimelineFilterListItem#getKey
 * @function
 */

/**
 * Setter for property <code>key</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.suite.ui.commons.TimelineFilterListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineFilterListItem#setKey
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * The text to be displayed for the item.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.suite.ui.commons.TimelineFilterListItem#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.suite.ui.commons.TimelineFilterListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineFilterListItem#setText
 * @function
 */

// Start of sap/suite/ui/commons/TimelineFilterListItem.js
///**
// * This file defines behavior for the control,
// */
//sap.suite.ui.commons.TimelineFilterListItem.prototype.init = function(){
//   // do something for initialization...
//};
