/**
 * A databound component that provides BIAL methods for aggregating by a single dimension.
 * This component is intended to feed into the RollUp datasource.
 * 
 * Uses Table2D to represent result-set at design-time.  Invisible at runtime.
 * 
 */
sap.designstudio.sdk.Component.subclass("org.scn.community.databound.Projector", function() {
	var that = this;
	var _data = null;
	var _projectedData = "";
	var _projectDimension = "";
	var _projectionMethod = "SUM";
	var _concatenateDimensions = false;
	/**
	 * Initialization or Resize of Component
	 */
	this.init = function(){
		this.$().addClass("DesignStudioSCN");
		this.$().addClass("Table2D");
	};
	/**
	 * @param value Design Studio ResultSet JSON Structure
	 * @return If value is undefined, returns data, else returns reference to itself.
	 */
	this.data = function(value) {
		if (value === undefined) {
			return _data;
		} else {
			_data = value;
			return this;
		}
	};
	this.projectedData = function(value) {
		if (value === undefined) {
			var d = [];
			for(var i=0;i<_projectedData.length;i++){
				var r = _projectedData[i].join(",");
				d.push(r);
			}
			return d.join("\n");
		} else {
			//_projectedData = value;
			return this;
		}
	};
	this.projectDimension = function(value) {
		if (value === undefined) {
			return _projectDimension;
		} else {
			_projectDimension = value;
			return this;
		}
	};
	this.projectionMethod = function(value) {
		if (value === undefined) {
			return _projectionMethod;
		} else {
			_projectionMethod = value;
			return this;
		}
	};
	this.concatenateDimensions = function(b) {
		if (b === undefined) {
			return _concatenateDimensions;
		} else {
			_concatendateDimensions = b;
			return this;
		}
	};
	/**
	 * Return aggregated dataset.
	 */
	this.project = function() {
		try{
			var pDim = this.projectDimension();
			var method = this.projectionMethod();
			var projectionIndex = -1;
			var measureIndex = -1;
			var d = this.data();
			//alert(JSON.stringify(d));
			for(var i=0;i<d.dimensions.length;i++){
				if(d.dimensions[i].key == pDim) projectionIndex = i;
				if(d.dimensions[i].containsMeasures) measureIndex = i;
			}
			if(projectionIndex == -1) return d;
			var values = d.data;
			if(!values) values = d.formattedData;
			if(!values) return d;
			var rd = {};
			rd.locale = d.locale;
			rd.dimensions = [];
			rd.dimensions.push(d.dimensions[measureIndex]);
			rd.dimensions.push(d.dimensions[projectionIndex]);
			rd.axis_columns = [];
			rd.axis_rows = [];
			rd.data = [];
			rd.formattedData = [];
			rd.tuples = [];
			rd.columnCount = d.dimensions[measureIndex].members.length;
			rd.rowCount = d.dimensions[projectionIndex].members.length;
			var projectionMembers = {};
			var axisRows = {};
			var axisCols = {};
			for(var i=0;i<d.tuples.length;i++){
				var pMember = d.tuples[i][projectionIndex];
				var pMeasure = d.tuples[i][measureIndex];
				var hash = pMember + "_" + pMeasure;
				if(!projectionMembers[hash]){
					projectionMembers[hash] = {
						index : rd.tuples.length,
						sum : 0,
						min : 0,
						max : 0,
						count : 0,
						avg : 0
					};
					rd.tuples.push([pMeasure,pMember]);
					rd.data.push(0);
				}
				var newData = values[i];
				if(typeof newData == "string"){
					newData = newData.replace(/\D+/, '');
				}
				newData = parseFloat(newData);
				var isNumber = true;
				if(isNaN(newData)) {
					newData = 0;
					isNumber = false;
				}
				projectionMembers[hash].sum += newData;
				if(isNumber) {
					projectionMembers[hash].count ++;
					projectionMembers[hash].avg = projectionMembers[hash].sum / projectionMembers[hash].count;
				}
				if(newData > projectionMembers[hash.max]) projectionMembers[hash].max = newData;
				if(newData < projectionMembers[hash.min]) projectionMembers[hash].min = newData;
				if(method=="SUM") rd.data[projectionMembers[hash].index] = projectionMembers[hash].sum;
				if(method=="MIN") rd.data[projectionMembers[hash].index] = projectionMembers[hash].min;
				if(method=="MAX") rd.data[projectionMembers[hash].index] = projectionMembers[hash].max;
				if(method=="COUNT") rd.data[projectionMembers[hash].index] = projectionMembers[hash].count;
				if(method=="AVG") rd.data[projectionMembers[hash].index] = projectionMembers[hash].avg;
			}
			// Column axis (measures members)
			for(var i=0;i<d.dimensions[measureIndex].members.length;i++){
				rd.axis_columns.push([i,-1]);
			}
			// Row axis (dimension members)
			for(var i=0;i<d.dimensions[projectionIndex].members.length;i++){
				rd.axis_rows.push([-1,i]);
			}
			//alert(JSON.stringify(rd));
			return rd;
		}catch(e){
			throw("Error while projecting data:\n\n" + e);
		}
	}
	/**
	 * Fires after property change.
	 */
	this.afterUpdate = function() {
		var isInDesignMode = (sap.zen.designmode != undefined);
		var flatData;
		var vals = [];
		try{
			var projectedData = this.project();
			flatData = org_scn_community_databound.flatten(projectedData,{});
			if(flatData && flatData.formattedValues && flatData.formattedValues.length > 0) {
				vals = flatData.formattedValues.slice();
			}else if(flatData && flatData.values && flatData.values.length > 0){
				vals = flatData.values.slice();
			}else{
				// Something happened.
				throw("No formatted or unformatted values found.");
			}
		}catch(e){
			var errorMessage = e;
			if(e && e.indexOf("Incomplete data given.")>-1) errorMessage = "Incomplete data.  Try assigning a datasource.";
			if(!flatData) flatData = {
				columnHeaders : ["Error"],
				rowHeaders : [errorMessage]
			};
			vals = [[]];
		}
		_projectedData = [];
		var projectHeaders = [];
		projectHeaders = flatData.columnHeaders.slice();
		projectHeaders.splice(0,0,this.projectDimension());
		_projectedData.push(projectHeaders);
		for(var i=0;i<vals.length;i++){
			if(flatData.rowHeaders.length>=i) vals[i].splice(0,0,flatData.rowHeaders[i]);
			_projectedData.push(vals[i].slice());
		}
		this.firePropertiesChanged(["projectedData"]);
		//this.fireDesignStudioEvent("onDataChange");
		if(!isInDesignMode) return;
		var table = d3.select("#"+this.$().attr("id")).select("table");
		var thead;
		var tbody;
		if(table.empty()) {
			table = d3.select("#"+this.$().attr("id")).append("table");
			thead = table.append("thead").append("tr");
			thead.append("th").classed("top-left",true);
			tbody = table.append("tbody");
		}else{
			thead = table.select("thead").select("tr");
			tbody = table.select("tbody");
		}
		// Create Column Headers
		var colHeaders = thead.selectAll(".col-header").data(flatData.columnHeaders);
		colHeaders.enter().append("th").attr("class","col-header");		
		colHeaders.exit().remove();
		colHeaders.text(function(d){return d});
		// Create Rows and Row Headers
		var rows = tbody.selectAll(".row").data(vals);
		rows.enter().append("tr").classed("row",true).classed("row-secondary", function(d,i){return ((i+1)/2 == Math.floor((i+1)/2));});
		rows.exit().remove();
		// Create Row Cells
		var rowCells = rows.selectAll(".cell").data(function(d,i){return d;})
		rowCells.enter().append("td").classed("cell",true).classed("row-header", function(d,i){return i==0;});
		rowCells.exit().remove();	
		rowCells.text(function(d,i,pI){ return d;});
	};
});
