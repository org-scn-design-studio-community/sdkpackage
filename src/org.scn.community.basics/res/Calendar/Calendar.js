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
	"./CalendarSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"basics/os/date/DateFormat",
	"../../../"+scn_pkg+"basics/os/sapui5/sap_m_loader"
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

Calendar = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;

		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.addStyleClass("scn-pack-Calendar");
        
		that.attachTapOnDate(that._tapOnDate);
		that.attachChangeCurrentDate(that._changeCurrentDate);
		that.attachChangeRange(that._attachChangeRange);
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		that.onAfterRendering = function () {
			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		}
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
		var currentDate = org_scn_community_basics.getDateValue(that.getDCurrentValue());
		var singleDate = org_scn_community_basics.getDateValue(that.getDValue());
		var fromDate = org_scn_community_basics.getDateValue(that.getDValueF());
		var toDate = org_scn_community_basics.getDateValue(that.getDValueT());

		var selectionType = that.getDSelectionType();
		if(selectionType == "Single Selection") {
			that.setSelectionMode(sap.me.CalendarSelectionMode.SINGLE);
		} else if(selectionType == "Range Selection") { 
			that.setSelectionMode(sap.me.CalendarSelectionMode.RANGE);
		}

		that._deactivateEvent = true;
		if(that._oldDateValues != currentDate.formatted+singleDate.formatted+fromDate.formatted+toDate.formatted) {
			that._oldDateValues = currentDate.formatted+singleDate.formatted+fromDate.formatted+toDate.formatted;
			
			var curActual = that.getCurrentDate();
			var dateO = new Date(curActual);
			var techDate = "" + dateO.format(dateFormat.masks.technical);
	    	
			if(techDate != currentDate.formatted) {
				that.setCurrentDate(currentDate);	
			}
			
			var selectedDates = that.getSelectedDates();
			
			if(that.getSelectionMode() == sap.me.CalendarSelectionMode.SINGLE) {
				if(selectedDates.length == 1) {
					var curSelected = selectedDates[0];
					var dateO = new Date(curSelected);
					var techDate = "" + dateO.format(dateFormat.masks.technical);
			    	
					if(techDate != singleDate.formatted) {
						that.unselectAllDates();
						that.toggleDatesRangeSelection(singleDate, singleDate, true);
					}
				}
			} else if(that.getSelectionMode() == sap.me.CalendarSelectionMode.RANGE) {
				if(selectedDates.length >= 2) {
					var fromSelected = selectedDates[0];
					var dateF = new Date(fromSelected);
					var dateF = "" + dateF.format(dateFormat.masks.technical);
			    	
					var toSelected = selectedDates[selectedDates.length-1];
					var dateT = new Date(toSelected);
					var dateT = "" + dateT.format(dateFormat.masks.technical);

					if(dateF != fromDate.formatted || dateT != toDate.formatted) {
						that.unselectAllDates();
						that.toggleDatesRangeSelection(fromDate, toDate, true);
					}
				}
			}
		}
		that._deactivateEvent = false;
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	
	_changeCurrentDate: function(oEvent) {
		var that = this;
		
		if(that._deactivateEvent) {
			// endless loop...
			return;
		}
		
    	var date = oEvent.getParameters().currentDate;
		var dateO = new Date(date);
		var techDate = "" + dateO.format(dateFormat.masks.technical);
    	that.setDCurrentValue(techDate);
    	
        that.fireDesignStudioPropertiesChangedAndEvent(["DCurrentValue"], "onCurrentChanged");
	},
	
	_tapOnDate: function (oEvent) {
		var that = this;
		
		if(that._deactivateEvent) {
			// endless loop...
			return;
		}
		
        var that = this;
        
    	var did = oEvent.getParameters().didSelect;
    	
    	var date = oEvent.getParameters().date;
		var dateO = new Date(date);
		var techDate = "" + dateO.format(dateFormat.masks.technical);
    	that.setDValue(techDate);
    	
        that.fireDesignStudioPropertiesChangedAndEvent(["DValue"], "onSingleChanged");
    },
    
    _attachChangeRange: function (oEvent) {
    	var that = this;
    	
		if(that._deactivateEvent) {
			// endless loop...
			return;
		}
    	
    	var that = this;
        
    	var date = oEvent.getParameters().fromDate;
		var dateO = new Date(date);
		var techDate = "" + dateO.format(dateFormat.masks.technical);
    	that.setDValueF(techDate);

    	date = oEvent.getParameters().toDate;
		dateO = new Date(date);
		techDate = "" + dateO.format(dateFormat.masks.technical);
    	that.setDValueT(techDate);
    	
        that.fireDesignStudioPropertiesChangedAndEvent(["DValueF", "DValueT"], "onRangeChanged");
    },
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = Calendar;
jQuery.sap.require("sap.me.Calendar");
sap.me.Calendar.extend(myComponentData.fullComponentName, myComponentData.instance);
});