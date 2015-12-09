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
		id: "BulletChartGen",
		name: "prototypes.BulletChartGen",
		requireName: "prototypesbulletchartgen",
		fullComponentName: "org.scn.community.prototypes.BulletChartGen",
		fullComponentPackage: "org.scn.community.prototypes/res/BulletChartGen",
		script: "org.scn.community.prototypes/res/BulletChartGen/BulletChartGen",
		scriptSpec: "org.scn.community.prototypes/res/BulletChartGen/BulletChartGenSpec",
		min: false
	};

	spec.spec = 
{
  "clickedgraphkey": {
    "opts": {
      "cat": "Visualization",
      "desc": "Clicked Key",
      "noAps": true,
      "tooltip": "the unique key of the clicked graph",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "comparison": {
    "opts": {
      "apsControl": "String",
      "cat": "Visualization",
      "desc": "comparon values",
      "tooltip": "Column holding compare values",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "boolean",
    "value": "",
    "visible": true
  },
  "data": {
    "onChange": "flattenData",
    "opts": {
      "cat": "Data",
      "desc": "Dataset",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Data from datasource",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultSet",
    "value": "null",
    "visible": true
  },
  "extrapolation": {
    "opts": {
      "apsControl": "String",
      "cat": "Visualization",
      "desc": "Extrapolation Values",
      "tooltip": "The Column key value of the extrapolation values",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "graphTitle": {
    "opts": {
      "apsControl": "text",
      "cat": "Visualization",
      "desc": "Graph Title",
      "tooltip": "the title for the graph",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "keydimension": {
    "opts": {
      "apsControl": "",
      "cat": "Visualization",
      "desc": "Unique key values",
      "tooltip": "Dimension name of the column that holds unique key values for each graph",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "labeldimension": {
    "opts": {
      "apsControl": "",
      "cat": "Label Settings",
      "desc": "dimension holding label values",
      "tooltip": "Dimension name of the column that holds label values",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "maxgraphheight": {
    "opts": {
      "apsControl": "String",
      "cat": "Visualization",
      "desc": "max height ",
      "tooltip": "Maximum height of a single graph",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": "40",
    "visible": true
  },
  "mingraphheight": {
    "chartbottommargin": {
      "opts": {
        "apsControl": "String",
        "cat": "Visualization",
        "desc": "Bottom Margin",
        "tooltip": "Bottom Margin",
        "ztlFunction": "",
        "ztlType": "int"
      },
      "type": "int",
      "value": "40",
      "visible": true
    },
    "chartleftmargin": {
      "opts": {
        "apsControl": "String",
        "cat": "Visualization",
        "desc": "Left Margin",
        "tooltip": "Left Margin",
        "ztlFunction": "",
        "ztlType": "int"
      },
      "type": "int",
      "value": "40",
      "visible": true
    },
    "chartrightmargin": {
      "opts": {
        "apsControl": "String",
        "cat": "Visualization",
        "desc": "Right Margin",
        "tooltip": "Right Margin",
        "ztlFunction": "",
        "ztlType": "int"
      },
      "type": "int",
      "value": "40",
      "visible": true
    },
    "charttopmargin": {
      "opts": {
        "apsControl": "String",
        "cat": "Visualization",
        "desc": "Top Margin",
        "tooltip": "Top Margin",
        "ztlFunction": "",
        "ztlType": "int"
      },
      "type": "int",
      "value": "40",
      "visible": true
    },
    "columnmargin": {
      "opts": {
        "apsControl": "String",
        "cat": "Visualization",
        "desc": "horizontal margin between graphs",
        "tooltip": "horizontal margin between graphs",
        "ztlFunction": "",
        "ztlType": "int"
      },
      "type": "int",
      "value": "40",
      "visible": true
    },
    "higherisbetter": {
      "onSet": "higherBetter",
      "opts": {
        "apsControl": "checkbox",
        "cat": "Data",
        "desc": "higher is better",
        "tooltip": "realization higher than target is better",
        "ztlFunction": "",
        "ztlType": "boolean"
      },
      "type": "boolean",
      "value": true,
      "visible": true
    },
    "numberofcolumns": {
      "opts": {
        "apsControl": "String",
        "cat": "Visualization",
        "desc": "number of columns",
        "tooltip": "number of columns for the graphs",
        "ztlFunction": "",
        "ztlType": "int"
      },
      "type": "int",
      "value": "40",
      "visible": true
    },
    "opts": {
      "apsControl": "String",
      "cat": "Visualization",
      "desc": "Minimum Height",
      "tooltip": "Minimum height of a single graph",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "rowmargin": {
      "opts": {
        "apsControl": "String",
        "cat": "Visualization",
        "desc": "vertical margin between graphs",
        "tooltip": "vertical margin between graphs",
        "ztlFunction": "",
        "ztlType": "int"
      },
      "type": "int",
      "value": "40",
      "visible": true
    },
    "type": "int",
    "value": "40",
    "visible": true
  },
  "realization": {
    "opts": {
      "apsControl": "String",
      "cat": "Column Selection",
      "desc": "Realization Column",
      "tooltip": "The Column key value of the realization values",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "showalert": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Data",
      "choiceType": "-",
      "desc": "When to show an alert",
      "options": [
        {
          "key": "comparison",
          "text": "worse than comparison"
        },
        {
          "key": "thresh5",
          "text": "worse than threshold 5"
        },
        {
          "key": "thresh4",
          "text": "worse than threshold 5"
        },
        {
          "key": "thresh3",
          "text": "worse than threshold 5"
        },
        {
          "key": "thresh2",
          "text": "worse than threshold 5"
        },
        {
          "key": "thresh1",
          "text": "worse than threshold 1"
        }
      ],
      "tooltip": "Choose situation when to show alert",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "comparison",
    "visible": true
  },
  "showaxis": {
    "onSet": "showAxis",
    "opts": {
      "apsControl": "checkbox",
      "cat": "Data",
      "desc": "Show X axis",
      "tooltip": "Whether to show the X axis numbers underneath the graph",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "sublabeldimension": {
    "opts": {
      "apsControl": "",
      "cat": "Label Settings",
      "desc": "Clicked Key",
      "tooltip": "Dimension name of the column that holds sublabel values",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "threshold1": {
    "opts": {
      "apsControl": "String",
      "cat": "Column Selection",
      "desc": "threshold 1 values",
      "tooltip": "first option to select threshold values",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "threshold2": {
    "opts": {
      "apsControl": "String",
      "cat": "Column Selection",
      "desc": "threshold 2 values",
      "tooltip": "second option to select threshold values",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "threshold3": {
    "opts": {
      "apsControl": "String",
      "cat": "Column Selection",
      "desc": "threshold 3 values",
      "tooltip": "third option to select threshold values",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "threshold4": {
    "opts": {
      "apsControl": "String",
      "cat": "Column Selection",
      "desc": "threshold 4 values",
      "tooltip": "fourth option to select threshold values",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": false
  },
  "threshold5": {
    "opts": {
      "apsControl": "String",
      "cat": "Column Selection",
      "desc": "threshold 5 values",
      "tooltip": "fifth option to select threshold values",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": false
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Bullet Chart",
  "icon": "BulletChartGen.png",
  "title": "Bullet Chart (Gen)",
  "topics": [{
    "content": "Allows you to compare realization with target, other periods and multiple thresholds",
    "title": "Bullet Chart"
  }]
};

	spec.specComp = 
{
  "databound": true,
  "extension": "Component",
  "group": "ScnCommunityPrototypes",
  "handlerType": "div",
  "height": "400",
  "id": "BulletChartGen",
  "package": "prototypes",
  "require": [{
    "id": "common_databound",
    "space": "known"
  }],
  "title": "Bullet Chart (Gen Prototype)",
  "tooltip": "Bullet Chart Visualization",
  "width": "600"
};

	return spec;
});// End of closure
