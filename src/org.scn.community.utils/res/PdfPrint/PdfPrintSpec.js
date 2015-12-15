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
define([],
function() {

	var spec = {
		id: "PdfPrint",
		name: "utils.PdfPrint",
		requireName: "utilspdfprint",
		fullComponentName: "org.scn.community.utils.PdfPrint",
		fullComponentPackage: "org.scn.community.utils/res/PdfPrint",
		script: "org.scn.community.utils/res/PdfPrint/PdfPrint",
		scriptSpec: "org.scn.community.utils/res/PdfPrint/PdfPrintSpec",
		min: false
	};

	spec.spec = 
{
  "fileName": {
    "opts": {
      "apsControl": "text",
      "cat": "Behavior",
      "desc": "File Name",
      "noAps": false,
      "noZtl": false,
      "tooltip": "File Name",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "PDF_$TIME",
    "visible": true
  },
  "format": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Behavior",
      "choiceType": "-",
      "desc": "Page Format",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "a0",
          "text": "a0"
        },
        {
          "key": "a1",
          "text": "a1"
        },
        {
          "key": "a2",
          "text": "a2"
        },
        {
          "key": "a3",
          "text": "a3"
        },
        {
          "key": "a4",
          "text": "a4"
        },
        {
          "key": "a5",
          "text": "a5"
        },
        {
          "key": "a6",
          "text": "a6"
        },
        {
          "key": "a7",
          "text": "a7"
        },
        {
          "key": "a8",
          "text": "a8"
        },
        {
          "key": "a9",
          "text": "a9"
        },
        {
          "key": "a10",
          "text": "a10"
        },
        {
          "key": "b0",
          "text": "b0"
        },
        {
          "key": "b1",
          "text": "b1"
        },
        {
          "key": "b2",
          "text": "b2"
        },
        {
          "key": "b3",
          "text": "b3"
        },
        {
          "key": "b4",
          "text": "b4"
        },
        {
          "key": "b5",
          "text": "b5"
        },
        {
          "key": "b6",
          "text": "b6"
        },
        {
          "key": "b7",
          "text": "b7"
        },
        {
          "key": "b8",
          "text": "b8"
        },
        {
          "key": "b9",
          "text": "b9"
        },
        {
          "key": "b10",
          "text": "b10"
        },
        {
          "key": "c0",
          "text": "c0"
        },
        {
          "key": "c1",
          "text": "c1"
        },
        {
          "key": "c2",
          "text": "c2"
        },
        {
          "key": "c3",
          "text": "c3"
        },
        {
          "key": "c4",
          "text": "c4"
        },
        {
          "key": "c5",
          "text": "c5"
        },
        {
          "key": "c6",
          "text": "c6"
        },
        {
          "key": "c7",
          "text": "c7"
        },
        {
          "key": "c8",
          "text": "c8"
        },
        {
          "key": "c9",
          "text": "c9"
        },
        {
          "key": "c10",
          "text": "c10"
        },
        {
          "key": "dl",
          "text": "dl"
        },
        {
          "key": "letter",
          "text": "letter"
        },
        {
          "key": "governmentletter",
          "text": "government-letter"
        },
        {
          "key": "legal",
          "text": "legal"
        },
        {
          "key": "juniorlegal",
          "text": "junior-legal"
        },
        {
          "key": "ledger",
          "text": "ledger"
        },
        {
          "key": "tabloid",
          "text": "tabloid"
        },
        {
          "key": "creditcard",
          "text": "credit-card"
        }
      ],
      "tooltip": "Page Format",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "a4",
    "visible": true
  },
  "orientation": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Behavior",
      "choiceType": "-",
      "desc": "Page Orientation",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "portrait",
          "text": "portrait"
        },
        {
          "key": "landscape",
          "text": "landscape"
        }
      ],
      "tooltip": "Page Orientation",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "portrait",
    "visible": true
  },
  "pdfMethod": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Behavior",
      "choiceType": "-",
      "desc": "PDF Export Type",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Save",
          "text": "Save"
        },
        {
          "key": "NewWindow",
          "text": "New Window"
        },
        {
          "key": "SamePage",
          "text": "Same Page"
        }
      ],
      "tooltip": "PDF Export Type",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Save",
    "visible": true
  },
  "rootPanel": {
    "opts": {
      "apsControl": "text",
      "cat": "Behavior",
      "desc": "Root Panel Name",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Root Panel Name",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "svgMode": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Behavior",
      "choiceType": "-",
      "desc": "SVG Conversion Mode",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "DataUri",
          "text": "Data Uri"
        },
        {
          "key": "Canvas",
          "text": "Canvas"
        }
      ],
      "tooltip": "SVG Conversion Mode",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "DataUri",
    "visible": true
  },
  "trigger": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Just As Simple Triger",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Just As Simple Triger",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "unit": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Behavior",
      "choiceType": "-",
      "desc": "Unit",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "pt",
          "text": "pt"
        },
        {
          "key": "mm",
          "text": "mm"
        },
        {
          "key": "cm",
          "text": "cm"
        },
        {
          "key": "in",
          "text": "in"
        },
        {
          "key": "px",
          "text": "px"
        },
        {
          "key": "pc",
          "text": "pc"
        },
        {
          "key": "em",
          "text": "em"
        },
        {
          "key": "ex",
          "text": "ex"
        }
      ],
      "tooltip": "Unit",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "pt",
    "visible": true
  }
};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "PDF Print 2.0",
  "icon": "PdfPrint.png",
  "title": "PDF Print 2.0",
  "topics": [
    {
      "content": "PDF Print",
      "title": "PDF Print"
    },
    {
      "content": "<ul><li>a0 [2383.94 x 3370.39 pts ]<\/li><li>a1 [1683.78 x 2383.94 pts ]<\/li><li>a2 [1190.55 x 1683.78 pts ]<\/li><li>a3 [ 841.89 x 1190.55 pts ]<\/li><li>a4 [ 595.28 x 841.89 pts ]<\/li><li>a5 [ 419.53 x 595.28 pts ]<\/li><li>a6 [ 297.64 x 419.53 pts ]<\/li><li>a7 [ 209.76 x 297.64 pts ]<\/li><li>a8 [ 147.40 x 209.76 pts ]<\/li><li>a9 [ 104.88 x 147.40 pts ]<\/li><li>a10 [ 73.70 x 104.88 pts ]<\/li><li>b0 [2834.65 x 4008.19 pts ]<\/li><li>b1 [2004.09 x 2834.65 pts ]<\/li><li>b2 [1417.32 x 2004.09 pts ]<\/li><li>b3 [1000.63 x 1417.32 pts ]<\/li><li>b4 [ 708.66 x 1000.63 pts ]<\/li><li>b5 [ 498.90 x 708.66 pts ]<\/li><li>b6 [ 354.33 x 498.90 pts ]<\/li><li>b7 [ 249.45 x 354.33 pts ]<\/li><li>b8 [ 175.75 x 249.45 pts ]<\/li><li>b9 [ 124.72 x 175.75 pts ]<\/li><li>b10 [ 87.87 x 124.72 pts ]<\/li><li>c0 [2599.37 x 3676.54 pts ]<\/li><li>c1 [1836.85 x 2599.37 pts ]<\/li><li>c2 [1298.27 x 1836.85 pts ]<\/li><li>c3 [ 918.43 x 1298.27 pts ]<\/li><li>c4 [ 649.13 x 918.43 pts ]<\/li><li>c5 [ 459.21 x 649.13 pts ]<\/li><li>c6 [ 323.15 x 459.21 pts ]<\/li><li>c7 [ 229.61 x 323.15 pts ]<\/li><li>c8 [ 161.57 x 229.61 pts ]<\/li><li>c9 [ 113.39 x 161.57 pts ]<\/li><li>c10 [ 79.37 x 113.39 pts ]<\/li><li>dl [ 311.81 x 623.62 pts ]<\/li><li>letter [612 x 792 pts ]<\/li><li>government-letter [576 x 756 pts ]<\/li><li>legal [612 x 1008 pts ]<\/li><li>junior-legal [576 x 360 pts ]<\/li><li>ledger [1224 x 792 pts ]<\/li><li>tabloid [792 x 1224 pts ]<\/li><li>credit-card [153 x 243 pts ]<\/li><\/ul><\/p>",
      "title": "Formats"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	spec.specComp = 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityUtils",
  "handlerType": "sapui5",
  "height": "20",
  "id": "PdfPrint",
  "package": "utils",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "utils/os/date/DateFormat",
      "space": "known"
    },
    {
      "id": "utils/os/canvas/canvg",
      "space": "known"
    },
    {
      "id": "utils/os/canvas/html2canvas",
      "space": "known"
    },
    {
      "id": "utils/os/rgb/rgbcolor",
      "space": "known"
    },
    {
      "id": "utils/os/blur/StackBlur",
      "space": "known"
    },
    {
      "id": "utils/os/svg/saveSvgAsPng",
      "space": "known"
    },
    {
      "id": "utils/os/file/FileSaver",
      "space": "known"
    },
    {
      "id": "utils/os/jspdf/jspdf",
      "space": "known"
    },
    {
      "id": "utils/os/jspdf/jspdf.plugin.addhtml",
      "space": "known"
    },
    {
      "id": "utils/os/jspdf/jspdf.plugin.addimage",
      "space": "known"
    },
    {
      "id": "utils/os/jspdf/jspdf.plugin.autoprint",
      "space": "known"
    },
    {
      "id": "utils/os/jspdf/jspdf.plugin.cell",
      "space": "known"
    },
    {
      "id": "utils/os/jspdf/jspdf.plugin.from_html",
      "space": "known"
    },
    {
      "id": "utils/os/jspdf/jspdf.plugin.javascript",
      "space": "known"
    },
    {
      "id": "utils/os/jspdf/jspdf.plugin.png_support",
      "space": "known"
    },
    {
      "id": "utils/os/jspdf/jspdf.plugin.sillysvgrenderer",
      "space": "known"
    },
    {
      "id": "utils/os/jspdf/jspdf.plugin.split_text_to_size",
      "space": "known"
    },
    {
      "id": "utils/os/jspdf/jspdf.plugin.standard_fonts_metrics",
      "space": "known"
    },
    {
      "id": "utils/os/jspdf/jspdf.plugin.total_pages",
      "space": "known"
    }
  ],
  "title": "PDF Print 2.0",
  "tooltip": "PDF Print",
  "width": "100"
};

	return spec;
});// End of closure
