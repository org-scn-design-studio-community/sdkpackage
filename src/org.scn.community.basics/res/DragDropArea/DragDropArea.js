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
	"./DragDropAreaSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"basics/os/ndd/jq-ndd"
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

DragDropArea = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	processData: function (flatData, afterPrepare, owner) {
		var that = owner;

		if(!that._lLayout) {
			if(that.getOrientation() == "Horizontal") {
				that._lLayout = new sap.ui.layout.HorizontalLayout({
					width : "100%",
					height : "100%"
				});
			} else {
				that._lLayout = new sap.ui.layout.VerticalLayout({
					width : "100%",
					height : "100%"
				});
			}

			that._lLayout.addStyleClass("scn-pack-DragDropArea-Layout");
			that.addStyleClass("scn-pack-DragDropArea");
			
			that.onAfterRendering = function () {
				org_scn_community_basics.resizeContentAbsoluteLayout(that, that._lLayout, that.onResize);
			}
		}
		
		// processing on data
		that.afterPrepare(that);
	},

	afterPrepare: function (owner) {
		var that = owner;
			
		// visualization on processed data
		var lElementsToRender = that.getElements();
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);

			for(var drops in that._dropAreas) {
				var dropO = that._dropAreas[drops];

				$(dropO).bind('drop',function(evt) {});
			}
			that._dropAreas = [];

			// Destroy old content
			that._lLayout.destroyContent();
			that._lLayout.removeContent();
			
			that.addDropArea(that, "", 0, lElementsToRenderArray.length == 0);
			
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				that.addDragArea(that, lElementsToRenderArray[i].key, lElementsToRenderArray[i].text, lElementsToRenderArray[i].url);
				that.addDropArea(that, lElementsToRenderArray[i].key, i + 1, i == lElementsToRenderArray.length - 1);
			}
			
		}
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	
	addDropArea : function (owner, dropAfterKey, dropIndex, isLast) {
		var that = owner;
		
		var width = "12px";
		var height = "24px";
		
		var orientation = that.getOrientation();
		
		if(orientation != "Horizontal") {
			width = that.getItemWidth() + "px";
			height = "12px";
		}

		var oDrop = new sap.ui.commons.ToggleButton({
			text : "",
			width : width,
			height : height,
			styled: false,
			enabled: false
		});

		oDrop.addStyleClass("scn-pack-DragDropArea-Drop");
		
		oDrop.dropAfterKey = dropAfterKey;
		oDrop.dropIndex = dropIndex;
		
		oDrop.onAfterRendering = function () {
			var jqThis = oDrop.$();

			jqThis.bind('dragover', function(evt) {
			  oDrop.addStyleClass("scn-pack-DragDropArea-DropEffect");

			  evt.preventDefault();
		   })
		   .bind('dragleave',function(evt) {
			  oDrop.removeStyleClass("scn-pack-DragDropArea-DropEffect");

			  evt.preventDefault();
		   })
		   .bind('dragenter',function(evt) {
			  evt.preventDefault();
		   });

		    /** process drop event **/
			jqThis.bind('drop',function(evt) {
				  oDrop.removeStyleClass("scn-pack-DragDropArea-DropEffect");

				  var id = evt.dataTransfer.getData('id'); 
				  var key = evt.dataTransfer.getData('key'); 
				  var context = evt.dataTransfer.getData('context');

				  that.setDropId(id);
				  that.setDropKey(key);
				  that.setDropContext(context);
				  that.setDropAfterKey(oDrop.dropAfterKey);
				  that.setDropIndex(oDrop.dropIndex);

				  that.fireDesignStudioPropertiesChangedAndEvent(["dropId", "dropKey", "dropContext", "dropAfterKey", "dropIndex"], "onDrop");

				  evt.stopPropagation();

				  return false;
			});
		};
		
		that._lLayout.addContent(oDrop);
		that._dropAreas.push(oDrop);
	},
	
	addDragArea: function (owner, iImageKey, iImageText, iImageUrl) {
		var that = owner;
		
		if(iImageText == undefined) {iImageText = ""};
		if(iImageUrl == undefined) {iImageUrl = ""};

		if(iImageUrl != "") {
			iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getDefaultImage(), iImageUrl, "");	
		}

		var oDrag = new sap.ui.commons.ToggleButton({
			text : iImageText,
			tooltip: iImageText,
			icon: iImageUrl,
			width : that.getItemWidth() + "px",
			height : "24px",
			styled: false,
			enabled: false
		});
		
		oDrag.addStyleClass("scn-pack-DragDropArea-Drag");
		
		oDrag.internalKey = iImageKey;

		oDrag.onAfterRendering = function () {
			var jqThis = oDrag.$();
			jqThis.attr("draggable", "true");

			jqThis.bind('dragstart', function(evt) {
				evt.dataTransfer.setData('id', oDrag.internalKey);
				evt.dataTransfer.setData('key', that.getDragKey());
				evt.dataTransfer.setData('context', that.getDragContext());
			});
		};
		
		that._lLayout.addContent(oDrag);
	}
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = DragDropArea;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});