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
		id: "FioriLink",
		name: "databound.FioriLink",
		requireName: "databoundfiorilink",
		fullComponentName: "org.scn.community.databound.FioriLink",
		fullComponentPackage: "org.scn.community.databound/res/FioriLink",
		script: "org.scn.community.databound/res/FioriLink/FioriLink",
		scriptSpec: "org.scn.community.databound/res/FioriLink/FioriLinkSpec",
		min: false
	};

	spec.spec = 
{};

	spec.specInclude = 
{
  "contentWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Content Width",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Width of the link (CSS-size such as % or px). When it is set, this is the exact size. When left blank, the text defines the size.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": true
  },
  "emphasized": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Emphasized",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Emphasized links look visually more important than regular links.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "enabled": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Enabled",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Determines whether the link can be triggered by the user.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "href": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Href",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The link target URI. Supports standard hyperlink behavior. If a JavaScript action should be triggered, this should not be set, but instead an event handler for the 'press' event should be registered.",
      "ztlFunction": "",
      "ztlType": "Url"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "onPressed": {
    "opts": {
      "cat": "Events",
      "desc": "On Pressed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on Event is fired when the user triggers the link control."
    },
    "template": "ScriptText",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "pressedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Pressed Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Pressed Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "origType": "EventKey",
    "template": "EventKey",
    "type": "String",
    "value": "",
    "visible": false
  },
  "subtle": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Subtle",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Subtle links look more like standard text than like links. They should only be used to help with visual hierarchy between large data lists of important and less important links. Subtle links should not be used in any other use case.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "target": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Target",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Options are the standard values for window.open() supported by browsers: _self, _top, _blank, _parent, _search. Alternatively, a frame name can be entered. This property is only used when the href property is set.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "text": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Text",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Link text to be displayed.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "textAlign": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "TextAlign",
      "desc": "Text Align",
      "noAps": false,
      "noZtl": false,
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
      "tooltip": "Sets the horizontal alignment of the text.",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Initial",
    "visible": true
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
      "tooltip": "This property specifies the element's text directionality with enumerated options. By default, the control inherits text direction from the parent DOM.",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Inherit",
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
  "useHref": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Href'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Href' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "wrapping": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Wrapping",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Determines whether the link text is allowed to wrap when there is not sufficient space.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  }
};

	spec.specAbout = 
{
  "description": "Fiori Link - A Link",
  "icon": "FioriLink.png",
  "title": "Fiori Link 2.0",
  "topics": [
    {
      "content": "This component can display links.",
      "title": "Fiori Link"
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
  "extends1ControlDs": "Link.ds",
  "extends2Control": "Link",
  "extends3ControlEvents": "Link.events",
  "extension": "ui5.Link",
  "generatedJsFile": "true",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "580",
  "id": "FioriLink",
  "modes": "m",
  "package": "databound",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Fiori Link 2.0",
  "tooltip": "Fiori Link - Component for links.",
  "ui5package": "sap.m",
  "width": "420"
};

	return spec;
});// End of closure
