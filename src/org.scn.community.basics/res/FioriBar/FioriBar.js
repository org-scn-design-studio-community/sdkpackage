/**
 * Copyright 2015 SCN Community Contributors
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
 *	Officially working sap.m mode sap.m.Bar for Design Studio 1.6
 */
define(["css!../../../org.scn.community.shared/modules/ZenCrosstabFix.css"], function() {
	var componentInfo = {
			visible : true,
			title : "Fiori Bar - (M Mode)",
			icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHySURBVDhPlY9NaxNRFIbPbdKFK1HwB7hxowvBVUXwB4h7xY3dK/oDBCmYNoGYtqixYHWTCIKL0oJ1YW2aBPrhTBPbkRYsVWkTC8GEaqfJzP2q771jpS1ufGfuuXfe85xz7tDef+pogdYaMVltec3w7+dB/WPCdiCP5zb6Fls4q6P84QJp8xPf/LOvN69PbUkV2YdEBokWHtvv2rs6vajFn666jTauZJvYhGXMBHDmrjaGUp/Jf2bZFXq2PuI14WCsbYWjiRRxkEJC7339FRx7stQ1XGWjX+4Wa0iaggOiP7vWAhVKO1t+bMjFy7KrNybXtZJQBESFhM5G2KSJSw0/lp6LZebpkXfz7Zo2tEmCtldQFPFQh0suRLbynQ0tdqdnWcY597zyww/9ALP3FRVwTFVq2Nm8+NI7nZ2PPZyLp0pdySJLlS7nq5dy1Z9oZnmpJGEBD7g4P7pAgw71lygxwxLvKTFN/WVKlVnmQ265DijkApFMkLLlByfThe5U+WrOvZJ32YPCiYGpO29WTiWn44Pu/cIasI4pECSMJN4Lj0vxvmJ9e7fhd3pGZm+PL4tWo/dVhQYWxrw6kCDk4EhwEYYcGvdq9yY/CY4/582d9k4ngOlsNG+NfYQFRdFMAGMqgoC3d+0xNJ51TVuY1jUk578Bvm+Y4nNJ66IAAAAASUVORK5CYII=",
			author : "Mike Howles",
			description : "A Fiori-Inspired Bar using UI5 Handler",
			topics : [{
				title : "SDK Component",
				content : "This component is an UI5 SDK Component.  Be sure you install the plugin to your server platform should you find it useful."
			},{
				title : "SCN SDK Components License",
				content : "SCN SDK Components License is released under the Apache 2.0 License. Please refer to the licenses for the full copyright restrictions placed on this software.  (<a target='_blank' href='http://www.apache.org/licenses/LICENSE-2.0'>Apache 2.0 License</a>)"
			}]
		};
		var itemConfig = { 
			opts : {
				desc : "Item Configuration",
				cat : "Items",
				keyField : "key",
				apsControl : "complexcollection",
				apsConfig : {
					items : {
						desc : "Sub-Items",
						cat : "n/a",
						defaultValue : [],
						apsControl : "complexcollection",
						apsConfig : {
							key : {
								desc : "Key",
								defaultValue : "SOME_ITEM_KEY",
								apsControl : "text"
							},
							text : {
								desc : "Text",
								defaultValue : "Some Item",
								apsControl : "text"
							},
							enabled : {
								desc : "Enabled",
								defaultValue : true,
								apsControl : "checkbox"
							},
							icon : {
								desc : "Icon",
								defaultValue : "sap-icon://action",
								apsControl : "text"
							}
						}
					},
					key : {
						desc : "Key",
						defaultValue : "SOME_KEY",
						apsControl : "text",
						key : true
					},
					text : {
						desc : "Text",
						defaultValue : "Some Title",
						apsControl : "text"				
					},
					icon : {
						desc : "Icon",
						defaultValue : "sap-icon://action",
						apsControl : "text"
					},
					showTitle : {
						desc : "Show Title",
						defaultValue : true,
						apsControl : "checkbox"
					},
					enabled : {
						desc : "Enabled",
						defaultValue : true,
						apsControl : "checkbox"
					},
					type : {
						desc : "Button Type",
						defaultValue : "Default",
						apsControl : "combobox",
						options : [
						   {key : "Default", text : "Default"},
						   {key : "Accept", text : "Accept"},
						   {key : "Back", text : "Back"},
						   {key : "Emphasized", text : "Emphasized"},
						   {key : "Reject", text : "Reject"},
						   {key : "Transparent", text : "Transparent"},
						   {key : "Unstyled", text : "Unstyled"},
						   {key : "Up", text : "Up"}
						]
					}
				}
			},
			ui5Meta : {
				type : "object[]",
				defaultValue : []
			}
		}
		var itemConfigLeft = jQuery.parseJSON(JSON.stringify(itemConfig));
		var itemConfigMiddle = jQuery.parseJSON(JSON.stringify(itemConfig));
		var itemConfigRight = jQuery.parseJSON(JSON.stringify(itemConfig));

		itemConfigLeft.opts.desc = "Left Items";
		itemConfigLeft.opts.cat = "Items-Left";
		itemConfigMiddle.opts.desc = "Middle Items";
		itemConfigMiddle.opts.cat = "Items-Middle";
		itemConfigRight.opts.desc = "Right Items";
		itemConfigRight.opts.cat = "Items-Right";

		var dsProperties = {
			selectedItemKey : { 
				opts : {
					desc : "Selected Item Key",
					noAps : true
				},
				ui5Meta : "string"
			},
			selectedHeaderKey : { 
				opts : {
					desc : "Selected Header Item Key",
					noAps : true
				},
				ui5Meta : "string"
			},
			selectedItemText : { 
				opts : {
					desc : "Selected Item Text",
					noAps : true
				},
				ui5Meta : "string"
			},
			selectedHeaderText : { 
				opts : {
					desc : "Selected Header Item Text",
					noAps : true
				},
				ui5Meta : "string"
			},
			onitemselect : { 
				ui5Meta : "string",
				opts : {
					cat : "General",
					order : 0,
					desc : "On Item Select",
					apsControl : "script"
				}
			},
			design : {
				opts : {
					cat : "General",
					desc : "Design",
					apsControl : "segmentedbutton",
					defaultValue : "Auto",
					options : [
					   {key : "Auto", text : "Auto"},
					   {key : "Footer", text : "Footer"},
					   {key : "Header", text : "Header"},
					   {key : "SubHeader", text : "SubHeader"}
					]			
				},
				ui5Meta : "string"
			},
			enabled : {
				opts : {
					cat : "General",
					desc : "Enabled",
					defaultValue : true,
					apsControl : "checkbox",
				},
				ui5Meta : "boolean"
			},
			itemConfigLeft : itemConfigLeft,
			itemConfigMiddle : itemConfigMiddle,
			itemConfigRight : itemConfigRight
		};
		var meta = {
			properties : {}
		};
		for(var p in dsProperties){
			if(dsProperties[p].ui5Meta) meta.properties[p] = dsProperties[p].ui5Meta;
		}
		sap.m.Bar.extend("org.scn.community.basics.FioriBar", {
			_itemConfigLeft : [],
			_itemConfigRight : [],
			_itemConfigMiddle : [],
			_selectedItem : "",
			_selectedHeader : "",
			renderer : {},
			metadata : meta,
			initDesignStudio : function() {
				// Called by sap.designstudio.sdkui5.Handler  (sdkui5_handler.js)
				this.addStyleClass("DesignStudioSCN");
				this.addStyleClass("FioriBar");
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
			setItemConfigLeft : function(a){
				if(typeof a=="string"){
					if(a=="") a = "[]";
					this._itemConfigLeft = JSON.parse(a);
				}else{
					this._itemConfigLeft = a;	
				}
				this.redraw();
				return this;
			},
			setItemConfigMiddle : function(a){
				if(typeof a=="string"){
					if(a=="") a = "[]";
					this._itemConfigMiddle = JSON.parse(a);
				}else{
					this._itemConfigMiddle = a;	
				}
				this.redraw();
				return this;
			},
			setItemConfigRight : function(a){
				if(typeof a=="string"){
					if(a=="") a = "[]";
					this._itemConfigRight = JSON.parse(a);
				}else{
					this._itemConfigRight = a;	
				}
				this.redraw();
				return this;
			},
			getItemConfigLeft : function(){
				return this._itemConfigLeft;
			},
			getItemConfigMiddle : function(){
				return this._itemConfigMiddle;
			},
			getItemConfigRight : function(){
				return this._itemConfigRight;
			},
			redraw : function(){
				this.destroyContentLeft();
				this.destroyContentMiddle();
				this.destroyContentRight();
				try{
				var conf = [{
					prop : "itemConfigLeft", method : "addContentLeft", getter : "getContentLeft"
				},{
					prop : "itemConfigMiddle", method : "addContentMiddle", getter : "getContentMiddle"
				},{
					prop : "itemConfigRight", method : "addContentRight", getter : "getContentRight"
				}]
				for(var z = 0; z < conf.length; z++){
					for(var i=0;i<this["_"+conf[z].prop].length;i++){
						var title = "";
						var enabled = true;
						var actualTitle = this["_"+conf[z].prop][i].text;
						if(this["_"+conf[z].prop][i].enabled != undefined){
							enabled = this["_"+conf[z].prop][i].enabled;
						}
						if(this["_"+conf[z].prop][i].showTitle) title = actualTitle;
						var b = new sap.m.Button({
							text : title,
							tooltip : actualTitle,
							enabled : enabled,
							icon : this["_"+conf[z].prop][i].icon
						});
						b.addStyleClass("DesignStudioSCN");
						if(this["_"+conf[z].prop][i].type) b.setType(this["_"+conf[z].prop][i].type);
						this[conf[z].method](b);
						var items = this["_"+conf[z].prop][i].items || [];
						if(items.length<=0){	// Single button
							b.attachPress(function(o){
								return function(oControlEvent){
									this._selectedItem = o.headerTitle;
									this._selectedItemKey = o.headerKey;
									this._selectedHeader = o.headerTitle;
									this._selectedHeaderKey = o.headerKey;
									this.fireDesignStudioPropertiesChangedAndEvent(["selectedHeader","selectedItem","selectedHeaderKey","selectedItemKey"],"onitemselect");
								};
							}({
								headerTitle : actualTitle,
								headerKey : this["_"+conf[z].prop][i].key
							}),this);

						}else{	// Action Sheet
							// Event Handler definition
							var clickHandler = function(index,config){
								return function(oControlEvent){
									var items = this["_"+config.prop][index].items;
									var actionSheet = new sap.m.ActionSheet({
										title :  this["_"+config.prop][index].text,
										placement : "Vertical",
									});
									actionSheet.addStyleClass("DesignStudioSCN");
									for(var j=0;j<items.length;j++){
										var item = items[j];
										var enabled2 = true;
										if(item.enabled != undefined){
											enabled2 = item.enabled;
										}
										var actionButton = new sap.m.Button({
											text : item.text,
										    icon : item.icon,
										    enabled : enabled2
										});
										actionButton.addStyleClass("DesignStudioSCN");
										// Action Item Handler
										var actionHandler = function(it,section,as){
											return function(oControlEvent){
												this._selectedItem = it.text;
												this._selectedItemKey = it.key;
												this._selectedHeader = section.text;
												this._selectedHeaderKey = section.key;
												as.close();
												this.fireDesignStudioPropertiesChangedAndEvent(["selectedHeader","selectedItem","selectedHeaderKey","selectedItemKey"],"onitemselect");
											};
										}(item,this["_"+config.prop][index],actionSheet);
										actionButton.attachPress(actionHandler,this);
										actionSheet.addButton(actionButton);
									}
									actionSheet.openBy(this[config.getter]()[index]);
								};
							}(i,conf[z]);
							b.attachPress(clickHandler,this);
						}
					}
				}
				}catch(e){
					alert(e);
				}
			},
			callOnSet : function(property,value){
				return null;	// TODO
			},
			/**
			 * Relays Design Studio Property Information over to Additional Properties Sheet.
			 */
			getPropertyMetaData : function(){
				var r = [];
				for(var prop in dsProperties){
					var o = {
						name : prop,
						opts : dsProperties[prop].opts || {}
					}
					if(!o.opts.noAps) r.push(o);				
				}
				return JSON.stringify(r);
			},
			/**
			 * Component Information
			 */
			getComponentInformation : function(){
				return JSON.stringify(componentInfo);
			}
		});
});