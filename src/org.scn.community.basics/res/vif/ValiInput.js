/**
 * Copyright 2014 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/sap-design-studio-free-addons/sdk-package
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
		var myScriptSuffix = "res/vif/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

sap.ui.commons.TextField.extend("org.scn.community.basics.ValiInput", {

	metadata: {
        properties: {
              "DValue": {type: "string"},
              "DValidState": {type: "string"},
              "DTooltip": {type: "string"},
              "DValidation": {type: "string"},
              "DLength": {type: "int"},
              "DNumber": {type: "float"},
              "DDefault": {type: "String"},
        }
	},
	
  	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
		
		this.addStyleClass("scn-pack-ValiField");
		
		this.attachChange(function() {
			if(that.getDValidation() == "custom") {
				that.setDValue(that.getValue());
				that.fireDesignStudioPropertiesChanged(["DValue"]);

				that.fireDesignStudioEvent("onChanged");	
			} else {
				that._validatePrivate(that.getValue());

				if(that._DValid == "None") {
					that.setDValue(that.getValue());
					that.fireDesignStudioPropertiesChanged(["DValue"]);
	
					that.fireDesignStudioEvent("onChanged");	
				}
			}
		});
		
		that.formValidator = new FormValidator("", []);
		that.formValidator._fillDefaults();
		
		this.attachLiveChange(that._validate);
		
		this.onAfterRendering = function() {
			var jqThis = that.$();
		};
  	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
		var value = that.getDValue();
		var tooltip = that.getDTooltip();
		
		var validState = that.getDValidState();
		var validationMode = that.getDValidation();
		
		if(validationMode == "custom") {
			that._DValid = validState; 
			
			that.setValueState(sap.ui.core.ValueState[validState]);
		}
		
		this.setValue(value);
		
		var validationInfo = that._getMessage();
		
		if(tooltip != "") {
			that.setTooltip(tooltip + " | " + validationInfo);	
		} else {
			that.setTooltip(validationInfo);
		}
	},
	
	_validate : function (oEvent) {
		var liveValue = oEvent.getParameters().liveValue;
		
		this._validatePrivate(liveValue);
	},
	
	_validatePrivate : function (iValue) {
		var that = this;
		
		// client validation
		var validationMode = that.getDValidation();
		
		var valid = false;
		var preparedHook = {'value': iValue};
		
		if(iValue != "") {
			if(validationMode == "none"){
				// nothing to do
			} else if(validationMode.indexOf("length") > -1){
				valid = that.formValidator._hooks[validationMode](preparedHook, this.getDLength());
			} else if(validationMode.indexOf("than") > -1){
				valid = that.formValidator._hooks[validationMode](preparedHook, this.getDNumber());
			} else if(validationMode.indexOf("default") > -1){
				valid = that.formValidator._hooks[validationMode](preparedHook, this.getDDefault());
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
			validationMessage = validationMessage.replace("%s", this.getDLength());
		} else if(validationMode.indexOf("than") > -1){
			validationMessage = validationMessage.replace("%s", this.getDNumber());
		} else if(validationMode.indexOf("default") > -1){
			validationMessage = validationMessage.replace("%s", this.getDefault());
		}

		return validationMessage;
	},

});
})();