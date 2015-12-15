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
	"./FishEyeSpec",
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

FishEye = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that._lLayout = new sap.ui.layout.HorizontalLayout({

		});
		that.addStyleClass("scn-pack-FullSizeChildren");
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
		var lElementsToRender = that.getElements();
		
		var position = undefined;
		var lOrientation = that.getOrientation();
		
		if(lOrientation == "HorizontalTop") {
			position = {left: "0px", top: "0px"};
		} else {
			position = {left: "0px", bottom: "0px"};
			that.addStyleClass("scn-pack-FishEye-ChildrenBottom");
		}
		
		if(that._lastElements == lElementsToRender) {
			return;
		}
		
		that._lastElements = lElementsToRender;
		
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);
	
			// Destroy old content
			that._lLayout.destroyContent();
			that._lLayout.removeContent();
	
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var lContentPanel = that.createImageElement(owner, lElementsToRenderArray[i].key, lElementsToRenderArray[i].text, lElementsToRenderArray[i].url);
				
				that._lLayout.addContent(
					lContentPanel,
					position
				);
			}

			that._lContentBig = new sap.zen.commons.layout.AbsoluteLayout ({
				width : "0px",
				height : "100%",
			});
				
			that._lLayout.addContent(
				that._lContentBig,
				position
			);
		}
	},
	
	onResize: function(width, height, parent) {
		var that = parent;
		// in case special resize code is required

		that._lContentBig.setHeight(height + "px");
	},
	
	createImageElement: function (owner, iImageKey, iImageText, iImageUrl) {
		var that = owner;
		
		if(iImageText == undefined) {iImageText = ""};
		if(iImageUrl == undefined) {iImageUrl = ""};
		iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getDefaultImage(), iImageUrl, "FishEye.png");

		var oImage = new sap.ui.commons.Image ({
			src : iImageUrl,
			width : "96%",
			height : "70%",
			alt : iImageText,
			tooltip : iImageText,
		});
	
		oImage.addStyleClass("scn-pack-FishEye-Image");
		
		var clickFunction = function() {
			that.setSelectedKey(oImage._oContent.internalKey);
			
			that.updateSelection(that, oImage._oContent.internalKey);
			
			that.fireDesignStudioPropertiesChangedAndEvent(["selectedKey"], "onSelectionChanged");
		};

		// oImage.attachBrowserEvent('click', clickFunction);
		
		var oTextView = new sap.ui.commons.TextView({
			width : "96%",
			height : "25%",
			text : iImageText,
			tooltip : iImageText,
		});

		oTextView.addStyleClass("scn-pack-FishEye-Text");
		// oTextView.attachBrowserEvent('click', clickFunction);

		var oCcontentPanel = new sap.zen.commons.layout.AbsoluteLayout ({
			width : "100%",
			height : "100%",
		});
		
		oCcontentPanel.addStyleClass("scn-pack-FishEye-Content");
		oCcontentPanel.attachBrowserEvent('click', clickFunction);

		var lOrientation = that.getOrientation();
		if(lOrientation == "HorizontalBottom") {
			// create a panel
			oCcontentPanel.addContent(oImage, {left: "0px", bottom: "0px"});
			oCcontentPanel.addContent(oTextView, {left: "0px", bottom: "0px"});
		} else {
			// create a panel
			oCcontentPanel.addContent(oImage, {left: "0px", top: "0px"});
			oCcontentPanel.addContent(oTextView, {left: "0px", top: "0px"});
		}
		
		
		oCcontentPanel._oImage = oImage;
		oCcontentPanel._oTextView = oTextView;

		oImage._oContent = oCcontentPanel;
		oTextView._oContent = oCcontentPanel;
		
		oCcontentPanel.internalKey = iImageKey;
		
		if(that.getSelectedKey() == iImageKey) {
			oCcontentPanel.addStyleClass("scn-pack-FishEye-SelectedContent");
			oCcontentPanel._oImage.addStyleClass("scn-pack-FishEye-SelectedImage");
			oCcontentPanel._oTextView.addStyleClass("scn-pack-FishEye-SelectedText");
			
			oTextView.setVisible(true);
			
			if (!oCcontentPanel.currentWidth) oCcontentPanel.currentWidth = that._fGetStartSize();
			that._fResizeAnimation(oCcontentPanel, oCcontentPanel.currentWidth,that._fGetEndSize(),that._fGetAnimationSteps(),10,0.333);			
		}
		
		that._fInitFishEye(that, oCcontentPanel, oImage, oTextView);
		
		return oCcontentPanel;
	},
	
	updateSelection: function (owner, iSelectedKey) {
		var that = owner;
		
		var contentPanelExistingArray = that._lLayout.getContent();
		
		for (var i = 0; i < contentPanelExistingArray.length; i++) {
			var lCcontentPanel = contentPanelExistingArray[i];
			
			if(lCcontentPanel._oImage) {
				if(iSelectedKey == lCcontentPanel.internalKey){
					lCcontentPanel.addStyleClass("scn-pack-FishEye-SelectedContent");
					lCcontentPanel._oImage.addStyleClass("scn-pack-FishEye-SelectedImage");
					lCcontentPanel._oTextView.addStyleClass("scn-pack-FishEye-SelectedText");
				} else {
					lCcontentPanel.removeStyleClass("scn-pack-FishEye-SelectedContent");
					lCcontentPanel._oImage.removeStyleClass("scn-pack-FishEye-SelectedImage");
					lCcontentPanel._oTextView.removeStyleClass("scn-pack-FishEye-SelectedText");
				};
			}
		};
	},
	
	_fGetStartSize : function(owner) {
		var that = owner;
		return that.$().outerHeight() * 0.7;
	},
	
	_fGetEndSize : function(owner) {
		var that = owner;
		return that.$().outerHeight() * 0.98;
	},

	_fGetAnimationSteps : function(owner) {
		return 15;
	},
	
	/** 
	 * Code  
	 */
	_fInitFishEye : function (owner, lCcontentPanel, image, text) {
		var that = owner;
		
		text.setVisible(false);

		var fOnCompleteOut = function () {
			
		};

		var fOnOver = function () {
			text.setVisible(true);
		
			that._fResizeAnimation(that, lCcontentPanel, lCcontentPanel.currentWidth,that._fGetEndSize(that),that._fGetAnimationSteps(that),10,0.333);
			
			fOnCompleteOut();
		};
		
		var fOnOut = function () {
			text.setVisible(false);
			if (!lCcontentPanel.currentWidth) return;
		
			that._fResizeAnimation(that, lCcontentPanel, lCcontentPanel.currentWidth,that._fGetStartSize(that),15,10,0.5);
		};
		
		lCcontentPanel.onAfterRendering = function () {
			var jqThis = lCcontentPanel.$();
			jqThis.hover(fOnOver, fOnOut);

			var start = that._fGetStartSize(that);
			lCcontentPanel.setWidth(start+"px");
			lCcontentPanel.setHeight(start+"px");
			
			if (!lCcontentPanel.currentWidth) lCcontentPanel.currentWidth = start;

			// image.attachBrowserEvent('hoover', fOnOver, fOnOut);
			// image.attachBrowserEvent('mouseover', fOnOver);
			// image.attachBrowserEvent('mouseout', fOnOut);
		};
		
		image.onAfterRendering = function () {
			var jqThis = image.$();
			// jqThis.hover(fOnOver, fOnOut);
			
			// image.attachBrowserEvent('hoover', fOnOver, fOnOut);
			// image.attachBrowserEvent('mouseover', fOnOver);
			// image.attachBrowserEvent('mouseout', fOnOut);
		};
		
		text.onAfterRendering = function () {
			var jqThis = text.$();
			// jqThis.hover(undefined, fOnOut);
			// image.attachBrowserEvent('mouseover', fOnOver);
			// image.attachBrowserEvent('mouseout', fOnOut);
		};
		
		
		that.onAfterRendering = function () {
			// that.attachBrowserEvent('mouseout', fOnCompleteOut);
			
			var jqThis = that.$();
			// jqThis.hover(fOnOver, fOnOut);
			
			org_scn_community_basics.resizeContentAbsoluteLayout(that, that._lLayout, that.onResize);
		};
	},

	_fResizeAnimation : function (owner, lCcontentPanel, startWidth,endWidth,steps,intervals,powr) {
		var that = owner;
		if(startWidth == endWidth) {
			return;
		}
		
		var that = this;
		
		var active = undefined;
		if (lCcontentPanel._activeInterval) window.clearInterval(lCcontentPanel._activeInterval);
		
		// lCcontentPanel._oTextView.setVisible(true);

		var actStep = 0;
		
		lCcontentPanel._fWidthChangeMemInt = function() {
			lCcontentPanel.currentWidth = that._fEaseInOut(that, startWidth,endWidth,steps,actStep,powr);
			lCcontentPanel.setWidth(lCcontentPanel.currentWidth+"px");
			lCcontentPanel.setHeight(lCcontentPanel.currentWidth+"px");
			actStep++;
			if (actStep > steps) {
				window.clearInterval(lCcontentPanel._activeInterval);
				lCcontentPanel._activeInterval = undefined;
			}
		};

		lCcontentPanel._activeInterval = window.setInterval(lCcontentPanel._fWidthChangeMemInt, intervals);
	},

	_fEaseInOut : function (owner, minValue,maxValue,totalSteps,actualStep,powr) {
		var that = owner;
		//Generic Animation Step Value Generator By www.hesido.com
		var delta = maxValue - minValue;
		var change = (Math.pow(((1 / totalSteps)*actualStep),powr)*delta);
		var stepp = minValue + change;
		return Math.ceil(stepp);
	}
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = FishEye;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});