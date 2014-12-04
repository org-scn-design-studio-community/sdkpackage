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
              "dimension": {type: "string"},
              "topBottom": {type: "string"},
              "sorting": {type: "string"},
              "maxNumber": {type: "int"},
              "dSelectedKey": {type: "string"},
              "dSelectedText": {type: "string"},
              "doRefresh": {type: "boolean"},
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
				
				that.fireDesignStudioPropertiesChanged(["dSelectedKey", "dSelectedText"]);
				that.fireDesignStudioEvent("onClear");
			} else {
				this.setDSelectedKey(key);
				this.setDSelectedText(text);
				
				that.fireDesignStudioPropertiesChanged(["dSelectedKey", "dSelectedText"]);
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
		
		if(this.getDoRefresh()){
			var lElementsToRenderArray = org_scn_community_databound.getTopBottomElementsForDimension 
			     (lData, this.getDimension(), lMetadata, this.getMaxNumber(), this.getTopBottom(), this.getSorting(), "Ignore Duplicates");
			
			this._content = []; 
			
			this._content.push({k:"-N/A-", t:"Default Selection"});

			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				
				this._content.push({k:element.key, t:element.text});
			};
			
			this._content.push({k:"-CLEAR-", t:"Clear..."});
		};

		// define model
		this._oModel.setData({
			items: this._content,
			editable: true, 
			tooltip: "t"});

		if(this._oldContent == undefined || JSON.stringify(this._content) != JSON.stringify(this._oldContent)) {
			// if data has changed, remove always selected key!
			this.setDSelectedKey("-N/A-");
			this.setDSelectedText("");
			
			that.fireDesignStudioPropertiesChanged(["dSelectedKey", "dSelectedText"]);
			that.fireDesignStudioEvent("onDataChanged");
			
			this._oldContent = this._content;
		}
		
		if(this.getDSelectedKey() != "") {
			for (var i = 0; i < this._content.length; i++) {
				var currentKey = this._content[i].k;
				if(currentKey == this.getDSelectedKey()) {
					this.setSelectedKey(currentKey);
					break;
				};
			};
		} else {
			this.setSelectedKey("-N/A-");
		};
	},
});