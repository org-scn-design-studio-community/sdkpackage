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

	org_scn_community_require.knownComponents.basics.ActivityViewer.spec = 
{"activities": {
  "opts": {
    "apsControl": "array",
    "arrayDefinition": {"activity": {
      "category": {
        "desc": "Given category for the activity",
        "type": "String"
      },
      "endDate": {
        "desc": "End Date",
        "type": "String"
      },
      "key": {
        "desc": "Unique key of this activity",
        "type": "String"
      },
      "sequence": "key,text,category,startDate,endDate",
      "startDate": {
        "desc": "Start Date",
        "type": "String"
      },
      "text": {
        "desc": "Text for the activity",
        "type": "String"
      },
      "type": "Array"
    }},
    "arrayMode": "OneLevelArray",
    "cat": "Content-Activities",
    "desc": "Activities",
    "tooltip": "List of Activities",
    "ztlFunction": "",
    "ztlType": "SingleArray"
  },
  "type": "String",
  "value": "[]",
  "visible": true
}};

	org_scn_community_require.knownComponents.basics.ActivityViewer.specAbout = 
{"activities": {
  "opts": {
    "apsControl": "array",
    "arrayDefinition": {"activity": {
      "category": {
        "desc": "Given category for the activity",
        "type": "String"
      },
      "endDate": {
        "desc": "End Date",
        "type": "String"
      },
      "key": {
        "desc": "Unique key of this activity",
        "type": "String"
      },
      "sequence": "key,text,category,startDate,endDate",
      "startDate": {
        "desc": "Start Date",
        "type": "String"
      },
      "text": {
        "desc": "Text for the activity",
        "type": "String"
      },
      "type": "Array"
    }},
    "arrayMode": "OneLevelArray",
    "cat": "Content-Activities",
    "desc": "Activities",
    "tooltip": "List of Activities",
    "ztlFunction": "",
    "ztlType": "SingleArray"
  },
  "type": "String",
  "value": "[]",
  "visible": true
}};

})();// End of closure
