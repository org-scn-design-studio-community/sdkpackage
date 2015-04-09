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
	options.iDisplayText = "Text";
	options.ignoreResults = false;
	options.dimensionSeparator = " | ";
	
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
			
			if(allKeys.indexOf("|" + key + "|") > -1) {
				if(options.iDuplicates=="Ignore") {
					// key already in the array...
					continue;
				}
			}
			
			var itemDef = { 
				key: key, 
				text: text, 
				url: key,
				value: value,
				valueS: org_scn_community_basics.getFormattedValue(value, metadata.locale, options.iNumberOfDecimals),
			};

			if(options.iDuplicates=="Sum") {
				if(allKeys.indexOf("|" + key + "|") > -1) {
					if(value != 0) {
						// search and update value
						for (var iL = 0; iL < list.length; iL++) {
							if(list[iL].key == key){
								list[iL].value = list[iL].value + value;
								list[iL].valueS = org_scn_community_basics.getFormattedValue(list[iL].value, metadata.locale, options.iNumberOfDecimals);
								lValues[iL] = list[iL].value;
								break;
							}
						}
					}
				} else {
					list.push(itemDef);
					lValues.push(value);
				}
			} else {
				list.push(itemDef);
				lValues.push(value);
			}
			
			if(allKeys.indexOf("|" + key + "|") == -1) {
				allKeys = allKeys + key + "|";
			}
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

	if(dimensions != undefined && dimensions != "") {
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
				// ok, we check the existence also when hierarchy is active, even in many cases the members are not visible as collapsed
				dimensionData = org_scn_community_databound.getTopBottomElementsForDimension(data, metadata, name, options);
				
				var availableMembers = "|";
				for (var iM = 0; iM < members.length; iM++) {
					var member = members[iM];
					
					var memberJson = {};
					memberJson.name = member.internalKey;
					memberJson.text = member.text;
					memberJson.externalKey = member.externalKey;
					// memberJson.id = options.idPrefix + name + member.internalKey;
					
					if(dimensionData.allKeys.length > 0) {
						if(dimensionData.allKeys.indexOf("|" + member.internalKey + "|") > -1) {
							// this member is also in result set, means can be selected in drill down mode

							for(var iA = 0; iA < dimensionData.list.length; iA++) {
								if(dimensionData.list[iA].key == memberJson.name){
									if(dimensionData.list[iA].value > 0) {
										memberJson.valueSign = "+";
									} else if(dimensionData.list[iA].value < 0) {
										memberJson.valueSign = "-";
									} else {
										memberJson.valueSign = "0";	
									}
									
									memberJson.value = dimensionData.list[iA].value;
									memberJson.valueS = dimensionData.list[iA].valueS;
								}
							}

							availableMembers = availableMembers + "|" + memberJson.name + "|";
						} else {
							// the member is not in the resultset, cannot be selected in drill down mode
							memberJson.valueSign = "0";
							memberJson.value = 0;
							memberJson.valueS = "0";
						}
					} else {
						// there are no members in the resultset
						memberJson.valueSign = "0";
						memberJson.value = undefined;
						memberJson.valueS = "";
					}
					
					if(options.iDisplayText == "Text (Value)") {
						memberJson.display = memberJson.text + " (" + memberJson.valueS + ")";	
					} else {
						memberJson.display = memberJson.text;
					}

					oData[name].items.push(memberJson);
					oData[name].availableMembers = availableMembers;
				}
			}
		}
	} else {
		oData = {
			brands: {
				name: "BRANDS",
				text: "Brands",
				items: [
				   {text : "BMW", name: "1", enabled: true, value: 30.45, valueS: "30.45", valueSign: "+"},
			 	   {text : "AUDI", name: "2", enabled: true, value: -40.72, valueS: "-40.72", valueSign: "-"}
				]
			}
 			,
 			models: {
				name: "MODELS",
				text: "Models",
				items: [
	 				{text : "320d", name: "1", enabled: true, value: 0.00, valueS: "0.00", valueSign: "0"},
	 				{text : "325i", name: "2", enabled: true, value: -6.43, valueS: "-6.43", valueSign: "-"},
	 				{text : "330d", name: "3", enabled: true, value: 0.00, valueS: "0.00", valueSign: "0"},
	 				{text : "330i", name: "4", enabled: true, value: 1.75, valueS: "1.75", valueSign: "+"},
	 				{text : "335i", name: "5", enabled: true, value: -22.42, valueS: "-22.42", valueSign: "-"},
	 				{text : "A1", name: "6", enabled: true, value: 0.00, valueS: "0.00", valueSign: "0"},
	 				{text : "A3", name: "7", enabled: true, value: 18.32, valueS: "18.32", valueSign: "+"},
	 				{text : "A4", name: "8", enabled: true, value: -7.01, valueS: "-7.01", valueSign: "-"},
	 				{text : "A5", name: "9", enabled: true, value: 2.45, valueS: "2.45", valueSign: "+"},
	 				{text : "A6", name: "10", enabled: true, value: 6.12, valueS: "6.12", valueSign: "+"}
	 			]
			}
 			,
 			types: {
				name: "TYPES",
				text: "Types",
				items: [
					{text : "Limousine", name: "1", enabled: true, value: 0.00, valueS: "0.00", valueSign: "0"},
					{text : "Coupé", name: "2", enabled: true, value: -19.54, valueS: "-19.54", valueSign: "-"},
					{text : "Cabrio", name: "3", enabled: true, value: 2.42, valueS: "2.42", valueSign: "+"}
				]
 			}
 		};
	}

	return oData;
};

