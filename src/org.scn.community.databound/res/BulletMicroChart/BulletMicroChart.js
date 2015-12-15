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

var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./BulletMicroChartSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"shared/modules/component.databound",
	"../../../"+scn_pkg+"shared/modules/component.unified"
	
	],
	function(
		Component,
		spec,
		core,
		basics
	) {

var myComponentData = spec;

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
		jQuery.sap.registerModulePath(myComponentData.fullComponentName, componentPath);

		sap.ui.controller(myComponentData.fullComponentName + ".Controller", {
			owner: that,

		});

		that._view = new sap.ui.view({ type: sap.ui.core.mvc.ViewType.XML,  
            viewName: myComponentData.fullComponentName + "." 
				+ myComponentData.id,  
            controllerName: myComponentData.fullComponentName + ".Controller" 
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
		if(that.getDSMetadata) {
			that._metadata = that.getDSMetadata();
		}

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

		options.ignoreResults = true;
		options.keepDataArray = true;

		that._specialDataModel = [];


		var l_Actual = org_scn_community_unified.getObjectSingleContent(that, "actual", options);

		var l_ForecastValue = org_scn_community_unified.getObjectSingleContent(that, "forecastValue", options, true);
		var l_MaxValue = org_scn_community_unified.getObjectSingleContent(that, "maxValue", options, true);
		var l_MinValue = org_scn_community_unified.getObjectSingleContent(that, "minValue", options, true);
		var l_TargetValue = org_scn_community_unified.getObjectSingleContent(that, "targetValue", options, true);


		var l_Thresholds = org_scn_community_unified.getObjectArrayContent(that, "thresholds", options);

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

		if(l_Actual.useDataCellList) {
			counterI = l_Actual.dataCellList.values.length;
		}


		for(rowI=0;rowI<counterI;rowI++){
			var rowHeaderName = "NONE";


			l_Actual = org_scn_community_unified.loopObjectSingle(that, l_Actual, rowI);

			l_ForecastValue = org_scn_community_unified.loopFloat(that, l_ForecastValue, rowI);
			l_MaxValue = org_scn_community_unified.loopFloat(that, l_MaxValue, rowI);
			l_MinValue = org_scn_community_unified.loopFloat(that, l_MinValue, rowI);
			l_TargetValue = org_scn_community_unified.loopFloat(that, l_TargetValue, rowI);


			l_Thresholds = org_scn_community_unified.loopObjectArray(that, l_Thresholds, rowI);


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

			customData[l_ForecastValue.name] = l_ForecastValue.value;
			customData[l_MaxValue.name] = l_MaxValue.value;
			customData[l_MinValue.name] = l_MinValue.value;
			customData[l_TargetValue.name] = l_TargetValue.value;



			customData[l_Actual.name] = l_Actual.json;

			customData[l_Thresholds.name] = l_Thresholds.json;





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

myComponentData.instance = BulletMicroChart;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);

});