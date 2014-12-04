/**
 * Copyright 2014 Karol Kalisz
 * 
 * Original Source Code Location:
 *  https://github.com/sap-design-studio-free-addons/sdk-package
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

org_scn_community_databound.getTopBottomElementsForDimension = function (data, requestedDimensionKey, metadata, iMaxNumber, iTopBottom, iSortBy, iDuplicates) {

	if(!metadata || !metadata.dimensions) {
		return [];
	}
	
	var dimesnsionStartIndex = -1;
	var dimesnsionEndIndex = -1;

	// column or row (more rows as columns, means a column, vertical)
	// 1.3 release does not bring rowCount and columnCount...
	var isARow = (data.rowCount && data.columnCount && data.rowCount < data.columnCount);

	for (var i = 0; i < metadata.dimensions.length; i++) {
		var dimension = metadata.dimensions[i];

		if(dimension.key == requestedDimensionKey) {
			dimesnsionStartIndex = i;
			dimesnsionEndIndex = i;

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
	if(dimesnsionStartIndex == -1) {
		return [];
	}
	
	return org_scn_community_databound.getTopBottomElementsByIndex (data, dimesnsionStartIndex, dimesnsionEndIndex, metadata, iMaxNumber, iTopBottom, iSortBy, iDuplicates);
};

/**
 * Global Function for getting Top / Bottom from data
 * iMaxNumber - integer, > 0
 * iTopBottom - string, "Top X" | "Bottom X" | "Both"
 * iSortBy - string, "Default" | <some other string>
 * iDuplicates - string, "Ignore Duplicates" | <some other string>
 */
org_scn_community_databound.getTopBottomElements = function (data, metadata, iMaxNumber, iTopBottom, iSortBy, iDuplicates) {

	var dimesnsionStartIndex = -1;
	var dimesnsionEndIndex = -1;

	return org_scn_community_databound.getTopBottomElementsByIndex (data, dimesnsionStartIndex, dimesnsionEndIndex, metadata, iMaxNumber, iTopBottom, iSortBy, iDuplicates);
};

org_scn_community_databound.getTopBottomElementsByIndex = function (data, dimesnsionStartIndex, dimesnsionEndIndex, metadata, iMaxNumber, iTopBottom, iSortBy, iDuplicates) {
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
				if(dimesnsionStartIndex == -1) {
					dimesnsionStartIndex = i;	
				}
				if(dimesnsionEndIndex == -1) {
					dimesnsionEndIndex = i;
				}
			}
		}
	} else {
		// search for the last dimension
		for (var i = 0; i < metadata.dimensions.length; i++) {
			var dimension = metadata.dimensions[i];

			if(dimension.axis == "COLUMNS") {
				if(dimesnsionStartIndex == -1) {
					dimesnsionStartIndex = i;	
				}
				if(dimesnsionEndIndex == -1) {
					dimesnsionEndIndex = i;
				}
			}
		}
	}
	
	var allKeys = "" + "|";
	
	for (var i = 0; i < data.data.length; i++) {
		var tupel = data.tuples[i]; 
		var isResult = metadata.dimensions[dimesnsionEndIndex].members[tupel[dimesnsionEndIndex]].type == "RESULT";
		
		if(!isResult) {
			var key =  metadata.dimensions[dimesnsionEndIndex].members[tupel[dimesnsionEndIndex]].key;
			var text =  metadata.dimensions[dimesnsionEndIndex].members[tupel[dimesnsionEndIndex]].text;
			
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
			
			var value = data.data[i];

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
