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

(function() {

	org_scn_community_require.knownComponents.basics.WorldTime.spec = 
{
  "dateformat": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "-",
      "desc": "Date Format",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "ddmmyy",
          "text": "ddmmyy"
        },
        {
          "key": "ddmm",
          "text": "ddmm"
        },
        {
          "key": "mmyy",
          "text": "mmyy"
        },
        {
          "key": "hide",
          "text": "hide"
        },
        {
          "key": "default",
          "text": "default"
        }
      ],
      "tooltip": "Date Format",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "ddmmyy",
    "visible": true
  },
  "daylightsaving": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Consider Daylight Saving",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Consider Daylight Saving",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "interval": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Update Interval (in Ms)",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Update Interval (in Ms)",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 5000,
    "visible": true
  },
  "locale": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "-",
      "desc": "Locale",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "enUS",
          "text": "enUS"
        },
        {
          "key": "deDE",
          "text": "deDE"
        },
        {
          "key": "default",
          "text": "default"
        }
      ],
      "tooltip": "Locale",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "deDE",
    "visible": true
  },
  "showtimezonename": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Show Timezone Name",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Show Timezone Name",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "timeformat": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "-",
      "desc": "Time Format",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "hhmmss",
          "text": "hhmmss"
        },
        {
          "key": "hhmm",
          "text": "hhmm"
        },
        {
          "key": "hide",
          "text": "hide"
        },
        {
          "key": "default",
          "text": "default"
        }
      ],
      "tooltip": "Time Format",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "hhmmss",
    "visible": true
  },
  "utcoffset": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "UTC Offset",
      "noAps": false,
      "noZtl": false,
      "tooltip": "UTC Offset",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "0",
    "visible": true
  }
};

	org_scn_community_require.knownComponents.basics.WorldTime.specInclude = 
{};

	org_scn_community_require.knownComponents.basics.WorldTime.specAbout = 
{
  "description": "WorldTime",
  "icon": "WorldTime.png",
  "title": "WorldTime 2.0",
  "topics": [
    {
      "content": "WorldTime",
      "title": "WorldTime"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	org_scn_community_require.knownComponents.basics.WorldTime.specComp = 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "div",
  "height": "40",
  "id": "WorldTime",
  "package": "basics",
  "parentControl": "sap.ui.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "WorldTime 2.0",
  "tooltip": "WorldTime",
  "width": "150"
};

})();// End of closure
