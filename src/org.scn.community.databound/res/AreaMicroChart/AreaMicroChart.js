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

var myComponentData = org_scn_community_require.knownComponents.databound.AreaMicroChart;

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
		jQuery.sap.registerModulePath(org_scn_community_require.knownComponents.databound.AreaMicroChart.name, componentPath);

		sap.ui.controller(org_scn_community_require.knownComponents.databound.AreaMicroChart.fullComponentName, {
			owner: that,

			// implement an event handler in the Controller
			doSomething: function() {
				alert("Hello World!");
			}
		});

		that._view = new sap.ui.view({ type: sap.ui.core.mvc.ViewType.XML,  
            viewName: org_scn_community_require.knownComponents.databound.AreaMicroChart.name + "." 
				+ org_scn_community_require.knownComponents.databound.AreaMicroChart.id,  
            controllerName: org_scn_community_require.knownComponents.databound.AreaMicroChart.fullComponentName  
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

		var dataCellListChart = that.getDataCellListChart();
		var useDataCellListChart = false;
		if(org_scn_community_databound.hasData (dataCellListChart)) {
			dataCellListChart = org_scn_community_databound.flatten (dataCellListChart,options);
			if(!that.getUseChart()) {
				useDataCellListChart = true;
			}
		}
		var l_Chart = that.getChart();
		l_Chart = org_scn_community_basics.parseJson(l_Chart, "A");

		if(that.getUseChart() && l_Chart[0]) {
			var l_ChartRoot = l_Chart[0];
			l_ChartRoot.__children = [];
			for(var contentI in l_Chart) {
				var contentO = l_Chart[contentI];

				if(contentO.parentKey != "ROOT") {
					l_ChartRoot.__children.push(contentO);
				}
			}
			l_Chart = l_ChartRoot;
		}

		var chartJsonTemplate = {};
		for (var chartPropI in l_Chart) {
			if(chartPropI == "parentKey" || chartPropI == "leaf" || chartPropI == "key") continue;
			if(chartPropI == "__children") {
				var subArrayName = that.getSpecSubArrayName("chart");
				chartJsonTemplate[subArrayName] = [];
				
				for (var chartPropChildI in l_Chart[chartPropI]) {
					var chartPropChildO = l_Chart[chartPropI][chartPropChildI];
					var chartSubPropO = {};
					for (var chartPropChildPropI in chartPropChildO) {
						if(chartPropChildPropI == "parentKey" || chartPropChildPropI == "leaf" || chartPropChildPropI == "key") continue;
						chartSubPropO[chartPropChildPropI] = chartPropChildO[chartPropChildPropI];
					}
					chartJsonTemplate[subArrayName].push(chartSubPropO);
				}
			} else {
				chartJsonTemplate[chartPropI] = l_Chart[chartPropI];	
			}
		}
		var dataCellListFirstXLabel = that.getDataCellListFirstXLabel();
		var useDataCellListFirstXLabel = false;
		if(org_scn_community_databound.hasData (dataCellListFirstXLabel)) {
			dataCellListFirstXLabel = org_scn_community_databound.flatten (dataCellListFirstXLabel,options);
			if(!that.getUseFirstXLabel()) {
				useDataCellListFirstXLabel = true;
			}
		}
		var l_FirstXLabel = that.getFirstXLabel();
		l_FirstXLabel = org_scn_community_basics.parseJson(l_FirstXLabel, "A");

		if(that.getUseFirstXLabel() && l_FirstXLabel[0]) {
			var l_FirstXLabelRoot = l_FirstXLabel[0];
			l_FirstXLabelRoot.__children = [];
			for(var contentI in l_FirstXLabel) {
				var contentO = l_FirstXLabel[contentI];

				if(contentO.parentKey != "ROOT") {
					l_FirstXLabelRoot.__children.push(contentO);
				}
			}
			l_FirstXLabel = l_FirstXLabelRoot;
		}

		var firstXLabelJsonTemplate = {};
		for (var firstXLabelPropI in l_FirstXLabel) {
			if(firstXLabelPropI == "parentKey" || firstXLabelPropI == "leaf" || firstXLabelPropI == "key") continue;
			if(firstXLabelPropI == "__children") {
				var subArrayName = that.getSpecSubArrayName("firstXLabel");
				firstXLabelJsonTemplate[subArrayName] = [];
				
				for (var firstXLabelPropChildI in l_FirstXLabel[firstXLabelPropI]) {
					var firstXLabelPropChildO = l_FirstXLabel[firstXLabelPropI][firstXLabelPropChildI];
					var firstXLabelSubPropO = {};
					for (var firstXLabelPropChildPropI in firstXLabelPropChildO) {
						if(firstXLabelPropChildPropI == "parentKey" || firstXLabelPropChildPropI == "leaf" || firstXLabelPropChildPropI == "key") continue;
						firstXLabelSubPropO[firstXLabelPropChildPropI] = firstXLabelPropChildO[firstXLabelPropChildPropI];
					}
					firstXLabelJsonTemplate[subArrayName].push(firstXLabelSubPropO);
				}
			} else {
				firstXLabelJsonTemplate[firstXLabelPropI] = l_FirstXLabel[firstXLabelPropI];	
			}
		}
		var dataCellListFirstYLabel = that.getDataCellListFirstYLabel();
		var useDataCellListFirstYLabel = false;
		if(org_scn_community_databound.hasData (dataCellListFirstYLabel)) {
			dataCellListFirstYLabel = org_scn_community_databound.flatten (dataCellListFirstYLabel,options);
			if(!that.getUseFirstYLabel()) {
				useDataCellListFirstYLabel = true;
			}
		}
		var l_FirstYLabel = that.getFirstYLabel();
		l_FirstYLabel = org_scn_community_basics.parseJson(l_FirstYLabel, "A");

		if(that.getUseFirstYLabel() && l_FirstYLabel[0]) {
			var l_FirstYLabelRoot = l_FirstYLabel[0];
			l_FirstYLabelRoot.__children = [];
			for(var contentI in l_FirstYLabel) {
				var contentO = l_FirstYLabel[contentI];

				if(contentO.parentKey != "ROOT") {
					l_FirstYLabelRoot.__children.push(contentO);
				}
			}
			l_FirstYLabel = l_FirstYLabelRoot;
		}

		var firstYLabelJsonTemplate = {};
		for (var firstYLabelPropI in l_FirstYLabel) {
			if(firstYLabelPropI == "parentKey" || firstYLabelPropI == "leaf" || firstYLabelPropI == "key") continue;
			if(firstYLabelPropI == "__children") {
				var subArrayName = that.getSpecSubArrayName("firstYLabel");
				firstYLabelJsonTemplate[subArrayName] = [];
				
				for (var firstYLabelPropChildI in l_FirstYLabel[firstYLabelPropI]) {
					var firstYLabelPropChildO = l_FirstYLabel[firstYLabelPropI][firstYLabelPropChildI];
					var firstYLabelSubPropO = {};
					for (var firstYLabelPropChildPropI in firstYLabelPropChildO) {
						if(firstYLabelPropChildPropI == "parentKey" || firstYLabelPropChildPropI == "leaf" || firstYLabelPropChildPropI == "key") continue;
						firstYLabelSubPropO[firstYLabelPropChildPropI] = firstYLabelPropChildO[firstYLabelPropChildPropI];
					}
					firstYLabelJsonTemplate[subArrayName].push(firstYLabelSubPropO);
				}
			} else {
				firstYLabelJsonTemplate[firstYLabelPropI] = l_FirstYLabel[firstYLabelPropI];	
			}
		}
		var dataCellListInnerMaxThreshold = that.getDataCellListInnerMaxThreshold();
		var useDataCellListInnerMaxThreshold = false;
		if(org_scn_community_databound.hasData (dataCellListInnerMaxThreshold)) {
			dataCellListInnerMaxThreshold = org_scn_community_databound.flatten (dataCellListInnerMaxThreshold,options);
			if(!that.getUseInnerMaxThreshold()) {
				useDataCellListInnerMaxThreshold = true;
			}
		}
		var l_InnerMaxThreshold = that.getInnerMaxThreshold();
		l_InnerMaxThreshold = org_scn_community_basics.parseJson(l_InnerMaxThreshold, "A");

		if(that.getUseInnerMaxThreshold() && l_InnerMaxThreshold[0]) {
			var l_InnerMaxThresholdRoot = l_InnerMaxThreshold[0];
			l_InnerMaxThresholdRoot.__children = [];
			for(var contentI in l_InnerMaxThreshold) {
				var contentO = l_InnerMaxThreshold[contentI];

				if(contentO.parentKey != "ROOT") {
					l_InnerMaxThresholdRoot.__children.push(contentO);
				}
			}
			l_InnerMaxThreshold = l_InnerMaxThresholdRoot;
		}

		var innerMaxThresholdJsonTemplate = {};
		for (var innerMaxThresholdPropI in l_InnerMaxThreshold) {
			if(innerMaxThresholdPropI == "parentKey" || innerMaxThresholdPropI == "leaf" || innerMaxThresholdPropI == "key") continue;
			if(innerMaxThresholdPropI == "__children") {
				var subArrayName = that.getSpecSubArrayName("innerMaxThreshold");
				innerMaxThresholdJsonTemplate[subArrayName] = [];
				
				for (var innerMaxThresholdPropChildI in l_InnerMaxThreshold[innerMaxThresholdPropI]) {
					var innerMaxThresholdPropChildO = l_InnerMaxThreshold[innerMaxThresholdPropI][innerMaxThresholdPropChildI];
					var innerMaxThresholdSubPropO = {};
					for (var innerMaxThresholdPropChildPropI in innerMaxThresholdPropChildO) {
						if(innerMaxThresholdPropChildPropI == "parentKey" || innerMaxThresholdPropChildPropI == "leaf" || innerMaxThresholdPropChildPropI == "key") continue;
						innerMaxThresholdSubPropO[innerMaxThresholdPropChildPropI] = innerMaxThresholdPropChildO[innerMaxThresholdPropChildPropI];
					}
					innerMaxThresholdJsonTemplate[subArrayName].push(innerMaxThresholdSubPropO);
				}
			} else {
				innerMaxThresholdJsonTemplate[innerMaxThresholdPropI] = l_InnerMaxThreshold[innerMaxThresholdPropI];	
			}
		}
		var dataCellListInnerMinThreshold = that.getDataCellListInnerMinThreshold();
		var useDataCellListInnerMinThreshold = false;
		if(org_scn_community_databound.hasData (dataCellListInnerMinThreshold)) {
			dataCellListInnerMinThreshold = org_scn_community_databound.flatten (dataCellListInnerMinThreshold,options);
			if(!that.getUseInnerMinThreshold()) {
				useDataCellListInnerMinThreshold = true;
			}
		}
		var l_InnerMinThreshold = that.getInnerMinThreshold();
		l_InnerMinThreshold = org_scn_community_basics.parseJson(l_InnerMinThreshold, "A");

		if(that.getUseInnerMinThreshold() && l_InnerMinThreshold[0]) {
			var l_InnerMinThresholdRoot = l_InnerMinThreshold[0];
			l_InnerMinThresholdRoot.__children = [];
			for(var contentI in l_InnerMinThreshold) {
				var contentO = l_InnerMinThreshold[contentI];

				if(contentO.parentKey != "ROOT") {
					l_InnerMinThresholdRoot.__children.push(contentO);
				}
			}
			l_InnerMinThreshold = l_InnerMinThresholdRoot;
		}

		var innerMinThresholdJsonTemplate = {};
		for (var innerMinThresholdPropI in l_InnerMinThreshold) {
			if(innerMinThresholdPropI == "parentKey" || innerMinThresholdPropI == "leaf" || innerMinThresholdPropI == "key") continue;
			if(innerMinThresholdPropI == "__children") {
				var subArrayName = that.getSpecSubArrayName("innerMinThreshold");
				innerMinThresholdJsonTemplate[subArrayName] = [];
				
				for (var innerMinThresholdPropChildI in l_InnerMinThreshold[innerMinThresholdPropI]) {
					var innerMinThresholdPropChildO = l_InnerMinThreshold[innerMinThresholdPropI][innerMinThresholdPropChildI];
					var innerMinThresholdSubPropO = {};
					for (var innerMinThresholdPropChildPropI in innerMinThresholdPropChildO) {
						if(innerMinThresholdPropChildPropI == "parentKey" || innerMinThresholdPropChildPropI == "leaf" || innerMinThresholdPropChildPropI == "key") continue;
						innerMinThresholdSubPropO[innerMinThresholdPropChildPropI] = innerMinThresholdPropChildO[innerMinThresholdPropChildPropI];
					}
					innerMinThresholdJsonTemplate[subArrayName].push(innerMinThresholdSubPropO);
				}
			} else {
				innerMinThresholdJsonTemplate[innerMinThresholdPropI] = l_InnerMinThreshold[innerMinThresholdPropI];	
			}
		}
		var dataCellListLastXLabel = that.getDataCellListLastXLabel();
		var useDataCellListLastXLabel = false;
		if(org_scn_community_databound.hasData (dataCellListLastXLabel)) {
			dataCellListLastXLabel = org_scn_community_databound.flatten (dataCellListLastXLabel,options);
			if(!that.getUseLastXLabel()) {
				useDataCellListLastXLabel = true;
			}
		}
		var l_LastXLabel = that.getLastXLabel();
		l_LastXLabel = org_scn_community_basics.parseJson(l_LastXLabel, "A");

		if(that.getUseLastXLabel() && l_LastXLabel[0]) {
			var l_LastXLabelRoot = l_LastXLabel[0];
			l_LastXLabelRoot.__children = [];
			for(var contentI in l_LastXLabel) {
				var contentO = l_LastXLabel[contentI];

				if(contentO.parentKey != "ROOT") {
					l_LastXLabelRoot.__children.push(contentO);
				}
			}
			l_LastXLabel = l_LastXLabelRoot;
		}

		var lastXLabelJsonTemplate = {};
		for (var lastXLabelPropI in l_LastXLabel) {
			if(lastXLabelPropI == "parentKey" || lastXLabelPropI == "leaf" || lastXLabelPropI == "key") continue;
			if(lastXLabelPropI == "__children") {
				var subArrayName = that.getSpecSubArrayName("lastXLabel");
				lastXLabelJsonTemplate[subArrayName] = [];
				
				for (var lastXLabelPropChildI in l_LastXLabel[lastXLabelPropI]) {
					var lastXLabelPropChildO = l_LastXLabel[lastXLabelPropI][lastXLabelPropChildI];
					var lastXLabelSubPropO = {};
					for (var lastXLabelPropChildPropI in lastXLabelPropChildO) {
						if(lastXLabelPropChildPropI == "parentKey" || lastXLabelPropChildPropI == "leaf" || lastXLabelPropChildPropI == "key") continue;
						lastXLabelSubPropO[lastXLabelPropChildPropI] = lastXLabelPropChildO[lastXLabelPropChildPropI];
					}
					lastXLabelJsonTemplate[subArrayName].push(lastXLabelSubPropO);
				}
			} else {
				lastXLabelJsonTemplate[lastXLabelPropI] = l_LastXLabel[lastXLabelPropI];	
			}
		}
		var dataCellListLastYLabel = that.getDataCellListLastYLabel();
		var useDataCellListLastYLabel = false;
		if(org_scn_community_databound.hasData (dataCellListLastYLabel)) {
			dataCellListLastYLabel = org_scn_community_databound.flatten (dataCellListLastYLabel,options);
			if(!that.getUseLastYLabel()) {
				useDataCellListLastYLabel = true;
			}
		}
		var l_LastYLabel = that.getLastYLabel();
		l_LastYLabel = org_scn_community_basics.parseJson(l_LastYLabel, "A");

		if(that.getUseLastYLabel() && l_LastYLabel[0]) {
			var l_LastYLabelRoot = l_LastYLabel[0];
			l_LastYLabelRoot.__children = [];
			for(var contentI in l_LastYLabel) {
				var contentO = l_LastYLabel[contentI];

				if(contentO.parentKey != "ROOT") {
					l_LastYLabelRoot.__children.push(contentO);
				}
			}
			l_LastYLabel = l_LastYLabelRoot;
		}

		var lastYLabelJsonTemplate = {};
		for (var lastYLabelPropI in l_LastYLabel) {
			if(lastYLabelPropI == "parentKey" || lastYLabelPropI == "leaf" || lastYLabelPropI == "key") continue;
			if(lastYLabelPropI == "__children") {
				var subArrayName = that.getSpecSubArrayName("lastYLabel");
				lastYLabelJsonTemplate[subArrayName] = [];
				
				for (var lastYLabelPropChildI in l_LastYLabel[lastYLabelPropI]) {
					var lastYLabelPropChildO = l_LastYLabel[lastYLabelPropI][lastYLabelPropChildI];
					var lastYLabelSubPropO = {};
					for (var lastYLabelPropChildPropI in lastYLabelPropChildO) {
						if(lastYLabelPropChildPropI == "parentKey" || lastYLabelPropChildPropI == "leaf" || lastYLabelPropChildPropI == "key") continue;
						lastYLabelSubPropO[lastYLabelPropChildPropI] = lastYLabelPropChildO[lastYLabelPropChildPropI];
					}
					lastYLabelJsonTemplate[subArrayName].push(lastYLabelSubPropO);
				}
			} else {
				lastYLabelJsonTemplate[lastYLabelPropI] = l_LastYLabel[lastYLabelPropI];	
			}
		}
		var dataCellListMaxLabel = that.getDataCellListMaxLabel();
		var useDataCellListMaxLabel = false;
		if(org_scn_community_databound.hasData (dataCellListMaxLabel)) {
			dataCellListMaxLabel = org_scn_community_databound.flatten (dataCellListMaxLabel,options);
			if(!that.getUseMaxLabel()) {
				useDataCellListMaxLabel = true;
			}
		}
		var l_MaxLabel = that.getMaxLabel();
		l_MaxLabel = org_scn_community_basics.parseJson(l_MaxLabel, "A");

		if(that.getUseMaxLabel() && l_MaxLabel[0]) {
			var l_MaxLabelRoot = l_MaxLabel[0];
			l_MaxLabelRoot.__children = [];
			for(var contentI in l_MaxLabel) {
				var contentO = l_MaxLabel[contentI];

				if(contentO.parentKey != "ROOT") {
					l_MaxLabelRoot.__children.push(contentO);
				}
			}
			l_MaxLabel = l_MaxLabelRoot;
		}

		var maxLabelJsonTemplate = {};
		for (var maxLabelPropI in l_MaxLabel) {
			if(maxLabelPropI == "parentKey" || maxLabelPropI == "leaf" || maxLabelPropI == "key") continue;
			if(maxLabelPropI == "__children") {
				var subArrayName = that.getSpecSubArrayName("maxLabel");
				maxLabelJsonTemplate[subArrayName] = [];
				
				for (var maxLabelPropChildI in l_MaxLabel[maxLabelPropI]) {
					var maxLabelPropChildO = l_MaxLabel[maxLabelPropI][maxLabelPropChildI];
					var maxLabelSubPropO = {};
					for (var maxLabelPropChildPropI in maxLabelPropChildO) {
						if(maxLabelPropChildPropI == "parentKey" || maxLabelPropChildPropI == "leaf" || maxLabelPropChildPropI == "key") continue;
						maxLabelSubPropO[maxLabelPropChildPropI] = maxLabelPropChildO[maxLabelPropChildPropI];
					}
					maxLabelJsonTemplate[subArrayName].push(maxLabelSubPropO);
				}
			} else {
				maxLabelJsonTemplate[maxLabelPropI] = l_MaxLabel[maxLabelPropI];	
			}
		}
		var dataCellListMaxThreshold = that.getDataCellListMaxThreshold();
		var useDataCellListMaxThreshold = false;
		if(org_scn_community_databound.hasData (dataCellListMaxThreshold)) {
			dataCellListMaxThreshold = org_scn_community_databound.flatten (dataCellListMaxThreshold,options);
			if(!that.getUseMaxThreshold()) {
				useDataCellListMaxThreshold = true;
			}
		}
		var l_MaxThreshold = that.getMaxThreshold();
		l_MaxThreshold = org_scn_community_basics.parseJson(l_MaxThreshold, "A");

		if(that.getUseMaxThreshold() && l_MaxThreshold[0]) {
			var l_MaxThresholdRoot = l_MaxThreshold[0];
			l_MaxThresholdRoot.__children = [];
			for(var contentI in l_MaxThreshold) {
				var contentO = l_MaxThreshold[contentI];

				if(contentO.parentKey != "ROOT") {
					l_MaxThresholdRoot.__children.push(contentO);
				}
			}
			l_MaxThreshold = l_MaxThresholdRoot;
		}

		var maxThresholdJsonTemplate = {};
		for (var maxThresholdPropI in l_MaxThreshold) {
			if(maxThresholdPropI == "parentKey" || maxThresholdPropI == "leaf" || maxThresholdPropI == "key") continue;
			if(maxThresholdPropI == "__children") {
				var subArrayName = that.getSpecSubArrayName("maxThreshold");
				maxThresholdJsonTemplate[subArrayName] = [];
				
				for (var maxThresholdPropChildI in l_MaxThreshold[maxThresholdPropI]) {
					var maxThresholdPropChildO = l_MaxThreshold[maxThresholdPropI][maxThresholdPropChildI];
					var maxThresholdSubPropO = {};
					for (var maxThresholdPropChildPropI in maxThresholdPropChildO) {
						if(maxThresholdPropChildPropI == "parentKey" || maxThresholdPropChildPropI == "leaf" || maxThresholdPropChildPropI == "key") continue;
						maxThresholdSubPropO[maxThresholdPropChildPropI] = maxThresholdPropChildO[maxThresholdPropChildPropI];
					}
					maxThresholdJsonTemplate[subArrayName].push(maxThresholdSubPropO);
				}
			} else {
				maxThresholdJsonTemplate[maxThresholdPropI] = l_MaxThreshold[maxThresholdPropI];	
			}
		}
		var dataCellListMinLabel = that.getDataCellListMinLabel();
		var useDataCellListMinLabel = false;
		if(org_scn_community_databound.hasData (dataCellListMinLabel)) {
			dataCellListMinLabel = org_scn_community_databound.flatten (dataCellListMinLabel,options);
			if(!that.getUseMinLabel()) {
				useDataCellListMinLabel = true;
			}
		}
		var l_MinLabel = that.getMinLabel();
		l_MinLabel = org_scn_community_basics.parseJson(l_MinLabel, "A");

		if(that.getUseMinLabel() && l_MinLabel[0]) {
			var l_MinLabelRoot = l_MinLabel[0];
			l_MinLabelRoot.__children = [];
			for(var contentI in l_MinLabel) {
				var contentO = l_MinLabel[contentI];

				if(contentO.parentKey != "ROOT") {
					l_MinLabelRoot.__children.push(contentO);
				}
			}
			l_MinLabel = l_MinLabelRoot;
		}

		var minLabelJsonTemplate = {};
		for (var minLabelPropI in l_MinLabel) {
			if(minLabelPropI == "parentKey" || minLabelPropI == "leaf" || minLabelPropI == "key") continue;
			if(minLabelPropI == "__children") {
				var subArrayName = that.getSpecSubArrayName("minLabel");
				minLabelJsonTemplate[subArrayName] = [];
				
				for (var minLabelPropChildI in l_MinLabel[minLabelPropI]) {
					var minLabelPropChildO = l_MinLabel[minLabelPropI][minLabelPropChildI];
					var minLabelSubPropO = {};
					for (var minLabelPropChildPropI in minLabelPropChildO) {
						if(minLabelPropChildPropI == "parentKey" || minLabelPropChildPropI == "leaf" || minLabelPropChildPropI == "key") continue;
						minLabelSubPropO[minLabelPropChildPropI] = minLabelPropChildO[minLabelPropChildPropI];
					}
					minLabelJsonTemplate[subArrayName].push(minLabelSubPropO);
				}
			} else {
				minLabelJsonTemplate[minLabelPropI] = l_MinLabel[minLabelPropI];	
			}
		}
		var dataCellListMinThreshold = that.getDataCellListMinThreshold();
		var useDataCellListMinThreshold = false;
		if(org_scn_community_databound.hasData (dataCellListMinThreshold)) {
			dataCellListMinThreshold = org_scn_community_databound.flatten (dataCellListMinThreshold,options);
			if(!that.getUseMinThreshold()) {
				useDataCellListMinThreshold = true;
			}
		}
		var l_MinThreshold = that.getMinThreshold();
		l_MinThreshold = org_scn_community_basics.parseJson(l_MinThreshold, "A");

		if(that.getUseMinThreshold() && l_MinThreshold[0]) {
			var l_MinThresholdRoot = l_MinThreshold[0];
			l_MinThresholdRoot.__children = [];
			for(var contentI in l_MinThreshold) {
				var contentO = l_MinThreshold[contentI];

				if(contentO.parentKey != "ROOT") {
					l_MinThresholdRoot.__children.push(contentO);
				}
			}
			l_MinThreshold = l_MinThresholdRoot;
		}

		var minThresholdJsonTemplate = {};
		for (var minThresholdPropI in l_MinThreshold) {
			if(minThresholdPropI == "parentKey" || minThresholdPropI == "leaf" || minThresholdPropI == "key") continue;
			if(minThresholdPropI == "__children") {
				var subArrayName = that.getSpecSubArrayName("minThreshold");
				minThresholdJsonTemplate[subArrayName] = [];
				
				for (var minThresholdPropChildI in l_MinThreshold[minThresholdPropI]) {
					var minThresholdPropChildO = l_MinThreshold[minThresholdPropI][minThresholdPropChildI];
					var minThresholdSubPropO = {};
					for (var minThresholdPropChildPropI in minThresholdPropChildO) {
						if(minThresholdPropChildPropI == "parentKey" || minThresholdPropChildPropI == "leaf" || minThresholdPropChildPropI == "key") continue;
						minThresholdSubPropO[minThresholdPropChildPropI] = minThresholdPropChildO[minThresholdPropChildPropI];
					}
					minThresholdJsonTemplate[subArrayName].push(minThresholdSubPropO);
				}
			} else {
				minThresholdJsonTemplate[minThresholdPropI] = l_MinThreshold[minThresholdPropI];	
			}
		}
		var dataCellListTarget = that.getDataCellListTarget();
		var useDataCellListTarget = false;
		if(org_scn_community_databound.hasData (dataCellListTarget)) {
			dataCellListTarget = org_scn_community_databound.flatten (dataCellListTarget,options);
			if(!that.getUseTarget()) {
				useDataCellListTarget = true;
			}
		}
		var l_Target = that.getTarget();
		l_Target = org_scn_community_basics.parseJson(l_Target, "A");

		if(that.getUseTarget() && l_Target[0]) {
			var l_TargetRoot = l_Target[0];
			l_TargetRoot.__children = [];
			for(var contentI in l_Target) {
				var contentO = l_Target[contentI];

				if(contentO.parentKey != "ROOT") {
					l_TargetRoot.__children.push(contentO);
				}
			}
			l_Target = l_TargetRoot;
		}

		var targetJsonTemplate = {};
		for (var targetPropI in l_Target) {
			if(targetPropI == "parentKey" || targetPropI == "leaf" || targetPropI == "key") continue;
			if(targetPropI == "__children") {
				var subArrayName = that.getSpecSubArrayName("target");
				targetJsonTemplate[subArrayName] = [];
				
				for (var targetPropChildI in l_Target[targetPropI]) {
					var targetPropChildO = l_Target[targetPropI][targetPropChildI];
					var targetSubPropO = {};
					for (var targetPropChildPropI in targetPropChildO) {
						if(targetPropChildPropI == "parentKey" || targetPropChildPropI == "leaf" || targetPropChildPropI == "key") continue;
						targetSubPropO[targetPropChildPropI] = targetPropChildO[targetPropChildPropI];
					}
					targetJsonTemplate[subArrayName].push(targetSubPropO);
				}
			} else {
				targetJsonTemplate[targetPropI] = l_Target[targetPropI];	
			}
		}

		var dataCellListFirstXLabel = that.getDataCellListFirstXLabel();
		var useDataCellListFirstXLabel = false;
		if(org_scn_community_databound.hasData (dataCellListFirstXLabel)) {
			dataCellListFirstXLabel = org_scn_community_databound.flatten (dataCellListFirstXLabel,options);
			if(!that.getUseFirstXLabel()) {
				useDataCellListFirstXLabel = true;
			}
		}

		var l_FirstXLabel = that.getFirstXLabel();
		l_FirstXLabel = org_scn_community_basics.parseJson(l_FirstXLabel, "A");

		if(that.getUseFirstXLabel() && l_FirstXLabel[0]) {
			l_FirstXLabel = l_FirstXLabel[0];
		}
		var firstXLabelJsonTemplate = {};
		for (var firstXLabelPropI in l_FirstXLabel) {
			if(firstXLabelPropI == "parentKey" || firstXLabelPropI == "leaf" || firstXLabelPropI == "key") continue;
			firstXLabelJsonTemplate[firstXLabelPropI] = l_FirstXLabel[firstXLabelPropI];
		}
		var dataCellListFirstYLabel = that.getDataCellListFirstYLabel();
		var useDataCellListFirstYLabel = false;
		if(org_scn_community_databound.hasData (dataCellListFirstYLabel)) {
			dataCellListFirstYLabel = org_scn_community_databound.flatten (dataCellListFirstYLabel,options);
			if(!that.getUseFirstYLabel()) {
				useDataCellListFirstYLabel = true;
			}
		}

		var l_FirstYLabel = that.getFirstYLabel();
		l_FirstYLabel = org_scn_community_basics.parseJson(l_FirstYLabel, "A");

		if(that.getUseFirstYLabel() && l_FirstYLabel[0]) {
			l_FirstYLabel = l_FirstYLabel[0];
		}
		var firstYLabelJsonTemplate = {};
		for (var firstYLabelPropI in l_FirstYLabel) {
			if(firstYLabelPropI == "parentKey" || firstYLabelPropI == "leaf" || firstYLabelPropI == "key") continue;
			firstYLabelJsonTemplate[firstYLabelPropI] = l_FirstYLabel[firstYLabelPropI];
		}
		var dataCellListLastXLabel = that.getDataCellListLastXLabel();
		var useDataCellListLastXLabel = false;
		if(org_scn_community_databound.hasData (dataCellListLastXLabel)) {
			dataCellListLastXLabel = org_scn_community_databound.flatten (dataCellListLastXLabel,options);
			if(!that.getUseLastXLabel()) {
				useDataCellListLastXLabel = true;
			}
		}

		var l_LastXLabel = that.getLastXLabel();
		l_LastXLabel = org_scn_community_basics.parseJson(l_LastXLabel, "A");

		if(that.getUseLastXLabel() && l_LastXLabel[0]) {
			l_LastXLabel = l_LastXLabel[0];
		}
		var lastXLabelJsonTemplate = {};
		for (var lastXLabelPropI in l_LastXLabel) {
			if(lastXLabelPropI == "parentKey" || lastXLabelPropI == "leaf" || lastXLabelPropI == "key") continue;
			lastXLabelJsonTemplate[lastXLabelPropI] = l_LastXLabel[lastXLabelPropI];
		}
		var dataCellListLastYLabel = that.getDataCellListLastYLabel();
		var useDataCellListLastYLabel = false;
		if(org_scn_community_databound.hasData (dataCellListLastYLabel)) {
			dataCellListLastYLabel = org_scn_community_databound.flatten (dataCellListLastYLabel,options);
			if(!that.getUseLastYLabel()) {
				useDataCellListLastYLabel = true;
			}
		}

		var l_LastYLabel = that.getLastYLabel();
		l_LastYLabel = org_scn_community_basics.parseJson(l_LastYLabel, "A");

		if(that.getUseLastYLabel() && l_LastYLabel[0]) {
			l_LastYLabel = l_LastYLabel[0];
		}
		var lastYLabelJsonTemplate = {};
		for (var lastYLabelPropI in l_LastYLabel) {
			if(lastYLabelPropI == "parentKey" || lastYLabelPropI == "leaf" || lastYLabelPropI == "key") continue;
			lastYLabelJsonTemplate[lastYLabelPropI] = l_LastYLabel[lastYLabelPropI];
		}
		var dataCellListMaxLabel = that.getDataCellListMaxLabel();
		var useDataCellListMaxLabel = false;
		if(org_scn_community_databound.hasData (dataCellListMaxLabel)) {
			dataCellListMaxLabel = org_scn_community_databound.flatten (dataCellListMaxLabel,options);
			if(!that.getUseMaxLabel()) {
				useDataCellListMaxLabel = true;
			}
		}

		var l_MaxLabel = that.getMaxLabel();
		l_MaxLabel = org_scn_community_basics.parseJson(l_MaxLabel, "A");

		if(that.getUseMaxLabel() && l_MaxLabel[0]) {
			l_MaxLabel = l_MaxLabel[0];
		}
		var maxLabelJsonTemplate = {};
		for (var maxLabelPropI in l_MaxLabel) {
			if(maxLabelPropI == "parentKey" || maxLabelPropI == "leaf" || maxLabelPropI == "key") continue;
			maxLabelJsonTemplate[maxLabelPropI] = l_MaxLabel[maxLabelPropI];
		}
		var dataCellListMinLabel = that.getDataCellListMinLabel();
		var useDataCellListMinLabel = false;
		if(org_scn_community_databound.hasData (dataCellListMinLabel)) {
			dataCellListMinLabel = org_scn_community_databound.flatten (dataCellListMinLabel,options);
			if(!that.getUseMinLabel()) {
				useDataCellListMinLabel = true;
			}
		}

		var l_MinLabel = that.getMinLabel();
		l_MinLabel = org_scn_community_basics.parseJson(l_MinLabel, "A");

		if(that.getUseMinLabel() && l_MinLabel[0]) {
			l_MinLabel = l_MinLabel[0];
		}
		var minLabelJsonTemplate = {};
		for (var minLabelPropI in l_MinLabel) {
			if(minLabelPropI == "parentKey" || minLabelPropI == "leaf" || minLabelPropI == "key") continue;
			minLabelJsonTemplate[minLabelPropI] = l_MinLabel[minLabelPropI];
		}

		var dataCellListMaxXValue = that.getDataCellListMaxXValue();
		var useDataCellListMaxXValue = false;
		if(org_scn_community_databound.hasData (dataCellListMaxXValue)) {
			dataCellListMaxXValue = org_scn_community_databound.flatten (dataCellListMaxXValue,options);
			if(!that.getUseMaxXValue()) {
				useDataCellListMaxXValue = true;
			}
		}
		var l_MaxXValue = that.getMaxXValue();
		
		var dataCellListMaxYValue = that.getDataCellListMaxYValue();
		var useDataCellListMaxYValue = false;
		if(org_scn_community_databound.hasData (dataCellListMaxYValue)) {
			dataCellListMaxYValue = org_scn_community_databound.flatten (dataCellListMaxYValue,options);
			if(!that.getUseMaxYValue()) {
				useDataCellListMaxYValue = true;
			}
		}
		var l_MaxYValue = that.getMaxYValue();
		
		var dataCellListMinXValue = that.getDataCellListMinXValue();
		var useDataCellListMinXValue = false;
		if(org_scn_community_databound.hasData (dataCellListMinXValue)) {
			dataCellListMinXValue = org_scn_community_databound.flatten (dataCellListMinXValue,options);
			if(!that.getUseMinXValue()) {
				useDataCellListMinXValue = true;
			}
		}
		var l_MinXValue = that.getMinXValue();
		
		var dataCellListMinYValue = that.getDataCellListMinYValue();
		var useDataCellListMinYValue = false;
		if(org_scn_community_databound.hasData (dataCellListMinYValue)) {
			dataCellListMinYValue = org_scn_community_databound.flatten (dataCellListMinYValue,options);
			if(!that.getUseMinYValue()) {
				useDataCellListMinYValue = true;
			}
		}
		var l_MinYValue = that.getMinYValue();
		



		var l_ContentHeight = that.getContentHeight();
		var l_ContentWidth = that.getContentWidth();
		var l_View = that.getView();


		var rowI = 0;
		var counterI = 1;

		if(useDataCellListTarget) {
			counterI = dataCellListTarget.values.length;
		}


		for(rowI=0;rowI<counterI;rowI++){
			var rowHeaderName = "NONE";

			if(useDataCellListChart) {
				l_Chart.label = dataCellListChart.rowHeaders[rowI];
				l_Chart.value = dataCellListActual.values[rowI][0];
			} else {
				l_Chart.label = l_Chart.key;	
			}
			if(useDataCellListFirstXLabel) {
				l_FirstXLabel.label = dataCellListFirstXLabel.rowHeaders[rowI];
				l_FirstXLabel.value = dataCellListActual.values[rowI][0];
			} else {
				l_FirstXLabel.label = l_FirstXLabel.key;	
			}
			if(useDataCellListFirstYLabel) {
				l_FirstYLabel.label = dataCellListFirstYLabel.rowHeaders[rowI];
				l_FirstYLabel.value = dataCellListActual.values[rowI][0];
			} else {
				l_FirstYLabel.label = l_FirstYLabel.key;	
			}
			if(useDataCellListInnerMaxThreshold) {
				l_InnerMaxThreshold.label = dataCellListInnerMaxThreshold.rowHeaders[rowI];
				l_InnerMaxThreshold.value = dataCellListActual.values[rowI][0];
			} else {
				l_InnerMaxThreshold.label = l_InnerMaxThreshold.key;	
			}
			if(useDataCellListInnerMinThreshold) {
				l_InnerMinThreshold.label = dataCellListInnerMinThreshold.rowHeaders[rowI];
				l_InnerMinThreshold.value = dataCellListActual.values[rowI][0];
			} else {
				l_InnerMinThreshold.label = l_InnerMinThreshold.key;	
			}
			if(useDataCellListLastXLabel) {
				l_LastXLabel.label = dataCellListLastXLabel.rowHeaders[rowI];
				l_LastXLabel.value = dataCellListActual.values[rowI][0];
			} else {
				l_LastXLabel.label = l_LastXLabel.key;	
			}
			if(useDataCellListLastYLabel) {
				l_LastYLabel.label = dataCellListLastYLabel.rowHeaders[rowI];
				l_LastYLabel.value = dataCellListActual.values[rowI][0];
			} else {
				l_LastYLabel.label = l_LastYLabel.key;	
			}
			if(useDataCellListMaxLabel) {
				l_MaxLabel.label = dataCellListMaxLabel.rowHeaders[rowI];
				l_MaxLabel.value = dataCellListActual.values[rowI][0];
			} else {
				l_MaxLabel.label = l_MaxLabel.key;	
			}
			if(useDataCellListMaxThreshold) {
				l_MaxThreshold.label = dataCellListMaxThreshold.rowHeaders[rowI];
				l_MaxThreshold.value = dataCellListActual.values[rowI][0];
			} else {
				l_MaxThreshold.label = l_MaxThreshold.key;	
			}
			if(useDataCellListMinLabel) {
				l_MinLabel.label = dataCellListMinLabel.rowHeaders[rowI];
				l_MinLabel.value = dataCellListActual.values[rowI][0];
			} else {
				l_MinLabel.label = l_MinLabel.key;	
			}
			if(useDataCellListMinThreshold) {
				l_MinThreshold.label = dataCellListMinThreshold.rowHeaders[rowI];
				l_MinThreshold.value = dataCellListActual.values[rowI][0];
			} else {
				l_MinThreshold.label = l_MinThreshold.key;	
			}
			if(useDataCellListTarget) {
				l_Target.label = dataCellListTarget.rowHeaders[rowI];
				l_Target.value = dataCellListActual.values[rowI][0];
			} else {
				l_Target.label = l_Target.key;	
			}

			if(useDataCellListFirstXLabel) {
				l_FirstXLabel.label = dataCellListFirstXLabel.rowHeaders[rowI];
				l_FirstXLabel.value = dataCellListActual.values[rowI][0];
			} else {
				l_FirstXLabel.label = l_FirstXLabel.key;	
			}
			if(useDataCellListFirstYLabel) {
				l_FirstYLabel.label = dataCellListFirstYLabel.rowHeaders[rowI];
				l_FirstYLabel.value = dataCellListActual.values[rowI][0];
			} else {
				l_FirstYLabel.label = l_FirstYLabel.key;	
			}
			if(useDataCellListLastXLabel) {
				l_LastXLabel.label = dataCellListLastXLabel.rowHeaders[rowI];
				l_LastXLabel.value = dataCellListActual.values[rowI][0];
			} else {
				l_LastXLabel.label = l_LastXLabel.key;	
			}
			if(useDataCellListLastYLabel) {
				l_LastYLabel.label = dataCellListLastYLabel.rowHeaders[rowI];
				l_LastYLabel.value = dataCellListActual.values[rowI][0];
			} else {
				l_LastYLabel.label = l_LastYLabel.key;	
			}
			if(useDataCellListMaxLabel) {
				l_MaxLabel.label = dataCellListMaxLabel.rowHeaders[rowI];
				l_MaxLabel.value = dataCellListActual.values[rowI][0];
			} else {
				l_MaxLabel.label = l_MaxLabel.key;	
			}
			if(useDataCellListMinLabel) {
				l_MinLabel.label = dataCellListMinLabel.rowHeaders[rowI];
				l_MinLabel.value = dataCellListActual.values[rowI][0];
			} else {
				l_MinLabel.label = l_MinLabel.key;	
			}

			if(useDataCellListMaxXValue) {
				l_MaxXValue = dataCellListMaxXValue.values[rowI][0];
			}
			if(useDataCellListMaxYValue) {
				l_MaxYValue = dataCellListMaxYValue.values[rowI][0];
			}
			if(useDataCellListMinXValue) {
				l_MinXValue = dataCellListMinXValue.values[rowI][0];
			}
			if(useDataCellListMinYValue) {
				l_MinYValue = dataCellListMinYValue.values[rowI][0];
			}




			var customData = {};
			
			customData.contentHeight = l_ContentHeight;
			customData.contentWidth = l_ContentWidth;
			customData.view = l_View;

			customData.maxXValue = l_MaxXValue;
			customData.maxYValue = l_MaxYValue;
			customData.minXValue = l_MinXValue;
			customData.minYValue = l_MinYValue;


			customData.chart = chartJsonTemplate;
			customData.firstXLabel = firstXLabelJsonTemplate;
			customData.firstYLabel = firstYLabelJsonTemplate;
			customData.innerMaxThreshold = innerMaxThresholdJsonTemplate;
			customData.innerMinThreshold = innerMinThresholdJsonTemplate;
			customData.lastXLabel = lastXLabelJsonTemplate;
			customData.lastYLabel = lastYLabelJsonTemplate;
			customData.maxLabel = maxLabelJsonTemplate;
			customData.maxThreshold = maxThresholdJsonTemplate;
			customData.minLabel = minLabelJsonTemplate;
			customData.minThreshold = minThresholdJsonTemplate;
			customData.target = targetJsonTemplate;

			customData.firstXLabel = firstXLabelJsonTemplate;
			customData.firstYLabel = firstYLabelJsonTemplate;
			customData.lastXLabel = lastXLabelJsonTemplate;
			customData.lastYLabel = lastYLabelJsonTemplate;
			customData.maxLabel = maxLabelJsonTemplate;
			customData.minLabel = minLabelJsonTemplate;



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
	
					{entry.height = (width - 20) + "px"};
				}
	
				that._oModel.setData(that._specialDataModel);
			}
		}
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

define([myComponentData.requireName], function(databoundareamicrochart){
	myComponentData.instance = AreaMicroChart;
	return myComponentData.instance;
});

}).call(this);