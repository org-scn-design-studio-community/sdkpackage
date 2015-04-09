/**
 * Copyright 2014 Scn SDK Community
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

var org_scn_community_databound = org_scn_community_databound || {};

org_scn_community_databound.hasData = function (data) {
	
	if(!data || data == "" || data == undefined) {
		return false;
	}
	
	return true;
};

org_scn_community_databound.hasDataAndMetadata = function (data, metadata) {
	
	if(!data || data == "" || data == undefined) {
		return false;
	}
	
	if(!metadata || metadata == "" || metadata == undefined) {
		return false;
	}
	
	if(!metadata || !metadata.dimensions) {
		return false;
	}
	
	return true;
};

org_scn_community_databound.initializeOptions = function () {
	var options = {};
	
	options.iMaxNumber = 100;
	options.iTopBottom = "Both";
	options.iSortBy = "Default";
	options.iDuplicates = "Ignore";
	options.iNumberOfDecimals = 2;
	options.allKeys = false;
	options.idPrefix = "";
	
	return options;
}

org_scn_community_databound.initializeEmptyReturn = function () {
	var returnObject = {};
	
	returnObject.list = [];
	returnObject.maxDelta = 0;
	returnObject.average = 0;
	returnObject.maxValue = 0;
	returnObject.minValue = 0;
	returnObject.allKeys = "";
	
	return returnObject;
}

org_scn_community_databound.getTopBottomElementsForDimension = function (data, metadata, requestedDimensionKey, options) {
	if(options == undefined) {
		options = org_scn_community_databound.initializeOptions();
	}
	
	if(!metadata || !metadata.dimensions) {
		return org_scn_community_databound.initializeEmptyReturn();;
	}
	
	//FBL20141216 Removed an additionnal S from the variable name
	var dimensionStartIndex = -1;
	var dimensionEndIndex   = -1;

	// column or row (more rows as columns, means a column, vertical)
	// 1.3 release does not bring rowCount and columnCount...
	var isARow = (data.rowCount && data.columnCount && data.rowCount < data.columnCount);

	if(requestedDimensionKey == undefined || requestedDimensionKey == "") {
		dimensionStartIndex = -1;
		dimensionEndIndex = -1;
	} else {
		for (var i = 0; i < metadata.dimensions.length; i++) {
			var dimension = metadata.dimensions[i];
	
			if(dimension.key == requestedDimensionKey) {
				dimensionStartIndex = i;
				dimensionEndIndex = i;
	
				if(dimension.axis == "ROWS") {
					isARow = false;
				}
				if(dimension.axis == "COLUMNS") {
					isARow = true;
				}
				break;
			}
		}
		
		// if dimension is not in the resultset, empty list back
		if(dimensionStartIndex == -1) {
			return org_scn_community_databound.initializeEmptyReturn();;
		}
	}
	
	return org_scn_community_databound.getTopBottomElementsByIndex(data, metadata, dimensionStartIndex, dimensionEndIndex, options);
};

/**
 * Global Function for getting Top / Bottom from data
 * iMaxNumber - integer, > 0
 * iTopBottom - string, "Top X" | "Bottom X" | "Both"
 * iSortBy - string, "Default" | <some other string>
 * iDuplicates - string, "Ignore Duplicates" | <some other string>
 */
org_scn_community_databound.getTopBottomElements = function (data, metadata, options) {

	var dimensionStartIndex = -1;
	var dimensionEndIndex = -1;

	return org_scn_community_databound.getTopBottomElementsByIndex(data, metadata, dimensionStartIndex, dimensionEndIndex, options);
};

