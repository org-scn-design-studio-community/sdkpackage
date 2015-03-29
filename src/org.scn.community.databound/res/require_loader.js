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

var org_scn_community_require = org_scn_community_require || {};

// set the version to assure cache is cleared
org_scn_community_require.jsVersion = "20140325";

var org_scn_community_basics = org_scn_community_basics || {};

var org_scn_community_components = org_scn_community_components || {};
org_scn_community_components.databound = org_scn_community_components.databound || {};

(function() {
	
	org_scn_community_basics.readOwnScriptAccess = function(scriptSrc, componentFullName) {
		var packageAndName = componentFullName.substring("org.scn.community.".length);
		var componentName = packageAndName.substring(packageAndName.indexOf(".") + 1);
		var packageName = packageAndName.substring(0, packageAndName.indexOf("."));
		return org_scn_community_basics.readGenericScriptAccess(scriptSrc, "res/"+componentName+"/", packageName);
	};

	org_scn_community_basics.readGenericScriptAccess = function(scriptSrc, sctiptPath, packageName) {
		if(scriptSrc) {
			var myScriptSuffix = sctiptPath;
			var myPluginSuffix = "org.scn.community."+packageName+"/";
			var mainScriptPathIndex = scriptSrc.indexOf(myScriptSuffix);
			var mainSDKPathIndex = scriptSrc.indexOf(myPluginSuffix);
			var mainSDKPath = scriptSrc.substring(0, mainSDKPathIndex);
			var ownScriptPath = scriptSrc.substring(0, mainScriptPathIndex) + myScriptSuffix;
			return {
				myScriptPath : ownScriptPath,					// http://localhost:9091/aad/zen/mimes/sdk_include/org.scn.community.<packageName>/res/<component-name>/
				myPackagePath: mainSDKPath + myPluginSuffix, 	// http://localhost:9091/aad/zen/mimes/sdk_include/org.scn.community.<packageName>/
				mainSDKPath : mainSDKPath						// http://localhost:9091/aad/zen/mimes/sdk_include/
			};
		}
		return {
			// temporary hack for local mode in 1.5 release
			myScriptPath: "/aad/zen/mimes/sdk_include/org.scn.community."+packageName+"/" + sctiptPath + "/",
			myPackagePath: "/aad/zen/mimes/sdk_include/org.scn.community."+packageName+"/",
	 		mainSDKPath: "/aad/zen/mimes/sdk_include/"
	 	};
	};

	/** code for recognition of script path */
	var myScript = $("script:last")[0].src;
	org_scn_community_require.scriptInfo = org_scn_community_basics.readGenericScriptAccess(myScript, "res", "databound");

	org_scn_community_require.knownModules = {
			common_basics: {
				name: "common_basics",
				script: "org.scn.community.basics/res/common_basics",
				min: false
			},
			common_databound: {
				name: "common_databound",
				script: "org.scn.community.databound/res/common_databound",
				min: false
			},
			chartjs: {
				name: "chartjs",
				script: "org.scn.community.databound/os/chartjs/Chart",
				min: true
			},
			scheme: {
				name: "scheme",
				script: "org.scn.community.databound/os/color/scheme",
				min: true
			},
			jshashtable: {
				name: "jshashtable",
				script: "org.scn.community.basics/os/jshashtable/jshashtable",
				min: true
			},
			numberformatter: {
				name: "numberformatter",
				script: "org.scn.community.basics/os/jquery/numberformatter",
				min: true
			},
	};
	
	org_scn_community_require.knownComponents = org_scn_community_require.knownComponents || {};
	org_scn_community_require.knownComponents.databound ={
		NiceChart: {
			name: "databound.NiceChart",
			requireName: "databoundnicechart",
			fullComponentName: "org.scn.community.databound.NiceChart",
			script: "org.scn.community.databound/res/NiceChart/NiceChart",
			min: false
		},
		ResultSetInfo: {
			name: "databound.ResultSetInfo",
			requireName: "databoundresultsetinfo",
			fullComponentName: "org.scn.community.databound.ResultSetInfo",
			script: "org.scn.community.databound/res/ResultSetInfo/ResultSetInfo",
			min: false
		},
		ResultSetMixer: {
			name: "databound.ResultSetMixer",
			requireName: "databoundresultsetmixer",
			fullComponentName: "org.scn.community.databound.ResultSetMixer",
			script: "org.scn.community.databound/res/ResultSetMixer/ResultSetMixer",
			min: false
		},
	};
	
	org_scn_community_require.collectRequire = function (arrayOfRequires) {
		
		org_scn_community_require.loadMinWHerePossible = true;
		
		var retObject = {};
		
		var plainNames = [];
		var plainScripts = [];
		var moduleList = [];
		var definition = {};
		
	    for (var iC = 0; iC < arrayOfRequires.length; iC++) {
	    	var requireKey = arrayOfRequires[iC];
	    	
	    	var requireDefinition = org_scn_community_require.knownModules[requireKey];
	    	
	    	if(!requireDefinition && requireKey.indexOf(".")) {
	    		var packageName = requireKey.substring(0, requireKey.indexOf("."));
	    		var componentName = requireKey.substring(requireKey.indexOf(".")+1);
	    		
	    		requireDefinition = org_scn_community_require.knownComponents[packageName][componentName];
	    		requireKey = requireKey.replace(".", "");
	    		requireKey = requireKey.toLowerCase();
	    	}
	    	
	    	var minSuffix = "";
	    	if(org_scn_community_require.loadMinWHerePossible) {
	    		minSuffix = (requireDefinition.min?"-min":"");	
	    	}

	    	if(requireDefinition) {
	    		plainNames.push(requireKey);
	    		definition[requireKey] = org_scn_community_require.scriptInfo.mainSDKPath + requireDefinition.script + minSuffix;
	    		moduleList.push(requireDefinition);
	    		plainScripts.push(requireDefinition.script);
	    	} else {
	    		throw new Error("Unknown SDK Require '" + arrayOfRequires[iC] + "'");
	    	}
	    }
		
	    retObject.plainNames = plainNames;
	    retObject.plainScripts = plainScripts;
	    retObject.moduleList = moduleList;
	    retObject.definition = definition;
	    
		return retObject;
	};
})();