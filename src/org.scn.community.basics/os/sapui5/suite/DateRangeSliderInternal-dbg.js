/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.DateRangeSliderInternal.
jQuery.sap.declare("sap.suite.ui.commons.DateRangeSliderInternal");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.commons.RangeSlider");


/**
 * Constructor for a new DateRangeSliderInternal.
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
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.RangeSlider#constructor sap.ui.commons.RangeSlider}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The Date Range Slider provides the user with a Range Slider control that is optimized for use with Dates.
 * @extends sap.ui.commons.RangeSlider
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.DateRangeSliderInternal
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.commons.RangeSlider.extend("sap.suite.ui.commons.DateRangeSliderInternal", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"showBubbles" : {type : "boolean", group : "Misc", defaultValue : true},
		"pinGrip" : {type : "boolean", group : "Misc", defaultValue : false},
		"pinGrip2" : {type : "boolean", group : "Misc", defaultValue : false}
	},
	events : {
		"change" : {}, 
		"liveChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.DateRangeSliderInternal with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.DateRangeSliderInternal.extend
 * @function
 */

sap.suite.ui.commons.DateRangeSliderInternal.M_EVENTS = {'change':'change','liveChange':'liveChange'};


/**
 * Getter for property <code>showBubbles</code>.
 * Property to show or hide bubbles. Default is true.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showBubbles</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSliderInternal#getShowBubbles
 * @function
 */

/**
 * Setter for property <code>showBubbles</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowBubbles  new value for property <code>showBubbles</code>
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSliderInternal#setShowBubbles
 * @function
 */


/**
 * Getter for property <code>pinGrip</code>.
 * Property to pin Grip (left grip) of the slider so that user cannot move it with key or mouse clicks.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>pinGrip</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSliderInternal#getPinGrip
 * @function
 */

/**
 * Setter for property <code>pinGrip</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bPinGrip  new value for property <code>pinGrip</code>
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSliderInternal#setPinGrip
 * @function
 */


/**
 * Getter for property <code>pinGrip2</code>.
 * Property to pin Grip2 (right grip) of the slider so that user cannot move it with key or mouse clicks.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>pinGrip2</code>
 * @public
 * @name sap.suite.ui.commons.DateRangeSliderInternal#getPinGrip2
 * @function
 */

/**
 * Setter for property <code>pinGrip2</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bPinGrip2  new value for property <code>pinGrip2</code>
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSliderInternal#setPinGrip2
 * @function
 */


/**
 * This event is fired when user changes the positions of the grips of the control. It contains value as Date object and value2 as Date object which are based on the positions of two grips.
 *
 * @name sap.suite.ui.commons.DateRangeSliderInternal#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/> itself. 
 *  
 * This event is fired when user changes the positions of the grips of the control. It contains value as Date object and value2 as Date object which are based on the positions of two grips.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSliderInternal#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSliderInternal#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.DateRangeSliderInternal#fireChange
 * @function
 */


/**
 * This live event is fired when user changes the positions of the grips of the control. It contains value as Date object and value2 as Date object which are based on the positions of two grips.
 *
 * @name sap.suite.ui.commons.DateRangeSliderInternal#liveChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/> itself. 
 *  
 * This live event is fired when user changes the positions of the grips of the control. It contains value as Date object and value2 as Date object which are based on the positions of two grips.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSliderInternal#attachLiveChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeSliderInternal#detachLiveChange
 * @function
 */

/**
 * Fire event liveChange to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.DateRangeSliderInternal} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.DateRangeSliderInternal#fireLiveChange
 * @function
 */

// Start of sap/suite/ui/commons/DateRangeSliderInternal.js
jQuery.sap.require("sap.ui.commons.RangeSlider");
jQuery.sap.require("jquery.sap.resources");
jQuery.sap.require("sap.ui.core.format.DateFormat");
jQuery.sap.require("sap.ui.core.ResizeHandler");
jQuery.sap.require("sap.ui.commons.Label");
jQuery.sap.require("sap.suite.ui.commons.util.DateUtils");

