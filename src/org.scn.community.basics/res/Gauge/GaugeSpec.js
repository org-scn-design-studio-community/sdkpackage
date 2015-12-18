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
		id: "Gauge",
		name: "basics.Gauge",
		requireName: "basicsgauge",
		fullComponentName: "org.scn.community.basics.Gauge",
		fullComponentPackage: "org.scn.community.basics/res/Gauge",
		script: "org.scn.community.basics/res/Gauge/Gauge",
		scriptSpec: "org.scn.community.basics/res/Gauge/GaugeSpec",
		min: false
	};

	spec.spec = 
{
  "endValue": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Content",
      "desc": "End Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "End Value",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 100,
    "visible": true
  },
  "firstColor": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Color",
      "desc": "First Colour",
      "noAps": false,
      "noZtl": false,
      "tooltip": "First Colour",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "#FA1E1E",
    "visible": true
  },
  "gradientColor": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Color",
      "desc": "Gradient Colour",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Gradient Colour",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "",
    "visible": true
  },
  "haveNumbers": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Value",
      "desc": "Show Number",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Show Number",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "indicatorValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Content",
      "desc": "Indicator Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Indicator Value",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 25,
    "visible": true
  },
  "mainColor": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Color",
      "desc": "Main Colour",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Main Colour",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "#EDEDED",
    "visible": true
  },
  "needleColor": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Color",
      "desc": "Needle Colour",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Needle Colour",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "#D80000",
    "visible": true
  },
  "numOfBigTicks": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Value",
      "desc": "Number Of Big Ticks",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Number Of Big Ticks",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 5,
    "visible": true
  },
  "numOfSmallTicks": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Value",
      "desc": "Number Of Small Ticks",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Number Of Small Ticks",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 2,
    "visible": true
  },
  "secondColor": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Color",
      "desc": "Second Colour",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Second Colour",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "#FCFA4E",
    "visible": true
  },
  "showValue": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Value",
      "desc": "Show Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Show Value",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "showedValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Content",
      "desc": "Showed Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Showed Value",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "25 %",
    "visible": true
  },
  "startSecondColor": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Color",
      "desc": "Start Of Second Colour",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Start Of Second Colour",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 20,
    "visible": true
  },
  "startThirdColor": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Color",
      "desc": "Start Of Third Colour",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Start Of Third Colour",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 80,
    "visible": true
  },
  "startValue": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Content",
      "desc": "Start Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Start Value",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": true
  },
  "thirdColor": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Color",
      "desc": "Third Colour",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Third Colour",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "#2BFC23",
    "visible": true
  },
  "title": {
    "opts": {
      "apsControl": "text",
      "cat": "Content",
      "desc": "Title",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Title",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "Insert Title Here",
    "visible": true
  },
  "ttColor": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Color",
      "desc": "Text And Ticks Colour",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Text And Ticks Colour",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "#000000",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Displays a Gauge (Speedometer)",
  "icon": "Gauge.png",
  "title": "Gauge (Speedometer) 2.0",
  "topics": [
    {
      "content": "Displays a Gauge (Speedometer)",
      "title": "Gauge (Speedometer)"
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
  "group": "ScnCommunityVisualizations",
  "handlerType": "div",
  "height": "300",
  "id": "Gauge",
  "package": "basics",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Gauge (Speedometer) 2.0",
  "tooltip": "Displays a Gauge (Speedometer)",
  "width": "300"
};

	return spec;
});// End of closure
