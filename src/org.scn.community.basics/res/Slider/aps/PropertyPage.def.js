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
  "id": "Slider",
  "package": "basics",
  "parentControl": "sap.ui.commons.Slider",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Slider 2.0",
  "tooltip": "Slider",
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
      "desc": "Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Value",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 20,
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
  "description": "Slider",
  "icon": "Slider.png",
  "title": "Slider 2.0",
  "topics": [
    {
      "content": "Slider",
      "title": "Slider"
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