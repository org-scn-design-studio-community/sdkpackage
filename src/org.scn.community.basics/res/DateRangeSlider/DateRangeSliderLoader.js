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

define([
        "./DateRangeSliderSpec", 
        "./DateRangeSlider",
        "../require_loader",
		"../../../"+C_ORG_SCN_COMMUNITY_+"basics/os/date/DateFormat",
		"../../../"+C_ORG_SCN_COMMUNITY_+"basics/os/sapui5/sap_suite_loader",
		
        "../../../org.scn.community.shared/modules/component.core"
        ]
     , function() {

	 var myComponentData = org_scn_community_require.knownComponents.basics.DateRangeSlider;
	
	 /** RequireJS Config **/
	 var requireInfo1 = org_scn_community_require.collectRequire (
	 [
		
     ]);

	 var sdkReqs = require.config({
		 context : "sdk",
		 paths: requireInfo1.definition,
		 urlArgs: "v=" + org_scn_community_require.jsVersion,
	 });

	 sdkReqs(requireInfo1.plainNames, function() {
	 });//End of Require Callback
	 
 	 jQuery.sap.require("sap.suite.ui.commons.DateRangeSlider");

	 sap.suite.ui.commons.DateRangeSlider.extend(myComponentData.fullComponentName, myComponentData.instance);	// End of SDK
 
});// End of closure

