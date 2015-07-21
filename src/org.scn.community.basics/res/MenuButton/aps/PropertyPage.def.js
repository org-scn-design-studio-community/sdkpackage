ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "29",
  "id": "MenuButton",
  "package": "basics",
  "parentControl": "sap.ui.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Menu Button 2.0",
  "tooltip": "Menu Button",
  "width": "400"
},

"spec" : 
{
  "cleanAll": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Internal",
      "desc": "Clean All Buttons",
      "noAps": true,
      "noZtl": false,
      "refDesc": "Buttons",
      "refProperty": "elementsContent",
      "refValue": "[]",
      "tooltip": "Clean All Buttons",
      "ztlFunction": "-clean",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": false
  },
  "defaultImage": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Url For Default Image",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For Default Image Which Should Be Shown",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "Url",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "elementsContent": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"item": {
        "enabled": {
          "desc": "Enabled",
          "type": "boolean,optional"
        },
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "sequence": "key,text,url,enabled,subItem",
        "subItem": {
          "enabled": {
            "desc": "Enabled",
            "type": "boolean,optional"
          },
          "key": {
            "desc": "Unique Key",
            "type": "String"
          },
          "parentKey": {
            "desc": "Parent Key",
            "mode": "ztl",
            "type": "String"
          },
          "sequence": "parentKey,key,text,url,enabled",
          "text": {
            "desc": "Given Text",
            "type": "String"
          },
          "type": "Array",
          "url": {
            "desc": "Given Url",
            "type": "Url,optional"
          }
        },
        "text": {
          "desc": "Given Text",
          "type": "String"
        },
        "type": "Array",
        "url": {
          "desc": "Given Url",
          "type": "Url,optional"
        }
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content",
      "desc": "Buttons",
      "tooltip": "List of Buttons",
      "ztlFunction": "",
      "ztlType": "DoubleArray"
    },
    "type": "String",
    "value": "[]",
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
  "selectedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Technical Proprty For Selected Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Proprty For Selected Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "selectedText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Technical Proprty For Selected Text",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Technical Proprty For Selected Text",
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
  "description": "Menu Button (>= 1.4)",
  "icon": "MenuButton.png",
  "title": "Menu Button 2.0",
  "topics": [
    {
      "content": "Menu Button (>= 1.4)",
      "title": "Menu Button (>= 1.4)"
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