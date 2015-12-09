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
		id: "ProgressIndicator",
		name: "basics.ProgressIndicator",
		requireName: "basicsprogressindicator",
		fullComponentName: "org.scn.community.basics.ProgressIndicator",
		fullComponentPackage: "org.scn.community.basics/res/ProgressIndicator",
		script: "org.scn.community.basics/res/ProgressIndicator/ProgressIndicator",
		scriptSpec: "org.scn.community.basics/res/ProgressIndicator/ProgressIndicatorSpec",
		min: false
	};

	spec.spec = 
{
  "barColor": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "BarColor",
      "desc": "Bar Colour",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Critical",
          "text": "Critical"
        },
        {
          "key": "Negative",
          "text": "Negative"
        },
        {
          "key": "Neutral",
          "text": "Neutral"
        },
        {
          "key": "Positive",
          "text": "Positive"
        }
      ],
      "tooltip": "The Colour Of The Bar.",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Neutral",
    "visible": true
  },
  "displayValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Display Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The Text Value To Be Displayed In The Bar.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "enabled": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Enabled",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Switches Enabled State Of The Control. Disabled Fields Have Different Colours And Can Not Be Focused.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "percentValue": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Percent Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The Numerical Value For The Displayed Length Of The Progress Bar.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 50,
    "visible": true
  },
  "showValue": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Show Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Specifies Whether The Current Value Shall Be Rendered Inside The Bar.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Progress Indicator",
  "icon": "ProgressIndicator.png",
  "title": "Progress Indicator 2.0",
  "topics": [
    {
      "content": "Progress Indicator",
      "title": "Progress Indicator"
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
  "height": "20",
  "id": "ProgressIndicator",
  "package": "basics",
  "parentControl": "sap.ui.commons.ProgressIndicator",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Progress Indicator 2.0",
  "tooltip": "Progress Indicator",
  "width": "270"
};

	return spec;
});// End of closure
