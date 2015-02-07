
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.suite --------------------------------------------------------------------------


// ---- sap.suite.ui --------------------------------------------------------------------------


// ---- sap.suite.ui.commons --------------------------------------------------------------------------


// ---- sap.suite.ui.commons.BulletChart --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new BulletChart.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control shows a bullet chart.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @experimental Since version 1.19. 
 * API is not yet finished and might change completely
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.BulletChart = function(sId,mSettings) {};
/**
 * 
 * The event is fired when the user chooses the bullet chart.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.BulletChart.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Adds some threshold <code>oThreshold</code> 
 * to the aggregation named <code>thresholds</code>.
 * @param {sap.suite.ui.commons.BulletChartData}
 *            oThreshold the threshold to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.addThreshold = function(oThreshold) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.BulletChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.BulletChart</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses the bullet chart.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.BulletChart</code>.<br/> itself.
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Destroys the actual in the aggregation 
 * named <code>actual</code>.
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.destroyActual = function() { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Destroys all the thresholds in the aggregation 
 * named <code>thresholds</code>.
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.destroyThresholds = function() { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.BulletChart</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.BulletChart with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.BulletChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.firePress = function(mArguments) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Getter for aggregation <code>actual</code>.<br/>
 * The bullet chart actual data.
 * @return {sap.suite.ui.commons.BulletChartData}
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getActual = function() { return new sap.suite.ui.commons.BulletChartData(); };

/**
 * 
 * Getter for property <code>actualValueLabel</code>.
 * If set, displays a specified label instead of the numeric actual value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>actualValueLabel</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getActualValueLabel = function() { return ""; };

/**
 * 
 * Getter for property <code>deltaValueLabel</code>.
 * If set, displays a specified label instead of the calculated numeric delta value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>deltaValueLabel</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getDeltaValueLabel = function() { return ""; };

/**
 * 
 * Getter for property <code>forecastValue</code>.
 * The forecast value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {float} the value of property <code>forecastValue</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getForecastValue = function() { return 0.0; };

/**
 * 
 * Getter for property <code>maxValue</code>.
 * If set, defines the right scale value for the bar chart.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {float} the value of property <code>maxValue</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getMaxValue = function() { return 0.0; };

/**
 * 
 * Getter for property <code>minValue</code>.
 * If set, defines the left scale value for the bar chart.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {float} the value of property <code>minValue</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getMinValue = function() { return 0.0; };

/**
 * 
 * Getter for property <code>mode</code>.
 * Specifies whether to display the actual value itself or delta between the actual value and the target value. If not set, the default mode displays the actual value.
 * </p><p>
 * Default value is <code>Actual</code>
 * @return {sap.suite.ui.commons.BulletChartMode} the value of property <code>mode</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getMode = function() { return new sap.suite.ui.commons.BulletChartMode(); };

/**
 * 
 * Getter for property <code>scale</code>.
 * The scaling suffix.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>scale</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getScale = function() { return ""; };

/**
 * 
 * Getter for property <code>scaleColor</code>.
 * Background color of the scale.
 * </p><p>
 * Default value is <code>MediumLight</code>
 * @return {sap.suite.ui.commons.CommonBackground} the value of property <code>scaleColor</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getScaleColor = function() { return new sap.suite.ui.commons.CommonBackground(); };

/**
 * 
 * Getter for property <code>showActualValue</code>.
 * If set to true, shows numeric actual value. This property only works in Actual mode.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showActualValue</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getShowActualValue = function() { return false; };

/**
 * 
 * Getter for property <code>showDeltaValue</code>.
 * If set to true, shows the calculated delta value instead of the numeric actual value regardless of the showActualValue setting. This property works only in the Delta mode.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showDeltaValue</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getShowDeltaValue = function() { return false; };

/**
 * 
 * Getter for property <code>showTargetValue</code>.
 * If set to true, shows numeric target value.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showTargetValue</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getShowTargetValue = function() { return false; };

/**
 * 
 * Getter for property <code>showValueMarker</code>.
 * If set to true, shows the value marker.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showValueMarker</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getShowValueMarker = function() { return false; };

/**
 * 
 * Getter for property <code>size</code>.
 * Updates the size of the chart. If not set then the default size is applied based on the device tile.
 * </p><p>
 * Default value is <code>Auto</code>
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getSize = function() { return new sap.suite.ui.commons.InfoTileSize(); };

/**
 * 
 * Getter for property <code>targetValue</code>.
 * The target value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {float} the value of property <code>targetValue</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getTargetValue = function() { return 0.0; };

/**
 * 
 * Getter for property <code>targetValueLabel</code>.
 * If set, displays a specified label instead of the numeric target value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>targetValueLabel</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getTargetValueLabel = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>thresholds</code>.<br/>
 * The bullet chart thresholds data.
 * @return {sap.suite.ui.commons.BulletChartData[]}
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getThresholds = function() { return new Array(); };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the chart. If it is not set, the size of the control is defined by the size property.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>width</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.getWidth = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.suite.ui.commons.BulletChartData</code> in the aggregation named <code>thresholds</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.BulletChartData}
 *            oThreshold the threshold whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.indexOfThreshold = function(oThreshold) { return 0; };

/**
 * 
 * Inserts a threshold into the aggregation named <code>thresholds</code>.
 * @param {sap.suite.ui.commons.BulletChartData}
 *          oThreshold the threshold to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the threshold should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the threshold is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the threshold is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.insertThreshold = function(oThreshold,iIndex) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>thresholds</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.BulletChartData[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.removeAllThresholds = function() { return new Array(); };

/**
 * 
 * Removes an threshold from the aggregation named <code>thresholds</code>.
 * @param {int | string | sap.suite.ui.commons.BulletChartData} vThreshold the threshold to remove or its index or id
 * @return {sap.suite.ui.commons.BulletChartData} the removed threshold or null
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.removeThreshold = function(vThreshold) { return new sap.suite.ui.commons.BulletChartData(); };

/**
 * 
 * Setter for the aggregated <code>actual</code>.
 * @param {sap.suite.ui.commons.BulletChartData} oActual
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setActual = function(oActual) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>actualValueLabel</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sActualValueLabel  new value for property <code>actualValueLabel</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setActualValueLabel = function(sActualValueLabel) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>deltaValueLabel</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDeltaValueLabel  new value for property <code>deltaValueLabel</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setDeltaValueLabel = function(sDeltaValueLabel) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>forecastValue</code>.
 * </p><p>
 * Default value is <code>undefined</code> 
 * @param {float} fForecastValue  new value for property <code>forecastValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setForecastValue = function(fForecastValue) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>maxValue</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {float} fMaxValue  new value for property <code>maxValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setMaxValue = function(fMaxValue) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>minValue</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {float} fMinValue  new value for property <code>minValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setMinValue = function(fMinValue) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>mode</code>.
 * </p><p>
 * Default value is <code>Actual</code> 
 * @param {sap.suite.ui.commons.BulletChartMode} oMode  new value for property <code>mode</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setMode = function(oMode) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>scale</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sScale  new value for property <code>scale</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setScale = function(sScale) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>scaleColor</code>.
 * </p><p>
 * Default value is <code>MediumLight</code> 
 * @param {sap.suite.ui.commons.CommonBackground} oScaleColor  new value for property <code>scaleColor</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setScaleColor = function(oScaleColor) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>showActualValue</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowActualValue  new value for property <code>showActualValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setShowActualValue = function(bShowActualValue) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>showDeltaValue</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowDeltaValue  new value for property <code>showDeltaValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setShowDeltaValue = function(bShowDeltaValue) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>showTargetValue</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowTargetValue  new value for property <code>showTargetValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setShowTargetValue = function(bShowTargetValue) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>showValueMarker</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowValueMarker  new value for property <code>showValueMarker</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setShowValueMarker = function(bShowValueMarker) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>size</code>.
 * </p><p>
 * Default value is <code>Auto</code> 
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setSize = function(oSize) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>targetValue</code>.
 * </p><p>
 * Default value is <code>undefined</code> 
 * @param {float} fTargetValue  new value for property <code>targetValue</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setTargetValue = function(fTargetValue) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>targetValueLabel</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTargetValueLabel  new value for property <code>targetValueLabel</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setTargetValueLabel = function(sTargetValueLabel) { return new sap.suite.ui.commons.BulletChart(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.BulletChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.commons.BulletChart(); };


// ---- sap.suite.ui.commons.BulletChartData --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new BulletChartData.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : float (default: 0)</li>
 * <li>{@link #getColor color} : sap.suite.ui.commons.InfoTileValueColor (default: sap.suite.ui.commons.InfoTileValueColor.Neutral)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Thresholds data holder.
 * @extends sap.ui.core.Element
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.BulletChartData = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.BulletChartData with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.BulletChartData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>color</code>.
 * The semantic color of the actual value.
 * </p><p>
 * Default value is <code>Neutral</code>
 * @return {sap.suite.ui.commons.InfoTileValueColor} the value of property <code>color</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChartData.prototype.getColor = function() { return new sap.suite.ui.commons.InfoTileValueColor(); };

/**
 * 
 * Getter for property <code>value</code>.
 * The actual value.
 * </p><p>
 * Default value is <code>0</code>
 * @return {float} the value of property <code>value</code>
 * @public
 * 
 */
sap.suite.ui.commons.BulletChartData.prototype.getValue = function() { return 0.0; };

/**
 * 
 * Setter for property <code>color</code>.
 * </p><p>
 * Default value is <code>Neutral</code> 
 * @param {sap.suite.ui.commons.InfoTileValueColor} oColor  new value for property <code>color</code>
 * @return {sap.suite.ui.commons.BulletChartData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChartData.prototype.setColor = function(oColor) { return new sap.suite.ui.commons.BulletChartData(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {float} fValue  new value for property <code>value</code>
 * @return {sap.suite.ui.commons.BulletChartData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BulletChartData.prototype.setValue = function(fValue) { return new sap.suite.ui.commons.BulletChartData(); };


// ---- sap.suite.ui.commons.BulletChartMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.BulletChartMode.toString = function() { return ""; };

// ---- sap.suite.ui.commons.BusinessCard --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new BusinessCard.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getIconPath iconPath} : sap.ui.core.URI</li>
 * <li>{@link #getSecondTitle secondTitle} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getImageTooltip imageTooltip} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
 * <li>{@link #getFirstTitle firstTitle} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control allows you to display business card information including an image, first title (either URL link or text), second title, and multiple text lines.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.BusinessCard = function(sId,mSettings) {};
/**
 * 
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.destroyContent = function() { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * 
 * Destroys the firstTitle in the aggregation 
 * named <code>firstTitle</code>.
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.destroyFirstTitle = function() { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.BusinessCard with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.BusinessCard.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The content of the BusinessCard body must be provided by the application developer.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for aggregation <code>firstTitle</code>.<br/>
 * Any control that can display a title. Content of this control appears at the first position in BusinessCard. Recomended controls: sap.ui.commons.Label and sap.ui.commons.Link.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.getFirstTitle = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>iconPath</code>.
 * A path to the BusinessCard icon.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconPath</code>
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.getIconPath = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>imageTooltip</code>.
 * A tooltip that is set for an image.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>imageTooltip</code>
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.getImageTooltip = function() { return ""; };

/**
 * 
 * Getter for property <code>secondTitle</code>.
 * A short text line that describes this BusinessCard.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>secondTitle</code>
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.getSecondTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>type</code>.
 * Title of the BusinessCard that describes its type.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>type</code>
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.getType = function() { return ""; };

/**
 * 
 * Getter for property <code>width</code>.
 * Width of the BusinessCard. Alternatively, CSS size can be set in %, px, or em.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.setContent = function(oContent) { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * 
 * Setter for the aggregated <code>firstTitle</code>.
 * @param {sap.ui.core.Control} oFirstTitle
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.setFirstTitle = function(oFirstTitle) { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * 
 * Setter for property <code>iconPath</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIconPath  new value for property <code>iconPath</code>
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.setIconPath = function(sIconPath) { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * 
 * Setter for property <code>imageTooltip</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sImageTooltip  new value for property <code>imageTooltip</code>
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.setImageTooltip = function(sImageTooltip) { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * 
 * Setter for property <code>secondTitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSecondTitle  new value for property <code>secondTitle</code>
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.setSecondTitle = function(sSecondTitle) { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.setType = function(sType) { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.BusinessCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.setWidth = function(sWidth) { return new sap.suite.ui.commons.BusinessCard(); };


// ---- sap.suite.ui.commons.ChartContainer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ChartContainer.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
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
 * <li>{@link #getAutoAdjustHeight autoAdjustHeight} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDimensionSelectors dimensionSelectors} : sap.m.Select[]</li>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.suite.ui.commons.ChartContainerContent[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.ChartContainer#event:personalizationPress personalizationPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.ChartContainer#event:contentChange contentChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * ToolBar used for displaying one chart amongst several and provide additional features:
 * - multiple select boxes for selecting dimensions
 * - fullscreen toggle
 * - personalization icon
 * - showLegend toggle
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @experimental Since version 1.23. 
 * The ChartContainer will be productized soon.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ChartContainer = function(sId,mSettings) {};
/**
 * 
 * Event fired when user change the Content displayed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.selectedItemId Id of the Item selected.
 * @public
 */
sap.suite.ui.commons.ChartContainer.prototype.contentChange = function(oControlEvent) { return null; };

/**
 * 
 * Event fired when a user clicks on the personalization icon
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.ChartContainer.prototype.personalizationPress = function(oControlEvent) { return null; };

/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.suite.ui.commons.ChartContainerContent}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.addContent = function(oContent) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Adds some dimensionSelector <code>oDimensionSelector</code> 
 * to the aggregation named <code>dimensionSelectors</code>.
 * @param {sap.m.Select}
 *            oDimensionSelector the dimensionSelector to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.addDimensionSelector = function(oDimensionSelector) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'contentChange' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself. 
 * </p><p>
 * Event fired when user change the Content displayed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.attachContentChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'personalizationPress' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself. 
 * </p><p>
 * Event fired when a user clicks on the personalization icon
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.attachPersonalizationPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.destroyContent = function() { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Destroys all the dimensionSelectors in the aggregation 
 * named <code>dimensionSelectors</code>.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.destroyDimensionSelectors = function() { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'contentChange' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.detachContentChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'personalizationPress' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.detachPersonalizationPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.ChartContainer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ChartContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event contentChange to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'selectedItemId' of type <code>string</code> Id of the Item selected.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.fireContentChange = function(mArguments) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Fire event personalizationPress to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.firePersonalizationPress = function(mArguments) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Getter for property <code>autoAdjustHeight</code>.
 * Adjust the height of the Chart to the available space.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>autoAdjustHeight</code>
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getAutoAdjustHeight = function() { return false; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * CharToolBar Content aggregation. Only vizFrame, sap.m.Table and sap.ui.table.Table can be embedded.
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for ChartContainer.
 * @return {sap.suite.ui.commons.ChartContainerContent[]}
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>dimensionSelectors</code>.<br/>
 * Dimension Selects.
 * @return {sap.m.Select[]}
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getDimensionSelectors = function() { return new Array(); };

/**
 * 
 * Getter for property <code>fullScreen</code>.
 * Display the chart and the toolbar in full screen or normal mode
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>fullScreen</code>
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getFullScreen = function() { return false; };

/**
 * 
 * Getter for property <code>selectorGroupLabel</code>.
 * Custom Label for Selectors Group.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>selectorGroupLabel</code>
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getSelectorGroupLabel = function() { return ""; };

/**
 * 
 * Getter for property <code>showFullScreen</code>.
 * Display or not the full screen icon into the ChartContainer
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showFullScreen</code>
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getShowFullScreen = function() { return false; };

/**
 * 
 * Getter for property <code>showLegend</code>.
 * Display or not the legend on the contained charts.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showLegend</code>
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getShowLegend = function() { return false; };

/**
 * 
 * Getter for property <code>showPersonalization</code>.
 * Display or not the personalization icon into the ChartContainer
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showPersonalization</code>
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getShowPersonalization = function() { return false; };

/**
 * 
 * Getter for property <code>title</code>.
 * The string to display instead of the select boxes if there are no dimensions to display
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getTitle = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.suite.ui.commons.ChartContainerContent</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.ChartContainerContent}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.m.Select</code> in the aggregation named <code>dimensionSelectors</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Select}
 *            oDimensionSelector the dimensionSelector whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.indexOfDimensionSelector = function(oDimensionSelector) { return 0; };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.suite.ui.commons.ChartContainerContent}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.insertContent = function(oContent,iIndex) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Inserts a dimensionSelector into the aggregation named <code>dimensionSelectors</code>.
 * @param {sap.m.Select}
 *          oDimensionSelector the dimensionSelector to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the dimensionSelector should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the dimensionSelector is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the dimensionSelector is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.insertDimensionSelector = function(oDimensionSelector,iIndex) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.ChartContainerContent[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>dimensionSelectors</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.Select[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.removeAllDimensionSelectors = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.suite.ui.commons.ChartContainerContent} vContent the content to remove or its index or id
 * @return {sap.suite.ui.commons.ChartContainerContent} the removed content or null
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.removeContent = function(vContent) { return new sap.suite.ui.commons.ChartContainerContent(); };

/**
 * 
 * Removes an dimensionSelector from the aggregation named <code>dimensionSelectors</code>.
 * @param {int | string | sap.m.Select} vDimensionSelector the dimensionSelector to remove or its index or id
 * @return {sap.m.Select} the removed dimensionSelector or null
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.removeDimensionSelector = function(vDimensionSelector) { return new sap.m.Select(); };

/**
 * 
 * Setter for property <code>autoAdjustHeight</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bAutoAdjustHeight  new value for property <code>autoAdjustHeight</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setAutoAdjustHeight = function(bAutoAdjustHeight) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Setter for property <code>fullScreen</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bFullScreen  new value for property <code>fullScreen</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setFullScreen = function(bFullScreen) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Setter for property <code>selectorGroupLabel</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSelectorGroupLabel  new value for property <code>selectorGroupLabel</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setSelectorGroupLabel = function(sSelectorGroupLabel) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Setter for property <code>showFullScreen</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowFullScreen  new value for property <code>showFullScreen</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setShowFullScreen = function(bShowFullScreen) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Setter for property <code>showLegend</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowLegend  new value for property <code>showLegend</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setShowLegend = function(bShowLegend) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Setter for property <code>showPersonalization</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowPersonalization  new value for property <code>showPersonalization</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setShowPersonalization = function(bShowPersonalization) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.ChartContainer(); };


// ---- sap.suite.ui.commons.ChartContainerContent --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ChartContainerContent.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getIcon icon} : string</li>
 * <li>{@link #getTitle title} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Content Aggregation for ChartContainer.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @experimental Since version 1.23. 
 * The ChartContainerContent will be productized soon.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ChartContainerContent = function(sId,mSettings) {};
/**
 * 
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.ChartContainerContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainerContent.prototype.destroyContent = function() { return new sap.suite.ui.commons.ChartContainerContent(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.ChartContainerContent with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ChartContainerContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * Chart or Table as content of the ChartTollBar. Supported Types:
 * - vizFrame
 * - sap.m.Table
 * - sap.ui.table.Table
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainerContent.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * Icon of the Chart.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainerContent.prototype.getIcon = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * Title of the Chart/Table
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainerContent.prototype.getTitle = function() { return ""; };

/**
 * 
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent
 * @return {sap.suite.ui.commons.ChartContainerContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainerContent.prototype.setContent = function(oContent) { return new sap.suite.ui.commons.ChartContainerContent(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.suite.ui.commons.ChartContainerContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainerContent.prototype.setIcon = function(sIcon) { return new sap.suite.ui.commons.ChartContainerContent(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.ChartContainerContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainerContent.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.ChartContainerContent(); };


// ---- sap.suite.ui.commons.ChartTile --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ChartTile.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getUnit unit} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.suite.ui.commons.InfoTile#constructor sap.suite.ui.commons.InfoTile}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control is the implementation of the InfoTile to show a comparison or bullet chart.
 * @extends sap.suite.ui.commons.InfoTile
 * @version 1.24.2
 * @constructor
 * @public
 * @experimental Since version 1.19. 
 * API is not yet finished and might change completely
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ChartTile = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.ChartTile with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ChartTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>unit</code>.
 * The percent sign, the currency symbol, or the unit of measure.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>unit</code>
 * @public
 * 
 */
sap.suite.ui.commons.ChartTile.prototype.getUnit = function() { return ""; };

/**
 * 
 * Setter for property <code>unit</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sUnit  new value for property <code>unit</code>
 * @return {sap.suite.ui.commons.ChartTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartTile.prototype.setUnit = function(sUnit) { return new sap.suite.ui.commons.ChartTile(); };


// ---- sap.suite.ui.commons.ColumnData --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ColumnData.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getValue value} : float</li>
 * <li>{@link #getColor color} : sap.suite.ui.commons.InfoTileValueColor (default: sap.suite.ui.commons.InfoTileValueColor.Neutral)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Column data holder.
 * @extends sap.ui.core.Element
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ColumnData = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.ColumnData with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ColumnData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>color</code>.
 * The semantic color of the column.
 * </p><p>
 * Default value is <code>Neutral</code>
 * @return {sap.suite.ui.commons.InfoTileValueColor} the value of property <code>color</code>
 * @public
 * 
 */
sap.suite.ui.commons.ColumnData.prototype.getColor = function() { return new sap.suite.ui.commons.InfoTileValueColor(); };

/**
 * 
 * Getter for property <code>label</code>.
 * The label.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>label</code>
 * @public
 * 
 */
sap.suite.ui.commons.ColumnData.prototype.getLabel = function() { return ""; };

/**
 * 
 * Getter for property <code>value</code>.
 * The actual value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {float} the value of property <code>value</code>
 * @public
 * 
 */
sap.suite.ui.commons.ColumnData.prototype.getValue = function() { return 0.0; };

/**
 * 
 * Setter for property <code>color</code>.
 * </p><p>
 * Default value is <code>Neutral</code> 
 * @param {sap.suite.ui.commons.InfoTileValueColor} oColor  new value for property <code>color</code>
 * @return {sap.suite.ui.commons.ColumnData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ColumnData.prototype.setColor = function(oColor) { return new sap.suite.ui.commons.ColumnData(); };

/**
 * 
 * Setter for property <code>label</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLabel  new value for property <code>label</code>
 * @return {sap.suite.ui.commons.ColumnData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ColumnData.prototype.setLabel = function(sLabel) { return new sap.suite.ui.commons.ColumnData(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {float} fValue  new value for property <code>value</code>
 * @return {sap.suite.ui.commons.ColumnData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ColumnData.prototype.setValue = function(fValue) { return new sap.suite.ui.commons.ColumnData(); };


// ---- sap.suite.ui.commons.ColumnMicroChart --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ColumnMicroChart.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: sap.suite.ui.commons.InfoTileSize.Auto)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getColumns columns} : sap.suite.ui.commons.ColumnData[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.ColumnMicroChart#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control shows a column chart.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ColumnMicroChart = function(sId,mSettings) {};
/**
 * 
 * The event is fired when the user chooses the column chart.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Adds some column <code>oColumn</code> 
 * to the aggregation named <code>columns</code>.
 * @param {sap.suite.ui.commons.ColumnData}
 *            oColumn the column to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ColumnMicroChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.addColumn = function(oColumn) { return new sap.suite.ui.commons.ColumnMicroChart(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.ColumnMicroChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ColumnMicroChart</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses the column chart.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ColumnMicroChart</code>.<br/> itself.
 * @return {sap.suite.ui.commons.ColumnMicroChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ColumnMicroChart(); };

/**
 * 
 * Destroys all the columns in the aggregation 
 * named <code>columns</code>.
 * @return {sap.suite.ui.commons.ColumnMicroChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.destroyColumns = function() { return new sap.suite.ui.commons.ColumnMicroChart(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.ColumnMicroChart</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ColumnMicroChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ColumnMicroChart(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.ColumnMicroChart with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ColumnMicroChart} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.firePress = function(mArguments) { return new sap.suite.ui.commons.ColumnMicroChart(); };

/**
 * 
 * Getter for aggregation <code>columns</code>.<br/>
 * The column chart data.
 * @return {sap.suite.ui.commons.ColumnData[]}
 * @public
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.getColumns = function() { return new Array(); };

/**
 * 
 * Getter for property <code>height</code>.
 * The height of the chart. If it is not set, the height of the control is defined by the size property.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>size</code>.
 * Updates the size of the chart. If not set then the default size is applied based on the device tile.
 * </p><p>
 * Default value is <code>Auto</code>
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.getSize = function() { return new sap.suite.ui.commons.InfoTileSize(); };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the chart. If it is not set, the width of the control is defined by the size property.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.suite.ui.commons.ColumnData</code> in the aggregation named <code>columns</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.ColumnData}
 *            oColumn the column whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.indexOfColumn = function(oColumn) { return 0; };

/**
 * 
 * Inserts a column into the aggregation named <code>columns</code>.
 * @param {sap.suite.ui.commons.ColumnData}
 *          oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the column should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the column is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ColumnMicroChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.insertColumn = function(oColumn,iIndex) { return new sap.suite.ui.commons.ColumnMicroChart(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.ColumnData[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.removeAllColumns = function() { return new Array(); };

/**
 * 
 * Removes an column from the aggregation named <code>columns</code>.
 * @param {int | string | sap.suite.ui.commons.ColumnData} vColumn the column to remove or its index or id
 * @return {sap.suite.ui.commons.ColumnData} the removed column or null
 * @public
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.removeColumn = function(vColumn) { return new sap.suite.ui.commons.ColumnData(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.ColumnMicroChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.setHeight = function(sHeight) { return new sap.suite.ui.commons.ColumnMicroChart(); };

/**
 * 
 * Setter for property <code>size</code>.
 * </p><p>
 * Default value is <code>Auto</code> 
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.ColumnMicroChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.setSize = function(oSize) { return new sap.suite.ui.commons.ColumnMicroChart(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.ColumnMicroChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.commons.ColumnMicroChart(); };


// ---- sap.suite.ui.commons.CommonBackground --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.CommonBackground.toString = function() { return ""; };

// ---- sap.suite.ui.commons.ComparisonChart --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ComparisonChart.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getScale scale} : string</li>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: sap.suite.ui.commons.InfoTileSize.Auto)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getColorPalette colorPalette} : string[] (default: [])</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getData data} : sap.suite.ui.commons.ComparisonData[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.ComparisonChart#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control shows a comparison chart.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ComparisonChart = function(sId,mSettings) {};
/**
 * 
 * The event is fired when the user chooses the comparison chart.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.ComparisonChart.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Adds some data <code>oData</code> 
 * to the aggregation named <code>data</code>.
 * @param {sap.suite.ui.commons.ComparisonData}
 *            oData the data to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.addData = function(oData) { return new sap.suite.ui.commons.ComparisonChart(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.ComparisonChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ComparisonChart</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses the comparison chart.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ComparisonChart</code>.<br/> itself.
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ComparisonChart(); };

/**
 * 
 * Destroys all the data in the aggregation 
 * named <code>data</code>.
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.destroyData = function() { return new sap.suite.ui.commons.ComparisonChart(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.ComparisonChart</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ComparisonChart(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.ComparisonChart with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ComparisonChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.firePress = function(mArguments) { return new sap.suite.ui.commons.ComparisonChart(); };

/**
 * 
 * Getter for property <code>colorPalette</code>.
 * The color palette for the chart. If this property is set, semantic colors defined in ComparisonData are ignored. Colors from the palette are assigned to each bar consequentially. When all the palette colors are used, assignment of the colors begins from the first palette color.
 * </p><p>
 * Default value is <code>[]</code>
 * @return {string[]} the value of property <code>colorPalette</code>
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.getColorPalette = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>data</code>.<br/>
 * The comparison chart data.
 * @return {sap.suite.ui.commons.ComparisonData[]}
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.getData = function() { return new Array(); };

/**
 * 
 * Getter for property <code>scale</code>.
 * The scaling suffix.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>scale</code>
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.getScale = function() { return ""; };

/**
 * 
 * Getter for property <code>size</code>.
 * Updates the size of the chart. If not set then the default size is applied based on the device tile.
 * </p><p>
 * Default value is <code>Auto</code>
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.getSize = function() { return new sap.suite.ui.commons.InfoTileSize(); };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the chart. If it is not set, the size of the control is defined by the size property.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.suite.ui.commons.ComparisonData</code> in the aggregation named <code>data</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.ComparisonData}
 *            oData the data whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.indexOfData = function(oData) { return 0; };

/**
 * 
 * Inserts a data into the aggregation named <code>data</code>.
 * @param {sap.suite.ui.commons.ComparisonData}
 *          oData the data to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the data should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the data is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the data is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.insertData = function(oData,iIndex) { return new sap.suite.ui.commons.ComparisonChart(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>data</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.ComparisonData[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.removeAllData = function() { return new Array(); };

/**
 * 
 * Removes an data from the aggregation named <code>data</code>.
 * @param {int | string | sap.suite.ui.commons.ComparisonData} vData the data to remove or its index or id
 * @return {sap.suite.ui.commons.ComparisonData} the removed data or null
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.removeData = function(vData) { return new sap.suite.ui.commons.ComparisonData(); };

/**
 * 
 * Setter for property <code>colorPalette</code>.
 * </p><p>
 * Default value is <code>[]</code> 
 * @param {string[]} aColorPalette  new value for property <code>colorPalette</code>
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.setColorPalette = function(aColorPalette) { return new sap.suite.ui.commons.ComparisonChart(); };

/**
 * 
 * Setter for property <code>scale</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sScale  new value for property <code>scale</code>
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.setScale = function(sScale) { return new sap.suite.ui.commons.ComparisonChart(); };

/**
 * 
 * Setter for property <code>size</code>.
 * </p><p>
 * Default value is <code>Auto</code> 
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.setSize = function(oSize) { return new sap.suite.ui.commons.ComparisonChart(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.commons.ComparisonChart(); };


// ---- sap.suite.ui.commons.ComparisonData --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ComparisonData.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getValue value} : float (default: 0)</li>
 * <li>{@link #getColor color} : sap.suite.ui.commons.InfoTileValueColor (default: sap.suite.ui.commons.InfoTileValueColor.Neutral)</li>
 * <li>{@link #getDisplayValue displayValue} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Comparison tile value holder.
 * @extends sap.ui.core.Element
 * @version 1.24.2
 * @constructor
 * @public
 * @experimental Since version 1.19. 
 * API is not yet finished and might change completely
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ComparisonData = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.ComparisonData with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ComparisonData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>color</code>.
 * The semantic color of the value.
 * </p><p>
 * Default value is <code>Neutral</code>
 * @return {sap.suite.ui.commons.InfoTileValueColor} the value of property <code>color</code>
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonData.prototype.getColor = function() { return new sap.suite.ui.commons.InfoTileValueColor(); };

/**
 * 
 * Getter for property <code>displayValue</code>.
 * If this property is set then it will be rendered instead of value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>displayValue</code>
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonData.prototype.getDisplayValue = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * The comparison bar title.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonData.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>value</code>.
 * The float value for comparison.
 * </p><p>
 * Default value is <code>0</code>
 * @return {float} the value of property <code>value</code>
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonData.prototype.getValue = function() { return 0.0; };

/**
 * 
 * Setter for property <code>color</code>.
 * </p><p>
 * Default value is <code>Neutral</code> 
 * @param {sap.suite.ui.commons.InfoTileValueColor} oColor  new value for property <code>color</code>
 * @return {sap.suite.ui.commons.ComparisonData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonData.prototype.setColor = function(oColor) { return new sap.suite.ui.commons.ComparisonData(); };

/**
 * 
 * Setter for property <code>displayValue</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDisplayValue  new value for property <code>displayValue</code>
 * @return {sap.suite.ui.commons.ComparisonData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonData.prototype.setDisplayValue = function(sDisplayValue) { return new sap.suite.ui.commons.ComparisonData(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.ComparisonData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonData.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.ComparisonData(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {float} fValue  new value for property <code>value</code>
 * @return {sap.suite.ui.commons.ComparisonData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonData.prototype.setValue = function(fValue) { return new sap.suite.ui.commons.ComparisonData(); };


// ---- sap.suite.ui.commons.CountingNavigationItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new CountingNavigationItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getQuantity quantity} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.NavigationItem#constructor sap.ui.ux3.NavigationItem}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control extends the sap.ui.ux3.NavigationItem control. This control can display the quantity of items on a corresponding content area. It also provides a rich tooltip that can appear and disappear after a certain delay.
 * @extends sap.ui.ux3.NavigationItem
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.CountingNavigationItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.CountingNavigationItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.CountingNavigationItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>quantity</code>.
 * Stores the number of content items associated with this navigation item. This number appears in brackets next to the navigation item name. For example, Employes (10000).
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>quantity</code>
 * @public
 * 
 */
