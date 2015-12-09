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
		id: "ColorPicker",
		name: "basics.ColorPicker",
		requireName: "basicscolorpicker",
		fullComponentName: "org.scn.community.basics.ColorPicker",
		fullComponentPackage: "org.scn.community.basics/res/ColorPicker",
		script: "org.scn.community.basics/res/ColorPicker/ColorPicker",
		scriptSpec: "org.scn.community.basics/res/ColorPicker/ColorPickerSpec",
		min: false
	};

	spec.spec = 
{
  "colorString": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Color",
      "noAps": false,
      "noZtl": false,
      "tooltip": "This Is The Import-parameter Of The ColorPicker. As Input-parameter, It Can Be A Hexadecimal String (#FFFFFF), A RGB-string Rgb(255,255,255), A HSV-string Hsv(360,100,100), Or A CSS-colorname 'red'. As Output-parameter It Is A RGB-string Containing The Current Color.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "default",
    "type": "String",
    "value": "red",
    "visible": true
  },
  "colorStringHex": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Hex Color",
      "noAps": true,
      "noZtl": false,
      "tooltip": "This Is An Export-parameter Of The ColorPicker. It Is A Hexadecimal String (#FFFFFF) Containing The Current Color.",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "onColorChange": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Color Change",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Color Change"
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
  "description": "Color Picker",
  "icon": "ColorPicker.png",
  "title": "Color Picker 2.0",
  "topics": [
    {
      "content": "Color Picker",
      "title": "Color Picker"
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
  "height": "134",
  "id": "ColorPicker",
  "package": "basics",
  "parentControl": "sap.ui.commons.ColorPicker",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Color Picker 2.0",
  "tooltip": "Color Picker",
  "width": "270"
};

	return spec;
});// End of closure
