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
  "id": "FallbackPicture",
  "package": "basics",
  "parentControl": "sap.ui.commons.Image",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Fallback Picture 2.0",
  "tooltip": "Fallback Picture",
  "width": "100"
},

"spec" : 
{
  "fallbackPicture": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Url For Fallback Picture",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For Fallback Picture Which Should Be Shown",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "default",
    "type": "Url",
    "value": "",
    "visible": true
  },
  "picture": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Url For Picture",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url For Picture Which Should Be Shown",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "default",
    "type": "Url",
    "value": "",
    "visible": true
  }
}, 

"specAbout" : 
{
  "description": "Fallback Picture",
  "icon": "FallbackPicture.png",
  "title": "Fallback Picture 2.0",
  "topics": [
    {
      "content": "Fallback Picture",
      "title": "Fallback Picture"
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