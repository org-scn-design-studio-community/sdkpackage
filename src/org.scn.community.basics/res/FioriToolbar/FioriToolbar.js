/**
 * Copyright 2014 SCN Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/sap-design-studio-free-addons/sdk-package
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
 * 
 */
/**
 *	Description Here 
 */
jQuery.sap.require("sap.m.Toolbar");
sap.m.Toolbar.extend("org.scn.community.basics.FioriToolbar", {
	_itemConfig : [],
	_selectedItem : "",
	_selectedHeader : "",
	renderer : {},
	metadata : {				// Not to be confused with the Data Source metadata property
		properties : {
			itemConfig : "string",	// JSON section/items config from Design Studio
			selectedItem : "string",
			selectedItemKey : "string",
			selectedHeader : "string",
			selectedHeaderKey : "string"
		}
	},
	initDesignStudio : function() {
		// Called by sap.designstudio.sdkui5.Handler  (sdkui5_handler.js)
	},
	dsClick : function(oControlEvent){
		this.fireDesignStudioEvent("onnav");
	},
	setSelectedItem : function(s){
		this._selectedItem = s;
	},
	setSelectedItemKey : function(s){
		this._selectedItemKey = s;
	},
	getSelectedItem : function(){
		return this._selectedItem;
	},
	getSelectedItemKey : function(){
		return this._selectedItemKey;
	},
	setSelectedHeader : function(s){
		this._selectedHeader = s;
	},
	setSelectedHeaderKey : function(s){
		this._selectedHeaderKey = s;
	},
	getSelectedHeader : function(){
		return this._selectedHeader;
	},
	getSelectedHeaderKey : function(){
		return this._selectedHeaderKey;
	},
	setItemConfig : function(s){
		var o = [];
		if(s && s!="") o = jQuery.parseJSON(s);
		this._itemConfig = o;
		this.redraw();
		return this;
	},
	getItemConfig : function(){
		return JSON.stringify(this._itemConfig);
	},
	redraw : function(){
		this.destroyContent();
		for(var i=0;i<this._itemConfig.length;i++){
			var title = "";
			var actualTitle = this._itemConfig[i].text;
			if(this._itemConfig[i].showTitle) title = actualTitle;
			var b = new sap.m.Button({
				text : title,
				icon : this._itemConfig[i].icon
			});
			if(this._itemConfig[i].type) b.setType(this._itemConfig[i].type);
			this.addContent(b);
			var items = this._itemConfig[i].items || [];
			if(items.length<=0){	// Single button
				b.attachBrowserEvent("click",function(o){
					return function(oControlEvent){
						this._selectedItem = o.headerTitle;
						this._selectedItemKey = o.headerKey;
						this._selectedHeader = o.headerTitle;
						this._selectedHeaderKey = o.headerKey;
						this.fireDesignStudioPropertiesChanged(["selectedHeader","selectedItem","selectedHeaderKey","selectedItemKey"]);
						this.fireDesignStudioEvent("onitemselect");
					};
				}({
					headerTitle : actualTitle,
					headerKey : this._itemConfig[i].key
				}),this);

			}else{	// Action Sheet
				// Event Handler definition
				var clickHandler = function(index){
					return function(oControlEvent){
						var items = this._itemConfig[index].items;
						var actionSheet = new sap.m.ActionSheet({
							title :  this._itemConfig[index].text,
							placement : "Vertical",
						});
						for(var j=0;j<items.length;j++){
							var item = items[j];
							var actionButton = new sap.m.Button({
								text : item.text,
							    icon : item.icon
							});
							actionButton.attachBrowserEvent("click",function(it,section){
								return function(oControlEvent){
									this._selectedItem = it.text;
									this._selectedItemKey = it.key;
									this._selectedHeader = section.text;
									this._selectedHeaderKey = section.key;
									this.fireDesignStudioPropertiesChanged(["selectedHeader","selectedItem","selectedHeaderKey","selectedItemKey"]);
									this.fireDesignStudioEvent("onitemselect");
								};
							}(item,this._itemConfig[index]),this);
							actionSheet.addButton(actionButton);
						}
						actionSheet.openBy(this.getContent()[index]);
					};
				}(i);
				// Desktop Support
				b.attachBrowserEvent("click",clickHandler,this);
				// Mobile Support
				b.attachPress(clickHandler,this);
			}
		}
	},
	init : function(){
		sap.m.Toolbar.prototype.init.apply(this,arguments);
		this.addStyleClass("DesignStudioSCN");
		this.addStyleClass("FioriToolbar");
	}
});