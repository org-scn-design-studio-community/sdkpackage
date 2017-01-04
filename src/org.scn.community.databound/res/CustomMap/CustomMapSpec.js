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
      "cat": "Behavior",
      "desc": "Activate onMouseOver/Out",
      "order": 50,
      "tooltip": "Activate onMouseOver/Out",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "areaDeselectable": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Behavior",
      "desc": "Area are deselectable",
      "order": 40,
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "areaFillColor": {
    "opts": {
      "apsControl": "color",
      "cat": "Areas Properties-Global",
      "desc": "Fill Color",
      "noAps": false,
      "noZtl": false,
      "order": 10,
      "tooltip": "Fill Color to apply on all areas",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "#FF0000",
    "visible": true
  },
  "areaFillOpacity": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Areas Properties-Global",
      "desc": "Fill Opacity",
      "noAps": false,
      "noZtl": false,
      "order": 20,
      "tooltip": "Fill Opacity to apply on all areas",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": "0.5",
    "visible": true
  },
  "areaProperties": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"areaProperty": {
        "fillColor": {
          "desc": "Fill Color",
          "type": "String"
        },
        "fillOpacity": {
          "desc": "Fill Opacity",
          "type": "float"
        },
        "key": {
          "desc": "key of the area",
          "type": "String"
        },
        "sequence": "key,fillColor,fillOpacity,strokeColor,strokeOpacity,strokeWidth,tooltip",
        "strokeColor": {
          "desc": "Stroke Color",
          "type": "String"
        },
        "strokeOpacity": {
          "desc": "Stroke Opacity",
          "type": "float"
        },
        "strokeWidth": {
          "desc": "Stroke Width",
          "type": "int"
        },
        "tooltip": {
          "apsControl": "textarea",
          "desc": "Tooltip",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Areas Properties-Specific",
      "desc": "Area Specific Properties",
      "tooltip": "",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "areaSelectable": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Behavior",
      "desc": "Area are selectable",
      "order": 30,
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "areaStrokeColor": {
    "opts": {
      "apsControl": "color",
      "cat": "Areas Properties-Global",
      "desc": "Stroke Color",
      "noAps": false,
      "noZtl": false,
      "order": 40,
      "tooltip": "Stroke Color to apply on all areas",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "#000000",
    "visible": true
  },
  "areaStrokeOpacity": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Areas Properties-Global",
      "desc": "Stroke Opacity",
      "noAps": false,
      "noZtl": false,
      "order": 50,
      "tooltip": "Stroke Opacity to apply on all areas",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": "0.5",
    "visible": true
  },
  "areaStrokeWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Areas Properties-Global",
      "desc": "Stroke Width",
      "noAps": false,
      "noZtl": false,
      "order": 60,
      "tooltip": "Stroke Opacity to apply on all areas",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "1",
    "visible": true
  },
  "autoResize": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Behavior",
      "desc": "Auto resize",
      "order": 1,
      "tooltip": "Auto resize",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": false
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
      "desc": "Tooltip template (html + Mustache)",
      "order": 30,
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
    "options": {
      "includeAttributes": "true",
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "apsControl": "text",
      "cat": "DataBinding",
      "desc": "Data List",
      "noAps": true,
      "noZtl": false,
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
      "noZtl": false,
      "tooltip": "Reference Measure Selection",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataExemple": {
    "opts": {
      "apsControl": "textarea",
      "cat": "Tooltip",
      "desc": "Exemple of data",
      "noAps": false,
      "noZtl": true,
      "order": 50,
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "displayStroke": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Areas Properties-Global",
      "desc": "Activate Strokes",
      "order": 30,
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "displayTooltip": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Tooltip",
      "desc": "Display Tooltip",
      "order": 10,
      "tooltip": "",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "dynamicColorPalette": {
    "opts": {
      "apsControl": "palette",
      "cat": "Dyn. Colors",
      "desc": "Color Palette",
      "noAps": false,
      "noZtl": false,
      "order": 5,
      "tooltip": "Color palette to apply",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "enableAreaFill": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Areas Properties-Global",
      "desc": "enable Fill Properties",
      "order": 5,
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "enableDynamicColors": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Dyn. Colors",
      "desc": "Enable Dynamic Colors",
      "order": 1,
      "tooltip": "Based on the selected measure from Reference Measure",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "enableSpecificPropHighlight": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Areas Properties-Highlight",
      "desc": "Activate special properties on Highlight",
      "order": 1,
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "enableSpecificPropSelected": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Areas Properties-Selected",
      "desc": "Activate special properties when Selected",
      "order": 1,
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "highlightFillColor": {
    "opts": {
      "apsControl": "color",
      "cat": "Areas Properties-Highlight",
      "desc": "Fill Color",
      "noAps": false,
      "noZtl": false,
      "order": 10,
      "tooltip": "Fill Color on highlight",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "#FF0000",
    "visible": true
  },
  "highlightFillOpacity": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Areas Properties-Highlight",
      "desc": "Fill Opacity",
      "noAps": false,
      "noZtl": false,
      "order": 20,
      "tooltip": "Fill Opacity to apply on highlight",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": "0.5",
    "visible": true
  },
  "highlightStrokeColor": {
    "opts": {
      "apsControl": "color",
      "cat": "Areas Properties-Highlight",
      "desc": "Stroke Color",
      "noAps": false,
      "noZtl": false,
      "order": 40,
      "tooltip": "Stroke Color to apply on highlight",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "#000000",
    "visible": true
  },
  "highlightStrokeOpacity": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Areas Properties-Highlight",
      "desc": "Stroke Opacity",
      "noAps": false,
      "noZtl": false,
      "order": 50,
      "tooltip": "Stroke Opacity to apply on highlight",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": "0.5",
    "visible": true
  },
  "highlightStrokeWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Areas Properties-Highlight",
      "desc": "Stroke Width",
      "noAps": false,
      "noZtl": false,
      "order": 60,
      "tooltip": "Stroke Opacity to apply on highlight",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "1",
    "visible": true
  },
  "highlightedArea": {
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
      "cat": "Display*",
      "desc": "Image url of Base 64",
      "noAps": false,
      "noZtl": false,
      "order": 1,
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
      "cat": "Display*",
      "desc": "Associated map, same scaling as base image",
      "order": 10,
      "tooltip": "Map",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "mapDataKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display*",
      "desc": "Map key attribute",
      "noAps": false,
      "noZtl": false,
      "order": 5,
      "tooltip": "Which attribute from the HTML map will be mapped to the data",
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
  "onlySingleSelect": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Behavior",
      "desc": "Single Select",
      "order": 20,
      "tooltip": "Single Select",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "resizeDuration": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Behavior",
      "desc": "Resize Duration (ms)",
      "noAps": false,
      "noZtl": false,
      "order": 10,
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "500",
    "visible": false
  },
  "selectedAreas": {
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
  "selectedFillColor": {
    "opts": {
      "apsControl": "color",
      "cat": "Areas Properties-Selected",
      "desc": "Fill Color",
      "noAps": false,
      "noZtl": false,
      "order": 10,
      "tooltip": "Fill Color on selected",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "#FF0000",
    "visible": true
  },
  "selectedFillOpacity": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Areas Properties-Selected",
      "desc": "Fill Opacity",
      "noAps": false,
      "noZtl": false,
      "order": 20,
      "tooltip": "Fill Opacity to apply on selected",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": "0.5",
    "visible": true
  },
  "selectedStrokeColor": {
    "opts": {
      "apsControl": "color",
      "cat": "Areas Properties-Selected",
      "desc": "Stroke Color",
      "noAps": false,
      "noZtl": false,
      "order": 40,
      "tooltip": "Stroke Color to apply on selected",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "#000000",
    "visible": true
  },
  "selectedStrokeOpacity": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Areas Properties-Selected",
      "desc": "Stroke Opacity",
      "noAps": false,
      "noZtl": false,
      "order": 50,
      "tooltip": "Stroke Opacity to apply on selected",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": "0.5",
    "visible": true
  },
  "selectedStrokeWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Areas Properties-Selected",
      "desc": "Stroke Width",
      "noAps": false,
      "noZtl": false,
      "order": 60,
      "tooltip": "Stroke Opacity to apply on selected",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "1",
    "visible": true
  },
  "staticDisplay": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Areas Properties-Global",
      "desc": "Display all areas by default",
      "order": 3,
      "tooltip": "DDisplay all areas by default",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "tooltipMode": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Tooltip",
      "desc": "Tooltip override mode",
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
      "order": 20,
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
  "description": "Custom Map",
  "icon": "custom_map.png",
  "supportsFlatData": true,
  "title": "Custom Map",
  "topics": [
    {
      "content": "Build you own non geographical visualization with this component using an image and HTML maps. Tutorial: https://blogs.sap.com/2016/07/25/sdk-community-package-custom-map/",
      "title": "Custom Map"
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
  "modes": "commons m",
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
  "title": "Custom Map",
  "tooltip": "Custom Map",
  "width": "400"
};

	return spec;
});// End of closure