org_scn_community_databound.getTopBottomElementsByIndex = function (data, metadata, dimensionStartIndex, dimensionEndIndex, options) {
	var list = [];
	
	if(!data || data == "" || data == undefined) {
		return org_scn_community_databound.initializeEmptyReturn();
	}
	
	var lValues = [];
	
	// column or row (more rows as columns, means a column)
	// 1.3 release does not bring rowCount and columnCount...
	var isARow = (data.rowCount && data.columnCount && data.rowCount < data.columnCount);
	
	if (!isARow) {
		// search for the last dimension in rows
		for (var i = 0; i < metadata.dimensions.length; i++) {
			var dimension = metadata.dimensions[i];

			if(dimension.axis == "ROWS") {
				if(dimensionStartIndex == -1) {
					dimensionStartIndex = i;	
				}
				if(dimensionEndIndex == -1) {
					dimensionEndIndex = i;
				}
			}
		}
	} else {
		// search for the last dimension
		for (var i = 0; i < metadata.dimensions.length; i++) {
			var dimension = metadata.dimensions[i];

			if(dimension.axis == "COLUMNS") {
				if(dimensionStartIndex == -1) {
					dimensionStartIndex = i;	
				}
				if(dimensionEndIndex == -1) {
					dimensionEndIndex = i;
				}
			}
		}
	}
	
	var allKeys = "|";
	
	for (var i = 0; i < data.data.length; i++) {
		var tupel = data.tuples[i]; 
		var isResult = metadata.dimensions[dimensionEndIndex].members[tupel[dimensionEndIndex]].type == "RESULT";
		
		if(!isResult) {
			var key =  metadata.dimensions[dimensionEndIndex].members[tupel[dimensionEndIndex]].key;
			var text =  metadata.dimensions[dimensionEndIndex].members[tupel[dimensionEndIndex]].text;
			
			var value = data.data[i];

			if(value == undefined || value == "null") {
				continue;
			}
			
			// check the key existence
			if(text.indexOf("|") > -1) {
				text = text.replace("|", " | ");
			}
			
			if(options.iDuplicates=="Ignore") {
				if(allKeys.indexOf("|" + key + "|") > -1) {
					// key already in the array...
					continue;
				}
			} 
			
			allKeys = allKeys + key + "|";
			
			lValues.push(value);
			
			var itemDef = { 
				key: key, 
				text: text, 
				url: key,
				value: value,
				valueS: org_scn_community_basics.getFormattedValue(value, metadata.locale, options.iNumberOfDecimals),
			};

			list.push(itemDef);
		}
	}
	
	if(options.iSortBy!="Default") {
		list.sort(function(a,b) { return parseFloat(b.value) - parseFloat(a.value); } );
	}

	var lAverage = 0;
	for (var i = 0; i < lValues.length; i++) {
		lAverage = lAverage + lValues[i];
	}
	
	if(lValues.length > 0) {
		lAverage = lAverage / lValues.length;
	}
	
	var max = options.iMaxNumber;
	var newList = [];
		
	var counter = 0;
	if(options.iTopBottom == "Top X") {
		for (var i = 0; i < list.length; i++) {
			if(counter >= max) {
				break;
			}
			
			list[i].counter = (i+1);
			list[i].delta = (list[i].value - lAverage);

			if(options.iSortBy!="Default") { // break criteria only for sorted lists
				if(list[i].delta < 0) {
					break;
				}
			}
			
			newList.push(list[i]);
			counter = counter + 1;
		}
	} else if (options.iTopBottom == "Bottom X"){
		var start = list.length-max;
		
		if(list.length < max) {
			start = 0;
		}

		for (var i = start; i < list.length; i++) {
			if(counter >= max) {
				break;
			}
			
			list[i].counter = (i+1);
			list[i].delta = (list[i].value - lAverage);

			if(options.iSortBy!="Default") { // break criteria only for sorted lists
				if(list[i].delta > 0) {
					continue;
				}
			}
			
			newList.push(list[i]);
			counter = counter + 1;
		}
	} else {
		for (var i = 0; i < list.length; i++) {
			if(counter >= max) {
				break;
			}
			
			list[i].counter = (i+1);
			list[i].delta = (list[i].value - lAverage);

			if(options.iSortBy!="Default") { // break criteria only for sorted lists
				if(list[i].delta < 0) {
					break;
				}
			}
			
			newList.push(list[i]);
			counter = counter + 1;
		}
		
		var start = list.length-max;
		if(list.length < max) {
			start = 0;
		}
		
		if(start < counter) {
			start = counter;
		}

		counter = 0;
		
		for (var i = start; i < list.length; i++) {
			if(counter >= max) {
				break;
			}
			
			var element = list[i];
			
			element.counter = (i+1);
			element.delta = (element.value - lAverage);
			
			if(options.iSortBy!="Default") { // break criteria only for sorted lists
				if(element.delta > 0) {
					continue;
				}
			}
			
			newList.push(list[i]);
			counter = counter + 1;
		}
	}

	if(newList.length > 0) {
		var lMaxDelta = Math.abs(newList[0].delta);
		var lMinValue = newList[0].value;
		var lMaxValue = newList[0].value;
	}
	
	for (var i = 0; i < newList.length; i++) {
		var element = newList[i];
		
		if(lMaxDelta < Math.abs(element.delta)) {
			lMaxDelta = Math.abs(element.delta);	
		}
		if(lMinValue > element.value) {
			lMinValue = element.value;	
		}
		if(lMaxValue < element.value) {
			lMaxValue = element.value;	
		}
	}
	
	if(lMaxDelta == 0) {
		lMaxDelta = 1;
	}

	var returnObject = org_scn_community_databound.initializeEmptyReturn();
	returnObject.list = newList;
	returnObject.maxDelta = lMaxDelta;
	returnObject.average = lAverage;
	returnObject.maxValue = lMaxValue;
	returnObject.minValue = lMinValue;

	if(options.allKeys && allKeys.length > 1) {
		returnObject.allKeys = allKeys;
	}
	
	return returnObject;
};

