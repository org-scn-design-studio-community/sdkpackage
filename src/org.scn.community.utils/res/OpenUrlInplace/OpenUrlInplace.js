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
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend ("org.scn.community.utils.OpenUrlInplace", {

	metadata: {
        properties: {
              "url": {type: "string"},
              "trigger": {type: "string"},
              "parameters": {type: "string"},
        }
	},

	initDesignStudio: function() {
		var that = this;
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		
		var lParameters = this.getParameters();

		if(this.getUrl() != "" && this.getTrigger() == "GO") {
			var finalUrl = this.getUrl()
			// read local created new Notifications
			if((lParameters != undefined || lParameters != undefined) && lParameters != "" && lParameters != "<delete>"){
				var lParametersArray = JSON.parse(lParameters);

				if(lParametersArray.length > 0) {
					finalUrl= finalUrl + "?";
				}
				
				for (var i = 0; i < lParametersArray.length; i++) {
					finalUrl = finalUrl + encodeURIComponent(lParametersArray[i].name) + "=" + encodeURIComponent(lParametersArray[i].value) + "";
					
					if(lParametersArray.length - 1 > i) {
						finalUrl = finalUrl + "&";	
					}
				}
			}
			
			// by by...
			window.location = finalUrl;
			return;
		}
	}

});
