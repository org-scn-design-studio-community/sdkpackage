/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.KpiTile.
jQuery.sap.declare("sap.suite.ui.commons.KpiTile");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new KpiTile.
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
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getDoubleFontSize doubleFontSize} : boolean (default: true)</li>
 * <li>{@link #getValueUnit valueUnit} : string</li>
 * <li>{@link #getValueScale valueScale} : string</li>
 * <li>{@link #getValueStatus valueStatus} : sap.suite.ui.commons.ValueStatus (default: sap.suite.ui.commons.ValueStatus.Neutral)</li></ul>
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
 * This control is used in UnifiedThingInspector to display object-related KPIs in a factsheet.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.KpiTile
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.KpiTile", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"value" : {type : "string", group : "Misc", defaultValue : null},
		"description" : {type : "string", group : "Misc", defaultValue : null},
		"doubleFontSize" : {type : "boolean", group : "Misc", defaultValue : true},
		"valueUnit" : {type : "string", group : "Misc", defaultValue : null},
		"valueScale" : {type : "string", group : "Misc", defaultValue : null},
		"valueStatus" : {type : "sap.suite.ui.commons.ValueStatus", group : "Misc", defaultValue : sap.suite.ui.commons.ValueStatus.Neutral}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.KpiTile with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.KpiTile.extend
 * @function
 */


/**
 * Getter for property <code>value</code>.
 * The Value field.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>value</code>
 * @public
 * @name sap.suite.ui.commons.KpiTile#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.suite.ui.commons.KpiTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.KpiTile#setValue
 * @function
 */


/**
 * Getter for property <code>description</code>.
 * The Description field.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>description</code>
 * @public
 * @name sap.suite.ui.commons.KpiTile#getDescription
 * @function
 */

/**
 * Setter for property <code>description</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.suite.ui.commons.KpiTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.KpiTile#setDescription
 * @function
 */


/**
 * Getter for property <code>doubleFontSize</code>.
 * If true, the value text will have 2 rem, if false - 1 rem.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>doubleFontSize</code>
 * @public
 * @name sap.suite.ui.commons.KpiTile#getDoubleFontSize
 * @function
 */

/**
 * Setter for property <code>doubleFontSize</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bDoubleFontSize  new value for property <code>doubleFontSize</code>
 * @return {sap.suite.ui.commons.KpiTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.KpiTile#setDoubleFontSize
 * @function
 */


/**
 * Getter for property <code>valueUnit</code>.
 * The percent sign, currency symbol, or unit for a value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>valueUnit</code>
 * @public
 * @name sap.suite.ui.commons.KpiTile#getValueUnit
 * @function
 */

/**
 * Setter for property <code>valueUnit</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sValueUnit  new value for property <code>valueUnit</code>
 * @return {sap.suite.ui.commons.KpiTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.KpiTile#setValueUnit
 * @function
 */


/**
 * Getter for property <code>valueScale</code>.
 * The scale of a value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>valueScale</code>
 * @public
 * @name sap.suite.ui.commons.KpiTile#getValueScale
 * @function
 */

/**
 * Setter for property <code>valueScale</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sValueScale  new value for property <code>valueScale</code>
 * @return {sap.suite.ui.commons.KpiTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.KpiTile#setValueScale
 * @function
 */


/**
 * Getter for property <code>valueStatus</code>.
 * The status color of the value. Depending on the status the tile is displayed in different colors.
 *
 * Default value is <code>Neutral</code>
 *
 * @return {sap.suite.ui.commons.ValueStatus} the value of property <code>valueStatus</code>
 * @public
 * @name sap.suite.ui.commons.KpiTile#getValueStatus
 * @function
 */

/**
 * Setter for property <code>valueStatus</code>.
 *
 * Default value is <code>Neutral</code> 
 *
 * @param {sap.suite.ui.commons.ValueStatus} oValueStatus  new value for property <code>valueStatus</code>
 * @return {sap.suite.ui.commons.KpiTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.KpiTile#setValueStatus
 * @function
 */

// Start of sap/suite/ui/commons/KpiTile.js
///**
// * This file defines behavior for the control,
// */
//sap.suite.ui.commons.KpiTile.prototype.init = function(){
//   // do something for initialization...
//};
