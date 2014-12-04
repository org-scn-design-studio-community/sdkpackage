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
		var myScriptSuffix = "res/mb/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.basics.MenuBar", {

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
		
		this.addStyleClass("scn-pack-MenuBar");
		
		this._oElements = {};
		
		this._initComponent();
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
		if(that._oResize) {
			that._oResize();	
		}
		
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
		
		this._oMenuBar = new sap.ui.commons.MenuBar();
		
		// resize function
		this.onAfterRendering = function() {
			org_scn_community_basics.resizeContentAbsoluteLayout(that, this._oMenuBar);
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
		
		this._oMenuBar.removeAllItems();
		this._oMenuBar.destroyItems();
		
		this._oElements = {};
	},
	
	/**
	 * Specific Function for Adding Root Elements
	 */
	_addRoot : function(iElement) {
		this._oMenuBar.addItem(iElement);
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
			
			this._oElements[iElementKey + "-SUB"] = oSubMenu;
		} else {
			
		}

		var handleSelect = function(oEvent){
			that.setSelectedKey(lElement._Key);
			
			that.fireDesignStudioPropertiesChanged(["selectedKey"]);
			that.fireDesignStudioEvent("onSelectionChanged");
		};

		lElement.attachSelect(handleSelect);
		
		return lElement;
	},
	
	_updateSelection : function (iSelectedKey) {
		for (lElementKey in this._oElements) {
			var lElement = this._oElements[lElementKey];
			if(lElement.addStyleClass) {
				if(iSelectedKey == lElement._Key){
					lElement.addStyleClass("scn-pack-MenuBar-SelectedValue");
				} else {
					lElement.removeStyleClass("scn-pack-MenuBar-SelectedValue");
				};
			}
		};
	}
});
})();