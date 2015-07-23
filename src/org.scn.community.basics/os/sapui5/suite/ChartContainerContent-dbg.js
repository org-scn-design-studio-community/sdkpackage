/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.ChartContainerContent.
jQuery.sap.declare("sap.suite.ui.commons.ChartContainerContent");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ChartContainerContent.
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
 * <li>{@link #getIcon icon} : string</li>
 * <li>{@link #getTitle title} : string</li></ul>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Content Aggregation for ChartContainer.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.ChartContainerContent
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.ChartContainerContent", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"icon" : {type : "string", group : "Misc", defaultValue : null},
		"title" : {type : "string", group : "Misc", defaultValue : null}
	},
	aggregations : {
		"content" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.ChartContainerContent with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.ChartContainerContent.extend
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Icon of the Chart.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainerContent#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.suite.ui.commons.ChartContainerContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainerContent#setIcon
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Title of the Chart/Table
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainerContent#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.ChartContainerContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainerContent#setTitle
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Chart or Table as content of the ChartTollBar. Supported Types:
 * - vizFrame
 * - sap.m.Table
 * - sap.ui.table.Table
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.suite.ui.commons.ChartContainerContent#getContent
 * @function
 */


/**
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent
 * @return {sap.suite.ui.commons.ChartContainerContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainerContent#setContent
 * @function
 */
	

/**
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.ChartContainerContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainerContent#destroyContent
 * @function
 */

// Start of sap/suite/ui/commons/ChartContainerContent.js
///**
// * This file defines behavior for the control,
// */
sap.suite.ui.commons.ChartContainerContent.prototype.init = function(){
   this._oldWidth = 0;
   this._oldHeight = 0;
   // have a method which makes the size of contents to 100% or back to this.. 
};



