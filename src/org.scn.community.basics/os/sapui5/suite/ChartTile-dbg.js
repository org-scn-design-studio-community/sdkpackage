/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.ChartTile.
jQuery.sap.declare("sap.suite.ui.commons.ChartTile");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.suite.ui.commons.InfoTile");


/**
 * Constructor for a new ChartTile.
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
 * <li>{@link #getUnit unit} : string</li></ul>
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
 * This control is the implementation of the InfoTile to show a comparison or bullet chart.
 * @extends sap.suite.ui.commons.InfoTile
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @deprecated Since version 1.25. 
 * This control has been deprecated in favor of new sap.suite.ui.commons.GenericTile.
 * @name sap.suite.ui.commons.ChartTile
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.InfoTile.extend("sap.suite.ui.commons.ChartTile", { metadata : {

	deprecated : true,
	library : "sap.suite.ui.commons",
	properties : {
		"unit" : {type : "string", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.ChartTile with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.ChartTile.extend
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
 * @name sap.suite.ui.commons.ChartTile#getUnit
 * @function
 */

/**
 * Setter for property <code>unit</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUnit  new value for property <code>unit</code>
 * @return {sap.suite.ui.commons.ChartTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartTile#setUnit
 * @function
 */

// Start of sap/suite/ui/commons/ChartTile.js
/*!
 * @copyright@
 */


sap.suite.ui.commons.ChartTile.prototype.init = function() {
    sap.suite.ui.commons.InfoTile.prototype.init.apply(this);
 };

sap.suite.ui.commons.ChartTile.prototype.onAfterRendering = function() {
    this._addDescriptionMargin();
};

sap.suite.ui.commons.ChartTile.prototype.onBeforeRendering = function() {
    this._setContentProperty("size", this.getSize());
};

/**
 * Calculates and sets negative margin and padding of the description div element accordingly to the width of the unit of measure div element.
 *
 * @private
 */
sap.suite.ui.commons.ChartTile.prototype._addDescriptionMargin = function() {
    if (this.getDescription() && this.getUnit()) {
        var $Description = jQuery.sap.byId(this.getId() + "-description").hide();
        var iWidth = jQuery.sap.byId(this.getId() + "-unit").outerWidth() + 1;      // add 1 to eliminate rounding issue in IE
        $Description.css("margin-right", "-" + iWidth + "px").css("padding-right", iWidth + "px").show();
    }
};

sap.suite.ui.commons.ChartTile.prototype._setContentProperty = function(sProp, sValue) {
    var oCnt = this.getContent();
    if(oCnt) {
        oCnt.setProperty(sProp, sValue);
    }
};