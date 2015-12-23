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
	"./TopFlopChartSpec",
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

TopFlopChart = {

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

		that.addStyleClass("scn-pack-DataTopFlopChart");
				
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
			var options = org_scn_community_databound.initializeOptions();

			options.iMaxNumber = that.getMaxNumber();
			options.iTopBottom = that.getTopBottom().replace(" ", "").replace("X", "");
			options.allKeys = true;
			options.idPrefix = that.getId();
			options.iSortBy = "Value";
			options.iDuplicates = "Ignore";
			options.iIgnoreAverage = that.getIgnoreAverage();
			options.iNumberOfDecimals = parseInt(that.getValueDecimalPlaces().replace("D", ""));
			
			options.average = that.getFixedAverage();
			if(options.average == -1) {
				options.average = undefined;
			}

			options.iDisplayText = "Text";
			
			var dataList = that.getDataCellList();
			that._metaData = that.getDSMetadata();
			
			that._returnObject = org_scn_community_databound.getTopBottomElementsForDimension(dataList, that._metaData, "", options);
		} else {
			var options = org_scn_community_databound.initializeOptions();

			options.iMaxNumber = that.getMaxNumber();
			options.iTopBottom = that.getTopBottom().replace(" ", "").replace("X", "");
			options.allKeys = true;
			options.idPrefix = that.getId();
			options.iSortBy = "Value";
			options.iDuplicates = "Ignore";
			options.iNumberOfDecimals = parseInt(that.getValueDecimalPlaces().replace("D", ""));

			options.average = that.getFixedAverage();
			if(options.average == -1) {
				options.average = undefined;
			}

			options.iDisplayText = "Text";
			
			var dataList = flatData;
			that._metaData = flatData;
			
			that._returnObject = org_scn_community_databound.getTopBottomElementsForDimension(dataList, that._metaData, "", options);
		}
		
		// processing on data
		if(that._oResize) {
			that._oResize(true, true);
		}
	},

	afterPrepare: function (owner) {
		var that = owner;
			
		// visualization on processed data
		that._valueStart = that.getValueStart();
		
		that._oElements = {};

		lElementsToRenderArray = that._returnObject.list;
		
		// Destroy old content
		that._lLayout.destroyContent();
		
		var breakOnIndex = that.getBreakOnIndex();
		var breakOnAverage = that.getBreakOnAverage();
		var showAverage = that.getShowAverage();
		
		// distribute content
		for (var i = 0; i < lElementsToRenderArray.length; i++) {
			if(breakOnIndex == i) {
				var lImageElement = that.createEmptyLeaderElement();
				that._lLayout.addContent(lImageElement);
			}
			
			var element = lElementsToRenderArray[i];
			if(breakOnAverage) {
				if(that.getTopBottom().replace(" ", "").replace("X", "") != "Bottom" && element.delta < 0) {
					var lImageElement = that.createEmptyLeaderElement();
					that._lLayout.addContent(lImageElement);
					breakOnAverage = false;
				}
			}
			
			var lImageElement = that.createLeaderElement(that, i, element.key, element.text, element.url, element.value, element.valueS, element.counter, element.delta, that._returnObject);
			that._oElements[element.key] = lImageElement;
			that._lLayout.addContent(lImageElement);
		}

		if(showAverage) {
			var lMetaDataLocale = "en";
			if(that._metaData) {lMetaDataLocale = that._metaData.locale;}
			
			// insert Average Information
			var oTextValue = new sap.ui.commons.TextView();
			oTextValue.addStyleClass("scn-pack-DataTopFlopChart-AverageText");
			oTextValue.setText(that.getAveragePrefix() + org_scn_community_basics.getFormattedValue(that._returnObject.average, lMetaDataLocale, parseInt(that.getValueDecimalPlaces().replace("D", ""))) + that.getAverageSuffix());
			that._lLayout.addContent(
					oTextValue
			);
		}
	},
	
	onResize: function(width, height, parent) {
		if(parent._returnObject == undefined) {return;}
		try{
			parent.afterPrepare(parent);	
		}catch (e) {
			alert(e + ", " + e.stack);
		}
	},
	
	createEmptyLeaderElement: function (owner, index, iImageKey, iImageText, iImageUrl, value, valueAsString, counter, delta, returnObject) {
		var that = owner;
		
		var oLayout = new sap.zen.commons.layout.AbsoluteLayout ({
			width: that._containerWidth + "px",
			height: that._height + "px"
		});
		
		return oLayout;
	},
	
	createLeaderElement: function (owner, index, iImageKey, iImageText, iImageUrl, value, valueAsString, counter, delta, returnObject) {
		var that = owner;
		
		iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getFallbackPicture(), iImageUrl, "TopFlopChart.png");
		
		var lAllowInteraction = that.getAllowInteraction();
		
		var lUsePictures = that.getUsePictures();
		var lAddCounter = that.getAddCounter();
		
		var oLayout = new sap.zen.commons.layout.AbsoluteLayout ({
			width: (owner._containerWidth-6) + "px",
			height: 40 + "px"
		});
		
		if(delta < 0) {
			delta = delta * -1;
		}

		var baseValue = value;
		var baseMax = returnObject.maxValue;
		var baseStart = that._valueStart; 
		var baseWidth = that.getMaxValueSize();
		if(baseWidth == -1) {
			baseWidth = that._containerWidth - 8;
		}

		if(that.getUseDelta()) {
			baseValue = delta;
			baseMax = returnObject.maxDelta;
			baseStart = ((that._containerWidth - that._valueStart) / 2) + that._valueStart;
			if(baseWidth == that._containerWidth - 8) {
				baseWidth = baseWidth - 70;
			}
		}
		
		var lSizeValueBackground = (baseWidth - baseStart) * baseMax / baseMax;
		var lSizeValue = (baseWidth - baseStart) * baseValue / baseMax;
		
		var oValueLayout = new sap.zen.commons.layout.AbsoluteLayout ({
			width: lSizeValue + "px",
			height: "18px"
		});		
		
		var oValueLayoutBackground = undefined;
		if(that.getUseBackground()) {
			oValueLayoutBackground = new sap.zen.commons.layout.AbsoluteLayout ({
				width: lSizeValueBackground + "px",
				height: "18px"
			});
			oValueLayoutBackground.addStyleClass("scn-pack-DataTopFlopChart-ValueLayout");
		}

		if(value < returnObject.average) {
			oValueLayout.addStyleClass("scn-pack-DataTopFlopChart-ValueLayoutBad");
		} else {
			oValueLayout.addStyleClass("scn-pack-DataTopFlopChart-ValueLayoutGood");
		}

		if(lAllowInteraction) {
			oLayout.addStyleClass("scn-pack-DataTopFlopChart-Layout");	
		} else {
			oLayout.addStyleClass("scn-pack-DataTopFlopChart-LayoutNoInteraction");	
		}
		
		oLayout.internalKey = iImageKey;

		var oNameLink = undefined;
		if(lAllowInteraction) {
			oNameLink = new sap.ui.commons.Link();	
		} else {
			oNameLink = new sap.ui.commons.TextView();
		}
		
		oNameLink.addStyleClass("scn-pack-DataTopFlopChart-Link");

		var oImage = new sap.ui.commons.Image ({
			src : iImageUrl,
			width : "32px",
			height : "32px",
			alt : iImageText,
			tooltip : iImageText,
		});

		oImage.addStyleClass("scn-pack-DataTopFlopChart-Picture");
		oImage.internalKey = iImageKey;
		
		var oTextValue = new sap.ui.commons.TextView();
		oTextValue.addStyleClass("scn-pack-DataTopFlopChart-Text");
		
		var oTextDeltaValue = new sap.ui.commons.TextView();
		oTextDeltaValue.addStyleClass("scn-pack-DataTopFlopChart-TextDelta");
		
		if(that.getSelectedKey() == iImageKey) {
			oLayout.addStyleClass("scn-pack-DataTopFlopChart-SelectedValue");
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
					that.updateSelection(oImage.internalKey);
					
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
		
		oTextValue.setText (that.getValuePrefix() + valueAsString + that.getValueSuffix());
		
		var delta = value - returnObject.average;
		if(delta > 0) {
			oTextDeltaValue.setText (" Δ " + "+" + org_scn_community_basics.getFormattedValue(delta, that._metaData.locale, parseInt(that.getValueDecimalPlaces().replace("D", ""))) + that.getDeltaValueSuffix());	
		} else {
			oTextDeltaValue.setText (" Δ " + org_scn_community_basics.getFormattedValue(delta, that._metaData.locale, parseInt(that.getValueDecimalPlaces().replace("D", ""))) + that.getDeltaValueSuffix());
		}
		
		if(!that.getUseDelta() || delta > 0) {
			if(that.getUseBackground()) {
				oLayout.addContent(
						oValueLayoutBackground,
						{left: baseStart + "px", top: "1px"}	
				);
			}
			oLayout.addContent(
					oValueLayout,
					{left: baseStart + "px", bottom: "1px"}	
			);
		} else {
			if(that.getUseBackground()) {
				oLayout.addContent(
						oValueLayoutBackground,
						{left: (baseStart - lSizeValueBackground) + "px", top: "1px"}	
				);
			}
			oLayout.addContent(
					oValueLayout,
					{left: (baseStart - lSizeValue) + "px", bottom: "1px"}	
			);
		}


		if(that.getAddCounter()) {
			var oIndexText = new sap.ui.commons.TextView();
			oIndexText.addStyleClass("scn-pack-DataTopFlopChart-IndexText");
			oIndexText.setText(counter + ".");
			
			oLayout.addContent(
					oIndexText,
					{right: (owner._containerWidth-6-16) + "px", top: "10px"}
			);
		}
		
		if(lUsePictures) {
			if(lAddCounter) {
				oLayout.addContent(
						oImage,
						{left: "26px", top: "2px"}
				);
			} else {
				oLayout.addContent(
						oImage,
						{left: "2px", top: "2px"}
				);
			}
		}

		var textNamePlace = that._containerWidth - that._valueStart + 5;
		oLayout.addContent(
				oNameLink,
				{right: (textNamePlace) + "px", top: "0px"}	
		);
		
		var textValuePlace = that._valueStart + 3;
		oLayout.addContent(
				oTextValue,
				{left: (textValuePlace) + "px", top: "0px"}
		);

		var textDeltaPlace = that._containerWidth - baseStart - lSizeValue + 3;
		
		if(that.getShowDelta()){
			if(that.getUseDelta()){
				textDeltaPlace = 2;
				oLayout.addContent(
						oTextDeltaValue,
						{right: textDeltaPlace + "px", top: "0px"}
				);
			} else {
				if(lSizeValue < 120) {
					textDeltaPlace = baseStart + lSizeValue + 120;
					oLayout.addContent(
							oTextDeltaValue,
							{left: textDeltaPlace + "px", top: "0px"}
					);
				} else {
					oLayout.addContent(
							oTextDeltaValue,
							{right: textDeltaPlace + "px", top: "0px"}
					);
				}
			}
		}

		return oLayout;
	},
	
	updateSelection : function (iSelectedKey) {
		var that = this;

		var lContent = that._lLayout.getContent();
		
		for (var i = 0; i < lContent.length; i++) {
			var lLayout = lContent [i];
			
			if(iSelectedKey == lLayout.internalKey){
				lLayout.addStyleClass("scn-pack-DataTopFlopChart-SelectedValue");
			} else {
				lLayout.removeStyleClass("scn-pack-DataTopFlopChart-SelectedValue");
			};
		};
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};
//%INIT-START%
myComponentData.instance = TopFlopChart;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});