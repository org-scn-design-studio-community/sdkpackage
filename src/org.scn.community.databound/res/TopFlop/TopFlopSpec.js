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
		id: "TopFlop",
		name: "databound.TopFlop",
		requireName: "databoundtopflop",
		fullComponentName: "org.scn.community.databound.TopFlop",
		fullComponentPackage: "org.scn.community.databound/res/TopFlop",
		script: "org.scn.community.databound/res/TopFlop/TopFlop",
		scriptSpec: "org.scn.community.databound/res/TopFlop/TopFlopSpec",
		min: false
	};

	spec.spec = 
{
  "addCounter": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content",
      "desc": "Add Counter",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Add Counter",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "allowInteraction": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Interaction",
      "desc": "Allow Any Interaction",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Allow Any Interaction (Link, Selection)",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "averagePrefix": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Average",
      "desc": "Prefix For Average Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Prefix For Average Value",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "Average: ",
    "visible": true
  },
  "averageSuffix": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Average",
      "desc": "Suffix For Average Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Suffix For Average Value",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "dataCellList": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Data List",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "deltaValueSuffix": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Delta",
      "desc": "Delta Value Suffix Text",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Delta Value Suffix Text",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "fallbackPicture": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Picture",
      "desc": "Url For The Fallback Picture",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For The Fallback Picture",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "fixedAverage": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Average",
      "desc": "Fixed Average Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Fixed Average Value (-1 For Calculated Average)",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": -1,
    "visible": true
  },
  "ignoreAverage": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content",
      "desc": "Ignore Average",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Ignore Average when calculating Top / Bottom",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "maxNumber": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Content",
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
  "onPress": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Press",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Press"
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
  "pressedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Technical Property For Pressed Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Property For Pressed Key",
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
      "desc": "Technical Property For Selected Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Property For Selected Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "topBottom": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Content",
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
  "usePictures": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Picture",
      "desc": "Use Pictures",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Use Pictures",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "valueDecimalPlaces": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Value",
      "choiceType": "DecimalPlaces",
      "desc": "Value Decimal Places",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "D0",
          "text": "0"
        },
        {
          "key": "D1",
          "text": "1"
        },
        {
          "key": "D2",
          "text": "2"
        },
        {
          "key": "D3",
          "text": "3"
        },
        {
          "key": "D4",
          "text": "4"
        },
        {
          "key": "D5",
          "text": "5"
        },
        {
          "key": "D6",
          "text": "6"
        },
        {
          "key": "D7",
          "text": "7"
        },
        {
          "key": "D8",
          "text": "8"
        },
        {
          "key": "D9",
          "text": "9"
        }
      ],
      "tooltip": "Value Decimal Places",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "D2",
    "visible": true
  },
  "valuePrefix": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Value Prefix Text",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Value Prefix Text",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "valueSuffix": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Value Suffix Text",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Value Suffix Text",
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
  "description": "Data Top Flop",
  "icon": "TopFlop.png",
  "title": "Data Top Flop",
  "topics": [
    {
      "content": "This component allows you to select a dimension which will be sorted and only top / bottom elements will be shown. The elements will be selected only to the given number. Exception of it occurs when more elements have same value, then more elements can be visible with same value and same position.",
      "title": "Data Top Flop"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	spec.specComp = 
{
  "dataType": "DataCellList",
  "databound": true,
  "extension": "Component",
  "group": "ScnCommunityVisualizations",
  "handlerType": "sapui5",
  "height": "190",
  "id": "TopFlop",
  "package": "databound",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "common_databound",
      "space": "known"
    },
    {
      "id": "jshashtable",
      "space": "known"
    },
    {
      "id": "numberformatter",
      "space": "known"
    }
  ],
  "title": "Data Top Flop",
  "tooltip": "Data Top Flop",
  "width": "225"
};

	return spec;
});// End of closure
