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
		id: "EmbeddedFrame",
		name: "basics.EmbeddedFrame",
		requireName: "basicsembeddedframe",
		fullComponentName: "org.scn.community.basics.EmbeddedFrame",
		fullComponentPackage: "org.scn.community.basics/res/EmbeddedFrame",
		script: "org.scn.community.basics/res/EmbeddedFrame/EmbeddedFrame",
		scriptSpec: "org.scn.community.basics/res/EmbeddedFrame/EmbeddedFrameSpec",
		min: false
	};

	spec.spec = 
{
  "domainrelaxlevel": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Domain Relax Level",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Level of Domain Relaxation",
      "ztlFunction": "-get",
      "ztlType": "int"
    },
    "type": "int",
    "value": "0",
    "visible": true
  },
  "explicitlySetDomain": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Explicitly set document domain",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Explicitly set document domain",
      "ztlFunction": "-get",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": "false",
    "visible": true
  },
  "reload": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Trigger Reload",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Trigger Reload",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "init",
    "visible": false
  },
  "sandbox": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Sandbox Attribute Values",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Sandbox Attribute Values",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "skipport": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Skip port in domain",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Skip port in domain",
      "ztlFunction": "-get",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": "true",
    "visible": true
  },
  "url": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Url",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url to Embedd",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "usesandbox": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Sandbox Attribute",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Use Sandbox Attribute",
      "ztlFunction": "-get",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": "true",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Embedded Frame - Include external web pages directly in your application",
  "icon": "EmbeddedFrame.png",
  "title": "Embedded Frame 2.0",
  "topics": [
    {
      "content": "Includes external web pages directly in your application.",
      "title": "Embedded Frame"
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
  "height": "400",
  "id": "EmbeddedFrame",
  "modes": "commons m",
  "package": "basics",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Embedded Frame 2.0",
  "tooltip": "Embedded Frame - Include external web pages directly in your application",
  "width": "600"
};

	return spec;
});// End of closure
