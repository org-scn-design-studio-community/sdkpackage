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
		var that = this;
		
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

	getMetadata : function() {
		return this._metadata;
	},
	
	setDElements : function(value) {
		this.DElements = value;
		
		this._isInitialized = undefined;
		return this;
	},
	
	getDElements : function() {
		return this.DElements;
	},

	metadata: {
        properties: {
        	  "DSelection": {type: "string"},
        	  "DDisplayText": {type: "string"},
        	  "DSortingType": {type: "string"},
        	  "DSortingDirection": {type: "string"},
        	  "DClearOthers": {type: "boolean"},
              "DMaxMembers": {type: "int"},
              "DContentMode": {type: "string"},
        }
	},

	initDesignStudio: function() {
		var that = this;
		
		that._facetFilter = new sap.ui.ux3.FacetFilter(this.getId() + "_ff");
		
		this.addStyleClass("scn-pack-FullSizeChildren");
		
		// set the model
		that._oModel = new sap.ui.model.json.JSONModel(); 
		that._facetFilter.setModel(that._oModel);
		    	
    	this.addContent(
    		that._facetFilter,
			{left: "0px", top: "0px"}
		);

    	that.lists = {}; 
    	
    	that._facetFilter.setVisibleItemCountMode(sap.ui.ux3.VisibleItemCountMode.Auto);
    	
    	org_scn_community_basics.hideNoDataOverlay(this.getId(), true);
    	
    	that.onAfterRendering = function() {
    	};
	},
	
	renderer: {},
		
	afterDesignStudioUpdate: function() {
		var that = this;

		// define model
		if(that._mixedData == undefined) {
			
			that._facetFilter.removeAllLists()
			
			var lData = this._data;
			var lMetadata = this._metadata;
			var lDimensions = this.getDElements();

			var options = org_scn_community_databound.initializeOptions();
			options.iMaxNumber = 10000;
			options.allKeys = true;
			options.idPrefix = this.getId();
			options.iDuplicates = "Sum";
			options.iDisplayText = "Text";
			
			that._mixedData = org_scn_community_databound.getDataModelForDimensions(lData, lMetadata, lDimensions, options);	
		
			if(that._isInitialized == undefined) {
				for (dimensionKey in that._mixedData) {
					var lDimension = that._mixedData[dimensionKey];
					
					var name = lDimension.name;
					var text = lDimension.text;

					var additionalText = "";
					var displaySecondaryValues = false;
					if(that.getDDisplayText() == "Text (Value)") {
						additionalText = "{valueS}";
						displaySecondaryValues = true;
					}

					var oItemTemplate = new org.scn.community.databound.ExtraListItem(
						{text:"{display}", additionalText: additionalText, key:"{name}", enabled:"{enabled}",
							customData: new sap.ui.core.CustomData({key:"valueSign", value:"{valueSign}", writeToDom:true}), 
						});
					
					var lDimList = new sap.ui.ux3.FacetFilterList({
						title: text,
						items : {path : "/" + dimensionKey + "/items", template : oItemTemplate},
						showCounter: true,
						displaySecondaryValues: displaySecondaryValues,
					});
					
					lDimList.attachSelect(function(oEvent) {
						var selection = {};
						selection.dimension = oEvent.oSource._dKey;
		
						selection.clearOthers = false;
						if(oEvent.getParameter("all")) {
							selection.keys = ["-ALL-"];
						} else {
							var keys = oEvent.oSource.getSelectedKeys();
							selection.keys = keys;
							
							for (var iM = 0; iM < selection.keys.length; iM++) {
								// check if key is available or not
								if(that._mixedData[selection.dimension].availableMembers && 
										that._mixedData[selection.dimension].availableMembers.indexOf("|" + selection.keys[iM] + "|") == -1){
									selection.clearOthers = true;
									break;
								}
							}
						}

						var selectionJson = JSON.stringify(selection);

						that.setDSelection(selectionJson);
						that.fireDesignStudioPropertiesChanged(["DSelection"]);
						that.fireDesignStudioEvent("onInternalSelectionChanged");
					});
					
					that._facetFilter.addList(lDimList);

					lDimList._dName = name;
					lDimList._dKey = dimensionKey;
					
					that.lists[dimensionKey] = lDimList;
				}

				that._isInitialized = true;
			}
		}
		
		var lSelection = this.getDSelection();
		if(lSelection != undefined && lSelection != "") {
			var selectionJson = JSON.parse(lSelection);
			
			if(selectionJson.keys == undefined) {
				for (dimensionKey in that._mixedData) {
					var lDimension = that._mixedData[dimensionKey];

					var members = lDimension.items;
					var selectionInDimension = selectionJson[lDimension.name];
					
					if(selectionInDimension.filterExt.length > 2) {
						var filteredMemberKeys = [];
						
						for (var iM = 0; iM < members.length; iM++) {
							var member = members[iM];
							if (selectionInDimension.filterExt.indexOf("; " + member.externalKey + ";") > -1) {
								member.selected = true;
								
								filteredMemberKeys.push(member.name);
							} else {
								member.selected = false;
							}
						}
						
						that.lists[dimensionKey].setSelectedKeys(filteredMemberKeys);
					} else {
						that.lists[dimensionKey].setSelectedKeys([]);
					}
					
					var lSortingType = this.getDSortingType();
					if(lSortingType != "Default") {
						var sortByAttribute = function (prop, descending){

						var result = 1;
						
						if(descending) {
							result = -1;
						}
						
						return function(a,b){
						    if( a[prop] > b[prop]){
						    	return result;
						    } else if( a[prop] < b[prop] ){
						    	return result * -1;
						    }
					      	return 0;
							}
						};
						
						var lSortingDirection = that.getDSortingDirection();
						
						if(lSortingDirection == "Descending"){
							lSortingDirection = true;
						} else {
							lSortingDirection = false;
						}
						
						if(lSortingType == "Selected") {
							members.sort(sortByAttribute("selected", lSortingDirection));
						} else if(lSortingType == "Value") {
							members.sort(sortByAttribute("value", lSortingDirection));
						} else if(lSortingType == "Alphabetical") {
							members.sort(sortByAttribute("name", lSortingDirection));
						}
					}
				}
			}
		}

		that._oModel.setData(that._mixedData);
	},
	
	getDisplayText: function() {
		return "karol";
	},
	
	_containsInArray: function(members, memberName) {
	    var i = null;
	    for (i = 0; members.length > i; i += 1) {
	        if (members[i] === memberName) {
	            return true;
	        }
	    }
	     
	    return false;
	},
});