/**
 * Flattens data from tuple format to 2D Array
 * @author Mike Howles & Karol Kalisz
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
	if(!options) {
		options = org_scn_community_databound.initializeOptions();
	}
	
	var retObj = {
		dimensionHeaders : [],
		dimensionheader : "",
		columnHeaders : [],
		columnHeaders2D : [],
		rowHeaders : [],
		rowHeaders2D : [],
		values : [],
		formattedValues : [],
		hash : {},
		geometry : {}
	};
	if(!data || !data.dimensions || (!data.data && !data.formattedData)) {
		throw("Incomplete data given.\n\n" + JSON.stringify(data));
	}

	retObj.dimensionCols = [];
	retObj.dimensionRows = [];
	retObj.dimensionHeaders = [];
	
	// put on object for external access
	retObj.geometry.colLength = data.axis_columns.length;
	retObj.geometry.rowLength = data.axis_rows.length;

	for(var dI=0;dI<data.dimensions.length;dI++){
		var dim = data.dimensions[dI];

		if(dim.axis == "ROWS") {
			retObj.dimensionRows.push({key: dim.key, text: dim.text});
			retObj.dimensionHeaders.push(dim.text);
		}
		if(dim.axis == "COLUMNS") {
			retObj.dimensionCols.push({key: dim.key, text: dim.text});
		}
	}
	
	var tupleIndex = 0;
	// Make Row Header Labels
	var maxRows = retObj.geometry.rowLength;
	for(var row=0;row<maxRows;row++){
		var newValueRow = [];
		var newFormattedValueRow = [];
		var rowHeader = "";
		var rowHeader2D = [];
		var rowAxisTuple = data.axis_rows[row];
		var sep = "";
		var isResult = false;
		
		for(var j=0;j<rowAxisTuple.length;j++){
			if(rowAxisTuple[j] != -1){
				if(options.ignoreResults) {
					var member = data.dimensions[j].members[rowAxisTuple[j]];
					if(member.type == "RESULT") { isResult=true; break;}
					// also hierarchy nodes should be ignored, but this need more work, some code snippet
					// if(member.type == "HIERARCHY_NODE" && member.level == 1 && member.nodeState == "EXPANDED") { isResult=true; break;}
				}

				rowHeader += sep + data.dimensions[j].members[rowAxisTuple[j]].text;
				rowHeader2D.push(data.dimensions[j].members[rowAxisTuple[j]].text);
				sep = options.dimensionSeparator;
			}
		}
		
		if(isResult) { 
			retObj.geometry.rowLength = retObj.geometry.rowLength - 1;
			// move the tupleIndex by the skipped values
			tupleIndex = tupleIndex + retObj.geometry.colLength;
			continue; 
		}
		
		retObj.hash[rowHeader] = row;
		retObj.rowHeaders.push(rowHeader);
		retObj.rowHeaders2D.push(rowHeader2D);
		for(var col=0;col<retObj.geometry.colLength;col++){
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
	
	var spiceIndexCorrection = 0;
	
	// Make Column Header Labels
	for(var col=0;col<retObj.geometry.colLength;col++){
		var colHeader = "";
		var colHeader2D = [];
		var colAxisTuple = data.axis_columns[col];
		var sep = "";
		for(var j=0;j<colAxisTuple.length;j++){
			if(colAxisTuple[j] != -1){
//				if(options.ignoreResults && data.dimensions[j].members[colAxisTuple[j]].type == "RESULT") {
//					for(var row=0;row<maxRows;row++){
//						if(retObj.values[row]) {
//							retObj.values[row].spice(j-spiceIndexCorrection,1);
//							retObj.formattedValues[row].spice(j-spiceIndexCorrection,1);
//							spiceIndexCorrection++;
//						}
//					}
//				}
				
				colHeader += sep + data.dimensions[j].members[colAxisTuple[j]].text;
				colHeader2D.push(data.dimensions[j].members[colAxisTuple[j]].text);
				sep = options.dimensionSeparator;
			}
		}
		retObj.columnHeaders.push(colHeader);
		retObj.columnHeaders2D.push(colHeader2D);
	}
	
	if(retObj.rowHeaders2D[0]) {
		retObj.geometry.headersLength = retObj.rowHeaders2D[0].length;	
	} else {
		retObj.geometry.headersLength = 0;
	}
	
	retObj.geometry.allColumnsLength = retObj.geometry.headersLength + retObj.geometry.colLength;

	return retObj;
};

org_scn_community_databound.toRowTable = function (flatData, options) {
	var rowsData = [];
	var rowsDataPlain = [];

	for(var rI=0;rI<flatData.geometry.rowLength;rI++){
		var rowPlain = {};
		var row = [];
		for(var cI=0;cI<flatData.geometry.allColumnsLength;cI++){
			var cell = {};
			if(cI < flatData.geometry.headersLength) {
				cell[""+cI] = flatData.rowHeaders2D[rI][cI];
				rowPlain[cI] = flatData.rowHeaders2D[rI][cI];
			} else {
				cell[""+cI] = flatData.formattedValues[rI][cI-flatData.geometry.headersLength];
				rowPlain[cI] = flatData.formattedValues[rI][cI-flatData.geometry.headersLength];
			}
			row.push(cell);
		}
		rowsData.push(row);
		rowsDataPlain.push(rowPlain);
	}

	flatData.data2D = rowsData;
	flatData.data2DPlain = rowsDataPlain;
	
	return flatData;
};

org_scn_community_databound.getSampleDataFlat = function (pathInfo, callBack, afterPrepare) {
	var requestForData = new XMLHttpRequest();
    var returnValue = undefined;
    
	requestForData.onreadystatechange = function() {
		// check status and react
		if (requestForData.readyState == 4){
			// sometimes it gets 200 without content
			if(requestForData.status == 404 || requestForData.responseUrl == "" || requestForData.response == "") {
				returnValue= {};
			} else {
				returnValue= requestForData.response;
				callBack(JSON.parse(returnValue), afterPrepare);
			};
		};
	};
	
	// trigger ajax request
	var dataUrl = pathInfo.mainSDKPath + "org.scn.community.databound/res/_data/data.flat.json";
	
	requestForData.open("GET", dataUrl, true);
	requestForData.send();
}