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

	org_scn_community_require.knownComponents.prototypes.ApsTester.spec = 
{
  "checkboxExample": {
    "onSet": "flattenData",
    "opts": {
      "apsControl": "checkbox",
      "cat": "Data",
      "desc": "Ignore Totals",
      "tooltip": "Whether to ignore totals",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "checkboxOnlyGetterExample": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Data",
      "desc": "Ignore Totals",
      "tooltip": "Whether to ignore totals (only getter)",
      "ztlFunction": "-get",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "colorExample": {
    "opts": {
      "apsControl": "color",
      "cat": "Colors",
      "desc": "Simple Color",
      "tooltip": "A color",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "Color",
    "value": "",
    "visible": true
  },
  "comboboxExample": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Data",
      "desc": "Simple Choice",
      "options": [
        {
          "key": "quantile",
          "text": "Quantile"
        },
        {
          "key": "quantize",
          "text": "Quantize"
        }
      ],
      "tooltip": "Any choice",
      "ztlFunction": "",
      "ztlType": "choice"
    },
    "type": "String",
    "value": "quantile",
    "visible": true
  },
  "data": {
    "onChange": "flattenData",
    "opts": {
      "cat": "Data",
      "desc": "Data",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Data from datasource",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultSet",
    "value": "null",
    "visible": true
  },
  "doublearray": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"button": {
        "image": {
          "desc": "Given image for the button",
          "type": "Url,optional"
        },
        "item": {
          "image": {
            "desc": "Given image for the item",
            "type": "Url,optional"
          },
          "key": {
            "desc": "Unique key of this item",
            "type": "String"
          },
          "parentKey": {
            "desc": "The key of the parent button",
            "mode": "ztl",
            "type": "String"
          },
          "selected": {
            "desc": "Selection state of the item",
            "type": "boolean,optional"
          },
          "sequence": "parentKey,key,text,image,selected",
          "text": {
            "desc": "Text for the item",
            "type": "String"
          },
          "type": "Array"
        },
        "key": {
          "desc": "Unique key of this button",
          "type": "String"
        },
        "selected": {
          "desc": "Selection state of the button",
          "type": "boolean,optional"
        },
        "sequence": "key,text,image,selected",
        "text": {
          "desc": "Text for the button",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content-TwoLevelArray",
      "desc": "Complex Array",
      "tooltip": "Array with Key and Value and Second Level",
      "ztlFunction": "",
      "ztlType": "DoubleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "paletteExample": {
    "opts": {
      "apsControl": "palette",
      "cat": "Data",
      "desc": "Color Palette",
      "tooltip": "A palette",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "singlearray": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"button": {
        "image": {
          "desc": "Given image for the button",
          "type": "Url,optional"
        },
        "key": {
          "desc": "Unique key of this button",
          "type": "String"
        },
        "selected": {
          "desc": "Selection state of the button",
          "type": "boolean,optional"
        },
        "sequence": "key,text,image,selected",
        "text": {
          "desc": "Text for the button",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-SingleArray",
      "desc": "Single Array",
      "tooltip": "Single Array with Key and Value",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "spinnerExample": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Data",
      "desc": "Some numbers",
      "tooltip": "Add some numbers",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "int",
    "value": "",
    "visible": true
  },
  "stringarray": {
    "opts": {
      "apsControl": "array",
      "arrayMode": "StringArray",
      "cat": "Content-StringArray",
      "desc": "Simple String Array",
      "tooltip": "Simple Array with Key",
      "ztlFunction": "",
      "ztlType": "StringArray"
    },
    "type": "StringArray",
    "value": "[]",
    "visible": true
  },
  "textExample": {
    "opts": {
      "apsControl": "text",
      "cat": "Data",
      "desc": "A saple text",
      "tooltip": "Place some text conent",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "initial",
    "visible": true
  }
};

	org_scn_community_require.knownComponents.prototypes.ApsTester.specAbout = 
{
  "checkboxExample": {
    "onSet": "flattenData",
    "opts": {
      "apsControl": "checkbox",
      "cat": "Data",
      "desc": "Ignore Totals",
      "tooltip": "Whether to ignore totals",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "checkboxOnlyGetterExample": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Data",
      "desc": "Ignore Totals",
      "tooltip": "Whether to ignore totals (only getter)",
      "ztlFunction": "-get",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "colorExample": {
    "opts": {
      "apsControl": "color",
      "cat": "Colors",
      "desc": "Simple Color",
      "tooltip": "A color",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "Color",
    "value": "",
    "visible": true
  },
  "comboboxExample": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Data",
      "desc": "Simple Choice",
      "options": [
        {
          "key": "quantile",
          "text": "Quantile"
        },
        {
          "key": "quantize",
          "text": "Quantize"
        }
      ],
      "tooltip": "Any choice",
      "ztlFunction": "",
      "ztlType": "choice"
    },
    "type": "String",
    "value": "quantile",
    "visible": true
  },
  "data": {
    "onChange": "flattenData",
    "opts": {
      "cat": "Data",
      "desc": "Data",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Data from datasource",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultSet",
    "value": "null",
    "visible": true
  },
  "doublearray": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"button": {
        "image": {
          "desc": "Given image for the button",
          "type": "Url,optional"
        },
        "item": {
          "image": {
            "desc": "Given image for the item",
            "type": "Url,optional"
          },
          "key": {
            "desc": "Unique key of this item",
            "type": "String"
          },
          "parentKey": {
            "desc": "The key of the parent button",
            "mode": "ztl",
            "type": "String"
          },
          "selected": {
            "desc": "Selection state of the item",
            "type": "boolean,optional"
          },
          "sequence": "parentKey,key,text,image,selected",
          "text": {
            "desc": "Text for the item",
            "type": "String"
          },
          "type": "Array"
        },
        "key": {
          "desc": "Unique key of this button",
          "type": "String"
        },
        "selected": {
          "desc": "Selection state of the button",
          "type": "boolean,optional"
        },
        "sequence": "key,text,image,selected",
        "text": {
          "desc": "Text for the button",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content-TwoLevelArray",
      "desc": "Complex Array",
      "tooltip": "Array with Key and Value and Second Level",
      "ztlFunction": "",
      "ztlType": "DoubleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "paletteExample": {
    "opts": {
      "apsControl": "palette",
      "cat": "Data",
      "desc": "Color Palette",
      "tooltip": "A palette",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "singlearray": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"button": {
        "image": {
          "desc": "Given image for the button",
          "type": "Url,optional"
        },
        "key": {
          "desc": "Unique key of this button",
          "type": "String"
        },
        "selected": {
          "desc": "Selection state of the button",
          "type": "boolean,optional"
        },
        "sequence": "key,text,image,selected",
        "text": {
          "desc": "Text for the button",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-SingleArray",
      "desc": "Single Array",
      "tooltip": "Single Array with Key and Value",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "spinnerExample": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Data",
      "desc": "Some numbers",
      "tooltip": "Add some numbers",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "int",
    "value": "",
    "visible": true
  },
  "stringarray": {
    "opts": {
      "apsControl": "array",
      "arrayMode": "StringArray",
      "cat": "Content-StringArray",
      "desc": "Simple String Array",
      "tooltip": "Simple Array with Key",
      "ztlFunction": "",
      "ztlType": "StringArray"
    },
    "type": "StringArray",
    "value": "[]",
    "visible": true
  },
  "textExample": {
    "opts": {
      "apsControl": "text",
      "cat": "Data",
      "desc": "A saple text",
      "tooltip": "Place some text conent",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "initial",
    "visible": true
  }
};

})();// End of closure
