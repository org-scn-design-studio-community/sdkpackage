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

org_scn_community_databound.getTopBottomElementsForDimension = function (data, requestedDimensionKey, metadata, iMaxNumber, iTopBottom, iSortBy, iDuplicates) {

	if(!metadata || !metadata.dimensions) {
		return [];
	}
	
	//FBL20141216 Removed an additionnal S from the variable name
	var dimensionStartIndex = -1;
	var dimensionEndIndex   = -1;

	// column or row (more rows as columns, means a column, vertical)
	// 1.3 release does not bring rowCount and columnCount...
	var isARow = (data.rowCount && data.columnCount && data.rowCount < data.columnCount);

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
		return [];
	}
	
	return org_scn_community_databound.getTopBottomElementsByIndex (data, dimensionStartIndex, dimensionEndIndex, metadata, iMaxNumber, iTopBottom, iSortBy, iDuplicates);
};

/**
 * Global Function for getting Top / Bottom from data
 * iMaxNumber - integer, > 0
 * iTopBottom - string, "Top X" | "Bottom X" | "Both"
 * iSortBy - string, "Default" | <some other string>
 * iDuplicates - string, "Ignore Duplicates" | <some other string>
 */
org_scn_community_databound.getTopBottomElements = function (data, metadata, iMaxNumber, iTopBottom, iSortBy, iDuplicates) {

	var dimensionStartIndex = -1;
	var dimensionEndIndex = -1;

	return org_scn_community_databound.getTopBottomElementsByIndex (data, dimensionStartIndex, dimensionEndIndex, metadata, iMaxNumber, iTopBottom, iSortBy, iDuplicates);
};

org_scn_community_databound.getTopBottomElementsByIndex = function (data, dimensionStartIndex, dimensionEndIndex, metadata, iMaxNumber, iTopBottom, iSortBy, iDuplicates) {
	var list = [];
	
	if(!data || data == "" || data == undefined) {
		return list;
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
	
	var allKeys = "" + "|";
	
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
			
			if(iDuplicates=="Ignore Duplicates") {
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
				valueS: org_scn_community_databound.getFormattedValue(value),
			};

			list.push(itemDef);
		}
	}
	
	if(iSortBy!="Default") {
		list.sort(function(a,b) { return parseFloat(b.value) - parseFloat(a.value); } );
	}

	var lAverage = 0;
	for (var i = 0; i < lValues.length; i++) {
		lAverage = lAverage + lValues[i];
	}
	
	this._Average = lAverage / lValues.length;
	
	var max = iMaxNumber;
	var newList = [];
	
	this._maxDelta = 0;
	
	var counter = 0;
	if(iTopBottom == "Top X") {
		for (var i = 0; i < list.length; i++) {
			if(counter >= max) {
				break;
			}
			
			list[i].counter = (i+1);
			list[i].delta = (list[i].value - this._Average);
			
			if(list[i].delta > 0 && list[i].delta > this._maxDelta) {
				this._maxDelta = list[i].delta;	
			}
			if(list[i].delta < 0 && (list[i].delta * -1) > this._maxDelta) {
				this._maxDelta = (list[i].delta * -1);	
			}
			
			if(iSortBy!="Default") { // break criteria only for sorted lists
				if(list[i].delta < 0) {
					break;
				}
			}
			
			newList.push(list[i]);
			counter = counter + 1;
		}
	} else if (iTopBottom == "Bottom X"){
		var start = list.length-max;
		
		if(list.length < max) {
			start = 0;
		}

		for (var i = start; i < list.length; i++) {
			if(counter >= max) {
				break;
			}
			
			list[i].counter = (i+1);
			list[i].delta = (list[i].value - this._Average);
			
			if(list[i].delta > 0 && list[i].delta > this._maxDelta) {
				this._maxDelta = list[i].delta;	
			}
			if(list[i].delta < 0 && (list[i].delta * -1) > this._maxDelta) {
				this._maxDelta = (list[i].delta * -1);	
			}
			
			if(iSortBy!="Default") { // break criteria only for sorted lists
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
			list[i].delta = (list[i].value - this._Average);
			
			if(list[i].delta > 0 && list[i].delta > this._maxDelta) {
				this._maxDelta = list[i].delta;	
			}
			if(list[i].delta < 0 && (list[i].delta * -1) > this._maxDelta) {
				this._maxDelta = (list[i].delta * -1);	
			}

			if(iSortBy!="Default") { // break criteria only for sorted lists
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
			
			list[i].counter = (i+1);
			list[i].delta = (list[i].value - this._Average);
			
			if(list[i].delta > 0 && list[i].delta > this._maxDelta) {
				this._maxDelta = list[i].delta;	
			}
			if(list[i].delta < 0 && (list[i].delta * -1) > this._maxDelta) {
				this._maxDelta = (list[i].delta * -1);	
			}

			if(iSortBy!="Default") { // break criteria only for sorted lists
				if(list[i].delta > 0) {
					continue;
				}
			}
			
			newList.push(list[i]);
			counter = counter + 1;
		}
	}
	
	return newList;
};

/**
 * Formats the double value according to locale (using cvom lib)
 */
org_scn_community_databound.getFormattedValue = function (value) {
	if(!this._metadata) {
		return value;
	}
	sap.common.globalization.NumericFormatManager.setPVL(this._metadata.locale);
	var strFormat = "#"+sap.common.globalization.NumericFormatManager.getThousandSeparator()+"##0";
	
	if (this.getValueDecimalPlaces() > 0) {
		strFormat += sap.common.globalization.NumericFormatManager.getDecimalSeparator();
		for (var i = 0; i < this.getValueDecimalPlaces(); i++) {
			strFormat += "0";
		}
	}
	
	var valueFormatted = sap.common.globalization.NumericFormatManager.format(value, strFormat);
	return valueFormatted;
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