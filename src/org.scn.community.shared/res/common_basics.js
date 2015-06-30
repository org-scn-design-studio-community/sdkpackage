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

/* IMPORTANT! ORIGINAL LOCATION - basics/res */

org_scn_community_basics.resizeContentAbsoluteLayout = function (parent, mainObject, callback) {
	if(parent._oContentPlaced != true) {
		if(parent.addContent) {
			parent.addContent(
					mainObject,
					{left: "0px", top: "0px"}
			);
		}
		
		parent._oResize = function(ignoreOwner) {
			var changed = org_scn_community_basics.determineOwnSize(parent, true);

			if(changed) {
				if(mainObject.setWidth) {
					mainObject.setWidth(parent._containerWidth-2 + "px");	
				}
				
				if(mainObject.setHeight) {
					mainObject.setHeight(parent._containerHeight-2 + "px");	
				}
				
				if(!ignoreOwner) {
					if(parent.setWidth) {
						parent.setWidth(parent._containerWidth + "px", true);	
					}
					
					if(parent.setHeight) {
						parent.setHeight(parent._containerHeight + "px", true);	
					}
				}
				
				if(callback) {
					callback(parent._containerWidth, parent._containerHeight, parent);
				}
			}
		};
		
		
		if(!parent._oEventREgistered) {
			// attach resize handler once
			org_scn_community_basics.addEvent(parent.$()[0], "resize", parent._oResize);
			org_scn_community_basics.resizableComponents.push(parent);
			parent._oEventREgistered = true;
		}
		
		// attach resize handler
		if(!org_scn_community_basics.onWindowResizeInserted) {
			org_scn_community_basics.addEvent(window, "resize", org_scn_community_basics.onWindowResize);org_scn_community_basics.onWindowResizeInserted=true;
		}
		
		// call resize handler
		setTimeout(function() {
			var myVar = parent;
			myVar.$()[0].style.display = "block";
			myVar._oResize();
		}, 100);

		// parent.$()[0].style.display = "none";
		
		// redefine the layout functions
		var currentWidthFunction = parent.setWidth;
		var currentHeightFunction = parent.setHeight;

		if(currentWidthFunction) {
			parent.setWidth = function (value, doNotResizeAgain) {
				var r = currentWidthFunction.call(parent, value);
				if(!doNotResizeAgain) {
					parent._oResize(true);
				}
				
				return r;
			};
		} else {
			parent.setWidth = function (value, doNotResizeAgain) {
				if(!doNotResizeAgain) {
					parent._oResize(true);
				}
				
				return parent;
			};
		}
		if(currentHeightFunction) {
			parent.setHeight = function (value, doNotResizeAgain) {
				var r = currentHeightFunction.call(parent, value);
				if(!doNotResizeAgain) {
					parent._oResize(true);
				}
				
				return r;
			};
		} else {
			parent.setHeight = function (value, doNotResizeAgain) {
				if(!doNotResizeAgain) {
					parent._oResize(true);
				}
				
				return parent;
			};
		}
		
		parent._oContentPlaced = true;
	};
};

org_scn_community_basics.findParentContainer = function(parent) {
	var myParent = parent;
	
	var max = 25;
	var counter = 0;
	
	while(myParent.zenControlType == undefined || myParent.zenControlType == "tab" ||  myParent.zenControlType.indexOf("sdk") == 0) {
		myParentParent = undefined;
		if(myParent.getParent != undefined) {
			myParentParent = myParent.getParent();
		}
		if(myParentParent == undefined && myParent.owner != undefined) {
			myParentParent = myParent.owner;
		}
		
		if(myParentParent != undefined) {
			myParent = myParentParent;
		}
		
		if(!myParent || counter > max) {
			break;
		}
		
		counter = counter + 1;
	}
	
	return myParent;
};

org_scn_community_basics.determineOwnSize = function(parent, resizeTrigger) {
	var orgParent = parent;

	var sizeChanged = false;

	// in case the component is on auto resize mode
	if(orgParent.oComponentProperties) {
		if(orgParent.oComponentProperties.width == "auto" || orgParent.oComponentProperties.height == "auto") {
			parent = org_scn_community_basics.findParentContainer(parent);	
		}

		var jqThis = parent.$();
		
		var outerSizeRead = "";
		if(orgParent.oComponentProperties.width == "auto") {
			orgParent._containerWidth = jqThis.outerWidth(true);
			outerSizeRead = "W";
		} else {
			if(orgParent.oComponentProperties.width) {
				orgParent._containerWidth = parseInt(orgParent.oComponentProperties.width);
			}
		}
		
		if(orgParent.oComponentProperties.height == "auto") {
			orgParent._containerHeight = jqThis.outerHeight(true);
			outerSizeRead = outerSizeRead + "H";
		} else {
			if(orgParent.oComponentProperties.height) {
				orgParent._containerHeight = parseInt(orgParent.oComponentProperties.height);	
			}
		}
		
		if (orgParent.oComponentProperties && outerSizeRead.indexOf("W") > -1) {
			if(orgParent.oComponentProperties.width == "auto") {
				orgParent._containerWidth = orgParent._containerWidth - orgParent.oComponentProperties.leftmargin;
				orgParent._containerWidth = orgParent._containerWidth - orgParent.oComponentProperties.rightmargin;
			}	
		}
		
		if (orgParent.oComponentProperties && outerSizeRead.indexOf("H") > -1) {
			if(orgParent.oComponentProperties.height == "auto") {
				orgParent._containerHeight = orgParent._containerHeight - orgParent.oComponentProperties.topmargin;
				orgParent._containerHeight = orgParent._containerHeight - orgParent.oComponentProperties.bottommargin;
			}
		}

		if(parent.zenControlType == "tabstrip") {
			var line = jqThis.children()[0];
			if(line) {
				orgParent._containerHeight = orgParent._containerHeight-line.clientHeight;
			}
		}			

		if(orgParent._oldContainerWidth != orgParent._containerWidth) {
			sizeChanged = true;
			if(resizeTrigger) orgParent._oldContainerWidth = orgParent._containerWidth;
		}
		if(orgParent._oldContainerHeight != orgParent._containerHeight) {
			sizeChanged = true;
			if(resizeTrigger) orgParent._oldContainerHeight = orgParent._containerHeight;
		}
	}

	return sizeChanged;
};

