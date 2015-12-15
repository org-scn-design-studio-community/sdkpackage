//%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./FacetSelectorSpec",
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

FacetSelector = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		
		that._mainLayout = new sap.ui.layout.HorizontalLayout (that.getId() + "_ml", {
			
		});
		that._mainLayout.addStyleClass("scn-pack-FacetSelectorMain");
		
		that.addStyleClass("scn-pack-FullSizeChildren");
		that.addStyleClass("scn-pack-FacetSelector");

		// resize function
		that.onAfterRendering = function() {
			org_scn_community_basics.resizeContentAbsoluteLayout(that, that._mainLayout, that.afterResize);
		};
		
		org_scn_community_basics.hideNoDataOverlay(that.getId(), true);
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		var flatData = {};
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		if(!org_scn_community_databound.hasData(that.getDataCellList(), that.getMetadata())) {
			flatData = org_scn_community_databound.getSampleDataFlat(that, that.processData, that.afterPrepare);
			return;
		} else {
			var options = org_scn_community_databound.initializeOptions();
			options.ignoreResults = true;
			// flatData = org_scn_community_databound.flatten(that.getData(), options);
			
			that.processData(flatData, that.afterPrepare, that);
			return;
		}
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	},
	
	afterResize: function(width, height, parent) {
		var that = parent;
	},

	/* COMPONENT SPECIFIC CODE - START METHODS*/
	processData: function(flatData, afterPrepare, owner) {
		var that = owner;
		that._flatData = flatData;
		
		// process the data
		
		var lDimensions = that.getDElements();

		var options = org_scn_community_databound.initializeOptions();
		options.iMaxNumber = that.getDMaxMembers();
		options.allKeys = true;
		options.idPrefix = that.getId();
		options.iDuplicates = "Sum";
		
		if(that.getDDisplayText() == "Text_Value") {
			options.iDisplayText = "Text (Value)";
		} else if(that.getDDisplayText() == "Text_Count") {
			options.iDisplayText = "Text (Count)";
		} else {
			options.iDisplayText = "Text";
		}
		
		options.iNullValues = that.getDZeroValuesMode();
	
		var dataList = that.getDataCellList();
		var metaData = that.getDSMetadata();
		that._mixedData = org_scn_community_databound.getDataModelForDimensions(dataList, metaData, lDimensions, options);
		
		afterPrepare(owner);
	},
	
	afterPrepare: function(owner) {
		var that = owner;
		
		// process UI changes
	
		// check the dimensions, 1 dim -> 1 vertical layout
		
		var width = that.getDFacetWidth() + "px";
		var maxDisplayMembers = that.getDMaxDisplayMembers();
		
		// remove old content
		that._mainLayout.destroyContent();
		that._mainLayout.removeAllContent();

		for (dimensionKey in that._mixedData) {
			var lDimension = that._mixedData[dimensionKey];
			
			var dName = lDimension.name;
			var dText = lDimension.text;

			var dimLayout = new sap.ui.layout.VerticalLayout (that.getId() + "_l_" + dName, {
				
			});
			dimLayout._dimName = dName;
			dimLayout.addStyleClass("scn-pack-FacetSelectorDim");
			
			var dimLabel = new sap.ui.commons.Label({text:dText, width: width});
			dimLabel.addStyleClass("scn-pack-Bold");
			
			dimLayout.addContent(dimLabel);
			that._mainLayout.addContent(dimLayout);

			var members = lDimension.items;
			
			var lSortingDirection = that.getDSortingDirection();
			var lSortingType = that.getDSortingType();
			
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
			
			// all members
			var mKey = org_scn_community_databound.fixMemberKey(that.getId() + "_l_" + dName, "_all_", that);
			var memLinkAll = new sap.ui.commons.Link({
					id: mKey, 
					text: "All", 
					width: width,
					press: that.onLinkPress
					});
			memLinkAll.addStyleClass("scn-pack-5toRight");

			memLinkAll._realKey = "-ALL-";
			memLinkAll._realDimKey = dName;
			memLinkAll._owner = that;
				
			dimLayout.addContent(memLinkAll);

			var counter = 0;
			// check the members, 1 mem -> one link
			for (memberIndex in members) {
				counter = counter + 1;
				if(counter > maxDisplayMembers) {
					break;
				}
				
				var member = members[memberIndex];

				var mName = member.name;
				var mText = member.display;
				var mId = mName;

				mKey = org_scn_community_databound.fixMemberKey(that.getId() + "_l_" + dName, mName, that);

				var memLink = new sap.ui.commons.Link({
					id: mKey, 
					text:mText, 
					width: width,
					press: that.onLinkPress
					});
				memLink.addStyleClass("scn-pack-5toRight	");

				memLink._realKey = mName;
				memLink._realDimKey = dName;
				memLink._owner = that;
				memLink._member = member;
				
				dimLayout.addContent(memLink);
			}
		}
	},
	
	onLinkPress: function (oEvent) {
		var that = oEvent.oSource._owner;

		var memberKey = oEvent.oSource._realKey;
		var dimensionKey = oEvent.oSource._realDimKey;
		
		var selection = {};
		selection.dimension = dimensionKey;
		
		var keys = [];
		keys.push(memberKey);
		
		selection.keys = keys;
		
		if(oEvent.oSource._member && oEvent.oSource._member.value == 0 && that.getDClearOthers()) {
			selection.clearOthers = true;	
		}
		
		var selectionJson = JSON.stringify(selection);

		that.setDSelection(selectionJson);
		that.fireDesignStudioPropertiesChangedAndEvent(["DSelection"], "onInternalSelectionChanged");
	}
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = FacetSelector;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});