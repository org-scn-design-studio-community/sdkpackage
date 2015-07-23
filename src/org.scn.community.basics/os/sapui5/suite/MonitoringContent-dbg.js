/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.MonitoringContent.
jQuery.sap.declare("sap.suite.ui.commons.MonitoringContent");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new MonitoringContent.
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
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: sap.suite.ui.commons.InfoTileSize.Auto)</li>
 * <li>{@link #getState state} : sap.suite.ui.commons.LoadState (default: sap.suite.ui.commons.LoadState.Loaded)</li>
 * <li>{@link #getAnimateTextChange animateTextChange} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getIcon icon} : sap.ui.core.Icon</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.MonitoringContent#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control is used in a tile or any other place to display numeric values and an icon.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @deprecated Since version 1.25. 
 * This control has been deprecated in favor of new sap.suite.ui.commons.NumericContent.
 * @name sap.suite.ui.commons.MonitoringContent
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.MonitoringContent", { metadata : {

	deprecated : true,
	library : "sap.suite.ui.commons",
	properties : {
		"value" : {type : "string", group : "Misc", defaultValue : null},
		"iconSrc" : {type : "string", group : "Misc", defaultValue : null},
		"size" : {type : "sap.suite.ui.commons.InfoTileSize", group : "Misc", defaultValue : sap.suite.ui.commons.InfoTileSize.Auto},
		"state" : {type : "sap.suite.ui.commons.LoadState", group : "Misc", defaultValue : sap.suite.ui.commons.LoadState.Loaded},
		"animateTextChange" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
		"icon" : {type : "sap.ui.core.Icon", multiple : false}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.MonitoringContent with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.MonitoringContent.extend
 * @function
 */

sap.suite.ui.commons.MonitoringContent.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>value</code>.
 * The actual value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>value</code>
 * @public
 * @name sap.suite.ui.commons.MonitoringContent#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MonitoringContent#setValue
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
 * @name sap.suite.ui.commons.MonitoringContent#getIconSrc
 * @function
 */

/**
 * Setter for property <code>iconSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIconSrc  new value for property <code>iconSrc</code>
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MonitoringContent#setIconSrc
 * @function
 */


/**
 * Getter for property <code>size</code>.
 * Updates the size of the chart. If not set then the default size is applied based on the device tile.
 *
 * Default value is <code>Auto</code>
 *
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * @name sap.suite.ui.commons.MonitoringContent#getSize
 * @function
 */

/**
 * Setter for property <code>size</code>.
 *
 * Default value is <code>Auto</code> 
 *
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MonitoringContent#setSize
 * @function
 */


/**
 * Getter for property <code>state</code>.
 * Indicates the load status.
 *
 * Default value is <code>Loaded</code>
 *
 * @return {sap.suite.ui.commons.LoadState} the value of property <code>state</code>
 * @public
 * @name sap.suite.ui.commons.MonitoringContent#getState
 * @function
 */

/**
 * Setter for property <code>state</code>.
 *
 * Default value is <code>Loaded</code> 
 *
 * @param {sap.suite.ui.commons.LoadState} oState  new value for property <code>state</code>
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MonitoringContent#setState
 * @function
 */


/**
 * Getter for property <code>animateTextChange</code>.
 * If set to true, changing of the value is animated.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>animateTextChange</code>
 * @public
 * @name sap.suite.ui.commons.MonitoringContent#getAnimateTextChange
 * @function
 */

/**
 * Setter for property <code>animateTextChange</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bAnimateTextChange  new value for property <code>animateTextChange</code>
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MonitoringContent#setAnimateTextChange
 * @function
 */


/**
 * Getter for aggregation <code>icon</code>.<br/>
 * The icon that is displayed in the content.
 * 
 * @return {sap.ui.core.Icon}
 * @public
 * @name sap.suite.ui.commons.MonitoringContent#getIcon
 * @function
 */


/**
 * Setter for the aggregated <code>icon</code>.
 * @param {sap.ui.core.Icon} oIcon
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MonitoringContent#setIcon
 * @function
 */
	

/**
 * Destroys the icon in the aggregation 
 * named <code>icon</code>.
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MonitoringContent#destroyIcon
 * @function
 */


/**
 * The event is fired when the user chooses the monitoring content.
 *
 * @name sap.suite.ui.commons.MonitoringContent#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.MonitoringContent</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.MonitoringContent</code>.<br/> itself. 
 *  
 * The event is fired when the user chooses the monitoring content.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.MonitoringContent</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MonitoringContent#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.MonitoringContent</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MonitoringContent#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.MonitoringContent#firePress
 * @function
 */

// Start of sap/suite/ui/commons/MonitoringContent.js
///**
// * This file defines behavior for the control,
// */
sap.suite.ui.commons.MonitoringContent.prototype.init = function(){
    this._oIcon = new sap.ui.core.Icon(this.getId() + "-icon"); 
    this.setAggregation("icon", this._oIcon);
};

sap.suite.ui.commons.MonitoringContent.prototype.onAfterRendering = function() {
	if (sap.suite.ui.commons.LoadState.Loaded == this.getState() || this.getAnimateTextChange()) {
		jQuery.sap.byId(this.getId()).animate({opacity: "1"}, 1000);
    }
};

sap.suite.ui.commons.MonitoringContent.prototype.setIconSrc = function(sIconSrc) {
    this._oIcon.setSrc(sIconSrc);
    return this;
};

sap.suite.ui.commons.MonitoringContent.prototype.getIconSrc = function() {
    return this._oIcon.getImageSrc();
};

sap.suite.ui.commons.MonitoringContent.prototype.ontap = function(oEvent) {
	this.firePress();
};

sap.suite.ui.commons.MonitoringContent.prototype.onkeydown = function(oEvent) {
    if (oEvent.which == jQuery.sap.KeyCodes.ENTER || oEvent.which == jQuery.sap.KeyCodes.SPACE) {
        this.firePress();
        oEvent.preventDefault();
    }
};
