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

		/* Object Single */
		var dataCellListActual = that.getDataCellListActual();
		if(org_scn_community_databound.hasData (dataCellListActual)) {dataCellListActual = org_scn_community_databound.flatten (dataCellListActual,options);}

		var actual = that.getActual();
		actual = org_scn_community_basics.parseJson(actual, "A");

		actualValue = 0;
		actualColor = "Good";
		actualKey = "Description";

		if(that.getUseActual() && actual[0]) {
			var actualValue = actual[0].value;
			var actualColor = actual[0].color;
			var actualKey = actual[0].key;
		}
		/* Object Single */

		// if(!org_scn_community_databound.hasData (dataCellListActual)) {
		//	dataCellListActual = that._flatData;
		// } else {
		// 	dataCellListActual = org_scn_community_databound.flatten (dataCellListActual,options);
		// }

		/* float property */
		var dataCellListTarget = that.getDataCellListTargetValue();
		var hasDataCellListTarget = false;
		if(org_scn_community_databound.hasData (dataCellListTarget)) {
			dataCellListTarget = org_scn_community_databound.flatten (dataCellListTarget,options);
			if(that.getUseTargetValue()) {
				useDataCellListTarget = true;
			}
		}
		var targetValue = that.getTargetValue();
		/* float property */

		var dataCellListForecast = that.getDataCellListForecast();
		if(org_scn_community_databound.hasData (dataCellListForecast)) {dataCellListForecast = org_scn_community_databound.flatten (dataCellListForecast,options);}
		var forecastValue = that.getForecastValue();

		that._specialDataModel = [];

		var minValue =that.getMinValue();
		var maxValue =that.getMaxValue();

		var size = that.getSize();
		var scale = that.getScale();
		var actualValueLabel = that.getActualValueLabel();
		var contentWidth = that.getContentWidth();

		var withLabel = true; // that.getWithLabel();

		/* Object Array */
		var dataCellListThreshold1 = that.getDataCellListThresholds1();
		if(org_scn_community_databound.hasData (dataCellListThreshold1)) {dataCellListThreshold1 = org_scn_community_databound.flatten (dataCellListThreshold1,options);}
		var dataCellListThreshold2 = that.getDataCellListThresholds2();
		if(org_scn_community_databound.hasData (dataCellListThreshold2)) {dataCellListThreshold2 = org_scn_community_databound.flatten (dataCellListThreshold2,options);}
		var dataCellListThreshold3 = that.getDataCellListThresholds3();
		if(org_scn_community_databound.hasData (dataCellListThreshold3)) {dataCellListThreshold3 = org_scn_community_databound.flatten (dataCellListThreshold3,options);}
		var dataCellListThreshold4 = that.getDataCellListThresholds4();
		if(org_scn_community_databound.hasData (dataCellListThreshold4)) {dataCellListThreshold4 = org_scn_community_databound.flatten (dataCellListThreshold4,options);}
		var dataCellListThreshold5 = that.getDataCellListThresholds5();
		if(org_scn_community_databound.hasData (dataCellListThreshold5)) {dataCellListThreshold5 = org_scn_community_databound.flatten (dataCellListThreshold5,options);}

		var thresholds = that.getThresholds();
		thresholds = org_scn_community_basics.parseJson(thresholds, "A");

		/* Object Array */

		var rowI = 0;
		var counterI = 1;

		if(!that.getUseActual()) {
			if(org_scn_community_databound.hasData (dataCellListActual)) counterI = dataCellListActual.rowHeaders.length;
		}
			
		for(rowI=0;rowI<counterI;rowI++){
			var rowHeaderName = "";

			/* Object Single */
			if(!that.getUseActual()) {
				if(org_scn_community_databound.hasData (dataCellListActual)) actualValue = dataCellListActual.values[rowI][0];
				rowHeaderName = dataCellListActual.rowHeaders[rowI];
			} else {
				rowHeaderName = actualKey;	
			}
			/* Object Single */

			/* Properties float */
			if(useDataCellListTarget) {
				targetValue = dataCellListTarget.values[rowI][0];
			}

			if(!that.getUseForecastValue()) {
				if(org_scn_community_databound.hasData (dataCellListForecast)) forecastValue = dataCellListForecast.values[rowI][0];
			}

			if(!that.getUseMinValue()) {
				if(org_scn_community_databound.hasData (dataCellListMin)) minValue = dataCellListMin.values[rowI][0];
			}

			if(!that.getUseMaxValue()) {
				if(org_scn_community_databound.hasData (dataCellListMax)) minValue = dataCellListMax.values[rowI][0];
			}
			/* Properties float */

			var customData = {
				size: size,
				scale: scale,

				targetValue: targetValue,
				forecastValue: forecastValue,
				minValue: minValue,
				maxValue: maxValue,
				actualValueLabel: actualValueLabel,
				width: contentWidth +"px",
				dimensionText: rowHeaderName,
				withLabel: withLabel,
				"class": "",
			};
			
			/* Object Single */
			actualJson = {
				value: actualValue,
				color: actualColor,
				label: rowHeaderName
			}
			customData.actual = actualJson;
			/* Object Single */

			/* Object Array */
			thresholdsJson = [];

			if(!that.getUseThresholds()) {
				if(org_scn_community_databound.hasData (dataCellListThreshold1)) thresholdsJson.push({value:  dataCellListThreshold1.values[rowI][0], color: "Good"});
				if(org_scn_community_databound.hasData (dataCellListThreshold2)) thresholdsJson.push({value:  dataCellListThreshold2.values[rowI][0], color: "Good"});
				if(org_scn_community_databound.hasData (dataCellListThreshold3)) thresholdsJson.push({value:  dataCellListThreshold3.values[rowI][0], color: "Good"});
				if(org_scn_community_databound.hasData (dataCellListThreshold4)) thresholdsJson.push({value:  dataCellListThreshold4.values[rowI][0], color: "Good"});
				if(org_scn_community_databound.hasData (dataCellListThreshold5)) thresholdsJson.push({value:  dataCellListThreshold5.values[rowI][0], color: "Good"});
			} else {
				for (var thresI in thresholds) {
					var thresO = thresholds[thresI];
					
					var thresPropO = {};
					for (var thresPropI in thresO) {
						thresPropO[thresPropI] = thresO[thresPropI];
					}
					thresholdsJson.push(thresPropO);
				}
			}
			customData.thresholds = thresholdsJson;
			/* Object Array */

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

		if(!that.getUseContentWidth() || that.getContentWidth() <= 0) {
			for(entryI in that._specialDataModel) {
				var entry = that._specialDataModel[entryI];

				{entry.width = (width - 20) + "px"};
			}

			that._oModel.setData(that._specialDataModel);
		}
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

define([myComponentData.requireName], function(databoundbulletmicrochart){
	myComponentData.instance = BulletMicroChart;
	return myComponentData.instance;
});

}).call(this);