org_scn_community_databound.getDataModelForDimensions = function (data, metadata, dimensions, options) {
	var oData = {};

	if(dimensions != undefined) {
		var lDimensionsJson = JSON.parse(dimensions);
		for (var iD = 0; iD < lDimensionsJson.length; iD++) {
			var dimension = lDimensionsJson[iD];
			
			if(dimension.isMeasuresDimension != true) {
				var name = dimension.name;
				var text = dimension.text;
				var members = dimension.members;
				
				oData[name] = {};
				oData[name].name = name;
				oData[name].text = text;
				oData[name].items = [];
				
				var dimensionData = org_scn_community_databound.initializeEmptyReturn();
				if(!dimension.hierarchyActive) {
					// only check the resultset if hierarchy is inactive
					dimensionData = org_scn_community_databound.getTopBottomElementsForDimension(data, metadata, name, options);
				}
				
				for (var iM = 0; iM < members.length; iM++) {
					var member = members[iM];
					
					var memberJson = {};
					memberJson.name = member.internalKey;
					memberJson.text = member.text;
					// memberJson.id = options.idPrefix + name + member.internalKey;
					
					if(dimensionData.allKeys.length > 0) {
						if(dimensionData.allKeys.indexOf("|" + member.internalKey + "|") > -1) {
							// this member is also in result set, means can be selected in drill down mode
							memberJson.available = true;
						} else {
							// the member is not in the resultset, cannot be selected in drill down mode
							memberJson.available = false;
						}
					} else {
						// there are no members in the resultset, default selection is currently true
						memberJson.available = true;
					}
					
					oData[name].items.push(memberJson);
				}
			}
		}
	} else {
		oData = {
			brands: [
 				{name : "BMW", key: "1"},
 				{name : "AUDI", key: "2", enabled: false}
 			],
 			models: [
 				{name : "320d", key: "1"},
 				{name : "325i", key: "2"},
 				{name : "330d", key: "3"},
 				{name : "330i", key: "4"},
 				{name : "335i", key: "5"},
 				{name : "A1", key: "6"},
 				{name : "A3", key: "7"},
 				{name : "A4", key: "8"},
 				{name : "A5", key: "9"},
 				{name : "A6", key: "10"}
 			],
 			types: [
 				{name : "Limousine", key: "1"},
 				{name : "Coupé", key: "2"},
 				{name : "Cabrio", key: "3"}
 			]						
 		};
	}

	return oData;
};

