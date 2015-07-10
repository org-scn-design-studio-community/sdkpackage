ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "databound": true,
  "extension": "DataComponent",
  "group": "ScnCommunityDataBound",
  "handlerType": "sapui5",
  "height": "600",
  "id": "UI5Table",
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
  "title": "UI5 Table 2.0",
  "tooltip": "UI5 Table - A simple table with rows and columns",
  "width": "800"
},

"spec" : 
{
  "DAllowColumnReorder": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Interaction",
      "desc": "Allow Reorder of Columns",
      "tooltip": "Allow Reorder of Columns",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "DAllowFilter": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Interaction",
      "desc": "Allow Filter in Columns",
      "tooltip": "Allow Filter in Columns",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "DAllowSelection": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Interaction",
      "desc": "Allow Selection in the Table",
      "tooltip": "Allow Selection in the Table",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "DAllowSort": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Interaction",
      "desc": "Allow Sort in Columns",
      "tooltip": "Allow Sort in Columns",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "DDataColWidths": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"columnWidthEntry": {
        "key": {
          "desc": "Column index (0-based)",
          "type": "String"
        },
        "sequence": "key,width",
        "type": "Array",
        "width": {
          "desc": "Width with unit (e.g. 200px | 30%)",
          "type": "String"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Columns",
      "desc": "Data Column Widths",
      "tooltip": "List of Elements",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "DDataProvisioner": {
    "opts": {
      "apsControl": "text",
      "cat": "Special",
      "desc": "Central Result Set with Data",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Central Data Provisioner for Result Set",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "DEmptyDataValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Data",
      "desc": "Empty Value For Data Cell",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Empty Value For Data Cell",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "DEmptyHeaderValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Data",
      "desc": "Empty Value For Header Cell",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Empty Value For Header Cell",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "DFixedHeader": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Interaction",
      "desc": "Fix Header Rows",
      "tooltip": "Fix Header Rows",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "DFormattingCondition": {
    "opts": {
      "apsControl": "text",
      "cat": "Prototypes",
      "desc": "(non-stable) Formatting Condition",
      "noAps": false,
      "noZtl": false,
      "tooltip": "(non-stable) Formatting Condition",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "DFormattingOperator": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Prototypes",
      "choiceType": "FormattingOperator",
      "desc": "(non-stable) Formatting Operator",
      "options": [
        {
          "key": "UseFirst",
          "text": "Use First Matching Format"
        },
        {
          "key": "UseLast",
          "text": "Use Last Matching Format"
        },
        {
          "key": "Collect",
          "text": "Collect All Formats"
        }
      ],
      "tooltip": "(non-stable) Formatting Operator",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "UseFirst",
    "visible": true
  },
  "DHeaderColWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Header Column Width in px",
      "tooltip": "Header Column Width in px",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": 200,
    "visible": true
  },
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
  "DNavigationMode": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "NavigationMode",
      "desc": "Navigation Mode",
      "options": [
        {
          "key": "Paginator",
          "text": "Use Page Paginator"
        },
        {
          "key": "Scrollbar",
          "text": "Use Scrollbar"
        }
      ],
      "tooltip": "Navigation Mode",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Paginator",
    "visible": true
  },
  "DRowHeight": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Row Height in px",
      "tooltip": "Row Height in px",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": 20,
    "visible": true
  },
  "DSelection": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Selection Content for Cell",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Selection Content for Cell",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": false
  },
  "DVisibleRowCount": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Visible Row Count",
      "tooltip": "Visible Row Count",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": 12,
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
  "onCellSelected": {
    "opts": {
      "cat": "Events",
      "desc": "On Cell Selected",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on Cell Selected"
    },
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onRowSelected": {
    "opts": {
      "cat": "Events",
      "desc": "On Row Selected",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on Row Selected"
    },
    "type": "ScriptText",
    "value": "",
    "visible": true
  }
}, 

"specInclude" : 
{}, 

"specAbout" : 
{
  "description": "UI5 Table - A simple table with rows and columns",
  "icon": "UI5Table.png",
  "title": "UI5 Table 2.0",
  "topics": [
    {
      "content": "Can display data in form of a normal table which is simplifying the multidimensional model into row/column visualization",
      "title": "UI5 Table"
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