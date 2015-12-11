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
 
 //%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./TreeSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics"
	
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

Tree = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.addStyleClass("scn-pack-Tree");
		
		that._oNodes = {};
		that._oNodesArray = [];
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		// that.onAfterRendering = function () {
			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		// }
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	processData: function (flatData, afterPrepare, owner) {
		var that = owner;

		// processing on data
		that.afterPrepare(that);
	},

	afterPrepare: function (owner) {
		var that = owner;
			
		// visualization on processed data
		if(that.getCleanAll()) {
			that.removeAllNodes();
			that.destroyNodes();
			
			that._oNodes = {};
			that._oNodesArray = [];
			
			that.setCleanAll(false);
			that.fireDesignStudioPropertiesChanged(["cleanAll"]);
		}
		
		var lNodesToRender = that.getNodesContent();
		if(lNodesToRender != null && lNodesToRender != undefined && lNodesToRender != ""){
			var lNodesToRenderArray = JSON.parse(lNodesToRender);

			// distribute content
			for (var i = 0; i < lNodesToRenderArray.length; i++) {
				var node = lNodesToRenderArray[i];
				if(that._oNodes[node.key] == undefined) {
					var lNewNode = that.createNode(owner, i, node.key, node.text, node.url, node.parentKey, node.leaf);
					
					lNewNode.index = that._oNodesArray.length;
					that._oNodes[node.key] = lNewNode;
					that._oNodesArray.push(lNewNode);
				}
			}
		}
		
		for (lNodeInd in that._oNodesArray) {
			var lNode = that._oNodesArray[lNodeInd];
			if(lNode._Placed != true) {
				var parentKey = lNode._ParentKey;
				
				if(parentKey == "ROOT") {
					that.addNode(lNode);
				} else {
					var parentNode = that._oNodes[parentKey];
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
		for (lNodeInd in that._oNodesArray) {
			var lNode = that._oNodesArray[lNodeInd];
			if(lNode._childrenRequested) {
				var nodes = lNode.getNodes();
				lNode.removeNode(nodes[0]);
				nodes[0].destroy();
				
				if(lNode.getNodes() == 0) {
					lNode.setHasExpander(false);
				}
				
				lNode._childrenRequestedFinished = false;
				lNode._childrenRequested = false;
			}
		}
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	createNode: function (owner, index, iNodeKey, iNodeText, iImageUrl, iParentKey, isLeaf) {
		var that = owner;
		
		if(iNodeText == undefined) {iNodeText = ""};
		if(iImageUrl == undefined) {iImageUrl = ""};
		
		// in case starts with http, keep as is 
		if(iImageUrl.indexOf("http") == 0) {
			// no nothing
		} else {
			// in case of repository, add the prefix from repository
			if(isLeaf) {
				iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getDefaultImage(), iImageUrl, "TreeLeaf.gif");	
			} else{
				iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getDefaultImage(), iImageUrl, "TreeFolder.gif");
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
					that.setRoundtrip(that.getRoundtrip() + 1);
					
					lNode._childrenRequested = true;

					that.fireDesignStudioPropertiesChangedAndEvent(["roundtrip", "expandedKey"], "onFirstExpand");
				}
			});
		} else {
			lNode.setHasExpander(false);
		}
		
		lNode.attachSelected(function() {
			that.setSelectedKey(lNode._Key);
			
			that.fireDesignStudioPropertiesChangedAndEvent(["selectedKey"], "onSelectionChanged");
		});
		
		return lNode;
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = Tree;
jQuery.sap.require("sap.ui.commons.Tree");
sap.ui.commons.Tree.extend(myComponentData.fullComponentName, myComponentData.instance);
});