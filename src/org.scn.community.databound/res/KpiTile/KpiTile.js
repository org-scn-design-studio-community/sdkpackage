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
 
 //%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./KpiTileSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"shared/modules/component.databound",
	"../../../"+scn_pkg+"basics/os/sapui5/sap_m_loader",
	"../../../"+scn_pkg+"basics/os/sapui5/sap_suite_loader",
	"../../../"+scn_pkg+"basics/os/x2js/xml2json"
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

KpiTile = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		jQuery.sap.require("sap.ui.layout.ResponsiveFlowLayout");
		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		that._oRoot = new sap.ui.layout.ResponsiveFlowLayout(
		{
			responsive: false
		}
		);
		
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.addStyleClass("scn-pack-RepKpiTile");
		that.addStyleClass("scn-pack-FullWidthChildren");
		
		that._oComponents = {};
		that._oRowLayyouts = {};

//		that.nextKey = 1;
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		that.onAfterRendering = function () {
			org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		}
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	processData: function (flatData, afterPrepare, owner) {
		var that = owner;

		var spec = that.getComponentsSpec();
		spec = JSON.parse(spec);
		spec = that.buildTree (spec);

		var layout = that.getLayoutSpec();
		layout = JSON.parse(layout);
		layout = that.buildTree (layout);

		var idPrefix = that.getId();
		
		var lData = that.getData();

		var options = org_scn_community_databound.initializeOptions();
		options.ignoreResults = true;

		that._flatData = org_scn_community_databound.flatten(lData,options);
		org_scn_community_databound.toRowTable(that._flatData,options);

		that._content = [];
		for(var rowI in that._flatData.rowHeaders) {
			var newSpec = JSON.parse(JSON.stringify(spec));
			that._content.push(that.calculateContent(owner, newSpec, layout, idPrefix, rowI));
		}

		// processing on data
		that.afterPrepare(that);
	},

	buildTree: function (spec) {
		var specTree = [];
		var specHelper = {};
		var specHelperRoot = {};
		
		for (var compSpecInt in spec) {
			var compSpec = spec[compSpecInt];

			if(compSpec.parentKey != "ROOT") {
				specHelper[compSpec.parentKey + compSpec.key] = compSpec;
				var parent = specHelper[compSpec.parentKey];
				if (parent.properties == undefined) {
					parent.properties = [];
				}

				parent.properties.push(compSpec);
				specHelper[compSpec.parentKey + compSpec.key] = parent;
			} else {
				specHelper[compSpec.key] = compSpec;
				specHelperRoot[compSpec.key] = compSpec;
			}
		}

		for (var compSpecKey in specHelperRoot) {
			var content = specHelper[compSpecKey];
			specTree.push(content);
		}
		return specTree;
	},

	calculateContent: function (owner, spec, layout, idPrefix, rowI) {
		var that = owner;
		var componentInstances = [];

		for (var compSpecInt in spec) {
			var compSpec = spec[compSpecInt];

			var componentInstance = that.createComponent(owner, compSpec, idPrefix + rowI, rowI);
			if(componentInstance != undefined) {
				componentInstances.push(componentInstance);
			}
		}
		
		if(layout.length > 0) {
			layout[0].properties = layout;
			var componentInstance = that.createComponent(owner, layout[0], idPrefix + rowI, rowI);
			if(componentInstance != undefined) {
				componentInstance.__techKey = "__LAYOUT__";
				componentInstances.push(componentInstance);
			}
		}

		return componentInstances;
	},

	createComponent: function(owner, spec, idPrefix, rowId) {
		var that = owner;

		spec = that.assureSpecIsCorrect(that, spec);

		var properties = {};

		var finalProperties = {};
		if(spec.specification && spec.specification.length > 0) {
			specProperties = that.readFullSpec(that, spec.specification);

			var content = specProperties[spec.componentType];
			for (var prName in content) {
				var propDef = {};
				propDef.key = prName;
				propDef.value = content[prName];

				if(typeof propDef.value == "Array") {

				}
				finalProperties[prName] = propDef;
			}
		}
		for (var prIndex in spec.properties) {
			var prop = spec.properties[prIndex];
			prop.key = prop.key.replace(spec.key + "/", "");
			
			if(prop.dimension != undefined && prop.dimension != "") {
				var realValue = prop.dimension;
				
				realValue = that.findRowContent(that, realValue, rowId);

				if(prop.cast) {
					if(prop.cast == "integer") {
						prop.value = "" + parseInt(realValue);
					} else if(prop.cast == "double") {
						prop.value = "" + parseFloat(realValue);
					} else {
						prop.value = realValue;	
					}
				} else {
					prop.value = realValue;	
				}
				
			}

			if(prop.key.indexOf("/") > -1) {
				var targetProperty = finalProperties;
				while (prop.key.indexOf("/") > -1) {
					var next = prop.key.substring(0, prop.key.indexOf("/"));
					
					if(prop.key.indexOf("/") > -1) {
						if(targetProperty[next].value) {
							targetProperty = targetProperty[next].value;
						} else {
							targetProperty = targetProperty[next];
						}
						
					} else {
						targetProperty[next] = prop.value;	
					}

					prop.key = prop.key.substring(prop.key.indexOf("/")+1);
					
					if(prop.key.indexOf("/") == -1) {
						targetProperty[prop.key] = prop.value;
					}
				}
			} else {
				finalProperties[prop.key] = prop;
			}

			if(!prop.value) {
				prop.value = "";
			}

			if(prop.value.indexOf("[") == 0 || prop.value.indexOf("/") == 0 || prop.value.indexOf("{") == 0) {
				var realValue = prop.value;
				if(realValue.indexOf("/") == 0) {
					realValue = realValue.substring(1);
				}
				realValue = JSON.parse(realValue);
				prop.value = realValue[prop.key];
			}
		}

		for (var prName in finalProperties) {
			var prop = finalProperties[prName];
			prop.key = prop.key.replace(spec.key + "/", "");

			var process = {};
			process[prop.key] = prop.value;
			var ret = that.processContentJson(that, process);

			// return always first if length = 1;
			if(ret.length == 1) {
				ret[prop.key] = ret[0];	
			} else {
				ret = ret;
			}

			prop.valueN = ret;

			properties[prop.key] = prop.valueN[prop.key];
		}

		// special overwrite for events
		properties.press = that.contentOnPress;
		properties.select = that.contentOnSelect;

		properties.leftI = parseInt(spec.left);
		properties.rightI = parseInt(spec.right);
		properties.topI = parseInt(spec.top);
		properties.bottomI = parseInt(spec.bottom);

		var intValue = parseInt(spec.width, 10);
		properties["widthI"] = intValue;
		if(isNaN(intValue)) {
			intValue = 200;
		}
		properties["width"] = intValue+"px";
		
		intValue = parseInt(spec.height, 10);
		properties["heightI"] = intValue;
		if(isNaN(intValue)) {
			intValue = 40;
		}
		properties["height"] = intValue + "px";
		
		var comp = {};
		comp.__specification = properties;

		comp.__layoutSettings = {};
		if(spec.left == "-1") {
			comp.__layoutSettings.right = parseInt(spec.right) + "px";
		} else {
			comp.__layoutSettings.left = parseInt(spec.left) + "px";
		}

		if(spec.top == "-1") {
			comp.__layoutSettings.bottom = parseInt(spec.bottom) + "px";
		} else {
			comp.__layoutSettings.top = parseInt(spec.top) + "px";
		}

		comp.__techKey = spec.key + rowId;
		comp.__componentType = spec.componentType;
		return comp;
	},

	findRowContent: function (that, realValue, rowId) {
		
		var content = that._flatData.data2DPlain[rowId][that._flatData.colId2Index[realValue]];
		
		if(content==undefined) {
			content = "N/A";
		}

		return content;	
	},

	assureSpecIsCorrect: function (that, spec) {
		if(!spec.componentType) {spec.componentType = ""};
		if(!spec.top || spec.top == "") {spec.top = "10"};
		if(!spec.bottom || spec.bottom == "") {spec.bottom = "10"};
		if(!spec.left || spec.left == "") {spec.left = "10"};
		if(!spec.right || spec.right == "") {spec.right = "10"};
		if(!spec.width || spec.width == "") {spec.width = "100"};
		if(!spec.height || spec.height == "") {spec.height = "25"};
		if(!spec.specification || spec.specification == "") {spec.specification = ""};

		return spec;
	},

	readFullSpec: function (that, fullSpec) {
		var spec = fullSpec;

		if(spec.indexOf("<") == 0) {
			// xml
			var converter = new X2JS({
				 attributePrefix : "",
				 mixedArrays: true
			});
			specJ = converter.xml_str2json(spec);

			spec = specJ;
		} else if(spec.indexOf("{") == 0) {
			spec = JSON.parse(spec);
		} else if(spec == undefined || spec.length == 0) {
			spec = {};
		}

		return spec;
	},

	processContentJson: function (owner, iPropValue) {
		var propValue = iPropValue;
		var that = owner;

		var isJson = (typeof propValue == "object");
		if(isJson) {
			var content = undefined;
			var isJsonArray = false;

			for (var loopOnIndex in propValue) {
				var entryArrayId = loopOnIndex;
				var entryArray = propValue[entryArrayId];
				isJsonArray = entryArray instanceof Array;

				if(isJsonArray) {
					if(isJsonArray & content == undefined) {content = []};
					var retObjectS = {};
					var output = that.processContentJson(that, entryArray, retObjectS);

					var obj = {};
					obj[entryArrayId] = output;
					return obj;
				} else {
					var isJsonObject = (typeof entryArray == "object");
					if(isJsonObject) {
						if(content == undefined) {content = []};
						// create object here;
						var properties = {}

						var oneWasAnArray = false;
						var onlySimpleStrings = true;
						for (var loopOnIndexEntry in entryArray) {
							var entryObjectId = loopOnIndexEntry;
							var entryObject = entryArray[entryObjectId];
							var retObjectS = {};

							if(entryObject instanceof Array) {
								// special case for transformed XML

								var newArray = [];
								for (var outputEntryIndex in entryObject) {
									var newEntry = {};
									newEntry[entryObjectId] = entryObject[outputEntryIndex];
									newArray.push(newEntry);
								}
								entryObject = newArray;
								var output = that.processContentJson(that, entryObject);
								for (var compInd in output) {
									content.push(output[compInd]);
								}

								onlySimpleStrings = (false && onlySimpleStrings);
								oneWasAnArray = true;
							} else if (typeof entryObject == "string") {
								// processing later
								var k = 0;
							} else {
								var properties = {};
								var output = that.processContentJson(that, entryObject);
								for (var outputEntryIndex in output) {
									properties[outputEntryIndex] = output[outputEntryIndex];
								}
								
								if(entryObjectId != "__arrayIndex") {
									var comp = that.createComponentByJson(that, entryObjectId, properties, true);
									comp.__clName = entryObjectId;
									comp.__arrayIndex = properties._arrayIndex;
									content.push(comp);
								}

								onlySimpleStrings = (false && onlySimpleStrings);
							}
						}

						if(onlySimpleStrings) {
							var properties = {};
							var output = that.processContentJson(that, entryArray);
							for (var outputEntryIndex in output) {
								properties[outputEntryIndex] = output[outputEntryIndex];
							}
							var comp = that.createComponentByJson(that, entryArrayId, properties, true);
							comp.__clName = entryArrayId;
							comp.__arrayIndex = 0;
							content.push(comp);
						}

						if(oneWasAnArray) {
							var mixedContent = {};

							function compareFn(a, b) {
							    return a.__arrayIndex - b.__arrayIndex;
							}
							content.sort(compareFn);

							mixedContent[loopOnIndex] = content;

							content = mixedContent;
						}
					} else {
						if(content == undefined) {content = {}};

						// simple text
						var valueRet = that.fixValue(that, entryArrayId, entryArray);
						content[valueRet.entryArrayId] = valueRet.entryArray;
					}
				}
			}
			return content;
		}

		return propValue;
	},

	fixValue: function (owner, entryArrayId, entryArray) {
		var that = owner;

		if(entryArrayId.indexOf("-") == 0 || entryArrayId.indexOf("_") == 0) {
			entryArrayId = entryArrayId.substring(1);
		}

		var specialProcessing = false;

		if(!specialProcessing) {
			if(entryArray.indexOf) {
				if(entryArray.indexOf("<") == 0) {
					entryArray = that.readFullSpec(owner, entryArray);
					var parsedValue = that.processContentJson (owner, entryArray);
					entryArray = parsedValue[0];
				} else {
					if(entryArray.indexOf("sap.") == 0) {
						// a class
						entryArray = eval(entryArray);
					} else {
						// boolean or value?
						if(entryArray == "true" || entryArray == "false") {
							entryArray = (entryArray == "true");
						} else {
							if(entryArray.indexOf(".") > -1) {
								var floatValue = parseFloat(entryArray);
								if(!isNaN(floatValue) && (""+floatValue).length == entryArray.length) {
									entryArray = floatValue;
								}	
							}
							var intValue = parseInt(entryArray);
							if(!isNaN(intValue) && (""+intValue).length == entryArray.length) {
								entryArray = intValue;
							}	
						}
					}
				} 
			}
		}

		var valueRet = {};
		valueRet.entryArrayId = entryArrayId;
		valueRet.entryArray = entryArray;

		return valueRet;
	},

	createComponentByJson: function (owner, name, jsonDef, createUnique) {
		var that = owner;
		var loopObject = undefined;
		
		if(createUnique) {
			var unique_id = Math.random();
			jsonDef.id = that.getId() + name + unique_id;//that.nextKey;
//			that.nextKey = that.nextKey + 1;
		}

		if(sap.m[name] != undefined) {
			loopObject = new sap.m[name](jsonDef);
		} else if(sap.ui.core[name] != undefined) {
			loopObject = new sap.ui.core[name](jsonDef);
		} else if(sap.suite.ui.commons[name] != undefined) {
			loopObject = new sap.suite.ui.commons[name](jsonDef);
} else if(sap.suite.ui.microchart !== undefined && sap.suite.ui.microchart[name] != undefined) {
			loopObject = new sap.suite.ui.microchart[name](jsonDef);
		}

		return loopObject;
	},

	afterPrepare: function (owner) {
		var that = owner;

		that._oRoot.setResponsive(that.getContentResponsive());
		
		for (var compIndex in that._oComponents) {
			var compObj = that._oComponents[compIndex];

			compObj.__owner.removeContent(compObj);
			compObj.destroy();
		}
		for (var compIndex in that._oRowLayyouts) {
			that._oRoot.removeContent(that._oRowLayyouts[compIndex]);
			that._oRowLayyouts[compIndex].destroy();
		}

		that._oComponents = [];
		that._oRowLayyouts = [];

		var lHeight = that.getContentHeight() + "px";

		for(var RowIn in that._content) {
			var columns = that.getColumnNumber();
			var minWidth = Math.floor(300 / columns);
			var layPanel = new sap.zen.commons.layout.AbsoluteLayout(
			{
				id: that.sId + "_fl" + RowIn,
				height: lHeight,
				width: minWidth + "px"
			}
			);
			layPanel.__layData = new sap.ui.layout.ResponsiveFlowLayoutData({
				minWidth : minWidth
			});

			layPanel.setLayoutData(layPanel.__layData);
			that._oRowLayyouts["__LAY" + RowIn] = layPanel;

			// visualization on processed data
			for (var compIndex in that._content[RowIn]) {
				var comp = that._content[RowIn][compIndex];
				if(comp.__techKey == "__LAYOUT__") {
					// special case, niy
					var compObj = that;

					for (var o in comp.__specification) {
						if(o == "press") {
							// for event there will be special logic
							continue;
						}
						if(o == "width" || o == "height" || o == "top"  || o == "bottom"  || o == "left"  || o == "right") {
							// for layout we have to ignore all properties which are originally in ds runtime
							continue;
						}
						var propValue = comp.__specification[o];
						var propKey = o;

						var propKeySetter = "set" + propKey.substring(0,1).toUpperCase() + propKey.substring(1);
						var propKeyGetter = "get" + propKey.substring(0,1).toUpperCase() + propKey.substring(1);
						if(compObj[propKeyGetter]) {
							var old = compObj[propKeyGetter]();
							if(old.destroy) {
								old.destroy();
							}
						}
						if(propValue != "-clean-") {
							if(compObj[propKeySetter]) {compObj[propKeySetter](propValue);}	
						}
					}
				} else {
					if(comp.__componentType == "") {
						continue;
					}
					var compObj = that._oComponents[comp.__techKey];
					if(compObj != null) {
						that.forwardProperties(that, compObj, comp, true);

						layPanel.setPositionOfChild(compObj, comp.__layoutSettings);
					} else {
						compObj = that.createComponentByJson(that, comp.__componentType, comp.__specification, false);
						if(compObj != undefined) {
							compObj.__specification = comp;
							compObj.__componentType = comp.__componentType;
							compObj.__owner = layPanel;
							compObj.__mainOwner = that;

							layPanel.addContent(compObj, comp.__layoutSettings);
							that._oComponents[comp.__techKey] = compObj;

							that.forwardProperties(that, compObj, comp, false);
						}
					}
				}

				// modify the custom style classes
				if(comp.__specification.styleClass) {
					var customStyles = compObj.aCustomStyleClasses;
					if(customStyles) {
						for (var stClInt in customStyles) {
							if(customStyles[stClInt].indexOf("scn-pack-") == -1) {
								compObj.removeStyleClass(customStyles[stClInt]);
							}
						}
					}
					var classes = comp.__specification.styleClass.split(" ");
					for (var classInd in classes) {
						compObj.addStyleClass(classes[classInd]);
					}
				}
			}

			that._oRoot.addContent(layPanel);
		}

		if(that._oResize) {that._oResize(true, true);}
	},

	forwardProperties: function (owner, compObj, comp, isAll) {
		var that = owner;
		
		for (var o in comp.__specification) {
			if(o == "press" || o == "click") {
				// for event there will be special logic
				continue;
			}

			var propKey = o;
			if(isAll == true || propKey.indexOf("/") > -1) {
				var propValue = comp.__specification[o];

				if(propKey.indexOf("/") > -1) {
					var parts = propKey.split("/");
					var currentObject = compObj;
					var ret = {};
					for (var propPartInt in parts) {
						var propPart = parts[propPartInt];

						// last part in the property?
						if(propKey.indexOf(propPart) == propKey.length - propPart.length) {
							if(propPart.indexOf("[") == 0) {
								propPart = propPart.substring(1).replace("]", "");

								objectToDestroy = currentObject[propPart];
								objectToDestroy.destroy();
								currentObject[propPart] = propValue;

								that.setFinalProperty(that, ret.parent, parts[propPartInt-1], currentObject);
							} else {
								that.setFinalProperty(that, currentObject, propPart, propValue);
							}
						} else {
							if(propPart.indexOf("[") == 0) {
								propPart = propPart.substring(1).replace("]", "");
								currentObject = currentObject[propPart];
							} else {
								ret = that.getCurrentObject(that, currentObject, propPart);
								currentObject = ret.current;
								if(currentObject == undefined) {
									break;
								}
							}							
						}
					}
				} else {
					that.setFinalProperty(that, compObj, propKey, propValue);
				}
			}
		}
	},

	getCurrentObject: function(that, currentObject, propKey) {
		var propKeySetter = "set" + propKey.substring(0,1).toUpperCase() + propKey.substring(1);
		var propKeyGetter = "get" + propKey.substring(0,1).toUpperCase() + propKey.substring(1);

		var ret = {};
		ret.parent = currentObject;
		if(currentObject[propKeyGetter]) {
			currentObject = currentObject[propKeyGetter]();
		}
		ret.current = currentObject;

		return ret;
	},

	setFinalProperty: function (owner, compObj, propKey, propValue) {
		var that = owner;

		var functionName = propKey.substring(0,1).toUpperCase() + propKey.substring(1);
		var propKeySetter = "set" + functionName;
		var propKeyGetter = "get" + functionName;

		var propKeyAdd = "add" + functionName;
		if(propKeyAdd.substring(propKeyAdd.length-1) == "s") {
			propKeyAdd = propKeyAdd.substring(0, propKeyAdd.length-1);
		}
		var propKeyRemoveAll = "removeAll" + functionName;

		if(compObj[propKeySetter]) {
			if(compObj[propKeyGetter]) {
				var old = compObj[propKeyGetter]();
				if(old && old.destroy) {
					old.destroy();
				}
			}

			if(propValue != "-clean-") {
				compObj[propKeySetter](propValue);
			} else {
				compObj[propKeySetter](undefined);
			}
		} else {
			if(compObj[propKeyRemoveAll]) {
				compObj[propKeyRemoveAll]();
			}

			var isArray = propValue instanceof Array;
			if(isArray) {
				for (var arrIn in propValue) {
					var arrObj = propValue[arrIn];

					compObj[propKeyAdd](arrObj);
				}
			} else {
				if(compObj[propKeyAdd]) {
					compObj[propKeyAdd](propValue);	
				}
			}
		}
	},
	
	contentOnPress: function (oEvent) {
		var that = oEvent.getSource().__mainOwner;

		var componentId = oEvent.getSource().__specification.__techKey;

		that.setClickedComponent(componentId);
		that.setSelectedKey("");
		that.fireDesignStudioPropertiesChangedAndEvent(["clickedComponent", "selectedKey"], "onClick");
		
	},

	contentOnSelect: function (oEvent) {
		var that = oEvent.getSource().__mainOwner;

		var componentId = oEvent.getSource().__specification.__techKey;
		var selectedKey = oEvent.getParameters().selectedKey;

		that.setClickedComponent(componentId);
		that.setSelectedKey(selectedKey);
		that.fireDesignStudioPropertiesChangedAndEvent(["clickedComponent", "selectedKey"], "onSelect");
		
	},
	onResize: function(width, height, parent) {
		var that = parent;

		width = width - 20;
		var columns = that.getColumnNumber();
		var minWidth = Math.floor((width - 10) / columns);
		
		// in case special resize code is required
		for (var compId in that._oRowLayyouts) {
			var compObj = that._oRowLayyouts[compId];

			if(compObj.setWidth) {
				compObj.setWidth(width / columns +"px");
				compObj.__layData.setMinWidth(minWidth);
			}
		}

		// in case special resize code is required
		for (var compId in that._oComponents) {
			var compObj = that._oComponents[compId];
			
			if(isNaN(compObj.__specification.__specification.widthI)) {
				var newWidth = minWidth - compObj.__specification.__specification.leftI - compObj.__specification.__specification.rightI;
				if(compObj.setWidth) {
					compObj.setWidth(newWidth +"px");
				}
			}
		}
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = KpiTile;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});	