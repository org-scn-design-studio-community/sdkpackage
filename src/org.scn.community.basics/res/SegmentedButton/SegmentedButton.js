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
	"./SegmentedButtonSpec",
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

SegmentedButton = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;

		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.addStyleClass("scn-pack-SegmentedButton");
		
		that._oElements = {};
		that._oParentElements = {};
		
		that._initComponent();
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
			that._destroyAll(that);
			
			that._oElements = {};
			that._oParentElements = {};
			
			that.setDCleanAll(false);
			that.fireDesignStudioPropertiesChanged(["DCleanAll"]);
		}
		
		var allKeysAsOfNow = "";
		var lElementsToRender = that.getDElementsContent();
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);

			// check parent-childs
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				if(that._oParentElements[element.parentKey] == undefined) {
					that._oParentElements[element.parentKey] = "";
				}
				if(!that._oParentElements[element.parentKey].indexOf("|" + element.key + "|") > -1) {
					that._oParentElements[element.parentKey] = that._oParentElements[element.parentKey] + "|" + element.key + "|";	
				}

				if(allKeysAsOfNow.indexOf("|"+element.key+"|") == -1) {
					allKeysAsOfNow = allKeysAsOfNow + "|" + element.key + "|";
				}
			}

			// distribute content
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];

				if(element.text == undefined) {element.text = ""};
				if(element.image == undefined) {element.image = ""};
				if(element.selected == undefined) {element.selected = false};

				if(that._oElements[element.key] == undefined) {
					var lNewElement = that._createElement(that, i, element.key, element.text, element.image, element.parentKey, element.selected, element.leaf);
					that._oElements[element.key] = lNewElement;
				} else {
					var currentElement = that._oElements[element.key];
					currentElement.setText(element.text);
					currentElement.setIcon(that._prepareImage(that, element.image));
					// need to find a way to synchronize
					// if(currentElement.setPressed) {
					// 	currentElement.setPressed(element.selected);	
					// }
				}
			}
		}
		
		for (lElementKey in that._oElements) {
			var lElement = that._oElements[lElementKey];
			if(lElement != undefined) {
				var parentKey = lElement._ParentKey;
				if(lElement._Placed != true) {
					if(parentKey == "ROOT") {
						that._addRoot(that, lElement);
					} else {
						var parentElement = that._oElements[parentKey];
						if(parentElement != undefined) {
							that._addChild(parentElement, lElement);
						}
					}
					
					lElement._Placed = true;
				} else {
					// need to code update?
					if(allKeysAsOfNow.indexOf("|"+lElementKey+"|") == -1) {
						// no more in array... delete

						if(parentKey == "ROOT") {
							that._oSegmentedButton.removeButton(lElement);
							
							// check children and remove
							var childrenKeysList = that._oParentElements[lElementKey];
							if(childrenKeysList) {
								var childrenKeys = childrenKeysList.split("|");
								for (childKey in childrenKeys) {
									if(that._oElements[childrenKeys[childKey]]) {
										that._oElements[childrenKeys[childKey]].destroy();
										that._oElements[childrenKeys[childKey]] = undefined;
									}
								}
							}
						} else {
							if(that._oElements[parentKey] && that._oElements[parentKey].getMenu){
								that._oElements[parentKey].getMenu().removeItem(lElement);	
							}
						}
						lElement.destroy();
						
						that._oElements[lElementKey] = undefined;
					}
				}
			}
		}
		
		that._cleanUpAfterUpdate(that);
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	
	/**
	 * Specific Function for Initialization of the Content Component
	 */
	_initComponent : function() {
		var that = this;
		
		that._oSegmentedButton = new sap.ui.commons.SegmentedButton();

		that.onAfterRendering = function () {
			if(that._oSegmentedButtonPlaced != true) {
				var jqThis = that.$();
				
				that._containerWidth = (jqThis.outerWidth(true) - 6) + "px";
				that._containerHeight = jqThis.outerHeight(true) + "px";

				that.addContent(
						that._oSegmentedButton,
						{left: "0px", top: "0px"}
				);
				
				that._oSegmentedButtonPlaced = true;
			}
		}
	},
	
	/**
	 * Specific Function for Destroy All
	 */
	_destroyAll : function (owner) {
		var that = owner;
		
		for (lElementKey in that._oElements) {
			var lElement = that._oElements[lElementKey];
			if(lElement != undefined) {
				lElement.destroy();	
			}
		}
		
		that._oSegmentedButton.removeAllButtons();
		that._oSegmentedButton.destroyButtons();
		
		that._oElements = {};
	},
	
	/**
	 * Specific Function for Adding Root Elements
	 */
	_addRoot : function(owner, iElement) {
		var that = owner;
		
		that._oSegmentedButton.addButton(iElement);
	},
	
	/**
	 * Specific Function for Adding Child Elements
	 */
	_addChild : function(iParent, iElement) {
		if(iParent.getMenu){
			iParent.getMenu().addItem(iElement);	
		}
	},
	
	/**
	 * Specific Function for CleanUp (if required)
	 */
	_cleanUpAfterUpdate : function (owner) {
		var that = owner;
		
		// clean up "loading" element
		for (lElementKey in that._oElements) {
			var lElement = that._oElements[lElementKey];
			if(lElement != undefined) {
				if(lElement._childrenRequested) {
					lElement._childrenRequested = false;
				}
			}
		}
	},

	_prepareImage: function (owner, iImageUrl) {
		var that = owner;
		
		if(that.getDWithImages() == false) {return ""};
		
		// in case starts with http, keep as is 
		if(iImageUrl.indexOf("http") == 0) {
			// no nothing
		} else {
			// in case of repository, add the prefix from repository
			iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getDDefaultImage(), iImageUrl, "SegmentedButton.png");	
		}
		return iImageUrl;
	},

	_createElement: function (owner, index, iElementKey, iElementText, iImageUrl, iParentKey, iSelected, isLeaf) {
		var that = owner;
		
		iImageUrl = that._prepareImage(that, iImageUrl);
		
		var lElement = undefined;
		
		if(isLeaf){
			// menu item for menu button
			lElement = new sap.ui.unified.MenuItem({
				id: that.getId() + "-s-" +  iElementKey,
				text: iElementText,
				icon: iImageUrl
			});
		} else {
			var lDSelectionType = that.getDSelectionType();
				var hasChildren = (that._oParentElements[iElementKey] != undefined);
				// special handling for design mode, always menu button
				hasChildren = hasChildren || (sap.zen.designmode != undefined);

				if(hasChildren) {
					// in this case, multiple selection will not work perfectly
					lElement = new sap.ui.commons.MenuButton({
						id: that.getId() + "-m-" +  iElementKey,
						text: iElementText,
						tooltip: iElementText,
						icon: iImageUrl
					});
					var lMenu = new sap.ui.commons.Menu(that.getId() + "-mm-" +  iElementKey, {ariaDescription: "", tooltip: ""});
					lElement.setMenu(lMenu);
				} else {
					if(lDSelectionType == "Single") {
						// simple button, standard case
						lElement = new sap.ui.commons.Button({
							id: that.getId() + "-m-" +  iElementKey,
							text: iElementText,
							tooltip: iElementText,
							icon: iImageUrl
						});	
					} else if (lDSelectionType == "Multiple") {
						// toggle button for multiple selection
						lElement = new sap.ui.commons.ToggleButton({
							id: that.getId() + "-m-" +  iElementKey,
							text: iElementText,
							tooltip: iElementText,
							pressed: iSelected,
							icon: iImageUrl
						});
					}
				}
		}
		
		if(lElement.attachPress) {
			lElement.attachPress(function(oControlEvent, oControl) {
				var lElement = oControlEvent.getSource();
				var lElementId = lElement._Key;

				var lDSelectionType = that.getDSelectionType();
				if(lDSelectionType == "Single") {
					that.setDPressedButtonKey(lElementId);

					that.fireDesignStudioPropertiesChangedAndEvent(["DPressedButtonKey"], "onButtonPressed");
				} else if (lDSelectionType == "Multiple") {
					var selectedKeys = [];
					
					that.setDPressedButtonKey(lElementId);
					
					for (lElementKey in that._oElements) {
						var lElement = that._oElements[lElementKey];
						
						// only when toggle button, items are not marked as pressed
						if(lElement.getPressed) {
							if(lElement.getPressed()) {
								selectedKeys.push(lElement._Key);;
							}
						}
					}
					that.setDSelectedKeys(JSON.stringify(selectedKeys));

					that.fireDesignStudioPropertiesChangedAndEvent(["DPressedButtonKey", "DSelectedKeys"], "onSelected");
				}

				if(lElement._childrenRequested == undefined) {
					lElement._childrenRequested = true;

				}
			});
		}

		if(lElement.attachItemSelected) {
			lElement.attachItemSelected(function(oEvent) {
				var lElementKey = oEvent.getParameter("itemId");
				// prepare the ID
				lElementKey = lElementKey.replace(that.getId(), "");
				lElementKey = lElementKey.replace("-s-", "");
				lElementKey = lElementKey.replace("-s-", "");
				
				var lElement = that._oElements[lElementKey];
				that.setDPressedItemKey(lElement._Key);
				
				that.fireDesignStudioPropertiesChangedAndEvent(["DPressedItemKey"], "onItemPressed");
			});
		}

		lElement._Key = iElementKey;
		lElement._ParentKey = iParentKey;
		
		lElement._DSOwner = that;
		
		return lElement;
	},

	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = SegmentedButton;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});