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

jQuery.sap.require("sap.suite.ui.commons.DateRangeSlider");

sap.suite.ui.commons.DateRangeSlider.extend("org.scn.community.basics.DateRangeSlider", {
	
	metadata: {
        properties: {
              "DMin": {type: "string"},
              "DMax": {type: "string"},
              "DValue": {type: "string"},
              "DValue2": {type: "string"},
              "DLangFormat": {type: "boolean"},
              "DLangPattern": {type: "string"},
              "DLangStyle": {type: "string"},
              "DLangRelative": {type: "boolean"},
              "DGranulatiry": {type: "string"},
        }
	},
	
	initDesignStudio: function() {
		var that = this;
		
		this.attachChange(function() {
			if(that._deactivateEvent) {
				// endless loop...
				return;
			}
			
			var startDate = that.getValue(); // 20120406
			var endDate =  that.getValue2();
			
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
				
				var minDate = that.getDateValue(that.getDMin(), dateFormat);
				var maxDate = that.getDateValue(that.getDMax(), dateFormat);
			
				if(that._oldDateValues != minDate.formatted+maxDate.formatted+startDate+endDate) {
					that._oldDateValues = minDate.formatted+maxDate.formatted+startDate+endDate;
				}
				
				that.setDValue(startDate);
				that.setDValue2(endDate);
				
				that.fireDesignStudioPropertiesChanged(["DValue", "DValue2"]);
				that.fireDesignStudioEvent("onChange");
			}
		});
	},
	
	renderer: {},
		
	afterDesignStudioUpdate: function() {
		var that = this;
		
		var minDate = that.getDateValue(that.getDMin(), dateFormat);
		var maxDate = that.getDateValue(that.getDMax(), dateFormat);
		var valueDate = that.getDateValue(that.getDValue(), dateFormat);
		var value2Date = that.getDateValue(that.getDValue2(), dateFormat);
		
		that._deactivateEvent = true;
		if(that._oldDateValues != minDate.formatted+maxDate.formatted+valueDate.formatted+value2Date.formatted) {
			that._oldDateValues = minDate.formatted+maxDate.formatted+valueDate.formatted+value2Date.formatted;
			that.setMin(minDate);
			that.setMax(maxDate);
			that.setValue(valueDate);
			that.setValue2(value2Date);
		}
		that._deactivateEvent = false;
		
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
		
		var granularity = that.getDGranulatiry();
		
		if(that._oldGranualarity != granularity) {
			that._oldGranualarity = granularity;
			
			if(granularity == "Month") {
				that.setMonthGranularity();
			} else {
				that.setDayGranularity();
			}
		}
	},
	
	getDateValue: function (inputDate, dateFormat) {
		if(inputDate.length != 8) {
			inputDate = new Date();
			inputDate = inputDate.format(dateFormat.masks.technical);
		}
		
		var year = inputDate.substring(0,4);
		var month = inputDate.substring(4,6);
		var day = inputDate.substring(6,8);
		
		var date = new Date(year, month - 1, day);
		date.formatted = date.format(dateFormat.masks.technical);
		
		return date;
	},
});