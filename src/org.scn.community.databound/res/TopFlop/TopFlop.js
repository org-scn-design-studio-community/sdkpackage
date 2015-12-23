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
	"./TopFlopSpec",
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

TopFlop = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);
		
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
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
				that._options = org_scn_community_databound.initializeOptions();
				var options = that._options;

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
				
				that._returnObject = org_scn_community_databound.getTopBottomElementsForDimension (dataList, that._metaData, "", options);
			}
		} else {
			var lData = flatData;
			that._metaData = flatData;

			that._options = org_scn_community_databound.initializeOptions();
			var options = that._options;
			
			options.iMaxNumber = that.getMaxNumber();
			options.iTopBottom = that.getTopBottom().replace(" ", "").replace("X", "");
			options.iSortBy = "Value";
			options.iSortBy = "Value";
			options.iDuplicates = "Ignore";
			options.iNumberOfDecimals = parseInt(that.getValueDecimalPlaces().replace("D", ""));

			options.average = that.getFixedAverage();
			if(options.average == -1) {
				options.average = undefined;
			}

			options.iDisplayText = "Text";
			
			that._returnObject = org_scn_community_databound.getTopBottomElementsForDimension (lData, that._metaData, "", options);
		}

		// processing on data
		if(that._oResize) {
			that._oResize(true, true);
		}
	},

	afterPrepare: function (owner) {
		var that = owner;
			
		var rerender = true;
		if(rerender) {
			that._oElements = {};
			
			that._maxValue = undefined;
			that._maxDelta = -1;
			
			lElementsToRenderArray = that._returnObject.list;

			// Destroy old content
			that._lLayout.destroyContent();

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
				var lImageElement = that.createLeaderElement(that, i, element.key, element.text, element.url, element.value, element.valueS, element.counter, element.delta, that._returnObject);
				that._oElements[element.key] = lImageElement;
				that._lLayout.addContent(lImageElement);
			}

			// insert Average Information
			var oText = new sap.ui.commons.TextView();
			oText.addStyleClass("scn-pack-DataTopFlop-AverageText");

			var fixedAverage = that.getFixedAverage();
			if(fixedAverage == -1) {
				if(that._returnObject) {
					oText.setText(that.getAveragePrefix() + org_scn_community_basics.getFormattedValue(that._returnObject.average, that._metaData.locale, that._options.iNumberOfDecimals) + that.getAverageSuffix());
				} else {
					oText.setText(that.getAveragePrefix() + org_scn_community_basics.getFormattedValue(0, "en", that._options.iNumberOfDecimals) + that.getAverageSuffix());
				}
			} else {
				oText.setText(that.getAveragePrefix() + that.getFixedAverage());
			}
			
			that._lLayout.addContent(
					oText
			);	
		} else {
			for (lElementKey in that._oElements) {
				var lElement = that._oElements[lElementKey];
				
				if(that.getSelectedKey() == lElement.internalKey) {
					lElement.addStyleClass("scn-pack-DataTopFlop-SelectedValue");
				} else {
					lElement.removeStyleClass("scn-pack-DataTopFlop-SelectedValue");
				}
			}
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
	
	createLeaderElement: function (owner, index, iImageKey, iImageText, iImageUrl, value, valueAsString, counter, delta, returnObject) {
		var that = owner;
		
		iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getFallbackPicture(), iImageUrl, "TopFlop.png");
		
		var lAllowInteraction = that.getAllowInteraction();
		
		var lUsePictures = that.getUsePictures();
		var lAddCounter = that.getAddCounter();
		
		var lLeftMargin = "35px";
		var lLeftMarginPicture = "35px";
		
		if(lUsePictures && lAddCounter) {
			lLeftMargin = "72px";
			lLeftMarginPicture = "35px";
		} else if (lUsePictures) {
			lLeftMargin = "38px";
			lLeftMarginPicture = "2px";
		} else if (lAddCounter) {
			lLeftMargin = "35px";
			lLeftMarginPicture = "2px";
		}
		
		var oLayout = new sap.zen.commons.layout.AbsoluteLayout ({
			width: (owner._containerWidth-6) + "px",
			height: "40px"
		});
		
		if(delta < 0) {
			delta = delta * -1;
		}
		
		var lSizeValueBackground = (owner._containerWidth - 120) * returnObject.maxDelta / returnObject.maxDelta;
		var lSizeValue = (owner._containerWidth - 120) * delta / returnObject.maxDelta;
		
		var oValueLayout = new sap.zen.commons.layout.AbsoluteLayout ({
			width: lSizeValue + "px",
			height: "3px"
		});
		
		var oValueLayoutBackground = new sap.zen.commons.layout.AbsoluteLayout ({
			width: lSizeValueBackground + "px",
			height: "3px"
		});
		
		if(lAllowInteraction) {
			oValueLayoutBackground.addStyleClass("scn-pack-DataTopFlop-ValueLayout");	
		} else {
			oValueLayoutBackground.addStyleClass("scn-pack-DataTopFlop-ValueLayoutNoInteraction");	
		}

		if(value < returnObject.average) {
			oValueLayout.addStyleClass("scn-pack-DataTopFlop-ValueLayoutBad");
		} else {
			oValueLayout.addStyleClass("scn-pack-DataTopFlop-ValueLayoutGood");
		}

		oLayout.addContent(
				oValueLayoutBackground,
				{right: "2px", bottom: "3px"}	
		);
		oLayout.addContent(
				oValueLayout,
				{right: "2px", bottom: "3px"}	
		);
		
		oLayout.addStyleClass("scn-pack-DataTopFlop-Layout");
		oLayout.internalKey = iImageKey;

		if(that.getAddCounter()) {
			var oIndexText = new sap.ui.commons.TextView();
			oIndexText.addStyleClass("scn-pack-DataTopFlop-IndexText");
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
		oNameLink.addStyleClass("scn-pack-DataTopFlop-Link");

		oLayout.addContent(
				oNameLink,
				{left: lLeftMargin, top: "1px"}	
		);

		var oImage = new sap.ui.commons.Image ({
			src : iImageUrl,
			width : "32px",
			height : "32px",
			alt : iImageText,
			tooltip : iImageText,
		});

		oImage.addStyleClass("scn-pack-DataTopFlop-Picture");
		oImage.internalKey = iImageKey;
		
		if(lUsePictures) {
			oLayout.addContent(
					oImage,
					{left: lLeftMarginPicture, top: "5px"}
			);
		}

		var oText = new sap.ui.commons.TextView();
		oText.addStyleClass("scn-pack-DataTopFlop-Text");
		
		oLayout.addContent(
				oText,
				{left: lLeftMargin, bottom: "3px"}
		);
		
		var oTextDeltaValue = new sap.ui.commons.TextView();
		oTextDeltaValue.addStyleClass("scn-pack-DataTopFlop-TextDelta");
		
		oLayout.addContent(
				oTextDeltaValue,
				{right: "2px", top: "1px"}
		);
		
		if(that.getSelectedKey() == iImageKey) {
			oLayout.addStyleClass("scn-pack-DataTopFlop-SelectedValue");
		}
		
		if(lAllowInteraction) {
			oNameLink.attachBrowserEvent('click', function() {
				that._linkEvent = true;
				that.setPressedKey(oImage.internalKey);
				
				that.fireDesignStudioPropertiesChangedAndEvent(["pressedKey"], "onPress");
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
		
		var delta = value - returnObject.average;
		if(delta > 0) {
			oTextDeltaValue.setText (" Δ " + "+" + org_scn_community_basics.getFormattedValue(delta, that._metaData.locale, that._options.iNumberOfDecimals) + that.getDeltaValueSuffix());	
		} else {
			oTextDeltaValue.setText (" Δ " + org_scn_community_basics.getFormattedValue(delta, that._metaData.locale, that._options.iNumberOfDecimals) + that.getDeltaValueSuffix());
		}
		
		
		return oLayout;
	},
	
	updateSelection : function (owner, iSelectedKey) {
		var that = owner;
		var lContent = that._lLayout.getContent();
		
		for (var i = 0; i < lContent.length; i++) {
			var lLayout = lContent [i];
			
			if(iSelectedKey == lLayout.internalKey){
				lLayout.addStyleClass("scn-pack-DataTopFlop-SelectedValue");
			} else {
				lLayout.removeStyleClass("scn-pack-DataTopFlop-SelectedValue");
			};
		};
	},
	
	_fFormatNumber : function (value) {
		if(!that._metadata) {
			return value;
		}
		
		sap.common.globalization.NumericFormatManager.setPVL(that._metadata.locale);
		var strFormat = "#"+sap.common.globalization.NumericFormatManager.getThousandSeparator()+"##0";
		
		var decPlaces = parseInt(that.getValueDecimalPlaces().replace("D", ""));
		if (decPlaces > 0) {
			strFormat += sap.common.globalization.NumericFormatManager.getDecimalSeparator();
			for (var i = 0; i < decPlaces; i++) {
				strFormat += "0";
			}
		}
		
		var valueFormatted = sap.common.globalization.NumericFormatManager.format(value, strFormat);
		return valueFormatted;
	},

	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = TopFlop;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});