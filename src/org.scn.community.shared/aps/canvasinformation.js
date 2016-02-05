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
		setValue : function (o) {
			this._value = o;
			this.updateTable();
			this.updateItems();
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
			var o = this.getValue();
			var a = o.profiles;
			var layout = a[index].componentLayout;
			var components = layout.components;
			this.componentTable = new sap.ui.table.Table({
				title : "Component",
				visibleRowCount : 15,
				selectionMode : sap.ui.table.SelectionMode.None
			});
			var componentModel = new sap.ui.model.json.JSONModel();
			componentModel.setData({
				components : components
			});
			this.componentTable.setModel(componentModel);
			this.componentTable.bindRows("/components");
			var rowMenu = new sap.ui.commons.Menu({});
			var rowMenuButton = new sap.ui.commons.MenuButton({
				icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIElEQVR42mNkoBAwAvH6ATeAYi8MAwNGY2EwGDDEYwEA8MUEK153B5IAAAAASUVORK5CYII=",
				menu : rowMenu
			});
			var rowUpdate = new sap.ui.commons.MenuItem({
				icon : "sap-icon://download",
				text : "Update from Canvas"
			});
			rowUpdate.attachSelect(function(profileIndex){
				return function(oControlEvent){
					var model = oControlEvent.getSource().getModel();
					var path = oControlEvent.getSource().getBindingContext().getPath("rows");
			        var arrPath = path.split("/");
			        var index = parseInt(arrPath[2]);
			        var o = this.getValue();
			        var a = o.profiles;
			        var profile = a[profileIndex];
			        var componentKey = profile.componentLayout.components[index].key;
			        var that = this;
			        propertyPage.callZTLFunction("examineCanvas", function(result){
			        	var rtResult = JSON.parse(result);
			        	var o = that.getValue();
			        	var profiles = o.profiles;
			        	var compIndex = -1;
			        	for(var i=0;i<rtResult.components.length;i++){
			        		var comp = rtResult.components[i];
			        		if(comp.key == componentKey) compIndex = i;
			        	}
			        	if(compIndex>-1){
			        		profiles[profileIndex].componentLayout.components[index] = rtResult.components[compIndex];
			        		componentModel.setData({
			    				components : profiles[profileIndex].componentLayout.components
			    			});
			        		that.setValue(o);
		        			that.fireValueChange();
			        	}else{
			        		alert("Component with ID " + componentKey + " no longer present in the canvas.");
			        	}
			        });
				};
			}(index),this);// need closure?
			var rowDelete = new sap.ui.commons.MenuItem({
				text : "Delete from Profile",
				icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA3SURBVDhPY1yzZjMDKQCkwd3dB8ojBHbu3MIEZRINaK+BLE87rlgK5REC+yOih4unR1hMMzAAADMQF2dN9VQWAAAAAElFTkSuQmCC"
			});
			rowMenu.addItem(rowUpdate);
			rowMenu.addItem(rowDelete);
			var uiCol = new sap.ui.table.Column({
				label : "",
				width : "50px",
				resizable : false,
				template : rowMenuButton.bindProperty("text","s")
			});
			var keyField = new sap.ui.commons.Label({});
			// keyField.attachChange(function(){this.updateProfile(index)}, this);
			keyField.bindProperty("text", "key");
			var keyColumn = new sap.ui.table.Column({
				template : keyField,
				label : new sap.ui.commons.Label({
					text : "Component"
				}),
				width : "125px"
			});
			// Visible
			var visibleField = new sap.ui.commons.ComboBox({
				items : [
					new sap.ui.core.ListItem({
						key : "unchanged",
						text : "Unchanged"
					}),
					new sap.ui.core.ListItem({
						key : "visible",
						icon : "sap-icon://show",
						text : "Show"
					}),
					new sap.ui.core.ListItem({
						key : "hidden",
						icon : "sap-icon://hide",
						text : "Hide"
					}),
				]
			});
			visibleField.attachChange(function(){this.updateProfile(index)}, this);
			visibleField.bindProperty("selectedKey", "position/visible");
			var visibleColumn = new sap.ui.table.Column({
				template : visibleField,
				label : new sap.ui.commons.Label({
					text : "Visiblity"
				}),
				width : "75px"
			});
			// Left
			var leftField = new sap.ui.commons.TextField();
			leftField.attachChange(function(){this.updateProfile(index)}, this);
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
			rightField.attachChange(function(){this.updateProfile(index)}, this);
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
			topField.attachChange(function(){this.updateProfile(index)}, this);
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
			bottomField.attachChange(function(){this.updateProfile(index)}, this);
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
			widthField.attachChange(function(){this.updateProfile(index)}, this);
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
			heightField.attachChange(function(){this.updateProfile(index)}, this);
			heightField.bindProperty("value", "position/height");
			var heightColumn = new sap.ui.table.Column({
				template : heightField,
				label : new sap.ui.commons.Label({
					text : "Height"
				}),
				width : "75px"
			});
			this.componentTable.addColumn(uiCol);
			this.componentTable.addColumn(keyColumn);
			this.componentTable.addColumn(visibleColumn);
			this.componentTable.addColumn(leftColumn);
			this.componentTable.addColumn(rightColumn);
			this.componentTable.addColumn(topColumn);
			this.componentTable.addColumn(bottomColumn);
			this.componentTable.addColumn(widthColumn);
			this.componentTable.addColumn(heightColumn);
			
			overlay.addContent(overlayHeader);
			overlay.addContent(this.componentTable);
			overlay.open();
		},
		updateItems : function(){
			
		},
		updateTable : function () {
			var defaults = {
				browserMinWidth : 640,
				browserMaxWidth : 800,
				browserMinHeight : 480,
				browserMaxHeight : 600,
			}
			this.columnModel.setData(this.getValue());
		},
		// Basically the model handles the value it seems - just fire a value change event, I guess...  Cool.
		buildColumns : function (oControlEvent) {
			this.fireValueChange();
		},
		updateProfile : function(index){
			this.fireValueChange();
		},
		examComplete : function(result,index,direction,mode){
			var profile = JSON.parse(result);
			var comps = [];
			var o = this.getValue();
			// Remove untracked items
			for(var i=0;i<profile.components.length;i++){
				var found = false;
				for(var j=0;j<o.items.length;j++){
					if(o.items[j].key == profile.components[i].key && o.items[j].use) found = true;
				}
				if(found) comps.push(profile.components[i]);
			}
			
			var a = o.profiles;
			var newProfile = {
				key : "New Profile",
				os : "Any",
				device : "Any",
				browserMinWidth : -1, //profile.browserWidth,
				browserMaxWidth : -1, //profile.browserWidth,
				browserMinHeight : -1, //profile.browserHeight,
				browserMaxHeight : -1, //profile.browserHeight,
				componentLayout : {components : comps}
			};
			if(index===undefined){
				a.push(newProfile);	
			}else{
				if(direction == -1 ){	// Update
					for(var j=0;j<newProfile.componentLayout.components.length;j++){
						var isNew = true;
						for(var i=0;i<a[index].componentLayout.components.length;i++){
							if(newProfile.componentLayout.components[j].key == a[index].componentLayout.components[i].key){
								isNew = false;
							}
						}
						if(isNew){
							a[index].componentLayout.components.push(newProfile.componentLayout.components[j]);
						}
					}
					//a[index].componentLayout = newProfile.componentLayout;
				}else{
					a.splice(index + direction,0,newProfile);	
				}
				
			}
			
			this.setValue(o);
			this.fireValueChange();
			this.updateTable();
		},
		loadProfile : function(index){
			var that = this;
			var o = this.getValue();
			var a = o.profiles;
			propertyPage.callRuntimeHandler("updateProfile",a[index].key);
			return;
			// Cosmetically works in canvas at DT, but properties never update :(
			propertyPage.callZTLFunction("layoutCanvas", function(result){
				var o = that.getValue();
				var a = o.profiles;
				var profile = a[index];
				// Hack to force canvas to update - I still cannot update other properties :P
				if(!profile.tick) profile.tick = 0;
				profile.tick++;
				that.setValue(o);
				that.fireValueChange();
			},a[index].key);
		},
		/**
		 * Add a new Profile
		 */
		addNewProfile : function(oControlEvent){
			var that = this;
			propertyPage.callZTLFunction("examineCanvas", function(result){that.examComplete(result);});
		},
		/**
		 * Insert a Profile
		 */
		insertProfile : function(index,direction,mode){
			var that = this;
			propertyPage.callZTLFunction("examineCanvas", function(index,direction,mode){
				return function(result){that.examComplete(result,index,direction,mode);}
			}(index,direction,mode));
		},
		/**
		 * Delete a Profile
		 */
		deleteProfile : function(index){
			var o = this.getValue();
			var a = o.profiles;
			a.splice(index,1);
			this.setValue(o);
			this.fireValueChange();
		},
		detectComponents : function(){
			var that = this;
			propertyPage.callZTLFunction("getItems", function(result){that.detectionComplete(result);});
		},
		detectionComplete : function(result){
			var a = JSON.parse(result);
			// if(!this.getValue()) return;	// Not set yet :(
			var items = this.getValue().items;
			// Add Missing Items
			for(var i=0;i<a.length;i++){
				var found = false;
				for(var j=0;j<items.length;j++){
					if(a[i].key == items[j].key) {
						found = true;
					}
				}
				if(!found) {
					a[i].use = false;
					items.push(a[i]);
				}
			}
			// Remove Obsolete Items
			for(var j=items.length-1;j>=0;j--){
				var found = false;
				for(var i=0;i<a.length;i++){
					if(a[i].key == items[j].key) found = true;
				}
				if(!found) items.splice(j,1);
			}
			// Cleanse profiles of untracked items.
			this.cleanseProfiles();
			this.columnModel.setData(this.getValue());
			this.fireValueChange();
			//alert(result);
		},
		cleanseProfiles : function(){
			var o = this.getValue();
			var profiles = o.profiles;
			for(var i=0;i<profiles.length;i++){
				var components = profiles[i].componentLayout.components;
				for(var j=components.length-1;j>=0;j--){
					var found = false;
					for(var k=0;k<o.items.length;k++){
						if(o.items[k].key == components[j].key && o.items[k].use) found = true;
					}
					if(!found) components.splice(j,1);
				}
			}
		},
		componentSelected : function(){
			this.detectComponents();
		},
		init : function () {try{
			propertyPage.registerSelectionSensitive(this);
			this.addProfile = new sap.ui.commons.Button({
				icon : "sap-icon://download",
				text : "New Profile"
			});
			this.addProfile.attachPress(this.addNewProfile, this);
			// Item Table

			this.itemTable = new sap.ui.table.Table({
				title : "Item Filter",
				visibleRowCount : 10,
				selectionMode : sap.ui.table.SelectionMode.None
			});
			var filterField = new sap.ui.commons.CheckBox().bindProperty("checked","use");
			filterField.attachChange(this.buildColumns, this);
			var filterColumn = new sap.ui.table.Column({
				label : "Use",
				width : "50px",
				resizable : false,
				template : filterField
			});
			var itemField = new sap.ui.commons.Label({});
			itemField.bindProperty("text", "key");
			var itemColumn = new sap.ui.table.Column({
				template : itemField,
				label : new sap.ui.commons.Label({
					text : "Item Key"
				}),
				width : "125px"
			});
			var typeColumn = new sap.ui.table.Column({
				template : new sap.ui.commons.Label({}).bindProperty("text", "type"),
				label : new sap.ui.commons.Label({
					text : "Item Type"
				}),
				width : "125px"
			});
			this.itemTable.addColumn(filterColumn);
			this.itemTable.addColumn(itemColumn);
			this.itemTable.addColumn(typeColumn);

			// Profile Table
			this.columnTable = new sap.ui.table.Table({
				title : "Profiles",
				visibleRowCount : 5,
				selectionMode : sap.ui.table.SelectionMode.None
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
				template : rowMenuButton //.bindProperty("text",)
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
			var updateMenu = new sap.ui.commons.Menu({});
			var updateOnlyNew = new sap.ui.commons.MenuItem({
				icon : "sap-icon://add",
				text : "Only New Components"
			});
			var updateAll = new sap.ui.commons.MenuItem({
				icon : "sap-icon://download",
				text : "All Components"
			});
			updateAll.attachSelect(function(index){
				return function(oControlEvent){
					var model = oControlEvent.getSource().getModel();
					var path = oControlEvent.getSource().getBindingContext().getPath("rows");
			        var arrPath = path.split("/");
			        var index = parseInt(arrPath[2]);
			        this.insertProfile(index,-1,"all");
				};
			}(i),this);
			updateOnlyNew.attachSelect(function(index){
				return function(oControlEvent){
					var model = oControlEvent.getSource().getModel();
					var path = oControlEvent.getSource().getBindingContext().getPath("rows");
			        var arrPath = path.split("/");
			        var index = parseInt(arrPath[2]);
			        this.insertProfile(index,-1,"new");
				};
			}(i),this);
			var rowUpdate = new sap.ui.commons.MenuItem({
				text : "Update Profile from Canvas",
				icon : "sap-icon://download",
				submenu : updateMenu
			});
			updateMenu.addItem(updateOnlyNew);
			updateMenu.addItem(updateAll);
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
			// rowMenu.addItem(rowLoad); // Cannot get this to work as I want in Designtime -Mike
			rowMenu.addItem(rowDelete);
			var osField = new sap.ui.commons.ComboBox({
				items : [
					new sap.ui.core.ListItem({
						key : "Any",
						text : "Any"
					}),
					new sap.ui.core.ListItem({
						key : "Windows",
						text : "Windows"
					}),
					new sap.ui.core.ListItem({
						key : "MacOS",
						text : "MacOS"
					}),
					new sap.ui.core.ListItem({
						key : "Unix",
						text : "Unix"
					}),
					new sap.ui.core.ListItem({
						key : "Linux",
						text : "Linux"
					}),
					new sap.ui.core.ListItem({
						key : "Unknown OS",
						text : "Unknown"
					})
				]
			});
			osField.attachChange(this.buildColumns, this);
			osField.bindProperty("selectedKey", "os");
			var osColumn = new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
					text : "OS"
				}),
				template : osField,
				width : "75px"
			});
			var deviceField = new sap.ui.commons.ComboBox({
				items : [
					new sap.ui.core.ListItem({
						key : "Any",
						text : "Any"
					}),
					new sap.ui.core.ListItem({
						key : "Desktop",
						text : "Desktop"
					}),
					new sap.ui.core.ListItem({
						key : "Android",
						text : "Android"
					}),
					new sap.ui.core.ListItem({
						key : "iPad",
						text : "iPad"
					}),
					new sap.ui.core.ListItem({
						key : "iPhone",
						text : "iPhone/iPod"
					}),
					new sap.ui.core.ListItem({
						key : "Windows",
						text : "Windows Mobile"
					}),
					new sap.ui.core.ListItem({
						key : "BlackBerry",
						text : "Linux"
					})
				]
			});
			deviceField.attachChange(this.buildColumns, this);
			deviceField.bindProperty("selectedKey", "device");
			var deviceColumn = new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
					text : "Device"
				}),
				template : deviceField,
				width : "75px"
			});
			this.columnTable.addColumn(uiCol);
			this.columnTable.addColumn(keyColumn);
			this.columnTable.addColumn(osColumn);
			this.columnTable.addColumn(deviceColumn);
			this.columnTable.addColumn(browserMinWidthColumn);
			this.columnTable.addColumn(browserMaxWidthColumn);
			this.columnTable.addColumn(browserMinHeightColumn);
			this.columnTable.addColumn(browserMaxHeightColumn);
			
			this.addContent(this.addProfile);
			this.addContent(this.columnTable);
			this.addContent(this.itemTable);
			this.columnModel = new sap.ui.model.json.JSONModel();
			this.columnTable.setModel(this.columnModel);
			this.columnTable.bindRows("/profiles");
			//this.itemModel = new sap.ui.model.json.JSONModel();
			this.itemTable.setModel(this.columnModel);
			this.itemTable.bindRows("/items");
			//this.detectComponents();
		}catch(e){alert(e);}},
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
			this["cmp_" + property].detectComponents();
		},
		getter : function (property, control) {
			var o = control.getValue();
			newValue = JSON.stringify(o);
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