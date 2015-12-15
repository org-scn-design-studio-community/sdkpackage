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
		id: "NavigationBar",
		name: "basics.NavigationBar",
		requireName: "basicsnavigationbar",
		fullComponentName: "org.scn.community.basics.NavigationBar",
		fullComponentPackage: "org.scn.community.basics/res/NavigationBar",
		script: "org.scn.community.basics/res/NavigationBar/NavigationBar",
		scriptSpec: "org.scn.community.basics/res/NavigationBar/NavigationBarSpec",
		min: false
	};

	spec.spec = 
{
  "DCleanAll": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Internal",
      "desc": "Clean All Elements",
      "noAps": true,
      "noZtl": false,
      "refDesc": "Elements",
      "refProperty": "DElementsContent",
      "refValue": "[]",
      "tooltip": "Clean All Elements",
      "ztlFunction": "-clean",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": false
  },
  "DElementsContent": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"step": {
        "enabled": {
          "desc": "Enabled",
          "type": "boolean"
        },
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "sequence": "key,text,visible,enabled",
        "text": {
          "desc": "Given Text",
          "type": "String"
        },
        "type": "Array",
        "visible": {
          "desc": "Visible",
          "type": "boolean"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content",
      "desc": "Steps",
      "tooltip": "List of Steps",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "DSelectedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Selected Step Key",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Selected Step Key",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "DSelectedText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Selected Text",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Selected Text",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "numberOfVisibleSteps": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Number Of Visible Steps",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Number Of Visible Steps",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "onSelectionChanged": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Selection Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Selection Changed"
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
  "description": "Navigation Bar",
  "icon": "NavigationBar.png",
  "title": "Navigation Bar 2.0",
  "topics": [
    {
      "content": "Navigation Bar",
      "title": "Navigation Bar"
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
  "height": "22",
  "id": "NavigationBar",
  "package": "basics",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Navigation Bar 2.0",
  "tooltip": "Navigation Bar",
  "width": "300"
};

	return spec;
});// End of closure
