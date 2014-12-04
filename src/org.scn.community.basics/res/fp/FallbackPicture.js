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
		var myScriptSuffix = "res/fp/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

jQuery.sap.require("sap.ui.commons.Image");
	
sap.ui.commons.Image.extend("org.scn.community.basics.FallbackPicture", {

	metadata: {
        properties: {
              "picture": {type: "string"},
              "fallbackPicture": {type: "string"},
        }
	},
	
	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		// need to check if the requested picture exists
		
		var that = this;
		
		var requestForPicture = new XMLHttpRequest();
	    
		requestForPicture.onreadystatechange = function() {
			// check status and react
			if (requestForPicture.readyState == 4){
				var imageToLoad = undefined;
				
				// sometimes it gets 200 without content
				if(requestForPicture.status == 404 || requestForPicture.responseUrl == "" || requestForPicture.response == "") {
					imageToLoad = that.getFallbackPicture();
				} else {
					imageToLoad = that.getPicture();
				};
				
				that.setSrc(imageToLoad);
			};
		};
		
		// trigger ajax request
		var pictureUrl = this.getPicture();
		
		// just a check if there is some picture at all
		if(pictureUrl != undefined && pictureUrl != "") {
			requestForPicture.open("GET", this.getPicture(), true);
			requestForPicture.send();
		}
	}
});
})();