/**
 * Copyright 2014 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/sap-design-studio-free-addons/sdk-package
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
_readScriptPath = function () {
	if(myScript) {
		var myScriptSuffix = "res/mbt/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.basics.MenuButton", {

	setDefaultImage : function(value) {
		this._DefaultImage = value;
		
		if(value != undefined && value != "")  {
			this._pImagePrefix = value.substring(0, value.lastIndexOf("/") + 1);	
		}
	},

	getDefaultImage : function() {
		return this._DefaultImage;
	},
	
	metadata: {
        properties: {
        	  "text": {type: "string"},
        	  "tooltip": {type: "string"},
        	  "enabled": {type: "boolean"},
        	  "icon": {type: "string"},
        	  "withImage": {type: "boolean"},
              "imageSize": {type: "string"},
              "selectedKey": {type: "string"},
              "expandedKey": {type: "string"},
              "elementsContent": {type: "string"},
              "cleanAll": {type: "boolean"}
        }
	},
  
	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
		
		this.addStyleClass("scn-pack-MenuButton");
		
		this._oElements = {};
		
		this._initComponent();
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
		if(that._oResize) {
			that._oResize();	
		}
		
		this._oMenuButton.setText(this.getText());
		this._oMenuButton.setTooltip(this.getTooltip());
		this._oMenuButton.setIcon(this.getIcon());
		this._oMenuButton.setEnabled(this.getEnabled());
		
		if(this.getCleanAll()) {
			this._destroyAll();
			
			this._oElements = {};
			
			this.setCleanAll(false);
			that.fireDesignStudioPropertiesChanged(["cleanAll"]);
		}
		
		var lElementsToRender = this.getElementsContent();
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);

			// distribute content
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				if(this._oElements[element.key] == undefined) {
					var lNewElement = this._createElement(i, element.key, element.text, element.url, element.parent, element.leaf);
					
					this._oElements[element.key] = lNewElement;
				}
			}
		}
		
		for (lElementKey in this._oElements) {
			if(lElementKey.indexOf("-SUB") > -1) {
				continue;
			}
			
			var lElement = this._oElements[lElementKey];
			if(lElement._Placed != true) {
				var parentKey = lElement._ParentKey;
				
				if(parentKey == "ROOT") {
					this._addRoot(lElement);
				} else {
					var parentElement = this._oElements[parentKey + "-SUB"];
					if(parentElement != undefined) {
						this._addChild(parentElement, lElement);
					}
				}
				
				lElement._Placed = true;
			} else {
				// need to code update?
			}
		}
	},
	

	/**
	 * Specific Function for Initialization of the Content Component
	 */
	_initComponent : function() {
		var that = this;
		
		this._oMenuButton = new sap.ui.commons.MenuButton();
		
		var handleSelect = function(oEvent){
			var lElementKey = oEvent.getParameter("itemId");
			// prepare the ID
			lElementKey = lElementKey.replace(that.getId(), "");
			lElementKey = lElementKey.replace("-sub-", "");
			lElementKey = lElementKey.replace("-sec-", "");
			
			var lElement = that._oElements[lElementKey];
			that.setSelectedKey(lElement._Key);
			
			that.fireDesignStudioPropertiesChanged(["selectedKey"]);
			that.fireDesignStudioEvent("onSelectionChanged");
		};

		this._oMenuButton.attachItemSelected(handleSelect);
		
//		var handlePress = function(oEvent){
//			var lElementKey = oEvent.getParameter("itemId");
//			// prepare the ID
//			lElementKey = lElementKey.replace(that.getId(), "");
//			lElementKey = lElementKey.replace("-sub-", "");
//			lElementKey = lElementKey.replace("-sec-", "");
//			
//			var lElement = that._oElements[lElementKey];
//			that.setPressedKey(lElement._Key);
//			
//			that.fireDesignStudioPropertiesChanged(["pressedKey"]);
//			that.fireDesignStudioEvent("onPressed");
//		};
//
//		this._oMenuButton.attachPress(handlePress);
		
		this._oMainMenu = new sap.ui.commons.Menu("menu", {ariaDescription: "", tooltip: ""});
		this._oMenuButton.setMenu(this._oMainMenu);

		// resize function
		this.onAfterRendering = function() {
			org_scn_community_basics.resizeContentAbsoluteLayout(that, this._oMenuButton);
		};
	},
	
	/**
	 * Specific Function for Destroy All
	 */
	_destroyAll : function () {
		for (lElementKey in this._oElements) {
			var lElement = this._oElements[lElementKey];
			lElement.destroy();
		}
		
		this._oMainMenu.removeAllItems();
		this._oMainMenu.destroyItems();
		
		this._oElements = {};
	},
	
	/**
	 * Specific Function for Adding Root Elements
	 */
	_addRoot : function(iElement) {
		this._oMainMenu.addItem(iElement);
	},
	
	/**
	 * Specific Function for Adding Child Elements
	 */
	_addChild : function(iParent, iElement) {
		iParent.addItem(iElement);
	},

	_createElement: function (index, iElementKey, iElementText, iImageUrl, iParentKey, isLeaf) {
		var that = this;
		
		// in case starts with http, keep as is 
		if(iImageUrl.indexOf("http") == 0) {
			// no nothing
		} else {
			// in case of repository, add the prefix from repository
			if(iImageUrl != "" && this._pImagePrefix != undefined && this._pImagePrefix != ""){
				iImageUrl = this._pImagePrefix + iImageUrl;
			}
		}
		
		var lElement = undefined;
		
		if(isLeaf){
			lElement = new sap.ui.unified.MenuItem({
					id: this.getId() + "-sec-" +  iElementKey,
					text: iElementText,
					icon: iImageUrl
				});
		} else {
			lElement = new sap.ui.unified.MenuItem({
					id: this.getId() + "-sec-" +  iElementKey,
					text: iElementText,
					icon: iImageUrl
				});
		}
		
		lElement._Key = iElementKey;
		lElement._ParentKey = iParentKey;
		
		if(!isLeaf) {
			var oSubMenu = new sap.ui.commons.Menu({
				id: this.getId() + "-sub-" +  iElementKey
			});
			lElement.setSubmenu(oSubMenu);

			oSubMenu._lElement = lElement;
			
			this._oElements[iElementKey + "-SUB"] = oSubMenu;
		} else {
			
		}
		
		return lElement;
	},
	
	_updateSelection : function (iSelectedKey) {
		for (lElementKey in this._oElements) {
			var lElement = this._oElements[lElementKey];
			if(lElement.addStyleClass) {
				if(iSelectedKey == lElement._Key){
					lElement.addStyleClass("scn-pack-MenuButton-SelectedValue");
				} else {
					lElement.removeStyleClass("scn-pack-MenuButton-SelectedValue");
				};
			}
		};
	}
});
})();