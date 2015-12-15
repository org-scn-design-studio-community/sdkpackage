var org_scn_community_databound = org_scn_community_databound || {};
org_scn_community_databound.centralDataStorage = org_scn_community_databound.centralDataStorage || {}; 

(function(){
	
var ResultSetInfo = {

/*AUTO PROPERTIES - START*/

	metadata: {
        properties: {
              "DCentralProvisioning": {type: "boolean"},
              "DInformationEventActive": {type: "boolean"},
              "DDataInformation": {type: "string"},
              "DIgnoreResults": {type: "boolean"},
        }
	},

	setData : function(value) {
		this._data = value;
		return this;
	},
	
	getData : function(value) {
		return this._data;
	},

/*AUTO PROPERTIES - END*/

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;
		
		this.addStyleClass("scn-pack-FullSizeFirstChild");
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		that.getPreparedData(that.afterPrepare);
		
		// render the information
		if(!that._lLayout) {
			that._lLayout = new sap.ui.layout.VerticalLayout({
				
			});

			// resize function
			that.onAfterRendering = function() {
				org_scn_community_basics.resizeContentAbsoluteLayout(that, this._lLayout);
			};
		};
		
		that.reloadContent();
	},
	
	reloadContent: function() {
		var that = this;
		
		// Destroy old content
		that._lLayout.destroyContent();
		
		if(that._data != undefined && that._data != "") {
			that._lLayout.addContent(that.createFlowPanel("Number of Data Cells", that._data.data.length));
			that._lLayout.addContent(that.createFlowPanel("Number of Data Columns", that._flatData.geometry.colLength));
			that._lLayout.addContent(that.createFlowPanel("Number of Header Columns", that._flatData.geometry.headersLength));
			that._lLayout.addContent(that.createFlowPanel("Number of Rows", that._flatData.geometry.rowLength));
			
			if(that.getDInformationEventActive()) {
				var dataInfo = {};

				dataInfo.dataCells = that._data.data.length;
				dataInfo.dataColumns = that._flatData.geometry.colLength;
				dataInfo.headerColumns = that._flatData.geometry.headersLength;
				dataInfo.rows = that._flatData.geometry.rowLength;
				
				var dataInfoString = JSON.stringify(dataInfo);
				
				that.setDDataInformation(dataInfoString);

				that.fireDesignStudioPropertiesChanged(["DDataInformation"]);
				that.fireDesignStudioEvent("onDataAvailable");
			}
		} else {
			if(that.getDInformationEventActive()) {
				var dataInfo = {};

				dataInfo.dataCells = 0;
				dataInfo.dataColumns = 0;
				dataInfo.headerColumns = 0;
				dataInfo.rows = 0;
				
				var dataInfoString = JSON.stringify(dataInfo);
				
				that.setDDataInformation(dataInfoString);

				that.fireDesignStudioPropertiesChanged(["DDataInformation"]);
				that.fireDesignStudioEvent("onDataAvailable");
			}
		}
	},
	
	createFlowPanel: function (label, value) {
		var that = this;
		
		var lPanel = new sap.zen.commons.layout.AbsoluteLayout({width: "100%", height: "22px"});
		
		var oLabel = new sap.ui.commons.Label({width: "60%", height: "22px"});
		oLabel.setText(label + ": ");
		oLabel.setDesign(sap.ui.commons.LabelDesign.Bold);
		
		var oText = new sap.ui.commons.Label({width: "40%", height: "22px", textAlign: sap.ui.core.TextAlign.Right});
		oText.setText(value);
		oText.setDesign(sap.ui.commons.LabelDesign.Normal);
		
		lPanel.addContent(oLabel,
			{left: "0px", top: "2px"}	
		);
		
		lPanel.addContent(oText,
			{right: "0px", top: "2px"}	
		);

		return lPanel;
	},
	
	afterPrepare: function (owner) {
		var that = owner;
		
		var dataSourceInfo = {};
		dataSourceInfo.plainData = that.getData();	
		dataSourceInfo.flatData = that._flatData;
		
		if(that.getDCentralProvisioning()) {
			org_scn_community_databound.updateCentralDataStorage(that, dataSourceInfo);
		}
	},
	
	getPreparedData : function (afterPrepare) {
		var that = this;
		
		var data = {};
		var flatData = {};
		
		if(org_scn_community_databound.hasData(that.getData())) {
			var options = org_scn_community_databound.initializeOptions();
			options.ignoreResults = that.getDIgnoreResults();
			that._flatData = org_scn_community_databound.flatten(that.getData(), options);

			that.processData(that._flatData, afterPrepare);
			return;
		} else {
			that._flatData = org_scn_community_databound.getSampleDataFlat(that, that.processData, afterPrepare);
			return;
		}
	},
	
	processData : function (flatData, afterPrepare, owner) {
		var that = this;
		if(owner) {that = owner;}
		
		that._flatData = flatData;
		
		var options = org_scn_community_databound.initializeOptions();
		options.ignoreResults = true;
		org_scn_community_databound.toRowTable(that._flatData,options);

		afterPrepare(that);
	},
};

define([org_scn_community_require.knownComponents.databound.ResultSetInfo.requireName], function(databoundresultsetinfo){
	org_scn_community_components.databound.ResultSetInfo = ResultSetInfo;
	return ResultSetInfo;
});

}).call(this);