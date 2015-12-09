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
define([],
function() {

	var spec = {
		id: "FallbackPicture",
		name: "basics.FallbackPicture",
		requireName: "basicsfallbackpicture",
		fullComponentName: "org.scn.community.basics.FallbackPicture",
		fullComponentPackage: "org.scn.community.basics/res/FallbackPicture",
		script: "org.scn.community.basics/res/FallbackPicture/FallbackPicture",
		scriptSpec: "org.scn.community.basics/res/FallbackPicture/FallbackPictureSpec",
		min: false
	};

	spec.spec = 
{
  "fallbackPicture": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Url For Fallback Picture",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For Fallback Picture Which Should Be Shown",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "default",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "picture": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Url For Picture",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For Picture Which Should Be Shown",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "default",
    "type": "Url",
    "value": "",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Fallback Picture",
  "icon": "FallbackPicture.png",
  "title": "Fallback Picture 2.0",
  "topics": [
    {
      "content": "Fallback Picture",
      "title": "Fallback Picture"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	spec.specComp = 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "100",
  "id": "FallbackPicture",
  "package": "basics",
  "parentControl": "sap.ui.commons.Image",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Fallback Picture 2.0",
  "tooltip": "Fallback Picture",
  "width": "100"
};

	return spec;
});// End of closure
