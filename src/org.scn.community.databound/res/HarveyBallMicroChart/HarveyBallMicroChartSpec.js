/**
 * Copyright 2014 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/org-scn-design-studio-community/sdkpackage/
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 *  
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */

(function() {

	org_scn_community_require.knownComponents.databound.HarveyBallMicroChart.spec = 
{};

	org_scn_community_require.knownComponents.databound.HarveyBallMicroChart.specInclude = 
{
  "colorPalette": {
    "opts": {
      "apsControl": "array",
      "arrayMode": "StringArray",
      "cat": "Display",
      "desc": "Colour Palette",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The color palette for the chart. If this property is set, semantic colors defined in HarveyBallMicroChart are ignored. Colors from the palette are assigned to each slice consequentially. When all the palette colors are used, assignment of the colors begins from the first palette color.",
      "ztlFunction": "",
      "ztlType": "StringArray"
    },
    "template": "StringArray",
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "contentWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Content Width",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The width of the chart. If it is not set, the size of the control is defined by the size property.",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": true
  },
  "dataCellListItems": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Items Data List [Multiple]",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Items Data List [Multiple]",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "dataCellListTotal": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Total Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Total Data List",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "formattedLabel": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Labels",
      "desc": "Formatted Label",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If set to true, the totalLabel parameter is considered as the combination of the total value and its scaling factor. The default value is false. It means that the total value and the scaling factor are defined separately by the total and the totalScale properties accordingly.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "items": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"items": {
        "color": {
          "desc": "Colour",
          "type": "String"
        },
        "formattedLabel": {
          "desc": "Formatted Label",
          "type": "boolean"
        },
        "fraction": {
          "desc": "Fraction",
          "type": "float"
        },
        "fractionLabel": {
          "desc": "Fraction Label",
          "type": "String"
        },
        "fractionScale": {
          "desc": "Fraction Scale",
          "type": "String"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "sequence": "key,color,formattedLabel,fraction,fractionLabel,fractionScale",
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Items",
      "desc": "Items",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The pie chart slices.",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "origType": "HarveyBallMicroChartItem",
    "template": "ObjectArray",
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "showFractions": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Show Fractions",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If set to true, the fraction values are displayed near the pie chart. Default is true.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "showTotal": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Show Total",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If set to true, the total value is displayed near the pie chart. Default is true.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "size": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "InfoTileSize",
      "desc": "Size",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "XS",
          "text": "Extra small size"
        },
        {
          "key": "S",
          "text": "Small size"
        },
        {
          "key": "M",
          "text": "Medium size"
        },
        {
          "key": "L",
          "text": "Large size"
        },
        {
          "key": "Auto",
          "text": "The size of the tile depends on the device it is running on. It is large on desktop, medium on tablet and small on phone"
        }
      ],
      "tooltip": "Updates the size of the chart. If not set then the default size is applied based on the device tile.",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Auto",
    "visible": true
  },
  "total": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Total",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The total value. This is taken as 360 degrees value on the chart.",
      "ztlFunction": "",
      "ztlType": "float"
    },
    "template": "float",
    "type": "float",
    "value": 0,
    "visible": true
  },
  "totalLabel": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Labels",
      "desc": "Total Label",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The total label. If specified, it is displayed instead of the total value.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "totalScale": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Total Scale",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The scaling factor that is displayed after the total value.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "useColorPalette": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Colour Palette'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Colour Palette' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useContentWidth": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Content Width'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Content Width' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useItems": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Items",
      "desc": "Use Manual 'Items'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Items' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "useTotal": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Total'",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If checked, the property 'Total' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  }
};

	org_scn_community_require.knownComponents.databound.HarveyBallMicroChart.specAbout = 
{
  "description": "Harvey Ball Micro Chart - Component for Visualization of Data on small areas",
  "icon": "HarveyBallMicroChart.png",
  "title": "Harvey Ball Micro Chart 2.0",
  "topics": [
    {
      "content": "This component can visualize the data on small area as harvey ball chart.",
      "title": "Harvey Ball Micro Chart"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	org_scn_community_require.knownComponents.databound.HarveyBallMicroChart.specComp = 
{
  "dataType": "DataCellList",
  "databound": true,
  "extends1ControlDs": "HarveyBallMicroChart.ds",
  "extends2Control": "HarveyBallMicroChart",
  "extension": "ui5.HarveyBallMicroChart",
  "generatedJsFile": "true",
  "group": "ScnCommunityUnified",
  "handlerType": "sapui5",
  "height": "200",
  "id": "HarveyBallMicroChart",
  "package": "databound",
  "parentControl": "sap.ui.commons.layout.AbsoluteLayout",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "common_databound",
      "space": "known"
    },
    {
      "id": "common_unified",
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
    }
  ],
  "title": "Harvey Ball Micro Chart2.0",
  "tooltip": "Harvey Ball Micro Chart- Component for visualization of data on small areas.",
  "width": "400"
};

})();// End of closure
