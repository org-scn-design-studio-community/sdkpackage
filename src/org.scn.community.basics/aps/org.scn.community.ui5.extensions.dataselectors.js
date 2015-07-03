/**
 * CC BY-NC-SA License
 * Advanced APS Data Selectors by Mike Howles is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. 
 */
var propertyPageHandlerRegistry = propertyPageHandlerRegistry || [];
/**
 * Register Handler
 */
propertyPageHandlerRegistry.push({
	id : "measureselector",
	setter : function(property, value){
		var newValue = jQuery.parseJSON(value);
		this["cmp_"+property].setValue(newValue);
	},
	getter : function(property, control){
		var arrayValue = control.getValue();
		newValue = JSON.stringify(arrayValue);
		return newValue;
	},
	createComponent : function(property, propertyOptions, changeHandler){
		var component = new org.scn.community.aps.MeasureSelector({
			width : "100%",
			title : new sap.ui.commons.Title({
				text: propertyOptions.desc
			}),
			showCollapseIcon : false
		});
		component.attachValueChange(changeHandler ,this);
		return component;
	}
});
/**
 * Measure List
 */
sap.ui.commons.ComboBox.extend("org.scn.community.aps.MeasureList",{
	metadata :{
		properties : { }
	},
	init : function(){
		this.setDisplaySecondaryValues(true);
		propertyPage.registerDataComponent(this);
		if(propertyPage.rendered) this.notifyDataChange();	
	},
	notifyDataChange : function(){
		this.destroyItems();
		if(propertyPage && propertyPage.flatData){
			for(var i=0;i<propertyPage.flatData.columnHeadersKeys.length;i++){
				var key = propertyPage.flatData.columnHeadersKeys[i];
				var text = propertyPage.flatData.columnHeaders[i];
				if(key){
					var newItem = new sap.ui.core.ListItem({
						key : key,
						text : text || key,
						additionalText : key
					});
					this.addItem(newItem);
				}
			}
		}
	},
	renderer : {}
});
/**
 * Create UI5 Extension
 */
org.scn.community.aps.ComplexItem.extend("org.scn.community.aps.MeasureSelector", {
	metadata : {
	},
	/*
	 * Overrides parent
	 */
	hLabel : function(label,component,tt){
		if(component instanceof org.scn.community.aps.ColorBuilder){
			return component;
		}else{
			var hLayout = new sap.ui.commons.layout.HorizontalLayout({})
			//hLayout.addStyleClass("MeasureSelectorLayout");
			hLayout.addContent(new sap.ui.commons.Label({ text : label, tooltip : tt, width:"100px"}));
			hLayout.addContent(component);	
			return hLayout;			
		}
	},
	_config : { },
	setValue : function(value){
		var deltas = ["fieldType"];
		var oldValues = [];
		for(var i=0;i<deltas.length;i++){
			oldValues.push(this.getValue()[deltas[i]]);
		}
		org.scn.community.aps.ComplexItem.prototype.setValue.apply(this,arguments);
		var changed = false;
		for(var i=0;i<deltas.length;i++){
			if(oldValues[i]!=this.getValue()[deltas[i]]) changed = true;
		}
		if(changed) {
			this.makeLayout();
			this.layoutComponents();
		}
	},
	createComponents : function(){
		this.tooltips = {
			fieldType : "Type of Field Mapping.",
			fieldName : "Name of the Field to Map",
			fieldPosition : "Position of field starting at index of 0"
		};
		try{
		this.cmps.fieldType = new sap.ui.commons.ComboBox({
			width : "100px",
			items :[
			new sap.ui.core.ListItem({ key : "unassigned", text : "Unassigned" }),
		    new sap.ui.core.ListItem({ key : "name", text : "By Name" }),
  	        new sap.ui.core.ListItem({ key : "position", text : "By Position" })
		]});
		this.cmps.fieldType.attachChange(function(e){
			this.makeLayout();
			this.layoutComponents();
		},this);
		this.cmps.fieldName = new org.scn.community.aps.MeasureList({
			width : "100px"
		});
		this.cmps.fieldPosition = new org.scn.community.aps.Spinner({ 
			width : "100px",
			min : 0, max : 100 
		});
		this.makeLayout();
		this.layoutComponents();
		}catch(e){
			alert(e);
		}
	},
	makeLayout : function(){
		this.layout = [];
		this.layout.push({ desc :"Field Type", comp : "fieldType"});
		if(this.cmps.fieldType.getSelectedKey() == "name"){
			this.layout.push({ desc :"Field Name", comp : "fieldName"});
		}
		if(this.cmps.fieldType.getSelectedKey() == "position"){
			this.layout.push({ desc :"Field Position", comp : "fieldPosition"});
		}
	},
	renderer : {}
});