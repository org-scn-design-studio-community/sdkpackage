/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.ProcessFlow.
jQuery.sap.declare("sap.suite.ui.commons.ProcessFlow");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ProcessFlow.
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
 * <li>{@link #getFoldedCorners foldedCorners} : boolean (default: false)</li>
 * <li>{@link #getScrollable scrollable} : boolean (default: true)</li>
 * <li>{@link #getWheelZoomable wheelZoomable} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getNodes nodes} : sap.suite.ui.commons.ProcessFlowNode[]</li>
 * <li>{@link #getLanes lanes} : sap.suite.ui.commons.ProcessFlowLaneHeader[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.ProcessFlow#event:nodeTitlePress nodeTitlePress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.ProcessFlow#event:nodePress nodePress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.ProcessFlow#event:headerPress headerPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.ProcessFlow#event:onError onError} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Process Flow is a complex control that enables you to display documents or other items in their flow.
 * @extends sap.ui.core.Control
 *
 * @author SAP SE
 * @version 1.24.2
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.ProcessFlow
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.ProcessFlow", { metadata : {

	publicMethods : [
		// methods
		"getZoomLevel", "setZoomLevel", "zoomIn", "zoomOut", "updateModel", "getFocusedNode"
	],
	library : "sap.suite.ui.commons",
	properties : {
		"foldedCorners" : {type : "boolean", group : "Misc", defaultValue : false},
		"scrollable" : {type : "boolean", group : "Misc", defaultValue : true},
		"wheelZoomable" : {type : "boolean", group : "Behavior", defaultValue : true}
	},
	aggregations : {
		"connections" : {type : "sap.suite.ui.commons.ProcessFlowConnection", multiple : true, singularName : "connection", visibility : "hidden"}, 
		"nodes" : {type : "sap.suite.ui.commons.ProcessFlowNode", multiple : true, singularName : "node"}, 
		"lanes" : {type : "sap.suite.ui.commons.ProcessFlowLaneHeader", multiple : true, singularName : "lane"}
	},
	events : {
		"nodeTitlePress" : {}, 
		"nodePress" : {}, 
		"headerPress" : {}, 
		"onError" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.ProcessFlow with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.ProcessFlow.extend
 * @function
 */

sap.suite.ui.commons.ProcessFlow.M_EVENTS = {'nodeTitlePress':'nodeTitlePress','nodePress':'nodePress','headerPress':'headerPress','onError':'onError'};


/**
 * Getter for property <code>foldedCorners</code>.
 * This property defines the folded corners for the single node control. The following values exist:
 * - true: means folded corner
 * - false/null/undefined: means normal corner
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>foldedCorners</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#getFoldedCorners
 * @function
 */

/**
 * Setter for property <code>foldedCorners</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFoldedCorners  new value for property <code>foldedCorners</code>
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#setFoldedCorners
 * @function
 */


/**
 * Getter for property <code>scrollable</code>.
 * By default, the control body is embedded into a scroll container of fixed size, so the user
 * can put the control into a fixe sized layout.
 * When the control body (the graph) gets larger than the container cuts the overflowing parts of the graph and the cut parts can be viewed by scroling the control body.
 * When the control body fits into the container limits, obviously no scrolling is possible (and makes sense).
 * 
 * The scrolling feature can be turned off by setting this property value to false,
 * so the width/height of the whole control will change as the flow graph gets smaller/larger.
 * In this case the control body could not be scrolled, as the control body size matches the control container size.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>scrollable</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#getScrollable
 * @function
 */

/**
 * Setter for property <code>scrollable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bScrollable  new value for property <code>scrollable</code>
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#setScrollable
 * @function
 */


/**
 * Getter for property <code>wheelZoomable</code>.
 * The property specifies if to enable semantic zooming by mouse wheel events on desktop browsers.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>wheelZoomable</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#getWheelZoomable
 * @function
 */

/**
 * Setter for property <code>wheelZoomable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bWheelZoomable  new value for property <code>wheelZoomable</code>
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#setWheelZoomable
 * @function
 */


/**
 * Getter for aggregation <code>nodes</code>.<br/>
 * this is the aggregation of the node controls put into
 * the table to the calculated cells.
 * 
 * @return {sap.suite.ui.commons.ProcessFlowNode[]}
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#getNodes
 * @function
 */


/**
 * Inserts a node into the aggregation named <code>nodes</code>.
 *
 * @param {sap.suite.ui.commons.ProcessFlowNode}
 *          oNode the node to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the node should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the node is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the node is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#insertNode
 * @function
 */

/**
 * Adds some node <code>oNode</code> 
 * to the aggregation named <code>nodes</code>.
 *
 * @param {sap.suite.ui.commons.ProcessFlowNode}
 *            oNode the node to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#addNode
 * @function
 */

/**
 * Removes an node from the aggregation named <code>nodes</code>.
 *
 * @param {int | string | sap.suite.ui.commons.ProcessFlowNode} vNode the node to remove or its index or id
 * @return {sap.suite.ui.commons.ProcessFlowNode} the removed node or null
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#removeNode
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>nodes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.ProcessFlowNode[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#removeAllNodes
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.ProcessFlowNode</code> in the aggregation named <code>nodes</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.ProcessFlowNode}
 *            oNode the node whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#indexOfNode
 * @function
 */
	

/**
 * Destroys all the nodes in the aggregation 
 * named <code>nodes</code>.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#destroyNodes
 * @function
 */


/**
 * Getter for aggregation <code>lanes</code>.<br/>
 * This is a header of the table for the process flow control.
 * 
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader[]}
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#getLanes
 * @function
 */


/**
 * Inserts a lane into the aggregation named <code>lanes</code>.
 *
 * @param {sap.suite.ui.commons.ProcessFlowLaneHeader}
 *          oLane the lane to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the lane should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the lane is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the lane is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#insertLane
 * @function
 */

/**
 * Adds some lane <code>oLane</code> 
 * to the aggregation named <code>lanes</code>.
 *
 * @param {sap.suite.ui.commons.ProcessFlowLaneHeader}
 *            oLane the lane to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#addLane
 * @function
 */

/**
 * Removes an lane from the aggregation named <code>lanes</code>.
 *
 * @param {int | string | sap.suite.ui.commons.ProcessFlowLaneHeader} vLane the lane to remove or its index or id
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} the removed lane or null
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#removeLane
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>lanes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#removeAllLanes
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.ProcessFlowLaneHeader</code> in the aggregation named <code>lanes</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.ProcessFlowLaneHeader}
 *            oLane the lane whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#indexOfLane
 * @function
 */
	

/**
 * Destroys all the lanes in the aggregation 
 * named <code>lanes</code>.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#destroyLanes
 * @function
 */


/**
 * This event is fired when a process flow node title was
 * clicked. The user can access the clicked process flow node control object which is the only argument of the event handler.
 *
 * @name sap.suite.ui.commons.ProcessFlow#nodeTitlePress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent This object represents the wrapped process flow node object.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'nodeTitlePress' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself. 
 *  
 * This event is fired when a process flow node title was
 * clicked. The user can access the clicked process flow node control object which is the only argument of the event handler.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#attachNodeTitlePress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'nodeTitlePress' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#detachNodeTitlePress
 * @function
 */

/**
 * Fire event nodeTitlePress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'oEvent' of type <code>object</code> This object represents the wrapped process flow node object.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.ProcessFlow#fireNodeTitlePress
 * @function
 */


/**
 * This event is fired when a process flow node was clicked. The user can catch this event in addition to the title press event.
 *
 * @name sap.suite.ui.commons.ProcessFlow#nodePress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent This object represents the wrapped process flow node object.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'nodePress' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself. 
 *  
 * This event is fired when a process flow node was clicked. The user can catch this event in addition to the title press event.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#attachNodePress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'nodePress' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#detachNodePress
 * @function
 */

/**
 * Fire event nodePress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'oEvent' of type <code>object</code> This object represents the wrapped process flow node object.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.ProcessFlow#fireNodePress
 * @function
 */


/**
 * This event is fired when the the header column was clicked.
 *
 * @name sap.suite.ui.commons.ProcessFlow#headerPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent This object represents the wrapped process flow lane header object.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'headerPress' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself. 
 *  
 * This event is fired when the the header column was clicked.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#attachHeaderPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'headerPress' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#detachHeaderPress
 * @function
 */

/**
 * Fire event headerPress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'oEvent' of type <code>object</code> This object represents the wrapped process flow lane header object.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.ProcessFlow#fireHeaderPress
 * @function
 */


/**
 * This event is fired when a problem occurs with the process flow calculation. Usually this means that there is a problem with the data. The console contains the detailed error description with the errors.
 *
 * @name sap.suite.ui.commons.ProcessFlow#onError
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent This parameters contains the localized string with error message.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'onError' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself. 
 *  
 * This event is fired when a problem occurs with the process flow calculation. Usually this means that there is a problem with the data. The console contains the detailed error description with the errors.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#attachOnError
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'onError' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlow#detachOnError
 * @function
 */

/**
 * Fire event onError to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'oEvent' of type <code>object</code> This parameters contains the localized string with error message.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.ProcessFlow#fireOnError
 * @function
 */


/**
 * the method returns current zoom level of the control.
 *
 * @name sap.suite.ui.commons.ProcessFlow#getZoomLevel
 * @function
 * @type sap.suite.ui.commons.ProcessFlowZoomLevel
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * This method sets the new zoom level. If the input is wrong, it is ignored and the previous value stays.
 *
 * @name sap.suite.ui.commons.ProcessFlow#setZoomLevel
 * @function
 * @param {sap.suite.ui.commons.ProcessFlowZoomLevel} oNewZoomLevel
 *         This method sets new zoom level. The enumeration ensures that only available levels are used.
 * @type sap.suite.ui.commons.ProcessFlowZoomLevel
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * This method decreases the zoom level. More details are displayed in the node. When max zoom level is reached it remains unchanged.
 *
 * @name sap.suite.ui.commons.ProcessFlow#zoomIn
 * @function
 * @type sap.suite.ui.commons.ProcessFlowZoomLevel
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * This method increases the zoom level. Less details are displayed in the node.
 *
 * @name sap.suite.ui.commons.ProcessFlow#zoomOut
 * @function
 * @type sap.suite.ui.commons.ProcessFlowZoomLevel
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * This method triggers the update of the model and correspondingly the rerender method.
 *
 * @name sap.suite.ui.commons.ProcessFlow#updateModel
 * @function
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * This method returns the nodeId of the node, which is focused.
 *
 * @name sap.suite.ui.commons.ProcessFlow#getFocusedNode
 * @function
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


// Start of sap/suite/ui/commons/ProcessFlow.js
///**
// * This file defines behavior for the control,
// */

/*
 * resource bundle for the localized strings
 */
sap.suite.ui.commons.ProcessFlow.prototype._resBundle = null;

/**
 * Zoom level for the control.It is propagated to all created sub controls
 */
sap.suite.ui.commons.ProcessFlow.prototype._zoomLevel = sap.suite.ui.commons.ProcessFlowZoomLevel.Two;

/**
 * The wheel events timeout.
 */
sap.suite.ui.commons.ProcessFlow.prototype._wheelTimeout = null;

/**
 * The wheel events timestamp for the last wheel event occurrence.
 */
sap.suite.ui.commons.ProcessFlow.prototype._wheelTimestamp = null;

/**
 * The wheel events flag, if a wheel event was recently processed.
 */
sap.suite.ui.commons.ProcessFlow.prototype._wheelCalled = false;

/**
 * The internal matrix after calculation. use for keyboard movement
 */
sap.suite.ui.commons.ProcessFlow.prototype._internalCalcMatrix = false;

/**
 * internal lanes, which can differ from original ones. especially when more nodes are in
 * the same lane
 */
sap.suite.ui.commons.ProcessFlow.prototype._internalLanes = false;

/**
 * definition for jump over more elements based on the visual design
 */
sap.suite.ui.commons.ProcessFlow.prototype._jumpOverElements = 5;
/**
 * last node with navigation focus. It is marked when the focus out event
 * is handled.
 */
sap.suite.ui.commons.ProcessFlow.prototype._lastNavigationFocusNode = false;

sap.suite.ui.commons.ProcessFlow.prototype.init = function() {
  if ( (sap.ui.Device.os.android ||
        sap.ui.Device.os.blackberry ||
        sap.ui.Device.os.ios ||
        sap.ui.Device.os.windows_phone)
       && sap.ui.Device.system.phone ) {
    this.setZoomLevel(sap.suite.ui.commons.ProcessFlowZoomLevel.Four);
  }
  if( !this._resBundle ) {
    this._resBundle = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
  }
  this._internalLanes = this.getLanes();

  this.$().on('keydown', jQuery.proxy(this.onkeydown, this));
};

/**
 * function destroys all the object components.
 */
sap.suite.ui.commons.ProcessFlow.prototype.exit = function() {
  if( this.getNodes() ) {
    for( var i = 0; i < this.getNodes().length; i++) {
      this.getNodes()[i].destroy();
    }
  }

  if( this._internalLanes ) {
    for( var i = 0; i < this._internalLanes.length; i++) {
      this._internalLanes[i].destroy();
    }
  }
  var internalConnectionAgg = this.getAggregation("connections");
  if( internalConnectionAgg ) {
    for( var i = 0; i < internalConnectionAgg.length; i++) {
      internalConnectionAgg[i].destroy();
    }
  }

  if(this._resizeRegId) {
    sap.ui.core.ResizeHandler.deregister(this._resizeRegId);
  }
  if( this._internalCalcMatrix ) {
    delete this._internalCalcMatrix;
  }
};

/**
 * function handles the exception based on the business requirements
 */
sap.suite.ui.commons.ProcessFlow.prototype._handleException = function( exc ) {
  var textToDisplay = this._resBundle.getText('PF_ERROR_INPUT_DATA');
  this.fireOnError({text:textToDisplay});
  jQuery.sap.log.error("Error loading data for the process flow with id : "+ this.getId() );

  if( exc instanceof Array) {
    for( var i=0 ; i < exc.length; i++ ) {
      jQuery.sap.log.error("Detailed description ("+ i +") :" + exc[i] );
    }
  } else {
    jQuery.sap.log.error("Detailed description  :" + exc );
    }
};

/**
 * function makes the update of the lanes, if more nodes belong to the same lane
 * it must check the node consistency, so this is done first time the consistency check
 */
sap.suite.ui.commons.ProcessFlow.prototype._updateLanesFromNodes = function() {
    sap.suite.ui.commons.ProcessFlow.NodeElement.createNodeElementsFromProcessFlowNodes(this.getNodes(), this.getLanes());
    this._internalLanes =
     sap.suite.ui.commons.ProcessFlow.NodeElement.updateLanesFromNodes(this.getLanes(), this.getNodes()).lanes;
};
/**
 * function creates the lane header objects.
 * @returns object with the position definition
 * @private
 */
sap.suite.ui.commons.ProcessFlow.prototype._getOrCreateLaneMap = function( ) {

//  internalLanes = sap.suite.ui.commons.ProcessFlow.NodeElement.updateLanesFromNodes(internalLanes, internalNodes).lanes;
  //this.addAggregation("lanes", internalLanes);
  if( !this._internalLanes || this._internalLanes.length <= 0 ) {
    this._updateLanesFromNodes();
  }
  var mapPositionToLane = sap.suite.ui.commons.ProcessFlow.NodeElement
    .createMapFromLanes(this._internalLanes, jQuery.proxy(this.ontouchend, this), this._isHeaderMode()).positionMap;
  return mapPositionToLane;
};

/**
 * function creates matrix with positions of nodes and connections. This is
 * relative node connection representation and does not cover real page layout
 *
 * @private
 * @returns the created process flow control
 */
sap.suite.ui.commons.ProcessFlow.prototype._getOrCreateProcessFlow = function( ) {
  if( !this._internalLanes || this._internalLanes.length <= 0 ) {
    this._updateLanesFromNodes();
  }

  this.applyNodeDisplayState();
  var internalNodes = this.getNodes();

  /*tempNodeArray is internal node representation */


  var result = sap.suite.ui.commons.ProcessFlow.NodeElement
  .createNodeElementsFromProcessFlowNodes(internalNodes, this._internalLanes);

  var elementForId = result.elementForId;
  var elementsForLane = result.elementsForLane;

  sap.suite.ui.commons.ProcessFlow.NodeElement.calculateLaneStatePieChart(
      elementsForLane, this._internalLanes, internalNodes, this);

  var calcMatrix = sap.suite.ui.commons.ProcessFlow.prototype.calculateMatrix(elementForId);

  calcMatrix = this.addFirstAndLastColumn(calcMatrix);
//  now change to the process flow nodes again
  for (var i = 0; i < calcMatrix.length; i++) {
    for (var j = 0; j < calcMatrix[i].length; j++) {
      if (calcMatrix[i][j] instanceof sap.suite.ui.commons.ProcessFlow.NodeElement) {
        calcMatrix[i][j] = elementForId[calcMatrix[i][j].nodeid].oNode;
      }
    }
  }
  this._internalCalcMatrix = calcMatrix;
  return calcMatrix;
};

/**
 * function applies the changes to the display state based on the requirement.s
 * 1. if any node is in the highlighted state all others go to the dimmed
 * @public
 */
sap.suite.ui.commons.ProcessFlow.prototype.applyNodeDisplayState = function() {
  var aInternalNodes = this.getNodes()
      , iNodeCount = aInternalNodes ? aInternalNodes.length : 0
      , i = 0
      ;

  if (iNodeCount === 0) {
    return;
  } else {
    // first put all the nodes to the regular state - if possible
    while (i < iNodeCount) {
      aInternalNodes[i]._setRegularState();
      i++;
    }

    // check for the highlighted - at least one is required
    i = 0;
    while ((i < iNodeCount) && !aInternalNodes[i].getHighlighted()) {
      i++;
    }

    // if a highlighted node found
    if(i < iNodeCount) {
      i = 0;
      while (i < iNodeCount) {
        if (!aInternalNodes[i].getHighlighted()) {
          aInternalNodes[i]._setDimmedState();
        }
        i++;
      }
    }
  }
};

/**
 * function adds first and last column, which serves for the special header signs. It has to add
 * single cell to all internal arrays - we need to increase Y
 * @param calculatedMatrix
 */
sap.suite.ui.commons.ProcessFlow.prototype.addFirstAndLastColumn = function( calculatedMatrix ) {

  if( !calculatedMatrix || calculatedMatrix.length <= 0 ) {
    return [];
  }

  var originalX = calculatedMatrix.length;
  //var originalY = calculatedMatrix[0].length; // alll should be the same


  for( var i = 0; i < originalX; i++ ) {
    calculatedMatrix[i].unshift(null);
    calculatedMatrix[i].push(null);
  }

  return calculatedMatrix;
};

/**
 * Function calculates a virtual matrix with nodes and connections.
 *
 * @param elementForId contains a map of the node id's to node elements
 * @throws an array with messages on processing errors
 * @returns the composed virtual matrix
 * @private
 */

sap.suite.ui.commons.ProcessFlow.prototype.calculateMatrix = function(elementForId) {
  var internalMatrixCalculation
      , oElementInfo
      , aSortedRootElements
      , highestLaneNumber
      , rows
      , return2DimArray
      , bRefocusRequired
      ;

  // no calculation in case of zero input
  if (!elementForId || (elementForId.length === 0)) {
    return [];
  }

  internalMatrixCalculation = new sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation(this);
  bRefocusRequired = internalMatrixCalculation.checkInputNodeConsistency(elementForId);

  oElementInfo = internalMatrixCalculation
      .retrieveInfoFromInputArray(elementForId);

  internalMatrixCalculation.resetPositions();

  aSortedRootElements = internalMatrixCalculation.sortRootElements(oElementInfo.rootElements);

  highestLaneNumber = oElementInfo.highestLanePosition + 1;

  // worst case, all children are in the same lane with so many rows.
  rows = Object.keys(elementForId).length > 3 ? Object.keys(elementForId).length - 1 : 2;

  return2DimArray = internalMatrixCalculation.createMatrix(rows, highestLaneNumber);

  for( var i = 0; i < aSortedRootElements.length; i++ ) {
    internalMatrixCalculation.posy = aSortedRootElements[i].lane;

    return2DimArray = internalMatrixCalculation.processCurrentElement(
        aSortedRootElements[i], elementForId, return2DimArray);
  }

  // if true, it is neccessa to recalculate the focus state for all to false. root is
  // afterwards set to focused
  if( bRefocusRequired && return2DimArray[0][0] && return2DimArray[0][0].oNode.setFocused ) {
    Object.keys(elementForId).forEach( function(sElementId ) {
      var oElement = elementForId[sElementId];
      oElement.oNode.setFocused(false);
    });
    return2DimArray[0][0].oNode.setFocused(true);
  }

  return2DimArray = internalMatrixCalculation
      .doubleColumnsInMatrix(return2DimArray);
  return2DimArray = internalMatrixCalculation
      .calculatePathInMatrix(return2DimArray);
  return2DimArray = internalMatrixCalculation.removeEmptyLines(return2DimArray);

  return return2DimArray;
};


/**
 * This is a virtual node holding necessary data to create virtual matrix.
 *
 * @param {string} id id of the PF node
 * @param {number} lane lane position of the node
 * @param {sap.suite.ui.commons.ProcessFlow} oNode a PF node
 * @param {number[]} aNodeParents array of parent id's of the oNode
 * @private
 */
sap.suite.ui.commons.ProcessFlow.NodeElement = function(
  id, lane, oNode, aNodeParents) {
  this.nodeid = id;
  this.lane = lane;
  this.state = oNode.getState();
  this.displayState = oNode._getDisplayState();
  this.isProcessed = false;

  if (jQuery.isArray(aNodeParents)) {
    this.arrayParent = aNodeParents;
  } else {
    this.singleParent = aNodeParents;
  }
  this.oNode = oNode;
};


/**
 * Extend the NodeElement object with to String function
 *
 * @private
 */

sap.suite.ui.commons.ProcessFlow.NodeElement.prototype = {
  toString : function() {
    return this.nodeid;
  },
  containsChildren : function( that ) {
    if( ! that ) {
      return false;
    }
    if( ! (that instanceof sap.suite.ui.commons.ProcessFlow.NodeElement) ) {
      return false;
    }
    if( this.oNode.getChildren() && that.oNode.getChildren() && this.oNode.getChildren().length && that.oNode.getChildren().length) {
      for( var i = 0; i < this.oNode.getChildren().length; i++ ) {
        if( that.oNode.getChildren().indexOf(this.oNode.getChildren()[i]) >= 0) {
          return true;
        }
      }
    }
    return false;
  }
};

/**
 * Another type of the nodel ement contructor
 * @param id node id
 * @param lane lane position
 * @param oNode reference to a PF node control
 * @param aNodeParents reference to the ids of parents of the oNode
 * @private
 * @returns a new node element
 */
sap.suite.ui.commons.ProcessFlow.NodeElement.initNodeElement = function(id,
    lane, oNode, aNodeParents) {
  return new sap.suite.ui.commons.ProcessFlow.NodeElement(id, lane, oNode, aNodeParents);
};

/**
 * function calculates the state part of the lane from nodes belong to this lane
 */
sap.suite.ui.commons.ProcessFlow.NodeElement.calculateLaneStatePieChart = function(elementsForLane, laneArray, internalNodes, processFlowObject) {
  // check input parameters
  if( !elementsForLane || !laneArray || !internalNodes) {
    return;
  }

  // first check if all nodes are in the regular state. If not only highligted are taken into calculation
  for( var i = 0; i < internalNodes.length; i++) {
    processFlowObject._bHighlightedMode = internalNodes[i].getHighlighted();
    if( processFlowObject._bHighlightedMode ) {
      break;
    }
  }
  var positive = 0;
  var negative = 0;
  var neutral = 0;
  var planned = 0;
  for( var i = 0; i < laneArray.length; i++ ) {
    var laneObject = laneArray[i];
    var elements = elementsForLane[laneObject.getLaneId()];
    // if we do not have nodes, nothing to calculate

    if (!elements) {
      continue;
    }

    positive = 0;
    negative = 0;
    neutral = 0;
    planned = 0;

    for( var j = 0; j < elements.length; j++ ) {
      if( !processFlowObject._bHighlightedMode ||
        (elements[j].oNode._getDisplayState() == sap.suite.ui.commons.ProcessFlowDisplayState.Highlighted ||
            elements[j].oNode._getDisplayState() == sap.suite.ui.commons.ProcessFlowDisplayState.HighlightedFocused)) {
      switch( elements[j].oNode.getState() ) {
      case sap.suite.ui.commons.ProcessFlowNodeState.Positive:
          positive++;
          break;
      case sap.suite.ui.commons.ProcessFlowNodeState.Negative:
          negative++;
          break;
      case sap.suite.ui.commons.ProcessFlowNodeState.Planned:
          planned++;
          break;
      case sap.suite.ui.commons.ProcessFlowNodeState.Neutral:
          neutral++;
          break;
        };
      };
    }; // end of nodes for single lane
    var stateData = [{state: sap.suite.ui.commons.ProcessFlowNodeState.Positive, value:positive}
    , {state: sap.suite.ui.commons.ProcessFlowNodeState.Negative, value:negative}
    , {state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral, value:planned}
    , {state: sap.suite.ui.commons.ProcessFlowNodeState.Planned, value:neutral}];
    laneObject.setState(stateData);
  }
};

/**
 * this function must check and calculate the potentially new lanes
 * this is because more nodes can lay in the same lane. In this case
 * the new artificial lane is created and positioned just after original one.
 * @param aProcessFlowLanes the original lane array
 * @param aInternalNodes internal nodes
 */
sap.suite.ui.commons.ProcessFlow.NodeElement.updateLanesFromNodes = function(
    aProcessFlowLanes, aInternalNodes ) {
  var createMapResult =
    sap.suite.ui.commons.ProcessFlow.NodeElement.createMapFromLanes(aProcessFlowLanes, null, false);
  var mapLanesArrayPosition = createMapResult.positionMap;
  var mapLanesArrayId = createMapResult.idMap;
  var nodeArray = {};
  var tempProcessFlowLanes = aProcessFlowLanes.slice();
  var bPotentialNewLaneExists;
  var tempLanesPos = {};
  var nPos = 0;

  for( var i = 0; i < aInternalNodes.length; i++ ) {
    nodeArray[aInternalNodes[i].getNodeId()] = aInternalNodes[i];
  }

  for( var i = 0; i < aInternalNodes.length; i++) { // for each node
    var node = aInternalNodes[i];
    var children = node.getChildren() || [];
    var positionUp = 1; // check the move up for the given sublanes of the lane. Every new sublane creation
    var potentialNewLaneId = null;
    var potentialNewLane = null;
    // makes plus 1 effect
    for( var j = 0; j < children.length; j++) { // check the children
      var childrenNode = nodeArray[children[j]];
      if( childrenNode && (node.getLaneId() == childrenNode.getLaneId()) ) {
        // create new lane id and check the lane
        potentialNewLaneId = childrenNode.getLaneId()+positionUp;
        potentialNewLane = mapLanesArrayId[potentialNewLaneId];
        if( !potentialNewLane ) { // if we have the lane already
          var origLaneObject = mapLanesArrayId[node.getLaneId()];
          potentialNewLane = sap.suite.ui.commons.ProcessFlow.NodeElement.createNewProcessFlowElement(
              origLaneObject, potentialNewLaneId, origLaneObject.getPosition()+positionUp);
          // update the maps and output array
          mapLanesArrayId[potentialNewLane.getLaneId()] = potentialNewLane;
        //tempProcessFlowLanes.push(potentialNewLane);
         tempProcessFlowLanes.splice(potentialNewLane.getPosition(), 0, potentialNewLane);
        }
        // assign new lane to children
        childrenNode.setLaneId(potentialNewLane.getLaneId());
      }
      // move also the assignment of this lane for all children. Otherwise it is bad ...
      // so, take the children of current children and move the lane position to the new lane, if neccessary
      // neccessary it is in the case when the lane is the same as was PARENT node. this is important to understand,
      // that this children is already moved to new one, so parent lane is compared.
      // this is a recursion
      sap.suite.ui.commons.ProcessFlow.NodeElement.changeLaneOfChildren(node.getLaneId(), childrenNode, nodeArray );
    } // end of children loop
    // now we should move all positions up about the number positionUp
    // also the position map is in wrong state now
    // now work with all vector, later on we can move only to lanes with higher position than working one
    if( potentialNewLane ) {
      tempLanesPos = {};
      bPotentialNewLaneExists = false;
      for( var key in mapLanesArrayPosition) {
        if( potentialNewLane .getLaneId() == mapLanesArrayPosition[key].getLaneId() ) {
          bPotentialNewLaneExists = true;
          break;
        };
        if( parseInt(key) >= potentialNewLane.getPosition() ) {
          var tempLaneObject = mapLanesArrayPosition[key];
          tempLanesPos[tempLaneObject.getPosition()+positionUp] = tempLaneObject;
         // tempLaneObject.setPosition(tempLaneObject.getPosition()+positionUp);
        };
      }
      if (!bPotentialNewLaneExists) {
        for( var w in tempLanesPos) {
          nPos = parseInt(w);
          tempLanesPos[nPos].setPosition(nPos);
        }
        tempLanesPos[potentialNewLane.getPosition()] = potentialNewLane;
        for (var v=0; v < potentialNewLane.getPosition(); v++) {
          tempLanesPos[v] = mapLanesArrayPosition[v];
        }
        mapLanesArrayPosition = tempLanesPos;
       // mapLanesArrayPosition[potentialNewLane.getPosition()] = potentialNewLane;
      };
    };
  };
  return { lanes: tempProcessFlowLanes, nodes: aInternalNodes };
};

sap.suite.ui.commons.ProcessFlow.NodeElement.changeLaneOfChildren = function( origLaneId, currentNode, nodeArray ) {
  var children = currentNode.getChildren();
  if( children) {
    for( var i = 0; i < children.length; i++) { // check the children
      var childrenNode = nodeArray[children[i]];
      if( childrenNode.getLaneId() == origLaneId ) {
        childrenNode.setLaneId(currentNode.getLaneId());
        sap.suite.ui.commons.ProcessFlow.NodeElement.changeLaneOfChildren( origLaneId, childrenNode, nodeArray);
      }
    }
  }
};

sap.suite.ui.commons.ProcessFlow.NodeElement.createNewProcessFlowElement = function( originalElement, newLaneId, newPosition ) {
  var cloneElement = new sap.suite.ui.commons.ProcessFlowLaneHeader({
    laneId: newLaneId,
    iconSrc: originalElement.getIconSrc(),
    text: originalElement.getText(),
    state: originalElement.getState(),
    position: newPosition,
    zoomLevel: originalElement.getZoomLevel()
  });
  return cloneElement;
};

/**
 * This function creates the map where key = position value - lane element.
 *
 * @param {sap.suite.ui.commons.ProcessFlowLaneHeader[]} aProcessFlowLanes array of lanes
 * @param {function} fnTapHandler tap handler for the lane header element
 * @param {boolean} bHeaderMode should be true, if the process flow is in the header mode
 * @returns map of lane positions to lane header element control instances
 * @private
 */
sap.suite.ui.commons.ProcessFlow.NodeElement.createMapFromLanes = function(
  aProcessFlowLanes, fnTapHandler, bHeaderMode) {
  var oLane
    , aMapLaneArrayPosition = {}
    , aMapLaneArrayId = {}
    , nLanes = aProcessFlowLanes ? aProcessFlowLanes.length : 0
    , i = 0
    ;

  if (!nLanes) {
    return {};
  } else {
    while (i < nLanes) {
      oLane = aProcessFlowLanes[i];
      if (oLane instanceof sap.suite.ui.commons.ProcessFlowLaneHeader) {
        aMapLaneArrayPosition[oLane.getPosition()] = oLane;
        aMapLaneArrayId[oLane.getLaneId()] = oLane;
        // forward the icon click events from the lane header items to the flow control
        if (fnTapHandler) {
          oLane.attachPress(fnTapHandler);
        }
        oLane._setHeaderMode(bHeaderMode);
      }
      i++;
    }

    return { positionMap: aMapLaneArrayPosition, idMap : aMapLaneArrayId };
  }
};

/**
*
* This function transforms from process flow node element into the internal
* node element. the strategy is to work inside algorithm only with internal
* representation.
* @parameter processFlowNodes PF nodes from the controls interface, preprocessed - so they all have a valid (user entered, resp. generated) lane id
* @parameter elementsForLane
* @returns {elementForId : NodeElement, elementsForLane : NodeElement[]}
* @private
*/
sap.suite.ui.commons.ProcessFlow.NodeElement.createNodeElementsFromProcessFlowNodes = function(
   processFlowNodes, processFlowLanes) {
 var aPositionForLaneId = {}   // map holds the transition between lane id and position
     , aElementsForLane = {}   // holds a map from laneId to array of the elements for given laneId
     , aParentsForChild = {}
     , oNode
     , iNodeCount = processFlowNodes ? processFlowNodes.length : 0
     , sNodeId
     , oLane
     , iLaneCount = processFlowLanes ? processFlowLanes.length : 0
     , sLaneId
     , aPositions = []
     , iLanePosition
     , aChildren
     , sChild
     , nChildCount
     , i
     , j
     , aElementForId = {}
     ;

 if (iNodeCount === 0) {
   return {elementForId : {}, elementsForLane : {}};
 }

 if (iLaneCount === 0) {
  throw ["No lane definition although there is a node definition."];
 }

 i = 0;
 while (i < iLaneCount) {
   oLane = processFlowLanes[i];
   sLaneId = oLane.getLaneId();
   iLanePosition = oLane.getPosition();

   if (aPositionForLaneId[sLaneId]) {
     throw ["The lane with id: " + sLaneId + " is defined at least twice. (Lane error)"];
   }

   aPositionForLaneId[sLaneId] = iLanePosition;

   if( jQuery.inArray(iLanePosition, aPositions) > -1) {
     throw ["The position " + iLanePosition + " is defined at least twice. (Lane error)."];
   } else {
     aPositions.push(iLanePosition);
   }

   aElementsForLane[sLaneId] = [];
   i++;
 }

 // search for the parent
 i = 0;
 while (i < iNodeCount) {
   oNode = processFlowNodes[i];
   if (oNode instanceof sap.suite.ui.commons.ProcessFlowNode) {
     sNodeId = oNode.getNodeId();
     sLaneId = oNode.getLaneId();

     aChildren = oNode.getChildren() || [];
     nChildCount = aChildren.length;
     j = 0;
     while (j < nChildCount) {
       sChild = aChildren[j];
       aParentsForChild[sChild] = aParentsForChild[sChild] || [];
       aParentsForChild[sChild].push(sNodeId);
       j++;
     }
   }
   i++;
 }

 i = 0;
 while (i < iNodeCount) {
   oNode = processFlowNodes[i];
   if (oNode instanceof sap.suite.ui.commons.ProcessFlowNode) {
     sNodeId = oNode.getNodeId();

     if (!sNodeId) {
       throw ["There is a node which has no node id defined. (Title=" + oNode.getTitle() + ") and array position: " + i];
     }

     sLaneId = oNode.getLaneId();

     iLanePosition = aPositionForLaneId[sLaneId];
     if (typeof iLanePosition !== 'number') {
       throw ["For the node " + sNodeId + " position (lane) is not defined."];
     }

     if (!aElementForId[sNodeId]) {
       aElementForId[sNodeId] = sap.suite.ui.commons.ProcessFlow.NodeElement
           .initNodeElement(sNodeId, iLanePosition, oNode, aParentsForChild[sNodeId]);

       aElementsForLane[sLaneId].push(aElementForId[sNodeId]);
     } else {
       throw ["The node id " + sNodeId + " is used second time."];
     }
   }
   i++;
 }

 return {elementForId : aElementForId, elementsForLane : aElementsForLane};
};

/**
 * constructor of the algorithm object
 *
 * @private
 */
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation = function(parentControl) {
  this.parentControl = parentControl;
  this.posx = 0;
  this.posy = 0;

  this.nodePositions = {};
  this.mapChildToNode = {};

};

/**
 * Function checks consistency of the node array. It checks
 * if all children defined for the nodes are also presented as the nodes themselves.

 * @param elementForId Map of node id's to NodeElements. Expectation is to have at least 1 element there. No check for empty array.
 * @returns boolean value, where true means no activity, false means set the focus on top left root node
 * @throws array of error messages produced during the consistency check
 * @public
 */
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation.prototype.checkInputNodeConsistency = function (elementForId) {
  var returnArr = []
      , j
      , sChildId
      , nChildCount
      , aChildren
      , oElement
      , nFocusNodes = 0
      ;


  // preparation phase
  Object.keys(elementForId).forEach(function(sElementId) {
    oElement = elementForId[sElementId];
    aChildren = oElement.oNode.getChildren();
    nChildCount = aChildren ? aChildren.length : 0;

    if( oElement.oNode.getFocused()) {
      nFocusNodes++;
    }

    j = 0;
    while (j < nChildCount) {
      sChildId = aChildren[j];
      if (!elementForId[sChildId]) {
        returnArr.push("Node identificator " + sChildId + " used in children definition is not presented as the node itself. Element : " + oElement.nodeid);
      }
      j++;
    }
  });

  if (returnArr.length > 0) {
    throw returnArr;
  }
  return nFocusNodes > 1;
};


/**
 * function resets the positions into initial one to keep new calculation
 * without sideeffects
 *
 * @private
 */
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation.prototype.resetPositions = function() {
  this.posx = 0;
  this.posy = 0;

  delete this.nodePositions;
  delete this.mapChildToNode;

  this.nodePositions = {};
  this.mapChildToNode = {};
};

//first argument is number of columns ( x )
//second argument is number of rows
/**
* function creates matrix based on the length first argument is number of
* columns second argument is number of rows
*
* @private
*/
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation.prototype.createMatrix = function(
 length) {
  length = parseInt(length, 10);
  var arr = new Array(length || 0);
  var i = length;

  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while (i--) {
      arr[length - 1 - i] = this.createMatrix.apply(this, args);
    };
  }
  return arr;
};

/**
 * Function retrieves the important information from input array.
 * @param elementForId map of element id's to elements
 * @returns {hightestLanePosition:number, rootElements: Element[]}
 * @private
 */
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation.prototype.retrieveInfoFromInputArray = function(
  elementForId) {

  var highestLanePosition = 0
  , rootElements = []
  , oElement
  ;

  Object.keys(elementForId).forEach(function(sElementId) {
    oElement = elementForId[sElementId];

    if (!oElement.singleParent && !oElement.arrayParent) {
      rootElements.push(oElement);
    }

    if (highestLanePosition < oElement.lane) {
      highestLanePosition = oElement.lane;
    }
  });

  return {
    'highestLanePosition' : highestLanePosition,
    'rootElements' : rootElements
  };
};

/**
 * function doubles the matrix for drawing purposes and it only doubles the columns and add undefined values there.
  * @private
*/
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation.prototype.doubleColumnsInMatrix = function(
    currentMatrix) {
  var matrixY = 0;

  for (var i = 0; i < currentMatrix.length; i++) {
    matrixY = matrixY > currentMatrix[i].length ? matrixY
        : currentMatrix[i].length;
  }

  var doubleArray = new Array(currentMatrix.length || 0);

  for (var i = 0; i < doubleArray.length; i++) {
    doubleArray[i] = new Array(matrixY * 2 - 1);
    for (var j = 0; j < matrixY; j++) {
      if (currentMatrix[i][j]) {
        doubleArray[i][2 * j] = currentMatrix[i][j];
      };
    };
  }
  return doubleArray;
};


/**
 * function removes empty lines from the matrix.
*/
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation.prototype.removeEmptyLines = function(
   originalMatrix) {
 // first check the number of valid lines
 var numberOfLines = 0;
 for (var i = 0; i < originalMatrix.length; i++) {
   for (var j = 0; j < originalMatrix[i].length; j++) {
     if (originalMatrix[i][j]) {
       numberOfLines++;
       break;
     };
   };
 }

 var returnArray = this.createMatrix(numberOfLines, originalMatrix[0].length);

 for (var i = 0; i < numberOfLines; i++) {
   for (var j = 0; j < originalMatrix[i].length; j++) {
     returnArray[i][j] = null; // everything is at least null
     if (originalMatrix[i][j]) {
       returnArray[i][j] = originalMatrix[i][j];
     };
   };
 }
 return returnArray;
};


/**
 * This function creates the matrix with nodes positioned into the proper places.
 *
 * @param currentElement actually processed element
 * @param elementForId map of all the available elements
 * @param return2DimArray the updated virtual matrix
 * @returns the updated virtual matrix
 * @public
 */
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation.prototype.processCurrentElement = function(
    currentElement, elementForId, return2DimArray) {
  var aElementsChildIds
  , aElementsChildren
  , that = this
  , bMoveToNextLine = true // this is check for repeated parent child relationship. The childrenArr is notempty but
  ;                        // in fact it is required to move to the next line.

  if (currentElement.isProcessed) {
    return return2DimArray;
  }

  this.nodePositions[currentElement.nodeid] = {
    'c' : currentElement,
    'x' : this.posx,
    'y' : this.posy * 2
  };

  return2DimArray[this.posx][this.posy++] = currentElement;

  aElementsChildIds = currentElement.oNode.getChildren();

  currentElement.isProcessed = true;

  aElementsChildren = this.sortBasedOnChildren(aElementsChildIds, elementForId);

  if (aElementsChildren) {
    aElementsChildren.forEach(function(oChild) {
      if (!oChild.isProcessed) {
        bMoveToNextLine = false;

        while (that.posy < oChild.lane) {
          return2DimArray[that.posx][that.posy++] = null;
        }

        return2DimArray = that.processCurrentElement(oChild, elementForId, return2DimArray);
      }
    });
  }

  if (!aElementsChildIds || bMoveToNextLine) {
    this.posx++;
    this.posy = 0;
  }

  return return2DimArray;
};

/**
 * This function orders the root elements based on the given rules. It returns back the elements that flow is nicely layouted.
 *
 * @param rootElements the root elements to sort
 * @private
 */
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation.prototype.sortRootElements = function(rootElements) {
  return rootElements;
};

/**
 * Sort based on the child closenes. If 2 children has some common children they get next to each other.
 *
 * @param aElementsChildIds child ids of the currently processed node
 * @param elementForId  contains a map of the node id's to node elements
 * @return sorted child elements (first sort by lanes, than the elements having the same children gets next to each other)
 * @private
*/
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation.prototype.sortBasedOnChildren = function(aElementsChildIds, elementForId) {
 var oElementsForLane = {}
     , aElements
     , laneId = null
     , aLaneIds
     , aNmbrChildren
     , bNmbrChildren
     , finalSortedArray = []
     , aSingleLaneContent
     , aSingleContent
     , oProcessedChildElement
     ;

 if (aElementsChildIds) {
   aElementsChildIds.forEach(function(oChildId) {
      aElements = oElementsForLane[elementForId[oChildId].lane];
      if (!aElements) {
        oElementsForLane[elementForId[oChildId].lane] = aElements = [];
      }
      aElements.push(elementForId[oChildId]);
   });
 } else {
   return [];
 }

 aLaneIds = new Array();
 for (laneId in oElementsForLane) {
   aLaneIds.push(laneId);
   oElementsForLane[laneId].sort(function(a, b) {
     // lane needs not to be checked it is same one
     // check for the same children. In this case return 0
       elementForId[a].oNode.getChildren();
       aNmbrChildren = (a.oNode.getChildren() || []).length;
       bNmbrChildren = (b.oNode.getChildren() || []).length;
       return bNmbrChildren - aNmbrChildren;
   });
 }

 aLaneIds = aLaneIds.sort(function(a, b) {
   return b - a;
 });

 // now we have in aLaneIds the lane orders and based on that we take from map the elements for the lanes.
 // now order based on the children
 aLaneIds.forEach(function(laneId) {
   aSingleLaneContent = oElementsForLane[laneId];

   if (aSingleLaneContent.length > 1) {
     aSingleContent = [];
     // we iterate through the all the children
     // put all the nodes having at least 1 common child next to each other
     oProcessedChildElement = aSingleLaneContent.shift();
     while (oProcessedChildElement) {
       if (aSingleContent.indexOf(oProcessedChildElement) < 0) {
         aSingleContent.push(oProcessedChildElement);
       }

       aSingleLaneContent.forEach(function(oSiblingElement) {
         if (oProcessedChildElement.containsChildren(oSiblingElement)) {
           aSingleContent.push(oSiblingElement);
         }
       });
       oProcessedChildElement = aSingleLaneContent.shift();
     } // while (oProcessedChild)
     finalSortedArray = finalSortedArray.concat(aSingleContent);
   } else {
     finalSortedArray = finalSortedArray.concat(aSingleLaneContent);
   }
 });

 return finalSortedArray;
};


/**
 * function calculates the connection and writes into the virtual matrix. It gets the matrix plus
 * parent children relationship
 * @param originalMatrix the matrix with the setup of nodes
 * @returns the matrix updated with the calculated paths
 */
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation.prototype.calculatePathInMatrix = function(
   originalMatrix) {
 // var currentElement = originalMatrix[0][0];
 var currentElement = null;

 for ( var key in this.nodePositions) {
   if (this.nodePositions.hasOwnProperty(key)) {
     currentElement = this.nodePositions[key];
     var arrayList = currentElement.c.oNode.getChildren();
     for (var i = 0; arrayList && i < arrayList.length; i++) {
       var positionChildrenObject = this.nodePositions[arrayList[i]];
       originalMatrix = this.calculateSingleNodeConnection(currentElement,
           positionChildrenObject, currentElement.x, currentElement.y,
           positionChildrenObject.x, positionChildrenObject.y, originalMatrix);
     }
   }
 }
 return originalMatrix;
};

/**
 * function based on the parent children position calculated the path from parent to children. The idea is like following
 * go from parent half right and use next connection column to go up or down. Afterwards on the line with children go
 * horizontal
 * @param nodeParent
 * @param nodeChildren
 * @param parentX
 * @param parentY
 * @param childrenX
 * @param childrenY
 * @param originalMatrix
 * @returns
 */
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation.prototype.calculateSingleNodeConnection = function(
    nodeParent, nodeChildren, parentX, parentY, childrenX, childrenY,
    originalMatrix) {
  var hor = childrenY - parentY;
  var ver = childrenX - parentX;
  if (hor < 0) {
    var errMsg = [ "Problem with negative horizontal movement",
               "Parent node is " + nodeParent.c.toString(),
               "Children node is " + nodeChildren.c.toString(),
               "Coordinates : '" + parentX + "','" + parentY + "','" + childrenX +  "','" +  childrenY  + "'"];
    throw errMsg;
  } else if (ver < -1) {
    // half left and up

    var bNormalHorizontalLinePossible =
      this.checkIfHorizontalLinePossible(originalMatrix, childrenX, parentY + 2, childrenY);
    var yPosition = childrenY-1;
    if( bNormalHorizontalLinePossible ) {
      yPosition = parentY + 1;
    }
    var xPosition = parentX;
    if( bNormalHorizontalLinePossible ) {
      xPosition = childrenX;
    }
    originalMatrix[parentX][yPosition] = this.createConnectionElement(
        originalMatrix[parentX][yPosition], sap.suite.ui.commons.ProcessFlow.cellEdgeConstants.LU,
        nodeParent, nodeChildren, false );

    // going up to the children
    originalMatrix = this.writeVerticalLine(originalMatrix, parentX, childrenX, yPosition,
          nodeParent, nodeChildren);

    originalMatrix[childrenX][yPosition] =
      this.createConnectionElement(originalMatrix[childrenX][yPosition],
         sap.suite.ui.commons.ProcessFlow.cellEdgeConstants.UR, nodeParent,
         nodeChildren, (yPosition == childrenY-1) );
      // pure right
    var startY = parentY + 2;
    var endY = childrenY;
    if( !bNormalHorizontalLinePossible) {
      startY = parentY +1;
      endY = yPosition + 1;
    }
    originalMatrix = this.writeHorizontalLine(originalMatrix, xPosition,
        startY, endY , nodeParent, nodeChildren);

  } else if (ver == -1) {
    // left and up
    originalMatrix[parentX][parentY + 1] =
        this.createConnectionElement(originalMatrix[parentX][parentY + 1],
        sap.suite.ui.commons.ProcessFlow.cellEdgeConstants.LU, nodeParent,
        nodeChildren, false );
    // up and right
    originalMatrix[childrenX][parentY + 1] =
      this.createConnectionElement(originalMatrix[childrenX][parentY + 1],
      sap.suite.ui.commons.ProcessFlow.cellEdgeConstants.UR, nodeParent,
      nodeChildren, false );
    // horizontal line if possible
    originalMatrix = this.writeHorizontalLine(originalMatrix, childrenX,
        parentY + 2, childrenY, nodeParent, nodeChildren);
  } else if (ver === 0) {
    originalMatrix = this.writeHorizontalLine(originalMatrix, parentX,
        parentY + 1, childrenY, nodeParent, nodeChildren);
  } else if (ver === 1) {
    // 1 row down and do horizontal line
    // half and down
    originalMatrix[parentX][parentY + 1] =
      this.createConnectionElement(originalMatrix[parentX][parentY + 1],
      sap.suite.ui.commons.ProcessFlow.cellEdgeConstants.LD, nodeParent,
      nodeChildren, false );
    // down and right
    originalMatrix[childrenX][parentY + 1] =
      this.createConnectionElement(originalMatrix[childrenX][parentY + 1],
      sap.suite.ui.commons.ProcessFlow.cellEdgeConstants.DR, nodeParent,
      nodeChildren, (parentY+1) ==  (childrenY-1));
    // horizontal line to the target
    originalMatrix = this.writeHorizontalLine(originalMatrix, childrenX,
        parentY + 2, childrenY, nodeParent, nodeChildren);
  } else // ver > 1
  {
    // go down until children and do horizontal line
    // half left and down
    originalMatrix[parentX][parentY + 1] =
      this.createConnectionElement(originalMatrix[parentX][parentY + 1],
      sap.suite.ui.commons.ProcessFlow.cellEdgeConstants.LD, nodeParent,
      nodeChildren, false );
    originalMatrix = this.writeVerticalLine(originalMatrix, childrenX, parentX, parentY+1,
        nodeParent, nodeChildren);
    // half down and right
    originalMatrix[childrenX][parentY + 1] =
      this.createConnectionElement(originalMatrix[childrenX][parentY + 1],
      sap.suite.ui.commons.ProcessFlow.cellEdgeConstants.DR, nodeParent,
      nodeChildren, (parentY+1) == (childrenY-1) );
      originalMatrix = this.writeHorizontalLine(originalMatrix, childrenX,
          parentY + 2, childrenY, nodeParent, nodeChildren);
  }
  return originalMatrix;
};

/**
 * write vertical line from firstrow to lastrow on the column position
 * @private
 */
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation.prototype.writeVerticalLine = function(
    originalMatrix, firstRow, lastRow, column, nodeParent, nodeChildren) {
  for (var j = firstRow - 1; j > lastRow; j--) {
    originalMatrix[j][column] = this.createConnectionElement(originalMatrix[j][column],
        sap.suite.ui.commons.ProcessFlow.cellEdgeConstants.DU, nodeParent,
        nodeChildren, false );
  } // end for
  return originalMatrix;
};

/**
*
* @private
* @param originalMatrix
* @param row
* @param firstColumn
* @param lastColumn
* @returns function return true, if the path is free, otherwise false
*/
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation.prototype.checkIfHorizontalLinePossible = function(
   originalMatrix, row, firstColumn, lastColumn) {
 var bLinePossible = true;
 for (var i = firstColumn; i < lastColumn; i++) {
   if( originalMatrix[row][i] instanceof sap.suite.ui.commons.ProcessFlow.NodeElement ) {
     bLinePossible = false;
     break;
     };
   };

 return bLinePossible;
};

/**
 * function calculated and writes horizontal line
 * @param originalMatrix matrix to write to
 * @param row the horizontal position
 * @param firstColumn where to start
 * @param lastColumn where to stop
 * @param nodeParent definition of initial node
 * @param nodeChildren definition of target node
 * @returns
 */
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation.prototype.writeHorizontalLine = function(
    originalMatrix, row, firstColumn, lastColumn, nodeParent, nodeChildren) {
  var bPotentialArrow = (row == nodeChildren.x);
  // no arrow, no last line ... somewhere else will be (up and right)
  if( !bPotentialArrow ) {
    lastColumn--;
  }
  for (var i = firstColumn; i < lastColumn; i++) {
    originalMatrix[row][i] =
      this.createConnectionElement(originalMatrix[row][i],
      sap.suite.ui.commons.ProcessFlow.cellEdgeConstants.LR, nodeParent,
      nodeChildren, (i == (lastColumn-1)) && bPotentialArrow);
  }
  return originalMatrix;
};

/**
 * function adds new connection element to the cell in the matrix. It is additiv approach where during the
 * drawing phase all the connections in one cell will be joined togethe
 * @private
 * @param originalConnectionValue
 * @param addStringValue
 * @param initialNode
 * @param targetNode
 * @param bArrowRequired
 * @returns {sap.suite.ui.commons.ProcessFlowConnection}
 */
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation.prototype.createConnectionElement = function(
    originalConnectionValue, addStringValue, initialNode, targetNode, bArrowRequired) {
  var tempOriginalConnectionValue = originalConnectionValue;
  if (!tempOriginalConnectionValue) {
    tempOriginalConnectionValue = new sap.suite.ui.commons.ProcessFlowConnection({
    });
  }

  var displayState = sap.suite.ui.commons.ProcessFlowDisplayState.Regular;
  if( (targetNode.c.displayState == sap.suite.ui.commons.ProcessFlowDisplayState.Highlighted ||
      targetNode.c.displayState == sap.suite.ui.commons.ProcessFlowDisplayState.HighlightedFocused) &&
      (initialNode.c.displayState == sap.suite.ui.commons.ProcessFlowDisplayState.Highlighted ||
          initialNode.c.displayState == sap.suite.ui.commons.ProcessFlowDisplayState.HighlightedFocused)) {
    displayState = sap.suite.ui.commons.ProcessFlowDisplayState.Highlighted;
  } else  if( targetNode.c.displayState == sap.suite.ui.commons.ProcessFlowDisplayState.Dimmed ||
      targetNode.c.displayState == sap.suite.ui.commons.ProcessFlowDisplayState.DimmedFocused ||
      initialNode.c.displayState == sap.suite.ui.commons.ProcessFlowDisplayState.Dimmed ||
          initialNode.c.displayState == sap.suite.ui.commons.ProcessFlowDisplayState.DimmedFocused) {
    displayState = sap.suite.ui.commons.ProcessFlowDisplayState.Dimmed;
  }
  var objConn = {flowLine: addStringValue, targetNodeState: targetNode.c.state,
      displayState: displayState,
      hasArrow : bArrowRequired};
  tempOriginalConnectionValue.addConnectionData( objConn );
  return tempOriginalConnectionValue;
};

sap.suite.ui.commons.ProcessFlow.cellEdgeConstants = {
  'LU' : 'tl', //it is going from Left to the middle and afterwards Up = top left
  'LD' : 'lb', //it is going from Left to the middle and afterwards Down = left bottom
  'DU' : 'tb', //it is going from Down to the middle and afterwards Up = top bottom
  'LR' : 'rl', //it is going from Left to the middle and afterwards Right = right left
  'DR' : 'rt', //it is going from Down to the middle and afterwards Right = right top
  'UR' : 'rb' //it is going from Up to the middle and afterwards Right = right bottom
}; // end of cell edge definition

String.prototype.contains = function(it) {
  return this.indexOf(it) != -1;
};


sap.suite.ui.commons.ProcessFlow.prototype.addNode = function( addNode ) {
  return this.addAggregation("nodes",addNode, false);
//  return this.addProperty();
};

/**
 * function sets the zoom level.
 * @param zoomLevel. this is a new zoom level of the type sap.suite.ui.commons.ProcessFlowZoomLevel
*/
sap.suite.ui.commons.ProcessFlow.prototype.setZoomLevel = function( zoomLevel ) {
  if (!(zoomLevel in sap.suite.ui.commons.ProcessFlowZoomLevel)){ // Enumeration
    this._handleException("\"" + zoomLevel + "\" is not a valid entry of the enumeration for property zoom level of ProcessFlow");
    return;
  }
  this._zoomLevel = zoomLevel;
  this.rerender();
};

/**
 * function returns current zoom level.
 * @return zoomLevel.
*/
sap.suite.ui.commons.ProcessFlow.prototype.getZoomLevel = function() {
  return this._zoomLevel;
};

/**
 * function sets new zoom level with higher level of details. having max details it stays as it is.
*/
sap.suite.ui.commons.ProcessFlow.prototype.zoomIn = function( ) {
  var currentZoomLevel = this.getZoomLevel();
  var newLevel = currentZoomLevel;
  switch (currentZoomLevel) {
        case (sap.suite.ui.commons.ProcessFlowZoomLevel.One):
          newLevel = sap.suite.ui.commons.ProcessFlowZoomLevel.Two;
          break;
        case (sap.suite.ui.commons.ProcessFlowZoomLevel.Two):
          newLevel = sap.suite.ui.commons.ProcessFlowZoomLevel.Three;
          break;
        case (sap.suite.ui.commons.ProcessFlowZoomLevel.Three):
          newLevel = sap.suite.ui.commons.ProcessFlowZoomLevel.Four;
          break;
          };
  this.setZoomLevel(newLevel);
  return this.getZoomLevel();
};

/**
 * function sets new zoom level with smaller level of details. Having the least detail view it stays as it is.
*/
sap.suite.ui.commons.ProcessFlow.prototype.zoomOut = function( ) {
  var currentZoomLevel = this.getZoomLevel();
  var newLevel = currentZoomLevel;
  switch (currentZoomLevel) {
        case (sap.suite.ui.commons.ProcessFlowZoomLevel.Four):
          newLevel = sap.suite.ui.commons.ProcessFlowZoomLevel.Three;
          break;
        case (sap.suite.ui.commons.ProcessFlowZoomLevel.Three):
          newLevel = sap.suite.ui.commons.ProcessFlowZoomLevel.Two;
          break;
        case (sap.suite.ui.commons.ProcessFlowZoomLevel.Two):
          newLevel = sap.suite.ui.commons.ProcessFlowZoomLevel.One;
          break;
          };
  this.setZoomLevel(newLevel);
  return this.getZoomLevel();
};

sap.suite.ui.commons.ProcessFlow.prototype.updateModel = function() {
  //this.getModel(this.getBindingInfo("nodes").model).refresh();
  var nodeModel = this.getBindingInfo("nodes");
  if( !nodeModel ) {
    this._handleException("The node model is not bound.");
    return;
  }

  this.getModel(nodeModel.model).refresh();
  this.rerender();
};

 /**
 * @param {sap.ui.base.Event} oEvent
 * @private
 */
sap.suite.ui.commons.ProcessFlow.prototype.ontouchend = function(oEvent) {
  if (!sap.ui.Device.support.touch && !jQuery.sap.simulateMobileOnDesktop) {
    this.onAfterRendering();
  }
  if (oEvent === null || oEvent.oSource === undefined) {
    return false;
  }
  oEvent.preventDefault();

  if (this && this._isHeaderMode()) {
    // reset lanes as they could be redefined completely in headerPress Event - also necessary for merged lanes
    this._internalLanes = [];
    this.fireHeaderPress(this);
  }
  return false;
};

sap.suite.ui.commons.ProcessFlow.prototype._isHeaderMode = function() {
  var aNodes = this.getNodes();
  return !aNodes || (aNodes.length == 0);
};

/**
 * Switch cursors for scrollable/non-scrollable content.
 * @param {object} $scrollContainer the affected scroll container (jQuery object)
 * @param {String} sCursorClassFrom class containing the original cursor definition
 * @param {String} sCursorClassTo class containing the new cursor definition
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlow.prototype._switchCursors = function($scrollContainer, sCursorClassFrom, sCursorClassTo) {
  if ($scrollContainer.hasClass(sCursorClassFrom)) {
    $scrollContainer.removeClass(sCursorClassFrom);
  }
  if (!$scrollContainer.hasClass(sCursorClassTo)) {
    $scrollContainer.addClass(sCursorClassTo);
  }
};

/**
 * Clear the mouse handlers for the scrolling functionality.
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlow.prototype._clearHandlers = function($scrollContainer) {
  var sMousePreventEvents = 'contextmenu dblclick';

  $scrollContainer.on(sMousePreventEvents, function(oEvent) {
    if (oEvent && !oEvent.isDefaultPrevented()) {
      oEvent.preventDefault();
    }
    if (oEvent && !oEvent.isPropagationStopped()) {
      oEvent.stopPropagation();
    }
    if (oEvent && !oEvent.isImmediatePropagationStopped()) {
      oEvent.stopImmediatePropagation();
    }
  });
};

/**
 * Standard method called after the control rendering.
 */
sap.suite.ui.commons.ProcessFlow.prototype.onAfterRendering = function () {
  var $scrollContainer = this.$()
      , bMouseDown = false
      , bScrollable = false
      , nCursorXPosition = 0
      , nCursorYPosition = 0
      , $content = this.$("scroll-content")
      , iHeight
      , iWidth
      , iScrollWidth
      , iScrollHeight
      , sGrabClass
      , sGrabbingClass
      , sDefaultClass
      , that = this
      ;

  if ($content && $content.length) {
    // set PF node icon cursors, because these are unfortunately set as inline styles, so cannot be overriden by applying a css class.
    this.$().find('.sapSuiteUiCommonsProcessFlowNode .sapUiIcon').css("cursor", "inherit");

    // set up the cursor classes
    sDefaultClass = "sapSuiteUiDefaultCursorPF";

    if(sap.ui.Device.browser.msie) {
      sGrabClass = "sapSuiteUiGrabCursorIEPF";
      sGrabbingClass = "sapSuiteUiGrabbingCursorIEPF";
    } else {
      sGrabClass = "sapSuiteUiGrabCursorPF";
      sGrabbingClass = "sapSuiteUiGrabbingCursorPF";
    }

    if (this.getScrollable()) {
      iHeight = parseInt($scrollContainer.css("height").slice(0, -2), 10);
      iWidth = parseInt($scrollContainer.css("width").slice(0, -2), 10);
      iScrollHeight = $content[0].scrollHeight;
      iScrollWidth = $content[0].scrollWidth;

      if (iScrollHeight <= iHeight && iScrollWidth <= iWidth) {
        this._clearHandlers($scrollContainer);
        // no scrolling makes sense, so clean up the mouse handlers and switch the cursors
        this._switchCursors($scrollContainer, sGrabClass, sDefaultClass);
      } else {
        this._switchCursors($scrollContainer, sDefaultClass, sGrabClass);
        bScrollable = true;
      }
    } else {
      this._clearHandlers($scrollContainer);
      this._switchCursors($scrollContainer, sGrabClass, sDefaultClass);
      $scrollContainer.css("overflow", "visible");
      $content.css("position", "static");
    }
    if (bScrollable) {
      if (!sap.ui.Device.support.touch && !jQuery.sap.simulateMobileOnDesktop) {
        var sMouseEvent = 'contextmenu mousemove mouseleave mousedown mouseup';

        $scrollContainer.on(sMouseEvent, jQuery.proxy(function(oEvent) {
          if (oEvent && !oEvent.isDefaultPrevented()) {
            oEvent.preventDefault();
          }
          switch(oEvent.type) {
            case 'mousemove':
              if (bMouseDown) {
                if (sap.ui.getCore().getConfiguration().getRTL()) {
                  $scrollContainer.scrollLeftRTL(nCursorXPosition - oEvent.pageX);
                }
                else {
                  $scrollContainer.scrollLeft(nCursorXPosition - oEvent.pageX);
                }
                $scrollContainer.scrollTop(nCursorYPosition - oEvent.pageY);
              }
              break;
            case 'mousedown':
              this._switchCursors($scrollContainer, sGrabClass, sGrabbingClass);
              if (sap.ui.getCore().getConfiguration().getRTL()) {
                nCursorXPosition = $scrollContainer.scrollLeftRTL() + oEvent.pageX;
              } else {
                nCursorXPosition = $scrollContainer.scrollLeft() + oEvent.pageX;
              }
              nCursorYPosition = $scrollContainer.scrollTop() + oEvent.pageY;
              bMouseDown = true;
              break;
            case 'mouseup':
              bMouseDown = false;
            case 'mouseleave':
              this._switchCursors($scrollContainer, sGrabbingClass, sGrabClass);
              break;
          }
          if (oEvent && !oEvent.isPropagationStopped()) {
            oEvent.stopPropagation();
          }
          if (oEvent && !oEvent.isImmediatePropagationStopped()) {
            oEvent.stopImmediatePropagation();
          }
        }, this));
      } else {
        this._clearHandlers($scrollContainer);
        $scrollContainer.css("overflow", "auto");
      }
    }
    if (that.getWheelZoomable() && !sap.ui.Device.support.touch && !jQuery.sap.simulateMobileOnDesktop && !that._isHeaderMode()) { //only on desktop browsers, only in non-header mode
      var sMouseWheelEvent = (sap.ui.Device.browser.mozilla) ? 'DOMMouseScroll MozMousePixelScroll' : 'mousewheel wheel';

      $scrollContainer.on(sMouseWheelEvent, function(oEvent) {
        var oDirection = oEvent.originalEvent.wheelDelta || -oEvent.originalEvent.detail;

        if (oEvent && !oEvent.isDefaultPrevented()) {
          oEvent.preventDefault();
          oEvent.originalEvent.returnValue = false;
        }

        var waitTime = 300;
        var doNotListen = function() {
          var diff = new Date() - that._wheelTimestamp;

          if (diff < waitTime) {
            that._wheelTimeout = setTimeout(doNotListen, waitTime - diff);
          } else {
            that._wheelTimeout = null;
            that._wheelCalled = false;
          }
        };
        if (!that._wheelCalled) {
          that._wheelCalled = true;

          if (oDirection < 0) {
            that.zoomIn();
          } else {
            that.zoomOut();
          }
        }
        if (! that._wheelTimeout) {
          that._wheelTimestamp = new Date();
          that._wheelTimeout = setTimeout(doNotListen, waitTime);
        }
        if (oEvent && !oEvent.isPropagationStopped()) {
          oEvent.stopPropagation();
        }
        if (oEvent && !oEvent.isImmediatePropagationStopped()) {
          oEvent.stopImmediatePropagation();
        }
      });
    }
    this._resizeRegId = sap.ui.core.ResizeHandler.register(this, jQuery.proxy(sap.suite.ui.commons.ProcessFlow.prototype._onResize, this));
  }
};

/**
 * Control resize handler for setting the cursor type/scroll setup.
 * @private
 */
sap.suite.ui.commons.ProcessFlow.prototype._onResize = function() {
  var iActualTime = new Date().getTime();

  if (!this._iLastResizeEventTime || ((iActualTime - this._iLastResizeEventTime) < 50)) {
      // start to handle after the second resize event (below 50ms)
      if (!this._iLastResizeHandlingTime || (iActualTime - this._iLastResizeHandlingTime > 500)) { // handle each .5s
        this.onAfterRendering();
        this._iLastResizeHandlingTime = new Date().getTime();
      }
  } else {
    this._iLastResizeHandlingTime = null;
  }

  this._iLastResizeEventTime = new Date().getTime();
};

sap.suite.ui.commons.ProcessFlow._enumMoveDirection = {
    'LEFT' : 'left', // move left
    'RIGHT' : 'right', // move right
    'UP' : 'up', // move left
    'DOWN' : 'down', // move right
  }; // end of move enumeration

/**
 * Changes the navigation focus to the specified node on mouse click.
 * @param {sap.suite.ui.commons.ProcessFlowNode} the new node to focus to
 * @private
 * @since 1.23
 */
sap.suite.ui.commons.ProcessFlow.prototype._setFocusOnMouseClick = function(oNode) {
  var oNodeFrom = this._lastNavigationFocusNode
    , oNodeTo = oNode
    ;
  this._lastNavigationFocusNode = oNodeTo;
  // set the focus to the PF table to grab the keyboard input further on
  this.getDomRef().children[0].children[0].focus();
  this._changeNavigationFocus(oNodeFrom, oNodeTo);
};

/**
 * Changes the navigation focus from the actual node to the node specified as parameter.
 * Calls rerender on both nodes.
 * @param {sap.suite.ui.commons.ProcessFlowNode} oNodeFrom the old focused node
 * @param {sap.suite.ui.commons.ProcessFlowNode} oNodeTo the new node to focus to
 * @private
 * @since 1.23
 */
sap.suite.ui.commons.ProcessFlow.prototype._changeNavigationFocus = function (oNodeFrom, oNodeTo) {
  if (oNodeFrom && oNodeTo && (oNodeFrom.getId() !== oNodeTo.getId)) {
    jQuery.sap.log.debug("Rerendering PREVIOUS node with id '" + oNodeFrom.getId()
     + "' and title '" + oNodeFrom.getTitle()
     + "' navigation focus : "
     + oNodeFrom._getNavigationFocus()
    );

    oNodeFrom._setNavigationFocus(false);
    oNodeFrom.rerender();

    jQuery.sap.log.debug("Rerendering CURRENT node with id '" + oNodeTo.getId()
     + "' and title '" + oNodeTo.getTitle()
     + "' navigation focus : "
     + oNodeTo._getNavigationFocus()
    );

    oNodeTo._setNavigationFocus(true);
    oNodeTo.rerender();

    this._onFocusChanged();
  }
};

/**
 * function reacts on page up and page down. it should go 5 lines up or down.
 * or little bit less if there is not enough space
 * with alt page up move focus left by 5 items maximum
 * with alt page down move focus right by 5 items maximum
 * @param direction please see sap.suite.ui.commons.ProcessFlow._enumMoveDirection
 * @param altKey, true if alt key is pressed, false otherwise
 * @private
 */
sap.suite.ui.commons.ProcessFlow.prototype._moveOnePage = function( direction, altKey ) {
  direction = direction || sap.suite.ui.commons.ProcessFlow._enumMoveDirection.UP;
  altKey = altKey || false;
  // search for navigated element
  var origX = 0, origY = 0;
  var newX = 0, newY = 0;
  var nodesOver = 0;
  var bNewNodeFound = false;
  for( var i = 0; i < this._internalCalcMatrix.length; i++ ) {
    for( var j = 0; j < this._internalCalcMatrix[i].length; j++ ) {
      if( this._internalCalcMatrix[i][j] instanceof sap.suite.ui.commons.ProcessFlowNode && this._internalCalcMatrix[i][j]._getNavigationFocus()) {
        origX = i;
        origY = j;
        break;
      }
    }
  }

  // going 5 elements on the same row
  if( altKey ) {
      if( direction == sap.suite.ui.commons.ProcessFlow._enumMoveDirection.UP) {
        for( var j = origY-1; j>=0 && nodesOver < this._jumpOverElements; j--) {
          if( this._internalCalcMatrix[origX][j] instanceof sap.suite.ui.commons.ProcessFlowNode && (!this._bHighlightedMode || this._internalCalcMatrix[origX][j].getHighlighted())) {
            nodesOver++;
            newX = origX;
            newY = j;
            bNewNodeFound = true;
          }
        }
      } else if ( direction === sap.suite.ui.commons.ProcessFlow._enumMoveDirection.DOWN) {
        for( var j = origY + 1; j < this._internalCalcMatrix[origX].length && nodesOver < this._jumpOverElements; j++) {
          if( this._internalCalcMatrix[origX][j] instanceof sap.suite.ui.commons.ProcessFlowNode && (!this._bHighlightedMode || this._internalCalcMatrix[origX][j].getHighlighted())) {
            nodesOver++;
            newX = origX;
            newY = j;
            bNewNodeFound = true;
          };
        };
      };
    } else {
      if( direction == sap.suite.ui.commons.ProcessFlow._enumMoveDirection.UP) {
        for( var i = origX-1; i >= 0 && nodesOver < this._jumpOverElements; i--) {
          if( this._internalCalcMatrix[i][origY] instanceof sap.suite.ui.commons.ProcessFlowNode && (!this._bHighlightedMode || this._internalCalcMatrix[i][origY].getHighlighted())) {
            nodesOver++;
            newX = i;
            newY = origY;
            bNewNodeFound = true;
          }
        }
      } else if ( direction === sap.suite.ui.commons.ProcessFlow._enumMoveDirection.DOWN) {
        for( var i = origX + 1; i < this._internalCalcMatrix.length && nodesOver < this._jumpOverElements; i++) {
          if( this._internalCalcMatrix[i][origY] instanceof sap.suite.ui.commons.ProcessFlowNode && (!this._bHighlightedMode || this._internalCalcMatrix[i][origY].getHighlighted())) {
            nodesOver++;
            newX = i;
            newY = origY;
            bNewNodeFound = true;
          };
        };
      };
  }

  if( bNewNodeFound ) {
    this._internalCalcMatrix[origX][origY]._setNavigationFocus(false);
    this._internalCalcMatrix[newX][newY]._setNavigationFocus(true);
    this._lastNavigationFocusNode = this._internalCalcMatrix[newX][newY];
  }

  return bNewNodeFound;
};

/**
 * function reacts on home/end. it should go to the first/last element on given row.
 * with ctrl it goes to the first/last active element on the process flow
 * or little bit less if there is not enough space
 * @param direction please see sap.suite.ui.commons.ProcessFlow._enumMoveDirection
 * LEFT -> HOME
 * RIGHT -> END
 * @param ctrlKey, true if ctrl key is pressed
 * @private
 */
sap.suite.ui.commons.ProcessFlow.prototype._moveHomeEnd = function( direction, ctrlKey ) {
  direction = direction || sap.suite.ui.commons.ProcessFlow._enumMoveDirection.RIGHT;
  ctrlKey = ctrlKey || false;
  // search for navigated element
  var origX = 0, origY = 0;
  var newX = 0, newY = 0;
  var bNewNodeFound = false;
  for( var i = 0; i < this._internalCalcMatrix.length; i++ ) {
    for( var j = 0; j < this._internalCalcMatrix[i].length; j++ ) {
      if( this._internalCalcMatrix[i][j] instanceof sap.suite.ui.commons.ProcessFlowNode && this._internalCalcMatrix[i][j]._getNavigationFocus()) {
        origX = i;
        origY = j;
        break;
      }
    }
  }

  // TODO
  // check the RTL behaviour when home/end on one row ....

  // going to the first / last element on the given column
  if( ctrlKey ) {
      if( direction == sap.suite.ui.commons.ProcessFlow._enumMoveDirection.LEFT) {
         for( var i = 0; i < origX ; i++) {
           if( this._internalCalcMatrix[i][origY] instanceof sap.suite.ui.commons.ProcessFlowNode && (!this._bHighlightedMode || this._internalCalcMatrix[i][origY].getHighlighted())) {
             newX = i;
             newY = origY;
             bNewNodeFound = true;
             break;
           }
        }
      } else if ( direction === sap.suite.ui.commons.ProcessFlow._enumMoveDirection.RIGHT) {
        for( var i = this._internalCalcMatrix.length-1; i > origX; i--) {
          if( this._internalCalcMatrix[i][origY] instanceof sap.suite.ui.commons.ProcessFlowNode && (!this._bHighlightedMode || this._internalCalcMatrix[i][origY].getHighlighted())) {
            newX = i;
            newY = origY;
            bNewNodeFound = true;
            break;
          }
       }
      };
    } else { // going to the first/last element of the row
      if( direction == sap.suite.ui.commons.ProcessFlow._enumMoveDirection.LEFT) {
        for( var j = 0; j < origY; j++) {
          if( this._internalCalcMatrix[origX][j] instanceof sap.suite.ui.commons.ProcessFlowNode && (!this._bHighlightedMode || this._internalCalcMatrix[origX][j].getHighlighted())) {
            newX = origX;
            newY = j;
            bNewNodeFound = true;
            break;
          }
        }
      } else if ( direction === sap.suite.ui.commons.ProcessFlow._enumMoveDirection.RIGHT) {
        for( var j = this._internalCalcMatrix[origX].length -1; j > origY; j--) {
          if( this._internalCalcMatrix[origX][j] instanceof sap.suite.ui.commons.ProcessFlowNode && (!this._bHighlightedMode || this._internalCalcMatrix[origX][j].getHighlighted())) {
            newX = origX;
            newY = j;
            bNewNodeFound = true;
            break;
          };
        };
      };

  }

  if( bNewNodeFound ) {
    this._internalCalcMatrix[origX][origY]._setNavigationFocus(false);
    this._internalCalcMatrix[newX][newY]._setNavigationFocus(true);
    this._lastNavigationFocusNode = this._internalCalcMatrix[newX][newY];
  }
  return bNewNodeFound;
};
/**
 * function moves the focus to the next node based on tab behaviour
 * First going left, after to the next row
 * @param direction please see enumeration Direction ( sap.suite.ui.commons.ProcessFlow._enumMoveDirection )
 * @returns true if the next element is possible to set. False if there is not more elements to set.
 */
sap.suite.ui.commons.ProcessFlow.prototype._moveToNextNode = function( direction, step ) {
// first find the current focus element
  direction = direction || sap.suite.ui.commons.ProcessFlow._enumMoveDirection.RIGHT;

  if (sap.ui.getCore().getConfiguration().getRTL()) {
    if (direction === sap.suite.ui.commons.ProcessFlow._enumMoveDirection.RIGHT) {
      direction = sap.suite.ui.commons.ProcessFlow._enumMoveDirection.LEFT;
    } else if (direction === sap.suite.ui.commons.ProcessFlow._enumMoveDirection.LEFT) {
      direction = sap.suite.ui.commons.ProcessFlow._enumMoveDirection.RIGHT;
    }
  }

  step = step || 1;

  var bFocusNodeFound = false;
  var bNewNodeSet = false;
  var origX = 0, origY = 1;
  if( ! this._internalCalcMatrix ) {
    return;
  }
// first search for node which is focused
  var posX = 0, posY = 0;
  for( var i = 0; i < this._internalCalcMatrix.length; i++ ) {
    for( var j = 0; j < this._internalCalcMatrix[i].length; j++ ) {
        if( this._internalCalcMatrix[i][j] instanceof sap.suite.ui.commons.ProcessFlowNode && this._internalCalcMatrix[i][j]._getNavigationFocus()) {
          origX = posX = i;
          origY = posY = j;
          bFocusNodeFound = true;
          break;
        }
      }
      if( bFocusNodeFound ) {
        break;
      }
    }

  if( direction == sap.suite.ui.commons.ProcessFlow._enumMoveDirection.RIGHT) {
    for( var i = posX; i < this._internalCalcMatrix.length; i++ ) {
      for( var j = posY+1; j < this._internalCalcMatrix[i].length; j++ ) {
        if( this._internalCalcMatrix[i][j] instanceof sap.suite.ui.commons.ProcessFlowNode ) {
          if(  bFocusNodeFound && (!this._bHighlightedMode || this._internalCalcMatrix[i][j].getHighlighted()) ) {
            this._internalCalcMatrix[i][j]._setNavigationFocus(true);
            this._lastNavigationFocusNode = this._internalCalcMatrix[i][j];
            bNewNodeSet = true;
            break;
          }
        }
      } // end loop j
      // shortcut, we have done already everything.
      posY = 0; // first posX line was from posY, now from zero again. The plus one does not hurt, because first column is empty
      if( bNewNodeSet ) {
          break;
      }
    } // end loop i
  } //end right direction

  if( direction == sap.suite.ui.commons.ProcessFlow._enumMoveDirection.LEFT) {
    for( var i = posX; i >= 0 ; i-- ) {
      for( var j = posY-1; j >= 0; j-- ) {
        if( this._internalCalcMatrix[i][j] instanceof sap.suite.ui.commons.ProcessFlowNode ) {
          if(  bFocusNodeFound && (!this._bHighlightedMode || this._internalCalcMatrix[i][j].getHighlighted()) ) {
            this._lastNavigationFocusNode = this._internalCalcMatrix[i][j]._setNavigationFocus(true);
            this._lastNavigationFocusNode = this._internalCalcMatrix[i][j];
            bNewNodeSet = true;
            break;
          }
        }
      } // end loop j
      if( i > 0) {
        posY = this._internalCalcMatrix[i-1].length;
      }
      // shortcut, we have done already everything.
      if( bNewNodeSet ) {
          break;
      }
    } // end loop i
  } //end right direction

  if( direction == sap.suite.ui.commons.ProcessFlow._enumMoveDirection.UP) {
    // go through lines
    for( var i =  posX -1; i >= 0 ; i--) {
      // we have single line, check from posY first left, after right.
      var deviation = 0;
      while( !bNewNodeSet ) {
        var yPositionLeft = posY-deviation;
        var yPositionRight = posY+deviation;
        if( yPositionLeft >= 0 && this._internalCalcMatrix[i][yPositionLeft] instanceof sap.suite.ui.commons.ProcessFlowNode ) {
          if(  bFocusNodeFound && (!this._bHighlightedMode || this._internalCalcMatrix[i][yPositionLeft].getHighlighted()) ) {
            this._internalCalcMatrix[i][yPositionLeft]._setNavigationFocus(true);
            this._lastNavigationFocusNode = this._internalCalcMatrix[i][yPositionLeft];
            bNewNodeSet = true;
            break;
          }
        }// end of processflownode for left
        if( yPositionRight < this._internalCalcMatrix[i].length && this._internalCalcMatrix[i][yPositionRight] instanceof sap.suite.ui.commons.ProcessFlowNode ) {
          if(  bFocusNodeFound && (!this._bHighlightedMode || this._internalCalcMatrix[i][yPositionRight].getHighlighted()) ) {
            this._internalCalcMatrix[i][yPositionRight]._setNavigationFocus(true);
            this._lastNavigationFocusNode = this._internalCalcMatrix[i][yPositionRight];
            bNewNodeSet = true;
            break;
          }
        }// end of processflownode for right
        // we are out of this line for Y position
        if( yPositionLeft < 0 && yPositionRight > this._internalCalcMatrix[i].length) {
          break;
        }
        deviation++;
      }// end while
    }// end for i
  }// end direction UP

  if( direction == sap.suite.ui.commons.ProcessFlow._enumMoveDirection.DOWN) {
    // go through lines
    for( var i =  posX  + 1; i < this._internalCalcMatrix.length ; i++) {
      // we have single line, check from posY first left, after right.
      var deviation = 0;
      while( !bNewNodeSet ) {
        var yPositionLeft = posY-deviation;
        var yPositionRight = posY+deviation;
        if( yPositionLeft >= 0 && this._internalCalcMatrix[i][yPositionLeft] instanceof sap.suite.ui.commons.ProcessFlowNode ) {
          if(  bFocusNodeFound && (!this._bHighlightedMode || this._internalCalcMatrix[i][yPositionLeft].getHighlighted()) ) {
            this._lastNavigationFocusNode = this._internalCalcMatrix[i][yPositionLeft]._setNavigationFocus(true);
            this._lastNavigationFocusNode = this._internalCalcMatrix[i][yPositionLeft];
            bNewNodeSet = true;
            break;
          }
        }// end of processflownode for left
        if( yPositionRight < this._internalCalcMatrix[i].length && this._internalCalcMatrix[i][yPositionRight] instanceof sap.suite.ui.commons.ProcessFlowNode ) {
          if(  bFocusNodeFound && (!this._bHighlightedMode || this._internalCalcMatrix[i][yPositionRight].getHighlighted()) ) {
            this._lastNavigationFocusNode = this._internalCalcMatrix[i][yPositionRight]._setNavigationFocus(true);
            this._lastNavigationFocusNode = this._internalCalcMatrix[i][yPositionRight];
            bNewNodeSet = true;
            break;
          }
        }// end of processflownode for right
        // we are out of this line for Y position
        if( yPositionLeft < 0 && yPositionRight > this._internalCalcMatrix[i].length) {
          break;
        }
        deviation++;
      }// end while
    }// end for i
  }// end direction DOWN

  if( bNewNodeSet ) {
    this._internalCalcMatrix[origX][origY]._setNavigationFocus(false);
  }
  return bNewNodeSet;
};

// ==============================================================================================
// == keyboard events handling support
// ==============================================================================================
// internal PF flag whether navigation focus should be released from this control.
sap.suite.ui.commons.ProcessFlow.prototype._bNFocusOutside = false;
// internal PF flag whether we operate in highlighted mode.
sap.suite.ui.commons.ProcessFlow.prototype._bHighlightedMode = false;


// --------------------------------------------------------------------------------------------
sap.suite.ui.commons.ProcessFlow.prototype.getFocusDomRef = function() {
  var oDomRef = this.getDomRef().children[0].children[0];
  jQuery.sap.log.debug("ProcessFlow::getFocusDomRef : Keyboard focus has been changed to element:  id='"+ oDomRef.id + "' outerHTML='" + oDomRef.outerHTML +"'");
  return oDomRef;
};

//--------------------------------------------------------------------------------------------
/**
 * process flow has the focus, now it is neccessary to set the navigation
 */
sap.suite.ui.commons.ProcessFlow.prototype.onfocusin = function(oEvent) {
  jQuery.sap.log.debug("ProcessFlow::focus in" + (this._lastNavigationFocusNode ? this._lastNavigationFocusNode.getTitle() : "not defined"));
  if( this._lastNavigationFocusNode ) {
    this._lastNavigationFocusNode._setNavigationFocus(true);
    this._lastNavigationFocusNode.rerender();
  }
  else { // define navigation focus from root
    var bNodeFound = false;
    for( var i = 0; i < this._internalCalcMatrix.length; i++ ) {
      for( var j = 0; j < this._internalCalcMatrix[i].length; j++ ) {
        if( this._internalCalcMatrix[i][j] instanceof sap.suite.ui.commons.ProcessFlowNode ) {
          this._internalCalcMatrix[i][j]._setNavigationFocus(true);
          this._internalCalcMatrix[i][j].rerender();
          this._lastNavigationFocusNode = this._internalCalcMatrix[i][j];
          bNodeFound = true;
          break;
        }
      } // end inner loop
      if( bNodeFound ) {
        break;
      }
    }
  }

};

sap.suite.ui.commons.ProcessFlow.prototype.onfocusout = function(oEvent) {
  jQuery.sap.log.debug("ProcessFlow::focus out" + (this._lastNavigationFocusNode ? this._lastNavigationFocusNode.getTitle() : "not defined"));
  for( var i = 0; i < this.getNodes().length; i++ ) {
    if( this.getNodes()[i]._getNavigationFocus() ) {
      this._lastNavigationFocusNode = this.getNodes()[i];
      this.getNodes()[i]._setNavigationFocus(false);
      this.getNodes()[i].rerender();
    }
  }
  jQuery.sap.log.info("focus out");
};

/**
 * Method called on navigation focus change. Scrolls the PF content, so the node is as close to the middle of the scroll container viewport as possible.
 * @private
 * @since 1.23
 */
sap.suite.ui.commons.ProcessFlow.prototype._onFocusChanged = function() {
  var oFocusedNode = this._lastNavigationFocusNode
    , $focusedNode = oFocusedNode ? oFocusedNode.$() : null
    , $scrollContainer
    , iScrollInnerWidth
    , iScrollInnerHeight
    , iScrollLeft
    , iScrollTop
    , $scrollContent
    , iContentInnerWidth
    , iContentInnerHeight
    , iNodeOuterWidth
    , iNodeOuterHeight
    , oPositionInContent
    , iNL, iNT, iNR, iNB
    , iCL, iCT
    , max = function(a,b) { return (a > b) ? a : b; }
    , min = function(a,b) { return (a < b) ? a : b; }
    , iScrollTimeInMillis = 750
    , that = this
    ;

  if (oFocusedNode && this.getScrollable()) {
    jQuery.sap.log.debug("The actually focused node is " + oFocusedNode.getId() + " with title " + oFocusedNode.getTitle());
    iNodeOuterWidth  = $focusedNode.outerWidth();
    iNodeOuterHeight = $focusedNode.outerHeight();
    jQuery.sap.log.debug("Node outer width x height [" + iNodeOuterWidth + " x " + iNodeOuterHeight + "]");

    oPositionInContent = $focusedNode.position(); // oPositionInContent.left, oPositionInContent.top
    jQuery.sap.log.debug("Position of node in the content is [" + oPositionInContent.left + ", " + oPositionInContent.top + "]");

    $scrollContainer = this.$();
    $scrollContent = this.$("scroll-content");
    iScrollInnerWidth = $scrollContainer.innerWidth();
    iScrollInnerHeight = $scrollContainer.innerHeight();
    jQuery.sap.log.debug("Scroll container inner width x height [" + iScrollInnerWidth + " x " + iScrollInnerHeight + "]");

    iScrollLeft = $scrollContainer.scrollLeft();
    iScrollTop = $scrollContainer.scrollTop();
    jQuery.sap.log.debug("Current scroll offset is [" + iScrollLeft + ", " + iScrollTop + "]");

    iContentInnerWidth = $scrollContent.innerWidth();
    iContentInnerHeight = $scrollContent.innerHeight();
    jQuery.sap.log.debug("Scroll content inner width x height [" + iContentInnerWidth + " x " + iContentInnerHeight + "]");

    iNL = -iScrollLeft + oPositionInContent.left;
    iNR = iNL + iNodeOuterWidth;
    iNT= -iScrollTop + oPositionInContent.top;
    iNB = iNT + iNodeOuterHeight;

    // check if the node lies (even in part) out of the scroll container visible part
    if ((iNR > iScrollInnerWidth) || (iNL < 0) || (iNB > iScrollInnerHeight) || (iNT < 0)) {
      iCL = Math.round((iScrollInnerWidth - iNodeOuterWidth)/2);
      iCL = max(iScrollInnerWidth - iContentInnerWidth + oPositionInContent.left, iCL);
      iCL = min(oPositionInContent.left, iCL);

      iCT = Math.round((iScrollInnerHeight - iNodeOuterHeight)/2);
      iCT = max(iScrollInnerHeight - iContentInnerHeight + oPositionInContent.top, iCT);
      iCT = min(oPositionInContent.top, iCT);

      jQuery.sap.log.debug("Node lies outside the scroll container, scrolling from [" + iNL + "," + iNT + "] to [" + iCL + "," + iCT + "]");
      $scrollContainer.animate({
        scrollTop: oPositionInContent.top - iCT,
        scrollLeft: oPositionInContent.left - iCL
      }, iScrollTimeInMillis, "swing");
    } else {
      jQuery.sap.log.debug("Node lies inside the scroll container, no scrolling happens.");
    }
  }
};

// --------------------------------------------------------------------------------------------
sap.suite.ui.commons.ProcessFlow.prototype.onkeydown = function(oEvent) {
  if (! sap.ui.Device.system.desktop )
    return;

  var keycode = (oEvent.keyCode ? oEvent.keyCode : oEvent.which);
  jQuery.sap.log.debug("ProcessFlow::keyboard input has been catched and action going to start: keycode=" + keycode);

  var bNFocusChanged = false;
  var bReleaseNFocus = false;
  var oReleaseNFocus = null;
  var shiftKeyPressed = oEvent.shiftKey;
  var ctrlKeyPressed = oEvent.ctrlKey;
  var altKeyPressed = oEvent.altKey;
  var oFocusedNode;
  var previousNavigationNode = this._lastNavigationFocusNode;

  switch (keycode) {
    //------------------------------------------------------------------------------- TAB
    case jQuery.sap.KeyCodes.ENTER:
    case jQuery.sap.KeyCodes.SPACE:
        for( var i = 0; i < this.getNodes().length; i++ ) {
          if( this.getNodes()[i]._getNavigationFocus() ) {
            this.fireNodePress(this.getNodes()[i]);
            // probably useles to set focus...
            //this._setFocusOnMouseClick(this.getNodes[i]);
            break;
          }
        }
      break;
    case jQuery.sap.KeyCodes.TAB:
    case jQuery.sap.KeyCodes.F6:
      if (shiftKeyPressed)
        oReleaseNFocus = this.getDomRef().parentElement.previousElementSibling;
      else
        oReleaseNFocus = this.getDomRef().parentElement.nextElementSibling;
      bReleaseNFocus = true;
      break;
    case jQuery.sap.KeyCodes.ARROW_RIGHT:
      bNFocusChanged = this._moveToNextNode(sap.suite.ui.commons.ProcessFlow._enumMoveDirection.RIGHT);
      break;
    case jQuery.sap.KeyCodes.ARROW_LEFT:
      bNFocusChanged = this._moveToNextNode(sap.suite.ui.commons.ProcessFlow._enumMoveDirection.LEFT);
      break;
    case jQuery.sap.KeyCodes.ARROW_DOWN:
      bNFocusChanged = this._moveToNextNode(sap.suite.ui.commons.ProcessFlow._enumMoveDirection.DOWN);
      break;
    case jQuery.sap.KeyCodes.ARROW_UP:
      bNFocusChanged = this._moveToNextNode(sap.suite.ui.commons.ProcessFlow._enumMoveDirection.UP);
      break;
    case jQuery.sap.KeyCodes.PAGE_UP:
      bNFocusChanged = this._moveOnePage(sap.suite.ui.commons.ProcessFlow._enumMoveDirection.UP, altKeyPressed);
      break;
    case jQuery.sap.KeyCodes.PAGE_DOWN:
      bNFocusChanged = this._moveOnePage(sap.suite.ui.commons.ProcessFlow._enumMoveDirection.DOWN, altKeyPressed);
      break;
    case jQuery.sap.KeyCodes.HOME:
      bNFocusChanged = this._moveHomeEnd(sap.suite.ui.commons.ProcessFlow._enumMoveDirection.LEFT, ctrlKeyPressed);
      break;
    case jQuery.sap.KeyCodes.END:
      bNFocusChanged = this._moveHomeEnd(sap.suite.ui.commons.ProcessFlow._enumMoveDirection.RIGHT, ctrlKeyPressed);
      break;
    case jQuery.sap.KeyCodes.NUMPAD_PLUS:
    case jQuery.sap.KeyCodes.PLUS:
      if( ctrlKeyPressed ) {
        this.zoomOut();
      }
      break;
    case jQuery.sap.KeyCodes.NUMPAD_MINUS:
    case jQuery.sap.KeyCodes.MINUS:
      if( ctrlKeyPressed ) {
        this.zoomIn();
      }
      break;
    case jQuery.sap.KeyCodes.NUMPAD_0:
      if( ctrlKeyPressed ) {
        this.setZoomLevel(sap.suite.ui.commons.ProcessFlowZoomLevel.Two);
      }
      break;

    default:
      // it was not our key, let default action be executed if any
      return;

  } // end switch keycode

  // it was our key, default action has to suppressed
  oEvent.preventDefault();

  if (bNFocusChanged) {
    // we have to re-render when we changed Nfocus inside our control
    this._changeNavigationFocus(previousNavigationNode, this._lastNavigationFocusNode);
  }

  if (oReleaseNFocus) {
    // we have to make focus to element outside our control
    oReleaseNFocus.focus();
    jQuery.sap.log.debug("keypressdown: Keyboard focus has been changed to element:  id='"+ oReleaseNFocus.id + "' outerHTML='" + oReleaseNFocus.outerHTML +"'");
    oReleaseNFocus = null;
  }

};

/**
 * merge values of node states for several nodes 
 * @param {array} aLaneIdNodeStates node states for all nodes of the same laneId 
 * @param altKey, true if alt key is pressed, false otherwise
 * @returns aResult Array of cumulated node states for aLaneIdNodeStates 
 * @private
 */
sap.suite.ui.commons.ProcessFlow.prototype._mergeLaneIdNodeStates = function(aLaneIdNodeStates) {
  var iPositive = 0;
  var iNegative = 0;
  var iNeutral  = 0;
  var iPlanned  = 0;
  
  for( var iState = 0; iState < 4; iState++ ) {
    for( var iNode = 0; iNode < aLaneIdNodeStates.length; iNode++ ) {
      switch (aLaneIdNodeStates[iNode][iState].state) {
        case sap.suite.ui.commons.ProcessFlowNodeState.Positive:
          iPositive = iPositive + aLaneIdNodeStates[iNode][iState].value;
          break;
        case sap.suite.ui.commons.ProcessFlowNodeState.Negative:
          iNegative = iNegative + aLaneIdNodeStates[iNode][iState].value;
          break;
        case sap.suite.ui.commons.ProcessFlowNodeState.Neutral:
          iNeutral = iNeutral + aLaneIdNodeStates[iNode][iState].value;
          break;
        case sap.suite.ui.commons.ProcessFlowNodeState.Planned:
          iPlanned = iPlanned + aLaneIdNodeStates[iNode][iState].value;
          break;
      }
    }
  }

  var aResult = [{state: sap.suite.ui.commons.ProcessFlowNodeState.Positive, value: iPositive}
               , {state: sap.suite.ui.commons.ProcessFlowNodeState.Negative, value: iNegative}
               , {state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral,  value: iNeutral}
               , {state: sap.suite.ui.commons.ProcessFlowNodeState.Planned,  value: iPlanned}];

return aResult;
}