sap.suite.ui.commons.CountingNavigationItem.prototype.getQuantity = function() { return ""; };

/**
 * 
 * Setter for property <code>quantity</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sQuantity  new value for property <code>quantity</code>
 * @return {sap.suite.ui.commons.CountingNavigationItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.CountingNavigationItem.prototype.setQuantity = function(sQuantity) { return new sap.suite.ui.commons.CountingNavigationItem(); };


// ---- sap.suite.ui.commons.DateRangeScroller --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new DateRangeScroller.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaDescribedBy ariaDescribedBy} : string | sap.ui.core.Control</li>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.DateRangeScroller#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The DateRangeScroller provides a method to scroll through a series of time periods, each of which is represented by a starting date and an ending date, known as the date range. The user may scroll to the previous or next date range. Several predefined ranges are supported such as day, week, work week, month, and year.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.DateRangeScroller = function(sId,mSettings) {};
/**
 * 
 * This event is fired whenever the date range is changed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {any} oControlEvent.getParameters.dateRange Object containing startDate and endDate Date properties signifying the start and ending dates of the currently selected range.
 * @public
 */
sap.suite.ui.commons.DateRangeScroller.prototype.change = function(oControlEvent) { return null; };

/**
 * 
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * 
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.suite.ui.commons.DateRangeScroller</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.DateRangeScroller</code>.<br/> itself. 
 * </p><p>
 * This event is fired whenever the date range is changed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DateRangeScroller</code>.<br/> itself.
 * @return {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * 
 * Decrement the date range by a time period increment according to the the date range type and fire the dateChange event.
 * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining
 * @public
 */
