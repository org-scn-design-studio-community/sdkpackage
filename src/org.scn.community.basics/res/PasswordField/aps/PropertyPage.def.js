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
  "id": "PasswordField",
  "package": "basics",
  "parentControl": "sap.ui.commons.PasswordField",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Password Field 2.0",
  "tooltip": "Password Field",
  "width": "300"
},

"spec" : 
{
  "editable": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Editable",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Editable",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "enabled": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Enabled",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Enabled",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "onChanged": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Changed"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "tooltip": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Tooltip",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Tooltip",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
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
      "tooltip": "Value",
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
  "description": "Password Field",
  "icon": "PasswordField.png",
  "title": "Password Field 2.0",
  "topics": [
    {
      "content": "Password Field",
      "title": "Password Field"
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