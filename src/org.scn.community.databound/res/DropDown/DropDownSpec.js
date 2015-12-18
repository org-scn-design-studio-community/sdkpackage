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
		id: "DropDown",
		name: "databound.DropDown",
		requireName: "databounddropdown",
		fullComponentName: "org.scn.community.databound.DropDown",
		fullComponentPackage: "org.scn.community.databound/res/DropDown",
		script: "org.scn.community.databound/res/DropDown/DropDown",
		scriptSpec: "org.scn.community.databound/res/DropDown/DropDownSpec",
		min: false
	};

	spec.spec = 
{
  "DBindingMode": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "-",
      "desc": "Binding Mode (metadata, Resultset)",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "ResultSet",
          "text": "Result Set"
        },
        {
          "key": "MasterData",
          "text": "Master Data"
        }
      ],
      "tooltip": "Binding Mode (metadata, Resultset)",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "ResultSet",
    "visible": true
  },
  "DDimension": {
    "opts": {
      "apsControl": "text",
      "cat": "DataBinding",
      "desc": "Selected Dimension",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Selected Dimension",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "DDoRefresh": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Technical Proprty For Pause Refresh",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Proprty For Pause Refresh",
      "ztlFunction": "-get",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": false
  },
  "DElements": {
    "opts": {
      "apsControl": "text",
      "cat": "DataBinding",
      "desc": "Master Data Elements",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Master Data Elements",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DMaxMembers": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Maximum Numner Of Members",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Maximum Numner Of Members",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 3,
    "visible": true
  },
  "DSelectedKey": {
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
  "DSelectedKeyExt": {
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
  "DSelectedKeyExtFull": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Technical Proprty For Selected External String Full",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Proprty For Selected External String Full",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DSelectedText": {
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
  },
  "DSorting": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "-",
      "desc": "Sorting By Value | Defalut",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "ByValue",
          "text": "By Value"
        },
        {
          "key": "Default",
          "text": "Default"
        }
      ],
      "tooltip": "Sorting By Value | Defalut",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "ByValue",
    "visible": true
  },
  "DTopBottom": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "MemberSelection",
      "desc": "Top X, Bottom X Or Both",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Top",
          "text": "Top"
        },
        {
          "key": "Bottom",
          "text": "Bottom"
        },
        {
          "key": "Both",
          "text": "Both"
        }
      ],
      "tooltip": "Top X, Bottom X Or Both",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Both",
    "visible": true
  },
  "data": {
    "opts": {
      "apsControl": "text",
      "cat": "DataBinding",
      "desc": "Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Data List",
      "ztlFunction": "",
      "ztlType": "ResultCellList"
    },
    "template": "default",
    "type": "ResultCellList",
    "value": "",
    "visible": true
  },
  "onClear": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Clear",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Clear"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onDataChanged": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Data Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Data Changed"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onInternalSelectionChanged": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Internal Event For On Selection Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Internal Event For On Selection Changed"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "this.private_onSelectionChanged();",
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
  "description": "Data Drop Down",
  "icon": "DropDown.png",
  "title": "Data Drop Down 2.0",
  "topics": [
    {
      "content": "Data Drop Down",
      "title": "Data Drop Down"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	spec.specComp = 
{
  "databound": true,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "26",
  "id": "DropDown",
  "package": "databound",
  "parentControl": "sap.ui.commons.DropdownBox",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Data Drop Down 2.0",
  "tooltip": "Data Drop Down",
  "width": "100"
};

	return spec;
});// End of closure
