(function(){

var myComponentData = org_scn_community_require.knownComponents.prototypes.ApsTester;

myComponentData.instance = function() {

	var that = this;

	this.init = function() {
		var that = this;
		that.loadSpecification();
		
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	this.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	};
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/

	/* COMPONENT SPECIFIC CODE - END METHODS*/

	this.loadSpecification = function () {
		var that = this;
		
		that.spec = {}; 
		that.compSpec = {};
		
that.spec = 
{
  "checkboxExample": {
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
      "tooltip": "Whether to ignore totals",
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
      "desc": "Ignore Expanded Hierarchy Nodes",
      "tooltip": "Whether to ignore expanded hierarchy nodes",
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
      "desc": "Ignore Expanded Hierarchy Nodes",
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
      "tooltip": "Whether to ignore expanded hierarchy nodes",
      "ztlFunction": "",
      "ztlType": "choice"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "data": {
    "onChange": "this.flattenData",
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
      "desc": "Ignore Expanded Hierarchy Nodes",
      "tooltip": "Whether to ignore expanded hierarchy nodes",
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
      "desc": "Ignore Expanded Hierarchy Nodes",
      "tooltip": "Whether to ignore expanded hierarchy nodes",
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
      "desc": "Ignore Expanded Hierarchy Nodes",
      "tooltip": "Whether to ignore expanded hierarchy nodes",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "initial",
    "visible": true
  }
};
that.compSpec = 
{
  "databound": true,
  "extension": "Component",
  "group": "ScnCommunityPrototypes",
  "handlerType": "div",
  "id": "ApsTester",
  "package": "prototypes",
  "require": [{"id": "base"}],
  "title": "Aps Tester",
  "tooltip": "Application Property Sheet Tester"
};
		
		/*SPECIFICATION*/
		
		org_scn_community_spec.base.loadSpecification (that, that.spec, that.compSpec);
	}
};

define([myComponentData.requireName], function(prototypesapstester){
	return myComponentData.instance;
});

}).call(this);