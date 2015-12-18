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
		id: "LeaderBoard",
		name: "basics.LeaderBoard",
		requireName: "basicsleaderboard",
		fullComponentName: "org.scn.community.basics.LeaderBoard",
		fullComponentPackage: "org.scn.community.basics/res/LeaderBoard",
		script: "org.scn.community.basics/res/LeaderBoard/LeaderBoard",
		scriptSpec: "org.scn.community.basics/res/LeaderBoard/LeaderBoardSpec",
		min: false
	};

	spec.spec = 
{
  "addCounter": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Add Counter",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Add Counter",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "cleanAll": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Internal",
      "desc": "Clean All Elements",
      "noAps": true,
      "noZtl": false,
      "refDesc": "Elements",
      "refProperty": "elements",
      "refValue": "[]",
      "tooltip": "Clean All Elements",
      "ztlFunction": "-clean",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": false
  },
  "elements": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"element": {
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "sequence": "key,text,url,value,valueS",
        "text": {
          "desc": "Given Text",
          "type": "String"
        },
        "type": "Array",
        "url": {
          "desc": "Image Url",
          "type": "String"
        },
        "value": {
          "desc": "Value",
          "type": "float"
        },
        "valueS": {
          "desc": "Value as String",
          "type": "String"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content",
      "desc": "Elements",
      "tooltip": "List of Elements",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "fallbackPicture": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Fallback Picture Url",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For Fallback Picture (must Be Set)",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "onPress": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Press",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Press"
    },
    "template": "Event",
    "type": "ScriptText",
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
  },
  "pressedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Technical Proprty For Pressed Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Proprty For Pressed Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
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
  "valuePrefix": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Value Prefix Text",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Value Prefix Text",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "valueSuffix": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Value Suffix Text",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Value Suffix Text",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Leader Board",
  "icon": "LeaderBoard.png",
  "title": "Leader Board 2.0",
  "topics": [
    {
      "content": "Leader Board",
      "title": "Leader Board"
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
  "handlerType": "sapui5",
  "height": "400",
  "id": "LeaderBoard",
  "package": "basics",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Leader Board 2.0",
  "tooltip": "Leader Board",
  "width": "230"
};

	return spec;
});// End of closure
