/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.HarveyBallMicroChartItem.
jQuery.sap.declare("sap.suite.ui.commons.HarveyBallMicroChartItem");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new HarveyBallMicroChartItem.
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
 * <li>{@link #getColor color} : sap.suite.ui.commons.InfoTileValueColor (default: sap.suite.ui.commons.InfoTileValueColor.Neutral)</li>
 * <li>{@link #getFraction fraction} : float (default: 0)</li>
 * <li>{@link #getFractionLabel fractionLabel} : string</li>
 * <li>{@link #getFractionScale fractionScale} : string</li>
 * <li>{@link #getFormattedLabel formattedLabel} : boolean (default: false)</li></ul>
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
 * The configuration of the slice on the pie chart.
 * @extends sap.ui.core.Element
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.HarveyBallMicroChartItem
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Element.extend("sap.suite.ui.commons.HarveyBallMicroChartItem", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"color" : {type : "sap.suite.ui.commons.InfoTileValueColor", group : "Misc", defaultValue : sap.suite.ui.commons.InfoTileValueColor.Neutral},
		"fraction" : {type : "float", group : "Misc", defaultValue : 0},
		"fractionLabel" : {type : "string", group : "Misc", defaultValue : null},
		"fractionScale" : {type : "string", group : "Misc", defaultValue : null},
		"formattedLabel" : {type : "boolean", group : "Misc", defaultValue : false}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.HarveyBallMicroChartItem with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.HarveyBallMicroChartItem.extend
 * @function
 */


/**
 * Getter for property <code>color</code>.
 * The slice color.
 *
 * Default value is <code>Neutral</code>
 *
 * @return {sap.suite.ui.commons.InfoTileValueColor} the value of property <code>color</code>
 * @public
 * @name sap.suite.ui.commons.HarveyBallMicroChartItem#getColor
 * @function
 */

/**
 * Setter for property <code>color</code>.
 *
 * Default value is <code>Neutral</code> 
 *
 * @param {sap.suite.ui.commons.InfoTileValueColor} oColor  new value for property <code>color</code>
 * @return {sap.suite.ui.commons.HarveyBallMicroChartItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HarveyBallMicroChartItem#setColor
 * @function
 */


/**
 * Getter for property <code>fraction</code>.
 * The fraction value.
 *
 * Default value is <code>0</code>
 *
 * @return {float} the value of property <code>fraction</code>
 * @public
 * @name sap.suite.ui.commons.HarveyBallMicroChartItem#getFraction
 * @function
 */

/**
 * Setter for property <code>fraction</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {float} fFraction  new value for property <code>fraction</code>
 * @return {sap.suite.ui.commons.HarveyBallMicroChartItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HarveyBallMicroChartItem#setFraction
 * @function
 */


/**
 * Getter for property <code>fractionLabel</code>.
 * The fraction label. If specified, it is displayed instead of the fraction value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>fractionLabel</code>
 * @public
 * @name sap.suite.ui.commons.HarveyBallMicroChartItem#getFractionLabel
 * @function
 */

/**
 * Setter for property <code>fractionLabel</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFractionLabel  new value for property <code>fractionLabel</code>
 * @return {sap.suite.ui.commons.HarveyBallMicroChartItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HarveyBallMicroChartItem#setFractionLabel
 * @function
 */


/**
 * Getter for property <code>fractionScale</code>.
 * The scaling factor that is displayed after the fraction value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>fractionScale</code>
 * @public
 * @name sap.suite.ui.commons.HarveyBallMicroChartItem#getFractionScale
 * @function
 */

/**
 * Setter for property <code>fractionScale</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFractionScale  new value for property <code>fractionScale</code>
 * @return {sap.suite.ui.commons.HarveyBallMicroChartItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HarveyBallMicroChartItem#setFractionScale
 * @function
 */


/**
 * Getter for property <code>formattedLabel</code>.
 * If set to true, the fractionLabel parameter is considered as the combination of the fraction value and scaling factor. The default value is false. It means that the fraction value and the scaling factor are defined separately by the fraction and the fractionScale properties accordingly.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>formattedLabel</code>
 * @public
 * @name sap.suite.ui.commons.HarveyBallMicroChartItem#getFormattedLabel
 * @function
 */

/**
 * Setter for property <code>formattedLabel</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFormattedLabel  new value for property <code>formattedLabel</code>
 * @return {sap.suite.ui.commons.HarveyBallMicroChartItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HarveyBallMicroChartItem#setFormattedLabel
 * @function
 */

// Start of sap/suite/ui/commons/HarveyBallMicroChartItem.js
///**
// * This file defines behavior for the control,
// */
//sap.suite.ui.commons.HarveyBallMicroChartItem.prototype.init = function(){
//   // do something for initialization...
//};
