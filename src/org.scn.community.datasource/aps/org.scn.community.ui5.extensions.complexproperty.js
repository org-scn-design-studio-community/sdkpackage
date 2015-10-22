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
	id : "complexproperty",
	serialized : true,
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
		alert(0);
		newValue = JSON.stringify(arrayValue);
		alert("ci new value: " +newValue);
		return newValue;
	},
	createComponent : function(property, propertyOptions, changeHandler){
		var component = new org.scn.community.aps.ComplexProperty({
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
sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.ComplexProperty", {
	renderer : {},
	needsLabel : function() {
		return false;
	},
	metadata : {                             
        properties : {
        	value : { 
        		type : "object",
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
		this.generateFields();
		this.updateFields();
		return this;
	},
	getConfig : function(){
		return sap.ui.core.Control.prototype.getProperty.apply(this,["config"]);
	},
	setValue : function(o){
		sap.ui.core.Control.prototype.setProperty.apply(this,["value",o]);
		this.updateFields();
		return this;
	},
	getValue : function(){
		return sap.ui.core.Control.prototype.getProperty.apply(this,["value"]);
	},
	updateFields : function(){
		var o = this.getValue();
		var c = this.getConfig();
		for(var field in o){
			if(this["cmp_" + field] && this["cmp_" + field]){
				for(var i=0;i<propertyPageHandlerRegistry.length;i++){
					var handler = propertyPageHandlerRegistry[i];
					if(handler.id == c[field].apsControl) {
						var value;
						// Fake serialized APS property for reuse.
						if(handler.serialized){
							value = JSON.stringify(o[field]);
						}else{
							value = o[field];
						}
						handler.setter.call(this, field, value);
					}
				}
			}
		}
		// this.apsModel.setData({propertyData: this.getValue()});
		// this.columnTable.setModel(this.apsModel);
		// this.columnTable.bindRows("/propertyData");
	},
	generateFields : function(){
		this.destroyContent();
		this.components = {};
		var config = this.getConfig();
		for(var field in config){
			var item = config[field];
			var control;
			for(var i=0;i<propertyPageHandlerRegistry.length;i++){
				var reg = propertyPageHandlerRegistry[i];
				if(reg.id == item.apsControl) {
					var getHandler = function(property, apsControl){
						return function(oControlEvent){
							var newValue;
							/**
							 * Scan handler registry
							 */
							for(var i=0;i<propertyPageHandlerRegistry.length;i++){
								var handler = propertyPageHandlerRegistry[i];
								if(handler.id == apsControl) {
									newValue = handler.getter.call(this, property, oControlEvent.getSource());
									if(handler.serialized){
										if(newValue && newValue !=""){
											newValue = jQuery.parseJSON(newValue);
										}else{
											newValue = null;
										}
									}
								}
							}
							var v = this.getValue();
							v[property] = newValue;
							this.setValue(v);
							this.fireValueChange();							
						};
					}(field, item.apsControl);
					control = reg.createComponent.call(this, field, item, getHandler);
					this["cmp_" + field] = control;
				}
			}
			var property = field;
			// assure there is a control! Make text Area
			if(this["cmp_"+property] == undefined){
				this["cmp_"+property] = new sap.ui.commons.TextArea({
					design : sap.ui.core.Design.Monospace,
					rows : 20,
					width : "100%",
					wrapping : sap.ui.core.Wrapping.Off
				});
				this["cmp_"+property].attachChange(getHandler,this);
			}
			
			// Step 3a, if component has afterInit method, call it!
			
			if(this["cmp_"+property].afterInit) {
				this["cmp_"+property].afterInit();	
			}
			
			// Step 4, add control to layout
			//etcLayout.addContent(this.hLabel(property,this["cmp_"+property]));
			var useLabel = true;
			if(this["cmp_"+property].needsLabel) {
				useLabel = this["cmp_"+property].needsLabel();	
			}
			
			if(useLabel){
				this.addContent(this.hLabel(item.desc || property,this["cmp_"+property]));
			}else{
				this.addContent(this["cmp_"+property]);
			}
		}
		return;
	},
	hLabel : function(label,component){
		var hLayout = new sap.ui.commons.layout.HorizontalLayout({})
		hLayout.addContent(new sap.ui.commons.TextView({ text : label, width : "180px"}));
		hLayout.addContent(component);
		return hLayout;
	},
	init : function(){
				
	},	 
	renderer : {},
	needsLabel : function() {
		return false;
	}
});