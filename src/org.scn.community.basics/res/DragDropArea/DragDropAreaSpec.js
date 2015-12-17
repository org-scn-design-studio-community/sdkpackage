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
		id: "DragDropArea",
		name: "basics.DragDropArea",
		requireName: "basicsdragdroparea",
		fullComponentName: "org.scn.community.basics.DragDropArea",
		fullComponentPackage: "org.scn.community.basics/res/DragDropArea",
		script: "org.scn.community.basics/res/DragDropArea/DragDropArea",
		scriptSpec: "org.scn.community.basics/res/DragDropArea/DragDropAreaSpec",
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
      "refProperty": "elementsContent",
      "refValue": "[]",
      "tooltip": "Clean All Elements",
      "ztlFunction": "-clean",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": false
  },
  "defaultImage": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Default Image Url",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For Default Image (must Be Set)",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "dragContext": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Drag Drop Context",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Drag Drop Context",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "dragKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Drag Drop Key",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Drag Drop Key",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "dropAfterKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Technical Proprty For Drop After Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Proprty For Drop After Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "dropContext": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Drop Context",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Drop Context",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "dropId": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Drop Id",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Drop Id",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "dropIndex": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Technical Proprty For Drop Index",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Proprty For Drop Index",
      "ztlFunction": "-get",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": false
  },
  "dropKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Drop Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Drop Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
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
        "sequence": "key,text,url",
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
  "itemWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Width Of The Item",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Width Of The Item",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 120,
    "visible": true
  },
  "onDrop": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Drop Event",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Drop Event"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "orientation": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "Orientation",
      "desc": "Orientation",
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
      "tooltip": "Orientation",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Horizontal",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Drag Drop Area",
  "icon": "DragDropArea.png",
  "title": "Drag Drop Area 2.0",
  "topics": [
    {
      "content": "Drag Drop Area",
      "title": "Drag Drop Area"
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
  "height": "100",
  "id": "DragDropArea",
  "package": "basics",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "ndd",
      "space": "known"
    }
  ],
  "title": "Drag Drop Area 2.0",
  "tooltip": "Drag Drop Area",
  "width": "300"
};

	return spec;
});// End of closure
