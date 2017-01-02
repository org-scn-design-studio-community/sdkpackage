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
	"./FioriButtonMSpec",
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

FioriButtonM = {

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

		that.setText(text);
		
		that.setTooltip(tooltip);
		
		that.setIcon(icon);
		
		var style = that.getDStyle();
		
		if(style == "Default") {
			that.setType(sap.m.ButtonType.Default);
			// other settings on after rendering
		} else {
			if(style == "Emph") {
				that.setType(sap.m.ButtonType.Emphasized);
			} else if(style == "Accept") {
				that.setType(sap.m.ButtonType.Accept);
			} else if(style == "Reject") {
				that.setType(sap.m.ButtonType.Reject);
			} else {
				that.setType(sap.m.ButtonType.Default);
			}
		}
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

jQuery.sap.require("sap.ui.core.IconPool");
var org_scn_community_basics_FioriButtonM = org_scn_community_basics_FioriButtonM || {};
if(!org_scn_community_basics_FioriButtonM.registeredStyles){
	org_scn_community_basics_FioriButtonM.registeredStyles = org_scn_community_basics_FioriButtonM.registeredStyles || "";	
}

//%INIT-START%
myComponentData.instance = FioriButtonM;
jQuery.sap.require("sap.m.Button");
sap.m.Button.extend(myComponentData.fullComponentName, myComponentData.instance);
});