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
		var myScriptSuffix = "res/ac/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.basics.Accordion", {

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
              "maxSectionHeight": {type: "int"},
              "elementsContent": {type: "string"},
              "cleanAll": {type: "boolean"}
        }
	},
  
	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
		
		this.addStyleClass("scn-pack-Accordion");
		
		this._oElements = {};
		
		this._initComponent();
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
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
			var lElement = this._oElements[lElementKey];
			if(lElement._Placed != true) {
				var parentKey = lElement._ParentKey;
				
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
			}
		}
		
		this._cleanUpAfterUpdate();
	},
	

	/**
	 * Specific Function for Initialization of the Content Component
	 */
	_initComponent : function() {
		var that = this;
		
		this._oAccordion = new sap.ui.commons.Accordion();
		
		that._oAccordion.attachSectionOpen(function(oControlEvent, oControl) {
			var lElementId = oControlEvent.getParameters().openSectionId;
			lElementId = lElementId.replace(that.getId() + "-sec-", "");
			
			var lElement = that._oElements[lElementId];
			
			if(that.getExpandedKey() != lElement._Key) {
				that.setExpandedKey(lElement._Key);
				that._lastExpanded = that.getExpandedKey();

				that.fireDesignStudioPropertiesChanged(["expandedKey"]);
			}
			
			if(lElement._childrenRequested == undefined) {
				lElement._childrenRequested = true;

				that.fireDesignStudioEvent("onFirstExpand");
			}
		});
		
		this.onAfterRendering = function () {
			if(that._oAccordionPlaced != true) {
				var jqThis = that.$();
				
				that._containerWidth = (jqThis.outerWidth(true) - 6) + "px";
				that._containerHeight = jqThis.outerHeight(true) + "px";

				this.addContent(
						this._oAccordion,
						{left: "0px", top: "0px"}
				);
				
				this._oAccordion.setWidth(that._containerWidth);
				
				that._oAccordionPlaced = true;
			}
		}
	},
	
	/**
	 * Specific Function for Destroy All
	 */
	_destroyAll : function () {
		for (lElementKey in this._oElements) {
			var lElement = this._oElements[lElementKey];
			lElement.destroy();
		}
		
		this._oAccordion.removeAllSections();
		this._oAccordion.destroySections();
		
		this._oElements = {};
	},
	
	/**
	 * Specific Function for Adding Root Elements
	 */
	_addRoot : function(iElement) {
		this._oAccordion.addSection(iElement);
	},
	
	/**
	 * Specific Function for Adding Child Elements
	 */
	_addChild : function(iParent, iElement) {
		iParent.addContent(iElement);
	},
	
	/**
	 * Specific Function for CleanUp (if required)
	 */
	_cleanUpAfterUpdate : function () {
		// clean up "loading" element
		for (lElementKey in this._oElements) {
			var lElement = this._oElements[lElementKey];
			if(lElement._childrenRequested) {
				var elements = lElement.getContent();
				lElement.removeContent(elements[0]);
				elements[0].destroy();
				
				lElement._childrenRequested = false;
			}
		}
		
		// make once
		if(this.getExpandedKey() != this._lastExpanded) {
			var lElement = this._oElements[this.getExpandedKey()];
			if(lElement) {
				if(lElement._childrenRequested == undefined) {
					var elements = lElement.getContent();
					lElement.removeContent(elements[0]);
					elements[0].destroy();
					
					lElement._childrenRequested = false;
				}
				
				lElement.setCollapsed(false);
				this._oAccordion.setOpenedSectionsId(this.getExpandedKey());	
			}
		}
		
		this._lastExpanded = this.getExpandedKey();
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
			lElement = this._creatLabelElement(iElementKey, iElementText, iImageUrl);
		} else {
			lElement = new sap.ui.commons.AccordionSection({
					id: this.getId() + "-sec-" +  iElementKey,
					title: iElementText,
					tooltip: iElementText,
					collapsed: true});
			
			lElement.setMaxHeight(that.getMaxSectionHeight() + "px");
		}
		
		lElement._Key = iElementKey;
		lElement._ParentKey = iParentKey;
		
		if(!isLeaf) {
			var oLoadingElement = new sap.ui.commons.Label( 
					{text: "loading..."});
			
			lElement.addContent(oLoadingElement);
		} else {
			
		}
		
		return lElement;
	},
	
	_creatLabelElement: function (iKey, iText, iImageUrl) {
		var that = this;

		var imageSize = this.getImageSize();
		var withImage = this.getWithImage();

		var height = "20px";
		var topImage = "5px";

		var topText = "1px";
		var leftText = "5px";
		
		if(withImage && imageSize.indexOf("32") > -1) {
			// for 32px
			height = "40px";
			topText = "11px";
			leftText = "42px";
		} else if(withImage) {
			// for 16px
			leftText = "26px";
			topImage = "2px";
		} 

		var oLayout = new sap.ui.commons.layout.AbsoluteLayout ({
			height: height
		});
		
		oLayout.addStyleClass("scn-pack-Accordion-Layout");
		oLayout._Key = iKey;

		var oImage = new sap.ui.commons.Image ({
			src : iImageUrl,
			width : imageSize,
			height : imageSize,
			alt : iText,
			tooltip : iText,
		});

		if(withImage) {
			oImage.addStyleClass("scn-pack-Accordion-Image");
			oImage._Key = iKey;
		
			oLayout.addContent(
					oImage,
					{left: "4px", top: topImage}
			);
		}

		var oLabel = new sap.ui.commons.Label({
			text: iText
		});
		
		oLayout.addStyleClass("scn-pack-Accordion-Label");
		oLayout._Key = iKey;
		
		oLayout.addContent(
				oLabel,
				{left: leftText, top: topText}
		);
		
		if(withImage) {
			if(this.getSelectedKey() == iKey) {
				oLayout.addStyleClass("scn-pack-Accordion-SelectedValue");
			}
			
			oImage.setSrc(iImageUrl);
		}

		oLayout.attachBrowserEvent('click', function () {
			if(that.getSelectedKey() != oLayout._Key) {
				that.setSelectedKey(oLayout._Key);
				that._updateSelection(oLayout._Key);
				
				that.fireDesignStudioPropertiesChanged(["selectedKey"]);
				that.fireDesignStudioEvent("onSelectionChanged");
			}
		});
		
		oImage.attachBrowserEvent('click', function () {
			if(that.getSelectedKey() != oLayout._Key) {
				that.setSelectedKey(oLayout._Key);
				that._updateSelection(oLayout._Key);
				
				that.fireDesignStudioPropertiesChanged(["selectedKey"]);
				that.fireDesignStudioEvent("onSelectionChanged");
			}
		});
		
		oLabel.attachBrowserEvent('click', function () {
			if(that.getSelectedKey() != oLayout._Key) {
				that.setSelectedKey(oLayout._Key);
				that._updateSelection(oLayout._Key);
				
				that.fireDesignStudioPropertiesChanged(["selectedKey"]);
				that.fireDesignStudioEvent("onSelectionChanged");
			}
		});

		return oLayout;
	},
	
	_updateSelection : function (iSelectedKey) {
		for (lElementKey in this._oElements) {
			var lElement = this._oElements[lElementKey];
			if(lElement.addStyleClass) {
				if(iSelectedKey == lElement._Key){
					lElement.addStyleClass("scn-pack-Accordion-SelectedValue");
				} else {
					lElement.removeStyleClass("scn-pack-Accordion-SelectedValue");
				};
			}
		};
	}
});
})();