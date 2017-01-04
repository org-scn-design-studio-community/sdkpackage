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
		id: "FioriButtonM",
		name: "basics.FioriButtonM",
		requireName: "basicsfioributtonm",
		fullComponentName: "org.scn.community.basics.FioriButtonM",
		fullComponentPackage: "org.scn.community.basics/res/FioriButtonM",
		script: "org.scn.community.basics/res/FioriButtonM/FioriButtonM",
		scriptSpec: "org.scn.community.basics/res/FioriButtonM/FioriButtonMSpec",
		min: false
	};

	spec.spec = 
{
  "dBackColor": {
    "opts": {
      "apsControl": "color",
      "cat": "Display",
      "desc": "Background Colour",
      "noAps": false,
      "noZtl": true,
      "tooltip": "Background Colour For This Button",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "default",
    "type": "String",
    "value": "",
    "visible": true
  },
  "dFontColor": {
    "opts": {
      "apsControl": "color",
      "cat": "Display",
      "desc": "Font Colour",
      "noAps": false,
      "noZtl": true,
      "tooltip": "Font Colour For This Button",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "default",
    "type": "String",
    "value": "",
    "visible": true
  },
  "dIcon": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Icon",
      "noAps": false,
      "noZtl": true,
      "tooltip": "Icon For This Button",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "sap-icon://home",
    "visible": true
  },
  "dSize": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "-",
      "desc": "Size M (16px) | L (22px)",
      "noAps": false,
      "noZtl": true,
      "options": [
        {
          "key": "M",
          "text": "M"
        },
        {
          "key": "L",
          "text": "L"
        }
      ],
      "tooltip": "The Size Of The Content",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "L",
    "visible": false
  },
  "dStyle": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "ButtonStyle",
      "desc": "Button Style",
      "noAps": false,
      "noZtl": true,
      "options": [
        {
          "key": "Default",
          "text": "Default"
        },
        {
          "key": "Emph",
          "text": "Emph"
        },
        {
          "key": "Accept",
          "text": "Accept"
        },
        {
          "key": "Reject",
          "text": "Reject"
        }
      ],
      "tooltip": "Predefined Style For This Button",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Default",
    "visible": true
  },
  "dText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Text",
      "noAps": false,
      "noZtl": true,
      "tooltip": "Text For This Button",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "dTooltip": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Tooltip",
      "noAps": false,
      "noZtl": true,
      "tooltip": "Tooltip For This Button",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "onClick": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Click",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Click"
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
  "description": "Fiori Button 2.0",
  "icon": "FioriButton.png",
  "title": "Fiori Button 2.0",
  "topics": [
    {
      "content": "Open in browser the link https://openui5.hana.ondemand.com/iconExplorer.html with icon library. The icon id is in right bottom corner.",
      "title": "Source of Icons"
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
  "height": "42",
  "id": "FioriButtonM",
  "modes": "m",
  "package": "basics",
  "parentControl": "sap.m.Button",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Fiori Button 2.0",
  "tooltip": "Fiori Button 2.0",
  "width": "100"
};

	return spec;
});// End of closure
