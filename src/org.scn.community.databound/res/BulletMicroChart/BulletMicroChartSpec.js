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

	org_scn_community_require.knownComponents.databound.BulletMicroChart.spec = 
{
  "dataCellListActual": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Actual Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Actual Data List",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListForecast": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Forecast Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Forecast Data List",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListTarget": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Target Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Target Data List",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListThreshold1": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Treshold 2 Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Treshold 1 Data List",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListThreshold2": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Treshold 2 Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Treshold 2 Data List",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListThreshold3": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Treshold 3 Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Treshold 3 Data List",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListThreshold4": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Treshold 4 Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Treshold 4 Data List",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListThreshold5": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Treshold 5 Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Treshold 5 Data List",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "smallTest": {
    "opts": {
      "apsControl": "text",
      "cat": "UI5",
      "desc": "Actual Value Label",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If set, displays a specified label instead of the numeric actual value.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "Karol",
    "visible": true
  }
};

	org_scn_community_require.knownComponents.databound.BulletMicroChart.specInclude = 
{
  "actual": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"actual": {
        "color": {
          "desc": "color",
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "sequence": "key,color,value",
        "type": "Array",
        "value": {
          "desc": "value",
          "type": "String"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "UI5",
      "desc": "Actual",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The bullet chart actual data.",
      "ztlFunction": "-single",
      "ztlType": "SingleArray"
    },
    "template": "ObjectSingle",
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "actualValueLabel": {
    "opts": {
      "apsControl": "text",
      "cat": "UI5",
      "desc": "Actual Value Label",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If set, displays a specified label instead of the numeric actual value.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "contentWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "UI5",
      "desc": "Content Width",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The width of the chart. If it is not set, the size of the control is defined by the size property.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": true
  },
  "deltaValueLabel": {
    "opts": {
      "apsControl": "text",
      "cat": "UI5",
      "desc": "Delta Value Label",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If set, displays a specified label instead of the calculated numeric delta value.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "forecastValue": {
    "opts": {
      "apsControl": "text",
      "cat": "UI5",
      "desc": "Forecast Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The forecast value.",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 0,
    "visible": true
  },
  "maxValue": {
    "opts": {
      "apsControl": "text",
      "cat": "UI5",
      "desc": "Max Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If set, defines the right scale value for the bar chart.",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 0,
    "visible": true
  },
  "minValue": {
    "opts": {
      "apsControl": "text",
      "cat": "UI5",
      "desc": "Min Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If set, defines the left scale value for the bar chart.",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 0,
    "visible": true
  },
  "mode": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Unsorted",
      "choiceType": "BulletChartMode",
      "desc": "Mode",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Actual",
          "text": "Displays the Actual value"
        },
        {
          "key": "Delta",
          "text": "Displays delta between the Actual and Threshold values"
        }
      ],
      "tooltip": "Specifies whether to display the actual value itself or delta between the actual value and the target value. If not set, the default mode displays the actual value.",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Actual",
    "visible": true
  },
  "scale": {
    "opts": {
      "apsControl": "text",
      "cat": "UI5",
      "desc": "Scale",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The scaling suffix.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "scaleColor": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Unsorted",
      "choiceType": "CommonBackground",
      "desc": "Scale Colour",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Lightest",
          "text": "The lightest background color"
        },
        {
          "key": "ExtraLight",
          "text": "Extra light background color"
        },
        {
          "key": "Light",
          "text": "Light background color"
        },
        {
          "key": "MediumLight",
          "text": "Medium light background color"
        },
        {
          "key": "Medium",
          "text": "Medium background color"
        },
        {
          "key": "Dark",
          "text": "Dark background color"
        },
        {
          "key": "ExtraDark",
          "text": "Extra dark background color"
        },
        {
          "key": "Darkest",
          "text": "The darkest background color"
        }
      ],
      "tooltip": "Background color of the scale.",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "MediumLight",
    "visible": true
  },
  "showActualValue": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "UI5",
      "desc": "Show Actual Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If set to true, shows numeric actual value. This property only works in Actual mode.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "showDeltaValue": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "UI5",
      "desc": "Show Delta Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If set to true, shows the calculated delta value instead of the numeric actual value regardless of the showActualValue setting. This property works only in the Delta mode.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "showTargetValue": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "UI5",
      "desc": "Show Target Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If set to true, shows numeric target value.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "showValueMarker": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "UI5",
      "desc": "Show Value Marker",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If set to true, shows the value marker.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "size": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Unsorted",
      "choiceType": "InfoTileSize",
      "desc": "Size",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "XS",
          "text": "Extra small size"
        },
        {
          "key": "S",
          "text": "Small size"
        },
        {
          "key": "M",
          "text": "Medium size"
        },
        {
          "key": "L",
          "text": "Large size"
        },
        {
          "key": "Auto",
          "text": "The size of the tile depends on the device it is running on. It is large on desktop, medium on tablet and small on phone"
        }
      ],
      "tooltip": "Updates the size of the chart. If not set then the default size is applied based on the device tile.",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Auto",
    "visible": true
  },
  "targetValue": {
    "opts": {
      "apsControl": "text",
      "cat": "UI5",
      "desc": "Target Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The target value.",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 0,
    "visible": true
  },
  "targetValueLabel": {
    "opts": {
      "apsControl": "text",
      "cat": "UI5",
      "desc": "Target Value Label",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If set, displays a specified label instead of the numeric target value.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "threshold": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"threshold": {
        "color": {
          "desc": "color",
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "sequence": "key,color,value",
        "type": "Array",
        "value": {
          "desc": "value",
          "type": "String"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "UI5",
      "desc": "Thresholds",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The bullet chart thresholds data.",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "template": "ObjectArray",
    "type": "String",
    "value": "[]",
    "visible": true
  }
};

	org_scn_community_require.knownComponents.databound.BulletMicroChart.specAbout = 
{
  "description": "Bukket Micro Chart - Component for VIsualization of Data on small areas",
  "icon": "MicroChart.png",
  "title": "Bullet Micro Chart 2.0",
  "topics": [
    {
      "content": "This component can visualize the data on small area as bullet chart.",
      "title": "Bukket Micro Chart"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	org_scn_community_require.knownComponents.databound.BulletMicroChart.specComp = 
{
  "dataType": "DataCellList",
  "databound": true,
  "extends": "BulletChart",
  "extension": "ui5.BulletChart",
  "group": "ScnCommunityDataBound",
  "handlerType": "sapui5",
  "height": "200",
  "id": "BulletMicroChart",
  "package": "databound",
  "parentControl": "sap.ui.commons.layout.AbsoluteLayout",
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
  "title": "Bullet Micro Chart 2.0",
  "tooltip": "Bullet Micro Chart - Component for visualization of data on small areas.",
  "width": "400"
};

})();// End of closure
