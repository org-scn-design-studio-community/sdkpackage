/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.NoteTaker.
jQuery.sap.declare("sap.suite.ui.commons.NoteTaker");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new NoteTaker.
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
 * <li>{@link #getVisibleNotes visibleNotes} : int (default: 2)</li>
 * <li>{@link #getCardViewAllTrigger cardViewAllTrigger} : int (default: 1800)</li>
 * <li>{@link #getFilterCriteria filterCriteria} : object</li>
 * <li>{@link #getAttachmentUploadUrl attachmentUploadUrl} : string</li>
 * <li>{@link #getAttachmentName attachmentName} : string (default: 'attachment')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCards cards} : sap.suite.ui.commons.NoteTakerCard[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.NoteTaker#event:addCard addCard} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.NoteTaker#event:deleteCard deleteCard} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.NoteTaker#event:editCard editCard} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.NoteTaker#event:attachmentSelect attachmentSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.NoteTaker#event:attachmentUploadComplete attachmentUploadComplete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.NoteTaker#event:attachmentDelete attachmentDelete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.NoteTaker#event:attachmentClick attachmentClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control allows you to create and store your notes for further reference.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.NoteTaker
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.NoteTaker", { metadata : {

	publicMethods : [
		// methods
		"getAllTags", "setNextCardUid", "uploadAttachment", "setAttachmentData", "handleAttachmentUploadFail", "setNextCardAttachmentUrl"
	],
	library : "sap.suite.ui.commons",
	properties : {
		"visibleNotes" : {type : "int", group : "Misc", defaultValue : 2},
		"cardViewAllTrigger" : {type : "int", group : "Misc", defaultValue : 1800},
		"filterCriteria" : {type : "object", group : "Misc", defaultValue : null},
		"attachmentUploadUrl" : {type : "string", group : "Misc", defaultValue : null},
		"attachmentName" : {type : "string", group : "Misc", defaultValue : 'attachment'}
	},
	aggregations : {
		"cards" : {type : "sap.suite.ui.commons.NoteTakerCard", multiple : true, singularName : "card"}, 
		"carousel" : {type : "sap.ui.commons.Carousel", multiple : false, visibility : "hidden"}
	},
	events : {
		"addCard" : {}, 
		"deleteCard" : {}, 
		"editCard" : {}, 
		"attachmentSelect" : {}, 
		"attachmentUploadComplete" : {}, 
		"attachmentDelete" : {}, 
		"attachmentClick" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.NoteTaker with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.NoteTaker.extend
 * @function
 */

sap.suite.ui.commons.NoteTaker.M_EVENTS = {'addCard':'addCard','deleteCard':'deleteCard','editCard':'editCard','attachmentSelect':'attachmentSelect','attachmentUploadComplete':'attachmentUploadComplete','attachmentDelete':'attachmentDelete','attachmentClick':'attachmentClick'};


/**
 * Getter for property <code>visibleNotes</code>.
 * Number of notes to display.
 *
 * Default value is <code>2</code>
 *
 * @return {int} the value of property <code>visibleNotes</code>
 * @public
 * @name sap.suite.ui.commons.NoteTaker#getVisibleNotes
 * @function
 */

/**
 * Setter for property <code>visibleNotes</code>.
 *
 * Default value is <code>2</code> 
 *
 * @param {int} iVisibleNotes  new value for property <code>visibleNotes</code>
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#setVisibleNotes
 * @function
 */


/**
 * Getter for property <code>cardViewAllTrigger</code>.
 * The View All link appears in the Note Taker card when length of a card body text exceeds the specified value. The updated value of this property is not applied to the existing cards.
 *
 * Default value is <code>1800</code>
 *
 * @return {int} the value of property <code>cardViewAllTrigger</code>
 * @public
 * @name sap.suite.ui.commons.NoteTaker#getCardViewAllTrigger
 * @function
 */

/**
 * Setter for property <code>cardViewAllTrigger</code>.
 *
 * Default value is <code>1800</code> 
 *
 * @param {int} iCardViewAllTrigger  new value for property <code>cardViewAllTrigger</code>
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#setCardViewAllTrigger
 * @function
 */


/**
 * Getter for property <code>filterCriteria</code>.
 * A composite object containing criteria for filtering cards in the Note Taker.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>filterCriteria</code>
 * @public
 * @name sap.suite.ui.commons.NoteTaker#getFilterCriteria
 * @function
 */

/**
 * Setter for property <code>filterCriteria</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oFilterCriteria  new value for property <code>filterCriteria</code>
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#setFilterCriteria
 * @function
 */


/**
 * Getter for property <code>attachmentUploadUrl</code>.
 * Defines a path on the server where the attached files are uploaded.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>attachmentUploadUrl</code>
 * @public
 * @name sap.suite.ui.commons.NoteTaker#getAttachmentUploadUrl
 * @function
 */

/**
 * Setter for property <code>attachmentUploadUrl</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAttachmentUploadUrl  new value for property <code>attachmentUploadUrl</code>
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#setAttachmentUploadUrl
 * @function
 */


/**
 * Getter for property <code>attachmentName</code>.
 * The attachment property name for identification on the server side after sending data to the server.
 *
 * Default value is <code>attachment</code>
 *
 * @return {string} the value of property <code>attachmentName</code>
 * @public
 * @name sap.suite.ui.commons.NoteTaker#getAttachmentName
 * @function
 */

/**
 * Setter for property <code>attachmentName</code>.
 *
 * Default value is <code>attachment</code> 
 *
 * @param {string} sAttachmentName  new value for property <code>attachmentName</code>
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#setAttachmentName
 * @function
 */


/**
 * Getter for aggregation <code>cards</code>.<br/>
 * This aggregation allows you to add note cards to the Note Taker and remove them from the Note Taker.
 * 
 * @return {sap.suite.ui.commons.NoteTakerCard[]}
 * @public
 * @name sap.suite.ui.commons.NoteTaker#getCards
 * @function
 */


/**
 * Inserts a card into the aggregation named <code>cards</code>.
 *
 * @param {sap.suite.ui.commons.NoteTakerCard}
 *          oCard the card to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the card should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the card is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the card is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#insertCard
 * @function
 */

/**
 * Adds some card <code>oCard</code> 
 * to the aggregation named <code>cards</code>.
 *
 * @param {sap.suite.ui.commons.NoteTakerCard}
 *            oCard the card to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#addCard
 * @function
 */

/**
 * Removes an card from the aggregation named <code>cards</code>.
 *
 * @param {int | string | sap.suite.ui.commons.NoteTakerCard} vCard the card to remove or its index or id
 * @return {sap.suite.ui.commons.NoteTakerCard} the removed card or null
 * @public
 * @name sap.suite.ui.commons.NoteTaker#removeCard
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>cards</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.NoteTakerCard[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.NoteTaker#removeAllCards
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.NoteTakerCard</code> in the aggregation named <code>cards</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.NoteTakerCard}
 *            oCard the card whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.NoteTaker#indexOfCard
 * @function
 */
	

/**
 * Destroys all the cards in the aggregation 
 * named <code>cards</code>.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#destroyCards
 * @function
 */


/**
 * The event is fired when a new card is added if no data binding is available.
 * If data binding is available, the event is fired to notify a developer to add an element to the model.
 *
 * @name sap.suite.ui.commons.NoteTaker#addCard
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.title The title of the note to be added.
 * @param {string} oControlEvent.getParameters.body The text of the note to be added.
 * @param {object} oControlEvent.getParameters.timestamp The timestamp of the note to be added.
 * @param {int} oControlEvent.getParameters.viewAllTrigger The View All link appears in the Note Taker card when length of a body text exceeds the specified value.
 * @param {boolean} oControlEvent.getParameters.thumbUp Indicates positive information for a new card.
 * @param {boolean} oControlEvent.getParameters.thumbDown Indicates negative information for a new card.
 * @param {string} oControlEvent.getParameters.attachmentFilename Stores the name of the file attached to the card.
 * @param {string} oControlEvent.getParameters.uid The unique ID if available.
 * @param {string} oControlEvent.getParameters.attachmentUrl Stores the URL of the file attached to the card.
 * @param {sap.suite.ui.commons.NoteTakerCard} oControlEvent.getParameters.card A newly created card if no data binding is available. If data binding is available, this parameter is empty.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'addCard' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself. 
 *  
 * The event is fired when a new card is added if no data binding is available.
 * If data binding is available, the event is fired to notify a developer to add an element to the model.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#attachAddCard
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'addCard' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#detachAddCard
 * @function
 */

/**
 * Fire event addCard to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'title' of type <code>string</code> The title of the note to be added.</li>
 * <li>'body' of type <code>string</code> The text of the note to be added.</li>
 * <li>'timestamp' of type <code>object</code> The timestamp of the note to be added.</li>
 * <li>'viewAllTrigger' of type <code>int</code> The View All link appears in the Note Taker card when length of a body text exceeds the specified value.</li>
 * <li>'thumbUp' of type <code>boolean</code> Indicates positive information for a new card.</li>
 * <li>'thumbDown' of type <code>boolean</code> Indicates negative information for a new card.</li>
 * <li>'attachmentFilename' of type <code>string</code> Stores the name of the file attached to the card.</li>
 * <li>'uid' of type <code>string</code> The unique ID if available.</li>
 * <li>'attachmentUrl' of type <code>string</code> Stores the URL of the file attached to the card.</li>
 * <li>'card' of type <code>sap.suite.ui.commons.NoteTakerCard</code> A newly created card if no data binding is available. If data binding is available, this parameter is empty.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NoteTaker#fireAddCard
 * @function
 */


/**
 * The event is fired when a new card is deleted if no data binding is available.
 * If data binding is available, the event is fired to notify a developer to delete the element from the model.
 *
 * @name sap.suite.ui.commons.NoteTaker#deleteCard
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.title The title of the card to be deleted.
 * @param {string} oControlEvent.getParameters.body The text of the card to be deleted.
 * @param {string} oControlEvent.getParameters.timestamp The timestamp of the card to be deleted.
 * @param {string} oControlEvent.getParameters.uid The unique ID that was set by an application developer.
 * @param {boolean} oControlEvent.getParameters.thumbUp Indicates positive information for the deleted card.
 * @param {boolean} oControlEvent.getParameters.thumbDown Indicates negative information for the deleted card.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'deleteCard' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself. 
 *  
 * The event is fired when a new card is deleted if no data binding is available.
 * If data binding is available, the event is fired to notify a developer to delete the element from the model.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#attachDeleteCard
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'deleteCard' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#detachDeleteCard
 * @function
 */

/**
 * Fire event deleteCard to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'title' of type <code>string</code> The title of the card to be deleted.</li>
 * <li>'body' of type <code>string</code> The text of the card to be deleted.</li>
 * <li>'timestamp' of type <code>string</code> The timestamp of the card to be deleted.</li>
 * <li>'uid' of type <code>string</code> The unique ID that was set by an application developer.</li>
 * <li>'thumbUp' of type <code>boolean</code> Indicates positive information for the deleted card.</li>
 * <li>'thumbDown' of type <code>boolean</code> Indicates negative information for the deleted card.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NoteTaker#fireDeleteCard
 * @function
 */


/**
 * The event is fired when a new card has been edited.
 *
 * @name sap.suite.ui.commons.NoteTaker#editCard
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.title The title of the edited card.
 * @param {string} oControlEvent.getParameters.body A new text of the edited card.
 * @param {string} oControlEvent.getParameters.timestamp A new timestamp of the edited card.
 * @param {string} oControlEvent.getParameters.uid A unique ID that was set by an application developer.
 * @param {boolean} oControlEvent.getParameters.thumbUp Indicates positive information for the edited card.
 * @param {boolean} oControlEvent.getParameters.thumbDown Indicates negative information for the edited card.
 * @param {object} oControlEvent.getParameters.tags Updated array of the String type tags applied to the card during editing.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'editCard' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself. 
 *  
 * The event is fired when a new card has been edited.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#attachEditCard
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'editCard' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#detachEditCard
 * @function
 */

/**
 * Fire event editCard to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'title' of type <code>string</code> The title of the edited card.</li>
 * <li>'body' of type <code>string</code> A new text of the edited card.</li>
 * <li>'timestamp' of type <code>string</code> A new timestamp of the edited card.</li>
 * <li>'uid' of type <code>string</code> A unique ID that was set by an application developer.</li>
 * <li>'thumbUp' of type <code>boolean</code> Indicates positive information for the edited card.</li>
 * <li>'thumbDown' of type <code>boolean</code> Indicates negative information for the edited card.</li>
 * <li>'tags' of type <code>object</code> Updated array of the String type tags applied to the card during editing.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NoteTaker#fireEditCard
 * @function
 */


/**
 * The event is fired when the value of attached file has been changed.
 *
 * @name sap.suite.ui.commons.NoteTaker#attachmentSelect
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'attachmentSelect' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself. 
 *  
 * The event is fired when the value of attached file has been changed.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#attachAttachmentSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'attachmentSelect' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#detachAttachmentSelect
 * @function
 */

/**
 * Fire event attachmentSelect to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'filename' of type <code>string</code> A name of the attached file.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NoteTaker#fireAttachmentSelect
 * @function
 */


/**
 * Fire event uploadComplete to attached listeners.
 *
 * @name sap.suite.ui.commons.NoteTaker#attachmentUploadComplete
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.response The response message of the String type that comes from the server. On the server side this response has to be put within the "body" tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.
 * @param {string} oControlEvent.getParameters.uid The unique ID of the card.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'attachmentUploadComplete' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself. 
 *  
 * Fire event uploadComplete to attached listeners.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#attachAttachmentUploadComplete
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'attachmentUploadComplete' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#detachAttachmentUploadComplete
 * @function
 */

/**
 * Fire event attachmentUploadComplete to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'response' of type <code>string</code> The response message of the String type  that comes from the server. On the server side this response has to be put within the "body" tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.</li>
 * <li>'uid' of type <code>string</code> The unique ID of the card.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NoteTaker#fireAttachmentUploadComplete
 * @function
 */


/**
 * The event is fired, when user deletes the attached file.
 *
 * @name sap.suite.ui.commons.NoteTaker#attachmentDelete
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @param {string} oControlEvent.getParameters.uid The unique ID of the card.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'attachmentDelete' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself. 
 *  
 * The event is fired, when user deletes the attached file.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#attachAttachmentDelete
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'attachmentDelete' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#detachAttachmentDelete
 * @function
 */

/**
 * Fire event attachmentDelete to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'filename' of type <code>string</code> A name of the attached file.</li>
 * <li>'uid' of type <code>string</code> The unique ID of the card.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NoteTaker#fireAttachmentDelete
 * @function
 */


/**
 * The event is fired when a user presses the attachment link.
 *
 * @name sap.suite.ui.commons.NoteTaker#attachmentClick
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.uid The unique ID of the card.
 * @param {string} oControlEvent.getParameters.isCardAttachment If true, a user chooses the attachment in the Note card. If false, a user chooses the attachment in the Feeder card.
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'attachmentClick' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself. 
 *  
 * The event is fired when a user presses the attachment link.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#attachAttachmentClick
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'attachmentClick' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTaker#detachAttachmentClick
 * @function
 */

/**
 * Fire event attachmentClick to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'uid' of type <code>string</code> The unique ID of the card.</li>
 * <li>'isCardAttachment' of type <code>string</code> If true, a user chooses the attachment in the Note card. If false, a user chooses the attachment in the Feeder card.</li>
 * <li>'filename' of type <code>string</code> A name of the attached file.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NoteTaker#fireAttachmentClick
 * @function
 */


/**
 * Returns tags from all cards in the control.
 *
 * @name sap.suite.ui.commons.NoteTaker#getAllTags
 * @function
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Sets an unique ID of the next card.
 *
 * @name sap.suite.ui.commons.NoteTaker#setNextCardUid
 * @function
 * @param {string} sSUid
 * @type sap.suite.ui.commons.NoteTaker
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Uploads the attached file to the server. Exposed from the FileUploader control.
 *
 * @name sap.suite.ui.commons.NoteTaker#uploadAttachment
 * @function
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Additional data that is sent to the back end service. Data will be transmitted as a value of a hidden input where the name is derived from the name property with suffix -data. Exposed from the FileUploader control.
 *
 * @name sap.suite.ui.commons.NoteTaker#setAttachmentData
 * @function
 * @param {string} sAdditionalData
 *         Actual additional data.
 * @type sap.suite.ui.commons.NoteTaker
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Must be called when the file upload to the server fail and it is needed to remove the attachment panel from the Feeder card.
 *
 * @name sap.suite.ui.commons.NoteTaker#handleAttachmentUploadFail
 * @function
 * @type sap.suite.ui.commons.NoteTaker
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Sets a URL for downloading the attachment. It must be called in the attachmentUploadComplete event handler.
 *
 * @name sap.suite.ui.commons.NoteTaker#setNextCardAttachmentUrl
 * @function
 * @param {string} sSUrl
 *         The download URL of attachment for a card that will be added when a user chooses the Add button.
 * @type sap.suite.ui.commons.NoteTaker
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */

// Start of sap/suite/ui/commons/NoteTaker.js
jQuery.sap.require("sap.ui.commons.Carousel");
jQuery.sap.require("sap.ui.commons.SearchField");

(function() {

   /**
    * The NoteTaker initialization hook.
    * Creates a carousel control initializing it with required parameters.
    * Adds NoteTakerFeeder to the created carousel control.
    * 
    * @private
    */ 
    sap.suite.ui.commons.NoteTaker.prototype.init = function() {
        this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
        this._bFilterTagPopupOpen = false;
        this._bSearchPopupOpen = false;
        var that = this;

        this._carousel = new sap.ui.commons.Carousel({
            id: this.getId() + "-carousel",
            height: "540px"
        });

        this.setAggregation("carousel", this._carousel);

        this._carousel.addContent(this._createFeederAndAddToThis());

        this._notFilteredCards = [];

        this._oHomeButton = new sap.ui.commons.Button({
            id: this.getId() + "-home-button",
            tooltip: this._rb.getText("NOTETAKER_BUTTON_HOME_TOOLTIP"),
            press: function() {
                that._handleHomeButton();
            }
        });
        this._oHomeButton.addStyleClass("sapSuiteUiCommonsNoteTakerHomeButton");

        this._oFilterTagButton = new sap.ui.commons.Button({
            id: this.getId() + "-filterTag-button",
            tooltip: this._rb.getText("NOTETAKER_BUTTON_FILTER_TAG_TOOLTIP"),
            press : function() {
                that._toggleFilterTagPopup();
            }
        });
        this._oFilterTagButton.addStyleClass("sapSuiteUiCommonsNoteTakerFilterTagButton");

        this._oFilterThumbUpButton = new sap.ui.commons.Button({
            id: this.getId() + "-filter-thumb-up-button",
            tooltip : this._rb.getText("NOTETAKER_BUTTON_FILTER_THUMB_UP_TOOLTIP"),
            press: function() {
                that._handleFilteringByThumbUp();
            }
        });
        this._oFilterThumbUpButton.addStyleClass("sapSuiteUiCommonsNoteTakerFilterThumbUpButton");

        this._oFilterThumbDownButton = new sap.ui.commons.Button({
            id: this.getId() + "-filter-thumb-down-button",
            tooltip : this._rb.getText("NOTETAKER_BUTTON_FILTER_THUMB_DOWN_TOOLTIP"),
            press: function() {
                that._handleFilteringByThumbDown();
            }
        });
        this._oFilterThumbDownButton.addStyleClass("sapSuiteUiCommonsNoteTakerFilterThumbDownButton");

        this._oFilterAllButton = new sap.ui.commons.Button({
            id: this.getId() + "-filterAll-button",
            text: this._rb.getText("NOTETAKER_BUTTON_FILTER_ALL_TEXT"),
            tooltip: this._rb.getText("NOTETAKER_BUTTON_FILTER_ALL_TOOLTIP"),
            press: function() {
                that._handleResetFilters();
            }
        });
        this._oFilterAllButton.addStyleClass("sapSuiteUiCommonsNoteTakerFilterAllButton");

        this._oSearchButton = new sap.ui.commons.Button({
            id: this.getId() + "-filter-search-button",
            tooltip: this._rb.getText("NOTETAKER_BUTTON_SEARCH_TOOLTIP"),
            press: function() {
                that._handleSearchPopup();
            }
        });
        this._oSearchButton.addStyleClass("sapSuiteUiCommonsNoteTakerSearchBtn");
        
        this._oFilterSearchField = new sap.ui.commons.SearchField({
            id: this.getId() + "-filter-searchField",
            tooltip: this._rb.getText("NOTETAKER_BUTTON_SEARCH_TOOLTIP"),
            showListExpander: false,
            enableFilterMode: true,
            enableListSuggest: false,
            search: function(oEvent) {
                that._handleSearchingByText(oEvent.getParameter("query"));
            }
        });
        this._oFilterSearchField.addStyleClass("suiteUiNtFilterSearchField");

        this._oFilterTagList = new sap.ui.commons.ListBox({
            id: this.getId() + "-filterTag-listBox",
            allowMultiSelect: true,
            visibleItems: 10,
            width: "100%",
            height: "194px"
        });

        this._oCancelFilterTagButton = new sap.ui.commons.Button({
            id: this.getId() + "-cancel-filterTags-button",
            text: this._rb.getText("NOTETAKERFEEDER_BUTTON_CANCEL_TAGS"),
            tooltip: this._rb.getText("NOTETAKERFEEDER_BUTTON_CANCEL_TAGS_TOOLTIP"),
            press: function() {
                that._toggleFilterTagPopup();
            }
        });
        this._oCancelFilterTagButton.addStyleClass("sapSuiteUiCommonsNoteTakerCancelFilterTagButton");
        
        this._oCancelFilterTagButton.onfocusout = function(oEvent) {
        	that._oFilterTagList.focus();
        }
        
        this._oApplyFilterTagButton = new sap.ui.commons.Button({
            id: this.getId() + "-apply-filterTags-button",
            text: this._rb.getText("NOTETAKER_BUTTON_FILTER_TAG_APPLY_TEXT"),
            tooltip: this._rb.getText("NOTETAKER_BUTTON_FILTER_TAG_APPLY_TOOLTIP"),
            press: function() {
                that._toggleFilterTagPopup();
                setTimeout( function() {
                    that._handleFilteringByTags();
                }, 400);
            }
        });
    };

    /**
     * Required adaptations before rendering.
     * 
     * @private
     */
    sap.suite.ui.commons.NoteTaker.prototype.onBeforeRendering = function() {
        this._carousel.setVisibleItems(this.getVisibleNotes());
        this._adjustFilteringButtonsStyle();
        this._feeder.setAttachmentName(this.getAttachmentName());
    };

    /**
     * Required adaptations after rendering.
     *
     * @private
     */
    sap.suite.ui.commons.NoteTaker.prototype.onAfterRendering = function() {
        this._adjustPopupState();
        if(!this.getAttachmentUploadUrl()) {
            jQuery.sap.byId(this._feeder._oAddAttachButton.getId()).hide();
        };
        
        jQuery.sap.byId(this._oFilterThumbUpButton.getId()).attr("aria-pressed", this.getFilterCriteria() && this.getFilterCriteria().thumbUp);
        jQuery.sap.byId(this._oFilterThumbDownButton.getId()).attr("aria-pressed", this.getFilterCriteria() && this.getFilterCriteria().thumbDown);
    };

    /**
     * Destroys this instance of NoteTaker.
     * 
     * @private
     */
    sap.suite.ui.commons.NoteTaker.prototype.exit = function() {
        this.destroyAggregation("carousel", true);
        this._carousel = null;
        this._oHomeButton.destroy();
        this._oHomeButton = null;
        this._oFilterTagButton.destroy();
        this._oFilterTagButton = null;
        this._oFilterThumbUpButton.destroy();
        this._oFilterThumbUpButton = null;
        this._oFilterThumbDownButton.destroy();
        this._oFilterThumbDownButton = null;
        this._oFilterAllButton.destroy();
        this._oFilterAllButton = null;
        this._oFilterTagList.destroy();
        this._oFilterTagList = null;
        this._oCancelFilterTagButton.destroy();
        this._oCancelFilterTagButton = null;
        this._oApplyFilterTagButton.destroy();
        this._oApplyFilterTagButton = null;
        this._oFilterSearchField.destroy();
        this._oFilterSearchField = null;
        this._oSearchButton.destroy();
        this._oSearchButton = null;
    };
    
    /**
    * Handles the Add button press event generated by NoteTakerFeeder.
    *
    * @param {jQuery.EventObject} oEvent The event object
    *
    * @private
    */    
    sap.suite.ui.commons.NoteTaker.prototype._handleAddNote = function(oEvent) {
        var title = oEvent.getParameter("title");
        var body = oEvent.getParameter("body");
        var timestamp = oEvent.getParameter("timestamp");
        var tags = oEvent.getParameter("tags");
        var thumbUp = oEvent.getParameter("thumbUp");
        var thumbDown = oEvent.getParameter("thumbDown");
        var attachmentFilename = oEvent.getParameter("attachmentFilename");
        
        var eData = {};
        eData.title = title;
        eData.body = body;
        eData.timestamp = timestamp;
        eData.viewAllTrigger = this.getCardViewAllTrigger();
        eData.tags = tags;
        eData.thumbUp = thumbUp;
        eData.thumbDown = thumbDown;
        eData.attachmentFilename = attachmentFilename;
        eData.uid = this._nextCardUid;
        eData.attachmentUrl = this._nextCardAttachmentUrl;

        var oBinding = this.getBinding("cards");
        if (oBinding) {
            //in case of data binding model has to be updated
            this.fireAddCard(eData);
            //sorting should happen when model is updated
            var oTimestampSorter = new sap.ui.model.Sorter("timestamp", true);
            oBinding.sort(oTimestampSorter);
        } else {
            var oNoteCard = new sap.suite.ui.commons.NoteTakerCard();
            oNoteCard.setBody(body);
            oNoteCard.setHeader(title);
            oNoteCard.setTimestamp(timestamp);
            oNoteCard.setViewAllTrigger(this.getCardViewAllTrigger());
            oNoteCard.setTags(tags);
            oNoteCard.setThumbUp(thumbUp);
            oNoteCard.setThumbDown(thumbDown);
            oNoteCard.setAttachmentFilename(attachmentFilename);
            oNoteCard.setUid(this._nextCardUid);
            oNoteCard.setAttachmentUrl(this._nextCardAttachmentUrl);

            this.insertCard(oNoteCard, 0);

            eData.card = oNoteCard;
            this.fireAddCard(eData);
        }
        
        this._nextCardUid = null;
        this._nextCardAttachmentUrl = null;
        
        this._filter();
    };
    
    /**
     * Adds a note card to the cards aggregation.
     * 
     * @param {NoteTakerCard} oCard. The object which is added to the cards aggregation.
     */
    sap.suite.ui.commons.NoteTaker.prototype.addCard = function(oCard) {
        this._addDeleteDelegate(oCard);
        this._addEditDelegate(oCard);
        this._addAttachmentDelegate(oCard);
        this.getNotFilteredCards().push(oCard);
        this._carousel.addContent(oCard);
        this._sortIfNeeded();
        this._spreadTagList();
        return this;
    };
    
    /**
     * Gets a list of the note cards. It does not return NoteTakerFeeder to the list.
     */
    sap.suite.ui.commons.NoteTaker.prototype.getCards = function() {
        return this._carousel.getContent().slice(1);
    };
    
    /**
     * Inserts a note card in the specified position.
     * @param {NoteTakerCard} oCard. The object which is added to the cards aggregation.
     * @param {int} iIndex. The position of the object it is inserted into.
     */
    sap.suite.ui.commons.NoteTaker.prototype.insertCard = function(oCard, iIndex) {
        this._addDeleteDelegate(oCard);
        this._addEditDelegate(oCard);
        this._addAttachmentDelegate(oCard);
        this.getNotFilteredCards().push(oCard);
        this._carousel.insertContent(oCard, ++iIndex);
        this._spreadTagList();
        return this;
    };

    /**
     * Removes a specified note card from the cards aggregation.
     * @param {NoteTakerCard} oCard. Object which will be removed.
     * 
     */
    sap.suite.ui.commons.NoteTaker.prototype.removeCard = function(oCard) {
        this._spreadTagList();
        return this._carousel.removeContent(oCard);
    };
    
    /**
     * Removes all the note cards from the cards aggregation. 
     */
    sap.suite.ui.commons.NoteTaker.prototype.removeAllCards = function() {
        var aContent = this._carousel.removeAllContent();
        this._feeder.setTags([]);
        this._carousel.addContent(this._feeder);
        return aContent.slice(1);
    };
    
    /**
     * Returns a position of the note card in the cards aggregation.
     * @param {NoteTakerCard} oCard. Object which position is returned.
     */
    sap.suite.ui.commons.NoteTaker.prototype.indexOfCard = function(oCard) {
        var iIndex = this._carousel.indexOfContent(oCard);
        return (iIndex > 0) ? --iIndex : -1;
    };

    /**
     * Destroys the cards aggregation. After the cards aggregation is destroyed a new instance of NoteTakerFeeder is added to the cards aggregation.
     */
    sap.suite.ui.commons.NoteTaker.prototype.destroyCards = function() {
        this._carousel.destroyContent();
        this._carousel.addContent(this._createFeederAndAddToThis());
        return this;
    };

    /**
     * The utility method which creates NoteTakerFeeder. 
     * Minimizes code duplication.
     * 
     * @private
     */
    sap.suite.ui.commons.NoteTaker.prototype._createFeederAndAddToThis = function() {
        var that = this;
        this._feeder = new sap.suite.ui.commons.NoteTakerFeeder({
            id : this.getId() + "-feeder",
            attachmentName : that.getAttachmentName(),
            addNote: function(e){
                that._handleAddNote(e);
            },
            attachmentUploadUrl: that.getAttachmentUploadUrl(),
            attachmentSelect : function(e){
                var eData = {filename : e.getParameter("filename")};
                that.fireAttachmentSelect(eData);
            },
            attachmentUploadComplete : function(e) {
                var eData = {
                        response: e.getParameter("response"),
                        uid : that._nextCardUid
                };
                that.fireAttachmentUploadComplete(eData);
                this._oAttachmentLink.setHref(that._nextCardAttachmentUrl);
                this._oAttachmentLink.rerender();
            },
            attachmentDelete : function(e) {
                var eData = {
                        filename : e.getParameter("filename"),
                        uid : that._nextCardUid
                };
                
                that.fireAttachmentDelete(eData);
            },
            attachmentClick : function(e) {
                var eData = {
                        filename : e.getParameter("filename"),
                        uid : that._nextCardUid,
                        isCardAttachment : false
                };
                
                that.fireAttachmentClick(eData);
            }
        });
        this._spreadTagList();
        return this._feeder;
    };

    /**
     * Method for sorting cards inside NoteTaker. 
     * It is called only when databinding is undefined.
     * 
     * @private
     */
    sap.suite.ui.commons.NoteTaker.prototype._sortIfNeeded = function() {
        var oBinding = this.getBinding();
        if(oBinding == undefined) {
            var aCards = this.getCards();
            aCards.sort(function(oCard1, oCard2) {
                // descending sort
                return oCard2.getTimestamp().getTime() - oCard1.getTimestamp().getTime();
            });
            
            this.removeAllCards();
            
            for(var i = 0; i<aCards.length; i++) {
                this._carousel.addContent(aCards[i]); 
            }
        }
    };

    sap.suite.ui.commons.NoteTaker.prototype.getAllTags = function() {
        var oBinding = this.getBinding("cards");
        var aCards = oBinding ? this.getCards() : this.getNotFilteredCards();
        var oTagSet = {};
        var aResult = [];
        for (var i = 0; i<aCards.length; i++) {
            var aTags = aCards[i].getTags();
            for (var j = 0; j<aTags.length; j++) {
                if (aTags[j] != "") {
                    oTagSet[aTags[j]] = true;
                }
            }
        }

        for (var tag in oTagSet) {
            aResult.push(tag);
        }

        return aResult.sort();
    };
    
    sap.suite.ui.commons.NoteTaker.prototype._handleDeleteNote = function(oEvent) {
        var oBinding = this.getBinding("cards");
        var eData = {};
        eData.title = oEvent.getParameter("title");
        eData.timestamp = oEvent.getParameter("timestamp");
        eData.body = oEvent.getParameter("body");
        eData.uid = oEvent.getParameter("uid");
        eData.thumbUp = oEvent.getParameter("thumbUp");
        eData.thumbDown = oEvent.getParameter("thumbDown");
        
        if(oBinding) {
            this.fireDeleteCard(eData);
        } else {
            var card2Delete = oEvent.getParameter("cardId");
            var allCards = this.getNotFilteredCards();
            for (var i=0; i<allCards.length; i++) {
                if (allCards[i].getId() == card2Delete) {
                    allCards.splice(i, 1);
                }
            }
            this.removeCard(card2Delete);
            this.fireDeleteCard(eData);
        }
    };
    
    sap.suite.ui.commons.NoteTaker.prototype._handleEditNote = function(oEvent) {
        var eData = {};
        eData.title = oEvent.getParameter("title");
        eData.timestamp = oEvent.getParameter("timestamp");
        eData.body = oEvent.getParameter("body");
        eData.uid = oEvent.getParameter("uid");
        eData.thumbUp = oEvent.getParameter("thumbUp");
        eData.thumbDown = oEvent.getParameter("thumbDown");
        eData.tags = oEvent.getParameter("tags");
        
        this.fireEditCard(eData);
        
        this._sortIfNeeded();

        this._spreadTagList();
    };
    
    sap.suite.ui.commons.NoteTaker.prototype._addDeleteDelegate = function(oCard) {
        var that = this;
        oCard.attachDeleteNote(function(oEvent) { 
            that._handleDeleteNote(oEvent);
        });
    };
    
    sap.suite.ui.commons.NoteTaker.prototype._addEditDelegate = function(oCard) {
        var that = this;
        oCard.attachEditNote(function(oEvent) { 
            that._handleEditNote(oEvent);
        });
    };

    /**
     * Handles home button click. Scrolls carousel to its first element that is a feeder.
     */
    sap.suite.ui.commons.NoteTaker.prototype._handleHomeButton = function() {
        this._carousel.setFirstVisibleIndex(0);
        this._feeder._focusDefaultControl();
    };

    /*
     * Override to automatically apply filter
     */
    sap.suite.ui.commons.NoteTaker.prototype.setFilterCriteria = function(oFilterCriteria) {
        this.setProperty("filterCriteria", oFilterCriteria);
        this._filter();
        return this;
    };

    sap.suite.ui.commons.NoteTaker.prototype._toggleFilterTagPopup = function() {
        if (this._bFilterTagPopupOpen) {
            jQuery.sap.byId(this.getId() + "-filterTag-panel").slideToggle();
            this._bFilterTagPopupOpen = false;
        } else {
            this._addTagsToFilterListBox(this.getAllTags());
            jQuery.sap.byId(this.getId() + "-filterTag-panel").slideToggle();
            this._oFilterTagList.focus();
            this._bFilterTagPopupOpen = true;
        }
    };

    sap.suite.ui.commons.NoteTaker.prototype._addTagsToFilterListBox = function(aTags) {
        var aSelectedItems = [];
        var aFilterTags = this._getFilterTags();
        var aListItems = jQuery.map(aTags, function(v, i) {

            // The Array.indexOf() method is not supported in Internet Explorer 8
            if (aFilterTags.indexOf) {
                if (aFilterTags.indexOf(v) >= 0) {
                    aSelectedItems.push(i);
                }
            } else {
                for (var k in aFilterTags) {
                    if (aFilterTags[k] == v) {
                        aSelectedItems.push(i);
                        break;
                    }
                }
            }

            return new sap.ui.core.ListItem({text: v});
        });

        this._oFilterTagList.setItems(aListItems, true);
        this._oFilterTagList.setSelectedIndices(aSelectedItems);
        this._oFilterTagList.rerender();
    };

    sap.suite.ui.commons.NoteTaker.prototype._cloneFilterCriteria = function() {
        var oFilterCriteria = this.getFilterCriteria();
        var oNewCriteria = {};

        if (oFilterCriteria) {
            for (var pName in oFilterCriteria) {
                oNewCriteria[pName] = oFilterCriteria[pName];
            }
        }

        return oNewCriteria;
    };

    sap.suite.ui.commons.NoteTaker.prototype._handleFilteringByTags = function() {
        var oFilterCriteria = this._cloneFilterCriteria();
        var aSelectedItems = this._oFilterTagList.getSelectedItems();
        var aTags = [];

        for (var i in aSelectedItems) {
            aTags.push(aSelectedItems[i].getText());
        }

        oFilterCriteria.tags = aTags;
        this.setFilterCriteria(oFilterCriteria);
    };

    sap.suite.ui.commons.NoteTaker.prototype._handleFilteringByThumbUp = function() {
        var oFilterCriteria = this._cloneFilterCriteria();
        oFilterCriteria.thumbUp = !oFilterCriteria.thumbUp;
        this.setFilterCriteria(oFilterCriteria);
    };

    sap.suite.ui.commons.NoteTaker.prototype._handleFilteringByThumbDown = function() {
        var oFilterCriteria = this._cloneFilterCriteria();
        oFilterCriteria.thumbDown = !oFilterCriteria.thumbDown;
        this.setFilterCriteria(oFilterCriteria);
    };

    sap.suite.ui.commons.NoteTaker.prototype._handleResetFilters = function() {
        var oFilterCriteria = this.getFilterCriteria();
        var oNewCriteria = null;

        if (oFilterCriteria && oFilterCriteria.search && oFilterCriteria.search.length > 0) {
            oNewCriteria = {};
            oNewCriteria.search = oFilterCriteria.search;
        }

        this.setFilterCriteria(oNewCriteria);
    };

    sap.suite.ui.commons.NoteTaker.prototype._handleSearchingByText = function(sSearchText) {
        var oFilterCriteria = this._cloneFilterCriteria();
        var aSearchWords = [];
        var aNewWords = sSearchText.split(new RegExp("\\s+"));

        for (var i = 0; i < aNewWords.length; i++) {
            if (aNewWords[i].length > 0) {
                aSearchWords.push(aNewWords[i]);
            }
        }

        oFilterCriteria.search = aSearchWords;

        this.setFilterCriteria(oFilterCriteria);
    };

    sap.suite.ui.commons.NoteTaker.prototype._adjustFilterTagButton = function() {
        var aFilterTags = this._getFilterTags();

        if (aFilterTags.length) {
            this._oFilterTagButton.setTooltip(this._rb.getText("NOTETAKER_BUTTON_FILTER_TAG_APPLY_SELECTED_TOOLTIP") + ": " + aFilterTags.join(" "));
            this._oFilterTagButton.addStyleClass("sapSuiteUiCommonsNoteTakerFilterButtonSelected");
        } else {
            this._oFilterTagButton.setTooltip(this._rb.getText("NOTETAKER_BUTTON_FILTER_TAG_TOOLTIP"));
            this._oFilterTagButton.removeStyleClass("sapSuiteUiCommonsNoteTakerFilterButtonSelected");
        }
    };
    
    sap.suite.ui.commons.NoteTaker.prototype._handleSearchPopup = function() {
        if (this._bSearchPopupOpen) {
            jQuery.sap.byId(this.getId() + "-search-panel").slideToggle();
            this._bSearchPopupOpen = false;
        } else {
            var oPosition = jQuery.sap.byId(this.getId() + "-filter-search-button").position();
            jQuery.sap.byId(this.getId() + "-search-panel").css("right", oPosition.right - 20).slideToggle();
            this._oFilterSearchField.focus();
            this._bSearchPopupOpen = true;
        }
    };

    sap.suite.ui.commons.NoteTaker.prototype._adjustSearchButton = function() {
        var sSearchText = this._oFilterSearchField.getValue();

        if (sSearchText.length) {
            this._oSearchButton.setTooltip(this._rb.getText("NOTETAKER_BUTTON_SEARCHED_BY_TOOLTIP") + ": " + sSearchText);
            this._oFilterSearchField.setTooltip(this._rb.getText("NOTETAKER_BUTTON_SEARCHED_BY_TOOLTIP") + ": " + sSearchText);
            this._oSearchButton.addStyleClass("sapSuiteUiCommonsNoteTakerFilterButtonSelected");
        } else {
            this._oSearchButton.setTooltip(this._rb.getText("NOTETAKER_BUTTON_SEARCH_TOOLTIP"));
            this._oFilterSearchField.setTooltip(this._rb.getText("NOTETAKER_BUTTON_SEARCH_TOOLTIP"));
            this._oSearchButton.removeStyleClass("sapSuiteUiCommonsNoteTakerFilterButtonSelected");
        }
    };

    /**
     * Extracts array of filtering tags from a filtering criteria object
     */
    sap.suite.ui.commons.NoteTaker.prototype._getFilterTags = function() {
        var oFilterCriteria = this.getFilterCriteria();

        if (oFilterCriteria && oFilterCriteria.tags && oFilterCriteria.tags.length) {
            return oFilterCriteria.tags;
        } else {
            return [];
        }
    };

    sap.suite.ui.commons.NoteTaker.prototype._adjustPopupState = function() {
        var oTagPosition = jQuery.sap.byId(this.getId() + "-filterTag-button").position();
        jQuery.sap.byId(this.getId() + "-filterTag-panel").css("left", oTagPosition.left - 20);
        if (this._bFilterTagPopupOpen) {
            jQuery.sap.byId(this.getId() + "-filterTag-panel").show();
        }
        if (this._bSearchPopupOpen) {
            jQuery.sap.byId(this.getId() + "-search-panel").show();
        }
    };

    sap.suite.ui.commons.NoteTaker.prototype._adjustFilteringButtonsStyle = function() {
        this._adjustFilterTagButton();
        this._adjustFilteringByThumbUpButtonStyle();
        this._adjustFilteringByThumbDownButtonStyle();
        this._adjustSearchButton();
    };

    sap.suite.ui.commons.NoteTaker.prototype._adjustFilteringByThumbUpButtonStyle = function() {
        if (this.getFilterCriteria() && this.getFilterCriteria().thumbUp) {
            this._oFilterThumbUpButton.addStyleClass("sapSuiteUiCommonsNoteTakerFilterButtonSelected");
            
        } else {
            this._oFilterThumbUpButton.removeStyleClass("sapSuiteUiCommonsNoteTakerFilterButtonSelected");
        }
    };

    sap.suite.ui.commons.NoteTaker.prototype._adjustFilteringByThumbDownButtonStyle = function() {
        if (this.getFilterCriteria() && this.getFilterCriteria().thumbDown) {
            this._oFilterThumbDownButton.addStyleClass("sapSuiteUiCommonsNoteTakerFilterButtonSelected");
        } else {
            this._oFilterThumbDownButton.removeStyleClass("sapSuiteUiCommonsNoteTakerFilterButtonSelected");
        }
    };

    sap.suite.ui.commons.NoteTaker.prototype.getNotFilteredCards = function() {
        if(!this._notFilteredCards) {
            this._notFilteredCards = [];
        }
      return this._notFilteredCards;
    };

    // Update all cards including feeder with new list of tags available to choose.
    sap.suite.ui.commons.NoteTaker.prototype._spreadTagList = function() {
        var aAllTags = this.getAllTags();
        this._feeder.setTags(aAllTags);
        var aCards = this.getCards();
        for (var i=0; i<aCards.length; i++) {
            aCards[i].setAllTags(aAllTags);
        }
    };

    /**
     * Filters note taker cards using filterCriteria property. Two different filtering methods implemented for control
     * with and without binding.
     */
    sap.suite.ui.commons.NoteTaker.prototype._filter = function() {
        var oBinding = this.getBinding("cards");
        var oCard;
        var i;

        if (oBinding) {
            var aModelCards = this.getModel().oData['cards'];

            for (i = 0; i < aModelCards.length; i++) {
                oCard = aModelCards[i];
                oCard.isFiltered = this._applyFilters(oCard);
            }

            this.getModel().updateBindings();
            oBinding.filter([new sap.ui.model.Filter("isFiltered", sap.ui.model.FilterOperator.EQ, false)]);
        } else {
            var aNotFilteredCards = this.getNotFilteredCards();
            var aVisibleCards = this.getCards();

            //for newly created taker notFilteredCards may not be set
            if (aNotFilteredCards.length == 0 && aVisibleCards.length > 0) {
                this.setNotFilteredCards(aVisibleCards);
                aNotFilteredCards = aVisibleCards;
            }

            for (i = 0; i < aNotFilteredCards.length; i++) {
                oCard = aNotFilteredCards[i];
                oCard.setIsFiltered(this._applyFilters(oCard));

                if (oCard.getIsFiltered()) {
                    this.removeCard(oCard);
                } else if (this.indexOfCard(oCard) < 0) {
                    this.addCard(oCard);
                }
            }
        }
    };

    /**
     * Iterates through the list of filtering criteria and checks if given card should be filtered out and thus
     * should be hidden from a user in the note taker.
     */
    sap.suite.ui.commons.NoteTaker.prototype._applyFilters = function(oCard) {
        var bFilterPassed = true;

        if (this.getFilterCriteria()) {
            for (var i = 0; (i < this._filters.length) && bFilterPassed; i++) {
                var fnFilter = this._filters[i];
                bFilterPassed = fnFilter.call(this, oCard);
            }
        }

        return !bFilterPassed;    // filter not passed means card is filtered out
    };

    /**
     * Validates whether given card passes filter by thumbs.
     * @param oCard validated card could be NoteTakerCard instance or json object.
     */
    sap.suite.ui.commons.NoteTaker.prototype._validateCardByThumbsFilter = function(oCard) {
        if (oCard.getThumbUp && oCard.getThumbDown) {
            return this._applyThumbsFilter(oCard.getThumbUp(), oCard.getThumbDown());
        } else {
            return this._applyThumbsFilter(oCard.thumbUp, oCard.thumbDown);
        }
    };

    /**
     * Validates whether given card passes filter by tags.
     * @param oCard validated card could be NoteTakerCard instance or json object.
     */
    sap.suite.ui.commons.NoteTaker.prototype._validateCardByTagsFilter = function(oCard) {
        if (oCard.getTags) {
            return this._applyTagsFilter(oCard.getTags());
        } else {
            return this._applyTagsFilter(oCard.tags);
        }
    };

    /**
     * Validates whether given card passes search by text.
     * @param oCard validated card could be NoteTakerCard instance or json object.
     */
    sap.suite.ui.commons.NoteTaker.prototype._validateCardByTextSearch = function(oCard) {
        if (oCard.getBody) {
            return this._applyTextSearch(oCard.getBody(), oCard.getHeader());
        } else {
            return this._applyTextSearch(oCard.body, oCard.header);
        }
    };

    /**
     * Implements filtering criteria by thumbs. Validates whether given parameters conform to filtering criteria.
     */
    sap.suite.ui.commons.NoteTaker.prototype._applyThumbsFilter = function(bThumbUp, bThumbDown) {
        var bResult = true;
        var oFilterCriteria = this.getFilterCriteria();

        if (oFilterCriteria.thumbUp && oFilterCriteria.thumbDown) {
            bResult = bThumbUp || bThumbDown;
        } else if (oFilterCriteria.thumbUp) {
            bResult = bThumbUp;
        } else if (oFilterCriteria.thumbDown) {
            bResult = bThumbDown;
        }

        return bResult;
    };

    /**
     * Implements filtering criteria by tags. Validates whether given parameter conforms to filtering criteria.
     */
    sap.suite.ui.commons.NoteTaker.prototype._applyTagsFilter = function(aTags) {
        var bResult = true;
        var oFilterCriteria = this.getFilterCriteria();

        if (oFilterCriteria.tags && oFilterCriteria.tags.length > 0) {
            var i, j;
            var aTagCriteria = oFilterCriteria.tags;

            bResult = false;     //  assume initially no tag matches

            //iterate since IE8 doesn't support Array.indexOf() method.
            for (i = 0; i < aTagCriteria.length && !bResult; i++) {
                for (j = 0; aTags && (j < aTags.length); j++) {
                    if (aTagCriteria[i] == aTags[j]) {
                        bResult = true;
                        break;
                    }
                }
            }
        }

        return bResult;
    };

    /**
     * Implements searching by text. Validates whether given strings contain text given in filtering criteria.
     */
    sap.suite.ui.commons.NoteTaker.prototype._applyTextSearch = function(sBody, sHeader) {
        var bResult = true;
        var oFilterCriteria = this.getFilterCriteria();

        if (oFilterCriteria.search && oFilterCriteria.search.length > 0) {
            var aSearchCriteria = oFilterCriteria.search;

            bResult = false;     // assume initially search found nothing
            sBody = sBody.toLowerCase();
            sHeader = sHeader ? sHeader.toLowerCase() : null;

            for (var i = 0; i < aSearchCriteria.length; i++) {
                var sWord = aSearchCriteria[i].toLowerCase();
                if ((sBody.indexOf(sWord) >= 0) || (sHeader && sHeader.indexOf(sWord) >= 0)) {
                    bResult = true;
                    break;
                }
            }
        }

        return bResult;
    };
    
    sap.suite.ui.commons.NoteTaker.prototype.setAttachmentUploadUrl = function(sUrl) {
        this.setProperty("attachmentUploadUrl", sUrl, true);
        this._feeder.setAttachmentUploadUrl(sUrl);
        return this;
    };

    /**
     * Array of methods that implements validation by filtering criteria.
     */
    sap.suite.ui.commons.NoteTaker.prototype._filters = [
        sap.suite.ui.commons.NoteTaker.prototype._validateCardByThumbsFilter,
        sap.suite.ui.commons.NoteTaker.prototype._validateCardByTagsFilter,
        sap.suite.ui.commons.NoteTaker.prototype._validateCardByTextSearch
    ];
    
    //TODO: add jsdocs
    sap.suite.ui.commons.NoteTaker.prototype.setNextCardUid = function(sUid) {
        this._nextCardUid = sUid;
        return this;
    };
    
    sap.suite.ui.commons.NoteTaker.prototype._addAttachmentDelegate = function(oCard) {
        var that = this;
        oCard.attachAttachmentClick(function(oEvent) { 
            that._handleCardAttachmentClick(oEvent);
        });
    };
    
    sap.suite.ui.commons.NoteTaker.prototype._handleCardAttachmentClick = function(oEvent) {
        var eData = {
                filename : oEvent.getParameter("filename"),
                uid :  oEvent.getParameter("uid"),
                isCardAttachment : true
        };
        
        this.fireAttachmentClick(eData);
    };
    
    sap.suite.ui.commons.NoteTaker.prototype.uploadAttachment = function() {
        this._feeder._oFileUploader.upload();
    };
    
    sap.suite.ui.commons.NoteTaker.prototype.setAttachmentData = function(sAdditionalData) {
        this._feeder._oFileUploader.setAdditionalData(sAdditionalData);
        return this;
    };
    
    sap.suite.ui.commons.NoteTaker.prototype.handleAttachmentUploadFail = function() {
        this._feeder._handleDeleteAttachUI();
        return this;
    };
    
    sap.suite.ui.commons.NoteTaker.prototype.setNextCardAttachmentUrl = function(sUrl) {
        this._nextCardAttachmentUrl = sUrl;
        return this;
    };
    
    sap.suite.ui.commons.NoteTaker.prototype.onkeyup = function(oEvent) {
  		if (oEvent.which == jQuery.sap.KeyCodes.ESCAPE) {
  			if(this._feeder._bTagPopupOpen) {
  				this._feeder._toggleTagPopup();
  				this._feeder._oTagButton.focus();
  			}
  			if(this._bFilterTagPopupOpen) {
  				this._toggleFilterTagPopup();
  				this._oFilterTagButton.focus();
  			}
  		}
  }
}());
