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
 
//%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./TableSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"shared/modules/component.databound"
	
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

var CSS_CLASS_DIV = "sapzencrosstab-TableDiv";
var CSS_CLASS_TABLE = "sapzencrosstab-Crosstab";
var CSS_CLASS_TR_HEADER = 'sapzencrosstab-HeaderRow sapzencrosstab-DimensionHeaderArea';
var CSS_CLASS_TD_HEADER = "sapzencrosstab-HeaderCellFirstInRow sapzencrosstab-HeaderCellDefault";
var CSS_CLASS_TD_DEFAULT = "sapzencrosstab-DataCellDefault";

Table = function () {

	var that = this;
	
	that.init = function() {
		// define root component
		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	};
	
	that.initAsync = function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.$().addClass(CSS_CLASS_DIV);
		that.$().css("overflow-y", "scroll");
		that.jqTable = $("<table class=\"" + CSS_CLASS_TABLE + "\"/>");
		that.$().append(that.jqTable);
			
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	that.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		var that = this;

		that.jqTable.empty();
		var column_data = getAnySetColumn_Data(that);
		if (column_data) {
			var jqHeader = $("<thead/>").appendTo(that.jqTable);
			var jqHeaderRow = $("<tr class=\"" + CSS_CLASS_TR_HEADER + "\"/>").appendTo(jqHeader);

			jqHeaderRow.append($("<td class=\"" + CSS_CLASS_TD_HEADER + "\"/>"));
			appendColumnHeaderCell(that, jqHeaderRow, this.getColumn1());
			appendColumnHeaderCell(that, jqHeaderRow, this.getColumn2());
			appendColumnHeaderCell(that, jqHeaderRow, this.getColumn3());

			for (var i = 0; i < column_data.formattedData.length; i++) {
				var jqRow = $("<tr/>");
				that.jqTable.append(jqRow);

				appendRowHeaderCell(that, jqRow, i);
				appendCell(that, jqRow, that.getColumn1(), i);
				appendCell(that, jqRow, that.getColumn2(), i);
				appendCell(that, jqRow, that.getColumn3(), i);
			}
		}
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	};

	that.onResize = function (width, height, parent) {
		// in case special resize code is required
	};

	/* COMPONENT SPECIFIC CODE - END METHODS*/

	function appendColumnHeaderCell(owner, jqHeaderRow, column_data) {
		var that = owner;
		
		if (column_data && column_data.formattedData) {
			var headerText = "";
			for (var i = 0; i < column_data.selection.length; i++) {
				var selectionIndex = column_data.selection[i];
				if (selectionIndex != -1) {
					headerText += " " + column_data.dimensions[i].members[selectionIndex].text;
				}
			}
			$("<td class=\"" + CSS_CLASS_TD_HEADER + "\">" + headerText + "</td>").appendTo(jqHeaderRow);
		}
	}

	function appendCell(owner, jqRow, column_data, i) {
		var that = owner;

		if (column_data && column_data.formattedData && (i < column_data.formattedData.length)) {
			var cellText = column_data.formattedData[i];
			jqRow.append($("<td class=\"" + CSS_CLASS_TD_DEFAULT + "\">" + cellText + "</td>"));
		}
	}

	function appendRowHeaderCell(owner, jqRow, i) {
		var that = owner;
		
		var column_data = getAnySetColumn_Data(that);
		if (column_data && column_data.formattedData && (i < column_data.tuples.length)) {
			var tuple = column_data.tuples[i];
			var headerText = "";
			for (var j = 0; j < tuple.length; j++) {
				if (column_data.selection[j] == -1) {
					headerText += " " + column_data.dimensions[j].members[tuple[j]].text;
				}
			}
			headerText = headerText.replace("|", " "); // Delimiter used for multiple presentations
			jqRow.append($("<td class=\"" + CSS_CLASS_TD_HEADER + "\">" + headerText + "</td>"));
		}
	}

	function getAnySetColumn_Data(owner) {
		var that = owner;

		if (that.getColumn1() && that.getColumn1().formattedData) {
			return that.getColumn1();
		} else if (that.getColumn2() && that.getColumn2().formattedData) {
			return that.getColumn2(); 
		} else if (that.getColumn3() && that.getColumn3().formattedData) {
			return that.getColumn3();
		}
		return null;
	}

	// called from Additional Properties Sheet JavaScript file

	org_scn_community_component_Core(that, myComponentData);
	
	return that;
};
//%INIT-START%
myComponentData.instance = Table;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});