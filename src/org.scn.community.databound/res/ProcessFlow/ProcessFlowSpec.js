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
		id: "ProcessFlow",
		name: "databound.ProcessFlow",
		requireName: "databoundprocessflow",
		fullComponentName: "org.scn.community.databound.ProcessFlow",
		fullComponentPackage: "org.scn.community.databound/res/ProcessFlow",
		script: "org.scn.community.databound/res/ProcessFlow/ProcessFlow",
		scriptSpec: "org.scn.community.databound/res/ProcessFlow/ProcessFlowSpec",
		min: false
	};

	spec.spec = 
{};

	spec.specInclude = 
{
  "connections": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"connections": {
        "drawData": {
          "desc": "Draw Data [Array]",
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "sequence": "key,drawData,zoomLevel",
        "type": "Array",
        "zoomLevel": {
          "apsControl": "combobox",
          "desc": "Zoom Level",
          "options": [
            {
              "key": "One",
              "text": "zoom level for least details - only icon is displayed"
            },
            {
              "key": "Two",
              "text": "The detail is icon, title text and no additional texts"
            },
            {
              "key": "Three",
              "text": "The full detail view of the node but with smaller font size"
            },
            {
              "key": "Four",
              "text": "The full details with normal font size"
            }
          ],
          "type": "String"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Connections",
      "desc": "Connections",
      "noAps": false,
      "noZtl": false,
      "tooltip": "This is the aggregation of the connection controls put         into the table to the calculated cells.",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "origType": "ProcessFlowConnection",
    "template": "ObjectArray",
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "dataCellListConnections": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Connections Data List [Multiple]",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Connections Data List [Multiple]",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListLanes": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Lanes Data List [Multiple]",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Lanes Data List [Multiple]",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListNodes": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Nodes Data List [Multiple]",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Nodes Data List [Multiple]",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "foldedCorners": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Folded Corners",
      "noAps": false,
      "noZtl": false,
      "tooltip": "This property defines the folded corners for the single node control. The following values exist: - true: means folded corner",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "headerPressedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Header Pressed Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "HeaderPressed Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "origType": "EventKey",
    "template": "EventKey",
    "type": "String",
    "value": "",
    "visible": false
  },
  "lanes": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"lanes": {
        "iconSrc": {
          "desc": "Icon Src",
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "laneId": {
          "desc": "Lane Id",
          "type": "String"
        },
        "position": {
          "desc": "Position",
          "type": "int"
        },
        "sequence": "key,iconSrc,laneId,position,state,text,zoomLevel",
        "state": {
          "desc": "State",
          "type": "String"
        },
        "text": {
          "desc": "Text",
          "type": "String"
        },
        "type": "Array",
        "zoomLevel": {
          "apsControl": "combobox",
          "desc": "Zoom Level",
          "options": [
            {
              "key": "One",
              "text": "zoom level for least details - only icon is displayed"
            },
            {
              "key": "Two",
              "text": "The detail is icon, title text and no additional texts"
            },
            {
              "key": "Three",
              "text": "The full detail view of the node but with smaller font size"
            },
            {
              "key": "Four",
              "text": "The full details with normal font size"
            }
          ],
          "type": "String"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Lanes",
      "desc": "Lanes",
      "noAps": false,
      "noZtl": false,
      "tooltip": "This is a header of the table for the process flow control.",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "origType": "ProcessFlowLaneHeader",
    "template": "ObjectArray",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"laneId\":\"id0\",\"iconSrc\":\"sap-icon://order-status\",\"state\":\"\",\"text\":\"In Order\",\"position\":0,\"zoomLevel\":\"One\"},{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT1\",\"leaf\":false,\"laneId\":\"id1\",\"iconSrc\":\"sap-icon://payment-approval\",\"text\":\"In Delivery\",\"position\":1,\"state\":\"Planned\"}]",
    "visible": true
  },
  "nodePressedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Node Pressed Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "NodePressed Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "origType": "EventKey",
    "template": "EventKey",
    "type": "String",
    "value": "",
    "visible": false
  },
  "nodes": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"nodes": {
        "children": {
          "desc": "Children [Array]",
          "type": "String"
        },
        "focused": {
          "desc": "Focused",
          "type": "boolean"
        },
        "highlighted": {
          "desc": "Highlighted",
          "type": "boolean"
        },
        "isTitleClickable": {
          "desc": "Is Title Clickable",
          "type": "boolean"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "laneId": {
          "desc": "Lane Id",
          "type": "String"
        },
        "nodeId": {
          "desc": "Node Id",
          "type": "String"
        },
        "sequence": "key,children,focused,highlighted,isTitleClickable,laneId,nodeId,state,stateText,tag,texts,title,titleAbbreviation",
        "state": {
          "apsControl": "combobox",
          "desc": "State",
          "options": [
            {
              "key": "Positive",
              "text": "Positive status for a Created document: document is done, finished, solved "
            },
            {
              "key": "Negative",
              "text": "Negative status for a Created document: a document has an issue"
            },
            {
              "key": "Planned",
              "text": "Planned status for a document: a document is planned"
            },
            {
              "key": "Neutral",
              "text": "Neutral status for a Created document: document is in progress "
            },
            {
              "key": "PlannedNegative",
              "text": "Planned document has an issue"
            }
          ],
          "type": "String"
        },
        "stateText": {
          "desc": "State Text",
          "type": "String"
        },
        "tag": {
          "desc": "Tag",
          "type": "String"
        },
        "texts": {
          "desc": "Texts [Array]",
          "type": "String"
        },
        "title": {
          "desc": "Title",
          "type": "String"
        },
        "titleAbbreviation": {
          "desc": "Title Abbreviation",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Nodes",
      "desc": "Nodes",
      "noAps": false,
      "noZtl": false,
      "tooltip": "this is the aggregation of the node controls put into         the table to the calculated cells.",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "origType": "ProcessFlowNode",
    "template": "ObjectArray",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"children\":\"[2,3]\",\"nodeId\":\"1\",\"state\":\"Neutral\",\"stateText\":\"Positive Status\",\"title\":\"Sales Order 1\",\"laneId\":\"id0\",\"focused\":true},{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT1\",\"leaf\":false,\"nodeId\":\"2\",\"title\":\"Delivery 13\",\"stateText\":\"Not Delivered Yet!\",\"state\":\"Negative\",\"texts\":\"this is delivery document\",\"laneId\":\"id1\",\"children\":\"\",\"highlighted\":false,\"focused\":false},{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT2\",\"leaf\":false,\"nodeId\":\"3\",\"laneId\":\"id1\",\"state\":\"Positive\",\"stateText\":\"Positive\",\"title\":\"Positive\",\"texts\":\"Positive\",\"children\":\"\"}]",
    "visible": true
  },
  "onErrored": {
    "opts": {
      "cat": "Events",
      "desc": "On  Errored",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on This parameters contains the localized string with error message."
    },
    "template": "ScriptText",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onErroredKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": " Errored Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Errored Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "origType": "EventKey",
    "template": "EventKey",
    "type": "String",
    "value": "",
    "visible": false
  },
  "onHeaderPressed": {
    "opts": {
      "cat": "Events",
      "desc": "On Header Pressed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on This object represents the wrapped process flow lane header object."
    },
    "template": "ScriptText",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onNodePressed": {
    "opts": {
      "cat": "Events",
      "desc": "On Node Pressed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on This object represents the wrapped process flow node object."
    },
    "template": "ScriptText",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "scrollable": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Scrollable",
      "noAps": false,
      "noZtl": false,
      "tooltip": "By default, the control body is embedded into a scroll container of fixed size, so the user can put the control into a fixe sized layout.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useConnections": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Connections",
      "desc": "Use Manual 'Connections'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Connections' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useLanes": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Lanes",
      "desc": "Use Manual 'Lanes'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Lanes' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useNodes": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Nodes",
      "desc": "Use Manual 'Nodes'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Nodes' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "wheelZoomable": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Wheel Zoomable",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The property specifies if to enable semantic zooming by mouse wheel events on desktop browsers.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  }
};

	spec.specAbout = 
{
  "description": "Process Flow - Visualizes Processes",
  "icon": "ProcessFlow.png",
  "title": "Process Flow 2.0",
  "topics": [
    {
      "content": "This component can visualize processes.",
      "title": "Process Flow"
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
  "extends1ControlDs": "ProcessFlow.ds",
  "extends2Control": "ProcessFlow",
  "extends3ControlEvents": "ProcessFlow.events",
  "extension": "ui5.ProcessFlow",
  "generatedJsFile": "true",
  "group": "ScnCommunityVisualizations",
  "handlerType": "sapui5",
  "height": "580",
  "id": "ProcessFlow",
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
  "title": "Process Flow 2.0",
  "tooltip": "ProcessFlow - Component for visualization of processes.",
  "width": "420"
};

	return spec;
});// End of closure
