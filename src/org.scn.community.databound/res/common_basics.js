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

org_scn_community_basics.resizeContentAbsoluteLayout = function (parent, mainObject, callback) {
	if(parent._oContentPlaced != true) {
		if(parent.addContent) {
			parent.addContent(
					mainObject,
					{left: "0px", top: "0px"}
			);
		}
		
		parent._oResize = function() {
			org_scn_community_basics.determineOwnSize(parent);

			if(mainObject.setWidth) {
				mainObject.setWidth(parent._containerWidth + "px");	
			}
			
			if(mainObject.setHeight) {
				mainObject.setHeight(parent._containerHeight + "px");	
			}
			
			if(callback) {
				callback(parent._containerWidth, parent._containerHeight);
			}
		};
		
		// attach resize handler
		org_scn_community_basics.addEvent(parent.$()[0], "resize", parent._oResize);
		org_scn_community_basics.resizableComponents.push(parent);
		
		// attach resize handler
		if(!org_scn_community_basics.onWindowResizeInserted) {
			org_scn_community_basics.addEvent(window, "resize", org_scn_community_basics.onWindowResize);org_scn_community_basics.onWindowResizeInserted=true;
		}
		
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

org_scn_community_basics.determineOwnSize = function(parent) {
	var jqThis = parent.$();

	parent._containerWidth = jqThis.outerWidth(true);
	parent._containerHeight = jqThis.outerHeight(true);
	
	var realHeightIsCorrect = true;
	if(parent._containerHeight == 0) {
		realHeightIsCorrect = false;
	}
	
	var myParent = parent;
	while(parent._containerHeight == 0) {
		myParentParent = undefined;
		if(myParent.getParent != undefined) {
			myParentParent = myParent.getParent();
		}
		if(myParentParent == undefined && myParent.owner != undefined) {
			myParentParent = myParent.owner;
		}
		
		if(myParentParent != undefined) {
			myParent = myParentParent;
			parent._containerHeight = myParent.$().outerHeight(true);	
		}
		
		if(!myParent) {
			break;
		}
	}

	if(!realHeightIsCorrect) {
		if (parent.oComponentProperties) {
			if(parent.oComponentProperties.height == "auto") {
				parent._containerHeight = parent._containerHeight - parent.oComponentProperties.topmargin;
				parent._containerHeight = parent._containerHeight - parent.oComponentProperties.bottommargin;
			}
		}
	}
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
org_scn_community_basics.onWindowResize = function() {
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