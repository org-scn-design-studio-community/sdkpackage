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
		id: "FioriBusyDialog",
		name: "databound.FioriBusyDialog",
		requireName: "databoundfioribusydialog",
		fullComponentName: "org.scn.community.databound.FioriBusyDialog",
		fullComponentPackage: "org.scn.community.databound/res/FioriBusyDialog",
		script: "org.scn.community.databound/res/FioriBusyDialog/FioriBusyDialog",
		scriptSpec: "org.scn.community.databound/res/FioriBusyDialog/FioriBusyDialogSpec",
		min: false
	};

	spec.spec = 
{};

	spec.specInclude = 
{
  "cancelButtonText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Cancel Button Text",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The text of the cancel button. The default text is ",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "closeedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Closeed Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Closeed Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "origType": "EventKey",
    "template": "EventKey",
    "type": "String",
    "value": "",
    "visible": false
  },
  "customIcon": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Custom Icon",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Icon displayed in the dialog header. This icon is invisible in iOS platform and it is density aware. You can use the density convention (@2, @1.5, etc.) to provide higher resolution image for higher density screens.",
      "ztlFunction": "",
      "ztlType": "Url"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "customIconDensityAware": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Custom Icon Density Aware",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If this is set to ",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "customIconHeight": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Custom Icon Height",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Height of the provided icon with default value ",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 44,
    "visible": true
  },
  "customIconRotationSpeed": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Custom Icon Rotation Speed",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Defines the rotation speed of the given image. If GIF file is used, the speed has to be set to 0. The value is in milliseconds.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 1000,
    "visible": true
  },
  "customIconWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Custom Icon Width",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Width of the provided icon with default value ",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 44,
    "visible": true
  },
  "onCloseed": {
    "opts": {
      "cat": "Events",
      "desc": "On Closeed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on Indicates if the close events are triggered by a user, pressing a cancel button or because the operation was terminated.This parameter is set to true if the close event is fired by user interaction."
    },
    "template": "ScriptText",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "showCancelButton": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Show Cancel Button",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Indicates if the cancel button will be rendered inside the busy dialog. The default value is set to ",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "text": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Text",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Optional text displayed inside the dialog.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "title": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Title",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Sets the title of the BusyDialog. The default value is an empty string.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "useCustomIcon": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Custom Icon'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Custom Icon' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useCustomIconHeight": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Custom Icon Height'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Custom Icon Height' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useCustomIconRotationSpeed": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Custom Icon Rotation Speed'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Custom Icon Rotation Speed' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useCustomIconWidth": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Custom Icon Width'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Custom Icon Width' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  }
};

	spec.specAbout = 
{
  "description": "Fiori Busy Dialog - A Busy Dialog",
  "icon": "BusyDialog.png",
  "title": "Fiori Busy Dialog 2.0",
  "topics": [
    {
      "content": "This component can display busy dialog.",
      "title": "Busy Dialog"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	spec.specComp = 
{
  "dataType": "DataCellList",
  "databound": false,
  "extends1ControlDs": "BusyDialog.ds",
  "extends2Control": "BusyDialog",
  "extends3ControlEvents": "BusyDialog.events",
  "extension": "ui5.BusyDialog",
  "generatedJsFile": "true",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "580",
  "id": "FioriBusyDialog",
  "modes": "m",
  "package": "databound",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Busy Dialog 2.0",
  "tooltip": "Busy Dialog - Component for busy dialog.",
  "ui5package": "sap.m",
  "width": "420"
};

	return spec;
});// End of closure
