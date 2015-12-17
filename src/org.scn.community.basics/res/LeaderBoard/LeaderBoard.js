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
	"./LeaderBoardSpec",
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

LeaderBoard = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.addStyleClass("scn-pack-LeaderBoard");
		
		if(!that._lLayout) {
			that._lLayout = new sap.ui.layout.VerticalLayout({
				
			});
		}

		that._content = [];
		that._contentValue = [];
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		that.onAfterRendering = function () {
			org_scn_community_basics.resizeContentAbsoluteLayout(that, that._lLayout, that.onResize);
		}
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
		that._maxValue = undefined;
		
		var lElementsToRender = that.getElements();
		if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
			var lElementsToRenderArray = JSON.parse(lElementsToRender);

			// Destroy old content
			that._lLayout.destroyContent();
			that._content = [];
			that._contentValue = [];

			// find highest value
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				if(that._maxValue == undefined) {
					that._maxValue = element.value;
				}
				if(element.value > that._maxValue) {
					that._maxValue = element.value;
				}
			}
			
			if(that._maxValue == 0) {
				that._maxValue = 1;
			}
			
			// distribute content
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				var lImageElement = that.createLeaderElement(that, i, element.key, element.text, element.url, element.value, element.valueS);
				that._content.push(lImageElement);

				that._lLayout.addContent(lImageElement);
			}
		}

		if(parent._oResize) {parent._oResize(true, true);}
	},
	
	onResize: function(width, height, parent) {
		var that = parent;
		
		var content = that._content;
		for (var elementI in content) {
			var elementO = content[elementI];
			
			elementO.setWidth(width + "px");
		}
		var content = that._contentValue;
		for (var elementI in content) {
			var elementO = content[elementI];

			var value = elementO._realValue;
			var nWidth = width * value / that._maxValue;
			elementO.setWidth(nWidth + "px");
		}
	},
	
	createLeaderElement: function (owner, index, iImageKey, iImageText, iImageUrl, value, valueAsString) {
		var that = owner;
		
		if(iImageText == undefined) {iImageText = "";}
		if(value == undefined) {value = 0.0;}
		if(valueAsString == undefined) {valueAsString = "" + value;}

		iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getFallbackPicture(), iImageUrl, "LeaderBoard.png");

		var oLayout = new sap.zen.commons.layout.AbsoluteLayout ({
			width: "225px",
			height: "40px"
		});
		that._content.push(oLayout);
		
		var realValue = value;
		value = 225 * value / that._maxValue;
		
		var oValueLayout = new sap.zen.commons.layout.AbsoluteLayout ({
			width: value + "px",
			height: "40px"
		});
		oValueLayout._realValue = realValue;
		that._contentValue.push(oValueLayout);

		oValueLayout.addStyleClass("scn-pack-LeaderBoard-ValueLayout");

		oLayout.addContent(
				oValueLayout,
				{left: "0px", top: "0px"}	
		);
		
		oLayout.addStyleClass("scn-pack-LeaderBoard-Layout");
		oLayout.internalKey = iImageKey;

		if(that.getAddCounter()) {
			var oIndexText = new sap.ui.commons.TextView();
			oIndexText.addStyleClass("scn-pack-LeaderBoard-IndexText");
			oIndexText.setText((index+1) + ".");
			
			oLayout.addContent(
					oIndexText,
					{left: "10px", top: "10px"}
			);
		}
		
		oNameLink = new sap.ui.commons.Link();
		oNameLink.addStyleClass("scn-pack-LeaderBoard-Link");

		oLayout.addContent(
				oNameLink,
				{left: "82px", top: "2px"}	
		);

		var oImage = new sap.ui.commons.Image ({
			src : iImageUrl,
			width : "32px",
			height : "32px",
			alt : iImageText,
			tooltip : iImageText,
		});

		oImage.addStyleClass("scn-pack-LeaderBoard-Picture");
		oImage.internalKey = iImageKey;
		
		oLayout.addContent(
				oImage,
				{left: "45px", top: "5px"}
		);

		var oText = new sap.ui.commons.TextView();
		oText.addStyleClass("scn-pack-LeaderBoard-Text");
		
		oLayout.addContent(
				oText,
				{left: "82px", top: "20px"}
		);
		
		if(that.getSelectedKey() == iImageKey) {
			oLayout.addStyleClass("scn-pack-LeaderBoard-SelectedValue");
		}
		
		oNameLink.attachBrowserEvent('click', function() {
			that._linkEvent = true;
			that.setPressedKey(oImage.internalKey);
			
			that.fireDesignStudioPropertiesChangedAndEvent(["pressedKey"],"onPress");
		});

		oLayout.attachBrowserEvent('click', function () {
			if(that._linkEvent == true) {
				that._linkEvent = false;
			} else {
				that.setSelectedKey(oImage.internalKey);
				that.updateSelection(that, oImage.internalKey);
				
				that.fireDesignStudioPropertiesChangedAndEvent(["selectedKey"], "onSelectionChanged");
			}
		});
		
		oNameLink.setText (iImageText);
		oNameLink.setTooltip (iImageText);

		var requestForPicture = new XMLHttpRequest();
		
		requestForPicture.onreadystatechange = function() {
			// check status and react
			if (requestForPicture.readyState == 4){
				var imageToLoad = undefined;
				
				// sometimes it gets 200 without content
				if(requestForPicture.status == 404 || requestForPicture.responseUrl == "" || requestForPicture.response == "") {
					imageToLoad = that.getFallbackPicture();
				} else {
					imageToLoad = iImageUrl;
				};
				
				oImage.setSrc(imageToLoad);
			};
		};
		
		// just a check if there is some picture at all
		if(iImageUrl != undefined && iImageUrl != "") {
			requestForPicture.open("GET", iImageUrl, true);
			requestForPicture.send();
		}
		
		oText.setText (that.getValuePrefix() + valueAsString + that.getValueSuffix());
		
		return oLayout;
	},
	
	updateSelection : function (owner, iSelectedKey) {
		var that = owner;

		var lContent = that._lLayout.getContent();
		
		for (var i = 0; i < lContent.length; i++) {
			var lLayout = lContent [i];
			
			if(iSelectedKey == lLayout.internalKey){
				lLayout.addStyleClass("scn-pack-LeaderBoard-SelectedValue");
			} else {
				lLayout.removeStyleClass("scn-pack-LeaderBoard-SelectedValue");
			};
		};
	}
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = LeaderBoard;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});