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
		id: "DataSourceHelper",
		name: "utils.DataSourceHelper",
		requireName: "utilsdatasourcehelper",
		fullComponentName: "org.scn.community.utils.DataSourceHelper",
		fullComponentPackage: "org.scn.community.utils/res/DataSourceHelper",
		script: "org.scn.community.utils/res/DataSourceHelper/DataSourceHelper",
		scriptSpec: "org.scn.community.utils/res/DataSourceHelper/DataSourceHelperSpec",
		min: false
	};

	spec.spec = 
{"cache": {
  "opts": {
    "apsControl": "checkbox",
    "cat": "Data",
    "desc": "Activate Cache",
    "noAps": false,
    "noZtl": false,
    "tooltip": "Activate Cache",
    "ztlFunction": "",
    "ztlType": "boolean"
  },
  "type": "boolean",
  "value": "true",
  "visible": true
}};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Data Source Helper - Utilities for work with Data Sources",
  "icon": "DataSourceHelper.png",
  "title": "Data Source Helper 2.0",
  "topics": [
    {
      "content": "collects utility methods for better work with data sources",
      "title": "Data Source Helper"
    },
    {
      "content": "This component does not have any visualization, it can act as an utility component.",
      "title": "Utility Component"
    }
  ]
};

	spec.specComp = 
{
  "databound": true,
  "extension": "Component",
  "group": "ScnCommunityUtils",
  "handlerType": "div",
  "height": "50",
  "id": "DataSourceHelper",
  "package": "utils",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Data Source Helper 2.0",
  "tooltip": "DataSourceHelper - Utilities for Data Sources",
  "width": "50"
};

	return spec;
});// End of closure
