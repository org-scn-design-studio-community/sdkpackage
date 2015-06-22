(function(){

var myComponentData = org_scn_community_require.knownComponents.basics.Accordion;

Accordion = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		this._ownScript = org_scn_community_basics.readOwnScriptAccess
			("", org_scn_community_require.knownComponents.basics.Accordion.fullComponentName).myScriptPath;
		
		this.addStyleClass("scn-pack-Accordion");
		
		this._oElements = {};
		
		this._initComponent();
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

		// backup current nodes
		this._oElementsTemp = this._oElements;
		if(this._oElementsTemp == undefined) {
			this._oElementsTemp = {};
		}
		this._oElements = {};

		if(this.getCleanAll()) {
			this._destroyAll();
			
			this._oElements = {};
			this._oElementsTemp = {};
			
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
					var lNewElement = undefined;
					
					// new or the same?
					if(this._oElementsTemp[element.key] == undefined) {
						lNewElement = this._createElement(i, element.key, element.text, element.url, element.parentKey, element.leaf);	
					} else {
						lNewElement = this._oElementsTemp[element.key];
					}
					
					this._oElements[element.key] = lNewElement;
				}
			}
		}
		
		for (lElementKey in this._oElementsTemp) {
			if(this._oElements[lElementKey] == undefined) {
				// it means the key is now removed, we have to update the component
				var elemToRemove = this._oElementsTemp[lElementKey];
				
				// it has a parent
				if(elemToRemove._realParent) {
					elemToRemove._realParent.removeContent(elemToRemove);
				} else {
					this.removeContent(elemToRemove);
				}
				elemToRemove.destroy();
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
						lElement._realParent = parentElement;

						this._addChild(parentElement, lElement);
					}
				}
				
				lElement._Placed = true;
			} else {
				// need to code update?
			}
		}
		
		this._cleanUpAfterUpdate();
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	/**
	 * Specific Function for Initialization of the Content Component
	 */
	_initComponent : function() {
		var that = this;
		
		that._oAccordion = new sap.ui.commons.Accordion();
		that.addStyleClass("scn-pack-FullSizeChildren");
		that._oAccordion.addStyleClass("scn-pack-Accordion-Main");
		
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
			org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oAccordion);
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
				// lElement.removeContent(elements[0]);
				// elements[0].destroy();
				
				lElement._childrenRequested = false;
			}
		}
		
		// make once
		if(this.getExpandedKey() != this._lastExpanded) {
			var lElement = this._oElements[this.getExpandedKey()];
			if(lElement) {
				if(lElement._childrenRequested == undefined) {
					var elements = lElement.getContent();
					// lElement.removeContent(elements[0]);
					// elements[0].destroy();
					
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
		if(iImageUrl === undefined || iImageUrl.indexOf("http") == 0) {
			// no nothing
		} else {
			// in case of repository, add the prefix from repository
			if(iImageUrl != "" && this._pImagePrefix != undefined && this._pImagePrefix != ""){
				iImageUrl = this._pImagePrefix + iImageUrl;
			}
		}
		
		var lElement = undefined;
		
		if(that.getMemberDisplay() == "Text_Key") {
			iElementText = iElementText + " [" + iElementKey + "]";
		}
		
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
		
		if(this.getSelectedKey() == iKey) {
			oLayout.addStyleClass("scn-pack-Accordion-SelectedValue");
		}
		
		if(withImage) {
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
				
				that.fireDesignStudioPropertiesChangedAndEvent(["selectedKey"], "onSelectionChanged");
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
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

define([myComponentData.requireName], function(basicsaccordion){
	myComponentData.instance = Accordion;
	return myComponentData.instance;
});

}).call(this);