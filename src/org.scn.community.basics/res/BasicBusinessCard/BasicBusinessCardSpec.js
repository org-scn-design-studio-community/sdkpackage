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
		id: "BasicBusinessCard",
		name: "basics.BasicBusinessCard",
		requireName: "basicsbasicbusinesscard",
		fullComponentName: "org.scn.community.basics.BasicBusinessCard",
		fullComponentPackage: "org.scn.community.basics/res/BasicBusinessCard",
		script: "org.scn.community.basics/res/BasicBusinessCard/BasicBusinessCard",
		scriptSpec: "org.scn.community.basics/res/BasicBusinessCard/BasicBusinessCardSpec",
		min: false
	};

	spec.spec = 
{
  "image": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Image",
      "desc": "Image Url",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For Image",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "default",
    "type": "String",
    "value": "",
    "visible": true
  },
  "name": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Texts",
      "desc": "Name",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Name",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "Last, First",
    "visible": true
  },
  "onPress": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Press",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Press"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "title": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Texts",
      "desc": "Title",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Title Below The Name",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "Expert for All Issues",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Basic Business Card",
  "icon": "BasicBusinessCard.png",
  "title": "Basic Business Card 2.0",
  "topics": [
    {
      "content": "Basic Business Card",
      "title": "Basic Business Card"
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
  "id": "BasicBusinessCard",
  "package": "basics",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Basic Business Card 2.0",
  "tooltip": "Basic Business Card",
  "width": "300"
};

	return spec;
});// End of closure
