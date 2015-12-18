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
		id: "ResultSetInfo",
		name: "databound.ResultSetInfo",
		requireName: "databoundresultsetinfo",
		fullComponentName: "org.scn.community.databound.ResultSetInfo",
		fullComponentPackage: "org.scn.community.databound/res/ResultSetInfo",
		script: "org.scn.community.databound/res/ResultSetInfo/ResultSetInfo",
		scriptSpec: "org.scn.community.databound/res/ResultSetInfo/ResultSetInfoSpec",
		min: false
	};

	spec.spec = 
{
  "DCentralProvisioning": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Central Data Provisioning",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Provision Data Centrally For Component Access",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "DDataInformation": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Technical Component For Data Information",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Component For Data Information",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DIgnoreResults": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Ignore Results Rows And Columns",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Ignore Results Rows And Columns",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "DInformationEventActive": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Information Event Active",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Send Data Information Event When Data Is Available",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "data": {
    "opts": {
      "apsControl": "text",
      "cat": "DataBinding",
      "desc": "Result Set",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Result Set",
      "ztlFunction": "-get",
      "ztlType": "ResultSet"
    },
    "template": "default",
    "type": "ResultSet",
    "value": "",
    "visible": false
  },
  "onDataAvailable": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Data Available",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Data Available"
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
  "description": "Result Set Information",
  "icon": "ResultSetInfo.png",
  "title": "Result Set Information 2.0",
  "topics": [
    {
      "content": "Result Set Information",
      "title": "Result Set Information"
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
  "group": "ScnCommunityVisualizations",
  "handlerType": "sapui5",
  "height": "400",
  "id": "ResultSetInfo",
  "package": "databound",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Result Set Information 2.0",
  "tooltip": "Result Set Information",
  "width": "600"
};

	return spec;
});// End of closure
