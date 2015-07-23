/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.ProcessFlowNode.
jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowNode");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ProcessFlowNode.
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
 * <li>{@link #getIsTitleClickable isTitleClickable} : boolean (default: false)</li>
 * <li>{@link #getLaneId laneId} : string</li>
 * <li>{@link #getNodeId nodeId} : string</li>
 * <li>{@link #getState state} : sap.suite.ui.commons.ProcessFlowNodeState (default: sap.suite.ui.commons.ProcessFlowNodeState.Neutral)</li>
 * <li>{@link #getChildren children} : string[]</li>
 * <li>{@link #getTitleAbbreviation titleAbbreviation} : string</li>
 * <li>{@link #getStateText stateText} : string</li>
 * <li>{@link #getTexts texts} : string[]</li>
 * <li>{@link #getHighlighted highlighted} : boolean (default: false)</li>
 * <li>{@link #getFocused focused} : boolean (default: false)</li>
 * <li>{@link #getTag tag} : object</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getParents parents} : string | sap.suite.ui.commons.ProcessFlowNode</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.ProcessFlowNode#event:titlePress titlePress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.ProcessFlowNode#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control enables you to see documents (or other items) in respect to their statuses – positive, negative, neutral, planned, planned negative. In addition to the node title (which can be optionally a hyperlink) also two other text fields are provided and can be filled. The process flow nodes consider all styles depending on the status they are in. The user can update or change the content of the node. The content of the node can be also filtered according to updated data and specific parameters set. This means that also the node’s style is affected.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.ProcessFlowNode", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"isTitleClickable" : {type : "boolean", group : "Misc", defaultValue : false, deprecated: true},
		"laneId" : {type : "string", group : "Misc", defaultValue : null},
		"nodeId" : {type : "string", group : "Misc", defaultValue : null},
		"state" : {type : "sap.suite.ui.commons.ProcessFlowNodeState", group : "Misc", defaultValue : sap.suite.ui.commons.ProcessFlowNodeState.Neutral},
		"children" : {type : "string[]", group : "Misc", defaultValue : null},
		"titleAbbreviation" : {type : "string", group : "Misc", defaultValue : null},
		"stateText" : {type : "string", group : "Misc", defaultValue : null},
		"texts" : {type : "string[]", group : "Misc", defaultValue : null},
		"highlighted" : {type : "boolean", group : "Misc", defaultValue : false},
		"focused" : {type : "boolean", group : "Misc", defaultValue : false},
		"tag" : {type : "object", group : "Misc", defaultValue : null}
	},
	associations : {
		"parents" : {type : "sap.suite.ui.commons.ProcessFlowNode", multiple : true, singularName : "parent"}
	},
	events : {
		"titlePress" : {deprecated: true}, 
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.ProcessFlowNode with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.ProcessFlowNode.extend
 * @function
 */

sap.suite.ui.commons.ProcessFlowNode.M_EVENTS = {'titlePress':'titlePress','press':'press'};


/**
 * Getter for property <code>title</code>.
 * The node title.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#setTitle
 * @function
 */


/**
 * Getter for property <code>isTitleClickable</code>.
 * Specifies if the node title is clickable.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isTitleClickable</code>
 * @public
 * @deprecated Since version 1.26. 
 * According to the new requirement there should be only one click event for each node (click on the whole node – see Press event) that is why titlePress event should not be used any longer. Hence isTitleClickable should not be used either.
 * @name sap.suite.ui.commons.ProcessFlowNode#getIsTitleClickable
 * @function
 */

/**
 * Setter for property <code>isTitleClickable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsTitleClickable  new value for property <code>isTitleClickable</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.26. 
 * According to the new requirement there should be only one click event for each node (click on the whole node – see Press event) that is why titlePress event should not be used any longer. Hence isTitleClickable should not be used either.
 * @name sap.suite.ui.commons.ProcessFlowNode#setIsTitleClickable
 * @function
 */


/**
 * Getter for property <code>laneId</code>.
 * Specifies the assignment of the node to the respective lane.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>laneId</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#getLaneId
 * @function
 */

/**
 * Setter for property <code>laneId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLaneId  new value for property <code>laneId</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#setLaneId
 * @function
 */


/**
 * Getter for property <code>nodeId</code>.
 * >Node identifier.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>nodeId</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#getNodeId
 * @function
 */

/**
 * Setter for property <code>nodeId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNodeId  new value for property <code>nodeId</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#setNodeId
 * @function
 */


/**
 * Getter for property <code>state</code>.
 * State of the node.
 *
 * Default value is <code>sap.suite.ui.commons.ProcessFlowNodeState.Neutral</code>
 *
 * @return {sap.suite.ui.commons.ProcessFlowNodeState} the value of property <code>state</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#getState
 * @function
 */

/**
 * Setter for property <code>state</code>.
 *
 * Default value is <code>sap.suite.ui.commons.ProcessFlowNodeState.Neutral</code> 
 *
 * @param {sap.suite.ui.commons.ProcessFlowNodeState} oState  new value for property <code>state</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#setState
 * @function
 */


/**
 * Getter for property <code>children</code>.
 * Defines an array of children of the node.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>children</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#getChildren
 * @function
 */

/**
 * Setter for property <code>children</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aChildren  new value for property <code>children</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#setChildren
 * @function
 */


/**
 * Getter for property <code>titleAbbreviation</code>.
 * Title abbreviation is used in the compact mode.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>titleAbbreviation</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#getTitleAbbreviation
 * @function
 */

/**
 * Setter for property <code>titleAbbreviation</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitleAbbreviation  new value for property <code>titleAbbreviation</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#setTitleAbbreviation
 * @function
 */


/**
 * Getter for property <code>stateText</code>.
 * Description of the state, for example "Status OK".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>stateText</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#getStateText
 * @function
 */

/**
 * Setter for property <code>stateText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sStateText  new value for property <code>stateText</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#setStateText
 * @function
 */


/**
 * Getter for property <code>texts</code>.
 * The property contains the additional texts on the node. The expected type is array of strings. One array must not contain more than two strings. Additional strings in the array will be ignored.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>texts</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#getTexts
 * @function
 */

/**
 * Setter for property <code>texts</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aTexts  new value for property <code>texts</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#setTexts
 * @function
 */


/**
 * Getter for property <code>highlighted</code>.
 * The parameter defines if the node should be displayed in highlighted state.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>highlighted</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#getHighlighted
 * @function
 */

/**
 * Setter for property <code>highlighted</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bHighlighted  new value for property <code>highlighted</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#setHighlighted
 * @function
 */


/**
 * Getter for property <code>focused</code>.
 * The parameter defines if the node should be displayed in focus state.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>focused</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#getFocused
 * @function
 */

/**
 * Setter for property <code>focused</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFocused  new value for property <code>focused</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#setFocused
 * @function
 */


/**
 * Getter for property <code>tag</code>.
 * The user-defined object which is returned back to the user by a node click event.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>tag</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#getTag
 * @function
 */

/**
 * Setter for property <code>tag</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oTag  new value for property <code>tag</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#setTag
 * @function
 */


/**
 * Reference to ProcessFlowNodes which appears before this ProcessFlowNode.
 * 
 * @return {string[]}
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#getParents
 * @function
 */

	
/**
 *
 * @param {string | sap.suite.ui.commons.ProcessFlowNode} vParent
 *    Id of a parent which becomes an additional target of this <code>parents</code> association.
 *    Alternatively, a parent instance may be given. 
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#addParent
 * @function
 */

/**
 * @param {int | string | sap.suite.ui.commons.ProcessFlowNode} vParent the parent to remove or its index or id
 * @return {string} the id of the removed parent or null
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#removeParent
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#removeAllParents
 * @function
 */

	
/**
 * This event handler is executed when the user clicks the node title. This event is fired only when the title is clickable (isTitleClickable equals true).
 *
 * @name sap.suite.ui.commons.ProcessFlowNode#titlePress
 * @event
 * @deprecated Since version 1.26. 
 * Should not be used any longer, use Press event instead ( click on the node)
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent The node identification.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'titlePress' event of this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/> itself. 
 *  
 * This event handler is executed when the user clicks the node title. This event is fired only when the title is clickable (isTitleClickable equals true).
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.26. 
 * Should not be used any longer, use Press event instead ( click on the node)
 * @name sap.suite.ui.commons.ProcessFlowNode#attachTitlePress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'titlePress' event of this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.26. 
 * Should not be used any longer, use Press event instead ( click on the node)
 * @name sap.suite.ui.commons.ProcessFlowNode#detachTitlePress
 * @function
 */

/**
 * Fire event titlePress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'oEvent' of type <code>object</code> The node identification.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @protected
 * @deprecated Since version 1.26. 
 * Should not be used any longer, use Press event instead ( click on the node)
 * @name sap.suite.ui.commons.ProcessFlowNode#fireTitlePress
 * @function
 */


/**
 * This event is fired when the user clicks on the node. However, this event is not fired if the titlePress event has been fired.
 *
 * @name sap.suite.ui.commons.ProcessFlowNode#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent The node identification.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/> itself. 
 *  
 * This event is fired when the user clicks on the node. However, this event is not fired if the titlePress event has been fired.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowNode#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'oEvent' of type <code>object</code> The node identification.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.ProcessFlowNode#firePress
 * @function
 */

// Start of sap/suite/ui/commons/ProcessFlowNode.js
/**
* Process Flow Node controller.
*/
jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("sap.m.Text");

/* This is a current zoom level for the node. The level of details on the node is derived from this value.*/
sap.suite.ui.commons.ProcessFlowNode.prototype._zoomLevel = sap.suite.ui.commons.ProcessFlowZoomLevel.Two;
/* The consumer defined object which is returned back to the consumer with node click event.*/
sap.suite.ui.commons.ProcessFlowNode.prototype._tag = null;
/* The display state of the node. This property dictates the regular, highlighted, dimmed visual style of the control */
sap.suite.ui.commons.ProcessFlowNode.prototype._displayState = sap.suite.ui.commons.ProcessFlowDisplayState.Regular;
/* resource bundle for the localized strings */
sap.suite.ui.commons.ProcessFlowNode.prototype._oResBundle = null;
/* This property defines the folded corners for the single node control. The values true - means folded corner
false/null/undefined - means normal corner
*/
sap.suite.ui.commons.ProcessFlowNode.prototype._foldedCorner = false;
sap.suite.ui.commons.ProcessFlowNode.prototype._foldedCornerControl = null;
sap.suite.ui.commons.ProcessFlowNode.prototype._parent = null;
sap.suite.ui.commons.ProcessFlowNode.prototype._headerControl = null;
sap.suite.ui.commons.ProcessFlowNode.prototype._stateTextControl = null;
sap.suite.ui.commons.ProcessFlowNode.prototype._iconControl = null;
sap.suite.ui.commons.ProcessFlowNode.prototype._text1Control = null;
sap.suite.ui.commons.ProcessFlowNode.prototype._text2Control = null;
sap.suite.ui.commons.ProcessFlowNode.prototype._navigationFocus = false;
sap.suite.ui.commons.ProcessFlowNode.prototype._sMouseEvents = " mousedown mouseup mouseenter mouseleave ";
sap.suite.ui.commons.ProcessFlowNode.prototype._sMouseTouchEvents = (sap.ui.Device.support.touch) ? 'saptouchstart saptouchcancel touchstart touchend' : '';

  if(sap.ui.Device.browser.msie) {
    sap.suite.ui.commons.ProcessFlowNode.prototype._grabCursorClass = "sapSuiteUiGrabCursorIEPF";
    sap.suite.ui.commons.ProcessFlowNode.prototype._grabbingCursorClass = "sapSuiteUiGrabbingCursorIEPF";
    } else {
      sap.suite.ui.commons.ProcessFlowNode.prototype._grabCursorClass = "sapSuiteUiGrabCursorPF";
      sap.suite.ui.commons.ProcessFlowNode.prototype._grabbingCursorClass = "sapSuiteUiGrabbingCursorPF";
    }
  sap.suite.ui.commons.ProcessFlowNode.prototype._nodeHoverClass= "sapSuiteUiCommonsProcessFlowNodeHover";
  sap.suite.ui.commons.ProcessFlowNode.prototype._nodeActiveClass= "sapSuiteUiCommonsProcessFlowNodeActive";
  sap.suite.ui.commons.ProcessFlowNode.prototype._nodeFCHoverClass = "sapSuiteUiCommonsProcessFlowFoldedCornerNodeHover";
  sap.suite.ui.commons.ProcessFlowNode.prototype._nodeFCActiveClass = "sapSuiteUiCommonsProcessFlowFoldedCornerNodeActive";
  sap.suite.ui.commons.ProcessFlowNode.prototype._nodeFCIconHoverClass =  "sapSuiteUiCommonsProcessFlowFoldedCornerNodeIconHover";

/**
 *  ProcessFlowNode initial function
 *  @public
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.init = function() {
  sap.ui.core.IconPool.addIcon("context-menu", "businessSuite", "PFBusinessSuiteInAppSymbols", "e02b", true);
  if( !this._oResBundle ) {
    this._oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
  }
};

/**
 * Destroys all created controls
 * @public
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.exit = function() {
  if( this._foldedCornerControl ) {
    this._foldedCornerControl.destroy();
    this._foldedCornerControl = null;
  }
  if( this._headerControl ) {
    this._headerControl.destroy();
    this._headerControl = null;
  }
  if( this._stateTextControl ) {
    this._stateTextControl.destroy();
    this._stateTextControl = null;
  }
  if( this._iconControl ) {
    this._iconControl.destroy();
    this._iconControl = null;
  }
  if( this._text1Control ) {
    this._text1Control.destroy();
    this._text1Control = null;
  }
  if( this._text2Control ) {
    this._text2Control.destroy();
    this._text2Control = null;
  }
  this.$().unbind(this._sMouseEvents, this._handleEvents);
  if (sap.ui.Device.support.touch) {
    this.$().unbind(this._sMouseTouchEvents, this._handleEvents);
  }
};

/**
* the event binding must be removed to avoid memory leaks
* @public
*/ 
sap.suite.ui.commons.ProcessFlowNode.prototype.onBeforeRendering = function() {
  this.$().unbind(this._sMouseEvents, this._handleEvents);
  if (sap.ui.Device.support.touch) {
    this.$().unbind(this._sMouseTouchEvents, this._handleEvents);
  }
};

/**
* Setter for the parent flow control. It is used to propagate the onNodeTitlePresses event
* @private
* @param {sap.suite.ui.commons.ProcessFlowNode} oControl
*/
sap.suite.ui.commons.ProcessFlowNode.prototype._setParentFlow = function( oControl ) {
  this._parent = oControl;
};

/**
 * Getter for folded corner
 * @private
 * @returns {sap.ui.core.Icon}
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._getFoldedCornerControl = function() {
  if( this._foldedCornerControl ) {
    this._foldedCornerControl.destroy();
  }
  this._foldedCornerControl = new sap.ui.core.Icon({
    id: this.getId() + "-corner-icon",
    src: sap.ui.core.IconPool.getIconURI("context-menu", "businessSuite"),
    visible: true
  });
  this._foldedCornerControl.addStyleClass("sapUiIconPointer");

  switch( this._getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
      this._foldedCornerControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode1ZoomLevel1");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
      this._foldedCornerControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode1ZoomLevel2");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
      this._foldedCornerControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode1ZoomLevel3");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      this._foldedCornerControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode1ZoomLevel4");
      break;
  }
  this._foldedCornerControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode1");

  return this._foldedCornerControl;
};

/**
 * Get header control
 * @private
 * @returns {sap.m.Text}
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._getHeaderControl = function() { // EXC_SAP_006_1
  if( this._headerControl ) {
    this._headerControl.destroy();
  }

  var nOfLines = 0;
  var sWidth = "";
  var bVisible = true;
  var sText = this.getTitle();

  switch( this._getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
      nOfLines = 3;
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
      nOfLines = 3;
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
      nOfLines = 2;
      sText = this.getTitleAbbreviation();
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      sText = "";
      nOfLines = 0;
      sWidth = "0px";
      bVisible = false;
      break;
  }
  this._headerControl = new sap.m.Text({
    id: this.getId() + "-nodeid-anchor-title",
    text: sText,
    visible: bVisible,
    wrapping: true,
    width: sWidth,
    maxLines: nOfLines
  });
  if( this.getIsTitleClickable()) {
    this._headerControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3TitleClickable");
  }
  switch( this._getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
      this._headerControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3TitleZoomLevel1");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
      this._headerControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3TitleZoomLevel2");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
      this._headerControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3TitleZoomLevel3");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      this._headerControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3TitleZoomLevel4");
      break;
  }
  this._headerControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3Title");
  return this._headerControl;
};

/**
 * Get icon control
 * @private
 * @returns {sap.ui.core.Icon}
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._getIconControl = function() { // EXC_SAP_006_1
  if( this._iconControl ) {
    this._iconControl.destroy();
  }
  var sSrc = null;
  var bVisible = true;
  var stateText = this.getStateText();

  // request (Dec 2014): display icon even when there's no stateText
    switch( this.getState() ) {
      case sap.suite.ui.commons.ProcessFlowNodeState.Positive:
        sSrc = "sap-icon://message-success";
        break;
      case sap.suite.ui.commons.ProcessFlowNodeState.Negative:
      case sap.suite.ui.commons.ProcessFlowNodeState.PlannedNegative:
        sSrc = "sap-icon://message-error";
        break;
      case sap.suite.ui.commons.ProcessFlowNodeState.Planned:
        sSrc = null; // latest request: do not display state icon, was "sap-icon://to-be-reviewed"
        break;
      case sap.suite.ui.commons.ProcessFlowNodeState.Neutral:
        sSrc = "sap-icon://process";
        break;
    }
  this._iconControl = new sap.ui.core.Icon({
    id: this.getId() + "-icon",
    src: sSrc,
    visible: bVisible
  });
  this._iconControl.addStyleClass("sapUiIconPointer");

  // correct RTL behaviour for state icon
  var bRtl = sap.ui.getCore().getConfiguration().getRTL();

  if (bRtl) {
    this._iconControl.addStyleClass("sapUiIconSuppressMirrorInRTL");
  }
  switch( this._getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
      var sIconAlignStyle = "sapSuiteUiCommonsProcessFlowNode3StateIconLeft";

      if (bRtl) {
        sIconAlignStyle = "sapSuiteUiCommonsProcessFlowNode3StateIconRight";
      }
      this._iconControl.addStyleClass(sIconAlignStyle);
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      this._iconControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3StateIconCenter");
      break;
  }
  switch( this._getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
      this._iconControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3StateIconZoomLevel1");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
      this._iconControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3StateIconZoomLevel2");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
      this._iconControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3StateIconZoomLevel3");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      this._iconControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3StateIconZoomLevel4");
      break;
  }
  this._iconControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3StateIcon");
  return this._iconControl;
};

/**
 * Get state text control
 * @private
 * @returns {sap.m.Text}
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._getStateTextControl = function() { // EXC_SAP_006_1, EXC_JSHINT_047
  if (this._stateTextControl ) {
    this._stateTextControl.destroy();
  }
  var nOfLines = 2;
  var sWidth = "";
  var bVisible = true;
  var oState = this.getState();
  var sText = (oState === sap.suite.ui.commons.ProcessFlowNodeState.Planned) ? "" : this.getStateText(); // latest request: do not display state text for planned state
  if (oState === sap.suite.ui.commons.ProcessFlowNodeState.PlannedNegative && sText.length === 0) {
  //set default status text for status PlannedNegativ when no text is provided
    sText = "Planned Negative"; 
  }
  // number of lines
  switch( this._getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
      nOfLines = 2;
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      sText = "";
      nOfLines = 0;
      sWidth = "0px";
      bVisible = false;
      break;
  }
  this._stateTextControl = new sap.m.Text({
    id: this.getId() + "-stateText",
    text: sText,
    visible: bVisible,
    wrapping: true,
    width: sWidth,
    maxLines: nOfLines
  });
  switch( oState ) {
    case sap.suite.ui.commons.ProcessFlowNodeState.Positive:
      this._stateTextControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3StatePositive");
      break;
    case sap.suite.ui.commons.ProcessFlowNodeState.Negative:
      this._stateTextControl.addStyleClass("sapSuiteUiCommonsProcessFlowNodeStateNegative");
      break;
    case sap.suite.ui.commons.ProcessFlowNodeState.Planned:
      this._stateTextControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3StatePlanned");
      break;
    case sap.suite.ui.commons.ProcessFlowNodeState.Neutral:
      this._stateTextControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3StateNeutral");
      break;
     case sap.suite.ui.commons.ProcessFlowNodeState.PlannedNegative:
      this._stateTextControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3StatePlanned");
      break;
  }
  switch( this._getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
      this._stateTextControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3StateTextZoomLevel1");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
      this._stateTextControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3StateTextZoomLevel2");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
      this._stateTextControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3StateTextZoomLevel3");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      this._stateTextControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3StateTextZoomLevel4");
      break;
  }
  this._stateTextControl.addStyleClass("sapSuiteUiCommonsProcessFlowNode3StateText");
  return this._stateTextControl;
};

/**
 * Get internal text control
 * @private
 * @param {String} textId
 * @param {String} textToDisplay
 * @param {sap.m.Text} oControl
 * @returns {sap.m.Text}
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._getTextControlInternal = function( textId, textToDisplay, oControl ) {
  if( oControl  ) {
    oControl.destroy();
  }

  var nOfLines = 2;
  var sWidth = "";
  var bVisible = true;
  var sText = textToDisplay;

  switch( this._getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
      nOfLines = 2;
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
      nOfLines = 0;
      sWidth = "0px";
      bVisible = false;
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      sText = "";
      nOfLines = 0;
      sWidth = "0px";
      bVisible = false;
      break;
  }
  if( this.getState) {
    oControl = new sap.m.Text({
      id: this.getId() + textId,
      text: sText,
      visible: bVisible,
      wrapping: true,
      width: sWidth,
      maxLines: nOfLines
    });
  }
  return oControl;
};

/**
 * Get text1 control
 * @private
 * @returns {sap.m.Text}
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._getText1Control = function() {
  var textToDisplay = this.getTexts();

  if( textToDisplay && textToDisplay.length > 0 ) {
    textToDisplay = textToDisplay[0];
  }
  this._text1Control = this._getTextControlInternal("-text1-control",textToDisplay, this._text1Control);

  switch( this._getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
      this._text1Control.addStyleClass("sapSuiteUiCommonsProcessFlowNode3TextWithGapZoomLevel1");
      this._text1Control.addStyleClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel1");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
      this._text1Control.addStyleClass("sapSuiteUiCommonsProcessFlowNode3TextWithGapZoomLevel2");
      this._text1Control.addStyleClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel2");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
      this._text1Control.addStyleClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel3");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      this._text1Control.addStyleClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel4");
      break;
  }
  this._text1Control.addStyleClass("sapSuiteUiCommonsProcessFlowNode3Text");
  return this._text1Control;
};

/**
 * Get text2 control
 * @private
 * @returns {sap.m.Text}
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._getText2Control = function() {
  var textToDisplay = this.getTexts();

  if( textToDisplay && textToDisplay.length > 1 ) {
    textToDisplay = textToDisplay[1];
  }
  else {
    textToDisplay = "";
  }
  this._text2Control = this._getTextControlInternal("-text2-control", textToDisplay, this._text2Control);

  switch( this._getZoomLevel() ) {
    case sap.suite.ui.commons.ProcessFlowZoomLevel.One:
      this._text2Control.addStyleClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel1");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Two:
      this._text2Control.addStyleClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel2");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Three:
      this._text2Control.addStyleClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel3");
      break;
    case sap.suite.ui.commons.ProcessFlowZoomLevel.Four:
      this._text2Control.addStyleClass("sapSuiteUiCommonsProcessFlowNode3TextZoomLevel4");
      break;
  }
  this._text2Control.addStyleClass("sapSuiteUiCommonsProcessFlowNode3Text");
  return this._text2Control;
};


 /**
 * Get zoom level
 * @private
 * @returns {object}
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._getZoomLevel = function() {
  return this._zoomLevel;
};

/**
 * Set zoom level
 * @private
 * @param {object} zoomLevel
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._setZoomLevel = function(zoomLevel) {
  this._zoomLevel = zoomLevel;
};

sap.suite.ui.commons.ProcessFlowNode.prototype._setNavigationFocus = function( navigationFocus ) {
  this._navigationFocus = navigationFocus;
};

sap.suite.ui.commons.ProcessFlowNode.prototype._getNavigationFocus = function() {
  return this._navigationFocus;
};


/**
 * Set folded corner
 * @private
 * @param {Boolean} foldedCorner
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._setFoldedCorner = function( foldedCorner ) {
  this._foldedCorner = foldedCorner;
};

/**
 * Get folded corner
 * @private
 * @returns {Boolean}
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._getFoldedCorner = function( ) {
  return this._foldedCorner;
};

/**
 * Set tag
 * @private
 * @param {object} tagObject
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setTag = function( tagObject ) {
  this._tag = tagObject;
};

/**
 * Get tag
 * @private
 * @returns {object}
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getTag = function( ) {
  return this._tag;
};

/**
 * Based on the focused and highlighted we define display state
 * @private
 * @returns {object}
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._getDisplayState = function() {
  var bIsFocused = this.getFocused();
  var bIsHighlighted = this.getHighlighted();

  if (bIsFocused && bIsHighlighted) {
    this._displayState = sap.suite.ui.commons.ProcessFlowDisplayState.HighlightedFocused;
  }
  else if (bIsFocused) {
    this._displayState = sap.suite.ui.commons.ProcessFlowDisplayState.RegularFocused;
  }
  else if (bIsHighlighted){
    this._displayState = sap.suite.ui.commons.ProcessFlowDisplayState.Highlighted;
  }
  else { // it cannot stay in focused or highlighted mode if there is no such flag.
    if( this._displayState == sap.suite.ui.commons.ProcessFlowDisplayState.HighlightedFocused ||
        this._displayState == sap.suite.ui.commons.ProcessFlowDisplayState.RegularFocused ||
        this._displayState == sap.suite.ui.commons.ProcessFlowDisplayState.Highlighted ) {
      this._setRegularState();
    }
  }
  /*
  not possible to calculate inside, the dimmed must come from outside
  sap.suite.ui.commons.ProcessFlowDisplayState.Dimmed
  sap.suite.ui.commons.ProcessFlowDisplayState.DimmedFocused
  */
  return this._displayState;
};

/**
 * Set to dimmed state
 * @private
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._setDimmedState = function() {
  var bIsFocused = this.getFocused();
  var bIsHighlighted = this.getHighlighted();

  if (bIsHighlighted) {
    throw new Error("Cannot set dimmed state to highlighed node " + this.getNodeId());
  }
  this._displayState = sap.suite.ui.commons.ProcessFlowDisplayState.Dimmed;

  if (bIsFocused) {
    this._displayState = sap.suite.ui.commons.ProcessFlowDisplayState.DimmedFocused;
  }
};

/**
 * Set highlighted nodes to the regular state
 * @private
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._setRegularState = function() {
  this._displayState = sap.suite.ui.commons.ProcessFlowDisplayState.Regular;
};

/**
 * @param {sap.ui.base.Event} oEvent
 * @private
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._handleClick = function(oEvent) {
  // if id include link, it is click on title
  if ( this._getDisplayState() === sap.suite.ui.commons.ProcessFlowDisplayState.Dimmed ||
    this._getDisplayState() === sap.suite.ui.commons.ProcessFlowDisplayState.DimmedFocused) {
   jQuery.sap.log.info("Event ignored, node in dimmend state.");
  }
  else {
    if (this._parent) {
      if (oEvent.target.id.indexOf("title") >= 0 && this.getIsTitleClickable()) {
        this._parent.fireNodeTitlePress(this);
      }
      else {
        this._parent.fireNodePress(this);
      }
      this._parent._setFocusOnMouseClick( this );
    }
  }
  if (oEvent && !oEvent.isPropagationStopped()) {
    oEvent.stopPropagation();
  }
  if (oEvent && !oEvent.isImmediatePropagationStopped()) {
    oEvent.stopImmediatePropagation();
  }
};

/**
 * @param {sap.ui.base.Event} oEvent
 * @private
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.onclick = function(oEvent) {
  if (oEvent && !oEvent.isDefaultPrevented()) {
    oEvent.preventDefault();
  }
  this._handleClick(oEvent);
};

sap.suite.ui.commons.ProcessFlowNode.prototype.onAfterRendering = function(oEvent) {
  if (oEvent && !oEvent.isDefaultPrevented()) {
    oEvent.preventDefault();
  }
  this._sMouseEvents = this._sMouseEvents.concat(' ', this._sMouseTouchEvents);
  this.$().bind(this._sMouseEvents, jQuery.proxy(this._handleEvents, this));
  if (oEvent && !oEvent.isPropagationStopped()) {
    oEvent.stopPropagation();
  }
  if (oEvent && !oEvent.isImmediatePropagationStopped()) {
    oEvent.stopImmediatePropagation();
  }
};

sap.suite.ui.commons.ProcessFlowNode.prototype._handleEvents = function(oEvent) {
  var $ThisChildren = this.$().find('*');
  var $ThisAttribute = this.$().attr('id');
  var isFoldedCorner = this._getFoldedCorner();
  var oScrollContainer = this.getParent();
  
    if (oEvent && !oEvent.isDefaultPrevented()) {
      oEvent.preventDefault();
    }
    switch(oEvent.type) {
      case 'mousedown':
        this.$().removeClass(this._nodeHoverClass).addClass(this._nodeActiveClass);
        $ThisChildren.removeClass(this._nodeHoverClass).addClass(this._nodeActiveClass);
        if (isFoldedCorner) {
          jQuery('#'+$ThisAttribute).removeClass(this._nodeFCHoverClass + ' ' + this._nodeActiveClass).addClass(this._nodeFCActiveClass);
          jQuery('div[id^='+$ThisAttribute+'][id$=-corner-container]').removeClass(this._nodeFCIconHoverClass + ' ' + this._nodeActiveClass).addClass(this._nodeFCActiveClass);
          jQuery('span[id^='+$ThisAttribute+'][id$=-corner-icon]').removeClass(this._nodeFCIconHoverClass + ' ' + this._nodeActiveClass).addClass(this._nodeFCActiveClass);
        }
        break;
      case 'mouseup':
        if ( oScrollContainer.$().hasClass(this._grabbingCursorClass)) {
          oScrollContainer.$().removeClass(this._grabbingCursorClass);
        }
        this.$().removeClass(this._nodeActiveClass).addClass(this._nodeHoverClass);
        $ThisChildren.removeClass(this._nodeActiveClass).addClass(this._nodeHoverClass);
        if (isFoldedCorner) {
          jQuery('#'+$ThisAttribute).removeClass(this._nodeHoverClass).addClass(this._nodeFCHoverClass);
          jQuery('div[id^='+$ThisAttribute+'][id$=-corner-container]').removeClass(this._nodeHoverClass).addClass(this._nodeFCIconHoverClass);
          jQuery('span[id^='+$ThisAttribute+'][id$=-corner-icon]').removeClass(this._nodeHoverClass).addClass(this._nodeFCIconHoverClass);
        }
        break;
      case 'mouseenter':
        /* in case the cursor is in the "grabbing" state ( the user is scrolling and comes over the node) the cursor's state should not be changed to the pointer */
        if (!oScrollContainer.$().hasClass(this._grabbingCursorClass)) {
          this.$().addClass(this._nodeHoverClass);
          $ThisChildren.addClass(this._nodeHoverClass);
          if (isFoldedCorner) { 
            jQuery('#'+$ThisAttribute).removeClass(this._nodeHoverClass).addClass(this._nodeFCHoverClass);
            jQuery('div[id^='+$ThisAttribute+'][id$=-corner-container]').removeClass(this._nodeHoverClass).addClass(this._nodeFCIconHoverClass);
            jQuery('span[id^='+$ThisAttribute+'][id$=-corner-icon]').removeClass(this._nodeHoverClass).addClass(this._nodeFCIconHoverClass);
          }
        }
        break;
      case 'mouseleave':
        this.$().removeClass(this._nodeActiveClass + ' ' + this._nodeHoverClass);
        $ThisChildren.removeClass(this._nodeActiveClass + ' ' + this._nodeHoverClass);
        if (isFoldedCorner) {
          jQuery('#'+$ThisAttribute).removeClass(this._nodeFCActiveClass + ' ' + this._nodeFCHoverClass );
          jQuery('div[id^='+$ThisAttribute+'][id$=-corner-container]').removeClass(this._nodeFCActiveClass + ' ' + this._nodeFCIconHoverClass);
          jQuery('span[id^='+$ThisAttribute+'][id$=-corner-icon]').removeClass(this._nodeFCActiveClass + ' ' + this._nodeFCIconHoverClass);
        }
        if (!oScrollContainer.$().hasClass(this._grabbingCursorClass)) {
          oScrollContainer.$().addClass(this._grabCursorClass);
        }
        break;
      case 'touchstart':
        if (sap.ui.Device.support.touch) {
          this.$().addClass(this._nodeActiveClass);
          $ThisChildren.addClass(this._nodeActiveClass);
          if (isFoldedCorner) {
            jQuery('#'+$ThisAttribute).removeClass(this._nodeActiveClass).addClass(this._nodeFCActiveClass);
            jQuery('div[id^='+$ThisAttribute+'][id$=-corner-container]').removeClass(this._nodeActiveClass).addClass(this._nodeFCActiveClass);
            jQuery('span[id^='+$ThisAttribute+'][id$=-corner-icon]').removeClass(this._nodeActiveClass).addClass(this._nodeFCActiveClass);
          }
        }
        break;
      case 'saptouchstart':
        this.$().removeClass(this._nodeHoverClass).addClass(this._nodeActiveClass);
        $ThisChildren.removeClass(this._nodeHoverClass).addClass(this._nodeActiveClass);
        if (isFoldedCorner) {
          jQuery('#'+$ThisAttribute).removeClass(this._nodeFCHoverClass + ' ' + this._nodeActiveClass).addClass(this._nodeFCActiveClass);
          jQuery('div[id^='+$ThisAttribute+'][id$=-corner-container]').removeClass(this._nodeFCIconHoverClass + ' ' + this._nodeActiveClass).addClass(this._nodeFCActiveClass);
          jQuery('span[id^='+$ThisAttribute+'][id$=-corner-icon]').removeClass(this._nodeFCIconHoverClass + ' ' + this._nodeActiveClass).addClass(this._nodeFCActiveClass);
        }
        break;
      case 'touchend':
        if (sap.ui.Device.support.touch) {
          this.$().removeClass(this._nodeActiveClass + ' ' + this._nodeHoverClass);
          $ThisChildren.removeClass(this._nodeActiveClass + ' ' +  this._nodeHoverClass);
          if (isFoldedCorner) {
            jQuery('#'+$ThisAttribute).removeClass(this._nodeFCActiveClass + ' ' +  this._nodeFCHoverClass);
            jQuery('div[id^='+$ThisAttribute+'][id$=-corner-container]').removeClass(this._nodeFCActiveClass + ' ' + this._nodeFCIconHoverClass);
            jQuery('span[id^='+$ThisAttribute+'][id$=-corner-icon]').removeClass(this._nodeFCActiveClass + ' ' + this._nodeFCIconHoverClass);
          }
        }
        this._handleClick(oEvent);
        break;
      case 'saptouchcancel':
        this.$().removeClass(this._nodeActiveClass).addClass(this._nodeHoverClass);
        $ThisChildren.removeClass(this._nodeActiveClass).addClass(this._nodeHoverClass);
        if (isFoldedCorner) {
          jQuery('#'+$ThisAttribute).removeClass(this._nodeFCActiveClass + ' ' + this._nodeHoverClass).addClass(this._nodeFCHoverClass);
          jQuery('div[id^='+$ThisAttribute+'][id$=-corner-container]').removeClass(this._nodeFCActiveClass + ' ' + this._nodeHoverClass).addClass(this._nodeFCIconHoverClass);
          jQuery('span[id^='+$ThisAttribute+'][id$=-corner-icon]').removeClass(this._nodeFCActiveClass + ' ' + this._nodeHoverClass).addClass(this._nodeFCIconHoverClass);
        }
        break;
    }
};

/**
 * Checks if current node contains children
 *
 * @private
 * @returns {boolean}
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._hasChildren = function() {
  var children = this.getChildren();
  if (children && children.length > 0) {
    return true;
  }
  return false;
};

/**
 * @private
 * @returns {String} Aria details
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._getAriaText = function() {
  var cParents = this.getParents().length;

  var cChildren = 0;
  if (this._hasChildren()) {
    cChildren = this.getChildren().length;
  }

  var laneText = "";
  var lane = this._getLane();
  if (lane) {
    laneText = lane.getText();
    if (!laneText){
      laneText = this._oResBundle.getText('PF_VALUE_UNDEFINED');
    }
  }

  var contentText = "";
  var contentTexts = this.getTexts();
  if (contentTexts) {
    for(var i in contentTexts){
      var valueText = contentTexts[i].concat(", ");
      contentText = contentText.concat(valueText);
    }
    //Removes the last character which is a ' '
    contentText = contentText.slice(0, -1);
  }

  var titleText = this.getTitle();
  if (!titleText) {
    titleText = this._oResBundle.getText('PF_VALUE_UNDEFINED');
  }

  var stateValueText = this.getState();
  if (!stateValueText) {
    stateValueText = this._oResBundle.getText('PF_VALUE_UNDEFINED');
  }

  var stateText = this.getStateText();
  if (this.getState() === sap.suite.ui.commons.ProcessFlowNodeState.Planned) {
    stateText = "";
  }

  var ariaValue = this._oResBundle.getText('PF_ARIA_NODE', [titleText, stateValueText, stateText, laneText, contentText, cParents, cChildren]);
  return ariaValue;
};

/**
 * @private
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} Lane of current node
 */
sap.suite.ui.commons.ProcessFlowNode.prototype._getLane = function() {
  var processFlow = this.getParent();
  var lane;
  if (processFlow) {
    lane = processFlow._getLane(this.getLaneId());
  }
  return lane;
};