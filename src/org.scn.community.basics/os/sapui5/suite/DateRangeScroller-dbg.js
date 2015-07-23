/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.DateRangeScroller.
jQuery.sap.declare("sap.suite.ui.commons.DateRangeScroller");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new DateRangeScroller.
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

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The DateRangeScroller provides a method to scroll through a series of time periods, each of which is represented by a starting date and an ending date, known as the date range. The user may scroll to the previous or next date range. Several predefined ranges are supported such as day, week, work week, month, and year.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.DateRangeScroller
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.DateRangeScroller", { metadata : {

	library : "sap.suite.ui.commons",
	associations : {
		"ariaDescribedBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"}, 
		"ariaLabelledBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}
	},
	events : {
		"change" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.DateRangeScroller with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.DateRangeScroller.extend
 * @function
 */

sap.suite.ui.commons.DateRangeScroller.M_EVENTS = {'change':'change'};


/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.suite.ui.commons.DateRangeScroller#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeScroller#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.suite.ui.commons.DateRangeScroller#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.DateRangeScroller#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.suite.ui.commons.DateRangeScroller#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeScroller#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.suite.ui.commons.DateRangeScroller#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.DateRangeScroller#removeAllAriaLabelledBy
 * @function
 */

	
/**
 * This event is fired whenever the date range is changed.
 *
 * @name sap.suite.ui.commons.DateRangeScroller#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {any} oControlEvent.getParameters.dateRange Object containing startDate and endDate Date properties signifying the start and ending dates of the currently selected range.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.suite.ui.commons.DateRangeScroller</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.DateRangeScroller</code>.<br/> itself. 
 *  
 * This event is fired whenever the date range is changed.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DateRangeScroller</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeScroller#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.suite.ui.commons.DateRangeScroller</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DateRangeScroller#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'dateRange' of type <code>any</code> Object containing startDate and endDate Date properties signifying the start and ending dates of the currently selected range.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.DateRangeScroller#fireChange
 * @function
 */

// Start of sap/suite/ui/commons/DateRangeScroller.js
jQuery.sap.require("sap.ui.commons.Label");
jQuery.sap.require("sap.ui.core.format.DateFormat");
jQuery.sap.require("sap.suite.ui.commons.util.DateUtils");

(function() {

    /* Internal values for date range types. */
    var DAY = "d";
    var WEEK = "w";
    var MONTH = "m";
    var YEAR = "y";
    var CUSTOM = "c";

    var iWeekStepSize = 7;


    /**
     * Format start and end date according to default formatting option and current date range
     * 
     * @param {String}
     *                sRangeType defines the date range type for formatting
     * @param {Object}
     *                oDateRange object contains start and end date for current date range
     * @param {Date}
     *                oDateRange.startDate The start date.
     * @param {Date}
     *                oDateRange.endDate The end date.
     * @param {sap.ui.core.format.DateFormat}
     *                oDateFormat The date format to use for formatting
     * @returns Formatted date range as string.
     * @private
     */
    sap.suite.ui.commons.DateRangeScroller.getFormattedDate = function(sRangeType, oDateRange, oDateFormat) {

        var oDateFormatter;
        var sFormattedDateRange;

        switch (sRangeType) {
        case (DAY):
            oDateFormatter = oDateFormat || sap.ui.core.format.DateFormat.getDateInstance({
                pattern : "MMMM d, YYYY"
            });
            sFormattedDateRange = oDateFormatter.format(oDateRange.startDate, false);
            break;
        case (WEEK):
        case (CUSTOM):
            var oStartDateFormat = oDateFormat || sap.ui.core.format.DateFormat.getDateInstance({
                pattern : 'MMMM d'
            });
            var oEndDateFormat = oDateFormat || sap.ui.core.format.DateFormat.getDateInstance({
                pattern : 'MMMM d, YYYY'
            });
            if (oDateRange.startDate.getYear() !== oDateRange.endDate.getYear()) {
                oStartDateFormat = oEndDateFormat;
            } else if (oDateRange.startDate.getMonth() === oDateRange.endDate.getMonth()) {
                oEndDateFormat = oDateFormat || sap.ui.core.format.DateFormat.getDateInstance({
                    pattern : 'd, YYYY'
                });
            }
            var sStartDate = oStartDateFormat.format(oDateRange.startDate, false);
            var sEndDate = oEndDateFormat.format(oDateRange.endDate, false);
            sFormattedDateRange = sStartDate + " - " + sEndDate;
            break;
        case (MONTH):
            oDateFormatter = oDateFormat || sap.ui.core.format.DateFormat.getDateInstance({
                pattern : 'MMMM YYYY'
            });
            sFormattedDateRange = oDateFormatter.format(oDateRange.startDate, false);
            break;
        case (YEAR):
            oDateFormatter = oDateFormat || sap.ui.core.format.DateFormat.getDateInstance({
                pattern : 'YYYY'
            });
            sFormattedDateRange = oDateFormatter.format(oDateRange.startDate, false);
            break;
        default:
            sFormattedDateRange = oDateRange.startDate + " - " + oDateRange.endDate;
            break;
        }

        return sFormattedDateRange;
    };

    /**
     * Update the date range value in the label control and rerender.
     * 
     * @private
     */
    sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue = function(sRangeType, oDateRange, oRangeLabel, oDateFormat) {

        oRangeLabel.setText(sap.suite.ui.commons.DateRangeScroller.getFormattedDate(sRangeType, oDateRange, oDateFormat));
        if (oRangeLabel.isActive()) { // Don't rerender if the control is not placed in the DOM
            oRangeLabel.rerender();
        }
    };

    /**
     * Add <code>iStep</code> days to the given date. A negative step value moves the date backward in time.
     * 
     * @private
     */
    sap.suite.ui.commons.DateRangeScroller.adjustDateByStep = function(dDate, iStep) {

        if (iStep === 0) {
            return;
        }
        dDate.setDate(dDate.getDate() + iStep);
    };

    /**
     * Adjust the start/end dates by the given step.
     * 
     * @private
     */
    sap.suite.ui.commons.DateRangeScroller.adjustRangeByStep = function(oRange, iStep) {

        var dStartDate = oRange.startDate;
        var dEndDate = oRange.endDate;
        dStartDate.setDate(dStartDate.getDate() + iStep);
        dEndDate.setDate(dEndDate.getDate() + iStep);
    };

    /**
     * Test if the given duration is a positive, non-infinite integer. The duration must be less than the upper limit if a limit is specified. A duration of undefined returns true.
     * 
     * @private
     */
    sap.suite.ui.commons.DateRangeScroller.isValidDuration = function(iDuration, iUpperLimit) {

        var bValidDuration = false;
        
        if (iDuration === undefined) {
            bValidDuration = true;
        } else if (!isNaN(iDuration) && isFinite(iDuration)) {

            if ((iDuration >= 1) && (!iUpperLimit || iDuration <= iUpperLimit)) {
                bValidDuration = true;
            }
        }
        
        if(!bValidDuration){
            jQuery.sap.log.error("DateRangeScroller duration value ='" + iDuration + "' is invalid.");
        }
       
        return bValidDuration;
    };

    /**
     * Initialize the control.
     * 
     * @private
     */
    sap.suite.ui.commons.DateRangeScroller.prototype.init = function() {

        this._sRangeType = DAY;
        this._iCustomDuration = 1;
        this._oDateFormat = null;

        this._oDateRangeLabel = new sap.ui.commons.Label(this.getId() + "-dateRangeLabel", {
            labelFor : this.getId()
        });
        this._oDateRangeLabel.addStyleClass("sapSuiteUiCommonsDateRangeScrollerLabel");

        var dStart = new Date();
        sap.suite.ui.commons.util.DateUtils.resetDateToStartOfDay(dStart);
        var dEnd = new Date();
        sap.suite.ui.commons.util.DateUtils.resetDateToEndOfDay(dEnd);
        this._oDateRange = {
            startDate : dStart,
            endDate : dEnd
        };
        sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(DAY, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
    };

    /**
     * Set a date range equal to a single day, starting with the given initial date.
     * 
     * @param {Date}
     *                dInitialDate The initial date.
     * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
     * @public
     */
    sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeDay = function(dInitialDate) {

        if (sap.suite.ui.commons.util.DateUtils.isValidDate(dInitialDate)) {
            this._oDateRange.startDate.setTime(dInitialDate.getTime());
            this._oDateRange.endDate.setTime(dInitialDate.getTime());
            sap.suite.ui.commons.util.DateUtils.resetDateToStartOfDay(this._oDateRange.startDate);
            sap.suite.ui.commons.util.DateUtils.resetDateToEndOfDay(this._oDateRange.endDate);
            sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(DAY, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
            this._sRangeType = DAY;
        }
        return this;
    };

    /**
     * Set a date range that steps one week at a time. The starting date is set according to the first day of the week (default is Monday) and the initial date. For example, if the
     * first day of the week is set to Tuesday and the initial date is Wednesday, January 9, 2013, then the starting date will be Tuesday, January 8, 2013.
     * 
     * The last day of the range is calculated by adding (duration - 1) days to the starting date.
     * 
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
    sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeWeek = function(dInitialDate, oSettings) {

        var iDuration = iWeekStepSize;
        var iFirstDayOfWeek = 1;
        if (oSettings) {
            iDuration = oSettings.duration;
            iFirstDayOfWeek = oSettings.firstDayOfWeek;
        }

        if (iDuration === undefined) {
            iDuration = iWeekStepSize;
        } else if (iDuration && !isNaN(iDuration)) {
            iDuration = parseInt(iDuration, 10);
        }

        if (iFirstDayOfWeek === undefined) {
            iFirstDayOfWeek = 1;
        } else if (iFirstDayOfWeek && !isNaN(iFirstDayOfWeek)) {
            iFirstDayOfWeek = parseInt(iFirstDayOfWeek, 10);
        }

        // If first day of week is specified (defined), but invalid, do not proceed even if the passed start date is valid.
        if ((iFirstDayOfWeek === null) || iFirstDayOfWeek === "" || isNaN(iFirstDayOfWeek) || iFirstDayOfWeek < 0 || iFirstDayOfWeek > 6) {

            jQuery.sap.log.error("DateRangeScroller oSettings.firstDayOfWeek value ='" + oSettings.firstDayOfWeek + "' is invalid.");

        } else if (sap.suite.ui.commons.util.DateUtils.isValidDate(dInitialDate) && sap.suite.ui.commons.DateRangeScroller.isValidDuration(iDuration, iWeekStepSize)) {
            this._oDateRange.startDate.setTime(dInitialDate.getTime());
            this._oDateRange.endDate.setTime(dInitialDate.getTime());

            var duration = iDuration;
            var firstDay = iFirstDayOfWeek;
            sap.suite.ui.commons.util.DateUtils.resetDateToStartOfWeek(this._oDateRange.startDate, iFirstDayOfWeek);
            sap.suite.ui.commons.util.DateUtils.resetDateToEndOfWeek(this._oDateRange.endDate, {iDuration: duration, iFirstDayOfWeek: firstDay});
            sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(WEEK, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);

            this._sRangeType = WEEK;
        }
        return this;
    };

    /**
     * Set a date range that increments/decrements one calendar month at a time. The month date range begins on the first day of the month (beginning of the day) and ends on the
     * last day of the month (end of the day).
     * 
     * @param {Date}
     *                dInitialDate Any date that falls within the desired month.
     * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
     * @public
     */
    sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeMonth = function(dInitialDate) {

        if (sap.suite.ui.commons.util.DateUtils.isValidDate(dInitialDate)) {
            this._oDateRange.startDate.setTime(dInitialDate.getTime());
            this._oDateRange.endDate.setTime(dInitialDate.getTime());
            sap.suite.ui.commons.util.DateUtils.resetDateToStartOfMonth(this._oDateRange.startDate);
            sap.suite.ui.commons.util.DateUtils.resetDateToEndOfMonth(this._oDateRange.endDate);
            sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(MONTH, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
            this._sRangeType = MONTH;
        }
        return this;
    };

    /**
     * Set a date range that increments/decrements one calendar year at a time. The year date range begins on the first day of the year (beginning of the day) and ends on the last
     * day of the year (end of the day).
     * 
     * @param {Date}
     *                dInitialDate Any date that falls within the desired year.
     * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
     * @public
     */
    sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeYear = function(dInitialDate) {

        if (sap.suite.ui.commons.util.DateUtils.isValidDate(dInitialDate)) {
            this._oDateRange.startDate.setTime(dInitialDate.getTime());
            this._oDateRange.endDate.setTime(dInitialDate.getTime());
            sap.suite.ui.commons.util.DateUtils.resetDateToStartOfYear(this._oDateRange.startDate);
            sap.suite.ui.commons.util.DateUtils.resetDateToEndOfYear(this._oDateRange.endDate);
            sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(YEAR, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
            this._sRangeType = YEAR;
        }
        return this;
    };

    /**
     * Set a custom date range beginning with the specified start date that increments/decrements <code>iDuration</code> days at a time.
     * 
     * @param dInitialDate
     *                The initial date for the custom range.
     * @param [iDuration=current
     *                custom duration] The number of days in the custom range, including the start date.
     * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
     * @public
     */
    sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeCustom = function(dInitialDate, iDuration) {

        if (iDuration === undefined) {
            iDuration = this._iCustomDuration;
        } else if (iDuration && !isNaN(iDuration)) {
            iDuration = parseInt(iDuration, 10);
        }

        if (sap.suite.ui.commons.util.DateUtils.isValidDate(dInitialDate) && sap.suite.ui.commons.DateRangeScroller.isValidDuration(iDuration)) {

            this._oDateRange.startDate.setTime(dInitialDate.getTime());
            this._oDateRange.endDate.setTime(dInitialDate.getTime());
            sap.suite.ui.commons.util.DateUtils.resetDateToStartOfDay(this._oDateRange.startDate);

            sap.suite.ui.commons.DateRangeScroller.adjustDateByStep(this._oDateRange.endDate, iDuration - 1);
            sap.suite.ui.commons.util.DateUtils.resetDateToEndOfDay(this._oDateRange.endDate);
            sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(CUSTOM, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
            this._sRangeType = CUSTOM;
            this._iCustomDuration = iDuration;
        }
        return this;
    };

    /**
     * Increment the date range by a time period increment according to the the date range type and fire the dateChange event.
     * 
     * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
     * @public
     */
    sap.suite.ui.commons.DateRangeScroller.prototype.incrementDateRange = function() {

        switch (this._sRangeType) {
        case (DAY):
            sap.suite.ui.commons.DateRangeScroller.adjustRangeByStep(this._oDateRange, 1);
            sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(DAY, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
            break;
        case (WEEK):
            sap.suite.ui.commons.DateRangeScroller.adjustRangeByStep(this._oDateRange, iWeekStepSize);
            sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(WEEK, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
            break;
        case (CUSTOM):
            sap.suite.ui.commons.DateRangeScroller.adjustRangeByStep(this._oDateRange, this._iCustomDuration);
            sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(CUSTOM, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
            break;
        case (MONTH):
            var iStart = this._oDateRange.startDate.getMonth() + 1;
            this._oDateRange.startDate.setMonth(iStart);
            this._oDateRange.endDate.setTime(this._oDateRange.startDate.getTime());
            sap.suite.ui.commons.util.DateUtils.resetDateToEndOfMonth(this._oDateRange.endDate);
            sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(MONTH, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
            break;
        case (YEAR):
            iStart = this._oDateRange.startDate.getFullYear() + 1;
            this._oDateRange.startDate.setFullYear(iStart);
            this._oDateRange.endDate.setTime(this._oDateRange.startDate.getTime());
            sap.suite.ui.commons.util.DateUtils.resetDateToEndOfYear(this._oDateRange.endDate);
            sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(YEAR, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
            break;
        }

        var oCopyDateRange = this.getDateRange();
        this.fireChange({
            dateRange : oCopyDateRange
        });
        return this;
    };

    /**
     * Decrement the date range by a time period increment according to the the date range type and fire the dateChange event.
     * 
     * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining
     * @public
     */
    sap.suite.ui.commons.DateRangeScroller.prototype.decrementDateRange = function() {

        switch (this._sRangeType) {
        case (DAY):
            sap.suite.ui.commons.DateRangeScroller.adjustRangeByStep(this._oDateRange, -1);
            sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(DAY, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
            break;
        case (WEEK):
            sap.suite.ui.commons.DateRangeScroller.adjustRangeByStep(this._oDateRange, -iWeekStepSize);
            sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(WEEK, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
            break;
        case (CUSTOM):
            sap.suite.ui.commons.DateRangeScroller.adjustRangeByStep(this._oDateRange, -this._iCustomDuration); // Here the step amount equals the range duration
            sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(CUSTOM, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
            break;
        case (MONTH):
            var iStart = this._oDateRange.startDate.getMonth() - 1;
            this._oDateRange.startDate.setMonth(iStart);
            this._oDateRange.endDate.setTime(this._oDateRange.startDate.getTime());
            sap.suite.ui.commons.util.DateUtils.resetDateToEndOfMonth(this._oDateRange.endDate);
            sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(MONTH, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
            break;
        case (YEAR):
            iStart = this._oDateRange.startDate.getFullYear() - 1;
            this._oDateRange.startDate.setFullYear(iStart);
            this._oDateRange.endDate.setTime(this._oDateRange.startDate.getTime());
            sap.suite.ui.commons.util.DateUtils.resetDateToEndOfYear(this._oDateRange.endDate);
            sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(YEAR, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
            break;
        }
        var oCopyDateRange = this.getDateRange();
        this.fireChange({
            dateRange : oCopyDateRange
        });
        return this;
    };

    /**
     * Returns an object containing startDate and endDate set to the current start and end Date objects.
     * 
     * @returns The date range containing start and end Date.
     * @public
     */
    sap.suite.ui.commons.DateRangeScroller.prototype.getDateRange = function() {

        var oCopyDateRange = {
            startDate : new Date(this._oDateRange.startDate.getTime()),
            endDate : new Date(this._oDateRange.endDate.getTime())
        };
        return oCopyDateRange;
    };

    /**
     * Setter for dateFormat which is used for formating the dates If passed object is null or is of incorrect type, control's default formatting will be used.
     * 
     * @param oDateFormat
     *                {sap.ui.core.format.DateFormat}
     * @public
     */
    sap.suite.ui.commons.DateRangeScroller.prototype.setDateFormat = function(oDateFormat) {

        if (oDateFormat && oDateFormat instanceof sap.ui.core.format.DateFormat) {
            this._oDateFormat = oDateFormat;
        } else {
            this._oDateFormat = null;
        }
        sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(this._sRangeType, this._oDateRange, this._oDateRangeLabel, this._oDateFormat);
    };

    /**
     * Control click handler to trigger increment or decrement of the date range.
     * 
     * @param oEvent
     * @private
     */
    sap.suite.ui.commons.DateRangeScroller.prototype.onclick = function(oEvent) {

        switch (oEvent.target) {
        case jQuery.sap.byId(this.getId() + '-decrementScrollButton')[0]:
            this.decrementDateRange();
            break;
        case jQuery.sap.byId(this.getId() + '-incrementScrollButton')[0]:
            this.incrementDateRange();
            break;
        }

        jQuery.sap.byId(this.getId() + "-labelarea").focus();
    };

    /**
     * Function is called when right arrow is pressed
     * 
     * @param {jQuery.Event}
     *                oEvent
     * @private
     */
    sap.suite.ui.commons.DateRangeScroller.prototype.onsapright = function(oEvent) {

        this.incrementDateRange();

        oEvent.preventDefault();
        oEvent.stopPropagation();
    };

    /**
     * Function is called when left arrow is pressed
     * 
     * @param {jQuery.Event}
     *                oEvent
     * @private
     */
    sap.suite.ui.commons.DateRangeScroller.prototype.onsapleft = function(oEvent) {

        this.decrementDateRange();

        oEvent.preventDefault();
        oEvent.stopPropagation();
    };

    /**
     * Function is called when up arrow is pressed
     * 
     * @param {jQuery.Event}
     *                oEvent
     * @private
     */
    sap.suite.ui.commons.DateRangeScroller.prototype.onsapup = function(oEvent) {

        this.incrementDateRange();

        oEvent.preventDefault();
        oEvent.stopPropagation();
    };

    /**
     * Function is called when DOWN arrow is pressed
     * 
     * @param {jQuery.Event}
     *                oEvent
     * @private
     */
    sap.suite.ui.commons.DateRangeScroller.prototype.onsapdown = function(oEvent) {

        this.decrementDateRange();

        oEvent.preventDefault();
        oEvent.stopPropagation();
    };

}());
