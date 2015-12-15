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
	"./HarveyBallMicroChartSpec",
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

HarveyBallMicroChart = {

	renderer: {},

	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},

	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);
		
		that.addStyleClass("scn-pack-HarveyBallMicroChart");
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



		var l_Total = org_scn_community_unified.getObjectSingleContent(that, "total", options, true);


		var l_Items = org_scn_community_unified.getObjectArrayContent(that, "items", options);

		var l_ColorPalette = that.getColorPalette();
		var l_ContentWidth = that.getContentWidth();
		var l_FormattedLabel = that.getFormattedLabel();
		var l_ShowFractions = that.getShowFractions();
		var l_ShowTotal = that.getShowTotal();
		var l_Size = that.getSize();
		var l_TotalLabel = that.getTotalLabel();
		var l_TotalScale = that.getTotalScale();




		var rowI = 0;
		var counterI = 1;

		if(l_Items.useDataCellList) {
			counterI = l_Items.dataCellList.values.length;
		}


		for(rowI=0;rowI<counterI;rowI++){
			var rowHeaderName = "NONE";



			l_Total = org_scn_community_unified.loopFloat(that, l_Total, rowI);


			l_Items = org_scn_community_unified.loopObjectArray(that, l_Items, rowI);


			var customData = {};
			
			customData.colorPalette = l_ColorPalette;
			customData.contentWidth = l_ContentWidth;
			customData.formattedLabel = l_FormattedLabel;
			customData.showFractions = l_ShowFractions;
			customData.showTotal = l_ShowTotal;
			customData.size = l_Size;
			customData.totalLabel = l_TotalLabel;
			customData.totalScale = l_TotalScale;

			customData[l_Total.name] = l_Total.value;




			customData[l_Items.name] = l_Items.json;





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

myComponentData.instance = HarveyBallMicroChart;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);

});