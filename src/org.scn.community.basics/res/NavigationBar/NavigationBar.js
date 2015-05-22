/**
 * Copyright 2014 Scn Community Contributors
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

(function() {
/** code for recognition of script path */
var myScript = $("script:last")[0].src;
var ownComponentName = "org.scn.community.basics.NavigationBar";
var _readScriptPath = function () {
	var scriptInfo = org_scn_community_basics.readOwnScriptAccess(myScript, ownComponentName);
	return scriptInfo.myScriptPath;
};
/** end of path recognition */

jQuery.sap.require("sap.ui.ux3.NavigationBar");
jQuery.sap.require("sap.ui.ux3.NavigationItem");

sap.ui.commons.layout.AbsoluteLayout.extend(ownComponentName, {

	metadata: {
        properties: {
        	  "DElementsContent": {type: "string"},
        	  "DSelectedKey": {type: "string"},
        	  "DSelectedText": {type: "string"},
              "DCleanAll": {type: "boolean"}
        }
	},
  
	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
		
		that._oNavBar = new sap.ui.ux3.NavigationBar();
		that._oNavBar._owningPanel = this;
		this.addContent(
				that._oNavBar,
				{left: "0px", top: "0px"}	
		);
		
		this.addStyleClass("scn-pack-NavigationBar");
		this.addStyleClass("scn-pack-FullSizeChildren");
		
		this._oElements = {};
		this._oItems = {};
		
		that._oNavBar.attachSelect(that.onSelected);
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
		if(this.getDCleanAll()) {
			that._oNavBar.destroyItems();
			
			this._oElements = {};
			this._oItems = {};
			
			this.setDCleanAll(false);
			that.fireDesignStudioPropertiesChanged(["cleanAll"]);
		}
		
		var lElementsToRender = this.getDElementsContent();
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);

			if(lElementsToRenderArray.length == 0) {
				that.addDummy();
			}else{
				//add an invisible dummy item to enable unselecting items at least visibly
				var element_key = "invisible_dummy_select";
				if(this._oElements[this.getId() + "_" + element_key]) {
					this._oItems[this.getId() + "_" + element_key].setEnabled(false);
					this._oItems[this.getId() + "_" + element_key].setVisible(false);
				}else{
					var Item = new sap.ui.ux3.NavigationItem(
							this.getId() + "_" + element_key, {key: element_key, text: "I am invisible", enabled: false, visible: false});
					Item._dsKey = element_key;
					
					this._oElements[this.getId() + "_" + element_key] = element_key;
					this._oItems[this.getId() + "_" + element_key] = Item;
					that._oNavBar.addItem(Item);	
				}
				//------------------------------------------------------------------------
			}
			
			// distribute content
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				
				if(this._oElements[this.getId() + "_" + element.key]) {
					this._oItems[this.getId() + "_" + element.key].setEnabled(element.enabled);
					this._oItems[this.getId() + "_" + element.key].setVisible(element.visible);
					continue;
				}
				
				var Item = new sap.ui.ux3.NavigationItem(
						this.getId() + "_" + element.key, {key: element.key, text: element.text, enabled: element.enabled, visible: element.visible});
				Item._dsKey = element.key;
				
				this._oElements[this.getId() + "_" + element.key] = element.key;
				this._oItems[this.getId() + "_" + element.key] = Item;
				
				that._oNavBar.addItem(Item);
			}
		} else {
			that.addDummy();
		}
		
		if(this._oItems[this.getId() + "_" + that.getDSelectedKey()] != undefined) {
			that._oNavBar.setSelectedItem(this._oItems[this.getId() + "_" + that.getDSelectedKey()]);	
		}
	},
	
	onSelected: function(oEvent) {
		var that = this;
		var id = oEvent.mParameters.itemId;
		var realKey = that._owningPanel._oElements[id];
		var item = that._owningPanel._oItems[id];
		
		if (item.getEnabled()) {
		
			that._owningPanel.setDSelectedKey(realKey);
			that._owningPanel.setDSelectedText(item.getText());
			that._owningPanel.fireDesignStudioPropertiesChanged(["DSelectedKey"]);
			that._owningPanel.fireDesignStudioPropertiesChanged(["DSelectedText"]);
			that._owningPanel.fireDesignStudioEvent(["onSelectionChanged"]);
		}else{
			oEvent.preventDefault();
		}
	},
	
	addDummy: function() {
		var that = this;
		
		//create the Items
		var oItem1 = new sap.ui.ux3.NavigationItem({key: "item1", text: "Item 1"});
		var oItem2 = new sap.ui.ux3.NavigationItem({key: "item2", text: "Item 2", enabled: false});
		var oItem3 = new sap.ui.ux3.NavigationItem({key: "item3", text: "Item 3"});
		var oItem4 = new sap.ui.ux3.NavigationItem({key: "item4", text: "Item 4"});
	
		//add items to the bar
		that._oNavBar.addItem(oItem1);
		that._oNavBar.addItem(oItem2);
		that._oNavBar.addItem(oItem3);
		that._oNavBar.addItem(oItem4);
	},
});
})();