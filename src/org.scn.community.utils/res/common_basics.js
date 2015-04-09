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

/**
 * Global Functions for work with components
 */

var org_scn_community_basics = org_scn_community_basics || {};

org_scn_community_basics.resizeContentAbsoluteLayout = function (parent, mainObject) {
	if(parent._oContentPlaced != true) {
		var jqThis = parent.$();
		
		parent.addContent(
				mainObject,
				{left: "0px", top: "0px"}
		);
		
		parent._oResize = function() {
			parent._containerWidth = jqThis.outerWidth(true) + "px";
			parent._containerHeight = jqThis.outerHeight(true) + "px";

			if(mainObject.setWidth) {
				mainObject.setWidth(parent._containerWidth);	
			}
			
			if(mainObject.setHeight) {
				mainObject.setHeight(parent._containerHeight);	
			}
		};
		
		// attach resize handler
		jqThis[0].onresize = parent._oResize;

		// call resize handler
		parent._oResize();	

		// redefine the layout functions
		var currentWidthFunction = parent.setWidth;
		var currentHeightFunction = parent.setHeight;

		if(currentWidthFunction) {
			parent.setWidth = function (value) {
				var r = currentWidthFunction.call(parent, value);
				// always trigger resize
				parent._oResize();
				
				return r;
			};
		}
		if(currentHeightFunction) {
			parent.setHeight = function (value) {
				var r = currentHeightFunction.call(parent, value);
				// always trigger resize
				parent._oResize();
				
				return r;
			};
		}
		
		parent._oContentPlaced = true;
	};
};

/**
 * Formats the double value, using plain JS to avoid load of CVOM
 */
org_scn_community_basics.getFormattedValue = function (value, locale, numberOfDecimal) {
	// locale got from SAPUI5 is browser dependent, not data dependent
	if(locale == undefined) {
		locale = sap.ui.getCore().getConfiguration().getLanguage();	
	}

	var decimals = "";for (var i = 0; i < numberOfDecimal; i++) {decimals += "0";}
	var formatString = "#,###." + decimals;

	var number = jQuery.formatNumber(value, {format:formatString, locale:locale});
	// in case format starts with ".", the 0 needs to be placed (manually) at the beginning
	if(number.indexOf(".") == 0) {
		number = "0" + number;
	}

	number = number.toLocaleString(numberOfDecimal);
	
	return number;
};

org_scn_community_basics.hideNoDataOverlay = function(componentId, includeFullSizeChild) {
	var css = "";
	css = css + "#" + componentId + "_loadingState {visibility: hidden !important;}";
	css = css + "#" + componentId + "_loadingStateBox {visibility: hidden !important;}";
	css = css + "#" + componentId + "_loadingState_message {visibility: hidden !important;}";

	if(includeFullSizeChild) {
		css = css + "#" + componentId + " > div[class=\"sapUiLayoutAbsPos\"] {width: 100% !important;height: 100% !important;}";
	}
	
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	document.getElementsByTagName('head')[0].appendChild(style);
};

org_scn_community_basics.readOwnScriptAccess = function(scriptSrc, componentFullName) {
	var packageAndName = componentFullName.substring("org.scn.community.".length);
	var componentName = packageAndName.substring(packageAndName.indexOf(".") + 1);
	var packageName = packageAndName.substring(0, packageAndName.indexOf("."));
	return org_scn_community_basics.readGenericScriptAccess(scriptSrc, "res/"+componentName+"/", packageName);
}

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
}