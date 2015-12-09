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
 * 
 * DEPRECATED
 * 
 * Based on from original version by Mike Howles, blogged here: 
 * (http://scn.sap.com/community/businessobjects-design-studio/blog/2014/10/09/design-studio-sdk-13--fiori-like-launchpad-aka-sapmtilecontainer)
 * 
 */
define([
        "css!./LaunchPad.css",
        "../../../org.scn.community.shared/os/sapui5/commons-warning",
        "../../../org.scn.community.shared/os/sapui5/load.sap.m_2.0"
    ],function(css, warningTopic){
	jQuery.sap.require("sap.m.TileContainer");
	var componentInfo = {
		visible : true,
		title : "Fiori LaunchPad (Deprecated Commons Mode)",
		icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHySURBVDhPlY9NaxNRFIbPbdKFK1HwB7hxowvBVUXwB4h7xY3dK/oDBCmYNoGYtqixYHWTCIKL0oJ1YW2aBPrhTBPbkRYsVWkTC8GEaqfJzP2q771jpS1ufGfuuXfe85xz7tDef+pogdYaMVltec3w7+dB/WPCdiCP5zb6Fls4q6P84QJp8xPf/LOvN69PbUkV2YdEBokWHtvv2rs6vajFn666jTauZJvYhGXMBHDmrjaGUp/Jf2bZFXq2PuI14WCsbYWjiRRxkEJC7339FRx7stQ1XGWjX+4Wa0iaggOiP7vWAhVKO1t+bMjFy7KrNybXtZJQBESFhM5G2KSJSw0/lp6LZebpkXfz7Zo2tEmCtldQFPFQh0suRLbynQ0tdqdnWcY597zyww/9ALP3FRVwTFVq2Nm8+NI7nZ2PPZyLp0pdySJLlS7nq5dy1Z9oZnmpJGEBD7g4P7pAgw71lygxwxLvKTFN/WVKlVnmQ265DijkApFMkLLlByfThe5U+WrOvZJ32YPCiYGpO29WTiWn44Pu/cIasI4pECSMJN4Lj0vxvmJ9e7fhd3pGZm+PL4tWo/dVhQYWxrw6kCDk4EhwEYYcGvdq9yY/CY4/582d9k4ngOlsNG+NfYQFRdFMAGMqgoC3d+0xNJ51TVuY1jUk578Bvm+Y4nNJ66IAAAAASUVORK5CYII=",
		author : "Mike Howles",
		description : "A Fiori-Inspired LaunchPad using UI5 Handler",
		topics : [
		warningTopic,
		{
			title : "SDK Component",
			content : "This component is an UI5 SDK Component.  Be sure you install the plugin to your server platform should you find it useful."
		},{
			title : "SCN SDK Components License",
			content : "SCN SDK Components License is released under the Apache 2.0 License. Please refer to the licenses for the full copyright restrictions placed on this software.  (<a target='_blank' href='http://www.apache.org/licenses/LICENSE-2.0'>Apache 2.0 License</a>)"
		}]
	};
	var dsProperties = {
		selectedTile : { 
			opts : {
				desc : "Selected Tile",
				noAps : true
			},
			ui5Meta : "string"
		},
		onTileSelect : { 
			ui5Meta : "string",
			opts : {
				cat : "Tiles",
				order : 0,
				desc : "On Tile Select",
				apsControl : "script"
			}
		},
		tileConfig : { 
			opts : {
				desc : "Tile Configuration",
				cat : "Tiles",
				keyField : "key",
				apsControl : "complexcollection",
				apsConfig : {
					key : {
						desc : "Key",
						apsControl : "text",
						key : true
					},
					title : {
						desc : "Title",
						defaultValue : "Some Title",
						apsControl : "text"				
					},
					styleClass : {
						desc : "Style Class",
						apsControl : "text"
					},
					info : {
						desc : "Info",
						defaultValue : "Info",
						apsControl : "text"
					},
					icon : {
						desc : "Icon",
						defaultValue : "sap-icon://action",
						apsControl : "text"
					},
					number : {
						desc : "Number",
						defaultValue : "123",
						apsControl : "text"
					},
					numberUnit : {
						desc : "Number Unit",
						defaultValue : "$",
						apsControl : "text"
					},
					valueState : {
						desc : "Info State",
						defaultValue : "None",
						apsControl : "combobox",
						options : [
							{key : "None", text : "None"},
							{key : "Success", text : "Success"},
							{key : "Warning", text : "Warning"},
							{key : "Error", text : "Error"}
						]
					}
				}
			},
			ui5Meta : "string"
		}
	};
	var meta = {
		properties : {}
	};
	for(var p in dsProperties){
		if(dsProperties[p].ui5Meta) meta.properties[p] = dsProperties[p].ui5Meta;
	}
	/**
	 * End of experiment
	 */
	sap.m.TileContainer.extend("org.scn.community.basics.LaunchPad", {
		_tileConfig : [],
		_selectedTile : "",
		renderer : {},
		metadata : meta,
		setSelectedTile : function(s){
			this._selectedTile = s;
		},
		getSelectedTile : function(){
			return this._selectedTile;
		},
		setTileConfig : function(s){
			this._tileConfig = [];
			if(s && s!="") this._tileConfig = jQuery.parseJSON(s);
			this.drawTiles();
		},
		getTileConfig : function(){
			return JSON.stringify(this._tileConfig);
		},
		initDesignStudio : function() {
			// Called by sap.designstudio.sdkui5.Handler  (sdkui5_handler.js)
			this.addStyleClass("utilPackLaunchPad");
			this.drawTiles();
		},
		tileSelect : function(title,oControlEvent){
			this._selectedTile = title;
			this.fireDesignStudioPropertiesChangedAndEvent(["selectedTile"],"onTileSelect");
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
		},
		drawTiles : function(){
			this.destroyTiles();
			for(var i=0;i<this._tileConfig.length;i++){
				var tileConf = this._tileConfig[i];
				var tile = new sap.m.StandardTile({
					title : tileConf.title,
					info : tileConf.info,
					icon : tileConf.icon,
					number : tileConf.number,
					numberUnit : tileConf.numberUnit,
					infoState : tileConf.valueState	|| "None"
				});
				if(tileConf.styleClass) tile.addStyleClass(tileConf.styleClass);
				tile.attachBrowserEvent("click", function(t){return function(oControlEvent){this.tileSelect(t,oControlEvent);};}(tileConf.title),this);
				this.addTile(tile);
			}
		}
	});
});