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
		id: "SideNavigation",
		name: "databound.SideNavigation",
		requireName: "databoundsidenavigation",
		fullComponentName: "org.scn.community.databound.SideNavigation",
		fullComponentPackage: "org.scn.community.databound/res/SideNavigation",
		script: "org.scn.community.databound/res/SideNavigation/SideNavigation",
		scriptSpec: "org.scn.community.databound/res/SideNavigation/SideNavigationSpec",
		min: false
	};

	spec.spec = 
{};

	spec.specInclude = 
{
  "contentHeight": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Content Height",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Height of the component (CSS-size such as % or px). When it is set, this is the exact size. When left blank, the text defines the size.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": false
  },
  "contentWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Content Width",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Width of the component (CSS-size such as % or px). When it is set, this is the exact size. When left blank, the text defines the size.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": false
  },
  "dataCellListFixedItem": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Item Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Item Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": false
  },
  "dataCellListItem": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Item Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Item Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": false
  },
  "expanded": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Expanded",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Specifies if the control is expanded.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "fixedItem": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"fixedItem": {
        "expanded": {
          "desc": "Expanded",
          "type": "boolean"
        },
        "icon": {
          "desc": "Icon",
          "type": "String"
        },
        "items": {
          "expanded": {
            "desc": "Expanded",
            "type": "boolean"
          },
          "hasExpander": {
            "desc": "Has Expander",
            "type": "boolean"
          },
          "icon": {
            "desc": "Icon",
            "type": "String"
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
          "sequence": "parentKey,key,expanded,hasExpander,icon",
          "type": "Array"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "sequence": "key,text,icon,expanded,items",
        "text": {
          "desc": "Text",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content-Item",
      "desc": "Fixed Items",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The bottom arrow, used for scrolling throw items when SideNavigation is collapsed.",
      "ztlFunction": "-unique",
      "ztlType": "DoubleArray"
    },
    "origType": "NavigationList",
    "template": "ObjectSingle-double",
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "item": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"item": {
        "expanded": {
          "desc": "Expanded",
          "type": "boolean"
        },
        "icon": {
          "desc": "Icon",
          "type": "String"
        },
        "items": {
          "expanded": {
            "desc": "Expanded",
            "type": "boolean"
          },
          "hasExpander": {
            "desc": "Has Expander",
            "type": "boolean"
          },
          "icon": {
            "desc": "Icon",
            "type": "String"
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
          "sequence": "parentKey,key,expanded,hasExpander,icon",
          "type": "Array"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "sequence": "key,text,icon,expanded,items",
        "text": {
          "desc": "Text",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content-Item",
      "desc": "Items",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The bottom arrow, used for scrolling throw items when SideNavigation is collapsed.",
      "ztlFunction": "-unique",
      "ztlType": "DoubleArray"
    },
    "origType": "NavigationList",
    "template": "ObjectSingle-double",
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "itemSelectedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Item Selected Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "ItemSelected Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "origType": "EventKey",
    "template": "EventKey",
    "type": "String",
    "value": "",
    "visible": false
  },
  "onFixedItemSelected": {
    "opts": {
      "cat": "Events",
      "desc": "On Fixed Item Selected",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on The selected fixed item."
    },
    "template": "ScriptText",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onItemSelected": {
    "opts": {
      "cat": "Events",
      "desc": "On Item Selected",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on The selected item."
    },
    "template": "ScriptText",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "useContentHeight": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Content Height'",
      "noAps": true,
      "noZtl": true,
      "tooltip": "If checked, the property 'Content Height' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": false
  },
  "useContentWidth": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Content Width'",
      "noAps": true,
      "noZtl": true,
      "tooltip": "If checked, the property 'Content Width' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": false
  },
  "useFixedItem": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Item",
      "desc": "Use Manual 'Item'",
      "noAps": true,
      "noZtl": true,
      "tooltip": "If checked, the property 'Item' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": false
  },
  "useItem": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Item",
      "desc": "Use Manual ' Fixed Item'",
      "noAps": true,
      "noZtl": true,
      "tooltip": "If checked, the property 'Item' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": false
  }
};

	spec.specAbout = 
{
  "description": "Side Navigation",
  "icon": "SideNavigation.png",
  "title": "Side Navigation",
  "topics": [
    {
      "content": "The SideNavigation control is a container, which consists of flexible and fixed parts on top of each other. The flexible part adapts its size to the fixed one. The flexible part has a scrollbar when the content is larger than the available space. Whenever the height of the whole control is less than 256 pixels, the scrollbar becomes joint for the two parts.",
      "title": "Side Navigation"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	spec.specComp = 
{
  "dataType": "DataCellList",
  "databound": false,
  "extends1ControlDs": "SideNavigation.ds",
  "extends2Control": "SideNavigation",
  "extends3ControlEvents": "SideNavigation.events",
  "extension": "ui5.SideNavigation",
  "generatedJsFile": "true",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "32",
  "id": "SideNavigation",
  "modes": "m",
  "package": "databound",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Side Navigation",
  "tooltip": "Side Navigation - Component for navigation on the side",
  "ui5package": "sap.tnt",
  "width": "300"
};

	return spec;
});// End of closure
