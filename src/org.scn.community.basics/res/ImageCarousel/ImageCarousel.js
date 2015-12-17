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
	"./ImageCarouselSpec",
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

ImageCarousel = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		
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
		var lElementsToRender = that.getElements();
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);

			// Destroy old content
			that.destroyContent();
			that.removeContent();

			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var lImageElement = that.createImageElement(that, lElementsToRenderArray[i].key, lElementsToRenderArray[i].text, lElementsToRenderArray[i].url);
				that.addContent(lImageElement);
			}
		}
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	
	createImageElement: function (owner, iImageKey, iImageText, iImageUrl) {
		var that = owner;
		
		if(iImageText == undefined) {iImageText = ""};
		if(iImageUrl == undefined) {iImageUrl = ""};
		iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getDefaultImage(), iImageUrl, "ImageCarousel.png");

		var oImage = new sap.ui.commons.Image ({
			src : iImageUrl,
			width : "96%",
			height : "96%",
			alt : iImageText,
			tooltip : iImageText,
		});

		oImage.addStyleClass("scn-pack-ImageCarousel-Image");
		
		oImage.internalKey = iImageKey;
		
		if(that.getSelectedKey() == iImageKey) {
			oImage.addStyleClass("scn-pack-ImageCarousel-SelectedImage");
		}
		
		oImage.attachBrowserEvent('click', function() {
			that.setSelectedKey(oImage.internalKey);
			
			that.updateSelection(that, oImage.internalKey);
			
			that.fireDesignStudioPropertiesChangedAndEvent(["selectedKey"], "onSelectionChanged");
			}
		);
		
		return oImage;
	},
	
	updateSelection: function (owner, iSelectedKey) {
		var that = owner;
		var lContent = that.getContent();
		
		for (var i = 0; i < lContent.length; i++) {
			var lImage = lContent [i];
			
			if(iSelectedKey == lImage.internalKey){
				lImage.addStyleClass("scn-pack-ImageCarousel-SelectedImage");
			} else {
				lImage.removeStyleClass("scn-pack-ImageCarousel-SelectedImage");
			};
		};
	}
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = ImageCarousel;
jQuery.sap.require("sap.ui.commons.Carousel");
sap.ui.commons.Carousel.extend(myComponentData.fullComponentName, myComponentData.instance);
});