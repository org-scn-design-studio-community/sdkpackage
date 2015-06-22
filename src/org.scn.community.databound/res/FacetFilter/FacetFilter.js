(function(){

var myComponentData = org_scn_community_require.knownComponents.databound.FacetFilter;

sap.ui.core.ListItem.extend("org.scn.community.databound.ExtraListItem", {

	metadata: {
        properties: {
        	  "available": {type: "boolean"},
        }
	},
});

FacetFilter = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;
		org_scn_community_component_Core(that, myComponentData);

		jQuery.sap.require("sap.ui.ux3.FacetFilter");
		jQuery.sap.require("sap.ui.ux3.VisibleItemCountMode");

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that._facetFilter = new sap.ui.ux3.FacetFilter(this.getId() + "_ff");
		
		that.addStyleClass("scn-pack-FacetFilter");
		that.addStyleClass("scn-pack-FullSizeChildren");
		
		// set the model
		that._oModel = new sap.ui.model.json.JSONModel(); 
		that._facetFilter.setModel(that._oModel);
		 
		// resize function
		that.onAfterRendering = function() {
			org_scn_community_basics.resizeContentAbsoluteLayout(that, that._facetFilter);
		};

		that.lists = {}; 
    	
		that._facetFilter.setVisibleItemCountMode(sap.ui.ux3.VisibleItemCountMode.Auto);
    	
		org_scn_community_basics.hideNoDataOverlay(this.getId(), true);
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		var lDimensions = this.getDElements();

		var options = org_scn_community_databound.initializeOptions();
		options.iMaxNumber = that.getDMaxMembers();
		options.allKeys = true;
		options.idPrefix = this.getId();
		options.iDuplicates = "Sum";

		if(that.getDDisplayText() == "Text (Value)") {
			options.iDisplayText = "Text (Value)";
		} else if(that.getDDisplayText() == "Text (Count)") {
			options.iDisplayText = "Text (Count)";
		} else {
			options.iDisplayText = "Text";
		}
		
		options.iNullValues = this.getDZeroValuesMode();
	
		var dataList = that.getData();
		var metaData = that.getDSMetadata();
		that._mixedData = org_scn_community_databound.getDataModelForDimensions(dataList, metaData, lDimensions, options);
		
		that._facetFilter.removeAllLists();

		for (dimensionKey in that._mixedData) {
			var lDimension = that._mixedData[dimensionKey];

			var name = lDimension.name;
			var text = lDimension.text;

			var additionalText = "";
			var displaySecondaryValues = false;
			if(that.getDShowSecondValue()) {
				if(that.getDSecondValueContent() == "Value") {
					additionalText = "{valueS}";
				} else if(that.getDSecondValueContent() == "Count") {
					additionalText = "{count}";
				} else {
					additionalText = "{name}";
				}
				
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
				that.fireDesignStudioPropertiesChangedAndEvent(["DSelection"], "onInternalSelectionChanged");
			});

			that._facetFilter.addList(lDimList);

			lDimList._dName = name;
			lDimList._dKey = dimensionKey;

			that.lists[dimensionKey] = lDimList;
			}
		
		var lSelection = this.getDSelection();
		if(lSelection != undefined && lSelection != "") {
			var selectionJson = JSON.parse(lSelection);
			
			if(selectionJson.keys == undefined) {
				for (dimensionKey in that._mixedData) {
					var lDimension = that._mixedData[dimensionKey];

					var members = lDimension.items;
					var selectionInDimension = selectionJson[lDimension.name];
					
					if(selectionInDimension == undefined) {
						continue;
					}

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
						var lSortingDirection = that.getDSortingDirection();
						
						if(lSortingDirection == "Descending"){
							lSortingDirection = true;
						} else {
							lSortingDirection = false;
						}
						
						if(lSortingType == "Selected") {
							members.sort(org_scn_community_databound.sortByAttribute("selected", lSortingDirection));
						} else if(lSortingType == "Value") {
							members.sort(org_scn_community_databound.sortByAttribute("value", lSortingDirection));
						} else if(lSortingType == "Alphabetical") {
							members.sort(org_scn_community_databound.sortByAttribute("name", lSortingDirection));
						} else if(lSortingType == "Count") {
							members.sort(org_scn_community_databound.sortByAttribute("count", lSortingDirection));
						}
					}
				}
			}
		}

		that._oModel.setData(that._mixedData);
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	_containsInArray: function(members, memberName) {
	    var i = null;
	    for (i = 0; members.length > i; i += 1) {
	        if (members[i] === memberName) {
	            return true;
	        }
	    }
	     
	    return false;
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

define([myComponentData.requireName], function(databoundfacetfilter){
	myComponentData.instance = FacetFilter;
	return myComponentData.instance;
});

}).call(this);