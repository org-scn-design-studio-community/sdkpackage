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
		id: "ListSelector",
		name: "basics.ListSelector",
		requireName: "basicslistselector",
		fullComponentName: "org.scn.community.basics.ListSelector",
		fullComponentPackage: "org.scn.community.basics/res/ListSelector",
		script: "org.scn.community.basics/res/ListSelector/ListSelector",
		scriptSpec: "org.scn.community.basics/res/ListSelector/ListSelectorSpec",
		min: false
	};

	spec.spec = 
{
  "cleanAll": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Internal",
      "desc": "Clean All Elements",
      "noAps": true,
      "noZtl": false,
      "refDesc": "Titles",
      "refProperty": "titles",
      "refValue": "[]",
      "tooltip": "Clean All Elements",
      "ztlFunction": "-clean",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": false
  },
  "fixedWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Fixed Width (-1 For Auto)",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Fixed Width (-1 For Auto)",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": -1,
    "visible": true
  },
  "iconHeight": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Icon Height (px)",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Icon Height (px)",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 16,
    "visible": true
  },
  "iconWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Icon Width (px)",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Icon Width (px)",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 16,
    "visible": true
  },
  "keyClicked": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Selected Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Selected Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "labelClicked": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Selected Label",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Selected Label",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "labelOrientation": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "Orientation",
      "desc": "Label Orientation",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Horizontal",
          "text": "Horizontal"
        },
        {
          "key": "Vertical",
          "text": "Vertical"
        }
      ],
      "tooltip": "Label Orientation",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Vertical",
    "visible": true
  },
  "labelPlacement": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "PlacementType",
      "desc": "Label Placement (Relative To Icon)",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "After",
          "text": "After"
        },
        {
          "key": "Before",
          "text": "Before"
        }
      ],
      "tooltip": "Label Placement (Relative To Icon)",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "After",
    "visible": true
  },
  "labelUnselect": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Unselect Label",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Unselect Label",
      "ztlFunction": "-get",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": false
  },
  "onclick": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Click...",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Click..."
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "spriteIDs": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Sprite IDs (Optional)",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Sprite IDs (Optional)",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "spriteSheet": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Icon Sprite Sheet (Optional)",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Icon Sprite Sheet (Optional)",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "spriteSheetPerRow": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Icons Sprites Per Row",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Icons Sprites Per Row",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 1,
    "visible": true
  },
  "textAlign": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "PlacementType",
      "desc": "Text Alignment",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Left",
          "text": "Left"
        },
        {
          "key": "Center",
          "text": "Center"
        },
        {
          "key": "Right",
          "text": "Right"
        }
      ],
      "tooltip": "Text Alignment",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Center",
    "visible": true
  },
  "titles": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"title": {
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "sequence": "key,text",
        "text": {
          "desc": "Given Text",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content",
      "desc": "Titles",
      "tooltip": "List of Titles",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "verticalAlign": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "PlacementType",
      "desc": "Vertical Alignment",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Top",
          "text": "Top"
        },
        {
          "key": "Middle",
          "text": "Middle"
        },
        {
          "key": "Bottom",
          "text": "Bottom"
        }
      ],
      "tooltip": "Vertical Alignment",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Top",
    "visible": true
  },
  "visibilities": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Visibilities (Optional)",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Visibilities (Optional)",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "List Selector",
  "icon": "ListSelector.png",
  "title": "List Selector 2.0",
  "topics": [
    {
      "content": "List Selector",
      "title": "List Selector"
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
  "handlerType": "div",
  "height": "200",
  "id": "ListSelector",
  "package": "basics",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "List Selector 2.0",
  "tooltip": "List Selector",
  "width": "200"
};

	return spec;
});// End of closure
