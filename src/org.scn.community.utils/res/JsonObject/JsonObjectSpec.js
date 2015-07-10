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

(function() {

	org_scn_community_require.knownComponents.utils.JsonObject.spec = 
{"content": {
  "opts": {
    "apsControl": "array",
    "arrayDefinition": {"property": {
      "key": {
        "desc": "Unique Property Key",
        "type": "String"
      },
      "sequence": "key,value",
      "type": "Array",
      "value": {
        "desc": "Property Value",
        "type": "String"
      }
    }},
    "arrayMode": "OneLevelArray",
    "cat": "Content-properties",
    "desc": "Properties",
    "tooltip": "List of Properties",
    "ztlFunction": "",
    "ztlType": "JsonObject"
  },
  "type": "String",
  "value": "{}",
  "visible": true
}};

	org_scn_community_require.knownComponents.utils.JsonObject.specInclude = 
{};

	org_scn_community_require.knownComponents.utils.JsonObject.specAbout = 
{
  "description": "A class for Json Object, small utilities in Json Format, like creation of JSON objects",
  "icon": "JsonObject.png",
  "title": "Json Object",
  "topics": [{
    "content": "Allows you to Create Json Objects by API and then setialize to String or simply return as Json Object and pass on other compatible API",
    "title": "Json object"
  }]
};

	org_scn_community_require.knownComponents.utils.JsonObject.specComp = 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityUtils",
  "handlerType": "div",
  "height": "10",
  "id": "JsonObject",
  "package": "utils",
  "require": [],
  "title": "Json Object",
  "tooltip": "Utility for work with Json Object",
  "width": "10"
};

})();// End of closure
