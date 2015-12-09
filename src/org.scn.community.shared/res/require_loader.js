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

var scn_pkg = "org.scn.community.";
if(sap.firefly != undefined) { scn_pkg = scn_pkg.replace(".", "_"); }

define([
        "../../"+scn_pkg+"shared/modules/component.basics",
        "../../"+scn_pkg+"shared/modules/component.databound",
        "../../"+scn_pkg+"shared/modules/component.unified",
        "sap/designstudio/sdk/component"
        ], function(basics, databound, unified) {

	/* IMPORTANT! ORIGINAL LOCATION - basics/res */

	/** code for recognition of script path */
	org_scn_community_basics.readGenericScriptAccess = function(scriptSrc, sctiptPath, packageName) {

		var ownScriptPath = sap.zen.createStaticSdkMimeUrl(packageName, sctiptPath);
		var mainPluginPath = sap.zen.createStaticSdkMimeUrl(packageName, "");
		var mainSDKPath = sap.zen.createStaticSdkMimeUrl("", "").replace("//", "/");
		
		return {
			myScriptPath : ownScriptPath,					// http://localhost:9091/aad/zen/mimes/sdk_include/C_ORG_SCN_COMMUNITY_<packageName>/res/<component-name>/
			myPackagePath: mainPluginPath, 					// http://localhost:9091/aad/zen/mimes/sdk_include/C_ORG_SCN_COMMUNITY_<packageName>/
			mainSDKPath : mainSDKPath						// http://localhost:9091/aad/zen/mimes/sdk_include/
		};
	};

	org_scn_community_require.scriptInfo = org_scn_community_basics.readGenericScriptAccess("", "res", "");

	org_scn_community_basics.getUrlParameterByName = function (name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
	
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
	
	return org_scn_community_require;
});