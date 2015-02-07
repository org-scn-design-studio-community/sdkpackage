/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.Timeline.
jQuery.sap.declare("sap.suite.ui.commons.Timeline");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Timeline.
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
 * <li>{@link #getData data} : object</li>
 * <li>{@link #getSortOldestFirst sortOldestFirst} : boolean (default: false)</li>
 * <li>{@link #getAxisOrientation axisOrientation} : sap.suite.ui.commons.TimelineAxisOrientation (default: sap.suite.ui.commons.TimelineAxisOrientation.Vertical)</li>
 * <li>{@link #getAlignment alignment} : sap.suite.ui.commons.TimelineAlignment (default: sap.suite.ui.commons.TimelineAlignment.Right)</li>
 * <li>{@link #getShowIcons showIcons} : boolean (default: true)</li>
 * <li>{@link #getNoDataText noDataText} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getEnableBusyIndicator enableBusyIndicator} : boolean (default: true)</li>
 * <li>{@link #getShowHeaderBar showHeaderBar} : boolean (default: true)</li>
 * <li>{@link #getGrowing growing} : boolean (default: true)</li>
 * <li>{@link #getGrowingThreshold growingThreshold} : int (default: 5)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnableBackendFilter enableBackendFilter} : boolean (default: false)</li>
 * <li>{@link #getEnableAllInFilterItem enableAllInFilterItem} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.suite.ui.commons.TimelineItem[]</li>
 * <li>{@link #getFilterList filterList} : sap.suite.ui.commons.TimelineFilterListItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.Timeline#event:filterSelectionChange filterSelectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Timeline Control for sFin.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.Timeline
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.Timeline", { metadata : {

	publicMethods : [
		// methods
		"getCurrentFilter", "setCurrentFilter"
	],
	library : "sap.suite.ui.commons",
	properties : {
		"data" : {type : "object", group : "Misc", defaultValue : null},
		"sortOldestFirst" : {type : "boolean", group : "Misc", defaultValue : false},
		"axisOrientation" : {type : "sap.suite.ui.commons.TimelineAxisOrientation", group : "Misc", defaultValue : sap.suite.ui.commons.TimelineAxisOrientation.Vertical},
		"alignment" : {type : "sap.suite.ui.commons.TimelineAlignment", group : "Misc", defaultValue : sap.suite.ui.commons.TimelineAlignment.Right},
		"showIcons" : {type : "boolean", group : "Misc", defaultValue : true},
		"noDataText" : {type : "string", group : "Misc", defaultValue : null},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"enableBusyIndicator" : {type : "boolean", group : "Misc", defaultValue : true},
		"showHeaderBar" : {type : "boolean", group : "Misc", defaultValue : true},
		"growing" : {type : "boolean", group : "Misc", defaultValue : true},
		"growingThreshold" : {type : "int", group : "Misc", defaultValue : 5},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"enableBackendFilter" : {type : "boolean", group : "", defaultValue : false},
		"enableAllInFilterItem" : {type : "boolean", group : "Behavior", defaultValue : true}
	},
	aggregations : {
		"content" : {type : "sap.suite.ui.commons.TimelineItem", multiple : true, singularName : "content"}, 
		"filterList" : {type : "sap.suite.ui.commons.TimelineFilterListItem", multiple : true, singularName : "filterList"}
	},
	events : {
		"filterSelectionChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.Timeline with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.Timeline.extend
 * @function
 */

sap.suite.ui.commons.Timeline.M_EVENTS = {'filterSelectionChange':'filterSelectionChange'};


/**
 * Getter for property <code>data</code>.
 * Data for Timeline Control..
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>data</code>
 * @public
 * @name sap.suite.ui.commons.Timeline#getData
 * @function
 */

/**
 * Setter for property <code>data</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oData  new value for property <code>data</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#setData
 * @function
 */


/**
 * Getter for property <code>sortOldestFirst</code>.
 * Whether the oldest item will be displayed first.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>sortOldestFirst</code>
 * @public
 * @name sap.suite.ui.commons.Timeline#getSortOldestFirst
 * @function
 */

/**
 * Setter for property <code>sortOldestFirst</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSortOldestFirst  new value for property <code>sortOldestFirst</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#setSortOldestFirst
 * @function
 */


/**
 * Getter for property <code>axisOrientation</code>.
 * Timeline axis orientation.
 *
 * Default value is <code>Vertical</code>
 *
 * @return {sap.suite.ui.commons.TimelineAxisOrientation} the value of property <code>axisOrientation</code>
 * @public
 * @name sap.suite.ui.commons.Timeline#getAxisOrientation
 * @function
 */

/**
 * Setter for property <code>axisOrientation</code>.
 *
 * Default value is <code>Vertical</code> 
 *
 * @param {sap.suite.ui.commons.TimelineAxisOrientation} oAxisOrientation  new value for property <code>axisOrientation</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#setAxisOrientation
 * @function
 */


/**
 * Getter for property <code>alignment</code>.
 * Timeline item alignment.
 *
 * Default value is <code>Right</code>
 *
 * @return {sap.suite.ui.commons.TimelineAlignment} the value of property <code>alignment</code>
 * @public
 * @name sap.suite.ui.commons.Timeline#getAlignment
 * @function
 */

/**
 * Setter for property <code>alignment</code>.
 *
 * Default value is <code>Right</code> 
 *
 * @param {sap.suite.ui.commons.TimelineAlignment} oAlignment  new value for property <code>alignment</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#setAlignment
 * @function
 */


/**
 * Getter for property <code>showIcons</code>.
 * Show icon on each Timeline item.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showIcons</code>
 * @public
 * @name sap.suite.ui.commons.Timeline#getShowIcons
 * @function
 */

/**
 * Setter for property <code>showIcons</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowIcons  new value for property <code>showIcons</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#setShowIcons
 * @function
 */


/**
 * Getter for property <code>noDataText</code>.
 * This text is displayed when the control has no data.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>noDataText</code>
 * @public
 * @name sap.suite.ui.commons.Timeline#getNoDataText
 * @function
 */

/**
 * Setter for property <code>noDataText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNoDataText  new value for property <code>noDataText</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#setNoDataText
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Sets the width of the Timeline.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.suite.ui.commons.Timeline#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#setWidth
 * @function
 */


/**
 * Getter for property <code>enableBusyIndicator</code>.
 * When this property is set to "true", Timeline will display a busy indicator when data is being loaded.This BusyIndicator blocks the interaction with the items until data loading is finished.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableBusyIndicator</code>
 * @public
 * @name sap.suite.ui.commons.Timeline#getEnableBusyIndicator
 * @function
 */

/**
 * Setter for property <code>enableBusyIndicator</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableBusyIndicator  new value for property <code>enableBusyIndicator</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#setEnableBusyIndicator
 * @function
 */


/**
 * Getter for property <code>showHeaderBar</code>.
 * Show header tool bar
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showHeaderBar</code>
 * @public
 * @name sap.suite.ui.commons.Timeline#getShowHeaderBar
 * @function
 */

/**
 * Setter for property <code>showHeaderBar</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowHeaderBar  new value for property <code>showHeaderBar</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#setShowHeaderBar
 * @function
 */


/**
 * Getter for property <code>growing</code>.
 * Sets the growing(paging) feature of control. This feature only works with model binding for aggregation "content".
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>growing</code>
 * @public
 * @name sap.suite.ui.commons.Timeline#getGrowing
 * @function
 */

/**
 * Setter for property <code>growing</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bGrowing  new value for property <code>growing</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#setGrowing
 * @function
 */


/**
 * Getter for property <code>growingThreshold</code>.
 * Number of items requested from the server. To activate this you should set "growing" property to "true".
 *
 * Default value is <code>5</code>
 *
 * @return {int} the value of property <code>growingThreshold</code>
 * @public
 * @name sap.suite.ui.commons.Timeline#getGrowingThreshold
 * @function
 */

/**
 * Setter for property <code>growingThreshold</code>.
 *
 * Default value is <code>5</code> 
 *
 * @param {int} iGrowingThreshold  new value for property <code>growingThreshold</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#setGrowingThreshold
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Set Timeline control visibility
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.suite.ui.commons.Timeline#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#setVisible
 * @function
 */


/**
 * Getter for property <code>enableBackendFilter</code>.
 * This flag enables to get data from backend instead of deriving filter values from front-end values(displayed list).
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>enableBackendFilter</code>
 * @public
 * @name sap.suite.ui.commons.Timeline#getEnableBackendFilter
 * @function
 */

/**
 * Setter for property <code>enableBackendFilter</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEnableBackendFilter  new value for property <code>enableBackendFilter</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#setEnableBackendFilter
 * @function
 */


/**
 * Getter for property <code>enableAllInFilterItem</code>.
 * This flag enables to add 'All' in the begining of filter list
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableAllInFilterItem</code>
 * @public
 * @name sap.suite.ui.commons.Timeline#getEnableAllInFilterItem
 * @function
 */

/**
 * Setter for property <code>enableAllInFilterItem</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableAllInFilterItem  new value for property <code>enableAllInFilterItem</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#setEnableAllInFilterItem
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * List of Timeline Items.
 * 
 * @return {sap.suite.ui.commons.TimelineItem[]}
 * @public
 * @name sap.suite.ui.commons.Timeline#getContent
 * @function
 */


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.suite.ui.commons.TimelineItem}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.suite.ui.commons.TimelineItem}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.suite.ui.commons.TimelineItem} vContent the content to remove or its index or id
 * @return {sap.suite.ui.commons.TimelineItem} the removed content or null
 * @public
 * @name sap.suite.ui.commons.Timeline#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.TimelineItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.Timeline#removeAllContent
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.TimelineItem</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.TimelineItem}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.Timeline#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>filterList</code>.<br/>
 * sap.suite.ui.commons/TimelineFilterListItem
 * 
 * @return {sap.suite.ui.commons.TimelineFilterListItem[]}
 * @public
 * @name sap.suite.ui.commons.Timeline#getFilterList
 * @function
 */


/**
 * Inserts a filterList into the aggregation named <code>filterList</code>.
 *
 * @param {sap.suite.ui.commons.TimelineFilterListItem}
 *          oFilterList the filterList to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the filterList should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the filterList is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the filterList is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#insertFilterList
 * @function
 */

/**
 * Adds some filterList <code>oFilterList</code> 
 * to the aggregation named <code>filterList</code>.
 *
 * @param {sap.suite.ui.commons.TimelineFilterListItem}
 *            oFilterList the filterList to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#addFilterList
 * @function
 */

/**
 * Removes an filterList from the aggregation named <code>filterList</code>.
 *
 * @param {int | string | sap.suite.ui.commons.TimelineFilterListItem} vFilterList the filterList to remove or its index or id
 * @return {sap.suite.ui.commons.TimelineFilterListItem} the removed filterList or null
 * @public
 * @name sap.suite.ui.commons.Timeline#removeFilterList
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>filterList</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.TimelineFilterListItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.Timeline#removeAllFilterList
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.TimelineFilterListItem</code> in the aggregation named <code>filterList</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.TimelineFilterListItem}
 *            oFilterList the filterList whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.Timeline#indexOfFilterList
 * @function
 */
	

/**
 * Destroys all the filterList in the aggregation 
 * named <code>filterList</code>.
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#destroyFilterList
 * @function
 */


/**
 * This event is getting triggered after selecting an item from filter list.
 *
 * @name sap.suite.ui.commons.Timeline#filterSelectionChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.suite.ui.commons.TimelineFilterListItem} oControlEvent.getParameters.selectedItem filterClose event returns selected key value from filterList
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'filterSelectionChange' event of this <code>sap.suite.ui.commons.Timeline</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.Timeline</code>.<br/> itself. 
 *  
 * This event is getting triggered after selecting an item from filter list.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.Timeline</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#attachFilterSelectionChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'filterSelectionChange' event of this <code>sap.suite.ui.commons.Timeline</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.Timeline#detachFilterSelectionChange
 * @function
 */

/**
 * Fire event filterSelectionChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedItem' of type <code>sap.suite.ui.commons.TimelineFilterListItem</code> filterClose event returns selected key value from filterList</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.Timeline#fireFilterSelectionChange
 * @function
 */


/**
 * Get the current selected filter key
 *
 * @name sap.suite.ui.commons.Timeline#getCurrentFilter
 * @function
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Set the current selected filter key
 *
 * @name sap.suite.ui.commons.Timeline#setCurrentFilter
 * @function
 * @param {string} sSelectedItemKey
 *         Returns the TinelineFilterListItem
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


// Start of sap/suite/ui/commons/Timeline.js
///**
// * This file defines behavior for the control,
// */
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("sap.ui.core.Icon");
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
jQuery.sap.require("sap.suite.ui.commons.TimelineFilterListItem");

sap.suite.ui.commons.Timeline.INTERNAL_MODEL_NAME = "sapsuiteuicommonsTimelineInternalModel";

sap.suite.ui.commons.Timeline.prototype.init = function() {
	sap.m.DisplayListItem.extend("sap.suite.ui.commons.DisplayListItemWithKey", {
		metadata : {
			properties : {
				"key" : {
					type : "string",
					defaultValue : ""
				},
			}
		},
		renderer : 'sap.m.DisplayListItemRenderer'
	});
	var that = this;
	// create an internal model.
	this._prevTargetId = "";
	this._internalModel = new sap.ui.model.json.JSONModel();
	this._finishLoading = false;
	this.setModel(this._internalModel, sap.suite.ui.commons.Timeline.INTERNAL_MODEL_NAME);
	var oLocale = sap.ui.getCore().getConfiguration().getLanguage();
	this.resBundle = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons", oLocale);
	this._emptyList = new sap.m.List();
	this._emptyList.setNoDataText(this.resBundle.getText('TIMELINE_NO_DATA'));
	this._filterIcon = new sap.m.Button(this.getId() + "-filter", {
		type : sap.m.ButtonType.Transparent,
		icon : "sap-icon://filter",
		tooltip : this.resBundle.getText("TIMELINE_FILTER_BY"),
		press : function(oEvent) {
			that._openFilterDialog();
		}
	});

	var oToolbarSpacer = new sap.m.ToolbarSpacer();

	this._headerBar = new sap.m.Toolbar({
		id : this.getId() + "-filterToolBar",
		content : [oToolbarSpacer, this._filterIcon]
	});
	this._filterInfoText = new sap.m.Text({
		maxLines : 1,
		width : "100%"
	});
	this._headerInfoBar = new sap.m.Toolbar({
		id : this.getId() + "-filterInfoBar",
		content : [this._filterInfoText],
		design : sap.m.ToolbarDesign.Info,
		visible : false
	});

	this._filterChange = false;
	this._contentChange = true;
	this._filterDialog = new sap.m.ResponsivePopover(this.getId() + "-popover_filter", {
		title : this.resBundle.getText("TIMELINE_FILTER_BY"),
		placement : sap.m.PlacementType.Auto,
		contentHeight : "15rem",
		contentWidth : "15rem"
	});

	var oDisplayListItemWithKey = new sap.suite.ui.commons.DisplayListItemWithKey({  
		key : "{key}",
		label : "{text}"
	});

	this._filterList = new sap.m.List(this.getId() + "-filterlist", {
		mode : sap.m.ListMode.SingleSelectMaster,
		items : {
			path : "/items",
			template : oDisplayListItemWithKey
		},
		selectionChange : function(oEvent) {

		var oFilterText = that._filterList.getSelectedItem().getLabel();
		that._setFilterInfoText(oFilterText);
		if (that._filterList.getSelectedItem() && !that.getEnableBackendFilter()) {
				that._filterChange = true;
				that._filterText = oFilterText;
				that._resetDisplayItems(oFilterText);
			}
			that.fireFilterSelectionChange({selectedItem : that._filterList.getSelectedItem()}); // jul/17/2014
			that._currentFilterKey = that._filterList.getSelectedItem().getKey();
			that._filterDialog.close();
		}
	});

	this._filterText = this.resBundle.getText("TIMELINE_ALL");
	this._growing = false;
	if (this.getGrowing()) {
		this._iItemCount = this.getGrowingThreshold();
		this._getMoreButton = new sap.m.Button(this.getId() + "-getmore", {
			text : this.resBundle.getText("TIMELINE_MORE"),
			width : "100%",
			press : function() {
				that._iItemCount += that.getGrowingThreshold();
				if (that._iItemCount > that.getMaxItemsCount()) {
					that._iItemCount = that.getMaxItemsCount();
				}
				var oBindingInfo = that.getBindingInfo("content");
				if (that._growing) {
					oBindingInfo.startIndex = 0;
					oBindingInfo.length = that._iItemCount;
					that.getBinding("content").getContexts(0, that._iItemCount);
					//that.updateAggregation("content");
				} else {
					that.rerender();
				}

			}
		});
	}

	// scrolling stuff
	jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");
	this._oScroller = new sap.ui.core.delegate.ScrollEnablement(this, this.getId() + "-scroll", {
		horizontal : false,
		vertical : true,
		zynga : false,
		preventDefault : false,
		nonTouchScrolling : "scrollbar"
	});
	this._scHeight = 0; //scroller container height
	this._height = 0;
	this._aFilterList = [];

}; // init

sap.suite.ui.commons.Timeline.prototype.getScrollDelegate = function() {
	return this._oScroller;
};

sap.suite.ui.commons.Timeline.prototype.scrollTo = function(x, y, time) {
	if (this._oScroller) {
		if (this.getDomRef()) { // only if rendered
			this._oScroller.scrollTo(x, y, time);
		} else {
			this._oScroller._scrollX = x; // remember for later rendering
			this._oScroller._scrollY = y;
		}
	}
	return this;
};

sap.suite.ui.commons.Timeline.prototype._setFilterInfoText = function(oFilter) {
	var oFilterInfoText = this.resBundle.getText("TIMELINE_FILTER_INFO_BY", [oFilter]);
	this._filterInfoText.setText(oFilterInfoText);
	this._filterInfoText.setTooltip(oFilterInfoText);
	if (oFilter === this.resBundle.getText("TIMELINE_ALL")) {
		this._headerInfoBar.setVisible(false);
	} else {
		this._headerInfoBar.setVisible(true);
	}
	this._filterText = oFilter;
};

sap.suite.ui.commons.Timeline.prototype._setFilterList = function() {
	this._aFilterList = [];
	this._filteredItems = {};
	if (this.getEnableBackendFilter()) {
		var oFilterList = this.getFilterList();
		var oFL = [];
		oFilterList.forEach(function(oItem) {
			oFL.push({
				key : oItem.getKey(),
				text : oItem.getText()
			});
		});
		this._aFilterList = oFL;
		//this._backendFilterDataFetched = true;
	} else {
		var oItems = this.getContent();
		for (var i = 0; i < oItems.length; i++) {
			var key = oItems[i].getFilterValue();
			if (!key) {
				continue;
			}
			if (key in this._filteredItems) {
				this._filteredItems[key].push(oItems[i]);
			} else {
				var alist = [];
				alist.push(oItems[i]);
				this._filteredItems[key] = alist;
				this._aFilterList.push({
				    key : key,
					text : key
				});
			}
		};
	}; // if (this.getEnableBackendFilter()) { //} else {
	// sort the list
  if (!this.getEnableBackendFilter()){
	  this._aFilterList.sort(function(a, b) {
		  return a.text.toLowerCase().localeCompare(b.text.toLowerCase());
	  });
	}
	// put in the all items first
	var emptyKey = "";
	if (this.getEnableAllInFilterItem() && !(this._aFilterList[0] && this._aFilterList[0].key == "")) {  
		this._aFilterList.unshift({
			key  : "",
			text : this.resBundle.getText("TIMELINE_ALL")
		});
	};

	var jsonModel = new sap.ui.model.json.JSONModel({
		items : this._aFilterList
	});
	this._filterList.setModel(jsonModel);

	// set the default selection - All
	if (this._currentFilterKey){
		this.setCurrentFilter(this._currentFilterKey);
	} else if (this.getEnableAllInFilterItem()) {	
	  	this._filterList.setSelectedItem(this._filterList.getItems()[0]);
	}
	
};  //_setFilterList

sap.suite.ui.commons.Timeline.prototype._resetFilter = function() {
//	if (this._aFilterList) {
	if (this._aFilterList.length !== 0 && !this.getEnableBackendFilter()) {	
		// set the default selection - All
		this._filterList.setSelectedItem(this._filterList.getItems()[0]);
		this._headerInfoBar.setVisible(false);

	};
};

sap.suite.ui.commons.Timeline.prototype._openFilterDialog = function() {

//	if (!this._aFilterList || ( this._contentChange && !this.getEnableBackendFilter())) { 	
  if ((this.getEnableBackendFilter() && (this._aFilterList.length === 0)) || ( this._contentChange && !this.getEnableBackendFilter())) {
		this._setFilterList();
		this._contentChange = false; // reset the flag
	}
	// this._setFilterList(); //reset filterList always in case of content change....
	this._filterDialog.addContent(this._filterList);
	this._filterDialog.openBy(this._filterIcon);

};

sap.suite.ui.commons.Timeline.prototype._resetDisplayItems = function(filter) {
	this.invalidate();
	var oItems = this.getContent();
	var dItems = [];
	if (filter === this.resBundle.getText("TIMELINE_ALL")) {
		dItems = oItems;
	} else {
		dItems = this._filteredItems[filter];
	}
	this._displayItems = dItems;

};

sap.suite.ui.commons.Timeline.prototype.setData = function(oData) {
	// return if no data is passed
	if (oData == undefined) {
		return;
	}
	var sPath = this._buildPath("/", sap.suite.ui.commons.Timeline.INTERNAL_MODEL_NAME);
	this._internalModel.setData(oData);
	this.setProperty("data", oData, true);
	this.bindAggregation("content", {
		path : sPath,
		sorter : this._getDefaultSorter('dateTime', this.getSortOldestFirst()),
		factory : jQuery.proxy(this._defaultItemsFactory, this)
	});
	this._displayItems = this.getContent();
	this._finishLoading = true;
	this._contentChange = true;
	this._iItemCount = this.getMaxItemsCount();
	return this;
};

sap.suite.ui.commons.Timeline.prototype._buildPath = function(sPath, sModelName) {
	var sCompletePath = sPath;
	if (sModelName)
		sCompletePath = sModelName + ">" + sPath;
	return sCompletePath;
};

sap.suite.ui.commons.Timeline.prototype._getDefaultSorter = function(property, order) {
	var descending = true;
	if (order) {
		descending = false;
	} else {
		descending = true;
	}
	return new sap.ui.model.Sorter(property, descending, false);
};

sap.suite.ui.commons.Timeline.prototype._defaultItemsFactory = function(sId, oContext) {
	var oOptions = {};
	oOptions.dateTime = oContext.getProperty("dateTime");
	oOptions.icon = oContext.getProperty("icon");
	oOptions.userName = oContext.getProperty("userName");
	oOptions.title = oContext.getProperty("title");
	oOptions.text = oContext.getProperty("text");
	oOptions.filterValue = oContext.getProperty("filterValue");
	var oTimelineItem = new sap.suite.ui.commons.TimelineItem(oOptions);
	if (oContext.getProperty("content")) {
		oTimelineItem.setEmbeddedControl(oContext.getProperty("content"));
	}
	return oTimelineItem;
};

sap.suite.ui.commons.Timeline.prototype.onBeforeRendering = function() {
	//this.$().find("#" + this.getId() + "-scroll").css("height", this._scHeight);
	var oItems = this.getContent();
	if (this._filterChange) {
		oItems = this._displayItems;
	}
	this._filterChange = false; // reset the flag
	this._showMore = false;
	var oBindingInfo = this.getBindingInfo("content");
	if ((this.getGrowing() && (oBindingInfo) && (oBindingInfo.model !== sap.suite.ui.commons.Timeline.INTERNAL_MODEL_NAME) && (this.getMaxItemsCount() > this._iItemCount))) {
		if ((this._filterText === this.resBundle.getText("TIMELINE_ALL")) || (this.getEnableBackendFilter())) {
			this._showMore = true;
		}
	} else if (this.getMaxItemsCount() > 0) {
		this._iItemCount = this.getMaxItemsCount();
	}
	if (this._iItemCount == 0) {
		this._iItemCount = this.getMaxItemsCount();
		this._showMore = false;
	}
	this.setOutput(oItems);
};

sap.suite.ui.commons.Timeline.prototype.setContent = function(oContents) {
	this.removeAllContent();
	for ( var i = 0; i < oContents.length; i++) {
		var oItem = oContents[i];
		if (oItem._isOfTypeTimelineItem && oItem._isOfTypeTimelineItem() == true) {
			if ((oItem.getEmbeddedControl() === null) && (oItem.getText() !== null)) {
				oItem.setEmbeddedControl(new sap.m.Text({
					text : oItem.getText(),
					maxLines : 0
				}));
			}
			sap.suite.ui.commons.Timeline.prototype.addContent.apply(this, [oItem]);
		}
	}
	this._displayItems = this.getContent();
	this._finishLoading = true;
	this._contentChange = true;
	this._resetFilter();
	this._iItemCount = this.getMaxItemsCount();
};

sap.suite.ui.commons.Timeline.prototype.sortBy = function(property, ascending) {
	if (ascending) {
		return function(a, b) {
			if (a.getProperty(property) > b.getProperty(property)) {
				return 1;
			} else if (a.getProperty(property) < b.getProperty(property)) {
				return -1;
			}
			return 0;
		};
	} else {
		return function(a, b) {
			if (a.getProperty(property) < b.getProperty(property)) {
				return 1;
			} else if (a.getProperty(property) > b.getProperty(property)) {
				return -1;
			}
			return 0;
		};
	}
};

sap.suite.ui.commons.Timeline.prototype.onAfterRendering = function() {
	var that = this;
	this.$().css("height", this._height);
	this.$().find("#" + this.getId() + "-scroll").css("height", this._scHeight);
	jQuery.sap.delayedCall(150, this, function() {
		that._performUiChanges();
	});
	this._startItemNavigation();
};

/* Keyboard Handling */
sap.suite.ui.commons.Timeline.prototype._startItemNavigation = function() {
	// Collect the dom references of the items
	var oFocusRef = this.getDomRef(), aRows = oFocusRef.getElementsByClassName("sapSuiteUiCommonsTimelineItemShellUser"), aDomRefs = [];

	for (var i = 0; i < aRows.length; i++) {
		aDomRefs.push(aRows[i].firstChild);
		// aDomRefs.push(aRows[i].firstChildNodes);
	}

	// initialize the delegate add apply it to the control (only once)
	if (!this.oItemNavigation) {
		this.oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		this.addDelegate(this.oItemNavigation);
	}

	// After each rendering the delegate needs to be initialized as well.

	// set the root dom node that surrounds the items
	this.oItemNavigation.setRootDomRef(oFocusRef);
	// set the array of dom nodes representing the items.
	this.oItemNavigation.setItemDomRefs(aDomRefs);
	// turn off the cycling
	this.oItemNavigation.setCycling(false);
	// set the page size - default with 10 items
	var pageSize = this.getGrowingThreshold();
	if (pageSize == 0) {
		pageSize = 10;
	}
	this.oItemNavigation.setPageSize(pageSize);

};

sap.suite.ui.commons.Timeline.prototype._switchFocus = function(oEvent) {
	// switch behavior between embedded control interactive element and timeline control interactive element
	if (this._prevTargetId != oEvent.currentTarget.id) {
		this._oLastFocused = oEvent.target;
		this._prevTargetId = oEvent.currentTarget.id; // oEvent.currentTarget.id - timeline
		jQuery(oEvent.target).blur();
		this.$().focus();
	} else if (this._oLastFocused) {
		jQuery(this._oLastFocused).focus();
		this._oLastFocused = oEvent.target;
		this._prevTargetId = oEvent.target.id;
	}
};

sap.suite.ui.commons.Timeline.prototype.onkeydown = function(oEvent) {
	// check whether event is marked or not
	var mKeyCodes = jQuery.sap.KeyCodes;
	if (oEvent.isMarked()) {
		return;
	}
	// switch focus to row and focused item with F7
	if (oEvent.which == mKeyCodes.F7) {
		this._switchFocus(oEvent);
		oEvent.preventDefault();
		oEvent.setMarked();
		return;
	}
};

sap.suite.ui.commons.Timeline.prototype._navToTabChain = function(bAfter) {

	var iStep = bAfter ? 1 : -1;
	var sElement = bAfter ? "after" : "before";
	var $Element = this.$(sElement).attr("tabindex", "0");

	// search all parents to find next/prev tabbable item
	for (var oParent = this; (oParent = oParent.getParent()) && oParent.$;) {
		var $Tabbables = oParent.$().find(":sapTabbable");
		var iLimit = bAfter ? $Tabbables.length - 1 : 0;
		var iIndex = $Tabbables.index($Element);

		// should have more tabbables then dummy before or after element
		// should keep searching if the $Element is the first or last one
		if ($Tabbables.length > 1 && iIndex != iLimit) {
			break;
		}
	}

	// find next/prev tabbable item and reset tabindex
	$Tabbables = $Tabbables || this.$().parent().find(":sapTabbable");

	iIndex = $Tabbables.index($Element) + iStep;

	$Element.attr("tabindex", "-1");

	// focus and return the found tabbable if possible
	return $Tabbables[iIndex] && $Tabbables.eq(iIndex).focus();
};

// Handle F6
sap.suite.ui.commons.Timeline.prototype.onsapskipforward = function(oEvent) {
	// do not handle marked events
	if (oEvent.isMarked()) {
		return;
	}

	// focus to the next tabbable element after the control
	if (this._navToTabChain(true)) {
		oEvent.preventDefault();
		oEvent.setMarked();
	}
};

// Handle Shift + F6
/*
 * sap.suite.ui.commons.Timeline.prototype.onsapskipback = function(oEvent) { // do not handle marked events if
 * (oEvent.isMarked()) { return; } // focus to the previous tabbable element before the control if
 * (this._navToTabChain(false)) { oEvent.preventDefault(); oEvent.setMarked(); } };
 */

sap.suite.ui.commons.Timeline.prototype.onsapspace = function(oEvent) {
	var targetId = oEvent.target.id; // current focus
	var n = targetId.indexOf("getmore"); // check id suffix with 'getmore'
	// if non 'getmore' button entered, then prevent scrolling when focus
	if (n < 0) {
		oEvent.preventDefault();
		oEvent.setMarked();
		this.focus();
	}

};

sap.suite.ui.commons.Timeline.prototype._performUiChanges = function() {
	var showIcons = this.getShowIcons();
	var jThis = this.$();
	var liItems = jThis.find('li');
	for (var i = 0; i < liItems.length; i++) {
		var lineInd = i + 1;
		var contentHeight = jThis.find('li:nth-child(' + lineInd + ')').find('.sapSuiteUiCommonsTimelineItemBox').css('height');
		if (contentHeight !== undefined) {
			var liHeight = parseInt(contentHeight.replace("px", "")) + 23;// 10;
			if (i === (liItems.length - 1)) {
				liHeight += 28;// 15;
			}
			// set the item div height
			jThis.find('li:nth-child(' + lineInd + ')').css({
				'height' : liHeight + 'px'
			});

			// set the bar/line height..
			var liBar = jThis.find('li:nth-child(' + lineInd + ')').find('.sapSuiteUiCommonsTimelineItemBar');
			if (!showIcons) {
				liBar.css({
					'height' : (liHeight - 17) + 'px'
				});
				liBar.css({
					'top' : 30 + 'px'
				});
			} else {
				liBar.css({
					'height' : (liHeight - 34) + 'px'
				});
			}
		}
	}

	this._performScrollChanges();

};

sap.suite.ui.commons.Timeline.prototype._performScrollChanges = function() {
	// fix the height for scrolling.
	var jThis = this.$();
	var _outerHeight = jThis.parent().outerHeight();
	var _innerHeight = jThis.parent().height(); // css height excluding buffer etc.
	// get height of all the members elements other than timeline.
	var _elementsHeight = 0;
	var _elements = jThis.parent().children();
	for (var i = 0; i < _elements.length; i++) {
		var _elem = _elements[i];
		if (_elem.className != "sapSuiteUiCommonsTimeline") {
			_elementsHeight += _elem.clientHeight;
		}
	}

	_outerHeight = _outerHeight - _elementsHeight;
	var _badSize = false;
	if (_innerHeight <= 50 || (_innerHeight - _elementsHeight) <= 50) { // at least 50px
		_badSize = true;
	}
	this._height = _outerHeight - 28;  //todo. when to really calculate?
	jThis.css({
		'height' : this._height
	});
	
	// escape dot as special char in the Fiori view IDs.
	var myId = this.getId();
	if (myId.indexOf("\.") != -1) { // there is a dot in the id.
	    myId = myId.replace( /(:|\.|\[|\])/g, "\\$1" ); // escape the ". and :" with "\\."
	}
	
	var _toolbarHeight = jThis.find("#" + myId + "-filterToolBar").outerHeight() + 28;
	var _infoBarHeight = jThis.find("#" + myId + "-filterInfoBar").outerHeight();
	if (_badSize) {
		jThis.find("#" + myId + "-scroll").css({
			'height' : '25rem'
		});
		jThis.parent().css({
			'height' : '25rem'
		});
		jThis.parent().css({
			'height' : (jThis.parent().outerHeight() + _elementsHeight + _toolbarHeight + _infoBarHeight)
		});
	} else {
		this._scHeight = _outerHeight - (_toolbarHeight + _infoBarHeight);
		jThis.find("#" + myId + "-scroll").css({
			'height' : this._scHeight
		});
	}
};

sap.suite.ui.commons.Timeline.prototype.setOutput = function(oItems) {
	this._outputItem = [];
	var showIcons = this.getShowIcons();// if no icons property set... set _showIcons prop
	if (oItems.length > 1) {
		oItems.sort(this.sortBy('dateTime', this.getSortOldestFirst()));
	}
	var displayItemCount = this._iItemCount;
	if (oItems.length < this._iItemCount) {
		displayItemCount = oItems.length;
	} else {
		displayItemCount = this._iItemCount;
	}
	for (var i = 0; i < displayItemCount; i++) {
		var _item = oItems[i];
		var _position;
		if (!showIcons) {
			_item._showIcons = true;
		}
		if (i == (oItems.length - 1)) {
			if (this._showMore) {
				_position = sap.suite.ui.commons.TimelineItemPosition.Middle;
			} else {
				_position = sap.suite.ui.commons.TimelineItemPosition.Bottom;
			}
		} else if (i == 0) {
			_position = sap.suite.ui.commons.TimelineItemPosition.Top;
		} else {
			_position = sap.suite.ui.commons.TimelineItemPosition.Middle;
		}
		_item.setLayout(_position, "Right");
		this._outputItem.push(_item);
	}

};


/* only get called when oData model... */
sap.suite.ui.commons.Timeline.prototype.refreshContent = function(sReason) {
	this._finishLoading = false;
	if (this.getEnableBusyIndicator()) {
		this.setBusy(true);
	}
	var oBindingInfo = this.getBindingInfo("content");
	var oBinding = this.getBinding("content");
	if (this.getGrowing() && (oBindingInfo) && (oBindingInfo.model !== sap.suite.ui.commons.Timeline.INTERNAL_MODEL_NAME) && (oBinding) && (oBinding.getModel())
			&& (oBinding.getModel().getDefaultCountMode() !== sap.ui.model.odata.CountMode.None)) {
		this._growing = true;
		this._iItemCount = this.getGrowingThreshold();
		oBinding.getContexts(0, this._iItemCount);
		oBindingInfo.length = this._iItemCount;
	} else {
		this.updateAggregation("content");
	}
	this._filterText = this.resBundle.getText("TIMELINE_ALL");
};

sap.suite.ui.commons.Timeline.prototype.updateContent = function(sReason) {
	if (this.getEnableBusyIndicator() && this.getBusy()) {
		this.setBusy(false);
	}
	var oBinding = this.getBinding("content");
	if (this._growing) {
		oBinding.getContexts(0, this._iItemCount);
	}
	this.updateAggregation("content");
	this._finishLoading = true;
	this._contentChange = true;
	if (!this.getEnableBackendFilter()) {
	  this._resetFilter();
	}
};



sap.suite.ui.commons.Timeline.prototype.updateFilterList = function() { // July/22/2014
	this.updateAggregation("filterList");
	this._setFilterList();
};

sap.suite.ui.commons.Timeline.prototype.exit = function() {
	if (this._emptyList) {
		this._emptyList.destroy();
		this._emptyList = undefined;
	}
	if (this._filterIcon) {
		this._filterIcon.destroy();
		this._filterIcon = undefined;
	}
	if (this._filterDialog) {
		this._filterDialog.destroy();
		this._filterDialog = undefined;
	}
	if (this._filterList) {
		this._filterList.destroy();
		this._filterList = undefined;
	}
	if (this._headerBar) {
		this._headerBar.destroy();
		this._headerBar = undefined;
	}
	if (this._filterInfoText) {
		this._filterInfoText.destroy();
		this._filterInfoText = undefined;
	}
	if (this._headerInfoBar) {
		this._headerInfoBar.destroy();
		this._headerInfoBar = undefined;
	}
	if (this._getMoreButton) {
		this._getMoreButton.destroy();
		this._getMoreButton = undefined;
	}
	if (this._oScroller) {
		this._oScroller.destroy();
		this._oScroller = null;
	}
	if (this.oItemNavigation) {
		this.removeDelegate(this.oItemNavigation);
		this.oItemNavigation.destroy();
	}
};

sap.suite.ui.commons.Timeline.prototype.setNoDataText = function(noDataText) {
	this.setProperty("noDataText", noDataText, true);
	this._emptyList.setNoDataText(noDataText);
};

sap.suite.ui.commons.Timeline.prototype.setShowHeaderBar = function(oShowHeaderBar) {
	this.setProperty("showHeaderBar", oShowHeaderBar, true);
	this._headerBar.setVisible(oShowHeaderBar);
};

sap.suite.ui.commons.Timeline.prototype.getMaxItemsCount = function() {
	var oBinding = this.getBinding("content");
	if (oBinding) {
		return oBinding.getLength() || 0;
	}
	return this.getContent().length;
};

sap.suite.ui.commons.Timeline.prototype.setGrowing = function(bGrowing) {
	if (this.getGrowing() != bGrowing) {
		this.setProperty("growing", bGrowing, !bGrowing);
	}
};

sap.suite.ui.commons.Timeline.prototype.setGrowingThreshold = function(growingThreshold) {
	this.setProperty("growingThreshold", growingThreshold, true);
	this._iItemCount = growingThreshold;
};

sap.suite.ui.commons.Timeline.prototype.getCurrentFilter = function() {
  var selectedItem = this._filterList.getSelectedItem();
  if (selectedItem) {
  	return this._filterList.getSelectedItem().getKey();
	} else {
	  return null;
	}
};

sap.suite.ui.commons.Timeline.prototype.setCurrentFilter = function(selectedItemKey) {
	this._currentFilterKey = selectedItemKey;
	var items = this._filterList.getItems();
	if (this.getEnableBackendFilter() && (items.length === 0)) {
		this._setFilterList();
	} else {
		var selectedItem;
		for (var i = 0; i < items.length; i++) {
			if (selectedItemKey === items[i].getKey()) {
				selectedItem = items[i];
			};
		};
		if (selectedItem) {
			this._filterList.setSelectedItem(selectedItem);
			this._setFilterInfoText(selectedItem.getLabel());
			// this.fireFilterSelectionChange({selectedItem : selectedItem});
		}
		// this._currentFilterKey = selectedItemKey;
	}
};