(function() {

	var DEFAULT_TOTAL_UNITS = 12;
	var DAY = "d";
	var MONTH = "m";

	/**
	 * Initialize the DateRangeSliderInternal.
	 * 
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.init = function() {

		this.setSmallStepWidth(1);
		this._sGranularity = DAY;
		this._oDateFormat = null;

		var dMaxDate = new Date();
		this._dMinDate = sap.suite.ui.commons.util.DateUtils.incrementDateByIndex(dMaxDate, -365);

		if (!this.getTotalUnits()) {
			this.setTotalUnits(DEFAULT_TOTAL_UNITS);
		}

		this.setMin(0);
		this.setMax(365);
		this.setValue(0);
		this.setValue2(365);

		var bTextLabels = (this.getLabels() && this.getLabels().length > 0);
		this._bUsingDefaultLabels = this.getStepLabels() && !bTextLabels;
		if (this._bUsingDefaultLabels) {
			sap.suite.ui.commons.DateRangeSliderInternal.createRailLabels(this);
		}

		if (this.getShowBubbles()) {
			this._oBubble = new sap.ui.commons.Label({
				id : this.getId() + '-bubbleTxt'
			});
			this._oBubble2 = new sap.ui.commons.Label({
				id : this.getId() + '-bubbleTxt2'
			});

			this._oBubble.addStyleClass("sapSuiteUiCommonsDateRangeSliderBubbleLblTxt");
			this._oBubble2.addStyleClass("sapSuiteUiCommonsDateRangeSliderBubbleLblTxt");

			this._oBubble.setText(this.getFormattedDate(this.getValueDate()));
			this._oBubble2.setText(this.getFormattedDate(this.getValue2Date()));
		}
	};

	/**
	 * Not yet supported
	 * 
	 * @param {boolean}
	 *            bVertical - if the control is to be displayed as Vertical
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.setVertical = function(bVertical) {

		jQuery.sap.log.error("DateRangeSliderInternal.setVertical method is not yet supported!");
	};

	/**
	 * Not yet supported
	 * 
	 * @param {string}
	 *            sHeight - new height of the control
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.setHeight = function(sHeight) {

		jQuery.sap.log.error("DateRangeSliderInternal.setHeight method is not yet supported!");
	};

	/**
	 * Creates rail labels.
	 * 
	 * @param oDateRangeSliderInternal -
	 *            The DateRangeSliderInternal object
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.createRailLabels = function(oDateRangeSliderInternal) {

		var aRailLabels = [];
		var iTotalUnits = oDateRangeSliderInternal.getTotalUnits();
		var fStepSize = (oDateRangeSliderInternal.getMax() - oDateRangeSliderInternal.getMin()) / iTotalUnits;

		for ( var i = 0; i <= iTotalUnits; i++) {
			var iDateIndex = Math.round(parseFloat(oDateRangeSliderInternal.getMin() + i * fStepSize));
			if (iDateIndex > oDateRangeSliderInternal.getMax()) {
				iDateIndex = oDateRangeSliderInternal.getMax();
			}

			var dTmpDate = null;
			if (oDateRangeSliderInternal._sGranularity === DAY) {
				dTmpDate = sap.suite.ui.commons.util.DateUtils.incrementDateByIndex(oDateRangeSliderInternal.getMinDate(), iDateIndex);
			} else if (oDateRangeSliderInternal._sGranularity === MONTH) {
				dTmpDate = sap.suite.ui.commons.util.DateUtils.incrementMonthByIndex(oDateRangeSliderInternal.getMinDate(), iDateIndex);
			}
			aRailLabels[i] = oDateRangeSliderInternal.getFormattedDate(dTmpDate);
		}

		oDateRangeSliderInternal.setProperty("labels", aRailLabels);

		return aRailLabels;
	};

	/**
	 * Reposition the bubbles based on grip positions.
	 * 
	 * @param oDateRangeSliderInternal -
	 *            The DateRangeSliderInternal object
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.repositionBubbles = function(oDateRangeSliderInternal) {

		var sGripId = oDateRangeSliderInternal.getId() + '-grip';
		var oGrip = jQuery.sap.domById(sGripId);
		var sLeftpx = oGrip.style.left;
		var sLeftPositionOfGrip = sLeftpx.substring(0, sLeftpx.length - 2);
		var iLeftPositionOfGrip = parseInt(sLeftPositionOfGrip, 10);

		var sGrip2Id = oDateRangeSliderInternal.getId() + '-grip2';
		var oGrip2 = jQuery.sap.domById(sGrip2Id);
		var sLeftpx2 = oGrip2.style.left;
		var sLeftPositionOfGrip2 = sLeftpx2.substring(0, sLeftpx2.length - 2);
		var iLeftPositionOfGrip2 = parseInt(sLeftPositionOfGrip2, 10);

		var sBubbleId = oDateRangeSliderInternal.getId() + '-bubble';
		var oBubble = jQuery.sap.domById(sBubbleId);
		var sBubble2Id = oDateRangeSliderInternal.getId() + '-bubble2';
		var oBubble2 = jQuery.sap.domById(sBubble2Id);

		var sBubbleleft = null, sBubble2left = null;

		var sBubbleleftpx = oBubble.style.left;
		if (sBubbleleftpx) {
			sBubbleleft = sBubbleleftpx.substring(0, sBubbleleftpx.length - 2);
		}
		var sBubble2leftpx = oBubble2.style.left;
		if (sBubble2leftpx) {
			sBubble2left = sBubble2leftpx.substring(0, sBubble2leftpx.length - 2);
		}

		var sWidthOfBubblePx = jQuery(oBubble).css("width");
		var iWidthOfBubble = parseInt(sWidthOfBubblePx, 10);

		var iDiff = 41;

		if (((iLeftPositionOfGrip + iWidthOfBubble) < iLeftPositionOfGrip2) || (!sBubbleleft && !sBubble2left)) {
			oBubble.style.left = (iLeftPositionOfGrip - iDiff) + "px";
			oBubble2.style.left = (iLeftPositionOfGrip2 - iDiff) + "px";
		}
		// CSS 2084810 2013 - Fix for bubble repositioning in RTL mode.
		if (sap.ui.getCore().getConfiguration().getRTL() && ((iLeftPositionOfGrip2 + iWidthOfBubble) < iLeftPositionOfGrip)) {
			oBubble.style.left = (iLeftPositionOfGrip - iDiff) + "px";
			oBubble2.style.left = (iLeftPositionOfGrip2 - iDiff) + "px";
		}

		var sValue = oDateRangeSliderInternal.getFormattedDate(oDateRangeSliderInternal.getValueDate());
		var sValue2 = oDateRangeSliderInternal.getFormattedDate(oDateRangeSliderInternal.getValue2Date());

		oDateRangeSliderInternal._oBubble.setText(sValue);
		oDateRangeSliderInternal._oBubble2.setText(sValue2);

		if (oDateRangeSliderInternal.isActive()) {
			oDateRangeSliderInternal._oBubble.rerender();
			oDateRangeSliderInternal._oBubble2.rerender();
		}
	};

	/**
	 * Function is called when grip position shall be changed
	 * 
	 * @param {float}
	 *            fNewValue the new grip value
	 * @param {int}
	 *            iNewPos the new grip position
	 * @param {DOMNode}
	 *            oGrip the changed grip
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.changeGrip = function(fNewValue, iNewPos, oGrip) {

		sap.ui.commons.Slider.prototype.changeGrip.apply(this, arguments);

		if (!isNaN(fNewValue)) {
			var iDateIndex = Math.round(fNewValue);
			var dTmpDate = null;
			if (this._sGranularity === DAY) {
				dTmpDate = sap.suite.ui.commons.util.DateUtils.incrementDateByIndex(this._dMinDate, iDateIndex);
			} else if (this._sGranularity === MONTH) {
				dTmpDate = sap.suite.ui.commons.util.DateUtils.incrementMonthByIndex(this._dMinDate, iDateIndex);
			}

			oGrip.title = this.getFormattedDate(dTmpDate);
		}
	};

	/**
	 * Update ARIA values when a grip moves.
	 * 
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.setAriaState = function() {

		var dateVal = this.getFormattedDate(this.getValueDate());
		var date2Val = this.getFormattedDate(this.getValue2Date());

		if (this.oMovingGrip === this.oGrip) {
			this.oMovingGrip.setAttribute('aria-valuetext', dateVal);
			this.oMovingGrip.setAttribute('aria-valuenow', this.getValue());
			this.oGrip2.setAttribute('aria-valuemin', dateVal);
		} else {
			this.oMovingGrip.setAttribute('aria-valuetext', date2Val);
			this.oMovingGrip.setAttribute('aria-valuenow', this.getValue2());
			this.oGrip.setAttribute('aria-valuemax', date2Val);
		}
	};

	/**
	 * Format the given date based on the Granularity and DateFormat.
	 * 
	 * @param {Date}
	 *            dDate The date to be formatted.
	 * 
	 * @Return the formatted date string
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.getFormattedDate = function(dDate) {

		var oFormatter = null;

		switch (this._sGranularity) {

		case (DAY):
			oFormatter = this._oDateFormat || sap.ui.core.format.DateFormat.getDateInstance({
				style : "medium"
			});
			break;

		case (MONTH):
			oFormatter = this._oDateFormat || sap.ui.core.format.DateFormat.getDateInstance({
				pattern : 'MMM YYYY'
			});
			break;
		}

		return oFormatter.format(dDate);
	};

	/**
	 * Update the Labels, Bubble text and Tool Tip values and re-render DateRangeSliderInternal control.
	 * 
	 * @param oDateRangeSliderInternal
	 *            {sap.suite.ui.commons.DateRangeSliderInternal}
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.updateLabelBubbleToolTipValues = function(oDateRangeSliderInternal) {

		// update Labels based on DateFormat
		if (oDateRangeSliderInternal._bUsingDefaultLabels) {
			sap.suite.ui.commons.DateRangeSliderInternal.createRailLabels(oDateRangeSliderInternal);
		}

		// update bubble text based on DateFormat
		if (oDateRangeSliderInternal.getShowBubbles()) {
			var sValue = oDateRangeSliderInternal.getFormattedDate(oDateRangeSliderInternal.getValueDate());
			var sValue2 = oDateRangeSliderInternal.getFormattedDate(oDateRangeSliderInternal.getValue2Date());
			oDateRangeSliderInternal._oBubble.setText(sValue);
			oDateRangeSliderInternal._oBubble2.setText(sValue2);
		}
	};

	/**
	 * Getter for dateFormat which is used for formating the dates for Labels, bubble texts, and tool tips.
	 * 
	 * @return oDateFormat {sap.ui.core.format.DateFormat}
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.getDateFormat = function() {

		return this._oDateFormat;
	};

	/**
	 * Setter for dateFormat which is used for formating the dates for Labels, bubble texts, and tool tips. If passed object is null or is of incorrect type, control's default
	 * formatting will be used.
	 * 
	 * @param oDateFormat
	 *            {sap.ui.core.format.DateFormat}
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.setDateFormat = function(oDateFormat) {

		if (oDateFormat && oDateFormat instanceof sap.ui.core.format.DateFormat) {
			this._oDateFormat = oDateFormat;
		} else {
			this._oDateFormat = null;
		}
		sap.suite.ui.commons.DateRangeSliderInternal.updateLabelBubbleToolTipValues(this);
	};

	/**
	 * Returns an object containing valueDate and value2Date which are set to the values based on two grips of the DateRangeSliderInternal.
	 * 
	 * @return {Object} The date range object containing valueDate and value2Date Date.
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.getDateRange = function() {

		var dValueDate = this.getValueDate();
		var dValue2Date = this.getValue2Date();

		var oCopy = {
			valueDate : dValueDate,
			value2Date : dValue2Date
		};
		return oCopy;
	};

	/**
	 * Handles the change event fired by the range slider after reseting the date range, fires the change event of DateRangeSliderInternal.
	 * 
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.handleFireChange = function() {

		if (this.getShowBubbles()) {
			sap.suite.ui.commons.DateRangeSliderInternal.repositionBubbles(this);
		}
		var oRange = this.getDateRange();
		this.fireChange({
			value : oRange.valueDate,
			value2 : oRange.value2Date
		});
		this.fireLiveChange({
			value : oRange.valueDate,
			value2 : oRange.value2Date
		});
	};

	/**
	 * fires the change event. The liveEvent is not fired here.
	 * 
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.handleFireChangeWithoutLive = function() {

		if (this.getShowBubbles()) {
			sap.suite.ui.commons.DateRangeSliderInternal.repositionBubbles(this);
		}
		var oRange = this.getDateRange();
		this.fireChange({
			value : oRange.valueDate,
			value2 : oRange.value2Date
		});
	};

	/**
	 * Handles the live change event fired by the range slider after reseting the date range, fires the live change event of DateRangeSliderInternal.
	 * 
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.fireLiveChangeForGrip = function(oGrip, fNewValue, fOldValue) {

		if (this.getShowBubbles() && fOldValue !== fNewValue) {
			sap.suite.ui.commons.DateRangeSliderInternal.repositionBubbles(this);
		}
		var oRange;
		if (oGrip === this.oGrip) {
			if (fOldValue !== fNewValue) {
				// fire event only if value changed
				oRange = this.getDateRange();
				this.fireLiveChange({
					value : oRange.valueDate,
					value2 : oRange.value2Date
				});
			}
		} else if (oGrip === this.oGrip2) {
			if (fOldValue !== fNewValue) {
				// fire event only if value changed
				oRange = this.getDateRange();
				this.fireLiveChange({
					value : oRange.valueDate,
					value2 : oRange.value2Date
				});
			}
		}
	};

	/**
	 * This function is called after the DateRangeSliderInternal is rendered
	 * 
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.onAfterRendering = function() {

		sap.ui.commons.RangeSlider.prototype.onAfterRendering.apply(this);
		if (this.getShowBubbles()) {
			sap.suite.ui.commons.DateRangeSliderInternal.repositionBubbles(this);
		}
	};

	/**
	 * Function is called when window is resized
	 * 
	 * @param {jQuery.Event}
	 *            oEvent
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.onresize = function(oEvent) {

		sap.ui.commons.RangeSlider.prototype.onresize.apply(this, arguments);
		if (this.getDomRef()) {
			if (this.getShowBubbles()) {
				sap.suite.ui.commons.DateRangeSliderInternal.repositionBubbles(this);
			}
		}
	};

	/**
	 * Sets the stepLabels property
	 * 
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.setStepLabels = function(bStepLabels) {

		this.setProperty("stepLabels", bStepLabels);

		if (bStepLabels === true) {
			var bTextLabels = (this.getLabels() && this.getLabels().length > 0);
			if (!bTextLabels) {
				sap.suite.ui.commons.DateRangeSliderInternal.createRailLabels(this);
				this._bUsingDefaultLabels = true;
			}
		}
	};

	/**
	 * Sets the labels property
	 * 
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.setLabels = function(aLabels) {

		this.setProperty("labels", aLabels);

		var bTextLabels = (this.getLabels() && this.getLabels().length > 0);
		if (this.getStepLabels() && !bTextLabels) {
			sap.suite.ui.commons.DateRangeSliderInternal.createRailLabels(this);
			this._bUsingDefaultLabels = true;
		}
	};

	/**
	 * Sets the smallStepWidth property
	 * 
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.setSmallStepWidth = function(fSmallStepWidth) {

		this.setProperty("smallStepWidth", Math.round(fSmallStepWidth));
	};

	/**
	 * Sets the totalUnits property
	 * 
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.setTotalUnits = function(iTotalUnits) {

		this.setProperty("totalUnits", iTotalUnits);

		if (this._bUsingDefaultLabels) {
			sap.suite.ui.commons.DateRangeSliderInternal.createRailLabels(this);
		}
	};

	/**
	 * Getter to get the max date for the DateRangeSliderInternal.
	 * 
	 * @return {Date} max date
	 * 
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.getMaxDate = function() {

		var dMax = null;

		switch (this._sGranularity) {

		case (DAY):
			dMax = sap.suite.ui.commons.util.DateUtils.incrementDateByIndex(this._dMinDate, this.getMax());
			sap.suite.ui.commons.util.DateUtils.resetDateToEndOfDay(dMax);
			break;

		case (MONTH):
			dMax = sap.suite.ui.commons.util.DateUtils.incrementMonthByIndex(this._dMinDate, this.getMax());
			sap.suite.ui.commons.util.DateUtils.resetDateToEndOfMonth(dMax);
			break;
		}

		return dMax;
	};

	/**
	 * Setter to set the max date for the DateRangeSliderInternal.
	 * 
	 * @param {Date}
	 *            max date
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.setMaxDate = function(dMax) {

		var dMinOld = this.getMinDate();
		var dValueOld = this.getValueDate();
		var dValue2Old = this.getValue2Date();

		var bFireEvent = false;
		var iNewMax = 0, iNewValue = 0, iNewValue2 = 0;

		switch (this._sGranularity) {

		case (DAY):
			iNewMax = sap.suite.ui.commons.util.DateUtils.numberOfDaysApart(dMinOld, dMax);
			iNewValue = sap.suite.ui.commons.util.DateUtils.numberOfDaysApart(dMinOld, dValueOld);
			iNewValue2 = sap.suite.ui.commons.util.DateUtils.numberOfDaysApart(dMinOld, dValue2Old);
			break;

		case (MONTH):
			iNewMax = sap.suite.ui.commons.util.DateUtils.numberOfMonthsApart(dMinOld, dMax);
			iNewValue = sap.suite.ui.commons.util.DateUtils.numberOfMonthsApart(dMinOld, dValueOld);
			iNewValue2 = sap.suite.ui.commons.util.DateUtils.numberOfMonthsApart(dMinOld, dValue2Old);
			break;
		}

		bFireEvent = iNewValue > iNewMax || iNewValue2 > iNewMax;
		iNewValue = iNewValue > iNewMax ? iNewMax : iNewValue;
		iNewValue2 = iNewValue2 > iNewMax ? iNewMax : iNewValue2;

		this.setProperty('min', 0, true);
		this.setProperty('max', iNewMax, true);
		this.setProperty('value', iNewValue, true);
		this.setProperty('value2', iNewValue2, true);

		if (this._bUsingDefaultLabels) {
			sap.suite.ui.commons.DateRangeSliderInternal.createRailLabels(this);
		}

		if (bFireEvent) {
			var oRange = this.getDateRange();

			this.fireChange({
				value : oRange.valueDate,
				value2 : oRange.value2Date
			});
		}
	};

	/**
	 * Getter to get the min date for the DateRangeSliderInternal.
	 * 
	 * @return {Date} min date
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.getMinDate = function() {

		var dMin = new Date(this._dMinDate);

		switch (this._sGranularity) {

		case (DAY):
			sap.suite.ui.commons.util.DateUtils.resetDateToStartOfDay(dMin);
			break;

		case (MONTH):
			sap.suite.ui.commons.util.DateUtils.resetDateToStartOfMonth(dMin);
			break;
		}

		return dMin;
	};

	/**
	 * Setter to set the min date for the DateRangeSliderInternal.
	 * 
	 * @param {Date}
	 *            min date
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.setMinDate = function(dMin) {

		var dMaxOld = this.getMaxDate();
		var dValueOld = this.getValueDate();
		var dValue2Old = this.getValue2Date();

		this._dMinDate = new Date(dMin);

		var bFireEvent = false;
		var iNewMax = 0, iNewValue = 0, iNewValue2 = 0;

		switch (this._sGranularity) {

		case (DAY):
			iNewMax = sap.suite.ui.commons.util.DateUtils.numberOfDaysApart(dMin, dMaxOld);
			iNewValue = sap.suite.ui.commons.util.DateUtils.numberOfDaysApart(dMin, dValueOld);
			iNewValue2 = sap.suite.ui.commons.util.DateUtils.numberOfDaysApart(dMin, dValue2Old);
			break;

		case (MONTH):
			iNewMax = sap.suite.ui.commons.util.DateUtils.numberOfMonthsApart(dMin, dMaxOld);
			iNewValue = sap.suite.ui.commons.util.DateUtils.numberOfMonthsApart(dMin, dValueOld);
			iNewValue2 = sap.suite.ui.commons.util.DateUtils.numberOfMonthsApart(dMin, dValue2Old);
			break;
		}

		bFireEvent = iNewValue < 0 || iNewValue2 < 0;
		iNewValue = iNewValue < 0 ? 0 : iNewValue;
		iNewValue2 = iNewValue2 < 0 ? 0 : iNewValue2;

		this.setProperty('min', 0, true);
		this.setProperty('max', iNewMax, true);
		this.setProperty('value', iNewValue, true);
		this.setProperty('value2', iNewValue2, true);

		if (this._bUsingDefaultLabels) {
			sap.suite.ui.commons.DateRangeSliderInternal.createRailLabels(this);
		}

		if (bFireEvent) {
			var oRange = this.getDateRange();

			this.fireChange({
				value : oRange.valueDate,
				value2 : oRange.value2Date
			});
		}
	};

	/**
	 * Getter to get the value2 date for the DateRangeSliderInternal.
	 * 
	 * @return {Date} value2 date
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.getValue2Date = function() {

		var dValue2 = null;

		switch (this._sGranularity) {

		case (DAY):
			dValue2 = sap.suite.ui.commons.util.DateUtils.incrementDateByIndex(this._dMinDate, this.getValue2());
			sap.suite.ui.commons.util.DateUtils.resetDateToEndOfDay(dValue2);
			break;

		case (MONTH):
			dValue2 = sap.suite.ui.commons.util.DateUtils.incrementMonthByIndex(this._dMinDate, this.getValue2());
			sap.suite.ui.commons.util.DateUtils.resetDateToEndOfMonth(dValue2);
			break;
		}

		return dValue2;
	};

	/**
	 * Setter to set the value2 date for the DateRangeSliderInternal.
	 * 
	 * @param {Date}
	 *            dValue2 date
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.setValue2Date = function(dValue2) {

		var iNewValue2 = 0;

		switch (this._sGranularity) {

		case (DAY):
			iNewValue2 = sap.suite.ui.commons.util.DateUtils.numberOfDaysApart(this._dMinDate, dValue2);
			break;

		case (MONTH):
			iNewValue2 = sap.suite.ui.commons.util.DateUtils.numberOfMonthsApart(this._dMinDate, dValue2);
			break;
		}

		this.setProperty('value2', iNewValue2, true);

		var oRange = this.getDateRange();

		this.fireChange({
			value : oRange.valueDate,
			value2 : oRange.value2Date
		});
	};

	/**
	 * Getter to get the value date for the DateRangeSliderInternal.
	 * 
	 * @return {Date} value date
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.getValueDate = function() {

		var dValue = null;

		switch (this._sGranularity) {

		case (DAY):
			dValue = sap.suite.ui.commons.util.DateUtils.incrementDateByIndex(this._dMinDate, this.getValue());
			sap.suite.ui.commons.util.DateUtils.resetDateToStartOfDay(dValue);
			break;

		case (MONTH):
			dValue = sap.suite.ui.commons.util.DateUtils.incrementMonthByIndex(this._dMinDate, this.getValue());
			sap.suite.ui.commons.util.DateUtils.resetDateToStartOfMonth(dValue);
			break;
		}

		return dValue;
	};

	/**
	 * Setter to set the value date for the DateRangeSliderInternal.
	 * 
	 * @param {Date}
	 *            dValue date
	 * @private
	 */

	sap.suite.ui.commons.DateRangeSliderInternal.prototype.setValueDate = function(dValue) {

		var iNewValue = 0;

		switch (this._sGranularity) {

		case (DAY):
			iNewValue = sap.suite.ui.commons.util.DateUtils.numberOfDaysApart(this._dMinDate, dValue);
			break;

		case (MONTH):
			iNewValue = sap.suite.ui.commons.util.DateUtils.numberOfMonthsApart(this._dMinDate, dValue);
			break;
		}

		this.setProperty('value', iNewValue, true);

		var oRange = this.getDateRange();

		this.fireChange({
			value : oRange.valueDate,
			value2 : oRange.value2Date
		});
	};

	/**
	 * Setter to set the Granularity to DAY
	 * 
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.setDayGranularity = function() {

		var dMinDate = this.getMinDate();
		var dValueDate = this.getValueDate();
		var dValue2Date = this.getValue2Date();
		var dMaxDate = this.getMaxDate();

		var iNoOfDaysValueDateApartFromMinDate = sap.suite.ui.commons.util.DateUtils.numberOfDaysApart(dMinDate, dValueDate);
		var iNoOfDaysValue2DateApartFromMinDate = sap.suite.ui.commons.util.DateUtils.numberOfDaysApart(dMinDate, dValue2Date);
		var iNoOfDaysMaxDateApartFromMinDate = sap.suite.ui.commons.util.DateUtils.numberOfDaysApart(dMinDate, dMaxDate);

		this.setProperty('min', 0, true);
		this.setProperty('value', iNoOfDaysValueDateApartFromMinDate, true);
		this.setProperty('value2', iNoOfDaysValue2DateApartFromMinDate, true);
		this.setProperty('max', iNoOfDaysMaxDateApartFromMinDate, true);

		this._sGranularity = DAY;

		if (this._bUsingDefaultLabels) {
			sap.suite.ui.commons.DateRangeSliderInternal.createRailLabels(this);
		}

		var oRange = this.getDateRange();

		this.fireChange({
			value : oRange.valueDate,
			value2 : oRange.value2Date
		});
	};

	/**
	 * Setter to set the Granularity to MONTH
	 * 
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.setMonthGranularity = function() {

		var dMinDate = this.getMinDate();
		var dValueDate = this.getValueDate();
		var dValue2Date = this.getValue2Date();
		var dMaxDate = this.getMaxDate();

		var iNoOfMonthsValueDateApartFromMinDate = sap.suite.ui.commons.util.DateUtils.numberOfMonthsApart(dMinDate, dValueDate);
		var iNoOfMonthsValue2DateApartFromMinDate = sap.suite.ui.commons.util.DateUtils.numberOfMonthsApart(dMinDate, dValue2Date);
		var iNoOfMonthsMaxDateApartFromMinDate = sap.suite.ui.commons.util.DateUtils.numberOfMonthsApart(dMinDate, dMaxDate);

		this.setProperty('min', 0, true);
		this.setProperty('value', iNoOfMonthsValueDateApartFromMinDate, true);
		this.setProperty('value2', iNoOfMonthsValue2DateApartFromMinDate, true);
		this.setProperty('max', iNoOfMonthsMaxDateApartFromMinDate, true);

		this._sGranularity = MONTH;

		sap.suite.ui.commons.util.DateUtils.resetDateToStartOfMonth(this._dMinDate);

		if (this._bUsingDefaultLabels) {
			sap.suite.ui.commons.DateRangeSliderInternal.createRailLabels(this);
		}

		var oRange = this.getDateRange();

		this.fireChange({
			value : oRange.valueDate,
			value2 : oRange.value2Date
		});
	};

	/**
	 * Function is called when DateRangeSliderInternal grip or grip2 is moved, over-write base RangeSlider function based on pinGrip and pinGrip2
	 * 
	 * @param {DOM.Event}
	 *            oEvent
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.handleMove = function(oEvent) {

		if ((this.oMovingGrip === this.oGrip2 && !this.getPinGrip2()) || (this.oMovingGrip === this.oGrip && !this.getPinGrip())) {

			sap.ui.commons.RangeSlider.prototype.handleMove.apply(this, [ oEvent ]);
		}
	};

	/**
	 * Function is called when End key pressed, over-write base RangeSlider function based on pinGrip and pinGrip2
	 * 
	 * @param {jQuery.Event}
	 *            oEvent
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.onsapend = function(oEvent) {

		if ((this.oMovingGrip === this.oGrip2 && !this.getPinGrip2()) || (this.oMovingGrip === this.oGrip && !this.getPinGrip())) {

			sap.ui.commons.RangeSlider.prototype.onsapend.apply(this, [ oEvent ]);
		}

	};

	/**
	 * Function is called when Home key pressed, over-write base RangeSlider function based on pinGrip and pinGrip2
	 * 
	 * @param {jQuery.Event}
	 *            oEvent
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.onsaphome = function(oEvent) {

		if ((this.oMovingGrip === this.oGrip2 && !this.getPinGrip2()) || (this.oMovingGrip === this.oGrip && !this.getPinGrip())) {

			sap.ui.commons.RangeSlider.prototype.onsaphome.apply(this, [ oEvent ]);
		}

	};

	/**
	 * Function is called when Ctrl+right key pressed, over-write base RangeSlider function based on pinGrip and pinGrip2
	 * 
	 * @param {jQuery.Event}
	 *            oEvent
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.onsaprightmodifiers = function(oEvent) {

		if ((this.oMovingGrip === this.oGrip2 && !this.getPinGrip2()) || (this.oMovingGrip === this.oGrip && !this.getPinGrip())) {

			sap.ui.commons.RangeSlider.prototype.onsaprightmodifiers.apply(this, [ oEvent ]);
		}

	};

	/**
	 * Function is called when Ctrl+left key pressed, over-write base RangeSlider function based on pinGrip and pinGrip2
	 * 
	 * @param {jQuery.Event}
	 *            oEvent
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.onsapleftmodifiers = function(oEvent) {

		if ((this.oMovingGrip === this.oGrip2 && !this.getPinGrip2()) || (this.oMovingGrip === this.oGrip && !this.getPinGrip())) {

			sap.ui.commons.RangeSlider.prototype.onsapleftmodifiers.apply(this, [ oEvent ]);
		}

	};

	/**
	 * Function is called when right key pressed, over-write base RangeSlider function based on pinGrip and pinGrip2
	 * 
	 * @param {jQuery.Event}
	 *            oEvent
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.onsapright = function(oEvent) {

		if ((this.oMovingGrip === this.oGrip2 && !this.getPinGrip2()) || (this.oMovingGrip === this.oGrip && !this.getPinGrip())) {

			sap.ui.commons.RangeSlider.prototype.onsapright.apply(this, [ oEvent ]);
		}

	};

	/**
	 * Function is called when left key pressed, over-write base RangeSlider function based on pinGrip and pinGrip2
	 * 
	 * @param {jQuery.Event}
	 *            oEvent
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.onsapleft = function(oEvent) {

		if ((this.oMovingGrip === this.oGrip2 && !this.getPinGrip2()) || (this.oMovingGrip === this.oGrip && !this.getPinGrip())) {

			sap.ui.commons.RangeSlider.prototype.onsapleft.apply(this, [ oEvent ]);
		}

	};

	/**
	 * Function is called when DateRangeSliderInternal is clicked. over-write base Slider function based on pinGrip and pinGrip2
	 * 
	 * @param {jQuery.Event}
	 *            oEvent
	 * @private
	 */
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.onclick = function(oEvent) {

		var oMovingGrip = this.oMovingGrip;

		if (this.getEditable() && this.getEnabled()) {

			var fMultiplicator;

			// Check for ID where the behavior depends on the clicked area.
			var sMyTargetId = oEvent.target.getAttribute('ID');

			var fNewValue = this.getValue();
			var iNewPos = this.getOffsetLeft(this.oGrip) + this.iShiftGrip;

			switch (sMyTargetId) {
			case (this.oBar.id):
			case (this.oHiLi.id):
				// Click on slide bar
				if (this.getVertical()) {
					fMultiplicator = this.getBarWidth() - this.getOffsetX(oEvent);
				} else {
					fMultiplicator = this.getOffsetX(oEvent);
				}
				if (sMyTargetId === this.oHiLi.id) {
					if (this.getVertical()) {
						fMultiplicator -= this.getOffsetLeft(this.oHiLi);
					} else {
						fMultiplicator += this.getOffsetLeft(this.oHiLi);
					}
				}
				fNewValue = this.convertRtlValue(this.getMin() + (((this.getMax() - this.getMin()) / this.getBarWidth()) * fMultiplicator));
				iNewPos = this.getOffsetX(oEvent);
				if (sMyTargetId === this.oHiLi.id) {
					iNewPos += this.getOffsetLeft(this.oHiLi);
				}
				if (this.oStartTarget && this.targetIsGrip(this.oStartTarget.id)) {
					oMovingGrip = this.oStartTarget;
				} else if (this.targetIsGrip(sMyTargetId)) {
					oMovingGrip = oEvent.target;
				} else {
					oMovingGrip = this.getNearestGrip(iNewPos);
				}
				break;
			case (this.getId() + '-left'):
				// Click on left end
				iNewPos = 0;
				if (this.getVertical()) {
					fNewValue = this.getMax();
					oMovingGrip = this.getRightGrip();
				} else {
					fNewValue = this.getMin();
					oMovingGrip = this.getLeftGrip();
				}
				break;
			case (this.getId() + '-right'):
				// Click on right end
				iNewPos = this.getBarWidth();
				if (!this.getVertical()) {
					fNewValue = this.getMax();
					oMovingGrip = this.getRightGrip();
				} else {
					fNewValue = this.getMin();
					oMovingGrip = this.getLeftGrip();
				}
				break;
			default:
				// If target is grip return
				// Not implemented as case because RangeSlider has multiple grips, for which cases cannot be inserted afterwards
				if (this.targetIsGrip(sMyTargetId)) {
					return;
				}
				// Check whether tick is clicked
				var iTickPos = sMyTargetId.search('-tick');
				if (iTickPos >= 0) {
					var iTickNum = parseInt(sMyTargetId.slice(this.getId().length + 5), 10);
					iNewPos = this.fTickDist * iTickNum;
					fNewValue = this.convertRtlValue(this.getMin() + (((this.getMax() - this.getMin()) / this.getTotalUnits()) * iTickNum));
					if (this.oStartTarget && this.targetIsGrip(this.oStartTarget.id)) {
						oMovingGrip = this.oStartTarget;
					} else if (this.targetIsGrip(sMyTargetId)) {
						oMovingGrip = oEvent.target;
					} else {
						oMovingGrip = this.getNearestGrip(iNewPos);
					}
					break;
				}

				// Outer DIV clicked -> ID given by caller. This is the case if all other DIVs are smaller,
				// or if tick text is clicked
				var iOffsetBar = jQuery(this.oBar).offset();
				var iOffsetMe = jQuery(oEvent.target).offset();
				if (this.getVertical()) {
					iNewPos = this.getOffsetX(oEvent) - (iOffsetBar.top - iOffsetMe.top);
				} else {
					iNewPos = this.getOffsetX(oEvent) - (iOffsetBar.left - iOffsetMe.left);
				}
				if (iNewPos <= 0) {
					iNewPos = 0;
					if (this.getVertical()) {
						fNewValue = this.getMax();
					} else {
						fNewValue = this.getMin();
					}
				} else {
					if (iNewPos >= this.getBarWidth()) {
						iNewPos = this.getBarWidth();
						if (this.getVertical()) {
							fNewValue = this.getMin();
						} else {
							fNewValue = this.getMax();
						}
					} else {
						if (this.getVertical()) {
							fMultiplicator = this.getBarWidth() - iNewPos;
						} else {
							fMultiplicator = iNewPos;
						}
						fNewValue = this.getMin() + (((this.getMax() - this.getMin()) / this.getBarWidth()) * fMultiplicator);
					}
				}
				fNewValue = this.convertRtlValue(fNewValue);
				if (this.oStartTarget && this.targetIsGrip(this.oStartTarget.id)) {
					oMovingGrip = this.oStartTarget;
				} else if (this.targetIsGrip(sMyTargetId)) {
					oMovingGrip = oEvent.target;
				} else {
					oMovingGrip = this.getNearestGrip(iNewPos);
				}
				break;
			}

			if ((oMovingGrip === this.oGrip2 && this.getPinGrip2()) || (oMovingGrip === this.oGrip && this.getPinGrip())) {
				return;
			}

			var validation = this.validateNewPosition(fNewValue, iNewPos, oMovingGrip, (this.getValueForGrip(oMovingGrip) > fNewValue));
			fNewValue = validation.fNewValue;
			iNewPos = validation.iNewPos;

			this.changeGrip(fNewValue, iNewPos, oMovingGrip);
			this.handleFireChange();

		}

		// Set focus to grip
		oMovingGrip.focus();
		this.oMovingGrip = oMovingGrip;
		this.oStartTarget = null;

	};

	sap.suite.ui.commons.DateRangeSliderInternal.prototype.onkeydown = function(oEvent) {
			this.oMovingGrip.setAttribute('aria-busy', 'true');
	};
	
	sap.suite.ui.commons.DateRangeSliderInternal.prototype.onkeyup = function(oEvent) {
			this.oMovingGrip.setAttribute('aria-busy', 'false');
	};
}());
