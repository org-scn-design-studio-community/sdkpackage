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
	"./AreaMicroChartSpec",
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

AreaMicroChart = {

	renderer: {},

	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},

	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);
		
		that.addStyleClass("scn-pack-AreaMicroChart");
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

		var l_Chart = org_scn_community_unified.getObjectArrayContent(that, "chart", options);
		var l_InnerMaxThreshold = org_scn_community_unified.getObjectArrayContent(that, "innerMaxThreshold", options);
		var l_InnerMinThreshold = org_scn_community_unified.getObjectArrayContent(that, "innerMinThreshold", options);
		var l_MaxThreshold = org_scn_community_unified.getObjectArrayContent(that, "maxThreshold", options);
		var l_MinThreshold = org_scn_community_unified.getObjectArrayContent(that, "minThreshold", options);
		var l_Target = org_scn_community_unified.getObjectArrayContent(that, "target", options);

		var l_FirstXLabel = org_scn_community_unified.getObjectSingleContent(that, "firstXLabel", options);
		var l_FirstYLabel = org_scn_community_unified.getObjectSingleContent(that, "firstYLabel", options);
		var l_LastXLabel = org_scn_community_unified.getObjectSingleContent(that, "lastXLabel", options);
		var l_LastYLabel = org_scn_community_unified.getObjectSingleContent(that, "lastYLabel", options);
		var l_MaxLabel = org_scn_community_unified.getObjectSingleContent(that, "maxLabel", options);
		var l_MinLabel = org_scn_community_unified.getObjectSingleContent(that, "minLabel", options);

		var l_MaxXValue = org_scn_community_unified.getObjectSingleContent(that, "maxXValue", options, true);
		var l_MaxYValue = org_scn_community_unified.getObjectSingleContent(that, "maxYValue", options, true);
		var l_MinXValue = org_scn_community_unified.getObjectSingleContent(that, "minXValue", options, true);
		var l_MinYValue = org_scn_community_unified.getObjectSingleContent(that, "minYValue", options, true);



		var l_ContentHeight = that.getContentHeight();
		var l_ContentWidth = that.getContentWidth();
		var l_View = that.getView();




		var rowI = 0;
		var counterI = 1;



		for(rowI=0;rowI<counterI;rowI++){
			var rowHeaderName = "NONE";

			l_Chart = org_scn_community_unified.loopObjectSingleDouble(that, l_Chart, rowI);
			l_InnerMaxThreshold = org_scn_community_unified.loopObjectSingleDouble(that, l_InnerMaxThreshold, rowI);
			l_InnerMinThreshold = org_scn_community_unified.loopObjectSingleDouble(that, l_InnerMinThreshold, rowI);
			l_MaxThreshold = org_scn_community_unified.loopObjectSingleDouble(that, l_MaxThreshold, rowI);
			l_MinThreshold = org_scn_community_unified.loopObjectSingleDouble(that, l_MinThreshold, rowI);
			l_Target = org_scn_community_unified.loopObjectSingleDouble(that, l_Target, rowI);

			l_FirstXLabel = org_scn_community_unified.loopObjectSingle(that, l_FirstXLabel, rowI);
			l_FirstYLabel = org_scn_community_unified.loopObjectSingle(that, l_FirstYLabel, rowI);
			l_LastXLabel = org_scn_community_unified.loopObjectSingle(that, l_LastXLabel, rowI);
			l_LastYLabel = org_scn_community_unified.loopObjectSingle(that, l_LastYLabel, rowI);
			l_MaxLabel = org_scn_community_unified.loopObjectSingle(that, l_MaxLabel, rowI);
			l_MinLabel = org_scn_community_unified.loopObjectSingle(that, l_MinLabel, rowI);

			l_MaxXValue = org_scn_community_unified.loopFloat(that, l_MaxXValue, rowI);
			l_MaxYValue = org_scn_community_unified.loopFloat(that, l_MaxYValue, rowI);
			l_MinXValue = org_scn_community_unified.loopFloat(that, l_MinXValue, rowI);
			l_MinYValue = org_scn_community_unified.loopFloat(that, l_MinYValue, rowI);




			var customData = {};
			
			customData.contentHeight = l_ContentHeight;
			customData.contentWidth = l_ContentWidth;
			customData.view = l_View;

			customData[l_MaxXValue.name] = l_MaxXValue.value;
			customData[l_MaxYValue.name] = l_MaxYValue.value;
			customData[l_MinXValue.name] = l_MinXValue.value;
			customData[l_MinYValue.name] = l_MinYValue.value;


			customData[l_Chart.name] = l_Chart.json;
			customData[l_InnerMaxThreshold.name] = l_InnerMaxThreshold.json;
			customData[l_InnerMinThreshold.name] = l_InnerMinThreshold.json;
			customData[l_MaxThreshold.name] = l_MaxThreshold.json;
			customData[l_MinThreshold.name] = l_MinThreshold.json;
			customData[l_Target.name] = l_Target.json;

			customData[l_FirstXLabel.name] = l_FirstXLabel.json;
			customData[l_FirstYLabel.name] = l_FirstYLabel.json;
			customData[l_LastXLabel.name] = l_LastXLabel.json;
			customData[l_LastYLabel.name] = l_LastYLabel.json;
			customData[l_MaxLabel.name] = l_MaxLabel.json;
			customData[l_MinLabel.name] = l_MinLabel.json;





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

myComponentData.instance = AreaMicroChart;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);

});