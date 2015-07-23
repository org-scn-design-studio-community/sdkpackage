/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.MonitoringTile.
jQuery.sap.declare("sap.suite.ui.commons.MonitoringTile");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.suite.ui.commons.InfoTile");


/**
 * Constructor for a new MonitoringTile.
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
 * <li>{@link #getIconSrc iconSrc} : string</li>
 * <li>{@link #getFooterColor footerColor} : sap.suite.ui.commons.InfoTileTextColor (default: sap.suite.ui.commons.InfoTileTextColor.Positive)</li></ul>
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
 * This control is the implementation of the InfoTile to show a numeric value and an icon.
 * @extends sap.suite.ui.commons.InfoTile
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @deprecated Since version 1.25. 
 * This control has been deprecated in favor of new sap.suite.ui.commons.GenericTile.
 * @name sap.suite.ui.commons.MonitoringTile
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.InfoTile.extend("sap.suite.ui.commons.MonitoringTile", { metadata : {

	deprecated : true,
	library : "sap.suite.ui.commons",
	properties : {
		"value" : {type : "string", group : "Misc", defaultValue : null},
		"iconSrc" : {type : "string", group : "Misc", defaultValue : null},
		"footerColor" : {type : "sap.suite.ui.commons.InfoTileTextColor", group : "Misc", defaultValue : sap.suite.ui.commons.InfoTileTextColor.Positive}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.MonitoringTile with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.MonitoringTile.extend
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
 * @name sap.suite.ui.commons.MonitoringTile#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.suite.ui.commons.MonitoringTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MonitoringTile#setValue
 * @function
 */


/**
 * Getter for property <code>iconSrc</code>.
 * This property is set by the return value of sap.ui.core.IconPool.getIconURI that is called with an icon name parameter and optional collection parameter. The collection parameter is required when the application extended icons are used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>iconSrc</code>
 * @public
 * @name sap.suite.ui.commons.MonitoringTile#getIconSrc
 * @function
 */

/**
 * Setter for property <code>iconSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIconSrc  new value for property <code>iconSrc</code>
 * @return {sap.suite.ui.commons.MonitoringTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MonitoringTile#setIconSrc
 * @function
 */


/**
 * Getter for property <code>footerColor</code>.
 * The color of the tile footer text.
 *
 * Default value is <code>Positive</code>
 *
 * @return {sap.suite.ui.commons.InfoTileTextColor} the value of property <code>footerColor</code>
 * @public
 * @name sap.suite.ui.commons.MonitoringTile#getFooterColor
 * @function
 */

/**
 * Setter for property <code>footerColor</code>.
 *
 * Default value is <code>Positive</code> 
 *
 * @param {sap.suite.ui.commons.InfoTileTextColor} oFooterColor  new value for property <code>footerColor</code>
 * @return {sap.suite.ui.commons.MonitoringTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MonitoringTile#setFooterColor
 * @function
 */

// Start of sap/suite/ui/commons/MonitoringTile.js
///**
// * This file defines behavior for the control,
// */

sap.suite.ui.commons.MonitoringTile.prototype.init = function() {
	this._oTileCnt = new sap.suite.ui.commons.MonitoringContent(this.getId() + "-monitoring-tile-cnt");
	this.setContent(this._oTileCnt);
	
    sap.suite.ui.commons.InfoTile.prototype.init.apply(this);
};

sap.suite.ui.commons.MonitoringTile.prototype.setScale = function(sText) {
	this._oTileCnt.setScale(sText);
	return this;
};

sap.suite.ui.commons.MonitoringTile.prototype.getScale = function() {
	return this._oTileCnt.getScale();
};

sap.suite.ui.commons.MonitoringTile.prototype.setValue = function(sText) {
	this._oTileCnt.setValue(sText);
	return this;
};

sap.suite.ui.commons.MonitoringTile.prototype.getValue = function() {
	return this._oTileCnt.getValue();
};

sap.suite.ui.commons.MonitoringTile.prototype.setSize = function(oSize) {
	this._oTileCnt.setSize(oSize);
	return this;
};

sap.suite.ui.commons.MonitoringTile.prototype.getSize = function() {
	return this._oTileCnt.getSize();
};

sap.suite.ui.commons.MonitoringTile.prototype.setState = function(oState) {
	this._oTileCnt.setProperty("state", oState, true);
	this.setProperty("state", oState);
	
	return this;
};

sap.suite.ui.commons.MonitoringTile.prototype.getState = function() {
	return this._oTileCnt.getState();
};

sap.suite.ui.commons.MonitoringTile.prototype.setIconSrc = function(sIconSrc) {
	this._oTileCnt.setIconSrc(sIconSrc);
    return this;
};

sap.suite.ui.commons.MonitoringTile.prototype.getIconSrc = function() {
    return this._oTileCnt.getIconSrc();
};