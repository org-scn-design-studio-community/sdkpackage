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
	"./ValiInputSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"basics/os/validate/validate"
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

ValiInput = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.addStyleClass("scn-pack-ValiField");
		
		that.attachChange(function() {
			if(that.getDValidation() == "custom") {
				that.setDValue(that.getValue());
				that.fireDesignStudioPropertiesChangedAndEvent(["DValue"], "onChanged");	
			} else {
				that._validatePrivate(that.getValue());

				if(that._DValid == "None") {
					that.setDValue(that.getValue());
					that.fireDesignStudioPropertiesChangedAndEvent(["DValue"], "onChanged");	
				}
			}
		});
		
		that.formValidator = new FormValidator("", []);
		that.formValidator._fillDefaults();
		
		that.attachLiveChange(that._validate);
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
		
		var value = that.getDValue();
		var tooltip = that.getDTooltip();
		
		var validState = that.getDValidState();
		var validationMode = that.getDValidation();
		
		if(validationMode == "custom") {
			that._DValid = validState; 
			
			that.setValueState(sap.ui.core.ValueState[validState]);
		}
		
		that.setValue(value);
		
		var validationInfo = that._getMessage();
		
		if(tooltip != "") {
			that.setTooltip(tooltip + " | " + validationInfo);	
		} else {
			that.setTooltip(validationInfo);
		}
		// processing on data
		that.afterPrepare(that);
	},

	afterPrepare: function (owner) {
		var that = owner;
			
		// visualization on processed data
		
	},
	
	_validate : function (oEvent) {
		var that = oEvent.getSource();
		
		var liveValue = oEvent.getParameters().liveValue;
		
		that._validatePrivate(liveValue);
	},
	
	_validatePrivate : function (iValue) {
		var that = this;
		
		// client validation
		var validationMode = that.getDValidation();
		
		var valid = false;
		var preparedHook = {'value': iValue};
		
		if(iValue != "") {
			if(validationMode == "none"){
				that._DValid = "None";
				// nothing to do
			} else if(validationMode.indexOf("length") > -1){
				valid = that.formValidator._hooks[validationMode](preparedHook, that.getDLength());
			} else if(validationMode.indexOf("than") > -1){
				valid = that.formValidator._hooks[validationMode](preparedHook, that.getDNumber());
			} else if(validationMode.indexOf("default") > -1){
				valid = that.formValidator._hooks[validationMode](preparedHook, that.getDDefault());
			} else if(validationMode == "custom") {
				// nothing to do
			} else {
				valid = that.formValidator._hooks[validationMode](preparedHook);
			}
		} else {
			valid = true;	
		}
				
		if(validationMode != "none" && validationMode != "custom") {
			if(!valid) {
				that._DValid = "Error";	
			} else {
				that._DValid = "None";
			}
			that.setValueState(sap.ui.core.ValueState[that._DValid]);
		}
	},
	
	_getMessage : function () {
		var that = this;

		var validationMode = that.getDValidation();
		
		var validationMessage = "";
		validationMessage = that.formValidator.messages[validationMode];
		if(validationMode == "none" || validationMode == "custom") {
			validationMessage = "";
		}
		if(validationMessage == undefined) {
			validationMessage = "";
		}
		
		validationMessage = validationMessage.replace("%s field ", "value ");
	
		if(validationMode.indexOf("length") > -1){
			validationMessage = validationMessage.replace("%s", that.getDLength());
		} else if(validationMode.indexOf("than") > -1){
			validationMessage = validationMessage.replace("%s", that.getDNumber());
		} else if(validationMode.indexOf("default") > -1){
			validationMessage = validationMessage.replace("%s", that.getDefault());
		}

		return validationMessage;
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = ValiInput;
jQuery.sap.require("sap.ui.commons.TextField");
sap.ui.commons.TextField.extend(myComponentData.fullComponentName, myComponentData.instance);
});