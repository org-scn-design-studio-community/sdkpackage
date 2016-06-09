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
		id: "Breadcrumbs",
		name: "databound.Breadcrumbs",
		requireName: "databoundbreadcrumbs",
		fullComponentName: "org.scn.community.databound.Breadcrumbs",
		fullComponentPackage: "org.scn.community.databound/res/Breadcrumbs",
		script: "org.scn.community.databound/res/Breadcrumbs/Breadcrumbs",
		scriptSpec: "org.scn.community.databound/res/Breadcrumbs/BreadcrumbsSpec",
		min: false
	};

	spec.spec = 
{};

	spec.specInclude = 
{
  "cleanAllLinks": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Internal",
      "desc": "Clean All Links",
      "noAps": true,
      "noZtl": false,
      "refDesc": "Links",
      "refProperty": "links",
      "refValue": "[]",
      "tooltip": "Clean All Links",
      "ztlFunction": "-clean",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": false
  },
  "contentWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Content Width",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Width of the component (CSS-size such as % or px). When it is set, this is the exact size. When left blank, the text defines the size.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": false
  },
  "currentLocationText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Current Location Text",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Determines the text of current/last element in the Breadcrumbs path.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "Home",
    "visible": true
  },
  "dataCellListLinks": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Links Data List [Multiple]",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Links Data List [Multiple]",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "links": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"links": {
        "emphasized": {
          "apsControl": "checkbox",
          "desc": "Emphasized",
          "type": "boolean,optional"
        },
        "enabled": {
          "apsControl": "checkbox",
          "defaultValue": "true",
          "desc": "Enabled",
          "type": "boolean,optional"
        },
        "href": {
          "desc": "Href",
          "type": "String,optional"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "sequence": "key,text,textAlign,textDirection,wrapping,emphasized,enabled,subtle,href,target",
        "subtle": {
          "apsControl": "checkbox",
          "desc": "Subtle",
          "type": "boolean,optional"
        },
        "target": {
          "desc": "Target",
          "type": "String,optional"
        },
        "text": {
          "desc": "Text",
          "type": "String"
        },
        "textAlign": {
          "apsControl": "combobox",
          "desc": "Text Align",
          "options": [
            {
              "key": "Begin",
              "text": "Locale-specific positioning at the beginning of the line"
            },
            {
              "key": "End",
              "text": "Locale-specific positioning at the end of the line"
            },
            {
              "key": "Left",
              "text": "Hard option for left alignment"
            },
            {
              "key": "Right",
              "text": "Hard option for right alignment"
            },
            {
              "key": "Center",
              "text": "Centered text alignment"
            },
            {
              "key": "Initial",
              "text": "Sets no text align, so the browser default is used"
            }
          ],
          "type": "String,optional"
        },
        "textDirection": {
          "apsControl": "combobox",
          "desc": "Text Direction",
          "options": [
            {
              "key": "LTR",
              "text": "Specifies left-to-right text direction"
            },
            {
              "key": "RTL",
              "text": "Specifies right-to-left text direction"
            },
            {
              "key": "Inherit",
              "text": "Inherits the direction from its parent control/container"
            }
          ],
          "type": "String,optional"
        },
        "type": "Array",
        "wrapping": {
          "apsControl": "checkbox",
          "desc": "Wrapping",
          "type": "boolean,optional"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Links",
      "desc": "Links",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Private aggregations",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "origType": "Link",
    "template": "ObjectArray",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT_1\",\"leaf\":false,\"text\":\"First Level\",\"contentWidth\":\"400px\",\"subtle\":false,\"textAlign\":\"Begin\",\"textDirection\":\"LTR\",\"wrapping\":false,\"enabled\":false},{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT2\",\"leaf\":false,\"text\":\"Second Level\",\"href\":\"\",\"emphasized\":false,\"enabled\":true}]",
    "visible": true
  },
  "onPressed": {
    "opts": {
      "cat": "Events",
      "desc": "On Pressed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on The event is fired when the user chooses the bullet chart."
    },
    "template": "ScriptText",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "pressedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Pressed Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Pressed Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "origType": "EventKey",
    "template": "EventKey",
    "type": "String",
    "value": "",
    "visible": false
  },
  "useContentWidth": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Content Width'",
      "noAps": true,
      "noZtl": true,
      "tooltip": "If checked, the property 'Content Width' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": false
  },
  "useLinks": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Links",
      "desc": "Use Manual 'Links'",
      "noAps": true,
      "noZtl": true,
      "tooltip": "If checked, the property 'Links' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": false
  }
};

	spec.specAbout = 
{
  "description": "Breadcrumbs - Navigation Links",
  "icon": "Breadcrumbs.png",
  "title": "Breadcrumbs",
  "topics": [
    {
      "content": "Enables users to navigate between items by providing a list of links to previous steps in the user's navigation path. The last three steps can be accessed as links directly The remaining links prior to them are available in a drop-down menu.",
      "title": "Breadcrumbs"
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
  "databound": false,
  "extends1ControlDs": "Breadcrumbs.ds",
  "extends2Control": "Breadcrumbs",
  "extends3ControlEvents": "Breadcrumbs.events",
  "extension": "ui5.Breadcrumbs",
  "generatedJsFile": "true",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "32",
  "id": "Breadcrumbs",
  "modes": "m",
  "package": "databound",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Bread Crumbs",
  "tooltip": "BreadCrumbs - Component for navigation with links.",
  "ui5package": "sap.m",
  "width": "300"
};

	return spec;
});// End of closure
