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

jQuery.sap.require("sap.ui.core.IconPool");

var org_scn_community_basics_FioriButton = org_scn_community_basics_FioriButton || {};

if(!org_scn_community_basics_FioriButton.registeredStyles){
	org_scn_community_basics_FioriButton.registeredStyles = org_scn_community_basics_FioriButton.registeredStyles || "";	
}

(function() {
/** code for recognition of script path */
var myScript = $("script:last")[0].src;
_readScriptPath = function () {
	if(myScript) {
		var myScriptSuffix = "res/fb/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

sap.ui.commons.Button.extend("org.scn.community.basics.FioriButton", {

	metadata: {
        properties: {
              "dSize": {type: "string"},
              "dIcon": {type: "string"},
              "dText": {type: "string"},
              "dTooltip": {type: "string"},
              "dFontColor": {type: "string"},
              "dBackColor": {type: "string"},
              "dStyle": {type: "string"},
        }
	},
	
  	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
		
		this.addStyleClass("scn-pack-FioriButton");
		
		this.attachPress(function() {
			that.fireDesignStudioEvent("onClick");
		});
		
		this.onAfterRendering = function() {
			var jqThis = that.$();
			
			var color = that.getDFontColor();
			var backColor = that.getDBackColor();
						
			if(color != "") {
				jqThis.css( "color", color );
			}
			if(backColor != "") {
				jqThis.css( "background-color", backColor );
			}
			
			if(backColor != "") {
				this.addStyleClass("scn-pack-FioriButton-S");
			}
		};
  	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;

		var size = that.getDSize();
		var icon = that.getDIcon();
		var text = that.getDText();
		var tooltip = that.getDTooltip();

		if(text != ""){
			this.setText(" " + text);	
		} else {
			this.setText(text);
		}
		
		this.setTooltip(tooltip);
				
		// check if already registered, mark if not
		if(org_scn_community_basics_FioriButton.registeredStyles.indexOf("."+icon) == -1){
			// append this style, add the style to list of registered styles
			org_scn_community_basics_FioriButton.registeredStyles = org_scn_community_basics_FioriButton.registeredStyles + "."+icon;
			$( "<style>.sf"+icon+":before{content:'\\"+icon+"';}</style>" ).appendTo("head");	
		}
		
		this.addStyleClass("scn-pack-FioriButton-" + size);
		this.addStyleClass("sf" + icon);
		
		var aNames = sap.ui.core.IconPool.getIconNames();
		
		var style = that.getDStyle();
		
		if(style == "Default") {
			this.setStyle(sap.ui.commons.ButtonStyle.Default);
			// other settings on after rendering
		} else {
			if(style == "Emph") {
				this.setStyle(sap.ui.commons.ButtonStyle.Emph);
			} else if(style == "Accept") {
				this.setStyle(sap.ui.commons.ButtonStyle.Accept);
			} else if(style == "Reject") {
				this.setStyle(sap.ui.commons.ButtonStyle.Reject);
			} else {
				this.setStyle(sap.ui.commons.ButtonStyle.Default);
			}
		}
	},

});
})();