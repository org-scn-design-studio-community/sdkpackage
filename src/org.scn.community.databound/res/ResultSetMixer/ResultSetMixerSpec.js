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
		id: "ResultSetMixer",
		name: "databound.ResultSetMixer",
		requireName: "databoundresultsetmixer",
		fullComponentName: "org.scn.community.databound.ResultSetMixer",
		fullComponentPackage: "org.scn.community.databound/res/ResultSetMixer",
		script: "org.scn.community.databound/res/ResultSetMixer/ResultSetMixer",
		scriptSpec: "org.scn.community.databound/res/ResultSetMixer/ResultSetMixerSpec",
		min: false
	};

	spec.spec = 
{
  "DCollectMultipleMatches": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "-",
      "desc": "Collect Multiple Matches",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Collect",
          "text": "Collect"
        },
        {
          "key": "UseLast",
          "text": "UseLast"
        }
      ],
      "tooltip": "Procedure What Should Happen When Multiple Matches Are Available",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Collect",
    "visible": true
  },
  "DMasterGeometry": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "-",
      "desc": "Geometry Of The Master Result Set",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Structure",
          "text": "Structure"
        },
        {
          "key": "Rows",
          "text": "Rows"
        }
      ],
      "tooltip": "Geometry Of The Master Result Set",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Rows",
    "visible": true
  },
  "DMasterProvisioner": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Master Central Data Provisioner",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Result Set With Master Data",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "DReloadTrigger": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Internal Property To Trigger The Reload",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Internal Property To Trigger The Reload",
      "ztlFunction": "-get",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 0,
    "visible": false
  },
  "DSlaveColumnCondition": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Column Condition To Read Slave Result Set",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Under Which Condition Should Be The Slave Result Set Read (based On Contnet Of Header Column Key)",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "DSlaveColumnIndex": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Column Index For The Selection From Slave Result Set",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Which Column Should Be Selected From The Slave Result Set",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 1,
    "visible": true
  },
  "DSlaveContentCondition": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Content Condition To Read Slave Result Set",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Under Which Condition Should Be The Slave Result Set Read (based On Content Or Value)",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "DSlaveProvisioner": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Slave Central Data Provisioner",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Result Set With Slave Data For Selection",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "DSlaveRowCondition": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Row Condition To Read Slave Result Set",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Under Which Condition Should Be The Slave Result Set Read (based On Contnet Of Header Row Key)",
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
  "description": "Result Set Mixer",
  "icon": "ResultSetMixer.png",
  "title": "Result Set Mixer 2.0",
  "topics": [
    {
      "content": "Result Set Mixer",
      "title": "Result Set Mixer"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	spec.specComp = 
{
  "databound": true,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "400",
  "id": "ResultSetMixer",
  "package": "databound",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Result Set Mixer 2.0",
  "tooltip": "Result Set Mixer",
  "width": "600"
};

	return spec;
});// End of closure
