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
        "./ListSelectorSpec", 
        "./ListSelector",
        "../../aps/org.scn.community.component.Core"
        ]
     , function() {

	 var myComponentData = org_scn_community_require.knownComponents.basics.ListSelector;
	
	 /** RequireJS Config **/
	 var requireInfo1 = org_scn_community_require.collectRequire (
	 [
		org_scn_community_require.knownModules.common_basics.name,
		
     ]);

	 sap.zen.Dispatcher.instance.pauseDispatching();	 

	 var sdkReqs = require.config({
		 context : "sdk",
		 paths: requireInfo1.definition,
		 urlArgs: "v=" + org_scn_community_require.jsVersion,
	 });

	 sdkReqs(requireInfo1.plainNames, function() {
		 /** RequireJS Config **/
		 var requireInfo2 = org_scn_community_require.collectRequire (
		 [
		 	
	     ]);
		 
		 var sdkReqs2 = require.config({
			 context : "sdk",
			 paths: requireInfo2.definition,
			 urlArgs: "v=" + org_scn_community_require.jsVersion,
		 });

		 sdkReqs2(requireInfo2.plainNames, function() {
		});//End of Require Callback Component
	});//End of Require Callback
	
	sap.designstudio.sdk.Component.subclass(myComponentData.fullComponentName, myComponentData.instance);	// End of SDK

});// End of closure

