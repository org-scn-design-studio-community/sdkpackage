/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.LaunchTile.
jQuery.sap.declare("sap.suite.ui.commons.LaunchTile");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new LaunchTile.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getLink link} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.LaunchTile#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control launches a URL.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @deprecated Since version 1.25. 
 * API is not yet finished and might change completely
 * @name sap.suite.ui.commons.LaunchTile
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.LaunchTile", { metadata : {

	deprecated : true,
	library : "sap.suite.ui.commons",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"link" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.LaunchTile with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.LaunchTile.extend
 * @function
 */

sap.suite.ui.commons.LaunchTile.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>title</code>.
 * Descriptive title of the launch destination.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.suite.ui.commons.LaunchTile#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.LaunchTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.LaunchTile#setTitle
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Icon associated with the launch destination.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.suite.ui.commons.LaunchTile#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.suite.ui.commons.LaunchTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.LaunchTile#setIcon
 * @function
 */


/**
 * Getter for property <code>link</code>.
 * The launch destination.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>link</code>
 * @public
 * @name sap.suite.ui.commons.LaunchTile#getLink
 * @function
 */

/**
 * Setter for property <code>link</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sLink  new value for property <code>link</code>
 * @return {sap.suite.ui.commons.LaunchTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.LaunchTile#setLink
 * @function
 */


/**
 * The event fired when the user clicks on the control.
 *
 * @name sap.suite.ui.commons.LaunchTile#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.LaunchTile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.LaunchTile</code>.<br/> itself. 
 *  
 * The event fired when the user clicks on the control.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.LaunchTile</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.LaunchTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.LaunchTile#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.LaunchTile</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.LaunchTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.LaunchTile#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.LaunchTile} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.LaunchTile#firePress
 * @function
 */

// Start of sap/suite/ui/commons/LaunchTile.js
///**
// * This file defines behavior for the control,
// */
jQuery.sap.require("sap.ui.core.IconPool");


// sap.suite.ui.commons.LaunchTile.prototype.init = function() {

// do something for initialization...
// };

/**
 * Called when the control is destroyed.
 * 
 * @private
 */
sap.suite.ui.commons.LaunchTile.prototype.exit = function() {

    if (this._iconImage) {
        this._iconImage.destroy();
        this._iconImage = undefined;
    }

};

/**
 * Sets the launch tile's image.
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.setIcon = function(sURI) {

    this.setProperty("icon", sURI, true);

    var sImgId = this.getId() + "-img";
	var sSize = "72px";
	
	var mProperties = { 
		src : sURI,
		height : sSize,
		width : sSize,
		size: sSize		
	};
	
	this._iconImage = sap.m.ImageHelper.getImageControl(sImgId, this._iconImage, this, mProperties);
    
    return this;
};

/**
 * Fire press event.
 * 
 * @private
 */
sap.suite.ui.commons.LaunchTile.prototype.onclick = function(oEvent) {

    this.firePress({
        title : this.getTitle(),
        link : this.getLink()
    });

};