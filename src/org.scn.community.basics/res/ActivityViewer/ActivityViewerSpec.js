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
{
  "activities": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"activity": {
        "category": {
          "desc": "Assigned Category Key",
          "type": "String"
        },
        "endDate": {
          "desc": "End Date YYYYMMDD",
          "type": "String"
        },
        "key": {
          "desc": "Unique Activity Key",
          "type": "String"
        },
        "sequence": "key,text,category,state,startDate,endDate",
        "startDate": {
          "desc": "Start Date YYYYMMDD",
          "type": "String"
        },
        "state": {
          "desc": "Assigned State Key",
          "type": "String"
        },
        "text": {
          "desc": "Activity Description",
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
  },
  "categories": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"category": {
        "key": {
          "apsControl": "text",
          "desc": "Unique Category Key",
          "type": "String"
        },
        "sequence": "key,text,visible",
        "text": {
          "apsControl": "text",
          "desc": "Category Description",
          "type": "String"
        },
        "type": "Array",
        "visible": {
          "apsControl": "checkbox",
          "desc": "Visibility",
          "type": "boolean",
          "value": true
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Categories",
      "desc": "Categories",
      "tooltip": "List of Categories",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "onSelectionChanged": {
    "opts": {
      "cat": "Events",
      "desc": "On Selection Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on Selection Changed"
    },
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "states": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"state": {
        "key": {
          "apsControl": "text",
          "desc": "Unique State Key",
          "type": "String"
        },
        "sequence": "key,style",
        "style": {
          "apsControl": "text",
          "desc": "State CSS Style",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-States",
      "desc": "States",
      "tooltip": "List of States",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  }
};

	org_scn_community_require.knownComponents.basics.ActivityViewer.specInclude = 
{};

	org_scn_community_require.knownComponents.basics.ActivityViewer.specAbout = 
{
  "description": "Activity Viewer - Gantt Chart for Activities",
  "icon": "ActivityViewer.png",
  "title": "Activity Viewer",
  "topics": [
    {
      "content": "Activity must have a start and end date, it must also have a name and category. The Activity Viewer is showing all activities for a category (like a Gantt Chart).",
      "title": "Activity"
    },
    {
      "content": "This component is a visualization component.  This means that you have control over cosmetic properties such as Legend, Margins, Plot positioning, zooming, among others.",
      "title": "Visualization"
    }
  ]
};

	org_scn_community_require.knownComponents.basics.ActivityViewer.specComp = 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "div",
  "height": "400",
  "id": "ActivityViewer",
  "package": "basics",
  "require": [
    {
      "id": "d3",
      "space": "d3"
    },
    {
      "id": "d3plug_gantt",
      "space": "d3"
    },
    {
      "id": "dateformatter",
      "space": "known"
    }
  ],
  "title": "Activity Viewer",
  "tooltip": "Viewer for Custom Activities",
  "width": "600"
};

})();// End of closure
