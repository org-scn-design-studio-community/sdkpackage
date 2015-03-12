/**
 * Base Databound Class
 */
var org_scn_community_databound_Base = function(options){
	this.flattenData = function (value, options) {
		var data = this.data();
		this.flatData =  org_scn_community_databound.flatten(data,{
			ignoreResults : this.ignoreTotals()
		});
		return;
		// Temp ref
		try{
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
				if(this.ignoreTotals()==false || !containsTotal){
					for(var col=0;col<colLength;col++){
						if(data.data && data.data.length > 0){
							newValueRow.push(data.data[tupleIndex]);
						}
						if(data.formattedData && data.formattedData.length > 0){
							newFormattedValueRow.push(data.formattedData[tupleIndex]);
						}
						tupleIndex++;
					}
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
		}catch(e){
			alert(e);
		}
	};
	var that = this;
	this.props = {
		data : {
			value : null,
			onChange : this.flattenData,
			opts : {
				desc : "Data",
				cat : "Data",
				tooltip : "Data from datasource",
				value : null,
				noAps : true
			}
		},
		ignoreTotals : {
			value : true,
			onChange : this.flattenData,
			opts : {
				desc : "Ignore Totals",
				cat : "Cosmetics",
				tooltip : "Whether to ignore totals",
				apsControl : "checkbox"	
			}
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
	this.callOnSet = function(property,value){
		if(this.props[property] && this.props[property].onSet){
			return this.props[property].onSet(value);
		}else{
			return "ERROR";
		}
	}
	this.getPropertyMetaData = function(){
		var r = [];
		for(var prop in this.props){
			if(!this.props[prop].noAps){
				var o = {
					name : prop,
					opts : this.props[prop].opts || {}
				}
				if(!o.opts.noAps) r.push(o);				
			}
		}
		return JSON.stringify(r);
	}
	this.init = function(){
		this.$().addClass("DesignStudioSCN");
	}
};