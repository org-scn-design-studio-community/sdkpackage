var propertyPageHandlerRegistry = propertyPageHandlerRegistry || [];
/**
 * Register Handler
 */
propertyPageHandlerRegistry.push({
	id : "array",
	setter : function(property, value){
		this["cmp_"+property].setValue(value);
	},
	getter : function(property, control){
		return control.getValue();
	},
	createComponent : function(property, propertyOptions, changeHandler){
		var specification = propertyOptions.arrayDefinition;
		if(!specification) {specification = {}};		
		var component = new org.scn.community.aps.ArrayList({
			mode: propertyOptions.arrayMode,
			description: propertyOptions.desc,
			tooltip: propertyOptions.tooltip
		});
		component.setSpecification(specification);
		component.setOptions(propertyOptions);
		component.attachValueChange(changeHandler,this);
		return component;
	}
});
/**
 * Create UI5 Extension
 */
sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.ArrayList", {
	renderer : {},
	metadata : {                             
        properties : {
        	"mode": {type: "string"}, // StringArray | OneLevelArray | TwoLevelArray
        	"description": {type: "string"},
        	"tooltip": {type: "string"}
        },
	    events : {
	    	valueChange : {}
	    }
	 },
	 
	/*
	 * Retrieves JSON for Element Entry
	 */
	getElement : function(key){
		var rootElements = this.gatherElements();
		for(var i=0;i<rootElements.length;i++){
			if(rootElements[i].key == key) return rootElements[i];
		}
	},
	
	setSpecification : function (spec) {
		this.specification = spec;
		this.getSpecArrayName();
	},
	
	setOptions : function (propertyOptions) {
		this.propertyOptions = propertyOptions;
		this._label.setText("Elements for " + propertyOptions.desc);
	},
	getOptions : function () {
		return this.propertyOptions;
	},

	getSpecArrayName : function () {
		for(var name in this.specification) {
			var firstChild = this.specification[name];
			
			this.specChild = firstChild;
			this.specChildName = name.substring(0,1).toUpperCase() + name.substring(1);
			return;
		}
	},
	
	/*
	 * Retrieves JSON for Item Entry
	 */
	getItem : function(rootElementKey,key){
		for(var i=0;i<this._elementsContent.length;i++){
			if(this._elementsContent[i].key == key && this._elementsContent[i].parentKey==rootElementKey) return this._elementsContent[i];
		}
	},
	/*
	 * Update Element JSON and notify Design Studio IDE
	 */
	updateElement : function(key,rootElement){
		var that = this;
		
		for(var i=0;i<this._elementsContent.length;i++){
			var element = this._elementsContent[i];
			if(!element.leaf && element.key==key){
				this._elementsContent[i] = rootElement;
			}
		}
		that.fireValueChange();
		that.rerenderComp();
	},
	/*
	 * Update Item JSON and notify Design Studio IDE
	 */
	updateItem : function(key){
		var that = this;
		
		for(var i=0;i<this._elementsContent.length;i++){
			var element = this._elementsContent[i];
			if(element.leaf && element.key==key){
				this._elementsContent[i] = this._currentItemConfig;
			}
		}
		that.fireValueChange();
		this.rerenderComp();
		this.closeDetail();
	},
	/*
	 * Displays Element Properties
	 */
	showElementProperties : function(){
		var that = this;
		
		this._rootElementPropertyLayout.destroyContent();
		this._rootElementPropertyList.destroyContent();
		
		this._selectedElementKey = this._listBuilder.getSelectedKey();
		if(!this._selectedElementKey) return;
		var selectedElement = this.getElement(this._selectedElementKey);		
		if(!selectedElement) return;
		
		var items = this.gatherItems(this._selectedElementKey);
		
		if(this.getMode() != "StringArray") {
			var rootElementKey = new sap.ui.commons.Label({text : that.specChild.key.desc});
			rootElementKey.addStyleClass("org-scn-ApsLabelArray");
			this._rootElementPropertyLayout.addContent(rootElementKey);
		} else {
			// no description
		}
		
		var txtElementKey = new sap.ui.commons.TextField({value : selectedElement.key, width: "180px"});
		txtElementKey.addStyleClass("org-scn-ApsInputArray");
		txtElementKey.attachChange(
			function(oControlEvent){
				var value = oControlEvent.getParameter("newValue");
				// Protect Key
				value = that._listBuilder.generateKey(value);
				var rootElement = that.getElement(that._listBuilder.getSelectedKey());
				rootElement.key = value;
				// Update Parent Key references
				for(var i=0;i<that._elementsContent.length;i++){
					var element = that._elementsContent[i];
					if(element.parentKey == that._listBuilder.getSelectedKey() && element.leaf) element.parentKey = value;
				}
				that.updateElement(that._listBuilder.getSelectedKey(),rootElement);
				that._listBuilder.setSelectedKey(value);
				that.showElementProperties();
		}, that);
		this._rootElementPropertyLayout.addContent(txtElementKey);

		if(this.getMode() != "StringArray") {
			var sequence = that.specChild.sequence.split(",");
			for (var parameterIndex in sequence) {
				var parameterName = sequence[parameterIndex];
				
				if(parameterName != "key") {
					var parameterObject = that.specChild[parameterName];
					
					// no arrays here
					if(parameterObject.type == "Array") {
						continue;
					}
					
					var rootElementValue = new sap.ui.commons.Label({text : parameterObject.desc});
					rootElementValue.addStyleClass("org-scn-ApsLabelArray");
					this._rootElementPropertyLayout.addContent(rootElementValue);
					
					//
					var targetValue = selectedElement[parameterName];
					if(targetValue == undefined) {
						targetValue = parameterObject.value;
					}
					
					var txtElementValue = undefined;
					if(parameterObject.apsControl == "checkbox" || parameterObject.type == "boolean") {
						txtElementValue = new sap.ui.commons.CheckBox ({checked : targetValue, width: "280px"});
						
						txtElementValue.attachChange(
							function(oControlEvent){
								var value = oControlEvent.getParameter("checked");
								var key = oControlEvent.getSource()._key;

								var rootElement = that.getElement(that._listBuilder.getSelectedKey());
								rootElement[key] = value;
								
								that.updateElement(that._listBuilder.getSelectedKey(),rootElement);		
						}, that);
					} else if(parameterObject.apsControl == "textarea") {
						txtElementValue = new sap.ui.commons.TextArea({
							// design : sap.ui.core.Design.Monospace,
							rows : 8,
							width : "280px",
							wrapping : sap.ui.core.Wrapping.Off,
							value: targetValue
						});
			
						txtElementValue.attachChange(
								function(oControlEvent){
									var value = oControlEvent.getParameter("newValue");
									var key = oControlEvent.getSource()._key;

									var rootElement = that.getElement(that._listBuilder.getSelectedKey());
									rootElement[key] = value;
									
									that.updateElement(that._listBuilder.getSelectedKey(),rootElement);
							}, that);
					} else if(parameterObject.apsControl == "combobox" && parameterObject.options != undefined) {
						var txtElementValue = new sap.ui.commons.ComboBox({width: "90%"});
						
						for(var i=0;i<parameterObject.options.length;i++){
							var option = parameterObject.options[i];
							txtElementValue.addItem(new sap.ui.core.ListItem({
								key : option.key,
								text : option.key + " | " + option.text
							}));
						}
						
						txtElementValue.setSelectedKey(targetValue);
						
						txtElementValue.attachChange(
								function(oControlEvent){
									var value = oControlEvent.getSource().getSelectedKey();
									var key = oControlEvent.getSource()._key;

									var rootElement = that.getElement(that._listBuilder.getSelectedKey());
									rootElement[key] = value;
									
									that.updateElement(that._listBuilder.getSelectedKey(),rootElement);
							}, that);
					} else if(parameterObject.type == "float" || parameterObject.type == "int") {
						txtElementValue = new sap.ui.commons.TextField ({value : targetValue, width: "200px", textAlign: "Right"});
						
						var typeForCheck = parameterObject.type;

						txtElementValue.attachChange(
								function(oControlEvent){
									var value = oControlEvent.getParameter("newValue");
									var key = oControlEvent.getSource()._key;

									var rootElement = that.getElement(that._listBuilder.getSelectedKey());
									
									if(!isNaN(value)) {
										if (typeForCheck == "float") {
											rootElement[key] = parseFloat(value);	
										} else {
											rootElement[key] = parseInt(value);	
										}
									} else {
										rootElement[key] = value;
									}
									that.updateElement(that._listBuilder.getSelectedKey(),rootElement);
							}, that);
					} else {
						txtElementValue = new sap.ui.commons.TextField ({value : targetValue, width: "280px"});
						
						txtElementValue.attachChange(
							function(oControlEvent){
								var value = oControlEvent.getParameter("newValue");
								var key = oControlEvent.getSource()._key;

								var rootElement = that.getElement(that._listBuilder.getSelectedKey());
								rootElement[key] = value;
								
								that.updateElement(that._listBuilder.getSelectedKey(),rootElement);
						}, that);
					}
					txtElementValue.addStyleClass("org-scn-ApsInputArray");
					txtElementValue._key = parameterName;
					//
					
					this._rootElementPropertyLayout.addContent(txtElementValue);
				}
			}
			
		}

		var arrayDefinition = this.propertyOptions.arrayDefinition;
		
		for(var attrName in arrayDefinition) {
			for (var childName in arrayDefinition[attrName]) {
				if(arrayDefinition[attrName][childName] && arrayDefinition[attrName][childName].type == "Array") {
					arrayDefinition = arrayDefinition[attrName][childName].desc ? arrayDefinition[attrName][childName] : childName;
					break;
				}
			}
		}
		
		var itemsLabel = new sap.ui.commons.Label({text : "Content for " + arrayDefinition});
		itemsLabel.addStyleClass("org-scn-ApsLabelArray");
		var itemsList = new org.scn.community.propertysheet.ListBuilder({
			width : "200px",
			newKeyPrefix : "ITEM",
			newTextPrefix : "Item ",
			list : this.gatherItems(this._listBuilder.getSelectedKey()),
			showDetail : true,
			selectedKey : this._selectedItemKey
		});
		
		itemsList.attachItemAdded(this.addItem,that);
		itemsList.attachItemDeleted(this.delItem,that);
		itemsList.attachItemDetail(this.showItemProperties,that);
		itemsList.attachItemMoved(this.moveItem,that);
		itemsList.attachItemSelected(this.itemSelected,that);
		
		this._rootElementPropertyList.addContent(itemsLabel);
		this._rootElementPropertyList.addContent(itemsList);
	},
	/*
	 * Displays Item Properties in a Popup Panel
	 */
	showItemProperties : function(oControlEvent){
		var that = this;
		
		var detailData = oControlEvent.getParameters();
		this._currentItemConfig = this.getItem(this._listBuilder.getSelectedKey(),detailData.key);
		if(!this._currentItemConfig) return;
		
		var itemDetailPanel = new sap.ui.commons.Panel({
			text : "Item Details",
			showCollapseIcon : false,
			width : "95%"
		});
		itemDetailPanel.addStyleClass("org-scn-ApsPopupPanel");
		var itemDetailLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		
		var sequence = that.specChild.sequence.split(",");
		var childParameterObject = undefined;
		for (var parameterIndex in sequence) {
			var parameterName = sequence[parameterIndex];
			var parameterObject = that.specChild[parameterName];
			
			// no arrays here
			if(parameterObject.type == "Array") {
				childParameterObject = parameterObject;
			}
		}
		sequence = childParameterObject.sequence.split(",");
		
		var itemKey = new sap.ui.commons.Label({text : childParameterObject.key.desc});
		itemKey.addStyleClass("org-scn-ApsLabelArray");
		
		var txtItemKey = new sap.ui.commons.TextField({value : this._currentItemConfig.key, width: "300px"});
		txtItemKey.addStyleClass("org-scn-ApsInputArray");
		
		txtItemKey.attachChange(
			function(oControlEvent){
				var value = oControlEvent.getParameter("newValue");
				// Protect Key
				var allItems = new org.scn.community.propertysheet.ListBuilder();		
				allItems.setList(that._elementsContent);
				var newItemKey = allItems.generateKey(value);
				delete allItems;
				that._currentItemConfig.key = newItemKey;		
		}, that);
		
		itemDetailLayout.addContent(itemKey);
		itemDetailLayout.addContent(txtItemKey);
		
		for (var parameterIndex in sequence) {
			var parameterName = sequence[parameterIndex];
			
			if(parameterName == "parentKey" || parameterName == "key") {
				continue;
			}
			
			var parameterObject = childParameterObject[parameterName];
			
			var itemValue = new sap.ui.commons.Label({text : parameterObject.desc});
			itemValue.addStyleClass("org-scn-ApsLabelArray");
			itemDetailLayout.addContent(itemValue);
			
			var txtItemValue = undefined;
			
			var targetValue = this._currentItemConfig[parameterName];
			if(targetValue == undefined) {
				targetValue = parameterObject.value;
			}
			if(parameterObject.apsControl == "checkbox" || parameterObject.type == "boolean") {
				txtItemValue = new sap.ui.commons.CheckBox ({checked : targetValue, width: "300px"});
				
				txtItemValue.attachChange(
					function(oControlEvent){
						var value = oControlEvent.getParameter("checked");
						var key = oControlEvent.getSource()._key;

						that._currentItemConfig[key] = value;		
				}, that);
			} else if(parameterObject.apsControl == "textarea") {
				txtItemValue = new sap.ui.commons.TextArea({
					// design : sap.ui.core.Design.Monospace,
					rows : 8,
					width : "90%",
					wrapping : sap.ui.core.Wrapping.Off,
					value: targetValue
				});
	
				txtItemValue.attachChange(
					function(oControlEvent){
						var value = oControlEvent.getParameter("newValue");
						var key = oControlEvent.getSource()._key;

						that._currentItemConfig[key] = value;		
				}, that);
			} else if(parameterObject.apsControl == "combobox" && parameterObject.options != undefined) {
				var txtElementValue = new sap.ui.commons.ComboBox({width: "90%"});

				for(var i=0;i<parameterObject.options.length;i++){
					var option = parameterObject.options[i];
					txtElementValue.addItem(new sap.ui.core.ListItem({
						key : option.key,
						text : option.key + " | " + option.text
					}));
				}

				txtElementValue.setSelectedKey(targetValue);

				txtElementValue.attachChange(
						function(oControlEvent){
							var value = oControlEvent.getSource().getSelectedKey();
							var key = oControlEvent.getSource()._key;

							var rootElement = that.getElement(that._listBuilder.getSelectedKey());
							rootElement[key] = value;

							that.updateElement(that._listBuilder.getSelectedKey(),rootElement);
					}, that);
			} else if(parameterObject.type == "float" || parameterObject.type == "int") {
				txtItemValue = new sap.ui.commons.TextField ({value : targetValue, width: "200px", textAlign: "Right"});
				
				var typeForCheck = parameterObject.type;
				
				txtItemValue.attachChange(
					function(oControlEvent){
						var value = oControlEvent.getParameter("newValue");
						var key = oControlEvent.getSource()._key;

						if(!isNaN(value)) {
							if(typeForCheck == "float") {
								that._currentItemConfig[key] = parseFloat(value);
							} else {
								that._currentItemConfig[key] = parseInt(value);	
							}
						} else {
							that._currentItemConfig[key] = value;
						}
				}, that);
			} else {
				txtItemValue = new sap.ui.commons.TextField ({value : targetValue, width: "90%"});
				
				txtItemValue.attachChange(
					function(oControlEvent){
						var value = oControlEvent.getParameter("newValue");
						var key = oControlEvent.getSource()._key;

						that._currentItemConfig[key] = value;		
				}, that);
			}
			txtItemValue.addStyleClass("org-scn-ApsInputArray");
			txtItemValue._key = parameterName;
			
			itemDetailLayout.addContent(txtItemValue);
			
		}

		var detailButtons = new sap.ui.commons.layout.HorizontalLayout({ });
		var closeButton = new sap.ui.commons.Button({
			text : "Cancel"
		});
		var okButton = new sap.ui.commons.Button({
			text : "Update"
		});
		
		closeButton.attachPress(this.closeDetail,that);
		okButton.attachPress(this.updateItem,that);
		
		detailButtons.addContent(closeButton);
		detailButtons.addContent(okButton);
		detailButtons.addStyleClass("org-scn-ApsPopUpButtons");
		
		itemDetailLayout.addContent(detailButtons);
		itemDetailPanel.addContent(itemDetailLayout);
		
		if(!this._popup) {
			this._popup = new sap.ui.core.Popup(itemDetailPanel, true, true, true);
		}
		
		this._popup.setPosition(sap.ui.core.Popup.Dock.CenterTop, sap.ui.core.Popup.Dock.CenterTop, this, "0 0", "fit");
		this._popup.open(250);
	},
	/*
	 * Fires when Element Listbox is selected
	 */
	elementSelected : function(oControlEvent){
		this._selectedElementKey = "";
		if(oControlEvent.getParameters().key) this._selectedElementKey = oControlEvent.getParameters().key;
		this.showElementProperties();
	},
	/*
	 * Fires when Item Listbox is selected
	 */
	itemSelected : function(oControlEvent){
		this._selectedItemKey = "";
		if(oControlEvent.getParameters().key) this._selectedItemKey = oControlEvent.getParameters().key;
	},
	/*
	 * Fires when component is selected or when properties change to re-render
	 */
	rerenderComp : function(){
		this._listBuilder.setList(this.gatherElements());
		this.showElementProperties(this._listBuilder.getSelectedKey());
	},
	
	/**
	 * need to be called once after properties are set..
	 */
	afterInit : function () {
		// mode: StringArray | OneLevelArray | TwoLevelArray
		if(this.getMode() == "StringArray") {
			this._rootElementPropertyList.addStyleClass("org-scn-Aps-DetailList-SingleArray");
		} else if(this.getMode() == "OneLevelArray") {
			this._rootElementPropertyList.addStyleClass("org-scn-Aps-DetailList-SingleArray");
		} else if(this.getMode() == "TwoLevelArray") {
			
		} else {
			throw new Error("Unsupported Mode: " + this.getMode());
		}
	},
	
	/*
	 * Fires when item delete button clicked
	 */
	delItem : function(oControlEvent){
		var that = this;
		
		var rootElementKey = this._listBuilder.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		if(rootElementKey && itemKey) {
			for(var i=0;i<this._elementsContent.length;i++){
				if(this._elementsContent[i].leaf == true && this._elementsContent[i].key == itemKey && this._elementsContent[i].parentKey==rootElementKey) {
					this._elementsContent.splice(i,1);
					that.fireValueChange();
					this.rerenderComp();
				}
			}
		}
		this.rerenderComp();
	},
	/*
	 * Fires when rootElement delete button clicked
	 */
	delElement : function(oControlEvent){
		var that = this;
		
		var key = oControlEvent.getParameter("key");
		if(key) {
			// Delete Element
			for(var i=0;i<this._elementsContent.length;i++){
				if(this._elementsContent[i].leaf == false && this._elementsContent[i].key == key) {
					this._elementsContent.splice(i,1);
				}
			}
			// Delete Items under Element
			for(var i=this._elementsContent.length-1;i>=0;i--){
				if(this._elementsContent[i].leaf == true && this._elementsContent[i].parentKey == key) {
					this._elementsContent.splice(i,1);
				}
			}
			that.fireValueChange();
		}
		this.rerenderComp();
	},
	/*
	 * Fires when item add button clicked
	 */
	addItem : function(oControlEvent){
		var that = this;
		
		var allItems = new org.scn.community.propertysheet.ListBuilder();		
		allItems.setList(this._elementsContent);
		var newItemKey = allItems.generateKey(this._listBuilder.getSelectedKey() + "_ITEM");
		delete allItems;
		var rootElementItems = new org.scn.community.propertysheet.ListBuilder();
		rootElementItems.setList(this._elementsContent);
		var newItem = { 
			parentKey : this._listBuilder.getSelectedKey(),
			key : newItemKey, 
			leaf: true 
		};
		this._elementsContent.push(newItem);
		that.fireValueChange();
		this.rerenderComp();
	},
	/*
	 * Fires when rootElement add button clicked
	 */
	addElement : function(oControlEvent){
		var that = this;
		
		// in this array style, only one element is possible
		if(this.propertyOptions.ztlFunction == "-single") {
			if(this._elementsContent.length == 1) {
				return;
			}
		}
		
		var newKey = this._listBuilder.generateKey("ELEMENT");
		var newElement = { 
			parentKey : "ROOT",
			key : newKey,
			leaf: false 
		};
		this._listBuilder.setSelectedKey(newKey);
		this._elementsContent.push(newElement);

		// that.fireValueChange();
		this.rerenderComp();
	},
	/*
	 * Fires when rootElement up or down button clicked
	 */
	moveElement : function(oControlEvent){
		var that = this;
		
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		for(var i=0;i<this._elementsContent.length;i++){
			if(this._elementsContent[i].key == movementData.key && !this._elementsContent[i].leaf) sourceIndex = i;
			if(this._elementsContent[i].key == movementData.targetKey && !this._elementsContent[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = this._elementsContent[targetIndex];
			this._elementsContent[targetIndex] = this._elementsContent[sourceIndex];
			this._elementsContent[sourceIndex] = temp;
			that.fireValueChange();
			this.rerenderComp();
		}
	},
	/*
	 * Close Item Properties Popup
	 */
	closeDetail : function(oControlEvent){
		if(this._popup) {
			this._popup.close();
			this._popup.destroy();
			delete this._popup;
		}
		
	},
	/*
	 * Fires when item up or down button clicked
	 */
	moveItem : function(oControlEvent){
		var that = this;
		
		var movementData = oControlEvent.getParameters();
		var targetIndex = -1;
		var sourceIndex = -1;
		var rootElementKey = this._listBuilder.getSelectedKey();
		var itemKey = oControlEvent.getParameter("key");
		for(var i=0;i<this._elementsContent.length;i++){
			if(this._elementsContent[i].key == itemKey && this._elementsContent[i].parentKey == rootElementKey && this._elementsContent[i].leaf) sourceIndex = i;
			if(this._elementsContent[i].key == movementData.targetKey && this._elementsContent[i].parentKey == rootElementKey && this._elementsContent[i].leaf) targetIndex = i;
		}
		if(targetIndex != -1 && sourceIndex != -1){
			var temp = this._elementsContent[targetIndex];
			this._elementsContent[targetIndex] = this._elementsContent[sourceIndex];
			this._elementsContent[sourceIndex] = temp;
			that.fireValueChange();
			this.rerenderComp();
		}
	},
	/*
	 * Convenience Function to return only entries that are Elements
	 */
	gatherElements : function(){
		var rootElements = [];
		for(var i=0;i<this._elementsContent.length;i++){
			if(this._elementsContent[i].leaf==false) rootElements.push(this._elementsContent[i]);
		}
		return rootElements;
	},
	/*
	 * Convenience Function to return only entries that are Items (Leafs)
	 */
	gatherItems : function(rootElementKey){
		var items = [];
		for(var i=0;i<this._elementsContent.length;i++){
			if(this._elementsContent[i].leaf==true && this._elementsContent[i].parentKey==rootElementKey) items.push(this._elementsContent[i]);
		}
		return items;
	},
	/*
	 * Property Sheet Initialization
	 */
	init : function(){
		if(sap.ui.commons.layout.VerticalLayout.prototype.init) {
			sap.ui.commons.layout.VerticalLayout.prototype.init.apply(this,arguments);	
		}

		var that = this;
		
		this._elementsContent = [];
		this._selectedElementKey = "";
		this._selectedItemKey = "";
		this._currentItemConfig = {};

		this._label = new sap.ui.commons.Label({text: "Elements for " + that.getDescription()});
		this._label.addStyleClass("org-scn-ApsLabel");
		this.addContent(this._label);
		
		this._hLayout = new sap.ui.commons.layout.HorizontalLayout({ });
		this.addContent(this._hLayout);
		this._listBuilder = new org.scn.community.propertysheet.ListBuilder({
			width : "200px"
		});
		
		this._listBuilder.attachItemAdded(this.addElement,that);
		this._listBuilder.attachItemDeleted(this.delElement,that);
		this._listBuilder.attachItemMoved(this.moveElement,that);
		this._listBuilder.attachItemSelected(this.elementSelected,that);
		
		this._rootElementPropertyLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "300px"
		});
		this._rootElementPropertyList = new sap.ui.commons.layout.VerticalLayout({
			width : "200px"
		});
		this._rootElementPropertyLayout.addStyleClass("org-scn-ApsDoubleArrayVertical");
		this._rootElementPropertyList.addStyleClass("org-scn-ApsDoubleArrayVertical");

		this._hLayout.addContent(this._listBuilder);
		this._hLayout.addContent(this._rootElementPropertyLayout);
		this._hLayout.addContent(this._rootElementPropertyList);
		
		this._hLayout.addStyleClass("org-scn-ApsDoubleArray");
	},

	setValue : function(o){
		var s = [];
		if(o && o!="") s = jQuery.parseJSON(o);
		
		if(this.getMode() == "StringArray") {
			var newObj = [];
			for (var index in s) {
				var entry = s[index];
				
				var newEntry = {};
				newEntry.key = entry;
				newEntry.leaf = false;
				newEntry.parentKey = "ROOT";

				newObj.push(newEntry);
			}
			this._elementsContent = newObj;
		} else {
			this._elementsContent = s;
		}
		this.rerenderComp();
	},

	getValue : function(){
		if(this.getMode() == "StringArray") {
			var retObj = [];
			for (var index in this._elementsContent) {
				var entry = this._elementsContent[index];
				
				var key = entry.key;
				retObj.push(key);
			}
			return JSON.stringify(retObj);
		} else {
			return JSON.stringify(this._elementsContent);	
		}
	},
	
	needsLabel : function() {
		return false;
	}
});

