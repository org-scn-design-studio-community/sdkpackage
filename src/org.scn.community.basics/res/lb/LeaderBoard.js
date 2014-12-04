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
		var myScriptSuffix = "res/lb/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.basics.LeaderBoard", {

	setFallbackPicture : function(value) {
		this._FallbackPicture = value;
		
		if(value != undefined && value != "")  {
			this._pImagePrefix = value.substring(0, value.lastIndexOf("/") + 1);	
		}
	},

	getFallbackPicture : function() {
		return this._FallbackPicture;
	},

	metadata: {
        properties: {
              "selectedKey": {type: "string"},
              "pressedKey": {type: "string"},
              "addCounter": {type: "boolean"},
              "elements": {type: "string"},
              "valuePrefix": {type: "string"},
              "valueSuffix": {type: "string"}
        }
	},
  
	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
		
		this.addStyleClass("scn-pack-LeaderBoard");
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
		if(!this._lLayout) {
			this._lLayout = new sap.ui.layout.VerticalLayout({
				
			});

			this.addContent(
				this._lLayout,
				{left: "0px", top: "2px"}	
			);
		}
		
		this._maxValue = undefined;
		
		var lElementsToRender = this.getElements();
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);

			// Destroy old content
			this._lLayout.destroyContent();

			// find highest value
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				if(this._maxValue == undefined) {
					this._maxValue = element.value;
				}
				if(element.value > this._maxValue) {
					this._maxValue = element.value;
				}
			}
			
			if(this._maxValue == 0) {
				this._maxValue = 1;
			}
			
			// distribute content
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				var lImageElement = this.createLeaderElement(i, element.key, element.text, element.url, element.value, element.valueS);
				this._lLayout.addContent(lImageElement);
			}
			
		}
	},
	
	createLeaderElement: function (index, iImageKey, iImageText, iImageUrl, value, valueAsString) {
		var that = this;
		
		// in case starts with http, keep as is 
		if(iImageUrl.indexOf("http") == 0) {
			// no nothing
		} else {
			// in case of repository, add the prefix from repository
			if(this._pImagePrefix != undefined && this._pImagePrefix != ""){
				iImageUrl = this._pImagePrefix + iImageUrl;
			} else {
				iImageUrl = this._ownScript + "LeaderBoard.png";
			}
		}

		var oLayout = new sap.ui.commons.layout.AbsoluteLayout ({
			width: "225px",
			height: "40px"
		});
		
		value = 225 * value / this._maxValue;
		
		var oValueLayout = new sap.ui.commons.layout.AbsoluteLayout ({
			width: value + "px",
			height: "40px"
		});
		
		oValueLayout.addStyleClass("scn-pack-LeaderBoard-ValueLayout");

		oLayout.addContent(
				oValueLayout,
				{left: "0px", top: "0px"}	
		);
		
		oLayout.addStyleClass("scn-pack-LeaderBoard-Layout");
		oLayout.internalKey = iImageKey;

		if(this.getAddCounter()) {
			var oIndexText = new sap.ui.commons.TextView();
			oIndexText.addStyleClass("scn-pack-LeaderBoard-IndexText");
			oIndexText.setText((index+1) + ".");
			
			oLayout.addContent(
					oIndexText,
					{right: "200px", top: "10px"}
			);
		}
		
		oNameLink = new sap.ui.commons.Link();
		oNameLink.addStyleClass("scn-pack-LeaderBoard-Link");

		oLayout.addContent(
				oNameLink,
				{left: "82px", top: "2px"}	
		);

		var oImage = new sap.ui.commons.Image ({
			src : iImageUrl,
			width : "32px",
			height : "32px",
			alt : iImageText,
			tooltip : iImageText,
		});

		oImage.addStyleClass("scn-pack-LeaderBoard-Picture");
		oImage.internalKey = iImageKey;
		
		oLayout.addContent(
				oImage,
				{left: "45px", top: "5px"}
		);

		var oText = new sap.ui.commons.TextView();
		oText.addStyleClass("scn-pack-LeaderBoard-Text");
		
		oLayout.addContent(
				oText,
				{left: "82px", top: "20px"}
		);
		
		if(this.getSelectedKey() == iImageKey) {
			oLayout.addStyleClass("scn-pack-LeaderBoard-SelectedValue");
		}
		
		oNameLink.attachBrowserEvent('click', function() {
			that._linkEvent = true;
			that.setPressedKey(oImage.internalKey);
			
			that.fireDesignStudioPropertiesChanged(["pressedKey"]);
			that.fireDesignStudioEvent("onPress");
		});

		oLayout.attachBrowserEvent('click', function () {
			if(that._linkEvent == true) {
				that._linkEvent = false;
			} else {
				that.setSelectedKey(oImage.internalKey);
				that.updateSelection(oImage.internalKey);
				
				that.fireDesignStudioPropertiesChanged(["selectedKey"]);
				that.fireDesignStudioEvent("onSelectionChanged");
			}
		});
		
		oNameLink.setText (iImageText);
		oNameLink.setTooltip (iImageText);

		var requestForPicture = new XMLHttpRequest();
		
		requestForPicture.onreadystatechange = function() {
			// check status and react
			if (requestForPicture.readyState == 4){
				var imageToLoad = undefined;
				
				// sometimes it gets 200 without content
				if(requestForPicture.status == 404 || requestForPicture.responseUrl == "" || requestForPicture.response == "") {
					imageToLoad = that.getFallbackPicture();
				} else {
					imageToLoad = iImageUrl;
				};
				
				oImage.setSrc(imageToLoad);
			};
		};
		
		// just a check if there is some picture at all
		if(iImageUrl != undefined && iImageUrl != "") {
			requestForPicture.open("GET", iImageUrl, true);
			requestForPicture.send();
		}
		
		oText.setText (this.getValuePrefix() + valueAsString + this.getValueSuffix());
		
		return oLayout;
	},
	
	updateSelection : function (iSelectedKey) {
		var lContent = this._lLayout.getContent();
		
		for (var i = 0; i < lContent.length; i++) {
			var lLayout = lContent [i];
			
			if(iSelectedKey == lLayout.internalKey){
				lLayout.addStyleClass("scn-pack-LeaderBoard-SelectedValue");
			} else {
				lLayout.removeStyleClass("scn-pack-LeaderBoard-SelectedValue");
			};
		};
	}

});
})();