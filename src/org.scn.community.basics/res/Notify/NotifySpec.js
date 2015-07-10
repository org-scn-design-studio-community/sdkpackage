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

	org_scn_community_require.knownComponents.basics.Notify.spec = 
{
  "delay": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Delay(Seconds)",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Delay(Seconds)",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "3",
    "visible": true
  },
  "layout": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Unsorted",
      "choiceType": "-",
      "desc": "Layout",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "top",
          "text": "top"
        },
        {
          "key": "top_Center",
          "text": "top_Center"
        },
        {
          "key": "top_Left",
          "text": "top_Left"
        },
        {
          "key": "top_Right",
          "text": "top_Right"
        },
        {
          "key": "center",
          "text": "center"
        },
        {
          "key": "center_Left",
          "text": "center_Left"
        },
        {
          "key": "center_Right",
          "text": "center_Right"
        },
        {
          "key": "bottom",
          "text": "bottom"
        },
        {
          "key": "bottom_Center",
          "text": "bottom_Center"
        },
        {
          "key": "bottom_Left",
          "text": "bottom_Left"
        },
        {
          "key": "bottom_Right",
          "text": "bottom_Right"
        }
      ],
      "tooltip": "Layout",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "center",
    "visible": true
  },
  "modal": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Modal",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Modal",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "true",
    "visible": true
  },
  "msgtext": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Msgtext",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Msgtext",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "msgtype": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Msgtype",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Msgtype",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "shownote": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Shownote",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Shownote",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  }
};

	org_scn_community_require.knownComponents.basics.Notify.specInclude = 
{};

	org_scn_community_require.knownComponents.basics.Notify.specAbout = 
{
  "description": "Notify - Leandro Cardoso",
  "icon": "Notify.png",
  "title": "Notify 2.0",
  "topics": [
    {
      "content": "Notify - Leandro Cardoso",
      "title": "Notify"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	org_scn_community_require.knownComponents.basics.Notify.specComp = 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "div",
  "height": "100",
  "id": "Notify",
  "package": "basics",
  "parentControl": "sap.ui.commons.layout.AbsoluteLayout",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "noty",
      "space": "known"
    }
  ],
  "title": "Notify 2.0",
  "tooltip": "Notify - Leandro Cardoso",
  "width": "100"
};

})();// End of closure
