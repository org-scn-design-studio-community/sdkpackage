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
	"./DateRangeSliderSpec",
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

DateRangeSlider = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.attachChange(function() {
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
				
				var minDate = org_scn_community_basics.getDateValue (that.getDMin());
				var maxDate = org_scn_community_basics.getDateValue (that.getDMax());
			
				if(that._oldDateValues != minDate.formatted+maxDate.formatted+startDate+endDate) {
					that._oldDateValues = minDate.formatted+maxDate.formatted+startDate+endDate;
				}
				
				that.setDValue(startDate);
				that.setDValue2(endDate);
				
				that.fireDesignStudioPropertiesChangedAndEvent(["DValue", "DValue2"], "onChange");
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
		var minDate = org_scn_community_basics.getDateValue (that.getDMin());
		var maxDate = org_scn_community_basics.getDateValue (that.getDMax());
		var valueDate = org_scn_community_basics.getDateValue (that.getDValue());
		var value2Date = org_scn_community_basics.getDateValue (that.getDValue2());
		
		that._deactivateEvent = true;
		if(that._oldDateValues != minDate.formatted+maxDate.formatted+valueDate.formatted+value2Date.formatted) {
			that._oldDateValues = minDate.formatted+maxDate.formatted+valueDate.formatted+value2Date.formatted;
			that.setMin(minDate);
			that.setMax(maxDate);
			that.setValue(valueDate);
			that.setValue2(value2Date);
		}
		
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
		
		var granularity = that.getDGranularity();
		
		if(that._oldGranualarity != granularity) {
			that._oldGranualarity = granularity;
			
			if(granularity == "Month") {
				that.setMonthGranularity();
			} else {
				that.setDayGranularity();
			}
		}

		that._deactivateEvent = false;
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = DateRangeSlider;
jQuery.sap.require("sap.suite.ui.commons.DateRangeSlider");
sap.suite.ui.commons.DateRangeSlider.extend(myComponentData.fullComponentName, myComponentData.instance);
});