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
sap.zen.commons.layout.AbsoluteLayout.extend ("org.scn.community.utils.OpenWindowPost", {

	metadata: {
        properties: {
              "url": {type: "string"},
              "trigger": {type: "string"},
              "parameters": {type: "string"},
              "formId": {type: "string"},
              "fallbackSencario": {type: "string"},
              "reloadInPlace": {type: "boolean"},
        }
	},

	initDesignStudio: function() {
		var that = this;
		
		this._oWindows = {};
		this._oCounter = 0;
	},	
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		if(this.getUrl() != "" && this.getTrigger() == "GO") {
			var lParameters = this.getParameters();
			var formId = this.getFormId();

			var lInPlace = this.getReloadInPlace();
			var targetDocument = undefined;

			if(!lInPlace) {
				if(this._oWindows[formId]) {
					// exists already...
					
					var fallbackSencario = this.getFallbackSencario();
					
					if(fallbackSencario == "New Window") {
						formId = formId + this._oCounter;
						this._oCounter = this._oCounter + 1;
					} else if(fallbackSencario == "Close and Reopen") {
						this._oWindows[formId].close();
					}
				}
	
				var newWindow = window.open(this.getUrl(), formId);
				
				if (!newWindow) return false;
				
				this._oWindows[formId] = newWindow;
				
				targetDocument = newWindow.document;
			} else {
				targetDocument = document;
			}

			var html = "";

			html += "<html><head></head><body><form id='"+formId+"' method='post' action='" + this.getUrl() +"'>";

			// read local created new Notifications
			if((lParameters != undefined || lParameters != undefined) && lParameters != "" && lParameters != "<delete>"){
				var lParametersArray = JSON.parse(lParameters);

				for (var i = 0; i < lParametersArray.length; i++) {
					html += "<input type='hidden' name='" + lParametersArray[i].name + "' value='" + lParametersArray[i].value + "'/>";
				}
			}

			html += "</form><script type='text/javascript'>document.getElementById(\""+formId+"\").submit()</sc"+"ript></body></html>";

			targetDocument.write(html);

			if(!lInPlace) {
				if(this.getTrigger() != "") {
					// clean up the trigger
					this.setTrigger("");

					// fire event to rerender
					this.fireDesignStudioPropertiesChanged(["trigger"]);
				}
			}
		}
	}
});
