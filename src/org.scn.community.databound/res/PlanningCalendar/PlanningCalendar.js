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
	"./PlanningCalendarSpec",
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
//%DEFINE-END%
var myComponentData = spec;

PlanningCalendar = {

	renderer: {},

	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},

	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);
		
		that.addStyleClass("scn-pack-PlanningCalendar");
		that.addStyleClass("scn-pack-FullSizeChildren");

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		var componentPath = sap.zen.createStaticSdkMimeUrl(that.componentData.fullComponentPackage , "");
		jQuery.sap.registerModulePath(myComponentData.fullComponentName, componentPath);

		sap.ui.controller(myComponentData.fullComponentName + ".Controller", {
			owner: that,
				onAppointmentSelected: function (event) {
					org_scn_community_unified.processEvent(that, "onAppointmentSelected", event);
				},
				onIntervalSelected: function (event) {
					org_scn_community_unified.processEvent(that, "onIntervalSelected", event);
				},
				onRowSelectionChanged: function (event) {
					org_scn_community_unified.processEvent(that, "onRowSelectionChanged", event);
				},
				onStartDateChanged: function (event) {
					org_scn_community_unified.processEvent(that, "onStartDateChanged", event);
				},
				onViewChanged: function (event) {
					org_scn_community_unified.processEvent(that, "onViewChanged", event);
				},

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





		var l_Appointments = org_scn_community_unified.getObjectArrayContent(that, "appointments", options);
		var l_IntervalHeaders = org_scn_community_unified.getObjectArrayContent(that, "intervalHeaders", options);
		var l_Rows = org_scn_community_unified.getObjectArrayContent(that, "rows", options);

		var l_ContentHeight = that.getContentHeight();
		var l_ContentWidth = that.getContentWidth();
		var l_NoDataText = that.getNoDataText();
		var l_ShowIntervalHeaders = that.getShowIntervalHeaders();
		var l_ShowRowHeaders = that.getShowRowHeaders();
		var l_StartDate = that.getStartDate();
		var l_ViewKey = that.getViewKey();


		var l_OnAppointmentSelected = org_scn_community_unified.createEvent(that, "onAppointmentSelected");
		var l_OnIntervalSelected = org_scn_community_unified.createEvent(that, "onIntervalSelected");
		var l_OnRowSelectionChanged = org_scn_community_unified.createEvent(that, "onRowSelectionChanged");
		var l_OnStartDateChanged = org_scn_community_unified.createEvent(that, "onStartDateChanged");
		var l_OnViewChanged = org_scn_community_unified.createEvent(that, "onViewChanged");


		var rowI = 0;
		var counterI = 1;



		for(rowI=0;rowI<counterI;rowI++){
			var rowHeaderName = "NONE";





			l_Appointments = org_scn_community_unified.loopObjectArray(that, l_Appointments, rowI);
			l_IntervalHeaders = org_scn_community_unified.loopObjectArray(that, l_IntervalHeaders, rowI);
			l_Rows = org_scn_community_unified.loopObjectArray(that, l_Rows, rowI);


			var customData = {};
			
			customData.contentHeight = l_ContentHeight;
			customData.contentWidth = l_ContentWidth;
			customData.noDataText = l_NoDataText;
			customData.showIntervalHeaders = l_ShowIntervalHeaders;
			customData.showRowHeaders = l_ShowRowHeaders;
			customData.startDate = l_StartDate;
			customData.viewKey = l_ViewKey;





			customData[l_Appointments.name] = l_Appointments.json;

			customData[l_IntervalHeaders.name] = l_IntervalHeaders.json;

			customData[l_Rows.name] = l_Rows.json;



			customData[l_OnAppointmentSelected.name] = l_OnAppointmentSelected.func;
			customData[l_OnIntervalSelected.name] = l_OnIntervalSelected.func;
			customData[l_OnRowSelectionChanged.name] = l_OnRowSelectionChanged.func;
			customData[l_OnStartDateChanged.name] = l_OnStartDateChanged.func;
			customData[l_OnViewChanged.name] = l_OnViewChanged.func;


			that._specialDataModel.push(customData);
		}

		if(org_scn_community_unified.adjustPlanningCalendarModel) {
			that._specialDataModel = org_scn_community_unified.adjustPlanningCalendarModel(that._specialDataModel, that);
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

myComponentData.instance = PlanningCalendar;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);

});