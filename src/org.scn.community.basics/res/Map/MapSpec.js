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
		id: "Map",
		name: "basics.Map",
		requireName: "basicsmap",
		fullComponentName: "org.scn.community.basics.Map",
		fullComponentPackage: "org.scn.community.basics/res/Map",
		script: "org.scn.community.basics/res/Map/Map",
		scriptSpec: "org.scn.community.basics/res/Map/MapSpec",
		min: false
	};

	spec.spec = 
{
  "cleanAll": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Internal",
      "desc": "Clean All Locations",
      "noAps": true,
      "noZtl": false,
      "refDesc": "Locations",
      "refProperty": "elementsContent",
      "refValue": "[]",
      "tooltip": "Clean All Locations",
      "ztlFunction": "-clean",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": false
  },
  "defaultImage": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Url For Default Image",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For Default Image Which Should Be Shown",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "elementsContent": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"location": {
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "lat": {
          "desc": "Latitude",
          "type": "float"
        },
        "long": {
          "desc": "Longitude",
          "type": "float"
        },
        "sequence": "key,text,url,lat,long",
        "text": {
          "desc": "Given Text",
          "type": "String"
        },
        "type": "Array",
        "url": {
          "desc": "Image Url",
          "type": "string"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content",
      "desc": "Locations",
      "tooltip": "List of Locations",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "mapUrl": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Url to Use for the Map",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url to Use for the Map",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "http://tile.openstreetmap.org/{Z}/{X}/{Y}.png",
    "visible": false
  },
  "moveAction": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Technical Property For Move Action",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Technical Property For Move Action",
      "ztlFunction": "-get",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": false
  },
  "moveTo": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Technical Property For Move To",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Technical Property For Move To",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "onSelectionChanged": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Selection Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Selection Changed"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "pan": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Technical Property For Pan",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Technical Property For Pan",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "panAction": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Technical Property For Pan Action",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Technical Property For Pan Action",
      "ztlFunction": "-get",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": false
  },
  "selectedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Technical Proprty For Selected Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Proprty For Selected Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "zoom": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Technical Property For Zoom",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Technical Property For Zoom",
      "ztlFunction": "-get",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": false
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Open Street Map (Basic)",
  "icon": "Map.png",
  "title": "Open Street Map (Basic) 2.0",
  "topics": [
    {
      "content": "Open Street Map (Basic)",
      "title": "Open Street Map (Basic)"
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
  "height": "400",
  "id": "Map",
  "package": "basics",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "mm",
      "space": "known"
    },
    {
      "id": "mmfollower",
      "ind": "2",
      "space": "known"
    }
  ],
  "title": "Open Street Map (Basic) 2.0",
  "tooltip": "Open Street Map (Basic)",
  "width": "600"
};

	return spec;
});// End of closure
