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
		var myScriptSuffix = "res/ic/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

jQuery.sap.require("sap.ui.commons.Carousel");

sap.ui.commons.Carousel.extend("org.scn.community.basics.ImageCarousel", {

	setDefaultImage : function(value) {
		this._DefaultImage = value;
		
		if(value != undefined && value != "")  {
			this._pImagePrefix = value.substring(0, value.lastIndexOf("/") + 1);	
		}
	},

	getDefaultImage : function() {
		return this._DefaultImage;
	},

	setSelectedKey : function(value) {		
		if (value !== undefined || value !== "") {
			this._SelectedKey = value;
		}
	},

	getSelectedKey : function() {
		return this._SelectedKey;
	},

	setElements : function(value) {
		if(this._Elements == value) {
			return;
		} else {
			this._Elements = value;
		}
	},

	getElements : function() {
		return this._Elements;
	},
	
	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
		var lElementsToRender = this.getElements();
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);

			// Destroy old content
			this.destroyContent();

			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var lImageElement = this.createImageElement(lElementsToRenderArray[i].key, lElementsToRenderArray[i].text, lElementsToRenderArray[i].url);
				this.addContent(lImageElement);
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
				iImageUrl = this._ownScript + "ImageCarousel.png";
			}
		}

		var oImage = new sap.ui.commons.Image ({
			src : iImageUrl,
			width : "100%",
			height : "100%",
			alt : iImageText,
			tooltip : iImageText,
		});

		oImage.addStyleClass("scn-pack-ImageCarousel-Image");
		
		oImage.internalKey = iImageKey;
		
		if(this.getSelectedKey() == iImageKey) {
			oImage.addStyleClass("scn-pack-ImageCarousel-SelectedImage");
		}
		
		oImage.attachBrowserEvent('click', function() {
			that.setSelectedKey(oImage.internalKey);
			
			that.updateSelection(oImage.internalKey);
			
			that.fireDesignStudioPropertiesChanged(["selectedKey"]);
			that.fireDesignStudioEvent("onSelectionChanged");
			}
		);
		
		return oImage;
	},
	
	updateSelection: function (iSelectedKey) {
		var lContent = this.getContent();
		
		for (var i = 0; i < lContent.length; i++) {
			var lImage = lContent [i];
			
			if(iSelectedKey == lImage.internalKey){
				lImage.addStyleClass("scn-pack-ImageCarousel-SelectedImage");
			} else {
				lImage.removeStyleClass("scn-pack-ImageCarousel-SelectedImage");
			};
		};
	}

});
})();