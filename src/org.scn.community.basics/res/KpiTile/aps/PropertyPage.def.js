ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "dataType": "-",
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "190",
  "id": "KpiTile",
  "package": "basics",
  "parentControl": "sap.ui.commons.layout.AbsoluteLayout",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "jshashtable",
      "space": "known"
    },
    {
      "id": "numberformatter",
      "space": "known"
    },
    {
      "id": "sap_m_loader",
      "space": "known"
    },
    {
      "id": "sap_suite_loader",
      "space": "known"
    },
    {
      "id": "x2js",
      "space": "known"
    }
  ],
  "title": "Kpi Tile 2.0",
  "tooltip": "Kpi Tile - Custom KPI Visualization",
  "width": "220"
},

"spec" : 
{
  "componentsSpec": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"component": {
        "bottom": {
          "desc": "Bottom Position",
          "type": "int"
        },
        "componentType": {
          "desc": "Component Type",
          "type": "String"
        },
        "height": {
          "desc": "Height in Px",
          "type": "int"
        },
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "left": {
          "desc": "Left Position (-1 if right margin is set)",
          "type": "int"
        },
        "property": {
          "key": {
            "desc": "Property Name",
            "type": "String"
          },
          "parentKey": {
            "desc": "Parent Key",
            "mode": "ztl",
            "type": "String"
          },
          "sequence": "parentKey,key,value",
          "type": "Array",
          "value": {
            "apsControl": "textarea",
            "desc": "Property Value",
            "type": "String"
          }
        },
        "right": {
          "desc": "Rigth Position",
          "type": "int"
        },
        "sequence": "key,componentType,top,bottom,left,right,width,height,specification,property",
        "specification": {
          "apsControl": "textarea",
          "desc": "Full Specification",
          "type": "String"
        },
        "top": {
          "desc": "Top Position (-1 if bottom margin is set)",
          "type": "int"
        },
        "type": "Array",
        "width": {
          "desc": "Width in Px",
          "type": "int"
        }
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content-Components",
      "desc": "Components",
      "tooltip": "List of Components",
      "ztlFunction": "-unique",
      "ztlType": "DoubleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "layoutSpec": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"layout": {
        "key": {
          "desc": "Property Name",
          "type": "String"
        },
        "sequence": "key,value",
        "type": "Array",
        "value": {
          "apsControl": "textarea",
          "desc": "Property Value",
          "type": "String"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Layout",
      "desc": "Layout Properties",
      "tooltip": "Layout Properties",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "onClick": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Click",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Click"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  }
}, 

"specAbout" : 
{
  "description": "Kpi Tile",
  "icon": "KpiTile.png",
  "title": "Kpi Tile 2.0",
  "topics": [{
    "content": "Kpi Tile - Custom Tile Component based on UI5 Specification. Allows you to build own Tiles.",
    "title": "Kpi Tile"
  }]
}

};

	org_scn_community_component_Core(that, that.componentData);
    
	return that;
};