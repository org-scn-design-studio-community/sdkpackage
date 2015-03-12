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

(function() {
/** code for recognition of script path */
var myScript = $("script:last")[0].src;
var ownComponentName = "org.scn.community.basics.RoadMap";
var _readScriptPath = function () {
	var scriptInfo = org_scn_community_basics.readOwnScriptAccess(myScript, ownComponentName);
	return scriptInfo.myScriptPath;
};
/** end of path recognition */

sap.ui.commons.RoadMap.extend(ownComponentName, {

	metadata: {
        properties: {
        	  "DElementsContent": {type: "string"},
        	  "DSelectedKey": {type: "string"},
              "DCleanAll": {type: "boolean"}
        }
	},
  
	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
		
		this.addStyleClass("scn-pack-RoadMap");
		
		this._oElements = {};
		this._oSteps = {};
		
		this.attachStepSelected(that.onSelected);
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
		if(this.getDCleanAll()) {
			this.destroySteps();
			
			this._oElements = {};
			this._oSteps = {};
			
			this.setDCleanAll(false);
			that.fireDesignStudioPropertiesChanged(["cleanAll"]);
		}
		
		var lElementsToRender = this.getDElementsContent();
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);

			if(lElementsToRenderArray.length == 0) {
				that.addDummy();
			}
			
			// distribute content
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				
				if(this._oElements[this.getId() + "_" + element.key]) {
					this._oSteps[this.getId() + "_" + element.key].setEnabled(element.enabled);
					this._oSteps[this.getId() + "_" + element.key].setVisible(element.visible);
					continue;
				}
				
				var step = new sap.ui.commons.RoadMapStep(
						this.getId() + "_" + element.key, {label: element.text, enabled: element.enabled, visible: element.visible});
				step._dsKey = element.key;
				
				this._oElements[this.getId() + "_" + element.key] = element.key;
				this._oSteps[this.getId() + "_" + element.key] = step;
				
				that.addStep(step);
			}
		} else {
			that.addDummy();
		}

		if(this._oSteps[this.getId() + "_" + that.getDSelectedKey()] != undefined) {
			that.setSelectedStep(this._oSteps[this.getId() + "_" + that.getDSelectedKey()]);	
		}
	},
	
	onSelected: function(oEvent) {
		var id = oEvent.mParameters.stepId;

		var realKey = this._oElements[id];

		this.setDSelectedKey(realKey);
		this.fireDesignStudioPropertiesChanged(["DSelectedKey"]);
		this.fireDesignStudioEvent(["onSelectionChanged"]);
	},
	
	addDummy: function() {
		var that = this;
		
		//create the RoadMap steps
		var oStep1 = new sap.ui.commons.RoadMapStep({label: "Step 1"});
		var oStep2 = new sap.ui.commons.RoadMapStep({label: "Step 2", enabled: false});
		var oStep3 = new sap.ui.commons.RoadMapStep({label: "Step 3"});
		var oStep4 = new sap.ui.commons.RoadMapStep({label: "Step 4"});
	
		//add steps to the RoadMap
		this.addStep(oStep1);
		this.addStep(oStep2);
		this.addStep(oStep3);
		this.addStep(oStep4);
	},
});
})();