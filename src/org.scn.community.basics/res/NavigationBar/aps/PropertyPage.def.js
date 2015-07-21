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
  "id": "NavigationBar",
  "package": "basics",
  "parentControl": "sap.ui.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Navigation Bar 2.0",
  "tooltip": "Navigation Bar",
  "width": "300"
},

"spec" : 
{
  "DCleanAll": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Internal",
      "desc": "Clean All Elements",
      "noAps": true,
      "noZtl": false,
      "refDesc": "Elements",
      "refProperty": "DElementsContent",
      "refValue": "[]",
      "tooltip": "Clean All Elements",
      "ztlFunction": "-clean",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": false
  },
  "DElementsContent": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"step": {
        "enabled": {
          "desc": "Enabled",
          "type": "boolean"
        },
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "sequence": "key,text,visible,enabled",
        "text": {
          "desc": "Given Text",
          "type": "String"
        },
        "type": "Array",
        "visible": {
          "desc": "Visible",
          "type": "boolean"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content",
      "desc": "Steps",
      "tooltip": "List of Steps",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "DSelectedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Selected Step Key",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Selected Step Key",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "DSelectedText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Selected Text",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Selected Text",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "numberOfVisibleSteps": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Number Of Visible Steps",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Number Of Visible Steps",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
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
  }
}, 

"specInclude" : 
{}, 

"specAbout" : 
{
  "description": "Navigation Bar",
  "icon": "NavigationBar.png",
  "title": "Navigation Bar 2.0",
  "topics": [
    {
      "content": "Navigation Bar",
      "title": "Navigation Bar"
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