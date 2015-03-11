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

sap.ui.commons.layout.AbsoluteLayout.extend ("org.scn.community.utils.PostResponceParser", {

	metadata: {
        properties: {
              "DUrl": {type: "string"},
              "DTrigger": {type: "string"},
              "DParameters": {type: "string"},
              "DBasicAuthorisation": {type: "string"},
        }
	},

	initDesignStudio: function() {
		var that = this;
	},	
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		if(this.getDUrl() != "" && this.getDTrigger() == "GO") {
			var lParameters = this.getDParameters();
			var that = this;

			var http = new XMLHttpRequest();
			var url = this.getDUrl();
			
			var params = "";
			
			if((lParameters != undefined || lParameters != undefined) && lParameters != "" && lParameters != "<delete>"){
				var lParametersArray = JSON.parse(lParameters);

				params = JSON.stringify(lParametersArray);
			}
			
			http.open("POST", url, true);

			http.setRequestHeader("Content-type", "application/json; charset=utf-8");
			
			if(this.getDBasicAuthorisation() != "") {
				http.setRequestHeader("Authorization", this.getDBasicAuthorisation());	
			}
			
			http.onreadystatechange = function() {
			    if(http.readyState == 4 && http.status == 200) {
			        alert(http.responseText);
			    }
			}
			
			http.send(params);
			
			if(this.getDTrigger() != "") {
				// clean up the trigger
				this.setDTrigger("");

				// fire event to rerender
				this.fireDesignStudioPropertiesChanged(["DTrigger"]);
			}
		}
	}
});
