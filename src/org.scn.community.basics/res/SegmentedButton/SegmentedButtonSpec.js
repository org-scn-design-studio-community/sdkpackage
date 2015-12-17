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
		id: "SegmentedButton",
		name: "basics.SegmentedButton",
		requireName: "basicssegmentedbutton",
		fullComponentName: "org.scn.community.basics.SegmentedButton",
		fullComponentPackage: "org.scn.community.basics/res/SegmentedButton",
		script: "org.scn.community.basics/res/SegmentedButton/SegmentedButton",
		scriptSpec: "org.scn.community.basics/res/SegmentedButton/SegmentedButtonSpec",
		min: false
	};

	spec.spec = 
{
  "DCleanAll": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Internal",
      "desc": "Clean All Nodes",
      "noAps": true,
      "noZtl": false,
      "refDesc": "Nodes",
      "refProperty": "DElementsContent",
      "refValue": "[]",
      "tooltip": "Clean All Nodes",
      "ztlFunction": "-clean",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": false
  },
  "DDefaultImage": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Url For Default Image",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For Default Image Which Should Be Shown In Case No Other Is Specified",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "DElementsContent": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"button": {
        "image": {
          "desc": "Image",
          "type": "Url"
        },
        "item": {
          "image": {
            "desc": "Image",
            "type": "Url"
          },
          "key": {
            "desc": "Unique Key",
            "type": "String"
          },
          "parentKey": {
            "desc": "Parent Key",
            "mode": "ztl",
            "type": "String"
          },
          "selected": {
            "desc": "Selected",
            "type": "boolean"
          },
          "sequence": "parentKey,key,text,image,selected",
          "text": {
            "desc": "Given Text",
            "type": "String"
          },
          "type": "Array"
        },
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "selected": {
          "desc": "Selected",
          "type": "boolean"
        },
        "sequence": "key,text,image,selected,item",
        "text": {
          "desc": "Given Text",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content",
      "desc": "Buttons",
      "tooltip": "List Of Buttons With Sub-Items",
      "ztlFunction": "",
      "ztlType": "DoubleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "DImageSize": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Unsorted",
      "choiceType": "ImageSize",
      "desc": "Size Of The Image",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Size_16px",
          "text": "16px"
        },
        {
          "key": "Size_32px",
          "text": "32px"
        }
      ],
      "tooltip": "Size Of The Image",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Size_16px",
    "visible": true
  },
  "DPressedButtonKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Technical Property For Pressed Button Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Property For Pressed Button Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DPressedItemKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Technical Property For Pressed Item Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Property For Pressed Item Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DSelectedKeys": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Technical Property For Selected Keys",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Property For Selected Keys",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "[]",
    "visible": false
  },
  "DSelectionType": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Unsorted",
      "choiceType": "SelectionType",
      "desc": "Selection Type",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Single",
          "text": "Single"
        },
        {
          "key": "Multiple",
          "text": "Multiple"
        }
      ],
      "tooltip": "Selection Type SINGLE | MULTIPLE",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Single",
    "visible": true
  },
  "DWithImages": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Images",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Use Images",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "",
    "visible": true
  },
  "onButtonPressed": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Button Pressed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Button Pressed"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onItemPressed": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Item Pressed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Item Pressed"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onSelected": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Selection Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Selection Changed"
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
  "description": "Segmented Button",
  "icon": "SegmentedButton.png",
  "title": "Segmented Button 2.0",
  "topics": [
    {
      "content": "Segmented Button",
      "title": "Segmented Button"
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
  "id": "SegmentedButton",
  "package": "basics",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Segmented Button 2.0",
  "tooltip": "Segmented Button",
  "width": "300"
};

	return spec;
});// End of closure
