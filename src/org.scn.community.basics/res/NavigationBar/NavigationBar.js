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
	"./NavigationBarSpec",
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

NavigationBar = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		jQuery.sap.require("sap.ui.ux3.NavigationBar");
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that._oNavBar = new sap.ui.ux3.NavigationBar();
		that.addContent(
				that._oNavBar,
				{left: "0px", top: "0px"}	
		);
		
		that.addStyleClass("scn-pack-NavigationBar");
		that.addStyleClass("scn-pack-FullSizeChildren");
		
		that._oElements = {};
		that._oItems = {};
		
		that._oNavBar._owner = that;
		that._oNavBar.attachSelect(that.onSelected);
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
			that._oNavBar.destroyItems();
			
			that._oElements = {};
			that._oItems = {};
			
			that.setDCleanAll(false);
			that.fireDesignStudioPropertiesChanged(["cleanAll"]);
		}
		
		var lElementsToRender = that.getDElementsContent();
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);

			if(lElementsToRenderArray.length == 0) {
				that.addDummy();
			}else{
				//add an invisible dummy item to enable unselecting items at least visibly
				var element_key = "invisible_dummy_select";
				if(that._oElements[that.getId() + "_" + element_key]) {
					that._oItems[that.getId() + "_" + element_key].setEnabled(false);
					that._oItems[that.getId() + "_" + element_key].setVisible(false);
				}else{
					var Item = new sap.ui.ux3.NavigationItem(
							that.getId() + "_" + element_key, {key: element_key, text: "I am invisible", enabled: false, visible: false});
					Item._owner = that;
					Item._dsKey = element_key;
					
					that._oElements[that.getId() + "_" + element_key] = element_key;
					that._oItems[that.getId() + "_" + element_key] = Item;
					that._oNavBar.addItem(Item);	
				}
				//------------------------------------------------------------------------
			}
			
			// distribute content
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				
				if(that._oElements[that.getId() + "_" + element.key]) {
					that._oItems[that.getId() + "_" + element.key].setEnabled(element.enabled);
					that._oItems[that.getId() + "_" + element.key].setVisible(element.visible);
					continue;
				}
				
				var Item = new sap.ui.ux3.NavigationItem(
						that.getId() + "_" + element.key, {key: element.key, text: element.text, enabled: element.enabled, visible: element.visible});
				Item._owner = that;
				Item._dsKey = element.key;
				
				that._oElements[that.getId() + "_" + element.key] = element.key;
				that._oItems[that.getId() + "_" + element.key] = Item;
				
				that._oNavBar.addItem(Item);
			}
		} else {
			that.addDummy();
		}
		
		if(that._oItems[that.getId() + "_" + that.getDSelectedKey()] != undefined) {
			that._oNavBar.setSelectedItem(that._oItems[that.getId() + "_" + that.getDSelectedKey()]);	
		}
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	onSelected: function(oEvent) {
		var that = oEvent.getSource()._owner;
		var id = oEvent.mParameters.itemId;

		var realKey = that._oElements[id];
		var item = that._oItems[id];
		
		if (item.getEnabled()) {
			that.setDSelectedKey(realKey);
			that.setDSelectedText(item.getText());
			that.fireDesignStudioPropertiesChangedAndEvent(["DSelectedKey", "DSelectedText"], "onSelectionChanged");
		}else{
			oEvent.preventDefault();
		}
	},
	
	addDummy: function() {
		var that = this;
		
		//create the Items
		var oItem1 = new sap.ui.ux3.NavigationItem({key: "item1", text: "Item 1"});
		var oItem2 = new sap.ui.ux3.NavigationItem({key: "item2", text: "Item 2", enabled: false});
		var oItem3 = new sap.ui.ux3.NavigationItem({key: "item3", text: "Item 3"});
		var oItem4 = new sap.ui.ux3.NavigationItem({key: "item4", text: "Item 4"});
	
		//add items to the bar
		that._oNavBar.addItem(oItem1);
		that._oNavBar.addItem(oItem2);
		that._oNavBar.addItem(oItem3);
		that._oNavBar.addItem(oItem4);
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = NavigationBar;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});