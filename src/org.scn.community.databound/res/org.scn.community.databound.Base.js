/**
 * Base Databound Class
 */
var org_scn_community_databound_Base = function(options){
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
	 * 		"dimensionHeaders" : [1D Array of Dimension Headers]
	 * 		"dimensionHeader" : Concatenated String of Dimension Headers
	 * 		"rowHeaders" : [1D Array of Row Headers]
	 *  	"rowHeaders2D" : [2D Array of Row Headers]
	 * 		"values" : [2D Array of Measures] 
	 *
	 * }
	 */
	this.flattenData = function (data, options) {
		this.flatData = {
			dimensionHeaders : [],
			dimensionheader : "",
			columnHeaders : [],
			columnHeaders2D : [],
			rowHeaders : [],
			rowHeaders2D : [],
			values : [],
			formattedValues : [],
			hash : {}
		};
		if(!data || !data.dimensions || (!data.data && !data.formattedData)) {
			// throw("Incomplete data given.\n\n" + JSON.stringify(data));
			return this.flatData;
		}
		var dimensionCols = [];
		var dimensionRows = [];
		var data2D = [];
		var colLength = data.axis_columns.length;
		var rowLength = data.axis_rows.length;
		var tupleIndex = 0;
		var dimensionHeaders = [];
		var dimensionHeader = "";
		// Make Row Header Labels
		for(var row=0;row<rowLength;row++){
			var newValueRow = [];
			var newFormattedValueRow = [];
			var rowHeader = "";
			var rowHeader2D = [];
			var rowAxisTuple = data.axis_rows[row];
			var containsTotal = false;
			var sep = "";
			dimensionHeaders = [];
			dimensionHeader = "";
			for(var j=0;j<rowAxisTuple.length;j++){
				if(rowAxisTuple[j] != -1){
					dimensionHeaders.push(data.dimensions[j].text);	// Dimension Headers []
					dimensionHeader+=sep + data.dimensions[j].text;
					if(data.dimensions[j].members[rowAxisTuple[j]].type == "RESULT") containsTotal = true;
					rowHeader += sep + data.dimensions[j].members[rowAxisTuple[j]].text;
					rowHeader2D.push(data.dimensions[j].members[rowAxisTuple[j]].text);
					sep = " ";						
				}
			}
			
			for(var col=0;col<colLength;col++){
				if(data.data && data.data.length > 0){
					newValueRow.push(data.data[tupleIndex]);
				}
				if(data.formattedData && data.formattedData.length > 0){
					newFormattedValueRow.push(data.formattedData[tupleIndex]);
				}
				tupleIndex++;
			}
			if(!this.ignoreTotals() || !containsTotal){
				this.flatData.hash[rowHeader] = row;
				this.flatData.rowHeaders.push(rowHeader);
				this.flatData.rowHeaders2D.push(rowHeader2D);
				if(newValueRow.length>0) this.flatData.values.push(newValueRow);
				if(newFormattedValueRow.length>0) this.flatData.formattedValues.push(newFormattedValueRow);
			}
		}
		this.flatData.dimensionHeaders = dimensionHeaders;
		this.flatData.dimensionHeader = dimensionHeader;
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
			this.flatData.columnHeaders.push(colHeader);
			this.flatData.columnHeaders2D.push(colHeader2D);
		}
		return this.flatData;
	};
	var that = this;
	this.props = {
		data : { 
			value : null,
			onChange : this.flattenData
		},
		ignoreTotals : {
			value : true,
			onChange : this.flattenData
		}
	};
	this.flatData = null;
	for(property in options){
		this.props[property] = options[property]
	};
	/*
	 * Create the aforementioned getter/setter and attach to 'this'.
	 */
	for(var property in this.props){
		this[property] = function(property){
			return function(value){
				if(value===undefined){
					return this.props[property].value;
				}else{
					this.props[property].value = value;
					this.props[property].changed = true;
					if(this.props[property].onChange) {
						this.props[property].onChange.call(this,this.props[property].value);
					}
					return this;
				}
			};
		}(property);
	}
	this.init = function(){
		this.$().addClass("DesignStudioSCN");
	}
};