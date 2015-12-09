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
		id: "ActionSheetButton",
		name: "basics.ActionSheetButton",
		requireName: "basicsactionsheetbutton",
		fullComponentName: "org.scn.community.basics.ActionSheetButton",
		fullComponentPackage: "org.scn.community.basics/res/ActionSheetButton",
		script: "org.scn.community.basics/res/ActionSheetButton/ActionSheetButton",
		scriptSpec: "org.scn.community.basics/res/ActionSheetButton/ActionSheetButtonSpec",
		min: false
	};

	spec.spec = 
{
  "buttonType": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "ButtonType",
      "desc": "Type",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Default",
          "text": "Default"
        },
        {
          "key": "Transparent",
          "text": "Transparent"
        },
        {
          "key": "Accept",
          "text": "Accept"
        },
        {
          "key": "Back",
          "text": "Back"
        },
        {
          "key": "Emphasized",
          "text": "Emphasized"
        },
        {
          "key": "Reject",
          "text": "Reject"
        },
        {
          "key": "Up",
          "text": "Up"
        }
      ],
      "tooltip": "Type",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Default",
    "visible": true
  },
  "icon": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Icon",
      "desc": "Icon",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Icon",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "sap-icon://menu2",
    "visible": true
  },
  "items": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"item": {
        "icon": {
          "desc": "Icon",
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "sequence": "key,text,icon",
        "text": {
          "desc": "Text",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content",
      "desc": "Items",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Content Items for the Component",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "template": "OneLevelArray",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"text\":\"First Element\",\"icon\":\"sap-icon://accept\"},{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT1\",\"leaf\":false,\"icon\":\"sap-icon://notes\",\"text\":\"Notes\"}]",
    "visible": true
  },
  "onPopoverSelect": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Select",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Select"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "placement": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "Placement",
      "desc": "Placement",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Auto",
          "text": "Auto"
        },
        {
          "key": "Horizontal",
          "text": "Horizontal"
        },
        {
          "key": "Vertical",
          "text": "Vertical"
        },
        {
          "key": "Left",
          "text": "Left"
        },
        {
          "key": "Right",
          "text": "Right"
        },
        {
          "key": "Top",
          "text": "Top"
        },
        {
          "key": "Bottom",
          "text": "Bottom"
        }
      ],
      "tooltip": "Placement",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Auto",
    "visible": true
  },
  "selectedItem": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Selected Item",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Selected Item",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "selectedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Selected Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Selected Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "text": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Title",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Title",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Fiori-Inspired Action Sheet Button menu",
  "icon": "ActionSheetButton.png",
  "title": "Action Sheet Button 2.0",
  "topics": [
    {
      "content": "Fiori-Inspired Action Sheet Button menu",
      "title": "Action Sheet Button"
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
  "height": "48",
  "id": "ActionSheetButton",
  "package": "basics",
  "parentControl": "sap.m.Button",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "sap_m_loader",
      "space": "known"
    }
  ],
  "title": "Action Sheet Button 2.0",
  "tooltip": "Fiori-Inspired Action Sheet Button menu",
  "width": "48"
};

	return spec;
});// End of closure
