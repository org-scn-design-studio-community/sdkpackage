//%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./AccordionSpec",
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

Accordion = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;
		
		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that._ownScript = org_scn_community_basics.readOwnScriptAccess
			("", spec.fullComponentName).myScriptPath;
		
		that.addStyleClass("scn-pack-Accordion");
		
		that._oElements = {};
		
		that._initComponent(owner);
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
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
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

		// backup current nodes
		that._oElementsTemp = that._oElements;
		if(that._oElementsTemp == undefined) {
			that._oElementsTemp = {};
		}
		that._oElements = {};
		that._oElementsArray = [];

		if(that.getCleanAll()) {
			that._destroyAll();
			
			that._oElements = {};
			that._oElementsArray = [];
			that._oElementsTemp = {};
			
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
					var lNewElement = undefined;
					
					// new or the same?
					if(that._oElementsTemp[element.key] == undefined) {
						lNewElement = that._createElement(owner, i, element.key, element.text, element.url, element.parentKey, element.leaf, element.height);	
					} else {
						lNewElement = that._oElementsTemp[element.key];
						if(lNewElement._oLabel) {
							lNewElement._oLabel.setText(element.text);
						} else {
							lNewElement.setTitle(element.text);
							lNewElement.setTooltip(element.text);
							if(element.height != undefined) {
								lNewElement.setMaxHeight(Math.max(element.height, that.getMaxSectionHeight()) + "px");	
							} else {
								lNewElement.setMaxHeight(that.getMaxSectionHeight() + "px");
							}	
						}
						if(lNewElement._oImage) {
							var withImage = that.getWithImage();
							if(withImage) {
								var iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getDefaultImage(), element.url, "Accordion.png");
								lNewElement._oImage.setSrc(iImageUrl);
								lNewElement._oImage.setAlt(element.text);
								lNewElement._oImage.setTooltip(element.text);
							} else {
								lNewElement._oImage.setSrc("");
							}
						}
					}
					
					lNewElement.index = that._oElementsArray.length;
					that._oElements[element.key] = lNewElement;
					that._oElementsArray.push(lNewElement);
				}
			}
		}
		
		for (lElementKey in that._oElementsTemp) {
			if(that._oElements[lElementKey] == undefined) {
				// it means the key is now removed, we have to update the component
				var elemToRemove = that._oElementsTemp[lElementKey];
				
				// it has a parent
				if(elemToRemove._realParent) {
					elemToRemove._realParent.removeContent(elemToRemove);
				} else {
					that.removeContent(elemToRemove);
				}
				elemToRemove.destroy();
			}
		}

		for (lNodeInd in that._oElementsArray) {
			var lElement = that._oElementsArray[lNodeInd];
			if(lElement._Placed != true) {
				var parentKey = lElement._ParentKey;
				
				if(parentKey == "ROOT") {
					that._addRoot(lElement);
				} else {
					var parentElement = that._oElements[parentKey];
					if(parentElement != undefined) {
						lElement._realParent = parentElement;

						that._addChild(parentElement, lElement);
					}
				}
				
				lElement._Placed = true;
			} else {
				// need to code update?
			}
		}
		
		that._cleanUpAfterUpdate();
		
		var key = that.getSelectedKey();
		that._updateSelection(key);
		that.sectionOpenFired = false;
		//that.fireDesignStudioPropertiesChanged(["selectedKey"]);
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},

	/* COMPONENT SPECIFIC CODE - START METHODS*/
	/**
	 * Specific Function for Initialization of the Content Component
	 */
	_initComponent : function(owner) {
		var that = owner;
		
		that._oAccordion = new sap.ui.commons.Accordion();
		that.addStyleClass("scn-pack-FullSizeChildren");
		that._oAccordion.addStyleClass("scn-pack-Accordion-Main");
		that.sectionOpenFired = false;
		
		that._oAccordion.attachSectionOpen(function(oControlEvent, oControl) {
			var lElementId = oControlEvent.getParameters().openSectionId;
			that.sectionOpenFired = true;
			lElementId = lElementId.replace(that.getId() + "-sec-", "");
			
			var lElement = that._oElements[lElementId];
			
			var changedProperties = [];
			if(that.getExpandedKey() != lElement._Key) {
				that.setExpandedKey(lElement._Key);
				that._lastExpanded = that.getExpandedKey();
				
				changedProperties = ["expandedKey"];
			}
			
			if(lElement._childrenRequested == undefined) {
				lElement._childrenRequested = true;

				that.fireDesignStudioPropertiesChangedAndEvent(changedProperties, "onFirstExpand");
			} else {
				that.fireDesignStudioPropertiesChanged(changedProperties);
			}
		});
		
		that.onAfterRendering = function () {
			org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oAccordion);
		}
	},
	
	/**
	 * Specific Function for Destroy All
	 */
	_destroyAll : function () {
		var that = this;
		
		for (lElementKey in that._oElements) {
			var lElement = that._oElements[lElementKey];
			lElement.destroy();
		}
		
		that._oAccordion.removeAllSections();
		that._oAccordion.destroySections();
		
		that._oElements = {};
	},
	
	/**
	 * Specific Function for Adding Root Elements
	 */
	_addRoot : function(iElement) {
		var that = this;
		
		that._oAccordion.addSection(iElement);
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
		var that = this;
		
		// clean up "loading" element
		for (lElementKey in that._oElements) {
			var lElement = that._oElements[lElementKey];
			if(lElement._childrenRequested) {
				var elements = lElement.getContent();
				// lElement.removeContent(elements[0]);
				// elements[0].destroy();
				
				lElement._childrenRequested = false;
			}
		}
		
		// make once
		if(that.getExpandedKey() != that._lastExpanded) {
			var lElement = that._oElements[that.getExpandedKey()];
			if(lElement) {
				if(lElement._childrenRequested == undefined) {
					var elements = lElement.getContent();
					// lElement.removeContent(elements[0]);
					// elements[0].destroy();
					
					lElement._childrenRequested = false;
				}
				
				lElement.setCollapsed(false);
				that._oAccordion.setOpenedSectionsId(that.getExpandedKey());	
			}
		}
	
		that._lastExpanded = that.getExpandedKey();
	},

	_createElement: function (owner, index, iElementKey, iElementText, iImageUrl, iParentKey, isLeaf, iHeight) {
		var that = owner;
		
		iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getDefaultImage(), iImageUrl, "Accordion.png");
		
		var lElement = undefined;
		
		if(that.getMemberDisplay() == "Text_Key") {
			iElementText = iElementText + " [" + iElementKey + "]";
		}
		
		if(isLeaf){
			lElement = that._creatLabelElement(owner, iElementKey, iElementText, iImageUrl);
		} else {
			lElement = new sap.ui.commons.AccordionSection({
					id: that.getId() + "-sec-" +  iElementKey,
					title: iElementText,
					tooltip: iElementText,
					collapsed: true});
			
			if(iHeight != undefined) {
				lElement.setMaxHeight(Math.max(iHeight, that.getMaxSectionHeight()) + "px");	
			} else {
				lElement.setMaxHeight(that.getMaxSectionHeight() + "px");
			}
		}
		
		lElement._Key = iElementKey;
		lElement._ParentKey = iParentKey;
		
		return lElement;
	},
	
	_creatLabelElement: function (owner, iKey, iText, iImageUrl) {
		var that = owner;

		var imageSize = that.getImageSize();
		var withImage = that.getWithImage();

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

		var oLayout = new sap.zen.commons.layout.AbsoluteLayout ({
			height: height
		});
		
		oLayout.addStyleClass("scn-pack-Accordion-Layout");
		oLayout._Key = iKey;

		imageSize = imageSize.replace("Size_", "");
		
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
		oLayout._oImage = oImage;

		var oLabel = new sap.ui.commons.Label({
			text: iText
		});
		
		oLayout.addStyleClass("scn-pack-Accordion-Label");
		oLayout._Key = iKey;
		
		oLayout.addContent(
				oLabel,
				{left: leftText, top: topText}
		);
		oLayout._oLabel = oLabel;
		
		if(that.getSelectedKey() == iKey) {
			oLayout.addStyleClass("scn-pack-Accordion-SelectedValue");
		}
		
		if(withImage) {
			oImage.setSrc(iImageUrl);
		}

		oLayout.attachBrowserEvent('click', function () {
			if(that.getSelectedKey() != oLayout._Key) {
				that.setSelectedKey(oLayout._Key);
				that._updateSelection(oLayout._Key);
				that.sectionOpenFired = false;
				
				that.fireDesignStudioPropertiesChangedAndEvent(["selectedKey"], "onSelectionChanged");
			}
		});
		
		oImage.attachBrowserEvent('click', function () {
			if(that.getSelectedKey() != oLayout._Key) {
				that.setSelectedKey(oLayout._Key);
				that._updateSelection(oLayout._Key);
				that.sectionOpenFired = false;
				
				that.fireDesignStudioPropertiesChangedAndEvent(["selectedKey"], "onSelectionChanged");
			}
		});
		
		oLabel.attachBrowserEvent('click', function () {
			if(that.getSelectedKey() != oLayout._Key) {
				that.setSelectedKey(oLayout._Key);
				that._updateSelection(oLayout._Key);
				that.sectionOpenFired = false;
				
				that.fireDesignStudioPropertiesChangedAndEvent(["selectedKey"], "onSelectionChanged");
			}
		});

		return oLayout;
	},
	
	_updateSelection : function (iSelectedKey) {
		var that = this;
		for (lElementKey in that._oElements) {
			var lElement = that._oElements[lElementKey];
			
			if(lElement.addStyleClass) {
				var parent = that._oElements[lElement._ParentKey];
			
				if(iSelectedKey == lElement._Key){
					lElement.addStyleClass("scn-pack-Accordion-SelectedValue");
					var newOpenedSection = that.sId + "-sec-" + parent._Key;
					//fix backOneStep and bookmarking problems due to invalid sections
					if(!that.sectionOpenFired){
						that._oAccordion.openSection(newOpenedSection);	
					}	
				} else {
					lElement.removeStyleClass("scn-pack-Accordion-SelectedValue");
				};
			}
		};
	}
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = Accordion;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});