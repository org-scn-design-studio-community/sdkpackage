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
		id: "Calendar",
		name: "basics.Calendar",
		requireName: "basicscalendar",
		fullComponentName: "org.scn.community.basics.Calendar",
		fullComponentPackage: "org.scn.community.basics/res/Calendar",
		script: "org.scn.community.basics/res/Calendar/Calendar",
		scriptSpec: "org.scn.community.basics/res/Calendar/CalendarSpec",
		min: false
	};

	spec.spec = 
{
  "DCurrentValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Current Date Value YYYYMMDD",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Current Date Value YYYYMMDD",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "TODAY",
    "visible": true
  },
  "DSelectionType": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Interaction",
      "choiceType": "SelectionType",
      "desc": "Selection Type",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Single",
          "text": "Single Selection"
        },
        {
          "key": "Range",
          "text": "Range Selection"
        }
      ],
      "tooltip": "Selection Type",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Single",
    "visible": true
  },
  "DValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Date Single Value YYYYMMDD",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Date Single Value YYYYMMDD",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "TODAY",
    "visible": true
  },
  "DValueF": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Date Value Range From YYYYMMDD",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Date Value Range From YYYYMMDD",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "TODAY",
    "visible": true
  },
  "DValueT": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Date Value Range To YYYYMMDD",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Date Value Range To YYYYMMDD",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "TODAY",
    "visible": true
  },
  "firstDayOffset": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Visualization",
      "desc": "First Day Offset (0 == Sunday)",
      "noAps": false,
      "noZtl": false,
      "tooltip": "First Day Offset (0 == Sunday, 1 == Monday)",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "1",
    "visible": true
  },
  "monthsPerRow": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Visualization",
      "desc": "Months Per Row",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Months Per Row",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "1",
    "visible": true
  },
  "monthsToDisplay": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Visualization",
      "desc": "Months To Display",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Months  ToDisplay",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "1",
    "visible": true
  },
  "onCurrentChanged": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Current Value Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Current Value Changed"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onRangeChanged": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Value Change With Date Range",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Value Change With Date Range"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onSingleChanged": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Value Change With Single Date",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Value Change With Single Date"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "singleRow": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Visualization",
      "desc": "Single Row",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Single Row",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "false",
    "visible": true
  },
  "weeksPerRow": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Visualization",
      "desc": "Weeks Per Row",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Weeks Per Row",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "1",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Calendar",
  "icon": "Calendar.png",
  "title": "Calendar 2.0",
  "topics": [
    {
      "content": "Calendar",
      "title": "Calendar"
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
  "height": "300",
  "id": "Calendar",
  "package": "basics",
  "parentControl": "sap.me.Calendar",
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
      "id": "sap_m_loader",
      "space": "known"
    }
  ],
  "title": "Calendar 2.0",
  "tooltip": "Calendar",
  "width": "300"
};

	return spec;
});// End of closure
