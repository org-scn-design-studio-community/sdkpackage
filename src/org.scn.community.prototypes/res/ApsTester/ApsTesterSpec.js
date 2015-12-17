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
		id: "ApsTester",
		name: "prototypes.ApsTester",
		requireName: "prototypesapstester",
		fullComponentName: "org.scn.community.prototypes.ApsTester",
		fullComponentPackage: "org.scn.community.prototypes/res/ApsTester",
		script: "org.scn.community.prototypes/res/ApsTester/ApsTester",
		scriptSpec: "org.scn.community.prototypes/res/ApsTester/ApsTesterSpec",
		min: false
	};

	spec.spec = 
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
      "choiceType": "-",
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
      "ztlType": "Choice"
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
            "apsControl": "checkbox",
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
          "apsControl": "checkbox",
          "desc": "Selection state of the button",
          "type": "boolean,optional"
        },
        "sequence": "key,text,image,selected,item",
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
          "apsControl": "checkbox",
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
    "value": 0,
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
    "type": "String",
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

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Application Property Sheet Tester",
  "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALESURBVDhPLZL7T5JRGMffP8m1WVtjtZlrs2m/uHJd1rxgknOp/ZJbbhlroaEhXgAxQN8LeAFBQExJhMTNLBPEWyga10rLUHjfF4H3nM6rbp+dPWfn8z3nOWcHA2kTYCwgJM/P1HOuRm6qloazTM5Kn4GKHGddPTRKfURvgOxbJzBAmwE9kY+pkcpNizhnAw1nLuzsJJO3QmhbSIx1+YiBIN71lcJAvI/J29PAgZYzEeW5jWqQMsKUMc9MKDZI6Squ2ibqcGOhyIEC75B01oONBlPne7PQAWkTTJvYpEm8wjej3sFvv7YImuwYO9/6b22QhU7knbJmfnvophck/AmsNZse0W7rpD5KuUU0Gceu1E9hu9eLdwqu/h0XQ86KJAAdKUlF6kFh6s6lo2NNlFWksooPYe07P6n6fnaHvdJboaLiw/ZGCO3oxSB0nZQXpBqK6HuX43/kcXbggFV6f76XrlIXr7RfUhIS3IgHOjKnYxDOcJvd7KuSdKXg5EUpshOM6oBRehPawU1C5idRBstpKmKQiOfUkfxg2iLKdpZlVXcZfVUE6pEdp5XTP4bnokOLCZ12i5CvkVimvzwCtWghCrTp0ZpsTzkiZRSi6S9a+ZtVfowOuWI6b0KnOQ9wAVkyQ8UY1VGyn/O9zGruI1CRTPbH0qqR3SH9Du6J68x7wz1rJAIDrAXSFniggyEJiHSChIwn0gn3JT1+vMtPdftJ1D0C2b0B9DXQX8rYwBEOwm8hItLOE+6A0TeajWF0S8U6ccEmoQ7iGGDM3JY0P9sAl5+HgvJmL/7Mi4eDMt2KWuihJN/I1mWy2k21fCHE84abrTYMJkc5u5CbewqdojbXwEOPocpDVbgMj9x6FKj2kDUestZD1S0RRW2TgkY7Rh+PZ2fr+cDcE/GitsrDey2fCTQ+/kRWOg1CN1+Ilogy2cS1Zvt/xoQxnd26GQEAAAAASUVORK5CYII=",
  "title": "Aps Tester",
  "topics": [{
    "content": "This component is a visualization component.  This means that you have control over cosmetic properties such as Legend, Margins, Plot positioning, zooming, among others.",
    "title": "Visualization"
  }]
};

	spec.specComp = 
{
  "databound": true,
  "extension": "Component",
  "group": "ScnCommunityPrototypes",
  "handlerType": "div",
  "height": "200",
  "id": "ApsTester",
  "package": "prototypes",
  "require": [],
  "title": "Aps Tester",
  "tooltip": "Application Property Sheet Tester",
  "width": "200"
};

	return spec;
});// End of closure
