ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "100",
  "id": "BasicBusinessCard",
  "package": "basics",
  "parentControl": "sap.ui.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Basic Business Card 2.0",
  "tooltip": "Basic Business Card",
  "width": "300"
},

"spec" : 
{
  "image": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Image",
      "desc": "Image Url",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For Image",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "default",
    "type": "String",
    "value": "",
    "visible": true
  },
  "name": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Texts",
      "desc": "Name",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Name",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "Last, First",
    "visible": true
  },
  "onPress": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Press",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Press"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "title": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Texts",
      "desc": "Title",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Title Below The Name",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "Expert for All Issues",
    "visible": true
  }
}, 

"specInclude" : 
{}, 

"specAbout" : 
{
  "description": "Basic Business Card",
  "icon": "BasicBusinessCard.png",
  "title": "Basic Business Card 2.0",
  "topics": [
    {
      "content": "Basic Business Card",
      "title": "Basic Business Card"
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