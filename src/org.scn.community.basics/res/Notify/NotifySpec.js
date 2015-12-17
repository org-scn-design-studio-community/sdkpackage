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
		id: "Notify",
		name: "basics.Notify",
		requireName: "basicsnotify",
		fullComponentName: "org.scn.community.basics.Notify",
		fullComponentPackage: "org.scn.community.basics/res/Notify",
		script: "org.scn.community.basics/res/Notify/Notify",
		scriptSpec: "org.scn.community.basics/res/Notify/NotifySpec",
		min: false
	};

	spec.spec = 
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
          "key": "topCenter",
          "text": "topCenter"
        },
        {
          "key": "topLeft",
          "text": "topLeft"
        },
        {
          "key": "topRight",
          "text": "topRight"
        },
        {
          "key": "center",
          "text": "center"
        },
        {
          "key": "centerLeft",
          "text": "centerLeft"
        },
        {
          "key": "centerRight",
          "text": "centerRight"
        },
        {
          "key": "bottom",
          "text": "bottom"
        },
        {
          "key": "bottomCenter",
          "text": "bottomCenter"
        },
        {
          "key": "bottomLeft",
          "text": "bottomLeft"
        },
        {
          "key": "bottomRight",
          "text": "bottomRight"
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

	spec.specInclude = 
{};

	spec.specAbout = 
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

	spec.specComp = 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "div",
  "height": "100",
  "id": "Notify",
  "package": "basics",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
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

	return spec;
});// End of closure
