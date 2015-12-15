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
		id: "MenuBar",
		name: "basics.MenuBar",
		requireName: "basicsmenubar",
		fullComponentName: "org.scn.community.basics.MenuBar",
		fullComponentPackage: "org.scn.community.basics/res/MenuBar",
		script: "org.scn.community.basics/res/MenuBar/MenuBar",
		scriptSpec: "org.scn.community.basics/res/MenuBar/MenuBarSpec",
		min: false
	};

	spec.spec = 
{
  "cleanAll": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Internal",
      "desc": "Clean All Buttons",
      "noAps": true,
      "noZtl": false,
      "refDesc": "Buttons",
      "refProperty": "elementsContent",
      "refValue": "[]",
      "tooltip": "Clean All Buttons",
      "ztlFunction": "-clean",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": false
  },
  "defaultImage": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Url For Default Image",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For Default Image Which Should Be Shown",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "elementsContent": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"item": {
        "enabled": {
          "desc": "Enabled",
          "type": "boolean,optional"
        },
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "sequence": "key,text,url,enabled,subItem",
        "subItem": {
          "enabled": {
            "desc": "Enabled",
            "type": "boolean,optional"
          },
          "key": {
            "desc": "Unique Key",
            "type": "String"
          },
          "parentKey": {
            "desc": "Parent Key",
            "mode": "ztl",
            "type": "String"
          },
          "sequence": "parentKey,key,text,url,enabled",
          "text": {
            "desc": "Given Text",
            "type": "String"
          },
          "type": "Array",
          "url": {
            "desc": "Given Url",
            "type": "Url,optional"
          }
        },
        "text": {
          "desc": "Given Text",
          "type": "String"
        },
        "type": "Array",
        "url": {
          "desc": "Given Url",
          "type": "Url,optional"
        }
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content",
      "desc": "Buttons",
      "tooltip": "List of Buttons",
      "ztlFunction": "",
      "ztlType": "DoubleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
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
  },
  "selectedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Technical Proprty For Selected Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Proprty For Selected Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "selectedText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Technical Proprty For Selected Text",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Proprty For Selected Text",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Menu Bar (>= 1.4)",
  "icon": "MenuBar.png",
  "title": "Menu Bar 2.0",
  "topics": [
    {
      "content": "Menu Bar (>= 1.4)",
      "title": "Menu Bar (>= 1.4)"
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
  "height": "29",
  "id": "MenuBar",
  "package": "basics",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Menu Bar 2.0",
  "tooltip": "Menu Bar",
  "width": "400"
};

	return spec;
});// End of closure
