/**
 * Copyright 2014 Karol Kalisz
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

jQuery.sap.require("sap.ui.ux3.FacetFilter");
jQuery.sap.require("sap.ui.ux3.VisibleItemCountMode");

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.databound.FacetFilter", {

	setDData : function(value) {
		this._data = value;

		// clean mixed Data
		that._mixedData = undefined;
		return this;
	},
	
	getDData : function(value) {
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
        	  "DElements": {type: "string"},
        	  "DSelection": {type: "string"},
              "DMaxMembers": {type: "int"},
        }
	},

	initDesignStudio: function() {
		var that = this;
		
		that._facetFilter = new sap.ui.ux3.FacetFilter(this.getId() + "_ff");
		
		// set the model
		that._oModel = new sap.ui.model.json.JSONModel(); 
		that._facetFilter.setModel(that._oModel);
		
    	that._oItemTemplate = new sap.ui.core.ListItem({width: "200px", text:"{text}", key:"{name}", enabled:"{enabled}"});
    	
    	this.addContent(
    		that._facetFilter,
			{left: "0px", top: "0px"}
		);
    	
    	that._facetFilter.setVisibleItemCountMode(sap.ui.ux3.VisibleItemCountMode.Auto);
	},
	
	renderer: {},
		
	afterDesignStudioUpdate: function() {
		var that = this;

		// define model
		if(that._mixedData == undefined) {
			that._mixedData = this._getMixedData();	
		
			that._oModel.setData(that._mixedData);
			
			if(that._isInitialized == undefined) {
				for (dimensionKey in that._mixedData) {
					var lDimension = that._mixedData[dimensionKey];
					
					var name = lDimension.name;
					var text = lDimension.text;
					
					var lDimList = new sap.ui.ux3.FacetFilterList({
						title: text,
						items : {path : "/" + dimensionKey + "/items", template : that._oItemTemplate}
					});
					
					lDimList.attachSelect(function(oEvent) {
						var selection = {};
						selection.dimension = oEvent.oSource._dKey;
		
						if(oEvent.getParameter("all")) {
							selection.keys = ["-ALL-"];
						} else {
							var keys = oEvent.oSource.getSelectedKeys();
							selection.keys = keys;
						}
		
						var selectionJson = JSON.stringify(selection);
		
						that.setDSelection(selectionJson);
						that.fireDesignStudioPropertiesChanged(["DSelection"]);
						that.fireDesignStudioEvent("onDSelectionChanged");
					});
					
					that._facetFilter.addList(lDimList);

					lDimList._dName = name;
					lDimList._dKey = dimensionKey;
				}
				
				that._addSepcialCss();
				
				that._isInitialized = true;
			}
		}		
	},
	
	_addSepcialCss: function() {
		var css = "";
		css = css + "#" + this.getId() + "_loadingState {visibility: hidden !important;}";
		css = css + "#" + this.getId() + "_loadingStateBox {visibility: hidden !important;}";
		css = css + "#" + this.getId() + "_loadingState_message {visibility: hidden !important;}";
		css = css + "#" + this.getId() + " > div[class=\"sapUiLayoutAbsPos\"] {width: 100% !important;height: 100% !important;}";
		
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = css;
		document.getElementsByTagName('head')[0].appendChild(style);
	},
	
	_getMixedData: function() {
		var lData = this._data;
		var lMetadata = this._metadata;

		var lDimensions = this.getDElements();
		
		var oData = {};

		if(lDimensions != undefined) {
			var lDimensionsJson = JSON.parse(lDimensions);
			for (var iD = 0; iD < lDimensionsJson.length; iD++) {
				var dimension = lDimensionsJson[iD];
				
				if(dimension.isMeasuresDimension != true) {
					var name = dimension.name;
					var text = dimension.text;
					var members = dimension.members;
					
					oData[name] = {};
					oData[name].name = name;
					oData[name].text = text;
					oData[name].items = [];
					
					for (var iM = 0; iM < members.length; iM++) {
						var member = members[iM];
						
						var memberJson = {};
						memberJson.name = member.internalKey;
						memberJson.text = member.text;
						
						oData[name].items.push(memberJson);
					}
				}
			}
		} else {
			oData = {
				brands: [
	 				{name : "BMW", key: "1"},
	 				{name : "AUDI", key: "2", enabled: false}
	 			],
	 			models: [
	 				{name : "320d", key: "1"},
	 				{name : "325i", key: "2"},
	 				{name : "330d", key: "3"},
	 				{name : "330i", key: "4"},
	 				{name : "335i", key: "5"},
	 				{name : "A1", key: "6"},
	 				{name : "A3", key: "7"},
	 				{name : "A4", key: "8"},
	 				{name : "A5", key: "9"},
	 				{name : "A6", key: "10"}
	 			],
	 			types: [
	 				{name : "Limousine", key: "1"},
	 				{name : "Coupé", key: "2"},
	 				{name : "Cabrio", key: "3"}
	 			]						
	 		};
		}

		return oData;
	},
});