/**
 * Table Config Handler
 */
define([], function () {
	sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.TableColumns", {
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
		updateTable : function () {
			var defaults = {
				sortDirection : "none",
				searchable : true,
				orderable : true
			}
			try {
				if (!propertyPage || !propertyPage.flatData || !propertyPage.flatData.dimensionHeaders) {
					return;
				}
				var cols = [];
				var used = [];
				this.cols = [];
				for (var i = 0; i < propertyPage.flatData.dimensionHeaders.length; i++) {
					cols.push({
						targets : propertyPage.flatData.dimensionHeadersKeys[i],
						title : propertyPage.flatData.dimensionHeaders[i],
						type : "string"
					});
				}
				for (var i = 0; i < propertyPage.flatData.columnHeadersKeys.length; i++) {
					cols.push({
						targets : propertyPage.flatData.columnHeadersKeys[i],
						title : propertyPage.flatData.columnHeaders[i],
						type : "num"
					});
				}
				for (var i = 0; i < cols.length; i++) {
					for (prop in defaults)
						cols[i][prop] = defaults[prop];
					var valIndex = -1;
					for (var j = 0; j < this._value.length; j++) {
						if (cols[i].targets == this._value[j].targets)
							valIndex = j;
					}
					if (valIndex > -1) {
						used.push(valIndex);
						cols[i] = this._value[valIndex];
					}
				}
				// Scan for unused configs
				for (var i = 0; i < this._value.length; i++) {
					var orphan = true;
					for (var j = 0; j < used.length; j++) {
						if (used[j] == i)
							orphan = false;
					}
					// if(orphan) cols.push(this._value[i]);
				}
				this.cols = cols;
				// alert(JSON.stringify(this._value + "\n\n" + this.cols));
				this.columnModel.setData({
					columnData : this.cols
				});
				// this.columnModel.setData({columnData: this._value});
				// this.columnTable.bindRows("/columnData");

			} catch (e) {
				alert("Error when updating column table: \n\n" + e);
			}
		},
		buildColumns : function (oControlEvent) {
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
			this._value = this.cols;
			this.fireValueChange();
		},
		init : function () {
			propertyPage.registerDataComponent(this);
			this.columnTable = new sap.ui.table.Table({
					title : "Columns",
					visibleRowCount : 15,
					selectionMode : sap.ui.table.SelectionMode.Single
				});
			var keyColumn = new sap.ui.table.Column({
					label : new sap.ui.commons.Label({
						text : "Column"
					}),
					template : new sap.ui.commons.Label().bindProperty("text", "targets"),
					width : "125px"
				});
			var textField = new sap.ui.commons.TextField();
			textField.attachChange(this.buildColumns, this);
			textField.bindProperty("value", "title");
			var textColumn = new sap.ui.table.Column({
					label : new sap.ui.commons.Label({
						text : "Title"
					}),
					template : textField,
					sortProperty : "title",
					filterProperty : "title"
				});
			// SORT DIRECTION - WIP
			var sortDirectionField = new sap.ui.commons.ComboBox({
					items : [
						new sap.ui.core.ListItem({
							key : "asc",
							text : "Ascending"
						}),
						new sap.ui.core.ListItem({
							key : "desc",
							text : "Descending"
						}),
						new sap.ui.core.ListItem({
							key : "none",
							text : "None"
						})
					]
				});
			sortDirectionField.attachChange(this.buildColumns, this);
			sortDirectionField.bindProperty("selectedKey", "sortDirection");
			var sortDirectionColumn = new sap.ui.table.Column({
					label : new sap.ui.commons.Label({
						text : "Sort Direction"
					}),
					template : sortDirectionField,
					width : "75px"
				});
			// COLUMN TYPE
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
						}),
						new sap.ui.core.ListItem({
							key : "date",
							text : "Date"
						}),
						new sap.ui.core.ListItem({
							key : "num-fmt",
							text : "Numeric Formatted"
						}),
						new sap.ui.core.ListItem({
							key : "html-num",
							text : "Numeric (HTML)"
						}),
						new sap.ui.core.ListItem({
							key : "html-num-fmt",
							text : "Numeric (HTML, Formatted)"
						}),
						new sap.ui.core.ListItem({
							key : "html",
							text : "HTML"
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
			var sortableField = new sap.ui.commons.CheckBox();
			sortableField.attachChange(this.buildColumns, this);
			sortableField.bindProperty("checked", "orderable");
			var sortableColumn = new sap.ui.table.Column({
					label : new sap.ui.commons.Label({
						text : "Sortable"
					}),
					template : sortableField,
					sortProperty : "orderable",
					filterProperty : "orderable",
					width : "75px",
					hAlign : "Center"
				});
			var searchableField = new sap.ui.commons.CheckBox();
			searchableField.attachChange(this.buildColumns, this);
			searchableField.bindProperty("checked", "searchable");
			var searchableColumn = new sap.ui.table.Column({
					label : new sap.ui.commons.Label({
						text : "Searchable"
					}),
					template : searchableField,
					sortProperty : "searchable",
					filterProperty : "searchable",
					width : "75px",
					hAlign : "Center"
				});
			this.columnTable.addColumn(keyColumn);
			this.columnTable.addColumn(textColumn);
			//this.columnTable.addColumn(sortDirectionColumn);
			this.columnTable.addColumn(sortableColumn);
			this.columnTable.addColumn(typeColumn);
			this.columnTable.addColumn(searchableColumn);
			this.addContent(this.columnTable);

			this.columnModel = new sap.ui.model.json.JSONModel();
			this.columnTable.setModel(this.columnModel);
			this.columnTable.bindRows("/columnData");

		},
		renderer : {},
		needsLabel : function () {
			return false;
		}
	});
	return {
		id : "columnconfig",
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
			var component = new org.scn.community.aps.TableColumns({
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