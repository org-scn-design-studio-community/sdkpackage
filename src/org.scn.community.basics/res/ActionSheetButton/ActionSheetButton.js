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
 * Based on from original version by Mike Howles, blogged here: 
 * (http://scn.sap.com/community/businessobjects-design-studio/blog/2014/10/09/design-studio-sdk-13--popover-buttons)
 * 
 */
jQuery.sap.require("sap.m.Button");
jQuery.sap.require("sap.m.ActionSheet");
sap.m.Button.extend("org.scn.community.basics.ActionSheetButton", {
	_buttonType : "",
	_title : "",
	_popover : null,
	_placement : "Auto",
	_showHeader : true,
	_popoverWidth : "auto",
	_popoverHeight : "auto",
	_selectedItem : "",
	_selectedKey : "",
	_items : [],
	renderer : {},
	metadata : {				// Not to be confused with the Data Source metadata property
		properties : {
			title : "string",			// Button Title
			buttonType : "string",		// 'type' in sap.m, but DS messes with it
			placement : "string",		// Popover placement
			items : "string",			// Popover List
			selectedItem : "string",	// Selected Popover Item (Text)
			selectedKey : "string"		// Selected Popover Item (Key)
		}
	},
	setType : function(s){
		if(s=="sdkui5") return; // Fix 1.3 SP0 bug '"sdkui5" is not a valid entry of the enumeration for property "type" of Element'
		sap.m.Button.prototype.setType.apply(this,arguments);		
	},
	setSelectedItem : function(s){
		this._selectedItem = s;
	},
	getSelectedItem : function(){
		return this._selectedItem;
	},
	setSelectedKey : function(s){
		this._selectedKey = s;
	},
	getSelectedKey : function(){
		return this._selectedKey;
	},
	setItems : function(s){
		this._items = [];
		if(s && s!="") this._items = jQuery.parseJSON(s);
	},
	getItems : function(){
		return JSON.stringify(this._items);
	},
	setTitle : function(s){
		this._title = s;
	},
	getTitle : function(){
		return this._title;
	},
	setPlacement : function(s){
		this._placement = s;
	},
	getPlacement : function(){
		return this._placement;
	},
	setButtonType : function(s) {
		this._buttonType = s;
		this.setType(this._buttonType);
	},
	getButtonType : function(){
		return this._buttonType;
	},
	initDesignStudio : function() {
		// Called by sap.designstudio.sdkui5.Handler  (sdkui5_handler.js)
	},
	listSelect : function(o,oControlEvent){
		if(this._popover){
			this._popover.close();
		}
		this._selectedItem = o.text;
		this._selectedKey = o.key;
		this.fireDesignStudioPropertiesChanged(["selectedItem","selectedKey"]);
		this.fireDesignStudioEvent("onPopoverSelect");
	},
	dsClick : function(oControlEvent){
		if(this._popover) this._popover.destroy();
		this._popover = new sap.m.ActionSheet({
			title : this._title,
			placement : this._placement
		});
		for(var i=0;i<this._items.length;i++){
			var item = this._items[i];
			var actionButton = new sap.m.Button({
				text : item.text,
			    //type : sap.m.ListType.Active,
			    icon : item.icon
			});
			actionButton.attachBrowserEvent("click",
			function(o){return function(oControlEvent){this.listSelect(o,oControlEvent);};}({
				key : item.key,
				text : item.text
			}),this);
			this._popover.addButton(actionButton);
		};
		this._popover.openBy(this);
	},
	init : function(){
		sap.m.Button.prototype.init.apply(this,arguments);
		this.attachBrowserEvent("click",this.dsClick,this);
	}
});