/**
 * Flattens data from tuple format to 2D Array
 * @author Mike Howles
 * @param data { 
 *	 	"selection" : [Array of dimension selections] 	
 *	 	"tuples" : *Design Studio Tuples*,
 *		"data" : *Design Studio Data*,
 *   	"formattedData" : *Design Studio Formatted Data*,
 * 		"dimensions" : *Design Studio Metadata Dimensions JSON*,
 *		"locale" : *Design Studio user locale (e.g. en_US)",
 *	  	"axis_columns : [Array of Column Axis Dimension Selection Members]
 *	  	"axis_rows" : [Array of Row Axis Dimension Selection Members]
 *	 }
 * @param options {
 * 		Placeholder
 * }
 * 
 * @return {
 * 		"columnHeaders" : [1D Array of Header Labels]
 * 		"columnHeaders2D" : [2D Array of Header Labels]
 * 		"rowHeaders" : [1D Array of Row Headers]
 *  	"rowHeaders2D" : [2D Array of Row Headers]
 * 		"values" : [2D Array of Measures] 
 *
 * }
 */
org_scn_community_databound.flatten = function (data, options) {
	var retObj = {
		columnHeaders : [],
		columnHeaders2D : [],
		rowHeaders : [],
		rowHeaders2D : [],
		values : [],
		formattedValues : [],
		hash : {}
	};
	if(!data || !data.dimensions || (!data.data && !data.formattedData)) {
		throw("Incomplete data given.\n\n" + JSON.stringify(data));
	}
	var dimensionCols = [];
	var dimensionRows = [];
	var data2D = [];
	var colLength = data.axis_columns.length;
	var rowLength = data.axis_rows.length;
	var tupleIndex = 0;
	// Make Row Header Labels
	for(var row=0;row<rowLength;row++){
		var newValueRow = [];
		var newFormattedValueRow = [];
		var rowHeader = "";
		var rowHeader2D = [];
		var rowAxisTuple = data.axis_rows[row];
		var sep = "";
		for(var j=0;j<rowAxisTuple.length;j++){
			if(rowAxisTuple[j] != -1){
				rowHeader += sep + data.dimensions[j].members[rowAxisTuple[j]].text;
				rowHeader2D.push(data.dimensions[j].members[rowAxisTuple[j]].text);
				sep = " ";
			}
		}
		retObj.hash[rowHeader] = row;
		retObj.rowHeaders.push(rowHeader);
		retObj.rowHeaders2D.push(rowHeader2D);
		for(var col=0;col<colLength;col++){
			if(data.data && data.data.length > 0){
				newValueRow.push(data.data[tupleIndex]);
			}
			if(data.formattedData && data.formattedData.length > 0){
				newFormattedValueRow.push(data.formattedData[tupleIndex]);
			}
			tupleIndex++;
		}
		if(newValueRow.length>0) retObj.values.push(newValueRow);
		if(newFormattedValueRow.length>0) retObj.formattedValues.push(newFormattedValueRow);
	}
	// Make Column Header Labels
	for(var col=0;col<colLength;col++){
		var colHeader = "";
		var colHeader2D = [];
		var colAxisTuple = data.axis_columns[col];
		var sep = "";
		for(var j=0;j<colAxisTuple.length;j++){
			if(colAxisTuple[j] != -1){
				colHeader += sep + data.dimensions[j].members[colAxisTuple[j]].text;
				colHeader2D.push(data.dimensions[j].members[colAxisTuple[j]].text);
				sep = " ";
			}
		}
		retObj.columnHeaders.push(colHeader);
		retObj.columnHeaders2D.push(colHeader2D);
	}
	return retObj;
};