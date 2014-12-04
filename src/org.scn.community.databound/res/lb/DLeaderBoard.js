/**
 * Copyright 2014 Karol Kalisz
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
		var myScriptSuffix = "res/lb/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.databound.LeaderBoard", {

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
              "valueSuffix": {type: "string"}
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
		
		this.addStyleClass("scn-pack-DataLeaderBoard");
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
		if(!this._lLayout) {
			this._lLayout = new sap.ui.layout.VerticalLayout({
				
			});

			this.addContent(
				this._lLayout,
				{left: "0px", top: "2px"}	
			);
		}
		
		var propertiesNow = this._serializeProperites("selectedKey;pressedKey");

		var rerender = false;
		if(this._serializedPropertiesAfter != propertiesNow) {
		  this._serializedPropertiesAfter = propertiesNow;
		  rerender = true;
		}
		
		if(rerender) {
			this._oElements = {};
			
			this._maxValue = undefined;
			
			var lData = this._data;
			var lMetadata = this._metadata;
			
			var lElementsToRenderArray = this._getElements(lData, lMetadata);

			// Destroy old content
			this._lLayout.destroyContent();

			// find highest value
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				if(this._maxValue == undefined) {
					this._maxValue = element.value;
				}
				if(element.value > this._maxValue) {
					this._maxValue = element.value;
				}
			}
			
			if(this._maxValue == 0) {
				this._maxValue = 1;
			}
			
			// distribute content
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				var lImageElement = this.createLeaderElement(i, element.key, element.text, element.url, element.value, element.valueS);
				this._lLayout.addContent(lImageElement);
			}
		} else {
			for (lElementKey in this._oElements) {
				var lElement = this._oElements[lElementKey];
				
				if(this.getSelectedKey() == lElement.internalKey) {
					lElement.addStyleClass("scn-pack-DataTopFlop-SelectedValue");
				} else {
					lElement.removeStyleClass("scn-pack-DataTopFlop-SelectedValue");
				}
			}
		}

	},
	
	_getElements : function (data, metadata) {
		var list = [];
		
		if(!data || data == "" || data == undefined) {
			return list;
		}
		
		// colum or row? 1= column, 2= row
		var dimesniosnIndex = 1;
		if (data.columnCount > data.rowCount) {
			dimesniosnIndex = 0;
		}
		
		for (var i = 0; i < data.data.length; i++) {
			var isResult = metadata.dimensions[dimesniosnIndex].members[i].type == "RESULT";
			
			if(!isResult) {
				var key = metadata.dimensions[dimesniosnIndex].members[i].key;
				var text = metadata.dimensions[dimesniosnIndex].members[i].text;
				// check the key existence
				if(text.indexOf("|") > -1) {
					text = text.substring(0, text.indexOf("|"));
				}
				
				var value = data.data[i];

				var itemDef = { 
					key: key, 
					text: text, 
					url: key,
					value: value,
					valueS: this._fFormatNumber(value)
				};

				list.push(itemDef);
			}
		}
		
		list.sort(function(a,b) { return parseFloat(b.value) - parseFloat(a.value) } );

		var isTop = (this.getTopBottom() == "Top X");
		
		var max = this.getMaxNumber();
		var newList = [];
		
		var counter = 0;
		if(isTop) {
			for (var i = 0; i < list.length; i++) {
				if(counter >= max) {
					break;
				}
				newList.push(list[i]);
				counter = counter + 1;
			}
		} else {
			var start = list.length-max;
			
			if(list.length < max) {
				start = 0;
			}

			for (var i = start; i < list.length; i++) {
				if(counter >= max) {
					break;
				}
				newList.push(list[i]);
				counter = counter + 1;
			}
		}
		
		
		
		return newList;
	},
	
	createLeaderElement: function (index, iImageKey, iImageText, iImageUrl, value, valueAsString) {
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
				iImageUrl = this._ownScript + "DLeaderBoard.png";
			}
		}
		
		var lUsePictures = this.getUsePictures();

		var lLeftMargin = "45px";
		if(lUsePictures) {
			lLeftMargin = "82px";
		}
		
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout ({
			width: "225px",
			height: "40px"
		});
		
		value = 225 * value / this._maxValue;
		
		var oValueLayout = new sap.ui.commons.layout.AbsoluteLayout ({
			width: value + "px",
			height: "40px"
		});
		
		oValueLayout.addStyleClass("scn-pack-DataLeaderBoard-ValueLayout");

		oLayout.addContent(
				oValueLayout,
				{left: "0px", top: "0px"}	
		);
		
		oLayout.addStyleClass("scn-pack-DataLeaderBoard-Layout");
		oLayout.internalKey = iImageKey;

		if(this.getAddCounter()) {
			var oIndexText = new sap.ui.commons.TextView();
			oIndexText.addStyleClass("scn-pack-DataLeaderBoard-IndexText");
			oIndexText.setText((index+1) + ".");
			
			oLayout.addContent(
					oIndexText,
					{right: "200px", top: "10px"}
			);
		}
		
		oNameLink = new sap.ui.commons.Link();
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
		
		if(this.getSelectedKey() == iImageKey) {
			oLayout.addStyleClass("scn-pack-DataLeaderBoard-SelectedValue");
		}
		
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
		
		oText.setText (this.getValuePrefix() + valueAsString + this.getValueSuffix());
		
		return oLayout;
	},
	
	updateSelection : function (iSelectedKey) {
		var lContent = this._lLayout.getContent();
		
		for (var i = 0; i < lContent.length; i++) {
			var lLayout = lContent [i];
			
			if(iSelectedKey == lLayout.internalKey){
				lLayout.addStyleClass("scn-pack-DataLeaderBoard-SelectedValue");
			} else {
				lLayout.removeStyleClass("scn-pack-DataLeaderBoard-SelectedValue");
			};
		};
	},
	
	_fFormatNumber : function (value) {
		if(!this._metadata) {
			return value;
		}
		sap.common.globalization.NumericFormatManager.setPVL(this._metadata.locale);
		var strFormat = "#"+sap.common.globalization.NumericFormatManager.getThousandSeparator()+"##0";
		
		if (this.getValueDecimalPlaces() > 0) {
			strFormat += sap.common.globalization.NumericFormatManager.getDecimalSeparator();
			for (var i = 0; i < this.getValueDecimalPlaces(); i++) {
				strFormat += "0";
			}
		}
		
		var valueFormatted = sap.common.globalization.NumericFormatManager.format(value, strFormat);
		return valueFormatted;
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