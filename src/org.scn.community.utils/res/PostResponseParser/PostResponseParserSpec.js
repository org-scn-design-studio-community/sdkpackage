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
      "cat": "Display",
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
  "DCleanAll": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Clean All Parameters",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Clean All Parameters",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DContentType": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
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
      "cat": "Display",
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
      "cat": "Display",
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
      "cat": "Display",
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
      "apsControl": "text",
      "cat": "Display",
      "desc": "List Of Headers (Name / Value)",
      "noAps": true,
      "noZtl": false,
      "tooltip": "List Of Headers (Name / Value)",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DJsonp": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
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
      "apsControl": "text",
      "cat": "Display",
      "desc": "List Of Parameters (Name / Value)",
      "noAps": true,
      "noZtl": false,
      "tooltip": "List Of Parameters (Name / Value)",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DPayload": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
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
      "cat": "Display",
      "desc": "Raw Parameters As String Content",
      "noAps": true,
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
      "cat": "Display",
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
      "cat": "Display",
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
      "apsControl": "text",
      "cat": "Display",
      "desc": "Return Headers",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Return Headers",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DReturnParameters": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Return Parameters",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Return Parameters",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DReturnResponse": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
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
      "cat": "Display",
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
      "noZtl": false,
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
      "cat": "Display",
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
      "cat": "Display",
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
