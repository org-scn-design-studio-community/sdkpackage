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

sap.ui.commons.ApplicationHeader.extend("org.scn.community.prototypes.ApplicationHeaderE", {
	
	metadata: {
        properties: {
              "appName": {type: "string"},
        }
	},

	initDesignStudio: function() {
		var that = this;
		
		this.attachLogoff(function() {
			that.fireDesignStudioEvent("onLogoff");
		});
		
		// Raise the onSetAppName event to execute the script for getting the application name 
		// this is not wirking...
		// this.fireDesignStudioEvent("onSetAppName");
	},
	
	renderer: {},
		
	afterDesignStudioUpdate: function() {
		
		// Set the logo text to the appName property filled by the onSetAppName event script  
		this.setLogoText(this.getAppName());
		
		// Raise the onSetAppName event to execute the script for getting the application name  
		this.fireDesignStudioEvent("onSetAppName");
	}
});