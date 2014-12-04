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
		var myScriptSuffix = "res/cbg/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.basics.CheckBoxGroup", {

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
              "elements": {type: "string"},
              "withPicture": {type: "boolean"},
              "pictureSize": {type: "string"}
        }
	},
  
	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
		
		this.addStyleClass("scn-pack-CheckBoxGroup");
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
		
		var lElementsToRender = this.getElements();
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);

			// Destroy old content
			this._lLayout.destroyContent();
			
			// distribute content
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				var lImageElement = this.createCheckBoxElement(i, element.key, element.text, element.url, element.selected);
				this._lLayout.addContent(lImageElement);
			}
			
		}
	},
	
	createCheckBoxElement: function (index, iKey, iText, iImageUrl, selected) {
		var that = this;
		
		// in case starts with http, keep as is 
		if(iImageUrl.indexOf("http") == 0) {
			// no nothing
		} else {
			// in case of repository, add the prefix from repository
			if(this._pImagePrefix != undefined && this._pImagePrefix != ""){
				iImageUrl = this._pImagePrefix + iImageUrl;
			} else {
				iImageUrl = this._ownScript + "CheckBoxGroup.png";
			}
		}

		var pictureSize = this.getPictureSize();
		var withPicture = this.getWithPicture();

		var height = "20px";
		var topImage = "5px";

		var topText = "1px";
		var leftText = "5px";
		
		if(withPicture && pictureSize.indexOf("32") > -1) {
			// for 32px
			height = "40px";
			topText = "11px";
			leftText = "42px";
		} else if(withPicture) {
			// for 16px
			leftText = "26px";
			topImage = "3px";
		} 

		var oLayout = new sap.ui.commons.layout.AbsoluteLayout ({
			width: "225px",
			height: height
		});
		
		oLayout.addStyleClass("scn-pack-CheckBoxGroup-Layout");
		oLayout.internalKey = iKey;

		var oImage = new sap.ui.commons.Image ({
			src : iImageUrl,
			width : pictureSize,
			height : pictureSize,
			alt : iText,
			tooltip : iText,
		});

		if(withPicture) {
			oImage.addStyleClass("scn-pack-CheckBoxGroup-Picture");
			oImage.internalKey = iKey;
		
			oLayout.addContent(
					oImage,
					{left: "4px", top: topImage}
			);
		}

		var oCheckBox = new sap.ui.commons.CheckBox({
			change: function() {

				var lElementsToRender = that.getElements();
				if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
					var lElementsToRenderArray = JSON.parse(lElementsToRender);

					// distribute content
					for (var i = 0; i < lElementsToRenderArray.length; i++) {
						var element = lElementsToRenderArray[i];
						
						if(element.key == oLayout.internalKey) {
							element.selected = oCheckBox.getChecked();
							break;
						}
					}
					
					lElementsToRender = JSON.stringify(lElementsToRenderArray);
					that.setElements(lElementsToRender);
				}
				
				that.fireDesignStudioPropertiesChanged(["elements"]);
				that.fireDesignStudioEvent("onSelectionChanged");
			}
		});
		
		oCheckBox.setText(iText);
		oCheckBox.setChecked(selected);
		oCheckBox.addStyleClass("scn-pack-CheckBoxGroup-CheckBox");
		
		oLayout.addContent(
				oCheckBox,
				{left: leftText, top: topText}
		);
		
		if(withPicture) {
			if(selected) {
				oLayout.addStyleClass("scn-pack-CheckBoxGroup-SelectedValue");
			}
		}
		
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
		if(withPicture && iPicture != "") {
			requestForPicture.open("GET", iImageUrl, true);
			requestForPicture.send();
		} else {
			imageToLoad = that.getFallbackPicture();
			oImage.setSrc(imageToLoad);
		}
		
		return oLayout;
	}
});
})();