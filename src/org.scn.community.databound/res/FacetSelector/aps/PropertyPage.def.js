ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "databound": true,
  "extension": "DataComponent",
  "group": "ScnCommunityDataBound",
  "handlerType": "sapui5",
  "height": "400",
  "id": "FacetSelector",
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
  "title": "Facet Selector 2.0",
  "tooltip": "FacetSelector - A simple selector which is using the facet techniques",
  "width": "800"
},

"spec" : 
{
  "DClearOthers": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Interaction",
      "desc": "Clear Selections if 0",
      "tooltip": "Clear Selection of other dimensions when member value is 0",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "DContentMode": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Special",
      "desc": "Content Mode",
      "options": [
        {
          "key": "All Dimensions",
          "text": "All Dimensions"
        },
        {
          "key": "Only from Result Set",
          "text": "Only from Result Set"
        },
        {
          "key": "Custom Dimension Set",
          "text": "Custom Dimension Set"
        }
      ],
      "tooltip": "Content Mode (how much should be visualized)",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Only from Result Set",
    "visible": true
  },
  "DCustomDimensions": {
    "opts": {
      "apsControl": "array",
      "arrayMode": "StringArray",
      "cat": "Special",
      "desc": "Custom Dimensions",
      "tooltip": "List of Custom Dimensions",
      "ztlFunction": "",
      "ztlType": "StringArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "DDisplayText": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "MemberDisplay",
      "desc": "Display Text",
      "options": [
        {
          "key": "text",
          "text": "Text Only"
        },
        {
          "key": "text_value",
          "text": "Text And Value"
        },
        {
          "key": "text_count",
          "text": "Text And Count"
        }
      ],
      "tooltip": "Display Text",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Text",
    "visible": true
  },
  "DElements": {
    "opts": {
      "apsControl": "text",
      "cat": "Data",
      "desc": "Master Data Elements",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Master Data Elements",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": false
  },
  "DFacetWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Facet Width in px",
      "tooltip": "Facet Width in px",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": "160",
    "visible": true
  },
  "DMaxDisplayMembers": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Maximum Number of Members",
      "tooltip": "Maximum Number of Members",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": "5",
    "visible": true
  },
  "DMaxMembers": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Data",
      "desc": "Maximum Number of Members",
      "tooltip": "Maximum Number of Members",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": "1000",
    "visible": true
  },
  "DSelection": {
    "opts": {
      "apsControl": "text",
      "cat": "Data",
      "desc": "Selected Elements",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Selected Elements",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": false
  },
  "DSortingDirection": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "desc": "Member Sorting Direction",
      "options": [
        {
          "key": "Ascending",
          "text": "Ascending"
        },
        {
          "key": "Descending",
          "text": "Descending"
        }
      ],
      "tooltip": "Member Sorting Direction",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Ascending",
    "visible": true
  },
  "DSortingType": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "desc": "Member Sorting Type",
      "options": [
        {
          "key": "Default",
          "text": "Default"
        },
        {
          "key": "Alphabetical",
          "text": "Alphabetical"
        },
        {
          "key": "Default",
          "text": "Default"
        },
        {
          "key": "Selected",
          "text": "Selected"
        },
        {
          "key": "Value",
          "text": "Value"
        },
        {
          "key": "Count",
          "text": "Count"
        }
      ],
      "tooltip": "Member Sorting Type",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Default",
    "visible": true
  },
  "DZeroValuesMode": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "desc": "Zero Values Display Mode",
      "options": [
        {
          "key": "Show",
          "text": "Show Members in the List"
        },
        {
          "key": "Hide",
          "text": "Hide Members"
        }
      ],
      "tooltip": "Display Mode for Members with Zero Values",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Show",
    "visible": true
  },
  "dataCellList": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Data List",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "onBeforeRender": {
    "opts": {
      "cat": "Events",
      "desc": "On Before Render",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on Before Render"
    },
    "type": "ScriptText",
    "value": "",
    "visible": false
  },
  "onInternalSelectionChanged": {
    "opts": {
      "cat": "Events",
      "desc": "On List Selection",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on List Selection"
    },
    "type": "ScriptText",
    "value": "this.private_onSelectionChanged();",
    "visible": false
  }
}, 

"specAbout" : 
{
  "description": "Facet Selector - A simple selector which is using the facet techniques",
  "icon": "FacetSelector.png",
  "title": "Facet Selector 2.0",
  "topics": [
    {
      "content": "The component is grouping the members  of dimensions which are in result set, placing the counter and sorting them",
      "title": "Facet Selector"
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