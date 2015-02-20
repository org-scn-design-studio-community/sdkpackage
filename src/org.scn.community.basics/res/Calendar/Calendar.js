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
oCore.loadLibrary("sap.m");
oCore.loadLibrary("sap.me");

jQuery.sap.require("sap.me.Calendar");
jQuery.sap.require("sap.m.Button");

sap.me.Calendar.extend("org.scn.community.basics.Calendar", {

	metadata: {
        properties: {
        	  "DValue": {type: "string"},
        	  "DValue2": {type: "string"},
        	  "DSelectionType": {type: "string"},
        }
	},
	
  	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
		
		this.addStyleClass("scn-pack-Calendar");
		this.addStyleClass(this.getId());
        
		this.attachChangeCurrentDate(this._changeCurrentDate);
		this.attachChangeRange(this._attachChangeRange);

		// this.onAfterRendering = this._onAfterRendering;
  	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		this.setCurrentDate(this.getDValue());
        this.setFirstDayOffset(0);
        
        this.setSingleRow(false);
        this.setMonthsToDisplay(1);
        this.setWeeksPerRow(1);
        this.setMonthsPerRow(1);
        this.setFirstDayOffset(0);
	},

	_changeCurrentDate: function(oEvent) {
		// msgLabel.setText("you navigated to new date: " + oEvent.getParameters().currentDate);
	},
	
	_attachTapOnDate: function (oEvent) {
        //msgLabel.setText("you tapped on " + oEvent.getParameters().date + " didSelected: " + oEvent.getParameters().didSelect);
    	
    	this.setDSelectionType("single");
    	
    	this.setDValue(oEvent.getParameters().date);
    	
        that.fireDesignStudioPropertiesChanged(["DValue"]);
		that.fireDesignStudioEvent("onSingleChanged");
    },
    
    _attachChangeRange: function (oEvent) {
        // msgLabel.setText("you selected a range of dates from: " + oEvent.getParameters().fromDate + " to: " + oEvent.getParameters().toDate);
    	
    	this.setDSelectionType("range");
    	
    	this.setDValue(oEvent.getParameters().fromDate);
    	this.setDValue2(oEvent.getParameters().toDate);
    	
        that.fireDesignStudioPropertiesChanged(["DValue", "DValue2"]);
		that.fireDesignStudioEvent("onRangeChanged");
    },
});
})();