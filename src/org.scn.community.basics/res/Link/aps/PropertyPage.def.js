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
  "id": "Link",
  "package": "basics",
  "parentControl": "sap.ui.commons.Link",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Link 2.0",
  "tooltip": "Link",
  "width": "100"
},

"spec" : 
{
  "onPress": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Press",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Fires The Event When The User Clicks The Control."
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "text": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Link Text",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Link Text To Be Displayed..",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "Go Sap...",
    "visible": true
  }
}, 

"specInclude" : 
{}, 

"specAbout" : 
{
  "description": "Link",
  "icon": "Link.png",
  "title": "Link 2.0",
  "topics": [
    {
      "content": "Link",
      "title": "Link"
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