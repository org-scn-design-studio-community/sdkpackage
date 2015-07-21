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
  "id": "TriStateCheckBox",
  "package": "basics",
  "parentControl": "sap.ui.commons.TriStateCheckBox",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Tri State CheckBox 2.0",
  "tooltip": "Tri State CheckBox",
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
  "onSelectionChanged": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Selection Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Selection Changed"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "selectionState": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "SelectionsState",
      "desc": "Tooltip",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Checked",
          "text": "Checked"
        },
        {
          "key": "Unchecked",
          "text": "Unchecked"
        },
        {
          "key": "Mixed",
          "text": "Mixed"
        }
      ],
      "tooltip": "Tooltip",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Unchecked",
    "visible": true
  },
  "text": {
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
    "value": "tri state value",
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
  }
}, 

"specInclude" : 
{}, 

"specAbout" : 
{
  "description": "Tri State CheckBox",
  "icon": "TriStateCheckBox.png",
  "title": "Tri State CheckBox 2.0",
  "topics": [
    {
      "content": "Tri State CheckBox",
      "title": "Tri State CheckBox"
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