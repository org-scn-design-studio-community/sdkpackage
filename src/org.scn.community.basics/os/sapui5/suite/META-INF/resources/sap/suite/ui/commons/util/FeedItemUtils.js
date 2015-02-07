/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.util.FeedItemUtils");jQuery.sap.require("sap.suite.ui.commons.util.DateUtils");
sap.suite.ui.commons.util.FeedItemUtils=function(){throw new Error()};
sap.suite.ui.commons.util.FeedItemUtils.calculateFeedItemAge=function(p){var a="";if(!sap.suite.ui.commons.util.DateUtils.isValidDate(p)){return a}var n=new Date();p.setMilliseconds(0);n.setMilliseconds(0);var l=sap.ui.getCore().getConfiguration().getLanguage();var r=sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons",l);var b=60000;var c=b*60;var d=c*24;if((n.getTime()-p.getTime())>=d){var e=parseInt((n.getTime()-p.getTime())/d,10);if(e===1){a=r.getText("FEEDTILE_DAY_AGO",[e])}else{a=r.getText("FEEDTILE_DAYS_AGO",[e])}}else if((n.getTime()-p.getTime())>=c){var f=parseInt((n.getTime()-p.getTime())/c,10);if(f===1){a=r.getText("FEEDTILE_HOUR_AGO",[f])}else{a=r.getText("FEEDTILE_HOURS_AGO",[f])}}else{var g=parseInt((n.getTime()-p.getTime())/b,10);if(g===1){a=r.getText("FEEDTILE_MINUTE_AGO",[g])}else{a=r.getText("FEEDTILE_MINUTES_AGO",[g])}}return a};
