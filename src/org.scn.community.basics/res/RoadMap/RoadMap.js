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
	"./RoadMapSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics"
	
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

RoadMap = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.addStyleClass("scn-pack-RoadMap");
		
		that._oElements = {};
		that._oSteps = {};
		
		that.attachStepSelected(that.onSelected);
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		// that.onAfterRendering = function () {
			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		// }
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	processData: function (flatData, afterPrepare, owner) {
		var that = owner;

		// processing on data
		that.afterPrepare(that);
	},

	afterPrepare: function (owner) {
		var that = owner;
			
		// visualization on processed data

		if(that.getDCleanAll()) {
			that.destroySteps();
			
			that._oElements = {};
			that._oSteps = {};
			
			that.setDCleanAll(false);
			that.fireDesignStudioPropertiesChanged(["cleanAll"]);
		}
		
		var lElementsToRender = that.getDElementsContent();
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);

			if(lElementsToRenderArray.length == 0) {
				that.addDummy(owner);
			}
			
			// distribute content
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
			
				if(element.enabled == undefined) { element.enabled = true; }
				if(element.visible == undefined) { element.visible = true; }
				
				if(that._oElements[that.getId() + "_" + element.key]) {
					that._oSteps[that.getId() + "_" + element.key].setEnabled(element.enabled);
					that._oSteps[that.getId() + "_" + element.key].setVisible(element.visible);
					continue;
				}
				
				var step = new sap.ui.commons.RoadMapStep(
						that.getId() + "_" + element.key, {label: element.text, enabled: element.enabled, visible: element.visible});
				step._dsKey = element.key;
				
				that._oElements[that.getId() + "_" + element.key] = element.key;
				that._oSteps[that.getId() + "_" + element.key] = step;
				
				that.addStep(step);
			}
		} else {
			that.addDummy();
		}

		if(that._oSteps[that.getId() + "_" + that.getDSelectedKey()] != undefined) {
			that.setSelectedStep(that._oSteps[that.getId() + "_" + that.getDSelectedKey()]);	
		}
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	onSelected: function(oEvent) {
		var id = oEvent.mParameters.stepId;
		var that = oEvent.oSource;
		
		var realKey = that._oElements[id];

		that.setDSelectedKey(realKey);
		that.fireDesignStudioPropertiesChangedAndEvent(["DSelectedKey"], "onSelectionChanged");
	},
	
	addDummy: function(owner) {
		var that = owner;
		
		//create the RoadMap steps
		var oStep1 = new sap.ui.commons.RoadMapStep({label: "Step 1"});
		var oStep2 = new sap.ui.commons.RoadMapStep({label: "Step 2", enabled: false});
		var oStep3 = new sap.ui.commons.RoadMapStep({label: "Step 3"});
		var oStep4 = new sap.ui.commons.RoadMapStep({label: "Step 4"});
	
		//add steps to the RoadMap
		that.addStep(oStep1);
		that.addStep(oStep2);
		that.addStep(oStep3);
		that.addStep(oStep4);
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = RoadMap;
jQuery.sap.require("sap.ui.commons.RoadMap");
sap.ui.commons.RoadMap.extend(myComponentData.fullComponentName, myComponentData.instance);
});