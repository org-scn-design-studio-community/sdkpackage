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
		id: "NotificationBar",
		name: "basics.NotificationBar",
		requireName: "basicsnotificationbar",
		fullComponentName: "org.scn.community.basics.NotificationBar",
		fullComponentPackage: "org.scn.community.basics/res/NotificationBar",
		script: "org.scn.community.basics/res/NotificationBar/NotificationBar",
		scriptSpec: "org.scn.community.basics/res/NotificationBar/NotificationBarSpec",
		min: false
	};

	spec.spec = 
{
  "categories": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Categories",
      "noAps": true,
      "noZtl": true,
      "tooltip": "The Notifications Pushed To Client",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "connectToCommonMessages": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Connect To Common Messages",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Setting This To TRUE Also The Common Messages From Messages Popup Will Be Handover To This Notification Bar",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "defaultImage": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Url For Default Image",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Default Image - Needed For Calculation Of The Url Prefix For Repository",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "deleteNotificationOnClick": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Delete Notification When Clicked",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Setting This To TRUE Deletes The Notification On Click Event",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "minimize": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Minimize function trigger",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Minimize function trigger",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "notifications": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Notifications",
      "noAps": true,
      "noZtl": true,
      "tooltip": "The Notifications Pushed To Client",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "removeAllOnMinimize": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Remove All Notifications When Minimized",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Setting This To TRUE Deletes All Notifications On Minimize Event",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "showOnNewNotifications": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Show Notification Bar When New Notifications Are Available",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Setting This To TRUE Shows Always Notification Bar When New Notifications Are Available",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "splitNotificationsByPriority": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Split Notifications By Priority",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Setting This To TRUE The Notifications Will Be Displayed In Categories By Priority",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Notification Bar",
  "icon": "NotificationBar.png",
  "title": "Notification Bar 2.0",
  "topics": [
    {
      "content": "Notification Bar",
      "title": "Notification Bar"
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
  "height": "40",
  "id": "NotificationBar",
  "package": "basics",
  "parentControl": "sap.ui.ux3.NotificationBar",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Notification Bar 2.0",
  "tooltip": "Notification Bar",
  "width": "auto"
};

	return spec;
});// End of closure
