/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.CountingNavigationItem.
jQuery.sap.declare("sap.suite.ui.commons.CountingNavigationItem");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.ux3.NavigationItem");


/**
 * Constructor for a new CountingNavigationItem.
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
 * <li>{@link #getQuantity quantity} : string</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.NavigationItem#constructor sap.ui.ux3.NavigationItem}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control extends the sap.ui.ux3.NavigationItem control. This control can display the quantity of items on a corresponding content area. It also provides a rich tooltip that can appear and disappear after a certain delay.
 * @extends sap.ui.ux3.NavigationItem
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.CountingNavigationItem
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.ux3.NavigationItem.extend("sap.suite.ui.commons.CountingNavigationItem", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"quantity" : {type : "string", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.CountingNavigationItem with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.CountingNavigationItem.extend
 * @function
 */


/**
 * Getter for property <code>quantity</code>.
 * Stores the number of content items associated with this navigation item. This number appears in brackets next to the navigation item name. For example, Employes (10000).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>quantity</code>
 * @public
 * @name sap.suite.ui.commons.CountingNavigationItem#getQuantity
 * @function
 */

/**
 * Setter for property <code>quantity</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sQuantity  new value for property <code>quantity</code>
 * @return {sap.suite.ui.commons.CountingNavigationItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.CountingNavigationItem#setQuantity
 * @function
 */

// Start of sap/suite/ui/commons/CountingNavigationItem.js
///**
// * This file defines behavior for the control,
// */
//sap.suite.ui.commons.CountingNavigationItem.prototype.init = function(){
//   // do something for initialization...
//};
