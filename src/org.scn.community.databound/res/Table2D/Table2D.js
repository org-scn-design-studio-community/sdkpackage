/**
 * A simple example of using the Data Source's Initial View definition (Axis and Columns)
 * and transforming it into a 2 Dimensional Crosstab (Row Header and Column Header)
 * Multiple Dimensions in Axis and Columns are concatenated.
 */
sap.designstudio.sdk.Component.subclass("org.scn.community.databound.Table2D", function() {
	var that = this;
	var _data = null;
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
	/**
	 * Fires after property change.
	 */
	this.afterUpdate = function() {
		var flatData;
		var vals = [];
		try{
			flatData = org_scn_community_databound.flatten(this.data());
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
			if(e.indexOf("Incomplete data given.")>-1) errorMessage = "Incomplete data.  Try assigning a datasource.";
			if(!flatData) flatData = {
				columnHeaders : ["Error"],
				rowHeaders : [errorMessage]
			};
			vals = [[]];
		}
		
		for(var i=0;i<vals.length;i++){
			if(flatData.rowHeaders.length>=i)
			vals[i].splice(0,0,flatData.rowHeaders[i]);
		}
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
