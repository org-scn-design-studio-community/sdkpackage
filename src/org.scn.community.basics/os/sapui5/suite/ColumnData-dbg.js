/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.ColumnData.
jQuery.sap.declare("sap.suite.ui.commons.ColumnData");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new ColumnData.
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
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getValue value} : float</li>
 * <li>{@link #getColor color} : sap.suite.ui.commons.InfoTileValueColor (default: sap.suite.ui.commons.InfoTileValueColor.Neutral)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.ColumnData#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Column data holder.
 * @extends sap.ui.core.Element
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.ColumnData
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Element.extend("sap.suite.ui.commons.ColumnData", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"label" : {type : "string", group : "Misc", defaultValue : null},
		"value" : {type : "float", group : "Misc", defaultValue : null},
		"color" : {type : "sap.suite.ui.commons.InfoTileValueColor", group : "Misc", defaultValue : sap.suite.ui.commons.InfoTileValueColor.Neutral}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.ColumnData with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.ColumnData.extend
 * @function
 */

sap.suite.ui.commons.ColumnData.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>label</code>.
 * The label.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>label</code>
 * @public
 * @name sap.suite.ui.commons.ColumnData#getLabel
 * @function
 */

/**
 * Setter for property <code>label</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLabel  new value for property <code>label</code>
 * @return {sap.suite.ui.commons.ColumnData} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ColumnData#setLabel
 * @function
 */


/**
 * Getter for property <code>value</code>.
 * The actual value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>value</code>
 * @public
 * @name sap.suite.ui.commons.ColumnData#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fValue  new value for property <code>value</code>
 * @return {sap.suite.ui.commons.ColumnData} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ColumnData#setValue
 * @function
 */


/**
 * Getter for property <code>color</code>.
 * The semantic color of the column.
 *
 * Default value is <code>Neutral</code>
 *
 * @return {sap.suite.ui.commons.InfoTileValueColor} the value of property <code>color</code>
 * @public
 * @name sap.suite.ui.commons.ColumnData#getColor
 * @function
 */

/**
 * Setter for property <code>color</code>.
 *
 * Default value is <code>Neutral</code> 
 *
 * @param {sap.suite.ui.commons.InfoTileValueColor} oColor  new value for property <code>color</code>
 * @return {sap.suite.ui.commons.ColumnData} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ColumnData#setColor
 * @function
 */


/**
 * The event is fired when the user chooses the column data.
 *
 * @name sap.suite.ui.commons.ColumnData#press
 * @event
 * @since 1.30
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.ColumnData</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ColumnData</code>.<br/> itself. 
 *  
 * The event is fired when the user chooses the column data.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ColumnData</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ColumnData} <code>this</code> to allow method chaining
 * @public
 * @since 1.30
 * @name sap.suite.ui.commons.ColumnData#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.ColumnData</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ColumnData} <code>this</code> to allow method chaining
 * @public
 * @since 1.30
 * @name sap.suite.ui.commons.ColumnData#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ColumnData} <code>this</code> to allow method chaining
 * @protected
 * @since 1.30
 * @name sap.suite.ui.commons.ColumnData#firePress
 * @function
 */

// Start of sap/suite/ui/commons/ColumnData.js
/*!
 * @copyright@
 */
sap.suite.ui.commons.ColumnData.prototype.attachEvent = function(sEventId, oData, fnFunction, oListener) {
    sap.ui.core.Control.prototype.attachEvent.call(this, sEventId, oData, fnFunction, oListener);
    if (this.getParent()) {
    	this.getParent().setBarPressable(this.getParent().getColumns().indexOf(this), true);
    }
    return this;
};

sap.suite.ui.commons.ColumnData.prototype.detachEvent = function(sEventId, fnFunction, oListener) {
	sap.ui.core.Control.prototype.detachEvent.call(this, sEventId, fnFunction, oListener);
	if (this.getParent()) {
		this.getParent().setBarPressable(this.getParent().getColumns().indexOf(this), false);
    }
    return this;
};
