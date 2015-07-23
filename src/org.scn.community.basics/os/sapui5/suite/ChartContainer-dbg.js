/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.ChartContainer.
jQuery.sap.declare("sap.suite.ui.commons.ChartContainer");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ChartContainer.
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
 * <li>{@link #getShowPersonalization showPersonalization} : boolean (default: false)</li>
 * <li>{@link #getShowFullScreen showFullScreen} : boolean (default: false)</li>
 * <li>{@link #getFullScreen fullScreen} : boolean (default: false)</li>
 * <li>{@link #getShowLegend showLegend} : boolean (default: true)</li>
 * <li>{@link #getTitle title} : string (default: '')</li>
 * <li>{@link #getSelectorGroupLabel selectorGroupLabel} : string</li>
 * <li>{@link #getAutoAdjustHeight autoAdjustHeight} : boolean (default: false)</li>
 * <li>{@link #getShowZoom showZoom} : boolean (default: true)</li>
 * <li>{@link #getShowLegendButton showLegendButton} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDimensionSelectors dimensionSelectors} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.suite.ui.commons.ChartContainerContent[]</li>
 * <li>{@link #getCustomIcons customIcons} : sap.ui.core.Icon[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.ChartContainer#event:personalizationPress personalizationPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.ChartContainer#event:contentChange contentChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.ChartContainer#event:customZoomInPress customZoomInPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.ChartContainer#event:customZoomOutPress customZoomOutPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * ToolBar used for displaying one chart amongst several and provide additional features:
 * - multiple select boxes for selecting dimensions
 * - fullscreen toggle
 * - personalization icon
 * - showLegend toggle
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.ChartContainer
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.ChartContainer", { metadata : {

	publicMethods : [
		// methods
		"switchChart", "updateChartContainer"
	],
	library : "sap.suite.ui.commons",
	properties : {
		"showPersonalization" : {type : "boolean", group : "Misc", defaultValue : false},
		"showFullScreen" : {type : "boolean", group : "Misc", defaultValue : false},
		"fullScreen" : {type : "boolean", group : "Misc", defaultValue : false},
		"showLegend" : {type : "boolean", group : "Misc", defaultValue : true},
		"title" : {type : "string", group : "Misc", defaultValue : ''},
		"selectorGroupLabel" : {type : "string", group : "Misc", defaultValue : null},
		"autoAdjustHeight" : {type : "boolean", group : "Misc", defaultValue : false},
		"showZoom" : {type : "boolean", group : "Misc", defaultValue : true},
		"showLegendButton" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	defaultAggregation : "content",
	aggregations : {
		"dimensionSelectors" : {type : "sap.ui.core.Control", multiple : true, singularName : "dimensionSelector"}, 
		"content" : {type : "sap.suite.ui.commons.ChartContainerContent", multiple : true, singularName : "content"}, 
		"toolBar" : {type : "sap.m.OverflowToolbar", multiple : false, visibility : "hidden"}, 
		"customIcons" : {type : "sap.ui.core.Icon", multiple : true, singularName : "customIcon"}
	},
	events : {
		"personalizationPress" : {}, 
		"contentChange" : {}, 
		"customZoomInPress" : {}, 
		"customZoomOutPress" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.ChartContainer with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.ChartContainer.extend
 * @function
 */

sap.suite.ui.commons.ChartContainer.M_EVENTS = {'personalizationPress':'personalizationPress','contentChange':'contentChange','customZoomInPress':'customZoomInPress','customZoomOutPress':'customZoomOutPress'};


/**
 * Getter for property <code>showPersonalization</code>.
 * Display or not the personalization icon into the ChartContainer
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showPersonalization</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getShowPersonalization
 * @function
 */

/**
 * Setter for property <code>showPersonalization</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowPersonalization  new value for property <code>showPersonalization</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setShowPersonalization
 * @function
 */


/**
 * Getter for property <code>showFullScreen</code>.
 * Display or not the full screen icon into the ChartContainer
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showFullScreen</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getShowFullScreen
 * @function
 */

/**
 * Setter for property <code>showFullScreen</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowFullScreen  new value for property <code>showFullScreen</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setShowFullScreen
 * @function
 */


/**
 * Getter for property <code>fullScreen</code>.
 * Display the chart and the toolbar in full screen or normal mode
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>fullScreen</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getFullScreen
 * @function
 */

/**
 * Setter for property <code>fullScreen</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFullScreen  new value for property <code>fullScreen</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setFullScreen
 * @function
 */


/**
 * Getter for property <code>showLegend</code>.
 * Display or not the legend on the contained charts.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showLegend</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getShowLegend
 * @function
 */

/**
 * Setter for property <code>showLegend</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowLegend  new value for property <code>showLegend</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setShowLegend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * The string to display instead of the select boxes if there are no dimensions to display
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setTitle
 * @function
 */


/**
 * Getter for property <code>selectorGroupLabel</code>.
 * Custom Label for Selectors Group.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>selectorGroupLabel</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getSelectorGroupLabel
 * @function
 */

/**
 * Setter for property <code>selectorGroupLabel</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSelectorGroupLabel  new value for property <code>selectorGroupLabel</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setSelectorGroupLabel
 * @function
 */


/**
 * Getter for property <code>autoAdjustHeight</code>.
 * Determine whether to stretch the chart height to the maximum possible height of ChartContainer's parent container. As a prerequisite, the parent container needs to have a fixed value height or be able to determine height from its parent.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>autoAdjustHeight</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getAutoAdjustHeight
 * @function
 */

/**
 * Setter for property <code>autoAdjustHeight</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bAutoAdjustHeight  new value for property <code>autoAdjustHeight</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setAutoAdjustHeight
 * @function
 */


/**
 * Getter for property <code>showZoom</code>.
 * Display or not the zoom icons.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showZoom</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getShowZoom
 * @function
 */

/**
 * Setter for property <code>showZoom</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowZoom  new value for property <code>showZoom</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setShowZoom
 * @function
 */


/**
 * Getter for property <code>showLegendButton</code>.
 * Property to enable disable legend button
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showLegendButton</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getShowLegendButton
 * @function
 */

/**
 * Setter for property <code>showLegendButton</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowLegendButton  new value for property <code>showLegendButton</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setShowLegendButton
 * @function
 */


/**
 * Getter for aggregation <code>dimensionSelectors</code>.<br/>
 * Dimension Selects.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getDimensionSelectors
 * @function
 */


/**
 * Inserts a dimensionSelector into the aggregation named <code>dimensionSelectors</code>.
 *
 * @param {sap.ui.core.Control}
 *          oDimensionSelector the dimensionSelector to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the dimensionSelector should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the dimensionSelector is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the dimensionSelector is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#insertDimensionSelector
 * @function
 */

/**
 * Adds some dimensionSelector <code>oDimensionSelector</code> 
 * to the aggregation named <code>dimensionSelectors</code>.
 *
 * @param {sap.ui.core.Control}
 *            oDimensionSelector the dimensionSelector to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#addDimensionSelector
 * @function
 */

/**
 * Removes an dimensionSelector from the aggregation named <code>dimensionSelectors</code>.
 *
 * @param {int | string | sap.ui.core.Control} vDimensionSelector the dimensionSelector to remove or its index or id
 * @return {sap.ui.core.Control} the removed dimensionSelector or null
 * @public
 * @name sap.suite.ui.commons.ChartContainer#removeDimensionSelector
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>dimensionSelectors</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.ChartContainer#removeAllDimensionSelectors
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>dimensionSelectors</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oDimensionSelector the dimensionSelector whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.ChartContainer#indexOfDimensionSelector
 * @function
 */
	

/**
 * Destroys all the dimensionSelectors in the aggregation 
 * named <code>dimensionSelectors</code>.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#destroyDimensionSelectors
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * CharToolBar Content aggregation. Only vizFrame, sap.m.Table and sap.ui.table.Table can be embedded.
 * 
 * <strong>Note</strong>: this is the default aggregation for ChartContainer.
 * @return {sap.suite.ui.commons.ChartContainerContent[]}
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getContent
 * @function
 */


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.suite.ui.commons.ChartContainerContent}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.suite.ui.commons.ChartContainerContent}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.suite.ui.commons.ChartContainerContent} vContent the content to remove or its index or id
 * @return {sap.suite.ui.commons.ChartContainerContent} the removed content or null
 * @public
 * @name sap.suite.ui.commons.ChartContainer#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.ChartContainerContent[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.ChartContainer#removeAllContent
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.ChartContainerContent</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.ChartContainerContent}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.ChartContainer#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>customIcons</code>.<br/>
 * Custom Icons
 * 
 * @return {sap.ui.core.Icon[]}
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getCustomIcons
 * @function
 */


/**
 * Inserts a customIcon into the aggregation named <code>customIcons</code>.
 *
 * @param {sap.ui.core.Icon}
 *          oCustomIcon the customIcon to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the customIcon should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the customIcon is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the customIcon is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#insertCustomIcon
 * @function
 */

/**
 * Adds some customIcon <code>oCustomIcon</code> 
 * to the aggregation named <code>customIcons</code>.
 *
 * @param {sap.ui.core.Icon}
 *            oCustomIcon the customIcon to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#addCustomIcon
 * @function
 */

/**
 * Removes an customIcon from the aggregation named <code>customIcons</code>.
 *
 * @param {int | string | sap.ui.core.Icon} vCustomIcon the customIcon to remove or its index or id
 * @return {sap.ui.core.Icon} the removed customIcon or null
 * @public
 * @name sap.suite.ui.commons.ChartContainer#removeCustomIcon
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>customIcons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Icon[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.ChartContainer#removeAllCustomIcons
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Icon</code> in the aggregation named <code>customIcons</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Icon}
 *            oCustomIcon the customIcon whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.ChartContainer#indexOfCustomIcon
 * @function
 */
	

/**
 * Destroys all the customIcons in the aggregation 
 * named <code>customIcons</code>.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#destroyCustomIcons
 * @function
 */


/**
 * Event fired when a user clicks on the personalization icon
 *
 * @name sap.suite.ui.commons.ChartContainer#personalizationPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'personalizationPress' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself. 
 *  
 * Event fired when a user clicks on the personalization icon
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#attachPersonalizationPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'personalizationPress' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#detachPersonalizationPress
 * @function
 */

/**
 * Fire event personalizationPress to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.ChartContainer#firePersonalizationPress
 * @function
 */


/**
 * Event fired when user change the Content displayed.
 *
 * @name sap.suite.ui.commons.ChartContainer#contentChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.selectedItemId Id of the Item selected.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'contentChange' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself. 
 *  
 * Event fired when user change the Content displayed.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#attachContentChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'contentChange' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#detachContentChange
 * @function
 */

/**
 * Fire event contentChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedItemId' of type <code>string</code> Id of the Item selected.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.ChartContainer#fireContentChange
 * @function
 */


/**
 * Custom event for zoom in
 *
 * @name sap.suite.ui.commons.ChartContainer#customZoomInPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'customZoomInPress' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself. 
 *  
 * Custom event for zoom in
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#attachCustomZoomInPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'customZoomInPress' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#detachCustomZoomInPress
 * @function
 */

/**
 * Fire event customZoomInPress to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.ChartContainer#fireCustomZoomInPress
 * @function
 */


/**
 * Custom event for zoom out
 *
 * @name sap.suite.ui.commons.ChartContainer#customZoomOutPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'customZoomOutPress' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself. 
 *  
 * Custom event for zoom out
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#attachCustomZoomOutPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'customZoomOutPress' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#detachCustomZoomOutPress
 * @function
 */

/**
 * Fire event customZoomOutPress to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.ChartContainer#fireCustomZoomOutPress
 * @function
 */


/**
 * switch display content in the container.
 *
 * @name sap.suite.ui.commons.ChartContainer#switchChart
 * @function
 * @type sap.suite.ui.commons.ChartContainerContent
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * update ChartContainer Toolbar and its content will be rerendered.
 *
 * @name sap.suite.ui.commons.ChartContainer#updateChartContainer
 * @function
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */

// Start of sap/suite/ui/commons/ChartContainer.js
jQuery.sap.declare("sap.suite.ui.commons.ChartContainer");
jQuery.sap.require("sap.m.Popover");
jQuery.sap.require("sap.m.Button");
//jQuery.sap.require("sap.m.Bar");
jQuery.sap.require("sap.m.Select");
jQuery.sap.require("sap.m.Dialog");
jQuery.sap.require("sap.ui.core.ResizeHandler");
jQuery.sap.require("sap.ui.Device");
sap.ui.getCore().loadLibrary("sap.viz");

sap.suite.ui.commons.ChartContainer.prototype.init = function() {
	this._firstTime = true;
	this._aChartIcons = [];
	this._selectedChart = null;
	this._dimSelectorsAll = [];
	this._customIconsAll = []; 
	this._oShowLegendButton = null;
	var oLocale = sap.ui.getCore().getConfiguration().getLanguage();
	this.resBundle = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons", oLocale);

	//Right side..
	this._oFullScreenButton = new sap.m.OverflowToolbarButton({
		icon : "sap-icon://full-screen",
		type : sap.m.ButtonType.Transparent,
		text : this.resBundle.getText("CHARTCONTAINER_FULLSCREEN"),
		tooltip : this.resBundle.getText("CHARTCONTAINER_FULLSCREEN"),
		press : jQuery.proxy(this.toggleFullScreen, this)
	});

	this._oPopup = new sap.ui.core.Popup({
		modal : true,
		shadow : false,
		autoClose : false
	});
	/*this._oPopup._applyPosition = function(oPostion) {
		var $Ref = this._$();
		$Ref.css({
			left : "0px",
			top : "0px",
			right : "0px",
			bottom : "0px"
		});
	};*/

	this._oShowLegendButton = new sap.m.OverflowToolbarButton({
		icon : "sap-icon://legend",
		type : sap.m.ButtonType.Transparent,
		text : this.resBundle.getText("CHARTCONTAINER_LEGEND"),
		tooltip : this.resBundle.getText("CHARTCONTAINER_LEGEND"),
		press : jQuery.proxy(this._onLegendButtonPress, this)
	});

	this._oShowAllChartButton = new sap.m.Button({
//	this._oShowAllChartButton = new sap.m.OverflowToolbarButton({  //??????????????
		type : sap.m.ButtonType.Transparent,
		press : jQuery.proxy(this._onShowAllChartPress, this)
	});

	this._oPhonePopoverButton = new sap.m.Button({
		icon : "sap-icon://overflow",
		type : sap.m.ButtonType.Transparent,
		press : jQuery.proxy(this._onPhonePopoverPress, this)
	});

	this._oPersonalizationButton = new sap.m.OverflowToolbarButton({
		icon : "sap-icon://action-settings",
		type : sap.m.ButtonType.Transparent,
		text : this.resBundle.getText("CHARTCONTAINER_PERSONALIZE"),
		tooltip : this.resBundle.getText("CHARTCONTAINER_PERSONALIZE"),
		press : jQuery.proxy(this._oPersonalizationPress, this)
	});
	this._oActiveChartButton = null;

	this._oZoomInButton = new sap.m.OverflowToolbarButton({
		icon : "sap-icon://zoom-in",
		type : sap.m.ButtonType.Transparent,
		text : this.resBundle.getText("CHARTCONTAINER_ZOOMIN"),
		tooltip : this.resBundle.getText("CHARTCONTAINER_ZOOMIN"),
		press : jQuery.proxy(this._zoom, this, true)
	});
	
	this._oZoomOutButton = new sap.m.OverflowToolbarButton({
		icon : "sap-icon://zoom-out",
		type : sap.m.ButtonType.Transparent,
		text : this.resBundle.getText("CHARTCONTAINER_ZOOMOUT"),
		tooltip : this.resBundle.getText("CHARTCONTAINER_ZOOMOUT"),
		press : jQuery.proxy(this._zoom, this, false)
	});
	
	this._oAllChartList = new sap.m.List({
		mode : sap.m.ListMode.SingleSelectMaster,
		showSeparators : sap.m.ListSeparators.None,
		includeItemInSelection : true,
		width : "20em",
		select : jQuery.proxy(function(oEvent) {
			var sChartId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
			this._switchChart(sChartId);
		}, this)
	});

	this._oAllIconsList = new sap.m.List({
		mode : sap.m.ListMode.SingleSelectMaster,
		showSeparators : sap.m.ListSeparators.None,
		includeItemInSelection : true,
		width : "20em",
		rememberSelections : false,
		select : jQuery.proxy(function(oEvent) {
			var customData = oEvent.getParameter("listItem").getCustomData()[0];//[0].getValue();
			// do a getKey here and match and then do.. or pass the customData object to a function..
			this._switchFunctionPhone(customData);
		}, this)
	});

	this._oShowAllChartPopover = new sap.m.ResponsivePopover({
		placement : sap.m.PlacementType.Bottom,
		showHeader : false,
		content : [this._oAllChartList]
	});

/*	this._oPhonePopover = new sap.m.ResponsivePopover({
		placement : sap.m.PlacementType.Bottom,
		showHeader : true,
		title : this.resBundle.getText("CHARTCONTAINER_OPTIONS"),
		content : [this._oAllIconsList]
	});*/
	
	this._oPhoneDialog = new sap.m.Dialog(this.getId() + "-phone_dialog", {
		title : this.resBundle.getText("CHARTCONTAINER_OPTIONS"),
		stretch : true,
		content : [this._oAllIconsList],
		beginButton : new sap.m.Button({
			text : this.resBundle.getText("CHARTCONTAINER_CLOSE"),
			press : jQuery.proxy(function(oEvent) {
				this._oPhoneDialog.close();
			}, this)
		})
	});
	this._oPhoneDialog.addStyleClass("sapUiPopupWithPadding");

	this._oSelectedChart = null;
	
//	this._oChartSegmentedButton = new sap.m.SegmentedButton();
	this._oChartSegmentedButton = new sap.m.SegmentedButton( {	
		select : jQuery.proxy(function(oEvent) {
			var sChartId = oEvent.getParameter("button").getCustomData()[0].getValue();
			this._switchChart(sChartId);
		}, this)
	  }
	);

	// Left side...
	this._oChartTitle = new sap.m.Label();
	// this._oViewBy = new sap.m.Link({
	this._oViewBy = new sap.m.Button({
		text : this.resBundle.getText("CHARTCONTAINER_VIEWBY"),
		type : sap.m.ButtonType.Transparent,
		layoutData: new sap.m.OverflowToolbarLayoutData({moveToOverflow: false}),
		press : jQuery.proxy(this._showViewByPopover, this)
	//		press : function(oEvent) {
	//			this._ViewByPopover.openBy(oEvent.getSource());
	//		}	
	});
	this._oViewByPopover = new sap.m.ResponsivePopover(this.getId() + "-viewby_popover", {
		title : this.resBundle.getText("CHARTCONTAINER_VIEWBY"),
		showHeader : false,
		placement : sap.m.PlacementType.Bottom,
		contentHeight : "15rem",
		contentWidth : "15rem"
	});
  this._oViewByPopover.addStyleClass("sapUiPopupWithPadding");
  
	this._oViewByDialog = new sap.m.Dialog(this.getId() + "-viewby_dialog", {
		title : this.resBundle.getText("CHARTCONTAINER_VIEWBY"),
		stretch : true,
		beginButton : new sap.m.Button({
			text : this.resBundle.getText("CHARTCONTAINER_CLOSE"),
			press : jQuery.proxy(function(oEvent) {
				this._oViewByDialog.close();
			}, this)
		})
	});
	this._oViewByDialog.addStyleClass("sapUiPopupWithPadding");
  
	this._oToolBar = new sap.m.OverflowToolbar({
// Use ToolBarDesign.Auto
//	design : sap.m.ToolbarDesign.Transparent,
		content : [new sap.m.ToolbarSpacer()],
		width: "auto"
	/// contents are set at onBeforeRendering.
	});
	this.setAggregation("toolBar", this._oToolBar);

	this._currentRangeName = sap.ui.Device.media.getCurrentRange(sap.ui.Device.media.RANGESETS.SAP_STANDARD).name;
	sap.ui.Device.media.attachHandler(this._handleMediaChange, this, sap.ui.Device.media.RANGESETS.SAP_STANDARD);
  
	this.sResizeListenerId = null;
	if (jQuery.device.is.desktop) {
		this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this, jQuery.proxy(this._performHeightChanges, this));
	} else {
		sap.ui.Device.orientation.attachHandler(this._performHeightChanges, this);
		sap.ui.Device.resize.attachHandler(this._performHeightChanges, this);
	}
  
};

sap.suite.ui.commons.ChartContainer.prototype.setFullScreen = function(bFullScreen ){
	if (this._firstTime) {
		// can't set the full screen and toggle since dom is not loaded yet
		return;
	}	
	var fullScreen = this.getProperty("fullScreen");
	if (fullScreen !== bFullScreen) {
		this.toggleFullScreen();
	} 
};

sap.suite.ui.commons.ChartContainer.prototype.toggleFullScreen = function() {
	var fullScreen = this.getProperty("fullScreen");
	var sId;
	var sHeight;
	if (fullScreen) {
		this.closeFullScreen();
		this.setProperty("fullScreen", false);
		sId = this.getSelectedChart().getContent().getId();
		this.getSelectedChart().getContent().setWidth("100%");
		sHeight = this._chartHeight[sId];
		if (sHeight) {
			this.getSelectedChart().getContent().setHeight(sHeight);
		}
	} else {
		var aObjects = this.getAggregation("content");
		this._chartHeight = {};
		if (aObjects) {
			for (var i = 0; i < aObjects.length; i++) {
				sId = aObjects[i].getContent().getId();
				if (typeof aObjects[i].getContent().getHeight == 'function') {
					sHeight = aObjects[i].getContent().getHeight();
				} else {
					sHeight = 0;
				}
				this._chartHeight[sId] = sHeight;
				}
			}
		this.openFullScreen(this, true);
		this.setProperty("fullScreen", true);
	}
	var sIcon = (fullScreen ? "sap-icon://full-screen" : "sap-icon://exit-full-screen");
	this._oFullScreenButton.setIcon(sIcon);
	this._oFullScreenButton.focus();
};

sap.suite.ui.commons.ChartContainer.prototype.openFullScreen = function(oContent, bNeedsScroll) {
	if ((bNeedsScroll != null) && (bNeedsScroll == true)) {
		this._oScrollEnablement = new sap.ui.core.delegate.ScrollEnablement(oContent, oContent.getId() + "-wrapper", {
			horizontal : true,
			vertical : true
		});
	}
	this.$content = oContent.$();
	if (this.$content) {

		// var domContent = oContent.getDomRef();
		//this.$parentNode = this.$content.parent();
		this.$tempNode = jQuery("<div></div>"); // id='" + this.$content.attr("id")+"-overlay"+ "'
		this.$content.before(this.$tempNode);

		this._$overlay = jQuery("<div id='" + jQuery.sap.uid() + "'></div>");
//		this._$overlay.addClass("sapCaUiOverlay");
		this._$overlay.addClass("sapSuiteUiCommonsChartContainerOverlay");
		this._$overlay.append(this.$content);
		this._oPopup.setContent(this._$overlay);
	} else {
		jQuery.sap.log.warn("Overlay: content does not exist or contains more than one child");
	}
//	this._oToolBar.setDesign(sap.m.ToolbarDesign.Solid);
	this._oPopup.open(200);

};

sap.suite.ui.commons.ChartContainer.prototype.closeFullScreen = function() {
	if (this._oScrollEnablement != null) {
		this._oScrollEnablement.destroy();
		this._oScrollEnablement = null;
	}
	this.$tempNode.replaceWith(this.$content);
	this._oToolBar.setDesign(sap.m.ToolbarDesign.Auto);
	this._oPopup.close();
	this._$overlay.remove();
};

sap.suite.ui.commons.ChartContainer.prototype.onAfterRendering = function(oEvent) {
	this._customIconsAll = [];
	if (this._chartContentChange) {
		this._chartChange();
	}
	var that = this;
	if ((this.sResizeListenerId == null) && (jQuery.device.is.desktop)) {
		this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this, jQuery.proxy(this._performHeightChanges, this));
	}
	if (this.getAutoAdjustHeight() || this.getFullScreen()) {
		jQuery.sap.delayedCall(100, this, function() {
			that._performHeightChanges();
		});
	}
	this._firstTime = false;
};

sap.suite.ui.commons.ChartContainer.prototype._performHeightChanges = function() {
	if (this.getAutoAdjustHeight() || this.getFullScreen()) {
		var jThis = this.$();
		var _chartContainerHeight = jThis.height();
		var _toolBarHeight = 0;
		var _chartHeight = 0;
		// Only adjust height after both toolbar and chart are rendered in DOM
		if ((jThis.find('.sapSuiteUiCommonsChartContainerToolBarArea').children()[0])
				&& (jThis.find('.sapSuiteUiCommonsChartContainerChartArea').children()[0])) {
			_toolBarHeight = jThis.find('.sapSuiteUiCommonsChartContainerToolBarArea').children()[0].clientHeight;
			_chartHeight = jThis.find('.sapSuiteUiCommonsChartContainerChartArea').children()[0].clientHeight;
			// Give 5px room to avoid rounding and scroll bar
			var _newHeight = _chartContainerHeight - _toolBarHeight - 1;
			var innerChart = this.getSelectedChart().getContent();
			if (innerChart instanceof sap.viz.ui5.controls.VizFrame) {
				if (((_chartHeight > _newHeight) || (_newHeight - _chartHeight > 5)) && (_newHeight > 0)) {
//					if (innerChart.setHeight()) {
						// innerChart.setHeight((_chartContainerHeight - _toolBarHeight) + "px");
						innerChart.setHeight(_newHeight + "px");
//					}
				}
//			} else if (innerChart.getDomRef().offsetWidth !== this.getDomRef().clientWidth) {
				} else if (Math.abs(innerChart.getDomRef().offsetWidth - this.getDomRef().clientWidth) > 3) {
				// For table/non-vizFrame case, if width changes during resize event, force a rerender to have it fit 100% width
				this.rerender();
			}
		}
	}
};

sap.suite.ui.commons.ChartContainer.prototype.onBeforeRendering = function(oEvent) {
	  if (this.getAggregation("customIcons")) {
		    if (this._customIconsAll.length === 0 && this.getAggregation("customIcons").length > 0) {
		      for (var i = 0; i < this.getAggregation("customIcons").length; i++) {
		        var oIcon = this.getAggregation("customIcons")[i];
		        var oButton = new sap.m.OverflowToolbarButton({          
		            icon :oIcon.getSrc(),
		            text:oIcon.getTooltip(),
		            tooltip:oIcon.getTooltip(),
		            type : sap.m.ButtonType.Transparent,
		            width : "3em"
		        });
		        var onPress = function(oEvent, oData){
		           oData.icon.firePress();
		        };
		        oButton.attachPress({icon: oIcon}, onPress);
		        this._customIconsAll.push(oButton);
		      }
		    }
	  }
	  this._adjustDisplay(oEvent);
};

sap.suite.ui.commons.ChartContainer.prototype._onLegendButtonPress = function(oEvent) {
//		this.setShowLegend(!this.getShowLegend());
	if (this.getSelectedChart()) {
		var selectedChart = this.getSelectedChart().getContent();
/*		if (selectedChart instanceof sap.viz.ui5.controls.VizFrame) {
			var legendOn;
			if (selectedChart.getVizProperties().legendGroup.computedVisibility) {
				legendOn = false;
			} else {
				legendOn = true;
			}
			if (this._currentRangeName === 'Phone') {
				jQuery.sap.delayedCall(200, this, function() {
					this.setShowLegend(legendOn);
				});
			} else {
				this.setShowLegend(legendOn);
			}
		} else {*/
			//only support if content has legendVisible property
//			if (typeof selectedChart.getLegendVisible === "function"()) {
			if (typeof selectedChart.getLegendVisible === "function") {
				var legendOn = selectedChart.getLegendVisible();
				selectedChart.setLegendVisible(!legendOn);
				this.setShowLegend(!legendOn);			
			} else {
				this.setShowLegend(!this.getShowLegend());
			}
//		}
	} else {
		this.setShowLegend(!this.getShowLegend());
	}
};

sap.suite.ui.commons.ChartContainer.prototype._onShowAllChartPress = function(oEvent) {
	jQuery.sap.delayedCall(500, this, function() {
		this._oShowAllChartPopover.openBy(this._oShowAllChartButton);
	});
};

sap.suite.ui.commons.ChartContainer.prototype._onPhonePopoverPress = function(oEvent) {
	this._oPhoneDialog.open();
	this._oAllIconsList.removeSelections();
//	this._oPhonePopover.openBy(this._oPhonePopoverButton);
};

sap.suite.ui.commons.ChartContainer.prototype._oPersonalizationPress = function(oEvent) {
	this.firePersonalizationPress();
};

sap.suite.ui.commons.ChartContainer.prototype._switchChart = function(sChartId) {
/*	var oRelatedButton = null;
	for (var i = 0; !oRelatedButton && i < this._aChartIcons.length; i++) {
		if (this._aChartIcons[i].getCustomData()[0].getValue() === sChartId) {
			oRelatedButton = this._aChartIcons[i];
		}
	}
	if (oRelatedButton) {
		if (this._oActiveChartButton) {
			this._oActiveChartButton.removeStyleClass("activeButton");
		}
		this._oActiveChartButton = oRelatedButton;
		this._oActiveChartButton.addStyleClass("activeButton");
	}*/

	var oChart = this._findChartById(sChartId);

	this.setSelectedChart(oChart);
	if (this._oShowAllChartPopover.isOpen()) {
		this._oShowAllChartPopover.close();
	}
	this.fireContentChange({
		selectedItemId : sChartId
	}); // fire the change event with id of the newly selected item..
	this.rerender();//invalidate();
};


sap.suite.ui.commons.ChartContainer.prototype.switchChart = function(oChart) {


	this.setSelectedChart(oChart);
	if (this._oShowAllChartPopover.isOpen()) {
		this._oShowAllChartPopover.close();
	}
 // fire the change event with id of the newly selected item..
	this.rerender();//invalidate();
};


sap.suite.ui.commons.ChartContainer.prototype._switchFunctionPhone = function(customData) {
	var oFunction = customData.getKey();
	var oValue = customData.getValue();
	var customIcon = null; 
	if (oFunction === 'chartId') {
		this._switchChart(oValue);
	} else if (oFunction === 'function') {
		//perform the function
		if (oValue === 'legend') {
			this._onLegendButtonPress();
		} else if (oValue === 'personalization') {
			this._oPersonalizationPress();
		} else if (oValue === 'fullscreen') {
			this.toggleFullScreen();
		} else if (oValue === 'zoomin') {
			this._zoom(true);
		} else if (oValue === 'zoomout') {
			this._zoom(false);
		}
	} else if (oFunction === 'customicon') {
      for (var i = 0; i < this._customIconsAll.length; i++ ) {
         if (this._customIconsAll[i].getId() === oValue) {
           customIcon = this._customIconsAll[i];
           break;                                   
         }
      }
      customIcon.firePress();
	}
	//close the phone popup..
/*	if (this._oPhonePopover.isOpen()) {
		this._oPhonePopover.close();
	}*/
	if (this._oPhoneDialog.isOpen()) {
		this._oPhoneDialog.close();
	}
};

sap.suite.ui.commons.ChartContainer.prototype.setTitle = function(sValue) {
	this._oChartTitle.setText(sValue);
	this.setProperty("title", sValue);
};

sap.suite.ui.commons.ChartContainer.prototype.setShowLegendButton = function(bValue) {
	this.setProperty("showLegendButton", bValue);
	if(!this.getShowLegendButton()) {
		this.setShowLegend(false);
	}
};

sap.suite.ui.commons.ChartContainer.prototype.setShowLegend = function(bValue) {
	this.setProperty("showLegend", bValue);

	//propagate to all charts
	var aContents = this.getAggregation("content");

	if (aContents) {
		for (var i = 0; i < aContents.length; i++) {
			var innerChart = aContents[i].getContent();
/*			if (innerChart.setVizProperties) {
				// innerChart.setShowLegend(bValue);
				innerChart.setVizProperties({
					legend : {
						visible : bValue
					},
					sizeLegend : {
						visible : bValue
					}
				});
				jQuery.sap.log.info("ChartContainer: propagate showLegend to chart id " + innerChart.getId());
			} else if (typeof innerChart.setLegendVisible === "function") { //non viz frame charts
*/
			if (typeof innerChart.setLegendVisible === "function") {
				innerChart.setLegendVisible(bValue);
			} else {
				jQuery.sap.log.info("ChartContainer: chart id " + innerChart.getId()
						+ " is missing the setVizProperties property");
			}
		}
/*		if (this.getSelectedChart()) {
			var selectedChart = this.getSelectedChart().getContent();
			if (selectedChart instanceof sap.viz.ui5.controls.VizFrame) {
				this._legendPopup = selectedChart.getResponsiveLegend();
				var openByControl = this._oShowLegendButton;
				if (this._currentRangeName === 'Phone') {
					openByControl = this._oPhonePopoverButton;
				}
				this._legendPopup.setOpenBy(openByControl);
				if (bValue) {
					this._legendPopup.show();
				} else {
					this._legendPopup.hide();
				}
			}
		}*/
	}
};

sap.suite.ui.commons.ChartContainer.prototype.addDimensionSelector = function(oObject) {
	this.addAggregation("dimensionSelectors", oObject);
	this._dimSelectorsAll.push(oObject);
};

sap.suite.ui.commons.ChartContainer.prototype.addCustomIcons = function(oObject) {
	this.addAggregation("customIcons", oObject);
};

sap.suite.ui.commons.ChartContainer.prototype.addContent = function(oObject) {
//	this._onAddingChart(oObject);
	this.addAggregation("content", oObject);
	this._chartContentChange = true;
};
sap.suite.ui.commons.ChartContainer.prototype.insertContent = function(oObject, iIndex) {
//	this._onAddingChart(oObject);
	this.insertAggregation("content", oObject, iIndex);
	this._chartContentChange = true;
};

sap.suite.ui.commons.ChartContainer.prototype.updateContent = function(sReason) {
	this.updateAggregation("content");
	this._chartContentChange = true;
};

sap.suite.ui.commons.ChartContainer.prototype.updateChartContainer = function() {
	this._chartContentChange = true;
	this.rerender();
};

/*sap.suite.ui.commons.ChartContainer.prototype._onAddingChart = function(oObject) {
	var innerChart = oObject.getContent();
	if (innerChart.setVizProperties) {
		innerChart.setVizProperties({
			legend : {
				visible : this.getShowLegend()
			}
		});
	}
	if (innerChart.setWidth) {
		innerChart.setWidth("100%");
	}
	this.addAggregation("content", oObject);
	var oButtonIcon = new sap.m.Button({
		icon : oObject.getIcon(),
		type : sap.m.ButtonType.Transparent,
		tooltip : oObject.getTitle(),
		customData : [new sap.ui.core.CustomData({
			key : 'chartId',
			value : innerChart.getId()
		})],
		press : jQuery.proxy(function(oEvent) {
			var sChartId = oEvent.getSource().getCustomData()[0].getValue();
			this._switchChart(sChartId);
		}, this)
	});
	this._aChartIcons.push(oButtonIcon);

	var oShowAllItem = new sap.m.StandardListItem({
		icon : oButtonIcon.getIcon(),
		title : oObject.getTitle(),
		customData : [new sap.ui.core.CustomData({
			key : 'chartId',
			value : innerChart.getId()
		})]
	});
	this._oAllChartList.addItem(oShowAllItem);

	//the first added chart is the selected and active one
	if (this.getAggregation("content").length == 1) {
		this._oAllChartList.setSelectedItem(oShowAllItem);
		this.setSelectedChart(oObject);
		this._oActiveChartButton = oButtonIcon;
	}
};*/

sap.suite.ui.commons.ChartContainer.prototype._chartChange = function() {
  var aCharts = this.getContent();
  this._aChartIcons = [];
	this._oAllChartList.removeAllItems();
	if (this.getContent().length == 0) {
		this._oChartSegmentedButton.removeAllButtons();
		this.switchChart(null);
	}
	if (aCharts) {
		for (var i = 0; i < aCharts.length; i++) {
			var innerChart = aCharts[i].getContent();
			if (innerChart.setVizProperties) {
				innerChart.setVizProperties({
					legend : {
						visible : this.getShowLegend()
					},
					sizeLegend : {
						visible : this.getShowLegend()
					}
				});
			}
			if (innerChart.setWidth) {
				innerChart.setWidth("100%");
			}
			var oButtonIcon = new sap.m.Button({
				icon : aCharts[i].getIcon(),
				type : sap.m.ButtonType.Transparent,
				tooltip : aCharts[i].getTitle(),
				customData : [new sap.ui.core.CustomData({
					key : 'chartId',
					value : innerChart.getId()
				})],
				press : jQuery.proxy(function(oEvent) {
					var sChartId = oEvent.getSource().getCustomData()[0].getValue();
					this._switchChart(sChartId);
				}, this)
			});
			this._aChartIcons.push(oButtonIcon);

			var oShowAllItem = new sap.m.StandardListItem({
				icon : oButtonIcon.getIcon(),
				title : aCharts[i].getTitle(),
				customData : [new sap.ui.core.CustomData({
					key : 'chartId',
					value : innerChart.getId()
				})]
			});
			this._oAllChartList.addItem(oShowAllItem);
			if (i === 0) {
				this._oAllChartList.setSelectedItem(oShowAllItem);
				this.setSelectedChart(aCharts[i]);
				this._oActiveChartButton = oButtonIcon;
			}
		}
	}
	this._chartContentChange = false;
};

sap.suite.ui.commons.ChartContainer.prototype.setSelectedChart = function(oObject) {
	if (oObject == null) {
		this._oShowLegendButton.setVisible(false);
		return;
	}
	//show/hide the showLegend buttons
	var oChart = oObject.getContent();
//	this._oChartTitle.setText(oObject.getTitle());
  var sChartId = oChart.getId();
	var oRelatedButton = null;
	for (var i = 0; !oRelatedButton && i < this._aChartIcons.length; i++) {
		if (this._aChartIcons[i].getCustomData()[0].getValue() === sChartId) {
			oRelatedButton = this._aChartIcons[i];
		}
	}
	if (oRelatedButton) {
		if (this._oActiveChartButton) {
			this._oActiveChartButton.removeStyleClass("activeButton");
		}
		this._oActiveChartButton = oRelatedButton;
		this._oActiveChartButton.addStyleClass("activeButton");
	}
	var bShowChart = (oChart instanceof sap.viz.ui5.controls.VizFrame) || (typeof oChart.setLegendVisible === "function"); //hide legend icon if table, show if chart
	if(this.getShowLegendButton()){
		this._oShowLegendButton.setVisible(bShowChart);
	}
	var bShowZoom = (this.getShowZoom()) && (sap.ui.Device.system.desktop) && (oChart instanceof sap.viz.ui5.controls.VizFrame);
	this._oZoomInButton.setVisible(bShowZoom);
	this._oZoomOutButton.setVisible(bShowZoom);
	this._oShowAllChartButton.setIcon(oObject.getIcon());
	this._oShowAllChartButton.setTooltip(oObject.getTitle());
//	this._oShowAllChartButton.setText(oObject.getTitle());      //?????????????
	this._oSelectedChart = oObject;
};

sap.suite.ui.commons.ChartContainer.prototype.getSelectedChart = function() {
	return this._oSelectedChart;
};

sap.suite.ui.commons.ChartContainer.prototype._findChartById = function(sId) {
	var oObject = null;
	var aObjects = this.getAggregation("content");
	if (aObjects) {
		for (var i = 0; !oObject && i < aObjects.length; i++) {
			if (aObjects[i].getContent().getId() === sId) {
				oObject = aObjects[i];
			}
		}
	}
	return oObject;
};

sap.suite.ui.commons.ChartContainer.prototype._preparePhonePopup = function() {
	this._oAllIconsList.removeAllItems();
	var oIconsItems = this._oAllChartList.getItems();
	for (var i = 0; i < this._customIconsAll.length; i++ )	{
		var oCustomIcon = new sap.m.StandardListItem({
			icon : this._customIconsAll[i].getIcon(),
			title : this._customIconsAll[i].getTooltip(),
			customData : [new sap.ui.core.CustomData({
				key : 'customicon',
				value : this._customIconsAll[i].getId()
			})]
		});
		this._oAllIconsList.addItem(oCustomIcon);
	}
	for (var i = 0; i < oIconsItems.length; i++) {
		var chartId = oIconsItems[i].getCustomData()[0].getValue();
		var oShowAllIconsItem = new sap.m.StandardListItem({
			icon : oIconsItems[i].getIcon(),
			title : oIconsItems[i].getTitle(),
			customData : [new sap.ui.core.CustomData({
				key : 'chartId',
				value : chartId
			})]
		});
		this._oAllIconsList.addItem(oShowAllIconsItem);
	}
	if (this._oShowLegendButton !== null && this._oShowLegendButton !== undefined && this._oShowLegendButton.getVisible()) {
		var oPhoneLegendItem = new sap.m.StandardListItem({
			icon : this._oShowLegendButton.getIcon(),
			title : this.resBundle.getText("CHARTCONTAINER_LEGEND"),
			customData : [new sap.ui.core.CustomData({
				key : 'function',
				value : 'legend'
			})]
		});
		this._oAllIconsList.addItem(oPhoneLegendItem);
	}
	if (this.getShowPersonalization()) {
		var oPhonePersonalizationItem = new sap.m.StandardListItem({
			icon : this._oPersonalizationButton.getIcon(),
			title : this.resBundle.getText("CHARTCONTAINER_PERSONALIZE"),
			customData : [new sap.ui.core.CustomData({
				key : 'function',
				value : 'personalization'
			})]
		});
		this._oAllIconsList.addItem(oPhonePersonalizationItem);
	}
	if (this._oZoomInButton.getVisible()) {
		var oPhoneLegendItem = new sap.m.StandardListItem({
			icon : this._oZoomInButton.getIcon(),
			title : this.resBundle.getText("CHARTCONTAINER_ZOOMIN"),
			customData : [new sap.ui.core.CustomData({
				key : 'function',
				value : 'zoomin'
			})]
		});
		this._oAllIconsList.addItem(oPhoneLegendItem);
	}
	if (this._oZoomOutButton.getVisible()) {
		var oPhoneLegendItem = new sap.m.StandardListItem({
			icon : this._oZoomOutButton.getIcon(),
			title : this.resBundle.getText("CHARTCONTAINER_ZOOMOUT"),
			customData : [new sap.ui.core.CustomData({
				key : 'function',
				value : 'zoomout'
			})]
		});
		this._oAllIconsList.addItem(oPhoneLegendItem);
	}
	if (this.getShowFullScreen()) {
		var oPhoneFullscreenItem = new sap.m.StandardListItem({
			icon : this._oFullScreenButton.getIcon(),
			title : this.resBundle.getText("CHARTCONTAINER_FULLSCREEN"),
			customData : [new sap.ui.core.CustomData({
				key : 'function',
				value : 'fullscreen'
			})]
		});
		this._oAllIconsList.addItem(oPhoneFullscreenItem);
	}
};

sap.suite.ui.commons.ChartContainer.prototype._adjustIconsDisplay = function(oEvent) {
//	var isPhone = sap.ui.Device.system.phone;
	//var isTab = sap.ui.Device.system.tablet;
//	var isDesktop = sap.ui.Device.system.desktop;

//	if (!isPhone) { // same behavior for Tablet/Desktop wrt icons.
//	if (this._currentRangeName !== 'Phone') {
		for (var i = 0; i < this._customIconsAll.length; i++ )	{
			this._oToolBar.addContent(this._customIconsAll[i]);
		}
		if (this._aChartIcons.length > 3) {
			//show only allChart icon
//			this._oToolBar.addContent(this._oShowAllChartButton);
			
			if(!this._firstTime) {
				this._oChartSegmentedButton.removeAllButtons();
				for (var iChart = 0; iChart < this._aChartIcons.length; iChart++) {
					this._oChartSegmentedButton.addButton(this._aChartIcons[iChart]);
				}
				this._oToolBar.addContent(this._oChartSegmentedButton);
			}
		
		} else {
			if(!this._firstTime && this._aChartIcons.length > 1) {
				this._oChartSegmentedButton.removeAllButtons();
				for (var iChart = 0; iChart < this._aChartIcons.length; iChart++) {
//					this._oToolBar.addContent(this._aChartIcons[iChart]);
					this._oChartSegmentedButton.addButton(this._aChartIcons[iChart]);
				}
				this._oToolBar.addContent(this._oChartSegmentedButton);
			}
		}
		if(this.getShowLegendButton()){
			this._oToolBar.addContent(this._oShowLegendButton);
		}
		if (this.getShowPersonalization()) {
			this._oToolBar.addContent(this._oPersonalizationButton);
		}
		if (this.getShowZoom() && (sap.ui.Device.system.desktop)) {
			this._oToolBar.addContent(this._oZoomInButton);
			this._oToolBar.addContent(this._oZoomOutButton);
		}
		if (this.getShowFullScreen()) {
			this._oToolBar.addContent(this._oFullScreenButton); 
		}
/*	} else {
		// add the phone popover
		this._preparePhonePopup();
		this._oToolBar.addContent(this._oPhonePopoverButton);
		// icon for ... is: horizontal-grip or overflow 
	}*/
};

sap.suite.ui.commons.ChartContainer.prototype._adjustSelectorDisplay = function(oEvent) {
	var dimensionSelectors = this._dimSelectorsAll;//this.getDimensionSelectors();
	if (dimensionSelectors.length == 0) {
		this._oViewBy.setVisible(false);
		this._oChartTitle.setVisible(true);
		this._oToolBar.addContent(this._oChartTitle);
		return;
	}
	for (var i = 0; i < dimensionSelectors.length; i++) {
	  if (typeof dimensionSelectors[i].setAutoAdjustWidth == 'function') {
	  	dimensionSelectors[i].setAutoAdjustWidth(true);
	  }
		this._oToolBar.insertContent(dimensionSelectors[i], i);		
//		this._oToolBar.addContent(dimensionSelectors[i]);
	};
	
/*	
	if (dimensionSelectors.length == 0) {
		this._oViewBy.setVisible(false);
		this._oChartTitle.setVisible(true);
		this._oToolBar.addContent(this._oChartTitle);
	} else {
		this._oChartTitle.setVisible(false);
		if (dimensionSelectors.length == 1) {
			this._oViewBy.setVisible(false);
			this._oToolBar.insertContent(dimensionSelectors[0], 0);
		} else {
			if ((this._currentRangeName === 'Phone') || (this._currentRangeName === 'Tablet')
					|| ((this._currentRangeName === 'Desktop') && (dimensionSelectors.length > 3))) {
				this._oViewBy.setVisible(true);
				this._oToolBar.addContent(this._oViewBy);
				this._oViewByPopover.removeAllContent();
				this._oViewByDialog.removeAllContent();
				for (var i = 0; i < dimensionSelectors.length; i++) {
					if (dimensionSelectors[i] instanceof sap.m.Select) {
						dimensionSelectors[i].setWidth("100%");
						dimensionSelectors[i].setAutoAdjustWidth(false);
					}
					if (this._currentRangeName === 'Phone') {
						this._oViewByDialog.addContent(dimensionSelectors[i]);
					} else {
						this._oViewByPopover.addContent(dimensionSelectors[i]);
					}
				}
			} else {
				this._oViewBy.setVisible(false);
				if (this._oViewByPopover.getDomRef()) {
					this._oViewByPopover.getDomRef().remove();
				}
				if (this._oViewByDialog.getDomRef()) {
					this._oViewByDialog.getDomRef().remove();
				}
				for (var i = 0; i < dimensionSelectors.length; i++) {
				  if (typeof dimensionSelectors[i].setAutoAdjustWidth == 'function') {
				  	dimensionSelectors[i].setAutoAdjustWidth(true);
				  }
					this._oToolBar.insertContent(dimensionSelectors[i], i);
				}
			}
		}
	}
*/
};

sap.suite.ui.commons.ChartContainer.prototype._showViewByPopover = function(oEvent) {
	if (this._currentRangeName === 'Phone') {
		this._oViewByDialog.open();
	} else {
		this._oViewByPopover.openBy(this._oViewBy);
	}
};

sap.suite.ui.commons.ChartContainer.prototype._adjustDisplay = function(oEvent) {
	this._oToolBar.removeAllContent();
	this._adjustSelectorDisplay(oEvent);
	this._oToolBar.addContent(new sap.m.ToolbarSpacer());
	this._adjustIconsDisplay(oEvent);
};

sap.suite.ui.commons.ChartContainer.prototype.setSelectorGroupLabel = function(selectorGroupLabel) {
	this.setProperty("selectorGroupLabel", selectorGroupLabel, true);
	this._oViewBy.setText(selectorGroupLabel);
	this._oViewByPopover.setTitle(selectorGroupLabel);
	this._oViewByDialog.setTitle(selectorGroupLabel);
};

sap.suite.ui.commons.ChartContainer.prototype._handleMediaChange = function(oEvent) {
	this._currentRangeName = sap.ui.Device.media.getCurrentRange(sap.ui.Device.media.RANGESETS.SAP_STANDARD).name;
	this._adjustDisplay(oEvent);
};

sap.suite.ui.commons.ChartContainer.prototype._zoom = function(zoomin) {
	var oChart = this.getSelectedChart().getContent();
	if (oChart instanceof sap.viz.ui5.controls.VizFrame) {
		if (zoomin) {
			oChart.zoom({'direction': 'in'});
		} else {
			oChart.zoom({'direction': 'out'});
		}
	}
	if(zoomin){
		this.fireCustomZoomInPress();
	} else {
		this.fireCustomZoomOutPress();
	}
};

sap.suite.ui.commons.ChartContainer.prototype.exit = function() {
	sap.ui.Device.media.detachHandler(this._handleMediaChange, this, sap.ui.Device.media.RANGESETS.SAP_STANDARD);
	if (this._oFullScreenButton) {
		this._oFullScreenButton.destroy();
		this._oFullScreenButton = undefined;
	}
	if (this._oPopup) {
		this._oPopup.destroy();
		this._oPopup = undefined;
	}
	if (this._oShowLegendButton) {
		this._oShowLegendButton.destroy();
		this._oShowLegendButton = undefined;
	}
	if (this._oShowAllChartButton) {
		this._oShowAllChartButton.destroy();
		this._oShowAllChartButton = undefined;
	}
	if (this._oPhonePopoverButton) {
		this._oPhonePopoverButton.destroy();
		this._oPhonePopoverButton = undefined;
	}
	if (this._oPersonalizationButton) {
		this._oPersonalizationButton.destroy();
		this._oPersonalizationButton = undefined;
	}
	if (this._oActiveChartButton) {
		this._oActiveChartButton.destroy();
		this._oActiveChartButton = undefined;
	}
	if (this._oAllChartList) {
		this._oAllChartList.destroy();
		this._oAllChartList = undefined;
	}
	if (this._oAllIconsList) {
		this._oAllIconsList.destroy();
		this._oAllIconsList = undefined;
	}
	if (this._oShowAllChartPopover) {
		this._oShowAllChartPopover.destroy();
		this._oShowAllChartPopover = undefined;
	}
/*	if (this._oPhonePopover) {
		this._oPhonePopover.destroy();
		this._oPhonePopover = undefined;
	}*/
	if (this._oChartSegmentedButton) {
		this._oChartSegmentedButton.destroy();
		this._oChartSegmentedButton = undefined;
	}
	if (this._oSelectedChart) {
		this._oSelectedChart.destroy();
		this._oSelectedChart = undefined;
	}
	if (this._oViewBy) {
		this._oViewBy.destroy();
		this._oViewBy = undefined;
	}
	if (this._oViewByPopover) {
		this._oViewByPopover.destroy();
		this._oViewByPopover = undefined;
	}
	if (this._oViewByDialog) {
		this._oViewByDialog.destroy();
		this._oViewByDialog = undefined;
	}
	if (this._oPhoneDialog) {
		this._oPhoneDialog.destroy();
		this._oPhoneDialog = undefined;
	}
	if (this._oToolBar) {
		this._oToolBar.destroy();
		this._oToolBar = undefined;
	}
	if (jQuery.device.is.desktop && this.sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	} else {
		sap.ui.Device.orientation.detachHandler(this._performHeightChanges, this);
		sap.ui.Device.resize.detachHandler(this._performHeightChanges, this);
	}
	if (this._oZoomInButton) {
		this._oZoomInButton.destroy();
		this._oZoomInButton = undefined;
	}
	if (this._oZoomOutButton) {
		this._oZoomOutButton.destroy();
		this._oZoomOutButton = undefined;
	}
	
};
