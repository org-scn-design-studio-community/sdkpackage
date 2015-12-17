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
		id: "QRCode",
		name: "basics.QRCode",
		requireName: "basicsqrcode",
		fullComponentName: "org.scn.community.basics.QRCode",
		fullComponentPackage: "org.scn.community.basics/res/QRCode",
		script: "org.scn.community.basics/res/QRCode/QRCode",
		scriptSpec: "org.scn.community.basics/res/QRCode/QRCodeSpec",
		min: false
	};

	spec.spec = 
{
  "background": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Background Colour",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Background Colour",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "default",
    "type": "String",
    "value": "",
    "visible": true
  },
  "ecLevel": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "-",
      "desc": "Error Correction Level",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "L",
          "text": "L"
        },
        {
          "key": "M",
          "text": "M"
        },
        {
          "key": "Q",
          "text": "Q"
        },
        {
          "key": "H",
          "text": "H"
        }
      ],
      "tooltip": "Error Correction Level",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "L",
    "visible": true
  },
  "fill": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Fill Colour",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Fill Colour",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "default",
    "type": "String",
    "value": "",
    "visible": true
  },
  "maxVersion": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Max Version (1-40)",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Max Version (1-40)",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 40,
    "visible": true
  },
  "minVersion": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Min Version (1-40)",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Min Version (1-40)",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 1,
    "visible": true
  },
  "onclick": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Click",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Click"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "printOnly": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Only Show On Printouts",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Only Show On Printouts",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "quiet": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Quiet Zone",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Quiet Zone",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 0,
    "visible": true
  },
  "radius": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Corner Radius (0.0 - 0.5)",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Corner Radius (0.0 - 0.5)",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 0,
    "visible": true
  },
  "render": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "-",
      "desc": "Render Mode",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "canvas",
          "text": "canvas"
        },
        {
          "key": "div",
          "text": "div"
        },
        {
          "key": "image",
          "text": "image"
        }
      ],
      "tooltip": "Render Mode",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "canvas",
    "visible": true
  },
  "text": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "QR Code Text",
      "noAps": false,
      "noZtl": false,
      "tooltip": "QR Code Text",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "QRCode Text",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "QRCode Generation",
  "icon": "QRCode.png",
  "title": "QRCode Generator 2.0",
  "topics": [
    {
      "content": "QRCode Generation",
      "title": "QRCode Generator"
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
  "handlerType": "div",
  "height": "256",
  "id": "QRCode",
  "package": "basics",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "qrcode",
      "space": "known"
    }
  ],
  "title": "QRCode Generator 2.0",
  "tooltip": "QRCode Generation",
  "width": "256"
};

	return spec;
});// End of closure
