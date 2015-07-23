/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.TileContent2X2.
jQuery.sap.declare("sap.suite.ui.commons.TileContent2X2");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new TileContent2X2.
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
 * <li>{@link #getFooter footer} : string</li>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: "Auto")</li>
 * <li>{@link #getUnit unit} : string</li>
 * <li>{@link #getDisabled disabled} : boolean (default: false)</li></ul>
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
 * This control serves a universal container for different types of content and footer.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @experimental Since version 1.24. 
 * API is not yet finished and might change completely
 * @name sap.suite.ui.commons.TileContent2X2
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.TileContent2X2", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"footer" : {type : "string", group : "Appearance", defaultValue : null},
		"size" : {type : "sap.suite.ui.commons.InfoTileSize", group : "Misc", defaultValue : "Auto"},
		"unit" : {type : "string", group : "Misc", defaultValue : null},
		"disabled" : {type : "boolean", group : "Misc", defaultValue : false}
	},
	aggregations : {
		"content" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.TileContent2X2 with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.TileContent2X2.extend
 * @function
 */


/**
 * Getter for property <code>footer</code>.
 * The footer text of the tile.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>footer</code>
 * @public
 * @name sap.suite.ui.commons.TileContent2X2#getFooter
 * @function
 */

/**
 * Setter for property <code>footer</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFooter  new value for property <code>footer</code>
 * @return {sap.suite.ui.commons.TileContent2X2} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TileContent2X2#setFooter
 * @function
 */


/**
 * Getter for property <code>size</code>.
 * Updates the size of the tile. If not set then the default size is applied based on the device tile.
 *
 * Default value is <code>"Auto"</code>
 *
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * @name sap.suite.ui.commons.TileContent2X2#getSize
 * @function
 */

/**
 * Setter for property <code>size</code>.
 *
 * Default value is <code>"Auto"</code> 
 *
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.TileContent2X2} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TileContent2X2#setSize
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
 * @name sap.suite.ui.commons.TileContent2X2#getUnit
 * @function
 */

/**
 * Setter for property <code>unit</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUnit  new value for property <code>unit</code>
 * @return {sap.suite.ui.commons.TileContent2X2} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TileContent2X2#setUnit
 * @function
 */


/**
 * Getter for property <code>disabled</code>.
 * Disables control if true.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>disabled</code>
 * @public
 * @name sap.suite.ui.commons.TileContent2X2#getDisabled
 * @function
 */

/**
 * Setter for property <code>disabled</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDisabled  new value for property <code>disabled</code>
 * @return {sap.suite.ui.commons.TileContent2X2} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TileContent2X2#setDisabled
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The switchable view that depends on the tile type.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.suite.ui.commons.TileContent2X2#getContent
 * @function
 */


/**
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent
 * @return {sap.suite.ui.commons.TileContent2X2} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TileContent2X2#setContent
 * @function
 */
	

/**
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.TileContent2X2} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TileContent2X2#destroyContent
 * @function
 */

// Start of sap/suite/ui/commons/TileContent2X2.js
///**
// * This file defines behavior for the control,
// */
sap.suite.ui.commons.TileContent2X2.prototype.init = function() {
	this._oDelegate = {
		onAfterRendering: function(oEvent) {
			oEvent.srcControl.$().removeAttr("tabindex");
		}
	};
};

sap.suite.ui.commons.TileContent2X2.prototype._getContentType = function() {
	if (this.getContent()) {
		var sContentType = this.getContent().getMetadata().getName();
		if (sContentType == "sap.suite.ui.commons.NewsContent") {
			return "News";
		}
	}
};

sap.suite.ui.commons.TileContent2X2.prototype.onAfterRendering = function() {
	var oContent = this.getContent();
	var thisRef = jQuery(this.getDomRef());
	if(!thisRef.attr("title")) {
		var sCntTooltip = oContent.getTooltip_AsString();
		var aTooltipEments = thisRef.find("*");
		aTooltipEments.removeAttr("title");
		var oCntTooltip = sCntTooltip ? sCntTooltip : "";
		thisRef.attr("title", oCntTooltip + "\n" + this._getFooterText());
	}
	
};

sap.suite.ui.commons.TileContent2X2.prototype._getFooterText = function() {
    var sFooter = this.getFooter();
    var sUnit = this.getUnit();
    return sUnit 
         ? (sap.ui.getCore().getConfiguration().getRTL() 
                ? ((sFooter ? sFooter + " ," : "") + sUnit) 
                : (sUnit + (sFooter ? ", " + sFooter : ""))) 
         : sFooter;                     
};

sap.suite.ui.commons.TileContent2X2.prototype.onBeforeRendering = function() {
	if (this.getContent()) {
		if (this.getDisabled()) {
			this.getContent().addDelegate(this._oDelegate);
		} else {
			this.getContent().removeDelegate(this._oDelegate);
		}
	}
};

sap.suite.ui.commons.TileContent2X2.prototype.setContent = function(oObject, bSuppressInvalidate) {
	if (this.getContent()) {
		this.getContent().removeDelegate(this._oDelegate);
	}
	
	this.setAggregation("content", oObject, bSuppressInvalidate);
};

sap.suite.ui.commons.TileContent2X2.prototype.getAltText = function() {
	var sAltText = "";
	var oContent = this.getContent();
	
	if (oContent.getAltText) {
		sAltText += oContent.getAltText();
	} else if (oContent.getTooltip_AsString()){
		sAltText += oContent.getTooltip_AsString();
	}
	
	return sAltText;
};
