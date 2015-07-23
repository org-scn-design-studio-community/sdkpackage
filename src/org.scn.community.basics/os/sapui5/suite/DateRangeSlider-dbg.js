/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.DateRangeSlider.
jQuery.sap.declare("sap.suite.ui.commons.DateRangeSlider");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new DateRangeSlider.
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

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The Date Range Slider provides the user with a Range Slider control that is optimized for use with Dates.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.DateRangeSlider", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"enabled" : {type : "boolean", group : "Appearance", defaultValue : true},
		"editable" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visible" : {type : "boolean", group : "Misc", defaultValue : true},
		"showBubbles" : {type : "boolean", group : "Misc", defaultValue : true},
		"smallStepWidth" : {type : "float", group : "Appearance", defaultValue : null},
		"totalUnits" : {type : "int", group : "Appearance", defaultValue : null},
		"stepLabels" : {type : "boolean", group : "Misc", defaultValue : false},
		"labels" : {type : "string[]", group : "Misc", defaultValue : null},
		"min" : {type : "object", group : "Behavior", defaultValue : null},
		"max" : {type : "object", group : "Behavior", defaultValue : null},
		"value" : {type : "object", group : "Behavior", defaultValue : null},
		"value2" : {type : "object", group : "Behavior", defaultValue : null},
		"pinGrip" : {type : "boolean", group : "Misc", defaultValue : false},
		"pinGrip2" : {type : "boolean", group : "Misc", defaultValue : false}
	},
	events : {
		"change" : {}, 
		"liveChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.DateRangeSlider with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.DateRangeSlider.extend
 * @function
 */

sap.suite.ui.commons.DateRangeSlider.M_EVENTS = {'change':'change','liveChange':'liveChange'};


/**
 * Getter for property <code>width</code>.
 * Width of the horizontal date range slider.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#setWidth
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * This property switches the enabled state of the control. Disabled fields have different colors, and can not be focused.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#setEnabled
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * This property switches the enabled state of the control. Using the date range slider interactively requires this property to be true.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#setEditable
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * This property switches the visible state of the control. Invisible date range slider are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#setVisible
 * @function
 */


/**
 * Getter for property <code>showBubbles</code>.
 * Property to show or hide bubbles. Default is true.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showBubbles</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#getShowBubbles
 * @function
 */

/**
 * Setter for property <code>showBubbles</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowBubbles  new value for property <code>showBubbles</code>
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#setShowBubbles
 * @function
 */


/**
 * Getter for property <code>smallStepWidth</code>.
 * The grips of the control can only be moved in steps of this width.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>smallStepWidth</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#getSmallStepWidth
 * @function
 */

/**
 * Setter for property <code>smallStepWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fSmallStepWidth  new value for property <code>smallStepWidth</code>
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#setSmallStepWidth
 * @function
 */


/**
 * Getter for property <code>totalUnits</code>.
 * Number of units between ticks.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>totalUnits</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#getTotalUnits
 * @function
 */

/**
 * Setter for property <code>totalUnits</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iTotalUnits  new value for property <code>totalUnits</code>
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#setTotalUnits
 * @function
 */


/**
 * Getter for property <code>stepLabels</code>.
 * Display a date label above each tick.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>stepLabels</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#getStepLabels
 * @function
 */

/**
 * Setter for property <code>stepLabels</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bStepLabels  new value for property <code>stepLabels</code>
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#setStepLabels
 * @function
 */


/**
 * Getter for property <code>labels</code>.
 * Labels to be displayed instead of dates.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>labels</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#getLabels
 * @function
 */

/**
 * Setter for property <code>labels</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aLabels  new value for property <code>labels</code>
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#setLabels
 * @function
 */


/**
 * Getter for property <code>min</code>.
 * Minimum date for the slider.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>min</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#getMin
 * @function
 */

/**
 * Setter for property <code>min</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oMin  new value for property <code>min</code>
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#setMin
 * @function
 */


/**
 * Getter for property <code>max</code>.
 * Maximum date for the slider.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>max</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#getMax
 * @function
 */

/**
 * Setter for property <code>max</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oMax  new value for property <code>max</code>
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#setMax
 * @function
 */


/**
 * Getter for property <code>value</code>.
 * Date value of the left grip.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>value</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oValue  new value for property <code>value</code>
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#setValue
 * @function
 */


/**
 * Getter for property <code>value2</code>.
 * Date value of the right grip.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>value2</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#getValue2
 * @function
 */

/**
 * Setter for property <code>value2</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oValue2  new value for property <code>value2</code>
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#setValue2
 * @function
 */


/**
 * Getter for property <code>pinGrip</code>.
 * Pin the left grip so that user cannot move it with the keyboard or mouse.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>pinGrip</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#getPinGrip
 * @function
 */

/**
 * Setter for property <code>pinGrip</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bPinGrip  new value for property <code>pinGrip</code>
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#setPinGrip
 * @function
 */


/**
 * Getter for property <code>pinGrip2</code>.
 * Pin the right grip so that user cannot move it with the keyboard or mouse.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>pinGrip2</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#getPinGrip2
 * @function
 */

/**
 * Setter for property <code>pinGrip2</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bPinGrip2  new value for property <code>pinGrip2</code>
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#setPinGrip2
 * @function
 */


/**
 * This event is fired when user changes completes the selection of a new date using a grip. It contains the Date object value of each grip such that the left grip value is held by the value property and the right grip value is held by the value2 property.
 *
 * @name sap.suite.ui.commons.DateRangeSlider#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/> itself. 
 *  
 * This event is fired when user changes completes the selection of a new date using a grip. It contains the Date object value of each grip such that the left grip value is held by the value property and the right grip value is held by the value2 property.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.DateRangeSlider#fireChange
 * @function
 */


/**
 * This live event is fired as the user slides a grip with the mouse. It contains the Date object value of each grip such that the left grip value is held by the value property and the right grip value is held by the value2 property.
 *
 * @name sap.suite.ui.commons.DateRangeSlider#liveChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/> itself. 
 *  
 * This live event is fired as the user slides a grip with the mouse. It contains the Date object value of each grip such that the left grip value is held by the value property and the right grip value is held by the value2 property.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#attachLiveChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.suite.ui.commons.DateRangeSlider</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSlider#detachLiveChange
 * @function
 */

/**
 * Fire event liveChange to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.DateRangeSlider#fireLiveChange
 * @function
 */

// Start of sap/suite/ui/commons/DateRangeSlider.js
jQuery.sap.require("jquery.sap.resources");
jQuery.sap.require("sap.suite.ui.commons.util.DateUtils");

(function() {

    var DAY = "d";
    var MONTH = "m";

    /**
     * Initialize the DateRangeSlider.
     * 
     * @private
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.init = function() {

        this._oDateRangeSliderInternal = new sap.suite.ui.commons.DateRangeSliderInternal({
            id : this.getId() + "-dateRangeSliderInternal"
        });

        sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal(this);

        var oSelf = this;

        this._oDateRangeSliderInternal.attachChange(function(oEvent) {

            oSelf.handleChange(oEvent);
        });

        this._oDateRangeSliderInternal.attachLiveChange(function(oEvent) {

            oSelf.handleLiveChange(oEvent);
        });
    };
    
    /**
     * Validate if dFirstDate and dSecondDate are same day for Granularity=day or if they are same months for Granularity=month
     * 
     * @param {Date}
     *                dFirstDate The first date.
     * @param {Date}
     *                dSecondDate The second date.
     * @param {String}
     *                sGranularity The Granularity - day as "d" or month as "m".
     * @returns true if two dates are same based on Granularity otherwise false
     * @private
     */

    sap.suite.ui.commons.DateRangeSlider.areDaysSameBasedOnGranularity = function(dFirstDate, dSecondDate, sGranularity) {

        var bSame = false;

        switch (sGranularity) {

        case (DAY):
            bSame = sap.suite.ui.commons.util.DateUtils.dateDaysEqual(dFirstDate, dSecondDate);
            break;

        case (MONTH):
            bSame = sap.suite.ui.commons.util.DateUtils.dateMonthsEqual(dFirstDate, dSecondDate);
            break;
        }

        return bSame;
    };

    /**
     * Validate date value min and max. The max date must be after min date: max > min.
     * 
     * @param {Date}
     *                dMin The min date.
     * @param {Date}
     *                dMax The max date.
     * @param {String}
     *                sGranularity The Granularity - day as "d" or month as "m".
     * @returns true if min date is before max date.
     * @private
     */
    sap.suite.ui.commons.DateRangeSlider.isMinBeforeMax = function(dMin, dMax, sGranularity) {

        var bMinBfrMax = false;

        if (dMin.getFullYear() < dMax.getFullYear()) {
            bMinBfrMax = true;
        } else if (dMin.getFullYear() === dMax.getFullYear()) {
            if (dMin.getMonth() < dMax.getMonth()) {
                bMinBfrMax = true;
            } else if (dMin.getMonth() === dMax.getMonth() && sGranularity === DAY) {
                if (dMin.getDate() < dMax.getDate()) {
                    bMinBfrMax = true;
                }
            }
        }

        if (!bMinBfrMax) {
            jQuery.sap.log.error("DateRangeSlider: Min Date = " + dMin + " should be before Max Date = " + dMax);
        }

        return bMinBfrMax;
    };

    /**
     * Validate value date >= min date.
     * 
     * @param {Date}
     *                dMin The min date.
     * @param {Date}
     *                dValue The value date.
     * @param {String}
     *                sGranularity The Granularity - day as "d" or month as "m".
     * @returns true if value date is equal or after min date.
     * @private
     */
    sap.suite.ui.commons.DateRangeSlider.isValueEqualOrAfterMin = function(dMin, dValue, sGranularity) {

        var bValueEqualOrAfterMin = false;

        if (dMin.getFullYear() < dValue.getFullYear()) {
            bValueEqualOrAfterMin = true;
        } else if (dMin.getFullYear() === dValue.getFullYear()) {
            if (dMin.getMonth() < dValue.getMonth()) {
                bValueEqualOrAfterMin = true;
            } else if (dMin.getMonth() === dValue.getMonth() && sGranularity === MONTH) {
                bValueEqualOrAfterMin = true;
            } else if (dMin.getMonth() === dValue.getMonth() && sGranularity === DAY) {
                if (dMin.getDate() <= dValue.getDate()) {
                    bValueEqualOrAfterMin = true;
                }
            }
        }

        if (!bValueEqualOrAfterMin) {
            jQuery.sap.log.error("DateRangeSlider: Value Date = " + dValue + " should be after or equal to Min Date = " + dMin);
        }

        return bValueEqualOrAfterMin;
    };

    /**
     * Validate value2 date <= max date.
     * 
     * @param {Date}
     *                dValue2 The value2 date.
     * @param {Date}
     *                dMax The max date.
     * @param {String}
     *                sGranularity The Granularity - day as "d" or month as "m".
     * @returns true if value2 date is equal to before max date.
     * @private
     */
    sap.suite.ui.commons.DateRangeSlider.isValue2EqualOrBeforeMax = function(dValue2, dMax, sGranularity) {

        var bValue2EqualOrBeforeMax = false;

        if (dValue2.getFullYear() < dMax.getFullYear()) {
            bValue2EqualOrBeforeMax = true;
        } else if (dValue2.getFullYear() === dMax.getFullYear()) {
            if (dValue2.getMonth() < dMax.getMonth()) {
                bValue2EqualOrBeforeMax = true;
            } else if (dValue2.getMonth() === dMax.getMonth() && sGranularity === MONTH) {
                bValue2EqualOrBeforeMax = true;
            } else if (dValue2.getMonth() === dMax.getMonth() && sGranularity === DAY) {
                if (dValue2.getDate() <= dMax.getDate()) {
                    bValue2EqualOrBeforeMax = true;
                }
            }
        }

        if (!bValue2EqualOrBeforeMax) {
            jQuery.sap.log.error("DateRangeSlider: Value2 Date = " + dValue2 + " should be before or equal to Max Date = " + dMax);
        }

        return bValue2EqualOrBeforeMax;
    };

    /**
     * Validate value date <= value2 date.
     * 
     * @param {Date}
     *                dValue The value date.
     * @param {Date}
     *                dValue2 The value2 date.
     * @param {String}
     *                sGranularity The Granularity - day as "d" or month as "m".
     * @returns true if dValue2 date is equal or after value date.
     * @private
     */
    sap.suite.ui.commons.DateRangeSlider.isValueBeforeOrEqualValue2 = function(dValue, dValue2, sGranularity) {

        var bValueBeforeOrEqualValue2 = false;

        if (dValue.getFullYear() < dValue2.getFullYear()) {
            bValueBeforeOrEqualValue2 = true;
        } else if (dValue.getFullYear() === dValue2.getFullYear()) {
            if (dValue.getMonth() < dValue2.getMonth()) {
                bValueBeforeOrEqualValue2 = true;
            } else if (dValue.getMonth() === dValue2.getMonth() && sGranularity === MONTH) {
                bValueBeforeOrEqualValue2 = true;
            } else if (dValue.getMonth() === dValue2.getMonth() && sGranularity === DAY) {
                if (dValue.getDate() <= dValue2.getDate()) {
                    bValueBeforeOrEqualValue2 = true;
                }
            }
        }

        if (!bValueBeforeOrEqualValue2) {
            jQuery.sap.log.error("DateRangeSlider: Value Date = " + dValue + " should be before or equal to Value2 Date = " + dValue2);
        }

        return bValueBeforeOrEqualValue2;
    };

    /**
     * Set min property for the DateRangeSlider. This sets the minimum date for the slider.
     * 
     * @param {Date}
     *                dMin
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setMin = function(dMin) {

        if (sap.suite.ui.commons.util.DateUtils.isValidDate(dMin) && sap.suite.ui.commons.DateRangeSlider.isMinBeforeMax(dMin, new Date(this.getMax()), this._sGranularity)
                && !sap.suite.ui.commons.DateRangeSlider.areDaysSameBasedOnGranularity(new Date(this.getMin()), dMin, this._sGranularity)) {

            sap.suite.ui.commons.util.DateUtils.resetDateToStartOfDay(dMin);
            this._oDateRangeSliderInternal.setMinDate(dMin);
            sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal(this);
        }
    };

    /**
     * Set max property for the DateRangeSlider. This sets the maximum date for the slider.
     * 
     * @param {Date}
     *                dMax
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setMax = function(dMax) {

        if (sap.suite.ui.commons.util.DateUtils.isValidDate(dMax) && sap.suite.ui.commons.DateRangeSlider.isMinBeforeMax(new Date(this.getMin()), dMax, this._sGranularity)
                && !sap.suite.ui.commons.DateRangeSlider.areDaysSameBasedOnGranularity(new Date(this.getMax()), dMax, this._sGranularity)) {

            sap.suite.ui.commons.util.DateUtils.resetDateToEndOfDay(dMax);
            this._oDateRangeSliderInternal.setMaxDate(dMax);
            sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal(this);
        }
    };

    /**
     * Set value property for the DateRangeSlider. This sets the value date for the slider.
     * 
     * @param {Date}
     *                dValue
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setValue = function(dValue) {

        if (sap.suite.ui.commons.util.DateUtils.isValidDate(dValue)
                && sap.suite.ui.commons.DateRangeSlider.isValueBeforeOrEqualValue2(dValue, new Date(this.getValue2()), this._sGranularity)
                && sap.suite.ui.commons.DateRangeSlider.isValueEqualOrAfterMin(new Date(this.getMin()), dValue, this._sGranularity)
                && !sap.suite.ui.commons.DateRangeSlider.areDaysSameBasedOnGranularity(new Date(this.getValue()), dValue, this._sGranularity)) {

            sap.suite.ui.commons.util.DateUtils.resetDateToStartOfDay(dValue);
            this._oDateRangeSliderInternal.setValueDate(dValue);
            sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal(this);
        }
    };
    
    
    /**
     * Get value property for the control.  
     * 
     * @returns Date - date representing position of the grip  
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.getValue = function() {
        
        var dValue = this._oDateRangeSliderInternal.getValueDate();
        return dValue;
    };

    /**
     * Set value2 property for the DateRangeSlider. This sets the value2 date for the slider.
     * 
     * @param {Date}
     *                dValue2
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setValue2 = function(dValue2) {

        if (sap.suite.ui.commons.util.DateUtils.isValidDate(dValue2)
                && sap.suite.ui.commons.DateRangeSlider.isValueBeforeOrEqualValue2(new Date(this.getValue()), dValue2, this._sGranularity)
                && !sap.suite.ui.commons.DateRangeSlider.areDaysSameBasedOnGranularity(new Date(this.getValue2()), dValue2, this._sGranularity)
                && sap.suite.ui.commons.DateRangeSlider.isValue2EqualOrBeforeMax(dValue2, new Date(this.getMax()), this._sGranularity)) {

            sap.suite.ui.commons.util.DateUtils.resetDateToStartOfDay(dValue2);
            this._oDateRangeSliderInternal.setValue2Date(dValue2);
            sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal(this);
        }
    };
    
    
    /**
     * Get value2 property for the control.  
     * 
     * @returns Date - date representing position of the grip2  
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.getValue2 = function() {
        
        var dValue2 = this._oDateRangeSliderInternal.getValue2Date();
        return dValue2;
    };

    /**
     * Set visible property for the DateRangeSlider
     * 
     * @param {boolean}
     *                bVisible
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setVisible = function(bVisible) {

        this._oDateRangeSliderInternal.setVisible(bVisible);
        this.setProperty("visible", bVisible);
    };

    /**
     * Set enabled property for the DateRangeSlider
     * 
     * @param {boolean}
     *                bEnabled
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setEnabled = function(bEnabled) {

        this._oDateRangeSliderInternal.setEnabled(bEnabled);
        this.setProperty("enabled", bEnabled);
    };

    /**
     * Set labels property for the DateRangeSlider
     * 
     * @param {string[]}
     *                aLabels
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setLabels = function(aLabels) {

        this._oDateRangeSliderInternal.setLabels(aLabels);
        this.setProperty("labels", aLabels);
    };

    /**
     * Set stepLabels property for the DateRangeSlider
     * 
     * @param {boolean}
     *                bStepLabels
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setStepLabels = function(bStepLabels) {

        this._oDateRangeSliderInternal.setStepLabels(bStepLabels);
        this.setProperty("stepLabels", bStepLabels);
    };

    /**
     * Set editable property for the DateRangeSlider
     * 
     * @param {boolean}
     *                bEditable
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setEditable = function(bEditable) {

        this._oDateRangeSliderInternal.setEditable(bEditable);
        this.setProperty("editable", bEditable);
    };

    /**
     * Set width property for the DateRangeSlider
     * 
     * @param {sap.ui.core.CSSSize}
     *                tWidth
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setWidth = function(tWidth) {

        this._oDateRangeSliderInternal.setWidth(tWidth);
        this.setProperty("width", tWidth);
    };

    /**
     * Set showBubbles property for the DateRangeSlider
     * 
     * @param {boolean}
     *                bShowBubbles
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setShowBubbles = function(bShowBubbles) {

        this._oDateRangeSliderInternal.setShowBubbles(bShowBubbles);
        this.setProperty("showBubbles", bShowBubbles);
    };

    /**
     * Set smallStepWidth property for the DateRangeSlider
     * 
     * @param {float}
     *                fSmallStepWidth
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setSmallStepWidth = function(fSmallStepWidth) {

        this._oDateRangeSliderInternal.setSmallStepWidth(fSmallStepWidth);
        this.setProperty("smallStepWidth", fSmallStepWidth);
    };

    /**
     * Set totalUnits property for the DateRangeSlider
     * 
     * @param {int}
     *                iTotalUnits
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setTotalUnits = function(iTotalUnits) {

        this._oDateRangeSliderInternal.setTotalUnits(iTotalUnits);
        this.setProperty("totalUnits", iTotalUnits);
    };

    /**
     * Set 4 base properties min, max, value and value2 for given DateRangeSlider
     * 
     * @param {sap.suite.ui.commons.DateRangeSlider}
     *                oDateRangeSlider
     * 
     * @private
     */
    sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal = function(oDateRangeSlider) {

        oDateRangeSlider.setProperty("min", oDateRangeSlider._oDateRangeSliderInternal.getMinDate());
        oDateRangeSlider.setProperty("max", oDateRangeSlider._oDateRangeSliderInternal.getMaxDate());
        oDateRangeSlider.setProperty("value", oDateRangeSlider._oDateRangeSliderInternal.getValueDate());
        oDateRangeSlider.setProperty("value2", oDateRangeSlider._oDateRangeSliderInternal.getValue2Date());
        oDateRangeSlider._sGranularity = oDateRangeSlider._oDateRangeSliderInternal._sGranularity;
    };

    /**
     * Set Date Range Slider Granularity to Day
     * 
     * @returns {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining.
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setDayGranularity = function() {

        this._oDateRangeSliderInternal.setDayGranularity();
        if (this._oDateRangeSliderInternal.isActive()) {
            this._oDateRangeSliderInternal.rerender();
        }
        sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal(this);
        return this;
    };

    /**
     * Set Date Range Slider Granularity to Month
     * 
     * @returns {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining.
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setMonthGranularity = function() {

        var iMonthsApart = sap.suite.ui.commons.util.DateUtils.numberOfMonthsApart(this.getMin(), this.getMax());
        if (iMonthsApart >= 1) {
            this._oDateRangeSliderInternal.setMonthGranularity();
            if (this._oDateRangeSliderInternal.isActive()) {
                this._oDateRangeSliderInternal.rerender();
            }
            sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal(this);
        } else {
            jQuery.sap.log.error("DateRangeSlider.setMonthGranularity(): Max Date should be 1 month after Min Date.");
        }

        return this;
    };

    /**
     * Setter for dateFormat which is used to format the dates for Labels, bubble texts, and tool tips. If passed object is null or is of incorrect type,
     * _oDateRangeSliderInternal's default formatting will be used.
     * 
     * @param {sap.ui.core.format.DateFormat}
     *                oDateFormat
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setDateFormat = function(oDateFormat) {

        this._oDateRangeSliderInternal.setDateFormat(oDateFormat);
        if (this._oDateRangeSliderInternal.isActive()) {
            this._oDateRangeSliderInternal.rerender();
        }
    };

    /**
     * Set pinGrip property for the DateRangeSlider
     * 
     * @param {boolean}
     *                bPinGrip
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setPinGrip = function(bPinGrip) {

        this._oDateRangeSliderInternal.setPinGrip(bPinGrip);
        this.setProperty("pinGrip", bPinGrip);
    };

    /**
     * Set pinGrip2 property for the DateRangeSlider
     * 
     * @param {boolean}
     *                bPinGrip2
     * 
     * @public
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.setPinGrip2 = function(bPinGrip2) {

        this._oDateRangeSliderInternal.setPinGrip2(bPinGrip2);
        this.setProperty("pinGrip2", bPinGrip2);
    };

    /**
     * Cleans up the DateRangeSlider instance before destruction.
     * 
     * @private
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.exit = function() {

        this._oDateRangeSliderInternal.destroy();
        this._oDateRangeSliderInternal = null;
    };

    /**
     * Handles the change event of _oDateRangeSliderInternal and fires the change event with start and end date values
     * 
     * @param {sap.ui.base.Event}
     *                oEvent
     * 
     * @private
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.handleChange = function(oEvent) {

        var dValueDate = oEvent.getParameter("value");
        var dValue2Date = oEvent.getParameter("value2");
        this.fireChange({
            value : dValueDate,
            value2 : dValue2Date
        });
    };

    /**
     * Handles the live change event of _oDateRangeSliderInternal and fires the change event with start and end date values
     * 
     * @param {sap.ui.base.Event}
     *                oEvent
     * 
     * @private
     */
    sap.suite.ui.commons.DateRangeSlider.prototype.handleLiveChange = function(oEvent) {

        var dValueDate = oEvent.getParameter("value");
        var dValue2Date = oEvent.getParameter("value2");
        this.fireLiveChange({
            value : dValueDate,
            value2 : dValue2Date
        });
    };

}());
