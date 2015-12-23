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
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"shared/modules/component.databound"
	
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
		that._oElements = {};
		
		that.addStyleClass("scn-pack-DataLeaderBoard");
		
		that._lLayout = new sap.ui.layout.VerticalLayout({
			
		});
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		that.onAfterRendering = function () {
			org_scn_community_basics.resizeContentAbsoluteLayout(that, that._lLayout, that.onResize);
		}
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		var loadingResultset = "DataCellList";
		
		var data = undefined;		
		if(loadingResultset == "ResultSet" || loadingResultset == "ResultCell"){
			data = that.getData();
		} else if(loadingResultset == "DataCellList"){
			data = that.getDataCellList();
		}

		var metadata = that.getDSMetadata();

		if(!org_scn_community_databound.hasData (data, metadata)) {
			org_scn_community_databound.getSampleDataFlat (that, that.processData, that.afterPrepare, "result");
		} else {
			org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
		}
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	processData: function (flatData, afterPrepare, owner) {
		var that = owner;

		if(flatData == undefined) {
			var loadingResultset = "DataCellList";
				
			if(loadingResultset == "ResultSet"){
				var options = org_scn_community_databound.initializeOptions();
				options.swapAxes = that.getSwapAxes();
				
				that._flatData = org_scn_community_databound.flatten(that.getData(), options);
			} else if(loadingResultset == "ResultCell"){
				that._flatData = that.getData();
			} else if(loadingResultset == "DataCellList"){
				that._oElements = {};
				
				that._maxValue = undefined;
				
				var lData = that.getDataCellList();
				var lMetadata = that.getDSMetadata();
				
				var options = org_scn_community_databound.initializeOptions();
				
				options.iMaxNumber = that.getMaxNumber();
				options.iTopBottom = that.getTopBottom().replace(" ", "").replace("X", "");
				options.iSortBy = "Value";
				options.iDuplicates = "Ignore";
				options.iNumberOfDecimals = that.getValueDecimalPlaces().replace("D", "");
				options.iIgnoreAverage = that.getIgnoreAverage();
				options.iDisplayText = "Text";
				
				that._returnObject = org_scn_community_databound.getTopBottomElementsForDimension (lData, lMetadata, "", options);
			}
		} else {
			that._flatData = flatData;

			that._maxValue = undefined;

			var lData = that._flatData;
			var lMetadata = that._flatData;

			var options = org_scn_community_databound.initializeOptions();

			options.iMaxNumber = that.getMaxNumber();
			options.iTopBottom = that.getTopBottom().replace(" ", "").replace("X", "");
			options.iSortBy = "Value";
			options.iDuplicates = "Ignore";
			options.iNumberOfDecimals = that.getValueDecimalPlaces().replace("D", "");
			options.iDisplayText = "Text";

			that._returnObject = org_scn_community_databound.getTopBottomElementsForDimension (lData, lMetadata, "", options);
		}
		
		// processing on data
		if(that._oResize) {
			that._oResize(true, true);
		}
	},

	afterPrepare: function (owner) {
		var that = owner;
			
		// Destroy old content
		that._lLayout.destroyContent();

		that._oElements = that._returnObject.list;

		// distribute content
		for (var i = 0; i < that._oElements.length; i++) {
			var element = that._oElements[i];
			var lImageElement = that.createLeaderElement(that, i, element.key, element.text, element.url, element.value, element.valueS, element.counter, that._returnObject);
			that._lLayout.addContent(lImageElement);
		}
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
		if(parent._returnObject == undefined) {return;}
		try{
			parent.afterPrepare(parent);	
		}catch (e) {
			alert(e + ", " + e.stack);
		}
	},
	
	createLeaderElement: function (owner, index, iImageKey, iImageText, iImageUrl, value, valueAsString, counter, returnObject) {
		var that = owner;
		
		iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getFallbackPicture(), iImageUrl, "LeaderBoard.png");
		
		var lAllowInteraction = that.getAllowInteraction();
		var lUsePictures = that.getUsePictures();

		var lLeftMargin = "45px";
		if(lUsePictures) {
			lLeftMargin = "82px";
		}
		
		var oLayout = new sap.zen.commons.layout.AbsoluteLayout ({
			width: (owner._containerWidth-6) + "px",
			height: "40px"
		});
		
		value = (owner._containerWidth-6) * value / returnObject.maxValue;
		
		var oValueLayout = new sap.zen.commons.layout.AbsoluteLayout ({
			width: value + "px",
			height: "40px"
		});
		
		if(lAllowInteraction) {
			oValueLayout.addStyleClass("scn-pack-DataLeaderBoard-ValueLayout");	
		} else {
			oValueLayout.addStyleClass("scn-pack-DataLeaderBoard-ValueLayoutNoInteraction");	
		}

		oLayout.addContent(
				oValueLayout,
				{left: "0px", top: "0px"}	
		);
		
		oLayout.addStyleClass("scn-pack-DataLeaderBoard-Layout");
		oLayout.internalKey = iImageKey;

		if(that.getAddCounter()) {
			var oIndexText = new sap.ui.commons.TextView();
			oIndexText.addStyleClass("scn-pack-DataLeaderBoard-IndexText");
			oIndexText.setText(counter + ".");
			
			oLayout.addContent(
					oIndexText,
					{right: (owner._containerWidth-6-25) + "px", top: "10px"}
			);
		}
		
		var oNameLink = undefined;
		if(lAllowInteraction) {
			oNameLink = new sap.ui.commons.Link();	
		} else {
			oNameLink = new sap.ui.commons.TextView();
		}
		oNameLink.addStyleClass("scn-pack-DataLeaderBoard-Link");

		oLayout.addContent(
				oNameLink,
				{left: lLeftMargin, top: "2px"}	
		);

		var oImage = new sap.ui.commons.Image ({
			src : iImageUrl,
			width : "32px",
			height : "32px",
			alt : iImageText,
			tooltip : iImageText,
		});

		oImage.addStyleClass("scn-pack-DataLeaderBoard-Picture");
		oImage.internalKey = iImageKey;
		
		if(lUsePictures) {
			oLayout.addContent(
					oImage,
					{left: "45px", top: "5px"}
			);
		}

		var oText = new sap.ui.commons.TextView();
		oText.addStyleClass("scn-pack-DataLeaderBoard-Text");
		
		oLayout.addContent(
				oText,
				{left: lLeftMargin, top: "20px"}
		);
		
		if(that.getSelectedKey() == iImageKey) {
			oLayout.addStyleClass("scn-pack-DataLeaderBoard-SelectedValue");
		}
		
		if(lAllowInteraction) {
			oNameLink.attachBrowserEvent('click', function() {
				that._linkEvent = true;
				that.setPressedKey(oImage.internalKey);
				
				that.fireDesignStudioPropertiesChanged(["pressedKey"]);
				that.fireDesignStudioEvent("onPress");
			});
	
			oLayout.attachBrowserEvent('click', function () {
				if(that._linkEvent == true) {
					that._linkEvent = false;
				} else {
					that.setSelectedKey(oImage.internalKey);
					that.updateSelection(that, oImage.internalKey);
					
					that.fireDesignStudioPropertiesChanged(["selectedKey"]);
					that.fireDesignStudioEvent("onSelectionChanged");
				}
			});
		}

		oNameLink.setText (iImageText);
		oNameLink.setTooltip (iImageText);

		if(lUsePictures) {
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
				lLayout.addStyleClass("scn-pack-DataLeaderBoard-SelectedValue");
			} else {
				lLayout.removeStyleClass("scn-pack-DataLeaderBoard-SelectedValue");
			};
		};
	},
	
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = LeaderBoard;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});