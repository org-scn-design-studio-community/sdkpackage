/**
 * Copyright 2014 Scn Community Contributors
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
 */

(function() {
/** code for recognition of script path */
var myScript = $("script:last")[0].src;
_readScriptPath = function () {
	if(myScript) {
		var myScriptSuffix = "res/tr/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

sap.ui.commons.Tree.extend("org.scn.community.basics.Tree", {

	setDefaultImage : function(value) {
		this._DefaultImage = value;
		
		if(value != undefined && value != "")  {
			this._pImagePrefix = value.substring(0, value.lastIndexOf("/") + 1);	
		}
	},

	getDefaultImage : function() {
		return this._DefaultImage;
	},
	
	metadata: {
        properties: {
              "selectedKey": {type: "string"},
              "expandedKey": {type: "string"},
              "nodesContent": {type: "string"},
              "cleanAll": {type: "boolean"},
              "roundtrip": {type: "string"},
        }
	},
  
	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
		
		this.addStyleClass("scn-pack-Tree");
		
		this._oNodes = {};
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
		if(this.getCleanAll()) {
			this.removeAllNodes();
			this.destroyNodes();
			
			this._oNodes = {};
			
			this.setCleanAll(false);
			that.fireDesignStudioPropertiesChanged(["cleanAll"]);
		}
		
		var lNodesToRender = this.getNodesContent();
		if(lNodesToRender != null && lNodesToRender != undefined && lNodesToRender != ""){
			var lNodesToRenderArray = JSON.parse(lNodesToRender);

			// distribute content
			for (var i = 0; i < lNodesToRenderArray.length; i++) {
				var node = lNodesToRenderArray[i];
				if(this._oNodes[node.key] == undefined) {
					var lNewNode = this.createNode(i, node.key, node.text, node.url, node.parent, node.leaf);
					
					this._oNodes[node.key] = lNewNode;
				}
			}
		}
		
		for (lNodeKey in this._oNodes) {
			var lNode = this._oNodes[lNodeKey];
			if(lNode._Placed != true) {
				var parentKey = lNode._ParentKey;
				
				if(parentKey == "ROOT") {
					this.addNode(lNode);
				} else {
					var parentNode = this._oNodes[parentKey];
					if(parentNode != undefined) {
						parentNode.addNode(lNode);
					}
				}
				
				lNode._Placed = true;
			} else {
				// need to code update?
			}
		}
		
		// clean up "loading" node
		for (lNodeKey in this._oNodes) {
			var lNode = this._oNodes[lNodeKey];
			if(lNode._childrenRequested) {
				if(lNode._childrenRequestedFinished) {
					var nodes = lNode.getNodes();
					lNode.removeNode(nodes[0]);
					nodes[0].destroy();
					
					if(lNode.getNodes() == 0) {
						lNode.setHasExpander(false);
					}
					
					lNode._childrenRequestedFinished = false;
					lNode._childrenRequested = false;
				} else {
					lNode._childrenRequestedFinished = true;
				}
			}
		}
	},
	
	createNode: function (index, iNodeKey, iNodeText, iImageUrl, iParentKey, isLeaf) {
		var that = this;
		
		// in case starts with http, keep as is 
		if(iImageUrl.indexOf("http") == 0) {
			// no nothing
		} else {
			// in case of repository, add the prefix from repository
			if(iImageUrl != "" && this._pImagePrefix != undefined && this._pImagePrefix != ""){
				iImageUrl = this._pImagePrefix + iImageUrl;
			} else {
				if(isLeaf) {
					iImageUrl = this._ownScript + "TreeLeaf.gif";	
				} else{
					iImageUrl = this._ownScript + "TreeFolder.gif";
				}
			}
		}
		
		var lNode = new sap.ui.commons.TreeNode( 
				{text: iNodeText, 
				icon: iImageUrl, 
				expanded: false});
		
		lNode._Key = iNodeKey;
		lNode._ParentKey = iParentKey;
		
		if(!isLeaf) {
			var oLoadingNode = new sap.ui.commons.TreeNode( 
					{text: "loading...", 
					expanded: false});
			
			lNode.addNode(oLoadingNode);

			lNode.attachToggleOpenState(function(event) {
				if(lNode._childrenRequested == undefined) {
					that.setExpandedKey(lNode._Key);
					that.setRoundtrip("+");
					
					lNode._childrenRequested = true;

					that.fireDesignStudioPropertiesChanged(["roundtrip", "expandedKey"]);
					that.fireDesignStudioEvent("onFirstExpand");
				}
			});
		} else {
			lNode.setHasExpander(false);
		}
		
		lNode.attachSelected(function() {
			that.setSelectedKey(lNode._Key);
			
			that.fireDesignStudioPropertiesChanged(["selectedKey"]);
			that.fireDesignStudioEvent("onSelectionChanged");
		});
		
		return lNode;
	}
});
})();