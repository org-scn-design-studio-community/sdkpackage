var org_scn_community_databound = org_scn_community_databound || {};
org_scn_community_databound.centralDataStorage = org_scn_community_databound.centralDataStorage || {}; 

(function(){
	
var ResultSetStructureBlender = {

/*AUTO PROPERTIES - START*/

	metadata: {
        properties: {
              "DMasterStructureProvisioner": {type: "string"},
              "DSlaveResultSetProvisioner1": {type: "string"},
              "DSlaveResultSetProvisioner2": {type: "string"},
              "DSlave2ContentCondition": {type: "string"},
              "DSlave2StructureRowCondition": {type: "string"},
              "DSlave2StructureColumnCondition": {type: "string"},
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
	
	reloadContent: function() {
		var that = this;
		
		// Destroy old content
		that._lLayout.destroyContent();
		
		that._lLayout.addContent(that.createFlowPanel("DONE", ""));
	},
	
	createFlowPanel: function (label, value) {
		var that = this;
		
		var lPanel = new sap.ui.commons.layout.AbsoluteLayout({width: "100%", height: "22px"});
		
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
		
		// mix data by keys
		org_scn_community_databound.blendStructure(that._masterData, that._slaveData1);
		org_scn_community_databound.centralDataStorage[that.oComponentProperties.id] = that._masterData;
	},
	
	getPreparedData : function (afterPrepare) {
		var that = this;
		
		var masterProvisioner = that.getDMasterStructureProvisioner();
		that._masterData = org_scn_community_databound.centralDataStorage[masterProvisioner];
		
		var slave1Provisioner = that.getDSlaveResultSetProvisioner1();
		that._slaveData1 = org_scn_community_databound.centralDataStorage[slave1Provisioner];

		var slave2Provisioner = that.getDSlaveResultSetProvisioner2();
		that._slaveData2 = org_scn_community_databound.centralDataStorage[slave2Provisioner];
		
		afterPrepare(that);
	},
};

define([org_scn_community_require.knownComponents.databound.ResultSetStructureBlender.requireName], function(databoundresultsetstructureblender){
	org_scn_community_components.databound.ResultSetStructureBlender = ResultSetStructureBlender;
	return ResultSetStructureBlender;
});

}).call(this);