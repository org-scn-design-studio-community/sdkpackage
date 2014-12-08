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
	_items : [],
	renderer : {},
	metadata : {				// Not to be confused with the Data Source metadata property
		properties : {
			title : "string",			// Title
			buttonType : "string",		// 'type' in sap.m, but DS messes with it
			placement : "string",		// Popover placement
			showHeader: "boolean",		// Show Popover Title
			popoverWidth : "string",	// Popover Width
			popoverHeight : "string",	// Popover Height
			items : "string",			// Popover List
			selectedItem : "string"		// Selected Popover Item
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
	setItems : function(s){
		this._items = s.split("\n");
	},
	getItems : function(){
		return this._items.join("\n");
	},
	setPopoverWidth : function(s){
		this._popoverWidth = s; 
	},
	getPopoverWidth : function(){
		return this._popoverWidth;
	},
	setPopoverHeight : function(s){
		this._popoverHeight = s; 
	},
	getPopoverHeight : function(){
		return this._popoverHeight;
	},
	setShowHeader : function(b){
		this._showHeader = b;
	},
	getShowHeader : function(){
		return this._showHeader;
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
	listSelect : function(title,oControlEvent){
		if(this._popover){
			this._popover.close();
			//this._popover.destroy();
		}
		this._selectedItem = title;
		this.fireDesignStudioPropertiesChanged(["selectedItem"]);
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
			var title = item;
			var icon = "";
			var opts = item.split("|");
			if(opts.length>1){
				icon = opts[0];
				title = opts.slice(1).join("");
			}
			var actionButton = new sap.m.Button({
				text : title,
			    //type : sap.m.ListType.Active,
			    icon : icon
			});
			actionButton.attachBrowserEvent("click",function(t){return function(oControlEvent){this.listSelect(t,oControlEvent);};}(title),this);
			this._popover.addButton(actionButton);
		};
		//this._popover.addContent(list);
		this._popover.openBy(this);
	},
	init : function(){
		sap.m.Button.prototype.init.apply(this,arguments);
		this.attachBrowserEvent("click",this.dsClick,this);
	}
});