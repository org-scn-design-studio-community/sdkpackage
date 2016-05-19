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
		id: "CustomMap",
		name: "databound.CustomMap",
		requireName: "databoundcustommap",
		fullComponentName: "org.scn.community.databound.CustomMap",
		fullComponentPackage: "org.scn.community.databound/res/CustomMap",
		script: "org.scn.community.databound/res/CustomMap/CustomMap",
		scriptSpec: "org.scn.community.databound/res/CustomMap/CustomMapSpec",
		min: false
	};

	spec.spec = 
{
  "activateOnMouseOverOut": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "0 - Activate onMouseOver/Out",
      "tooltip": "0 - Activate onMouseOver/Out",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "applyColors": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Colors",
      "desc": "1 - Override Mapster Colors with",
      "tooltip": "1 - Override Mapster Colors with",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "autoResize": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "0 - Auto resize",
      "tooltip": "0 - Auto resize",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": false
  },
  "colorPalette": {
    "opts": {
      "apsControl": "palette",
      "cat": "Colors",
      "desc": "2 - Color Palette",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Color palette to apply",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "contentTooltip": {
    "opts": {
      "apsConfig": {
        "lineNumbers": "true",
        "matchBrackets": "true",
        "mode": "text/html",
        "theme": "eclipse"
      },
      "apsControl": "codemirror",
      "cat": "Tooltip",
      "desc": "2 - Tooltip template (html + Mustache)",
      "tooltip": "new Tooltip (using Mustache template)",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "data": {
    "opts": {
      "apsControl": "text",
      "cat": "DataBinding",
      "desc": "Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Data List",
      "ztlFunction": "",
      "ztlType": "ResultSet"
    },
    "template": "default",
    "type": "ResultSet",
    "value": "",
    "visible": true
  },
  "dataCellList": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Reference Measure Selection",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Reference Measure Selection",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "hoveredZone": {
    "opts": {
      "apsControl": "text",
      "cat": "",
      "desc": "",
      "noAps": true,
      "noZtl": false,
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "image": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "1 - Image url of Base 64",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Image",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "map": {
    "opts": {
      "apsConfig": {
        "lineNumbers": "true",
        "matchBrackets": "true",
        "mode": "text/html",
        "theme": "eclipse"
      },
      "apsControl": "codemirror",
      "cat": "Display",
      "desc": "2 - Associated map, same scaling as base image",
      "tooltip": "Map",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "mapsterpropjson": {
    "opts": {
      "apsConfig": {
        "lineNumbers": true,
        "matchBrackets": true,
        "mode": "application/ld+json",
        "theme": "eclipse"
      },
      "apsControl": "codemirror",
      "cat": "Mapster Properties",
      "desc": "2 - Mapster properties",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
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
  "onMouseOut": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "onMouseOut",
      "noAps": true,
      "noZtl": true,
      "tooltip": "onMouseOut"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onMouseOver": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "onMouseOver",
      "noAps": true,
      "noZtl": true,
      "tooltip": "onMouseOver"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onShowTooltip": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Show Tooltip",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Show Tooltip"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onUpdate": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Update",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Update"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "resizeDuration": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Mapster Properties",
      "desc": "1 - Resize Duration (ms)",
      "noAps": false,
      "noZtl": false,
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "500",
    "visible": false
  },
  "selectedZones": {
    "opts": {
      "apsControl": "text",
      "cat": "",
      "desc": "",
      "noAps": true,
      "noZtl": false,
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "staticDisplay": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "0 - Display all areas by default",
      "tooltip": "0 - Display all areas by default",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "tooltipMode": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Tooltip",
      "desc": "1 - Tooltip override mode",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Default",
          "text": "Keep as defined"
        },
        {
          "key": "keep+template",
          "text": "Keep, Evaluate as Template"
        },
        {
          "key": "override",
          "text": "Override with Below Template"
        }
      ],
      "tooltip": "Tooltip override mode",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Choice",
    "type": "String",
    "value": "Default",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Data Table",
  "icon": "Table.png",
  "title": "Data Table 2.0",
  "topics": [
    {
      "content": "Data Table",
      "title": "Data Table"
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
  "group": "ScnCommunityVisualizations",
  "handlerType": "div",
  "height": "400",
  "id": "CustomMap",
  "package": "databound",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {"id": "databound/os/jquery.imagemapster/jquery.imagemapster"},
    {"id": "databound/os/d3v3/d3.min"},
    {"id": "shared/os/jsrender/jsrender"}
  ],
  "title": "Custom Map 0.0",
  "tooltip": "Custom Map",
  "width": "400"
};

	return spec;
});// End of closure
