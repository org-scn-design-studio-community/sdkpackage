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
 * 
 * Used code from Marc Grabanski, adjusted to SAPUI5 controls.
 *
 * Fisheye Menu
 * Copyright 2007-2009 Marc Grabanski (m@marcgrabanski.com) http://marcgrabanski.com
 * Project Page: http://marcgrabanski.com/pages/code/fisheye-menu
 * Source Code: https://github.com/1Marc/javascript-fisheye-menu/blob/master/fisheye.js
 * Under the MIT License
 * 
 */

(function() {
/** code for recognition of script path */
var myScript = $("script:last")[0].src;
_readScriptPath = function () {
	if(myScript) {
		var myScriptSuffix = "res/fe/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

jQuery.sap.require("sap.ui.commons.layout.AbsoluteLayout");

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.basics.FishEye", {

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
              "selectedKey": {type: "string"},
              "orientation": {type: "string"},
              "elements": {type: "string"}
        }
	},
  
	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
	},
		
	renderer: {},
		
	afterDesignStudioUpdate : function() {
		var that = this;
			
		var lElementsToRender = this.getElements();
		
		var position = undefined;
		var lOrientation = this.getOrientation();
		
		if(lOrientation == "horizontal-bottom") {
			position = {left: "0px", top: "0px"};
		} else {
			position = {left: "0px", bottom: "0px"};
			this.addStyleClass("scn-pack-FishEye-ChildrenBottom");
		}
		
		if(!this._lLayout) {
			this._lLayout = new sap.ui.layout.HorizontalLayout({
				
			});

			this.addContent(
				this._lLayout,
				position
			);
		}
		
		if(this._lastElements == lElementsToRender) {
			return;
		}
		
		this._lastElements = lElementsToRender;
		
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);
	
			// Destroy old content
			this._lLayout.destroyContent();
			this._lLayout.removeContent();
	
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var lContentPanel = this.createImageElement(lElementsToRenderArray[i].key, lElementsToRenderArray[i].text, lElementsToRenderArray[i].url);
				
				this._lLayout.addContent(
					lContentPanel,
					position
				);
			}
		}
	},
	
	createImageElement: function (iImageKey, iImageText, iImageUrl) {
		var that = this;
		
		// in case starts with http, keep as is 
		if(iImageUrl.indexOf("http") == 0) {
			// no nothing
		} else {
			// in case of repository, add the prefix from repository
			if(this._pImagePrefix != undefined && this._pImagePrefix != ""){
				iImageUrl = this._pImagePrefix + iImageUrl;
			} else {
				iImageUrl = this._ownScript + "FishEye.png";
			}
		}
	
		var oImage = new sap.ui.commons.Image ({
			src : iImageUrl,
			width : "96%",
			height : "70%",
			alt : iImageText,
			tooltip : iImageText,
		});
	
		oImage.addStyleClass("scn-pack-FishEye-Image");
		
		oImage.attachBrowserEvent('click', function() {
			that.setSelectedKey(oImage._oContent.internalKey);
			
			that.updateSelection(oImage._oContent.internalKey);
			
			that.fireDesignStudioPropertiesChanged(["selectedKey"]);
			that.fireDesignStudioEvent("onSelectionChanged");
		});
		
		var oTextView = new sap.ui.commons.TextView({
			width : "100%",
			height : "20%",
			text : iImageText,
			tooltip : iImageText,
		});

		oTextView.addStyleClass("scn-pack-FishEye-Text");
		
		var oCcontentPanel = new sap.ui.commons.layout.AbsoluteLayout ({
			width : "100%",
			height : "100%",
		});
		
		oCcontentPanel.addStyleClass("scn-pack-FishEye-Content");

		var lOrientation = this.getOrientation();
		if(lOrientation == "horizontal-bottom") {
			// create a panel
			oCcontentPanel.addContent(oImage, {left: "0px", top: "0px"});
			oCcontentPanel.addContent(oTextView, {left: "0px", bottom: "0px"});
		} else {
			// create a panel
			oCcontentPanel.addContent(oTextView, {left: "0px", top: "0px"});
			oCcontentPanel.addContent(oImage, {left: "0px", bottom: "0px"});
		}
		
		
		oCcontentPanel._oImage = oImage;
		oCcontentPanel._oTextView = oTextView;

		oImage._oContent = oCcontentPanel;
		oTextView._oContent = oCcontentPanel;
		
		oCcontentPanel.internalKey = iImageKey;
		
		if(this.getSelectedKey() == iImageKey) {
			oCcontentPanel.addStyleClass("scn-pack-FishEye-SelectedContent");
			oCcontentPanel._oImage.addStyleClass("scn-pack-FishEye-SelectedImage");
			oCcontentPanel._oTextView.addStyleClass("scn-pack-FishEye-SelectedText");
			
			oTextView.setVisible(true);
			
			if (!oCcontentPanel.currentWidth) oCcontentPanel.currentWidth = that._fGetStartSize();
			that._fResizeAnimation(oCcontentPanel, oCcontentPanel.currentWidth,that._fGetEndSize(),that._fGetAnimationSteps(),10,0.333);			
		}
		
		this._fInitFishEye(oCcontentPanel, oImage, oTextView);
		
		return oCcontentPanel;
	},
	
	updateSelection: function (iSelectedKey) {
		var that = this;
		
		var contentPanelExistingArray = that._lLayout.getContent();
		
		for (var i = 0; i < contentPanelExistingArray.length; i++) {
			var lCcontentPanel = contentPanelExistingArray[i];
			
			if(iSelectedKey == lCcontentPanel.internalKey){
				lCcontentPanel.addStyleClass("scn-pack-FishEye-SelectedContent");
				lCcontentPanel._oImage.addStyleClass("scn-pack-FishEye-SelectedImage");
				lCcontentPanel._oTextView.addStyleClass("scn-pack-FishEye-SelectedText");
			} else {
				lCcontentPanel.removeStyleClass("scn-pack-FishEye-SelectedContent");
				lCcontentPanel._oImage.removeStyleClass("scn-pack-FishEye-SelectedImage");
				lCcontentPanel._oTextView.removeStyleClass("scn-pack-FishEye-SelectedText");
			};
		};
	},

	_fGetStartSize : function() {
		return this.oComponentProperties.height * 0.7;
	},
	
	_fGetEndSize : function() {
		return this.oComponentProperties.height * 1.0;
	},

	_fGetAnimationSteps : function() {
		return 15;
	},
	
	/** 
	 * Code  
	 */
	_fInitFishEye : function (lCcontentPanel, image, text) {
		var that = this;
		
		text.setVisible(false);
		
		lCcontentPanel.setWidth(this._fGetStartSize()+"px");
		lCcontentPanel.setHeight(this._fGetStartSize()+"px");
		
		if (!lCcontentPanel.currentWidth) lCcontentPanel.currentWidth = that._fGetStartSize();

		var fOnCompleteOut = function () {
			var contentPanelExistingArray = that._lLayout.getContent();
            for (var i = 0; i < contentPanelExistingArray.length; i++) {
            	var content = contentPanelExistingArray[i];
                  if(content != lCcontentPanel) {
                      content._oTextView.setVisible(false);
                      that._fResizeAnimation(contentPanelExistingArray[i], contentPanelExistingArray[i].currentWidth,that._fGetStartSize(),that._fGetAnimationSteps(),10,0.5);
                  }
            }
		};

		var fOnOver = function () {
			text.setVisible(true);
		
			that._fResizeAnimation(lCcontentPanel, lCcontentPanel.currentWidth,that._fGetEndSize(),that._fGetAnimationSteps(),10,0.333);
			
			fOnCompleteOut();
		};
		
		var fOnOut = function () {
			text.setVisible(false);
			if (!lCcontentPanel.currentWidth) return;
		
			that._fResizeAnimation(lCcontentPanel, lCcontentPanel.currentWidth,that._fGetStartSize(),15,10,0.5);
		};
		
		lCcontentPanel.onAfterRendering = function () {
			var jqThis = lCcontentPanel.$();
			jqThis.hover(fOnOver, fOnOut);
			
			// image.attachBrowserEvent('hoover', fOnOver, fOnOut);
			// image.attachBrowserEvent('mouseover', fOnOver);
			// image.attachBrowserEvent('mouseout', fOnOut);
		};
		
		image.onAfterRendering = function () {
			var jqThis = image.$();
			jqThis.hover(fOnOver, fOnOut);
			
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
			jqThis.hover(undefined, fOnCompleteOut);
		};
	},

	_fResizeAnimation : function (lCcontentPanel, startWidth,endWidth,steps,intervals,powr) {
		if(startWidth == endWidth) {
			return;
		}
		
		var that = this;
		
		var active = undefined;
		if (lCcontentPanel._activeInterval) window.clearInterval(lCcontentPanel._activeInterval);
		
		var actStep = 0;
		
		lCcontentPanel._fWidthChangeMemInt = function() {
			lCcontentPanel.currentWidth = that._fEaseInOut(startWidth,endWidth,steps,actStep,powr);
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

	_fEaseInOut : function (minValue,maxValue,totalSteps,actualStep,powr) {
		//Generic Animation Step Value Generator By www.hesido.com
		var delta = maxValue - minValue;
		var change = (Math.pow(((1 / totalSteps)*actualStep),powr)*delta);
		var stepp = minValue + change;
		return Math.ceil(stepp);
	}

})
})();