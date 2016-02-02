/**
 * Canvas Information
 */
define([], function () {
	sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.CanvasInformation", {
		renderer : {},
		metadata : {
			properties : {
				value : {
					type : "object",
					defaultValue : []
				}
			},
			events : {
				valueChange : {}
			}
		},
		notifyDataChange : function () {
			this.updateTable();
		},
		setValue : function (a) {
			this._value = a;
			this.updateTable();
			return this;
		},
		getValue : function () {
			return this._value;
		},
		showDetails : function(index){
			var overlay = new sap.ui.ux3.OverlayContainer({
				openButtonVisible : false
			});
			var overlayHeader = new sap.ui.commons.ApplicationHeader({
				logoText : "Details (Row " + index + ")",
				logoSrc : propertyPage.mainLayout.getAppIcon(),
				displayWelcome : false,
				displayLogoff : false
			});
			var a = this.getValue();
			var layout = a[index].componentLayout;
			var components = layout.components;
			var componentTable = new sap.ui.table.Table({
				title : "Component",
				visibleRowCount : 15,
				selectionMode : sap.ui.table.SelectionMode.None
			});
			var componentModel = new sap.ui.model.json.JSONModel();
			componentModel.setData({
				components : components
			});
			componentTable.setModel(componentModel);
			componentTable.bindRows("/components");
			var rowMenu = new sap.ui.commons.Menu({});
			var rowMenuButton = new sap.ui.commons.MenuButton({
				icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIElEQVR42mNkoBAwAvH6ATeAYi8MAwNGY2EwGDDEYwEA8MUEK153B5IAAAAASUVORK5CYII=",
				menu : rowMenu
			});
			var uiCol = new sap.ui.table.Column({
				label : "",
				width : "50px",
				resizable : false,
				template : rowMenuButton.bindProperty("text","s")
			});
			var keyField = new sap.ui.commons.Label({});
			// keyField.attachChange(this.updateComponent, this);
			keyField.bindProperty("text", "key");
			var keyColumn = new sap.ui.table.Column({
				template : keyField,
				label : new sap.ui.commons.Label({
					text : "Component"
				}),
				width : "125px"
			});
			// Left
			var leftField = new sap.ui.commons.TextField();
			leftField.attachChange(this.updateComponent, this);
			leftField.bindProperty("value", "position/left");
			var leftColumn = new sap.ui.table.Column({
				template : leftField,
				label : new sap.ui.commons.Label({
					text : "Left"
				}),
				width : "75px"
			});
			// Right
			var rightField = new sap.ui.commons.TextField();
			rightField.attachChange(this.updateComponent, this);
			rightField.bindProperty("value", "position/right");
			var rightColumn = new sap.ui.table.Column({
				template : rightField,
				label : new sap.ui.commons.Label({
					text : "Right"
				}),
				width : "75px"
			});
			// Top
			var topField = new sap.ui.commons.TextField();
			topField.attachChange(this.updateComponent, this);
			topField.bindProperty("value", "position/top");
			var topColumn = new sap.ui.table.Column({
				template : topField,
				label : new sap.ui.commons.Label({
					text : "Top"
				}),
				width : "75px"
			});
			// Bottom
			var bottomField = new sap.ui.commons.TextField();
			bottomField.attachChange(this.updateComponent, this);
			bottomField.bindProperty("value", "position/bottom");
			var bottomColumn = new sap.ui.table.Column({
				template : bottomField,
				label : new sap.ui.commons.Label({
					text : "Bottom"
				}),
				width : "75px"
			});
			// Width
			var widthField = new sap.ui.commons.TextField();
			widthField.attachChange(this.updateComponent, this);
			widthField.bindProperty("value", "position/width");
			var widthColumn = new sap.ui.table.Column({
				template : widthField,
				label : new sap.ui.commons.Label({
					text : "Width"
				}),
				width : "75px"
			});
			// Height
			var heightField = new sap.ui.commons.TextField();
			heightField.attachChange(this.updateComponent, this);
			heightField.bindProperty("value", "position/height");
			var heightColumn = new sap.ui.table.Column({
				template : heightField,
				label : new sap.ui.commons.Label({
					text : "Height"
				}),
				width : "75px"
			});
			componentTable.addColumn(uiCol);
			componentTable.addColumn(keyColumn);
			componentTable.addColumn(leftColumn);
			componentTable.addColumn(rightColumn);
			componentTable.addColumn(topColumn);
			componentTable.addColumn(bottomColumn);
			componentTable.addColumn(widthColumn);
			componentTable.addColumn(heightColumn);
			//componentTable.addColumn(keyColumn);
			/*
			var complex = new org.scn.community.aps.ComplexProperty({
				config : that.getConfig(),
				value : detailValue
			});
			complex.attachValueChange(function(oControlEvent){
				var a = that.getValue();
				that.setValue(a);
				that.fireValueChange();
			},this);
			*/
			overlay.addContent(overlayHeader);
			overlay.addContent(componentTable);
			overlay.open();
		},
		updateTable : function () {
			var defaults = {
				browserMinWidth : 640,
				browserMaxWidth : 800,
				browserMinHeight : 480,
				browserMaxHeight : 600,
			}
			this.columnModel.setData({
				profileData : this.getValue()
			});
		},
		buildColumns : function (oControlEvent) {
			this._value = this.columnModel.getData().profileData;
			this.fireValueChange();
			return;
			var a = [];
			for (var i = 0; i < this.cols.length; i++) {
				a.push({
					targets : this.cols[i].targets,
					//targets : i,
					title : this.cols[i].title,
					orderable : this.cols[i].orderable,
					searchable : this.cols[i].searchable
				});
			};
			//		/alert(JSON.stringify(a));
			// this._value = a;
			
		},
		examComplete : function(result,index,direction){
			var profile = JSON.parse(result);
			var a = this.getValue();
			var newProfile = {
				key : "profile" + profile.browserWidth + "x" + profile.browserHeight,
				browserMinWidth : profile.browserWidth,
				browserMaxWidth : profile.browserWidth,
				browserMinHeight : profile.browserHeight,
				browserMaxHeight : profile.browserHeight,
				componentLayout : profile
			};
			if(index===undefined){
				a.push(newProfile);	
			}else{
				if(direction == -1 ){	// Update
					a[index].componentLayout = newProfile.componentLayout;
				}else{
					a.splice(index + direction,0,newProfile);	
				}
				
			}
			
			this.setValue(a);
			this.fireValueChange();
			this.updateTable();
		},
		loadProfile : function(index){
			var that = this;
			var a = this.getValue();
			propertyPage.callZTLFunction("layoutCanvas", function(result){
				propertyPage.callRuntimeHandler("updateProfile");
				var a = that.getValue();
				var profile = a[index];
				// Hack to force canvas to update - I still cannot update other properties :P
				if(!profile.tick) profile.tick = 0;
				profile.tick++;
				that.setValue(a);
				that.fireValueChange();
			},a[index].key);
		},
		addNewProfile : function(oControlEvent){
			var that = this;
			propertyPage.callZTLFunction("examineCanvas", function(result){that.examComplete(result);});
		},
		/**
		 * Delete a Profile
		 */
		deleteProfile : function(index){
			var a = this.getValue();
			a.splice(index,1);
			this.setValue(a);
			this.fireValueChange();
		},
		/**
		 * Insert a Profile
		 */
		insertProfile : function(index,direction){
			var that = this;
			propertyPage.callZTLFunction("examineCanvas", function(index,direction){
				return function(result){that.examComplete(result,index,direction);}
			}(index,direction));
		},
		init : function () {
			// propertyPage.registerDataComponent(this);
			this.addProfile = new sap.ui.commons.Button({
				icon : "sap-icon://download",
				text : "New Profile"
			});
			this.addProfile.attachPress(this.addNewProfile, this);
			this.columnTable = new sap.ui.table.Table({
				title : "Profiles",
				visibleRowCount : 15,
				selectionMode : sap.ui.table.SelectionMode.Single
			});
			var rowMenu = new sap.ui.commons.Menu({});
			var rowMenuButton = new sap.ui.commons.MenuButton({
				icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIElEQVR42mNkoBAwAvH6ATeAYi8MAwNGY2EwGDDEYwEA8MUEK153B5IAAAAASUVORK5CYII=",
				menu : rowMenu
			});
			var uiCol = new sap.ui.table.Column({
				label : "",
				width : "50px",
				resizable : false,
				template : rowMenuButton.bindProperty("text","s")
			});
			var keyField = new sap.ui.commons.TextField();
			keyField.attachChange(this.buildColumns, this);
			keyField.bindProperty("value", "key");
			var keyColumn = new sap.ui.table.Column({
				template : keyField,
				label : new sap.ui.commons.Label({
					text : "Profile"
				}),
				width : "125px"
			});
			// MIN WIDTH
			var browserMinWidthField = new sap.ui.commons.TextField();
			browserMinWidthField.attachChange(this.buildColumns, this);
			browserMinWidthField.bindProperty("value", "browserMinWidth");
			var browserMinWidthColumn = new sap.ui.table.Column({
				template : browserMinWidthField,
				label : new sap.ui.commons.Label({
					text : "Min Width"
				}),
				width : "75px"
			});
			// MAX WIDTH
			var browserMaxWidthField = new sap.ui.commons.TextField();
			browserMaxWidthField.attachChange(this.buildColumns, this);
			browserMaxWidthField.bindProperty("value", "browserMaxWidth");
			var browserMaxWidthColumn = new sap.ui.table.Column({
				template : browserMaxWidthField,
				label : new sap.ui.commons.Label({
					text : "Max Width"
				}),
				width : "75px"
			});
			// MIN HEIGHT
			var browserMinHeightField = new sap.ui.commons.TextField();
			browserMinHeightField.attachChange(this.buildColumns, this);
			browserMinHeightField.bindProperty("value", "browserMinHeight");
			var browserMinHeightColumn = new sap.ui.table.Column({
				template : browserMinHeightField,
				label : new sap.ui.commons.Label({
					text : "Min Height"
				}),
				width : "75px"
			});
			// MAX HEIGHT
			var browserMaxHeightField = new sap.ui.commons.TextField();
			browserMaxHeightField.attachChange(this.buildColumns, this);
			browserMaxHeightField.bindProperty("value", "browserMaxHeight");
			var browserMaxHeightColumn = new sap.ui.table.Column({
				template : browserMaxHeightField,
				label : new sap.ui.commons.Label({
					text : "Max Height"
				}),
				width : "75px"
			});
			
			// MENU OPTIONS
			var rowInsertBefore = new sap.ui.commons.MenuItem({
				text : "Insert Before",
				icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACZSURBVDhPY1yzZjMDKQCk4azxZCiPEDA+m8sEZRINaK+BLE+7u/tAeYTAzp1bBoOneZcx8s4BIQiXBYiBLoNwsINvDBMz4vJ7F0F4IA24PA039devXyDuRBAXpAEPAJoNUV0Z7QYk26fvwqvhKwPEJUDVQKUQMXyefpX2H4gYPkG5n2v/rzHbTDimQ075gqgPDGvcNjMwMAAAveg31dg0HpIAAAAASUVORK5CYII="
			});
			rowInsertBefore.attachSelect(function(){
				return function(oControlEvent){
					var model = oControlEvent.getSource().getModel();
					var path = oControlEvent.getSource().getBindingContext().getPath("rows");
					var arrPath = path.split("/");
					var index = parseInt(arrPath[2]);
					this.insertProfile(index,0);
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
			        var arrPath = path.split("/");
			        var index = parseInt(arrPath[2]);
			        this.insertProfile(index,1);
				};
			}(i),this);
			var rowUpdate = new sap.ui.commons.MenuItem({
				text : "Update Profile from Canvas",
				icon : "sap-icon://download"
			});
			rowUpdate.attachSelect(function(index){
				return function(oControlEvent){
					var model = oControlEvent.getSource().getModel();
					var path = oControlEvent.getSource().getBindingContext().getPath("rows");
			        var arrPath = path.split("/");
			        var index = parseInt(arrPath[2]);
			        this.insertProfile(index,-1);
				};
			}(i),this);
			var rowLoad = new sap.ui.commons.MenuItem({
				text : "Load Profile to Canvas",
				icon : "sap-icon://upload"
			});
			rowLoad.attachSelect(function(index){
				return function(oControlEvent){
					var model = oControlEvent.getSource().getModel();
					var path = oControlEvent.getSource().getBindingContext().getPath("rows");
			        var arrPath = path.split("/");
			        var index = parseInt(arrPath[2]);
			        this.loadProfile(index);
				};
			}(i),this);
			var rowDetails = new sap.ui.commons.MenuItem({
				text : "Details",
				icon : "sap-icon://action"
			});
			rowDetails.attachSelect(function(index){
				return function(oControlEvent){
					var model = oControlEvent.getSource().getModel();
					var path = oControlEvent.getSource().getBindingContext().getPath("rows");
			        var arrPath = path.split("/");
			        var index = parseInt(arrPath[2]);
			        this.showDetails(index);
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
			        var arrPath = path.split("/");
			        var index = parseInt(arrPath[2]);
					this.deleteProfile(index);
				};
			}(i),this);
			rowMenu.addItem(rowInsertBefore);
			rowMenu.addItem(rowInsertAfter);
			rowMenu.addItem(rowUpdate);
			rowMenu.addItem(rowDetails);
			rowMenu.addItem(rowLoad); // Cannot get this to work as I want in Designtime -Mike
			rowMenu.addItem(rowDelete);
			/*
			var typeField = new sap.ui.commons.ComboBox({
					items : [
						new sap.ui.core.ListItem({
							key : "auto",
							text : "Auto"
						}),
						new sap.ui.core.ListItem({
							key : "string",
							text : "String"
						}),
						new sap.ui.core.ListItem({
							key : "num",
							text : "Numeric"
						})
					]
				});
			typeField.attachChange(this.buildColumns, this);
			typeField.bindProperty("selectedKey", "type");
			var typeColumn = new sap.ui.table.Column({
					label : new sap.ui.commons.Label({
						text : "Type"
					}),
					template : typeField,
					width : "75px"
				});
				*/
			this.columnTable.addColumn(uiCol);
			this.columnTable.addColumn(keyColumn);
			this.columnTable.addColumn(browserMinWidthColumn);
			this.columnTable.addColumn(browserMaxWidthColumn);
			this.columnTable.addColumn(browserMinHeightColumn);
			this.columnTable.addColumn(browserMaxHeightColumn);
			
			this.addContent(this.addProfile);
			this.addContent(this.columnTable);
			this.columnModel = new sap.ui.model.json.JSONModel();
			this.columnTable.setModel(this.columnModel);
			this.columnTable.bindRows("/profileData");
		},
		renderer : {},
		needsLabel : function () {
			return false;
		}
	});
	return {
		id : "canvasinformation",
		setter : function (property, value) {
			var newValue = jQuery.parseJSON(value);
			this["cmp_" + property].setValue(newValue);
		},
		getter : function (property, control) {
			var arrayValue = control.getValue();
			newValue = JSON.stringify(arrayValue);
			return newValue;
		},
		createComponent : function (property, propertyOptions, changeHandler) {
			var component = new org.scn.community.aps.CanvasInformation({
					width : "100%",
					title : new sap.ui.commons.Title({
						text : propertyOptions.desc
					}),
					showCollapseIcon : false
				});
			component.attachValueChange(changeHandler, this);
			return component;
		}
	};
});