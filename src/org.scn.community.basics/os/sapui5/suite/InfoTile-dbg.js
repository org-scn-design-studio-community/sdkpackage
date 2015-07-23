/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.InfoTile.
jQuery.sap.declare("sap.suite.ui.commons.InfoTile");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new InfoTile.
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
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getFooter footer} : string</li>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: "Auto")</li>
 * <li>{@link #getState state} : sap.suite.ui.commons.LoadState (default: sap.suite.ui.commons.LoadState.Loading)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.InfoTile#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The tile control that displays the title, description, footer, and customizable main area.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @deprecated Since version 1.25. 
 * This control has been deprecated in favor of new sap.suite.ui.commons.GenericTile.
 * @name sap.suite.ui.commons.InfoTile
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.InfoTile", { metadata : {

	deprecated : true,
	library : "sap.suite.ui.commons",
	properties : {
		"description" : {type : "string", group : "Appearance", defaultValue : null},
		"title" : {type : "string", group : "Appearance", defaultValue : null},
		"footer" : {type : "string", group : "Appearance", defaultValue : null},
		"size" : {type : "sap.suite.ui.commons.InfoTileSize", group : "Misc", defaultValue : "Auto"},
		"state" : {type : "sap.suite.ui.commons.LoadState", group : "Misc", defaultValue : sap.suite.ui.commons.LoadState.Loading}
	},
	aggregations : {
		"content" : {type : "sap.ui.core.Control", multiple : false}, 
		"titleText" : {type : "sap.m.Text", multiple : false, visibility : "hidden"}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.InfoTile with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.InfoTile.extend
 * @function
 */

sap.suite.ui.commons.InfoTile.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>description</code>.
 * Shows the description of the selected tile.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>description</code>
 * @public
 * @name sap.suite.ui.commons.InfoTile#getDescription
 * @function
 */

/**
 * Setter for property <code>description</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.InfoTile#setDescription
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * The title of the tile.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.suite.ui.commons.InfoTile#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.InfoTile#setTitle
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
 * @name sap.suite.ui.commons.InfoTile#getFooter
 * @function
 */

/**
 * Setter for property <code>footer</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFooter  new value for property <code>footer</code>
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.InfoTile#setFooter
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
 * @name sap.suite.ui.commons.InfoTile#getSize
 * @function
 */

/**
 * Setter for property <code>size</code>.
 *
 * Default value is <code>"Auto"</code> 
 *
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.InfoTile#setSize
 * @function
 */


/**
 * Getter for property <code>state</code>.
 * Indicates the load status.
 *
 * Default value is <code>Loading</code>
 *
 * @return {sap.suite.ui.commons.LoadState} the value of property <code>state</code>
 * @public
 * @name sap.suite.ui.commons.InfoTile#getState
 * @function
 */

/**
 * Setter for property <code>state</code>.
 *
 * Default value is <code>Loading</code> 
 *
 * @param {sap.suite.ui.commons.LoadState} oState  new value for property <code>state</code>
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.InfoTile#setState
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The switchable view that depends on the tile type.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.suite.ui.commons.InfoTile#getContent
 * @function
 */


/**
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.InfoTile#setContent
 * @function
 */
	

/**
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.InfoTile#destroyContent
 * @function
 */


/**
 * The event is fired when the user chooses the tile.
 *
 * @name sap.suite.ui.commons.InfoTile#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.InfoTile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.InfoTile</code>.<br/> itself. 
 *  
 * The event is fired when the user chooses the tile.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.InfoTile</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.InfoTile#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.InfoTile</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.InfoTile#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.InfoTile#firePress
 * @function
 */

// Start of sap/suite/ui/commons/InfoTile.js
jQuery.sap.require("sap.m.Text");

sap.suite.ui.commons.InfoTile.prototype.init = function() {
	this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
	
	this._oTitle = new sap.m.Text(this.getId() + "-title", {maxLines: 2});
	this.setAggregation("titleText", this._oTitle);
	
	this._sFailedToLoad = this._rb.getText("INFOTILE_CANNOT_LOAD_TILE");
	
	this._oWarningIcon = new sap.ui.core.Icon(this.getId() + "-warn-icon",{
		src : "sap-icon://notification"
	}); 
};

sap.suite.ui.commons.InfoTile.prototype.ontap = function(oEvent) {
	this.firePress();
};

sap.suite.ui.commons.InfoTile.prototype.onkeydown = function(oEvent) {
    if (oEvent.which == jQuery.sap.KeyCodes.ENTER || oEvent.which == jQuery.sap.KeyCodes.SPACE) {
        this.firePress();
    }
};

sap.suite.ui.commons.InfoTile.prototype.getTitle = function() {
	return this._oTitle.getText();
};

sap.suite.ui.commons.InfoTile.prototype.setTitle = function(sDesc) {
	this._oTitle.setProperty("text", sDesc, true);
	this.invalidate();
	
	return this;
};

sap.suite.ui.commons.InfoTile.prototype.exit = function() {
	this._oWarningIcon.destroy();
};