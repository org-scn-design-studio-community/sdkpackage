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
var scn_pkg = "org.scn.community.";
if(sap.firefly != undefined) { scn_pkg = scn_pkg.replace(".", "_"); }

define([
	"sap/designstudio/sdk/component",
    "./TriStateCheckBoxSpec", 
    "./TriStateCheckBox",
    "../require_loader",
	
	"../../../"+scn_pkg+"shared/modules/component.core",
    ],

	function(component) {
	   var myComponentData = org_scn_community_require.knownComponents.basics.TriStateCheckBox;

 	   jQuery.sap.require("sap.ui.commons.TriStateCheckBox");
	   sap.ui.commons.TriStateCheckBox.extend(myComponentData.fullComponentName, myComponentData.instance);	// End of SDK
});// End of closure
