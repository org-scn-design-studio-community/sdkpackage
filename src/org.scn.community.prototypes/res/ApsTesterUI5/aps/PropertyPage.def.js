ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "databound": true,
  "extension": "Component",
  "group": "ScnCommunityPrototypes",
  "handlerType": "sapui5",
  "height": "200",
  "id": "ApsTesterUI5",
  "package": "prototypes",
  "parentControl": "sap.ui.commons.layout.AbsoluteLayout",
  "require": [],
  "title": "Aps Tester UI5",
  "tooltip": "Application Property Sheet Tester UI5",
  "width": "200"
},

"spec" : 
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
      "cat": "Data",
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
}, 

"specAbout" : 
{
  "description": "Application Property Sheet Tester UI5",
  "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALESURBVDhPLZL7T5JRGMffP8m1WVtjtZlrs2m/uHJd1rxgknOp/ZJbbhlroaEhXgAxQN8LeAFBQExJhMTNLBPEWyga10rLUHjfF4H3nM6rbp+dPWfn8z3nOWcHA2kTYCwgJM/P1HOuRm6qloazTM5Kn4GKHGddPTRKfURvgOxbJzBAmwE9kY+pkcpNizhnAw1nLuzsJJO3QmhbSIx1+YiBIN71lcJAvI/J29PAgZYzEeW5jWqQMsKUMc9MKDZI6Squ2ibqcGOhyIEC75B01oONBlPne7PQAWkTTJvYpEm8wjej3sFvv7YImuwYO9/6b22QhU7knbJmfnvophck/AmsNZse0W7rpD5KuUU0Gceu1E9hu9eLdwqu/h0XQ86KJAAdKUlF6kFh6s6lo2NNlFWksooPYe07P6n6fnaHvdJboaLiw/ZGCO3oxSB0nZQXpBqK6HuX43/kcXbggFV6f76XrlIXr7RfUhIS3IgHOjKnYxDOcJvd7KuSdKXg5EUpshOM6oBRehPawU1C5idRBstpKmKQiOfUkfxg2iLKdpZlVXcZfVUE6pEdp5XTP4bnokOLCZ12i5CvkVimvzwCtWghCrTp0ZpsTzkiZRSi6S9a+ZtVfowOuWI6b0KnOQ9wAVkyQ8UY1VGyn/O9zGruI1CRTPbH0qqR3SH9Du6J68x7wz1rJAIDrAXSFniggyEJiHSChIwn0gn3JT1+vMtPdftJ1D0C2b0B9DXQX8rYwBEOwm8hItLOE+6A0TeajWF0S8U6ccEmoQ7iGGDM3JY0P9sAl5+HgvJmL/7Mi4eDMt2KWuihJN/I1mWy2k21fCHE84abrTYMJkc5u5CbewqdojbXwEOPocpDVbgMj9x6FKj2kDUestZD1S0RRW2TgkY7Rh+PZ2fr+cDcE/GitsrDey2fCTQ+/kRWOg1CN1+Ilogy2cS1Zvt/xoQxnd26GQEAAAAASUVORK5CYII=",
  "title": "Aps Tester UI5",
  "topics": [{
    "content": "This component is a visualization component.  This means that you have control over cosmetic properties such as Legend, Margins, Plot positioning, zooming, among others.",
    "title": "Visualization"
  }]
}

};

	org_scn_community_component_Core(that, that.componentData);
    
	return that;
};