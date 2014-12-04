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
		var myScriptSuffix = "res/dda/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.basics.DragDropArea", {

	metadata: {
        properties: {
              "dragKey": {type: "string"},
              "dragContext": {type: "string"},

              "dropId": {type: "string"},
              "dropKey": {type: "string"},
              "dropContext": {type: "string"},
              
              "defaultImage": {type: "string"},
              "dropAfterKey": {type: "string"},
              "dropIndex": {type: "int"},

              "elements": {type: "string"},
              "orientation": {type: "string"},
              "itemWidth": {type: "int"}
        }
	},
	
	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		if(!this._pImagePrefix) {
			var defaultImage = this.getDefaultImage();
			if(defaultImage != undefined && defaultImage != "")  {
				this._pImagePrefix = defaultImage.substring(0, defaultImage.lastIndexOf("/") + 1);	
			}
		}
		
		var that = this;

		if(!this._lLayout) {
			if(this.getOrientation() == "horizontal") {
				this._lLayout = new sap.ui.layout.HorizontalLayout({
					width : "100%",
					height : "100%"
				});
			} else {
				this._lLayout = new sap.ui.layout.VerticalLayout({
					width : "100%",
					height : "100%"
				});
			}

			this._lLayout.addStyleClass("scn-pack-DragDropArea-Layout");
			
			this.addContent(
				this._lLayout,
				{left: "5px", top: "5px"}
			);
		}
		
		this.addStyleClass("scn-pack-DragDropArea");
		
		var lElementsToRender = this.getElements();
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);

			// Destroy old content
			this._lLayout.destroyContent();

			this.addDropArea("", 0, lElementsToRenderArray.length == 0);
			
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				this.addDragArea(lElementsToRenderArray[i].key, lElementsToRenderArray[i].text, lElementsToRenderArray[i].url);
				this.addDropArea(lElementsToRenderArray[i].key, i + 1, i == lElementsToRenderArray.length - 1);
			}
			
		}
	},
	
	addDropArea : function (dropAfterKey, dropIndex, isLast) {
		var that = this;
		
		var width = "12px";
		var height = "24px";
		
		var orientation = this.getOrientation();
		
		if(orientation != "horizontal") {
			width = this.getItemWidth() + "px";
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
			var jqThis = this.$();
			
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
			   })
				
			   /** process drop event **/
			   .bind('drop',function(evt) {
				  var id = evt.dataTransfer.getData('id'); 
			      var key = evt.dataTransfer.getData('key'); 
			      var context = evt.dataTransfer.getData('context');

			      that.setDropId(id);
			      that.setDropKey(key);
			      that.setDropContext(context);
			      that.setDropAfterKey(oDrop.dropAfterKey);
			      that.setDropIndex(oDrop.dropIndex);
			      
			      that.fireDesignStudioPropertiesChanged(["dropId"]);
			      that.fireDesignStudioPropertiesChanged(["dropKey"]);
			      that.fireDesignStudioPropertiesChanged(["dropContext"]);
			      
			      that.fireDesignStudioPropertiesChanged(["dropAfterKey"]);
			      that.fireDesignStudioPropertiesChanged(["dropIndex"]);
			      
				  that.fireDesignStudioEvent("onDrop");
			      
			      evt.stopPropagation();
			      
			      return false;
	       });
		};
		
		this._lLayout.addContent(oDrop);
	},
	
	addDragArea: function (iImageKey, iImageText, iImageUrl) {
		var that = this;
		
		// in case starts with http, keep as is 
		if(iImageUrl.indexOf("http") == 0) {
			// no nothing
		} else {
			// in case of repository, add the prefix from repository
			if(this._pImagePrefix != undefined && this._pImagePrefix != "" && iImageUrl != ""){
				iImageUrl = this._pImagePrefix + iImageUrl;
			} else {
				// no image if not specified
				// iImageUrl = this._ownScript + "DragDropArea.png";
			}
		}

		var oDrag = new sap.ui.commons.ToggleButton({
			text : iImageText,
			tooltip: iImageText,
			icon: iImageUrl,
			width : this.getItemWidth() + "px",
			height : "24px",
			styled: false,
			enabled: false
		});
		
		oDrag.addStyleClass("scn-pack-DragDropArea-Drag");
		
		oDrag.internalKey = iImageKey;

		oDrag.onAfterRendering = function () {
			var jqThis = this.$();
			jqThis.attr("draggable", "true");

			jqThis.bind('dragstart', function(evt) {
				evt.dataTransfer.setData('id', oDrag.internalKey);
				evt.dataTransfer.setData('key', that.getDragKey());
				evt.dataTransfer.setData('context', that.getDragContext());
			});
		};
		
		this._lLayout.addContent(oDrag);
	},
	
	updateSelection: function (iSelectedKey) {
		var lContent = this.getContent();
		
		for (var i = 0; i < lContent.length; i++) {
			var lImage = lContent [i];
			
			if(iSelectedKey == lImage.internalKey){
				lImage.addStyleClass("scn-pack-DragDropArea-SelectedImage");
			} else {
				lImage.removeStyleClass("scn-pack-DragDropArea-SelectedImage");
			};
		};
	}

});
})();