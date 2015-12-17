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
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([],
function() {

	var spec = {
		id: "ScalingDataSource",
		name: "datasource.ScalingDataSource",
		requireName: "datasourcescalingdatasource",
		fullComponentName: "org.scn.community.datasource.ScalingDataSource",
		fullComponentPackage: "org.scn.community.datasource/res/ScalingDataSource",
		script: "org.scn.community.datasource/res/ScalingDataSource/ScalingDataSource",
		scriptSpec: "org.scn.community.datasource/res/ScalingDataSource/ScalingDataSourceSpec",
		min: false
	};

	spec.spec = 
{
  "data": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Data",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Data",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultCellSet",
    "value": "",
    "visible": true
  },
  "scalingFactor": {
    "opts": {
      "apsControl": "text",
      "cat": "Data",
      "desc": "Scaling Factor",
      "tooltip": "Scaling Factor",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "type": "float",
    "value": "1.0",
    "visible": true
  },
  "scalingSelection": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Data Range to Scale",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Data Range to Scale",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Scaling Data Source - Scales a selection by given factor",
  "icon": "ScalingDataSource.png",
  "title": "Scaling Data Source 2.0",
  "topics": [{
    "content": "Data Source Component",
    "title": "Data Source"
  }]
};

	spec.specComp = 
{
  "databound": false,
  "extension": "BufferDataSource",
  "group": "ScnCommunityDatasource",
  "handlerType": "datasource",
  "height": "600",
  "id": "ScalingDataSource",
  "package": "datasource",
  "parentControl": "sap.designstudio.sdk.DataBuffer",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Scaling Data Source 2.0",
  "tooltip": "Scaling Data Source - Data Source with Scaling on Selection",
  "width": "260"
};

	return spec;
});// End of closure
