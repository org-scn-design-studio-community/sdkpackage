/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.MicroAreaChart.
jQuery.sap.declare("sap.suite.ui.commons.MicroAreaChart");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new MicroAreaChart.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '200px')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '190px')</li>
 * <li>{@link #getMaxXValue maxXValue} : float</li>
 * <li>{@link #getMinXValue minXValue} : float</li>
 * <li>{@link #getMaxYValue maxYValue} : float</li>
 * <li>{@link #getMinYValue minYValue} : float</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getChart chart} : sap.suite.ui.commons.MicroAreaChartItem</li>
 * <li>{@link #getMaxThreshold maxThreshold} : sap.suite.ui.commons.MicroAreaChartItem</li>
 * <li>{@link #getInnerMaxThreshold innerMaxThreshold} : sap.suite.ui.commons.MicroAreaChartItem</li>
 * <li>{@link #getInnerMinThreshold innerMinThreshold} : sap.suite.ui.commons.MicroAreaChartItem</li>
 * <li>{@link #getMinThreshold minThreshold} : sap.suite.ui.commons.MicroAreaChartItem</li>
 * <li>{@link #getTarget target} : sap.suite.ui.commons.MicroAreaChartItem</li>
 * <li>{@link #getFirstXLabel firstXLabel} : sap.suite.ui.commons.MicroAreaChartLabel</li>
 * <li>{@link #getFirstYLabel firstYLabel} : sap.suite.ui.commons.MicroAreaChartLabel</li>
 * <li>{@link #getLastXLabel lastXLabel} : sap.suite.ui.commons.MicroAreaChartLabel</li>
 * <li>{@link #getLastYLabel lastYLabel} : sap.suite.ui.commons.MicroAreaChartLabel</li>
 * <li>{@link #getMaxLabel maxLabel} : sap.suite.ui.commons.MicroAreaChartLabel</li>
 * <li>{@link #getMinLabel minLabel} : sap.suite.ui.commons.MicroAreaChartLabel</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.MicroAreaChart#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control displays the history of values as a line mini chart or an area mini chart.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 *
 * @constructor
 * @public
 * @experimental Since version 1.19. 
 * API is not yet finished and might change completely
 * @name sap.suite.ui.commons.MicroAreaChart
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.MicroAreaChart", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '200px'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '190px'},
		"maxXValue" : {type : "float", group : "Misc", defaultValue : null},
		"minXValue" : {type : "float", group : "Misc", defaultValue : null},
		"maxYValue" : {type : "float", group : "Misc", defaultValue : null},
		"minYValue" : {type : "float", group : "Misc", defaultValue : null}
	},
	aggregations : {
		"chart" : {type : "sap.suite.ui.commons.MicroAreaChartItem", multiple : false}, 
		"maxThreshold" : {type : "sap.suite.ui.commons.MicroAreaChartItem", multiple : false}, 
		"innerMaxThreshold" : {type : "sap.suite.ui.commons.MicroAreaChartItem", multiple : false}, 
		"innerMinThreshold" : {type : "sap.suite.ui.commons.MicroAreaChartItem", multiple : false}, 
		"minThreshold" : {type : "sap.suite.ui.commons.MicroAreaChartItem", multiple : false}, 
		"target" : {type : "sap.suite.ui.commons.MicroAreaChartItem", multiple : false}, 
		"firstXLabel" : {type : "sap.suite.ui.commons.MicroAreaChartLabel", multiple : false}, 
		"firstYLabel" : {type : "sap.suite.ui.commons.MicroAreaChartLabel", multiple : false}, 
		"lastXLabel" : {type : "sap.suite.ui.commons.MicroAreaChartLabel", multiple : false}, 
		"lastYLabel" : {type : "sap.suite.ui.commons.MicroAreaChartLabel", multiple : false}, 
		"maxLabel" : {type : "sap.suite.ui.commons.MicroAreaChartLabel", multiple : false}, 
		"minLabel" : {type : "sap.suite.ui.commons.MicroAreaChartLabel", multiple : false}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.MicroAreaChart with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.MicroAreaChart.extend
 * @function
 */

sap.suite.ui.commons.MicroAreaChart.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>width</code>.
 * The width of the chart.
 *
 * Default value is <code>200px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>200px</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * The height of the chart.
 *
 * Default value is <code>190px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>190px</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setHeight
 * @function
 */


/**
 * Getter for property <code>maxXValue</code>.
 * If this property is set it indicates the value X axis ends with.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>maxXValue</code>
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getMaxXValue
 * @function
 */

/**
 * Setter for property <code>maxXValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fMaxXValue  new value for property <code>maxXValue</code>
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setMaxXValue
 * @function
 */


/**
 * Getter for property <code>minXValue</code>.
 * If this property is set it indicates the value X axis starts with.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>minXValue</code>
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getMinXValue
 * @function
 */

/**
 * Setter for property <code>minXValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fMinXValue  new value for property <code>minXValue</code>
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setMinXValue
 * @function
 */


/**
 * Getter for property <code>maxYValue</code>.
 * If this property is set it indicates the value Y axis ends with.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>maxYValue</code>
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getMaxYValue
 * @function
 */

/**
 * Setter for property <code>maxYValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fMaxYValue  new value for property <code>maxYValue</code>
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setMaxYValue
 * @function
 */


/**
 * Getter for property <code>minYValue</code>.
 * If this property is set it indicates the value Y axis starts with.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>minYValue</code>
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getMinYValue
 * @function
 */

/**
 * Setter for property <code>minYValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fMinYValue  new value for property <code>minYValue</code>
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setMinYValue
 * @function
 */


/**
 * Getter for aggregation <code>chart</code>.<br/>
 * The configuration of the actual values line. The color property defines the color of the line. Points are rendered in the same sequence as in this aggregation.
 * 
 * @return {sap.suite.ui.commons.MicroAreaChartItem}
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getChart
 * @function
 */


/**
 * Setter for the aggregated <code>chart</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartItem} oChart
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setChart
 * @function
 */
	

/**
 * Destroys the chart in the aggregation 
 * named <code>chart</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#destroyChart
 * @function
 */


/**
 * Getter for aggregation <code>maxThreshold</code>.<br/>
 * The configuration of the max threshold area. The color property defines the color of the area above the max threshold line. Points are rendered in the same sequence as in this aggregation.
 * 
 * @return {sap.suite.ui.commons.MicroAreaChartItem}
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getMaxThreshold
 * @function
 */


/**
 * Setter for the aggregated <code>maxThreshold</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartItem} oMaxThreshold
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setMaxThreshold
 * @function
 */
	

/**
 * Destroys the maxThreshold in the aggregation 
 * named <code>maxThreshold</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#destroyMaxThreshold
 * @function
 */


/**
 * Getter for aggregation <code>innerMaxThreshold</code>.<br/>
 * The configuration of the upper line of the inner threshold area. The color property defines the color of the area between inner thresholds. For rendering of the inner threshold area, both innerMaxThreshold and innerMinThreshold aggregations must be defined. Points are rendered in the same sequence as in this aggregation.
 * 
 * @return {sap.suite.ui.commons.MicroAreaChartItem}
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getInnerMaxThreshold
 * @function
 */


/**
 * Setter for the aggregated <code>innerMaxThreshold</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartItem} oInnerMaxThreshold
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setInnerMaxThreshold
 * @function
 */
	

/**
 * Destroys the innerMaxThreshold in the aggregation 
 * named <code>innerMaxThreshold</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#destroyInnerMaxThreshold
 * @function
 */


/**
 * Getter for aggregation <code>innerMinThreshold</code>.<br/>
 * The configuration of the bottom line of the inner threshold area. The color property is ignored. For rendering of the inner threshold area, both innerMaxThreshold and innerMinThreshold aggregations must be defined. Points are rendered in the same sequence as in this aggregation.
 * 
 * @return {sap.suite.ui.commons.MicroAreaChartItem}
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getInnerMinThreshold
 * @function
 */


/**
 * Setter for the aggregated <code>innerMinThreshold</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartItem} oInnerMinThreshold
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setInnerMinThreshold
 * @function
 */
	

/**
 * Destroys the innerMinThreshold in the aggregation 
 * named <code>innerMinThreshold</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#destroyInnerMinThreshold
 * @function
 */


/**
 * Getter for aggregation <code>minThreshold</code>.<br/>
 * The configuration of the min threshold area. The color property defines the color of the area below the min threshold line. Points are rendered in the same sequence as in this aggregation.
 * 
 * @return {sap.suite.ui.commons.MicroAreaChartItem}
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getMinThreshold
 * @function
 */


/**
 * Setter for the aggregated <code>minThreshold</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartItem} oMinThreshold
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setMinThreshold
 * @function
 */
	

/**
 * Destroys the minThreshold in the aggregation 
 * named <code>minThreshold</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#destroyMinThreshold
 * @function
 */


/**
 * Getter for aggregation <code>target</code>.<br/>
 * The configuration of the target values line. The color property defines the color of the line. Points are rendered in the same sequence as in this aggregation.
 * 
 * @return {sap.suite.ui.commons.MicroAreaChartItem}
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getTarget
 * @function
 */


/**
 * Setter for the aggregated <code>target</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartItem} oTarget
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setTarget
 * @function
 */
	

/**
 * Destroys the target in the aggregation 
 * named <code>target</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#destroyTarget
 * @function
 */


/**
 * Getter for aggregation <code>firstXLabel</code>.<br/>
 * The label on X axis for the first point of the chart.
 * 
 * @return {sap.suite.ui.commons.MicroAreaChartLabel}
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getFirstXLabel
 * @function
 */


/**
 * Setter for the aggregated <code>firstXLabel</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartLabel} oFirstXLabel
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setFirstXLabel
 * @function
 */
	

/**
 * Destroys the firstXLabel in the aggregation 
 * named <code>firstXLabel</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#destroyFirstXLabel
 * @function
 */


/**
 * Getter for aggregation <code>firstYLabel</code>.<br/>
 * The label on Y axis for the first point of the chart.
 * 
 * @return {sap.suite.ui.commons.MicroAreaChartLabel}
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getFirstYLabel
 * @function
 */


/**
 * Setter for the aggregated <code>firstYLabel</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartLabel} oFirstYLabel
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setFirstYLabel
 * @function
 */
	

/**
 * Destroys the firstYLabel in the aggregation 
 * named <code>firstYLabel</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#destroyFirstYLabel
 * @function
 */


/**
 * Getter for aggregation <code>lastXLabel</code>.<br/>
 * The label on X axis for the last point of the chart.
 * 
 * @return {sap.suite.ui.commons.MicroAreaChartLabel}
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getLastXLabel
 * @function
 */


/**
 * Setter for the aggregated <code>lastXLabel</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartLabel} oLastXLabel
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setLastXLabel
 * @function
 */
	

/**
 * Destroys the lastXLabel in the aggregation 
 * named <code>lastXLabel</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#destroyLastXLabel
 * @function
 */


/**
 * Getter for aggregation <code>lastYLabel</code>.<br/>
 * The label on Y axis for the last point of the chart.
 * 
 * @return {sap.suite.ui.commons.MicroAreaChartLabel}
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getLastYLabel
 * @function
 */


/**
 * Setter for the aggregated <code>lastYLabel</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartLabel} oLastYLabel
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setLastYLabel
 * @function
 */
	

/**
 * Destroys the lastYLabel in the aggregation 
 * named <code>lastYLabel</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#destroyLastYLabel
 * @function
 */


/**
 * Getter for aggregation <code>maxLabel</code>.<br/>
 * The label for the maximum point of the chart.
 * 
 * @return {sap.suite.ui.commons.MicroAreaChartLabel}
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getMaxLabel
 * @function
 */


/**
 * Setter for the aggregated <code>maxLabel</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartLabel} oMaxLabel
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setMaxLabel
 * @function
 */
	

/**
 * Destroys the maxLabel in the aggregation 
 * named <code>maxLabel</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#destroyMaxLabel
 * @function
 */


/**
 * Getter for aggregation <code>minLabel</code>.<br/>
 * The label for the minimum point of the chart.
 * 
 * @return {sap.suite.ui.commons.MicroAreaChartLabel}
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#getMinLabel
 * @function
 */


/**
 * Setter for the aggregated <code>minLabel</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartLabel} oMinLabel
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#setMinLabel
 * @function
 */
	

/**
 * Destroys the minLabel in the aggregation 
 * named <code>minLabel</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#destroyMinLabel
 * @function
 */


/**
 * The event is fired when the user chooses the micro area chart.
 *
 * @name sap.suite.ui.commons.MicroAreaChart#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.MicroAreaChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.MicroAreaChart</code>.<br/> itself. 
 *  
 * The event is fired when the user chooses the micro area chart.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.MicroAreaChart</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.MicroAreaChart</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChart#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.MicroAreaChart#firePress
 * @function
 */


// Start of sap/suite/ui/commons/MicroAreaChart.js
///**
// * This file defines behavior for the control,
// */

sap.suite.ui.commons.MicroAreaChart.prototype._getCssValues = function() {
	this._cssHelper.className = Array.prototype.slice.call(arguments).join(" ");
	var oCsses = window.getComputedStyle(this._cssHelper);
	
	if (oCsses.backgroundColor == undefined) {
		oCsses.backgroundColor = oCsses["background-color"];
	}
	
	return oCsses;
};

sap.suite.ui.commons.MicroAreaChart.prototype._fillThresholdArea = function(c, aPoints1, aPoints2, color) {
	c.beginPath();
	c.moveTo(aPoints1[0].x, aPoints1[0].y);
	
	for(var i = 1, length = aPoints1.length; i < length; i++) {
		c.lineTo(aPoints1[i].x, aPoints1[i].y);
	}
	
	for(var i = aPoints2.length - 1; i >= 0 ; i--) {
		c.lineTo(aPoints2[i].x, aPoints2[i].y);
	}
	
	c.closePath();
	
	c.fillStyle = "white";
	c.fill();
	
	c.fillStyle = color;
	c.fill();
	
	c.lineWidth = 1;
	c.strokeStyle = "white";
	c.stroke();
	
	c.strokeStyle = color;
	c.stroke();
};

sap.suite.ui.commons.MicroAreaChart.prototype._renderLine = function(c, aPoints, d) {
	c.beginPath();
	c.moveTo(aPoints[0].x, aPoints[0].y);
	
	for(var i = 1, length = aPoints.length; i < length; i++) {
		c.lineTo(aPoints[i].x, aPoints[i].y);
	}
	
	c.stroke();
};

sap.suite.ui.commons.MicroAreaChart.prototype.renderTarget = function(c, d) {
	if (d.target.length > 1) {
		var oCsses = this._getCssValues("sapSuiteMacTarget", this.getTarget().getColor());
		c.strokeStyle = oCsses.color;
		c.lineWidth = parseFloat(oCsses.width);
		
		this._renderLine(c, d.target, d);
	} else if (d.target.length == 1) {
		jQuery.sap.log.warning("Target is not rendered because only 1 point was given");
	}
};

sap.suite.ui.commons.MicroAreaChart.prototype.fillMaxThreshold = function(c, d) {
	if (d.maxThreshold.length > 1) {
		var oCsses = this._getCssValues("sapSuiteMacThreshold", this.getMaxThreshold().getColor());
		this._fillThresholdArea(c, d.maxThreshold, [
			{x: d.maxThreshold[0].x, y: d.minY}, 
			{x: d.maxThreshold[d.maxThreshold.length - 1].x, y: d.minY}
		], oCsses.backgroundColor);
	} else if (d.maxThreshold.length == 1) {
		jQuery.sap.log.warning("Max Threshold is not rendered because only 1 point was given");
	}
};

sap.suite.ui.commons.MicroAreaChart.prototype.fillMinThreshold = function(c, d) {
	if (d.minThreshold.length > 1) {
		var oCsses = this._getCssValues("sapSuiteMacThreshold", this.getMinThreshold().getColor());
		this._fillThresholdArea(c, d.minThreshold, [
			{x: d.minThreshold[0].x, y: d.maxY}, 
			{x: d.minThreshold[d.minThreshold.length - 1].x, y: d.maxY}
		], oCsses.backgroundColor);
	} else if (d.minThreshold.length == 1) {
		jQuery.sap.log.warning("Min Threshold is not rendered because only 1 point was given");
	}
};

sap.suite.ui.commons.MicroAreaChart.prototype.fillThresholdArea = function(c, d) {
	if (d.minThreshold.length > 1 && d.maxThreshold.length > 1) {
		var oCsses = this._getCssValues("sapSuiteMacThreshold", "Critical");
		
		this._fillThresholdArea(c, d.maxThreshold, d.minThreshold, oCsses.backgroundColor);
	}
};

sap.suite.ui.commons.MicroAreaChart.prototype.fillInnerThresholdArea = function(c, d) {
	if (d.innerMinThreshold.length > 1 && d.innerMaxThreshold.length > 1) {
		var oCsses = this._getCssValues("sapSuiteMacThreshold", this.getInnerMaxThreshold().getColor());
		
		this._fillThresholdArea(c, d.innerMaxThreshold, d.innerMinThreshold, oCsses.backgroundColor);
	} else if (d.innerMinThreshold.length || d.innerMaxThreshold.length) {
		jQuery.sap.log.warning("Inner threshold area is not rendered because inner min and max threshold were not correctly set");
	}
};

sap.suite.ui.commons.MicroAreaChart.prototype.renderChart = function(c, d) {
	if (d.chart.length > 1) {
		var oCsses = this._getCssValues("sapSuiteMacChart", this.getChart().getColor());
		c.strokeStyle = oCsses.color;
		c.lineWidth = parseFloat(oCsses.width);
		
		this._renderLine(c, d.chart, d);
	} else if (d.chart.length == 1) {
		jQuery.sap.log.warning("Actual values are not rendered because only 1 point was given");
	}
};

sap.suite.ui.commons.MicroAreaChart.prototype.renderCanvas = function() {
	this._cssHelper = document.getElementById(this.getId() + "-css-helper");
	
	var canvas = document.getElementById(this.getId() + "-canvas");
	var canvasSettings = window.getComputedStyle(canvas);
	canvas.setAttribute("width", parseFloat(canvasSettings.width));
	canvas.setAttribute("height", parseFloat(canvasSettings.height));
	
	var c = canvas.getContext("2d");
	
	c.lineJoin = c.lineCap = "round";
	
	var d = this._calculateDimensions(canvas.width, canvas.height);

	this.fillMaxThreshold(c, d);
	this.fillMinThreshold(c, d);
	this.fillThresholdArea(c, d);
	this.fillInnerThresholdArea(c, d);
	this.renderTarget(c, d);
	this.renderChart(c, d);	
};

sap.suite.ui.commons.MicroAreaChart.prototype._calculateDimensions = function(fWidth, fHeight) {
	var maxX, maxY, minX, minY;
	maxX = maxY = minX = minY = undefined;
	var that = this;
	
	function calculateExtremums() {
		if (!that._isMinXValue || !that._isMaxXValue || !that._isMinYValue || !that._isMaxYValue) {
			var lines = [];
			if (that.getMaxThreshold()) {
				lines.push(that.getMaxThreshold());
			}
			
			if (that.getMinThreshold()) {
				lines.push(that.getMinThreshold());
			}
			
			if (that.getChart()) {
				lines.push(that.getChart());
			}
			
			if (that.getTarget()) {
				lines.push(that.getTarget());
			}
			
			if (that.getInnerMaxThreshold()) {
				lines.push(that.getInnerMaxThreshold());
			}
			
			if (that.getInnerMinThreshold()) {
				lines.push(that.getInnerMinThreshold());
			}
			
			for (var i = 0, numOfLines = lines.length; i < numOfLines; i++) {
				var aPoints = lines[i].getPoints();
		        
		        for (var counter = 0, a = aPoints.length; counter < a; counter++) {
		        	var tmpVal = aPoints[counter].getXValue();
			        if (tmpVal > maxX || maxX === undefined) {
			        	maxX = tmpVal;
			        }
			        if (tmpVal < minX || minX === undefined) {
			        	minX = tmpVal;
			        }
	
		        	tmpVal = aPoints[counter].getYValue();
			        if (tmpVal > maxY || maxY === undefined) {
			        	maxY = tmpVal;
			        }
			        if (tmpVal < minY || minY === undefined) {
			        	minY = tmpVal;
			        }
			    }
			}
		}
		if (that._isMinXValue) {
			minX = that.getMinXValue();
		}
		
		if (that._isMaxXValue) {
			maxX = that.getMaxXValue();
		}
		
		if (that._isMinYValue) {
			minY = that.getMinYValue();
		}
		
		if (that._isMaxYValue) {
			maxY = that.getMaxYValue();
		}
	};
	
	calculateExtremums();
	
	var oResult = {
		minY: 0,
		minX: 0,
		maxY: fHeight,
		maxX: fWidth
	};
	
	var kx = undefined;
	var fDeltaX = maxX - minX;
	
	if (fDeltaX > 0) {
		kx = fWidth / fDeltaX;
	} else if (fDeltaX == 0) {
		kx = 0;
		oResult.maxX /= 2;
	} else {
		jQuery.sap.log.warning("Min X is more than max X");
	}
	
	var ky = undefined;
	var fDeltaY = maxY - minY;
	
	if (fDeltaY > 0) {
		ky = fHeight / (maxY - minY);
	} else if (fDeltaY == 0) {
		ky = 0;
		oResult.maxY /= 2;
	} else {
		jQuery.sap.log.warning("Min Y is more than max Y");
	}

	function calculateCoordinates(line) {
		var bRtl = sap.ui.getCore().getConfiguration().getRTL();

		var fnCalcX = function(fValue) {
			var x = kx * (fValue - minX);
			
			if (bRtl) {
				x = oResult.maxX - x;
			}
			return x;
		};
		
		var fnCalcY = function(fValue) {
			return oResult.maxY - ky * (fValue - minY);
		};

		var aResult = [];
		if (line && kx != undefined && ky != undefined) {
			var aPoints = line.getPoints();
			var iLength = aPoints.length;
			var xi, yi, tmpXValue, tmpYValue;
			
			if (iLength == 1) {
				tmpXValue = aPoints[0].getXValue();
				tmpYValue = aPoints[0].getYValue();
				
				if (tmpXValue == undefined ^ tmpYValue == undefined) {
					var xn, yn;
					if (tmpXValue == undefined) {
						yn = yi = fnCalcY(tmpYValue);
						xi = oResult.minX;
						xn = oResult.maxX;
					} else {
						xn = xi = fnCalcX(tmpXValue);
						yi = oResult.minY;
						yn = oResult.maxY;
					}
					
					aResult.push({x: xi, y: yi}, {x: xn, y: yn});
				} else {
					jQuery.sap.log.warning("Point with coordinates [" + tmpXValue + " " + tmpYValue + "] ignored");
				}
			} else {
				for (var i = 0; i < iLength; i++) {
					tmpXValue = aPoints[i].getXValue();
					tmpYValue = aPoints[i].getYValue();
					
					if (tmpXValue != undefined && tmpYValue != undefined) {
						xi = fnCalcX(tmpXValue);
						yi = fnCalcY(tmpYValue);
						
						aResult.push({x: xi, y: yi});				
					} else {
						jQuery.sap.log.warning("Point with coordinates [" + tmpXValue + " " + tmpYValue + "] ignored");
					}
				}
			}
		}
		return aResult;
	};
	
	oResult.maxThreshold = calculateCoordinates(that.getMaxThreshold());
	oResult.minThreshold = calculateCoordinates(that.getMinThreshold());
	oResult.chart = calculateCoordinates(that.getChart());
	oResult.target = calculateCoordinates(that.getTarget());
	oResult.innerMaxThreshold = calculateCoordinates(that.getInnerMaxThreshold());
	oResult.innerMinThreshold = calculateCoordinates(that.getInnerMinThreshold());
	
	return oResult;
};

sap.suite.ui.commons.MicroAreaChart.prototype.setMinXValue = function(value, bSuppressInvalidate) {
	this._isMinXValue = this._isNumber(value);

	return this.setProperty("minXValue", this._isMinXValue ? value : NaN, bSuppressInvalidate);
};

sap.suite.ui.commons.MicroAreaChart.prototype.setMaxXValue = function(value, bSuppressInvalidate) {
	this._isMaxXValue = this._isNumber(value);

	return this.setProperty("maxXValue", this._isMaxXValue ? value : NaN, bSuppressInvalidate);
};

sap.suite.ui.commons.MicroAreaChart.prototype.setMinYValue = function(value, bSuppressInvalidate) {
	this._isMinYValue = this._isNumber(value);

	return this.setProperty("minYValue", this._isMinYValue ? value : NaN, bSuppressInvalidate);
};

sap.suite.ui.commons.MicroAreaChart.prototype.setMaxYValue = function(value, bSuppressInvalidate) {
	this._isMaxYValue = this._isNumber(value);

	return this.setProperty("maxYValue", this._isMaxYValue ? value : NaN, bSuppressInvalidate);
};

sap.suite.ui.commons.MicroAreaChart.prototype._isNumber = function(n) {
    return typeof n == 'number' && !isNaN(n) && isFinite(n);
};

sap.suite.ui.commons.MicroAreaChart.prototype.onAfterRendering = function() {
	this.renderCanvas();
};

sap.suite.ui.commons.MicroAreaChart.prototype.ontap = function(oEvent) {
    if (sap.ui.Device.browser.internet_explorer) {
        this.$().focus();
    }
    this.firePress();
};

sap.suite.ui.commons.MicroAreaChart.prototype.onkeydown = function(oEvent) {
    if (oEvent.which == jQuery.sap.KeyCodes.ENTER || oEvent.which == jQuery.sap.KeyCodes.SPACE) {
        this.firePress();
        oEvent.preventDefault();
    }
};

sap.suite.ui.commons.MicroAreaChart.prototype.attachEvent = function(sEventId, oData, fnFunction, oListener) {
	sap.ui.core.Control.prototype.attachEvent.call(this, sEventId, oData, fnFunction, oListener);
	
	if (this.hasListeners("press")) {
		this.$().attr("tabindex", 0).addClass("sapSuiteUiCommonsPointer");
	}
	
	return this;
};

sap.suite.ui.commons.MicroAreaChart.prototype.detachEvent = function(sEventId, fnFunction, oListener) {
	sap.ui.core.Control.prototype.detachEvent.call(this, sEventId, fnFunction, oListener);
	
	if (!this.hasListeners("press")) {
		this.$().removeAttr("tabindex").removeClass("sapSuiteUiCommonsPointer");
	}
	return this;
};