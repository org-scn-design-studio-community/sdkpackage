/**
 * Copyright 2015 SCN SDK Community
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

var org_scn_community_unified = {
	version : "3.0"
};

define(["./component.databound"], function() {

	org_scn_community_unified.getObjectSingleContent= function (owner, name, options) {
		var that = owner;
		var propertyObject = org_scn_community_unified.getObjectContent(that, name, options);
	
		if(propertyObject.value[0]) {
			propertyObject.value = propertyObject.value[0];
		}
	
		propertyObject.jsonTemplate = {};
		for (var jI in propertyObject.value) {
			if(jI == "parentKey" || jI == "leaf" || jI == "key") continue;
			propertyObject.jsonTemplate[jI] = propertyObject.value[jI];
		}
		
		return propertyObject;
	};
	
	org_scn_community_unified.getObjectArrayContent = function (owner, name, options) {
		var that = owner;
		var propertyObject = org_scn_community_unified.getObjectContent(that, name, options);
	
		if(propertyObject.isArraySingle) {
			if(propertyObject.value[0]) {
				var root = propertyObject.value[0];
				root.__children = [];
	
				for(var contentI in propertyObject.value) {
					var contentO = propertyObject.value[contentI];
	
					if(contentO.parentKey != "ROOT") {
						root.__children.push(contentO);
					}
				}
	
				propertyObject.value = root;
			}
		}
	
		propertyObject.jsonTemplate = {};
		propertyObject.subArrayName = that.getSpecSubArrayName(propertyObject.name);
	
		if(propertyObject.isArraySingle) {
			for (var jI in propertyObject.value) {
				if(jI == "parentKey" || jI == "leaf") continue;
				if(jI == "__children") {
					propertyObject.jsonTemplate[propertyObject.subArrayName] = [];
					for (var pcI in propertyObject.value[jI]) {
						var propChildO = propertyObject.value[jI][pcI];
						var subPropO = {};
						for (var pCpI in propChildO) {
							if(pCpI == "parentKey" || pCpI == "leaf") continue;
							
							var valueToSet = propChildO[pCpI];
							valueToSet = org_scn_community_unified.fixArrayValue(valueToSet);
							if(valueToSet != undefined) {	
									subPropO[pCpI] = valueToSet;
							}
						}
						propertyObject.jsonTemplate[propertyObject.subArrayName].push(subPropO);
					}
				} else {
					var valueToSet = propertyObject.value[jI];
					valueToSet = org_scn_community_unified.fixArrayValue(valueToSet);
					if(valueToSet != undefined) {
							propertyObject.jsonTemplate[jI] = valueToSet;
					}
				}
			}
		} else {
			propertyObject.jsonTemplate = [];
			
			for (var jAI in propertyObject.value) {
				var jO = propertyObject.value[jAI];
				
				propertyObject.jsonTemplate[jAI] = {};
				for (var jI in jO) {
					if(jI == "parentKey" || jI == "leaf") continue;
	
					var valueToSet = jO[jI];
					valueToSet = org_scn_community_unified.fixArrayValue(valueToSet);
					if(valueToSet != undefined) {
						propertyObject.jsonTemplate[jAI][jI] = valueToSet;	
					}
				}
			}
		}
	
		return propertyObject;
	};
	
	org_scn_community_unified.fixArrayValue= function (valueToSet) {
		if(valueToSet != undefined && (
			(valueToSet.length != undefined && valueToSet.length > 0)
			|| valueToSet.length == undefined)
			) {
				if(valueToSet.length != undefined) {
					// assuming JSON
					if(valueToSet.indexOf("[") == 0) {
						valueToSet = JSON.parse(valueToSet);
						return valueToSet;
					}
				}
				return valueToSet;
		}
		return undefined;
	};
	
	org_scn_community_unified.getObjectContent= function (owner, name, options) {
		var that = owner;
		var propertyObject = {};
	
		propertyObject.name = name;
		propertyObject.propertyName = name.substring(0,1).toUpperCase() + name.substring(1);
	
		propertyObject.useManual = that["getUse" + propertyObject.propertyName]();
		propertyObject.dataCellList = that["getDataCellList" + propertyObject.propertyName]();
		propertyObject.useDataCellList = false;
	
		propertyObject.hasData = org_scn_community_databound.hasData (propertyObject.dataCellList);
		propertyObject.isArray = that.getSpecIsArray(propertyObject.name);
		propertyObject.isArraySingle = that.getSpecIsArraySingle(propertyObject.name);
	
		org_scn_community_unified.getOriginMappings(that, propertyObject);
	
		if(propertyObject.hasData) {
			propertyObject.dataCellList = org_scn_community_databound.flatten (propertyObject.dataCellList,options);
			if(!propertyObject.useManual) {
				propertyObject.useDataCellList = true;
			}
		}
	
		propertyObject.value = that["get"+propertyObject.propertyName]();
		if(propertyObject.isArray) {
			propertyObject.value = org_scn_community_basics.parseJson(propertyObject.value, "A");
		}
	
		propertyObject.json = {};
	
		return propertyObject;
	};
	
	org_scn_community_unified.loopObjectArray= function (owner, propertyObject, rowI) {
		var that = owner;
		propertyObject.json = [];
	
		if(propertyObject.useDataCellList) {
			for (var cellI in propertyObject.dataCellList.values[rowI]) {
				var cellO = {};
				if(propertyObject.origMappingMain) {
					for (var nI in propertyObject.origMappingMain) {
						var d = propertyObject.origMappingMain[nI];
						v = org_scn_community_unified.loadDataValueForSpec(d, rowI, cellI, propertyObject);
						cellO[d["n"]] = v;
	
					}
				};
				propertyObject.json.push(cellO);
			}
		} else {
			if(propertyObject.useManual) {
				propertyObject.json = JSON.parse(JSON.stringify(propertyObject.jsonTemplate));
			}
		}
		return propertyObject;
	};
	
	org_scn_community_unified.loopFloat= function (owner, propertyObject, rowI) {
		var that = owner;
		if(propertyObject.useDataCellList) {
			if(propertyObject.origMappingMain) {
				for (var nI in propertyObject.origMappingMain) {
					var d = propertyObject.origMappingMain[nI];
					v = org_scn_community_unified.loadDataValueForSpec(d, rowI, 0, propertyObject);
					propertyObject.value = v;
				}
			}
			
		}
		
		return propertyObject;
	};
	
	org_scn_community_unified.loopObjectSingle= function (owner, propertyObject, rowI) {
		var that = owner;
		propertyObject.json = {};
	
		// copy the template 1:1 to fill in values which are not in data set
		// propertyObject.json = JSON.parse(JSON.stringify(propertyObject.jsonTemplate));
	
		if(propertyObject.useDataCellList) {
			if(propertyObject.origMappingMain) {
				for (var nI in propertyObject.origMappingMain) {
					var d = propertyObject.origMappingMain[nI];
					v = org_scn_community_unified.loadDataValueForSpec(d, rowI, 0, propertyObject);
					propertyObject.json[d["n"]] = v;
				}
			}
		} else {
			if(propertyObject.useManual) {
				propertyObject.json = JSON.parse(JSON.stringify(propertyObject.jsonTemplate));
			}
		}
		return propertyObject;
	};
	
	org_scn_community_unified.loopObjectSingleDouble= function (owner, propertyObject, rowI) {
		var that = owner;
		propertyObject.json = {};
	
		// copy the template 1:1 to fill in values which are not in data set
		// propertyObject.json = JSON.parse(JSON.stringify(propertyObject.jsonTemplate));
	
		if(propertyObject.useDataCellList) {
			for (var rowIN in propertyObject.dataCellList.values) {
				if(propertyObject.origMappingMain) {
					for (var nI in propertyObject.origMappingMain) {
						var d = propertyObject.origMappingMain[nI];
						v = org_scn_community_unified.loadDataValueForSpec(d, rowIN, 0, propertyObject);
						propertyObject.json[d["n"]] = v;
					}
				}
	
				if(propertyObject.origMappingChild) {
					propertyObject.json[propertyObject.subArrayName] = propertyObject.json[propertyObject.subArrayName] || [];
					propertyObject.json[propertyObject.subArrayName][rowIN] = {};
	
					// copy the template based on row to fill in values which are not in data set
					if(propertyObject.jsonTemplate[propertyObject.subArrayName]){
						if(propertyObject.jsonTemplate[propertyObject.subArrayName][rowIN]){
							propertyObject.json[propertyObject.subArrayName][rowIN] = JSON.parse(JSON.stringify(propertyObject.jsonTemplate[propertyObject.subArrayName][rowIN]));
						} else if(propertyObject.jsonTemplate[propertyObject.subArrayName][0]){
							propertyObject.json[propertyObject.subArrayName][rowIN] = JSON.parse(JSON.stringify(propertyObject.jsonTemplate[propertyObject.subArrayName][0]));
						}
					}
	
					for (var nI in propertyObject.origMappingChild) {
						var d = propertyObject.origMappingChild[nI];
						v = org_scn_community_unified.loadDataValueForSpec(d, rowIN, 0, propertyObject);
						propertyObject.json[propertyObject.subArrayName][rowIN][d["n"]] = v;
					}
				}
			}
		} else {
			if(propertyObject.useManual) {
				propertyObject.json = JSON.parse(JSON.stringify(propertyObject.jsonTemplate));
			}
		}
		return propertyObject;
	};
	
	org_scn_community_unified.loadDataValueForSpec = function (d, rowI, cellI, propertyObject) {
		var n = d["n"];
		var s = d["s"];
		var v = d["v"];
		var f = d["f"];
		if(v == undefined) {
			if(s.length == 4) {
				v = propertyObject[s[0]][s[1]][(s[2]=="<INDEX>"?rowI:s[2])][s[3]=="<CELL-INDEX>"?cellI:s[3]];
			} else if(s.length == 3) {
				if(s[1] == "<INDEX>") {
					if(propertyObject[s[0]][s[1]=="<INDEX>"?rowI:s[1]]) {
						v = propertyObject[s[0]][s[1]=="<INDEX>"?rowI:s[1]][(s[2]=="<INDEX>"?rowI:s[2])];	
					} else {
						v = propertyObject[s[0]][0][(s[2]=="<INDEX>"?rowI:s[2])];	
					}
				} else if(s[1] == "<CELL-INDEX>") {
					if(propertyObject[s[0]][s[1]=="<CELL-INDEX>"?cellI:s[1]]) {
						v = propertyObject[s[0]][s[1]=="<CELL-INDEX>"?cellI:s[1]][s[2]];	
					} else {
						v = propertyObject[s[0]][0][s[2]];	
					}
				}
			} else if(s.length == 1 && s[0] == "<INDEX>") {
				v = parseInt(rowI);
			} else {
				v = propertyObject[s[0]][s[1]];						
			}
	
	
			if(f != undefined) {
				v = f(v);
			}
		}
		return v;
	};
	
	org_scn_community_unified.getOriginMappings = function (owner, propertyObject) {
		var that = owner;
		var type = that.getSpecOrigType(propertyObject.name);
		
		if(type == "" || type == undefined) {
			type = that.getSpecType(propertyObject.name);
	
			if(type == "float") {
				if(propertyObject.name.indexOf("maxX") == 0) {
					propertyObject.origMappingMain = [
					 {"n":"value","s":["dataCellList","data"], "f": org_scn_community_unified.getLength}];
				} else if(propertyObject.name.indexOf("minX") == 0) {
					propertyObject.origMappingMain = [
					 {"n":"value","s":["dataCellList","data"], "f": org_scn_community_unified.getLength}];
				} else if(propertyObject.name.indexOf("max") == 0) {
					propertyObject.origMappingMain = [
					 {"n":"value","s":["dataCellList","data"], "f": org_scn_community_unified.getMaximumValue}];
				} else if(propertyObject.name.indexOf("min") == 0) {
					propertyObject.origMappingMain = [
					 {"n":"value","s":["dataCellList","data"], "f": org_scn_community_unified.getMinimumValue}];
				} else {
					propertyObject.origMappingMain = [
					 {"n":"value","s":["dataCellList","values", "<INDEX>", "0"]}];
				}
			}
			// no need
		} else if(type == "MicroAreaChartItem") {
			propertyObject.origMappingMain = [
		         {"n":"color","s":["jsonTemplate","color"]}]; 
	
			propertyObject.origMappingChild = [
		         {"n":"x","s":["<INDEX>"]},
				 {"n":"y","s":["dataCellList","values", "<INDEX>", "0"]}];
	
		} else if(type == "MicroAreaChartLabel") {
			if(propertyObject.name.indexOf("XLabel") > -1) {
				propertyObject.origMappingMain = [
					 {"n":"label","s":["dataCellList","rowHeaders", "<INDEX>"]},
					 {"n":"color","s":["jsonTemplate","color"]}]; 
			} else if(propertyObject.name.indexOf("YLabel") > -1) {
				propertyObject.origMappingMain = [
					 {"n":"label","s":["dataCellList","values", "<INDEX>", "0"]},
					 {"n":"color","s":["jsonTemplate","color"]}]; 
			} else if(propertyObject.name.indexOf("maxLabel") > -1) {
				propertyObject.origMappingMain = [
					 {"n":"label","s":["dataCellList","data"], "f": org_scn_community_unified.getMaximumValue},
					 {"n":"color","s":["jsonTemplate","color"]}]; 
			} else if(propertyObject.name.indexOf("minLabel") > -1) {
				propertyObject.origMappingMain = [
					 {"n":"label","s":["dataCellList","data"], "f": org_scn_community_unified.getMinimumValue},
					 {"n":"color","s":["jsonTemplate","color"]}]; 
			}
	
			propertyObject.origMappingChild = [];
	
		} else if(type == "BulletChartData") {
			if(propertyObject.isArray && propertyObject.isArraySingle) {
				propertyObject.origMappingMain = [
					 {"n":"color","s":["jsonTemplate", "color"]},
					 {"n":"value","s":["dataCellList","values", "<INDEX>", "0"]}]; 
			} else {
				propertyObject.origMappingMain = [
					 {"n":"color","s":["jsonTemplate","<CELL-INDEX>", "color"]},
					 {"n":"value","s":["dataCellList","values", "<INDEX>", "<CELL-INDEX>"]}]; 
			}
	
			propertyObject.origMappingChild = [];
	
		} else if(type == "HarveyBallMicroChartItem") {
			propertyObject.origMappingMain = [
				 {"n":"color","s":["jsonTemplate", "<INDEX>", "color"]},
				 {"n":"fractionLabel","s":["jsonTemplate", "<INDEX>", "fractionLabel"]},
				 {"n":"fractionScale","s":["jsonTemplate", "<INDEX>", "fractionScale"]},
				 {"n":"formattedLabel","s":["jsonTemplate", "<INDEX>", "formattedLabel"]},
				 {"n":"fraction","s":["dataCellList","values", "<INDEX>", "0"]}]; 
	
			propertyObject.origMappingChild = [];
	
		} else if(type == "ProcessFlowConnection") {
		} else if(type == "ProcessFlowLaneHeader") {
		} else if(type == "ProcessFlowNode") {
		} else if(type == "RadioButton") {
		} else {
			throw new Error("Original Type " + type + " does not have mappings");
		}
	};
	
	org_scn_community_unified.getMaximumValue = function (numArray) {
		return Math.max.apply(null, numArray);	
	};
	
	org_scn_community_unified.getMinimumValue = function (numArray) {
		return Math.min.apply(null, numArray);	
	};
	
	org_scn_community_unified.getLength = function (numArray) {
		if(numArray) {
			return numArray.length	
		}
		return 0;
	};
	
	org_scn_community_unified.createEvent = function (owner, eventName, event) {
		var retO = {};
		retO.name = eventName.substring(2,3).toLowerCase() + eventName.substring(3);
		retO.name = retO.name.substring(0, retO.name.length-2);
		// retO.func = function (event) {org_scn_community_unified.processEvent(that, eventName, retO.name, event)};
		retO.func = eventName;
		
		return retO;
	};
	
	
	org_scn_community_unified.processEvent = function (owner, eventName, event) {
		var that = owner;
	
		var parameterKeyName = eventName.substring(2,3).toLowerCase() + eventName.substring(3);
		parameterKeyName = parameterKeyName.substring(0, parameterKeyName.length-2);
	
		parameterKeyName = parameterKeyName + "edKey";
		var parameterKeyNameCap = parameterKeyName.substring(0,1).toUpperCase() + parameterKeyName.substring(1);
		
		var changedParams = [];
		
		var key = undefined;
		if(event.getParameters().data) {
			key = event.getParameters().data("ownKey");
	
		} else {
			var param = event.getSource().data("parameter");
			if(param != undefined) {
				var collection = event.getSource().data("collection");

				var paramValue = event.getParameters()[param];
				var parameterCap = param.substring(0,1).toUpperCase() + param.substring(1);

				that["set" + parameterCap](paramValue);
				changedParams.push(param);
				key = that._specialDataModel[0][collection][paramValue].key;
			}
		}
	
		if(that["set" + parameterKeyNameCap]) {
			if(key == undefined) {key = "";}
			that["set" + parameterKeyNameCap](key);
			changedParams.push(parameterKeyName);
		}
		that.fireDesignStudioPropertiesChangedAndEvent(changedParams, eventName);
	};
});