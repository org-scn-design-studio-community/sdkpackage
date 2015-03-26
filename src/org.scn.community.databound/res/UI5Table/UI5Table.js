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
              "DDataProvisioner": {type: "string"},
              "DFormatingCondition": {type: "string"},
              "DCellSelection": {type: "string"},
              "DRowSelection": {type: "string"},
              "DAllowSort": {type: "boolean"},
              "DAllowColumnReorder": {type: "boolean"},
              "DFixedHeader": {type: "boolean"},
              "DAllowSelection": {type: "boolean"},
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
		
		// set the model
		that._oModel = new sap.ui.model.json.JSONModel(); 
		that._table.setModel(that._oModel);

    	this.addContent(
    		that._table,
			{left: "0px", top: "0px"}
		);

    	org_scn_community_basics.hideNoDataOverlay(this.getId(), true);
    	
    	that.onAfterRendering = function() {
    	};
    	
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
				hasDataProvisioner = (com_schaeffler.centralDataStorage[lDataProvisioner] != undefined);
			}
			
			if(lData == "" && !hasDataProvisioner) {
				this._fakeData();
			} else {
				var options = org_scn_community_databound.initializeOptions();
				options.ignoreResults = true;
			
				that._vals = [];
				try{
					if(hasDataProvisioner) {
						that._flatData = org_scn_community_databound.centralDataStorage[lDataProvisioner].flatData;
					} else {
						that._flatData = org_scn_community_databound.flatten(lData,options);
						org_scn_community_databound.toRowTable(that._flatData,options);
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
			
			that._table.removeAllColumns();
			var colI=0;

			if(that._flatData) {
				var lAllowSort = that.getDAllowSort();
				var lAllowReorder = that.getDAllowColumnReorder();
				var lAllowFilter = true;
				
				var allowSelection = that.getDAllowSelection();;
				var lPathPrefix = "";
				
				var options = {};
				options.formattingCondition = that.getDFormatingCondition();
				
				if(options.formattingCondition.length > 1 || allowSelection) {
					that.addStyleClass("scn-pack-ActivateSimpleConditions");
					that._table.bindRows("/data2D");
					lAllowReorder = false;
					lAllowSort = false;
					lAllowFilter = false;
					lPathPrefix = "values/";
				} else {
					that._table.bindRows("/data2DPlain");
				}
				
				org_scn_community_databound.applyConditionalFormats(that._flatData, options);
				
				that._oModel.setData(that._flatData);
				that._table.setAllowColumnReordering();
	
				if(that._flatData) {
					for(colI=0;colI<that._flatData.dimensionHeaders.length;colI++){
						var oItemTemplate = new sap.ui.commons.Label (
								{text: "{" + lPathPrefix +colI + "}",
									tooltip: "{" + lPathPrefix + colI + "}",
									design: sap.ui.commons.LabelDesign.Bold,
								});
						
						if(options.formattingCondition.length) {
							oItemTemplate.addCustomData (new sap.ui.core.CustomData({key:"condFormat", value:"{formats/" + colI + "}", writeToDom:true}));
							oItemTemplate.addCustomData ( new sap.ui.core.CustomData({key:"realCol", value: colI, writeToDom:false}));
						}
						
						that._table.addColumn(new sap.ui.table.Column({
							label: new sap.ui.commons.Label(
							{
								text: that._flatData.dimensionHeaders[colI],
								design: sap.ui.commons.LabelDesign.Bold,
							}),
							template: oItemTemplate,
							sortProperty: ""+colI,
							filterProperty: ""+colI,
							showSortMenuEntry: lAllowSort,
							showFilterMenuEntry: lAllowFilter,
							width: that.getDHeaderColWidth()+"px"
						}));
					}
	
					for(var dataColI=0;dataColI<that._flatData.columnHeaders.length;dataColI++){
						var oItemTemplate = new sap.ui.commons.Label (
								{text: "{" + lPathPrefix + colI + "}",
									tooltip: "{" + lPathPrefix + colI + "}",
									textAlign: sap.ui.core.TextAlign.Right,
								});
	
						if(options.formattingCondition.length || allowSelection) {
							oItemTemplate.addCustomData (new sap.ui.core.CustomData({key:"condFormat", value:"{formats/" + colI + "}", writeToDom:true}));
							oItemTemplate.addCustomData ( new sap.ui.core.CustomData({key:"realCol", value: colI, writeToDom:false}));
						}
	
						that._table.addColumn(new sap.ui.table.Column({
							label: new sap.ui.commons.Label({text: that._flatData.columnHeaders[dataColI]}),
							template: oItemTemplate,
							sortProperty: ""+colI,
							filterProperty: ""+colI,
							showSortMenuEntry: lAllowSort,
							showFilterMenuEntry: lAllowFilter,
						}));
						colI = colI+1;
					}
	
					if(that.getDFixedHeader()) {
						that._table.setFixedColumnCount(that._flatData.dimensionHeaders.length);	
					}
				}
			}
		}
	},

	onCellClick : function (oEvent) {
		var that = oEvent.oSource.getParent().getParent();
		
		var allowSelection = that.getDAllowSelection();;
		if(!allowSelection){
			return;
		}

		var selection = {};
		
		// this gets a visual row back, sorts are corrupting the index
		selection.row = parseInt(oEvent.getParameters().rowIndex);
		
		// no better way for today
		//var path = oEvent.getParameters().cellControl.mBindingInfos.text.binding.sPath;
		//path = path.substring(1);
		//selection.row = parseInt(path.substring(path.indexOf("/")+1));
		
		selection.column = parseInt(oEvent.getParameters().columnIndex);
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
		that.setDCellSelection(selectionS);
		
		that.fireDesignStudioPropertiesChanged(["DCellSelection"]);
		that.fireDesignStudioEvent("onCellSelected");
	},
	
	onRowClick : function (oEvent) {
		var that = oEvent.oSource.getParent().getParent();
		
		var allowSelection = that.getDAllowSelection();;
		if(!allowSelection){
			return;
		}

		var selection = {};
		
		var rowContext = oEvent.getParameters().rowContext
		if(rowContext == undefined) {
			return;
		}
		
		var path = rowContext.sPath;
		path = path.substring(1);
		selection.row = parseInt(path.substring(path.indexOf("/")+1));

		selection.values = that._flatData.data2D[selection.row]["values"];

		selection.columnKeys = [];
		selection.space = "Row";
		
		selection.rowKeys = that._flatData.rowHeadersKeys2D[selection.row];
		selection.rowValues = that._flatData.data2D[selection.row]["values"];
		
		selection.columnDimensions = [];
		selection.rowDimensions = that._flatData.dimensionRows;
		
		var selectionS = JSON.stringify(selection);
		that.setDRowSelection(selectionS);
		
		that.fireDesignStudioPropertiesChanged(["DRowSelection"]);
		that.fireDesignStudioEvent("onRowSelected");
	},
	
	_fakeData : function () {
		
	}
});