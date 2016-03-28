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
		id: "Donut",
		name: "basics.Donut",
		requireName: "basicsdonut",
		fullComponentName: "org.scn.community.basics.Donut",
		fullComponentPackage: "org.scn.community.basics/res/Donut",
		script: "org.scn.community.basics/res/Donut/Donut",
		scriptSpec: "org.scn.community.basics/res/Donut/DonutSpec",
		min: false
	};

	spec.spec = 
{
  "activateOnOutEvent": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Interaction",
      "desc": "Activate On Out Event",
      "tooltip": "Activate On Out Event",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "activateOnOverEvent": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Interaction",
      "desc": "Activate On Over Event",
      "tooltip": "Activate On Over Event",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "arrowColor": {
    "opts": {
      "apsControl": "color",
      "cat": "Display",
      "desc": "Arrow Color",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Arrow Color",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "red",
    "visible": true
  },
  "direction": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Value",
      "choiceType": "-",
      "desc": "Value Direction",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Up",
          "text": "Up"
        },
        {
          "key": "Down",
          "text": "Down"
        },
        {
          "key": "Left",
          "text": "Left"
        },
        {
          "key": "Right",
          "text": "Right"
        }
      ],
      "tooltip": "Value Direction",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Left",
    "visible": true
  },
  "donutColor": {
    "opts": {
      "apsControl": "color",
      "cat": "Display",
      "desc": "Donut Color",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Donut Color",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "blue",
    "visible": true
  },
  "gapColor": {
    "opts": {
      "apsControl": "color",
      "cat": "Display",
      "desc": "Gap Color",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Gap Color",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "green",
    "visible": true
  },
  "numCurVal": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Current Value As Float",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Current Value As Float",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "default",
    "type": "String",
    "value": 40,
    "visible": true
  },
  "numPrevVal": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Previous Value As Float",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Previous Value As Float",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "default",
    "type": "String",
    "value": 30,
    "visible": true
  },
  "onClick": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Click",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Click"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onMouseOut": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Mouse Out",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Mouse Out"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onMouseOver": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Mouse Over",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Mouse Over"
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
  "description": "Donut",
  "icon": "Donut.png",
  "title": "Donut",
  "topics": [
    {
      "content": "Donut",
      "title": "Donut"
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
  "handlerType": "div",
  "height": "150",
  "id": "Donut",
  "package": "basics",
  "parentControl": "sap.ui.commons",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Donut",
  "tooltip": "Donut",
  "width": "150"
};

	return spec;
});// End of closure
