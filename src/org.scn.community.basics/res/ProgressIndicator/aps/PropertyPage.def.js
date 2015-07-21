ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
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
},

"spec" : 
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
}, 

"specInclude" : 
{}, 

"specAbout" : 
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
}

};

	org_scn_community_component_Core(that, that.componentData);
    
	return that;
};