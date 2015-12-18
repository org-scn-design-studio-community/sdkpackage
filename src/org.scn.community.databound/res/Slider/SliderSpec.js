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
		id: "Slider",
		name: "databound.Slider",
		requireName: "databoundslider",
		fullComponentName: "org.scn.community.databound.Slider",
		fullComponentPackage: "org.scn.community.databound/res/Slider",
		script: "org.scn.community.databound/res/Slider/Slider",
		scriptSpec: "org.scn.community.databound/res/Slider/SliderSpec",
		min: false
	};

	spec.spec = 
{
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
  "doRefresh": {
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
  "maxNumber": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Maximum Number",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Maximum Number",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 3,
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
  },
  "sorting": {
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
  "topBottom": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "MemberSelection",
      "desc": "Top X, Bottom X Or Both",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "TopX",
          "text": "Top X"
        },
        {
          "key": "BottomX",
          "text": "Bottom X"
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
  "vertical": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Change To Vertical Orientation",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Change To Vertical Orientation",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Data Slider",
  "icon": "Slider.png",
  "title": "Data Slider 2.0",
  "topics": [
    {
      "content": "Data Slider",
      "title": "Data Slider"
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
  "height": "600",
  "id": "Slider",
  "package": "databound",
  "parentControl": "sap.ui.commons.Slider",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Data Slider 2.0",
  "tooltip": "Data Slider",
  "width": "60"
};

	return spec;
});// End of closure
