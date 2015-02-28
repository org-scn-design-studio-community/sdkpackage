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

sap.designstudio.sdk.DataBuffer.subclass("org.scn.community.datasource.DynCsvDataSource", function() {

	var that = this;

	var _hasHeaderRow = false;
	var _hasHeaderColumn = false;
	var _csvfile;
	
	this.init = function() {
		this.defineDimensions([{
			key: "cols",
			text: "Columns",
			"axis": "COLUMNS",
			"axis_index": 0
		}, {
			key: "rows",
			text: "Rows",
			"axis": "ROWS",
			"axis_index": 0
		}], {
			key: "measures",
			text: "Measures",
			containsMeasures: true,
			members: [{
				"key": "measure",
				"text": "Measure",
				"scalingFactor": 2,
				"formatString": "0.00 EUR;-0.00 EUR"
			}]
		});
	};

	this.csvfile = function(value) {
		if (value === undefined) {
			return _csvfile;
		} else {
			_csvfile = value;
			return this;
		}
	};

	this.hasHeaderRow = function(value) {
		if (value === undefined) {
			return _hasHeaderRow;
		} else {
			_hasHeaderRow = value;
			return this;
		}
	};

	this.hasHeaderColumn = function(value) {
		if (value === undefined) {
			return _hasHeaderColumn;
		} else {
			_hasHeaderColumn = value;
			return this;
		}
	};

	this.afterUpdate = function() {
		$.ajax({
			async: false,
			url: _csvfile,
		}).done(function(csvText) {
			processCsvText(csvText);
		});
	};

	function processCsvText(csvText) {
		var result = [];
		var csvTextLines = csvText.split(/\r\n|\n/);
		var separator = ",";
		if ((csvTextLines.length > 0) && (csvTextLines[0].indexOf(";") != -1)) {
			separator = ";";
		}
		
		for (var i = 0; i < csvTextLines.length; i++) {
			var row = csvTextLines[i].split(separator);
			if (row.length > 0) {
				result.push(row);
			}
		}
		that.fillWithArray(result, that.hasHeaderRow(), that.hasHeaderColumn());
		that.fireUpdate(true);
	}
});
