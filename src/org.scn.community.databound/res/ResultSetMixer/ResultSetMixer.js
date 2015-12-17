/**
 * Copyright 2014 Scn Community Contributors
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
 
//%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./ResultSetMixerSpec",
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

ResultSetMixer = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);
		
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		// that.onAfterRendering = function () {
			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		// }
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
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
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
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
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};
//%INIT-START%
myComponentData.instance = ResultSetMixer;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});