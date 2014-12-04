sap.designstudio.sdk.Component.subclass("org.scn.community.databound.Table", function() {

	var CSS_CLASS_DIV = "sapzencrosstab-TableDiv";
	var CSS_CLASS_TABLE = "sapzencrosstab-Crosstab";
	var CSS_CLASS_TR_HEADER = 'sapzencrosstab-HeaderRow sapzencrosstab-DimensionHeaderArea';
	var CSS_CLASS_TD_HEADER = "sapzencrosstab-HeaderCellFirstInRow sapzencrosstab-HeaderCellDefault";
	var CSS_CLASS_TD_DEFAULT = "sapzencrosstab-DataCellDefault";

	var column1_data = null;
	var column2_data = null;
	var column3_data = null;
	var meta_data = null;

	this.init = function() {
		this.$().addClass(CSS_CLASS_DIV);
		this.$().css("overflow-y", "scroll");
		this.jqTable = $("<table class=\"" + CSS_CLASS_TABLE + "\"/>");
		this.$().append(this.jqTable);
	};

	this.afterUpdate = function() {
		this.jqTable.empty();
		var column_data = getAnySetColumn_Data();
		if (column_data) {
			var jqHeader = $("<thead/>").appendTo(this.jqTable);
			var jqHeaderRow = $("<tr class=\"" + CSS_CLASS_TR_HEADER + "\"/>").appendTo(jqHeader);
			jqHeaderRow.append($("<td class=\"" + CSS_CLASS_TD_HEADER + "\"/>"));
			appendColumnHeaderCell(jqHeaderRow, column1_data);
			appendColumnHeaderCell(jqHeaderRow, column2_data);
			appendColumnHeaderCell(jqHeaderRow, column3_data);

			for (var i = 0; i < column_data.formattedData.length; i++) {
				var jqRow = $("<tr/>");
				this.jqTable.append(jqRow);
				appendRowHeaderCell(jqRow, i);
				appendCell(jqRow, column1_data, i);
				appendCell(jqRow, column2_data, i);
				appendCell(jqRow, column3_data, i);
			}
		}
	};

	function appendColumnHeaderCell(jqHeaderRow, column_data) {
		if (column_data && column_data.formattedData) {
			var headerText = "";
			for (var i = 0; i < column_data.selection.length; i++) {
				var selectionIndex = column_data.selection[i];
				if (selectionIndex != -1) {
					headerText += " " + meta_data.dimensions[i].members[selectionIndex].text;
				}
			}
			$("<td class=\"" + CSS_CLASS_TD_HEADER + "\">" + headerText + "</td>").appendTo(jqHeaderRow);
		}
	}

	function appendCell(jqRow, column_data, i) {
		if (column_data && column_data.formattedData && (i < column_data.formattedData.length)) {
			var cellText = column_data.formattedData[i];
			jqRow.append($("<td class=\"" + CSS_CLASS_TD_DEFAULT + "\">" + cellText + "</td>"));
		}
	}

	function appendRowHeaderCell(jqRow, i) {
		var column_data = getAnySetColumn_Data();
		if (meta_data && column_data && column_data.formattedData && (i < column_data.tuples.length)) {
			var tuple = column_data.tuples[i];
			var headerText = "";
			for (var j = 0; j < tuple.length; j++) {
				if (column_data.selection[j] == -1) {
					headerText += " " + meta_data.dimensions[j].members[tuple[j]].text;
				}
			}
			headerText = headerText.replace("|", " "); // Delimiter used for multiple presentations
			jqRow.append($("<td class=\"" + CSS_CLASS_TD_HEADER + "\">" + headerText + "</td>"));
		}
	}

	function getAnySetColumn_Data() {
		if (column1_data && column1_data.formattedData) {
			return column1_data;
		} else if (column2_data && column2_data.formattedData) {
			return column2_data; 
		} else if (column3_data && column3_data.formattedData) {
			return column3_data;
		}
		return null;
	}

	// called from Additional Properties Sheet JavaScript file

	this.getMetadataAsString = function() {
		return JSON.stringify(this.metadata());
	};

	// property setter/getter functions

	this.column1 = function(value) {
		if (value === undefined) {
			return column1_data;
		} else {
			column1_data = value;
			return this;
		}
	};

	this.column2 = function(value) {
		if (value === undefined) {
			return column2_data;
		} else {
			column2_data = value;
			return this;
		}
	};

	this.column3 = function(value) {
		if (value === undefined) {
			return column3_data;
		} else {
			column3_data = value;
			return this;
		}
	};

	this.metadata = function(value) {
		if (value === undefined) {
			return meta_data;
		} else {
			meta_data = value;
			return this;
		}
	};
});
