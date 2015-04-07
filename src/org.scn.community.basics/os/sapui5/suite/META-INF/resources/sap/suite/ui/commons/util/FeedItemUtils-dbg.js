/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.util.FeedItemUtils");

jQuery.sap.require("sap.suite.ui.commons.util.DateUtils");

/**
 * Constructor for FeedItemUtils - must not be used. All functions are static, so it is illegal to call this constructor.
 * 
 * @class FeedItemUtils is a static class for feed item utility functions.
 * 
 * @private
 */
sap.suite.ui.commons.util.FeedItemUtils = function() {

	throw new Error();
};

/**
 * This function calculates the age of feed item.
 * 
 * @param {Date}
 *            The publication date of the feed item.
 * @private
 */
sap.suite.ui.commons.util.FeedItemUtils.calculateFeedItemAge = function(dPublicationDate) {

	var sAgo = "";

	if (!sap.suite.ui.commons.util.DateUtils.isValidDate(dPublicationDate)) {
		return sAgo;
	}

	var dNow = new Date();

	// ignore milliseconds
	dPublicationDate.setMilliseconds(0);
	dNow.setMilliseconds(0);

	var oLocale = sap.ui.getCore().getConfiguration().getLanguage();
	var oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons", oLocale);

	var nMillisInOneMinute = 60000;
	var nMillisInOneHour = nMillisInOneMinute * 60;
	var nMillisInOneDay = nMillisInOneHour * 24;

	if ((dNow.getTime() - dPublicationDate.getTime()) >= nMillisInOneDay) {

		var nNumberOfDays = parseInt((dNow.getTime() - dPublicationDate.getTime()) / nMillisInOneDay, 10);
		if (nNumberOfDays === 1) {

			sAgo = oResBundle.getText("FEEDTILE_DAY_AGO", [ nNumberOfDays ]);
		} else {

			sAgo = oResBundle.getText("FEEDTILE_DAYS_AGO", [ nNumberOfDays ]);
		}
	} else if ((dNow.getTime() - dPublicationDate.getTime()) >= nMillisInOneHour) {

		var nNumberOfHours = parseInt((dNow.getTime() - dPublicationDate.getTime()) / nMillisInOneHour, 10);

		if (nNumberOfHours === 1) {

			sAgo = oResBundle.getText("FEEDTILE_HOUR_AGO", [ nNumberOfHours ]);
		} else {

			sAgo = oResBundle.getText("FEEDTILE_HOURS_AGO", [ nNumberOfHours ]);
		}
	} else {

		var nNumberOfMins = parseInt((dNow.getTime() - dPublicationDate.getTime()) / nMillisInOneMinute, 10);

		if (nNumberOfMins === 1) {

			sAgo = oResBundle.getText("FEEDTILE_MINUTE_AGO", [ nNumberOfMins ]);
		} else {

			sAgo = oResBundle.getText("FEEDTILE_MINUTES_AGO", [ nNumberOfMins ]);
		}
	}

	return sAgo;
};