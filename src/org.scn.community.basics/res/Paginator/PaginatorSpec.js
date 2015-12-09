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
		id: "Paginator",
		name: "basics.Paginator",
		requireName: "basicspaginator",
		fullComponentName: "org.scn.community.basics.Paginator",
		fullComponentPackage: "org.scn.community.basics/res/Paginator",
		script: "org.scn.community.basics/res/Paginator/Paginator",
		scriptSpec: "org.scn.community.basics/res/Paginator/PaginatorSpec",
		min: false
	};

	spec.spec = 
{
  "currentPage": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Current Page",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Represents The Current Page Number.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": true
  },
  "numberOfPages": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Number Of Pages",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Represents The Overall Number Of Pages That Are Embedded Into The Parent Control.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 3,
    "visible": true
  },
  "onPageChange": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Page Change",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event Is Fired When The User Navigates To Another Page By Selecting It Directly, Or By Jumping Forward Or Backward."
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Paginator",
  "icon": "Paginator.png",
  "title": "Paginator 2.0",
  "topics": [
    {
      "content": "Paginator",
      "title": "Paginator"
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
  "height": "20",
  "id": "Paginator",
  "package": "basics",
  "parentControl": "sap.ui.commons.Paginator",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Paginator 2.0",
  "tooltip": "Paginator",
  "width": "270"
};

	return spec;
});// End of closure
