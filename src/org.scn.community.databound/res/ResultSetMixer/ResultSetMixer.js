var org_scn_community_databound = org_scn_community_databound || {};
org_scn_community_databound.centralDataStorage = org_scn_community_databound.centralDataStorage || {}; 

define(["../../../org.scn.community.shared/modules/component.core", "./ResultSetMixerSpec"], function() {

var myComponentData = org_scn_community_require.knownComponents.databound.ResultSetMixer;
myComponentData.instance = {

/*AUTO PROPERTIES - START*/

	metadata: {
        properties: {
              "DMasterProvisioner": {type: "string"},
              "DMasterGeometry": {type: "string"},
              "DSlaveProvisioner": {type: "string"},
              "DSlaveColumnIndex": {type: "int"},
              "DCollectMultipleMatches": {type: "string"},
              "DSlaveContentCondition": {type: "string"},
              "DSlaveRowCondition": {type: "string"},
              "DSlaveColumnCondition": {type: "string"},
        }
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
	
	onProvisionerDataChangeEvent: function () {
		var that = this;
		
		that.afterDesignStudioUpdate();
	},
	
	reloadContent: function() {
		var that = this;
		
		// Destroy old content
		that._lLayout.destroyContent();
		
		that._lLayout.addContent(that.createFlowPanel("DONE", ""));
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
		
		var conditionColumns = that.getDSlaveColumnCondition();
		var conditionRows = that.getDSlaveRowCondition();
		var conditionContent = that.getDSlaveContentCondition();
		var slaveColumnIndex = that.getDSlaveColumnIndex();
		var collectMultiple = that.getDCollectMultipleMatches();
		
		var options = {};
		options.conditionColumns = conditionColumns;
		options.conditionRows = conditionRows;
		options.conditionContent = conditionContent;
		options.collectMultiple = (collectMultiple == "Collect");
		options.slaveColumnIndex = slaveColumnIndex;
		
		if(org_scn_community_databound.hasData(that._slaveData.plainData)) {
			// mix data by keys
			var masterGeometry = that.getDMasterGeometry();
			if(masterGeometry == "Structure") {
				org_scn_community_databound.mixStructure(that._masterData, that._slaveData, options);	
			} else if(masterGeometry == "Rows") {
				org_scn_community_databound.mixRows(that._masterData, that._slaveData, options);	
			}
		}
		
		org_scn_community_databound.updateCentralDataStorage(that, that._masterData);
	},
	
	getPreparedData : function (afterPrepare) {
		var that = this;
		
		var masterProvisioner = that.getDMasterProvisioner();
		var hasMasterDataProvisioner = false;
		if(masterProvisioner != undefined && masterProvisioner.length != "") {
			hasMasterDataProvisioner = (org_scn_community_databound.centralDataStorage[masterProvisioner] != undefined);
			org_scn_community_databound.registerCentralEventReceiver(masterProvisioner, that);
		}

		if(hasMasterDataProvisioner) {
			that._masterData = org_scn_community_databound.centralDataStorage[masterProvisioner];
			that._masterData = org_scn_community_basics.cloneJson(that._masterData);
		}
		
		var slaveProvisioner = that.getDSlaveProvisioner();
		var hasSlaveDataProvisioner = false;
		if(slaveProvisioner != undefined && slaveProvisioner.length != "") {
			hasSlaveDataProvisioner = (org_scn_community_databound.centralDataStorage[slaveProvisioner] != undefined);
			org_scn_community_databound.registerCentralEventReceiver(slaveProvisioner, that);
		}

		if(hasSlaveDataProvisioner) {
			that._slaveData = org_scn_community_databound.centralDataStorage[slaveProvisioner];
		}
		
		if(that._masterData && that._slaveData) {
			afterPrepare(that);	
		}
	},
};

// define([], function(databoundresultsetmixer){
	return myComponentData.instance;
// });

});