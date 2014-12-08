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
	 * D3 Render
	 */
	this.renderD3 = function(flatData){
		var vals = [];
		if(flatData.formattedValues && flatData.formattedValues.length > 0) {
			vals = flatData.formattedValues.slice();
		}else if(flatData.values && flatData.values.length > 0){
			vals = flatData.values.slice();
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
		
	}
	/**
	 * Fires after property change.
	 */
	this.afterUpdate = function() {
		var h = "";
		try{
			//this.$().html();
			var flat = org_scn_community_databound.flatten(this.data());
			this.renderD3(flat);
			return;
			h = "<TABLE>";
			h+="<TH><TD></TD>";
			for(var col=0;col<flat.columnHeaders.length;col++){
				h+="<TD>" + flat.columnHeaders[col];
			}
			h+="</TH>";
			var vals = [];
			if(flat.formattedValues && flat.formattedValues.length > 0) {
				vals = flat.formattedValues 
			}else if(flat.values && flat.values.length > 0){
				vals = flat.values
			}
			for(var row=0;row<vals.length;row++){
				h+="<TR>";
				h+="<TD>" + flat.rowHeaders[row] + "<TD>";
				for(var col=0;col<vals[row].length;col++){
					h+="<TD>" + vals[row][col];	
				}
				h+="</TR>";
			}
			h+="</TABLE>";
		}catch(e){
			h = e;
		}
		this.$().html(h);
	};
});
