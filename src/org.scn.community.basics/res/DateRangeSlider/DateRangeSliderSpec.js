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
		id: "DateRangeSlider",
		name: "basics.DateRangeSlider",
		requireName: "basicsdaterangeslider",
		fullComponentName: "org.scn.community.basics.DateRangeSlider",
		fullComponentPackage: "org.scn.community.basics/res/DateRangeSlider",
		script: "org.scn.community.basics/res/DateRangeSlider/DateRangeSlider",
		scriptSpec: "org.scn.community.basics/res/DateRangeSlider/DateRangeSliderSpec",
		min: false
	};

	spec.spec = 
{
  "DGranularity": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Date",
      "choiceType": "DateViewType",
      "desc": "Granularity",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Day",
          "text": "Day"
        },
        {
          "key": "Month",
          "text": "Month"
        }
      ],
      "tooltip": "Granularity",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Day",
    "visible": true
  },
  "DLangFormat": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Format",
      "desc": "Language Dependent Format",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Language Dependent Format",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "false",
    "visible": true
  },
  "DLangPattern": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Format",
      "desc": "Custom Format Pattern",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Custom Format Pattern",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "DLangRelative": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Format",
      "desc": "Custom Format Relative",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Custom Format Relative",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "false",
    "visible": true
  },
  "DLangStyle": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Format",
      "choiceType": "FormatStyle",
      "desc": "Custom Format Style",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Short",
          "text": "Short"
        },
        {
          "key": "Medium",
          "text": "Medium"
        },
        {
          "key": "Long",
          "text": "Long"
        }
      ],
      "tooltip": "Custom Format Style",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Short",
    "visible": true
  },
  "DMax": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Date",
      "correctName": "maximumDate",
      "desc": "Maximum Date",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Maximum Date Value (yyyymmdd)",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "DMin": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Date",
      "correctName": "minimumDate",
      "desc": "Minimum Date",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Minimum Date Value (yyyymmdd)",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "DValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Date",
      "correctName": "firstDate",
      "desc": "First Date",
      "noAps": false,
      "noZtl": false,
      "tooltip": "First Date Value (yyyymmdd)",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "DValue2": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Date",
      "correctName": "secondDate",
      "desc": "Second Date",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Second Date Value (yyyymmdd)",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "onChange": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Change",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Change"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "showBubbles": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Visualization",
      "desc": "Show Bubbles",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Show Bubbles",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "true",
    "visible": true
  },
  "smallStepWidth": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Visualization",
      "desc": "Small Step Width",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Small Step Width",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "default",
    "type": "String",
    "value": "1",
    "visible": true
  },
  "stepLabels": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Visualization",
      "desc": "Step Labels",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Step Labels",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "",
    "visible": true
  },
  "totalUnits": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Visualization",
      "desc": "Total Units",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Total Units",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "0",
    "visible": true
  },
  "vertical": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Visualization",
      "desc": "Change To Vertical Orientation",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Change To Vertical Orientation",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "false",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Date Range Slider",
  "icon": "DateRangeSlider.png",
  "title": "Date Range Slider 2.0",
  "topics": [
    {
      "content": "Date Range Slider",
      "title": "Date Range Slider"
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
  "height": "30",
  "id": "DateRangeSlider",
  "package": "basics",
  "parentControl": "sap.suite.ui.commons.DateRangeSlider",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "dateformatter",
      "space": "known"
    },
    {
      "id": "sap_suite_loader",
      "space": "known"
    }
  ],
  "title": "Date Range Slider 2.0",
  "tooltip": "Date Range Slider",
  "width": "300"
};

	return spec;
});// End of closure
