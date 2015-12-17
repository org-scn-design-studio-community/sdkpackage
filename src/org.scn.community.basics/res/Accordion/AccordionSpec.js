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
		id: "Accordion",
		name: "basics.Accordion",
		requireName: "basicsaccordion",
		fullComponentName: "org.scn.community.basics.Accordion",
		fullComponentPackage: "org.scn.community.basics/res/Accordion",
		script: "org.scn.community.basics/res/Accordion/Accordion",
		scriptSpec: "org.scn.community.basics/res/Accordion/AccordionSpec",
		min: false
	};

	spec.spec = 
{
  "cleanAll": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Internal",
      "desc": "Clean All Nodes",
      "noAps": true,
      "noZtl": false,
      "refDesc": "Elements",
      "refProperty": "elementsContent",
      "refValue": "[]",
      "tooltip": "Clean All Nodes",
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
      "cat": "Display-Image",
      "desc": "Default Image",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Default Image",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "Url",
    "value": "",
    "visible": true
  },
  "elementsContent": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"section": {
        "element": {
          "key": {
            "desc": "Unique Key",
            "type": "String"
          },
          "parentKey": {
            "desc": "Parent Key",
            "mode": "ztl",
            "type": "String"
          },
          "sequence": "parentKey,key,text,url",
          "text": {
            "desc": "Given Text",
            "type": "String"
          },
          "type": "Array",
          "url": {
            "desc": "Given Url",
            "type": "Url"
          }
        },
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "sequence": "key,text,url,element",
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
      "arrayMode": "TwoLevelArray",
      "cat": "Content",
      "desc": "Elements",
      "tooltip": "List of Elements",
      "ztlFunction": "",
      "ztlType": "DoubleArray"
    },
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"SECTION1\",\"leaf\":false,\"text\":\"First Section\"},{\"parentKey\":\"ROOT\",\"key\":\"SECTION2\",\"leaf\":false,\"text\":\"Second Section\"},{\"parentKey\":\"ROOT\",\"key\":\"SECTION3\",\"leaf\":false,\"text\":\"Third Section\"},{\"parentKey\":\"SECTION1\",\"key\":\"SECTION1_ITEM\",\"leaf\":true,\"text\":\"Item 1\"},{\"parentKey\":\"SECTION1\",\"key\":\"SECTION1_ITEM1\",\"leaf\":true,\"text\":\"Item 2\"},{\"parentKey\":\"SECTION2\",\"key\":\"SECTION2_ITEM\",\"leaf\":true,\"text\":\"Item 2/1\"},{\"parentKey\":\"SECTION2\",\"key\":\"SECTION2_ITEM1\",\"leaf\":true,\"text\":\"Item 2/2\"},{\"parentKey\":\"SECTION2\",\"key\":\"SECTION2_ITEM2\",\"leaf\":true,\"text\":\"Item 2/3\"},{\"parentKey\":\"SECTION3\",\"key\":\"SECTION3_ITEM\",\"leaf\":true,\"text\":\"Item 3/1\"}]",
    "visible": true
  },
  "expandedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Expaned Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Expaned Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": false
  },
  "imageSize": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Image",
      "choiceType": "ImageSize",
      "desc": "Size of the Image",
      "options": [
        {
          "key": "Size_16px",
          "text": "16x16 pixels"
        },
        {
          "key": "Size_32px",
          "text": "32x32 pixels"
        }
      ],
      "tooltip": "Size of the Image",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Size_16px",
    "visible": true
  },
  "maxSectionHeight": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Section",
      "desc": "Max Height for Section",
      "tooltip": "Max Height for Section",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": 200,
    "visible": true
  },
  "memberDisplay": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Members",
      "choiceType": "MemberDisplay",
      "desc": "Member Display",
      "options": [
        {
          "key": "Text",
          "text": "Text Only"
        },
        {
          "key": "Text_Key",
          "text": "Text (Key)"
        }
      ],
      "tooltip": "Member Display",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Text",
    "visible": true
  },
  "onFirstExpand": {
    "opts": {
      "cat": "Events",
      "desc": "On First Expand",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event for On First Expand"
    },
    "type": "ScriptText",
    "value": "",
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
  "supportedContentNotation": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Supported Content Notation",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Supported Content Notation",
      "ztlFunction": "-get",
      "ztlType": "shared.ContentNotation"
    },
    "type": "String",
    "value": "PARENT_CHILD_TEXT_URL",
    "visible": false
  },
  "withImage": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Image",
      "desc": "Use Images",
      "tooltip": "Use Images",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Accordion - Dynamic List of Entries",
  "icon": "Accordion.png",
  "title": "Accordion 2.0",
  "topics": [
    {
      "content": "Displays collapsible content panels for presenting information in a limited amount of space.",
      "title": "Accordion"
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
  "height": "600",
  "id": "Accordion",
  "package": "basics",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Accordion 2.0",
  "tooltip": "Accordion - Dynamic List of Entries",
  "width": "260"
};

	return spec;
});// End of closure
