/**
 * Copyright 2014 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/org-scn-design-studio-community/sdkpackage/
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 *  
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */
 
 //%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./DateRangeScrollerSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"basics/os/date/DateFormat",
	"../../../"+scn_pkg+"basics/os/sapui5/sap_suite_loader"
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

DateRangeScroller = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;
		
		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;

		org_scn_community_component_Core(that, myComponentData);
		
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.attachChange(function(oEvent) {

	        var oDateRange = that.getDateRange();
			
			var startDate = oDateRange.startDate;
			var endDate =  oDateRange.endDate;
			
			startDate = "" + startDate.format(dateFormat.masks.technical);
			endDate = "" + endDate.format(dateFormat.masks.technical);

			var updateRequired = false;
			if(that._SavedValue == undefined) {
				that._SavedValue = startDate+endDate;
				updateRequired = true;
			}
			
			if(!updateRequired && that._SavedValue != startDate+endDate) {
				updateRequired = true;
			}

			if(updateRequired) {
				that._SavedValue = startDate+endDate;
				
				that.setDStartDate(startDate);
				that.setDEndDate(endDate);
				
				that.fireDesignStudioPropertiesChangedAndEvent(["DStartDate", "DEndDate"], "onChange");
			}
		});
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		// that.onAfterRendering = function () {
			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		// }
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	processData: function (flatData, afterPrepare, owner) {
		var that = owner;

		// processing on data
		that.afterPrepare(that);
	},

	afterPrepare: function (owner) {
		var that = owner;
			
		// visualization on processed data
		var date = that.getDDate();
		
		if(date.length != 8) {
			date = new Date();
			date = date.format(dateFormat.masks.technical);
		}
		
		var year = date.substring(0,4);
		var month = date.substring(4,6);
		var day = date.substring(6,8);
		
		var viewType = that.getDViewType();
		
		var initDate = new Date(year, month - 1, day);
		var initDateFormat = initDate.format(dateFormat.masks.technical);
		
		var langFormat = that.getDLangFormat();
		var pattern = that.getDLangPattern();
		var style = that.getDLangStyle();
		var relative = that.getDLangRelative();
		
		if(that._oldLangFormat != langFormat+pattern+style+relative) {
			that._oldLangFormat = langFormat+pattern+style+relative;
			
			if(langFormat) {
				var options = {};
				options.style = style;
				options.relative = relative;
				
				if(pattern.length > 0) {
					options.pattern = pattern;
				}
				var format = sap.ui.core.format.DateFormat.getDateInstance(options);
				that.setDateFormat(format);
			} else {
				that.setDateFormat(undefined);
			}
		}
		
		if(that._oldRange != viewType || that._oldDate != date) {
			that._oldRange = viewType;
			that._oldDate = date;
		
			if(that._oldInitDate != initDateFormat) {
				if(viewType == "Day") {
					that.setDateRangeDay(initDate);
				} else if(viewType == "Week") {
					that.setDateRangeWeek(initDate);
				} else if(viewType == "Month") {
					that.setDateRangeMonth(initDate);
				} else if(viewType == "Year") {
					that.setDateRangeYear(initDate);
				} else if(viewType == "Custom_Week") {
					var specialStart = that.getDSpecialDay();
					var specialDuration = that.getDSpecialDuration();
					
					 var oSpecialWeek = { duration: specialDuration, firstDayOfWeek: specialStart};
					 that.setDateRangeWeek(initDate, oSpecialWeek);
					 
				} else if(viewType == "Custom_Duration") {
					var specialDuration = that.getDSpecialDuration();
					
					that.setDateRangeCustom(initDate, specialDuration);
				}
			}
		}
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = DateRangeScroller;
jQuery.sap.require("sap.suite.ui.commons.DateRangeScroller");
sap.suite.ui.commons.DateRangeScroller.extend(myComponentData.fullComponentName, myComponentData.instance);
});