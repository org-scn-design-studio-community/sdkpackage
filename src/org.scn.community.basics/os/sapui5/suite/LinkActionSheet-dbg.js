/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.LinkActionSheet.
jQuery.sap.declare("sap.suite.ui.commons.LinkActionSheet");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.m.ActionSheet");


/**
 * Constructor for a new LinkActionSheet.
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
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.LinkActionSheet#event:itemPress itemPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ActionSheet#constructor sap.m.ActionSheet}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control contains one or more sap.m.Button controls or sap.ui.commons.Link controls. The LinkActionSheet control is closed if the user chooses one of the buttons or links. It looks similar to sap.m.Dialog in iPhone and Android, and to sap.m.Popover in iPad.
 * @extends sap.m.ActionSheet
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.LinkActionSheet
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.m.ActionSheet.extend("sap.suite.ui.commons.LinkActionSheet", { metadata : {

	library : "sap.suite.ui.commons",
	aggregations : {
		"items" : {type : "sap.ui.core.Control", multiple : true, singularName : "item"}
	},
	events : {
		"itemPress" : {allowPreventDefault : true}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.LinkActionSheet with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.LinkActionSheet.extend
 * @function
 */

sap.suite.ui.commons.LinkActionSheet.M_EVENTS = {'itemPress':'itemPress'};


/**
 * Getter for aggregation <code>items</code>.<br/>
 * These buttons or links are added to the content area in the LinkActionSheet control. If the user chooses a button or a link, the LinkActionSheet is closed before the event listener is called.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.suite.ui.commons.LinkActionSheet#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Control}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.LinkActionSheet} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.LinkActionSheet#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Control}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.LinkActionSheet} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.LinkActionSheet#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.core.Control} vItem the item to remove or its index or id
 * @return {sap.ui.core.Control} the removed item or null
 * @public
 * @name sap.suite.ui.commons.LinkActionSheet#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.LinkActionSheet#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.LinkActionSheet#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.suite.ui.commons.LinkActionSheet} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.LinkActionSheet#destroyItems
 * @function
 */


/**
 * The event is fired when the user chooses any item.
 *
 * @name sap.suite.ui.commons.LinkActionSheet#itemPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.item The object that initiated the event.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'itemPress' event of this <code>sap.suite.ui.commons.LinkActionSheet</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.LinkActionSheet</code>.<br/> itself. 
 *  
 * The event is fired when the user chooses any item.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.LinkActionSheet</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.LinkActionSheet} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.LinkActionSheet#attachItemPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'itemPress' event of this <code>sap.suite.ui.commons.LinkActionSheet</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.LinkActionSheet} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.LinkActionSheet#detachItemPress
 * @function
 */

/**
 * Fire event itemPress to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'item' of type <code>sap.ui.core.Control</code> The object that initiated the event.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.suite.ui.commons.LinkActionSheet#fireItemPress
 * @function
 */

// Start of sap/suite/ui/commons/LinkActionSheet.js
///**
// * This file defines behavior for the control,
// */

sap.suite.ui.commons.LinkActionSheet.prototype.init = function() {
	if (jQuery.device.is.desktop) {
		sap.m.ActionSheet.prototype.init.apply(this);
		this.getButtons = this.getItems;
	} else {
		this._setItemNavigation = function() {};
		this.attachBeforeOpen(function() {
			this.onclick = function(e) {
				e.preventDefault();
			};
		}).attachAfterOpen(function() {
			this.onclick = function(e) {};
		});
	}
};

sap.suite.ui.commons.LinkActionSheet.prototype._preProcessActionItem = function(oItem){
	if( oItem.getType  &&  oItem.getType() !== sap.m.ButtonType.Accept &&  oItem.getType() !== sap.m.ButtonType.Reject){
		oItem.setType(sap.m.ButtonType.Transparent);
		oItem.addStyleClass("sapMBtnInverted"); // dark background
	}
	oItem.onsapenter = function() {
		this._bEnterWasPressed = true;
	};

	return this;
};

sap.suite.ui.commons.LinkActionSheet.prototype._itemSelected = function(event){
	var oItem = event.getSource();
	
	if (this.fireItemPress({item: oItem})) {
		if(!(jQuery.device.is.ipad || (!jQuery.device.is.phone)) && this._parent){
			this._parent._oCloseTrigger = this;
		}
		this.close();
	}
	oItem._bEnterWasPressed = undefined;
};

/* Override API methods */
sap.suite.ui.commons.LinkActionSheet.prototype.addItem = function(oItem) {
	this.addAggregation("items",oItem, false);
	this._preProcessActionItem(oItem);
	oItem.attachPress(this._itemSelected, this);
	return this;
};
sap.suite.ui.commons.LinkActionSheet.prototype.insertItem = function(oItem, iIndex) {
	this.insertAggregation("items",oItem, iIndex, false);
	this._preProcessActionItem(oItem);
	oItem.attachPress(this._itemSelected, this);
	return this;
};
sap.suite.ui.commons.LinkActionSheet.prototype.removeItem = function(oItem) {
	var result = this.removeAggregation("items",oItem, false);
	if (result) {
		result.detachPress(this._itemSelected, this);
		oItem.onsapenter = undefined;
	}
	return result;
};
sap.suite.ui.commons.LinkActionSheet.prototype.removeAllItems = function() {
	var result = this.removeAllAggregation("items", false);
	var that=this;
	jQuery.each(result, function(i, oItem) {
		oItem.detachPress(that._itemSelected, that);
		oItem.onsapenter = undefined;
	});
	return result;
};
sap.suite.ui.commons.LinkActionSheet.prototype.clone = function() {
	var aItems = this.getItems();
	for ( var i = 0; i < aItems.length; i++) {
		var oItem = aItems[i];
		oItem.detachPress(this._itemSelected, this);
	}

	var oClone = sap.ui.core.Control.prototype.clone.apply(this, arguments);

	for ( var i = 0; i < aItems.length; i++) {
		var oItem = aItems[i];
		oItem.attachPress(this._itemSelected, this);
	}

	return oClone;
};