//%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./UI5TableSpec",
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

UI5Table = {

	renderer: {},
	
	initDesignStudio: function() {
		jQuery.sap.require("sap.ui.table.Table");
		
		var that = this;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
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
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		that._table.setVisibleRowCount(this.getDVisibleRowCount());
		that._table.setRowHeight(this.getDRowHeight());		
		
		var lSelMode = this.getDSelectionMode();
		if(lSelMode == "Single") {
			that._table.setSelectionMode(sap.ui.table.SelectionMode.Single);	
		} else if (lSelMode == "MultiToggle"){
			that._table.setSelectionMode(sap.ui.table.SelectionMode.MultiToggle);
		} else {
			that._table.setSelectionMode(sap.ui.table.SelectionMode.None);
		}

		// define model
		//if(that._flatData == undefined) {
			
			var lData = this.getData();
			
			var lDataProvisioner = that.getDDataProvisioner();
			var hasDataProvisioner = false;
			if(lDataProvisioner != undefined && lDataProvisioner.length != "") {
				hasDataProvisioner = (org_scn_community_databound.centralDataStorage[lDataProvisioner] != undefined);
			}
			
			if(lData == undefined || lData == "" && !hasDataProvisioner) {
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
		//}
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
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

		var allowSelection = that.getDAllowSelection();
		var lPathPrefix = "";
		var lPathSortPrefix = "";

		var options = {};
		options.formattingCondition = {};
		options.formattingCondition.rules = [];

		var contCond = JSON.parse(that.getDFormattingContentCondition());
		var valCond = JSON.parse(that.getDFormattingValueCondition());

		for(var rI in contCond) {
			if(contCond[rI].parentKey != "ROOT") {
				for (var r2I in contCond) {
					if(contCond[r2I].key == contCond[rI].parentKey) {
						contCond[r2I].members = contCond[r2I].members || [];
						contCond[r2I].members.push(contCond[rI].key);
						break;
					}
				}
			}
			options.formattingCondition.rules.push(contCond[rI]);
		}
		for(var rI in options.formattingCondition.rules) {
			if(options.formattingCondition.rules[rI].parentKey != "ROOT") {
				delete options.formattingCondition.rules[rI];
			}
		}
		for(var rI in valCond) {
			valCond[rI].condition = "value";
			options.formattingCondition.rules.push(valCond[rI]);
		}
		options.formattingCondition.operator = that.getDFormattingOperator();

		options.conditionColumns = "";//that.getDColumnFormattingCondition();
		
		var hasFormattingCondition = (options.formattingCondition.rules.length > 1);
		
		if(hasFormattingCondition || allowSelection) {
			that.addStyleClass("scn-pack-ActivateSimpleConditions");
		}

		that._table.bindRows("/data2D");
		lPathPrefix = "values/";
		if(that.getDSortMode() == "KeyValue") {
			lPathSortPrefix = "raw/";
		} else {
			lPathSortPrefix = "values/";
		}

		that._table.setEnableColumnReordering(lAllowReorder);
		
		if(hasFormattingCondition) {
			org_scn_community_databound.applyConditionalFormats(that._flatData, options);
		}
		
		that._oModel.setData(that._flatData);
		that._table.setEnableColumnReordering();

		var correctLabelPackage = sap.ui.commons == undefined ? sap.m : sap.ui.commons;
		
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

		for(colI=0;colI<that._flatData.dimensionHeaders.length;colI++){
			var oItemTemplate = new correctLabelPackage.Label (
					{text: "{" + lPathPrefix +colI + "}",
						tooltip: "{" + lPathPrefix + colI + "}",
						design: correctLabelPackage.LabelDesign.Bold,
					});
			
			if(hasFormattingCondition) {
				oItemTemplate.addCustomData (new sap.ui.core.CustomData({key:"condFormat", value:"{formats/" + colI + "}", writeToDom:true}));
			}
			
			var colWidth = colWidths[colI];
			if(!colWidth) {
				colWidth = that.getDHeaderColWidth()+"px";
			} else {
				if(colWidth.indexOf("px") == -1 && colWidth.indexOf("%") == -1)	{
					if(colWidth == "*") {
						colWidth = "100%";
					} else {
						colWidth = colWidth + "px";
					}
				}
			}

			var readArray = "dimensionHeaders";
			if(that.getDShowKeys()) {
				readArray = "dimensionHeadersKeys";
			}
			
			var lColumn = new sap.ui.table.Column({
				label: new correctLabelPackage.Label(
				{
					text: that._flatData[readArray][colI],
					design: correctLabelPackage.LabelDesign.Bold,
				}),
				template: oItemTemplate,
				sortProperty: ""+ lPathSortPrefix+colI,
				filterProperty: ""+ lPathPrefix+colI,
				showSortMenuEntry: lAllowSort,
				showFilterMenuEntry: lAllowFilter,
				width: colWidth
			});
			
			lColumn._dsRealColumnIndex = colI;
			
			that._table.addColumn(lColumn);
		}
		
		if(!that.getDOnlyHeaderColumns()) {
			for(var dataColI=0;dataColI<that._flatData.columnHeaders.length;dataColI++){
				var oItemTemplate = new correctLabelPackage.Label (
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

				var readArray = "columnHeaders";
				if(that.getDShowKeys()) {
					readArray = "columnHeadersKeys";
				}
				var lColumn = new sap.ui.table.Column({
					label: new correctLabelPackage.Label({text: that._flatData[readArray][dataColI]}),
					template: oItemTemplate,
					sortProperty: ""+ lPathSortPrefix+colI,
					filterProperty: ""+ lPathPrefix+colI,
					showSortMenuEntry: lAllowSort,
					showFilterMenuEntry: lAllowFilter,
					width: colWidth,
				});
				
				lColumn._dsRealColumnIndex = colI;
				
				that._table.addColumn(lColumn);
				colI = colI+1;
			}
		}
		
		if(false) {
			// a try to fix resizing
			that._table.addColumn(new sap.ui.table.Column({
				label: new correctLabelPackage.Label({text: ""}),
				template: new correctLabelPackage.Label({text: ""}),
				sortProperty: ""+colI,
				filterProperty: ""+colI,
				showSortMenuEntry: false,
				showFilterMenuEntry: false,
				width: "1px",
			}));
			colI = colI+1;
		}

		if(that.getDFixedHeader()) {
			var fixedIndex = that.getDHeaderColumnFixed();
			if(fixedIndex >= 0) {
				that._table.setFixedColumnCount(fixedIndex+1);
			} else {
				that._table.setFixedColumnCount(that._flatData.dimensionHeaders.length);
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
		
		selection.columnDimensions = [];
		selection.rowDimensions = [];
		
		for (var colDimI in that._flatData.dimensionCols){
			var volDimO = that._flatData.dimensionCols[colDimI];
			
			selection.columnDimensions.push({key: volDimO.key});
		}
		for (var rowDimI in that._flatData.dimensionRows){
			var volDimO = that._flatData.dimensionRows[rowDimI];
			
			selection.rowDimensions.push({key: volDimO.key});
		}
		
		var selectionS = JSON.stringify(selection);
		that.setDSelection(selectionS);
		
		that.fireDesignStudioPropertiesChangedAndEvent(["DSelection"], "onCellSelected");
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
		selection.rowDimensions = [];
		
		for (var rowDimI in that._flatData.dimensionRows){
			var volDimO = that._flatData.dimensionRows[rowDimI];
			
			selection.rowDimensions.push({key: volDimO.key});
		}
		
		var selectionS = JSON.stringify(selection);
		that.setDSelection(selectionS);
		
		that.fireDesignStudioPropertiesChangedAndEvent(["DSelection"], "onRowSelected");
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
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = UI5Table;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});