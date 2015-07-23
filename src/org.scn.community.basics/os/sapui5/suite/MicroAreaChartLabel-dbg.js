/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.MicroAreaChartLabel.
jQuery.sap.declare("sap.suite.ui.commons.MicroAreaChartLabel");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new MicroAreaChartLabel.
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
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getColor color} : sap.suite.ui.commons.InfoTileValueColor (default: "Neutral")</li></ul>
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
 * This element contains data for a label in MicroAreaChart control.
 * @extends sap.ui.core.Element
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartLabel
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Element.extend("sap.suite.ui.commons.MicroAreaChartLabel", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"label" : {type : "string", group : "Misc", defaultValue : null},
		"color" : {type : "sap.suite.ui.commons.InfoTileValueColor", group : "Misc", defaultValue : "Neutral"}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.MicroAreaChartLabel with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.MicroAreaChartLabel.extend
 * @function
 */


/**
 * Getter for property <code>label</code>.
 * The text of the label.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>label</code>
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartLabel#getLabel
 * @function
 */

/**
 * Setter for property <code>label</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLabel  new value for property <code>label</code>
 * @return {sap.suite.ui.commons.MicroAreaChartLabel} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartLabel#setLabel
 * @function
 */


/**
 * Getter for property <code>color</code>.
 * The color of the label.
 *
 * Default value is <code>"Neutral"</code>
 *
 * @return {sap.suite.ui.commons.InfoTileValueColor} the value of property <code>color</code>
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartLabel#getColor
 * @function
 */

/**
 * Setter for property <code>color</code>.
 *
 * Default value is <code>"Neutral"</code> 
 *
 * @param {sap.suite.ui.commons.InfoTileValueColor} oColor  new value for property <code>color</code>
 * @return {sap.suite.ui.commons.MicroAreaChartLabel} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartLabel#setColor
 * @function
 */

// Start of sap/suite/ui/commons/MicroAreaChartLabel.js
///**
// * This file defines behavior for the control,
// */
//sap.suite.ui.commons.MicroAreaChartLabel.prototype.init = function(){
//   // do something for initialization...
//};
