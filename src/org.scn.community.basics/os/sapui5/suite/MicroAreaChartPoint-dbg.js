/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.MicroAreaChartPoint.
jQuery.sap.declare("sap.suite.ui.commons.MicroAreaChartPoint");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new MicroAreaChartPoint.
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
 * <li>{@link #getX x} : float</li>
 * <li>{@link #getY y} : float</li></ul>
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
 * This control contains data for the point.
 * @extends sap.ui.core.Element
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartPoint
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Element.extend("sap.suite.ui.commons.MicroAreaChartPoint", { metadata : {

	publicMethods : [
		// methods
		"getXValue", "getYValue"
	],
	library : "sap.suite.ui.commons",
	properties : {
		"x" : {type : "float", group : "Misc", defaultValue : null},
		"y" : {type : "float", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.MicroAreaChartPoint with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.MicroAreaChartPoint.extend
 * @function
 */


/**
 * Getter for property <code>x</code>.
 * X value for the given point.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>x</code>
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartPoint#getX
 * @function
 */

/**
 * Setter for property <code>x</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fX  new value for property <code>x</code>
 * @return {sap.suite.ui.commons.MicroAreaChartPoint} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartPoint#setX
 * @function
 */


/**
 * Getter for property <code>y</code>.
 * Y value for the given point.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>y</code>
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartPoint#getY
 * @function
 */

/**
 * Setter for property <code>y</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fY  new value for property <code>y</code>
 * @return {sap.suite.ui.commons.MicroAreaChartPoint} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartPoint#setY
 * @function
 */


/**
 * Returns x value including undefined if the x property was not set or an invalid number was set.
 *
 * @name sap.suite.ui.commons.MicroAreaChartPoint#getXValue
 * @function
 * @type float
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Returns y value including undefined if the y property was not set or an invalid number was set.
 *
 * @name sap.suite.ui.commons.MicroAreaChartPoint#getYValue
 * @function
 * @type float
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */

// Start of sap/suite/ui/commons/MicroAreaChartPoint.js
///**
// * This file defines behavior for the control,
// */
sap.suite.ui.commons.MicroAreaChartPoint.prototype.setX = function(value, bSuppressInvalidate) {
	this._isXValue = this._isNumber(value);
	
	return this.setProperty("x", this._isXValue ? value : NaN, bSuppressInvalidate);
};

sap.suite.ui.commons.MicroAreaChartPoint.prototype.setY = function(value, bSuppressInvalidate) {
	this._isYValue = this._isNumber(value);
	
	return this.setProperty("y", this._isYValue ? value : NaN, bSuppressInvalidate);
};

sap.suite.ui.commons.MicroAreaChartPoint.prototype.getXValue = function() {
	return this._isXValue ? this.getX() : undefined;
};

sap.suite.ui.commons.MicroAreaChartPoint.prototype.getYValue = function() {
	return this._isYValue ? this.getY() : undefined;
};

sap.suite.ui.commons.MicroAreaChartPoint.prototype._isNumber = function(n) {
    return typeof n == 'number' && !isNaN(n) && isFinite(n);
};

sap.suite.ui.commons.MicroAreaChartPoint.prototype.clone = function(sIdSuffix, aLocalIds, oOptions) {
	var oClone = sap.ui.core.Control.prototype.clone.apply(this, arguments);
	oClone._isXValue = this._isXValue;
	oClone._isYValue = this._isYValue;
	return oClone;
};
