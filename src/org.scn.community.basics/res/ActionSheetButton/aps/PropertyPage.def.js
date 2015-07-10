ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "48",
  "id": "ActionSheetButton",
  "package": "basics",
  "parentControl": "sap.m.Button",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "sap_m_loader",
      "space": "known"
    }
  ],
  "title": "Action Sheet Button 2.0",
  "tooltip": "Fiori-Inspired Action Sheet Button menu",
  "width": "48"
},

"spec" : 
{
  "buttonType": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "ButtonType",
      "desc": "Type",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Default",
          "text": "Default"
        },
        {
          "key": "Transparent",
          "text": "Transparent"
        },
        {
          "key": "Accept",
          "text": "Accept"
        },
        {
          "key": "Back",
          "text": "Back"
        },
        {
          "key": "Emphasized",
          "text": "Emphasized"
        },
        {
          "key": "Reject",
          "text": "Reject"
        },
        {
          "key": "Up",
          "text": "Up"
        }
      ],
      "tooltip": "Type",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Default",
    "visible": true
  },
  "icon": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Icon",
      "desc": "Icon",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Icon",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "sap-icon://menu2",
    "visible": true
  },
  "items": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"item": {
        "icon": {
          "desc": "Icon",
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "sequence": "key,text,icon",
        "text": {
          "desc": "Text",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content",
      "desc": "Items",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Content Items for the Component",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "template": "OneLevelArray",
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "onPopoverSelect": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Select",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Select"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "placement": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "Placement",
      "desc": "Placement",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Auto",
          "text": "Auto"
        },
        {
          "key": "Horizontal",
          "text": "Horizontal"
        },
        {
          "key": "Vertical",
          "text": "Vertical"
        },
        {
          "key": "Left",
          "text": "Left"
        },
        {
          "key": "Right",
          "text": "Right"
        },
        {
          "key": "Top",
          "text": "Top"
        },
        {
          "key": "Bottom",
          "text": "Bottom"
        }
      ],
      "tooltip": "Placement",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Auto",
    "visible": true
  },
  "selectedItem": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Selected Item",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Selected Item",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "selectedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Selected Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Selected Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "text": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Title",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Title",
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
  "description": "Fiori-Inspired Action Sheet Button menu",
  "icon": "ActionSheetButton.png",
  "title": "Action Sheet Button 2.0",
  "topics": [
    {
      "content": "Fiori-Inspired Action Sheet Button menu",
      "title": "Action Sheet Button"
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