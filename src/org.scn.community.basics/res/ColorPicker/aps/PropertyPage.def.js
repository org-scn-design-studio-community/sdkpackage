ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "134",
  "id": "ColorPicker",
  "package": "basics",
  "parentControl": "sap.ui.commons.ColorPicker",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Color Picker 2.0",
  "tooltip": "Color Picker",
  "width": "270"
},

"spec" : 
{
  "colorString": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Color",
      "noAps": false,
      "noZtl": false,
      "tooltip": "This Is The Import-parameter Of The ColorPicker. As Input-parameter, It Can Be A Hexadecimal String (#FFFFFF), A RGB-string Rgb(255,255,255), A HSV-string Hsv(360,100,100), Or A CSS-colorname 'red'. As Output-parameter It Is A RGB-string Containing The Current Color.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "default",
    "type": "String",
    "value": "red",
    "visible": true
  },
  "colorStringHex": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Hex Color",
      "noAps": true,
      "noZtl": false,
      "tooltip": "This Is An Export-parameter Of The ColorPicker. It Is A Hexadecimal String (#FFFFFF) Containing The Current Color.",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "onColorChange": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Color Change",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Color Change"
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
  "description": "Color Picker",
  "icon": "ColorPicker.png",
  "title": "Color Picker 2.0",
  "topics": [
    {
      "content": "Color Picker",
      "title": "Color Picker"
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