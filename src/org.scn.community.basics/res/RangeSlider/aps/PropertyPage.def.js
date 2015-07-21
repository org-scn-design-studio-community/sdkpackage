ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "30",
  "id": "RangeSlider",
  "package": "basics",
  "parentControl": "sap.ui.commons.RangeSlider",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Range Slider 2.0",
  "tooltip": "Range Slider",
  "width": "300"
},

"spec" : 
{
  "DLiveChangeActive": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Activate Live Change Event (prototype)",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Activate Live Change Event (prototype)",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "liveValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "First Value (Live)",
      "noAps": true,
      "noZtl": false,
      "tooltip": "First Value (Live)",
      "ztlFunction": "-get",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 0,
    "visible": false
  },
  "liveValue2": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Second Value (Live)",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Second Value (Live)",
      "ztlFunction": "-get",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 0,
    "visible": false
  },
  "max": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Maximum Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Maximum Value",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 100,
    "visible": true
  },
  "min": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Minimum Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Minimum Value",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 0,
    "visible": true
  },
  "onChange": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Change",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Change"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onLiveChange": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Live Change",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Live Change"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "smallStepWidth": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Small Step Width",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Small Step Width",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 10,
    "visible": true
  },
  "stepLabels": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Step Labels",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Step Labels",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": 100,
    "visible": true
  },
  "totalUnits": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Total Units",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Total Units",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 10,
    "visible": true
  },
  "value": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "First Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "First Value",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 0,
    "visible": true
  },
  "value2": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Second Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Second Value",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 100,
    "visible": true
  },
  "vertical": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Change To Vertical Orientation",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Change To Vertical Orientation",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  }
}, 

"specInclude" : 
{}, 

"specAbout" : 
{
  "description": "Range Slider",
  "icon": "RangeSlider.png",
  "title": "Range Slider 2.0",
  "topics": [
    {
      "content": "Range Slider",
      "title": "Range Slider"
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