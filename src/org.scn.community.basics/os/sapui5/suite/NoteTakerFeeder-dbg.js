/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.NoteTakerFeeder.
jQuery.sap.declare("sap.suite.ui.commons.NoteTakerFeeder");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new NoteTakerFeeder.
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
 * <li>{@link #getBody body} : string</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getTags tags} : object (default: [])</li>
 * <li>{@link #getThumbUp thumbUp} : boolean</li>
 * <li>{@link #getThumbDown thumbDown} : boolean</li>
 * <li>{@link #getAttachmentUploadUrl attachmentUploadUrl} : string</li>
 * <li>{@link #getAttachmentName attachmentName} : string (default: 'attachment')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.NoteTakerFeeder#event:addNote addNote} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.NoteTakerFeeder#event:attachmentSelect attachmentSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.NoteTakerFeeder#event:attachmentUploadComplete attachmentUploadComplete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.NoteTakerFeeder#event:attachmentDelete attachmentDelete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.NoteTakerFeeder#event:attachmentClick attachmentClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control allows you to enter a quick note and N note cards.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.NoteTakerFeeder", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"body" : {type : "string", group : "Data", defaultValue : null},
		"title" : {type : "string", group : "Data", defaultValue : null},
		"tags" : {type : "object", group : "Misc", defaultValue : []},
		"thumbUp" : {type : "boolean", group : "Misc", defaultValue : null},
		"thumbDown" : {type : "boolean", group : "Misc", defaultValue : null},
		"attachmentUploadUrl" : {type : "string", group : "Misc", defaultValue : null},
		"attachmentName" : {type : "string", group : "Misc", defaultValue : 'attachment'}
	},
	aggregations : {
		"bodyArea" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
		"titleInput" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
		"fileUploader" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
		"tagInput" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}
	},
	events : {
		"addNote" : {}, 
		"attachmentSelect" : {}, 
		"attachmentUploadComplete" : {}, 
		"attachmentDelete" : {}, 
		"attachmentClick" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.NoteTakerFeeder with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.NoteTakerFeeder.extend
 * @function
 */

sap.suite.ui.commons.NoteTakerFeeder.M_EVENTS = {'addNote':'addNote','attachmentSelect':'attachmentSelect','attachmentUploadComplete':'attachmentUploadComplete','attachmentDelete':'attachmentDelete','attachmentClick':'attachmentClick'};


/**
 * Getter for property <code>body</code>.
 * The text inside the note card.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>body</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#getBody
 * @function
 */

/**
 * Setter for property <code>body</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sBody  new value for property <code>body</code>
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#setBody
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * This text is the header of a new note.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#setTitle
 * @function
 */


/**
 * Getter for property <code>tags</code>.
 * The list of tags selected for addition to a new note card.
 *
 * Default value is <code>[]</code>
 *
 * @return {object} the value of property <code>tags</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#getTags
 * @function
 */

/**
 * Setter for property <code>tags</code>.
 *
 * Default value is <code>[]</code> 
 *
 * @param {object} oTags  new value for property <code>tags</code>
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#setTags
 * @function
 */


/**
 * Getter for property <code>thumbUp</code>.
 * Sets positive indication for a new note.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>thumbUp</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#getThumbUp
 * @function
 */

/**
 * Setter for property <code>thumbUp</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bThumbUp  new value for property <code>thumbUp</code>
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#setThumbUp
 * @function
 */


/**
 * Getter for property <code>thumbDown</code>.
 * Sets negative indication for a new note.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>thumbDown</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#getThumbDown
 * @function
 */

/**
 * Setter for property <code>thumbDown</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bThumbDown  new value for property <code>thumbDown</code>
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#setThumbDown
 * @function
 */


/**
 * Getter for property <code>attachmentUploadUrl</code>.
 * Sets the upload attachment URL for a new card.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>attachmentUploadUrl</code>
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#getAttachmentUploadUrl
 * @function
 */

/**
 * Setter for property <code>attachmentUploadUrl</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAttachmentUploadUrl  new value for property <code>attachmentUploadUrl</code>
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#setAttachmentUploadUrl
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
 * @name sap.suite.ui.commons.NoteTakerFeeder#getAttachmentName
 * @function
 */

/**
 * Setter for property <code>attachmentName</code>.
 *
 * Default value is <code>attachment</code> 
 *
 * @param {string} sAttachmentName  new value for property <code>attachmentName</code>
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#setAttachmentName
 * @function
 */


/**
 * The event is fired when a user chooses the Add button in the control.
 *
 * @name sap.suite.ui.commons.NoteTakerFeeder#addNote
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.title The title of the note to be added.
 * @param {string} oControlEvent.getParameters.body The text of the note to be added.
 * @param {object} oControlEvent.getParameters.timestamp The timestamp of the note to be added.
 * @param {boolean} oControlEvent.getParameters.thumbUp If set to true, a new card should be marked as positive one.
 * @param {boolean} oControlEvent.getParameters.thumbDown If set to true, a new card should be marked as negative one.
 * @param {string} oControlEvent.getParameters.attachmentFilename Stores the attachment file name for a new card.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'addNote' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself. 
 *  
 * The event is fired when a user chooses the Add button in the control.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#attachAddNote
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'addNote' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#detachAddNote
 * @function
 */

/**
 * Fire event addNote to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'title' of type <code>string</code> The title of the note to be added.</li>
 * <li>'body' of type <code>string</code> The text of the note to be added.</li>
 * <li>'timestamp' of type <code>object</code> The timestamp of the note to be added.</li>
 * <li>'thumbUp' of type <code>boolean</code> If set to true, a new card should be marked as positive one.</li>
 * <li>'thumbDown' of type <code>boolean</code> If set to true, a new card should be marked as negative one.</li>
 * <li>'attachmentFilename' of type <code>string</code> Stores the attachment file name for a new card.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NoteTakerFeeder#fireAddNote
 * @function
 */


/**
 * The event is fired when the value of attached file has been changed.
 *
 * @name sap.suite.ui.commons.NoteTakerFeeder#attachmentSelect
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'attachmentSelect' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself. 
 *  
 * The event is fired when the value of attached file has been changed.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#attachAttachmentSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'attachmentSelect' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#detachAttachmentSelect
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
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NoteTakerFeeder#fireAttachmentSelect
 * @function
 */


/**
 * The event is fired when the upload of the file is completed. However this covers only the client side of the Upload process and does not give any success status from the server.
 *
 * @name sap.suite.ui.commons.NoteTakerFeeder#attachmentUploadComplete
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.response The response message that comes from the server. On the server side this response has to be put within the "body" tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'attachmentUploadComplete' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself. 
 *  
 * The event is fired when the upload of the file is completed. However this covers only the client side of the Upload process and does not give any success status from the server.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#attachAttachmentUploadComplete
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'attachmentUploadComplete' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#detachAttachmentUploadComplete
 * @function
 */

/**
 * Fire event attachmentUploadComplete to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'response' of type <code>string</code> The response message that comes from the server. On the server side this response has to be put within the "body" tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NoteTakerFeeder#fireAttachmentUploadComplete
 * @function
 */


/**
 * The event is fired when a user presses the Delete button in the Feeder card.
 *
 * @name sap.suite.ui.commons.NoteTakerFeeder#attachmentDelete
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'attachmentDelete' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself. 
 *  
 * The event is fired when a user presses the Delete button in the Feeder card.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#attachAttachmentDelete
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'attachmentDelete' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#detachAttachmentDelete
 * @function
 */

/**
 * Fire event attachmentDelete to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'filename' of type <code>string</code> A name of the attached file.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NoteTakerFeeder#fireAttachmentDelete
 * @function
 */


/**
 * The event is fired when a user presses the attachment link.
 *
 * @name sap.suite.ui.commons.NoteTakerFeeder#attachmentClick
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'attachmentClick' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself. 
 *  
 * The event is fired when a user presses the attachment link.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#attachAttachmentClick
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'attachmentClick' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.NoteTakerFeeder#detachAttachmentClick
 * @function
 */

/**
 * Fire event attachmentClick to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'filename' of type <code>string</code> A name of the attached file.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.NoteTakerFeeder#fireAttachmentClick
 * @function
 */

// Start of sap/suite/ui/commons/NoteTakerFeeder.js
jQuery.sap.require("sap.ui.ux3.ToolPopup");
jQuery.sap.require("sap.m.Button");
///**
// * This file defines behavior for the control,
// */

sap.suite.ui.commons.NoteTakerFeeder.prototype.init = function() {
    this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
    this._selectedTags = [];
    this._bTagPopupOpen = false;
    var that = this;

    this._oAddButton = new sap.ui.commons.Button({
        id: this.getId() + "-add-button",
        text: this._rb.getText("NOTETAKERFEEDER_BUTTON_ADD_TEXT"),
        tooltip: this._rb.getText("NOTETAKERFEEDER_BUTTON_ADD_TOOLTIP"),
        press: function() {
            that._handleAdd();
        }
    });
    this._oAddButton.addStyleClass("sapSuiteUiCommonsNoteTakerFeederHeaderAddButton");

    this._oTagList = new sap.ui.commons.ListBox({
        id: this.getId() + "-tagListBox",
        visibleItems: 10,
        width: "100%",
        height: "194px",
        select: function(oEvent) {
            that._handleListSelect(oEvent);
        }
    });

    this._oTagInput = new sap.ui.commons.TextField({
        id: this.getId() + "-inputTag",
        liveChange: function(oEvent) {
            that._handleTagInputLive(oEvent);
        }
    });

    this.setAggregation("tagInput", this._oTagInput);

    this._oTagInput.onsapdown = function(oEvent) {
        oEvent.preventDefault();
        oEvent.stopPropagation();
        jQuery("#" + that.getId() + "-tagListBox li:eq(0)").focus();
    };

    this._oCancelTagButton = new sap.ui.commons.Button({
        id: this.getId() + "-cancel-tags-button",
        text: this._rb.getText("NOTETAKERFEEDER_BUTTON_CANCEL_TAGS"),
        tooltip: this._rb.getText("NOTETAKERFEEDER_BUTTON_CANCEL_TAGS_TOOLTIP"),
        press: function() {
            that._toggleTagPopup();
        }
    });
    this._oCancelTagButton.addStyleClass("sapSuiteUiCommonsNoteTakerFeederCancelTagButton");
    
    this._oCancelTagButton.onfocusout = function(oE) {
    		that._oTagInput.focus();
    };

    this._oAddTagButton = new sap.ui.commons.Button({
        id: this.getId() + "-add-tags-button",
        text: this._rb.getText("NOTETAKERFEEDER_BUTTON_ADD_TAGS"),
        tooltip: this._rb.getText("NOTETAKERFEEDER_BUTTON_ADD_TAGS_TOOLTIP"),
        press: function() {
            that._handleAddTag(that._oTagInput.getValue());
            that._oTagButton.rerender();
            that._toggleTagPopup();
        }
    });

    this._oTagButton = new sap.ui.commons.Button({
        id: this.getId() + "-tag-button",
        tooltip: this._rb.getText("NOTETAKERFEEDER_BUTTON_TAG_TOOLTIP"),
        press: function() {
            that._toggleTagPopup();
        }
    });
    this._oTagButton.addStyleClass("sapSuiteUiCommonsNoteTakerFeederTagButton");
    
    this._oTitle = new sap.ui.commons.TextField({
        id : this.getId() + "-title-field",
        placeholder : this._rb.getText("NOTETAKERFEEDER_PLACEHOLDER_HEADER") + "...",
        maxLength : 50
    });
    
    this.setAggregation("titleInput", this._oTitle);
    
    this._oBody = new sap.ui.commons.TextArea({
        id : this.getId() + "-body-field",
        placeholder : this._rb.getText("NOTETAKERFEEDER_PLACEHOLDER_BODY") + "...",
        required: true,
        liveChange : function(e) {
            that._setAddButtonEnabled(e.mParameters["liveValue"], null);
        }
    });
    
    this.setAggregation("bodyArea", this._oBody);
    
    this._oThumbUpButton = new sap.ui.commons.Button({
        id: this.getId() + "-thumb-up-button",
        press: function(e){
            that._handleThumbUpButtonPress();
        },
        tooltip : this._rb.getText("NOTETAKERFEEDER_BUTTON_THUMB_UP_TOOLTIP")
    });
    this._oThumbUpButton.addStyleClass("sapSuiteUiCommonsNoteTakerFeederThumbUpButton");
    
    this._oThumbDownButton = new sap.ui.commons.Button({
        id: this.getId() + "-thumb-down-button",
        press: function(e){
            that._handleThumbDownButtonPress();
        },
        tooltip : this._rb.getText("NOTETAKERFEEDER_BUTTON_THUMB_DOWN_TOOLTIP")
    });
    this._oThumbDownButton.addStyleClass("sapSuiteUiCommonsNoteTakerFeederThumbDownButton");
    
    this._oFileUploader = new sap.ui.commons.FileUploader({
        id: this.getId() + "-attach",
        uploadOnChange: false,
        name : this.getAttachmentName(),
        change: function (oEvent) {
            that._disableAddAttachBtn();
            var name = oEvent.getParameter("newValue");
            that._oAttachmentLink.setText(name);
            that._oAttachmentLink.rerender();
            that._handleAddAttachUI();

            var eData = {};
            eData.filename = name;
            that.fireAttachmentSelect(eData);
            that._oTitle.focus();
        },
        uploadComplete : function(oEvent){
            that._handleUploadComplete(oEvent);
        }
    });
    
    this._oFileUploader.onfocusin = function(oE) {
    	that._oTitle.focus();
    };
    this._oFileUploader.oBrowse.setText("");
    
    this.setAggregation("fileUploader", this._oFileUploader);
    
    this._oAddAttachButton = new sap.ui.commons.Button({
        id: this.getId() + "-attach-button",
        press: function(e) {
            jQuery.sap.domById(that._oFileUploader.getId() + "-fu").click();
        },
        tooltip: that._rb.getText("NOTETAKER_BUTTON_ATTACH_TOOLTIP")
    });
    this._oAddAttachButton.addStyleClass("sapSuiteUiCommonsNtAttachIcon");
    
    this._oAttachmentLoadingLabel = new sap.ui.commons.Label({
        id : this.getId() + "-loading-label",
        text: this._rb.getText("NOTETAKERFEEDER_LABEL_ATTACHMENT_LOADING") + "..."
    });

    this._oDeleteAttachButton = new sap.ui.commons.Button({
        id: this.getId() + "-delete-attach-button",
        lite : true,
        press : function(e) {
            that._handleDeleteAttachUI();
            var eData = {filename: that._oFileUploader.getName()};
            that.fireAttachmentDelete(eData);
            
        },
        tooltip: this._rb.getText("NOTETAKERFEEDER_BUTTON_DELETE_ATTACHMENT")
    });
    
    this._oAttachmentLink = new sap.ui.commons.Link({
        id: this.getId() + "-attachmentLink",
        tooltip: this._rb.getText("NOTETAKERFEEDER_LINK_ATTACHMENT_TOOLTIP"),
        press: function(e) {
            var eData = {filename: that._oFileUploader.getName()};
            that.fireAttachmentClick(eData);
        },
        width: "200px"
    });
    
    this._oRequiredLbl = new sap.ui.commons.Label({required: true}).addStyleClass("sapSuiteRequiredLbl");
};

sap.suite.ui.commons.NoteTakerFeeder.prototype.exit = function() {
    this._oAddButton.destroy();
    this._oTitle.destroy();
    this._oBody.destroy();
    this._oTagButton.destroy();
    this._oTagList.destroy();
    this._oTagInput.destroy();
    this._oCancelTagButton.destroy();
    this._oAddTagButton.destroy();
    this._oThumbUpButton.destroy();
    this._oThumbDownButton.destroy();
    this._oFileUploader.destroy();
    this._oAddAttachButton.destroy();
    this._oAttachmentLoadingLabel.destroy();
    this._oDeleteAttachButton.destroy();   
    this._oAttachmentLink.destroy();
    this._oRequiredLbl.destroy();
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._handleAdd = function() {
    if (this.getBody()) {
        var eData = new Object();
        eData.title = this.getTitle();
        eData.body = this.getBody();
        eData.timestamp = this._getTimestamp();
        eData.tags = this._selectedTags;
        eData.thumbUp = this.getThumbUp();
        eData.thumbDown = this.getThumbDown();
        eData.attachmentFilename = this._oFileUploader.getValue();
        
        this.setTitle("");
        this.setBody("");
        
        this.setThumbDown(false);
        this.setThumbUp(false);
        
        this._oFileUploader.setValue("");
        this._enableAddAttachBtn();
        this.fireAddNote(eData);
        jQuery(this._oFileUploader.oFileUpload).show();
        this._handleClearTag();
    } else {
        this._setAddButtonEnabled(this.getBody());
    }
    
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._getTimestamp = function() {
    return new Date();
};

sap.suite.ui.commons.NoteTakerFeeder.prototype.setTitle = function(sTitle) {
    this._oTitle.setValue(sTitle);
    return this;
};

sap.suite.ui.commons.NoteTakerFeeder.prototype.getTitle = function() {
    return jQuery.sap.byId(this.getId() + "-title-field").hasClass('sapSuiteUiCommonsPlaceholder') ? "" : this._oTitle.getValue();
};

sap.suite.ui.commons.NoteTakerFeeder.prototype.setBody = function(sBodyText) {
    this._oBody.setValue(sBodyText);
    return this;
};

sap.suite.ui.commons.NoteTakerFeeder.prototype.getBody = function() {
    return this._isBodyPlaceholderActive() ? "" : this._oBody.getValue();
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._applyPlaceholder = function(){
    jQuery('[data-placeholder]').focus(
        function() {
            var input = jQuery(this);
            if (input.hasClass('sapSuiteUiCommonsPlaceholder')) {
                input.val('');
                input.removeClass('sapSuiteUiCommonsPlaceholder');
            }
        }
    ).blur(
        function() {
            var input = jQuery(this);
            if (jQuery.sap.equal(input.val(),'') || jQuery.sap.equal(input.val(), input.attr('data-placeholder'))) {
                input.addClass('sapSuiteUiCommonsPlaceholder');
                input.val(input.attr('data-placeholder'));
            }
        }
    ).blur();
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._isBodyPlaceholderActive = function() {
    return jQuery.sap.byId(this.getId() + "-body-field").hasClass('sapSuiteUiCommonsPlaceholder');
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._setAddButtonEnabled = function(sBody, notRerender) {
    var bEnabled = sBody != null && !this._isBodyPlaceholderActive() && !/^\s*$/.test(sBody);
    if (bEnabled !== this._oAddButton.getEnabled()) {
        this._oAddButton.setEnabled(bEnabled);
        if (!notRerender) {
            this._oAddButton.rerender();
        }
    }
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._adjustUploaderForIe = function() {
    this._oFileUploader.superOnkeydown = this._oFileUploader.onkeydown;
    this._oFileUploader.onkeydown = function(oEvent) {
    	var iKeyCode = oEvent.keyCode,
		eKC = jQuery.sap.KeyCodes;
    	if (iKeyCode != eKC.SPACE && iKeyCode != eKC.ENTER) {
    		this.superOnkeydown(oEvent);
    	}
    };
    
    jQuery(this._oFileUploader.oFilePath.getDomRef()).hide();
    jQuery(this._oFileUploader.oBrowse.getDomRef()).hide();
    jQuery(this._oAddAttachButton.getDomRef()).attr("tabindex", "-1");
    
    var that = this;
    jQuery(this._oFileUploader.oFileUpload).attr("tabindex", "0").attr("title", this._rb.getText("NOTETAKER_BUTTON_ATTACH_TOOLTIP"))
    .focus(function() {
    	this.hasFocus = true;
    	jQuery(that._oAddAttachButton.getDomRef()).addClass("sapUiBtnStdFocus");
    }).focusout(function() {
    	this.hasFocus = false;
    	jQuery(that._oAddAttachButton.getDomRef()).removeClass("sapUiBtnStdFocus");
    }).hover(function() {
    	jQuery(that._oAddAttachButton.getDomRef()).addClass("sapUiBtnStdFocus");
    }, function() {
    	if (!this.hasFocus) {
    		jQuery(that._oAddAttachButton.getDomRef()).removeClass("sapUiBtnStdFocus");
    	}
    	jQuery(that._oAddAttachButton.getDomRef()).removeClass("sapSuiteUiCommonsNoteTakerFeederButtonSelected");
    }).mousedown(function() {
    	jQuery(that._oAddAttachButton.getDomRef()).addClass("sapSuiteUiCommonsNoteTakerFeederButtonSelected")
    	.addClass("sapUiBtnAct");
    }).mouseup(function() {
    	jQuery(that._oAddAttachButton.getDomRef()).removeClass("sapSuiteUiCommonsNoteTakerFeederButtonSelected");
    });
    
    jQuery(this._oFileUploader.oFileUpload).keydown(function(oEvent) {
		var eKC = jQuery.sap.KeyCodes;
    	if (oEvent.keyCode == eKC.TAB) {
    		if (oEvent.shiftKey) {
    			that._oThumbDownButton.focus();
    		} else {
    			that._oTitle.focus();
    		}
    		oEvent.preventDefault();
    		oEvent.stopPropagation();    		
    	}
    });
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._setAriaInfo = function() {
    jQuery.sap.byId(this._oThumbUpButton.getId()).attr("aria-pressed", this.getThumbUp());
    jQuery.sap.byId(this._oThumbDownButton.getId()).attr("aria-pressed", this.getThumbDown());

    jQuery.sap.byId(this._oTitle.getId()).attr("aria-label", this._rb.getText("NOTETAKERFEEDER_PLACEHOLDER_HEADER"));
    jQuery.sap.byId(this._oBody.getId()).attr("aria-label", this._rb.getText("NOTETAKERFEEDER_PLACEHOLDER_BODY"));
    jQuery(this._oFileUploader.oFileUpload).attr("aria-label", this._rb.getText("NOTETAKER_BUTTON_ATTACH_TOOLTIP"));
};

sap.suite.ui.commons.NoteTakerFeeder.prototype.onAfterRendering = function() {
    this._applyPlaceholder();
    this._adjustPopupState();
    
    if (this._oFileUploader.getValue()) {
        jQuery.sap.byId(this.getId() + "-attachment-panel").show();
        jQuery.sap.byId(this.getId() + "-attachment-loading").hide();
        jQuery.sap.byId(this.getId() + "-attachment-delete").show();
    }
    
    jQuery.sap.byId(this._oFileUploader.getId()).addClass("sapSuiteUiCommonsNtfUploader");
    
    this._setAriaInfo();
    
    if (jQuery.browser.msie) {
    	this._adjustUploaderForIe();
    }
};

sap.suite.ui.commons.NoteTakerFeeder.prototype.onBeforeRendering = function() {
    this._setAddButtonEnabled(this.getBody(), true);
    this._setThumbButtonsView();
};

sap.suite.ui.commons.NoteTakerFeeder.prototype.getFormattedTags = function() {
    return sap.suite.ui.commons.NoteTakerCard.prototype._getFormattedTags();  
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._adjustPopupState = function() {
    if (this._bTagPopupOpen) {
        jQuery.sap.byId(this.getId() + "-selectTag-panel").show();
    }
}; 

sap.suite.ui.commons.NoteTakerFeeder.prototype._handleAddTag = function(sTag) {
    this._selectedTags = [];
    var aNewTags = sTag.split(new RegExp("\\s+"));

    var oTemp = {};
    
    for (var i = 0; i < aNewTags.length; i++) {
        if (aNewTags[i].length != 0) {
            oTemp[aNewTags[i]] = 0;
        }
    }

    for (var field in oTemp) {
        this._selectedTags.push(field);
    }
    
    if(this._oTagButton) {
        this._adjustTagButton();    
    }
    
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._adjustTagButton = function() {
    if (this._selectedTags.length) {
        this._oTagButton.setTooltip(this._rb.getText("NOTETAKERFEEDER_BUTTON_ADD_TAGS_SELECTED_TOOLTIP") + ": " + this._selectedTags.join(" "));
        this._oTagButton.addStyleClass("sapSuiteUiCommonsNoteTakerFeederButtonSelected");
    } else {
        this._oTagButton.setTooltip(this._rb.getText("NOTETAKERFEEDER_BUTTON_TAG_TOOLTIP"));
        this._oTagButton.removeStyleClass("sapSuiteUiCommonsNoteTakerFeederButtonSelected");
    }
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._handleClearTag = function() {
    if(this._oTagInput) {
        this._oTagInput.setValue("");    
    }
    
    if(this._oTagList) {
        this._oTagList.clearSelection();    
    }
    
    this._selectedTags = [];
    
    if(this._oTagButton) {
        this._adjustTagButton();    
    }
};

sap.suite.ui.commons.NoteTakerFeeder.prototype.setTags = function(aTags) {
    this.setProperty("tags", aTags, true); // no automatic rerendering
    return this;
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._toggleTagPopup = function() {
    if (this._bTagPopupOpen) {
        jQuery.sap.byId(this.getId() + "-selectTag-panel").slideToggle();
        this._focusDefaultControl();
        this._bTagPopupOpen = false;
    } else {
        this._addTagsToListBox(this.getTags());
        jQuery.sap.byId(this.getId() + "-selectTag-panel").slideToggle();
        jQuery.sap.byId(this.getId() + "-inputTag").val(this._selectedTags.length == 0 ? "" : this._selectedTags.join(" ") + " ");
        this._oTagInput.focus();
        this._bTagPopupOpen = true;
    }
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._focusDefaultControl = function() {
    this._oTagButton.focus();
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._handleTagInputLive = function(oEvent) {
    var sLiveValue = oEvent.getParameter("liveValue");
    var aNewTags = sLiveValue.split(" ");
    var sCurrentlyEntering = aNewTags[aNewTags.length - 1];
    this._filterListBox(sCurrentlyEntering);
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._filterListBox = function(sInput) {
    if (sInput.length == 0) {
        this._addTagsToListBox(this.getTags());
        return;
    }
    
   var aFiltered = jQuery.grep(this.getTags(), function(a){
        if (a.indexOf(sInput) >= 0) {
            return true;
        }
    });
   
   this._addTagsToListBox(aFiltered);
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._addTagsToListBox = function(aTags) {
    var aListItems = jQuery.map(aTags, function(v, i) {
        return new sap.ui.core.ListItem({text: v});
    });

    this._oTagList.setItems(aListItems, true);
    this._oTagList.rerender();
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._handleListSelect = function(oEvent) {
    var sSelectedTag = oEvent.getParameter("selectedItem").getText();
    var sTemp = this._oTagInput.getValue();
    var aNewTags = sTemp.split(" ");
    
    aNewTags.pop();
    
    if(aNewTags.length == 0) {
        this._oTagInput.setValue(sSelectedTag + " ");
    } else {
        this._oTagInput.setValue(aNewTags.join(" ") + " " + sSelectedTag + " ");
    }
    
    this._oTagList.setSelectedIndex(-1);
    this._oTagInput.focus();
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._setThumbButtonsView = function() {
    if (this.getThumbUp()) {
        this._oThumbUpButton.addStyleClass("sapSuiteUiCommonsNoteTakerFeederButtonSelected");
    } else {
        this._oThumbUpButton.removeStyleClass("sapSuiteUiCommonsNoteTakerFeederButtonSelected");
    }
    
    if (this.getThumbDown()) {
        this._oThumbDownButton.addStyleClass("sapSuiteUiCommonsNoteTakerFeederButtonSelected");
    } else {
        this._oThumbDownButton.removeStyleClass("sapSuiteUiCommonsNoteTakerFeederButtonSelected");
    }
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._handleThumbUpButtonPress = function() {
    this.setThumbUp(!this.getThumbUp());
    if (this.getThumbUp()) {
        this.setThumbDown(false);
    }
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._handleThumbDownButtonPress = function() {
    this.setThumbDown(!this.getThumbDown());
    if (this.getThumbDown()) {
        this.setThumbUp(false);
    }
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._disableAddAttachBtn = function() {
    this._oAddAttachButton.setEnabled(false);
    this._oAddAttachButton.removeStyleClass("sapSuiteUiCommonsNtAttachIcon");
    this._oAddAttachButton.addStyleClass("sapSuiteUiCommonsNtDsblAttachIcon");
    this._oAddAttachButton.setTooltip("");
    
    this._oAddAttachButton.rerender();
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._enableAddAttachBtn = function() {
    this._oAddAttachButton.setEnabled(true);
    this._oAddAttachButton.removeStyleClass("sapSuiteUiCommonsNtDsblAttachIcon");
    this._oAddAttachButton.addStyleClass("sapSuiteUiCommonsNtAttachIcon");
    this._oAddAttachButton.setTooltip(this._rb.getText("NOTETAKER_BUTTON_ATTACH_TOOLTIP"));
    this._oAddAttachButton.rerender();
    
    if (jQuery.browser.msie) {
    	jQuery.sap.byId(this._oAddAttachButton.getId()).attr("tabindex", "-1");
    }
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._handleAddAttachUI = function() {
	jQuery(this._oFileUploader.oFileUpload).hide();
    jQuery.sap.byId(this.getId() + "-attachment-loading").show("fast");
    jQuery.sap.byId(this.getId() + "-body").animate({
        height:"332px"
    },300);
    
    jQuery.sap.byId(this.getId() + "-attachment-panel").slideDown({duration: 300, queue: false});
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._handleDeleteAttachUI = function() {
    jQuery(this._oFileUploader.oFileUpload).show();
    jQuery.sap.byId(this.getId() + "-body").animate({
        height:"352px"
    },300);
    
    jQuery.sap.byId(this.getId() + "-attachment-delete").hide("fast");
    jQuery.sap.byId(this.getId() + "-attachment-panel").hide({duration: 300, queue: false});
    
    this._enableAddAttachBtn();
    
    this._oFileUploader.setValue("");
    this._oFileUploader.addStyleClass("sapSuiteUiCommonsNtfUploader");
    this._oAttachmentLink.setText("");
    this._oAddAttachButton.focus();
};

sap.suite.ui.commons.NoteTakerFeeder.prototype.handleUploadResponse = function(sResponse) {
    
};

sap.suite.ui.commons.NoteTakerFeeder.prototype._handleUploadComplete = function(oEvent) {
    jQuery.sap.byId(this.getId() + "-attachment-loading").hide("fast");
    jQuery.sap.byId(this.getId() + "-attachment-delete").show("fast");
    
    var eData = {
        response: oEvent.getParameter("response")
    };
    this.fireAttachmentUploadComplete(eData);
};

sap.suite.ui.commons.NoteTakerFeeder.prototype.setAttachmentUploadUrl = function(sUrl) {
    this._oFileUploader.setUploadUrl(sUrl);
    return this;
};

sap.suite.ui.commons.NoteTakerFeeder.prototype.getAttachmentUploadUrl = function() {
    return this._oFileUploader.getUploadUrl();
};
