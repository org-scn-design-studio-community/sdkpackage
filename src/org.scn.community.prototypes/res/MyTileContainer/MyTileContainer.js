/**
 * Copyright 2016 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/org-scn-design-studio-community/sdkpackage/
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
 */

sap.m.TileContainer.extend("org.scn.community.prototypes.MyTileContainer",{

	initDesignStudio : function() {
		
//		this._oModel = new sap.ui.model.json.JSONModel();
//		sap.ui.getCore().setModel(this._oModel);
//		this.setModel(this._oModel);
		
		 var tile = new sap.m.StandardTile({
	            icon : "sap-icon://play",
	            title : "Important Tile"
	      });
		 
		 this.addTile(tile);

	},
	
	afterDesignStudioUpdate : function() {
				
		
		        
	}
	
});