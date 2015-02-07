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

jQuery.sap.require("sap.suite.ui.commons.DateRangeScroller");

sap.suite.ui.commons.DateRangeScroller.extend("org.scn.community.basics.DateRangeScroller", {
	
	metadata: {
        properties: {
              "DStartDate": {type: "string"},
              "DEndDate": {type: "string"},
              "DViewType": {type: "string"},
              "DDate": {type: "string"},
              "DSpecialDay": {type: "int"},
              "DSpecialDuration": {type: "int"},
              "DLangFormat": {type: "boolean"},
              "DLangPattern": {type: "string"},
              "DLangStyle": {type: "string"},
              "DLangRelative": {type: "boolean"},
        }
	},
	
	initDesignStudio: function() {
		var that = this;
		
		this.attachChange(function(oEvent) {

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
				
				that.fireDesignStudioPropertiesChanged(["DStartDate", "DEndDate"]);
				that.fireDesignStudioEvent("onChange");
			}
		});
	},
	
	renderer: {},
		
	afterDesignStudioUpdate: function() {
		var that = this;
		
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
		
		if(that._oldRange != viewType) {
			that._oldRange = viewType;
		
			if(that._oldInitDate != initDateFormat) {
				if(viewType == "Day") {
					that.setDateRangeDay(initDate);
				} else if(viewType == "Week") {
					that.setDateRangeWeek(initDate);
				} else if(viewType == "Month") {
					that.setDateRangeMonth(initDate);
				} else if(viewType == "Year") {
					that.setDateRangeYear(initDate);
				} else if(viewType == "CustomWeek") {
					var specialStart = that.getDSpecialDay();
					var specialDuration = that.getDSpecialDuration();
					
					 var oSpecialWeek = { duration: specialDuration, firstDayOfWeek: specialStart};
					 that.setDateRangeWeek(initDate, oSpecialWeek);
					 
				} else if(viewType == "CustomDuration") {
					var specialDuration = that.getDSpecialDuration();
					
					that.setDateRangeCustom(initDate, specialDuration);
				}
			}
		}
	}
});