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

var myComponentData = org_scn_community_require.knownComponents.databound.BulletMicroChart;

BulletMicroChart = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);
		
		that.addStyleClass("scn-pack-BulletMicroChart");
		that.addStyleClass("scn-pack-FullSizeChildren");
		
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		var componentPath = sap.zen.createStaticSdkMimeUrl(that.componentData.fullComponentPackage , "");
		jQuery.sap.registerModulePath(org_scn_community_require.knownComponents.databound.BulletMicroChart.name, componentPath);

		sap.ui.controller(org_scn_community_require.knownComponents.databound.BulletMicroChart.fullComponentName, {
			owner: that,
			
			// implement an event handler in the Controller
			doSomething: function() {
				alert("Hello World!");
			}
		});

		that._view = new sap.ui.view({ type: sap.ui.core.mvc.ViewType.XML,  
            viewName: org_scn_community_require.knownComponents.databound.BulletMicroChart.name + "." 
				+ org_scn_community_require.knownComponents.databound.BulletMicroChart.id,  
            controllerName: org_scn_community_require.knownComponents.databound.BulletMicroChart.fullComponentName  
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
		that._data = that.getDataCellListActual();
		that._metadata = that.getDSMetadata();

		if(!org_scn_community_databound.hasData (that._data, that._metadata)) {
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
			// read the real data
		} else {
			that._flatData = flatData;
		}
		
		that.prepareCustomData(that);

		// processing on data
		that.afterPrepare(that);
	},
	
	prepareCustomData: function (owner) {
		var that = owner;

		var options = org_scn_community_databound.initializeOptions();
		//options.ignoreResults = that.getDIgnoreResults();
		//options.emptyHeaderValue = that.getDEmptyHeaderValue();
		//options.emptyDataValue = that.getDEmptyDataValue();
	
		var dataCellListActual = that.getDataCellListActual();
		
		if(!org_scn_community_databound.hasData (dataCellListActual)) {
			dataCellListActual = that._flatData;
		} else {
			dataCellListActual = org_scn_community_databound.flatten (dataCellListActual,options);
		}
		var dataCellListThreshold1 = that.getDataCellListThreshold1();
		if(org_scn_community_databound.hasData (dataCellListThreshold1)) {dataCellListThreshold1 = org_scn_community_databound.flatten (dataCellListThreshold1,options);}
		var dataCellListThreshold2 = that.getDataCellListThreshold2();
		if(org_scn_community_databound.hasData (dataCellListThreshold2)) {dataCellListThreshold2 = org_scn_community_databound.flatten (dataCellListThreshold2,options);}
		var dataCellListThreshold3 = that.getDataCellListThreshold3();
		if(org_scn_community_databound.hasData (dataCellListThreshold3)) {dataCellListThreshold3 = org_scn_community_databound.flatten (dataCellListThreshold3,options);}
		var dataCellListThreshold4 = that.getDataCellListThreshold4();
		if(org_scn_community_databound.hasData (dataCellListThreshold4)) {dataCellListThreshold4 = org_scn_community_databound.flatten (dataCellListThreshold4,options);}
		var dataCellListThreshold5 = that.getDataCellListThreshold5();
		if(org_scn_community_databound.hasData (dataCellListThreshold5)) {dataCellListThreshold5 = org_scn_community_databound.flatten (dataCellListThreshold5,options);}

		that._specialDataModel = [];

		for(var rowI in that._flatData.rowHeaders) {
			var row = dataCellListActual.rowHeaders[rowI];

			var customData = {
				size: that.getSize(),
				scale: that.getScale(),
				targetValue: that.getTargetValue(),
				forecastValue: that.getForecastValue(),
				minValue: that.getMinValue(),
				maxValue: that.getMaxValue(),
				actualValueLabel: that.getActualValueLabel(),
				width: (that.getContentWidth() - 20) +"px",
				dimensionText: row,
				withLabel: false,
				"class": "",
			};
			
			// create actual
			actual = {
				value: dataCellListActual.values[rowI][0],
				color: "Good",
				label: row
			}

			// create tresholds
			thresholds = [];
			
			if(org_scn_community_databound.hasData (dataCellListThreshold1)) thresholds.push({value:  dataCellListThreshold1.values[rowI][0], color: "Good"});
			if(org_scn_community_databound.hasData (dataCellListThreshold2)) thresholds.push({value:  dataCellListThreshold2.values[rowI][0], color: "Good"});
			if(org_scn_community_databound.hasData (dataCellListThreshold3)) thresholds.push({value:  dataCellListThreshold3.values[rowI][0], color: "Good"});
			if(org_scn_community_databound.hasData (dataCellListThreshold4)) thresholds.push({value:  dataCellListThreshold4.values[rowI][0], color: "Good"});
			if(org_scn_community_databound.hasData (dataCellListThreshold5)) thresholds.push({value:  dataCellListThreshold5.values[rowI][0], color: "Good"});

			customData.actual = actual;
			customData.thresholds = thresholds;

			that._specialDataModel.push(customData);
		}
		
		that._oModel.setData(that._specialDataModel);

		if(that._oResize) {that._oResize(true, true);}
	},

	afterPrepare: function (owner) {
		var that = owner;
			
		// visualization on processed data 
	},
	
	onResize: function(width, height, parent) {
		var that = parent;
		// in case special resize code is required

		for(entryI in that._specialDataModel) {
			var entry = that._specialDataModel[entryI];

			{entry.width = (width - 20) + "px"};
		}

		that._oModel.setData(that._specialDataModel);
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

define([myComponentData.requireName], function(databoundbulletmicrochart){
	myComponentData.instance = BulletMicroChart;
	return myComponentData.instance;
});

}).call(this);