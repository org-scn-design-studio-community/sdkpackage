/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.BulletChart.
jQuery.sap.declare("sap.suite.ui.commons.BulletChart");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new BulletChart.
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
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: sap.suite.ui.commons.InfoTileSize.Auto)</li>
 * <li>{@link #getMode mode} : sap.suite.ui.commons.BulletChartMode (default: sap.suite.ui.commons.BulletChartMode.Actual)</li>
 * <li>{@link #getScale scale} : string</li>
 * <li>{@link #getForecastValue forecastValue} : float</li>
 * <li>{@link #getTargetValue targetValue} : float</li>
 * <li>{@link #getMinValue minValue} : float</li>
 * <li>{@link #getMaxValue maxValue} : float</li>
 * <li>{@link #getShowActualValue showActualValue} : boolean (default: true)</li>
 * <li>{@link #getShowDeltaValue showDeltaValue} : boolean (default: false)</li>
 * <li>{@link #getShowTargetValue showTargetValue} : boolean (default: true)</li>
 * <li>{@link #getShowValueMarker showValueMarker} : boolean (default: false)</li>
 * <li>{@link #getActualValueLabel actualValueLabel} : string</li>
 * <li>{@link #getDeltaValueLabel deltaValueLabel} : string</li>
 * <li>{@link #getTargetValueLabel targetValueLabel} : string</li>
 * <li>{@link #getWidth width} : string</li>
 * <li>{@link #getScaleColor scaleColor} : sap.suite.ui.commons.CommonBackground (default: sap.suite.ui.commons.CommonBackground.MediumLight)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getActual actual} : sap.suite.ui.commons.BulletChartData</li>
 * <li>{@link #getThresholds thresholds} : sap.suite.ui.commons.BulletChartData[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.BulletChart#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control shows a bullet chart.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.BulletChart
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.BulletChart", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"size" : {type : "sap.suite.ui.commons.InfoTileSize", group : "Misc", defaultValue : sap.suite.ui.commons.InfoTileSize.Auto},
		"mode" : {type : "sap.suite.ui.commons.BulletChartMode", group : "Misc", defaultValue : sap.suite.ui.commons.BulletChartMode.Actual},
		"scale" : {type : "string", group : "Misc", defaultValue : null},
		"forecastValue" : {type : "float", group : "Misc", defaultValue : null},
		"targetValue" : {type : "float", group : "Misc", defaultValue : null},
		"minValue" : {type : "float", group : "Misc", defaultValue : null},
		"maxValue" : {type : "float", group : "Misc", defaultValue : null},
		"showActualValue" : {type : "boolean", group : "Misc", defaultValue : true},
		"showDeltaValue" : {type : "boolean", group : "Misc", defaultValue : false},
		"showTargetValue" : {type : "boolean", group : "Misc", defaultValue : true},
		"showValueMarker" : {type : "boolean", group : "Misc", defaultValue : false},
		"actualValueLabel" : {type : "string", group : "Misc", defaultValue : null},
		"deltaValueLabel" : {type : "string", group : "Misc", defaultValue : null},
		"targetValueLabel" : {type : "string", group : "Misc", defaultValue : null},
		"width" : {type : "string", group : "Misc", defaultValue : null},
		"scaleColor" : {type : "sap.suite.ui.commons.CommonBackground", group : "Misc", defaultValue : sap.suite.ui.commons.CommonBackground.MediumLight}
	},
	aggregations : {
		"actual" : {type : "sap.suite.ui.commons.BulletChartData", multiple : false}, 
		"thresholds" : {type : "sap.suite.ui.commons.BulletChartData", multiple : true, singularName : "threshold"}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.BulletChart with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.BulletChart.extend
 * @function
 */

sap.suite.ui.commons.BulletChart.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>size</code>.
 * Updates the size of the chart. If not set then the default size is applied based on the device tile.
 *
 * Default value is <code>Auto</code>
 *
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * @name sap.suite.ui.commons.BulletChart#getSize
 * @function
 */

/**
 * Setter for property <code>size</code>.
 *
 * Default value is <code>Auto</code> 
 *
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#setSize
 * @function
 */


/**
 * Getter for property <code>mode</code>.
 * Specifies whether to display the actual value itself or delta between the actual value and the target value. If not set, the default mode displays the actual value.
 *
 * Default value is <code>Actual</code>
 *
 * @return {sap.suite.ui.commons.BulletChartMode} the value of property <code>mode</code>
 * @public
 * @since 1.23
 * @name sap.suite.ui.commons.BulletChart#getMode
 * @function
 */

/**
 * Setter for property <code>mode</code>.
 *
 * Default value is <code>Actual</code> 
 *
 * @param {sap.suite.ui.commons.BulletChartMode} oMode  new value for property <code>mode</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @since 1.23
 * @name sap.suite.ui.commons.BulletChart#setMode
 * @function
 */


/**
 * Getter for property <code>scale</code>.
 * The scaling suffix.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>scale</code>
 * @public
 * @name sap.suite.ui.commons.BulletChart#getScale
 * @function
 */

/**
 * Setter for property <code>scale</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sScale  new value for property <code>scale</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#setScale
 * @function
 */


/**
 * Getter for property <code>forecastValue</code>.
 * The forecast value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>forecastValue</code>
 * @public
 * @since 1.21
 * @name sap.suite.ui.commons.BulletChart#getForecastValue
 * @function
 */

/**
 * Setter for property <code>forecastValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fForecastValue  new value for property <code>forecastValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @since 1.21
 * @name sap.suite.ui.commons.BulletChart#setForecastValue
 * @function
 */


/**
 * Getter for property <code>targetValue</code>.
 * The target value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>targetValue</code>
 * @public
 * @name sap.suite.ui.commons.BulletChart#getTargetValue
 * @function
 */

/**
 * Setter for property <code>targetValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fTargetValue  new value for property <code>targetValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#setTargetValue
 * @function
 */


/**
 * Getter for property <code>minValue</code>.
 * If set, defines the left scale value for the bar chart.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>minValue</code>
 * @public
 * @name sap.suite.ui.commons.BulletChart#getMinValue
 * @function
 */

/**
 * Setter for property <code>minValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fMinValue  new value for property <code>minValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#setMinValue
 * @function
 */


/**
 * Getter for property <code>maxValue</code>.
 * If set, defines the right scale value for the bar chart.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>maxValue</code>
 * @public
 * @name sap.suite.ui.commons.BulletChart#getMaxValue
 * @function
 */

/**
 * Setter for property <code>maxValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fMaxValue  new value for property <code>maxValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#setMaxValue
 * @function
 */


/**
 * Getter for property <code>showActualValue</code>.
 * If set to true, shows numeric actual value. This property only works in Actual mode.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showActualValue</code>
 * @public
 * @name sap.suite.ui.commons.BulletChart#getShowActualValue
 * @function
 */

/**
 * Setter for property <code>showActualValue</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowActualValue  new value for property <code>showActualValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#setShowActualValue
 * @function
 */


/**
 * Getter for property <code>showDeltaValue</code>.
 * If set to true, shows the calculated delta value instead of the numeric actual value regardless of the showActualValue setting. This property works only in the Delta mode.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showDeltaValue</code>
 * @public
 * @since 1.23
 * @name sap.suite.ui.commons.BulletChart#getShowDeltaValue
 * @function
 */

/**
 * Setter for property <code>showDeltaValue</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowDeltaValue  new value for property <code>showDeltaValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @since 1.23
 * @name sap.suite.ui.commons.BulletChart#setShowDeltaValue
 * @function
 */


/**
 * Getter for property <code>showTargetValue</code>.
 * If set to true, shows numeric target value.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showTargetValue</code>
 * @public
 * @name sap.suite.ui.commons.BulletChart#getShowTargetValue
 * @function
 */

/**
 * Setter for property <code>showTargetValue</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowTargetValue  new value for property <code>showTargetValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#setShowTargetValue
 * @function
 */


/**
 * Getter for property <code>showValueMarker</code>.
 * If set to true, shows the value marker.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showValueMarker</code>
 * @public
 * @since 1.23
 * @name sap.suite.ui.commons.BulletChart#getShowValueMarker
 * @function
 */

/**
 * Setter for property <code>showValueMarker</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowValueMarker  new value for property <code>showValueMarker</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @since 1.23
 * @name sap.suite.ui.commons.BulletChart#setShowValueMarker
 * @function
 */


/**
 * Getter for property <code>actualValueLabel</code>.
 * If set, displays a specified label instead of the numeric actual value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>actualValueLabel</code>
 * @public
 * @name sap.suite.ui.commons.BulletChart#getActualValueLabel
 * @function
 */

/**
 * Setter for property <code>actualValueLabel</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sActualValueLabel  new value for property <code>actualValueLabel</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#setActualValueLabel
 * @function
 */


/**
 * Getter for property <code>deltaValueLabel</code>.
 * If set, displays a specified label instead of the calculated numeric delta value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>deltaValueLabel</code>
 * @public
 * @since 1.23
 * @name sap.suite.ui.commons.BulletChart#getDeltaValueLabel
 * @function
 */

/**
 * Setter for property <code>deltaValueLabel</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDeltaValueLabel  new value for property <code>deltaValueLabel</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @since 1.23
 * @name sap.suite.ui.commons.BulletChart#setDeltaValueLabel
 * @function
 */


/**
 * Getter for property <code>targetValueLabel</code>.
 * If set, displays a specified label instead of the numeric target value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>targetValueLabel</code>
 * @public
 * @name sap.suite.ui.commons.BulletChart#getTargetValueLabel
 * @function
 */

/**
 * Setter for property <code>targetValueLabel</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTargetValueLabel  new value for property <code>targetValueLabel</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#setTargetValueLabel
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The width of the chart. If it is not set, the size of the control is defined by the size property.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>width</code>
 * @public
 * @since 1.22
 * @name sap.suite.ui.commons.BulletChart#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @since 1.22
 * @name sap.suite.ui.commons.BulletChart#setWidth
 * @function
 */


/**
 * Getter for property <code>scaleColor</code>.
 * Background color of the scale.
 *
 * Default value is <code>MediumLight</code>
 *
 * @return {sap.suite.ui.commons.CommonBackground} the value of property <code>scaleColor</code>
 * @public
 * @since 1.23
 * @name sap.suite.ui.commons.BulletChart#getScaleColor
 * @function
 */

/**
 * Setter for property <code>scaleColor</code>.
 *
 * Default value is <code>MediumLight</code> 
 *
 * @param {sap.suite.ui.commons.CommonBackground} oScaleColor  new value for property <code>scaleColor</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @since 1.23
 * @name sap.suite.ui.commons.BulletChart#setScaleColor
 * @function
 */


/**
 * Getter for aggregation <code>actual</code>.<br/>
 * The bullet chart actual data.
 * 
 * @return {sap.suite.ui.commons.BulletChartData}
 * @public
 * @name sap.suite.ui.commons.BulletChart#getActual
 * @function
 */


/**
 * Setter for the aggregated <code>actual</code>.
 * @param {sap.suite.ui.commons.BulletChartData} oActual
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#setActual
 * @function
 */
	

/**
 * Destroys the actual in the aggregation 
 * named <code>actual</code>.
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#destroyActual
 * @function
 */


/**
 * Getter for aggregation <code>thresholds</code>.<br/>
 * The bullet chart thresholds data.
 * 
 * @return {sap.suite.ui.commons.BulletChartData[]}
 * @public
 * @name sap.suite.ui.commons.BulletChart#getThresholds
 * @function
 */


/**
 * Inserts a threshold into the aggregation named <code>thresholds</code>.
 *
 * @param {sap.suite.ui.commons.BulletChartData}
 *          oThreshold the threshold to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the threshold should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the threshold is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the threshold is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#insertThreshold
 * @function
 */

/**
 * Adds some threshold <code>oThreshold</code> 
 * to the aggregation named <code>thresholds</code>.
 *
 * @param {sap.suite.ui.commons.BulletChartData}
 *            oThreshold the threshold to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#addThreshold
 * @function
 */

/**
 * Removes an threshold from the aggregation named <code>thresholds</code>.
 *
 * @param {int | string | sap.suite.ui.commons.BulletChartData} vThreshold the threshold to remove or its index or id
 * @return {sap.suite.ui.commons.BulletChartData} the removed threshold or null
 * @public
 * @name sap.suite.ui.commons.BulletChart#removeThreshold
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>thresholds</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.BulletChartData[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.BulletChart#removeAllThresholds
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.BulletChartData</code> in the aggregation named <code>thresholds</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.BulletChartData}
 *            oThreshold the threshold whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.BulletChart#indexOfThreshold
 * @function
 */
	

/**
 * Destroys all the thresholds in the aggregation 
 * named <code>thresholds</code>.
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#destroyThresholds
 * @function
 */


/**
 * The event is fired when the user chooses the bullet chart.
 *
 * @name sap.suite.ui.commons.BulletChart#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.BulletChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.BulletChart</code>.<br/> itself. 
 *  
 * The event is fired when the user chooses the bullet chart.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.BulletChart</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.BulletChart</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.BulletChart#firePress
 * @function
 */

// Start of sap/suite/ui/commons/BulletChart.js
///**
// * This file defines behavior for the control,
// */

sap.suite.ui.commons.BulletChart.prototype.init = function(){
	this._oRb = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
	this.setTooltip("{AltText}");
};

/**
 * Calculates the width in percents of chart elements in accordance with provided chart values.
 *
 * @returns {Object} object that contains calculated values for actual value, target value, thresholds and their colors.
 * @private
 */
sap.suite.ui.commons.BulletChart.prototype._calculateChartData = function() {
	var fScaleWidthPct = 98;
    var aData = this.getThresholds();
    var aThresholds = [];
    var fTarget = this.getTargetValue();
    var fForecast = this.getForecastValue();
    var fActual = this.getActual() && this.getActual().getValue() ? this.getActual().getValue() : 0;
    var aValues = [];
    var fLowestValue = 0;
    var fHighestValue = 0;

    if (this.getActual() && this.getActual()._isValueSet) {
    	aValues.push(fActual);
    }

    if (this._isForecastValueSet) {
    	aValues.push(fForecast);
    }

    if (this._isTargetValueSet) {
    	aValues.push(fTarget);
    }

    if (this._isMinValueSet) {
    	aValues.push(this.getMinValue());
    }

    if (this._isMaxValueSet) {
    	aValues.push(this.getMaxValue());
    }
    
    for (var i=0; i<aData.length; i++) {
        aValues.push(aData[i].getValue());
    }
    
    var fTotal = 0;
    
    if (aValues.length>0) {
    	fLowestValue = fHighestValue = aValues[0];
	    for (var j=0; j<aValues.length; j++){
	    	if (aValues[j] < fLowestValue) {
	    		fLowestValue = aValues[j];
	    	}
	    	if (aValues[j] > fHighestValue) {
	    		fHighestValue = aValues[j];
	    	}
	    }
	
	    fHighestValue = (fHighestValue < 0 && fHighestValue < 3*(fLowestValue-fHighestValue)) ? 0 : fHighestValue;
	    fLowestValue = (fLowestValue > 0 && fLowestValue > 3*(fHighestValue-fLowestValue)) ? 0 : fLowestValue;
	    
	    fTotal = fHighestValue - fLowestValue;
	
	    for (var i=0; i<aData.length; i++) {
	        aThresholds[i] = {color: aData[i].getColor(), valuePct: (!aData[i]._isValueSet || fTotal==0) ? 0 : ((aData[i].getValue() - fLowestValue) * fScaleWidthPct / fTotal).toFixed(2)};
	    }
    }

    return {
        actualValuePct: (!this.getActual() || !this.getActual()._isValueSet || fTotal==0) ? 0 : ( .05 + (fActual - fLowestValue) * fScaleWidthPct / fTotal).toFixed(2),
        targetValuePct: (!this._isTargetValueSet || fTotal==0) ? 0 : ((fTarget - fLowestValue) * fScaleWidthPct / fTotal).toFixed(2),
        forecastValuePct: (!this._isForecastValueSet || fTotal==0) ? 0 : ((fForecast - fLowestValue) * fScaleWidthPct / fTotal).toFixed(2),
        thresholdsPct: aThresholds,
        fScaleWidthPct: fScaleWidthPct
    };
};

/**
 * Calculates the number of digits after the decimal point.
 *
 * @param {float} fValue float value
 * @returns int number of digits after the decimal point in fValue.
 * @private
 */
sap.suite.ui.commons.BulletChart.prototype._digitsAfterDecimalPoint = function(fValue) {
	var sAfter = (""+fValue).match(/[.,](\d+)/g);
	return (sAfter) ? (""+sAfter).length - 1 : 0;
};


/**
 * Calculates the delta between actual value and threshold.
 *
 * @returns float value of delta between actual value and threshold.
 * @private
 */
sap.suite.ui.commons.BulletChart.prototype._calculateDeltaValue = function() {
	if (!this.getActual()._isValueSet || !this._isTargetValueSet) {
		return 0;
	} else {
		var fActual = this.getActual().getValue();
		var fTarget = this.getTargetValue();
		return Math.abs(fActual - fTarget).toFixed(Math.max(this._digitsAfterDecimalPoint(fActual), this._digitsAfterDecimalPoint(fTarget)));
	}
};

/**
 * Setter for property <code>minValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fMinValue  new value for property <code>minValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#setMinValue
 * @function
 */
 sap.suite.ui.commons.BulletChart.prototype.setMinValue = function(fMinValue, bSuppressInvalidate) {
	 this._isMinValueSet = this._fnIsNumber(fMinValue);
	 return this.setProperty("minValue", this._isMinValueSet ? fMinValue : NaN, bSuppressInvalidate);
 };
 
/**
 * Setter for property <code>maxValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fMaxValue  new value for property <code>maxValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#setMaxValue
 * @function
 */
 sap.suite.ui.commons.BulletChart.prototype.setMaxValue = function(fMaxValue, bSuppressInvalidate) {
	 this._isMaxValueSet = this._fnIsNumber(fMaxValue);
	 return this.setProperty("maxValue", this._isMaxValueSet ? fMaxValue : NaN, bSuppressInvalidate);
 };
 
/**
 * Setter for property <code>targetValue</code>.
 *
 * Default value is <code>undefined</code> 
 *
 * @param {float} fTargetValue  new value for property <code>targetValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#setTargetValue
 * @function
 */
 sap.suite.ui.commons.BulletChart.prototype.setTargetValue = function(fTargetValue, bSuppressInvalidate) {
	 this._isTargetValueSet = this._fnIsNumber(fTargetValue);
	 return this.setProperty("targetValue", this._isTargetValueSet ? fTargetValue : NaN, bSuppressInvalidate);
 };

/**
 * Setter for property <code>forecastValue</code>.
 *
 * Default value is <code>undefined</code> 
 *
 * @param {float} fForecastValue  new value for property <code>forecastValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.BulletChart#setForecastValue
 * @function
 */
 sap.suite.ui.commons.BulletChart.prototype.setForecastValue = function(fForecastValue, bSuppressInvalidate) {
	 this._isForecastValueSet = this._fnIsNumber(fForecastValue);
	 return this.setProperty("forecastValue", this._isForecastValueSet ? fForecastValue : NaN, bSuppressInvalidate);
 };

 sap.suite.ui.commons.BulletChart.prototype.ontap = function(oEvent) {
     if (sap.ui.Device.browser.internet_explorer) {
         this.$().focus();
     }
     this.firePress();
};

sap.suite.ui.commons.BulletChart.prototype.onkeydown = function(oEvent) {
    if (oEvent.which == jQuery.sap.KeyCodes.SPACE) {
        oEvent.preventDefault();
    }
};

sap.suite.ui.commons.BulletChart.prototype.onkeyup = function(oEvent) {
    if (oEvent.which == jQuery.sap.KeyCodes.ENTER || oEvent.which == jQuery.sap.KeyCodes.SPACE) {
        this.firePress();
        oEvent.preventDefault();
    }
};
 
sap.suite.ui.commons.BulletChart.prototype._fnIsNumber = function(n) {
    return typeof n == 'number' && !isNaN(n) && isFinite(n);
};
 
sap.suite.ui.commons.BulletChart.prototype.attachEvent = function(sEventId, oData, fnFunction, oListener) {
	sap.ui.core.Control.prototype.attachEvent.call(this, sEventId, oData, fnFunction, oListener);
	if (this.hasListeners("press")) {
		this.$().attr("tabindex", 0).addClass("sapSuiteUiCommonsPointer");
	}
	return this;
};

sap.suite.ui.commons.BulletChart.prototype.detachEvent = function(sEventId, fnFunction, oListener) {
	sap.ui.core.Control.prototype.detachEvent.call(this, sEventId, fnFunction, oListener);
	if (!this.hasListeners("press")) {
		this.$().removeAttr("tabindex").removeClass("sapSuiteUiCommonsPointer");
	}
	return this;
}; 

//sap.suite.ui.commons.BulletChart.prototype.onBeforeRendering = function() {
//
//	if(!this.getEntitySet()) {
//		return;
//	}
//
//	var oModel = this.getModel();
//	var oMetaData = oModel.getServiceMetadata();
//	var aAnnos = oMetaData.dataServices.schema[0].annotations;
//	var sNameSpace = oMetaData.dataServices.schema[0].namespace;
//	var sEntType = sNameSpace + "." + this.getEntitySet();
//	
//	for(var i = 0; i < aAnnos.length; i++) {
//		var oAnno = aAnnos[i];
//		
//		if(sEntType === oAnno.target) {
//			
//			for(var j = 0; j < oAnno.annotation.length; j++) {
//				if(oAnno.annotation[j].term === "UI.DataPoint") {
//
//					if(oAnno.annotation[j].record.propertyValue && oAnno.annotation[j].record.propertyValue.length > 0) {
//						for(var m = 0; m < oAnno.annotation[j].record.propertyValue.length; m++) {
//							var oProp = oAnno.annotation[j].record.propertyValue[m];
//							switch(oProp.property) {
//								case "Value" :
//									if(this.getActual())
//										break;
//									
//									var oActual = new sap.suite.ui.commons.BulletChartData();
//									oActual.bindProperty("value", oProp.path);
//									this.setActual(oActual);
//									break;
//							}
//							
//						}
//						
//					}
//					
//				}
//				
//			}
//			
//		}
//		
//	}
//	
//};

sap.suite.ui.commons.BulletChart.prototype.onAfterRendering = function() {
	if (this._sBarResizeHandlerId) {
		sap.ui.core.ResizeHandler.deregister(this._sBarResizeHandlerId);
	}
	
    var oHeader = jQuery.sap.domById(this.getId() + "-chart-bar");
    this._sBarResizeHandlerId = sap.ui.core.ResizeHandler.register(oHeader,  jQuery.proxy(this._adjustLabelsPos, this));
    this._adjustLabelsPos();
    if (this.getShowValueMarker()) {
    	this._adjustValueToMarker();
    }
};

sap.suite.ui.commons.BulletChart.prototype.exit = function() {
	sap.ui.core.ResizeHandler.deregister(this._sBarResizeHandlerId);
};

sap.suite.ui.commons.BulletChart.prototype._adjustLabelsPos = function() {
	var bRtl = sap.ui.getCore().getConfiguration().getRTL();
	var oTBarVal = jQuery.sap.byId(this.getId() + "-bc-target-bar-value");
	var oChartBar = jQuery.sap.byId(this.getId() + "-chart-bar");
	var fFullWidth = oChartBar.width();

	if (fFullWidth) {
		var fTValWidth = 0; 
		if (oTBarVal && oTBarVal.offset()) {
			fTValWidth = oTBarVal.offset().left - oChartBar.offset().left;
			if (bRtl) {
				fTValWidth = fFullWidth - fTValWidth;
			}
			this._adjustLabelPos(jQuery.sap.byId(this.getId() + "-bc-target-value"), fFullWidth, fTValWidth, bRtl);
		}	
	
		var oValMarker = jQuery.sap.byId(this.getId() + "-bc-bar-value-marker");
		if (oValMarker && oValMarker.offset()) {
			var fAValWidth = oValMarker.offset().left - oChartBar.offset().left;
			if (bRtl) {
				fAValWidth = fFullWidth - fAValWidth;
			}
			
			if ((sap.suite.ui.commons.BulletChartMode.Delta == this.getMode())) {
				fAValWidth = (fAValWidth + fTValWidth) / 2;
			}
			
			this._adjustLabelPos(jQuery.sap.byId(this.getId() + "-bc-item-value"), fFullWidth, fAValWidth, bRtl);
		}
	}
};

sap.suite.ui.commons.BulletChart.prototype._adjustLabelPos = function(oLabel, fFullWidth, fOffset, bRtl) {
	var sOrientation = bRtl ? "right" : "left";
	var fLabelWidth = oLabel.width();
	if (fLabelWidth > fFullWidth) { 
		oLabel.css("width", "" + fFullWidth + "px");
		oLabel.css(sOrientation, "0");
	} else { 
		var fLabelLeft = fOffset - .5 * fLabelWidth;
		if (fLabelLeft < 0) {
			fLabelLeft = 0;
		}
		
		if (fLabelLeft + fLabelWidth > fFullWidth) {
			fLabelLeft = fFullWidth - fLabelWidth;
		}
		oLabel.css(sOrientation, fLabelLeft);
		oLabel.css("width", "" + (parseInt(fLabelWidth) + 1) + "px");
	}
};

sap.suite.ui.commons.BulletChart.prototype.getLocalizedColorMeaning = function(sColor) {
	return this._oRb.getText(("SEMANTIC_COLOR_"+sColor).toUpperCase());
};

sap.suite.ui.commons.BulletChart.prototype.getAltText = function() {
	var bIsActualSet = this.getActual() && this.getActual()._isValueSet;
	var sScale = this.getScale();
	var sTargetValueLabel = this.getTargetValueLabel();
	var sMeaning = !this.getActual() || !this.getActual().getColor() ? "" : this.getLocalizedColorMeaning(this.getActual().getColor());
	
	var sAltText = "";
	
	if ("Delta" == this.getMode()) {
		if (this._isTargetValueSet && bIsActualSet) {
			var sDeltaValueLabel = this.getDeltaValueLabel();
			var sDValToShow = (sDeltaValueLabel) ? sDeltaValueLabel : "" + this._calculateDeltaValue();
			sAltText += this._oRb.getText("BULLETCHART_DELTA_TOOLTIP", [sDValToShow + sScale, sMeaning]);
        }
    } else {
    	if (bIsActualSet) {
    		var sActualValueLabel = this.getActualValueLabel();
    		var sAValToShow = (sActualValueLabel) ? sActualValueLabel : "" + this.getActual().getValue();
    		sAltText += this._oRb.getText("BULLETCHART_ACTUAL_TOOLTIP", [sAValToShow + sScale, sMeaning]);
   		}
   		
   		if (this._isForecastValueSet) {
   			sAltText += (this._isForecastValueSet) ? "\n" + this._oRb.getText("BULLETCHART_FORECAST_TOOLTIP", [this.getForecastValue() + sScale, sMeaning]) : "";
   		}
    }

    if (this._isTargetValueSet) {
    	var sTValToShow = (sTargetValueLabel) ? sTargetValueLabel : "" + this.getTargetValue();
    	sAltText += "\n" + this._oRb.getText("BULLETCHART_TARGET_TOOLTIP", [sTValToShow + sScale]); 
    }

    var aThresholds = this.getThresholds().sort(function(oFirst, oSecond) { return oFirst.getValue() - oSecond.getValue(); });

	for (var i = 0; i < aThresholds.length; i++) {
		var oThreshold = aThresholds[i];
		sAltText += "\n" + this._oRb.getText("BULLETCHART_THRESHOLD_TOOLTIP", [oThreshold.getValue() + this.getScale(), this.getLocalizedColorMeaning(oThreshold.getColor())]);
	}

	return sAltText;
};

sap.suite.ui.commons.BulletChart.prototype.getTooltip_AsString  = function() {
	var oTooltip = this.getTooltip();
	var sTooltip = this.getAltText();
	
	if(typeof oTooltip === "string" || oTooltip instanceof String) {
		sTooltip = oTooltip.split("{AltText}").join(sTooltip).split("((AltText))").join(sTooltip);
		return sTooltip;
	}
	return oTooltip ? oTooltip : "";
};

sap.suite.ui.commons.BulletChart.prototype._adjustValueToMarker = function() {
	var oValue = jQuery.sap.byId(this.getId() + "-bc-bar-value");
	var oMarker = jQuery.sap.byId(this.getId() + "-bc-bar-value-marker");
	if (oValue.offset() && oMarker.offset()) {
		var fValueWidth = oValue.width();
		var fValueLeft = oValue.offset().left;
		var fMarkerWidth = oMarker.width();
		var fMarkerLeft = oMarker.offset().left; 
		
		if (sap.ui.getCore().getConfiguration().getRTL()) {
			if (fMarkerLeft < fValueLeft) { // browser's subpixel problem fix
				oMarker.css("right", "");
				oMarker.offset({left: fValueLeft});
			} 
			if (fMarkerLeft+fMarkerWidth > fValueLeft+fValueWidth) { // bar value is less than marker min-width
				oMarker.css("right", "");
				oMarker.offset({left: fValueLeft + fValueWidth - fMarkerWidth});
			}
		} else {
			if (fMarkerLeft < fValueLeft) { // bar value is less than marker min-width
				oMarker.offset({left: fValueLeft});
			}
			if (fMarkerLeft+fMarkerWidth > fValueLeft+fValueWidth) { // browser's subpixel problem fix
				oValue.width(fMarkerLeft+fMarkerWidth-fValueLeft);
			}
		}
	}
};

sap.suite.ui.commons.BulletChart.prototype.clone = function(sIdSuffix, aLocalIds, oOptions) {
	var oClone = sap.ui.core.Control.prototype.clone.apply(this, arguments);
	oClone._isMinValueSet = this._isMinValueSet;
	oClone._isMaxValueSet = this._isMaxValueSet;
	oClone._isForecastValueSet = this._isForecastValueSet;
	oClone._isTargetValueSet = this._isTargetValueSet;
	return oClone;
};
