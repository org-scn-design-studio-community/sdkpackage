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
		id: "RatingIndicator",
		name: "basics.RatingIndicator",
		requireName: "basicsratingindicator",
		fullComponentName: "org.scn.community.basics.RatingIndicator",
		fullComponentPackage: "org.scn.community.basics/res/RatingIndicator",
		script: "org.scn.community.basics/res/RatingIndicator/RatingIndicator",
		scriptSpec: "org.scn.community.basics/res/RatingIndicator/RatingIndicatorSpec",
		min: false
	};

	spec.spec = 
{
  "editable": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Editable",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Value 'true' Is Required For Changes On The Rating Symbols.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "iconHovered": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Icon Hovered",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The URI To The Image Which Is Displayed When The Mouse Hovers Onto A Rating Symbol. If Used, A Requirement Is That All Custom Icons Need To Have The Same Size. Note That When This Attribute Is Used Also The Other Icon Attributes Need To Be Set.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "iconSelected": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Icon Selected",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The URI To The Image Which Shall Be Displayed For All Selected Rating Symbols. Note That When This Attribute Is Used, Also The Other Icon Attributes Need To Be Set.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "iconUnselected": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Icon Unselected",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The URI To The Image Which Shall Be Displayed For All Unselected Rating Symbols. If This Attribute Is Used, A Requirement Is That All Custom Icons Need To Have The Same Size. Note That When This Attribute Is Used Also The Other Icon Attributes Need To Be Set.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "maxValue": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Maximum Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The Number Of Displayed Rating Symbols",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 5,
    "visible": true
  },
  "onChange": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Change",
      "noAps": true,
      "noZtl": true,
      "tooltip": "The Event Is Fired When The User Has Done A Rating."
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "value": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The Number Of Displayed Rating Symbols",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 3.5,
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Rating Indicator",
  "icon": "RatingIndicator.png",
  "title": "Rating Indicator 2.0",
  "topics": [
    {
      "content": "Rating Indicator",
      "title": "Rating Indicator"
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
  "height": "40",
  "id": "RatingIndicator",
  "package": "basics",
  "parentControl": "sap.ui.commons.RatingIndicator",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Rating Indicator 2.0",
  "tooltip": "Rating Indicator",
  "width": "200"
};

	return spec;
});// End of closure
