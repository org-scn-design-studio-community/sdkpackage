/**
 * Copyright 2014 SCN SDK Community
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

jQuery.sap.require("sap.ui.table.Table");

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.databound.UI5Table", {

	setData : function(value) {
		var that = this;
		
		this._data = value;

		// clean mixed Data
		that._flatData = undefined;
		return this;
	},
	
	getData : function(value) {
		return this._data;
	},
	
	setMetadata : function(value) {
		this._metadata = value;
		return this;
	},

	getMetadata : function() {
		return this._metadata;
	},
	
	/* special code as we want to reset */
	setDElements : function(value) { 
		this.DElements = value;		
		this._isInitialized = undefined;
		this._flatData = undefined;
		return this;
	},
	
	getDElements : function() {
		return this.DElements;
	},
	
	/* special code as we want to reset */
	setDContentMode : function(value) { 
		this.DContentMode = value;		
		this._isInitialized = undefined;
		this._flatData = undefined;
		return this;
	},
	
	getDContentMode : function() {
		return this.DContentMode;
	},
	
	metadata: {
        properties: {
              "DVisibleRowCount": {type: "int"},
              "DRowHeight": {type: "int"},
              "DNavigationMode": {type: "string"},
              "DCustomDimensions": {type: "string"},
              "DHeaderColWidth": {type: "int"},
              "DDataColWidths": {type: "string"},
              "DDataProvisioner": {type: "string"},
              "DFormattingOperator": {type: "string"},
              "DFormattingCondition": {type: "string"},
              "DColumnFormattingCondition": {type: "string"},
              "DSelection": {type: "string"},
              "DAllowSort": {type: "boolean"},
              "DAllowFilter": {type: "boolean"},
              "DAllowColumnReorder": {type: "boolean"},
              "DFixedHeader": {type: "boolean"},
              "DAllowSelection": {type: "boolean"},
              "DEmptyHeaderValue": {type: "string"},
              "DEmptyDataValue": {type: "string"},
              "DIgnoreResults": {type: "boolean"},
        }
	},

	initDesignStudio: function() {
		var that = this;
		
		that._table = new sap.ui.table.Table(this.getId() + "_ta",
		{
			selectionMode: sap.ui.table.SelectionMode.Single,
			// enableGrouping: true,
		}		
		);
		
		this.addStyleClass("scn-pack-FullSizeChildren");
		this.addStyleClass("scn-pack-UI5Table-Header");
		
		// set the model
		that._oModel = new sap.ui.model.json.JSONModel(); 
		that._table.setModel(that._oModel);

    	that.onResizeCallback = function(width, height) {
    		var visibleRows = that.getDVisibleRowCount();
    		
    		// cut header
    		height = height - 32;
    		
    		var lNavMode = that.getDNavigationMode();
    		if(lNavMode == "Paginator") {
    			height = height - 26;
    		}
    		
    		if(height > 0) {
    			var rowH = that.getDRowHeight();
    			
    			var maxNumber = height / rowH;
    			maxNumber = Math.floor(maxNumber);
    			
    			if(visibleRows > maxNumber) {
    				that._table.setVisibleRowCount(maxNumber);	
    			} else {
    				that._table.setVisibleRowCount(visibleRows);	
    			}
    		}
    	};
    	
    	// resize function
		that.onAfterRendering = function() {
			org_scn_community_basics.resizeContentAbsoluteLayout (that, that._table, that.onResizeCallback);
		}
		
    	that._table.attachCellClick(that.onCellClick);
    	that._table.attachRowSelectionChange(that.onRowClick);
	},
	
	renderer: {},
		
	afterDesignStudioUpdate: function() {
		var that = this;
		that._table.setVisibleRowCount(this.getDVisibleRowCount());
		that._table.setRowHeight(this.getDRowHeight());
		
		var lNavMode = this.getDNavigationMode();
		if(lNavMode == "Paginator") {
			that._table.setNavigationMode(sap.ui.table.NavigationMode.Paginator);	
		} else {
			that._table.setNavigationMode(sap.ui.table.NavigationMode.Scrollbar);
		}

		// define model
		if(that._flatData == undefined) {
			
			var lData = this._data;
			var lMetadata = this._metadata;
			var lDimensions = this.getDElements();

			if(lMetadata == undefined) {
				lMetadata = lData;
			}
			
			var lDataProvisioner = that.getDDataProvisioner();
			var hasDataProvisioner = false;
			if(lDataProvisioner != undefined && lDataProvisioner.length != "") {
				hasDataProvisioner = (org_scn_community_databound.centralDataStorage[lDataProvisioner] != undefined);
			}
			
			if(lData == "" && !hasDataProvisioner) {
				this._fakeData();
			} else {
				var options = org_scn_community_databound.initializeOptions();
				options.ignoreResults = that.getDIgnoreResults();
				options.emptyHeaderValue = that.getDEmptyHeaderValue();
				options.emptyDataValue = that.getDEmptyDataValue();

				that._vals = [];
				try{
					if(hasDataProvisioner) {
						that._flatData = org_scn_community_databound.centralDataStorage[lDataProvisioner].flatData;
						org_scn_community_databound.registerCentralEventReceiver(lDataProvisioner, that);
					} else {
						that._flatData = org_scn_community_databound.flatten(lData,options);
					}
					
					if(that._flatData && that._flatData.formattedValues && that._flatData.formattedValues.length > 0) {
						that._vals = that._flatData.formattedValues.slice();
					}else if(that._flatData && that._flatData.values && that._flatData.values.length > 0){
						that._vals = that._flatData.values.slice();
					}else{
						// Something happened.
						throw("No formatted or unformatted values found.");
					}
				}catch(e){
					var errorMessage = e;
					if(e && e.indexOf("Incomplete data given.")>-1) errorMessage = "Incomplete data.  Try assigning a datasource.";
					if(!that._flatData) that._flatData = {
						columnHeaders : ["Error"],
						rowHeaders : [errorMessage]
					};
					that._vals = [[]];
				}
			}

			if(that._flatData) {
				that.reloadFlatDataAgain();
			}
		}
	},
	
	onProvisionerDataChangeEvent: function(lDataProvisioner) {
		var that = this;
		
		var lDataProvisioner = that.getDDataProvisioner();
		that._flatData = org_scn_community_databound.centralDataStorage[lDataProvisioner].flatData;
		
		that.reloadFlatDataAgain();
	},
	
	reloadFlatDataAgain: function() {
		var that = this;
		
		var options = org_scn_community_databound.initializeOptions();
		options.ignoreResults = that.getDIgnoreResults();
		options.emptyHeaderValue = that.getDEmptyHeaderValue();
		options.emptyDataValue = that.getDEmptyDataValue();
		
		org_scn_community_databound.toRowTable(that._flatData,options);
		
		that._table.removeAllColumns();
		var colI=0;

		var lAllowSort = that.getDAllowSort();
		var lAllowReorder = that.getDAllowColumnReorder();
		var lAllowFilter = that.getDAllowFilter();
		
		var allowSelection = that.getDAllowSelection();;
		var lPathPrefix = "";
		
		var options = {};
		options.formattingCondition = {};
		options.formattingCondition.rules = that.getDFormattingCondition();
		options.formattingCondition.operator = that.getDFormattingOperator();

		options.conditionColumns = that.getDColumnFormattingCondition();
		
		var hasFormattingCondition = (options.formattingCondition.rules.length > 1);
		
		if(hasFormattingCondition || allowSelection) {
			that.addStyleClass("scn-pack-ActivateSimpleConditions");
			that._table.bindRows("/data2D");
			lPathPrefix = "values/";

			if(options.formattingCondition.rules.length > 1) {
				options.formattingCondition.rules = JSON.parse(options.formattingCondition.rules);
			}
		} else {
			that._table.bindRows("/data2DPlain");
		}
		
		that._table.setEnableColumnReordering(lAllowReorder);
		
		if(hasFormattingCondition) {
			org_scn_community_databound.applyConditionalFormats(that._flatData, options);
		}
		
		that._oModel.setData(that._flatData);
		that._table.setAllowColumnReordering();

		for(colI=0;colI<that._flatData.dimensionHeaders.length;colI++){
			var oItemTemplate = new sap.ui.commons.Label (
					{text: "{" + lPathPrefix +colI + "}",
						tooltip: "{" + lPathPrefix + colI + "}",
						design: sap.ui.commons.LabelDesign.Bold,
					});
			
			if(hasFormattingCondition) {
				oItemTemplate.addCustomData (new sap.ui.core.CustomData({key:"condFormat", value:"{formats/" + colI + "}", writeToDom:true}));
			}
			
			var lColumn = new sap.ui.table.Column({
				label: new sap.ui.commons.Label(
				{
					text: that._flatData.dimensionHeaders[colI],
					design: sap.ui.commons.LabelDesign.Bold,
				}),
				template: oItemTemplate,
				sortProperty: ""+ lPathPrefix+colI,
				filterProperty: ""+ lPathPrefix+colI,
				showSortMenuEntry: lAllowSort,
				showFilterMenuEntry: lAllowFilter,
				width: that.getDHeaderColWidth()+"px"
			});
			
			lColumn._dsRealColumnIndex = colI;
			
			that._table.addColumn(lColumn);
		}
		
		var colWidthObject = [];
		try {
			colWidthObject = JSON.parse(that.getDDataColWidths());
		} catch (e) {}
		
		var allColWidth = undefined;
		var colWidths = {};
		for(index in colWidthObject) {
			if(colWidthObject[index].key == "*") {
				allColWidth = colWidthObject[index].width;
			} else {
				colWidths[colWidthObject[index].key] = colWidthObject[index].width; 
			}
		}

		for(var dataColI=0;dataColI<that._flatData.columnHeaders.length;dataColI++){
			var oItemTemplate = new sap.ui.commons.Label (
					{text: "{" + lPathPrefix + colI + "}",
						tooltip: "{" + lPathPrefix + colI + "}",
						textAlign: sap.ui.core.TextAlign.Right,
					});

			if(hasFormattingCondition) {
				oItemTemplate.addCustomData (new sap.ui.core.CustomData({key:"condFormat", value:"{formats/" + colI + "}", writeToDom:true}));
			}
			
			var colWidth = colWidths[colI];
			if(!colWidth) {
				colWidth = allColWidth || "";
			}

			var lColumn = new sap.ui.table.Column({
				label: new sap.ui.commons.Label({text: that._flatData.columnHeaders[dataColI]}),
				template: oItemTemplate,
				sortProperty: ""+ lPathPrefix+colI,
				filterProperty: ""+ lPathPrefix+colI,
				showSortMenuEntry: lAllowSort,
				showFilterMenuEntry: lAllowFilter,
				width: colWidth,
			});
			
			lColumn._dsRealColumnIndex = colI;
			
			that._table.addColumn(lColumn);
			colI = colI+1;
		}
		
		if(false) {
			// a try to fix resizing
			that._table.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({text: ""}),
				template: new sap.ui.commons.Label({text: ""}),
				sortProperty: ""+colI,
				filterProperty: ""+colI,
				showSortMenuEntry: false,
				showFilterMenuEntry: false,
				width: "1px",
			}));
			colI = colI+1;
		}

		if(that.getDFixedHeader()) {
			that._table.setFixedColumnCount(that._flatData.dimensionHeaders.length);	
		}
	},

	onCellClick : function (oEvent) {
		var that = oEvent.oSource.getParent().getParent();
		
		var allowSelection = that.getDAllowSelection();;
		if(!allowSelection){
			return;
		}

		var selection = {};
		
		selection.visualRow = parseInt(oEvent.getParameters().rowIndex);
		
		// case for click on row w/o any data model
		var ctx = that._table.getContextByIndex(selection.visualRow);
		if(ctx==undefined) {return;}
		
		selection.row = that.getCorrectRow(that, oEvent);

		selection.visualColumn = parseInt(oEvent.getParameters().columnIndex);
		var columnObject = that._table.getColumns()[selection.visualColumn];
		selection.column = columnObject._dsRealColumnIndex;
		
		selection.value = that._flatData.data2D[selection.row]["values"][selection.column];

		if(selection.column < that._flatData.geometry.headersLength) {
			selection.columnKeys = [];
			selection.space = "Header";
		} else {
			selection.columnKeys = that._flatData.columnHeadersKeys2D[selection.column-that._flatData.geometry.headersLength];
			selection.space = "Data";
		}
		
		selection.rowKeys = that._flatData.rowHeadersKeys2D[selection.row];
		selection.rowValues = that._flatData.data2D[selection.row]["values"];
		
		selection.columnDimensions = that._flatData.dimensionCols;
		selection.rowDimensions = that._flatData.dimensionRows;
		
		var selectionS = JSON.stringify(selection);
		that.setDSelection(selectionS);
		
		that.fireDesignStudioPropertiesChanged(["DSelection"]);
		that.fireDesignStudioEvent("onCellSelected");
	},
	
	onRowClick : function (oEvent) {
		var that = oEvent.oSource.getParent().getParent();
		
		var allowSelection = that.getDAllowSelection();;
		if(!allowSelection){
			return;
		}

		var selection = {};

		selection.visualRow = parseInt(oEvent.getParameters().rowIndex);

		// case for click on row w/o any data model
		var ctx = that._table.getContextByIndex(selection.visualRow);
		if(ctx==undefined) {return;}
		
		selection.row = that.getCorrectRow(that, oEvent);

		selection.columnKeys = [];
		selection.space = "Row";
		
		selection.rowKeys = that._flatData.rowHeadersKeys2D[selection.row];
		selection.rowValues = that._flatData.data2D[selection.row]["values"];
		
		selection.columnDimensions = [];
		selection.rowDimensions = that._flatData.dimensionRows;
		
		var selectionS = JSON.stringify(selection);
		that.setDSelection(selectionS);
		
		that.fireDesignStudioPropertiesChanged(["DSelection"]);
		that.fireDesignStudioEvent("onRowSelected");
	},

	getCorrectRow: function (that, oEvent) {
		var idx = oEvent.getParameter('rowIndex');
		var cxt = that._table.getContextByIndex(idx);
		
		
		var path = cxt.sPath;

		var row_data = that._table.getModel().getProperty(path);
		return row_data.index;
	},
	
	_fakeData : function () {
		
	}
});