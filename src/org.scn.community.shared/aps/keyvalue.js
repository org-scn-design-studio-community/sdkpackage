/**
 * Key-Value Pair Handler
 */
define(["../../org.scn.community.shared/aps/spinner"], function(){
	sap.ui.core.Control.extend("AdaptiveControl", {
		metadata: {
			properties: {
				format : {
					type : "string",
					//defaultValue : "string"
				},
				value : {
					type : "any",
					//defaultValue : "val"
				}
			},
			aggregations: {
				innerText: { type: "sap.ui.core.Control", multiple: false },
				innerSpinner: { type: "sap.ui.core.Control", multiple: false }
			},
			events : {
		    	valueChange : {}
		    }
		},
		renderer: {
			render: function(oRm, oControl) {
				//alert(JSON.stringify(oControl.getModel().getData()));
				oRm.write("<div");
				oRm.writeControlData(oControl);
				oRm.write(">");
				switch (oControl.getFormat()){
					case "string":
						oRm.renderControl(oControl.getAggregation("innerText"));
						break;
					case "number":
						oRm.renderControl(oControl.getAggregation("innerSpinner"));
						break;
					default:
						oRm.write("Unknown format: " + oControl.getValue());
				}
				oRm.write("</div>");
			}
		},
		changeHandler : function(oControlEvent){
			try{
			alert(
					oControlEvent.getSource().getModel().getProperty("value") + "\n\n" +
					JSON.stringify(oControlEvent.getSource().getModel().getData()) + "\n\n" +
					"!"+oControlEvent.getSource()
			);
			}catch(e){
				alert(e);
			}
			//this.getModel().setProperty("value",oControlEvent.getSource().getModel().getProperty("value"));
			// this.setValue(oControlEvent.getSource().getValue());
			this.fireValueChange();
		},
		init: function() {
			// String handler
			var textComponent = new sap.ui.commons.TextField();
			textComponent.setWidth("100%");
			textComponent.bindProperty("value",{path:"value"});
			textComponent.attachChange(this.changeHandler,this);
			this.setAggregation("innerText", textComponent);
			// Number Handler
			var numberComponent = new org.scn.community.aps.Spinner({});
			//numberComponent.setModel(new sap.ui.model.json.JSONModel());	// important i think?
			numberComponent.bindProperty("value",{path: "value"});
			numberComponent.attachValueChange(this.changeHandler,this);
			this.setAggregation("innerSpinner", numberComponent);
		}
	});
	/**
	 * Create UI5 Extension
	 */
	sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.KeyValuePair", {
		renderer : {},
		needsLabel : function() {
			return false;
		},
		metadata : {                             
	        properties : {
	        	title : "string",
	        	value : { 
	        		type : "object",
	        		defaultValue : {}
	        	}
	        },
		    events : {
		    	valueChange : {}
		    }
		},
		setTitle : function(s){
			sap.ui.core.Control.prototype.setProperty.apply(this,["title",s]);
			this.kvTable.setTitle(s);
			return this;
		},
		generatePairs : function(){
			return;
			var rowMenu = new sap.ui.commons.Menu({});
			// Maybe remove
			var rowMenuButton = new sap.ui.commons.MenuButton({
				icon : "sap-icon://menu2",
				menu : rowMenu
			});
			var uiCol = new sap.ui.table.Column({
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
			var rowDetails = new sap.ui.commons.MenuItem({
				text : "Details...",
				icon : ""
			});
			rowDetails.attachSelect(function(oControlEvent){
				var model = oControlEvent.getSource().getModel();
				var path = oControlEvent.getSource().getBindingContext().getPath("rows");
				this.showDetails(model,path);
			},this);
			rowMenu.addItem(rowInsertBefore);
			rowMenu.addItem(rowDelete);
			this.kvTable.addColumn(uiCol);

			var o = this.getValue();
			var a = [];
			for(field in o){
				a.push({
					key : field,
					value : o[field]
				});
			}
			var template = new sap.ui.commons.TextField().bindProperty("value", "key");
			template.attachChange(function (oControlEvent){
				alert("c");
				//this.fireValueChange();
			},this);
			var newColumn = new sap.ui.table.Column({
				label: new sap.ui.commons.Label({text: "Key"}),
				template: template,
				sortProperty: "key",
				filterProperty: "key",
				//width : "75px",
				hAlign: "Center"
			});
			this.kvTable.addColumn(newColumn);
			alert("!");
			return;
			
			
			
			var needsDetails = false;
			for(var field in o){
				var conf = c[p];
				var template;
				switch(conf.apsControl) {
					case "text" :
						template = new sap.ui.commons.TextField().bindProperty("value", p);
						template.attachChange(function (oControlEvent){
							this.fireValueChange();
						},this);
						break;
					case "checkbox" :
						template = new sap.ui.commons.CheckBox().bindProperty("checked",p);
						template.attachChange(function (oControlEvent){
							this.fireValueChange();
						},this);
						break
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
						needsDetails = true;
				}
				if(template){
					var newColumn = new sap.ui.table.Column({
						label: new sap.ui.commons.Label({text: conf.desc}),
						template: template,
						sortProperty: p,
						filterProperty: p,
						//width : "75px",
						hAlign: "Center"
					});
					this.kvTable.addColumn(newColumn);
				}			
			}
			if(needsDetails){
				rowMenu.addItem(rowDetails);
				var detailBtn = new sap.ui.commons.Button({
					text : "More..."
				});
				detailBtn.attachPress(function(oControlEvent){
					var model = oControlEvent.getSource().getModel();
					var path = oControlEvent.getSource().getBindingContext().getPath("rows");
					this.showDetails(model,path);
				},this);
				var detailColumn = new sap.ui.table.Column({
					//label: new sap.ui.commons.Label({text: conf.desc}),
					template: detailBtn,
					//width : "75px",
					hAlign: "Center"
				});
				this.kvTable.addColumn(detailColumn);
			}
			// alert(JSON.stringify(this.getConfig()));
		},
		generateNewKey : function(){
			var newKey = "somekey";
			return newKey;
		},
		addNewItem : function(){
			var a = this.getModel().getProperty("/value");
			var o = {}; 
			o.key = this.generateNewKey();
			o.format = "string";
			o.value = "value";
			a.push(o);
			alert(JSON.stringify(a));
			this.getModel().setProperty("/value",a);
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
		showDetails : function(model,path){
			var arrPath = path.split("/");
	        var index = parseInt(arrPath[2]);
	        var detailValue = this.getValue()[index];
			var that = this;
			require(["../../org.scn.community.shared/aps/complexproperty"],function(){
				var overlay = new sap.ui.ux3.OverlayContainer({
					openButtonVisible : false
				});
				var overlayHeader = new sap.ui.commons.ApplicationHeader({
					logoText : "Details (Row " + index + ")",
					//logoSrc : propertyPage.appHeader.getLogoSrc(),
					logoSrc : propertyPage.mainLayout.getAppIcon(),
					displayWelcome : false,
					displayLogoff : false
				});	
				var complex = new org.scn.community.aps.ComplexProperty({
					config : that.getConfig(),
					value : detailValue
				});
				complex.attachValueChange(function(oControlEvent){
					var a = that.getValue();
					that.setValue(a);
					that.fireValueChange();
				},this);
				overlay.addContent(overlayHeader);
				overlay.addContent(complex);
				overlay.open();
			});
			
			//oOverlayContainer.attachClose(handler);
			//oOverlayContainer.attachOpen(handler);
			//oOverlayContainer.attachOpenNew(handler);
		},
		tableChangeHandler : function(oControlEvent){
			this.fireValueChange();
		},
		init : function(){
			this.setModel(new sap.ui.model.json.JSONModel());
			this.addButton = new sap.ui.commons.Button({
				tooltip : "Add Key",
				icon : "sap-icon://add"
			});
			this.addContent(this.addButton);
			this.addButton.attachPress(this.addNewItem,this);
			this.kvTable = new sap.ui.table.Table({
				title: "Key/Values",
				visibleRowCount: 15,
				//selectionMode: sap.ui.table.SelectionMode.Single
				selectionMode: sap.ui.table.SelectionMode.None
			});
			// KEY
			var template = new sap.ui.commons.TextField().bindProperty("value", "key");
			template.attachChange(this.tableChangeHandler,this);
			this.kvTable.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({text: "Key"}),
				template: template,
				sortProperty: "key",
				filterProperty: "key",
				hAlign: "Center"
			}));
			var template = new sap.ui.commons.TextField().bindProperty("value", "format");
			template.attachChange(this.tableChangeHandler,this);
			this.kvTable.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({text: "Type"}),
				template: template,
				sortProperty: "format",
				filterProperty: "format",
				hAlign: "Center"
			}));			
			// VALUE
			var valTemplate = new AdaptiveControl()
				.bindProperty("value","value")
				.bindProperty("format","format");
					
			valTemplate.attachValueChange(this.tableChangeHandler,this);
			this.kvTable.addColumn(new sap.ui.table.Column({
				label: new sap.ui.commons.Label({text: "Value"}),
				template: valTemplate,
				//sortProperty: "key",
				//filterProperty: "key",
				//hAlign: "Center"
			}));
			
			this.addContent(this.kvTable);
			this.getModel().setProperty("value",[]);
			this.kvTable.bindRows("/value");
			
		},	 
		renderer : {},
		needsLabel : function() {
			return false;
		}
	});
	return{
		id : "keyvalue",
		setter : function(property, value){
			var o = {};
			if(value && value !="") o = JSON.parse(value);
			var a = [];
			for(field in o){
				a.push({
					key : field,
					value : o[field],
					format : typeof o[field]
				});
			}
			this["cmp_"+property].getModel().setProperty("/value",a);
		},
		getter : function(property, control){
			var a = this["cmp_"+property].getModel().getProperty("/value");
			var o = {};
			for(var i=0;i<a.length;i++){
				o[a[i].key] = a[i].value;
			}
			alert("returning to DS: " + JSON.stringify(o));
			return JSON.stringify(o);
		},
		createComponent : function(property, propertyOptions, changeHandler){
			var component = new org.scn.community.aps.KeyValuePair({ });
			component.attachValueChange(changeHandler,this);
			return component;
		}
	};
});
