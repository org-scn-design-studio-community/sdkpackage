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
	"./ResultSetInfoSpec",
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

ResultSetInfo = {

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
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	
	reloadContent: function() {
		var that = this;
		
		// Destroy old content
		that._lLayout.destroyContent();
		
		if(that.getData() != undefined && that.getData() != "") {
			that._lLayout.addContent(that.createFlowPanel("Number of Data Cells", that.getData().data.length));
			that._lLayout.addContent(that.createFlowPanel("Number of Data Columns", that._flatData.geometry.colLength));
			that._lLayout.addContent(that.createFlowPanel("Number of Header Columns", that._flatData.geometry.headersLength));
			that._lLayout.addContent(that.createFlowPanel("Number of Rows", that._flatData.geometry.rowLength));
			
			if(that.getDInformationEventActive()) {
				var dataInfo = {};

				dataInfo.dataCells = that.getData().data.length;
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
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};
//%INIT-START%
myComponentData.instance = ResultSetInfo;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});