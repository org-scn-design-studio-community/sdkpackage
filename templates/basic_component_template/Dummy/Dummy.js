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

(function() {
/** code for recognition of script path */
var myScript = $("script:last")[0].src;
_readScriptPath = function () {
	if(myScript) {
		var myScriptSuffix = "res/Dummy/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.basics.Dummy", {
	
	// here some methods.
	// you can use prefix D to avoid collisions with sapui5 properties
	metadata: {
        properties: {
        	  "DSomeProperty": {type: "boolean"},
        }
	},
	
	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
		
		
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var lSomeProp = this.getDSomeProperty();
		
		alert(lSomeProp);
	},
});
})();