ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "38",
  "id": "ApplicationHeader",
  "package": "basics",
  "parentControl": "sap.ui.commons.ApplicationHeader",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Application Header 2.0",
  "tooltip": "Application Header",
  "width": "auto"
},

"spec" : 
{
  "displayLogoff": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Texts",
      "desc": "Display Logoff",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If Set To True, The Logoff Area Will Be Displayed At The Right Hand Side Of The Application Header.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "",
    "visible": true
  },
  "displayWelcome": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Texts",
      "desc": "Display Welcome",
      "noAps": false,
      "noZtl": false,
      "tooltip": "By Default, Set To True And Dislpays The Welcome Text.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "true",
    "visible": true
  },
  "logoSrc": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Logo",
      "desc": "Logo Source",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Path (src) To The Logo Icon To Be Displayed In The Application Header.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "default",
    "type": "String",
    "value": "",
    "visible": true
  },
  "logoText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Logo",
      "desc": "Logo Text",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The Text That Will Be Displayed Beside The Logo In The Application Header. This Property Is Optional.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "onLogoff": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Logoff",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Fires An Event To Log Off The User From The Application."
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "userName": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Texts",
      "desc": "User Name",
      "noAps": false,
      "noZtl": false,
      "tooltip": "User Name That Will Be Displayed Beside The Welcome Text.",
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
  "description": "Application Header",
  "icon": "ApplicationHeader.png",
  "title": "Application Header 2.0",
  "topics": [
    {
      "content": "Application Header",
      "title": "Application Header"
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