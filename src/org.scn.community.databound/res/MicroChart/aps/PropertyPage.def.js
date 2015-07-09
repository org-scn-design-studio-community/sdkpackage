ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "dataType": "DataCellList",
  "databound": true,
  "extension": "DataComponent",
  "group": "ScnCommunityDataBound",
  "handlerType": "sapui5",
  "height": "200",
  "id": "MicroChart",
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
  "title": "Micro Chart 2.0",
  "tooltip": "Micro Chart - Component for VIsualization of Data on small areas",
  "ui5specification": "BulletChart",
  "width": "400"
},

"spec" : 
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
  }
}, 

"specAbout" : 
{
  "description": "Micro Chart - Component for VIsualization of Data on small areas",
  "icon": "MicroChart.png",
  "title": "Micro Chart 2.0",
  "topics": [
    {
      "content": "This component can visualize the data on small area.",
      "title": "Micro Chart"
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