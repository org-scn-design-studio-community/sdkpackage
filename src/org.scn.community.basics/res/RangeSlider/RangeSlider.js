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

sap.ui.commons.RangeSlider.extend("org.scn.community.basics.RangeSlider", {
	
	metadata: {
        properties: {
              "liveValue": {type: "float"},
              "liveValue2": {type: "float"},
              "DLiveChangeActive": {type: "boolean"},
        }
	},
	
	initDesignStudio: function() {
		var that = this;
		
		this.attachChange(function() {
			var value = that.getValue();
			var value2 = that.getValue2();
			
			var updateRequired = false;
			if(that._SavedValue == undefined) {
				that._SavedValue = value;
				updateRequired = true;
			}
			
			if(that._SavedValue2 == undefined) {
				that._SavedValue2 = value2;
				updateRequired = true;
			}
			
			if(!updateRequired && (that._SavedValue != value || that._SavedValue2 != value2)) {
				updateRequired = true;
			}

			if(updateRequired) {
				that._SavedValue = value;
				that._SavedValue2 = value2;
				
				that.fireDesignStudioPropertiesChanged(["value"]);
				that.fireDesignStudioPropertiesChanged(["value2"]);

				that.fireDesignStudioEvent("onChange");
			}
		});
	},
	
	renderer: {},
		
	afterDesignStudioUpdate: function() {
		var that = this;
		
		var liveChangeActive = this.getDLiveChangeActive();
		if(!that._liveEventCheck && liveChangeActive) {
			this.attachLiveChange(function(oControlEvent) {
				var value = oControlEvent.getParameters().value;
				var value2 = oControlEvent.getParameters().value2;
				
				var updateRequired = false;
				if(that._SavedLiveValue == undefined) {
					that._SavedLiveValue = value;
					updateRequired = true;
				}
				
				if(that._SavedLiveValue2 == undefined) {
					that._SavedLiveValue2 = value2;
					updateRequired = true;
				}
				
				if(!updateRequired && (that._SavedLiveValue != value || that._SavedLiveValue2 != value2)) {
					updateRequired = true;
				}
	
				if(updateRequired) {
					that._SavedLiveValue = value;
					that._SavedLiveValue2 = value2;
					
					this.setLiveValue(value);
					this.setLiveValue2(value2);
					
					that.fireDesignStudioPropertiesChanged(["liveValue"]);
					that.fireDesignStudioPropertiesChanged(["liveValue2"]);
	
					that.fireDesignStudioEvent("onLiveChange");
				}
			});
		}
		
		that._liveEventCheck = true;
	}
});