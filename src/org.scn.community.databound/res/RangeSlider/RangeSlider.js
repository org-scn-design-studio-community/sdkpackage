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
	"./RangeSliderSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"shared/modules/component.databound"
	
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

RangeSlider = {

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
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		// that.onAfterRendering = function () {
			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		// }
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		if(that.getVertical() == true) {
			that.addStyleClass("scn-pack-DataRangeSlider-Vertical");
		} else {
			that.removeStyleClass("scn-pack-DataRangeSlider-Vertical");	
		}

		var lData = that.getData();
		var lMetadata = that.getDSMetadata();
		
		if(that.getDoRefresh()){
			var options = org_scn_community_databound.initializeOptions();
			
			options.iMaxNumber = that.getMaxNumber();
			options.iTopBottom = that.getTopBottom();
			options.iSortBy = that.getSorting();
			options.iDuplicates = "Ignore";
			options.iNnumberOfDecimals = 2;
			
			var returnObject = org_scn_community_databound.getTopBottomElementsForDimension 
		     (lData, lMetadata, "", options);
			
			lElementsToRenderArray = returnObject.list;

			that._lLabels = []; 
			that._lLabelKeys = [];
			
			that._lLabels.push("Not Selected");
			that._lLabelKeys.push("-N/A-1");

			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				
				that._lLabels.push(element.text);
				that._lLabelKeys.push(element.key);
			};
			
			that._lLabels.push("Not Selected");
			that._lLabelKeys.push("-N/A-2");

			that.setMin(0);
			that.setMax(that._lLabels.length - 1);

			that.setTotalUnits(that._lLabels.length - 1);
			
			that.setSmallStepWidth(1);
			that.setStepLabels(true);
			
			that.setLabels(that._lLabels);
		};
		
		if(that._oldContent == undefined || JSON.stringify(that._lLabels) != JSON.stringify(that._oldContent)) {
			// if data has changed, remove always selected key!
			that.setSelectedKey("-N/A-1");
			that.setSelectedText("");
			that.setSelectedKey2("-N/A-2");
			that.setSelectedText2("");
			that.setSelectedKeys("");
			
			that.fireDesignStudioPropertiesChanged(["selectedKeys", "selectedKey", "selectedText", "selectedKey2", "selectedText2"]);
			that.fireDesignStudioEvent("onDataChanged");
			
			that._oldContent = that._lLabels;
		}
		
		if(that.getSelectedKey() != "") {
			for (var i = 0; i < that._lLabelKeys.length; i++) {
				if(that._lLabelKeys[i] == that.getSelectedKey()) {
					that.setValue(i);
					break;
				};
			};
		} else {
			that.setValue(0);
		};
		if(that.getSelectedKey2() != "") {
			for (var i = 0; i < that._lLabelKeys.length; i++) {
				if(that._lLabelKeys[i] == that.getSelectedKey2()) {
					that.setValue2(i);
					break;
				};
			};
		} else {
			that.setValue2(that._lLabelKeys.length);
		};

		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	},

	/* COMPONENT SPECIFIC CODE - END METHODS*/
};
//%INIT-START%
myComponentData.instance = RangeSlider;
jQuery.sap.require("sap.ui.commons.RangeSlider");
sap.ui.commons.RangeSlider.extend(myComponentData.fullComponentName, myComponentData.instance);
});