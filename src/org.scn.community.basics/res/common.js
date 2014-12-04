/**
 * Copyright 2014 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/sap-design-studio-free-addons/sdk-package
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
