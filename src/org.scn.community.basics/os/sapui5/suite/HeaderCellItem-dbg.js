/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.HeaderCellItem.
jQuery.sap.declare("sap.suite.ui.commons.HeaderCellItem");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new HeaderCellItem.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li></ul>
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
 * Object that contains instance of control and infomation about height. It should be used inside sap.suite.ui.commons.HeaderCell
 * @extends sap.ui.core.Element
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.HeaderCellItem
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Element.extend("sap.suite.ui.commons.HeaderCellItem", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"height" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null}
	},
	aggregations : {
		"content" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.HeaderCellItem with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.HeaderCellItem.extend
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Height of area to occupy by control.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.suite.ui.commons.HeaderCellItem#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.HeaderCellItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderCellItem#setHeight
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Instance of UI5 Control that is used as content.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.suite.ui.commons.HeaderCellItem#getContent
 * @function
 */


/**
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent
 * @return {sap.suite.ui.commons.HeaderCellItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderCellItem#setContent
 * @function
 */
	

/**
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.HeaderCellItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderCellItem#destroyContent
 * @function
 */

// Start of sap/suite/ui/commons/HeaderCellItem.js
///**
// * This file defines behavior for the control,
// */
//sap.suite.ui.commons.HeaderCellItem.prototype.init = function(){
//   // do something for initialization...
//};
