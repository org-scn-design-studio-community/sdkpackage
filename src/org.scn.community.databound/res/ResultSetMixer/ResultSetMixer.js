var org_scn_community_databound = org_scn_community_databound || {};
org_scn_community_databound.centralDataStorage = org_scn_community_databound.centralDataStorage || {}; 

(function(){

var myComponentData = org_scn_community_require.knownComponents.databound.ResultSetMixer;
myComponentData.instance = {

/*AUTO PROPERTIES - START*/

	metadata: {
        properties: {
              "DMasterProvisioner": {type: "string"},
              "DMasterGeometry": {type: "string"},
              "DSlaveProvisioner": {type: "string"},
              "DSlaveColumnIndex": {type: "int"},
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
		
		var conditionColumns = that.getDSlaveColumnCondition();
		var conditionRows = that.getDSlaveRowCondition();
		var conditionContent = that.getDSlaveContentCondition();
		var slaveColumnIndex = that.getDSlaveColumnIndex();
		
		var options = {};
		options.conditionColumns = conditionColumns;
		options.conditionRows = conditionRows;
		options.conditionContent = conditionContent;
		options.collectMultiple = true;
		options.slaveColumnIndex = slaveColumnIndex;
		
		// mix data by keys
		var masterGeometry = that.getDMasterGeometry();
		if(masterGeometry == "Structure") {
			org_scn_community_databound.mixStructure(that._masterData, that._slaveData, options);	
		} else if(masterGeometry == "Rows") {
			org_scn_community_databound.mixRows(that._masterData, that._slaveData, options);	
		}
		
		org_scn_community_databound.centralDataStorage[that.oComponentProperties.id] = that._masterData;
	},
	
	getPreparedData : function (afterPrepare) {
		var that = this;
		
		var masterProvisioner = that.getDMasterProvisioner();
		that._masterData = org_scn_community_databound.centralDataStorage[masterProvisioner];
		that._masterData = org_scn_community_basics.cloneJson(that._masterData);
		
		var slave1Provisioner = that.getDSlaveProvisioner();
		that._slaveData = org_scn_community_databound.centralDataStorage[slave1Provisioner];
		
		afterPrepare(that);
	},
};

define([myComponentData.requireName], function(databoundresultsetmixer){
	return myComponentData.instance;
});

}).call(this);