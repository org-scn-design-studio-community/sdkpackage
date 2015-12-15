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
	"./DropDownSpec",
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

DropDown = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);
		
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that._content = []; 

		// set the model
		that._oModel = new sap.ui.model.json.JSONModel(); 
		sap.ui.getCore().setModel(that._oModel);
		
		// bind all properties
		that.bindProperty("tooltip", "/tooltip");
		that.bindProperty("editable", "/editable");
		that.setModel(that._oModel);
		
		// create a list item template for the entries
		var oItemTemplate = new sap.ui.core.ListItem();
		oItemTemplate.bindProperty("text", "t");
		oItemTemplate.bindProperty("key", "k");
		that.bindItems("/items", oItemTemplate);

		var onChange = function (oEvent) {
			var selection = oEvent.getParameters().selectedItem;
			var key = selection.getKey();
			var text = selection.getText();

			if(key == "-N/A-") {
// currently this does not work...
//				that.setDSelectedKey("-N/A-");
//				that.setDSelectedText("");
//				
//				that.fireDesignStudioPropertiesChanged(["dSelectedKey", "dSelectedText"]);
//				that.fireDesignStudioEvent("onUnselect");
			} else if(key == "-CLEAR-") {
				that.setDSelectedKey("-N/A-");
				that.setDSelectedText("");
				
				that.fireDesignStudioPropertiesChanged(["DSelectedKey", "DSelectedText"]);
				that.fireDesignStudioEvent("onInternalSelectionChanged");
				that.fireDesignStudioEvent("onClear");
			} else {
				that.setDSelectedKey(key);
				that.setDSelectedText(text);
				
				that.fireDesignStudioPropertiesChanged(["DSelectedKey", "DSelectedText"]);
				that.fireDesignStudioEvent("onInternalSelectionChanged");
				that.fireDesignStudioEvent("onSelectionChanged");
			}
		};
		that.attachChange(onChange);

		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		// that.onAfterRendering = function () {
			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		// }
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		var loadingResultset = "ResultSet";
		
		var data = undefined;		
		if(loadingResultset == "ResultSet" || loadingResultset == "ResultCell"){
			data = that.getData();
		} else if(loadingResultset == "DataCellList"){
			data = that.getDataCellList();
		}

		var metadata = that.getDSMetadata();

		if(!org_scn_community_databound.hasData (data, metadata)) {
			org_scn_community_databound.getSampleDataFlat (that, that.processData, that.afterPrepare);
		} else {
			org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
		}
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
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
		var lData = that.getData();
		var lMetadata = that.getDSMetadata();
		
		var selectionList = "";
		if(that.getDSelectedKeyExtFull() != undefined && that.getDSelectedKeyExtFull().length > 0) {
			var selection = that.getDSelectedKeyExtFull();
			if(selection.length > 25) {
				selection = selection.substring(0, 25) + " ( & more ... )";
			}
			selectionList = " [" + selection + "]";
		} else {
			selectionList = " [All Members Selected]";
		}
		var lCurrentSelection = "Current Selection" + selectionList;
		
		if(that.getDDoRefresh()){
			var lDBindingMode = that.getDBindingMode().replace(" ", "");
			
			that._ElementsToRenderArray = [];
			
			if(lDBindingMode == "ResultSet") {
				var options = org_scn_community_databound.initializeOptions();
				
				options.iMaxNumber = that.getDMaxMembers();
				options.iTopBottom = that.getDTopBottom();
				options.iSortBy = that.getDSorting();
				options.iDuplicates = "Ignore";
				options.iNnumberOfDecimals = 2;
				
				that._ElementsToRenderArray = org_scn_community_databound.getTopBottomElementsForDimension 
			     (lData, lMetadata, that.getDDimension(), options).list;
			} else if(lDBindingMode == "MasterData") {
				var lDElements = that.getDElements();
				if(lDElements != null && lDElements != undefined && lDElements != ""){
					var lDlementsJson = JSON.parse(lDElements);
					that._ElementsToRenderArray = lDlementsJson.members;
				}
			}
			
			that._content = []; 
			
			that._content.push({k:"-N/A-", t: lCurrentSelection});

			for (var i = 0; i < that._ElementsToRenderArray.length; i++) {
				var element = that._ElementsToRenderArray[i];
				
				if(lDBindingMode == "ResultSet") {
					that._content.push({k:element.key, t:element.text + " (" + element.value + ")"});	
				} else if(lDBindingMode == "MasterData") {
					that._content.push({k:element.key, t:element.text});
				}
			};
			
			that._content.push({k:"-CLEAR-", t:"Clear..."});
		};

		// define model
		that._oModel.setData({
			items: that._content,
			editable: true, 
			tooltip: lCurrentSelection});

		if(that._oldContent == undefined || JSON.stringify(that._content) != JSON.stringify(that._oldContent)) {
			// if data has changed, remove always selected key!
			that.setDSelectedKey("-N/A-");
			that.setDSelectedText("");
			
			that.fireDesignStudioPropertiesChanged(["DSelectedKey", "DSelectedText"]);
			that.fireDesignStudioEvent("onDataChanged");
			
			that._oldContent = that._content;
		}

		// internal key selection is possible only via external key
		if(that.getDSelectedKeyExt() != "") {
			for (var i = 0; i < that._ElementsToRenderArray.length; i++) {
				var currentKey = that._ElementsToRenderArray[i].key;
				var currentKeyExt = that._ElementsToRenderArray[i].keyExt;
				if(currentKeyExt == that.getDSelectedKeyExt()) {
					that.setSelectedKey(currentKey);
					break;
				};
			};
		} else {
			that.setSelectedKey("-N/A-");
		};
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};
//%INIT-START%
myComponentData.instance = DropDown;
jQuery.sap.require("sap.ui.commons.DropdownBox");
sap.ui.commons.DropdownBox.extend(myComponentData.fullComponentName, myComponentData.instance);
});