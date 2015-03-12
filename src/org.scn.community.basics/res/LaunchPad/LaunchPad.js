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
 * (http://scn.sap.com/community/businessobjects-design-studio/blog/2014/10/09/design-studio-sdk-13--fiori-like-launchpad-aka-sapmtilecontainer)
 * 
 */
jQuery.sap.require("sap.m.TileContainer");
sap.m.TileContainer.extend("org.scn.community.basics.LaunchPad", {
	_tileConfig : [],
	_selectedTile : "",
	renderer : {},
	metadata : {				// Not to be confused with the Data Source metadata property
		properties : {
			tileConfig : "string",		// Tiles
			selectedTile : "string"		// Selected Tile
		}
	},
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
		this.fireDesignStudioPropertiesChanged(["selectedTile"]);
		this.fireDesignStudioEvent("onTileSelect");
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