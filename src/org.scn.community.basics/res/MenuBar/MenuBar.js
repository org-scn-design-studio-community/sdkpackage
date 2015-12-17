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
	"./MenuBarSpec",
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

MenuBar = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that._oElements = {};
		that._oMenuBar = new sap.ui.commons.MenuBar();
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		 that.onAfterRendering = function () {
			 org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oMenuBar, that.onResize);
		 }
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
		if(that.getCleanAll()) {
			that._destroyAll();
			
			that._oElements = {};
			
			that.setCleanAll(false);
			that.fireDesignStudioPropertiesChanged(["cleanAll"]);
		}
		
		var lElementsToRender = that.getElementsContent();
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);

			// distribute content
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				if(that._oElements[element.key] == undefined) {
					var lNewElement = that._createElement(that, i, element.key, element.text, element.url, element.parentKey, element.leaf, element.enabled);
					
					that._oElements[element.key] = lNewElement;
				} else {
					var elementObject = that._oElements[element.key];
					elementObject.setText(element.text);
					elementObject.setEnabled(element.enabled);
					elementObject.setIcon(org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getDefaultImage(), element.url, "MenuBar.png"));
				}
			}
		}
		
		for (lElementKey in that._oElements) {
			if(lElementKey.indexOf("-SUB") > -1) {
				continue;
			}
			
			var lElement = that._oElements[lElementKey];
			if(lElement._Placed != true) {
				var parentKey = lElement._ParentKey;
				
				if(parentKey == "ROOT") {
					that._addRoot(that, lElement);
				} else {
					var parentElement = that._oElements[parentKey + "-SUB"];
					if(parentElement != undefined) {
						that._addChild(parentElement, lElement);
					}
				}
				
				lElement._Placed = true;
			} else {
				// need to code update?
			}
		}
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	
	/**
	 * Specific Function for Destroy All
	 */
	_destroyAll : function (owner) {
		var that = owner;
		
		for (lElementKey in that._oElements) {
			var lElement = that._oElements[lElementKey];
			lElement.destroy();
		}
		
		that._oMenuBar.removeAllItems();
		that._oMenuBar.destroyItems();
		
		that._oElements = {};
	},
	
	/**
	 * Specific Function for Adding Root Elements
	 */
	_addRoot : function(owner, iElement) {
		var that = owner;
		that._oMenuBar.addItem(iElement);
	},
	
	/**
	 * Specific Function for Adding Child Elements
	 */
	_addChild : function(iParent, iElement) {
		iParent.addItem(iElement);
	},

	_createElement: function (owner, index, iElementKey, iElementText, iImageUrl, iParentKey, isLeaf, isEnabled) {
		var that = owner;
		
		if(iElementText == undefined) {iElementText = ""};
		if(iImageUrl == undefined) {iImageUrl = ""};
		if(isEnabled == undefined) {isEnabled = true};

		iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getDefaultImage(), iImageUrl, "MenuBar.png");
		
		var lElement = undefined;
		
		if(isLeaf){
			lElement = new sap.ui.unified.MenuItem({
					id: that.getId() + "-sec-" +  iElementKey,
					text: iElementText,
					icon: iImageUrl,
					enabled: isEnabled
				});
		} else {
			lElement = new sap.ui.unified.MenuItem({
					id: that.getId() + "-sec-" +  iElementKey,
					text: iElementText,
					icon: iImageUrl,
					enabled: isEnabled
				});
		}
		
		lElement._Key = iElementKey;
		lElement._ParentKey = iParentKey;
		
		if(!isLeaf) {
			var oSubMenu = new sap.ui.commons.Menu({
				id: that.getId() + "-sub-" +  iElementKey
			});
			lElement.setSubmenu(oSubMenu);
			
			that._oElements[iElementKey + "-SUB"] = oSubMenu;
		} else {
			
		}

		var handleSelect = function(oEvent){
			that.setSelectedKey(lElement._Key);
			that.setSelectedText(lElement.getText());
			
			that.fireDesignStudioPropertiesChangedAndEvent(["selectedKey", "selectedText"], "onSelectionChanged");
		};

		lElement.attachSelect(handleSelect);
		
		return lElement;
	},
	
	_updateSelection : function (owner, iSelectedKey) {
		var that = owner;
		
		for (lElementKey in that._oElements) {
			var lElement = that._oElements[lElementKey];
			if(lElement.addStyleClass) {
				if(iSelectedKey == lElement._Key){
					lElement.addStyleClass("scn-pack-MenuBar-SelectedValue");
				} else {
					lElement.removeStyleClass("scn-pack-MenuBar-SelectedValue");
				};
			}
		};
	}
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = MenuBar;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});