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

sap.ui.core.ListItem.extend("org.scn.community.databound.ExtraListItem", {

	metadata: {
        properties: {
        	  "available": {type: "boolean"},
        }
	},
});

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.databound.FacetFilter", {

	setData : function(value) {
		this._data = value;

		// clean mixed Data
		that._mixedData = undefined;
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
			var lData = this._data;
			var lMetadata = this._metadata;
			var lDimensions = this.getDElements();

			var options = org_scn_community_databound.initializeOptions();
			options.iMaxNumber = 10000;
			options.allKeys = true;
			options.idPrefix = this.getId();
			
			that._mixedData = org_scn_community_databound.getDataModelForDimensions(lData, lData, lDimensions, options);	
		
			that._oModel.setData(that._mixedData);
			
			if(that._isInitialized == undefined) {
				for (dimensionKey in that._mixedData) {
					var lDimension = that._mixedData[dimensionKey];
					
					var name = lDimension.name;
					var text = lDimension.text;

					var oItemTemplate = new org.scn.community.databound.ExtraListItem({available:"{available}", text:"{text}", key:"{name}", enabled:"{enabled}"});
			
					var lDimList = new sap.ui.ux3.FacetFilterList({
						title: text,
						items : {path : "/" + dimensionKey + "/items", template : oItemTemplate}
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
				
				org_scn_community_basics.hideNoDataOverlay(this.getId(), true);
				
				that._isInitialized = true;
			}
		}		
	},
});