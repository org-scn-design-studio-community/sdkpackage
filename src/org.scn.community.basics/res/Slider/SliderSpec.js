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
		id: "Slider",
		name: "basics.Slider",
		requireName: "basicsslider",
		fullComponentName: "org.scn.community.basics.Slider",
		fullComponentPackage: "org.scn.community.basics/res/Slider",
		script: "org.scn.community.basics/res/Slider/Slider",
		scriptSpec: "org.scn.community.basics/res/Slider/SliderSpec",
		min: false
	};

	spec.spec = 
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
};

	spec.specInclude = 
{};

	spec.specAbout = 
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
};

	spec.specComp = 
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
};

	return spec;
});// End of closure
