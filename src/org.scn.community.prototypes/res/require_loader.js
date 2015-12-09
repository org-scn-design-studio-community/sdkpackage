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
var org_scn_community_basics = org_scn_community_basics || {};
var org_scn_community_require = org_scn_community_require || {};

org_scn_community_basics.isHana = false;
if(sap.firefly != undefined) {
	org_scn_community_basics.isHana = true;
}

//hana runtime case, no . in folder names!
if(!org_scn_community_basics.isHana) {
	C_ORG_SCN_COMMUNITY_ = "org.scn.community.";	
} else {
	C_ORG_SCN_COMMUNITY_ = "org_scn_community_";
}

define([
        "../../org.scn.community.shared/modules/component.basics",
        "../../org.scn.community.shared/modules/component.databound",
        "../../org.scn.community.shared/modules/component.unified"
        ], function() {

	/* IMPORTANT! ORIGINAL LOCATION - basics/res */

	/** code for recognition of script path */
	org_scn_community_basics.readGenericScriptAccess = function(scriptSrc, sctiptPath, packageName) {

		var myPluginSuffix = C_ORG_SCN_COMMUNITY_ + ""
		if(packageName != "") {
			packageName = myPluginSuffix+packageName;	
		}
		
		if(packageName == "") {
			packageName = myPluginSuffix+"basics";	
		}

		// this is in case 1.4
		if(scriptSrc && sap.zen.createStaticSdkMimeUrl == undefined) {
			var mainSDKPath = "";
			var ownScriptPath = "";

			var mainScriptPathIndex = scriptSrc.indexOf(sctiptPath);
			var mainSDKPathIndex = scriptSrc.indexOf(myPluginSuffix);

			mainSDKPath = scriptSrc.substring(0, mainSDKPathIndex);
			ownScriptPath = scriptSrc.substring(0, mainScriptPathIndex) + sctiptPath;

			return {
				myScriptPath : ownScriptPath,					// http://localhost:9091/aad/zen/mimes/sdk_include/C_ORG_SCN_COMMUNITY_<packageName>/res/<component-name>/
				myPackagePath: mainSDKPath + myPluginSuffix, 	// http://localhost:9091/aad/zen/mimes/sdk_include/C_ORG_SCN_COMMUNITY_<packageName>/
				mainSDKPath : mainSDKPath						// http://localhost:9091/aad/zen/mimes/sdk_include/
			};
		}
		
		// 1.5 api
		if(sap.zen.createStaticSdkMimeUrl != undefined) {
			var ownScriptPath = sap.zen.createStaticSdkMimeUrl(packageName, sctiptPath);
			var mainPluginPath = sap.zen.createStaticSdkMimeUrl(packageName, "");
			var mainSDKPath = sap.zen.createStaticSdkMimeUrl("", "").replace("//", "/");
			
			return {
				myScriptPath : ownScriptPath,					// http://localhost:9091/aad/zen/mimes/sdk_include/C_ORG_SCN_COMMUNITY_<packageName>/res/<component-name>/
				myPackagePath: mainPluginPath, 					// http://localhost:9091/aad/zen/mimes/sdk_include/C_ORG_SCN_COMMUNITY_<packageName>/
				mainSDKPath : mainSDKPath						// http://localhost:9091/aad/zen/mimes/sdk_include/
			};
		}
		
		return {
			// temporary hack for local mode in 1.5 release
			myScriptPath: "/aad/zen/mimes/sdk_include/"+C_ORG_SCN_COMMUNITY_+packageName+"/" + sctiptPath + "/",
			myPackagePath: "/aad/zen/mimes/sdk_include/"+C_ORG_SCN_COMMUNITY_+packageName+"/",
	 		mainSDKPath: "/aad/zen/mimes/sdk_include/"
	 	};
	};

	var myScript = $("script:last")[0].src;
	org_scn_community_require.scriptInfo = org_scn_community_basics.readGenericScriptAccess(myScript, "res", "");

	org_scn_community_basics.getUrlParameterByName = function (name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	//set the version to assure cache is cleared
	/*NO DELTA CHECK START*/
	org_scn_community_basics.isDebug = org_scn_community_basics.getUrlParameterByName("d").toLowerCase() == "x";
	if(org_scn_community_basics.isDebug) {
		org_scn_community_require.jsVersion = "0000-0-0";	
	} else {
		org_scn_community_require.jsVersion = /*%TIMESTAMP-START%*/"2015-12-9"/*%TIMESTAMP-END%*/;
	}

	/*NO DELTA CHECK END*/

	var org_scn_community_components = org_scn_community_components || {};
	org_scn_community_components.basics = org_scn_community_components.basics || {};
	org_scn_community_components.databound = org_scn_community_components.databound || {};
	org_scn_community_components.datasource = org_scn_community_components.datasource || {};
	org_scn_community_components.prototypes = org_scn_community_components.prototypes || {};
	org_scn_community_components.utils = org_scn_community_components.utils || {};

	org_scn_community_basics.readOwnScriptAccess = function(scriptSrc, componentFullName) {
		var packageAndName = componentFullName.substring("org.scn.community.".length);
		var componentName = packageAndName.substring(packageAndName.indexOf(".") + 1);
		var packageName = packageAndName.substring(0, packageAndName.indexOf("."));
		return org_scn_community_basics.readGenericScriptAccess(scriptSrc, "res/"+componentName+"/", packageName);
	};

	org_scn_community_require.knownComponents = org_scn_community_require.knownComponents || {};
	org_scn_community_require.knownComponents.basics = org_scn_community_require.knownComponents.basics || {};
	org_scn_community_require.knownComponents.databound = org_scn_community_require.knownComponents.databound || {};
	org_scn_community_require.knownComponents.datasource = org_scn_community_require.knownComponents.datasource || {};
	org_scn_community_require.knownComponents.prototypes = org_scn_community_require.knownComponents.prototypes || {};
	org_scn_community_require.knownComponents.utils = org_scn_community_require.knownComponents.utils || {};
	
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
	    	
	    	if(!requireDefinition && requireKey.indexOf(".") > -1) {
	    		var packageName = requireKey.substring(0, requireKey.indexOf("."));
	    		var componentName = requireKey.substring(requireKey.indexOf(".")+1);
	    		
	    		requireDefinition = org_scn_community_require.knownComponents[packageName][componentName];
	    		requireKey = requireKey.replace(".", "");
	    		requireKey = requireKey.toLowerCase();
	    	}
	    	
	    	if(!requireDefinition && requireKey.indexOf("/") > -1) {
	    		var packageName = requireKey.substring(0, requireKey.indexOf("/"));
	    		var moduleName = requireKey.substring(requireKey.indexOf("/")+1);
	    		
	    		requireDefinition = org_scn_community_require[packageName + "Modules"][moduleName];
	    		requireKey = requireKey.replace(".", "");
	    		requireKey = requireKey.toLowerCase();
	    	}

	    	var minSuffix = "";
	    	if(org_scn_community_require.loadMinWHerePossible) {
	    		minSuffix = (requireDefinition.min?"-min":"");	
	    	}

	    	if(requireDefinition) {
	    		plainNames.push(requireKey);
	    		
	    		// hana runtime does not support . in folder names
	    		var lScriptPlatform = requireDefinition.script;
	    		if(org_scn_community_basics.isHana && lScriptPlatform.indexOf("org.scn.community.") == 0) {
	    			lScriptPlatform = lScriptPlatform.replace("org.scn.community.", "org_scn_community_");
	    		}

	    		if(requireDefinition.scriptSpec) {
					plainNames.push(requireKey + "Spec");
					definition[requireKey + "Spec"] = org_scn_community_require.scriptInfo.mainSDKPath + lScriptPlatform + "Spec" + minSuffix;
					plainScripts.push(requireDefinition.scriptSpec);
				}
	    		
	    		definition[requireKey] = org_scn_community_require.scriptInfo.mainSDKPath + lScriptPlatform + minSuffix;
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
});