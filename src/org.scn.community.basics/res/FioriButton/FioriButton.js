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
	"./FioriButtonSpec",
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

FioriButton = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that._ownScript = org_scn_community_basics.readOwnScriptAccess("", "org.scn.community.basics.FioriButton");
		
		that.addStyleClass("scn-pack-FioriButton");
		
		that.attachPress(function() {
			that.fireDesignStudioEvent("onClick");
		});
		
		that.onAfterRendering = function() {
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
				that.addStyleClass("scn-pack-FioriButton-S");
			}
		};
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
		var size = that.getDSize();
		var icon = that.getDIcon();
		var text = that.getDText();
		var tooltip = that.getDTooltip();

		if(text != ""){
			that.setText(" " + text);	
		} else {
			that.setText(text);
		}
		
		that.setTooltip(tooltip);
				
		// check if already registered, mark if not
		if(org_scn_community_basics_FioriButton.registeredStyles.indexOf("."+icon) == -1){
			// append this style, add the style to list of registered styles
			org_scn_community_basics_FioriButton.registeredStyles = org_scn_community_basics_FioriButton.registeredStyles + "."+icon;
			$( "<style>.sf"+icon+":before{content:'\\"+icon+"';}</style>" ).appendTo("head");	
		}
		
		that.addStyleClass("scn-pack-FioriButton-" + size);
		that.addStyleClass("sf" + icon);
		
		var aNames = sap.ui.core.IconPool.getIconNames();
		
		var style = that.getDStyle();
		
		if(style == "Default") {
			that.setStyle(sap.ui.commons.ButtonStyle.Default);
			// other settings on after rendering
		} else {
			if(style == "Emph") {
				that.setStyle(sap.ui.commons.ButtonStyle.Emph);
			} else if(style == "Accept") {
				that.setStyle(sap.ui.commons.ButtonStyle.Accept);
			} else if(style == "Reject") {
				that.setStyle(sap.ui.commons.ButtonStyle.Reject);
			} else {
				that.setStyle(sap.ui.commons.ButtonStyle.Default);
			}
		}
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

jQuery.sap.require("sap.ui.core.IconPool");
var org_scn_community_basics_FioriButton = org_scn_community_basics_FioriButton || {};
if(!org_scn_community_basics_FioriButton.registeredStyles){
	org_scn_community_basics_FioriButton.registeredStyles = org_scn_community_basics_FioriButton.registeredStyles || "";	
}

//%INIT-START%
myComponentData.instance = FioriButton;
jQuery.sap.require("sap.ui.commons.Button");
sap.ui.commons.Button.extend(myComponentData.fullComponentName, myComponentData.instance);
});