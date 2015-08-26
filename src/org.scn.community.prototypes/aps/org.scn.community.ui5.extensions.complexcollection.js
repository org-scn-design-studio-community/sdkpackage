/**
 * CC BY-NC-SA License
 * Advanced Data Table by Mike Howles is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 * Based on a work at http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/AdvancedDataTable 
 *
 */
var propertyPageHandlerRegistry = propertyPageHandlerRegistry || [];
/**
 * Register Handler
 */
propertyPageHandlerRegistry.push({
	id : "complexcollection",
	setter : function(property, value){
		var newValue = undefined;
		if(value && value!=""){
			newValue = jQuery.parseJSON(value);	
		}else{
			// Blank
		}	
		this["cmp_"+property].setValue(newValue);
	},
	getter : function(property, control){
		var arrayValue = control.getValue();
		newValue = JSON.stringify(arrayValue);
		return newValue;
	},
	createComponent : function(property, propertyOptions, changeHandler){
		var component = new org.scn.community.aps.ComplexCollection({
			width : "100%",
			title : new sap.ui.commons.Title({
				text: propertyOptions.desc
			}),
			config : propertyOptions.apsConfig,
			showCollapseIcon : false
		});
		component.attachValueChange(changeHandler ,this);
		return component;
	}
});
/**
 * Create UI5 Extension
 */
sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.ComplexCollection", {
	renderer : {},
	metadata : {                             
        properties : {
        	value : { 
        		type : "object[]",
        		defaultValue : []
        	},
        	config : {
        		type : "object",
        		defaultValue : {}
        	}
        },
	    events : {
	    	valueChange : {}
	    }
	},
	setConfig : function(o){
		sap.ui.core.Control.prototype.setProperty.apply(this,["config",o]);
		this.generateColumns();
		this.updateTable();
		return this;
	},
	getConfig : function(){
		return sap.ui.core.Control.prototype.getProperty.apply(this,["config"]);
	},
	setValue : function(a){
		sap.ui.core.Control.prototype.setProperty.apply(this,["value",a]);
		this.updateTable();
		return this;
	},
	getValue : function(){
		return sap.ui.core.Control.prototype.getProperty.apply(this,["value"]);
	},
	updateTable : function(){
		this.apsModel.setData({propertyData: this.getValue()});
		this.columnTable.setModel(this.apsModel);
		this.columnTable.bindRows("/propertyData");
	},
	generateColumns : function(){
		this.columnTable.destroyColumns();
		var rowMenu = new sap.ui.commons.Menu({});
		var rowMenuButton = new sap.ui.commons.MenuButton({
			icon : "sap-icon://menu2",
			menu : rowMenu
		});
		var uiCol = new sap.ui.table.Column({
			//label : new sap.ui.commons.Label({text: "Options"}),
			width : "50px",
			resizable : false,
			template : rowMenuButton.bindProperty("text","s")
		});
		var rowInsertBefore = new sap.ui.commons.MenuItem({
			text : "Insert Before",
			icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACZSURBVDhPY1yzZjMDKQCk4azxZCiPEDA+m8sEZRINaK+BLE+7u/tAeYTAzp1bBoOneZcx8s4BIQiXBYiBLoNwsINvDBMz4vJ7F0F4IA24PA039devXyDuRBAXpAEPAJoNUV0Z7QYk26fvwqvhKwPEJUDVQKUQMXyefpX2H4gYPkG5n2v/rzHbTDimQ075gqgPDGvcNjMwMAAAveg31dg0HpIAAAAASUVORK5CYII="
		});
		rowInsertBefore.attachSelect(function(){
			return function(oControlEvent){
				var model = oControlEvent.getSource().getModel();
				var path = oControlEvent.getSource().getBindingContext().getPath("rows");
				// Example: propertyData/8/rows
		        var arrPath = path.split("/");
		        var index = parseInt(arrPath[2]);
		        this.insertItem(index,0);
			};
		}(),this);
		var rowInsertAfter = new sap.ui.commons.MenuItem({
			text : "Insert After",
			icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACRSURBVDhPY1yzZjMDKQCkwd3dB8ojBHbu3MIEZRINaK9hZHiadxkj7xwQgnBZgBjoMggHO/jGMDEjLr93EYQH0nDWeDKEgwbaN+yCMH79+gUkeSeCLAFpwAOAZkNUV0a7Acn26bvwavjKAHEJUDVQKUQMn6eB6kAGf4JxM93WmG0mHNMhp3xB1AeGNW6bGRgYAHnXNiTeec8GAAAAAElFTkSuQmCC"
		});
		rowInsertAfter.attachSelect(function(index){
			return function(oControlEvent){
				var model = oControlEvent.getSource().getModel();
				var path = oControlEvent.getSource().getBindingContext().getPath("rows");
				// Example: propertyData/8/rows
		        var arrPath = path.split("/");
		        var index = parseInt(arrPath[2]);
				this.insertItem(index,1);
			};
		}(i),this);
		var rowDelete = new sap.ui.commons.MenuItem({
			text : "Delete",
			icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA3SURBVDhPY1yzZjMDKQCkwd3dB8ojBHbu3MIEZRINaK+BLE87rlgK5REC+yOih4unR1hMMzAAADMQF2dN9VQWAAAAAElFTkSuQmCC"
		});
		rowDelete.attachSelect(function(index){
			return function(oControlEvent){
				var model = oControlEvent.getSource().getModel();
				var path = oControlEvent.getSource().getBindingContext().getPath("rows");
				// Example: propertyData/8/rows
		        var arrPath = path.split("/");
		        var index = parseInt(arrPath[2]);
				this.deleteItem(index);
			};
		}(i),this);
		rowMenu.addItem(rowInsertBefore);
		rowMenu.addItem(rowInsertAfter);
		rowMenu.addItem(rowDelete);
		this.columnTable.addColumn(uiCol);

		
		
		var c = this.getConfig();
		for(var p in c){
			var conf = c[p];
			var template;
			switch(conf.apsControl) {
				case "text" :
					template = new sap.ui.commons.TextField().bindProperty("value", p);
					template.attachChange(function (oControlEvent){
						this.fireValueChange();
					},this);
					break;
				case "combobox" :
					template = new sap.ui.commons.ComboBox().bindProperty("selectedKey",p);
					if(conf.options){
						for(var i=0;i<conf.options.length;i++){
							var item = conf.options[i];
							var newItem = new sap.ui.core.ListItem(item);
							template.addItem(newItem);
						}
					}
					template.attachChange(function (oControlEvent){
						this.fireValueChange();
					},this);
					break;
				default :
					template = new sap.ui.commons.Label().bindProperty("text", p);
			}
			var newColumn = new sap.ui.table.Column({
				label: new sap.ui.commons.Label({text: conf.desc}),
				template: template,
				sortProperty: p,
				filterProperty: p,
				//width : "75px",
				hAlign: "Center"
			});
			this.columnTable.addColumn(newColumn);
		}
		// alert(JSON.stringify(this.getConfig()));
	},
	generateNewItem : function(){
		var newItem = {};
		var conf = this.getConfig();
		for(var p in this.getConfig()){
			if(conf[p].defaultValue) {
				newItem[p] = conf[p].defaultValue
			}else{
				newItem[p] = undefined;
			}
		}
		return newItem;
	},
	addNewItem : function(){
		var a = this.getValue();
		a.push(this.generateNewItem());
		this.setValue(a);
		this.fireValueChange();
	},
	insertItem : function(index, direction){
		var a = this.getValue();
		a.splice(index + direction, 0,this.generateNewItem());
		this.setValue(a);
		this.fireValueChange();
	},
	deleteItem : function(index){
		var a = this.getValue();
		a.splice(index, 1);
		this.setValue(a);
		this.fireValueChange();
	},
	init : function(){
		this.addButton = new sap.ui.commons.Button({
			tooltip : "Add Item",
			icon : "sap-icon://add"
		});
		this.addContent(this.addButton);
		this.addButton.attachPress(this.addNewItem,this);
		this.columnTable = new sap.ui.table.Table({
			//title: "Complex Title Here",
			visibleRowCount: 15,
			selectionMode: sap.ui.table.SelectionMode.Single
		});
		this.addContent(this.columnTable);
		this.apsModel = new sap.ui.model.json.JSONModel();
		this.columnTable.setModel(this.apsModel);
		this.columnTable.bindRows("/propertyData");
		
	},	 
	renderer : {},
	needsLabel : function() {
		return false;
	}
});