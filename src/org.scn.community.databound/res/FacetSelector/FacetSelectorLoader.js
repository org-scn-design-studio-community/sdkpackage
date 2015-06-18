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

	org_scn_community_require.knownComponents.databound.FacetSelector = {
		name: "databound.FacetSelector",
		requireName: "databoundfacetselector",
		fullComponentName: "org.scn.community.databound.FacetSelector",
		script: "org.scn.community.databound/res/FacetSelector/FacetSelector",
		scriptSpec: "org.scn.community.databound/res/FacetSelector/FacetSelectorSpec",
		min: false
	};

	var myComponentData = org_scn_community_require.knownComponents.databound.FacetSelector;
	
	 /** RequireJS Config **/
	 var requireInfo1 = org_scn_community_require.collectRequire (
	 [
		org_scn_community_require.knownModules.component_core.name,
		org_scn_community_require.knownModules.common_basics.name,
		org_scn_community_require.knownModules.common_basics.name,
		org_scn_community_require.knownModules.common_databound.name,
		org_scn_community_require.knownModules.jshashtable.name,
		org_scn_community_require.knownModules.numberformatter.name,
		
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
		  	myComponentData.name
	     ]);
		 
		 var sdkReqs2 = require.config({
			 context : "sdk",
			 paths: requireInfo2.definition,
			 urlArgs: "v=" + org_scn_community_require.jsVersion,
		 });

		 sdkReqs(requireInfo2.plainNames, function() {
			 sap.ui.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);	// End of SDK
	     	 sap.zen.Dispatcher.instance.resumeDispatching();
		});//End of Require Callback Component
	});//End of Require Callback
})();// End of closure

