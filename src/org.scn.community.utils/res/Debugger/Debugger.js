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

jQuery.sap.require("sap.ui.table.Table");
// jQuery.sap.require("sap.sap.ui.table.SelectionMode");
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend("org.scn.community.utils.Debugger", {

	metadata: {
        properties: {
        	  "DStack": {type: "string"},
        	  "DVariables": {type: "string"},
        	  "DConsole": {type: "string"},
        	  "DActive": {type: "boolean"},
        	  "DLogActive": {type: "boolean"},
        }
	},
	
	initDesignStudio: function() {
		var that = this;
		
		this.addStyleClass("scn-pack-Debugger");
		
		that._callTable = new sap.ui.table.Table({
			height: "160px",
			width: "1100px",
			title: "Function Calls",
			visibleRowCount: 6,
			firstVisibleRow: 0,
			selectionMode: sap.ui.table.SelectionMode.Single,
			navigationMode: sap.ui.table.NavigationMode.Paginator,
			fixedColumnCount: 4,
			rowSelectionChange: that.onRowSelectionChangeStack
		});
		that._varTable = new sap.ui.table.Table({
			height: "160px",
			width: "1100px",
			title: "Variables",
			visibleRowCount: 6,
			firstVisibleRow: 0,
			selectionMode: sap.ui.table.SelectionMode.Single,
			navigationMode: sap.ui.table.NavigationMode.Paginator,
			fixedColumnCount: 4,
			rowSelectionChange: that.onRowSelectionChangeValue
		});
		
		that._varText = new sap.ui.commons.TextArea({
			value: "",
			height: "100px",
			width: "1100px",
		});
		
		that._consoleText = new sap.ui.commons.TextArea({
			value: "",
			visible: false,
			height: "600px",
			width: "1100px",
		});
		that._viewSwitch = new sap.ui.commons.Button({
			text: "Show Console View",
			height: "26px",
			width: "160px",
			press: that.onViewSwitch,
		});
		that._viewClear = new sap.ui.commons.Button({
			text: "Clear Content",
			height: "26px",
			width: "160px",
			press: that.onViewClear,
		});
		
		this.addContent(
    		that._callTable,
			{left: "30px", top: "60px"}
		);
		this.addContent(
    		that._varTable,
			{left: "30px", top: "320px"}
		);
		this.addContent(
    		that._varText,
			{left: "30px", top: "580px"}
		);
		this.addContent(
    		that._consoleText,
			{left: "30px", top: "40px"}
		);
		this.addContent(
    		that._viewSwitch,
			{left: "30px", top: "10px"}
		);
		this.addContent(
    		that._viewClear,
			{left: "230px", top: "10px"}
		);

		//Define the columns and the control templates to be used
		that._callTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Time Stamp"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "date"),
			sortProperty: "date",
			filterProperty: "date",
			width: "350px"
		}));
		
		//Define the columns and the control templates to be used
		that._callTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Component / Script"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "component"),
			sortProperty: "component",
			filterProperty: "component",
			width: "250px"
		}));
		
		//Define the columns and the control templates to be used
		that._callTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Method"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "method"),
			sortProperty: "method",
			filterProperty: "method",
			width: "250px"
		}));
		
		//Define the columns and the control templates to be used
		that._callTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Line"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "line"),
			sortProperty: "line",
			filterProperty: "line",
			width: "250px"
		}));
		
		//Define the columns and the control templates to be used
		that._varTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Time Stamp"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "date"),
			sortProperty: "date",
			filterProperty: "date",
			width: "360px"
		}));
		
		//Define the columns and the control templates to be used
		that._varTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Type"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "type"),
			sortProperty: "type",
			filterProperty: "type",
			width: "250px"
		}));
		
		//Define the columns and the control templates to be used
		that._varTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Name"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "name"),
			sortProperty: "name",
			filterProperty: "name",
			width: "250px"
		}));
		
		//Define the columns and the control templates to be used
		that._varTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Value"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "value"),
			sortProperty: "value",
			filterProperty: "value",
			width: "250px"
		}));
		
	},
	
	renderer: {},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		var lStack = that.getDStack();
		lStack = JSON.parse(lStack);

		//Create a model and bind the table rows to this model
		that._oCallModel = new sap.ui.model.json.JSONModel();
		that._oCallModel.setData({modelData: lStack});
		that._callTable.setModel(that._oCallModel);
		that._callTable.bindRows("/modelData");

		//Initially sort the table
		that._callTable.sort(that._callTable.getColumns()[0]);
		
		var lVariables = that.getDVariables();
		lVariables = JSON.parse(lVariables);
		
		//Create a model and bind the table rows to this model
		that._oVarModel = new sap.ui.model.json.JSONModel();
		that._oVarModel.setData({modelData: lVariables});
		that._varTable.setModel(that._oVarModel);
		that._varTable.bindRows("/modelData");

		//Initially sort the table
		that._varTable.sort(that._varTable.getColumns()[0]);
		
		that._consoleText.setValue(that.getDConsole());
	},

	onRowSelectionChangeStack : function (event) {
		var that = this;
		
		var otherTable = that.getParent().getParent()._varTable;
		var column = otherTable.getColumns()[0];

		if(event.mParameters.rowContext) {
			var modelPath = event.mParameters.rowContext.sPath;
			var entry = modelPath.substring(modelPath.lastIndexOf("/") + 1);

			var model = event.oSource.getModel();
			var object = model.getObject(modelPath);
			var date = object.date;

			otherTable.filter(column, date);
		} else {
			otherTable.filter(column, "");
		}
	},
	
	onRowSelectionChangeValue : function (event) {
		var that = this;
		
		var theText = that.getParent().getParent()._varText;

		if(event.mParameters.rowContext) {
			var modelPath = event.mParameters.rowContext.sPath;
			var entry = modelPath.substring(modelPath.lastIndexOf("/") + 1);

			var model = event.oSource.getModel();
			var object = model.getObject(modelPath);
			var value = object.value;

			// format JSON
			if ((value.indexOf("[") == 1 || value.indexOf("{") == 1)) {
				while(value.indexOf("\\\"") > -1) {
					value = value.replace("\\\"", "\"");	
				}
				value = value.substring(1);
				value = value.substring(0, value.length - 1);
			}
			
			theText.setValue(value);
		} else {
			theText.setValue("");
		}
	},
	
	onViewSwitch: function (event) {
		var that = this;
		
		var panel = event.oSource.getParent().getParent();
		var theText = panel._consoleText;
		var varText = panel._varText;
		
		var callTable = panel._callTable;
		var varTable = panel._varTable;
		
		var visible = theText.getVisible();
		theText.setVisible(!visible);
		
		if(visible) {
			event.oSource.setText("Show Console View");
		} else {
			event.oSource.setText("Show Callstack View");
		}
		
		varText.setVisible(visible);
		callTable.setVisible(visible);
		varTable.setVisible(visible);
	},
	
	onViewClear: function (event) {
		var that = this;
		
		var panel = event.oSource.getParent().getParent();

		panel.setDConsole("");
		panel.setDStack("[]");
		panel.setDVariables("[]");
		
		panel.fireDesignStudioPropertiesChanged(["DConsole", "DStack", "DVariables"]);
		panel.fireDesignStudioEvent("onInternalClear");
	}
});
