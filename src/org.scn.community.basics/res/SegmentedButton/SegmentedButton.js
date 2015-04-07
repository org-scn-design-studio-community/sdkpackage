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
var ownComponentName = "org.scn.community.basics.SegmentedButton";
var _readScriptPath = function () {
	var scriptInfo = org_scn_community_basics.readOwnScriptAccess(myScript, ownComponentName);
	return scriptInfo.myScriptPath;
};
/** end of path recognition */

sap.ui.commons.layout.AbsoluteLayout.extend(ownComponentName, {

	setDDefaultImage : function(value) {
		this._DefaultImage = value;
		
		if(value != undefined && value != "")  {
			this._pImagePrefix = value.substring(0, value.lastIndexOf("/") + 1);	
		}
	},

	getDDefaultImage : function() {
		return this._DefaultImage;
	},
	
	metadata: {
        properties: {
              "DElementsContent": {type: "string"},
              "DCleanAll": {type: "boolean"},
              
              "DSelectedKeys": {type: "string"},
              "DPressedButtonKey": {type: "string"},
              "DPressedItemKey": {type: "string"},

              "DSelectionType": {type: "string"},

        	  "DWithImage": {type: "boolean"},
              "DImageSize": {type: "string"},
        }
	},
  
	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
		
		this.addStyleClass("scn-pack-SegmentedButton");
		
		this._oElements = {};
		this._oParentElements = {};
		
		this._initComponent();
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
		if(this.getDCleanAll()) {
			this._destroyAll();
			
			this._oElements = {};
			this._oParentElements = {};
			
			this.setDCleanAll(false);
			that.fireDesignStudioPropertiesChanged(["DCleanAll"]);
		}
		
		var allKeysAsOfNow = "";
		var lElementsToRender = this.getDElementsContent();
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);

			// check parent-childs
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				if(this._oParentElements[element.parentKey] == undefined) {
					this._oParentElements[element.parentKey] = "";
				}
				if(!this._oParentElements[element.parentKey].indexOf("|" + element.key + "|") > -1) {
					this._oParentElements[element.parentKey] = this._oParentElements[element.parentKey] + "|" + element.key + "|";	
				}

				if(allKeysAsOfNow.indexOf("|"+element.key+"|") == -1) {
					allKeysAsOfNow = allKeysAsOfNow + "|" + element.key + "|";
				}
			}

			// distribute content
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				if(this._oElements[element.key] == undefined) {
					var lNewElement = this._createElement(i, element.key, element.text, element.image, element.parentKey, element.selected, element.leaf);
					this._oElements[element.key] = lNewElement;
				} else {
					var currentElement = this._oElements[element.key];
					currentElement.setText(element.text);
					currentElement.setIcon(this._prepareImage(element.image));
					// need to find a way to synchronize
					// if(currentElement.setPressed) {
					// 	currentElement.setPressed(element.selected);	
					// }
				}
			}
		}
		
		for (lElementKey in this._oElements) {
			var lElement = this._oElements[lElementKey];
			if(lElement != undefined) {
				var parentKey = lElement._ParentKey;
				if(lElement._Placed != true) {
					if(parentKey == "ROOT") {
						this._addRoot(lElement);
					} else {
						var parentElement = this._oElements[parentKey];
						if(parentElement != undefined) {
							this._addChild(parentElement, lElement);
						}
					}
					
					lElement._Placed = true;
				} else {
					// need to code update?
					if(allKeysAsOfNow.indexOf("|"+lElementKey+"|") == -1) {
						// no more in array... delete

						if(parentKey == "ROOT") {
							this._oSegmentedButton.removeButton(lElement);
							
							// check children and remove
							var childrenKeysList = this._oParentElements[lElementKey];
							if(childrenKeysList) {
								var childrenKeys = childrenKeysList.split("|");
								for (childKey in childrenKeys) {
									if(this._oElements[childrenKeys[childKey]]) {
										this._oElements[childrenKeys[childKey]].destroy();
										this._oElements[childrenKeys[childKey]] = undefined;
									}
								}
							}
						} else {
							if(this._oElements[parentKey] && this._oElements[parentKey].getMenu){
								this._oElements[parentKey].getMenu().removeItem(lElement);	
							}
						}
						lElement.destroy();
						
						this._oElements[lElementKey] = undefined;
					}
				}
			}
		}
		
		this._cleanUpAfterUpdate();
	},
	

	/**
	 * Specific Function for Initialization of the Content Component
	 */
	_initComponent : function() {
		var that = this;
		
		this._oSegmentedButton = new sap.ui.commons.SegmentedButton();

		this.onAfterRendering = function () {
			if(that._oSegmentedButtonPlaced != true) {
				var jqThis = that.$();
				
				that._containerWidth = (jqThis.outerWidth(true) - 6) + "px";
				that._containerHeight = jqThis.outerHeight(true) + "px";

				this.addContent(
						this._oSegmentedButton,
						{left: "0px", top: "0px"}
				);
				
				that._oSegmentedButtonPlaced = true;
			}
		}
	},
	
	/**
	 * Specific Function for Destroy All
	 */
	_destroyAll : function () {
		for (lElementKey in this._oElements) {
			var lElement = this._oElements[lElementKey];
			if(lElement != undefined) {
				lElement.destroy();	
			}
		}
		
		this._oSegmentedButton.removeAllButtons();
		this._oSegmentedButton.destroyButtons();
		
		this._oElements = {};
	},
	
	/**
	 * Specific Function for Adding Root Elements
	 */
	_addRoot : function(iElement) {
		this._oSegmentedButton.addButton(iElement);
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
	_cleanUpAfterUpdate : function () {
		// clean up "loading" element
		for (lElementKey in this._oElements) {
			var lElement = this._oElements[lElementKey];
			if(lElement != undefined) {
				if(lElement._childrenRequested) {
					lElement._childrenRequested = false;
				}
			}
		}
	},

	_prepareImage: function (iImageUrl) {
		// in case starts with http, keep as is 
		if(iImageUrl.indexOf("http") == 0) {
			// no nothing
		} else {
			// in case of repository, add the prefix from repository
			if(iImageUrl != "" && this._pImagePrefix != undefined && this._pImagePrefix != ""){
				iImageUrl = this._pImagePrefix + iImageUrl;
			}
		}
		return iImageUrl;
	},
	
	_createElement: function (index, iElementKey, iElementText, iImageUrl, iParentKey, iSelected, isLeaf) {
		var that = this;
		
		iImageUrl = this._prepareImage(iImageUrl);
		
		var lElement = undefined;
		
		if(isLeaf){
			// menu item for menu button
			lElement = new sap.ui.unified.MenuItem({
				id: this.getId() + "-s-" +  iElementKey,
				text: iElementText,
				icon: iImageUrl
			});
		} else {
			var lDSelectionType = this.getDSelectionType();
				var hasChildren = (that._oParentElements[iElementKey] != undefined);
				// special handling for design mode, always menu button
				hasChildren = hasChildren || (sap.zen.designmode != undefined);

				if(hasChildren) {
					// in this case, multiple selection will not work perfectly
					lElement = new sap.ui.commons.MenuButton({
						id: this.getId() + "-m-" +  iElementKey,
						text: iElementText,
						tooltip: iElementText,
						icon: iImageUrl
					});
					var lMenu = new sap.ui.commons.Menu(this.getId() + "-mm-" +  iElementKey, {ariaDescription: "", tooltip: ""});
					lElement.setMenu(lMenu);
				} else {
					if(lDSelectionType == "Single") {
						// simple button, standard case
						lElement = new sap.ui.commons.Button({
							id: this.getId() + "-m-" +  iElementKey,
							text: iElementText,
							tooltip: iElementText,
							icon: iImageUrl
						});	
					} else if (lDSelectionType == "Multiple") {
						// toggle button for multiple selection
						lElement = new sap.ui.commons.ToggleButton({
							id: this.getId() + "-m-" +  iElementKey,
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

					that.fireDesignStudioPropertiesChanged(["DPressedButtonKey"]);
					that.fireDesignStudioEvent("onButtonPressed");
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

					that.fireDesignStudioPropertiesChanged(["DPressedButtonKey", "DSelectedKeys"]);
					that.fireDesignStudioEvent("onSelected");
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
				
				that.fireDesignStudioPropertiesChanged(["DPressedItemKey"]);
				that.fireDesignStudioEvent("onItemPressed");
			});
		}

		lElement._Key = iElementKey;
		lElement._ParentKey = iParentKey;
		
		lElement._DSOwner = that;
		
		return lElement;
	},
});
})();