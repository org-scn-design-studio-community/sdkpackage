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
		id: "KpiView",
		name: "basics.KpiView",
		requireName: "basicskpiview",
		fullComponentName: "org.scn.community.basics.KpiView",
		fullComponentPackage: "org.scn.community.basics/res/KpiView",
		script: "org.scn.community.basics/res/KpiView/KpiView",
		scriptSpec: "org.scn.community.basics/res/KpiView/KpiViewSpec",
		min: false
	};

	spec.spec = 
{
  "data": {
    "opts": {
      "apsControl": "text",
      "cat": "Data",
      "desc": "Data Value",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Data Value",
      "ztlFunction": "",
      "ztlType": "ResultCell"
    },
    "template": "ResultCell",
    "type": "ResultCell",
    "value": "",
    "visible": true
  },
  "footerCssClass": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Footer And Header",
      "desc": "Footer CSS Class",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Footer CSS Class",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "footerHAlign": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Footer And Header",
      "choiceType": "HorizontalAlign",
      "desc": "Footer Horizontal Alignment",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Left",
          "text": "Left Align"
        },
        {
          "key": "Right",
          "text": "Right Align"
        }
      ],
      "tooltip": "Footer Horizontal Alignment",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Left",
    "visible": true
  },
  "footerText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Footer And Header",
      "desc": "Footer",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Footer",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "Footer",
    "visible": true
  },
  "headerCssClass": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Footer And Header",
      "desc": "Header CSS Class",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Header CSS Class",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "headerHAlign": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Footer And Header",
      "choiceType": "HorizontalAlign",
      "desc": "Header Horizontal Alignment",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Left",
          "text": "Left Align"
        },
        {
          "key": "Right",
          "text": "Right Align"
        }
      ],
      "tooltip": "Header Horizontal Alignment",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Left",
    "visible": true
  },
  "headerText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Footer And Header",
      "desc": "Header",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Header",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "Header",
    "visible": true
  },
  "image": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Image",
      "desc": "Url For The Image",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For The Image",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "imageSize": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Image",
      "choiceType": "ImageSize",
      "desc": "Size Of The Image",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Size_16px",
          "text": "16px"
        },
        {
          "key": "Size_32px",
          "text": "32px"
        },
        {
          "key": "Size_64px",
          "text": "64px"
        },
        {
          "key": "Size_128px",
          "text": "128px"
        }
      ],
      "tooltip": "Size Of The Image",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Size_16px",
    "visible": true
  },
  "linkText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Text",
      "desc": "Text For The Link",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Text For The Link",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "linkTooltip": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Text",
      "desc": "Tooltip For The Link",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Tooltip For The Link",
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
  "onLinkClick": {
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
  "titleCssClass": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Title",
      "desc": "Title CSS Class",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Title CSS Class",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "titleText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Title",
      "desc": "Title",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Title",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "Title",
    "visible": true
  },
  "valueCssClass": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Value CSS Class",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Value CSS Class",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
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
      "ztlFunction": "-int",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "D0",
    "visible": true
  },
  "valueFloat": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Value As Float",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Value As Float",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "default",
    "type": "String",
    "value": "",
    "visible": true
  },
  "valueHAlign": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Value",
      "choiceType": "HorizontalAlign",
      "desc": "Value Horizontal Alignment",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Left",
          "text": "Left Align"
        },
        {
          "key": "Right",
          "text": "Right Align"
        }
      ],
      "tooltip": "Value Horizontal Alignment",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Left",
    "visible": true
  },
  "valuePrefixCssClass": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Value Prefix CSS Class",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Value Prefix CSS Class",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "valuePrefixText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Value Prefix",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Value Prefix",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "valueSuffixCssClass": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Value Suffix CSS Class",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Value Suffix CSS Class",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "valueSuffixText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Value Suffix",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Value Suffix",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": " M$",
    "visible": true
  },
  "valueText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Value",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "Value",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Kpi View",
  "icon": "KpiView.png",
  "title": "Kpi View 2.0",
  "topics": [
    {
      "content": "Kpi View",
      "title": "Kpi View"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	spec.specComp = 
{
  "dataType": "ResultCell",
  "databound": true,
  "extension": "Component",
  "group": "ScnCommunityVisualizations",
  "handlerType": "sapui5",
  "height": "190",
  "id": "KpiView",
  "package": "basics",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [
    {
      "id": "common_basics",
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
  "title": "Kpi View 2.0",
  "tooltip": "Kpi View",
  "width": "220"
};

	return spec;
});// End of closure
