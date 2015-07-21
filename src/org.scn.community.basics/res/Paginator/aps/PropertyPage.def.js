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
  "id": "Paginator",
  "package": "basics",
  "parentControl": "sap.ui.commons.Paginator",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Paginator 2.0",
  "tooltip": "Paginator",
  "width": "270"
},

"spec" : 
{
  "currentPage": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Current Page",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Represents The Current Page Number.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": true
  },
  "numberOfPages": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Number Of Pages",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Represents The Overall Number Of Pages That Are Embedded Into The Parent Control.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 3,
    "visible": true
  },
  "onPageChange": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Page Change",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event Is Fired When The User Navigates To Another Page By Selecting It Directly, Or By Jumping Forward Or Backward."
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
  "description": "Paginator",
  "icon": "Paginator.png",
  "title": "Paginator 2.0",
  "topics": [
    {
      "content": "Paginator",
      "title": "Paginator"
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