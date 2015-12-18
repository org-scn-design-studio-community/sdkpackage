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
		id: "RadioButtonGroup",
		name: "databound.RadioButtonGroup",
		requireName: "databoundradiobuttongroup",
		fullComponentName: "org.scn.community.databound.RadioButtonGroup",
		fullComponentPackage: "org.scn.community.databound/res/RadioButtonGroup",
		script: "org.scn.community.databound/res/RadioButtonGroup/RadioButtonGroup",
		scriptSpec: "org.scn.community.databound/res/RadioButtonGroup/RadioButtonGroupSpec",
		min: false
	};

	spec.spec = 
{};

	spec.specInclude = 
{
  "buttons": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"buttons": {
        "activeHandling": {
          "desc": "Active Handling",
          "type": "boolean"
        },
        "contentWidth": {
          "desc": "Content Width",
          "type": "int"
        },
        "editable": {
          "desc": "Editable",
          "type": "boolean"
        },
        "enabled": {
          "desc": "Enabled",
          "type": "boolean"
        },
        "groupName": {
          "desc": "Group Name",
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "selected": {
          "desc": "Selected",
          "type": "boolean"
        },
        "sequence": "key,activeHandling,contentWidth,editable,enabled,groupName,selected,text,textAlign,textDirection,valueState",
        "text": {
          "desc": "Text",
          "type": "String"
        },
        "textAlign": {
          "apsControl": "combobox",
          "desc": "Text Align",
          "options": [
            {
              "key": "Begin",
              "text": "Locale-specific positioning at the beginning of the line"
            },
            {
              "key": "End",
              "text": "Locale-specific positioning at the end of the line"
            },
            {
              "key": "Left",
              "text": "Hard option for left alignment"
            },
            {
              "key": "Right",
              "text": "Hard option for right alignment"
            },
            {
              "key": "Center",
              "text": "Centered text alignment"
            },
            {
              "key": "Initial",
              "text": "Sets no text align, so the browser default is used"
            }
          ],
          "type": "String"
        },
        "textDirection": {
          "apsControl": "combobox",
          "desc": "Text Direction",
          "options": [
            {
              "key": "LTR",
              "text": "Specifies left-to-right text direction"
            },
            {
              "key": "RTL",
              "text": "Specifies right-to-left text direction"
            },
            {
              "key": "Inherit",
              "text": "Inherits the direction from its parent control/container"
            }
          ],
          "type": "String"
        },
        "type": "Array",
        "valueState": {
          "apsControl": "combobox",
          "desc": "Value State",
          "options": [
            {
              "key": "Error",
              "text": "State is not valid"
            },
            {
              "key": "Warning",
              "text": "State is valid but with a warning"
            },
            {
              "key": "Success",
              "text": "State is valid"
            },
            {
              "key": "None",
              "text": "State is not specified"
            }
          ],
          "type": "String"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Buttons",
      "desc": "Buttons",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Returns selected button. When no button is selected, ",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "origType": "RadioButton",
    "template": "ObjectArray",
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "columns": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Columns",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Number of RadioButtons displayed in one line/column.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 1,
    "visible": true
  },
  "contentWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Content Width",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Width of the RadioButtonGroup.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": true
  },
  "dataCellListButtons": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Buttons Data List [Multiple]",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Buttons Data List [Multiple]",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "editable": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Editable",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Specifies whether the user can select the RadioButtonGroup. When the property is set to false, the control obtains visual styles different from its visual styles for the normal and the disabled state. Additionally the control is no longer interactive, but can receive focus.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "enabled": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Enabled",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Switches the enabled state of the control. All Radio Buttons inside a disabled group are disabled. Default value is â\u20acœtrueâ\u20ac�.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "onSelected": {
    "opts": {
      "cat": "Events",
      "desc": "On Selected",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on Index of the selected RadioButton."
    },
    "template": "ScriptText",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "selectedIndex": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Selected Index",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Index of the selected/checked RadioButton.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
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
    "origType": "EventKey",
    "template": "EventKey",
    "type": "String",
    "value": "",
    "visible": false
  },
  "textDirection": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "TextDirection",
      "desc": "Text Direction",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "LTR",
          "text": "Specifies left-to-right text direction"
        },
        {
          "key": "RTL",
          "text": "Specifies right-to-left text direction"
        },
        {
          "key": "Inherit",
          "text": "Inherits the direction from its parent control/container"
        }
      ],
      "tooltip": "This property specifies the element's text directionality with enumerated options. By default, the control inherits text direction from the DOM.",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Inherit",
    "visible": true
  },
  "useButtons": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Buttons",
      "desc": "Use Manual 'Buttons'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Buttons' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useColumns": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Columns'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Columns' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useContentWidth": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Content Width'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Content Width' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useSelectedIndex": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Selected Index'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Selected Index' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "valueState": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Data-Values",
      "choiceType": "ValueState",
      "desc": "Value State",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Error",
          "text": "State is not valid"
        },
        {
          "key": "Warning",
          "text": "State is valid but with a warning"
        },
        {
          "key": "Success",
          "text": "State is valid"
        },
        {
          "key": "None",
          "text": "State is not specified"
        }
      ],
      "tooltip": "The value state to be displayed. Setting this attribute, when the accessibility feature is enabled, sets the value of the invalid property to â\u20acœtrueâ\u20ac�.",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "None",
    "visible": true
  }
};

	spec.specAbout = 
{
  "description": "Radio Button Group - Allows Selection with Radio Buttons",
  "icon": "RadioButtonGroup.png",
  "title": "Radio Button Group 2.0",
  "topics": [
    {
      "content": "This control is used as a wrapper for a group of RadioButton controls, which then can be used as a single UI element. You can select only one of the grouped radio buttons at a time. Some of the radio buttons can be configured as inactive (they are displayed as grayed out). The grouped radio buttons can be arranged within different number of columns. Based on the number of specified columns and the number of radio buttons used, different layout types can be achieved - as a 'matrix', horizontally or vertically aligned radio buttons, etc.",
      "title": "Radio Button Group"
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
  "extends1ControlDs": "RadioButtonGroup.ds",
  "extends2Control": "RadioButtonGroup",
  "extends3ControlEvents": "RadioButtonGroup.events",
  "extension": "ui5.RadioButtonGroup",
  "generatedJsFile": "true",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "500",
  "id": "RadioButtonGroup",
  "modes": "commons m",
  "package": "databound",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "common_databound",
      "space": "known"
    },
    {
      "id": "common_unified",
      "space": "known"
    },
    {
      "id": "jshashtable",
      "space": "known"
    },
    {
      "id": "numberformatter",
      "space": "known"
    },
    {
      "id": "sap_m_loader",
      "space": "known"
    },
    {
      "id": "sap_suite_loader",
      "space": "known"
    }
  ],
  "title": "Radio Button Group 2.0",
  "tooltip": "RadioButtonGroup - Allows Selection with Radio Buttons.",
  "width": "320"
};

	return spec;
});// End of closure
