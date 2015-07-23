/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.NumericTile.
jQuery.sap.declare("sap.suite.ui.commons.NumericTile");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.suite.ui.commons.InfoTile");


/**
 * Constructor for a new NumericTile.
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
 * <li>{@link #getScale scale} : string</li>
 * <li>{@link #getUnit unit} : string</li>
 * <li>{@link #getValueColor valueColor} : sap.suite.ui.commons.InfoTileValueColor</li>
 * <li>{@link #getIndicator indicator} : sap.suite.ui.commons.DeviationIndicator</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.suite.ui.commons.InfoTile#constructor sap.suite.ui.commons.InfoTile}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control is the implementation of the InfoTile to show a numeric value.
 * @extends sap.suite.ui.commons.InfoTile
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @deprecated Since version 1.25. 
 * This control has been deprecated in favor of new sap.suite.ui.commons.GenericTile.
 * @name sap.suite.ui.commons.NumericTile
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.InfoTile.extend("sap.suite.ui.commons.NumericTile", { metadata : {

	deprecated : true,
	library : "sap.suite.ui.commons",
	properties : {
		"value" : {type : "string", group : "Misc", defaultValue : null},
		"scale" : {type : "string", group : "Misc", defaultValue : null},
		"unit" : {type : "string", group : "Misc", defaultValue : null},
		"valueColor" : {type : "sap.suite.ui.commons.InfoTileValueColor", group : "Misc", defaultValue : null},
		"indicator" : {type : "sap.suite.ui.commons.DeviationIndicator", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.NumericTile with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.NumericTile.extend
 * @function
 */


/**
 * Getter for property <code>value</code>.
 * The actual value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>value</code>
 * @public
 * @name sap.suite.ui.commons.NumericTile#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.suite.ui.commons.NumericTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NumericTile#setValue
 * @function
 */


/**
 * Getter for property <code>scale</code>.
 * The scaling prefix. Financial characters can be used for currencies and counters. The SI prefixes can be used for units.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>scale</code>
 * @public
 * @name sap.suite.ui.commons.NumericTile#getScale
 * @function
 */

/**
 * Setter for property <code>scale</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sScale  new value for property <code>scale</code>
 * @return {sap.suite.ui.commons.NumericTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NumericTile#setScale
 * @function
 */


/**
 * Getter for property <code>unit</code>.
 * The percent sign, the currency symbol, or the unit of measure.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>unit</code>
 * @public
 * @name sap.suite.ui.commons.NumericTile#getUnit
 * @function
 */

/**
 * Setter for property <code>unit</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUnit  new value for property <code>unit</code>
 * @return {sap.suite.ui.commons.NumericTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NumericTile#setUnit
 * @function
 */


/**
 * Getter for property <code>valueColor</code>.
 * The semantic color of the value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.suite.ui.commons.InfoTileValueColor} the value of property <code>valueColor</code>
 * @public
 * @name sap.suite.ui.commons.NumericTile#getValueColor
 * @function
 */

/**
 * Setter for property <code>valueColor</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.suite.ui.commons.InfoTileValueColor} oValueColor  new value for property <code>valueColor</code>
 * @return {sap.suite.ui.commons.NumericTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NumericTile#setValueColor
 * @function
 */


/**
 * Getter for property <code>indicator</code>.
 * The indicator arrow that shows value deviation.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.suite.ui.commons.DeviationIndicator} the value of property <code>indicator</code>
 * @public
 * @name sap.suite.ui.commons.NumericTile#getIndicator
 * @function
 */

/**
 * Setter for property <code>indicator</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.suite.ui.commons.DeviationIndicator} oIndicator  new value for property <code>indicator</code>
 * @return {sap.suite.ui.commons.NumericTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NumericTile#setIndicator
 * @function
 */

// Start of sap/suite/ui/commons/NumericTile.js
///**
// * This file defines behavior for the control,
// */

sap.suite.ui.commons.NumericTile.prototype.init = function() {
	this._oTileCnt = new sap.suite.ui.commons.NumericContent( this.getId() + "-numeric-tile-cnt");
	this.setContent(this._oTileCnt);
	
	sap.suite.ui.commons.InfoTile.prototype.init.apply(this);
};

sap.suite.ui.commons.NumericTile.prototype.exit = function() {
	var oCnt = this.getContent();
	oCnt.destroy();
};

sap.suite.ui.commons.NumericTile.prototype.setScale = function(sText) {
	this._oTileCnt.setScale(sText);
	return this;
};

sap.suite.ui.commons.NumericTile.prototype.setValue = function(sText) {
	this._oTileCnt.setValue(sText);
	this.rerender();
	return this;
};

sap.suite.ui.commons.NumericTile.prototype.getScale = function() {
	return this._oTileCnt.getScale();
};

sap.suite.ui.commons.NumericTile.prototype.getValue = function() {
	return this._oTileCnt.getValue();
};

sap.suite.ui.commons.NumericTile.prototype.setSize = function(oSize) {
	this._oTileCnt.setSize(oSize);
	return this;
};

sap.suite.ui.commons.NumericTile.prototype.getSize = function() {
	return this._oTileCnt.getSize();
};

sap.suite.ui.commons.NumericTile.prototype.setValueColor = function(oValueColor) {
	this._oTileCnt.setValueColor(oValueColor);
	return this;
};

sap.suite.ui.commons.NumericTile.prototype.getValueColor = function() {
	return this._oTileCnt.getValueColor();
};

sap.suite.ui.commons.NumericTile.prototype.setIndicator = function(oIndicator) {
	this._oTileCnt.setIndicator(oIndicator);
	return this;
};

sap.suite.ui.commons.NumericTile.prototype.getIndicator = function() {
	return this._oTileCnt.getIndicator();
};

sap.suite.ui.commons.NumericTile.prototype.setState = function(oState) {
	this.setProperty("state", oState, false);
	this._oTileCnt.setState(oState);
	return this;
};

sap.suite.ui.commons.NumericTile.prototype.getState = function() {
	return this._oTileCnt.getState();
};