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
		id: "AreaMicroChart",
		name: "databound.AreaMicroChart",
		requireName: "databoundareamicrochart",
		fullComponentName: "org.scn.community.databound.AreaMicroChart",
		fullComponentPackage: "org.scn.community.databound/res/AreaMicroChart",
		script: "org.scn.community.databound/res/AreaMicroChart/AreaMicroChart",
		scriptSpec: "org.scn.community.databound/res/AreaMicroChart/AreaMicroChartSpec",
		min: false
	};

	spec.spec = 
{};

	spec.specInclude = 
{
  "chart": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"chart": {
        "color": {
          "apsControl": "combobox",
          "desc": "Colour",
          "options": [
            {
              "key": "Neutral",
              "text": "Neutral InfoTile value color"
            },
            {
              "key": "Good",
              "text": "Good InfoTile value color"
            },
            {
              "key": "Critical",
              "text": "Critical InfoTile value color"
            },
            {
              "key": "Error",
              "text": "Error InfoTile value color"
            }
          ],
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "points": {
          "key": {
            "desc": "Unique Key",
            "type": "String"
          },
          "parentKey": {
            "desc": "Parent Key",
            "mode": "ztl",
            "type": "String"
          },
          "sequence": "parentKey,key,x,y",
          "type": "Array",
          "x": {
            "desc": "X",
            "type": "float"
          },
          "y": {
            "desc": "Y",
            "type": "float"
          }
        },
        "sequence": "key,color,points",
        "type": "Array"
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content-Chart",
      "desc": "Chart",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The configuration of the actual values line. The color property defines the color of the line. Points are rendered in the same sequence as in this aggregation.",
      "ztlFunction": "-single",
      "ztlType": "DoubleArray"
    },
    "origType": "MicroAreaChartItem",
    "template": "ObjectSingle-double",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"color\":\"Neutral\"},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM\",\"leaf\":true,\"x\":10,\"y\":40},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM1\",\"leaf\":true,\"x\":20,\"y\":90},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM2\",\"leaf\":true,\"x\":30,\"y\":40}]",
    "visible": true
  },
  "contentHeight": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Content Height",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The height of the chart.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 190,
    "visible": true
  },
  "contentWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Content Width",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The width of the chart.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 200,
    "visible": true
  },
  "dataCellListChart": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Chart Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Chart Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListFirstXLabel": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "First X Label Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "First X Label Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListFirstYLabel": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "First Y Label Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "First Y Label Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListInnerMaxThreshold": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Inner Max Threshold Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Inner Max Threshold Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListInnerMinThreshold": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Inner Min Threshold Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Inner Min Threshold Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListLastXLabel": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Last X Label Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Last X Label Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListLastYLabel": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Last Y Label Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Last Y Label Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListMaxLabel": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Max Label Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Max Label Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListMaxThreshold": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Max Threshold Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Max Threshold Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListMaxXValue": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Max X Value Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Max X Value Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListMaxYValue": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Max Y Value Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Max Y Value Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListMinLabel": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Min Label Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Min Label Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListMinThreshold": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Min Threshold Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Min Threshold Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListMinXValue": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Min X Value Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Min X Value Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListMinYValue": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Min Y Value Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Min Y Value Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
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
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "firstXLabel": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"firstXLabel": {
        "color": {
          "apsControl": "combobox",
          "desc": "Colour",
          "options": [
            {
              "key": "Neutral",
              "text": "Neutral InfoTile value color"
            },
            {
              "key": "Good",
              "text": "Good InfoTile value color"
            },
            {
              "key": "Critical",
              "text": "Critical InfoTile value color"
            },
            {
              "key": "Error",
              "text": "Error InfoTile value color"
            }
          ],
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "label": {
          "desc": "Label",
          "type": "String"
        },
        "sequence": "key,color,label",
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Labels-First X Label",
      "desc": "First X Label",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The label on X axis for the first point of the chart.",
      "ztlFunction": "-single",
      "ztlType": "SingleArray"
    },
    "origType": "MicroAreaChartLabel",
    "template": "ObjectSingle",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"color\":\"Good\",\"label\":\"First X\"}]",
    "visible": true
  },
  "firstYLabel": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"firstYLabel": {
        "color": {
          "apsControl": "combobox",
          "desc": "Colour",
          "options": [
            {
              "key": "Neutral",
              "text": "Neutral InfoTile value color"
            },
            {
              "key": "Good",
              "text": "Good InfoTile value color"
            },
            {
              "key": "Critical",
              "text": "Critical InfoTile value color"
            },
            {
              "key": "Error",
              "text": "Error InfoTile value color"
            }
          ],
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "label": {
          "desc": "Label",
          "type": "String"
        },
        "sequence": "key,color,label",
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Labels-First Y Label",
      "desc": "First Y Label",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The label on Y axis for the first point of the chart.",
      "ztlFunction": "-single",
      "ztlType": "SingleArray"
    },
    "origType": "MicroAreaChartLabel",
    "template": "ObjectSingle",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"color\":\"Good\",\"label\":\"First Y\"}]",
    "visible": true
  },
  "innerMaxThreshold": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"innerMaxThreshold": {
        "color": {
          "apsControl": "combobox",
          "desc": "Colour",
          "options": [
            {
              "key": "Neutral",
              "text": "Neutral InfoTile value color"
            },
            {
              "key": "Good",
              "text": "Good InfoTile value color"
            },
            {
              "key": "Critical",
              "text": "Critical InfoTile value color"
            },
            {
              "key": "Error",
              "text": "Error InfoTile value color"
            }
          ],
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "points": {
          "key": {
            "desc": "Unique Key",
            "type": "String"
          },
          "parentKey": {
            "desc": "Parent Key",
            "mode": "ztl",
            "type": "String"
          },
          "sequence": "parentKey,key,x,y",
          "type": "Array",
          "x": {
            "desc": "X",
            "type": "float"
          },
          "y": {
            "desc": "Y",
            "type": "float"
          }
        },
        "sequence": "key,color,points",
        "type": "Array"
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content-Thresholds-Inner Max Threshold",
      "desc": "Inner Max Threshold",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The configuration of the upper line of the inner threshold area. The color property defines the color of the area between inner thresholds. For rendering of the inner threshold area, both innerMaxThreshold and innerMinThreshold aggregations must be defined. Points are rendered in the same sequence as in this aggregation.",
      "ztlFunction": "-single",
      "ztlType": "DoubleArray"
    },
    "origType": "MicroAreaChartItem",
    "template": "ObjectSingle-double",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"color\":\"Neutral\"},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM\",\"leaf\":true,\"x\":10,\"y\":70},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM1\",\"leaf\":true,\"x\":20,\"y\":60},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM2\",\"leaf\":true,\"x\":30,\"y\":80}]",
    "visible": true
  },
  "innerMinThreshold": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"innerMinThreshold": {
        "color": {
          "apsControl": "combobox",
          "desc": "Colour",
          "options": [
            {
              "key": "Neutral",
              "text": "Neutral InfoTile value color"
            },
            {
              "key": "Good",
              "text": "Good InfoTile value color"
            },
            {
              "key": "Critical",
              "text": "Critical InfoTile value color"
            },
            {
              "key": "Error",
              "text": "Error InfoTile value color"
            }
          ],
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "points": {
          "key": {
            "desc": "Unique Key",
            "type": "String"
          },
          "parentKey": {
            "desc": "Parent Key",
            "mode": "ztl",
            "type": "String"
          },
          "sequence": "parentKey,key,x,y",
          "type": "Array",
          "x": {
            "desc": "X",
            "type": "float"
          },
          "y": {
            "desc": "Y",
            "type": "float"
          }
        },
        "sequence": "key,color,points",
        "type": "Array"
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content-Thresholds-Inner Min Threshold",
      "desc": "Inner Min Threshold",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The configuration of the bottom line of the inner threshold area. The color property is ignored. For rendering of the inner threshold area, both innerMaxThreshold and innerMinThreshold aggregations must be defined. Points are rendered in the same sequence as in this aggregation.",
      "ztlFunction": "-single",
      "ztlType": "DoubleArray"
    },
    "origType": "MicroAreaChartItem",
    "template": "ObjectSingle-double",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"color\":\"Error\"},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM\",\"leaf\":true,\"x\":10,\"y\":40},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM1\",\"leaf\":true,\"x\":20,\"y\":40},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM2\",\"leaf\":true,\"x\":30,\"y\":60}]",
    "visible": true
  },
  "lastXLabel": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"lastXLabel": {
        "color": {
          "apsControl": "combobox",
          "desc": "Colour",
          "options": [
            {
              "key": "Neutral",
              "text": "Neutral InfoTile value color"
            },
            {
              "key": "Good",
              "text": "Good InfoTile value color"
            },
            {
              "key": "Critical",
              "text": "Critical InfoTile value color"
            },
            {
              "key": "Error",
              "text": "Error InfoTile value color"
            }
          ],
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "label": {
          "desc": "Label",
          "type": "String"
        },
        "sequence": "key,color,label",
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Labels-Last X Label",
      "desc": "Last X Label",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The label on X axis for the last point of the chart.",
      "ztlFunction": "-single",
      "ztlType": "SingleArray"
    },
    "origType": "MicroAreaChartLabel",
    "template": "ObjectSingle",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"color\":\"Good\",\"label\":\"Last X\"}]",
    "visible": true
  },
  "lastYLabel": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"lastYLabel": {
        "color": {
          "apsControl": "combobox",
          "desc": "Colour",
          "options": [
            {
              "key": "Neutral",
              "text": "Neutral InfoTile value color"
            },
            {
              "key": "Good",
              "text": "Good InfoTile value color"
            },
            {
              "key": "Critical",
              "text": "Critical InfoTile value color"
            },
            {
              "key": "Error",
              "text": "Error InfoTile value color"
            }
          ],
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "label": {
          "desc": "Label",
          "type": "String"
        },
        "sequence": "key,color,label",
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Labels-Last Y Label",
      "desc": "Last Y Label",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The label on Y axis for the last point of the chart.",
      "ztlFunction": "-single",
      "ztlType": "SingleArray"
    },
    "origType": "MicroAreaChartLabel",
    "template": "ObjectSingle",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"color\":\"Good\",\"label\":\"Last Y\"}]",
    "visible": true
  },
  "maxLabel": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"maxLabel": {
        "color": {
          "apsControl": "combobox",
          "desc": "Colour",
          "options": [
            {
              "key": "Neutral",
              "text": "Neutral InfoTile value color"
            },
            {
              "key": "Good",
              "text": "Good InfoTile value color"
            },
            {
              "key": "Critical",
              "text": "Critical InfoTile value color"
            },
            {
              "key": "Error",
              "text": "Error InfoTile value color"
            }
          ],
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "label": {
          "desc": "Label",
          "type": "String"
        },
        "sequence": "key,color,label",
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Labels-Max Label",
      "desc": "Max Label",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The label for the maximum point of the chart.",
      "ztlFunction": "-single",
      "ztlType": "SingleArray"
    },
    "origType": "MicroAreaChartLabel",
    "template": "ObjectSingle",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"color\":\"Good\",\"label\":\"Max\"}]",
    "visible": true
  },
  "maxThreshold": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"maxThreshold": {
        "color": {
          "apsControl": "combobox",
          "desc": "Colour",
          "options": [
            {
              "key": "Neutral",
              "text": "Neutral InfoTile value color"
            },
            {
              "key": "Good",
              "text": "Good InfoTile value color"
            },
            {
              "key": "Critical",
              "text": "Critical InfoTile value color"
            },
            {
              "key": "Error",
              "text": "Error InfoTile value color"
            }
          ],
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "points": {
          "key": {
            "desc": "Unique Key",
            "type": "String"
          },
          "parentKey": {
            "desc": "Parent Key",
            "mode": "ztl",
            "type": "String"
          },
          "sequence": "parentKey,key,x,y",
          "type": "Array",
          "x": {
            "desc": "X",
            "type": "float"
          },
          "y": {
            "desc": "Y",
            "type": "float"
          }
        },
        "sequence": "key,color,points",
        "type": "Array"
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content-Thresholds-Max Threshold",
      "desc": "Max Threshold",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The configuration of the max threshold area. The color property defines the color of the area above the max threshold line. Points are rendered in the same sequence as in this aggregation.",
      "ztlFunction": "-single",
      "ztlType": "DoubleArray"
    },
    "origType": "MicroAreaChartItem",
    "template": "ObjectSingle-double",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"color\":\"Good\"},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM\",\"leaf\":true,\"x\":10,\"y\":30},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM1\",\"leaf\":true,\"x\":20,\"y\":20},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM2\",\"leaf\":true,\"x\":30,\"y\":10}]",
    "visible": true
  },
  "maxXValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Data-Values",
      "desc": "Max X Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If this property is set it indicates the value X axis ends with.",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 30,
    "visible": true
  },
  "maxYValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Data-Values",
      "desc": "Max Y Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If this property is set it indicates the value Y axis ends with.",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 100,
    "visible": true
  },
  "minLabel": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"minLabel": {
        "color": {
          "apsControl": "combobox",
          "desc": "Colour",
          "options": [
            {
              "key": "Neutral",
              "text": "Neutral InfoTile value color"
            },
            {
              "key": "Good",
              "text": "Good InfoTile value color"
            },
            {
              "key": "Critical",
              "text": "Critical InfoTile value color"
            },
            {
              "key": "Error",
              "text": "Error InfoTile value color"
            }
          ],
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "label": {
          "desc": "Label",
          "type": "String"
        },
        "sequence": "key,color,label",
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Labels-Min Label",
      "desc": "Min Label",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The label for the minimum point of the chart.",
      "ztlFunction": "-single",
      "ztlType": "SingleArray"
    },
    "origType": "MicroAreaChartLabel",
    "template": "ObjectSingle",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"color\":\"Good\",\"label\":\"Min\"}]",
    "visible": true
  },
  "minThreshold": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"minThreshold": {
        "color": {
          "apsControl": "combobox",
          "desc": "Colour",
          "options": [
            {
              "key": "Neutral",
              "text": "Neutral InfoTile value color"
            },
            {
              "key": "Good",
              "text": "Good InfoTile value color"
            },
            {
              "key": "Critical",
              "text": "Critical InfoTile value color"
            },
            {
              "key": "Error",
              "text": "Error InfoTile value color"
            }
          ],
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "points": {
          "key": {
            "desc": "Unique Key",
            "type": "String"
          },
          "parentKey": {
            "desc": "Parent Key",
            "mode": "ztl",
            "type": "String"
          },
          "sequence": "parentKey,key,x,y",
          "type": "Array",
          "x": {
            "desc": "X",
            "type": "float"
          },
          "y": {
            "desc": "Y",
            "type": "float"
          }
        },
        "sequence": "key,color,points",
        "type": "Array"
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content-Thresholds-Min Threshold",
      "desc": "Min Threshold",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The configuration of the min threshold area. The color property defines the color of the area below the min threshold line. Points are rendered in the same sequence as in this aggregation.",
      "ztlFunction": "-single",
      "ztlType": "DoubleArray"
    },
    "origType": "MicroAreaChartItem",
    "template": "ObjectSingle-double",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"color\":\"Error\"},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM\",\"leaf\":true,\"x\":10,\"y\":30},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM1\",\"leaf\":true,\"x\":20,\"y\":20},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM2\",\"leaf\":true,\"x\":30,\"y\":10}]",
    "visible": true
  },
  "minXValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Data-Values",
      "desc": "Min X Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If this property is set it indicates the value X axis starts with.",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 10,
    "visible": true
  },
  "minYValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Data-Values",
      "desc": "Min Y Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If this property is set it indicates the value Y axis starts with.",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 0,
    "visible": true
  },
  "target": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"target": {
        "color": {
          "apsControl": "combobox",
          "desc": "Colour",
          "options": [
            {
              "key": "Neutral",
              "text": "Neutral InfoTile value color"
            },
            {
              "key": "Good",
              "text": "Good InfoTile value color"
            },
            {
              "key": "Critical",
              "text": "Critical InfoTile value color"
            },
            {
              "key": "Error",
              "text": "Error InfoTile value color"
            }
          ],
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "points": {
          "key": {
            "desc": "Unique Key",
            "type": "String"
          },
          "parentKey": {
            "desc": "Parent Key",
            "mode": "ztl",
            "type": "String"
          },
          "sequence": "parentKey,key,x,y",
          "type": "Array",
          "x": {
            "desc": "X",
            "type": "float"
          },
          "y": {
            "desc": "Y",
            "type": "float"
          }
        },
        "sequence": "key,color,points",
        "type": "Array"
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content-Target",
      "desc": "Target",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The configuration of the target values line. The color property defines the color of the line. Points are rendered in the same sequence as in this aggregation.",
      "ztlFunction": "-single",
      "ztlType": "DoubleArray"
    },
    "origType": "MicroAreaChartItem",
    "template": "ObjectSingle-double",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"color\":\"Good\"},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM\",\"leaf\":true,\"x\":10,\"y\":20},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM1\",\"leaf\":true,\"x\":20,\"y\":80},{\"parentKey\":\"ELEMENT\",\"key\":\"ELEMENT_ITEM2\",\"leaf\":true,\"x\":30,\"y\":55}]",
    "visible": true
  },
  "useChart": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Chart",
      "desc": "Use Manual 'Chart'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Chart' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useContentHeight": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Content Height'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Content Height' will be used.",
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
  "useFirstXLabel": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Labels-First X Label",
      "desc": "Use Manual 'First X Label'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'First X Label' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useFirstYLabel": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Labels-First Y Label",
      "desc": "Use Manual 'First Y Label'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'First Y Label' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useInnerMaxThreshold": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Thresholds-Inner Max Threshold",
      "desc": "Use Manual 'Inner Max Threshold'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Inner Max Threshold' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useInnerMinThreshold": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Thresholds-Inner Min Threshold",
      "desc": "Use Manual 'Inner Min Threshold'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Inner Min Threshold' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useLastXLabel": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Labels-Last X Label",
      "desc": "Use Manual 'Last X Label'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Last X Label' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useLastYLabel": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Labels-Last Y Label",
      "desc": "Use Manual 'Last Y Label'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Last Y Label' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useMaxLabel": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Labels-Max Label",
      "desc": "Use Manual 'Max Label'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Max Label' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useMaxThreshold": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Thresholds-Max Threshold",
      "desc": "Use Manual 'Max Threshold'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Max Threshold' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useMaxXValue": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Data-Values",
      "desc": "Use Manual 'Max X Value'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Max X Value' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useMaxYValue": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Data-Values",
      "desc": "Use Manual 'Max Y Value'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Max Y Value' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useMinLabel": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Labels-Min Label",
      "desc": "Use Manual 'Min Label'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Min Label' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useMinThreshold": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Thresholds-Min Threshold",
      "desc": "Use Manual 'Min Threshold'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Min Threshold' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useMinXValue": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Data-Values",
      "desc": "Use Manual 'Min X Value'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Min X Value' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useMinYValue": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Data-Values",
      "desc": "Use Manual 'Min Y Value'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Min Y Value' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useTarget": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Target",
      "desc": "Use Manual 'Target'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Target' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "view": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "MicroAreaChartView",
      "desc": "View",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Normal",
          "text": "The view with labels on the top and bottom"
        },
        {
          "key": "Wide",
          "text": "The view with labels on the left and right"
        }
      ],
      "tooltip": "The view of the chart.",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Normal",
    "visible": true
  }
};

	spec.specAbout = 
{
  "description": "Area Micro Chart - Component for Visualization of Data on small areas",
  "icon": "AreaMicroChart.png",
  "title": "Area Micro Chart 2.0",
  "topics": [
    {
      "content": "This component can visualize the data on small area as area or line chart.",
      "title": "Area Micro Chart"
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
  "databound": true,
  "extends1ControlDs": "MicroAreaChart.ds",
  "extends2Control": "MicroAreaChart",
  "extension": "ui5.MicroAreaChart",
  "generatedJsFile": "true",
  "group": "ScnCommunityVisualizations",
  "handlerType": "sapui5",
  "height": "200",
  "id": "AreaMicroChart",
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
      "id": "common_unified",
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
  "title": "Area Micro Chart 2.0",
  "tooltip": "Area Micro Chart - Component for visualization of data on small areas.",
  "width": "400"
};

	return spec;
});// End of closure
