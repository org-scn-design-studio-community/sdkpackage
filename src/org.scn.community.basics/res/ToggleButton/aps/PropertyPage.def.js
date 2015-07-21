ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "22",
  "id": "ToggleButton",
  "package": "basics",
  "parentControl": "sap.ui.commons.ToggleButton",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Toggle Button 2.0",
  "tooltip": "Toggle Button",
  "width": "80"
},

"spec" : 
{
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
  "icon": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Icon",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Icon To Be Displayed As Graphical Element Within The Button. This Can Be An URI To An Image Or An Icon Font URI",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "iconHovered": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Icon Hovered",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Icon To Be Displayed As Graphical Element Within The Button When It Is Hovered (only If Also A Base Icon Was Specified). If Not Specified The Base Icon Is Used. If A Icon Font Icon Is Used, This Property Is Ignored",
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
      "tooltip": "Icon To Be Displayed As Graphical Element Within The Button When It Is Selected (only If Also A Base Icon Was Specified). If Not Specified The Base Or Hovered Icon Is Used. If A Icon Font Icon Is Used, This Property Is Ignored",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "onPress": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Press",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Press"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "pressed": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Pressed",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The Property Is True When The Control Is Toggled. The Default State Of This Property Is False",
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
      "desc": "Text Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Button Text Displayed At Runtime",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "tooltip": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Tooltip Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Button Tooltip Displayed At Runtime",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  }
}, 

"specInclude" : 
{}, 

"specAbout" : 
{
  "description": "Toggle Button",
  "icon": "ToggleButton.png",
  "title": "Toggle Button 2.0",
  "topics": [
    {
      "content": "Toggle Button",
      "title": "Toggle Button"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
}

};

	org_scn_community_component_Core(that, that.componentData);
    
	return that;
};