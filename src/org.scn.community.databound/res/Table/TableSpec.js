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
		id: "Table",
		name: "databound.Table",
		requireName: "databoundtable",
		fullComponentName: "org.scn.community.databound.Table",
		fullComponentPackage: "org.scn.community.databound/res/Table",
		script: "org.scn.community.databound/res/Table/Table",
		scriptSpec: "org.scn.community.databound/res/Table/TableSpec",
		min: false
	};

	spec.spec = 
{
  "column1": {
    "opts": {
      "apsControl": "text",
      "cat": "DataBinding",
      "desc": "Column 1",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Column 1",
      "ztlFunction": "",
      "ztlType": "ResultCellList"
    },
    "template": "default",
    "type": "ResultCellList",
    "value": "",
    "visible": true
  },
  "column2": {
    "opts": {
      "apsControl": "text",
      "cat": "DataBinding",
      "desc": "Column 2",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Column 2",
      "ztlFunction": "",
      "ztlType": "ResultCellList"
    },
    "template": "default",
    "type": "ResultCellList",
    "value": "",
    "visible": true
  },
  "column3": {
    "opts": {
      "apsControl": "text",
      "cat": "DataBinding",
      "desc": "Column 3",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Column 3",
      "ztlFunction": "",
      "ztlType": "ResultCellList"
    },
    "template": "default",
    "type": "ResultCellList",
    "value": "",
    "visible": true
  },
  "data": {
    "opts": {
      "apsControl": "text",
      "cat": "DataBinding",
      "desc": "Column 1",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Column 1",
      "ztlFunction": "",
      "ztlType": "ResultCellList"
    },
    "template": "default",
    "type": "ResultCellList",
    "value": "",
    "visible": false
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Data Table",
  "icon": "Table.png",
  "title": "Data Table 2.0",
  "topics": [
    {
      "content": "Data Table",
      "title": "Data Table"
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
  "handlerType": "div",
  "height": "400",
  "id": "Table",
  "package": "databound",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Data Table 2.0",
  "tooltip": "Data Table",
  "width": "400"
};

	return spec;
});// End of closure
