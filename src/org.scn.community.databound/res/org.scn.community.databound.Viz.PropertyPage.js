sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.Viz.PropertyPage", function() {
	var that = this;
	this.generateStructure = function(category,parentComponent){
		var arrL = category.split("-");
		var catChain = "";
		var sep="";
		var parent = this.content;
		for(var j=0;j<arrL.length;j++){
			catChain += sep + arrL[j];
			sep="-";
			if(!this.layouts[catChain]){
				this.tabstrips[catChain] = new sap.ui.commons.TabStrip({
					width : "100%"
				});
				this.layouts[catChain] = new sap.ui.commons.layout.VerticalLayout({
					width : "100%"
				});
				this.tabstrips[catChain].createTab(arrL[j],this.layouts[catChain]);
				parent.createTab(arrL[j],this.tabstrips[catChain]);
			}
			parent = this.tabstrips[catChain];
		}
	}
	/**
	 * Design Studio Events
	 */
	this.init = function(){
		try{
		var propMetadata = this.callRuntimeHandler("getPropertyMetaData");
		// Build UI
		this.content = new sap.ui.commons.TabStrip({
			width : "100%"
		});
		this.metaProps = jQuery.parseJSON(propMetadata);
		this.props = {};
		this.tabstrips = {
			//"General" : this.content
		};
		this.layouts = {
			/*"General": new sap.ui.commons.layout.VerticalLayout({
				width : "100%"
			})*/
		};
		//this.content.createTab("General",this.layouts["General"]);
		var template = [/*"General","Cosmetics","Legend","Tooltips","Mapping"*/];
		for(var i=0;i<template.length;i++) this.generateStructure(template[i],this.content);
		//this.generateStructure("testing",this.content);
		var hier = {};
		for(var prop in this.metaProps){
			var property = this.metaProps[prop].name;
			var propertyOptions = this.metaProps[prop].opts;
			var apsControl = propertyOptions.apsControl;
			var category = propertyOptions.cat || "etc";
			this.generateStructure(category,this.content);
			if(!this[property]){
				this.props[property] = {
					value : null
				};
				// Step 1, create getter/setter
				this[property] = function(property,apsControl,onSet){
					return function(value){
						if(value===undefined){
							return this.props[property].value;
						}else{
							if(onSet) {
								value = this.callRuntimeHandler("callOnSet",property,value.replace(/(\n|\r\n)/g,"__n__"));
							}
							this.props[property].value = value;
							if(apsControl=="text" || !apsControl){
								this["cmp_"+property].setValue(value);	
							}
							if(apsControl=="textbox"){
								this["cmp_"+property].setValue(value);	
							}
							if(apsControl=="mapdownload"){
								this["cmp_"+property].setMapData(value);	
							}
							if(apsControl=="checkbox"){
								this["cmp_"+property].setChecked(Boolean(value));	
							}
							if(apsControl=="spinner"){
								this["cmp_"+property].setValue(value);
							}
							if(apsControl=="palette"){
								this["cmp_"+property].setColors(value);
							}
							if(apsControl=="combobox"){
								this["cmp_"+property].setSelectedKey(value);
							}
							if(apsControl=="color"){
								this["cmp_"+property].setBackgroundColor(value);
							}
							return this;
						}
					};
				}(property,apsControl,propertyOptions.onSet);
				// Step 2, create component event handler
				var f = function(property,apsControl){
					return function(oControlEvent){
						var newValue;
						if(apsControl=="text" || apsControl==null){
							newValue = oControlEvent.getSource().getValue();
						}
						if(apsControl=="textbox"){
							newValue = oControlEvent.getSource().getValue();
						}
						if(apsControl=="mapdownload"){
							newValue = oControlEvent.getSource().getMapData();
						}
						if(apsControl=="checkbox"){
							newValue = oControlEvent.getSource().getChecked();
						}
						if(apsControl=="spinner"){
							newValue = oControlEvent.getSource().getValue();
						}
						if(apsControl=="palette"){
							newValue = oControlEvent.getSource().getColors();
						}
						if(apsControl=="combobox"){
							newValue = oControlEvent.getSource().getSelectedKey();
						}
						if(apsControl=="color"){
							newValue = oControlEvent.getSource().getBackgroundColor();
						}
						this.props[property].value = newValue;
						this.firePropertiesChanged([property]);
					};
				}(property,apsControl);
				// Step 3, create component
				if(apsControl == "text" || !apsControl){
					this["cmp_"+property] = new sap.ui.commons.TextField({
						value : ""
					});
					this["cmp_"+property].attachChange(f,this);
				}
				if(apsControl == "textbox"){
					this["cmp_"+property] = new sap.ui.commons.TextArea({
						design : sap.ui.core.Design.Monospace,
						rows : 20,
						width : "100%",
						wrapping : sap.ui.core.Wrapping.Off
					});
					this["cmp_"+property].attachChange(f,this);
				}
				if(apsControl == "mapdownload"){
					this["cmp_"+property] = new org.scn.community.aps.MapDownloader({
						width : "100%",
						title : new sap.ui.commons.Title({
							text: propertyOptions.desc
						}),
						tooltip: this.metaProps[prop].tooltip,
						showCollapseIcon : false,
						showAlpha : false,
						showRatios : false
					});
					this["cmp_"+property].attachMapDataChange(f,this);
				}
				if(apsControl == "checkbox"){
					this["cmp_"+property] = new sap.ui.commons.CheckBox();
					this["cmp_"+property].attachChange(f,this);
				}
				if(apsControl == "spinner"){
					this["cmp_"+property] = new org.scn.community.aps.Spinner({
						min : 0,
						max : 100
					 });
					this["cmp_"+property].attachValueChange(f,this);
				}
				if(apsControl == "combobox"){
					this["cmp_"+property] = new sap.ui.commons.ComboBox({});
					if(propertyOptions.options && propertyOptions.options.length>0){
						for(var i=0;i<propertyOptions.options.length;i++){
							var option = propertyOptions.options[i];
							this["cmp_"+property].addItem(new sap.ui.core.ListItem({
								key : option.key,
								text : option.text || option.key
							 }));
						}
					}
					this["cmp_"+property].attachChange(f,this);
				}
				if(apsControl == "palette"){
					this["cmp_"+property] = new org.scn.community.aps.ColorBuilder({
						width : "100%",
						title : new sap.ui.commons.Title({
							text: propertyOptions.desc
						}),
						tooltip: this.metaProps[prop].tooltip,
						showCollapseIcon : false,
						showAlpha : false,
						showRatios : false
					});
					this["cmp_"+property].attachColorChange(f,this);
				}
				if(apsControl == "color"){
					this["cmp_"+property] = new org.scn.community.aps.ColorPicker({
						showAlpha : false
					});
					this["cmp_"+property].attachColorChange(f,this);
				}
				// Step 4, add control to layout
				//etcLayout.addContent(this.hLabel(property,this["cmp_"+property]));
				var useLabel = true;
				if(apsControl == "palette" || apsControl == "mapdownload") useLabel = false;
				if(useLabel){
					this.layouts[category].addContent(this.hLabel(propertyOptions.desc || property,this["cmp_"+property]));
				}else{
					this.layouts[category].addContent(this["cmp_"+property]);
				}
				
			}else{
				alert(property + " found here.");
			}
			
		}
		}catch(e){
			alert("Problem during initialization of property sheet.\n\n"+e);
		}
		/*
		 * Remove empty tab strips stubs
		 */
		for(var tabstrip in this.tabstrips){
			var ts = this.tabstrips[tabstrip];
			var tabs = ts.getTabs();
			for(var i=0;i<tabs.length;i++){
				var tabContent = tabs[i].getContent();
				var keep = false;
				var contentLength = 0;
				if(tabContent[0] instanceof sap.ui.commons.layout.VerticalLayout){
					contentLength = tabContent[0].getContent().length;
				}
				if(tabContent[0] instanceof sap.ui.commons.TabStrip){
					contentLength = tabContent[0].getTabs().length;
					//if(contentLength>0) alert(contentLength + tabContent[0].getTabs()[0]);
				}
				if(contentLength>0) keep = true;
				if(!keep){
					ts.removeTab(tabs[i]);
				}
			}
		}
		this.content.placeAt("content");
		// Clean up any empty master tabs
		/*
		for(var tabstrip in this.tabstrips){
			var ts = this.tabstrips[tabstrip];
			var tabs = ts.getTabs();
			if(tabs.length==0){
				try{
					this.content.removeTab(ts);	
				}catch(e){
					alert(e);
				}
				
			}
		}*/
	};
	this.hLabel = function(label,component){
		var hLayout = new sap.ui.commons.layout.HorizontalLayout({})
		hLayout.addContent(new sap.ui.commons.TextView({ text : label, width : "150px"}));
		hLayout.addContent(component);
		return hLayout;
	}
});