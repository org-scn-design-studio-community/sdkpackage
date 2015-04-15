/**
 * Copyright 2014 SCN SDK Community
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

sap.ui.commons.DropdownBox.extend("org.scn.community.databound.DropDown", {

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
        	  "DBindingMode": {type: "string"},
        	  "DElements": {type: "string"},
              "DDimension": {type: "string"},
              "DTopBottom": {type: "string"},
              "DSorting": {type: "string"},
              "DMaxMembers": {type: "int"},
              "DSelectedKey": {type: "string"},
              "DSelectedKeyExt": {type: "string"},
              "DSelectedKeyExtFull": {type: "string"},
              "DSelectedText": {type: "string"},
              "DDoRefresh": {type: "boolean"},
        }
	},

	initDesignStudio: function() {
		var that = this;

		this._content = []; 

		// set the model
		this._oModel = new sap.ui.model.json.JSONModel(); 
		sap.ui.getCore().setModel(this._oModel);
		
		// bind all properties
		this.bindProperty("tooltip", "/tooltip");
		this.bindProperty("editable", "/editable");
		this.setModel(this._oModel);
		
		// create a list item template for the entries
		var oItemTemplate = new sap.ui.core.ListItem();
		oItemTemplate.bindProperty("text", "t");
		oItemTemplate.bindProperty("key", "k");
		this.bindItems("/items", oItemTemplate);

		var onChange = function (oEvent) {
			var selection = oEvent.getParameters().selectedItem;
			var key = selection.getKey();
			var text = selection.getText();

			if(key == "-N/A-") {
// currently this does not work...
//				this.setDSelectedKey("-N/A-");
//				this.setDSelectedText("");
//				
//				that.fireDesignStudioPropertiesChanged(["dSelectedKey", "dSelectedText"]);
//				that.fireDesignStudioEvent("onUnselect");
			} else if(key == "-CLEAR-") {
				this.setDSelectedKey("-N/A-");
				this.setDSelectedText("");
				
				that.fireDesignStudioPropertiesChanged(["DSelectedKey", "DSelectedText"]);
				that.fireDesignStudioEvent("onInternalSelectionChanged");
				that.fireDesignStudioEvent("onClear");
			} else {
				this.setDSelectedKey(key);
				this.setDSelectedText(text);
				
				that.fireDesignStudioPropertiesChanged(["DSelectedKey", "DSelectedText"]);
				that.fireDesignStudioEvent("onInternalSelectionChanged");
				that.fireDesignStudioEvent("onSelectionChanged");
			}
		};
		this.attachChange(onChange);
	},
	
	renderer: {},
		
	afterDesignStudioUpdate: function() {
		var that = this;
		
		var lData = this._data;
		var lMetadata = this._metadata;
		
		var selectionList = "";
		if(this.getDSelectedKeyExtFull() != undefined && this.getDSelectedKeyExtFull().length > 0) {
			var selection = this.getDSelectedKeyExtFull();
			if(selection.length > 25) {
				selection = selection.substring(0, 25) + " ( & more ... )";
			}
			selectionList = " [" + selection + "]";
		} else {
			selectionList = " [All Members Selected]";
		}
		var lCurrentSelection = "Current Selection" + selectionList;
		
		if(this.getDDoRefresh()){
			var lDBindingMode = this.getDBindingMode();
			
			this._ElementsToRenderArray = [];
			
			if(lDBindingMode == "Result Set") {
				var options = org_scn_community_databound.initializeOptions();
				
				options.iMaxNumber = this.getDMaxMembers();
				options.iTopBottom = this.getDTopBottom();
				options.iSortBy = this.getDSorting();
				options.iDuplicates = "Ignore";
				options.iNnumberOfDecimals = 2;
				
				this._ElementsToRenderArray = org_scn_community_databound.getTopBottomElementsForDimension 
			     (lData, lMetadata, this.getDDimension(), options).list;
			} else if(lDBindingMode == "Master Data") {
				var lDElements = this.getDElements();
				if(lDElements != null && lDElements != undefined && lDElements != ""){
					var lDlementsJson = JSON.parse(lDElements);
					this._ElementsToRenderArray = lDlementsJson.members;
				}
			}
			
			this._content = []; 
			
			this._content.push({k:"-N/A-", t: lCurrentSelection});

			for (var i = 0; i < this._ElementsToRenderArray.length; i++) {
				var element = this._ElementsToRenderArray[i];
				
				if(lDBindingMode == "Result Set") {
					this._content.push({k:element.key, t:element.text + " (" + element.value + ")"});	
				} else if(lDBindingMode == "Master Data") {
					this._content.push({k:element.key, t:element.text});
				}
			};
			
			this._content.push({k:"-CLEAR-", t:"Clear..."});
		};

		// define model
		this._oModel.setData({
			items: this._content,
			editable: true, 
			tooltip: lCurrentSelection});

		if(this._oldContent == undefined || JSON.stringify(this._content) != JSON.stringify(this._oldContent)) {
			// if data has changed, remove always selected key!
			this.setDSelectedKey("-N/A-");
			this.setDSelectedText("");
			
			that.fireDesignStudioPropertiesChanged(["DSelectedKey", "DSelectedText"]);
			that.fireDesignStudioEvent("onDataChanged");
			
			this._oldContent = this._content;
		}

		// internal key selection is possible only via external key
		if(this.getDSelectedKeyExt() != "") {
			for (var i = 0; i < this._ElementsToRenderArray.length; i++) {
				var currentKey = this._ElementsToRenderArray[i].key;
				var currentKeyExt = this._ElementsToRenderArray[i].keyExt;
				if(currentKeyExt == this.getDSelectedKeyExt()) {
					this.setSelectedKey(currentKey);
					break;
				};
			};
		} else {
			this.setSelectedKey("-N/A-");
		};
	},
});