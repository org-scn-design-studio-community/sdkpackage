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
		id: "Clipboard",
		name: "databound.Clipboard",
		requireName: "databoundclipboard",
		fullComponentName: "org.scn.community.databound.Clipboard",
		fullComponentPackage: "org.scn.community.databound/res/Clipboard",
		script: "org.scn.community.databound/res/Clipboard/Clipboard",
		scriptSpec: "org.scn.community.databound/res/Clipboard/ClipboardSpec",
		min: false
	};

	spec.spec = 
{
  "DIgnoreResults": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Data",
      "desc": "Ignore Results",
      "tooltip": "Ignore Results on Rows and Columns",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "DSeparator": {
    "opts": {
      "apsControl": "text",
      "cat": "Data",
      "desc": "Separator",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Separator",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": ";",
    "visible": true
  },
  "DShowKeys": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Data",
      "desc": "Show Keys instead of Texts",
      "tooltip": "Show Keys instead of Texts",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "DSwapAxes": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Data",
      "desc": "Swap Axes",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Swap Axes",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "DValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Custom",
      "desc": "Content",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Value",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "data": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Data",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Data List",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultSet",
    "value": "null",
    "visible": false
  },
  "picture": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Url For Picture",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For Picture Which Should Be Shown",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "default",
    "type": "Url",
    "value": "",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Clipboard - Allows you to copy content into Clipboard",
  "icon": "UI5Table.png",
  "title": "Clipboard",
  "topics": [{
    "content": "You can copy some content into clipboard, either data source (as CSV) or any content",
    "title": "Clipboard"
  }]
};

	spec.specComp = 
{
  "cssIncludes": [{"name": "res/_css/simple_formats.css"}],
  "databound": true,
  "extension": "DataComponent",
  "group": "ScnCommunityVisualizations",
  "handlerType": "div",
  "height": "32",
  "id": "Clipboard",
  "modes": "commons m",
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
  "title": "Clipboard",
  "tooltip": "Clipboard - Simple Clipboard",
  "width": "64"
};

	return spec;
});// End of closure