/**
 * List Builder SAPUI5 Extension
 * @author Mike Howles
 * Used for Additional Properties Panel to aid in working with array-like properties
 * Built to be reusable
 *   
 */
sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.propertysheet.ListBuilder",{
	renderer : {},
	metadata : {
		properties : {
			list : [],
			selectedKey : "",
			selectedIndex : -1,
			showDetail : false
		},
		events : {
			itemSelected : {},
			itemsChanged : {},
			itemAdded : {},
			itemDeleted : {},
			itemMoved : {},
			itemDetail : {}
		}
	},
	setList : function(a){
		this._list = a;
		this._listBox.destroyItems();
		for(var i=0;i<this._list.length;i++){
			var item = a[i];
			var key = item;
			if(item.key) key = item.key;
			var text = key;
			if(item.text) text = item.text;
			this._listBox.addItem(new sap.ui.core.Item({
				key : key,
				text : text
			}));
		}
		this._listBox.setSelectedKeys([this._lastKey]);
	},
	setShowDetail : function(b){
		if(b){
			this._tools.addContent(this._btnDetail);
		}else{
			this._tools.removeContent(this._btnDetail);
		}
	},
	getShowDetail : function(){
		return this._showDetail
	},
	getSelectedKey : function(){
		var key = "";
		var item = this._listBox.getSelectedItem();
		if(item) key = item.getKey();
		return key;
	},
	setSelectedKey : function(key){
		this._lastKey = key;
		this._listBox.setSelectedKeys([this._lastKey]);
	},
	getList : function(){
		return this._list;
	},
	itemSelect : function(oControlEvent){
		var si = this._listBox.getSelectedIndex();
		var item = this._listBox.getSelectedItem();
		var key = "";
		if(item) key = item.getKey();
		this._lastKey = key;
		this.fireItemSelected({
			key : key,
			ordinalPosition : si
		});
	},
	upClicked : function(oControlEvent){
		var si = this._listBox.getSelectedIndex();
		if(si==-1) return;
		if(si==0) return;
		var item = this._listBox.getSelectedItem();
		this.fireItemMoved({
			key : item.getKey(),
			targetKey : this._listBox.getItems()[si-1].getKey(),
			ordinalPosition : si,
			direction : "up"
		});
	},
	downClicked : function(oControlEvent){
		var si = this._listBox.getSelectedIndex();
		if(si==-1) return;
		if(si>=this._list.length-1) return;
		var item = this._listBox.getSelectedItem();
		this.fireItemMoved({
			key : item.getKey(),
			targetKey : this._listBox.getItems()[si+1].getKey(),
			ordinalPosition : si,
			direction : "down"
		});
	},
	addClicked : function(oControlEvent){
		this.fireItemAdded();
	},
	detailClicked : function(oControlEvent){
		var si = this._listBox.getSelectedIndex();
		if(si==-1) return;
		var item = this._listBox.getSelectedItem();
		this.fireItemDetail({
			key : item.getKey(),
			ordinalPosition : si
		});
	},
	delClicked : function(oControlEvent){
		var si = this._listBox.getSelectedIndex();
		if(si==-1) return;
		var item = this._listBox.getSelectedItem();
		this.fireItemDeleted({
			key : item.getKey(),
			ordinalPosition : si
		});
	},
	generateKey : function(prefix, index){
		// Key protection
		var match = true;
		var serial = 0;
		var candidate;
		while(match){
			match = false;
			candidate = prefix + ((serial==0)?"":serial);
			for(var i=0;i<this._list.length;i++){
				if(this._list[i].key == candidate && i!= index){
					match = true;
					serial++;
				}
			}
		}
		return candidate;
	},
	init : function(){
		this._list = [];
		this._tools = new sap.ui.commons.layout.HorizontalLayout({});
		this._listBox = new sap.ui.commons.ListBox({
			width : "100%"
		});
		this._btnAdd = new sap.m.Button({
			icon : "sap-icon://add"
		});
		this._btnDel = new sap.m.Button({
			icon : "sap-icon://delete",
		});
		this._btnUp = new sap.m.Button({
			icon : "sap-icon://arrow-top"
		});
		this._btnDown = new sap.m.Button({
			icon : "sap-icon://arrow-bottom"
		});
		this._btnDetail = new sap.m.Button({
			icon : "sap-icon://inspection"
		});
		// Add Event Listeners
		this._btnAdd.attachBrowserEvent("click",this.addClicked,this);
		this._btnDel.attachBrowserEvent("click",this.delClicked,this);
		this._btnUp.attachBrowserEvent("click",this.upClicked,this);
		this._btnDown.attachBrowserEvent("click",this.downClicked,this);
		this._btnDetail.attachBrowserEvent("click",this.detailClicked,this);
		this._listBox.attachSelect(this.itemSelect,this);
		// Build UI
		this._tools.addContent(this._btnAdd);
		this._tools.addContent(this._btnDel);
		this._tools.addContent(this._btnUp);
		this._tools.addContent(this._btnDown);
		this.addContent(this._tools);
		this.addContent(this._listBox);
	}
});