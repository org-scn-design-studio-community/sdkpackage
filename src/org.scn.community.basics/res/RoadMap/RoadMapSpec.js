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
		id: "RoadMap",
		name: "basics.RoadMap",
		requireName: "basicsroadmap",
		fullComponentName: "org.scn.community.basics.RoadMap",
		fullComponentPackage: "org.scn.community.basics/res/RoadMap",
		script: "org.scn.community.basics/res/RoadMap/RoadMap",
		scriptSpec: "org.scn.community.basics/res/RoadMap/RoadMapSpec",
		min: false
	};

	spec.spec = 
{
  "DCleanAll": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Internal",
      "desc": "Clean All Elements",
      "noAps": true,
      "noZtl": false,
      "refDesc": "Elements",
      "refProperty": "DElementsContent",
      "refValue": "[]",
      "tooltip": "Clean All Elements",
      "ztlFunction": "-clean",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": false
  },
  "DElementsContent": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"step": {
        "enabled": {
          "desc": "Enabled",
          "type": "boolean"
        },
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "sequence": "key,text,visible,enabled",
        "text": {
          "desc": "Given Text",
          "type": "String"
        },
        "type": "Array",
        "visible": {
          "desc": "Visible",
          "type": "boolean"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content",
      "desc": "Steps",
      "tooltip": "List of Steps",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "DSelectedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Selected Step Key",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Selected Step Key",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "numberOfVisibleSteps": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Number Of Visible Steps",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Number Of Visible Steps",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "String",
    "type": "int",
    "value": "",
    "visible": true
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
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Road Map",
  "icon": "RoadMap.png",
  "title": "Road Map 2.0",
  "topics": [
    {
      "content": "Road Map",
      "title": "Road Map"
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
  "height": "400",
  "id": "RoadMap",
  "package": "basics",
  "parentControl": "sap.ui.commons.RoadMap",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Road Map 2.0",
  "tooltip": "Road Map",
  "width": "230"
};

	return spec;
});// End of closure
