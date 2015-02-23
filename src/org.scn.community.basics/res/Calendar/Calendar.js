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
(function() {
/** code for recognition of script path */
var myScript = $("script:last")[0].src;
_readScriptPath = function () {
	if(myScript) {
		var myScriptSuffix = "res/Calendar/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
};
/** end of path recognition */

var oCore = sap.ui.getCore();
oCore.loadLibrary("sap.me");

jQuery.sap.require("sap.me.Calendar");
jQuery.sap.require("sap.m.Button");

sap.me.Calendar.extend("org.scn.community.basics.Calendar", {

	metadata: {
        properties: {
        	  "DCurrentValue": {type: "string"},
        	  "DValue": {type: "string"},
        	  "DValueF": {type: "string"},
        	  "DValueT": {type: "string"},
        	  "DSelectionType": {type: "string"},
        }
	},
	
  	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
		
		this.addStyleClass("scn-pack-Calendar");
		this.addStyleClass(this.getId());
        
		this.attachTapOnDate(this._tapOnDate);
		this.attachChangeCurrentDate(this._changeCurrentDate);
		this.attachChangeRange(this._attachChangeRange);
  	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
		var currentDate = that.getDateValue(that.getDCurrentValue(), dateFormat);
		var singleDate = that.getDateValue(that.getDValue(), dateFormat);
		var fromDate = that.getDateValue(that.getDValueF(), dateFormat);
		var toDate = that.getDateValue(that.getDValueT(), dateFormat);

		var selectionType = this.getDSelectionType();
		if(selectionType == "Single Selection") {
			this.setSelectionMode(sap.me.CalendarSelectionMode.SINGLE);
		} else if(selectionType == "Range Selection") { 
			this.setSelectionMode(sap.me.CalendarSelectionMode.RANGE);
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
			
			if(this.getSelectionMode() == sap.me.CalendarSelectionMode.SINGLE) {
				if(selectedDates.length == 1) {
					var curSelected = selectedDates[0];
					var dateO = new Date(curSelected);
					var techDate = "" + dateO.format(dateFormat.masks.technical);
			    	
					if(techDate != singleDate.formatted) {
						that.unselectAllDates();
						that.toggleDatesRangeSelection(singleDate, singleDate, true);
					}
				}
			} else if(this.getSelectionMode() == sap.me.CalendarSelectionMode.RANGE) {
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

	_changeCurrentDate: function(oEvent) {
		var that = this;
		if(that._deactivateEvent) {
			// endless loop...
			return;
		}
		
    	var date = oEvent.getParameters().currentDate;
		var dateO = new Date(date);
		var techDate = "" + dateO.format(dateFormat.masks.technical);
    	this.setDCurrentValue(techDate);
    	
        that.fireDesignStudioPropertiesChanged(["DCurrentValue"]);
		that.fireDesignStudioEvent("onCurrentChanged");
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
    	this.setDValue(techDate);
    	
        that.fireDesignStudioPropertiesChanged(["DValue"]);
		that.fireDesignStudioEvent("onSingleChanged");
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
    	this.setDValueF(techDate);

    	date = oEvent.getParameters().toDate;
		dateO = new Date(date);
		techDate = "" + dateO.format(dateFormat.masks.technical);
    	this.setDValueT(techDate);
    	
        that.fireDesignStudioPropertiesChanged(["DValueF", "DValueT"]);
		that.fireDesignStudioEvent("onRangeChanged");
    },
    
	getDateValue: function (inputDate, dateFormat) {
		if(inputDate == "TODAY" || inputDate.length != 8) {
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
})();