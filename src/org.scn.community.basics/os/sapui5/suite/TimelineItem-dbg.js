/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.TimelineItem.
jQuery.sap.declare("sap.suite.ui.commons.TimelineItem");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new TimelineItem.
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
 * <li>{@link #getDateTime dateTime} : any</li>
 * <li>{@link #getUserName userName} : string</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getIcon icon} : string</li>
 * <li>{@link #getFilterValue filterValue} : string</li>
 * <li>{@link #getUserNameClickable userNameClickable} : boolean (default: false)</li>
 * <li>{@link #getUserPicture userPicture} : sap.ui.core.URI</li>
 * <li>{@link #getReplyCount replyCount} : int</li>
 * <li>{@link #getMaxCharacters maxCharacters} : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getEmbeddedControl embeddedControl} : sap.ui.core.Control</li>
 * <li>{@link #getReplyList replyList} : sap.m.List</li>
 * <li>{@link #getCustomAction customAction} : sap.ui.core.CustomData[]</li>
 * <li>{@link #getSuggestionItems suggestionItems} : sap.m.StandardListItem[]</li>
 * <li>{@link #getCustomReply customReply} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.TimelineItem#event:userNameClicked userNameClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.TimelineItem#event:replyPost replyPost} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.TimelineItem#event:replyListOpen replyListOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.TimelineItem#event:customActionClicked customActionClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.TimelineItem#event:suggest suggest} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.TimelineItem#event:suggestionItemSelected suggestionItemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * TimelineItem
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.TimelineItem
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.TimelineItem", { metadata : {

	publicMethods : [
		// methods
		"setCustomMessage"
	],
	library : "sap.suite.ui.commons",
	properties : {
		"dateTime" : {type : "any", group : "Misc", defaultValue : null},
		"userName" : {type : "string", group : "Misc", defaultValue : null},
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"text" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "string", group : "Misc", defaultValue : null},
		"filterValue" : {type : "string", group : "Misc", defaultValue : null},
		"userNameClickable" : {type : "boolean", group : "Misc", defaultValue : false},
		"userPicture" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"replyCount" : {type : "int", group : "Misc", defaultValue : null},
		"maxCharacters" : {type : "int", group : "Behavior", defaultValue : null}
	},
	aggregations : {
		"embeddedControl" : {type : "sap.ui.core.Control", multiple : false}, 
		"replyList" : {type : "sap.m.List", multiple : false}, 
		"customAction" : {type : "sap.ui.core.CustomData", multiple : true, singularName : "customAction"}, 
		"suggestionItems" : {type : "sap.m.StandardListItem", multiple : true, singularName : "suggestionItem"}, 
		"customReply" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"userNameClicked" : {}, 
		"replyPost" : {}, 
		"replyListOpen" : {}, 
		"customActionClicked" : {}, 
		"suggest" : {}, 
		"suggestionItemSelected" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.TimelineItem with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.TimelineItem.extend
 * @function
 */

sap.suite.ui.commons.TimelineItem.M_EVENTS = {'userNameClicked':'userNameClicked','replyPost':'replyPost','replyListOpen':'replyListOpen','customActionClicked':'customActionClicked','suggest':'suggest','suggestionItemSelected':'suggestionItemSelected'};


/**
 * Getter for property <code>dateTime</code>.
 * Datetime value of Timeline item
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>dateTime</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getDateTime
 * @function
 */

/**
 * Setter for property <code>dateTime</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oDateTime  new value for property <code>dateTime</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setDateTime
 * @function
 */


/**
 * Getter for property <code>userName</code>.
 * User name shown in the title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>userName</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getUserName
 * @function
 */

/**
 * Setter for property <code>userName</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUserName  new value for property <code>userName</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setUserName
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Text shown in the title after user name
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setTitle
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * Text shown inside the item
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setText
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Icon for this item
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setIcon
 * @function
 */


/**
 * Getter for property <code>filterValue</code>.
 * Text for filter value
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>filterValue</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getFilterValue
 * @function
 */

/**
 * Setter for property <code>filterValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFilterValue  new value for property <code>filterValue</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setFilterValue
 * @function
 */


/**
 * Getter for property <code>userNameClickable</code>.
 * Make user name as a clickable to raise userNameClicked event
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>userNameClickable</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getUserNameClickable
 * @function
 */

/**
 * Setter for property <code>userNameClickable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bUserNameClickable  new value for property <code>userNameClickable</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setUserNameClickable
 * @function
 */


/**
 * Getter for property <code>userPicture</code>.
 * User Picture
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>userPicture</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getUserPicture
 * @function
 */

/**
 * Setter for property <code>userPicture</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sUserPicture  new value for property <code>userPicture</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setUserPicture
 * @function
 */


/**
 * Getter for property <code>replyCount</code>.
 * count of the replies to the post
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>replyCount</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getReplyCount
 * @function
 */

/**
 * Setter for property <code>replyCount</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iReplyCount  new value for property <code>replyCount</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setReplyCount
 * @function
 */


/**
 * Getter for property <code>maxCharacters</code>.
 * The expand and collapse feature is set by default and uses 300 characters on mobile devices and 500 characters on desktops as limits. Based on these values, the text of the timeline utem is collapsed once text reaches these limits. In this case, only the specified number of characters is displayed. By clicking on the text link More, the entire text can be displayed. The text link Less collapses the text. The application is able to set the value to its needs.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>maxCharacters</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getMaxCharacters
 * @function
 */

/**
 * Setter for property <code>maxCharacters</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iMaxCharacters  new value for property <code>maxCharacters</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setMaxCharacters
 * @function
 */


/**
 * Getter for aggregation <code>embeddedControl</code>.<br/>
 * Embed other control in timeline item, such as a button or a check box, etc.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getEmbeddedControl
 * @function
 */


/**
 * Setter for the aggregated <code>embeddedControl</code>.
 * @param {sap.ui.core.Control} oEmbeddedControl
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setEmbeddedControl
 * @function
 */
	

/**
 * Destroys the embeddedControl in the aggregation 
 * named <code>embeddedControl</code>.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#destroyEmbeddedControl
 * @function
 */


/**
 * Getter for aggregation <code>replyList</code>.<br/>
 * Reply list related to the post
 * 
 * @return {sap.m.List}
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getReplyList
 * @function
 */


/**
 * Setter for the aggregated <code>replyList</code>.
 * @param {sap.m.List} oReplyList
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setReplyList
 * @function
 */
	

/**
 * Destroys the replyList in the aggregation 
 * named <code>replyList</code>.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#destroyReplyList
 * @function
 */


/**
 * Getter for aggregation <code>customAction</code>.<br/>
 * Custom actions to display as links on the social bar
 * 
 * @return {sap.ui.core.CustomData[]}
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getCustomAction
 * @function
 */


/**
 * Inserts a customAction into the aggregation named <code>customAction</code>.
 *
 * @param {sap.ui.core.CustomData}
 *          oCustomAction the customAction to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the customAction should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the customAction is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the customAction is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#insertCustomAction
 * @function
 */

/**
 * Adds some customAction <code>oCustomAction</code> 
 * to the aggregation named <code>customAction</code>.
 *
 * @param {sap.ui.core.CustomData}
 *            oCustomAction the customAction to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#addCustomAction
 * @function
 */

/**
 * Removes an customAction from the aggregation named <code>customAction</code>.
 *
 * @param {int | string | sap.ui.core.CustomData} vCustomAction the customAction to remove or its index or id
 * @return {sap.ui.core.CustomData} the removed customAction or null
 * @public
 * @name sap.suite.ui.commons.TimelineItem#removeCustomAction
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>customAction</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.CustomData[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.TimelineItem#removeAllCustomAction
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.CustomData</code> in the aggregation named <code>customAction</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.CustomData}
 *            oCustomAction the customAction whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.TimelineItem#indexOfCustomAction
 * @function
 */
	

/**
 * Destroys all the customAction in the aggregation 
 * named <code>customAction</code>.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#destroyCustomAction
 * @function
 */


/**
 * Getter for aggregation <code>suggestionItems</code>.<br/>
 * Items for suggestions
 * 
 * @return {sap.m.StandardListItem[]}
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getSuggestionItems
 * @function
 */


/**
 * Inserts a suggestionItem into the aggregation named <code>suggestionItems</code>.
 *
 * @param {sap.m.StandardListItem}
 *          oSuggestionItem the suggestionItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the suggestionItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the suggestionItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the suggestionItem is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#insertSuggestionItem
 * @function
 */

/**
 * Adds some suggestionItem <code>oSuggestionItem</code> 
 * to the aggregation named <code>suggestionItems</code>.
 *
 * @param {sap.m.StandardListItem}
 *            oSuggestionItem the suggestionItem to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#addSuggestionItem
 * @function
 */

/**
 * Removes an suggestionItem from the aggregation named <code>suggestionItems</code>.
 *
 * @param {int | string | sap.m.StandardListItem} vSuggestionItem the suggestionItem to remove or its index or id
 * @return {sap.m.StandardListItem} the removed suggestionItem or null
 * @public
 * @name sap.suite.ui.commons.TimelineItem#removeSuggestionItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>suggestionItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.StandardListItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.TimelineItem#removeAllSuggestionItems
 * @function
 */

/**
 * Checks for the provided <code>sap.m.StandardListItem</code> in the aggregation named <code>suggestionItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.StandardListItem}
 *            oSuggestionItem the suggestionItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.TimelineItem#indexOfSuggestionItem
 * @function
 */
	

/**
 * Destroys all the suggestionItems in the aggregation 
 * named <code>suggestionItems</code>.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#destroySuggestionItems
 * @function
 */


/**
 * Getter for aggregation <code>customReply</code>.<br/>
 * Customer reply for embedded reply action
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getCustomReply
 * @function
 */


/**
 * Setter for the aggregated <code>customReply</code>.
 * @param {sap.ui.core.Control} oCustomReply
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setCustomReply
 * @function
 */
	

/**
 * Destroys the customReply in the aggregation 
 * named <code>customReply</code>.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#destroyCustomReply
 * @function
 */


/**
 * Fire when user name in the item header is clicked
 *
 * @name sap.suite.ui.commons.TimelineItem#userNameClicked
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'userNameClicked' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself. 
 *  
 * Fire when user name in the item header is clicked
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#attachUserNameClicked
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'userNameClicked' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#detachUserNameClicked
 * @function
 */

/**
 * Fire event userNameClicked to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.TimelineItem#fireUserNameClicked
 * @function
 */


/**
 * fire when Reply button is clicked
 *
 * @name sap.suite.ui.commons.TimelineItem#replyPost
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.value content of reply post
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'replyPost' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself. 
 *  
 * fire when Reply button is clicked
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#attachReplyPost
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'replyPost' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#detachReplyPost
 * @function
 */

/**
 * Fire event replyPost to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>string</code> content of reply post</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.TimelineItem#fireReplyPost
 * @function
 */


/**
 * fire when the reply link is clicked to open reply popover
 *
 * @name sap.suite.ui.commons.TimelineItem#replyListOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'replyListOpen' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself. 
 *  
 * fire when the reply link is clicked to open reply popover
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#attachReplyListOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'replyListOpen' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#detachReplyListOpen
 * @function
 */

/**
 * Fire event replyListOpen to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.TimelineItem#fireReplyListOpen
 * @function
 */


/**
 * fire when custom action link is clicked
 *
 * @name sap.suite.ui.commons.TimelineItem#customActionClicked
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.value Value of the custom action
 * @param {string} oControlEvent.getParameters.key Key of the custom action
 * @param {sap.ui.core.Control} oControlEvent.getParameters.linkObj Control of the custom action
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'customActionClicked' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself. 
 *  
 * fire when custom action link is clicked
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#attachCustomActionClicked
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'customActionClicked' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#detachCustomActionClicked
 * @function
 */

/**
 * Fire event customActionClicked to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>string</code> Value of the custom action</li>
 * <li>'key' of type <code>string</code> Key of the custom action</li>
 * <li>'linkObj' of type <code>sap.ui.core.Control</code> Control of the custom action</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.TimelineItem#fireCustomActionClicked
 * @function
 */


/**
 * This event is fired when user types in the input and showSuggestion is set to true. Changing the suggestItems aggregation will show the suggestions within a popup.
 *
 * @name sap.suite.ui.commons.TimelineItem#suggest
 * @event
 * @since 1.28.1
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.suggestValue The current value which has been typed in the input.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'suggest' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself. 
 *  
 * This event is fired when user types in the input and showSuggestion is set to true. Changing the suggestItems aggregation will show the suggestions within a popup.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.1
 * @name sap.suite.ui.commons.TimelineItem#attachSuggest
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'suggest' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.1
 * @name sap.suite.ui.commons.TimelineItem#detachSuggest
 * @function
 */

/**
 * Fire event suggest to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'suggestValue' of type <code>string</code> The current value which has been typed in the input.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.1
 * @name sap.suite.ui.commons.TimelineItem#fireSuggest
 * @function
 */


/**
 * This event is fired when suggestionItem shown in suggestion popup are selected. This event is only fired when showSuggestion is set to true and there are suggestionItems shown in the suggestion popup.
 *
 * @name sap.suite.ui.commons.TimelineItem#suggestionItemSelected
 * @event
 * @since 1.28.1
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Item} oControlEvent.getParameters.selectedItem This is the item selected in the suggestion popup.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'suggestionItemSelected' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself. 
 *  
 * This event is fired when suggestionItem shown in suggestion popup are selected. This event is only fired when showSuggestion is set to true and there are suggestionItems shown in the suggestion popup.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.1
 * @name sap.suite.ui.commons.TimelineItem#attachSuggestionItemSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'suggestionItemSelected' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @since 1.28.1
 * @name sap.suite.ui.commons.TimelineItem#detachSuggestionItemSelected
 * @function
 */

/**
 * Fire event suggestionItemSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedItem' of type <code>sap.ui.core.Item</code> This is the item selected in the suggestion popup.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @protected
 * @since 1.28.1
 * @name sap.suite.ui.commons.TimelineItem#fireSuggestionItemSelected
 * @function
 */


/**
 * set custom message
 *
 * @name sap.suite.ui.commons.TimelineItem#setCustomMessage
 * @function
 * @param {string} sMsg
 *         Message to be set
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */

// Start of sap/suite/ui/commons/TimelineItem.js
///**
// * This file defines behavior for the control,
// */

jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("sap.ui.core.format.DateFormat");

sap.suite.ui.commons.TimelineItem.prototype.init = function() { 
	var that = this;
	this._customReply = false;
	
		this._nMaxCharactersMobile = 300;
	  this._nMaxCharactersDesktop = 500;
	
	var oLocale = sap.ui.getCore().getConfiguration().getLanguage();
	this.resBundle = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons", oLocale);
  //initialize _showIcons prop.
	this._showIcons = false;
	this._firstTime = true;
	
	this._sTextShowMore = this.resBundle.getText("TIMELINE_TEXT_SHOW_MORE");
	this._sTextShowLess = this.resBundle.getText("TIMELINE_TEXT_SHOW_LESS");
	
	this._replyInfoText = new sap.m.Text({
		maxLines : 1,
		width : "100%"
	});
	this._replyInfoBar = new sap.m.Toolbar({
		id : this.getId() + "-replyInfoBar",
		content : [this._replyInfoText],
		design : sap.m.ToolbarDesign.Info,
		visible : false
	});
	
	this._replyLink = new sap.m.Link({
		text: this.resBundle.getText("TIMELINE_REPLY"),
		tooltip: this.resBundle.getText("TIMELINE_REPLY"), 
		press: function(oEvent) {
			that._openReplyDialog();
		}
	});
	this._replyLink.addStyleClass("sapSuiteUiCommonsTimelineItemActionLink");
	
	this._jamBar = new sap.m.Toolbar({
		//content: [this._replyLink]
	  	});
	/*
	this._replyInput = new sap.m.Input({
		liveChange: function(oEvent){
			that._addReplyInputArea();
		}
	});
	*/
	this._replyInputArea = new sap.m.TextArea({
		height: "4rem",
		width: "100%",
		liveChange: function (oEvent) {
			that._liveChange(oEvent);
		}

	}); 
	this._replyPop = new sap.m.Popover({
		initialFocus: this._replyInputArea,
		title: this.resBundle.getText("TIMELINE_REPLIES"),   
		placement: sap.m.PlacementType.Vertical,
		
		footer: new sap.m.Toolbar({
			content: [
			          //this._replyInput,
			          new sap.m.ToolbarSpacer(),
			          new sap.m.Button({
			        	  text: this.resBundle.getText("TIMELINE_REPLY"),
			        	  press: function() {
			        		  that._replyPost();
			        		  that._replyPop.close();
			        	  }
			          })
			         ]
		}),
		afterClose: function(oEvent) {
			// recalculate reply number?
			if (that._list && that._list.getItems().length) {
				
				that._replyLink.setText(that.resBundle.getText("TIMELINE_REPLY") + " (" + that._list.getItems().length + ")");
			}
		},

		contentHeight : "15rem",
		contentWidth: "20rem"
	});
	
	//notch orientation
	this._orientation = "V";
  
};

sap.suite.ui.commons.TimelineItem.prototype._replyPost = function() {

	var replyText = this._replyInputArea.getValue();
	this.fireReplyPost({value: replyText});

};



sap.suite.ui.commons.TimelineItem.prototype.setReplyList = function(replyList) {
	if (replyList === null) return;
	  //this method get called  implicitly when open popup, thus need to check if its null
	this.setAggregation("replyList", replyList, true);

	// after update need to reset the focus
	var that = this;
	this.getReplyList().attachUpdateFinished(function(oEvent) {
		var oFocusRef = that._replyInputArea.getDomRef("inner");
		if (oFocusRef) { //if popup already open , reset focus
			jQuery(oFocusRef.id).focus();
		}
	});
};




sap.suite.ui.commons.TimelineItem.prototype._openReplyDialog = function() {


	if (this._customReply){
		this.getCustomReply().openBy(this._replyLink);
		this.fireReplyListOpen();
		return;
	} else {
		this.fireReplyListOpen();
		this._replyInputArea.setValue('');
		this._oldReplyInputArea = '';
		
		/*if (!this._list) {
			this._list = this.getReplyList(); // when odata update happens, only once?
		}*/
		this._list = this.getReplyList();
		if (this._list !== null) {
			this._replyPop.addContent(this._list);
		
	
		} 
		this._replyPop.addContent(this._replyInputArea);
		this._replyPop.openBy(this._replyLink);
}
	
};

sap.suite.ui.commons.TimelineItem.prototype._createSuggestionPopup = function(oInput) {
	var that = this;
	this._suggestionPopup = new sap.m.Popover(oInput.getId() + "-suggestion_popup", {
				showHeader : false,
				placement : sap.m.PlacementType.Bottom,
				contentWidth: "20rem",
				initialFocus : oInput
			}).attachAfterClose(function() {

			});
	//this._overwritePopover(this._suggestionPopup, oInput);		
	if (this.getParent() && this.getParent()._overwritePopover) {
		this.getParent()._overwritePopover(this._suggestionPopup, oInput);
	}
	
	this._suggestList = new sap.m.List(this.getId() + "-suggestlist", {
		showNoData: false,
		mode : sap.m.ListMode.SingleSelectMaster,

		selectionChange : function(oEvent) {
			var oItem = oEvent.getSource().getSelectedItem();
			that._suggestionPopup.close();
			var strInput = that._replyInputArea.getValue();
			var insertVal = '';
			var desc = oItem.getDescription();
			if (desc.match(/\S+@\S+\.\S+/)) {  // if its an email address, get the first part of it
				insertVal =  "@" + desc.split('@')[0] + " ";
			} else {
				insertVal = "@" + desc + " ";
			}
			
			var newVal = that.getParent()._getNewString(strInput, that._inputDiff.val, insertVal);
			that._replyInputArea.setValue(newVal);
			that._oldReplyInputArea = newVal;
			that.fireSuggestionItemSelected({
					//selectedItem: new sap.ui.core.Item({"text": oItem.getLabel(), "key": oItem.getValue()})
					selectedItem: oItem
			});
		}
	});	
	this._suggestionPopup.addContent(this._suggestList);	
};

sap.suite.ui.commons.TimelineItem.prototype._liveChange = function(oEvent) {
	// only fire event when change is ^@ or \s@
	//should close popover if it is open
	if (this._suggestionPopup && this._suggestionPopup.isOpen()) {
		this._suggestionPopup.close();
	}
	
	var strInput = oEvent.getParameters().value;
	
	if (!this.getParent() || !this.getParent().getShowSuggestion()) {
		this._oldReplyInputArea = strInput; 
		return;
	}
	
	//this._getCursorPosition(strInput, this._oldAddInput);
	var oInput = oEvent.getSource();
	this._inputDiff = this.getParent()._getDiffWord(strInput, this._oldReplyInputArea);
//	if (this._lastInputOp == "A" || this._lastInputOp == "D") {
	if (this._inputDiff.val.match(/^@|\s@/g) && this._inputDiff.val.length > 1) {
			if (this._inputDiff.op === "A") {
			var that = this;
			if (!this._suggestionPopup) {
				this._createSuggestionPopup(oInput);
			}
			this.fireSuggest({
					suggestValue: this._inputDiff.val
			});
	
	
			this._suggestList.destroyItems();
			var items = this.getSuggestionItems();
			
			for (var i=0; i<items.length; i++) {
				this._suggestList.addItem(new sap.m.StandardListItem({
					icon: items[i].getIcon(),
					title: items[i].getTitle(),
					description: items[i].getDescription()
				}));
			}
	
			
			this._suggestionPopup.openBy(oInput);			
		} else if (this._inputDiff.op === "D") {
			//delete the whole words
			var newVal = this.getParent()._getNewString(strInput, this._inputDiff.val, '');
			this._replyInputArea.setValue(newVal);
			
		}

	} else if (this._suggestionPopup && this._inputDiff.val.length == 0) { // adding a space. should close the suggestion
		this._suggestionPopup.close();			
	}

	

	this._oldReplyInputArea = strInput; 
};


sap.suite.ui.commons.TimelineItem.prototype._addReplyInputArea = function(oEvent) {
	this._replyPop.addContent(this._replyInputArea);
};

sap.suite.ui.commons.TimelineItem.prototype._formatDateValue = function(iDate) {
// Check different input type for Date
	var oDate;
	if (iDate instanceof Date) {
		oDate = iDate;
	} else if (typeof iDate === "string") {
	// handle format /Date(milliseconds)/
	  if (iDate.indexOf("Date") != -1) {
	  	var iTime = iDate.substring(iDate.indexOf("(") + 1, iDate.indexOf(")"));
	  	oDate = new Date(parseInt(iTime));
	  } else {
		  return iDate;
	  }
	}	else {
		oDate = new Date(parseInt(iDate));
	}
	var returnedDate = "";
//	var u = false;
	var diff = 0, t, T = new Date();
/*	var cyear = u ? T.getUTCFullYear() : T.getFullYear();
	var cmonth = u ? T.getUTCMonth() : T.getMonth();
	var cday = u ? T.getUTCDate() : T.getDate();
	var tyear = u ? oDate.getUTCFullYear() : oDate.getFullYear();
	var tmonth = u ? oDate.getUTCMonth() : oDate.getMonth();
	var tday = u ? oDate.getUTCDate() : oDate.getDate();*/
	var cyear = T.getFullYear();
	var cmonth = T.getMonth();
	var cday = T.getDate();
	var tyear = oDate.getFullYear();
	var tmonth = oDate.getMonth();
	var tday = oDate.getDate();
	var cdate = Date.UTC(cyear, cmonth, cday);
	var tdate = Date.UTC(tyear, tmonth, tday);
	t = cdate.valueOf() - tdate.valueOf();
	diff = Math.floor(t / (24 * 60 * 60 * 1000));
	var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({style: "short"});
  var timeFormat = sap.ui.core.format.DateFormat.getTimeInstance({style: "short"});

	if (diff == 0) {
		returnedDate = this.resBundle.getText('TIMELINE_TODAY');
	} else if (diff == 1) {
		returnedDate = this.resBundle.getText('TIMELINE_YESTERDAY');
//	} else if (diff > 1){
	} else {
		returnedDate = dateFormat.format(oDate);
	}
/*	} else {
		return oDate.toString();
	}*/
	returnedDate += " " + this.resBundle.getText('TIMELINE_AT') + " " + timeFormat.format(oDate);
	return returnedDate;
};
      
      
sap.suite.ui.commons.TimelineItem.prototype._getImageControl = function() {
	var sIconSrc = this.getIcon() ? this.getIcon() : "activity-items";
	var sImgId = this.getId()+ '-icon';
	var mProperties = {src : sIconSrc};
	var aCssClasses = [ 'sapSuiteUiCommonsTimelineItemIcon' ];
	
	this._oImageControl = sap.m.ImageHelper.getImageControl(sImgId,
			this._oImageControl, this, mProperties, aCssClasses);

	return this._oImageControl;
};      


sap.suite.ui.commons.TimelineItem.prototype._isOfTypeTimelineItem = function() {
	return true;
};

sap.suite.ui.commons.TimelineItem.prototype.setLayout = function(position, alignment){
	this._position = position;
	this._alignment = alignment;
};

sap.suite.ui.commons.TimelineItem.prototype.setUserNameClickable = function(userNameClickable) {
	this.setProperty("userNameClickable", userNameClickable, true);
	if (!this._userNameLink) {
		var that = this;
		this._userNameLink = new sap.m.Link({
		text : this.getUserName(),
		tooltip: this.getUserName(),
		press : function(oEvent) {that.fireUserNameClicked();}});	
	}
};

sap.suite.ui.commons.TimelineItem.prototype.setText = function(text) {  // todo... change m.Text
	this.setProperty("text", text);
	if (!this._textBox){
	/*	this._textBox = new sap.m.Text({
			maxLines : 10,
			text : this.getText()		
		});*/
		
		this._textBox = this.getText();
	}
};


/**
	 * The first this._nMaxCollapsedLength characters of the text are shown in the collapsed form, the text string ends up
	 * with a complete word, the text string contains at least one word
	 *
	 * @private
	 */
	sap.suite.ui.commons.TimelineItem.prototype._getCollapsedText = function() {
		var sShortText = this._sFullText.substring(0, this._nMaxCollapsedLength);
		var nLastSpace = sShortText.lastIndexOf(" ");
		if (nLastSpace > 0) {
			this._sShortText = sShortText.substr(0, nLastSpace);
		} else {
			this._sShortText = sShortText;
		}
		return this._sShortText;
	};


/**
	 * Expands or collapses the text of the FeedListItem expanded state: this._sFullText + ' ' + 'LESS' collapsed state:
	 * this._sShortText + '...' + 'MORE'
	 *
	 * @private
	 */
	sap.suite.ui.commons.TimelineItem.prototype._toggleTextExpanded = function() {
		var $text = jQuery.sap.byId(this.getId() + "-realtext");
		var $threeDots = jQuery.sap.byId(this.getId() + "-threeDots");
		if (this._bTextExpanded) {
			$text.html(jQuery.sap.encodeHTML(this._sShortText).replace(/&#xa;/g, "<br>"));
			$threeDots.text(" ... ");
			this._oLinkExpandCollapse.setText(this._sTextShowMore);
			this._bTextExpanded = false;
		} else {
			$text.html(jQuery.sap.encodeHTML(this._sFullText).replace(/&#xa;/g, "<br>"));
			$threeDots.text("  ");
			this._oLinkExpandCollapse.setText(this._sTextShowLess);
			this._bTextExpanded = true;
		}
		this.getParent()._performUiChanges(this); 
	};
	
	/**
	 * Gets the link for expanding/collapsing the text
	 *
	 * @private
	 */
	sap.suite.ui.commons.TimelineItem.prototype._getLinkExpandCollapse = function() {
		if (!this._oLinkExpandCollapse) {
			jQuery.sap.require("sap.m.Link");
			this._oLinkExpandCollapse = new sap.m.Link({
				text : this._sTextShowMore,
				press : jQuery.proxy(function() {
					this._toggleTextExpanded();
				}, this)
			});
			this._bTextExpanded = false;
			// Necessary so this gets garbage collected and the text of the link changes at clicking on it
			this._oLinkExpandCollapse.setParent(this, null, true);
		}
		return this._oLinkExpandCollapse;
	};
	
	/**
	 * Checks if the text is expandable: If maxCharacters is empty the default values are used, which are 300 characters (
	 * on mobile devices) and 500 characters ( on tablet and desktop). Otherwise maxCharacters is used as a limit. Based on
	 * this value, the text of the FeedListItem is collapsed once the text reaches this limit.
	 *
	 * @private
	 */
	sap.suite.ui.commons.TimelineItem.prototype._checkTextIsExpandable = function() {
		this._nMaxCollapsedLength = this.getMaxCharacters();
		if (this._nMaxCollapsedLength === 0) {
			if (sap.ui.Device.system.phone) {
				this._nMaxCollapsedLength = this._nMaxCharactersMobile;
			} else {
				this._nMaxCollapsedLength = this._nMaxCharactersDesktop;
			}
		}
		this._sFullText = this.getText();
		var bTextIsExpandable = false;
		if (this._sFullText.length > this._nMaxCollapsedLength) {
			bTextIsExpandable = true;
		}
		return bTextIsExpandable;
	};


sap.suite.ui.commons.TimelineItem.prototype.setCustomReply = function(oReply){
	if (oReply){
		this._customReply = true;
		this.setAggregation("customReply", oReply, true);

	} else {
		this._customReply = false;
	}
};

sap.suite.ui.commons.TimelineItem.prototype.setCustomMessage = function(msg){
	this._replyInfoText.setText(msg);
	if (msg && msg.length > 0) {
		this._replyInfoBar.setVisible(true);
	} else {
		this._replyInfoBar.setVisible(false);
	}
	this.invalidate();   //otherwise, it doesn't re-render
};


sap.suite.ui.commons.TimelineItem.prototype.onBeforeRendering = function() {
	if (this.getUserNameClickable() && (!this._userNameLink)) {
		var that = this;
		this._userNameLink = new sap.m.Link({
		text : this.getUserName(),
		tooltip:this.getUserName(),
		press : function(oEvent) {that.fireUserNameClicked();}});	
	}
	if (!this._list) {
		this._list = this.getReplyList(); //when odata update happens, only once?

	};

	if (this.getReplyCount() > 0) {		
		this._replyLink.setText(this.resBundle.getText("TIMELINE_REPLY") + " (" + this.getReplyCount() + ")");
	} else if (this._list && this._list.getItems().length > 0) {
		this._replyLink.setText(this.resBundle.getText("TIMELINE_REPLY") + " (" + this._list.getItems().length + ")");
	}
	var that = this;
	var actionList = this.getCustomAction();
	if (this._firstTime && this.getParent()._aFilterList && this.getParent().getEnableSocial() ) {
		this._jamBar.addContent(this._replyLink);
	}
	if (this._firstTime && actionList  && actionList.length > 0) {

		for (var i = 0; i < actionList.length; i++) {
			var key = actionList[i].getKey();
			var value = actionList[i].getValue();
			var actionLink = new sap.m.Link({
				text: actionList[i].getValue(),
				tooltip: actionList[i].getValue()
			});
			actionLink.addStyleClass("sapSuiteUiCommonsTimelineItemActionLink");
			actionLink.attachPress({"value" : value, "key" : key}, function(oEvent, oData) {
				
				that.fireCustomActionClicked({"value": oData.value, "key": oData.key, "linkObj": this});
			});
			this._jamBar.addContent(actionLink);
			
		}
	this._firstTime = false;
	};

	
};

sap.suite.ui.commons.TimelineItem.prototype.onAfterRendering = function() {

	if (this.getParent() && this.getParent()._performUiChanges) {
		this.getParent()._performUiChanges(this);
	}
};

sap.suite.ui.commons.TimelineItem.prototype._getUserPictureControl = function() {

	var sImgId = this.getId() + "-img";
	var sSize = "2rem";
	var sHeight = sSize;
	var sWidth = sSize;

	var mProperties = {
			src: this.getUserPicture(),
			height: sHeight,
//			size: sSize,
			width: sWidth
		};

	this._oUserPictureControl = sap.m.ImageHelper.getImageControl(sImgId, this._oUserPictureControl, this, mProperties);
	this._oUserPictureControl.setDensityAware(false); // Jam Can't deal with that
	return this._oUserPictureControl;
};

sap.suite.ui.commons.TimelineItem.prototype._setSuggestionList = function() {
	//this._suggestList.updateAggregation("items", this.getSuggestionItems());
	this._suggestList.destroyItems();
	var items = this.getSuggestionItems();
	
	for (var i=0; i<items.length; i++) {
		this._suggestList.addItem(new sap.m.StandardListItem({
			icon: items[i].getIcon(),
			title: items[i].getTitle(),
			description: items[i].getDescription()
		}));
	}
};

sap.suite.ui.commons.TimelineItem.prototype.refreshSuggestionItems = function(sReason) {
	this._suggestList.setBusy(true);
	this.updateAggregation("suggestionItems");  //this will call the update method
};

sap.suite.ui.commons.TimelineItem.prototype.updateSuggestionItems = function() {
	this.updateAggregation("suggestionItems");
	this._setSuggestionList(); 
	this._suggestList.setBusy(false);

	
};

sap.suite.ui.commons.TimelineItem.prototype.exit = function() {

	if (this._oImageControl) {
		this._oImageControl.destroy();
		this._oImageControl = undefined;
	}
	if (this._userNameLink) {
		this._userNameLink.destroy();
		this._userNameLink = undefined;
	}
	if (this._replyLink) {
		this._replyLink.destroy();
		this._replyLink = undefined;
	}
	if (this._replyPop) {
		this._replyPop.destroy();
		this._replyPop = undefined;
	}
	if (this._jamBar) {
		this._jamBar.destroy();
		this._jamBar = undefined;
	}
	if (this._oUserPictureControl) {
		this._oUserPictureControl.destroy();
		this._oUserPictureControl = undefined;
	}
	//if (this._textBox) {
		//this._textBox.destroy();
		//this._textBox = undefined;
//	}
	if (this._replyInputArea) {
		this._replyInputArea.destroy();
		this._replyInputArea = undefined;
	}
	if (this._replyInfoText) {
		this._replyInfoText.destroy();
		this._replyInfoText = undefined;
	}
	if (this._replyInfoBar) {
		this._replyInfoBar.destroy();
		this._replyInfoBar = undefined;
	}
};

      
