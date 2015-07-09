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
 
 (function(){

var myComponentData = org_scn_community_require.knownComponents.databound.MicroChart;

MicroChart = {
    renderer: {},

	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		// var xmlView = "<core:View  controllerName='org.scn.community.databound.MicroChartController'  xmlns='sap.suite.ui.commons'  xmlns:core='sap.ui.core'>    <BulletChart>      <actual>        <BulletChartData value='120' color='Good'/>      </actual>      <thresholds>        <BulletChartData value='0' color='Error'/>      </thresholds>    </BulletChart> </core:View>";
		// that._oTemplateView = sap.ui.xmlview({viewContent: xmlView});		
		var componentPath = sap.zen.createStaticSdkMimeUrl(that.componentData.fullComponentPackage, "");
		jQuery.sap.registerModulePath(org_scn_community_require.knownComponents.databound.MicroChart.name, componentPath);

		sap.ui.controller(org_scn_community_require.knownComponents.databound.MicroChart.fullComponentName, {
			owner: that,
			
			// implement an event handler in the Controller
			doSomething: function() {
				alert("Hello World!");
			}
		});

		that._view = new sap.ui.view({ type: sap.ui.core.mvc.ViewType.XML,  
            viewName: org_scn_community_require.knownComponents.databound.MicroChart.name + ".Bullet",  
            controllerName: org_scn_community_require.knownComponents.databound.MicroChart.fullComponentName  
        });
		
		that._oModel = new sap.ui.model.json.JSONModel(); 
		that._view.setModel(that._oModel);

		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		that.onAfterRendering = function () {
			org_scn_community_basics.resizeContentAbsoluteLayout(that, that._view, that.onResize);
		}
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		var loadingResultset = "DataCellList";
		
		var data = undefined;		
		if(loadingResultset == "ResultSet" || loadingResultset == "ResultCell"){
			data = that.getData();
		} else if(loadingResultset == "DataCellList"){
			data = that.getDataCellList();
		}

		var metadata = that.getDSMetadata();

		if(!org_scn_community_databound.hasData (data, metadata)) {
			org_scn_community_databound.getSampleDataFlat (that, that.processData, that.afterPrepare);
		} else {
			org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
		}
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	processData: function (flatData, afterPrepare, owner) {
		var that = owner;

		if(flatData == undefined) {
			var loadingResultset = "DataCellList";
				
			if(loadingResultset == "ResultSet"){
				var options = org_scn_community_databound.initializeOptions();
				that._flatData = org_scn_community_databound.flatten(that.getData(), options);
			} else if(loadingResultset == "ResultCell"){
				that._flatData = this.getData();
			} else if(loadingResultset == "DataCellList"){
				var dataList = that.getDataCellList();

				var options = org_scn_community_databound.initializeOptions();
				that._flatData = org_scn_community_databound.flatten(dataList, options);
			}
		} else {
			that._flatData = flatData;
		}

		that.prepareCustomData(that);
		
		// processing on data
		that.afterPrepare(that);
	},

	prepareCustomData: function (owner) {
		var that = owner;

		var data = that._flatData;	

		var customArray = [];

		for(var rowI in that._flatData.rowHeaders) {
			var row = that._flatData.rowHeaders[rowI];

			var customData = {
				size: "S",
				scale: "M",
				targetValue: 500,
				forecastValue: 510,
				styleClass: "",

				actual: {
					value: that._flatData.values[rowI][0],
					color: "Good",
					label: row
				}
			};

			// create tresholds
			thresholds = [
				{value: 100, color: "Good"},
				{value: 300, color: "Critical"}
			];

			customData.thresholds = thresholds;

			customArray.push(customData);
		}
		
		that._oModel.setData(customArray);
	},

	afterPrepare: function (owner) {
		var that = owner;
			
		// visualization on processed data
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

define([myComponentData.requireName], function(databoundmicrochart){
	myComponentData.instance = MicroChart;
	return myComponentData.instance;
});

}).call(this);