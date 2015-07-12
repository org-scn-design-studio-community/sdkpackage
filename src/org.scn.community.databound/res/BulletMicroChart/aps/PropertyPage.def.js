ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "dataType": "DataCellList",
  "databound": true,
  "extends1ControlDs": "BulletChart.ds",
  "extends2Control": "BulletChart",
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
    },
    {
      "id": "sap_m_loader",
      "space": "known"
    },
    {
      "id": "sap_suite_loader",
      "space": "known"
    }
  ],
  "title": "Bullet Micro Chart 2.0",
  "tooltip": "Bullet Micro Chart - Component for visualization of data on small areas.",
  "width": "400"
},

"spec" : 
{}, 

"specInclude" : 
{
  "actual": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"actual": {
        "color": {
          "desc": "Colour",
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "sequence": "key,color,value",
        "type": "Array",
        "value": {
          "desc": "Value",
          "type": "String"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Actual",
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
      "cat": "Data-Labels",
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
      "cat": "Display",
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
  "dataCellListActual": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Content-Actual",
      "desc": "Actual Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Actual Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListForecastValue": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Display-Values",
      "desc": "Forecast Value Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Forecast Value Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListMaxValue": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Display-Values",
      "desc": "Max Value Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Max Value Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListMinValue": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Display-Values",
      "desc": "Min Value Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Min Value Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListTargetValue": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Display-Values",
      "desc": "Target Value Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Target Value Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListThresholds1": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Content-Thresholds",
      "desc": "1st Thresholds Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "1st Thresholds Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListThresholds2": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Content-Thresholds",
      "desc": "2nd Thresholds Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "2nd Thresholds Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListThresholds3": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Content-Thresholds",
      "desc": "3rd Thresholds Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "3rd Thresholds Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListThresholds4": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Content-Thresholds",
      "desc": "4th Thresholds Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "4th Thresholds Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListThresholds5": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Content-Thresholds",
      "desc": "5th Thresholds Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "5th Thresholds Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "deltaValueLabel": {
    "opts": {
      "apsControl": "text",
      "cat": "Data-Labels",
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
      "cat": "Data-Values",
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
      "cat": "Data-Values",
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
      "cat": "Data-Values",
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
      "cat": "Display",
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
      "cat": "Display",
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
      "cat": "Display",
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
      "cat": "Data-Values",
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
      "cat": "Data-Values",
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
      "cat": "Data-Values",
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
      "cat": "Data-Values",
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
      "cat": "Display",
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
      "cat": "Data-Values",
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
      "cat": "Data-Labels",
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
  "thresholds": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"thresholds": {
        "color": {
          "desc": "Colour",
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "sequence": "key,color,value",
        "type": "Array",
        "value": {
          "desc": "Value",
          "type": "String"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Thresholds",
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
  },
  "useActual": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Actual",
      "desc": "Use Manual 'Actual'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Actual' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useContentWidth": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Content Width'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Content Width' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useForecastValue": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Values",
      "desc": "Use Manual 'Forecast Value'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Forecast Value' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useMaxValue": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Values",
      "desc": "Use Manual 'Max Value'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Max Value' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useMinValue": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Values",
      "desc": "Use Manual 'Min Value'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Min Value' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useTargetValue": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Values",
      "desc": "Use Manual 'Target Value'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Target Value' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useThresholds": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Thresholds",
      "desc": "Use Manual 'Thresholds'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Thresholds' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  }
}, 

"specAbout" : 
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
}

};

	org_scn_community_component_Core(that, that.componentData);
    
	return that;
};