org_scn_community_basics.addEvent = function(elem, type, eventHandle) {
    if (elem == null || typeof(elem) == 'undefined') return;
    if ( elem.addEventListener ) {
        elem.addEventListener( type, eventHandle, false );
    } else if ( elem.attachEvent ) {
        elem.attachEvent( "on" + type, eventHandle );
    } else {
        elem["on"+type]=eventHandle;
    }
};

org_scn_community_basics.onWindowResizeInserted = false;
org_scn_community_basics.resizableComponents = [];

org_scn_community_basics.resizeHolder = false;

org_scn_community_basics.onWindowResize = function() {
	if(org_scn_community_basics.resizeHolder !== false) {
		clearTimeout(org_scn_community_basics.resizeHolder);
	}
    
	org_scn_community_basics.resizeHolder = setTimeout(org_scn_community_basics.onWindowResizeExecutor, 200);
};

org_scn_community_basics.onWindowResizeExecutor = function() {
	for (var compIndex in org_scn_community_basics.resizableComponents) {
		var component = org_scn_community_basics.resizableComponents[compIndex];
		
		if(component._oResize){
			component._oResize();
		}
	}
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

org_scn_community_basics.cloneJson = function(json) {
	if (typeof JSON.clone !== "function")
	{
	    JSON.clone = function(obj)
	    {
	        return JSON.parse(JSON.stringify(obj));
	    };
	}
	
	return JSON.clone(json);
}

/**
 * Returns date object based on techncial date string, format YYYYMMDD
 */
org_scn_community_basics.getDateValue = function (inputDate) {
	if(inputDate == undefined || inputDate.length != 8) {
		inputDate = new Date();
		inputDate = inputDate.format(dateFormat.masks.technical);
	}
	
	var year = inputDate.substring(0,4);
	var month = inputDate.substring(4,6);
	if(month.indexOf(0) == "0") {
		month = month.substring(1);
	}
	var day = inputDate.substring(6,8);
	if(day.indexOf(0) == "0") {
		day = day.substring(1);
	}
	
	var date = new Date(year, month - 1, day);
	date.formatted = date.format(dateFormat.masks.technical);
	
	return date;
};

/**
 * Fills dummy data based on the component spec
 */
org_scn_community_basics.fillDummyDataInit = function (owner, callBack) {
	// uses directly setters for the settings
	callBack(owner);
};

org_scn_community_basics.fillDummyDataInitAsync = function (owner, callBack) {
	var requestForData = new XMLHttpRequest();
	var returnValue = undefined;

	requestForData.onreadystatechange = function() {
		// check status and react
		if (requestForData.readyState == 4){
			// status and content does not matter
			callBack(owner);
		};
	};

	// trigger ajax request
	var dataUrl = org_scn_community_require.scriptInfo.mainSDKPath + "org.scn.community.basics/res/_data/empty.json?v=" + org_scn_community_require.jsVersion;

	requestForData.open("GET", dataUrl, true);
	requestForData.send();
};

org_scn_community_basics.fillDummyData = function (owner, callBack, afterPrepare) {
	var requestForData = new XMLHttpRequest();
	var returnValue = undefined;

	requestForData.onreadystatechange = function() {
		// check status and react
		if (requestForData.readyState == 4){
			// status and content does not matter
			callBack(undefined, afterPrepare, owner);
		};
	};

	// trigger ajax request
	var dataUrl = org_scn_community_require.scriptInfo.mainSDKPath + "org.scn.community.basics/res/_data/empty.json?v=" + org_scn_community_require.jsVersion;

	requestForData.open("GET", dataUrl, true);
	requestForData.send();
};

org_scn_community_basics.getRepositoryImageUrlPrefix = function (owner, componentUrl, imageUrl, componentFileName) {
	var that = owner;

	var correctUrl = "";

	if(imageUrl == undefined || imageUrl == "") {
		correctUrl = sap.zen.createStaticSdkMimeUrl(that.componentData.fullComponentPackage, componentFileName);
	} else {
		if(imageUrl.indexOf("http://") !== -1 || imageUrl.indexOf("https://") !== -1){
			correctUrl = imageUrl;
		} else {
			if(componentUrl != undefined && componentUrl.length() > 0) {
				correctUrl =  componentUrl.substring(0, value.lastIndexOf("/") + 1);
				correctUrl = correctUrl + imageUrl;
			} else {
				correctUrl = sap.zen.createStaticSdkMimeUrl(that.componentData.fullComponentPackage, componentFileName);
			}
		}
	}

	return correctUrl;
};
