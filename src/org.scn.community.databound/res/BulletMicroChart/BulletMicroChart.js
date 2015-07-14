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
		that._data = undefined;
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

		that._specialDataModel = [];

		var dataCellListActual = that.getDataCellListActual();
		var useDataCellListActual = false;
		if(org_scn_community_databound.hasData (dataCellListActual)) {
			dataCellListActual = org_scn_community_databound.flatten (dataCellListActual,options);
			if(!that.getUseActual()) {
				useDataCellListActual = true;
			}
		}

		var l_Actual = that.getActual();
		l_Actual = org_scn_community_basics.parseJson(l_Actual, "A");

		if(that.getUseActual() && l_Actual[0]) {
			l_Actual = l_Actual[0];
		}
		var actualJsonTemplate = {};
		for (var actualPropI in l_Actual) {
			if(actualPropI == "parentKey" || actualPropI == "leaf" || actualPropI == "key") continue;
			actualJsonTemplate[actualPropI] = l_Actual[actualPropI];
		}

		var dataCellListForecastValue = that.getDataCellListForecastValue();
		var useDataCellListForecastValue = false;
		if(org_scn_community_databound.hasData (dataCellListForecastValue)) {
			dataCellListForecastValue = org_scn_community_databound.flatten (dataCellListForecastValue,options);
			if(!that.getUseForecastValue()) {
				useDataCellListForecastValue = true;
			}
		}
		var l_ForecastValue = that.getForecastValue();
		
		var dataCellListMaxValue = that.getDataCellListMaxValue();
		var useDataCellListMaxValue = false;
		if(org_scn_community_databound.hasData (dataCellListMaxValue)) {
			dataCellListMaxValue = org_scn_community_databound.flatten (dataCellListMaxValue,options);
			if(!that.getUseMaxValue()) {
				useDataCellListMaxValue = true;
			}
		}
		var l_MaxValue = that.getMaxValue();
		
		var dataCellListMinValue = that.getDataCellListMinValue();
		var useDataCellListMinValue = false;
		if(org_scn_community_databound.hasData (dataCellListMinValue)) {
			dataCellListMinValue = org_scn_community_databound.flatten (dataCellListMinValue,options);
			if(!that.getUseMinValue()) {
				useDataCellListMinValue = true;
			}
		}
		var l_MinValue = that.getMinValue();
		
		var dataCellListTargetValue = that.getDataCellListTargetValue();
		var useDataCellListTargetValue = false;
		if(org_scn_community_databound.hasData (dataCellListTargetValue)) {
			dataCellListTargetValue = org_scn_community_databound.flatten (dataCellListTargetValue,options);
			if(!that.getUseTargetValue()) {
				useDataCellListTargetValue = true;
			}
		}
		var l_TargetValue = that.getTargetValue();
		


		var dataCellListThresholds = that.getDataCellListThresholds();
		var useDataCellListThresholds = false;
		if(org_scn_community_databound.hasData (dataCellListThresholds)) {
			dataCellListThresholds = org_scn_community_databound.flatten (dataCellListThresholds,options);
			useDataCellListThresholds = true;
		}

		var l_Thresholds = that.getThresholds();
		l_Thresholds = org_scn_community_basics.parseJson(l_Thresholds, "A");
		
		var l_thresholdsJsonTemplate = [];
		for (var thresholdsI in l_Thresholds) {
			var thresholdsO = l_Thresholds[thresholdsI];
			
			var thresholdsPropO = {};
			for (var thresholdsPropI in thresholdsO) {
				if(thresholdsPropI == "parentKey" || thresholdsPropI == "leaf" || thresholdsPropI == "key") continue;
				thresholdsPropO[thresholdsPropI] = thresholdsO[thresholdsPropI];
			}
			l_thresholdsJsonTemplate.push(thresholdsPropO);
		}


		var l_ActualValueLabel = that.getActualValueLabel();
		var l_ContentWidth = that.getContentWidth();
		var l_DeltaValueLabel = that.getDeltaValueLabel();
		var l_Mode = that.getMode();
		var l_Scale = that.getScale();
		var l_ScaleColor = that.getScaleColor();
		var l_ShowActualValue = that.getShowActualValue();
		var l_ShowDeltaValue = that.getShowDeltaValue();
		var l_ShowTargetValue = that.getShowTargetValue();
		var l_ShowValueMarker = that.getShowValueMarker();
		var l_Size = that.getSize();
		var l_TargetValueLabel = that.getTargetValueLabel();


		var rowI = 0;
		var counterI = 1;

		if(useDataCellListActual) {
			counterI = dataCellListActual.values.length;
		}


		for(rowI=0;rowI<counterI;rowI++){
			var rowHeaderName = "NONE";

			if(useDataCellListActual) {
				l_Actual.label = dataCellListActual.rowHeaders[rowI];
				l_Actual.value = dataCellListActual.values[rowI][0];
			} else {
				l_Actual.label = l_Actual.key;	
			}

			if(useDataCellListForecastValue) {
				l_ForecastValue = dataCellListForecastValue.values[rowI][0];
			}
			if(useDataCellListMaxValue) {
				l_MaxValue = dataCellListMaxValue.values[rowI][0];
			}
			if(useDataCellListMinValue) {
				l_MinValue = dataCellListMinValue.values[rowI][0];
			}
			if(useDataCellListTargetValue) {
				l_TargetValue = dataCellListTargetValue.values[rowI][0];
			}





			var customData = {};
			
			customData.actualValueLabel = l_ActualValueLabel;
			customData.contentWidth = l_ContentWidth;
			customData.deltaValueLabel = l_DeltaValueLabel;
			customData.mode = l_Mode;
			customData.scale = l_Scale;
			customData.scaleColor = l_ScaleColor;
			customData.showActualValue = l_ShowActualValue;
			customData.showDeltaValue = l_ShowDeltaValue;
			customData.showTargetValue = l_ShowTargetValue;
			customData.showValueMarker = l_ShowValueMarker;
			customData.size = l_Size;
			customData.targetValueLabel = l_TargetValueLabel;

			customData.forecastValue = l_ForecastValue;
			customData.maxValue = l_MaxValue;
			customData.minValue = l_MinValue;
			customData.targetValue = l_TargetValue;


			customData.actual = actualJsonTemplate;

			var l_thresholdsJson = [];

			if(!that.getUseThresholds() && useDataCellListThresholds) {
				for (var cellI in dataCellListThresholds.values[rowI]) {
					l_thresholdsJson.push({
						value:  dataCellListThresholds.values[rowI][cellI], 
						color: "Good"
					});
				}
			} else {
				l_thresholdsJson = l_thresholdsJsonTemplate;
			}
			customData.thresholds = l_thresholdsJson;



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

		if(that.getUseContentWidth) {
			if(!that.getUseContentWidth() || that.getContentWidth() <= 0) {
				for(entryI in that._specialDataModel) {
					var entry = that._specialDataModel[entryI];
	
					{entry.width = (width - 20) + "px"};
				}
	
				that._oModel.setData(that._specialDataModel);
			}
		}

		if(that.getUseContentHeight) {
			if(!that.getUseContentHeight() || that.getContentHeight() <= 0) {
				for(entryI in that._specialDataModel) {
					var entry = that._specialDataModel[entryI];
	
					{entry.height = (height - 20) + "px"};
				}
	
				that._oModel.setData(that._specialDataModel);
			}
		}
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

define([myComponentData.requireName], function(databoundbulletmicrochart){
	myComponentData.instance = BulletMicroChart;
	return myComponentData.instance;
});

}).call(this);