sap.suite.ui.commons.DateRangeScroller.prototype.decrementDateRange = function() { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.suite.ui.commons.DateRangeScroller</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.detachChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.DateRangeScroller with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.DateRangeScroller.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event change to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'dateRange' of type <code>any</code> Object containing startDate and endDate Date properties signifying the start and ending dates of the currently selected range.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.fireChange = function(mArguments) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * 
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * @return {string[]}
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {string[]}
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * 
 * Returns an object containing startDate and endDate set to the current start and end Date objects.
 * @returns The date range containing start and end Date.
 * @public
 */
sap.suite.ui.commons.DateRangeScroller.prototype.getDateRange = function() { return null; };

/**
 * 
 * Increment the date range by a time period increment according to the the date range type and fire the dateChange event.
 * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
 * @public
 */
sap.suite.ui.commons.DateRangeScroller.prototype.incrementDateRange = function() { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * 
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * 
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * 
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return ""; };

/**
 * 
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return ""; };

/**
 * 
 * Setter for dateFormat which is used for formating the dates If passed object is null or is of incorrect type, control's default formatting will be used.
 * @param oDateFormat
 *                {sap.ui.core.format.DateFormat}
 * @public
 */
sap.suite.ui.commons.DateRangeScroller.prototype.setDateFormat = function(oDateFormat) { return null; };

/**
 * 
 * Set a custom date range beginning with the specified start date that increments/decrements <code>iDuration</code> days at a time.
 * @param dInitialDate
 *                The initial date for the custom range.
 * @param [iDuration=current
 *                custom duration] The number of days in the custom range, including the start date.
 * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
 * @public
 */
sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeCustom = function(dInitialDate,iDuration) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * 
 * Set a date range equal to a single day, starting with the given initial date.
 * @param {Date}
 *                dInitialDate The initial date.
 * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
 * @public
 */
sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeDay = function(dInitialDate) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * 
 * Set a date range that increments/decrements one calendar month at a time. The month date range begins on the first day of the month (beginning of the day) and ends on the
 * last day of the month (end of the day).
 * @param {Date}
 *                dInitialDate Any date that falls within the desired month.
 * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
 * @public
 */
sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeMonth = function(dInitialDate) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * 
 * Set a date range that steps one week at a time. The starting date is set according to the first day of the week (default is Monday) and the initial date. For example, if the
 * first day of the week is set to Tuesday and the initial date is Wednesday, January 9, 2013, then the starting date will be Tuesday, January 8, 2013.
 * </p><p>
 * The last day of the range is calculated by adding (duration - 1) days to the starting date.
 * @param {Date}
 *                dInitialDate Any date that falls on the desired week. Start/end dates will be adjusted according to the first day of the week.
 * @param {Object}
 *                [oSettings]
 * @param [oSettings.duration=7]
 *                The number of days in the range with a minimum of 1 and maximum of 7.
 * @param [oSettings.iFirstDayOfWeek=1]
 *                The starting day for the range. Valid values are 0-6, with 0=Sunday and 6=Saturday.
 * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
 * @public
 */
sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeWeek = function(dInitialDate,oSettings) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * 
 * Set a date range that increments/decrements one calendar year at a time. The year date range begins on the first day of the year (beginning of the day) and ends on the last
 * day of the year (end of the day).
 * @param {Date}
 *                dInitialDate Any date that falls within the desired year.
 * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
 * @public
 */
sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeYear = function(dInitialDate) { return new sap.suite.ui.commons.DateRangeScroller(); };


// ---- sap.suite.ui.commons.DateRangeSlider --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new DateRangeSlider.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getShowBubbles showBubbles} : boolean (default: true)</li>
 * <li>{@link #getSmallStepWidth smallStepWidth} : float</li>
 * <li>{@link #getTotalUnits totalUnits} : int</li>
 * <li>{@link #getStepLabels stepLabels} : boolean (default: false)</li>
 * <li>{@link #getLabels labels} : string[]</li>
 * <li>{@link #getMin min} : object</li>
 * <li>{@link #getMax max} : object</li>
 * <li>{@link #getValue value} : object</li>
 * <li>{@link #getValue2 value2} : object</li>
 * <li>{@link #getPinGrip pinGrip} : boolean (default: false)</li>
 * <li>{@link #getPinGrip2 pinGrip2} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.DateRangeSlider#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.DateRangeSlider#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Date Range Slider provides the user with a Range Slider control that is optimized for use with Dates.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.DateRangeSlider = function(sId,mSettings) {};
/**
 * 
 * This event is fired when user changes completes the selection of a new date using a grip. It contains the Date object value of each grip such that the left grip value is held by the value property and the right grip value is held by the value2 property.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.change = function(oControlEvent) { return null; };

/**
 * 
 * This live event is fired as the user slides a grip with the mouse. It contains the Date object value of each grip such that the left grip value is held by the value property and the right grip value is held by the value2 property.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.liveChange = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/> itself. 
 * </p><p>
 * This event is fired when user changes completes the selection of a new date using a grip. It contains the Date object value of each grip such that the left grip value is held by the value property and the right grip value is held by the value2 property.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/> itself.
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/> itself. 
 * </p><p>
 * This live event is fired as the user slides a grip with the mouse. It contains the Date object value of each grip such that the left grip value is held by the value property and the right grip value is held by the value2 property.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/> itself.
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.attachLiveChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.detachChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.detachLiveChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.DateRangeSlider with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.DateRangeSlider.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event change to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.fireChange = function(mArguments) { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * 
 * Fire event liveChange to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.fireLiveChange = function(mArguments) { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * 
 * Getter for property <code>editable</code>.
 * This property switches the enabled state of the control. Using the date range slider interactively requires this property to be true.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getEditable = function() { return false; };

/**
 * 
 * Getter for property <code>enabled</code>.
 * This property switches the enabled state of the control. Disabled fields have different colors, and can not be focused.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>labels</code>.
 * Labels to be displayed instead of dates.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string[]} the value of property <code>labels</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getLabels = function() { return new Array(); };

/**
 * 
 * Getter for property <code>max</code>.
 * Maximum date for the slider.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>max</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getMax = function() { return new Object(); };

/**
 * 
 * Getter for property <code>min</code>.
 * Minimum date for the slider.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>min</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getMin = function() { return new Object(); };

/**
 * 
 * Getter for property <code>pinGrip</code>.
 * Pin the left grip so that user cannot move it with the keyboard or mouse.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>pinGrip</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getPinGrip = function() { return false; };

/**
 * 
 * Getter for property <code>pinGrip2</code>.
 * Pin the right grip so that user cannot move it with the keyboard or mouse.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>pinGrip2</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getPinGrip2 = function() { return false; };

/**
 * 
 * Getter for property <code>showBubbles</code>.
 * Property to show or hide bubbles. Default is true.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showBubbles</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getShowBubbles = function() { return false; };

/**
 * 
 * Getter for property <code>smallStepWidth</code>.
 * The grips of the control can only be moved in steps of this width.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {float} the value of property <code>smallStepWidth</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getSmallStepWidth = function() { return 0.0; };

/**
 * 
 * Getter for property <code>stepLabels</code>.
 * Display a date label above each tick.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>stepLabels</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getStepLabels = function() { return false; };

/**
 * 
 * Getter for property <code>totalUnits</code>.
 * Number of units between ticks.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>totalUnits</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getTotalUnits = function() { return 0; };

/**
 * 
 * Get value property for the control.  
 * @returns Date - date representing position of the grip  
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getValue = function() { return null; };

/**
 * 
 * Get value2 property for the control.  
 * @returns Date - date representing position of the grip2  
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getValue2 = function() { return null; };

/**
 * 
 * Getter for property <code>visible</code>.
 * This property switches the visible state of the control. Invisible date range slider are not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Width of the horizontal date range slider.
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for dateFormat which is used to format the dates for Labels, bubble texts, and tool tips. If passed object is null or is of incorrect type,
 * _oDateRangeSliderInternal's default formatting will be used.
 * @param {sap.ui.core.format.DateFormat}
 *                oDateFormat
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setDateFormat = function(oDateFormat) { return null; };

/**
 * 
 * Set Date Range Slider Granularity to Day
 * @returns {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining.
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setDayGranularity = function() { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * 
 * Set editable property for the DateRangeSlider
 * @param {boolean}
 *                bEditable
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setEditable = function(bEditable) { return null; };

/**
 * 
 * Set enabled property for the DateRangeSlider
 * @param {boolean}
 *                bEnabled
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setEnabled = function(bEnabled) { return null; };

/**
 * 
 * Set labels property for the DateRangeSlider
 * @param {string[]}
 *                aLabels
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setLabels = function(aLabels) { return null; };

/**
 * 
 * Set max property for the DateRangeSlider. This sets the maximum date for the slider.
 * @param {Date}
 *                dMax
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setMax = function(dMax) { return null; };

/**
 * 
 * Set min property for the DateRangeSlider. This sets the minimum date for the slider.
 * @param {Date}
 *                dMin
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setMin = function(dMin) { return null; };

/**
 * 
 * Set Date Range Slider Granularity to Month
 * @returns {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining.
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setMonthGranularity = function() { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * 
 * Set pinGrip property for the DateRangeSlider
 * @param {boolean}
 *                bPinGrip
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setPinGrip = function(bPinGrip) { return null; };

/**
 * 
 * Set pinGrip2 property for the DateRangeSlider
 * @param {boolean}
 *                bPinGrip2
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setPinGrip2 = function(bPinGrip2) { return null; };

/**
 * 
 * Set showBubbles property for the DateRangeSlider
 * @param {boolean}
 *                bShowBubbles
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setShowBubbles = function(bShowBubbles) { return null; };

/**
 * 
 * Set smallStepWidth property for the DateRangeSlider
 * @param {float}
 *                fSmallStepWidth
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setSmallStepWidth = function(fSmallStepWidth) { return null; };

/**
 * 
 * Set stepLabels property for the DateRangeSlider
 * @param {boolean}
 *                bStepLabels
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setStepLabels = function(bStepLabels) { return null; };

/**
 * 
 * Set totalUnits property for the DateRangeSlider
 * @param {int}
 *                iTotalUnits
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setTotalUnits = function(iTotalUnits) { return null; };

/**
 * 
 * Set value property for the DateRangeSlider. This sets the value date for the slider.
 * @param {Date}
 *                dValue
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setValue = function(dValue) { return null; };

/**
 * 
 * Set value2 property for the DateRangeSlider. This sets the value2 date for the slider.
 * @param {Date}
 *                dValue2
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setValue2 = function(dValue2) { return null; };

/**
 * 
 * Set visible property for the DateRangeSlider
 * @param {boolean}
 *                bVisible
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setVisible = function(bVisible) { return null; };

/**
 * 
 * Set width property for the DateRangeSlider
 * @param {sap.ui.core.CSSSize}
 *                tWidth
 * @public
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setWidth = function(tWidth) { return null; };


// ---- sap.suite.ui.commons.DateRangeSliderInternal --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new DateRangeSliderInternal.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowBubbles showBubbles} : boolean (default: true)</li>
 * <li>{@link #getPinGrip pinGrip} : boolean (default: false)</li>
 * <li>{@link #getPinGrip2 pinGrip2} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.DateRangeSliderInternal#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.DateRangeSliderInternal#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.commons.RangeSlider#constructor sap.ui.commons.RangeSlider}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Date Range Slider provides the user with a Range Slider control that is optimized for use with Dates.
 * @extends sap.ui.commons.RangeSlider
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.DateRangeSliderInternal = function(sId,mSettings) {};
/**
 * 
 * This event is fired when user changes the positions of the grips of the control. It contains value as Date object and value2 as Date object which are based on the positions of two grips.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.change = function(oControlEvent) { return null; };

/**
 * 
 * This live event is fired when user changes the positions of the grips of the control. It contains value as Date object and value2 as Date object which are based on the positions of two grips.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.liveChange = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/> itself. 
 * </p><p>
 * This event is fired when user changes the positions of the grips of the control. It contains value as Date object and value2 as Date object which are based on the positions of two grips.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/> itself.
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/> itself. 
 * </p><p>
 * This live event is fired when user changes the positions of the grips of the control. It contains value as Date object and value2 as Date object which are based on the positions of two grips.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/> itself.
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.attachLiveChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.detachChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.detachLiveChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.DateRangeSliderInternal with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event change to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.fireChange = function(mArguments) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * 
 * Fire event liveChange to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.fireLiveChange = function(mArguments) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * 
 * Getter for property <code>pinGrip</code>.
 * Property to pin Grip (left grip) of the slider so that user cannot move it with key or mouse clicks.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>pinGrip</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.getPinGrip = function() { return false; };

/**
 * 
 * Getter for property <code>pinGrip2</code>.
 * Property to pin Grip2 (right grip) of the slider so that user cannot move it with key or mouse clicks.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>pinGrip2</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.getPinGrip2 = function() { return false; };

/**
 * 
 * Getter for property <code>showBubbles</code>.
 * Property to show or hide bubbles. Default is true.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showBubbles</code>
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.getShowBubbles = function() { return false; };

/**
 * 
 * Setter for property <code>pinGrip</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bPinGrip  new value for property <code>pinGrip</code>
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.setPinGrip = function(bPinGrip) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * 
 * Setter for property <code>pinGrip2</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bPinGrip2  new value for property <code>pinGrip2</code>
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.setPinGrip2 = function(bPinGrip2) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * 
 * Setter for property <code>showBubbles</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowBubbles  new value for property <code>showBubbles</code>
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.setShowBubbles = function(bShowBubbles) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };


// ---- sap.suite.ui.commons.DeviationIndicator --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.DeviationIndicator.toString = function() { return ""; };

// ---- sap.suite.ui.commons.DynamicContainer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new DynamicContainer.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDisplayTime displayTime} : int (default: 5000)</li>
 * <li>{@link #getTransitionTime transitionTime} : int (default: 500)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTiles tiles} : sap.suite.ui.commons.GenericTile[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The control that displays multiple GenericTile controls as changing slides.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.DynamicContainer = function(sId,mSettings) {};
/**
 * 
 * Adds some tile <code>oTile</code> 
 * to the aggregation named <code>tiles</code>.
 * @param {sap.suite.ui.commons.GenericTile}
 *            oTile the tile to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.DynamicContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DynamicContainer.prototype.addTile = function(oTile) { return new sap.suite.ui.commons.DynamicContainer(); };

/**
 * 
 * Destroys all the tiles in the aggregation 
 * named <code>tiles</code>.
 * @return {sap.suite.ui.commons.DynamicContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DynamicContainer.prototype.destroyTiles = function() { return new sap.suite.ui.commons.DynamicContainer(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.DynamicContainer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.DynamicContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>displayTime</code>.
 * The time of the slide display in milliseconds.
 * </p><p>
 * Default value is <code>5000</code>
 * @return {int} the value of property <code>displayTime</code>
 * @public
 * 
 */
sap.suite.ui.commons.DynamicContainer.prototype.getDisplayTime = function() { return 0; };

/**
 * 
 * Getter for aggregation <code>tiles</code>.<br/>
 * The set of Generic Tiles to be shown in the control.
 * @return {sap.suite.ui.commons.GenericTile[]}
 * @public
 * 
 */
sap.suite.ui.commons.DynamicContainer.prototype.getTiles = function() { return new Array(); };

/**
 * 
 * Getter for property <code>transitionTime</code>.
 * The time of the slide changing in milliseconds.
 * </p><p>
 * Default value is <code>500</code>
 * @return {int} the value of property <code>transitionTime</code>
 * @public
 * 
 */
sap.suite.ui.commons.DynamicContainer.prototype.getTransitionTime = function() { return 0; };

/**
 * 
 * Checks for the provided <code>sap.suite.ui.commons.GenericTile</code> in the aggregation named <code>tiles</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.GenericTile}
 *            oTile the tile whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.DynamicContainer.prototype.indexOfTile = function(oTile) { return 0; };

/**
 * 
 * Inserts a tile into the aggregation named <code>tiles</code>.
 * @param {sap.suite.ui.commons.GenericTile}
 *          oTile the tile to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the tile should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the tile is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the tile is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.DynamicContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DynamicContainer.prototype.insertTile = function(oTile,iIndex) { return new sap.suite.ui.commons.DynamicContainer(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>tiles</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.GenericTile[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.DynamicContainer.prototype.removeAllTiles = function() { return new Array(); };

/**
 * 
 * Removes an tile from the aggregation named <code>tiles</code>.
 * @param {int | string | sap.suite.ui.commons.GenericTile} vTile the tile to remove or its index or id
 * @return {sap.suite.ui.commons.GenericTile} the removed tile or null
 * @public
 * 
 */
sap.suite.ui.commons.DynamicContainer.prototype.removeTile = function(vTile) { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Setter for property <code>displayTime</code>.
 * </p><p>
 * Default value is <code>5000</code> 
 * @param {int} iDisplayTime  new value for property <code>displayTime</code>
 * @return {sap.suite.ui.commons.DynamicContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DynamicContainer.prototype.setDisplayTime = function(iDisplayTime) { return new sap.suite.ui.commons.DynamicContainer(); };

/**
 * 
 * Setter for property <code>transitionTime</code>.
 * </p><p>
 * Default value is <code>500</code> 
 * @param {int} iTransitionTime  new value for property <code>transitionTime</code>
 * @return {sap.suite.ui.commons.DynamicContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DynamicContainer.prototype.setTransitionTime = function(iTransitionTime) { return new sap.suite.ui.commons.DynamicContainer(); };


// ---- sap.suite.ui.commons.FacetOverview --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new FacetOverview.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getQuantity quantity} : int (default: -1)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '10rem')</li>
 * <li>{@link #getRowSpan rowSpan} : int (default: 1)</li>
 * <li>{@link #getHeightType heightType} : sap.suite.ui.commons.FacetOverviewHeight (default: sap.suite.ui.commons.FacetOverviewHeight.None)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.FacetOverview#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.FacetOverview#event:heightChange heightChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control is used in UnifiedThingInspector to display the preview of the facet content.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.FacetOverview = function(sId,mSettings) {};
/**
 * 
 * This event is fired when a new value to the heightType or height property is set.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.FacetOverview.prototype.heightChange = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when the user chooses the control. Provides an event with parameter id, the ID of the chosen control.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The control ID.
 * @public
 */
sap.suite.ui.commons.FacetOverview.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'heightChange' event of this <code>sap.suite.ui.commons.FacetOverview</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.FacetOverview</code>.<br/> itself. 
 * </p><p>
 * This event is fired when a new value to the heightType or height property is set.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.FacetOverview</code>.<br/> itself.
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.attachHeightChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.FacetOverview</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.FacetOverview</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses the control. Provides an event with parameter id, the ID of the chosen control.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.FacetOverview</code>.<br/> itself.
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * 
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.destroyContent = function() { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'heightChange' event of this <code>sap.suite.ui.commons.FacetOverview</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.detachHeightChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.FacetOverview</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.FacetOverview with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.FacetOverview.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event heightChange to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.fireHeightChange = function(mArguments) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * 
 * Fire event press to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The control ID.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.firePress = function(mArguments) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The content that appears in the left part of the control.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>height</code>.
 * Defines the height of the control only if the heightType prperty is set to None. Must be set in rems for the correct work in the UnifiedThingInspector.
 * </p><p>
 * Default value is <code>10rem</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * This property was replaced by heightType property.
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>heightType</code>.
 * Indicates the height of the control in the predifened values. If set to None, then the height is defined by the depricated height property.
 * </p><p>
 * Default value is <code>None</code>
 * @return {sap.suite.ui.commons.FacetOverviewHeight} the value of property <code>heightType</code>
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.getHeightType = function() { return new sap.suite.ui.commons.FacetOverviewHeight(); };

/**
 * 
 * Getter for property <code>quantity</code>.
 * Displays a label with the number of items in the right part of the control.
 * </p><p>
 * Default value is <code>-1</code>
 * @return {int} the value of property <code>quantity</code>
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.getQuantity = function() { return 0; };

/**
 * 
 * Getter for property <code>rowSpan</code>.
 * Defines the number of rows that the control represents in an external layout.
 * </p><p>
 * Default value is <code>1</code>
 * @return {int} the value of property <code>rowSpan</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * It is not used any more for the laoyut calculations in UnifiedThingInspector.
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.getRowSpan = function() { return 0; };

/**
 * 
 * Getter for property <code>title</code>.
 * This property is shown in the upper left part of control.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>width</code>.
 * Defines the width of the control. By default, the value is empty and the control inhertis the size from its content.
 * </p><p>
 * Default value is <code>auto</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.setContent = function(oContent) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>10rem</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * This property was replaced by heightType property.
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.setHeight = function(sHeight) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * 
 * Setter for property <code>heightType</code>.
 * </p><p>
 * Default value is <code>None</code> 
 * @param {sap.suite.ui.commons.FacetOverviewHeight} oHeightType  new value for property <code>heightType</code>
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.setHeightType = function(oHeightType) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * 
 * Setter for property <code>quantity</code>.
 * </p><p>
 * Default value is <code>-1</code> 
 * @param {int} iQuantity  new value for property <code>quantity</code>
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.setQuantity = function(iQuantity) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * 
 * Setter for property <code>rowSpan</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {int} iRowSpan  new value for property <code>rowSpan</code>
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * It is not used any more for the laoyut calculations in UnifiedThingInspector.
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.setRowSpan = function(iRowSpan) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>auto</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.setWidth = function(sWidth) { return new sap.suite.ui.commons.FacetOverview(); };


// ---- sap.suite.ui.commons.FacetOverviewHeight --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.FacetOverviewHeight.toString = function() { return ""; };

// ---- sap.suite.ui.commons.FeedItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new FeedItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getImage image} : sap.ui.core.URI</li>
 * <li>{@link #getLink link} : sap.ui.core.URI</li>
 * <li>{@link #getSource source} : string</li>
 * <li>{@link #getPublicationDate publicationDate} : object</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This element represents a news feed item.
 * @extends sap.ui.core.Element
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.FeedItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.FeedItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.FeedItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>image</code>.
 * The background image for the feed item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>image</code>
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.getImage = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>link</code>.
 * The target location of the feed item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>link</code>
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.getLink = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>publicationDate</code>.
 * The date the feed was published.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>publicationDate</code>
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.getPublicationDate = function() { return new Object(); };

/**
 * 
 * Getter for property <code>source</code>.
 * The source of the feed item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>source</code>
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.getSource = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * The title of the feed item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.getTitle = function() { return ""; };

/**
 * 
 * validate the url first and then set the image property
 * @param oImage
 *                {object}
 * @public
 */
sap.suite.ui.commons.FeedItem.prototype.setImage = function(oImage) { return null; };

/**
 * 
 * validate the url first and then set the link property
 * @param sLink
 *                {string}
 * @public
 */
sap.suite.ui.commons.FeedItem.prototype.setLink = function(sLink) { return null; };

/**
 * 
 * Setter for property <code>publicationDate</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oPublicationDate  new value for property <code>publicationDate</code>
 * @return {sap.suite.ui.commons.FeedItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.setPublicationDate = function(oPublicationDate) { return new sap.suite.ui.commons.FeedItem(); };

/**
 * 
 * Setter for property <code>source</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSource  new value for property <code>source</code>
 * @return {sap.suite.ui.commons.FeedItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.setSource = function(sSource) { return new sap.suite.ui.commons.FeedItem(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.FeedItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.FeedItem(); };


// ---- sap.suite.ui.commons.FeedItemHeader --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new FeedItemHeader.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getImage image} : sap.ui.core.URI</li>
 * <li>{@link #getLink link} : sap.ui.core.URI</li>
 * <li>{@link #getSource source} : string</li>
 * <li>{@link #getPublicationDate publicationDate} : object</li>
 * <li>{@link #getDescription description} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control displays feed item header information.
 * @extends sap.m.ListItemBase
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.FeedItemHeader = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.FeedItemHeader with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.FeedItemHeader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>description</code>.
 * The description of the feed item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>description</code>
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.getDescription = function() { return ""; };

/**
 * 
 * Getter for property <code>image</code>.
 * The image associated with the feed item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>image</code>
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.getImage = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>link</code>.
 * The target location of the feed item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>link</code>
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.getLink = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>publicationDate</code>.
 * The date the feed item was published.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>publicationDate</code>
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.getPublicationDate = function() { return new Object(); };

/**
 * 
 * Getter for property <code>source</code>.
 * The source of the feed item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>source</code>
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.getSource = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * The title of the feed item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.getTitle = function() { return ""; };

/**
 * 
 * Setter for property <code>description</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.suite.ui.commons.FeedItemHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.setDescription = function(sDescription) { return new sap.suite.ui.commons.FeedItemHeader(); };

/**
 * 
 * Sets the specified image URI if it is valid, otherwise an error messsage is logged.
 * @param sImageUri {String}
 * @public
 */
sap.suite.ui.commons.FeedItemHeader.prototype.setImage = function(sImageUri) { return null; };

/**
 * 
 * Sets the specified link URL if it is valid, otherwise an error messsage is logged.
 * @param sLinkUri {String}
 * @public
 */
sap.suite.ui.commons.FeedItemHeader.prototype.setLink = function(sLinkUri) { return null; };

/**
 * 
 * Setter for property <code>publicationDate</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oPublicationDate  new value for property <code>publicationDate</code>
 * @return {sap.suite.ui.commons.FeedItemHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.setPublicationDate = function(oPublicationDate) { return new sap.suite.ui.commons.FeedItemHeader(); };

/**
 * 
 * Setter for property <code>source</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSource  new value for property <code>source</code>
 * @return {sap.suite.ui.commons.FeedItemHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.setSource = function(sSource) { return new sap.suite.ui.commons.FeedItemHeader(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.FeedItemHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.FeedItemHeader(); };


// ---- sap.suite.ui.commons.FeedTile --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new FeedTile.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDisplayDuration displayDuration} : int (default: 5)</li>
 * <li>{@link #getDisplayArticleImage displayArticleImage} : boolean (default: true)</li>
 * <li>{@link #getSource source} : string</li>
 * <li>{@link #getDefaultImages defaultImages} : sap.ui.core.URI[]</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.suite.ui.commons.FeedItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.FeedTile#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control displays news feeds.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.FeedTile = function(sId,mSettings) {};
/**
 * 
 * The event fired when the user clicks on the control.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.FeedTile.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.suite.ui.commons.FeedItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.addItem = function(oItem) { return new sap.suite.ui.commons.FeedTile(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.FeedTile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.FeedTile</code>.<br/> itself. 
 * </p><p>
 * The event fired when the user clicks on the control.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.FeedTile</code>.<br/> itself.
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.FeedTile(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.destroyItems = function() { return new sap.suite.ui.commons.FeedTile(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.FeedTile</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.FeedTile(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.FeedTile with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.FeedTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.firePress = function(mArguments) { return new sap.suite.ui.commons.FeedTile(); };

/**
 * 
 * Getter for property <code>defaultImages</code>.
 * A list of default images that is cycled by the control when no image is available for a feed item or when no feed items exist. After a random image is displayed first time, control cycles through this list of images.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI[]} the value of property <code>defaultImages</code>
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.getDefaultImages = function() { return new Array(); };

/**
 * 
 * Getter for property <code>displayArticleImage</code>.
 * To display article Image or not. If it is true, the article Image will be displayed based on precedence. If it is false, the default image will be displayed.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>displayArticleImage</code>
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.getDisplayArticleImage = function() { return false; };

/**
 * 
 * Getter for property <code>displayDuration</code>.
 * The length of time in seconds the control displays each feed item. Default value is 5 seconds.
 * </p><p>
 * Default value is <code>5</code>
 * @return {int} the value of property <code>displayDuration</code>
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.getDisplayDuration = function() { return 0; };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * The feed items the control cycles through.
 * @return {sap.suite.ui.commons.FeedItem[]}
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>source</code>.
 * The source of the feed item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>source</code>
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.getSource = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.suite.ui.commons.FeedItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.FeedItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.suite.ui.commons.FeedItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.insertItem = function(oItem,iIndex) { return new sap.suite.ui.commons.FeedTile(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.FeedItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.suite.ui.commons.FeedItem} vItem the item to remove or its index or id
 * @return {sap.suite.ui.commons.FeedItem} the removed item or null
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.removeItem = function(vItem) { return new sap.suite.ui.commons.FeedItem(); };

/**
 * 
 * Validate the array of URI first and then set the defaultImages property
 * @param oDefaultImages
 *            {object[]}
 * @public
 */
sap.suite.ui.commons.FeedTile.prototype.setDefaultImages = function(oDefaultImages) { return null; };

/**
 * 
 * Setter for property <code>displayArticleImage</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bDisplayArticleImage  new value for property <code>displayArticleImage</code>
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.setDisplayArticleImage = function(bDisplayArticleImage) { return new sap.suite.ui.commons.FeedTile(); };

/**
 * 
 * Set displayDuration property for the control
 * @param iDisplayDuration
 *            {int}
 * @public
 */
sap.suite.ui.commons.FeedTile.prototype.setDisplayDuration = function(iDisplayDuration) { return null; };

/**
 * 
 * Setter for property <code>source</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSource  new value for property <code>source</code>
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.setSource = function(sSource) { return new sap.suite.ui.commons.FeedTile(); };

/**
 * 
 * Set a new model of feed items, such as when a feed aggregator has collected the latest feed items. This model is staged (not immediately set on the control) to avoid
 * re-rendering before the currently displayed article is faded out. Therefore a smooth transition between the display of feed items is always maintained.
 * @param oModel
 *            Model of new feed items.
 * @public
 */
sap.suite.ui.commons.FeedTile.prototype.stageModel = function(oModel) { return null; };


// ---- sap.suite.ui.commons.FrameType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.FrameType.toString = function() { return ""; };

// ---- sap.suite.ui.commons.GenericTile --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new GenericTile.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getHeader header} : string</li>
 * <li>{@link #getSubheader subheader} : string</li>
 * <li>{@link #getFailedText failedText} : string</li>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: sap.suite.ui.commons.InfoTileSize.Auto)</li>
 * <li>{@link #getFrameType frameType} : sap.suite.ui.commons.FrameType (default: sap.suite.ui.commons.FrameType.OneByOne)</li>
 * <li>{@link #getBackgroundImage backgroundImage} : sap.ui.core.URI</li>
 * <li>{@link #getHeaderImage headerImage} : sap.ui.core.URI</li>
 * <li>{@link #getState state} : sap.suite.ui.commons.LoadState (default: sap.suite.ui.commons.LoadState.Loaded)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTileContent tileContent} : sap.suite.ui.commons.TileContent[]</li>
 * <li>{@link #getIcon icon} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.GenericTile#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The tile control that displays the title, description, and customizable main area.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.GenericTile = function(sId,mSettings) {};
/**
 * 
 * The event is fired when the user chooses the tile.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.GenericTile.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Adds some tileContent <code>oTileContent</code> 
 * to the aggregation named <code>tileContent</code>.
 * @param {sap.suite.ui.commons.TileContent}
 *            oTileContent the tileContent to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.addTileContent = function(oTileContent) { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.GenericTile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.GenericTile</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses the tile.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.GenericTile</code>.<br/> itself.
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Destroys the icon in the aggregation 
 * named <code>icon</code>.
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.destroyIcon = function() { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Destroys all the tileContent in the aggregation 
 * named <code>tileContent</code>.
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.destroyTileContent = function() { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.GenericTile</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.GenericTile with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.GenericTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.firePress = function(mArguments) { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Getter for property <code>backgroundImage</code>.
 * The URI of the background image.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>backgroundImage</code>
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.getBackgroundImage = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>failedText</code>.
 * The message that appears when the control is in the Failed state.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>failedText</code>
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.getFailedText = function() { return ""; };

/**
 * 
 * Getter for property <code>frameType</code>.
 * The frame type: 1x1 or 2x1.
 * </p><p>
 * Default value is <code>OneByOne</code>
 * @return {sap.suite.ui.commons.FrameType} the value of property <code>frameType</code>
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.getFrameType = function() { return new sap.suite.ui.commons.FrameType(); };

/**
 * 
 * Getter for property <code>header</code>.
 * The header of the tile.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>header</code>
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.getHeader = function() { return ""; };

/**
 * 
 * Getter for property <code>headerImage</code>.
 * The image to be displayed as a graphical element within the header. This can be an image or an icon from the icon font.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>headerImage</code>
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.getHeaderImage = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for aggregation <code>icon</code>.<br/>
 * An icon or image to be displayed in the control.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.getIcon = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>size</code>.
 * The size of the tile. If not set, then the default size is applied based on the device tile.
 * </p><p>
 * Default value is <code>Auto</code>
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.getSize = function() { return new sap.suite.ui.commons.InfoTileSize(); };

/**
 * 
 * Getter for property <code>state</code>.
 * The load status.
 * </p><p>
 * Default value is <code>Loaded</code>
 * @return {sap.suite.ui.commons.LoadState} the value of property <code>state</code>
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.getState = function() { return new sap.suite.ui.commons.LoadState(); };

/**
 * 
 * Getter for property <code>subheader</code>.
 * The subheader of the tile.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>subheader</code>
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.getSubheader = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>tileContent</code>.<br/>
 * The switchable view that depends on the tile type.
 * @return {sap.suite.ui.commons.TileContent[]}
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.getTileContent = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.suite.ui.commons.TileContent</code> in the aggregation named <code>tileContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.TileContent}
 *            oTileContent the tileContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.indexOfTileContent = function(oTileContent) { return 0; };

/**
 * 
 * Inserts a tileContent into the aggregation named <code>tileContent</code>.
 * @param {sap.suite.ui.commons.TileContent}
 *          oTileContent the tileContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the tileContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the tileContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the tileContent is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.insertTileContent = function(oTileContent,iIndex) { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>tileContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.TileContent[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.removeAllTileContent = function() { return new Array(); };

/**
 * 
 * Removes an tileContent from the aggregation named <code>tileContent</code>.
 * @param {int | string | sap.suite.ui.commons.TileContent} vTileContent the tileContent to remove or its index or id
 * @return {sap.suite.ui.commons.TileContent} the removed tileContent or null
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.removeTileContent = function(vTileContent) { return new sap.suite.ui.commons.TileContent(); };

/**
 * 
 * Setter for property <code>backgroundImage</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sBackgroundImage  new value for property <code>backgroundImage</code>
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.setBackgroundImage = function(sBackgroundImage) { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Setter for property <code>failedText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFailedText  new value for property <code>failedText</code>
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.setFailedText = function(sFailedText) { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Setter for property <code>frameType</code>.
 * </p><p>
 * Default value is <code>OneByOne</code> 
 * @param {sap.suite.ui.commons.FrameType} oFrameType  new value for property <code>frameType</code>
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.setFrameType = function(oFrameType) { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Setter for property <code>header</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sHeader  new value for property <code>header</code>
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.setHeader = function(sHeader) { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Setter for property <code>headerImage</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sHeaderImage  new value for property <code>headerImage</code>
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.setHeaderImage = function(sHeaderImage) { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Setter for the aggregated <code>icon</code>.
 * @param {sap.ui.core.Control} oIcon
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.setIcon = function(oIcon) { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Setter for property <code>size</code>.
 * </p><p>
 * Default value is <code>Auto</code> 
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.setSize = function(oSize) { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Setter for property <code>state</code>.
 * </p><p>
 * Default value is <code>Loaded</code> 
 * @param {sap.suite.ui.commons.LoadState} oState  new value for property <code>state</code>
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.setState = function(oState) { return new sap.suite.ui.commons.GenericTile(); };

/**
 * 
 * Setter for property <code>subheader</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSubheader  new value for property <code>subheader</code>
 * @return {sap.suite.ui.commons.GenericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile.prototype.setSubheader = function(sSubheader) { return new sap.suite.ui.commons.GenericTile(); };


// ---- sap.suite.ui.commons.HeaderCell --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new HeaderCell.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getHeigth heigth} : sap.ui.core.CSSSize (default: '100px')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '106px')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getWest west} : sap.suite.ui.commons.HeaderCellItem</li>
 * <li>{@link #getNorth north} : sap.suite.ui.commons.HeaderCellItem</li>
 * <li>{@link #getEast east} : sap.suite.ui.commons.HeaderCellItem</li>
 * <li>{@link #getSouth south} : sap.suite.ui.commons.HeaderCellItem</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control contains 4 cells (West, North, East, South). It can display one or more controls in different layouts. Each aggregation must contain only one instance of HeaderCellItem.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.HeaderCell = function(sId,mSettings) {};
/**
 * 
 * Destroys the east in the aggregation 
 * named <code>east</code>.
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.destroyEast = function() { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * 
 * Destroys the north in the aggregation 
 * named <code>north</code>.
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.destroyNorth = function() { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * 
 * Destroys the south in the aggregation 
 * named <code>south</code>.
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.destroySouth = function() { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * 
 * Destroys the west in the aggregation 
 * named <code>west</code>.
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.destroyWest = function() { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.HeaderCell with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.HeaderCell.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>east</code>.<br/>
 * Objecth that contains control to render in east area of the HeaderCell.
 * @return {sap.suite.ui.commons.HeaderCellItem}
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.getEast = function() { return new sap.suite.ui.commons.HeaderCellItem(); };

/**
 * 
 * Getter for property <code>height</code>.
 * Height of the HeaderCell control.
 * </p><p>
 * Default value is <code>106px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>heigth</code>.
 * Height of the HeaderCell control.
 * </p><p>
 * Default value is <code>100px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>heigth</code>
 * @public
 * @deprecated Since version 1.20.2. 
 * Wrong property name
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.getHeigth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for aggregation <code>north</code>.<br/>
 * Objecth that contains control to render in north area of the HeaderCell.
 * @return {sap.suite.ui.commons.HeaderCellItem}
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.getNorth = function() { return new sap.suite.ui.commons.HeaderCellItem(); };

/**
 * 
 * Getter for aggregation <code>south</code>.<br/>
 * Objecth that contains control to render in south area of the HeaderCell.
 * @return {sap.suite.ui.commons.HeaderCellItem}
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.getSouth = function() { return new sap.suite.ui.commons.HeaderCellItem(); };

/**
 * 
 * Getter for aggregation <code>west</code>.<br/>
 * Objecth that contains control to render in west area of the HeaderCell.
 * @return {sap.suite.ui.commons.HeaderCellItem}
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.getWest = function() { return new sap.suite.ui.commons.HeaderCellItem(); };

/**
 * 
 * Setter for the aggregated <code>east</code>.
 * @param {sap.suite.ui.commons.HeaderCellItem} oEast
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.setEast = function(oEast) { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>106px</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.setHeight = function(sHeight) { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * 
 * Setter for property <code>heigth</code>.
 * </p><p>
 * Default value is <code>100px</code> 
 * @param {sap.ui.core.CSSSize} sHeigth  new value for property <code>heigth</code>
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.20.2. 
 * Wrong property name
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.setHeigth = function(sHeigth) { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * 
 * Setter for the aggregated <code>north</code>.
 * @param {sap.suite.ui.commons.HeaderCellItem} oNorth
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.setNorth = function(oNorth) { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * 
 * Setter for the aggregated <code>south</code>.
 * @param {sap.suite.ui.commons.HeaderCellItem} oSouth
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.setSouth = function(oSouth) { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * 
 * Setter for the aggregated <code>west</code>.
 * @param {sap.suite.ui.commons.HeaderCellItem} oWest
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.setWest = function(oWest) { return new sap.suite.ui.commons.HeaderCell(); };


// ---- sap.suite.ui.commons.HeaderCellItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new HeaderCellItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Object that contains instance of control and infomation about height. It should be used inside sap.suite.ui.commons.HeaderCell
 * @extends sap.ui.core.Element
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.HeaderCellItem = function(sId,mSettings) {};
/**
 * 
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.HeaderCellItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCellItem.prototype.destroyContent = function() { return new sap.suite.ui.commons.HeaderCellItem(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.HeaderCellItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.HeaderCellItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * Instance of UI5 Control that is used as content.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCellItem.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>height</code>.
 * Height of area to occupy by control.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCellItem.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent
 * @return {sap.suite.ui.commons.HeaderCellItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCellItem.prototype.setContent = function(oContent) { return new sap.suite.ui.commons.HeaderCellItem(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.HeaderCellItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCellItem.prototype.setHeight = function(sHeight) { return new sap.suite.ui.commons.HeaderCellItem(); };


// ---- sap.suite.ui.commons.HeaderContainer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new HeaderContainer.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getScrollStep scrollStep} : int (default: 300)</li>
 * <li>{@link #getScrollTime scrollTime} : int (default: 500)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Container that provides horizontal layout. Provides horizontal scroll on tablet and phone. On desktop provides scroll left and scroll right buttons. This control supports keyboard navigation. You can use left and right arrow keys to navigate through the inner contents. The Home key puts focus on the first control and the End key puts focus on the last control. Use Enter or Space to choose the control.
 * @extends sap.ui.core.Control
 * @implements sap.m.ObjectHeaderContainer
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.HeaderContainer = function(sId,mSettings) {};
/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.core.Control}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.HeaderContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.addItem = function(oItem) { return new sap.suite.ui.commons.HeaderContainer(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.suite.ui.commons.HeaderContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.destroyItems = function() { return new sap.suite.ui.commons.HeaderContainer(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.HeaderContainer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.HeaderContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * Items to add to HeaderContainer.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>scrollStep</code>.
 * Number of pixels to scroll when the user chooses Next or Previous buttons. Relevant only for desktop.
 * </p><p>
 * Default value is <code>300</code>
 * @return {int} the value of property <code>scrollStep</code>
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.getScrollStep = function() { return 0; };

/**
 * 
 * Getter for property <code>scrollTime</code>.
 * Scroll animation time miliseconds.
 * </p><p>
 * Default value is <code>500</code>
 * @return {int} the value of property <code>scrollTime</code>
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.getScrollTime = function() { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.core.Control}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.HeaderContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.insertItem = function(oItem,iIndex) { return new sap.suite.ui.commons.HeaderContainer(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.core.Control} vItem the item to remove or its index or id
 * @return {sap.ui.core.Control} the removed item or null
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.removeItem = function(vItem) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>scrollStep</code>.
 * </p><p>
 * Default value is <code>300</code> 
 * @param {int} iScrollStep  new value for property <code>scrollStep</code>
 * @return {sap.suite.ui.commons.HeaderContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.setScrollStep = function(iScrollStep) { return new sap.suite.ui.commons.HeaderContainer(); };

/**
 * 
 * Setter for property <code>scrollTime</code>.
 * </p><p>
 * Default value is <code>500</code> 
 * @param {int} iScrollTime  new value for property <code>scrollTime</code>
 * @return {sap.suite.ui.commons.HeaderContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.setScrollTime = function(iScrollTime) { return new sap.suite.ui.commons.HeaderContainer(); };


// ---- sap.suite.ui.commons.InfoTile --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new InfoTile.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getFooter footer} : string</li>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: "Auto")</li>
 * <li>{@link #getState state} : sap.suite.ui.commons.LoadState (default: sap.suite.ui.commons.LoadState.Loading)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.InfoTile#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The tile control that displays the title, description, footer, and customizable main area.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @experimental Since version 1.19. 
 * API is not yet finished and might change completely
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.InfoTile = function(sId,mSettings) {};
/**
 * 
 * The event is fired when the user chooses the tile.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.InfoTile.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.InfoTile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.InfoTile</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses the tile.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.InfoTile</code>.<br/> itself.
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * 
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.destroyContent = function() { return new sap.suite.ui.commons.InfoTile(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.InfoTile</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.InfoTile with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.InfoTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.firePress = function(mArguments) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The switchable view that depends on the tile type.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>description</code>.
 * Shows the description of the selected tile.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>description</code>
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.getDescription = function() { return ""; };

/**
 * 
 * Getter for property <code>footer</code>.
 * The footer text of the tile.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>footer</code>
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.getFooter = function() { return ""; };

/**
 * 
 * Getter for property <code>size</code>.
 * Updates the size of the tile. If not set then the default size is applied based on the device tile.
 * </p><p>
 * Default value is <code>"Auto"</code>
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.getSize = function() { return new sap.suite.ui.commons.InfoTileSize(); };

/**
 * 
 * Getter for property <code>state</code>.
 * Indicates the load status.
 * </p><p>
 * Default value is <code>Loading</code>
 * @return {sap.suite.ui.commons.LoadState} the value of property <code>state</code>
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.getState = function() { return new sap.suite.ui.commons.LoadState(); };

/**
 * 
 * Getter for property <code>title</code>.
 * The title of the tile.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.getTitle = function() { return ""; };

/**
 * 
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.setContent = function(oContent) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * 
 * Setter for property <code>description</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.setDescription = function(sDescription) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * 
 * Setter for property <code>footer</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFooter  new value for property <code>footer</code>
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.setFooter = function(sFooter) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * 
 * Setter for property <code>size</code>.
 * </p><p>
 * Default value is <code>"Auto"</code> 
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.setSize = function(oSize) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * 
 * Setter for property <code>state</code>.
 * </p><p>
 * Default value is <code>Loading</code> 
 * @param {sap.suite.ui.commons.LoadState} oState  new value for property <code>state</code>
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.setState = function(oState) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.InfoTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.InfoTile(); };


// ---- sap.suite.ui.commons.InfoTileSize --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.InfoTileSize.toString = function() { return ""; };

// ---- sap.suite.ui.commons.InfoTileTextColor --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.InfoTileTextColor.toString = function() { return ""; };

// ---- sap.suite.ui.commons.InfoTileValueColor --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.InfoTileValueColor.toString = function() { return ""; };

// ---- sap.suite.ui.commons.JamContent --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new JamContent.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: sap.suite.ui.commons.InfoTileSize.Auto)</li>
 * <li>{@link #getContentText contentText} : string</li>
 * <li>{@link #getSubheader subheader} : string</li>
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getValueColor valueColor} : sap.suite.ui.commons.InfoTileValueColor</li>
 * <li>{@link #getTruncateValueTo truncateValueTo} : int (default: 4)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.JamContent#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control displays the jam content text, subheader, and numeric value in a tile.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.JamContent = function(sId,mSettings) {};
/**
 * 
 * The event is fired when the user chooses the jam content.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.JamContent.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.JamContent</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.JamContent</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses the jam content.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.JamContent</code>.<br/> itself.
 * @return {sap.suite.ui.commons.JamContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.JamContent.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.JamContent(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.JamContent</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.JamContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.JamContent.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.JamContent(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.JamContent with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.JamContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.JamContent} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.JamContent.prototype.firePress = function(mArguments) { return new sap.suite.ui.commons.JamContent(); };

/**
 * 
 * Getter for property <code>contentText</code>.
 * The content text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>contentText</code>
 * @public
 * 
 */
sap.suite.ui.commons.JamContent.prototype.getContentText = function() { return ""; };

/**
 * 
 * Getter for property <code>size</code>.
 * Updates the size of the chart. If not set then the default size is applied based on the device tile.
 * </p><p>
 * Default value is <code>Auto</code>
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.suite.ui.commons.JamContent.prototype.getSize = function() { return new sap.suite.ui.commons.InfoTileSize(); };

/**
 * 
 * Getter for property <code>subheader</code>.
 * The subheader.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>subheader</code>
 * @public
 * 
 */
sap.suite.ui.commons.JamContent.prototype.getSubheader = function() { return ""; };

/**
 * 
 * Getter for property <code>truncateValueTo</code>.
 * The number of characters to display for the value property.
 * </p><p>
 * Default value is <code>4</code>
 * @return {int} the value of property <code>truncateValueTo</code>
 * @public
 * 
 */
sap.suite.ui.commons.JamContent.prototype.getTruncateValueTo = function() { return 0; };

/**
 * 
 * Getter for property <code>value</code>.
 * The actual value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.suite.ui.commons.JamContent.prototype.getValue = function() { return ""; };

/**
 * 
 * Getter for property <code>valueColor</code>.
 * The semantic color of the value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.suite.ui.commons.InfoTileValueColor} the value of property <code>valueColor</code>
 * @public
 * 
 */
sap.suite.ui.commons.JamContent.prototype.getValueColor = function() { return new sap.suite.ui.commons.InfoTileValueColor(); };

/**
 * 
 * Setter for property <code>contentText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sContentText  new value for property <code>contentText</code>
 * @return {sap.suite.ui.commons.JamContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.JamContent.prototype.setContentText = function(sContentText) { return new sap.suite.ui.commons.JamContent(); };

/**
 * 
 * Setter for property <code>size</code>.
 * </p><p>
 * Default value is <code>Auto</code> 
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.JamContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.JamContent.prototype.setSize = function(oSize) { return new sap.suite.ui.commons.JamContent(); };

/**
 * 
 * Setter for property <code>subheader</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSubheader  new value for property <code>subheader</code>
 * @return {sap.suite.ui.commons.JamContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.JamContent.prototype.setSubheader = function(sSubheader) { return new sap.suite.ui.commons.JamContent(); };

/**
 * 
 * Setter for property <code>truncateValueTo</code>.
 * </p><p>
 * Default value is <code>4</code> 
 * @param {int} iTruncateValueTo  new value for property <code>truncateValueTo</code>
 * @return {sap.suite.ui.commons.JamContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.JamContent.prototype.setTruncateValueTo = function(iTruncateValueTo) { return new sap.suite.ui.commons.JamContent(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.suite.ui.commons.JamContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.JamContent.prototype.setValue = function(sValue) { return new sap.suite.ui.commons.JamContent(); };

/**
 * 
 * Setter for property <code>valueColor</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.suite.ui.commons.InfoTileValueColor} oValueColor  new value for property <code>valueColor</code>
 * @return {sap.suite.ui.commons.JamContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.JamContent.prototype.setValueColor = function(oValueColor) { return new sap.suite.ui.commons.JamContent(); };


// ---- sap.suite.ui.commons.KpiTile --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new KpiTile.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getDoubleFontSize doubleFontSize} : boolean (default: true)</li>
 * <li>{@link #getValueUnit valueUnit} : string</li>
 * <li>{@link #getValueScale valueScale} : string</li>
 * <li>{@link #getValueStatus valueStatus} : sap.suite.ui.commons.ValueStatus (default: sap.suite.ui.commons.ValueStatus.Neutral)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control is used in UnifiedThingInspector to display object-related KPIs in a factsheet.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.KpiTile = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.KpiTile with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.KpiTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>description</code>.
 * The Description field.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>description</code>
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.getDescription = function() { return ""; };

/**
 * 
 * Getter for property <code>doubleFontSize</code>.
 * If true, the value text will have 2 rem, if false - 1 rem.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>doubleFontSize</code>
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.getDoubleFontSize = function() { return false; };

/**
 * 
 * Getter for property <code>value</code>.
 * The Value field.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.getValue = function() { return ""; };

/**
 * 
 * Getter for property <code>valueScale</code>.
 * The scale of a value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>valueScale</code>
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.getValueScale = function() { return ""; };

/**
 * 
 * Getter for property <code>valueStatus</code>.
 * The status color of the value. Depending on the status the tile is displayed in different colors.
 * </p><p>
 * Default value is <code>Neutral</code>
 * @return {sap.suite.ui.commons.ValueStatus} the value of property <code>valueStatus</code>
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.getValueStatus = function() { return new sap.suite.ui.commons.ValueStatus(); };

/**
 * 
 * Getter for property <code>valueUnit</code>.
 * The percent sign, currency symbol, or unit for a value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>valueUnit</code>
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.getValueUnit = function() { return ""; };

/**
 * 
 * Setter for property <code>description</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.suite.ui.commons.KpiTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.setDescription = function(sDescription) { return new sap.suite.ui.commons.KpiTile(); };

/**
 * 
 * Setter for property <code>doubleFontSize</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bDoubleFontSize  new value for property <code>doubleFontSize</code>
 * @return {sap.suite.ui.commons.KpiTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.setDoubleFontSize = function(bDoubleFontSize) { return new sap.suite.ui.commons.KpiTile(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.suite.ui.commons.KpiTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.setValue = function(sValue) { return new sap.suite.ui.commons.KpiTile(); };

/**
 * 
 * Setter for property <code>valueScale</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValueScale  new value for property <code>valueScale</code>
 * @return {sap.suite.ui.commons.KpiTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.setValueScale = function(sValueScale) { return new sap.suite.ui.commons.KpiTile(); };

/**
 * 
 * Setter for property <code>valueStatus</code>.
 * </p><p>
 * Default value is <code>Neutral</code> 
 * @param {sap.suite.ui.commons.ValueStatus} oValueStatus  new value for property <code>valueStatus</code>
 * @return {sap.suite.ui.commons.KpiTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.setValueStatus = function(oValueStatus) { return new sap.suite.ui.commons.KpiTile(); };

/**
 * 
 * Setter for property <code>valueUnit</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValueUnit  new value for property <code>valueUnit</code>
 * @return {sap.suite.ui.commons.KpiTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.setValueUnit = function(sValueUnit) { return new sap.suite.ui.commons.KpiTile(); };


// ---- sap.suite.ui.commons.LaunchTile --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new LaunchTile.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getLink link} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.LaunchTile#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control launches a URL.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @experimental Since version 1.14. 
 * API is not yet finished and might change completely
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.LaunchTile = function(sId,mSettings) {};
/**
 * 
 * The event fired when the user clicks on the control.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.LaunchTile.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.LaunchTile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.LaunchTile</code>.<br/> itself. 
 * </p><p>
 * The event fired when the user clicks on the control.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.LaunchTile</code>.<br/> itself.
 * @return {sap.suite.ui.commons.LaunchTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.LaunchTile(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.LaunchTile</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.LaunchTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.LaunchTile(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.LaunchTile with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.LaunchTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.LaunchTile} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.firePress = function(mArguments) { return new sap.suite.ui.commons.LaunchTile(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * Icon associated with the launch destination.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>link</code>.
 * The launch destination.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>link</code>
 * @public
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.getLink = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>title</code>.
 * Descriptive title of the launch destination.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.getTitle = function() { return ""; };

/**
 * 
 * Setter for property <code>link</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sLink  new value for property <code>link</code>
 * @return {sap.suite.ui.commons.LaunchTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.setLink = function(sLink) { return new sap.suite.ui.commons.LaunchTile(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.LaunchTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.LaunchTile(); };


// ---- sap.suite.ui.commons.LinkActionSheet --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new LinkActionSheet.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.LinkActionSheet#event:itemPress itemPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.ActionSheet#constructor sap.m.ActionSheet}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control contains one or more sap.m.Button controls or sap.ui.commons.Link controls. The LinkActionSheet control is closed if the user chooses one of the buttons or links. It looks similar to sap.m.Dialog in iPhone and Android, and to sap.m.Popover in iPad.
 * @extends sap.m.ActionSheet
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.LinkActionSheet = function(sId,mSettings) {};
/**
 * 
 * The event is fired when the user chooses any item.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.item The object that initiated the event.
 * @public
 */
sap.suite.ui.commons.LinkActionSheet.prototype.itemPress = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.core.Control}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.LinkActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.addItem = function(oItem) { return new sap.suite.ui.commons.LinkActionSheet(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'itemPress' event of this <code>sap.suite.ui.commons.LinkActionSheet</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.LinkActionSheet</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses any item.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.LinkActionSheet</code>.<br/> itself.
 * @return {sap.suite.ui.commons.LinkActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.attachItemPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.LinkActionSheet(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.suite.ui.commons.LinkActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.destroyItems = function() { return new sap.suite.ui.commons.LinkActionSheet(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'itemPress' event of this <code>sap.suite.ui.commons.LinkActionSheet</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.LinkActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.detachItemPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.LinkActionSheet(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.LinkActionSheet with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.LinkActionSheet.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event itemPress to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'item' of type <code>sap.ui.core.Control</code> The object that initiated the event.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.fireItemPress = function(mArguments) { return false; };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * These buttons or links are added to the content area in the LinkActionSheet control. If the user chooses a button or a link, the LinkActionSheet is closed before the event listener is called.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.core.Control}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.LinkActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.insertItem = function(oItem,iIndex) { return new sap.suite.ui.commons.LinkActionSheet(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.core.Control} vItem the item to remove or its index or id
 * @return {sap.ui.core.Control} the removed item or null
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.removeItem = function(vItem) { return new sap.ui.core.Control(); };


// ---- sap.suite.ui.commons.LoadState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.LoadState.toString = function() { return ""; };

// ---- sap.suite.ui.commons.MicroAreaChart --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new MicroAreaChart.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control displays the history of values as a line mini chart or an area mini chart.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @experimental Since version 1.19. 
 * API is not yet finished and might change completely
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.MicroAreaChart = function(sId,mSettings) {};
/**
 * 
 * The event is fired when the user chooses the micro area chart.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.MicroAreaChart.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.MicroAreaChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.MicroAreaChart</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses the micro area chart.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.MicroAreaChart</code>.<br/> itself.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Destroys the chart in the aggregation 
 * named <code>chart</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.destroyChart = function() { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Destroys the firstXLabel in the aggregation 
 * named <code>firstXLabel</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.destroyFirstXLabel = function() { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Destroys the firstYLabel in the aggregation 
 * named <code>firstYLabel</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.destroyFirstYLabel = function() { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Destroys the innerMaxThreshold in the aggregation 
 * named <code>innerMaxThreshold</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.destroyInnerMaxThreshold = function() { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Destroys the innerMinThreshold in the aggregation 
 * named <code>innerMinThreshold</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.destroyInnerMinThreshold = function() { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Destroys the lastXLabel in the aggregation 
 * named <code>lastXLabel</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.destroyLastXLabel = function() { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Destroys the lastYLabel in the aggregation 
 * named <code>lastYLabel</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.destroyLastYLabel = function() { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Destroys the maxLabel in the aggregation 
 * named <code>maxLabel</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.destroyMaxLabel = function() { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Destroys the maxThreshold in the aggregation 
 * named <code>maxThreshold</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.destroyMaxThreshold = function() { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Destroys the minLabel in the aggregation 
 * named <code>minLabel</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.destroyMinLabel = function() { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Destroys the minThreshold in the aggregation 
 * named <code>minThreshold</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.destroyMinThreshold = function() { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Destroys the target in the aggregation 
 * named <code>target</code>.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.destroyTarget = function() { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.MicroAreaChart</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.MicroAreaChart with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MicroAreaChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.firePress = function(mArguments) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Getter for aggregation <code>chart</code>.<br/>
 * The configuration of the actual values line. The color property defines the color of the line. Points are rendered in the same sequence as in this aggregation.
 * @return {sap.suite.ui.commons.MicroAreaChartItem}
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getChart = function() { return new sap.suite.ui.commons.MicroAreaChartItem(); };

/**
 * 
 * Getter for aggregation <code>firstXLabel</code>.<br/>
 * The label on X axis for the first point of the chart.
 * @return {sap.suite.ui.commons.MicroAreaChartLabel}
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getFirstXLabel = function() { return new sap.suite.ui.commons.MicroAreaChartLabel(); };

/**
 * 
 * Getter for aggregation <code>firstYLabel</code>.<br/>
 * The label on Y axis for the first point of the chart.
 * @return {sap.suite.ui.commons.MicroAreaChartLabel}
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getFirstYLabel = function() { return new sap.suite.ui.commons.MicroAreaChartLabel(); };

/**
 * 
 * Getter for property <code>height</code>.
 * The height of the chart.
 * </p><p>
 * Default value is <code>190px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for aggregation <code>innerMaxThreshold</code>.<br/>
 * The configuration of the upper line of the inner threshold area. The color property defines the color of the area between inner thresholds. For rendering of the inner threshold area, both innerMaxThreshold and innerMinThreshold aggregations must be defined. Points are rendered in the same sequence as in this aggregation.
 * @return {sap.suite.ui.commons.MicroAreaChartItem}
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getInnerMaxThreshold = function() { return new sap.suite.ui.commons.MicroAreaChartItem(); };

/**
 * 
 * Getter for aggregation <code>innerMinThreshold</code>.<br/>
 * The configuration of the bottom line of the inner threshold area. The color property is ignored. For rendering of the inner threshold area, both innerMaxThreshold and innerMinThreshold aggregations must be defined. Points are rendered in the same sequence as in this aggregation.
 * @return {sap.suite.ui.commons.MicroAreaChartItem}
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getInnerMinThreshold = function() { return new sap.suite.ui.commons.MicroAreaChartItem(); };

/**
 * 
 * Getter for aggregation <code>lastXLabel</code>.<br/>
 * The label on X axis for the last point of the chart.
 * @return {sap.suite.ui.commons.MicroAreaChartLabel}
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getLastXLabel = function() { return new sap.suite.ui.commons.MicroAreaChartLabel(); };

/**
 * 
 * Getter for aggregation <code>lastYLabel</code>.<br/>
 * The label on Y axis for the last point of the chart.
 * @return {sap.suite.ui.commons.MicroAreaChartLabel}
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getLastYLabel = function() { return new sap.suite.ui.commons.MicroAreaChartLabel(); };

/**
 * 
 * Getter for aggregation <code>maxLabel</code>.<br/>
 * The label for the maximum point of the chart.
 * @return {sap.suite.ui.commons.MicroAreaChartLabel}
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getMaxLabel = function() { return new sap.suite.ui.commons.MicroAreaChartLabel(); };

/**
 * 
 * Getter for aggregation <code>maxThreshold</code>.<br/>
 * The configuration of the max threshold area. The color property defines the color of the area above the max threshold line. Points are rendered in the same sequence as in this aggregation.
 * @return {sap.suite.ui.commons.MicroAreaChartItem}
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getMaxThreshold = function() { return new sap.suite.ui.commons.MicroAreaChartItem(); };

/**
 * 
 * Getter for property <code>maxXValue</code>.
 * If this property is set it indicates the value X axis ends with.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {float} the value of property <code>maxXValue</code>
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getMaxXValue = function() { return 0.0; };

/**
 * 
 * Getter for property <code>maxYValue</code>.
 * If this property is set it indicates the value Y axis ends with.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {float} the value of property <code>maxYValue</code>
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getMaxYValue = function() { return 0.0; };

/**
 * 
 * Getter for aggregation <code>minLabel</code>.<br/>
 * The label for the minimum point of the chart.
 * @return {sap.suite.ui.commons.MicroAreaChartLabel}
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getMinLabel = function() { return new sap.suite.ui.commons.MicroAreaChartLabel(); };

/**
 * 
 * Getter for aggregation <code>minThreshold</code>.<br/>
 * The configuration of the min threshold area. The color property defines the color of the area below the min threshold line. Points are rendered in the same sequence as in this aggregation.
 * @return {sap.suite.ui.commons.MicroAreaChartItem}
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getMinThreshold = function() { return new sap.suite.ui.commons.MicroAreaChartItem(); };

/**
 * 
 * Getter for property <code>minXValue</code>.
 * If this property is set it indicates the value X axis starts with.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {float} the value of property <code>minXValue</code>
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getMinXValue = function() { return 0.0; };

/**
 * 
 * Getter for property <code>minYValue</code>.
 * If this property is set it indicates the value Y axis starts with.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {float} the value of property <code>minYValue</code>
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getMinYValue = function() { return 0.0; };

/**
 * 
 * Getter for aggregation <code>target</code>.<br/>
 * The configuration of the target values line. The color property defines the color of the line. Points are rendered in the same sequence as in this aggregation.
 * @return {sap.suite.ui.commons.MicroAreaChartItem}
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getTarget = function() { return new sap.suite.ui.commons.MicroAreaChartItem(); };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the chart.
 * </p><p>
 * Default value is <code>200px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for the aggregated <code>chart</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartItem} oChart
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setChart = function(oChart) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for the aggregated <code>firstXLabel</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartLabel} oFirstXLabel
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setFirstXLabel = function(oFirstXLabel) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for the aggregated <code>firstYLabel</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartLabel} oFirstYLabel
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setFirstYLabel = function(oFirstYLabel) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>190px</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setHeight = function(sHeight) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for the aggregated <code>innerMaxThreshold</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartItem} oInnerMaxThreshold
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setInnerMaxThreshold = function(oInnerMaxThreshold) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for the aggregated <code>innerMinThreshold</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartItem} oInnerMinThreshold
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setInnerMinThreshold = function(oInnerMinThreshold) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for the aggregated <code>lastXLabel</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartLabel} oLastXLabel
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setLastXLabel = function(oLastXLabel) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for the aggregated <code>lastYLabel</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartLabel} oLastYLabel
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setLastYLabel = function(oLastYLabel) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for the aggregated <code>maxLabel</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartLabel} oMaxLabel
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setMaxLabel = function(oMaxLabel) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for the aggregated <code>maxThreshold</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartItem} oMaxThreshold
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setMaxThreshold = function(oMaxThreshold) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for property <code>maxXValue</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {float} fMaxXValue  new value for property <code>maxXValue</code>
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setMaxXValue = function(fMaxXValue) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for property <code>maxYValue</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {float} fMaxYValue  new value for property <code>maxYValue</code>
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setMaxYValue = function(fMaxYValue) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for the aggregated <code>minLabel</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartLabel} oMinLabel
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setMinLabel = function(oMinLabel) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for the aggregated <code>minThreshold</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartItem} oMinThreshold
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setMinThreshold = function(oMinThreshold) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for property <code>minXValue</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {float} fMinXValue  new value for property <code>minXValue</code>
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setMinXValue = function(fMinXValue) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for property <code>minYValue</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {float} fMinYValue  new value for property <code>minYValue</code>
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setMinYValue = function(fMinYValue) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for the aggregated <code>target</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartItem} oTarget
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setTarget = function(oTarget) { return new sap.suite.ui.commons.MicroAreaChart(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>200px</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.MicroAreaChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.commons.MicroAreaChart(); };


// ---- sap.suite.ui.commons.MicroAreaChartItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new MicroAreaChartItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColor color} : sap.suite.ui.commons.InfoTileValueColor (default: sap.suite.ui.commons.InfoTileValueColor.Neutral)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPoints points} : sap.suite.ui.commons.MicroAreaChartPoint[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The configuration of the graphic element on the chart.
 * @extends sap.ui.core.Element
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.MicroAreaChartItem = function(sId,mSettings) {};
/**
 * 
 * Adds some point <code>oPoint</code> 
 * to the aggregation named <code>points</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartPoint}
 *            oPoint the point to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.MicroAreaChartItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartItem.prototype.addPoint = function(oPoint) { return new sap.suite.ui.commons.MicroAreaChartItem(); };

/**
 * 
 * Binder for aggregation <code>points</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.suite.ui.commons.MicroAreaChartItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartItem.prototype.bindPoints = function(sPath,oTemplate,oSorter,aFilters) { return new sap.suite.ui.commons.MicroAreaChartItem(); };

/**
 * 
 * Destroys all the points in the aggregation 
 * named <code>points</code>.
 * @return {sap.suite.ui.commons.MicroAreaChartItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartItem.prototype.destroyPoints = function() { return new sap.suite.ui.commons.MicroAreaChartItem(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.MicroAreaChartItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MicroAreaChartItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>color</code>.
 * The graphic element color.
 * </p><p>
 * Default value is <code>Neutral</code>
 * @return {sap.suite.ui.commons.InfoTileValueColor} the value of property <code>color</code>
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartItem.prototype.getColor = function() { return new sap.suite.ui.commons.InfoTileValueColor(); };

/**
 * 
 * Getter for aggregation <code>points</code>.<br/>
 * The set of points for this graphic element.
 * @return {sap.suite.ui.commons.MicroAreaChartPoint[]}
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartItem.prototype.getPoints = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.suite.ui.commons.MicroAreaChartPoint</code> in the aggregation named <code>points</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.MicroAreaChartPoint}
 *            oPoint the point whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartItem.prototype.indexOfPoint = function(oPoint) { return 0; };

/**
 * 
 * Inserts a point into the aggregation named <code>points</code>.
 * @param {sap.suite.ui.commons.MicroAreaChartPoint}
 *          oPoint the point to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the point should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the point is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the point is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.MicroAreaChartItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartItem.prototype.insertPoint = function(oPoint,iIndex) { return new sap.suite.ui.commons.MicroAreaChartItem(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>points</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.MicroAreaChartPoint[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartItem.prototype.removeAllPoints = function() { return new Array(); };

/**
 * 
 * Removes an point from the aggregation named <code>points</code>.
 * @param {int | string | sap.suite.ui.commons.MicroAreaChartPoint} vPoint the point to remove or its index or id
 * @return {sap.suite.ui.commons.MicroAreaChartPoint} the removed point or null
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartItem.prototype.removePoint = function(vPoint) { return new sap.suite.ui.commons.MicroAreaChartPoint(); };

/**
 * 
 * Setter for property <code>color</code>.
 * </p><p>
 * Default value is <code>Neutral</code> 
 * @param {sap.suite.ui.commons.InfoTileValueColor} oColor  new value for property <code>color</code>
 * @return {sap.suite.ui.commons.MicroAreaChartItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartItem.prototype.setColor = function(oColor) { return new sap.suite.ui.commons.MicroAreaChartItem(); };

/**
 * 
 * Unbinder for aggregation <code>points</code>.
 * @return {sap.suite.ui.commons.MicroAreaChartItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartItem.prototype.unbindPoints = function() { return new sap.suite.ui.commons.MicroAreaChartItem(); };


// ---- sap.suite.ui.commons.MicroAreaChartLabel --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new MicroAreaChartLabel.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getColor color} : sap.suite.ui.commons.InfoTileValueColor (default: "Neutral")</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This element contains data for a label in MicroAreaChart control.
 * @extends sap.ui.core.Element
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.MicroAreaChartLabel = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.MicroAreaChartLabel with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MicroAreaChartLabel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>color</code>.
 * The color of the label.
 * </p><p>
 * Default value is <code>"Neutral"</code>
 * @return {sap.suite.ui.commons.InfoTileValueColor} the value of property <code>color</code>
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartLabel.prototype.getColor = function() { return new sap.suite.ui.commons.InfoTileValueColor(); };

/**
 * 
 * Getter for property <code>label</code>.
 * The text of the label.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>label</code>
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartLabel.prototype.getLabel = function() { return ""; };

/**
 * 
 * Setter for property <code>color</code>.
 * </p><p>
 * Default value is <code>"Neutral"</code> 
 * @param {sap.suite.ui.commons.InfoTileValueColor} oColor  new value for property <code>color</code>
 * @return {sap.suite.ui.commons.MicroAreaChartLabel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartLabel.prototype.setColor = function(oColor) { return new sap.suite.ui.commons.MicroAreaChartLabel(); };

/**
 * 
 * Setter for property <code>label</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLabel  new value for property <code>label</code>
 * @return {sap.suite.ui.commons.MicroAreaChartLabel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartLabel.prototype.setLabel = function(sLabel) { return new sap.suite.ui.commons.MicroAreaChartLabel(); };


// ---- sap.suite.ui.commons.MicroAreaChartPoint --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new MicroAreaChartPoint.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getX x} : float</li>
 * <li>{@link #getY y} : float</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control contains data for the point.
 * @extends sap.ui.core.Element
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.MicroAreaChartPoint = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.MicroAreaChartPoint with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MicroAreaChartPoint.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>x</code>.
 * X value for the given point.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {float} the value of property <code>x</code>
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartPoint.prototype.getX = function() { return 0.0; };

/**
 * 
 * Returns x value including undefined if the x property was not set or an invalid number was set.
 * @type float
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.MicroAreaChartPoint.prototype.getXValue = function() { return 0.0; };

/**
 * 
 * Getter for property <code>y</code>.
 * Y value for the given point.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {float} the value of property <code>y</code>
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartPoint.prototype.getY = function() { return 0.0; };

/**
 * 
 * Returns y value including undefined if the y property was not set or an invalid number was set.
 * @type float
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.MicroAreaChartPoint.prototype.getYValue = function() { return 0.0; };

/**
 * 
 * Setter for property <code>x</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {float} fX  new value for property <code>x</code>
 * @return {sap.suite.ui.commons.MicroAreaChartPoint} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartPoint.prototype.setX = function(fX) { return new sap.suite.ui.commons.MicroAreaChartPoint(); };

/**
 * 
 * Setter for property <code>y</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {float} fY  new value for property <code>y</code>
 * @return {sap.suite.ui.commons.MicroAreaChartPoint} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartPoint.prototype.setY = function(fY) { return new sap.suite.ui.commons.MicroAreaChartPoint(); };


// ---- sap.suite.ui.commons.MonitoringContent --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new MonitoringContent.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getIconSrc iconSrc} : string</li>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: sap.suite.ui.commons.InfoTileSize.Auto)</li>
 * <li>{@link #getState state} : sap.suite.ui.commons.LoadState (default: sap.suite.ui.commons.LoadState.Loaded)</li>
 * <li>{@link #getAnimateTextChange animateTextChange} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getIcon icon} : sap.ui.core.Icon</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.MonitoringContent#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control is used in a tile or any other place to display numeric values and an icon.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.MonitoringContent = function(sId,mSettings) {};
/**
 * 
 * The event is fired when the user chooses the monitoring content.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.MonitoringContent.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.MonitoringContent</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.MonitoringContent</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses the monitoring content.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.MonitoringContent</code>.<br/> itself.
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * 
 * Destroys the icon in the aggregation 
 * named <code>icon</code>.
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.destroyIcon = function() { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.MonitoringContent</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.MonitoringContent with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MonitoringContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.firePress = function(mArguments) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * 
 * Getter for property <code>animateTextChange</code>.
 * If set to true, changing of the value is animated.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>animateTextChange</code>
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.getAnimateTextChange = function() { return false; };

/**
 * 
 * Getter for aggregation <code>icon</code>.<br/>
 * The icon that is displayed in the content.
 * @return {sap.ui.core.Icon}
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.getIcon = function() { return new sap.ui.core.Icon(); };

/**
 * 
 * Getter for property <code>iconSrc</code>.
 * This property is set by the return value of sap.ui.core.IconPool.getIconURI that is called with an icon name parameter and optional collection parameter. The collection parameter is required when the application extended icons are used.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>iconSrc</code>
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.getIconSrc = function() { return ""; };

/**
 * 
 * Getter for property <code>size</code>.
 * Updates the size of the chart. If not set then the default size is applied based on the device tile.
 * </p><p>
 * Default value is <code>Auto</code>
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.getSize = function() { return new sap.suite.ui.commons.InfoTileSize(); };

/**
 * 
 * Getter for property <code>state</code>.
 * Indicates the load status.
 * </p><p>
 * Default value is <code>Loaded</code>
 * @return {sap.suite.ui.commons.LoadState} the value of property <code>state</code>
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.getState = function() { return new sap.suite.ui.commons.LoadState(); };

/**
 * 
 * Getter for property <code>value</code>.
 * The actual value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.getValue = function() { return ""; };

/**
 * 
 * Setter for property <code>animateTextChange</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bAnimateTextChange  new value for property <code>animateTextChange</code>
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.setAnimateTextChange = function(bAnimateTextChange) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * 
 * Setter for the aggregated <code>icon</code>.
 * @param {sap.ui.core.Icon} oIcon
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.setIcon = function(oIcon) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * 
 * Setter for property <code>iconSrc</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sIconSrc  new value for property <code>iconSrc</code>
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.setIconSrc = function(sIconSrc) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * 
 * Setter for property <code>size</code>.
 * </p><p>
 * Default value is <code>Auto</code> 
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.setSize = function(oSize) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * 
 * Setter for property <code>state</code>.
 * </p><p>
 * Default value is <code>Loaded</code> 
 * @param {sap.suite.ui.commons.LoadState} oState  new value for property <code>state</code>
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.setState = function(oState) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.suite.ui.commons.MonitoringContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.setValue = function(sValue) { return new sap.suite.ui.commons.MonitoringContent(); };


// ---- sap.suite.ui.commons.MonitoringTile --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new MonitoringTile.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getIconSrc iconSrc} : string</li>
 * <li>{@link #getFooterColor footerColor} : sap.suite.ui.commons.InfoTileTextColor (default: sap.suite.ui.commons.InfoTileTextColor.Positive)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.suite.ui.commons.InfoTile#constructor sap.suite.ui.commons.InfoTile}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control is the implementation of the InfoTile to show a numeric value and an icon.
 * @extends sap.suite.ui.commons.InfoTile
 * @version 1.24.2
 * @constructor
 * @public
 * @experimental Since version 1.19. 
 * API is not yet finished and might change completely
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.MonitoringTile = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.MonitoringTile with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MonitoringTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>footerColor</code>.
 * The color of the tile footer text.
 * </p><p>
 * Default value is <code>Positive</code>
 * @return {sap.suite.ui.commons.InfoTileTextColor} the value of property <code>footerColor</code>
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringTile.prototype.getFooterColor = function() { return new sap.suite.ui.commons.InfoTileTextColor(); };

/**
 * 
 * Getter for property <code>iconSrc</code>.
 * This property is set by the return value of sap.ui.core.IconPool.getIconURI that is called with an icon name parameter and optional collection parameter. The collection parameter is required when the application extended icons are used.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>iconSrc</code>
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringTile.prototype.getIconSrc = function() { return ""; };

/**
 * 
 * Getter for property <code>value</code>.
 * The actual value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringTile.prototype.getValue = function() { return ""; };

/**
 * 
 * Setter for property <code>footerColor</code>.
 * </p><p>
 * Default value is <code>Positive</code> 
 * @param {sap.suite.ui.commons.InfoTileTextColor} oFooterColor  new value for property <code>footerColor</code>
 * @return {sap.suite.ui.commons.MonitoringTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringTile.prototype.setFooterColor = function(oFooterColor) { return new sap.suite.ui.commons.MonitoringTile(); };

/**
 * 
 * Setter for property <code>iconSrc</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sIconSrc  new value for property <code>iconSrc</code>
 * @return {sap.suite.ui.commons.MonitoringTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringTile.prototype.setIconSrc = function(sIconSrc) { return new sap.suite.ui.commons.MonitoringTile(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.suite.ui.commons.MonitoringTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringTile.prototype.setValue = function(sValue) { return new sap.suite.ui.commons.MonitoringTile(); };


// ---- sap.suite.ui.commons.NewsContent --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new NewsContent.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: sap.suite.ui.commons.InfoTileSize.Auto)</li>
 * <li>{@link #getContentText contentText} : string</li>
 * <li>{@link #getSubheader subheader} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.NewsContent#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control displays the news content text and subheader in a tile.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.NewsContent = function(sId,mSettings) {};
/**
 * 
 * The event is fired when the user chooses the news content.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.NewsContent.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.NewsContent</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NewsContent</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses the news content.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NewsContent</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NewsContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NewsContent.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NewsContent(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.NewsContent</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NewsContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NewsContent.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.NewsContent(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.NewsContent with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.NewsContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NewsContent} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NewsContent.prototype.firePress = function(mArguments) { return new sap.suite.ui.commons.NewsContent(); };

/**
 * 
 * Getter for property <code>contentText</code>.
 * The content text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>contentText</code>
 * @public
 * 
 */
sap.suite.ui.commons.NewsContent.prototype.getContentText = function() { return ""; };

/**
 * 
 * Getter for property <code>size</code>.
 * Updates the size of the chart. If not set then the default size is applied based on the device tile.
 * </p><p>
 * Default value is <code>Auto</code>
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.suite.ui.commons.NewsContent.prototype.getSize = function() { return new sap.suite.ui.commons.InfoTileSize(); };

/**
 * 
 * Getter for property <code>subheader</code>.
 * The subheader.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>subheader</code>
 * @public
 * 
 */
sap.suite.ui.commons.NewsContent.prototype.getSubheader = function() { return ""; };

/**
 * 
 * Setter for property <code>contentText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sContentText  new value for property <code>contentText</code>
 * @return {sap.suite.ui.commons.NewsContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NewsContent.prototype.setContentText = function(sContentText) { return new sap.suite.ui.commons.NewsContent(); };

/**
 * 
 * Setter for property <code>size</code>.
 * </p><p>
 * Default value is <code>Auto</code> 
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.NewsContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NewsContent.prototype.setSize = function(oSize) { return new sap.suite.ui.commons.NewsContent(); };

/**
 * 
 * Setter for property <code>subheader</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSubheader  new value for property <code>subheader</code>
 * @return {sap.suite.ui.commons.NewsContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NewsContent.prototype.setSubheader = function(sSubheader) { return new sap.suite.ui.commons.NewsContent(); };


// ---- sap.suite.ui.commons.NoteTaker --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new NoteTaker.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control allows you to create and store your notes for further reference.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.NoteTaker = function(sId,mSettings) {};
/**
 * 
 * The event is fired when a new card is added if no data binding is available.
 * If data binding is available, the event is fired to notify a developer to add an element to the model.
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
sap.suite.ui.commons.NoteTaker.prototype.addCard = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when a user presses the attachment link.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.uid The unique ID of the card.
 * @param {string} oControlEvent.getParameters.isCardAttachment If true, a user chooses the attachment in the Note card. If false, a user chooses the attachment in the Feeder card.
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @public
 */
sap.suite.ui.commons.NoteTaker.prototype.attachmentClick = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired, when user deletes the attached file.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @param {string} oControlEvent.getParameters.uid The unique ID of the card.
 * @public
 */
sap.suite.ui.commons.NoteTaker.prototype.attachmentDelete = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when the value of attached file has been changed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @public
 */
sap.suite.ui.commons.NoteTaker.prototype.attachmentSelect = function(oControlEvent) { return null; };

/**
 * 
 * Fire event uploadComplete to attached listeners.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.response The response message of the String type that comes from the server. On the server side this response has to be put within the "body" tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.
 * @param {string} oControlEvent.getParameters.uid The unique ID of the card.
 * @public
 */
sap.suite.ui.commons.NoteTaker.prototype.attachmentUploadComplete = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when a new card is deleted if no data binding is available.
 * If data binding is available, the event is fired to notify a developer to delete the element from the model.
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
sap.suite.ui.commons.NoteTaker.prototype.deleteCard = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when a new card has been edited.
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
sap.suite.ui.commons.NoteTaker.prototype.editCard = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'addCard' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself. 
 * </p><p>
 * The event is fired when a new card is added if no data binding is available.
 * If data binding is available, the event is fired to notify a developer to add an element to the model.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachAddCard = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'attachmentClick' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself. 
 * </p><p>
 * The event is fired when a user presses the attachment link.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachAttachmentClick = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'attachmentDelete' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself. 
 * </p><p>
 * The event is fired, when user deletes the attached file.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachAttachmentDelete = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'attachmentSelect' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the value of attached file has been changed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachAttachmentSelect = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'attachmentUploadComplete' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself. 
 * </p><p>
 * Fire event uploadComplete to attached listeners.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachAttachmentUploadComplete = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'deleteCard' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself. 
 * </p><p>
 * The event is fired when a new card is deleted if no data binding is available.
 * If data binding is available, the event is fired to notify a developer to delete the element from the model.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachDeleteCard = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'editCard' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself. 
 * </p><p>
 * The event is fired when a new card has been edited.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachEditCard = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'addCard' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.detachAddCard = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'attachmentClick' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.detachAttachmentClick = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'attachmentDelete' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.detachAttachmentDelete = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'attachmentSelect' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.detachAttachmentSelect = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'attachmentUploadComplete' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.detachAttachmentUploadComplete = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'deleteCard' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.detachDeleteCard = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'editCard' event of this <code>sap.suite.ui.commons.NoteTaker</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.detachEditCard = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.NoteTaker with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.NoteTaker.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event addCard to attached listeners.
 * </p><p>
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
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.fireAddCard = function(mArguments) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Fire event attachmentClick to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'uid' of type <code>string</code> The unique ID of the card.</li>
 * <li>'isCardAttachment' of type <code>string</code> If true, a user chooses the attachment in the Note card. If false, a user chooses the attachment in the Feeder card.</li>
 * <li>'filename' of type <code>string</code> A name of the attached file.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.fireAttachmentClick = function(mArguments) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Fire event attachmentDelete to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'filename' of type <code>string</code> A name of the attached file.</li>
 * <li>'uid' of type <code>string</code> The unique ID of the card.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.fireAttachmentDelete = function(mArguments) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Fire event attachmentSelect to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'filename' of type <code>string</code> A name of the attached file.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.fireAttachmentSelect = function(mArguments) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Fire event attachmentUploadComplete to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'response' of type <code>string</code> The response message of the String type  that comes from the server. On the server side this response has to be put within the "body" tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.</li>
 * <li>'uid' of type <code>string</code> The unique ID of the card.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.fireAttachmentUploadComplete = function(mArguments) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Fire event deleteCard to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'title' of type <code>string</code> The title of the card to be deleted.</li>
 * <li>'body' of type <code>string</code> The text of the card to be deleted.</li>
 * <li>'timestamp' of type <code>string</code> The timestamp of the card to be deleted.</li>
 * <li>'uid' of type <code>string</code> The unique ID that was set by an application developer.</li>
 * <li>'thumbUp' of type <code>boolean</code> Indicates positive information for the deleted card.</li>
 * <li>'thumbDown' of type <code>boolean</code> Indicates negative information for the deleted card.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.fireDeleteCard = function(mArguments) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Fire event editCard to attached listeners.
 * </p><p>
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
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.fireEditCard = function(mArguments) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Returns tags from all cards in the control.
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.NoteTaker.prototype.getAllTags = function() { return new Object(); };

/**
 * 
 * Getter for property <code>attachmentName</code>.
 * The attachment property name for identification on the server side after sending data to the server.
 * </p><p>
 * Default value is <code>attachment</code>
 * @return {string} the value of property <code>attachmentName</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.getAttachmentName = function() { return ""; };

/**
 * 
 * Getter for property <code>attachmentUploadUrl</code>.
 * Defines a path on the server where the attached files are uploaded.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>attachmentUploadUrl</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.getAttachmentUploadUrl = function() { return ""; };

/**
 * 
 * Getter for property <code>cardViewAllTrigger</code>.
 * The View All link appears in the Note Taker card when length of a card body text exceeds the specified value. The updated value of this property is not applied to the existing cards.
 * </p><p>
 * Default value is <code>1800</code>
 * @return {int} the value of property <code>cardViewAllTrigger</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.getCardViewAllTrigger = function() { return 0; };

/**
 * 
 * Getter for property <code>filterCriteria</code>.
 * A composite object containing criteria for filtering cards in the Note Taker.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>filterCriteria</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.getFilterCriteria = function() { return new Object(); };

/**
 * 
 * Getter for property <code>visibleNotes</code>.
 * Number of notes to display.
 * </p><p>
 * Default value is <code>2</code>
 * @return {int} the value of property <code>visibleNotes</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.getVisibleNotes = function() { return 0; };

/**
 * 
 * Must be called when the file upload to the server fail and it is needed to remove the attachment panel from the Feeder card.
 * @type sap.suite.ui.commons.NoteTaker
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.NoteTaker.prototype.handleAttachmentUploadFail = function() { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Additional data that is sent to the back end service. Data will be transmitted as a value of a hidden input where the name is derived from the name property with suffix -data. Exposed from the FileUploader control.
 * @param {string} sAdditionalData
 *         Actual additional data.
 * @type sap.suite.ui.commons.NoteTaker
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.NoteTaker.prototype.setAttachmentData = function(sAdditionalData) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Setter for property <code>attachmentName</code>.
 * </p><p>
 * Default value is <code>attachment</code> 
 * @param {string} sAttachmentName  new value for property <code>attachmentName</code>
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.setAttachmentName = function(sAttachmentName) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Setter for property <code>attachmentUploadUrl</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sAttachmentUploadUrl  new value for property <code>attachmentUploadUrl</code>
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.setAttachmentUploadUrl = function(sAttachmentUploadUrl) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Setter for property <code>cardViewAllTrigger</code>.
 * </p><p>
 * Default value is <code>1800</code> 
 * @param {int} iCardViewAllTrigger  new value for property <code>cardViewAllTrigger</code>
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.setCardViewAllTrigger = function(iCardViewAllTrigger) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Setter for property <code>filterCriteria</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oFilterCriteria  new value for property <code>filterCriteria</code>
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.setFilterCriteria = function(oFilterCriteria) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Sets a URL for downloading the attachment. It must be called in the attachmentUploadComplete event handler.
 * @param {string} sSUrl
 *         The download URL of attachment for a card that will be added when a user chooses the Add button.
 * @type sap.suite.ui.commons.NoteTaker
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.NoteTaker.prototype.setNextCardAttachmentUrl = function(sSUrl) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Sets an unique ID of the next card.
 * @param {string} sSUid
 * @type sap.suite.ui.commons.NoteTaker
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.NoteTaker.prototype.setNextCardUid = function(sSUid) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Setter for property <code>visibleNotes</code>.
 * </p><p>
 * Default value is <code>2</code> 
 * @param {int} iVisibleNotes  new value for property <code>visibleNotes</code>
 * @return {sap.suite.ui.commons.NoteTaker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.setVisibleNotes = function(iVisibleNotes) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * 
 * Uploads the attached file to the server. Exposed from the FileUploader control.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.NoteTaker.prototype.uploadAttachment = function() { return null; };


// ---- sap.suite.ui.commons.NoteTakerCard --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new NoteTakerCard.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control allows you to store Note Taker card header and body text.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.NoteTakerCard = function(sId,mSettings) {};
/**
 * 
 * The event is fired when a user chooses the attachment download link.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.uid A unique ID that was set by an application developer.
 * @param {string} oControlEvent.getParameters.url The address of the file attached to the card.
 * @param {string} oControlEvent.getParameters.filename The name of the file attached to the card.
 * @public
 */
sap.suite.ui.commons.NoteTakerCard.prototype.attachmentClick = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when a card needs to be deleted. This event is needed for the Note Taker control.
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
sap.suite.ui.commons.NoteTakerCard.prototype.deleteNote = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when a user chooses the Edit button in the note card.
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
sap.suite.ui.commons.NoteTakerCard.prototype.editNote = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'attachmentClick' event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/> itself. 
 * </p><p>
 * The event is fired when a user chooses the attachment download link.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.attachAttachmentClick = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'deleteNote' event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/> itself. 
 * </p><p>
 * The event is fired when a card needs to be deleted. This event is needed for the Note Taker control.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.attachDeleteNote = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'editNote' event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/> itself. 
 * </p><p>
 * The event is fired when a user chooses the Edit button in the note card.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.attachEditNote = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'attachmentClick' event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.detachAttachmentClick = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'deleteNote' event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.detachDeleteNote = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'editNote' event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.detachEditNote = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.NoteTakerCard with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.NoteTakerCard.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event attachmentClick to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'uid' of type <code>string</code> A unique ID that was set by an application developer.</li>
 * <li>'url' of type <code>string</code> The address of the file attached to the card.</li>
 * <li>'filename' of type <code>string</code> The name of the file attached to the card.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.fireAttachmentClick = function(mArguments) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Fire event deleteNote to attached listeners.
 * </p><p>
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
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.fireDeleteNote = function(mArguments) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Fire event editNote to attached listeners.
 * </p><p>
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
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.fireEditNote = function(mArguments) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Getter for property <code>allTags</code>.
 * Contains an array of the String type tags available for selection during the card update.
 * </p><p>
 * Default value is <code>[]</code>
 * @return {object} the value of property <code>allTags</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getAllTags = function() { return new Object(); };

/**
 * 
 * Getter for property <code>attachmentFilename</code>.
 * Stores the name of the file attached to the card.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>attachmentFilename</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getAttachmentFilename = function() { return ""; };

/**
 * 
 * Getter for property <code>attachmentUrl</code>.
 * Stores the address of the file attached to the card.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>attachmentUrl</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getAttachmentUrl = function() { return ""; };

/**
 * 
 * Getter for property <code>body</code>.
 * Stores the Note Taker card body text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>body</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getBody = function() { return ""; };

/**
 * 
 * Getter for property <code>header</code>.
 * Stores the Note Taker card header.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>header</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getHeader = function() { return ""; };

/**
 * 
 * Getter for property <code>isFiltered</code>.
 * Shows whether the note card is hidden by the applied filter.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>isFiltered</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getIsFiltered = function() { return false; };

/**
 * 
 * Getter for property <code>tags</code>.
 * Contains an array of the String type tags applied to the current card.
 * </p><p>
 * Default value is <code>[]</code>
 * @return {object} the value of property <code>tags</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getTags = function() { return new Object(); };

/**
 * 
 * Getter for property <code>thumbDown</code>.
 * Indicates negative information for the card.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>thumbDown</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getThumbDown = function() { return false; };

/**
 * 
 * Getter for property <code>thumbUp</code>.
 * Indicates positive information for the card.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>thumbUp</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getThumbUp = function() { return false; };

/**
 * 
 * Getter for property <code>timestamp</code>.
 * Stores a timestamp of the Note Taker card.
 * </p><p>
 * Default value is <code>new Date()</code>
 * @return {object} the value of property <code>timestamp</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getTimestamp = function() { return new Object(); };

/**
 * 
 * Getter for property <code>uid</code>.
 * The card ID. This property should be set by an application developer.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>uid</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getUid = function() { return ""; };

/**
 * 
 * Getter for property <code>viewAllTrigger</code>.
 * The View All link appears in the Note Taker card if a body text length exceeds the specified value.
 * </p><p>
 * Default value is <code>1800</code>
 * @return {int} the value of property <code>viewAllTrigger</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getViewAllTrigger = function() { return 0; };

/**
 * 
 * Setter for property <code>allTags</code>.
 * </p><p>
 * Default value is <code>[]</code> 
 * @param {object} oAllTags  new value for property <code>allTags</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setAllTags = function(oAllTags) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Setter for property <code>attachmentFilename</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sAttachmentFilename  new value for property <code>attachmentFilename</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setAttachmentFilename = function(sAttachmentFilename) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Setter for property <code>attachmentUrl</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sAttachmentUrl  new value for property <code>attachmentUrl</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setAttachmentUrl = function(sAttachmentUrl) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Setter for property <code>body</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sBody  new value for property <code>body</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setBody = function(sBody) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Setter for property <code>header</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sHeader  new value for property <code>header</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setHeader = function(sHeader) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Setter for property <code>isFiltered</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bIsFiltered  new value for property <code>isFiltered</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setIsFiltered = function(bIsFiltered) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Setter for property <code>tags</code>.
 * </p><p>
 * Default value is <code>[]</code> 
 * @param {object} oTags  new value for property <code>tags</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setTags = function(oTags) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Setter for property <code>thumbDown</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bThumbDown  new value for property <code>thumbDown</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setThumbDown = function(bThumbDown) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Setter for property <code>thumbUp</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bThumbUp  new value for property <code>thumbUp</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setThumbUp = function(bThumbUp) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Setter for property <code>timestamp</code>.
 * </p><p>
 * Default value is <code>new Date()</code> 
 * @param {object} oTimestamp  new value for property <code>timestamp</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setTimestamp = function(oTimestamp) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Setter for property <code>uid</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sUid  new value for property <code>uid</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setUid = function(sUid) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * 
 * Setter for property <code>viewAllTrigger</code>.
 * </p><p>
 * Default value is <code>1800</code> 
 * @param {int} iViewAllTrigger  new value for property <code>viewAllTrigger</code>
 * @return {sap.suite.ui.commons.NoteTakerCard} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setViewAllTrigger = function(iViewAllTrigger) { return new sap.suite.ui.commons.NoteTakerCard(); };


// ---- sap.suite.ui.commons.NoteTakerFeeder --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new NoteTakerFeeder.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control allows you to enter a quick note and N note cards.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.NoteTakerFeeder = function(sId,mSettings) {};
/**
 * 
 * The event is fired when a user chooses the Add button in the control.
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
sap.suite.ui.commons.NoteTakerFeeder.prototype.addNote = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when a user presses the attachment link.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @public
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachmentClick = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when a user presses the Delete button in the Feeder card.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @public
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachmentDelete = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when the value of attached file has been changed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @public
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachmentSelect = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when the upload of the file is completed. However this covers only the client side of the Upload process and does not give any success status from the server.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.response The response message that comes from the server. On the server side this response has to be put within the "body" tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.
 * @public
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachmentUploadComplete = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'addNote' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself. 
 * </p><p>
 * The event is fired when a user chooses the Add button in the control.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachAddNote = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'attachmentClick' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself. 
 * </p><p>
 * The event is fired when a user presses the attachment link.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachAttachmentClick = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'attachmentDelete' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself. 
 * </p><p>
 * The event is fired when a user presses the Delete button in the Feeder card.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachAttachmentDelete = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'attachmentSelect' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the value of attached file has been changed.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachAttachmentSelect = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'attachmentUploadComplete' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the upload of the file is completed. However this covers only the client side of the Upload process and does not give any success status from the server.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachAttachmentUploadComplete = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'addNote' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.detachAddNote = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'attachmentClick' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.detachAttachmentClick = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'attachmentDelete' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.detachAttachmentDelete = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'attachmentSelect' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.detachAttachmentSelect = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'attachmentUploadComplete' event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.detachAttachmentUploadComplete = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.NoteTakerFeeder with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event addNote to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'title' of type <code>string</code> The title of the note to be added.</li>
 * <li>'body' of type <code>string</code> The text of the note to be added.</li>
 * <li>'timestamp' of type <code>object</code> The timestamp of the note to be added.</li>
 * <li>'thumbUp' of type <code>boolean</code> If set to true, a new card should be marked as positive one.</li>
 * <li>'thumbDown' of type <code>boolean</code> If set to true, a new card should be marked as negative one.</li>
 * <li>'attachmentFilename' of type <code>string</code> Stores the attachment file name for a new card.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.fireAddNote = function(mArguments) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Fire event attachmentClick to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'filename' of type <code>string</code> A name of the attached file.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.fireAttachmentClick = function(mArguments) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Fire event attachmentDelete to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'filename' of type <code>string</code> A name of the attached file.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.fireAttachmentDelete = function(mArguments) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Fire event attachmentSelect to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'filename' of type <code>string</code> A name of the attached file.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.fireAttachmentSelect = function(mArguments) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Fire event attachmentUploadComplete to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'response' of type <code>string</code> The response message that comes from the server. On the server side this response has to be put within the "body" tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.fireAttachmentUploadComplete = function(mArguments) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Getter for property <code>attachmentName</code>.
 * The attachment property name for identification on the server side after sending data to the server.
 * </p><p>
 * Default value is <code>attachment</code>
 * @return {string} the value of property <code>attachmentName</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.getAttachmentName = function() { return ""; };

/**
 * 
 * Getter for property <code>attachmentUploadUrl</code>.
 * Sets the upload attachment URL for a new card.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>attachmentUploadUrl</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.getAttachmentUploadUrl = function() { return ""; };

/**
 * 
 * Getter for property <code>body</code>.
 * The text inside the note card.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>body</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.getBody = function() { return ""; };

/**
 * 
 * Getter for property <code>tags</code>.
 * The list of tags selected for addition to a new note card.
 * </p><p>
 * Default value is <code>[]</code>
 * @return {object} the value of property <code>tags</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.getTags = function() { return new Object(); };

/**
 * 
 * Getter for property <code>thumbDown</code>.
 * Sets negative indication for a new note.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>thumbDown</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.getThumbDown = function() { return false; };

/**
 * 
 * Getter for property <code>thumbUp</code>.
 * Sets positive indication for a new note.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>thumbUp</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.getThumbUp = function() { return false; };

/**
 * 
 * Getter for property <code>title</code>.
 * This text is the header of a new note.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.getTitle = function() { return ""; };

/**
 * 
 * Setter for property <code>attachmentName</code>.
 * </p><p>
 * Default value is <code>attachment</code> 
 * @param {string} sAttachmentName  new value for property <code>attachmentName</code>
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.setAttachmentName = function(sAttachmentName) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Setter for property <code>attachmentUploadUrl</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sAttachmentUploadUrl  new value for property <code>attachmentUploadUrl</code>
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.setAttachmentUploadUrl = function(sAttachmentUploadUrl) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Setter for property <code>body</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sBody  new value for property <code>body</code>
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.setBody = function(sBody) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Setter for property <code>tags</code>.
 * </p><p>
 * Default value is <code>[]</code> 
 * @param {object} oTags  new value for property <code>tags</code>
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.setTags = function(oTags) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Setter for property <code>thumbDown</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bThumbDown  new value for property <code>thumbDown</code>
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.setThumbDown = function(bThumbDown) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Setter for property <code>thumbUp</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bThumbUp  new value for property <code>thumbUp</code>
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.setThumbUp = function(bThumbUp) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.NoteTakerFeeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.NoteTakerFeeder(); };


// ---- sap.suite.ui.commons.NumericContent --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new NumericContent.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: sap.suite.ui.commons.InfoTileSize.Auto)</li>
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getScale scale} : string</li>
 * <li>{@link #getValueColor valueColor} : sap.suite.ui.commons.InfoTileValueColor (default: sap.suite.ui.commons.InfoTileValueColor.Neutral)</li>
 * <li>{@link #getIndicator indicator} : string</li>
 * <li>{@link #getState state} : sap.suite.ui.commons.LoadState (default: sap.suite.ui.commons.LoadState.Loaded)</li>
 * <li>{@link #getAnimateTextChange animateTextChange} : boolean (default: true)</li>
 * <li>{@link #getFormatterValue formatterValue} : boolean (default: false)</li>
 * <li>{@link #getTruncateValueTo truncateValueTo} : int (default: 4)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getNullifyValue nullifyValue} : boolean (default: true)</li>
 * <li>{@link #getIconDescription iconDescription} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.NumericContent#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * NumericContent to be used in tile or in other place where need to show numeric values with sematic colors and deviations.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.NumericContent = function(sId,mSettings) {};
/**
 * 
 * The event is fired when the user chooses the numeric content.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.NumericContent.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.NumericContent</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.NumericContent</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses the numeric content.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NumericContent</code>.<br/> itself.
 * @return {sap.suite.ui.commons.NumericContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NumericContent(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.NumericContent</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.NumericContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.NumericContent(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.NumericContent with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.NumericContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.NumericContent} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.firePress = function(mArguments) { return new sap.suite.ui.commons.NumericContent(); };

/**
 * 
 * Getter for property <code>animateTextChange</code>.
 * If set to true, the change of the value will be animated.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>animateTextChange</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.getAnimateTextChange = function() { return false; };

/**
 * 
 * Getter for property <code>formatterValue</code>.
 * If set to true, the value parameter contains a numeric value and scale. If set to false (default), the value parameter contains a numeric value only.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>formatterValue</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.getFormatterValue = function() { return false; };

/**
 * 
 * Getter for property <code>icon</code>.
 * The icon to be displayed as a graphical element within the control. This can be an image or an icon from the icon font.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconDescription</code>.
 * Description of an icon that is used in the tooltip.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>iconDescription</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.getIconDescription = function() { return ""; };

/**
 * 
 * Getter for property <code>indicator</code>.
 * The indicator arrow that shows value deviation.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>indicator</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.getIndicator = function() { return ""; };

/**
 * 
 * Getter for property <code>nullifyValue</code>.
 * If set to true, the omitted value property is set to 0.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>nullifyValue</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.getNullifyValue = function() { return false; };

/**
 * 
 * Getter for property <code>scale</code>.
 * The scaling prefix. Financial characters can be used for currencies and counters. The SI prefixes can be used for units.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>scale</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.getScale = function() { return ""; };

/**
 * 
 * Getter for property <code>size</code>.
 * Updates the size of the chart. If not set then the default size is applied based on the device tile.
 * </p><p>
 * Default value is <code>Auto</code>
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.getSize = function() { return new sap.suite.ui.commons.InfoTileSize(); };

/**
 * 
 * Getter for property <code>state</code>.
 * Indicates the load status.
 * </p><p>
 * Default value is <code>Loaded</code>
 * @return {sap.suite.ui.commons.LoadState} the value of property <code>state</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.getState = function() { return new sap.suite.ui.commons.LoadState(); };

/**
 * 
 * Getter for property <code>truncateValueTo</code>.
 * The number of characters to display for the value property.
 * </p><p>
 * Default value is <code>4</code>
 * @return {int} the value of property <code>truncateValueTo</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.getTruncateValueTo = function() { return 0; };

/**
 * 
 * Getter for property <code>value</code>.
 * The actual value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.getValue = function() { return ""; };

/**
 * 
 * Getter for property <code>valueColor</code>.
 * The semantic color of the value.
 * </p><p>
 * Default value is <code>Neutral</code>
 * @return {sap.suite.ui.commons.InfoTileValueColor} the value of property <code>valueColor</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.getValueColor = function() { return new sap.suite.ui.commons.InfoTileValueColor(); };

/**
 * 
 * Setter for property <code>animateTextChange</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bAnimateTextChange  new value for property <code>animateTextChange</code>
 * @return {sap.suite.ui.commons.NumericContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.setAnimateTextChange = function(bAnimateTextChange) { return new sap.suite.ui.commons.NumericContent(); };

/**
 * 
 * Setter for property <code>formatterValue</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bFormatterValue  new value for property <code>formatterValue</code>
 * @return {sap.suite.ui.commons.NumericContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.setFormatterValue = function(bFormatterValue) { return new sap.suite.ui.commons.NumericContent(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.suite.ui.commons.NumericContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.setIcon = function(sIcon) { return new sap.suite.ui.commons.NumericContent(); };

/**
 * 
 * Setter for property <code>iconDescription</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sIconDescription  new value for property <code>iconDescription</code>
 * @return {sap.suite.ui.commons.NumericContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.setIconDescription = function(sIconDescription) { return new sap.suite.ui.commons.NumericContent(); };

/**
 * 
 * Setter for property <code>indicator</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sIndicator  new value for property <code>indicator</code>
 * @return {sap.suite.ui.commons.NumericContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.setIndicator = function(sIndicator) { return new sap.suite.ui.commons.NumericContent(); };

/**
 * 
 * Setter for property <code>nullifyValue</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bNullifyValue  new value for property <code>nullifyValue</code>
 * @return {sap.suite.ui.commons.NumericContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.setNullifyValue = function(bNullifyValue) { return new sap.suite.ui.commons.NumericContent(); };

/**
 * 
 * Setter for property <code>scale</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sScale  new value for property <code>scale</code>
 * @return {sap.suite.ui.commons.NumericContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.setScale = function(sScale) { return new sap.suite.ui.commons.NumericContent(); };

/**
 * 
 * Setter for property <code>size</code>.
 * </p><p>
 * Default value is <code>Auto</code> 
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.NumericContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.setSize = function(oSize) { return new sap.suite.ui.commons.NumericContent(); };

/**
 * 
 * Setter for property <code>state</code>.
 * </p><p>
 * Default value is <code>Loaded</code> 
 * @param {sap.suite.ui.commons.LoadState} oState  new value for property <code>state</code>
 * @return {sap.suite.ui.commons.NumericContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.setState = function(oState) { return new sap.suite.ui.commons.NumericContent(); };

/**
 * 
 * Setter for property <code>truncateValueTo</code>.
 * </p><p>
 * Default value is <code>4</code> 
 * @param {int} iTruncateValueTo  new value for property <code>truncateValueTo</code>
 * @return {sap.suite.ui.commons.NumericContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.setTruncateValueTo = function(iTruncateValueTo) { return new sap.suite.ui.commons.NumericContent(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.suite.ui.commons.NumericContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.setValue = function(sValue) { return new sap.suite.ui.commons.NumericContent(); };

/**
 * 
 * Setter for property <code>valueColor</code>.
 * </p><p>
 * Default value is <code>Neutral</code> 
 * @param {sap.suite.ui.commons.InfoTileValueColor} oValueColor  new value for property <code>valueColor</code>
 * @return {sap.suite.ui.commons.NumericContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericContent.prototype.setValueColor = function(oValueColor) { return new sap.suite.ui.commons.NumericContent(); };


// ---- sap.suite.ui.commons.NumericTile --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new NumericTile.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getScale scale} : string</li>
 * <li>{@link #getUnit unit} : string</li>
 * <li>{@link #getValueColor valueColor} : sap.suite.ui.commons.InfoTileValueColor</li>
 * <li>{@link #getIndicator indicator} : sap.suite.ui.commons.DeviationIndicator</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.suite.ui.commons.InfoTile#constructor sap.suite.ui.commons.InfoTile}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control is the implementation of the InfoTile to show a numeric value.
 * @extends sap.suite.ui.commons.InfoTile
 * @version 1.24.2
 * @constructor
 * @public
 * @experimental Since version 1.19. 
 * API is not yet finished and might change completely
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.NumericTile = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.NumericTile with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.NumericTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>indicator</code>.
 * The indicator arrow that shows value deviation.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.suite.ui.commons.DeviationIndicator} the value of property <code>indicator</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.getIndicator = function() { return new sap.suite.ui.commons.DeviationIndicator(); };

/**
 * 
 * Getter for property <code>scale</code>.
 * The scaling prefix. Financial characters can be used for currencies and counters. The SI prefixes can be used for units.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>scale</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.getScale = function() { return ""; };

/**
 * 
 * Getter for property <code>unit</code>.
 * The percent sign, the currency symbol, or the unit of measure.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>unit</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.getUnit = function() { return ""; };

/**
 * 
 * Getter for property <code>value</code>.
 * The actual value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.getValue = function() { return ""; };

/**
 * 
 * Getter for property <code>valueColor</code>.
 * The semantic color of the value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.suite.ui.commons.InfoTileValueColor} the value of property <code>valueColor</code>
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.getValueColor = function() { return new sap.suite.ui.commons.InfoTileValueColor(); };

/**
 * 
 * Setter for property <code>indicator</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.suite.ui.commons.DeviationIndicator} oIndicator  new value for property <code>indicator</code>
 * @return {sap.suite.ui.commons.NumericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.setIndicator = function(oIndicator) { return new sap.suite.ui.commons.NumericTile(); };

/**
 * 
 * Setter for property <code>scale</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sScale  new value for property <code>scale</code>
 * @return {sap.suite.ui.commons.NumericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.setScale = function(sScale) { return new sap.suite.ui.commons.NumericTile(); };

/**
 * 
 * Setter for property <code>unit</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sUnit  new value for property <code>unit</code>
 * @return {sap.suite.ui.commons.NumericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.setUnit = function(sUnit) { return new sap.suite.ui.commons.NumericTile(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.suite.ui.commons.NumericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.setValue = function(sValue) { return new sap.suite.ui.commons.NumericTile(); };

/**
 * 
 * Setter for property <code>valueColor</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.suite.ui.commons.InfoTileValueColor} oValueColor  new value for property <code>valueColor</code>
 * @return {sap.suite.ui.commons.NumericTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.setValueColor = function(oValueColor) { return new sap.suite.ui.commons.NumericTile(); };


// ---- sap.suite.ui.commons.PictureZoomIn --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new PictureZoomIn.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getImageSrc imageSrc} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBusyIndicator busyIndicator} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Shows picture in fullscreen.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.PictureZoomIn = function(sId,mSettings) {};
/**
 * 
 * Destroys the busyIndicator in the aggregation 
 * named <code>busyIndicator</code>.
 * @return {sap.suite.ui.commons.PictureZoomIn} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.PictureZoomIn.prototype.destroyBusyIndicator = function() { return new sap.suite.ui.commons.PictureZoomIn(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.PictureZoomIn with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.PictureZoomIn.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>busyIndicator</code>.<br/>
 * Custom busy indicator.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.suite.ui.commons.PictureZoomIn.prototype.getBusyIndicator = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>description</code>.
 * Description is shown under image.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>description</code>
 * @public
 * 
 */
sap.suite.ui.commons.PictureZoomIn.prototype.getDescription = function() { return ""; };

/**
 * 
 * Getter for property <code>imageSrc</code>.
 * Source for image.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>imageSrc</code>
 * @public
 * 
 */
sap.suite.ui.commons.PictureZoomIn.prototype.getImageSrc = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Setter for the aggregated <code>busyIndicator</code>.
 * @param {sap.ui.core.Control} oBusyIndicator
 * @return {sap.suite.ui.commons.PictureZoomIn} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.PictureZoomIn.prototype.setBusyIndicator = function(oBusyIndicator) { return new sap.suite.ui.commons.PictureZoomIn(); };

/**
 * 
 * Setter for property <code>description</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.suite.ui.commons.PictureZoomIn} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.PictureZoomIn.prototype.setDescription = function(sDescription) { return new sap.suite.ui.commons.PictureZoomIn(); };

/**
 * 
 * Setter for property <code>imageSrc</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sImageSrc  new value for property <code>imageSrc</code>
 * @return {sap.suite.ui.commons.PictureZoomIn} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.PictureZoomIn.prototype.setImageSrc = function(sImageSrc) { return new sap.suite.ui.commons.PictureZoomIn(); };


// ---- sap.suite.ui.commons.ProcessFlow --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ProcessFlow.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Process Flow is a complex control that enables you to display documents or other items in their flow.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ProcessFlow = function(sId,mSettings) {};
/**
 * 
 * This event is fired when the the header column was clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent This object represents the wrapped process flow lane header object.
 * @public
 */
sap.suite.ui.commons.ProcessFlow.prototype.headerPress = function(oControlEvent) { return null; };

/**
 * 
 * This event is fired when a process flow node was clicked. The user can catch this event in addition to the title press event.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent This object represents the wrapped process flow node object.
 * @public
 */
sap.suite.ui.commons.ProcessFlow.prototype.nodePress = function(oControlEvent) { return null; };

/**
 * 
 * This event is fired when a process flow node title was
 * clicked. The user can access the clicked process flow node control object which is the only argument of the event handler.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent This object represents the wrapped process flow node object.
 * @public
 */
sap.suite.ui.commons.ProcessFlow.prototype.nodeTitlePress = function(oControlEvent) { return null; };

/**
 * 
 * This event is fired when a problem occurs with the process flow calculation. Usually this means that there is a problem with the data. The console contains the detailed error description with the errors.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent This parameters contains the localized string with error message.
 * @public
 */
sap.suite.ui.commons.ProcessFlow.prototype.onError = function(oControlEvent) { return null; };

/**
 * 
 * Adds some lane <code>oLane</code> 
 * to the aggregation named <code>lanes</code>.
 * @param {sap.suite.ui.commons.ProcessFlowLaneHeader}
 *            oLane the lane to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.addLane = function(oLane) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Adds some node <code>oNode</code> 
 * to the aggregation named <code>nodes</code>.
 * @param {sap.suite.ui.commons.ProcessFlowNode}
 *            oNode the node to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.addNode = function(oNode) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * function applies the changes to the display state based on the requirement.s
 * 1. if any node is in the highlighted state all others go to the dimmed
 * @public
 */
sap.suite.ui.commons.ProcessFlow.prototype.applyNodeDisplayState = function() { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'headerPress' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself. 
 * </p><p>
 * This event is fired when the the header column was clicked.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.attachHeaderPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'nodePress' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself. 
 * </p><p>
 * This event is fired when a process flow node was clicked. The user can catch this event in addition to the title press event.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.attachNodePress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'nodeTitlePress' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself. 
 * </p><p>
 * This event is fired when a process flow node title was
 * clicked. The user can access the clicked process flow node control object which is the only argument of the event handler.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.attachNodeTitlePress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'onError' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself. 
 * </p><p>
 * This event is fired when a problem occurs with the process flow calculation. Usually this means that there is a problem with the data. The console contains the detailed error description with the errors.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/> itself.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.attachOnError = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Destroys all the lanes in the aggregation 
 * named <code>lanes</code>.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.destroyLanes = function() { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Destroys all the nodes in the aggregation 
 * named <code>nodes</code>.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.destroyNodes = function() { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'headerPress' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.detachHeaderPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'nodePress' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.detachNodePress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'nodeTitlePress' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.detachNodeTitlePress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'onError' event of this <code>sap.suite.ui.commons.ProcessFlow</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.detachOnError = function(fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.ProcessFlow with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ProcessFlow.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event headerPress to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'oEvent' of type <code>object</code> This object represents the wrapped process flow lane header object.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.fireHeaderPress = function(mArguments) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Fire event nodePress to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'oEvent' of type <code>object</code> This object represents the wrapped process flow node object.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.fireNodePress = function(mArguments) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Fire event nodeTitlePress to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'oEvent' of type <code>object</code> This object represents the wrapped process flow node object.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.fireNodeTitlePress = function(mArguments) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Fire event onError to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'oEvent' of type <code>object</code> This parameters contains the localized string with error message.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.fireOnError = function(mArguments) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * This method returns the nodeId of the node, which is focused.
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ProcessFlow.prototype.getFocusedNode = function() { return ""; };

/**
 * 
 * Getter for property <code>foldedCorners</code>.
 * This property defines the folded corners for the single node control. The following values exist:
 * - true: means folded corner
 * - false/null/undefined: means normal corner
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>foldedCorners</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.getFoldedCorners = function() { return false; };

/**
 * 
 * Getter for aggregation <code>lanes</code>.<br/>
 * This is a header of the table for the process flow control.
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader[]}
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.getLanes = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>nodes</code>.<br/>
 * this is the aggregation of the node controls put into
 * the table to the calculated cells.
 * @return {sap.suite.ui.commons.ProcessFlowNode[]}
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.getNodes = function() { return new Array(); };

/**
 * 
 * Getter for property <code>scrollable</code>.
 * By default, the control body is embedded into a scroll container of fixed size, so the user
 * can put the control into a fixe sized layout.
 * When the control body (the graph) gets larger than the container cuts the overflowing parts of the graph and the cut parts can be viewed by scroling the control body.
 * When the control body fits into the container limits, obviously no scrolling is possible (and makes sense).
 * </p><p>
 * The scrolling feature can be turned off by setting this property value to false,
 * so the width/height of the whole control will change as the flow graph gets smaller/larger.
 * In this case the control body could not be scrolled, as the control body size matches the control container size.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>scrollable</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.getScrollable = function() { return false; };

/**
 * 
 * Getter for property <code>wheelZoomable</code>.
 * The property specifies if to enable semantic zooming by mouse wheel events on desktop browsers.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>wheelZoomable</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.getWheelZoomable = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.suite.ui.commons.ProcessFlowLaneHeader</code> in the aggregation named <code>lanes</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.ProcessFlowLaneHeader}
 *            oLane the lane whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.indexOfLane = function(oLane) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.suite.ui.commons.ProcessFlowNode</code> in the aggregation named <code>nodes</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.ProcessFlowNode}
 *            oNode the node whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.indexOfNode = function(oNode) { return 0; };

/**
 * 
 * Inserts a lane into the aggregation named <code>lanes</code>.
 * @param {sap.suite.ui.commons.ProcessFlowLaneHeader}
 *          oLane the lane to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the lane should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the lane is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the lane is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.insertLane = function(oLane,iIndex) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Inserts a node into the aggregation named <code>nodes</code>.
 * @param {sap.suite.ui.commons.ProcessFlowNode}
 *          oNode the node to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the node should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the node is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the node is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.insertNode = function(oNode,iIndex) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>lanes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.removeAllLanes = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>nodes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.ProcessFlowNode[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.removeAllNodes = function() { return new Array(); };

/**
 * 
 * Removes an lane from the aggregation named <code>lanes</code>.
 * @param {int | string | sap.suite.ui.commons.ProcessFlowLaneHeader} vLane the lane to remove or its index or id
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} the removed lane or null
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.removeLane = function(vLane) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * 
 * Removes an node from the aggregation named <code>nodes</code>.
 * @param {int | string | sap.suite.ui.commons.ProcessFlowNode} vNode the node to remove or its index or id
 * @return {sap.suite.ui.commons.ProcessFlowNode} the removed node or null
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.removeNode = function(vNode) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Setter for property <code>foldedCorners</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bFoldedCorners  new value for property <code>foldedCorners</code>
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.setFoldedCorners = function(bFoldedCorners) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Setter for property <code>scrollable</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bScrollable  new value for property <code>scrollable</code>
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.setScrollable = function(bScrollable) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * Setter for property <code>wheelZoomable</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bWheelZoomable  new value for property <code>wheelZoomable</code>
 * @return {sap.suite.ui.commons.ProcessFlow} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.setWheelZoomable = function(bWheelZoomable) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * 
 * This method triggers the update of the model and correspondingly the rerender method.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ProcessFlow.prototype.updateModel = function() { return null; };


// ---- sap.suite.ui.commons.ProcessFlowConnection --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ProcessFlowConnection.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDrawData drawData} : object[]</li>
 * <li>{@link #getZoomLevel zoomLevel} : sap.suite.ui.commons.ProcessFlowZoomLevel (default: sap.suite.ui.commons.ProcessFlowZoomLevel.Two)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control is used internally to connect process flow node A with process flow node B in respect to the style(s) chosen by the end-user
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ProcessFlowConnection = function(sId,mSettings) {};
/**
 * 
 * Add connection data
 * @public
 * @param {object} singleConnectionData
 * @returns {Array} connectionData
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype.addConnectionData = function(singleConnectionData) { return null; };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.ProcessFlowConnection with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ProcessFlowConnection.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>drawData</code>.
 * This is an array of the following attributes for one element:
 * 1. flowLine (string) - A connection definition where the line should be drawn. A string which defines a course of a flow line. A flow line is a connection between nodes in a process flow control. The string can contain the following characters:
 * - "r" for right,
 * - "t" for top,
 * - "l" for left,
 * - "b" for bottom.
 * 2. targetNodeState (ProcessFlowNodeState) - A copy of the target node status. If the target node is created, the line is solid.
 * If the target node is planned, the line is dashed.
 * 3. displayState (ProcessFlowDisplayState) - Display state of the node. This property defines if the node is displayed regularly, highlighted, or dimmed in combination with a selected visual style of the control.
 * 4. hasArrow (boolean) - Indicates if the line has an arrow on the right end.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>drawData</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype.getDrawData = function() { return new Array(); };

/**
 * 
 * Getter for property <code>zoomLevel</code>.
 * This is a current zoom level for the connection. The point of connection to the node is derived from zoom level.
 * </p><p>
 * Default value is <code>sap.suite.ui.commons.ProcessFlowZoomLevel.Two</code>
 * @return {sap.suite.ui.commons.ProcessFlowZoomLevel} the value of property <code>zoomLevel</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype.getZoomLevel = function() { return new sap.suite.ui.commons.ProcessFlowZoomLevel(); };

/**
 * 
 * Setter for property <code>drawData</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aDrawData  new value for property <code>drawData</code>
 * @return {sap.suite.ui.commons.ProcessFlowConnection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype.setDrawData = function(aDrawData) { return new sap.suite.ui.commons.ProcessFlowConnection(); };

/**
 * 
 * Setter for property <code>zoomLevel</code>.
 * </p><p>
 * Default value is <code>sap.suite.ui.commons.ProcessFlowZoomLevel.Two</code> 
 * @param {sap.suite.ui.commons.ProcessFlowZoomLevel} oZoomLevel  new value for property <code>zoomLevel</code>
 * @return {sap.suite.ui.commons.ProcessFlowConnection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype.setZoomLevel = function(oZoomLevel) { return new sap.suite.ui.commons.ProcessFlowConnection(); };


// ---- sap.suite.ui.commons.ProcessFlowDisplayState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ProcessFlowDisplayState.toString = function() { return ""; };

// ---- sap.suite.ui.commons.ProcessFlowLaneHeader --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ProcessFlowLaneHeader.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getIconSrc iconSrc} : sap.ui.core.URI</li>
 * <li>{@link #getPosition position} : int</li>
 * <li>{@link #getLaneId laneId} : string</li>
 * <li>{@link #getState state} : object</li>
 * <li>{@link #getZoomLevel zoomLevel} : sap.suite.ui.commons.ProcessFlowZoomLevel</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.ProcessFlowLaneHeader#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control gives you an overview of documents/items used in the process flow. The process flow is represented by the doughnut chart sections which are colored according to the documents’ status(es). This control can be used in two different ways. If you use it standalone, an event is fired and can be caught in to display the node map. If you use it with the node/document, it gives you an overview of the documents/items used in the process flow that is represented by the doughnut chart sections.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ProcessFlowLaneHeader = function(sId,mSettings) {};
/**
 * 
 * This event is fired when the header is clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent tbd
 * @public
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.ProcessFlowLaneHeader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ProcessFlowLaneHeader</code>.<br/> itself. 
 * </p><p>
 * This event is fired when the header is clicked.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlowLaneHeader</code>.<br/> itself.
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * 
 * Process symbol node factory method - creates a control with a square symbol used at the end of the lane header.
 * @param {Boolean} bHeaderMode true if the hand cursor should be displayed above the header
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} a new end symbol node
 * @since 1.22
 * @public
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.createNewEndSymbol = function(bHeaderMode) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * 
 * Process symbol node factory method - creates a control with a '>>>' symbol.
 * @param {Boolean} bHeaderMode true if the hand cursor should be displayed above the header
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} a new process symbol node
 * @since 1.22
 * @public
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.createNewProcessSymbol = function(bHeaderMode) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * 
 * Process symbol node factory method - creates a control with a square symbol used at the beginning of the lane header.
 * @param {Boolean} bHeaderMode true if the hand cursor should be displayed above the header
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} a new start symbol node
 * @since 1.22
 * @public
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.createNewStartSymbol = function(bHeaderMode) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.ProcessFlowLaneHeader</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * 
 * Enable/disable ellipsis support for non-webkit browsers (for the case where there is no native ellipsis support).
 * It is recommended to disable the ellipsis support in case the control is inserted
 * into a container of variable width as the ellipsis position is not updated automatically.
 * By default the ellipsis support is enabled.
 * @param {Boolean} bSupportEnabled false if the ellipsis support is to be disabled
 * @since 1.22
 * @public
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.enableEllipsisSupportForText = function(bSupportEnabled) { return null; };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.ProcessFlowLaneHeader with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'oEvent' of type <code>object</code> tbd</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.firePress = function(mArguments) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * 
 * Getter for property <code>iconSrc</code>.
 * Icon to be displayed in the middle of the control.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconSrc</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.getIconSrc = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>laneId</code>.
 * Internal identification of the header.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>laneId</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.getLaneId = function() { return ""; };

/**
 * 
 * Getter for property <code>position</code>.
 * Position of the lane in the process flow control. Numbering of the position has to be sequential and needs to start from 0.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>position</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.getPosition = function() { return 0; };

/**
 * 
 * Getter for property <code>state</code>.
 * Array of the ProcessFlowLaneState. The user can explicitly set an array with the two properties state and value of the state, for example [state:sap.suite.ui.commons.ProcessFlowNodeState.Neutral, value: 20]. Possible states are states are positive, negative, neutral, and planned.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>state</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.getState = function() { return new Object(); };

/**
 * 
 * Getter for property <code>text</code>.
 * Text information that is displayed in the control.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>zoomLevel</code>.
 * Current zoom level for the lane header.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.suite.ui.commons.ProcessFlowZoomLevel} the value of property <code>zoomLevel</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.getZoomLevel = function() { return new sap.suite.ui.commons.ProcessFlowZoomLevel(); };

/**
 * 
 * Process Flow Lane Header controller.
 * @public
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.init = function() { return null; };

/**
 * 
 * Standard method called after the control rendering.
 * @public
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.onAfterRendering = function() { return null; };

/**
 * 
 * Setter for property <code>iconSrc</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIconSrc  new value for property <code>iconSrc</code>
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.setIconSrc = function(sIconSrc) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * 
 * Setter for property <code>laneId</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLaneId  new value for property <code>laneId</code>
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.setLaneId = function(sLaneId) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * 
 * Setter for property <code>position</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iPosition  new value for property <code>position</code>
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.setPosition = function(iPosition) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * 
 * Setter for property <code>state</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oState  new value for property <code>state</code>
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.setState = function(oState) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.setText = function(sText) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * 
 * Setter for property <code>zoomLevel</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.suite.ui.commons.ProcessFlowZoomLevel} oZoomLevel  new value for property <code>zoomLevel</code>
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.setZoomLevel = function(oZoomLevel) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };


// ---- sap.suite.ui.commons.ProcessFlowLaneState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ProcessFlowLaneState.toString = function() { return ""; };

// ---- sap.suite.ui.commons.ProcessFlowNode --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ProcessFlowNode.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
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
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.ProcessFlowNode#event:titlePress titlePress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.ProcessFlowNode#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control enables you to see documents (or other items) in respect to their statuses – positive, negative, neutral, planned. In addition to the node title (which can be optionally a hyperlink) also two other text fields are provided and can be filled. The process flow nodes consider all styles depending on the status they are in. The user can update or change the content of the node. The content of the node can be also filtered according to updated data and specific parameters set. This means that also the node’s style is affected.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ProcessFlowNode = function(sId,mSettings) {};
/**
 * 
 * This event is fired when the user clicks on the node. However, this event is not fired if the titlePress event has been fired.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent The node identification.
 * @public
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * This event handler is executed when the user clicks the node title. This event is fired only when the title is clickable (isTitleClickable equals true).
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent The node identification.
 * @public
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.titlePress = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/> itself. 
 * </p><p>
 * This event is fired when the user clicks on the node. However, this event is not fired if the titlePress event has been fired.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/> itself.
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'titlePress' event of this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/> itself. 
 * </p><p>
 * This event handler is executed when the user clicks the node title. This event is fired only when the title is clickable (isTitleClickable equals true).
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/> itself.
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.attachTitlePress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'titlePress' event of this <code>sap.suite.ui.commons.ProcessFlowNode</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.detachTitlePress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Destroy all created controls
 * @public
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.exit = function() { return null; };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.ProcessFlowNode with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'oEvent' of type <code>object</code> The node identification.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.firePress = function(mArguments) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Fire event titlePress to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'oEvent' of type <code>object</code> The node identification.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.fireTitlePress = function(mArguments) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Getter for property <code>children</code>.
 * Defines an array of children of the node.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string[]} the value of property <code>children</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getChildren = function() { return new Array(); };

/**
 * 
 * Getter for property <code>focused</code>.
 * The parameter defines if the node should be displayed in focus state.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>focused</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getFocused = function() { return false; };

/**
 * 
 * Getter for property <code>highlighted</code>.
 * The parameter defines if the node should be displayed in highlighted state.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>highlighted</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getHighlighted = function() { return false; };

/**
 * 
 * Getter for property <code>isTitleClickable</code>.
 * Specifies if the node title is clickable.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>isTitleClickable</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getIsTitleClickable = function() { return false; };

/**
 * 
 * Getter for property <code>laneId</code>.
 * Specifies the assignment of the node to the respective lane.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>laneId</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getLaneId = function() { return ""; };

/**
 * 
 * Getter for property <code>nodeId</code>.
 * >Node identifier.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>nodeId</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getNodeId = function() { return ""; };

/**
 * 
 * Getter for property <code>state</code>.
 * State of the node.
 * </p><p>
 * Default value is <code>sap.suite.ui.commons.ProcessFlowNodeState.Neutral</code>
 * @return {sap.suite.ui.commons.ProcessFlowNodeState} the value of property <code>state</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getState = function() { return new sap.suite.ui.commons.ProcessFlowNodeState(); };

/**
 * 
 * Getter for property <code>stateText</code>.
 * Description of the state, for example "Status OK".
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>stateText</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getStateText = function() { return ""; };

/**
 * 
 * Getter for property <code>texts</code>.
 * The property contains the additional texts on the node. The expected type is array of strings. One array must not contain more than two strings. Additional strings in the array will be ignored.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string[]} the value of property <code>texts</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getTexts = function() { return new Array(); };

/**
 * 
 * Getter for property <code>title</code>.
 * The node title.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>titleAbbreviation</code>.
 * Title abbreviation is used in the compact mode.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>titleAbbreviation</code>
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getTitleAbbreviation = function() { return ""; };

/**
 * 
 * ProcessFlowNode initial function
 *  @public
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.init = function() { return null; };

/**
 * 
 * Setter for property <code>children</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string[]} aChildren  new value for property <code>children</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setChildren = function(aChildren) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Setter for property <code>focused</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bFocused  new value for property <code>focused</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setFocused = function(bFocused) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Setter for property <code>highlighted</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bHighlighted  new value for property <code>highlighted</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setHighlighted = function(bHighlighted) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Setter for property <code>isTitleClickable</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bIsTitleClickable  new value for property <code>isTitleClickable</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setIsTitleClickable = function(bIsTitleClickable) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Setter for property <code>laneId</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLaneId  new value for property <code>laneId</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setLaneId = function(sLaneId) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Setter for property <code>nodeId</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sNodeId  new value for property <code>nodeId</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setNodeId = function(sNodeId) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Setter for property <code>state</code>.
 * </p><p>
 * Default value is <code>sap.suite.ui.commons.ProcessFlowNodeState.Neutral</code> 
 * @param {sap.suite.ui.commons.ProcessFlowNodeState} oState  new value for property <code>state</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setState = function(oState) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Setter for property <code>stateText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sStateText  new value for property <code>stateText</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setStateText = function(sStateText) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Setter for property <code>texts</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string[]} aTexts  new value for property <code>texts</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setTexts = function(aTexts) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * 
 * Setter for property <code>titleAbbreviation</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitleAbbreviation  new value for property <code>titleAbbreviation</code>
 * @return {sap.suite.ui.commons.ProcessFlowNode} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setTitleAbbreviation = function(sTitleAbbreviation) { return new sap.suite.ui.commons.ProcessFlowNode(); };


// ---- sap.suite.ui.commons.ProcessFlowNodeState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ProcessFlowNodeState.toString = function() { return ""; };

// ---- sap.suite.ui.commons.ProcessFlowZoomLevel --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ProcessFlowZoomLevel.toString = function() { return ""; };

// ---- sap.suite.ui.commons.RepeaterViewConfiguration --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new RepeaterViewConfiguration.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconHovered iconHovered} : sap.ui.core.URI</li>
 * <li>{@link #getPath path} : string</li>
 * <li>{@link #getItemMinWidth itemMinWidth} : int (default: -1)</li>
 * <li>{@link #getNumberOfTiles numberOfTiles} : int (default: -1)</li>
 * <li>{@link #getResponsive responsive} : any (default: false)</li>
 * <li>{@link #getExternal external} : boolean (default: false)</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li>
 * <li>{@link #getItemHeight itemHeight} : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTemplate template} : sap.ui.core.Control</li>
 * <li>{@link #getExternalRepresentation externalRepresentation} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A configuration control defining how the content of the sap.suite.ui.commons.ViewRepeater control is displayed and what data is bound.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.RepeaterViewConfiguration = function(sId,mSettings) {};
/**
 * 
 * Destroys the externalRepresentation in the aggregation 
 * named <code>externalRepresentation</code>.
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.destroyExternalRepresentation = function() { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * 
 * Destroys the template in the aggregation 
 * named <code>template</code>.
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.destroyTemplate = function() { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.RepeaterViewConfiguration with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>external</code>.
 * Indicates if the external representation of this view is rendered instead of the row repeater's own content.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>external</code>
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getExternal = function() { return false; };

/**
 * 
 * Getter for aggregation <code>externalRepresentation</code>.<br/>
 * The control to be rendered instead of sap.suite.ui.commons.ViewRepeater's own content. Only used if the "external" property is set to true. This allows you to create custom views, for example, Table views. The sap.suite.ui.commons.ViewRepeater control will share its model with this control if the control does not have its own model.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getExternalRepresentation = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * A path to the icon representing this view in sap.suite.ui.commons.ViewRepeater view selector.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconHovered</code>.
 * A path to the icon representing this view in sap.suite.ui.commons.ViewRepeater view selector when the regular icon is hovered.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconHovered</code>
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getIconHovered = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconSelected</code>.
 * A path to the icon representing this view in sap.suite.ui.commons.ViewRepeater view selector when the regular icon is selected.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getIconSelected = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>itemHeight</code>.
 * The height of the tile in this view in pixels. Only applicable if the responsive property is set to true. This value is used for calculating the number of tile rows.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>itemHeight</code>
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getItemHeight = function() { return 0; };

/**
 * 
 * Getter for property <code>itemMinWidth</code>.
 * The minimal width of the tile in this view. Only applicable if "responsive" property is set to true.
 * </p><p>
 * Default value is <code>-1</code>
 * @return {int} the value of property <code>itemMinWidth</code>
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getItemMinWidth = function() { return 0; };

/**
 * 
 * Getter for property <code>numberOfTiles</code>.
 * The number of tiles/rows that will be shown on a single page in this view.
 * </p><p>
 * Default value is <code>-1</code>
 * @return {int} the value of property <code>numberOfTiles</code>
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getNumberOfTiles = function() { return 0; };

/**
 * 
 * Getter for property <code>path</code>.
 * A path used for rows/titles data binding.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>path</code>
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getPath = function() { return ""; };

/**
 * 
 * Getter for property <code>responsive</code>.
 * This parameter indicates whether the content is shown in rows or tiles. If false, the content is shown in rows just like in core sap.ui.commons.RowRepeater. If true, the content is shown in tiles (similar to sap.ui.ux3.DataSet control) that have minimal width defined by the "itemMinWidth" property. The number of columns depends on the parent control's width. If you resize the control, the number of columns may change respectively so that the content tiles can fill the entire space of a row.
 * </p><p>
 * Default value is <code>false</code>
 * @return {any} the value of property <code>responsive</code>
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getResponsive = function() { return null; };

/**
 * 
 * Getter for aggregation <code>template</code>.<br/>
 * The control used as a template while displaying rows/tiles in this view. It should not have fixed width wider than defined by the "itemMinWidth" property, otherwise some content may appear cropped.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getTemplate = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>title</code>.
 * The title of the view to be displayed in sap.suite.ui.commons.ViewRepeater view selector. If neither this nor "icon" property are defined, the default title "View ##" will be shown, where ## is an index number of the view in View Repeater starting from 1.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getTitle = function() { return ""; };

/**
 * 
 * Setter for property <code>external</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bExternal  new value for property <code>external</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setExternal = function(bExternal) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * 
 * Setter for the aggregated <code>externalRepresentation</code>.
 * @param {sap.ui.core.Control} oExternalRepresentation
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setExternalRepresentation = function(oExternalRepresentation) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setIcon = function(sIcon) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * 
 * Setter for property <code>iconHovered</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIconHovered  new value for property <code>iconHovered</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setIconHovered = function(sIconHovered) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * 
 * Setter for property <code>iconSelected</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIconSelected  new value for property <code>iconSelected</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setIconSelected = function(sIconSelected) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * 
 * Setter for property <code>itemHeight</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iItemHeight  new value for property <code>itemHeight</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setItemHeight = function(iItemHeight) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * 
 * Setter for property <code>itemMinWidth</code>.
 * </p><p>
 * Default value is <code>-1</code> 
 * @param {int} iItemMinWidth  new value for property <code>itemMinWidth</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setItemMinWidth = function(iItemMinWidth) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * 
 * Setter for property <code>numberOfTiles</code>.
 * </p><p>
 * Default value is <code>-1</code> 
 * @param {int} iNumberOfTiles  new value for property <code>numberOfTiles</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setNumberOfTiles = function(iNumberOfTiles) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * 
 * Setter for property <code>path</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sPath  new value for property <code>path</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setPath = function(sPath) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * 
 * Setter for property <code>responsive</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {any} oResponsive  new value for property <code>responsive</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setResponsive = function(oResponsive) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * 
 * Setter for the aggregated <code>template</code>.
 * @param {sap.ui.core.Control} oTemplate
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setTemplate = function(oTemplate) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };


// ---- sap.suite.ui.commons.SelectionState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.SelectionState.toString = function() { return ""; };

// ---- sap.suite.ui.commons.SplitButton --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new SplitButton.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getLite lite} : boolean (default: false)</li>
 * <li>{@link #getStyle style} : sap.ui.commons.ButtonStyle (default: sap.ui.commons.ButtonStyle.Default)</li>
 * <li>{@link #getStyled styled} : boolean (default: true)</li>
 * <li>{@link #getIconFirst iconFirst} : boolean (default: true)</li>
 * <li>{@link #getText text} : string (default: '')</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: '')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMenu menu} : sap.ui.commons.Menu</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Split Button Control is a composite control that consists of a default-action Button and a Menu Button control.
 * The default-action button control represents a simple push button. It is used for initiating actions, such as save or print. It can contain some text, an icon, or both; the order of the two can be configured. The action initiated by this button is considered to be the default action for the control, and it must be one of the selections defined in the Menu Button menu.
 * The Menu Button control is a button that opens a menu upon user's click. MenuButton is a composition of the Menu control and the Button control and thus inheriting all features. When a menu item is selected by the user, MenuButton throws an event called itemSelected. The event transfers the itemId of the selected item. As an alternative, the button press event can be used which has a similar behavior.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.SplitButton = function(sId,mSettings) {};
/**
 * 
 * Destroy the menu.
 * @return {sap.ui.commons.Menu}
 * @public
 */
sap.suite.ui.commons.SplitButton.prototype.destroyMenu = function() { return new sap.ui.commons.Menu(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.SplitButton with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.SplitButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>enabled</code>.
 * Boolean property to enable the control (default is true). Buttons that are disabled have other colors than enabled ones, depending on custom settings.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>icon</code>.
 * Icon to be displayed as graphical element within the action button.
 * </p><p>
 * Default value is <code>''</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconFirst</code>.
 * If set to true (default), the display sequence is 1. icon 2. control text .
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconFirst</code>
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getIconFirst = function() { return false; };

/**
 * 
 * Getter for property <code>lite</code>.
 * The split button is rendered as lite split button.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>lite</code>
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getLite = function() { return false; };

/**
 * 
 * Return the menu.
 * @return {sap.ui.commons.Menu}
 * @public
 */
sap.suite.ui.commons.SplitButton.prototype.getMenu = function() { return new sap.ui.commons.Menu(); };

/**
 * 
 * Getter for property <code>style</code>.
 * Style of the control (e.g. emphasized, accept)
 * </p><p>
 * Default value is <code>sap.ui.commons.ButtonStyle.Default</code>
 * @return {sap.ui.commons.ButtonStyle} the value of property <code>style</code>
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getStyle = function() { return new sap.ui.commons.ButtonStyle(); };

/**
 * 
 * Getter for property <code>styled</code>.
 * Indicatied if the button is styled. If not it is rendered as native HTML-button. In this case a custom styling can be added usig addStyleClass.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>styled</code>
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getStyled = function() { return false; };

/**
 * 
 * Getter for property <code>text</code>.
 * Text to be displayed for the action button.
 * </p><p>
 * Default value is <code>''</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible split buttons are not rendered
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getVisible = function() { return false; };

/**
 * 
 * set enabled property for the control
 * @param bEnabled
 *                {boolean}
 * @public
 */
sap.suite.ui.commons.SplitButton.prototype.setEnabled = function(bEnabled) { return null; };

/**
 * 
 * set icon (image) to be displayed in action button
 * @param sIcon
 *                {sap.ui.core.URI}
 * @public
 */
sap.suite.ui.commons.SplitButton.prototype.setIcon = function(sIcon) { return null; };

/**
 * 
 * set if the icon for the action button be displayed before or after text
 * @param bIconFirst
 *                {boolean}
 * @public
 */
sap.suite.ui.commons.SplitButton.prototype.setIconFirst = function(bIconFirst) { return null; };

/**
 * 
 * set lite property for the control
 * @param bLite
 *                {boolean}
 * @public
 */
sap.suite.ui.commons.SplitButton.prototype.setLite = function(bLite) { return null; };

/**
 * 
 * Set the menu to the button and set menu item for the action button. The menu item for action button must exist in the menu. If it doesn't exist the first menu item is set by
 * default.
 * @param oMenu
 *                {sap.ui.commons.Menu}
 * @param oMenuItem
 *                {sap.ui.commons.MenuItem}
 * @return {sap.suite.ui.commons.SplitButton} <code>this</code> to allow method chaining
 * @public
 */
sap.suite.ui.commons.SplitButton.prototype.setMenu = function(oMenu,oMenuItem) { return new sap.suite.ui.commons.SplitButton(); };

/**
 * 
 * set style for the control
 * @param oStyle
 *                {sap.ui.commons.ButtonStyle}
 * @public
 */
sap.suite.ui.commons.SplitButton.prototype.setStyle = function(oStyle) { return null; };

/**
 * 
 * set if the control is styled or not
 * @param bStyled
 *                {boolean}
 * @public
 */
sap.suite.ui.commons.SplitButton.prototype.setStyled = function(bStyled) { return null; };

/**
 * 
 * set text for the action button
 * @param sText
 *                {string}
 * @public
 */
sap.suite.ui.commons.SplitButton.prototype.setText = function(sText) { return null; };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.suite.ui.commons.SplitButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.setVisible = function(bVisible) { return new sap.suite.ui.commons.SplitButton(); };


// ---- sap.suite.ui.commons.ThingCollection --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ThingCollection.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getMinWidth minWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMinHeight minHeight} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.ux3.ThingViewer[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control contains a collection of the sap.ui.ux3.ThingViewer controls or descendants of sap.ui.ux3.ThingViewer. It allows you to navigate through them as well as delete them from the collection.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ThingCollection = function(sId,mSettings) {};
/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.ux3.ThingViewer}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ThingCollection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.addContent = function(oContent) { return new sap.suite.ui.commons.ThingCollection(); };

/**
 * 
 * Inserts an element into the next display position.
 * @param {sap.ui.ux3.ThingViewer} oOContent
 *         An instance of ThingViewer or an instance of its descendant.
 * @type sap.suite.ui.commons.ThingCollection
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ThingCollection.prototype.addNextContent = function(oOContent) { return new sap.suite.ui.commons.ThingCollection(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.ThingCollection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.destroyContent = function() { return new sap.suite.ui.commons.ThingCollection(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.ThingCollection with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ThingCollection.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * Contains a collection of sap.ui.ux3.ThingViewer controls or descendants of sap.ui.ux3.ThingViewer.
 * @return {sap.ui.ux3.ThingViewer[]}
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>height</code>.
 * The height of the control.
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>minHeight</code>.
 * The minimal height of the control.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>minHeight</code>
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.getMinHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>minWidth</code>.
 * The minimal width of the control.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>minWidth</code>
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.getMinWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the control.
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.ThingViewer</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingViewer}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.ux3.ThingViewer}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ThingCollection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.insertContent = function(oContent,iIndex) { return new sap.suite.ui.commons.ThingCollection(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingViewer[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.ux3.ThingViewer} vContent the content to remove or its index or id
 * @return {sap.ui.ux3.ThingViewer} the removed content or null
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.removeContent = function(vContent) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.ThingCollection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.setHeight = function(sHeight) { return new sap.suite.ui.commons.ThingCollection(); };

/**
 * 
 * Setter for property <code>minHeight</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sMinHeight  new value for property <code>minHeight</code>
 * @return {sap.suite.ui.commons.ThingCollection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.setMinHeight = function(sMinHeight) { return new sap.suite.ui.commons.ThingCollection(); };

/**
 * 
 * Setter for property <code>minWidth</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sMinWidth  new value for property <code>minWidth</code>
 * @return {sap.suite.ui.commons.ThingCollection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.setMinWidth = function(sMinWidth) { return new sap.suite.ui.commons.ThingCollection(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.ThingCollection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.setWidth = function(sWidth) { return new sap.suite.ui.commons.ThingCollection(); };

/**
 * 
 * Displays the next item in the collection.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ThingCollection.prototype.shiftNext = function() { return null; };

/**
 * 
 * Displays a previous item in the collection.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ThingCollection.prototype.shiftPrev = function() { return null; };


// ---- sap.suite.ui.commons.ThingGroupDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ThingGroupDesign.toString = function() { return ""; };

// ---- sap.suite.ui.commons.ThreePanelThingInspector --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ThreePanelThingInspector.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowHeader showHeader} : boolean (default: true)</li>
 * <li>{@link #getLogo logo} : sap.ui.core.URI</li>
 * <li>{@link #getSidebarWidth sidebarWidth} : sap.ui.core.CSSSize (default: '224px')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMenuContent menuContent} : sap.ui.commons.Link[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.ThingInspector#constructor sap.ui.ux3.ThingInspector}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control extends the sap.ui.ux3.ThingInspector control. It displays the sap.suite.ui.commons.ThreePanelThingViewer control in the sap.ui.ux3.Overlay control.
 * @extends sap.ui.ux3.ThingInspector
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ThreePanelThingInspector = function(sId,mSettings) {};
/**
 * 
 * Adds some menuContent <code>oMenuContent</code> 
 * to the aggregation named <code>menuContent</code>.
 * @param {sap.ui.commons.Link}
 *            oMenuContent the menuContent to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ThreePanelThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.addMenuContent = function(oMenuContent) { return new sap.suite.ui.commons.ThreePanelThingInspector(); };

/**
 * 
 * Destroys all the menuContent in the aggregation 
 * named <code>menuContent</code>.
 * @return {sap.suite.ui.commons.ThreePanelThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.destroyMenuContent = function() { return new sap.suite.ui.commons.ThreePanelThingInspector(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.ThreePanelThingInspector with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>logo</code>.
 * A URL of the source of the ThingViewer's key visual image.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>logo</code>
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.getLogo = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for aggregation <code>menuContent</code>.<br/>
 * The items of the ThingViewer's Action Menu.
 * @return {sap.ui.commons.Link[]}
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.getMenuContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>showHeader</code>.
 * Shows or hides a middle panel of the ThingViewer named Header that contains general information.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.getShowHeader = function() { return false; };

/**
 * 
 * Getter for property <code>sidebarWidth</code>.
 * The width of the ThingViewer's navigation panel.
 * </p><p>
 * Default value is <code>224px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>sidebarWidth</code>
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.getSidebarWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.commons.Link</code> in the aggregation named <code>menuContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.Link}
 *            oMenuContent the menuContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.indexOfMenuContent = function(oMenuContent) { return 0; };

/**
 * 
 * Inserts a menuContent into the aggregation named <code>menuContent</code>.
 * @param {sap.ui.commons.Link}
 *          oMenuContent the menuContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the menuContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the menuContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the menuContent is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ThreePanelThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.insertMenuContent = function(oMenuContent,iIndex) { return new sap.suite.ui.commons.ThreePanelThingInspector(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>menuContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.Link[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.removeAllMenuContent = function() { return new Array(); };

/**
 * 
 * Removes an menuContent from the aggregation named <code>menuContent</code>.
 * @param {int | string | sap.ui.commons.Link} vMenuContent the menuContent to remove or its index or id
 * @return {sap.ui.commons.Link} the removed menuContent or null
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.removeMenuContent = function(vMenuContent) { return new sap.ui.commons.Link(); };

/**
 * 
 * Setter for property <code>logo</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sLogo  new value for property <code>logo</code>
 * @return {sap.suite.ui.commons.ThreePanelThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.setLogo = function(sLogo) { return new sap.suite.ui.commons.ThreePanelThingInspector(); };

/**
 * 
 * Setter for property <code>showHeader</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.suite.ui.commons.ThreePanelThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.setShowHeader = function(bShowHeader) { return new sap.suite.ui.commons.ThreePanelThingInspector(); };

/**
 * 
 * Setter for property <code>sidebarWidth</code>.
 * </p><p>
 * Default value is <code>224px</code> 
 * @param {sap.ui.core.CSSSize} sSidebarWidth  new value for property <code>sidebarWidth</code>
 * @return {sap.suite.ui.commons.ThreePanelThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.setSidebarWidth = function(sSidebarWidth) { return new sap.suite.ui.commons.ThreePanelThingInspector(); };


// ---- sap.suite.ui.commons.ThreePanelThingViewer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ThreePanelThingViewer.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLogo logo} : sap.ui.core.URI</li>
 * <li>{@link #getShowHeader showHeader} : boolean</li>
 * <li>{@link #getSidebarWidth sidebarWidth} : sap.ui.core.CSSSize (default: '244px')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMenuContent menuContent} : sap.ui.commons.Link[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.ThingViewer#constructor sap.ui.ux3.ThingViewer}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control extends the sap.ui.ux3.ThingViewer control. The first panel can display a thing icon, a title, the Action Menu button, up to two rows of text descriptions (the first is wrapped, the second is truncated), vertical navigation bar (sap.suite.ui.commons.VerticalNavigationBar), and an image aka key visual. The second panel displays the header area as a vertical panel containing ThingGroup objects. The third panel is a main content area designed to display ThingGroup objects.
 * @extends sap.ui.ux3.ThingViewer
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ThreePanelThingViewer = function(sId,mSettings) {};
/**
 * 
 * Adds some menuContent <code>oMenuContent</code> 
 * to the aggregation named <code>menuContent</code>.
 * @param {sap.ui.commons.Link}
 *            oMenuContent the menuContent to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ThreePanelThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.addMenuContent = function(oMenuContent) { return new sap.suite.ui.commons.ThreePanelThingViewer(); };

/**
 * 
 * Destroys all the menuContent in the aggregation 
 * named <code>menuContent</code>.
 * @return {sap.suite.ui.commons.ThreePanelThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.destroyMenuContent = function() { return new sap.suite.ui.commons.ThreePanelThingViewer(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.ThreePanelThingViewer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>logo</code>.
 * A URL of the source of an image known as key visual. This can be a company logo or other essential graphics.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>logo</code>
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.getLogo = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for aggregation <code>menuContent</code>.<br/>
 * This aggregation allows you to add sap.ui.commons.Link items to the Action Menu. The menu appears as a popup when a user chooses a button in the top title section of the navigation panel.
 * @return {sap.ui.commons.Link[]}
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.getMenuContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>showHeader</code>.
 * Shows or hides a middle panel named Header that contains general information.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.getShowHeader = function() { return false; };

/**
 * 
 * Getter for property <code>sidebarWidth</code>.
 * The width of the first panel that contains thing's title, icon, key visual and navigation bar. The default value is "244px".
 * </p><p>
 * Default value is <code>244px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>sidebarWidth</code>
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.getSidebarWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.commons.Link</code> in the aggregation named <code>menuContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.Link}
 *            oMenuContent the menuContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.indexOfMenuContent = function(oMenuContent) { return 0; };

/**
 * 
 * Inserts a menuContent into the aggregation named <code>menuContent</code>.
 * @param {sap.ui.commons.Link}
 *          oMenuContent the menuContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the menuContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the menuContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the menuContent is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ThreePanelThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.insertMenuContent = function(oMenuContent,iIndex) { return new sap.suite.ui.commons.ThreePanelThingViewer(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>menuContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.Link[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.removeAllMenuContent = function() { return new Array(); };

/**
 * 
 * Removes an menuContent from the aggregation named <code>menuContent</code>.
 * @param {int | string | sap.ui.commons.Link} vMenuContent the menuContent to remove or its index or id
 * @return {sap.ui.commons.Link} the removed menuContent or null
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.removeMenuContent = function(vMenuContent) { return new sap.ui.commons.Link(); };

/**
 * 
 * Marks the first facet(navigation item) as selected if no facets selected and fires facetSelected event.
 * @type sap.suite.ui.commons.ThreePanelThingViewer
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.selectDefaultFacet = function() { return new sap.suite.ui.commons.ThreePanelThingViewer(); };

/**
 * 
 * Setter for property <code>logo</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sLogo  new value for property <code>logo</code>
 * @return {sap.suite.ui.commons.ThreePanelThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.setLogo = function(sLogo) { return new sap.suite.ui.commons.ThreePanelThingViewer(); };

/**
 * 
 * Setter for property <code>showHeader</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.suite.ui.commons.ThreePanelThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.setShowHeader = function(bShowHeader) { return new sap.suite.ui.commons.ThreePanelThingViewer(); };

/**
 * 
 * Setter for property <code>sidebarWidth</code>.
 * </p><p>
 * Default value is <code>244px</code> 
 * @param {sap.ui.core.CSSSize} sSidebarWidth  new value for property <code>sidebarWidth</code>
 * @return {sap.suite.ui.commons.ThreePanelThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.setSidebarWidth = function(sSidebarWidth) { return new sap.suite.ui.commons.ThreePanelThingViewer(); };


// ---- sap.suite.ui.commons.TileContent --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new TileContent.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getFooter footer} : string</li>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: "Auto")</li>
 * <li>{@link #getUnit unit} : string</li>
 * <li>{@link #getDisabled disabled} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control serves a universal container for different types of content and footer.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.TileContent = function(sId,mSettings) {};
/**
 * 
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.TileContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TileContent.prototype.destroyContent = function() { return new sap.suite.ui.commons.TileContent(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.TileContent with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.TileContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The switchable view that depends on the tile type.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.suite.ui.commons.TileContent.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>disabled</code>.
 * Disables control if true.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>disabled</code>
 * @public
 * 
 */
sap.suite.ui.commons.TileContent.prototype.getDisabled = function() { return false; };

/**
 * 
 * Getter for property <code>footer</code>.
 * The footer text of the tile.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>footer</code>
 * @public
 * 
 */
sap.suite.ui.commons.TileContent.prototype.getFooter = function() { return ""; };

/**
 * 
 * Getter for property <code>size</code>.
 * Updates the size of the tile. If not set then the default size is applied based on the device tile.
 * </p><p>
 * Default value is <code>"Auto"</code>
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.suite.ui.commons.TileContent.prototype.getSize = function() { return new sap.suite.ui.commons.InfoTileSize(); };

/**
 * 
 * Getter for property <code>unit</code>.
 * The percent sign, the currency symbol, or the unit of measure.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>unit</code>
 * @public
 * 
 */
sap.suite.ui.commons.TileContent.prototype.getUnit = function() { return ""; };

/**
 * 
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent
 * @return {sap.suite.ui.commons.TileContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TileContent.prototype.setContent = function(oContent) { return new sap.suite.ui.commons.TileContent(); };

/**
 * 
 * Setter for property <code>disabled</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bDisabled  new value for property <code>disabled</code>
 * @return {sap.suite.ui.commons.TileContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TileContent.prototype.setDisabled = function(bDisabled) { return new sap.suite.ui.commons.TileContent(); };

/**
 * 
 * Setter for property <code>footer</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFooter  new value for property <code>footer</code>
 * @return {sap.suite.ui.commons.TileContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TileContent.prototype.setFooter = function(sFooter) { return new sap.suite.ui.commons.TileContent(); };

/**
 * 
 * Setter for property <code>size</code>.
 * </p><p>
 * Default value is <code>"Auto"</code> 
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.TileContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TileContent.prototype.setSize = function(oSize) { return new sap.suite.ui.commons.TileContent(); };

/**
 * 
 * Setter for property <code>unit</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sUnit  new value for property <code>unit</code>
 * @return {sap.suite.ui.commons.TileContent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TileContent.prototype.setUnit = function(sUnit) { return new sap.suite.ui.commons.TileContent(); };


// ---- sap.suite.ui.commons.Timeline --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Timeline.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Timeline Control for sFin.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.Timeline = function(sId,mSettings) {};
/**
 * 
 * This event is getting triggered after selecting an item from filter list.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.suite.ui.commons.TimelineFilterListItem} oControlEvent.getParameters.selectedItem filterClose event returns selected key value from filterList
 * @public
 */
sap.suite.ui.commons.Timeline.prototype.filterSelectionChange = function(oControlEvent) { return null; };

/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.suite.ui.commons.TimelineItem}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.addContent = function(oContent) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Adds some filterList <code>oFilterList</code> 
 * to the aggregation named <code>filterList</code>.
 * @param {sap.suite.ui.commons.TimelineFilterListItem}
 *            oFilterList the filterList to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.addFilterList = function(oFilterList) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'filterSelectionChange' event of this <code>sap.suite.ui.commons.Timeline</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.Timeline</code>.<br/> itself. 
 * </p><p>
 * This event is getting triggered after selecting an item from filter list.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.Timeline</code>.<br/> itself.
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.attachFilterSelectionChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.destroyContent = function() { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Destroys all the filterList in the aggregation 
 * named <code>filterList</code>.
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.destroyFilterList = function() { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'filterSelectionChange' event of this <code>sap.suite.ui.commons.Timeline</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.detachFilterSelectionChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.Timeline with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.Timeline.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event filterSelectionChange to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'selectedItem' of type <code>sap.suite.ui.commons.TimelineFilterListItem</code> filterClose event returns selected key value from filterList</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.Timeline.prototype.fireFilterSelectionChange = function(mArguments) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Getter for property <code>alignment</code>.
 * Timeline item alignment.
 * </p><p>
 * Default value is <code>Right</code>
 * @return {sap.suite.ui.commons.TimelineAlignment} the value of property <code>alignment</code>
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getAlignment = function() { return new sap.suite.ui.commons.TimelineAlignment(); };

/**
 * 
 * Getter for property <code>axisOrientation</code>.
 * Timeline axis orientation.
 * </p><p>
 * Default value is <code>Vertical</code>
 * @return {sap.suite.ui.commons.TimelineAxisOrientation} the value of property <code>axisOrientation</code>
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getAxisOrientation = function() { return new sap.suite.ui.commons.TimelineAxisOrientation(); };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * List of Timeline Items.
 * @return {sap.suite.ui.commons.TimelineItem[]}
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Get the current selected filter key
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.Timeline.prototype.getCurrentFilter = function() { return ""; };

/**
 * 
 * Getter for property <code>data</code>.
 * Data for Timeline Control..
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>data</code>
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getData = function() { return new Object(); };

/**
 * 
 * Getter for property <code>enableAllInFilterItem</code>.
 * This flag enables to add 'All' in the begining of filter list
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableAllInFilterItem</code>
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getEnableAllInFilterItem = function() { return false; };

/**
 * 
 * Getter for property <code>enableBackendFilter</code>.
 * This flag enables to get data from backend instead of deriving filter values from front-end values(displayed list).
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>enableBackendFilter</code>
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getEnableBackendFilter = function() { return false; };

/**
 * 
 * Getter for property <code>enableBusyIndicator</code>.
 * When this property is set to "true", Timeline will display a busy indicator when data is being loaded.This BusyIndicator blocks the interaction with the items until data loading is finished.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableBusyIndicator</code>
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getEnableBusyIndicator = function() { return false; };

/**
 * 
 * Getter for aggregation <code>filterList</code>.<br/>
 * sap.suite.ui.commons/TimelineFilterListItem
 * @return {sap.suite.ui.commons.TimelineFilterListItem[]}
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getFilterList = function() { return new Array(); };

/**
 * 
 * Getter for property <code>growing</code>.
 * Sets the growing(paging) feature of control. This feature only works with model binding for aggregation "content".
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>growing</code>
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getGrowing = function() { return false; };

/**
 * 
 * Getter for property <code>growingThreshold</code>.
 * Number of items requested from the server. To activate this you should set "growing" property to "true".
 * </p><p>
 * Default value is <code>5</code>
 * @return {int} the value of property <code>growingThreshold</code>
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getGrowingThreshold = function() { return 0; };

/**
 * 
 * Getter for property <code>noDataText</code>.
 * This text is displayed when the control has no data.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>noDataText</code>
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getNoDataText = function() { return ""; };

/**
 * 
 * Getter for property <code>showHeaderBar</code>.
 * Show header tool bar
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showHeaderBar</code>
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getShowHeaderBar = function() { return false; };

/**
 * 
 * Getter for property <code>showIcons</code>.
 * Show icon on each Timeline item.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showIcons</code>
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getShowIcons = function() { return false; };

/**
 * 
 * Getter for property <code>sortOldestFirst</code>.
 * Whether the oldest item will be displayed first.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>sortOldestFirst</code>
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getSortOldestFirst = function() { return false; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Set Timeline control visibility
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Sets the width of the Timeline.
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.suite.ui.commons.TimelineItem</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.TimelineItem}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.suite.ui.commons.TimelineFilterListItem</code> in the aggregation named <code>filterList</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.TimelineFilterListItem}
 *            oFilterList the filterList whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.indexOfFilterList = function(oFilterList) { return 0; };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.suite.ui.commons.TimelineItem}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.insertContent = function(oContent,iIndex) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Inserts a filterList into the aggregation named <code>filterList</code>.
 * @param {sap.suite.ui.commons.TimelineFilterListItem}
 *          oFilterList the filterList to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the filterList should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the filterList is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the filterList is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.insertFilterList = function(oFilterList,iIndex) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.TimelineItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>filterList</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.TimelineFilterListItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.removeAllFilterList = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.suite.ui.commons.TimelineItem} vContent the content to remove or its index or id
 * @return {sap.suite.ui.commons.TimelineItem} the removed content or null
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.removeContent = function(vContent) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * 
 * Removes an filterList from the aggregation named <code>filterList</code>.
 * @param {int | string | sap.suite.ui.commons.TimelineFilterListItem} vFilterList the filterList to remove or its index or id
 * @return {sap.suite.ui.commons.TimelineFilterListItem} the removed filterList or null
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.removeFilterList = function(vFilterList) { return new sap.suite.ui.commons.TimelineFilterListItem(); };

/**
 * 
 * Setter for property <code>alignment</code>.
 * </p><p>
 * Default value is <code>Right</code> 
 * @param {sap.suite.ui.commons.TimelineAlignment} oAlignment  new value for property <code>alignment</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setAlignment = function(oAlignment) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Setter for property <code>axisOrientation</code>.
 * </p><p>
 * Default value is <code>Vertical</code> 
 * @param {sap.suite.ui.commons.TimelineAxisOrientation} oAxisOrientation  new value for property <code>axisOrientation</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setAxisOrientation = function(oAxisOrientation) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Set the current selected filter key
 * @param {string} sSelectedItemKey
 *         Returns the TinelineFilterListItem
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.Timeline.prototype.setCurrentFilter = function(sSelectedItemKey) { return null; };

/**
 * 
 * Setter for property <code>data</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oData  new value for property <code>data</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setData = function(oData) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Setter for property <code>enableAllInFilterItem</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnableAllInFilterItem  new value for property <code>enableAllInFilterItem</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setEnableAllInFilterItem = function(bEnableAllInFilterItem) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Setter for property <code>enableBackendFilter</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bEnableBackendFilter  new value for property <code>enableBackendFilter</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setEnableBackendFilter = function(bEnableBackendFilter) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Setter for property <code>enableBusyIndicator</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnableBusyIndicator  new value for property <code>enableBusyIndicator</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setEnableBusyIndicator = function(bEnableBusyIndicator) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Setter for property <code>growing</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bGrowing  new value for property <code>growing</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setGrowing = function(bGrowing) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Setter for property <code>growingThreshold</code>.
 * </p><p>
 * Default value is <code>5</code> 
 * @param {int} iGrowingThreshold  new value for property <code>growingThreshold</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setGrowingThreshold = function(iGrowingThreshold) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Setter for property <code>noDataText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sNoDataText  new value for property <code>noDataText</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setNoDataText = function(sNoDataText) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Setter for property <code>showHeaderBar</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowHeaderBar  new value for property <code>showHeaderBar</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setShowHeaderBar = function(bShowHeaderBar) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Setter for property <code>showIcons</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowIcons  new value for property <code>showIcons</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setShowIcons = function(bShowIcons) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Setter for property <code>sortOldestFirst</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bSortOldestFirst  new value for property <code>sortOldestFirst</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setSortOldestFirst = function(bSortOldestFirst) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setVisible = function(bVisible) { return new sap.suite.ui.commons.Timeline(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.Timeline} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setWidth = function(sWidth) { return new sap.suite.ui.commons.Timeline(); };


// ---- sap.suite.ui.commons.TimelineAlignment --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.TimelineAlignment.toString = function() { return ""; };

// ---- sap.suite.ui.commons.TimelineAxisOrientation --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.TimelineAxisOrientation.toString = function() { return ""; };

// ---- sap.suite.ui.commons.TimelineFilterListItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new TimelineFilterListItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getText text} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Provides Filter List Item for Timeline Control
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.TimelineFilterListItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.TimelineFilterListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.TimelineFilterListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>key</code>.
 * Can be used as input for subsequent actions.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>key</code>
 * @public
 * 
 */
sap.suite.ui.commons.TimelineFilterListItem.prototype.getKey = function() { return ""; };

/**
 * 
 * Getter for property <code>text</code>.
 * The text to be displayed for the item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.suite.ui.commons.TimelineFilterListItem.prototype.getText = function() { return ""; };

/**
 * 
 * Setter for property <code>key</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.suite.ui.commons.TimelineFilterListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineFilterListItem.prototype.setKey = function(sKey) { return new sap.suite.ui.commons.TimelineFilterListItem(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.suite.ui.commons.TimelineFilterListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineFilterListItem.prototype.setText = function(sText) { return new sap.suite.ui.commons.TimelineFilterListItem(); };


// ---- sap.suite.ui.commons.TimelineItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new TimelineItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
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
 * <li>{@link #getUserNameClickable userNameClickable} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getEmbeddedControl embeddedControl} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.TimelineItem#event:userNameClicked userNameClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * TimelineItem
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.TimelineItem = function(sId,mSettings) {};
/**
 * 
 * Fire when user name in the item header is clicked
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.TimelineItem.prototype.userNameClicked = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'userNameClicked' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself. 
 * </p><p>
 * Fire when user name in the item header is clicked
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.attachUserNameClicked = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * 
 * Destroys the embeddedControl in the aggregation 
 * named <code>embeddedControl</code>.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.destroyEmbeddedControl = function() { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'userNameClicked' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.detachUserNameClicked = function(fnFunction,oListener) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.TimelineItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.TimelineItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event userNameClicked to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.fireUserNameClicked = function(mArguments) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * 
 * Getter for property <code>dateTime</code>.
 * Datetime value of Timeline item
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>dateTime</code>
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getDateTime = function() { return null; };

/**
 * 
 * Getter for aggregation <code>embeddedControl</code>.<br/>
 * Embed other control in timeline item, such as a button or a check box, etc.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getEmbeddedControl = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>filterValue</code>.
 * Text for filter value
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>filterValue</code>
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getFilterValue = function() { return ""; };

/**
 * 
 * Getter for property <code>icon</code>.
 * Icon for this item
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getIcon = function() { return ""; };

/**
 * 
 * Getter for property <code>text</code>.
 * Text shown inside the item
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * Text shown in the title after user name
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>userName</code>.
 * User name shown in the title
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>userName</code>
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getUserName = function() { return ""; };

/**
 * 
 * Getter for property <code>userNameClickable</code>.
 * Make user name as a clickable to raise userNameClicked event
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>userNameClickable</code>
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getUserNameClickable = function() { return false; };

/**
 * 
 * Setter for property <code>dateTime</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {any} oDateTime  new value for property <code>dateTime</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setDateTime = function(oDateTime) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * 
 * Setter for the aggregated <code>embeddedControl</code>.
 * @param {sap.ui.core.Control} oEmbeddedControl
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setEmbeddedControl = function(oEmbeddedControl) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * 
 * Setter for property <code>filterValue</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFilterValue  new value for property <code>filterValue</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setFilterValue = function(sFilterValue) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setIcon = function(sIcon) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setText = function(sText) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * 
 * Setter for property <code>userName</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sUserName  new value for property <code>userName</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setUserName = function(sUserName) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * 
 * Setter for property <code>userNameClickable</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bUserNameClickable  new value for property <code>userNameClickable</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setUserNameClickable = function(bUserNameClickable) { return new sap.suite.ui.commons.TimelineItem(); };


// ---- sap.suite.ui.commons.TimelineItemPosition --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.TimelineItemPosition.toString = function() { return ""; };

// ---- sap.suite.ui.commons.UnifiedThingGroup --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new UnifiedThingGroup.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getDesign design} : sap.suite.ui.commons.ThingGroupDesign (default: sap.suite.ui.commons.ThingGroupDesign.ZeroIndent)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control is used in UnifiedThingInspector to display the facet header information.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.UnifiedThingGroup = function(sId,mSettings) {};
/**
 * 
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.UnifiedThingGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.destroyContent = function() { return new sap.suite.ui.commons.UnifiedThingGroup(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.UnifiedThingGroup with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The content of the group.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>description</code>.
 * The description of the group.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>description</code>
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.getDescription = function() { return ""; };

/**
 * 
 * Getter for property <code>design</code>.
 * Defines how the control is rendered.
 * </p><p>
 * Default value is <code>ZeroIndent</code>
 * @return {sap.suite.ui.commons.ThingGroupDesign} the value of property <code>design</code>
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.getDesign = function() { return new sap.suite.ui.commons.ThingGroupDesign(); };

/**
 * 
 * Getter for property <code>title</code>.
 * The title of the group.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.getTitle = function() { return ""; };

/**
 * 
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent
 * @return {sap.suite.ui.commons.UnifiedThingGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.setContent = function(oContent) { return new sap.suite.ui.commons.UnifiedThingGroup(); };

/**
 * 
 * Setter for property <code>description</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.suite.ui.commons.UnifiedThingGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.setDescription = function(sDescription) { return new sap.suite.ui.commons.UnifiedThingGroup(); };

/**
 * 
 * Setter for property <code>design</code>.
 * </p><p>
 * Default value is <code>ZeroIndent</code> 
 * @param {sap.suite.ui.commons.ThingGroupDesign} oDesign  new value for property <code>design</code>
 * @return {sap.suite.ui.commons.UnifiedThingGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.setDesign = function(oDesign) { return new sap.suite.ui.commons.UnifiedThingGroup(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.UnifiedThingGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.UnifiedThingGroup(); };


// ---- sap.suite.ui.commons.UnifiedThingInspector --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new UnifiedThingInspector.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getTransactionsVisible transactionsVisible} : boolean (default: false)</li>
 * <li>{@link #getActionsVisible actionsVisible} : boolean (default: false)</li>
 * <li>{@link #getDestroyPageOnBack destroyPageOnBack} : boolean (default: true)</li>
 * <li>{@link #getConfigurationVisible configurationVisible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFacets facets} : sap.suite.ui.commons.FacetOverview[]</li>
 * <li>{@link #getFacetContent facetContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getKpis kpis} : sap.suite.ui.commons.KpiTile[]</li>
 * <li>{@link #getTransactions transactions} : sap.ui.core.Control[]</li>
 * <li>{@link #getActions actions} : sap.m.Button[]</li>
 * <li>{@link #getPages pages} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.UnifiedThingInspector#event:backAction backAction} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.UnifiedThingInspector#event:transactionsButtonPress transactionsButtonPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.UnifiedThingInspector#event:actionsButtonPress actionsButtonPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.UnifiedThingInspector#event:configurationButtonPress configurationButtonPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.UnifiedThingInspector#event:navigate navigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.UnifiedThingInspector#event:afterNavigate afterNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control provides an ability to display a thing (for example, object factsheet) on the desktop, tablet, and phone devices in a Fiori style.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.UnifiedThingInspector = function(sId,mSettings) {};
/**
 * 
 * The event is fired when the user chooses the Actions button.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.caller The object that initiated the event.
 * @public
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.actionsButtonPress = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when navigation between two pages has completed. In case of animated transitions this event is fired with some delay after the "navigate" event.
 * This event is propogated from the inner NavContainer. The event can also return internal Master and Detail pages.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page that had been shown before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page that had been shown before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page that is now shown after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page that is now shown after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page that has been navigated to) had not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether was a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this was a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are: "to", "back", and "backToTop".
 * @public
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.afterNavigate = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when the user chooses the Back button.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.backAction = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when the user chooses the Configuration button.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.caller The object that initiated the event.
 * @public
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.configurationButtonPress = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when navigation between two pages has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * This event is propogated from the inner NavContainer. The event can also return internal Master and Detail pages.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page that was shown before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page that was shown before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page that will be shown after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page that will be shown after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page that is currently navigated to) has not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether this is a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this is a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this is a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are: "to", "back", and "backToTop".
 * @public
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.navigate = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when the user chooses the Transactions button.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.caller The object that initiated the event.
 * @public
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.transactionsButtonPress = function(oControlEvent) { return null; };

/**
 * 
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 * @param {sap.m.Button}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.addAction = function(oAction) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Adds some facet <code>oFacet</code> 
 * to the aggregation named <code>facets</code>.
 * @param {sap.suite.ui.commons.FacetOverview}
 *            oFacet the facet to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.addFacet = function(oFacet) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Adds some facetContent <code>oFacetContent</code> 
 * to the aggregation named <code>facetContent</code>.
 * @param {sap.ui.core.Control}
 *            oFacetContent the facetContent to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.addFacetContent = function(oFacetContent) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Adds some kpi <code>oKpi</code> 
 * to the aggregation named <code>kpis</code>.
 * @param {sap.suite.ui.commons.KpiTile}
 *            oKpi the kpi to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.addKpi = function(oKpi) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Adds some page <code>oPage</code> 
 * to the aggregation named <code>pages</code>.
 * @param {sap.ui.core.Control}
 *            oPage the page to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.addPage = function(oPage) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Adds some transaction <code>oTransaction</code> 
 * to the aggregation named <code>transactions</code>.
 * @param {sap.ui.core.Control}
 *            oTransaction the transaction to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.addTransaction = function(oTransaction) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'actionsButtonPress' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses the Actions button.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.attachActionsButtonPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterNavigate' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself. 
 * </p><p>
 * The event is fired when navigation between two pages has completed. In case of animated transitions this event is fired with some delay after the "navigate" event.
 * This event is propogated from the inner NavContainer. The event can also return internal Master and Detail pages.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.attachAfterNavigate = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'backAction' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses the Back button.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.attachBackAction = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'configurationButtonPress' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses the Configuration button.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.attachConfigurationButtonPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'navigate' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself. 
 * </p><p>
 * The event is fired when navigation between two pages has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * This event is propogated from the inner NavContainer. The event can also return internal Master and Detail pages.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.attachNavigate = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'transactionsButtonPress' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user chooses the Transactions button.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.attachTransactionsButtonPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyActions = function() { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Destroys all the facetContent in the aggregation 
 * named <code>facetContent</code>.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyFacetContent = function() { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Destroys all the facets in the aggregation 
 * named <code>facets</code>.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyFacets = function() { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Destroys all the kpis in the aggregation 
 * named <code>kpis</code>.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyKpis = function() { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Destroys all the pages in the aggregation 
 * named <code>pages</code>.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyPages = function() { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Destroys all the transactions in the aggregation 
 * named <code>transactions</code>.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyTransactions = function() { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'actionsButtonPress' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.detachActionsButtonPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterNavigate' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.detachAfterNavigate = function(fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'backAction' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.detachBackAction = function(fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'configurationButtonPress' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.detachConfigurationButtonPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'navigate' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.detachNavigate = function(fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'transactionsButtonPress' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.detachTransactionsButtonPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.UnifiedThingInspector with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event actionsButtonPress to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'caller' of type <code>object</code> The object that initiated the event.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.fireActionsButtonPress = function(mArguments) { return false; };

/**
 * 
 * Fire event afterNavigate to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page that had been shown before navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page that had been shown before navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page that is now shown after navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page that is now shown after navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page that has been navigated to) had not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether was a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this was a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are: "to", "back", and "backToTop".</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.fireAfterNavigate = function(mArguments) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Fire event backAction to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.fireBackAction = function(mArguments) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Fire event configurationButtonPress to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'caller' of type <code>object</code> The object that initiated the event.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.fireConfigurationButtonPress = function(mArguments) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Fire event navigate to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page that was shown before the current navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page that was shown before the current navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page that will be shown after the current navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page that will be shown after the current navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page that is currently navigated to) has not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether this is a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this is a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this is a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are: "to", "back", and "backToTop".</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.fireNavigate = function(mArguments) { return false; };

/**
 * 
 * Fire event transactionsButtonPress to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'caller' of type <code>object</code> The object that initiated the event.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.fireTransactionsButtonPress = function(mArguments) { return false; };

/**
 * 
 * Getter for aggregation <code>actions</code>.<br/>
 * Action sheet controls.
 * @return {sap.m.Button[]}
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getActions = function() { return new Array(); };

/**
 * 
 * Getter for property <code>actionsVisible</code>.
 * If set to true, the Actions button appears.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>actionsVisible</code>
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getActionsVisible = function() { return false; };

/**
 * 
 * Getter for property <code>configurationVisible</code>.
 * If set to true, the Configuration button appears.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>configurationVisible</code>
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getConfigurationVisible = function() { return false; };

/**
 * 
 * Getter for property <code>description</code>.
 * The description of the thing.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>description</code>
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getDescription = function() { return ""; };

/**
 * 
 * Getter for property <code>destroyPageOnBack</code>.
 * If set to true, destroys a page when the user chooses the Back button to leave this page.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>destroyPageOnBack</code>
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getDestroyPageOnBack = function() { return false; };

/**
 * 
 * Getter for aggregation <code>facetContent</code>.<br/>
 * The content that appears on the detail page of the UnifiedThingInspector.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getFacetContent = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>facets</code>.<br/>
 * The list of the sap.suite.ui.commons.FacetOverview objects.
 * @return {sap.suite.ui.commons.FacetOverview[]}
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getFacets = function() { return new Array(); };

/**
 * 
 * Getter for property <code>height</code>.
 * The height of the control.
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * The icon to be displayed as a graphical element within the header. This can be an image or an icon from the icon font.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for aggregation <code>kpis</code>.<br/>
 * A set of the KPI tiles to be shown in the header. Currently only 3 tiles from the list are displayed on the desktop and tablet. On the phone, all tiles are displayed in a swipeable container.
 * @return {sap.suite.ui.commons.KpiTile[]}
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getKpis = function() { return new Array(); };

/**
 * 
 * Getter for property <code>name</code>.
 * The name of the thing.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getName = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>pages</code>.<br/>
 * Contains pages except for Master and Detail.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getPages = function() { return new Array(); };

/**
 * 
 * Returns a currently selected facet.
 * @type sap.suite.ui.commons.FacetOverview
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getSelectedFacet = function() { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * 
 * Getter for property <code>title</code>.
 * The title of the thing.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>transactions</code>.<br/>
 * Menu items for transaction popup.
 * @return {sap.ui.core.Control[]}
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getTransactions = function() { return new Array(); };

/**
 * 
 * Getter for property <code>transactionsVisible</code>.
 * If set to true, the Transaction button appears.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>transactionsVisible</code>
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getTransactionsVisible = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.m.Button</code> in the aggregation named <code>actions</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Button}
 *            oAction the action whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.suite.ui.commons.FacetOverview</code> in the aggregation named <code>facets</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.FacetOverview}
 *            oFacet the facet whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfFacet = function(oFacet) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>facetContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oFacetContent the facetContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfFacetContent = function(oFacetContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.suite.ui.commons.KpiTile</code> in the aggregation named <code>kpis</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.KpiTile}
 *            oKpi the kpi whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfKpi = function(oKpi) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>pages</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oPage the page whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfPage = function(oPage) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>transactions</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oTransaction the transaction whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfTransaction = function(oTransaction) { return 0; };

/**
 * 
 * Inserts a action into the aggregation named <code>actions</code>.
 * @param {sap.m.Button}
 *          oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the action should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the action is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.insertAction = function(oAction,iIndex) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Inserts a facet into the aggregation named <code>facets</code>.
 * @param {sap.suite.ui.commons.FacetOverview}
 *          oFacet the facet to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facet should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facet is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facet is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.insertFacet = function(oFacet,iIndex) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Inserts a facetContent into the aggregation named <code>facetContent</code>.
 * @param {sap.ui.core.Control}
 *          oFacetContent the facetContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facetContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facetContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facetContent is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.insertFacetContent = function(oFacetContent,iIndex) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Inserts a kpi into the aggregation named <code>kpis</code>.
 * @param {sap.suite.ui.commons.KpiTile}
 *          oKpi the kpi to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the kpi should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the kpi is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the kpi is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.insertKpi = function(oKpi,iIndex) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Inserts a page into the aggregation named <code>pages</code>.
 * @param {sap.ui.core.Control}
 *          oPage the page to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the page should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the page is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the page is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.insertPage = function(oPage,iIndex) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Inserts a transaction into the aggregation named <code>transactions</code>.
 * @param {sap.ui.core.Control}
 *          oTransaction the transaction to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the transaction should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the transaction is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the transaction is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.insertTransaction = function(oTransaction,iIndex) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * The control that shows the Detail page that is already set. This method can be used instead of navigateToDetailWithContent when the content is already set by addFacetContent.
 * @type sap.suite.ui.commons.UnifiedThingInspector
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.navigateToDetail = function() { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Navigates to the Detail page.
 * @param {object} oAFacetData
 *         Contains content for the detail page to which the control must navigate.
 * @type sap.suite.ui.commons.UnifiedThingInspector
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.navigateToDetailWithContent = function(oAFacetData) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * The method that adds any sap.m.Page to the aggregated NavContainer.
 * @param {sap.m.Page} oOPage
 *         The sap.m.Page instance that is added to NavContainer of UnifiedThingInspector.
 * @param {boolean} bAddDefaultFooter
 *         If set to true, the default page footer is added from UnifiedThingInspector.
 * @type sap.suite.ui.commons.UnifiedThingInspector
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.navigateToPage = function(oOPage,bAddDefaultFooter) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * The method that navigates to sap.m.Page.
 * @param {string} sSId
 *         The ID of sap.m.Page instance where the user navigates to.
 * @type sap.suite.ui.commons.UnifiedThingInspector
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.navigateToPageId = function(sSId) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Removes an action from the aggregation named <code>actions</code>.
 * @param {int | string | sap.m.Button} vAction the action to remove or its index or id
 * @return {sap.m.Button} the removed action or null
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAction = function(vAction) { return new sap.m.Button(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.Button[]} an array of the removed elements (might be empty)
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllActions = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>facetContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllFacetContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>facets</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.FacetOverview[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllFacets = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>kpis</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.KpiTile[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllKpis = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>pages</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllPages = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>transactions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllTransactions = function() { return new Array(); };

/**
 * 
 * Removes an facetContent from the aggregation named <code>facetContent</code>.
 * @param {int | string | sap.ui.core.Control} vFacetContent the facetContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed facetContent or null
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeFacetContent = function(vFacetContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an kpi from the aggregation named <code>kpis</code>.
 * @param {int | string | sap.suite.ui.commons.KpiTile} vKpi the kpi to remove or its index or id
 * @return {sap.suite.ui.commons.KpiTile} the removed kpi or null
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeKpi = function(vKpi) { return new sap.suite.ui.commons.KpiTile(); };

/**
 * 
 * Removes an page from the aggregation named <code>pages</code>.
 * @param {int | string | sap.ui.core.Control} vPage the page to remove or its index or id
 * @return {sap.ui.core.Control} the removed page or null
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removePage = function(vPage) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an transaction from the aggregation named <code>transactions</code>.
 * @param {int | string | sap.ui.core.Control} vTransaction the transaction to remove or its index or id
 * @return {sap.ui.core.Control} the removed transaction or null
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeTransaction = function(vTransaction) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>actionsVisible</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bActionsVisible  new value for property <code>actionsVisible</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setActionsVisible = function(bActionsVisible) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Setter for property <code>configurationVisible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bConfigurationVisible  new value for property <code>configurationVisible</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setConfigurationVisible = function(bConfigurationVisible) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Setter for property <code>description</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setDescription = function(sDescription) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Setter for property <code>destroyPageOnBack</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bDestroyPageOnBack  new value for property <code>destroyPageOnBack</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setDestroyPageOnBack = function(bDestroyPageOnBack) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setHeight = function(sHeight) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setIcon = function(sIcon) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Setter for property <code>name</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setName = function(sName) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * 
 * Setter for property <code>transactionsVisible</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bTransactionsVisible  new value for property <code>transactionsVisible</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setTransactionsVisible = function(bTransactionsVisible) { return new sap.suite.ui.commons.UnifiedThingInspector(); };


// ---- sap.suite.ui.commons.util --------------------------------------------------------------------------


// ---- sap.suite.ui.commons.util.DateUtils --------------------------------------------------------------------------

/**
 * 
 * Constructor for DateUtils - must not be used. All functions are static, so it is illegal to call this constructor.
 * @class DateUtils is a static class for Date utility functions.
 * @public
 */
sap.suite.ui.commons.util.DateUtils = function() {};
/**
 * 
 * Tests to see if two dates have the same year, month, and day. Time is not included in the equality. Invalid dates, such as null or undefined, are never equal.
 * @param {Date}
 *                dDate1 First date to compare.
 * @param {Date}
 *                dDate2 Second date to compare.
 * @return {boolean} true if two dates have same year, month, and day, otherwise false
 * @public
 */
sap.suite.ui.commons.util.DateUtils.prototype.dateDaysEqual = function(dDate1,dDate2) { return false; };

/**
 * 
 * Tests to see if two dates have the same year and month. Time is not included in the equality. Invalid dates, such as null or undefined, are never equal.
 * @param {Date}
 *                dDate1 First date to compare.
 * @param {Date}
 *                dDate2 Second date to compare.
 * @return {boolean} true if two dates have same year and month, otherwise false
 * @public
 */
sap.suite.ui.commons.util.DateUtils.prototype.dateMonthsEqual = function(dDate1,dDate2) { return false; };

/**
 * 
 * Returns the date that is iIndex days from the dStartDate
 * @param {Date}
 *                dStartDate Start date.
 * @param {int}
 *                iIndex how many days to move forward or backward from dStartDate.
 * @return {Date} date that is iIndex days from the dStartDate if dStartDate and iIndex are valid, otherwise null.
 * @public
 */
sap.suite.ui.commons.util.DateUtils.prototype.incrementDateByIndex = function(dStartDate,iIndex) { return null; };

/**
 * 
 * Returns the date that is iIndex months from the dStartDate
 * @param {Date}
 *                dStartDate Start date.
 * @param {int}
 *                iIndex how many months to move forward or backward from dStartDate.
 * @return {Date} date that is iIndex months from the dStartDate if dStartDate and iIndex are valid, otherwise null.
 * @public
 */
sap.suite.ui.commons.util.DateUtils.prototype.incrementMonthByIndex = function(dStartDate,iIndex) { return null; };

/**
 * 
 * Test if the given date is a valid date object. If the date is invalid an error message is logged.
 * @param {Date}
 *                The date to be validated.
 * @public
 */
sap.suite.ui.commons.util.DateUtils.prototype.isValidDate = function(The) { return null; };

/**
 * 
 * Returns the number of days two dates are apart
 * @param {Date}
 *                dStartDate Start date.
 * @param {Date}
 *                dEndDate End date.
 * @return {Number} number of days two dates are apart
 * @public
 */
sap.suite.ui.commons.util.DateUtils.prototype.numberOfDaysApart = function(dStartDate,dEndDate) { return null; };

/**
 * 
 * Returns the number of months two dates are apart
 * @param {Date}
 *                dStartDate Start date.
 * @param {Date}
 *                dEndDate End date.
 * @return {Number} number of months two dates are apart
 * @public
 */
sap.suite.ui.commons.util.DateUtils.prototype.numberOfMonthsApart = function(dStartDate,dEndDate) { return null; };

/**
 * 
 * Adjust the given date to the end of the day, with time set to 23 hours, 59 minutes, and 59 seconds.
 * @param {Date}
 *                The date to be adjusted.
 * @public
 */
sap.suite.ui.commons.util.DateUtils.prototype.resetDateToEndOfDay = function(The) { return null; };

/**
 * 
 * Adjust the given date to the last day of the month, end of day.
 * @param {Date}
 *                The date to be adjusted.
 * @public
 */
sap.suite.ui.commons.util.DateUtils.prototype.resetDateToEndOfMonth = function(The) { return null; };

/**
 * 
 * Adjust the given date to <code>oSettings.iDuration</code> days after the day specified by <code>oSettings.iFirstDayOfWeek</code>. See <code>resetDateToStartOfWeek()</code>
 * for a description of how the date is adjusted to the first day of week.
 * @param {Object}
 *                oSettings
 * @param [oSettings.iDuration=7]
 *                The number of days in the week with a minimum of 1 and maximum of 7.
 * @param [oSettings.iFirstDayOfWeek=1]
 *                The day considered to be the first day of the week. Valid values are 0-6, with 0=Sunday and 6=Saturday.
 * @public
 */
sap.suite.ui.commons.util.DateUtils.prototype.resetDateToEndOfWeek = function(oSettings) { return null; };

/**
 * 
 * Adjust the given date to the last day of the year, end of day.
 * @param {Date}
 *                The date to be adjusted.
 * @public
 */
sap.suite.ui.commons.util.DateUtils.prototype.resetDateToEndOfYear = function(The) { return null; };

/**
 * 
 * Adjust the given date to the start of the day, with time set to 0 hours, 0 minutes, and 0 seconds.
 * @param {Date}
 *                The date to be adjusted.
 * @public
 */
sap.suite.ui.commons.util.DateUtils.prototype.resetDateToStartOfDay = function(The) { return null; };

/**
 * 
 * Adjust the given date to the first day of the month, start of day.
 * @param {Date}
 *                The date to be adjusted.
 * @public
 */
sap.suite.ui.commons.util.DateUtils.prototype.resetDateToStartOfMonth = function(The) { return null; };

/**
 * 
 * Adjust the given date to the day specified by <code>iFirstDayOfWeek</code>. The date will be set to the previous first day of the week. For example, if the date is Tuesday,
 * February 19 and the value of <code>iFirstDayOfWeek</code> is 4 (Thursday), then the date will be adjusted to the previous Thursday, which is February 14.
 * @param {Date}
 *                The date to be adjusted.
 * @param [iFirstDayOfWeek=1]
 *                The day considered to be the first day of the week. Valid values are 0-6, with 0=Sunday and 6=Saturday.
 * @public
 */
sap.suite.ui.commons.util.DateUtils.prototype.resetDateToStartOfWeek = function(The,iFirstDayOfWeek) { return null; };

/**
 * 
 * Adjust the given date to the first day of the year, start of day.
 * @param {Date}
 *                The date to be adjusted.
 * @public
 */
sap.suite.ui.commons.util.DateUtils.prototype.resetDateToStartOfYear = function(The) { return null; };


// ---- sap.suite.ui.commons.ValueStatus --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ValueStatus.toString = function() { return ""; };

// ---- sap.suite.ui.commons.VerticalNavigationBar --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new VerticalNavigationBar.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.NavigationBar#constructor sap.ui.ux3.NavigationBar}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control extends the sap.ui.ux3.NavigationBar and allows you to display navigation items vertically. The navigation list can contain sap.ui.ux3.NavigationItem or sap.suite.ui.commons.CountingNavigationItem controls.
 * @extends sap.ui.ux3.NavigationBar
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.VerticalNavigationBar = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.VerticalNavigationBar with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.VerticalNavigationBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.suite.ui.commons.ViewRepeater --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ViewRepeater.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getItemMinWidth itemMinWidth} : int</li>
 * <li>{@link #getResponsive responsive} : boolean (default: false)</li>
 * <li>{@link #getDefaultViewIndex defaultViewIndex} : int (default: 0)</li>
 * <li>{@link #getShowSearchField showSearchField} : boolean (default: true)</li>
 * <li>{@link #getShowViews showViews} : boolean (default: true)</li>
 * <li>{@link #getExternal external} : boolean (default: false)</li>
 * <li>{@link #getItemHeight itemHeight} : int</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getViews views} : sap.suite.ui.commons.RepeaterViewConfiguration[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getExternalRepresentation externalRepresentation} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.ViewRepeater#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.ViewRepeater#event:changeView changeView} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.commons.RowRepeater#constructor sap.ui.commons.RowRepeater}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This control extends the sap.ui.commons.RowRepeater control providing an ability to change data representation by switching between a number of views. The data can be displayed not only in rows but also in tiles that are adjusted to fill the entire horizontal space in a row.
 * @extends sap.ui.commons.RowRepeater
 * @version 1.24.2
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ViewRepeater = function(sId,mSettings) {};
/**
 * 
 * This event is fired when a user switches between views.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.oldViewIndex Contains an index of the previous view in the Views aggregation.
 * @param {int} oControlEvent.getParameters.newViewIndex Contains an index of the new view in the Views aggregation.
 * @param {string} oControlEvent.getParameters.filterId Contains an ID of the filter in the Filters aggregation.
 * @param {string} oControlEvent.getParameters.sorterId Contains an ID of the sorter in the Sorters aggregation.
 * @param {int} oControlEvent.getParameters.page Contains a page number.
 * @public
 */
sap.suite.ui.commons.ViewRepeater.prototype.changeView = function(oControlEvent) { return null; };

/**
 * 
 * This event is fired when the user performs a search.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.query The search query.
 * @public
 */
sap.suite.ui.commons.ViewRepeater.prototype.search = function(oControlEvent) { return null; };

/**
 * 
 * Adds some view <code>oView</code> 
 * to the aggregation named <code>views</code>.
 * @param {sap.suite.ui.commons.RepeaterViewConfiguration}
 *            oView the view to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.addView = function(oView) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'changeView' event of this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/> itself. 
 * </p><p>
 * This event is fired when a user switches between views.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/> itself.
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.attachChangeView = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/> itself. 
 * </p><p>
 * This event is fired when the user performs a search.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/> itself.
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Destroys all the views in the aggregation 
 * named <code>views</code>.
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.destroyViews = function() { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'changeView' event of this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.detachChangeView = function(fnFunction,oListener) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.detachSearch = function(fnFunction,oListener) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Creates a new subclass of class sap.suite.ui.commons.ViewRepeater with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ViewRepeater.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event changeView to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'oldViewIndex' of type <code>int</code> Contains an index of the previous view in the Views aggregation.</li>
 * <li>'newViewIndex' of type <code>int</code> Contains an index of the new view in the Views aggregation.</li>
 * <li>'filterId' of type <code>string</code> Contains an ID of the filter in the Filters aggregation.</li>
 * <li>'sorterId' of type <code>string</code> Contains an ID of the sorter in the Sorters aggregation.</li>
 * <li>'page' of type <code>int</code> Contains a page number.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.fireChangeView = function(mArguments) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Fire event search to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The search query.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.fireSearch = function(mArguments) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Getter for property <code>defaultViewIndex</code>.
 * The index of the default view starting from 0. The view is selected on the initial rendering of the control. If the index is greater than the total quantity of the views, the last view is selected.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>defaultViewIndex</code>
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getDefaultViewIndex = function() { return 0; };

/**
 * 
 * Getter for property <code>external</code>.
 * Indicates if the external representation of the current view is rendered.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>external</code>
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getExternal = function() { return false; };

/**
 * 
 * The control to be rendered instead of the repeater's own content.
 * @return {string} Id of the element which is the current target of the <code>externalRepresentation</code> association, or null
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getExternalRepresentation = function() { return ""; };

/**
 * 
 * Getter for property <code>height</code>.
 * The height of the control. Only applicable if the responsive property is set to true.
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>itemHeight</code>.
 * The height of the tile in the current view in pixels. Only applicable if the responsive property is set to true. This value is used for calculating the number of tile rows.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>itemHeight</code>
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getItemHeight = function() { return 0; };

/**
 * 
 * Getter for property <code>itemMinWidth</code>.
 * The minimal width of the tile for the current view. Only applicable if "responsive" property is set to true.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>itemMinWidth</code>
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getItemMinWidth = function() { return 0; };

/**
 * 
 * Getter for property <code>responsive</code>.
 * This parameter indicates whether the content is shown in rows or tiles. If false, the content is shown in rows just like in core sap.ui.commons.RowRepeater. If true, the content is shown in tiles (similar to sap.ui.ux3.DataSet control) that have minimal width defined by the "itemMinWidth" property. The number of columns depends on the parent control's width. If you resize the control, the number of columns may change respectively so that the content tiles can fill the entire space of a row.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>responsive</code>
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getResponsive = function() { return false; };

/**
 * 
 * Getter for property <code>showSearchField</code>.
 * Indicates if the search field panel is shown.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showSearchField</code>
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getShowSearchField = function() { return false; };

/**
 * 
 * Getter for property <code>showViews</code>.
 * Indicates if the view selector panel is shown.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showViews</code>
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getShowViews = function() { return false; };

/**
 * 
 * Getter for aggregation <code>views</code>.<br/>
 * The list of views for the data representation.
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration[]}
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getViews = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.suite.ui.commons.RepeaterViewConfiguration</code> in the aggregation named <code>views</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.RepeaterViewConfiguration}
 *            oView the view whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.indexOfView = function(oView) { return 0; };

/**
 * 
 * Inserts a view into the aggregation named <code>views</code>.
 * @param {sap.suite.ui.commons.RepeaterViewConfiguration}
 *          oView the view to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the view should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the view is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the view is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.insertView = function(oView,iIndex) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>views</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.removeAllViews = function() { return new Array(); };

/**
 * 
 * Removes an view from the aggregation named <code>views</code>.
 * @param {int | string | sap.suite.ui.commons.RepeaterViewConfiguration} vView the view to remove or its index or id
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} the removed view or null
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.removeView = function(vView) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * 
 * Setter for property <code>defaultViewIndex</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iDefaultViewIndex  new value for property <code>defaultViewIndex</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setDefaultViewIndex = function(iDefaultViewIndex) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Setter for property <code>external</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bExternal  new value for property <code>external</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setExternal = function(bExternal) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * The control to be rendered instead of the repeater's own content.
 * @param {string | sap.ui.core.Control} vExternalRepresentation 
 *    Id of an element which becomes the new target of this <code>externalRepresentation</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setExternalRepresentation = function(vExternalRepresentation) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setHeight = function(sHeight) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Setter for property <code>itemHeight</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iItemHeight  new value for property <code>itemHeight</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setItemHeight = function(iItemHeight) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Setter for property <code>itemMinWidth</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iItemMinWidth  new value for property <code>itemMinWidth</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setItemMinWidth = function(iItemMinWidth) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Setter for property <code>responsive</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bResponsive  new value for property <code>responsive</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setResponsive = function(bResponsive) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Setter for property <code>showSearchField</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowSearchField  new value for property <code>showSearchField</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setShowSearchField = function(bShowSearchField) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * 
 * Setter for property <code>showViews</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowViews  new value for property <code>showViews</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setShowViews = function(bShowViews) { return new sap.suite.ui.commons.ViewRepeater(); };


// ---- String --------------------------------------------------------------------------

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.suite.ui.commons.BulletChartMode --------------------------------------------------------------------------

/**
 * 
 * Displays the Actual value.
 * @public
 * @memberOf sap.suite.ui.commons.BulletChartMode
 */
sap.suite.ui.commons.BulletChartMode.Actual = null;

/**
 * 
 * Displays delta between the Actual and Threshold values.
 * @public
 * @memberOf sap.suite.ui.commons.BulletChartMode
 */
sap.suite.ui.commons.BulletChartMode.Delta = null;


// ---- sap.suite.ui.commons.CommonBackground --------------------------------------------------------------------------

/**
 * 
 * Dark background color.
 * @public
 * @memberOf sap.suite.ui.commons.CommonBackground
 */
sap.suite.ui.commons.CommonBackground.Dark = null;

/**
 * 
 * The darkest background color.
 * @public
 * @memberOf sap.suite.ui.commons.CommonBackground
 */
sap.suite.ui.commons.CommonBackground.Darkest = null;

/**
 * 
 * Extra dark background color.
 * @public
 * @memberOf sap.suite.ui.commons.CommonBackground
 */
sap.suite.ui.commons.CommonBackground.ExtraDark = null;

/**
 * 
 * Extra light background color.
 * @public
 * @memberOf sap.suite.ui.commons.CommonBackground
 */
sap.suite.ui.commons.CommonBackground.ExtraLight = null;

/**
 * 
 * Light background color.
 * @public
 * @memberOf sap.suite.ui.commons.CommonBackground
 */
sap.suite.ui.commons.CommonBackground.Light = null;

/**
 * 
 * The lightest background color.
 * @public
 * @memberOf sap.suite.ui.commons.CommonBackground
 */
sap.suite.ui.commons.CommonBackground.Lightest = null;

/**
 * 
 * Medium background color.
 * @public
 * @memberOf sap.suite.ui.commons.CommonBackground
 */
sap.suite.ui.commons.CommonBackground.Medium = null;

/**
 * 
 * Medium light background color.
 * @public
 * @memberOf sap.suite.ui.commons.CommonBackground
 */
sap.suite.ui.commons.CommonBackground.MediumLight = null;


// ---- sap.suite.ui.commons.DeviationIndicator --------------------------------------------------------------------------

/**
 * 
 * The actual value is less than the target value.
 * @public
 * @memberOf sap.suite.ui.commons.DeviationIndicator
 */
sap.suite.ui.commons.DeviationIndicator.Down = null;

/**
 * 
 * No value.
 * @public
 * @memberOf sap.suite.ui.commons.DeviationIndicator
 */
sap.suite.ui.commons.DeviationIndicator.None = null;

/**
 * 
 * The actual value is more than the target value.
 * @public
 * @memberOf sap.suite.ui.commons.DeviationIndicator
 */
sap.suite.ui.commons.DeviationIndicator.Up = null;


// ---- sap.suite.ui.commons.FacetOverviewHeight --------------------------------------------------------------------------

/**
 * 
 * Content based height
 * @public
 * @memberOf sap.suite.ui.commons.FacetOverviewHeight
 */
sap.suite.ui.commons.FacetOverviewHeight.Auto = null;

/**
 * 
 * Large height
 * @public
 * @memberOf sap.suite.ui.commons.FacetOverviewHeight
 */
sap.suite.ui.commons.FacetOverviewHeight.L = null;

/**
 * 
 * Medium height
 * @public
 * @memberOf sap.suite.ui.commons.FacetOverviewHeight
 */
sap.suite.ui.commons.FacetOverviewHeight.M = null;

/**
 * 
 * No value. The height of the control is defined by depricated height property.
 * @public
 * @memberOf sap.suite.ui.commons.FacetOverviewHeight
 */
sap.suite.ui.commons.FacetOverviewHeight.None = null;

/**
 * 
 * Small height
 * @public
 * @memberOf sap.suite.ui.commons.FacetOverviewHeight
 */
sap.suite.ui.commons.FacetOverviewHeight.S = null;

/**
 * 
 * Extra Large height
 * @public
 * @memberOf sap.suite.ui.commons.FacetOverviewHeight
 */
sap.suite.ui.commons.FacetOverviewHeight.XL = null;

/**
 * 
 * Extra small height
 * @public
 * @memberOf sap.suite.ui.commons.FacetOverviewHeight
 */
sap.suite.ui.commons.FacetOverviewHeight.XS = null;

/**
 * 
 * Extra extra large height
 * @public
 * @memberOf sap.suite.ui.commons.FacetOverviewHeight
 */
sap.suite.ui.commons.FacetOverviewHeight.XXL = null;


// ---- sap.suite.ui.commons.FrameType --------------------------------------------------------------------------

/**
 * 
 * The 1x1 frame type.
 * @public
 * @memberOf sap.suite.ui.commons.FrameType
 */
sap.suite.ui.commons.FrameType.OneByOne = null;

/**
 * 
 * The 2x1 frame type.
 * @public
 * @memberOf sap.suite.ui.commons.FrameType
 */
sap.suite.ui.commons.FrameType.TwoByOne = null;

/**
 * 
 * The 2/3 frame type.
 * @public
 * @memberOf sap.suite.ui.commons.FrameType
 */
sap.suite.ui.commons.FrameType.TwoThirds = null;


// ---- sap.suite.ui.commons.InfoTileSize --------------------------------------------------------------------------

/**
 * 
 * The size of the tile depends on the device it is running on. It is large on desktop, medium on tablet and small on phone.
 * @public
 * @memberOf sap.suite.ui.commons.InfoTileSize
 */
sap.suite.ui.commons.InfoTileSize.Auto = null;

/**
 * 
 * Large size.
 * @public
 * @memberOf sap.suite.ui.commons.InfoTileSize
 */
sap.suite.ui.commons.InfoTileSize.L = null;

/**
 * 
 * Medium size.
 * @public
 * @memberOf sap.suite.ui.commons.InfoTileSize
 */
sap.suite.ui.commons.InfoTileSize.M = null;

/**
 * 
 * Small size.
 * @public
 * @memberOf sap.suite.ui.commons.InfoTileSize
 */
sap.suite.ui.commons.InfoTileSize.S = null;

/**
 * 
 * Extra small size.
 * @public
 * @memberOf sap.suite.ui.commons.InfoTileSize
 */
sap.suite.ui.commons.InfoTileSize.XS = null;


// ---- sap.suite.ui.commons.InfoTileTextColor --------------------------------------------------------------------------

/**
 * 
 * Critical InfoTile text color.
 * @public
 * @memberOf sap.suite.ui.commons.InfoTileTextColor
 */
sap.suite.ui.commons.InfoTileTextColor.Critical = null;

/**
 * 
 * Negative InfoTile text color.
 * @public
 * @memberOf sap.suite.ui.commons.InfoTileTextColor
 */
sap.suite.ui.commons.InfoTileTextColor.Negative = null;

/**
 * 
 * Positive InfoTile text color.
 * @public
 * @memberOf sap.suite.ui.commons.InfoTileTextColor
 */
sap.suite.ui.commons.InfoTileTextColor.Positive = null;


// ---- sap.suite.ui.commons.InfoTileValueColor --------------------------------------------------------------------------

/**
 * 
 * Critical InfoTile value color.
 * @public
 * @memberOf sap.suite.ui.commons.InfoTileValueColor
 */
sap.suite.ui.commons.InfoTileValueColor.Critical = null;

/**
 * 
 * Error InfoTile value color.
 * @public
 * @memberOf sap.suite.ui.commons.InfoTileValueColor
 */
sap.suite.ui.commons.InfoTileValueColor.Error = null;

/**
 * 
 * Good InfoTile value color.
 * @public
 * @memberOf sap.suite.ui.commons.InfoTileValueColor
 */
sap.suite.ui.commons.InfoTileValueColor.Good = null;

/**
 * 
 * Neutral InfoTile value color.
 * @public
 * @memberOf sap.suite.ui.commons.InfoTileValueColor
 */
sap.suite.ui.commons.InfoTileValueColor.Neutral = null;


// ---- sap.suite.ui.commons.LoadState --------------------------------------------------------------------------

/**
 * 
 * LoadableView disabled to load the control.
 * @public
 * @memberOf sap.suite.ui.commons.LoadState
 */
sap.suite.ui.commons.LoadState.Disabled = null;

/**
 * 
 * LoadableView failed to load the control.
 * @public
 * @memberOf sap.suite.ui.commons.LoadState
 */
sap.suite.ui.commons.LoadState.Failed = null;

/**
 * 
 * LoadableView has loaded the control.
 * @public
 * @memberOf sap.suite.ui.commons.LoadState
 */
sap.suite.ui.commons.LoadState.Loaded = null;

/**
 * 
 * LoadableView is loading the control.
 * @public
 * @memberOf sap.suite.ui.commons.LoadState
 */
sap.suite.ui.commons.LoadState.Loading = null;


// ---- sap.suite.ui.commons.ProcessFlowDisplayState --------------------------------------------------------------------------

/**
 * 
 * The control is in the dimmed state
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowDisplayState
 */
sap.suite.ui.commons.ProcessFlowDisplayState.Dimmed = null;

/**
 * 
 * The control is in the combination of dimmed and focused display state
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowDisplayState
 */
sap.suite.ui.commons.ProcessFlowDisplayState.DimmedFocused = null;

/**
 * 
 * The control is in highlighted display state
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowDisplayState
 */
sap.suite.ui.commons.ProcessFlowDisplayState.Highlighted = null;

/**
 * 
 * The control is in the combination of highlighted and focused display state
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowDisplayState
 */
sap.suite.ui.commons.ProcessFlowDisplayState.HighlightedFocused = null;

/**
 * 
 * The control is in the regular display state
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowDisplayState
 */
sap.suite.ui.commons.ProcessFlowDisplayState.Regular = null;

/**
 * 
 * The control is in the combination of regular and focused display state
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowDisplayState
 */
sap.suite.ui.commons.ProcessFlowDisplayState.RegularFocused = null;


// ---- sap.suite.ui.commons.ProcessFlowLaneState --------------------------------------------------------------------------

/**
 * 
 * State associated to the given value
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowLaneState
 */
sap.suite.ui.commons.ProcessFlowLaneState.state = null;

/**
 * 
 * The percentage value from the entire 100 percent
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowLaneState
 */
sap.suite.ui.commons.ProcessFlowLaneState.value = null;


// ---- sap.suite.ui.commons.ProcessFlowNodeState --------------------------------------------------------------------------

/**
 * 
 * Negative status.
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowNodeState
 */
sap.suite.ui.commons.ProcessFlowNodeState.Negative = null;

/**
 * 
 * Neutral status.
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowNodeState
 */
sap.suite.ui.commons.ProcessFlowNodeState.Neutral = null;

/**
 * 
 * Planned state.
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowNodeState
 */
sap.suite.ui.commons.ProcessFlowNodeState.Planned = null;

/**
 * 
 * Positive status.
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowNodeState
 */
sap.suite.ui.commons.ProcessFlowNodeState.Positive = null;


// ---- sap.suite.ui.commons.ProcessFlowZoomLevel --------------------------------------------------------------------------

/**
 * 
 * The full details with normal font size
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowZoomLevel
 */
sap.suite.ui.commons.ProcessFlowZoomLevel.Four = null;

/**
 * 
 * zoom level for least details - only icon is displayed
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowZoomLevel
 */
sap.suite.ui.commons.ProcessFlowZoomLevel.One = null;

/**
 * 
 * The full detail view of the node but with smaller font size
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowZoomLevel
 */
sap.suite.ui.commons.ProcessFlowZoomLevel.Three = null;

/**
 * 
 * The detail is icon, title text and no additional texts
 * @public
 * @memberOf sap.suite.ui.commons.ProcessFlowZoomLevel
 */
sap.suite.ui.commons.ProcessFlowZoomLevel.Two = null;


// ---- sap.suite.ui.commons.SelectionState --------------------------------------------------------------------------

/**
 * 
 * [Enter description for newValue]
 * @public
 * @memberOf sap.suite.ui.commons.SelectionState
 */
sap.suite.ui.commons.SelectionState.NotSelected = null;

/**
 * 
 * [Enter description for newValue]
 * @public
 * @memberOf sap.suite.ui.commons.SelectionState
 */
sap.suite.ui.commons.SelectionState.Selected = null;

/**
 * 
 * [Enter description for newValue]
 * @public
 * @memberOf sap.suite.ui.commons.SelectionState
 */
sap.suite.ui.commons.SelectionState.Semantic = null;


// ---- sap.suite.ui.commons.ThingGroupDesign --------------------------------------------------------------------------

/**
 * 
 * In this design there is indentation between header and content of the group.
 * @public
 * @memberOf sap.suite.ui.commons.ThingGroupDesign
 */
sap.suite.ui.commons.ThingGroupDesign.TopIndent = null;

/**
 * 
 * In this design there is no indentation between header and content of the group.
 * @public
 * @memberOf sap.suite.ui.commons.ThingGroupDesign
 */
sap.suite.ui.commons.ThingGroupDesign.ZeroIndent = null;


// ---- sap.suite.ui.commons.TimelineAlignment --------------------------------------------------------------------------

/**
 * 
 * Right
 * @public
 * @memberOf sap.suite.ui.commons.TimelineAlignment
 */
sap.suite.ui.commons.TimelineAlignment.Right = null;


// ---- sap.suite.ui.commons.TimelineAxisOrientation --------------------------------------------------------------------------

/**
 * 
 * Vertical Orientation
 * @public
 * @memberOf sap.suite.ui.commons.TimelineAxisOrientation
 */
sap.suite.ui.commons.TimelineAxisOrientation.Vertical = null;


// ---- sap.suite.ui.commons.TimelineItemPosition --------------------------------------------------------------------------

/**
 * 
 * [Enter description for newValue]
 * @public
 * @memberOf sap.suite.ui.commons.TimelineItemPosition
 */
sap.suite.ui.commons.TimelineItemPosition.Bottom = null;

/**
 * 
 * [Enter description for newValue]
 * @public
 * @memberOf sap.suite.ui.commons.TimelineItemPosition
 */
sap.suite.ui.commons.TimelineItemPosition.Middle = null;

/**
 * 
 * [Enter description for newValue]
 * @public
 * @memberOf sap.suite.ui.commons.TimelineItemPosition
 */
sap.suite.ui.commons.TimelineItemPosition.Top = null;


// ---- sap.suite.ui.commons.ValueStatus --------------------------------------------------------------------------

/**
 * 
 * Bad value.
 * @public
 * @memberOf sap.suite.ui.commons.ValueStatus
 */
sap.suite.ui.commons.ValueStatus.Bad = null;

/**
 * 
 * Critical value.
 * @public
 * @memberOf sap.suite.ui.commons.ValueStatus
 */
sap.suite.ui.commons.ValueStatus.Critical = null;

/**
 * 
 * Good value.
 * @public
 * @memberOf sap.suite.ui.commons.ValueStatus
 */
sap.suite.ui.commons.ValueStatus.Good = null;

/**
 * 
 * Positive value.
 * @public
 * @memberOf sap.suite.ui.commons.ValueStatus
 */
sap.suite.ui.commons.ValueStatus.Neutral = null;

