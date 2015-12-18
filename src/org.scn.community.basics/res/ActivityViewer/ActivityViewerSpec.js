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
		id: "ActivityViewer",
		name: "basics.ActivityViewer",
		requireName: "basicsactivityviewer",
		fullComponentName: "org.scn.community.basics.ActivityViewer",
		fullComponentPackage: "org.scn.community.basics/res/ActivityViewer",
		script: "org.scn.community.basics/res/ActivityViewer/ActivityViewer",
		scriptSpec: "org.scn.community.basics/res/ActivityViewer/ActivityViewerSpec",
		min: false
	};

	spec.spec = 
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
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"text\":\"Distribution\",\"category\":\"CAT1\",\"state\":\"FAILED\",\"startDate\":\"20130101\",\"endDate\":\"20130205\"},{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT1\",\"leaf\":false,\"text\":\"Process\",\"category\":\"CAT1\",\"state\":\"RUNNING\",\"startDate\":\"20140102\",\"endDate\":\"20140605\"},{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT2\",\"leaf\":false,\"text\":\"Buying\",\"category\":\"CAT2\",\"state\":\"STANDARD\",\"startDate\":\"20140905\",\"endDate\":\"20141216\"},{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT3\",\"leaf\":false,\"text\":\"Work On\",\"state\":\"KILLED\",\"category\":\"CAT2\",\"startDate\":\"20141228\",\"endDate\":\"20150206\"}]",
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
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"CAT1\",\"leaf\":false,\"text\":\"Good Products\"},{\"parentKey\":\"ROOT\",\"key\":\"CAT2\",\"leaf\":false,\"text\":\"Better Products\"}]",
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
  "selectedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Selected Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Selected Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": false
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
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"STANDARD\",\"leaf\":false,\"style\":\"bar\"},{\"parentKey\":\"ROOT\",\"key\":\"FAILED\",\"leaf\":false,\"style\":\"bar-failed\"},{\"parentKey\":\"ROOT\",\"key\":\"RUNNING\",\"leaf\":false,\"style\":\"bar-running\"},{\"parentKey\":\"ROOT\",\"key\":\"SUCCEEDED\",\"leaf\":false,\"style\":\"bar-succeeded\"},{\"parentKey\":\"ROOT\",\"key\":\"KILLED\",\"leaf\":false,\"style\":\"killed\"}]",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Activity Viewer - Gantt Chart for Activities",
  "icon": "ActivityViewer.png",
  "title": "Activity Viewer 2.0",
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

	spec.specComp = 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityVisualizations",
  "handlerType": "div",
  "height": "400",
  "id": "ActivityViewer",
  "package": "basics",
  "require": [
    {
      "id": "basics/os/d3/d3",
      "space": "d3"
    },
    {
      "id": "basics/os/d3-plug/gantt-chart-d3v2",
      "space": "d3"
    },
    {
      "id": "dateformatter",
      "space": "known"
    }
  ],
  "title": "Activity Viewer 2.0",
  "tooltip": "Viewer for Custom Activities",
  "width": "600"
};

	return spec;
});// End of closure
