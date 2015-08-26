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

(function() {

	org_scn_community_require.knownComponents.basics.TimeOut.spec = 
{
  
  "timer": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Timeout after (ms)",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Timeout after (ms)",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 5000,
    "visible": true
  },
  "periodic": {
	    "opts": {
	      "apsControl": "checkbox",
	      "cat": "Display",
	      "desc": "Periodic?",
	      "noAps": false,
	      "noZtl": false,
	      "tooltip": "Periodic?",
	      "ztlFunction": "",
	      "ztlType": "boolean"
	    },
	    "template": "boolean",
	    "type": "boolean",
	    "value": false,
	    "visible": true
  },
  "start": {
	    "opts": {
	      "apsControl": "text",
	      "cat": "Display",
	      "desc": "Timer start trigger",
	      "noAps": true,
	      "noZtl": false,
	      "tooltip": "Timer start trigger",
	      "ztlFunction": "",
	      "ztlType": "String"
	    },
	    "template": "String",
	    "type": "String",
	    "value": "",
	    "visible": false
  },
  "stop": {
	    "opts": {
		      "apsControl": "text",
		      "cat": "Display",
		      "desc": "Timer stop trigger",
		      "noAps": true,
		      "noZtl": false,
		      "tooltip": "Timer stop trigger",
		      "ztlFunction": "",
		      "ztlType": "String"
		    },
		    "template": "String",
		    "type": "String",
		    "value": "",
		    "visible": false
	  },
  "onTimeout": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Timeout",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Timeout"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  }
};

	org_scn_community_require.knownComponents.basics.TimeOut.specInclude = 
{};

	org_scn_community_require.knownComponents.basics.TimeOut.specAbout = 
{
  "description": "TimeOut",
  "icon": "TimeOut.png",
  "title": "TimeOut 2.0",
  "topics": [
    {
      "content": "TimeOut",
      "title": "TimeOut"
    },
    {
      "content": "This component is a non-visualization component. It requires no space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	org_scn_community_require.knownComponents.basics.TimeOut.specComp = 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "div",
  "height": "0",
  "id": "TimeOut",
  "package": "basics",
  "parentControl": "sap.ui.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "TimeOut 2.0",
  "tooltip": "TimeOut",
  "width": "0"
};

})();// End of closure
