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
		id: "ValueHelpField",
		name: "basics.ValueHelpField",
		requireName: "basicsvaluehelpfield",
		fullComponentName: "org.scn.community.basics.ValueHelpField",
		fullComponentPackage: "org.scn.community.basics/res/ValueHelpField",
		script: "org.scn.community.basics/res/ValueHelpField/ValueHelpField",
		scriptSpec: "org.scn.community.basics/res/ValueHelpField/ValueHelpFieldSpec",
		min: false
	};

	spec.spec = 
{
  "editable": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Editable",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Editable",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "enabled": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Enabled",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Enabled",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "onChanged": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Changed"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onValueHelpRequest": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Value Help Request",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Value Help Request"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "tooltip": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Tooltip",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Tooltip",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
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
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "some value",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Value Help Field",
  "icon": "ValueHelpField.png",
  "title": "Value Help Field 2.0",
  "topics": [
    {
      "content": "Value Help Field",
      "title": "Value Help Field"
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
  "height": "22",
  "id": "ValueHelpField",
  "package": "basics",
  "parentControl": "sap.ui.commons.ValueHelpField",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Value Help Field 2.0",
  "tooltip": "Value Help Field",
  "width": "300"
};

	return spec;
});// End of closure
