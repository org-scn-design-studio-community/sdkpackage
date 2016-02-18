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
		id: "PostResponseParser",
		name: "utils.PostResponseParser",
		requireName: "utilspostresponseparser",
		fullComponentName: "org.scn.community.utils.PostResponseParser",
		fullComponentPackage: "org.scn.community.utils/res/PostResponseParser",
		script: "org.scn.community.utils/res/PostResponseParser/PostResponseParser",
		scriptSpec: "org.scn.community.utils/res/PostResponseParser/PostResponseParserSpec",
		min: false
	};

	spec.spec = 
{
  "DBasicAuthorisation": {
    "opts": {
      "apsControl": "text",
      "cat": "Config",
      "desc": "Basic Authorization Content [Basic: GUID]",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Basic Authorization Content [Basic: GUID]",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "DContentType": {
    "opts": {
      "apsControl": "text",
      "cat": "Config",
      "desc": "Content Type",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Content Type",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "application/x-www-form-urlencoded",
    "visible": true
  },
  "DCrossDomain": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Flags",
      "desc": "Is This Request Cross-Domain",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Is This Request Cross-Domain",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "DExpectedContentType": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Return",
      "choiceType": "-",
      "desc": "Expected Content Type",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "text",
          "text": "text"
        },
        {
          "key": "json",
          "text": "json"
        }
      ],
      "tooltip": "Expected Content Type",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "text",
    "visible": true
  },
  "DExpectedResponseStatus": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Return",
      "desc": "Response Status For Good Response",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Response Status For Good Response",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 200,
    "visible": true
  },
  "DHeaders": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"header": {
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "sequence": "key,value",
        "type": "Array",
        "value": {
          "desc": "Given Value",
          "type": "String"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content",
      "desc": "Headers",
      "tooltip": "List Of Headers (Name / Value)",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "DJsonp": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Flags",
      "desc": "Do You Want To Use JSONP",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Do You Want To Use JSONP",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "DParameters": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"parameter": {
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "sequence": "key,value",
        "type": "Array",
        "value": {
          "desc": "Given Value",
          "type": "String"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content",
      "desc": "Parameters",
      "tooltip": "List of Parameters (Name / Value)",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "DPayload": {
    "opts": {
      "apsControl": "text",
      "cat": "Config",
      "desc": "HTTP Reuqest Payload",
      "noAps": true,
      "noZtl": false,
      "tooltip": "HTTP Reuqest Payload",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DRawParameters": {
    "opts": {
      "apsControl": "text",
      "cat": "Content",
      "desc": "Raw Parameters As String Content",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Raw Parameters As String Content",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DRequestMethod": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Config",
      "choiceType": "-",
      "desc": "Request Method (POST | GET | PUT)",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "POST",
          "text": "POST"
        },
        {
          "key": "GET",
          "text": "GET"
        },
        {
          "key": "PUT",
          "text": "PUT"
        }
      ],
      "tooltip": "Request Method (POST | GET | PUT)",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "POST",
    "visible": true
  },
  "DRequestType": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Config",
      "choiceType": "-",
      "desc": "Request Type (JQuery | HTTP)",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "JQuery",
          "text": "JQuery"
        },
        {
          "key": "HTTPRequest",
          "text": "HTTPRequest"
        }
      ],
      "tooltip": "Request Type (JQuery | HTTP)",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "JQuery",
    "visible": true
  },
  "DReturnHeaders": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"returnHeader": {
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "sequence": "key,value",
        "type": "Array",
        "value": {
          "desc": "Given Value",
          "type": "String"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content",
      "desc": "Parameters",
      "noAps": true,
      "noZtl": false,
      "tooltip": "List of Parameters (Name / Value)",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "DReturnParameters": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"returnParameter": {
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "sequence": "key,value",
        "type": "Array",
        "value": {
          "desc": "Given Value",
          "type": "String"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content",
      "desc": "Parameters",
      "noAps": true,
      "noZtl": false,
      "tooltip": "List of Return Parameters (Name / Value)",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "DReturnResponse": {
    "opts": {
      "apsControl": "text",
      "cat": "Return",
      "desc": "Return Response As String",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Return Response As String",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DReturnStatus": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Return",
      "desc": "Return Status",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Return Status",
      "ztlFunction": "-get",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 200,
    "visible": false
  },
  "DTrigger": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Just As Simple Triger",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Just As Simple Triger",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DUrl": {
    "opts": {
      "apsControl": "text",
      "cat": "Config",
      "desc": "Url To Send The Request",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url To Send The Request",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "DWithCredentials": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Flags",
      "desc": "Do You Need With Credentials",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Do You Need With Credentials",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "onResponse": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Response",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Response"
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
  "description": "Creates a Request and Parses the Response (Json)",
  "icon": "PostResponseParser.png",
  "title": "Post Response Parser 2.0",
  "topics": [
    {
      "content": "Creates a Request and Parses the Response (Json)",
      "title": "Post Response Parser"
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
  "group": "ScnCommunityUtils",
  "handlerType": "sapui5",
  "height": "10",
  "id": "PostResponseParser",
  "modes": "commons m",
  "package": "utils",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Post Response Parser 2.0",
  "tooltip": "Creates a Request and Parses the Response (Json)",
  "width": "10"
};

	return spec;
});// End of closure
