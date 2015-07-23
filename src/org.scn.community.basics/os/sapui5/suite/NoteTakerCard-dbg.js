/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.NoteTakerCard.
jQuery.sap.declare("sap.suite.ui.commons.NoteTakerCard");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new NoteTakerCard.
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
 * <li>{@link #getHeader header} : string</li>
 * <li>{@link #getBody body} : string</li>
 * <li>{@link #getTimestamp timestamp} : object (default: new Date())</li>
 * <li>{@link #getTags tags} : object (default: [])</li>
 * <li>{@link #getViewAllTrigger viewAllTrigger} : int (default: 1800)</li>
 * <li>{@link #getUid uid} : string</li>
 * <li>{@link #getIsFiltered isFiltered} : boolean (default: false)</li>
 * <li>{@link #getThumbUp thumbUp} : boolean</li>
 * <li>{@link #getThumbDown thumbDown} : boolean</li>
 * <li>{@link #getAllTags allTags} : object (default: [])</li>
 * <li>{@link #getAttachmentFilename attachmentFilename} : string</li>
 * <li>{@link #getAttachmentUrl attachmentUrl} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.NoteTakerCard#event:editNote editNote} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.NoteTakerCard#event:deleteNote deleteNote} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.NoteTakerCard#event:attachmentClick attachmentClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control allows you to store Note Taker card header and body text.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.NoteTakerCard", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"header" : {type : "string", group : "Misc", defaultValue : null},
		"body" : {type : "string", group : "Misc", defaultValue : null},
		"timestamp" : {type : "object", group : "Misc", defaultValue : new Date()},
		"tags" : {type : "object", group : "Misc", defaultValue : []},
		"viewAllTrigger" : {type : "int", group : "Misc", defaultValue : 1800},
		"uid" : {type : "string", group : "Misc", defaultValue : null},
		"isFiltered" : {type : "boolean", group : "Misc", defaultValue : false},
		"thumbUp" : {type : "boolean", group : "Misc", defaultValue : null},
		"thumbDown" : {type : "boolean", group : "Misc", defaultValue : null},
		"allTags" : {type : "object", group : "Misc", defaultValue : []},
		"attachmentFilename" : {type : "string", group : "Misc", defaultValue : null},
		"attachmentUrl" : {type : "string", group : "Misc", defaultValue : null}
	},
	events : {
		"editNote" : {}, 
		"deleteNote" : {}, 
		"attachmentClick" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.NoteTakerCard with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.NoteTakerCard.extend
 * @function
 */

sap.suite.ui.commons.NoteTakerCard.M_EVENTS = {'editNote':'editNote','deleteNote':'deleteNote','attachmentClick':'attachmentClick'};


/**
 * Getter for property <code>header</code>.
 * Stores the Note Taker card header.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>header</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#getHeader
 * @function
 */

/**
 * Setter for property <code>header</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sHeader  new value for property <code>header</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#setHeader
 * @function
 */


/**
 * Getter for property <code>body</code>.
 * Stores the Note Taker card body text.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>body</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#getBody
 * @function
 */

/**
 * Setter for property <code>body</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sBody  new value for property <code>body</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#setBody
 * @function
 */


/**
 * Getter for property <code>timestamp</code>.
 * Stores a timestamp of the Note Taker card.
 *
 * Default value is <code>new Date()</code>
 *
 * @return {object} the value of property <code>timestamp</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#getTimestamp
 * @function
 */

/**
 * Setter for property <code>timestamp</code>.
 *
 * Default value is <code>new Date()</code> 
 *
 * @param {object} oTimestamp  new value for property <code>timestamp</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#setTimestamp
 * @function
 */


/**
 * Getter for property <code>tags</code>.
 * Contains an array of the String type tags applied to the current card.
 *
 * Default value is <code>[]</code>
 *
 * @return {object} the value of property <code>tags</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#getTags
 * @function
 */

/**
 * Setter for property <code>tags</code>.
 *
 * Default value is <code>[]</code> 
 *
 * @param {object} oTags  new value for property <code>tags</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#setTags
 * @function
 */


/**
 * Getter for property <code>viewAllTrigger</code>.
 * The View All link appears in the Note Taker card if a body text length exceeds the specified value.
 *
 * Default value is <code>1800</code>
 *
 * @return {int} the value of property <code>viewAllTrigger</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#getViewAllTrigger
 * @function
 */

/**
 * Setter for property <code>viewAllTrigger</code>.
 *
 * Default value is <code>1800</code> 
 *
 * @param {int} iViewAllTrigger  new value for property <code>viewAllTrigger</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#setViewAllTrigger
 * @function
 */


/**
 * Getter for property <code>uid</code>.
 * The card ID. This property should be set by an application developer.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>uid</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#getUid
 * @function
 */

/**
 * Setter for property <code>uid</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUid  new value for property <code>uid</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#setUid
 * @function
 */


/**
 * Getter for property <code>isFiltered</code>.
 * Shows whether the note card is hidden by the applied filter.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isFiltered</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#getIsFiltered
 * @function
 */

/**
 * Setter for property <code>isFiltered</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsFiltered  new value for property <code>isFiltered</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#setIsFiltered
 * @function
 */


/**
 * Getter for property <code>thumbUp</code>.
 * Indicates positive information for the card.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>thumbUp</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#getThumbUp
 * @function
 */

/**
 * Setter for property <code>thumbUp</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bThumbUp  new value for property <code>thumbUp</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#setThumbUp
 * @function
 */


/**
 * Getter for property <code>thumbDown</code>.
 * Indicates negative information for the card.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>thumbDown</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#getThumbDown
 * @function
 */

/**
 * Setter for property <code>thumbDown</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bThumbDown  new value for property <code>thumbDown</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#setThumbDown
 * @function
 */


/**
 * Getter for property <code>allTags</code>.
 * Contains an array of the String type tags available for selection during the card update.
 *
 * Default value is <code>[]</code>
 *
 * @return {object} the value of property <code>allTags</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#getAllTags
 * @function
 */

/**
 * Setter for property <code>allTags</code>.
 *
 * Default value is <code>[]</code> 
 *
 * @param {object} oAllTags  new value for property <code>allTags</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#setAllTags
 * @function
 */


/**
 * Getter for property <code>attachmentFilename</code>.
 * Stores the name of the file attached to the card.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>attachmentFilename</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#getAttachmentFilename
 * @function
 */

/**
 * Setter for property <code>attachmentFilename</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAttachmentFilename  new value for property <code>attachmentFilename</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#setAttachmentFilename
 * @function
 */


/**
 * Getter for property <code>attachmentUrl</code>.
 * Stores the address of the file attached to the card.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>attachmentUrl</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#getAttachmentUrl
 * @function
 */

/**
 * Setter for property <code>attachmentUrl</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAttachmentUrl  new value for property <code>attachmentUrl</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#setAttachmentUrl
 * @function
 */


/**
 * The event is fired when a user chooses the Edit button in the note card.
 *
 * @name sap.suite.ui.commons.NoteTakerCard#editNote
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.title The title of edited card.
 * @param {string} oControlEvent.getParameters.body A new text of the edited card.
 * @param {string} oControlEvent.getParameters.timestamp A new timestamp of the edited card.
 * @param {string} oControlEvent.getParameters.uid A unique ID that was set by an application developer.
 * @param {boolean} oControlEvent.getParameters.thumbUp Indicates positive information for the edited card.
 * @param {boolean} oControlEvent.getParameters.thumbDown Indicates negative information for the edited card.
 * @param {object} oControlEvent.getParameters.tags Updated array of the String type tags applied to the card during editing.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'editNote' event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/> itself. 
 *  
 * The event is fired when a user chooses the Edit button in the note card.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#attachEditNote
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'editNote' event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#detachEditNote
 * @function
 */

/**
 * Fire event editNote to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'title' of type <code>string</code> The title of edited card.</li>
 * <li>'body' of type <code>string</code> A new text of the edited card.</li>
 * <li>'timestamp' of type <code>string</code> A new timestamp of the edited card.</li>
 * <li>'uid' of type <code>string</code> A unique ID that was set by an application developer.</li>
 * <li>'thumbUp' of type <code>boolean</code> Indicates positive information for the edited card.</li>
 * <li>'thumbDown' of type <code>boolean</code> Indicates negative information for the edited card.</li>
 * <li>'tags' of type <code>object</code> Updated array of the String type tags applied to the card during editing.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NoteTakerCard#fireEditNote
 * @function
 */


/**
 * The event is fired when a card needs to be deleted. This event is needed for the Note Taker control.
 *
 * @name sap.suite.ui.commons.NoteTakerCard#deleteNote
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.cardId The HTML ID of a card that needs to be deleted.
 * @param {string} oControlEvent.getParameters.title The title of the card to be deleted.
 * @param {string} oControlEvent.getParameters.body The text of the card to be deleted.
 * @param {string} oControlEvent.getParameters.timestamp The timestamp of the card to be deleted.
 * @param {string} oControlEvent.getParameters.uid A unique ID that was set by an application developer.
 * @param {boolean} oControlEvent.getParameters.thumbUp Indicates positive information for the deleted card.
 * @param {boolean} oControlEvent.getParameters.thumbDown Indicates negative information for the deleted card.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'deleteNote' event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/> itself. 
 *  
 * The event is fired when a card needs to be deleted. This event is needed for the Note Taker control.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#attachDeleteNote
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'deleteNote' event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#detachDeleteNote
 * @function
 */

/**
 * Fire event deleteNote to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'cardId' of type <code>string</code> The HTML ID of a card that needs to be deleted.</li>
 * <li>'title' of type <code>string</code> The title of the card to be deleted.</li>
 * <li>'body' of type <code>string</code> The text of the card to be deleted.</li>
 * <li>'timestamp' of type <code>string</code> The timestamp of the card to be deleted.</li>
 * <li>'uid' of type <code>string</code> A unique ID that was set by an application developer.</li>
 * <li>'thumbUp' of type <code>boolean</code> Indicates positive information for the deleted card.</li>
 * <li>'thumbDown' of type <code>boolean</code> Indicates negative information for the deleted card.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NoteTakerCard#fireDeleteNote
 * @function
 */


/**
 * The event is fired when a user chooses the attachment download link.
 *
 * @name sap.suite.ui.commons.NoteTakerCard#attachmentClick
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.uid A unique ID that was set by an application developer.
 * @param {string} oControlEvent.getParameters.url The address of the file attached to the card.
 * @param {string} oControlEvent.getParameters.filename The name of the file attached to the card.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'attachmentClick' event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/> itself. 
 *  
 * The event is fired when a user chooses the attachment download link.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#attachAttachmentClick
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'attachmentClick' event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerCard#detachAttachmentClick
 * @function
 */

/**
 * Fire event attachmentClick to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'uid' of type <code>string</code> A unique ID that was set by an application developer.</li>
 * <li>'url' of type <code>string</code> The address of the file attached to the card.</li>
 * <li>'filename' of type <code>string</code> The name of the file attached to the card.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NoteTakerCard#fireAttachmentClick
 * @function
 */

// Start of sap/suite/ui/commons/NoteTakerCard.js
jQuery.sap.require("sap.ui.core.Locale");
jQuery.sap.require("sap.ui.core.format.DateFormat");
jQuery.sap.require("sap.ui.ux3.OverlayContainer");
jQuery.sap.require("sap.ui.commons.Link");
jQuery.sap.require("sap.ui.commons.MessageBox");

///**
// * This file defines behavior for the control,
// */
sap.suite.ui.commons.NoteTakerCard.prototype.init = function(){
    this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");

    var that = this;
    this._oEditButton = new sap.ui.commons.Button({
        id: this.getId() + "-edit-button",
        press: function(e){
            that._handleEdit();
        },
        tooltip : this._rb.getText("NOTETAKERCARD_BUTTON_OPEN_EDIT_TOOLTIP")
    });
    this._oEditButton.addStyleClass("sapSuiteUiCommonsNoteTakerCardEditButton");

    this._oDeleteButton = new sap.ui.commons.Button({
        id: this.getId() + "-delete-button",
        tooltip : this._rb.getText("NOTETAKERCARD_BUTTON_DELETE_TOOLTIP"),
        press: function() {
            that._handleDelete();
        }
    });
    this._oDeleteButton.addStyleClass("sapSuiteUiCommonsNoteTakerCardDeleteButton");

    this._oViewAllLink = new sap.ui.commons.Link({
    	id: this.getId() + "-viewAll-link",
    	text: this._rb.getText("NOTETAKERCARD_LINK_VIEW_ALL_TEXT"),
    	tooltip: this._rb.getText("NOTETAKERCARD_LINK_VIEW_ALL_TOOLTIP"),
    	press: function() {
			that._openOverlay();
		}
	});
    
    this._oOverlayCard = new sap.ui.ux3.OverlayContainer(this.getId() + "-overlay", {
        openButtonVisible: false,
        close: function(oEvent) {
            that._handleOverlayCloseEvent(oEvent.getSource());
            oEvent.preventDefault();    // close overlay functionality already handled so prevent default close
        }
    });
    
    this._oOverlayCard.addDelegate({onAfterRendering:function(){
        var oOvrlTmpst = jQuery.sap.byId(that.getId() + "-overlayTimestamp");
        if(oOvrlTmpst) {
            oOvrlTmpst.html(that.getFormattedTimestamp());
        }
    }});
    
    // fixed unwanted scrolling of underlying content
    this._oOverlayCard._superOnsapselect = this._oOverlayCard.onsapselect;
    this._oOverlayCard.onsapselect = function(oEvent) {
        var controlId = oEvent.srcControl.getId();

        if (controlId.indexOf("-overlayBody") < 0 && controlId.indexOf("-inputTag") < 0 && controlId.indexOf("-overlayCardTitle") < 0) {
            oEvent.stopPropagation();
            oEvent.preventDefault();
        }

        //this is needed for Firefox
        setTimeout( function() {
            that._oOverlayCard._superOnsapselect(oEvent);
        }, 10);
    };
    
    this._oOverlayCard.addStyleClass("sapSuiteCommonsNoteTakerCardOverlayWindow");
    this._oOverlayCard._tagControls = {};
};

sap.suite.ui.commons.NoteTakerCard.prototype.exit = function() {
	this._oDeleteButton.destroy();
	this._oDeleteButton = null;
	
	this._oEditButton.destroy();
    this._oEditButton = null;

    this._oViewAllLink.destroy();
    this._oViewAllLink = null;
    
    this._oOverlayCard.destroy();
    this._oOverlayCard = null;
};

/**
 * Formats timestamp using medium format style and current locale.
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getFormattedTimestamp = function() {
    var oLocale = sap.ui.getCore().getConfiguration().getLocale();
    var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({style: "medium"}, oLocale);

    return oDateFormat.format(this.getTimestamp());
};

/**
 * Closes overlay. If overlay is in edit mode then shows confirmation dialog before closing.
 */
sap.suite.ui.commons.NoteTakerCard.prototype._handleOverlayCloseEvent = function(oControl) {
    if (oControl.bEditMode) {
        var that = this;
        sap.ui.commons.MessageBox.show(this._rb.getText("NOTETAKERCARD_CONFIRMATION_CANCEL_EDIT_MESSAGE"),
                                       sap.ui.commons.MessageBox.Icon.QUESTION,
                                       this._rb.getText("NOTETAKERCARD_CONFIRMATION_CANCEL_EDIT_TITLE"),
                                       [sap.ui.commons.MessageBox.Action.YES, sap.ui.commons.MessageBox.Action.NO],
                                       function(sResult) {
                                           if (sResult == sap.ui.commons.MessageBox.Action.YES) {
                                               that._closeOverlay();
                                               that._oEditButton.focus();
                                           } else {
                                               jQuery.sap.focus(jQuery.sap.domById(that.getId() + "-overlayBody"));
                                           }
                                       },
                                       sap.ui.commons.MessageBox.Action.NO);
    } else {
        this._closeOverlay();
    }
};

/**
 * Destroys overlay content and closes overlay
 */
sap.suite.ui.commons.NoteTakerCard.prototype._closeOverlay = function() {
    this._oOverlayCard.close();
    this._destroyTagControls();
    this._oOverlayCard.bEditMode = false;
    this._oOverlayCard.destroyContent();
};

sap.suite.ui.commons.NoteTakerCard.prototype._openOverlay = function(bEditMode) {
    var sInitiallyFocusedId;

    if (!this._oOverlayCard.isOpen()) {

        this._oOverlayCard.bThumbUp = this.getThumbUp();
        this._oOverlayCard.bThumbDown = this.getThumbDown();

        this._prepareOverlayLayouts();
        this._prepareOverlayToolbar(bEditMode);
        this._prepareOverlayHeaderBtns(bEditMode);
        this._prepareOverlayBody();
        this._prepareOverlayButtons(bEditMode);

        if (bEditMode) {
            sInitiallyFocusedId = this.getId() + "-overlayBody";
        } else {
            sInitiallyFocusedId = this.getId() + "-overlay-close";
        }

        this._oOverlayCard.open(sInitiallyFocusedId);
        
        jQuery.sap.byId(this.getId() + "-overlay-thumb-down-button").attr("aria-pressed", this.getThumbDown());
        jQuery.sap.byId(this.getId() + "-overlay-thumb-up-button").attr("aria-pressed", this.getThumbUp());
    }
};

sap.suite.ui.commons.NoteTakerCard.prototype._getFormattedBody = function() {
    var aBuffer = [];
    var sText = this.getBody();
    do {
        var iPos = sText.search(/[\s<>]/); //search for whitespace character
        var sSpace = "",
            sWord = "";

        if (iPos < 0) {
            // only 1 word
            sWord = sText;
        } else {
            sWord = sText.slice(0, iPos);
            sSpace = sText.slice(iPos, iPos + 1);
            sText = sText.slice(iPos + 1);
        }

        // check for special strings
        switch (true) {
            case (this._isFullUrl(sWord)) :
                this.wrapFullUrl(aBuffer, sWord, sSpace);
                break;

            case (this._isShortUrl(sWord)) :
                this._wrapShortUrl(aBuffer, sWord, sSpace);
                break;

            case (this._isEmail(sWord)) :
                this._wrapEmail(aBuffer, sWord, sSpace);
                break;

            default :
                // regular word
                //rm.writeEscaped(sWord + sSpace, true);
                aBuffer.push(jQuery.sap.encodeHTML(sWord + sSpace));
        }
    } while(iPos >= 0);
    
    return aBuffer.join("");
};

/**
 * Verifies if the given word is a valid URL address starting with HTTP, HTTPS or FTP protocol.
 * The check is case-insensitive.
 * @param sWord - Word to check.
 * @return {Boolean} - true if the word starts with http, https or ftp and is a valid URL.
 */
sap.suite.ui.commons.NoteTakerCard.prototype._isFullUrl = function(sWord) {
    return /^(https?|ftp):\/\//i.test(sWord) && jQuery.sap.validateUrl(sWord);
};

/**
 * Verifies if the given word is a valid URL address starting with WWW.
 * The check is case-insensitive.
 * @param sWord - Word to check.
 * @return {Boolean} - true if the word starts with www and is a valid URL for http request.
 */
sap.suite.ui.commons.NoteTakerCard.prototype._isShortUrl = function (sWord) {
    return /^(www\.)/i.test(sWord) && jQuery.sap.validateUrl("http://" + sWord);
};

/**
 * Verifies if the given word is a valid e-mail address.
 * The check is case-insensitive. E-mail address is valid if contains @-sign, and 2-6 chars long domain extension.
 * @param sWord - Word to check.
 * @return {Boolean} - true if the word is a valid e-mail address.
 */
sap.suite.ui.commons.NoteTakerCard.prototype._isEmail = function (sWord) {
    return /^[\w\.=-]+@[\w\.-]+\.[\w]{2,5}$/.test(sWord);
};

/*
 * Renders full URL (with protocol specified) as clickable link.
 * @param aBuffer - string array.
 * @param sWord - Parsed word to render as URL.
 * @param sSpace - Whitespace character(s) to render after the link.
 */
sap.suite.ui.commons.NoteTakerCard.prototype.wrapFullUrl = function(aBuffer, sWord, sSpace) {
    aBuffer.push('<a class="sapUiLnk" ');
    aBuffer.push('href = ' + '"' + jQuery.sap.encodeHTML(sWord) + '"');
    aBuffer.push(' target = "_blank"');
    aBuffer.push('>');
    aBuffer.push(jQuery.sap.encodeHTML(sWord));
    aBuffer.push('</a>' + sSpace);
};

/*
 * Renders short URL (without protocol specified) as clickable link.
 * @param aBuffer - string array.
 * @param sWord - Parsed word to render as URL.
 * @param sSpace - Whitespace character(s) to render after the link.
 */
sap.suite.ui.commons.NoteTakerCard.prototype._wrapShortUrl = function(aBuffer, sWord, sSpace) {
    aBuffer.push('<a class="sapUiLnk" ');
    aBuffer.push('href = ' + '"' + jQuery.sap.encodeHTML("http://" + sWord) + '"');
    aBuffer.push(' target = "_blank"');
    aBuffer.push('>');
    aBuffer.push(jQuery.sap.encodeHTML(sWord));
    aBuffer.push('</a>' + sSpace);
};

/*
 * Renders Email (with protocol specified) as clickable link.
 * @param aBuffer - string array.
 * @param sWord - Parsed word to render as email address.
 * @param sSpace - Whitespace character(s) to render after the link.
 */
sap.suite.ui.commons.NoteTakerCard.prototype._wrapEmail = function(aBuffer, sWord, sSpace) {
    aBuffer.push('<a class="sapUiLnk" ');
    aBuffer.push('href = "mailto:' + jQuery.sap.encodeHTML(sWord) + '"');
    aBuffer.push('>');
    aBuffer.push(jQuery.sap.encodeHTML(sWord));
    aBuffer.push('</a>' + sSpace);
};

sap.suite.ui.commons.NoteTakerCard.prototype._wrapBodyToDiv = function(sText) {
    return "<div class='sapSuiteUiCommonsNoteTakerCardBody'>" + sText + "</div>";
};

sap.suite.ui.commons.NoteTakerCard.prototype._wrapTagPanelToDiv = function(sText, bEditMode) {
    if(bEditMode) {
        return "<div class='suiteUiNtcOverlayTagPanelEditMode'>" + sText + "</div>";
    }
    else {
        return "<div class='suiteUiNtcOverlayTagPanelViewMode'>" + sText + "</div>";
    }
};

sap.suite.ui.commons.NoteTakerCard.prototype._handleEdit = function() {
    this._openOverlay(true);
};

/*
 * Prepares tag list as HTML code for rendering.
 */
sap.suite.ui.commons.NoteTakerCard.prototype._getFormattedTags = function() {
    var aBuffer = [];
    var aTags;

    if (this._oOverlayCard.isOpen()) {
        aTags = this._oOverlayCard._selectedTags;
    } else {
        aTags = this.getTags();
    }

    aBuffer.push("<div id='" + this.getId() + "-tag-list' class='sapSuiteUiCommonsNoteTakerCardTagList'>");

    if (aTags.length==0) {
        aBuffer.push(this._rb.getText("NOTETAKERCARD_LABEL_TAGS_EMPTY"));
    } else {
        aBuffer.push(this._rb.getText("NOTETAKERCARD_LABEL_TAGS_FULL") + ": ");
        var sTags = jQuery.sap.encodeHTML(aTags.sort().join(" "));
        aBuffer.push("<span title='" + sTags + "'>");
        aBuffer.push(sTags);
        aBuffer.push("</span>");
    }
    aBuffer.push("</div>");
    return aBuffer.join("");
};

sap.suite.ui.commons.NoteTakerCard.prototype._handleDelete = function(bCloseOverlay) {
    var that = this;
    sap.ui.commons.MessageBox.show(
            this._rb.getText("NOTETAKERCARD_CONFIRMATION_DELETE_MESSAGE"),
            sap.ui.commons.MessageBox.Icon.QUESTION,
            this._rb.getText("NOTETAKERCARD_CONFIRMATION_DELETE_TITLE"),
            [sap.ui.commons.MessageBox.Action.YES, sap.ui.commons.MessageBox.Action.NO],
            function(sResult) {
                if (sResult == sap.ui.commons.MessageBox.Action.YES) {
                    if (bCloseOverlay) {
                        that._closeOverlay();
                    }
                    that._handleDeleteClick();
                }
            },
            sap.ui.commons.MessageBox.Action.NO
    );
};

sap.suite.ui.commons.NoteTakerCard.prototype._handleDeleteClick = function() {
    var eData = {};
    eData.uid = this.getUid();
    eData.cardId = this.getId();
    eData.title = this.getHeader();
    eData.timestamp = this.getTimestamp();
    eData.body = this.getBody();
    eData.thumbUp = this.getThumbUp();
    eData.thumbDown = this.getThumbDown();

    this.fireDeleteNote(eData);
};

sap.suite.ui.commons.NoteTakerCard.prototype.setUid = function(sUid) {
    this.setProperty("uid", sUid, true); // no automatic rerendering
    return this;
};

sap.suite.ui.commons.NoteTakerCard.prototype._wrapThumbToDiv = function(sId) {
	var sClassName = null;
	var sTooltip = null;
	
	if (this.getThumbUp() && !this.getThumbDown()) {
		sClassName = "sapSuiteUiCommonsNoteTakerCardThumbUp";
		sTooltip = this._rb.getText("NOTETAKERCARD_ICON_THUMB_UP_TOOLTIP");
        this._oOverlayCard.removeStyleClass("suiteUiNtcNegativeCard");
        this._oOverlayCard.addStyleClass("suiteUiNtcPositiveCard");
	} else if (!this.getThumbUp() && this.getThumbDown()) {
		sClassName = "sapSuiteUiCommonsNoteTakerCardThumbDown";
		sTooltip = this._rb.getText("NOTETAKERCARD_ICON_THUMB_DOWN_TOOLTIP");
        this._oOverlayCard.removeStyleClass("suiteUiNtcPositiveCard");
        this._oOverlayCard.addStyleClass("suiteUiNtcNegativeCard");
	} else {
        this._oOverlayCard.removeStyleClass("suiteUiNtcPositiveCard");
        this._oOverlayCard.removeStyleClass("suiteUiNtcNegativeCard");
    }
	var aBuffer = [];
	aBuffer.push("<div");
	if (sId) {
		aBuffer.push(" id='");
		aBuffer.push(sId);
		aBuffer.push("'");
	}
	if (sClassName) {
		aBuffer.push(" class='");
		aBuffer.push(sClassName);
		aBuffer.push("'");

		aBuffer.push(" title='");
		aBuffer.push(sTooltip);
		aBuffer.push("'");
	}
	
	aBuffer.push("></div>");
	
	return aBuffer.join("");
};

sap.suite.ui.commons.NoteTakerCard.prototype._handleAddTag = function(sTag) {
    this._oOverlayCard._selectedTags = [];
    var aNewTags = sTag.split(new RegExp("\\s+"));

    var oTemp = {};

    for (var i = 0; i < aNewTags.length; i++) {
        if (aNewTags[i].length != 0) {
            oTemp[aNewTags[i]] = 0;
        }
    }

    for (var field in oTemp) {
        this._oOverlayCard._selectedTags.push(field);
    }

    // Update tag panel with new values
    var oTagPanel = sap.ui.getCore().byId(this.getId() + '-overlayTagPanel');
    oTagPanel.setContent(this._wrapTagPanelToDiv(this._getFormattedTags(), true));
    this._adjustTagButton();
};

sap.suite.ui.commons.NoteTakerCard.prototype._adjustTagButton = function() {
    var oTagButton = this._oOverlayCard._tagControls.tagButton;
    if (this._oOverlayCard._selectedTags.length) {
        oTagButton.addStyleClass("sapSuiteUiCommonsNoteTakerFeederButtonSelected");
    } else {
        oTagButton.removeStyleClass("sapSuiteUiCommonsNoteTakerFeederButtonSelected");
    }
};

sap.suite.ui.commons.NoteTakerCard.prototype._toggleTagPopup = function() {
    var aSelectedTags = this._oOverlayCard._selectedTags;

    if (this._bTagPopupOpen) {
    	jQuery.sap.byId(this.getId() + "-selectTag-panel").slideToggle();
        this._focusDefaultControl();
        this._bTagPopupOpen = false;
    } else {
        this._addTagsToListBox(this.getAllTags());
        jQuery.sap.byId(this.getId() + "-selectTag-panel").slideToggle();
        jQuery.sap.byId(this.getId() + "-inputTag").val(aSelectedTags.length == 0 ? "" : aSelectedTags.join(" ") + " ");
        this._oOverlayCard._tagControls.tagInput.focus();
        this._bTagPopupOpen = true;
    }
};

sap.suite.ui.commons.NoteTakerCard.prototype._focusDefaultControl = function() {
    this._oOverlayCard._tagControls.tagButton.focus();
};

sap.suite.ui.commons.NoteTakerCard.prototype._handleTagInputLive = function(oEvent) {
    var sLiveValue = oEvent.getParameter("liveValue");
    var aNewTags = sLiveValue.split(" ");
    var sCurrentlyEntering = aNewTags[aNewTags.length - 1];
    this._filterListBox(sCurrentlyEntering);
};

sap.suite.ui.commons.NoteTakerCard.prototype._filterListBox = function(sInput) {
    if (sInput.length == 0) {
        this._addTagsToListBox(this.getAllTags());
        return;
    }

    var aFiltered = jQuery.grep(this.getAllTags(), function(a){
        if (a.indexOf(sInput) >= 0) {
            return true;
        }
    });

    this._addTagsToListBox(aFiltered);
};

sap.suite.ui.commons.NoteTakerCard.prototype._addTagsToListBox = function(aTags) {
    var aListItems = jQuery.map(aTags, function(v, i) {
        return new sap.ui.core.ListItem({text: v});
    });

    this._oOverlayCard._tagControls.tagList.setItems(aListItems, true);
    this._oOverlayCard._tagControls.tagList.rerender();
};

sap.suite.ui.commons.NoteTakerCard.prototype._handleListSelect = function(oEvent) {
    var sSelectedTag = oEvent.getParameter("selectedItem").getText();
    var oTagInput = this._oOverlayCard._tagControls.tagInput;
    var sTemp = oTagInput.getValue();
    var aNewTags = sTemp.split(" ");

    aNewTags.pop();

    if(aNewTags.length == 0) {
        oTagInput.setValue(sSelectedTag + " ");
    } else {
        oTagInput.setValue(aNewTags.join(" ") + " " + sSelectedTag + " ");
    }

    this._oOverlayCard._tagControls.tagList.setSelectedIndex(-1);
    oTagInput.focus();
};

sap.suite.ui.commons.NoteTakerCard.prototype._destroyTagControls = function() {
    var tagControls = this._oOverlayCard._tagControls;
    for (var controlName in tagControls) {
        tagControls[controlName].destroy();
    }
    this._oOverlayCard._tagControls = {};
};

sap.suite.ui.commons.NoteTakerCard.prototype._createTagSelectorControl = function() {

    var oTagControls = this._oOverlayCard._tagControls;

    var oTagSelectorLayout = new sap.ui.commons.layout.VerticalLayout({
        id: this.getId() + "-selectTag-panel"
    });
    oTagSelectorLayout.addStyleClass("sapSuiteUiCommonsNoteTakerFeederSelectTagPanel");
    oTagSelectorLayout.addStyleClass("sapUiShd");
    oTagControls.tagSelectorLayout = oTagSelectorLayout;

    // Arrow
    oTagSelectorLayout.addContent(new sap.ui.core.HTML(this.getId() + "-selectTag-arrow", {
        content: "<div class='sapSuiteUiCommonsNoteTakerFeederSelectTagArrow' ></div>"
    }));

    // Title
    oTagSelectorLayout.addContent(new sap.ui.core.HTML(this.getId() + "-selectTag-header", {
        content: ["<div class='sapSuiteUiCommonsNoteTakerFeederSelectTagHeader' >",
                    this._rb.getText("NOTETAKERFEEDER_TOOLPOPUP_TITLE"),
                  "</div>"].join("")
    }));

    oTagSelectorLayout.addContent(oTagControls.tagInput);
    oTagSelectorLayout.addContent(oTagControls.tagList);

    //Buttons
    var oTagSelectorButtonsLayout = new sap.ui.commons.layout.HorizontalLayout();
    oTagSelectorButtonsLayout.addStyleClass("sapSuiteUiCommonsNoteTakerFeederSelectTagButtons");
    oTagSelectorButtonsLayout.addContent(oTagControls.tagApplyBtn);
    oTagSelectorButtonsLayout.addContent(oTagControls.tagCancelBtn);
    oTagSelectorLayout.addContent(oTagSelectorButtonsLayout);

    return oTagSelectorLayout;
};

sap.suite.ui.commons.NoteTakerCard.prototype._prepareAttachmentPanel = function(bIsInOverlay) {
    var sIdPrefix = bIsInOverlay ? "-overlay" : "";
    var sCssPrefix = bIsInOverlay ? "Overlay" : "";

    var sId = [this.getId(), sIdPrefix, "-attachmentPanel"].join("");
    var oCurrentControl = sap.ui.getCore().byId(sId);
    if (oCurrentControl) {
        oCurrentControl.destroy();
    }

    var oAttachmentLayout = new sap.ui.commons.layout.HorizontalLayout(sId);
    oAttachmentLayout.addStyleClass(["suiteUiNtc", sCssPrefix, "AttachmentPanel"].join(""));
    oAttachmentLayout.addContent( new sap.ui.core.HTML({content: "<div class='suiteUiNtcAttachmentIcon'></div>"}) );
    var oAttachmentLink = new sap.ui.commons.Link({
        id: [this.getId(), sIdPrefix, "-attachmentLink"].join(""),
        text: this.getAttachmentFilename(),
        tooltip: this._rb.getText("NOTETAKERCARD_LINK_ATTACHMENT_TOOLTIP"),
        press: this._handleAttachmentDownload,
        href: this.getAttachmentUrl()
    });
    oAttachmentLink._ntc = this;
    oAttachmentLayout.addContent( oAttachmentLink );
    return oAttachmentLayout;
};

sap.suite.ui.commons.NoteTakerCard.prototype._prepareOverlayLayouts = function() {

    var oTopSectionLayout = new sap.ui.commons.layout.VerticalLayout();
    
    // Header&Timestamp (left side)
    var oHeaderLeftSideLayout = new sap.ui.commons.layout.VerticalLayout();
    oHeaderLeftSideLayout.addStyleClass("sapSuiteUiCommonsNtcOverlayTitle");
    
    // Edit&Delete buttons (right side)
    var oHeaderRightSideLayout = new sap.ui.commons.layout.HorizontalLayout();
    oHeaderRightSideLayout.addStyleClass("sapSuiteUiCommonsNtcHeaderButtons");

	// Title, timestamp and Edit&Delete buttons
    var oHeaderLayout = new sap.ui.commons.layout.HorizontalLayout(this.getId() + '-overlayHeader', {
    	content:[oHeaderLeftSideLayout, oHeaderRightSideLayout]
    });
    oHeaderLayout.addStyleClass("sapSuiteUiCommonsNtcOverlayHeader");
    oTopSectionLayout.addContent(oHeaderLayout);

    // Toolbar
    var oToolbarLayout = new sap.ui.commons.layout.HorizontalLayout(this.getId() + '-overlayToolbar');
    oToolbarLayout.addStyleClass("suiteUiNtcToolbar");

    // Left side section
    var oToolbarLeftSideLayout = new sap.ui.commons.layout.HorizontalLayout();
    oToolbarLeftSideLayout.addStyleClass("suiteUiNtcOverlayToolbarLeftPanel");

    // Thumbs section of the toolbar
    var oToolbarRightSideLayout = new sap.ui.commons.layout.HorizontalLayout();
    oToolbarRightSideLayout.addStyleClass("suiteUiNtcOverlayToolbarRightPanel");

    // Construct toolbar
    oToolbarLayout.addContent(oToolbarLeftSideLayout);
    oToolbarLayout.addContent(oToolbarRightSideLayout);
    oTopSectionLayout.addContent(oToolbarLayout);
    this._oOverlayCard.addContent(oTopSectionLayout);

    // Body section
    var oBodySectionVerticalLayout = new sap.ui.layout.HorizontalLayout();
    oBodySectionVerticalLayout.addStyleClass("sapSuiteUiCommonsNoteTakerCardContent");
    
    // Buttons section
    var oButtonsHorizontalLayout = new sap.ui.commons.layout.HorizontalLayout(this.getId() + "-buttons");
    oButtonsHorizontalLayout.addStyleClass("sapSuiteUiCommonsNoteTakerCardOverlayButtonPanel");

    this._oOverlayCard.layouts = {
        topSection: oTopSectionLayout,
        headerLeft: oHeaderLeftSideLayout,
        headerRight: oHeaderRightSideLayout,
        toolbar: oToolbarLayout,
        toolbarLeft: oToolbarLeftSideLayout,
        toolbarRight: oToolbarRightSideLayout,
        body: oBodySectionVerticalLayout,
        buttons: oButtonsHorizontalLayout
    };
};

sap.suite.ui.commons.NoteTakerCard.prototype._prepareOverlayHeaderBtns = function(bEditMode) {
    var that = this;

    // Edit button
    var oEditButton = new sap.ui.commons.Button(this.getId() + "-editButton", {
    	tooltip : this._rb.getText("NOTETAKERCARD_BUTTON_EDIT_TOOLTIP"),
        press : function() {
            that._fnEdit();
        }
    });
    that._oOverlayCard.layouts.headerRight.addContent(oEditButton, 0);
    if (bEditMode) {
    	oEditButton.setEnabled(false);
        oEditButton.addStyleClass("sapSuiteUiCommonsNoteTakerCardEditButtonDsbl");
    }
    else {
    	oEditButton.setEnabled(true);
        oEditButton.addStyleClass("sapSuiteUiCommonsNoteTakerCardEditButton");
    }
    
    // Delete button
    var oDeleteButton = new sap.ui.commons.Button(this.getId() + "-deleteButton", {
        tooltip : this._rb.getText("NOTETAKERCARD_BUTTON_DELETE_TOOLTIP"),
        press : function() {
            that._handleDelete(true);
        }
    });
    oDeleteButton.addStyleClass("sapSuiteUiCommonsNoteTakerCardDeleteButton");
    that._oOverlayCard.layouts.headerRight.addContent(oDeleteButton, 1);
    
    // Timestamp
    var oTimeStamp = new sap.ui.commons.Label(this.getId() + "-overlayTimestamp", {
		text : that.getFormattedTimestamp()
		});
	oTimeStamp.addStyleClass("sapSuiteUiCommonsNoteTakerCardTimestamp");
	that._oOverlayCard.layouts.headerLeft.addContent(oTimeStamp, 1);
};

sap.suite.ui.commons.NoteTakerCard.prototype._prepareOverlayToolbar = function(bEditMode) {

    // Create tag list
    this._oOverlayCard._selectedTags = this.getTags();

    // Attachment panel
    if (this.getAttachmentFilename()!=="") {
        var oAttachmentPanel = this._prepareAttachmentPanel(true);
        this._oOverlayCard.layouts.topSection.addContent(oAttachmentPanel);

        this._oOverlayCard.layouts.body.addStyleClass("suiteUiNtcOverlayWithAttachment");
    } else {
        this._oOverlayCard.layouts.body.addStyleClass("suiteUiNtcOverlayWithoutAttachment");
    }
};


sap.suite.ui.commons.NoteTakerCard.prototype._prepareOverlayBody = function() {
    this._oOverlayCard.addContent(this._oOverlayCard.layouts.body);
};

sap.suite.ui.commons.NoteTakerCard.prototype._prepareOverlayButtons = function(bEditMode) {
    var that = this;

    // Close button
    var oCloseButton = new sap.ui.commons.Button(this.getId() + "-closeButton", {
        text : this._rb.getText("NOTETAKERCARD_BUTTON_CLOSE_OVERLAY"),
        tooltip : this._rb.getText("NOTETAKERCARD_BUTTON_CLOSE_OVERLAY_TOOLTIP"),
        press : function() {
        	that._handleOverlayCloseEvent(that._oOverlayCard);
        }
    });
    oCloseButton.addStyleClass("sapSuiteUiCommonsNoteTakerCardOverlayButtonClose");

    // Save button
    var oSaveButton = new sap.ui.commons.Button(this.getId() + "-saveButton", {
        text : this._rb.getText("NOTETAKERCARD_BUTTON_SAVE_TEXT"),
        tooltip : this._rb.getText("NOTETAKERCARD_BUTTON_SAVE_TOOLTIP"),
        press : function() {
          that._fnSave();
        }
    });
    oSaveButton.addStyleClass("sapSuiteUiCommonsNoteTakerCardOverlayButtonSave");
    that._oOverlayCard.layouts.buttons.addContent(oCloseButton, 0);
    that._oOverlayCard.layouts.buttons.addContent(oSaveButton, 1);

    if (bEditMode) {
    	oSaveButton.setEnabled(true);
        this._fnCreateInEditMode();
    }
    else {
    	oSaveButton.setEnabled(false);
        this._fnCreateInViewMode();
    }

    this._oOverlayCard.addContent(this._oOverlayCard.layouts.buttons);
};

// Adds components for the View mode of the overlay
sap.suite.ui.commons.NoteTakerCard.prototype._fnCreateInViewMode = function() {
    var that = this;
    that._oOverlayCard.bEditMode = false;

    //Title viewer section
    var oCardLabel = new sap.ui.commons.Label(that.getId() + "-overlayCardHeader", {
        text : that.getHeader()
    });
    oCardLabel.addStyleClass("sapSuiteUiCommonsNoteTakerCardTitle");
    that._oOverlayCard.layouts.headerLeft.insertContent(oCardLabel, 0);

    // Tag viewer section of the toolbar
    var oTagPanel = new sap.ui.core.HTML(that.getId() + '-overlayTagPanel');
    oTagPanel.setContent(that._wrapTagPanelToDiv(that._getFormattedTags(), that._oOverlayCard.bEditMode));

    that._oOverlayCard.layouts.toolbarLeft.addContent(oTagPanel);

    // Display thumb if any
    var oThumb = new sap.ui.core.HTML({
        id: that.getId() + "-overlay-thumb",
        content: that._wrapThumbToDiv()
    });
    that._oOverlayCard.layouts.toolbarRight.addContent(oThumb);

    // Display body
    var oCardBody = new sap.ui.core.HTML(that.getId() + "-overlayBody");
    oCardBody.setContent(that._wrapBodyToDiv(that._getFormattedBody()));
    oCardBody.addStyleClass("sapSuiteUiCommonsNoteTakerCardBody");
    that._oOverlayCard.layouts.body.addContent(oCardBody);

    // Display Save button in the correct state
    var oSaveButton = that._oOverlayCard.layouts.buttons.getContent()[1];
    oSaveButton.setEnabled(false);
    // Display Edit button in the correct state
    var oEditBtn = that._oOverlayCard.layouts.headerRight.getContent()[0];
    oEditBtn.setEnabled(true);
    oEditBtn.removeStyleClass("sapSuiteUiCommonsNoteTakerCardEditButtonDsbl");
    oEditBtn.addStyleClass("sapSuiteUiCommonsNoteTakerCardEditButton");
};

// Adds components for the Edit mode of the overlay
sap.suite.ui.commons.NoteTakerCard.prototype._fnCreateInEditMode = function() {
    var that = this;
    that._oOverlayCard.bEditMode = true;

    // Display editable title
	var oCardTitleField = new sap.ui.commons.TextField(that.getId() + "-overlayCardTitle", {
		maxLength : 50
	});
	oCardTitleField.setValue(that.getHeader());
	oCardTitleField.addStyleClass("sapSuiteUiCommonsNoteTakerCardTitle");
	var oTitleEdit = new sap.ui.commons.InPlaceEdit(that.getId() + "-overlayCardTitleEdit", {
		content: oCardTitleField,
		tooltip: that._rb.getText("NOTETAKERCARD_EDITFIELD_TITLE_TOOLTIP"),
		design: sap.ui.commons.TextViewDesign.H2,
		undoEnabled: false
	});
	oTitleEdit.addStyleClass("sapSuiteUiCommonsNtcdTitleEdit");
    that._oOverlayCard.layouts.headerLeft.insertContent(oTitleEdit, 0);

    // Tag viewer section of the toolbar
    var oTagPanel = new sap.ui.core.HTML(that.getId() + '-overlayTagPanel');
    oTagPanel.setContent(that._wrapTagPanelToDiv(that._getFormattedTags(), that._oOverlayCard.bEditMode));

    that._oOverlayCard.layouts.toolbarLeft.addContent(oTagPanel);

    // Create tag selector button
    var oTagButton = new sap.ui.commons.Button({
        id: that.getId() + "-tag-button",
        tooltip: that._rb.getText("NOTETAKERCARD_BUTTON_TAG_TOOLTIP"),
        press: function() {
            that._toggleTagPopup();
        }
    });
    oTagButton.addStyleClass("sapSuiteUiCommonsNoteTakerFeederTagButton");

    var oTagList = new sap.ui.commons.ListBox({
        id: that.getId() + "-tagListBox",
        visibleItems: 10,
        width: "100%",
        height: "194px",
        select: function(oEvent) {
            that._handleListSelect(oEvent);
        }
    });

    var oTagInput = new sap.ui.commons.TextField({
        id: that.getId() + "-inputTag",
        liveChange: function(oEvent) {
            that._handleTagInputLive(oEvent);
        }
    });
    oTagInput.onsapdown = function(oEvent) {
        oEvent.preventDefault();
        oEvent.stopPropagation();
        jQuery("#" + that.getId() + "-tagListBox li:eq(0)").focus();
    };

    var oCancelTagButton = new sap.ui.commons.Button({
        id: that.getId() + "-cancel-tags-button",
        text: that._rb.getText("NOTETAKERFEEDER_BUTTON_CANCEL_TAGS"),
        tooltip: that._rb.getText("NOTETAKERFEEDER_BUTTON_CANCEL_TAGS_TOOLTIP"),
        press: function() {
            that._toggleTagPopup();
        }
    });
    oCancelTagButton.addStyleClass("sapSuiteUiCommonsNoteTakerFeederCancelTagButton");

    var oAddTagButton = new sap.ui.commons.Button({
        id: that.getId() + "-add-tags-button",
        text: that._rb.getText("NOTETAKERFEEDER_BUTTON_ADD_TAGS"),
        tooltip: that._rb.getText("NOTETAKERFEEDER_BUTTON_ADD_TAGS_TOOLTIP"),
        press: function() {
            that._handleAddTag(oTagInput.getValue());
            oTagButton.rerender();
            that._toggleTagPopup();
        }
    });

    // Store tag controls
    that._oOverlayCard._tagControls = {
        tagButton: oTagButton,
        tagList: oTagList,
        tagInput: oTagInput,
        tagCancelBtn: oCancelTagButton,
        tagApplyBtn: oAddTagButton
    };

    that._oOverlayCard.addContent(that._createTagSelectorControl());

    // Create thumb up button
    var oThumbUpButton = new sap.ui.commons.Button({
        id: that.getId() + "-overlay-thumb-up-button",
        press: function(e){
            that._oOverlayCard.bThumbUp = !that._oOverlayCard.bThumbUp;
            if (that._oOverlayCard.bThumbUp) {
                that._oOverlayCard.bThumbDown = false;
            }

            fnSetThumbsView();
        },
        tooltip : that._rb.getText("NOTETAKERFEEDER_BUTTON_THUMB_UP_TOOLTIP")
    });
    oThumbUpButton.addStyleClass("sapSuiteUiCommonsNoteTakerThumbUpBtn");

    // Create thumb down button
    var oThumbDownButton = new sap.ui.commons.Button({
        id: that.getId() + "-overlay-thumb-down-button",
        press: function(e){
            that._oOverlayCard.bThumbDown = !that._oOverlayCard.bThumbDown;
            if (that._oOverlayCard.bThumbDown) {
                that._oOverlayCard.bThumbUp = false;
            }

            fnSetThumbsView();
        },
        tooltip : that._rb.getText("NOTETAKERFEEDER_BUTTON_THUMB_DOWN_TOOLTIP")
    });
    oThumbDownButton.addStyleClass("sapSuiteUiCommonsNoteTakerThumbDownBtn");

    // Thumb buttons adjustment
    var fnSetThumbsView = function() {
        if (that._oOverlayCard.bThumbUp) {
            oThumbUpButton.addStyleClass("sapSuiteUiCommonsNoteTakerCardSelectedBtn");
            that._oOverlayCard.addStyleClass("suiteUiNtcPositiveCard");
        } else {
            oThumbUpButton.removeStyleClass("sapSuiteUiCommonsNoteTakerCardSelectedBtn");
            that._oOverlayCard.removeStyleClass("suiteUiNtcPositiveCard");
        }

        if (that._oOverlayCard.bThumbDown) {
            oThumbDownButton.addStyleClass("sapSuiteUiCommonsNoteTakerCardSelectedBtn");
            that._oOverlayCard.addStyleClass("suiteUiNtcNegativeCard");
        } else {
            oThumbDownButton.removeStyleClass("sapSuiteUiCommonsNoteTakerCardSelectedBtn");
            that._oOverlayCard.removeStyleClass("suiteUiNtcNegativeCard");
        }
        
        jQuery.sap.byId(oThumbUpButton.getId()).attr("aria-pressed", that._oOverlayCard.bThumbUp);
        jQuery.sap.byId(oThumbDownButton.getId()).attr("aria-pressed", that._oOverlayCard.bThumbDown);
    };

    fnSetThumbsView();

    // Adding toolbar elements
    that._oOverlayCard.layouts.toolbarLeft.insertContent(oTagButton, 0);
    that._oOverlayCard.layouts.toolbarRight.addContent(oThumbUpButton);
    that._oOverlayCard.layouts.toolbarRight.addContent(oThumbDownButton);

    // Display editable body
    var oSaveButton = that._oOverlayCard.layouts.buttons.getContent()[1];
    oSaveButton.setEnabled(true);
    var oCardBody = new sap.ui.commons.TextArea(that.getId() + "-overlayBody" ,{
    	required: true,
        liveChange : function(e) {
            var sEnteredText = e.getParameter("liveValue");
            var bEnabled = (sEnteredText != null) && !/^\s*$/.test(sEnteredText);

            if (bEnabled !== oSaveButton.getEnabled()) {
                oSaveButton.setEnabled(bEnabled);
            }
        }
    });
    oCardBody.setValue(that.getBody());
    oCardBody.addStyleClass("sapSuiteUiCommonsNoteTakerCardBody");
    that._oOverlayCard.layouts.body.addContent(oCardBody);
    that._oOverlayCard.layouts.body.addContent(new sap.ui.commons.Label({required: true}).addStyleClass("sapSuiteRequiredLbl"));
    
    // Display Edit button in the correct state
    var oEditBtn = that._oOverlayCard.layouts.headerRight.getContent()[0];
    oEditBtn.setEnabled(false);
    oEditBtn.removeStyleClass("sapSuiteUiCommonsNoteTakerCardEditButton");
    oEditBtn.addStyleClass("sapSuiteUiCommonsNoteTakerCardEditButtonDsbl");
    
};

sap.suite.ui.commons.NoteTakerCard.prototype._fnSave = function() {
    var that = this;
    //._ntc;
    var oTitleEdit = that._oOverlayCard.layouts.headerLeft.getContent()[0];
    var oCardTitleField = oTitleEdit.getContent();
    var oCardBody = that._oOverlayCard.layouts.body.getContent()[0];

    if (oCardBody.getValue()) {
        if(!this.getBinding("body")) {
            that.setHeader(oCardTitleField.getValue());
            that.setBody(oCardBody.getValue());
            that.setTimestamp(new Date());

            that.setThumbUp(that._oOverlayCard.bThumbUp);
            that.setThumbDown(that._oOverlayCard.bThumbDown);
            that.setTags(that._oOverlayCard._selectedTags);
        }

        var eData = {};
        eData.uid = that.getUid();
        eData.title = oCardTitleField.getValue();
        eData.body = oCardBody.getValue();
        eData.timestamp = new Date();
        eData.thumbUp = that._oOverlayCard.bThumbUp;
        eData.thumbDown = that._oOverlayCard.bThumbDown;
        eData.tags = that._oOverlayCard._selectedTags;
        that.fireEditNote(eData);

        that._oOverlayCard.layouts.headerLeft.removeContent(oTitleEdit);
        oTitleEdit.destroy();
        oCardTitleField.destroy();
        that._oOverlayCard.layouts.body.removeAllContent();
        oCardBody.destroy();

        that._destroyTagControls();
        that._oOverlayCard.layouts.toolbarLeft.destroyContent();
        that._oOverlayCard.layouts.toolbarRight.destroyContent();

        that._fnCreateInViewMode();

        jQuery.sap.byId(that.getId() + "-overlayTimestamp").html(that.getFormattedTimestamp());
        jQuery.sap.byId(that.getId() + "-overlay-close").focus();
    } else {
        //TODO oEditSaveButton.setEnabled(false);
    }
};

sap.suite.ui.commons.NoteTakerCard.prototype._fnEdit = function() {
    var that = this;
    var oCardLabel = that._oOverlayCard.layouts.headerLeft.getContent()[0];
    var oCardBody = that._oOverlayCard.layouts.body.getContent()[0];

    that._oOverlayCard.layouts.topSection.removeContent(oCardLabel);
    oCardLabel.destroy();
    that._oOverlayCard.layouts.body.removeContent(oCardBody);
    oCardBody.destroy();
    that._oOverlayCard.layouts.toolbarLeft.destroyContent();
    that._oOverlayCard.layouts.toolbarRight.destroyContent();

    that._fnCreateInEditMode();

    that._oOverlayCard.layouts.topSection.rerender();
    //set focus to text area. render it first
    that._oOverlayCard.layouts.body.rerender();
    jQuery.sap.focus(jQuery.sap.domById(that.getId() + "-overlayBody"));
};

sap.suite.ui.commons.NoteTakerCard.prototype._handleAttachmentDownload = function() {
    var that = this._ntc;

    var eData = {};
    eData.uid = that.getUid();
    eData.url = that.getAttachmentUrl();
    eData.filename = that.getAttachmentFilename();
    
    that.fireAttachmentClick(eData);
};
