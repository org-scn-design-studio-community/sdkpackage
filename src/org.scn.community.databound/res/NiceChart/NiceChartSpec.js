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
		id: "NiceChart",
		name: "databound.NiceChart",
		requireName: "databoundnicechart",
		fullComponentName: "org.scn.community.databound.NiceChart",
		fullComponentPackage: "org.scn.community.databound/res/NiceChart",
		script: "org.scn.community.databound/res/NiceChart/NiceChart",
		scriptSpec: "org.scn.community.databound/res/NiceChart/NiceChartSpec",
		min: false
	};

	spec.spec = 
{
  "DChartType": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "ChartSimpleType",
      "desc": "Chart Type",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Line",
          "text": "Line"
        },
        {
          "key": "Bar",
          "text": "Bar"
        },
        {
          "key": "LineBar",
          "text": "LineBar"
        },
        {
          "key": "Radar",
          "text": "Radar"
        },
        {
          "key": "PolarArea",
          "text": "PolarArea"
        },
        {
          "key": "Pie",
          "text": "Pie"
        },
        {
          "key": "Doughnut",
          "text": "Doughnut"
        }
      ],
      "tooltip": "Chart Type",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Line",
    "visible": true
  },
  "DColorDistance": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Starting Colour Distance",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Starting Colour Distance",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 0.2,
    "visible": true
  },
  "DColorHue": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Starting Colour Hue",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Starting Colour Hue",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 120,
    "visible": true
  },
  "DColorPalette": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "ChartColorPalete",
      "desc": "Starting Colour Palette",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Mono",
          "text": "mono"
        },
        {
          "key": "Monochromatic",
          "text": "monochromatic"
        },
        {
          "key": "Contrast",
          "text": "contrast"
        },
        {
          "key": "Triade",
          "text": "triade"
        },
        {
          "key": "Tetrade",
          "text": "tetrade"
        },
        {
          "key": "Analogic",
          "text": "analogic"
        }
      ],
      "tooltip": "Starting Colour Palette",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Triade",
    "visible": true
  },
  "DLegendPosition": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "HorizontalAlign",
      "desc": "Legend Position",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Left",
          "text": "Left"
        },
        {
          "key": "Right",
          "text": "Right"
        }
      ],
      "tooltip": "Legend Position",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Right",
    "visible": true
  },
  "DLegendWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Width Of Legend In Px",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Width Of Legend In Px",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 200,
    "visible": true
  },
  "DMaxDataPoints": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Maximum Number Of Data Points",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Maximum Number Of Data Points",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 100,
    "visible": true
  },
  "DShowLegend": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Show Legend",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Show Legend",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "DSwapAxes": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
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
  "data": {
    "opts": {
      "apsControl": "text",
      "cat": "DataBinding",
      "desc": "Result Set",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Result Set",
      "ztlFunction": "-get",
      "ztlType": "ResultSet"
    },
    "template": "default",
    "type": "ResultSet",
    "value": "",
    "visible": false
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Nice Chart 2.0",
  "icon": "NiceChart.png",
  "title": "Nice Chart 2.0",
  "topics": [
    {
      "content": "Nice Chart 2.0",
      "title": "Nice Chart 2.0"
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
  "id": "NiceChart",
  "package": "databound",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "databound/os/chartjs/Chart",
      "space": "os"
    },
    {
      "id": "databound/os/color/ColorScheme",
      "space": "os"
    }
  ],
  "title": "Nice Chart 2.0",
  "tooltip": "Nice Chart 2.0",
  "width": "600"
};

	return spec;
});// End of closure
