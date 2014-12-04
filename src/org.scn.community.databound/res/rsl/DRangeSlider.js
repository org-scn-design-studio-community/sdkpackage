/**
 * Copyright 2014 Karol Kalisz
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

sap.ui.commons.RangeSlider.extend("org.scn.community.databound.RangeSlider", {

	setData : function(value) {
		this._data = value;
		return this;
	},
	
	getData : function(value) {
		return this._data;
	},
	
	setMetadata : function(value) {
		this._metadata = value;
		return this;
	},

	getMetadata : function(value) {
		return this._metadata;
	},
	
	metadata: {
        properties: {
              "maxNumber": {type: "int"},
              "topBottom": {type: "string"},
              "sorting": {type: "string"},
              "selectedKey": {type: "string"},
              "selectedText": {type: "string"},
              "selectedKey2": {type: "string"},
              "selectedText2": {type: "string"},
              "selectedKeys": {type: "string"},
              "doRefresh": {type: "boolean"},
        }
	},

	initDesignStudio: function() {
		var that = this;
		
		this.attachChange(function() {
			var value = that.getValue();
			
			var key = that._lLabelKeys[value];
			var text = that._lLabels[value];
			
			var value2 = that.getValue2();
			
			var key2 = that._lLabelKeys[value2];
			var text2 = that._lLabels[value2];
			
			var updateRequired = false;
			
			if(that._SavedKey == undefined) {
				that._SavedValue = value;
				updateRequired = true;
			}
			
			if(that._SavedValue2 == undefined) {
				that._SavedKey2 = value2;
				updateRequired = true;
			}
			
			if(!updateRequired && (that._SavedKey != key || that._SavedKey2 != key2)) {
				updateRequired = true;
			}

			if(updateRequired) {
				var selectedKeys = "";
				for (var i = value; i <= value2; i++) {
					var onekey = that._lLabelKeys[i];
					selectedKeys = selectedKeys + ";" + onekey;
				}
				
				selectedKeys = selectedKeys.substring(1);
				
				that._SavedKey = key;
				that._SavedKey2 = key2;
				
				that.setSelectedKey(key);
				that.setSelectedText(text);
				that.setSelectedKey2(key2);
				that.setSelectedText2(text2);
				
				that.setSelectedKeys(selectedKeys);
				
				that.fireDesignStudioPropertiesChanged(["selectedKeys", "selectedKey", "selectedText", "selectedKey2", "selectedText2"]);

				that.fireDesignStudioEvent("onSelectionChanged");
			}
		});
	},
	
	renderer: {},
		
	afterDesignStudioUpdate: function() {
		var that = this;
		
		var lData = this._data;
		var lMetadata = this._metadata;
		
		if(this.getDoRefresh()){
			var lElementsToRenderArray = org_scn_community_databound.getTopBottomElements 
			    (lData, lMetadata, this.getMaxNumber(), this.getTopBottom(), this.getSorting(), "Ignore Duplicates");
			
			this._lLabels = []; 
			this._lLabelKeys = [];
			
			this._lLabels.push("Not Selected");
			this._lLabelKeys.push("-N/A-1");

			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				
				this._lLabels.push(element.text);
				this._lLabelKeys.push(element.key);
			};
			
			this._lLabels.push("Not Selected");
			this._lLabelKeys.push("-N/A-2");

			this.setMin(0);
			this.setMax(this._lLabels.length - 1);

			this.setTotalUnits(this._lLabels.length - 1);
			
			this.setSmallStepWidth(1);
			this.setStepLabels(true);
			
			this.setLabels(this._lLabels);
		};
		
		if(this._oldContent == undefined || JSON.stringify(this._lLabels) != JSON.stringify(this._oldContent)) {
			// if data has changed, remove always selected key!
			this.setSelectedKey("-N/A-1");
			this.setSelectedText("");
			this.setSelectedKey2("-N/A-2");
			this.setSelectedText2("");
			this.setSelectedKeys("");
			
			that.fireDesignStudioPropertiesChanged(["selectedKeys", "selectedKey", "selectedText", "selectedKey2", "selectedText2"]);
			that.fireDesignStudioEvent("onDataChanged");
			
			this._oldContent = this._lLabels;
		}
		
		if(this.getSelectedKey() != "") {
			for (var i = 0; i < this._lLabelKeys.length; i++) {
				if(this._lLabelKeys[i] == this.getSelectedKey()) {
					this.setValue(i);
					break;
				};
			};
		} else {
			this.setValue(0);
		};
		if(this.getSelectedKey2() != "") {
			for (var i = 0; i < this._lLabelKeys.length; i++) {
				if(this._lLabelKeys[i] == this.getSelectedKey2()) {
					this.setValue2(i);
					break;
				};
			};
		} else {
			this.setValue2(this._lLabelKeys.length);
		};
	},
});