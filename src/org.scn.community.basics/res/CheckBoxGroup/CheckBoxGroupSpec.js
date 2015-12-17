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
		id: "CheckBoxGroup",
		name: "basics.CheckBoxGroup",
		requireName: "basicscheckboxgroup",
		fullComponentName: "org.scn.community.basics.CheckBoxGroup",
		fullComponentPackage: "org.scn.community.basics/res/CheckBoxGroup",
		script: "org.scn.community.basics/res/CheckBoxGroup/CheckBoxGroup",
		scriptSpec: "org.scn.community.basics/res/CheckBoxGroup/CheckBoxGroupSpec",
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
      "refDesc": "Elements",
      "refProperty": "elements",
      "refValue": "[]",
      "tooltip": "Clean All Elements",
      "ztlFunction": "-clean",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": false
  },
  "elements": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"element": {
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "selected": {
          "desc": "Selected",
          "type": "boolean"
        },
        "sequence": "key,text,url,selected",
        "text": {
          "desc": "Given Text",
          "type": "String"
        },
        "type": "Array",
        "url": {
          "desc": "Given Url",
          "type": "Url"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content",
      "desc": "Elements",
      "tooltip": "List of Elements",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "fallbackPicture": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Image",
      "desc": "Fallback Picture Url",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For Fallback Picture (must Be Set)",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "default",
    "type": "String",
    "value": "",
    "visible": true
  },
  "onSelectionChanged": {
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
  },
  "pictureSize": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Image",
      "choiceType": "ConstImageSize",
      "desc": "Size Of The Picture",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Size_16px",
          "text": "Size_16px"
        },
        {
          "key": "Size_32px",
          "text": "Size_32px"
        }
      ],
      "tooltip": "Size Of The Picture",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Size_16px",
    "visible": true
  },
  "withPicture": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Image",
      "desc": "Use Pictures",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Use Pictures",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "true",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Check Box Group",
  "icon": "CheckBoxGroup.png",
  "title": "Check Box Group 2.0",
  "topics": [
    {
      "content": "Check Box Group",
      "title": "Check Box Group"
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
  "height": "400",
  "id": "CheckBoxGroup",
  "package": "basics",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Check Box Group 2.0",
  "tooltip": "Check Box Group",
  "width": "230"
};

	return spec;
});// End of closure
