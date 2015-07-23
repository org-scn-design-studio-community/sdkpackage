/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.NewsContent.
jQuery.sap.declare("sap.suite.ui.commons.NewsContent");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new NewsContent.
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
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: sap.suite.ui.commons.InfoTileSize.Auto)</li>
 * <li>{@link #getContentText contentText} : string</li>
 * <li>{@link #getSubheader subheader} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.NewsContent#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control displays the news content text and subheader in a tile.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.NewsContent
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.NewsContent", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"size" : {type : "sap.suite.ui.commons.InfoTileSize", group : "Misc", defaultValue : sap.suite.ui.commons.InfoTileSize.Auto},
		"contentText" : {type : "string", group : "Misc", defaultValue : null},
		"subheader" : {type : "string", group : "Misc", defaultValue : null}
	},
	aggregations : {
		"contentTextAgr" : {type : "sap.m.Text", multiple : false, visibility : "hidden"}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.NewsContent with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.NewsContent.extend
 * @function
 */

sap.suite.ui.commons.NewsContent.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>size</code>.
 * Updates the size of the chart. If not set then the default size is applied based on the device tile.
 *
 * Default value is <code>Auto</code>
 *
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * @name sap.suite.ui.commons.NewsContent#getSize
 * @function
 */

/**
 * Setter for property <code>size</code>.
 *
 * Default value is <code>Auto</code> 
 *
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.NewsContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NewsContent#setSize
 * @function
 */


/**
 * Getter for property <code>contentText</code>.
 * The content text.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>contentText</code>
 * @public
 * @name sap.suite.ui.commons.NewsContent#getContentText
 * @function
 */

/**
 * Setter for property <code>contentText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sContentText  new value for property <code>contentText</code>
 * @return {sap.suite.ui.commons.NewsContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NewsContent#setContentText
 * @function
 */


/**
 * Getter for property <code>subheader</code>.
 * The subheader.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>subheader</code>
 * @public
 * @name sap.suite.ui.commons.NewsContent#getSubheader
 * @function
 */

/**
 * Setter for property <code>subheader</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSubheader  new value for property <code>subheader</code>
 * @return {sap.suite.ui.commons.NewsContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NewsContent#setSubheader
 * @function
 */


/**
 * The event is fired when the user chooses the news content.
 *
 * @name sap.suite.ui.commons.NewsContent#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.NewsContent</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NewsContent</code>.<br/> itself. 
 *  
 * The event is fired when the user chooses the news content.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NewsContent</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NewsContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NewsContent#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.NewsContent</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NewsContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NewsContent#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NewsContent} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NewsContent#firePress
 * @function
 */

// Start of sap/suite/ui/commons/NewsContent.js
///**
// * This file defines behavior for the control,
// */
sap.suite.ui.commons.NewsContent.prototype.init = function() {
	this._oCText = new sap.m.Text(this.getId() + "-content-text", {maxLines: 2});
	this._oCText.cacheLineHeight = false;
	this.setAggregation("contentTextAgr", this._oCText);
	this.setTooltip("{AltText}");
};

sap.suite.ui.commons.NewsContent.prototype.ontap = function(oEvent) {
    if (sap.ui.Device.browser.internet_explorer) {
        this.$().focus();
    }
    this.firePress();
};

sap.suite.ui.commons.NewsContent.prototype.onkeydown = function(oEvent) {
    if (oEvent.which == jQuery.sap.KeyCodes.ENTER || oEvent.which == jQuery.sap.KeyCodes.SPACE) {
        this.firePress();
        oEvent.preventDefault();
    }
};

sap.suite.ui.commons.NewsContent.prototype.getContentText = function() {
	return this._oCText.getText();
};

sap.suite.ui.commons.NewsContent.prototype.setContentText = function(sText) {
	this._oCText.setText(sText);
	return this;
};

sap.suite.ui.commons.NewsContent.prototype.attachEvent = function(sEventId, oData, fnFunction, oListener) {
	sap.ui.core.Control.prototype.attachEvent.call(this, sEventId, oData, fnFunction, oListener);
	
	if (this.hasListeners("press")) {
		this.$().attr("tabindex", 0).addClass("sapSuiteUiCommonsPointer");
	}
	
	return this;
};

sap.suite.ui.commons.NewsContent.prototype.detachEvent = function(sEventId, fnFunction, oListener) {
	sap.ui.core.Control.prototype.detachEvent.call(this, sEventId, fnFunction, oListener);
	
	if (!this.hasListeners("press")) {
		this.$().removeAttr("tabindex").removeClass("sapSuiteUiCommonsPointer");
	}
	return this;
};

sap.suite.ui.commons.NewsContent.prototype.getAltText = function() {
	var sAltText = "";
	var bIsFirst = true;
	if (this.getContentText()) {
		sAltText += this.getContentText();
		bIsFirst = false;
	}
	if (this.getSubheader()) {
		sAltText += (bIsFirst ? "" : "\n" ) + this.getSubheader();
	}
	return sAltText;
};

sap.suite.ui.commons.NewsContent.prototype.getTooltip_AsString  = function() {
	var oTooltip = this.getTooltip();
	var sTooltip = this.getAltText();
	
	if(typeof oTooltip === "string" || oTooltip instanceof String) {
		sTooltip = oTooltip.split("{AltText}").join(sTooltip).split("((AltText))").join(sTooltip);
		return sTooltip;
	}
	return oTooltip ? oTooltip : "";
};
