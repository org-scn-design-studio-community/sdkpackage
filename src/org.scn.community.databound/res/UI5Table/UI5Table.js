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
		that._table.bindRows("/data2DPlain");

    	this.addContent(
    		that._table,
			{left: "0px", top: "0px"}
		);

    	org_scn_community_basics.hideNoDataOverlay(this.getId(), true);
    	
    	that.onAfterRendering = function() {
    	};
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
			
			if(lData == "") {
				this._fakeData();
			} else {
				var options = org_scn_community_databound.initializeOptions();
				options.ignoreResults = true;
			
				that._vals = [];
				try{
					that._flatData = org_scn_community_databound.flatten(lData,options);
					that._rowData = org_scn_community_databound.toRowTable(that._flatData,options);
					
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
			var rI=0;

			if(that._rowData) {
				for(rI=0;rI<that._rowData.dimensionHeaders.length;rI++){
					that._table.addColumn(new sap.ui.table.Column({
						label: new sap.ui.commons.Label(
						{
							text: that._rowData.dimensionHeaders[rI],
							design: sap.ui.commons.LabelDesign.Bold,
						}),
						template: new sap.ui.commons.Label(
						{
							design: sap.ui.commons.LabelDesign.Bold,
						}).bindProperty("text", ""+rI),
						sortProperty: ""+rI,
						filterProperty: ""+rI,
						width: that.getDHeaderColWidth()+"px"
					}));
				}

				for(var cI=0;cI<that._rowData.columnHeaders.length;cI++){
					that._table.addColumn(new sap.ui.table.Column({
						label: new sap.ui.commons.Label({text: that._rowData.columnHeaders[cI]}),
						template: new sap.ui.commons.Label(
						{
							design: sap.ui.commons.LabelDesign.Normal,
							textAlign: sap.ui.core.TextAlign.Right,
						}
						).bindProperty("text", ""+rI),
						sortProperty: ""+rI,
						filterProperty: ""+rI,
					}));
					rI = rI+1;
				}

				that._table.setFixedColumnCount(that._rowData.dimensionHeaders.length);
			}
		}

		that._oModel.setData(that._rowData);
	},

	
	_fakeData : function () {
		
	}
});