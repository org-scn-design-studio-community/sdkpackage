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
		id: "TriStateCheckBox",
		name: "basics.TriStateCheckBox",
		requireName: "basicstristatecheckbox",
		fullComponentName: "org.scn.community.basics.TriStateCheckBox",
		fullComponentPackage: "org.scn.community.basics/res/TriStateCheckBox",
		script: "org.scn.community.basics/res/TriStateCheckBox/TriStateCheckBox",
		scriptSpec: "org.scn.community.basics/res/TriStateCheckBox/TriStateCheckBoxSpec",
		min: false
	};

	spec.spec = 
{
  "editable": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Editable",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Editable",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "enabled": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Enabled",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Enabled",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
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
  "selectionState": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "SelectionsState",
      "desc": "Tooltip",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Checked",
          "text": "Checked"
        },
        {
          "key": "Unchecked",
          "text": "Unchecked"
        },
        {
          "key": "Mixed",
          "text": "Mixed"
        }
      ],
      "tooltip": "Tooltip",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Unchecked",
    "visible": true
  },
  "text": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Value",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "tri state value",
    "visible": true
  },
  "tooltip": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Tooltip",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Tooltip",
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
  "description": "Tri State CheckBox",
  "icon": "TriStateCheckBox.png",
  "title": "Tri State CheckBox 2.0",
  "topics": [
    {
      "content": "Tri State CheckBox",
      "title": "Tri State CheckBox"
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
  "id": "TriStateCheckBox",
  "package": "basics",
  "parentControl": "sap.ui.commons.TriStateCheckBox",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Tri State CheckBox 2.0",
  "tooltip": "Tri State CheckBox",
  "width": "300"
};

	return spec;
});// End of closure
