/**
 * Copyright 2014 SCN SDK Community
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

(function() {
/** code for recognition of script path */
var myScript = $("script:last")[0].src;
var ownComponentName = "org.scn.community.databound.TopFlopChart";
var _readScriptPath = function () {
	var scriptInfo = org_scn_community_basics.readOwnScriptAccess(myScript, ownComponentName);
	 return scriptInfo.myScriptPath;
};
/** end of path recognition */

sap.ui.commons.layout.AbsoluteLayout.extend(ownComponentName, {

	setFallbackPicture : function(value) {
		this._FallbackPicture = value;
		
		if(value != undefined && value != "")  {
			this._pImagePrefix = value.substring(0, value.lastIndexOf("/") + 1);	
		}
	},

	getFallbackPicture : function() {
		return this._FallbackPicture;
	},
	
	metadata: {
        properties: {
              "maxNumber": {type: "int"},
              "topBottom": {type: "string"},
              "usePictures": {type: "boolean"},
              "addCounter": {type: "boolean"},
              "valueDecimalPlaces": {type: "int"},
              "selectedKey": {type: "string"},
              "pressedKey": {type: "string"},
              "valuePrefix": {type: "string"},
              "valueSuffix": {type: "string"},
              "deltaValueSuffix": {type: "string"},
              "fixedAverage": {type: "int"},
              "averagePrefix": {type: "string"},
              "averageSuffix": {type: "string"},
              "useBackground": {type: "boolean"},
              "showDelta": {type: "boolean"},
              "useDelta": {type: "boolean"},
              "allowInteraction": {type: "boolean"},
              "breakOnIndex": {type: "int"},
              "breakOnAverage": {type: "boolean"},
              "showAverage": {type: "boolean"},
              "valueStart": {type: "int"},
              "maxValueSize": {type: "int"},
        }
	},
	
	setData : function(value) {
		this._data = value;
		return this;
	},
	
	getData : function(value) {
		return this._data;
	},
	
	setMetadata : function(value) {
		this._metadata = value;
		return this;
	},

	getMetadata : function(value) {
		return this._metadata;
	},
  
	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();

		this._oElements = {};

		this.addStyleClass("scn-pack-DataTopFlopChart");
		
		that._lLayout = new sap.ui.layout.VerticalLayout({
			
		});
		
		// resize function
		that.onAfterRendering = function() {
			org_scn_community_basics.resizeContentAbsoluteLayout(that, that._lLayout);
		};
	},
	
	renderer: {},
	
	beforeDesignStudioUpdate : function() {
		this._width = this.oComponentProperties.width - 4;
		this._height = 20;
	},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		this._valueStart = this.getValueStart();
		
		var rerender = false;
		var propertiesNow = this._serializeProperites("selectedKey;pressedKey");
		
		if(this._serializedPropertiesAfter != propertiesNow) {
			this._serializedPropertiesAfter = propertiesNow;
			rerender = true;
		}

		if(rerender) {
			this._oElements = {};

			var lData = this._data;
			var lMetadata = this._metadata;
		
			var options = org_scn_community_databound.initializeOptions();
			
			options.iMaxNumber = this.getMaxNumber();
			options.iTopBottom = this.getTopBottom();
			options.iSortBy = "Value";
			options.iDuplicates = "Ignore";
			options.iNnumberOfDecimals = this.getValueDecimalPlaces();
			
			options.average = that.getFixedAverage();
			if(options.average == -1) {
				options.average = undefined;
			}
			
			var returnObject = org_scn_community_databound.getTopBottomElementsForDimension 
		     (lData, lMetadata, "", options);
			
			lElementsToRenderArray = returnObject.list;
			
			// Destroy old content
			this._lLayout.destroyContent();
			
			var breakOnIndex = this.getBreakOnIndex();
			var breakOnAverage = this.getBreakOnAverage();
			var showAverage = this.getShowAverage();
			
			// distribute content
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				if(breakOnIndex == i) {
					var lImageElement = this.createEmptyLeaderElement();
					this._lLayout.addContent(lImageElement);
				}
				
				var element = lElementsToRenderArray[i];
				if(breakOnAverage) {
					if(this.getTopBottom() != "Bottom X" && element.delta < 0) {
						var lImageElement = this.createEmptyLeaderElement();
						this._lLayout.addContent(lImageElement);
						breakOnAverage = false;
					}
				}
				
				var lImageElement = this.createLeaderElement(i, element.key, element.text, element.url, element.value, element.valueS, element.counter, element.delta, returnObject);
				this._oElements[element.key] = lImageElement;
				this._lLayout.addContent(lImageElement);
			}

			if(showAverage) {
				var lMetaDataLocale = "en";
				if(lMetadata) {lMetaDataLocale = lMetadata.locale;}
				
				// insert Average Information
				var oTextValue = new sap.ui.commons.TextView();
				oTextValue.addStyleClass("scn-pack-DataTopFlopChart-AverageText");
				oTextValue.setText(this.getAveragePrefix() + org_scn_community_basics.getFormattedValue(returnObject.average, lMetaDataLocale, this.getValueDecimalPlaces()) + this.getAverageSuffix());
				this._lLayout.addContent(
						oTextValue
				);
			}
		} else {
			for (lElementKey in this._oElements) {
				var lElement = this._oElements[lElementKey];
				
				if(this.getSelectedKey() == lElement.internalKey) {
					lElement.addStyleClass("scn-pack-DataTopFlopChart-SelectedValue");
				} else {
					lElement.removeStyleClass("scn-pack-DataTopFlopChart-SelectedValue");
				}
			}
		}
	},
	
	createEmptyLeaderElement: function (index, iImageKey, iImageText, iImageUrl, value, valueAsString, counter, delta, returnObject) {
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout ({
			width: this._width + "px",
			height: this._height + "px"
		});
		
		return oLayout;
	},
	
	createLeaderElement: function (index, iImageKey, iImageText, iImageUrl, value, valueAsString, counter, delta, returnObject) {
		var that = this;
		
		// in case starts with http, keep as is 
		if(iImageUrl.indexOf("http") == 0) {
			// no nothing
		} else {
			// in case of repository, add the prefix from repository
			if(this._pImagePrefix != undefined && this._pImagePrefix != ""){
				iImageUrl = this._pImagePrefix + iImageUrl;
				var extension = this.getFallbackPicture();
				extension = extension.substring(extension.lastIndexOf("."));

				iImageUrl = iImageUrl + extension;
			} else {
				iImageUrl = this._ownScript + "TopFlopChart.png";
			}
		}
		
		var lAllowInteraction = this.getAllowInteraction();
		
		var lUsePictures = this.getUsePictures();
		var lAddCounter = this.getAddCounter();
		
		var oLine = new sap.ui.commons.layout.AbsoluteLayout ({
			width: "1px",
			height: this._height + "px"
		});
		oLine.addStyleClass("scn-pack-DataTopFlopChart-BaseLine");
		
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout ({
			width: this._width + "px",
			height: this._height + "px"
		});
		
		if(delta < 0) {
			delta = delta * -1;
		}

		var baseValue = value;
		var baseMax = returnObject.maxValue;
		var baseStart = this._valueStart; 
		var baseWidth = this.getMaxValueSize();
		if(baseWidth == -1) {
			baseWidth = this._width;
		}

		if(this.getUseDelta()) {
			baseValue = delta;
			baseMax = returnObject.maxDelta;
			baseStart = ((this._width - this._valueStart) / 2) + this._valueStart;
			if(baseWidth == this._width) {
				baseWidth = baseWidth - 70;
			}
		}
		
		var lSizeValueBackground = (baseWidth - baseStart) * baseMax / baseMax;
		var lSizeValue = (baseWidth - baseStart) * baseValue / baseMax;
		
		var oValueLayout = new sap.ui.commons.layout.AbsoluteLayout ({
			width: lSizeValue + "px",
			height: "18px"
		});		
		
		var oValueLayoutBackground = undefined;
		if(this.getUseBackground()) {
			oValueLayoutBackground = new sap.ui.commons.layout.AbsoluteLayout ({
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

		var oIndexText = undefined;
		if(lAddCounter) {
			oIndexText = new sap.ui.commons.TextView();
			oIndexText.addStyleClass("scn-pack-DataTopFlopChart-IndexText");
			oIndexText.setText(counter + ".");
		}

		var oNameLink = undefined;
		if(lAllowInteraction) {
			oNameLink = new sap.ui.commons.Link();	
		} else {
			oNameLink = new sap.ui.commons.TextView();
		}
		
		oNameLink.addStyleClass("scn-pack-DataTopFlopChart-Link");

		var oImage = new sap.ui.commons.Image ({
			src : iImageUrl,
			width : "16px",
			height : "16px",
			alt : iImageText,
			tooltip : iImageText,
		});

		oImage.addStyleClass("scn-pack-DataTopFlopChart-Picture");
		oImage.internalKey = iImageKey;
		
		var oTextValue = new sap.ui.commons.TextView();
		oTextValue.addStyleClass("scn-pack-DataTopFlopChart-Text");
		
		var oTextDeltaValue = new sap.ui.commons.TextView();
		oTextDeltaValue.addStyleClass("scn-pack-DataTopFlopChart-TextDelta");
		
		if(this.getSelectedKey() == iImageKey) {
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
		
		oTextValue.setText (this.getValuePrefix() + valueAsString + this.getValueSuffix());
		
		var delta = value - returnObject.average;
		if(delta > 0) {
			oTextDeltaValue.setText (" Δ " + "+" + org_scn_community_basics.getFormattedValue(delta, this._metadata.locale, this.getValueDecimalPlaces()) + this.getDeltaValueSuffix());	
		} else {
			oTextDeltaValue.setText (" Δ " + org_scn_community_basics.getFormattedValue(delta, this._metadata.locale, this.getValueDecimalPlaces()) + this.getDeltaValueSuffix());
		}
		
		if(!this.getUseDelta() || delta > 0) {
			if(this.getUseBackground()) {
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
			if(this.getUseBackground()) {
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

		if(lAddCounter) {
			oLayout.addContent(
					oIndexText,
					{left: "1px", top: "0px"}
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

		var textNamePlace = this._width - this._valueStart + 5;
		oLayout.addContent(
				oNameLink,
				{right: (textNamePlace) + "px", top: "0px"}	
		);
		
		var textValuePlace = this._valueStart + 3;
		oLayout.addContent(
				oTextValue,
				{left: (textValuePlace) + "px", top: "0px"}
		);

		var textDeltaPlace = this._width - baseStart - lSizeValue + 3;
		
		if(this.getShowDelta()){
			if(this.getUseDelta()){
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

		oLayout.addContent(
				oLine,
				{left: (baseStart - 1) + "px", top: "0px"}
		);
		
		return oLayout;
	},
	
	updateSelection : function (iSelectedKey) {
		var lContent = this._lLayout.getContent();
		
		for (var i = 0; i < lContent.length; i++) {
			var lLayout = lContent [i];
			
			if(iSelectedKey == lLayout.internalKey){
				lLayout.addStyleClass("scn-pack-DataTopFlopChart-SelectedValue");
			} else {
				lLayout.removeStyleClass("scn-pack-DataTopFlopChart-SelectedValue");
			};
		};
	},
	
	// http://www.sitepoint.com/javascript-generate-lighter-darker-color/
	_colorLuminance : function (hex, lum) {

		// validate hex string
		hex = String(hex).replace(/[^0-9a-f]/gi, '');
		if (hex.length < 6) {
			hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
		}
		lum = lum || 0;

		// convert to decimal and change luminosity
		var rgb = "#", c, i;
		for (i = 0; i < 3; i++) {
			c = parseInt(hex.substr(i*2,2), 16);
			c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			rgb += ("00"+c).substr(c.length);
		}

		return rgb;
	},
	
	_serializeProperites : function (excluding){
		var props = this.oComponentProperties.content.control;

		if(excluding == undefined) {
			excluding = "";
		}

		var serialization = "";
		for (var key in props) {
		  if (props.hasOwnProperty(key) && excluding.indexOf(key) == -1) {
			  serialization = serialization + key + "->" + props[key] + ";";
		  }
		}
		
		// size
		serialization = serialization + "W->" + this.oComponentProperties.width;
		serialization = serialization + "H->" + this.oComponentProperties.height;
		// data
		serialization = serialization + "DATA->" + JSON.stringify(this._data);
		serialization = serialization + "METADATA->" + JSON.stringify(this._metadata);

		return serialization;
	},

});
})();