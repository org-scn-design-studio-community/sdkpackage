(function(){

var myComponentData = org_scn_community_require.knownComponents.databound.FacetSelector;

FacetSelector = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		
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
			
			this.processData(flatData, that.afterPrepare, that);
			return;
		}
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	processData: function(flatData, afterPrepare, owner) {
		var that = owner;
		that._flatData = flatData;
		
		var lDimensions = this.getDElements();

		var options = org_scn_community_databound.initializeOptions();
		options.iMaxNumber = 10000;
		options.allKeys = true;
		options.idPrefix = this.getId();
		options.iDuplicates = "Sum";
		options.iDisplayText = "Text";
		options.iNullValues = this.getDZeroValuesMode();
	
		that._mixedData = org_scn_community_databound.getDataModelForDimensions(that.getDataCellList(), that.getMetadata(), lDimensions, options);
		
		// process the flat data
		
		afterPrepare(owner);
	},
	
	afterPrepare: function(owner) {
		var that = owner;
		
		// process UI changes
	}
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

define([myComponentData.requireName], function(databoundfacetselector){
	myComponentData.instance = FacetSelector;
	return myComponentData.instance;
});

}).call(this);