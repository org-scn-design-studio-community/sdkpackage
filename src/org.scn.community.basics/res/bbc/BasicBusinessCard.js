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
		var myScriptSuffix = "res/bbc/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

jQuery.sap.require("sap.ui.commons.layout.AbsoluteLayout");

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.basics.BasicBusinessCard", {

	metadata: {
        properties: {
              "image": {type: "string"},
              "name": {type: "string"},
              "title": {type: "string"}
        }
	},
  
  	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
		
		this.addStyleClass("scn-pack-BasicBusinessCard-Card");
		
		this._lNameLink = new sap.ui.commons.Link();

		this._lNameLink.attachBrowserEvent('click', function() {
			that.fireDesignStudioEvent("onPress");
			}
		);
		
		this._lNameLink.addStyleClass("scn-pack-BasicBusinessCard-NameLink");

		this.addContent(
				this._lNameLink,
				{left: "42px", top: "2px"}	
		);

		this._lImage = new sap.ui.commons.Image({
			width: "32px",
			height: "32px"
			}
		);

		this._lImage.addStyleClass("scn-pack-BasicBusinessCard-Image");
		
		this.addContent(
				this._lImage,
				{left: "5px", top: "5px"}
		);

		this._lText = new sap.ui.commons.TextView();

		this._lText.addStyleClass("scn-pack-BasicBusinessCard-Title");
		
		this.addContent(
				this._lText,
				{left: "42px", top: "20px"}
		);
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;

		this._lNameLink.setText (this.getName());
		this._lNameLink.setTooltip (this.getName());

		this._lImage.setSrc (this.getImage());

		this._lText.setText (this.getTitle());
	}
});
})();