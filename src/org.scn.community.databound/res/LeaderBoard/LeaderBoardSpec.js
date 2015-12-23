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
		id: "LeaderBoard",
		name: "databound.LeaderBoard",
		requireName: "databoundleaderboard",
		fullComponentName: "org.scn.community.databound.LeaderBoard",
		fullComponentPackage: "org.scn.community.databound/res/LeaderBoard",
		script: "org.scn.community.databound/res/LeaderBoard/LeaderBoard",
		scriptSpec: "org.scn.community.databound/res/LeaderBoard/LeaderBoardSpec",
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
    "value": 10,
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
      "desc": "Technical Proprty For Pressed Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Proprty For Pressed Key",
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
  "topBottom": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Content",
      "choiceType": "MemberSelection",
      "desc": "Top X Or Bottom X",
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
        }
      ],
      "tooltip": "Top X Or Bottom X",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Top",
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
  "description": "Data Leader Board",
  "icon": "LeaderBoard.png",
  "title": "Data Leader Board",
  "topics": [
    {
      "content": "Data Leader Board shows you the top and bottom members in nice manner (like in SCN). In case some values are occurring twice, those will be shown as well.",
      "title": "Data Leader Board"
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
  "id": "LeaderBoard",
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
  "title": "Data Leader Board",
  "tooltip": "Data Leader Board",
  "width": "225"
};

	return spec;
});// End of closure
