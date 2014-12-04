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
		var myScriptSuffix = "res/map/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.databound.Map", {

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

		this.addStyleClass("scn-pack-DataMap");
		
		
		this.onAfterRendering = function(e) {
			that._initMap(that.getId());
		};

	},
	
	renderer: {},
	
	beforeDesignStudioUpdate : function() {
		this._width = this.oComponentProperties.width;
		this._height = this.oComponentProperties.height;

		this._maxValue = undefined;
		this._minValue = undefined;
		this._maxDelta = -1;
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
			
			var lElementsToRenderArray = this._getElements(lData, lMetadata);
			
			// find highest value
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
				if(this._maxValue == undefined) {
					this._maxValue = element.value;
				}
				if(element.value > this._maxValue) {
					this._maxValue = element.value;
				}
				if(this._minValue == undefined) {
					this._minValue = element.value;
				}
				if(element.value < this._minValue) {
					this._minValue = element.value;
				}
			}
			
			if(this._maxValue == 0) {
				this._maxValue = 1;
			}
			if(this._minValue == 0) {
				this._minValue = 1;
			}
			
			var breakOnIndex = this.getBreakOnIndex();
			var breakOnAverage = this.getBreakOnAverage();
			var showAverage = this.getShowAverage();
			
			// distribute content
			for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var lImageElement = this.createLeaderElement(i, element.key, element.text, element.url, element.value, element.valueS, element.counter, element.delta);
				this._oElements[element.key] = lImageElement;
				
				// this._lLayout.addContent(lImageElement);
			}

//			if(showAverage) {
//				// insert Average Information
//				var oTextValue = new sap.ui.commons.TextView();
//				oTextValue.addStyleClass("scn-pack-DataTopFlopChart-AverageText");
//				oTextValue.setText(this.getAveragePrefix() + this._fFormatNumber(this._Average) + this.getAverageSuffix());
//				this._lLayout.addContent(
//						oTextValue
//				);
//			}
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
	
	_getElements : function (data, metadata) {
		var list = [];
		
		if(data == undefined) {
			return list;
		}
		
		var lValues = [];
		
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

				lValues.push(value);
				
				var itemDef = { 
					key: key, 
					text: text, 
					url: key,
					value: value,
					valueS: this._fFormatNumber(value),
				};

				list.push(itemDef);
			}
		}
		
		list.sort(function(a,b) { return parseFloat(b.value) - parseFloat(a.value) } );

		var lAverage = 0;
		for (var i = 0; i < lValues.length; i++) {
			lAverage = lAverage + lValues[i];
		}
		
		this._Average = lAverage / lValues.length;
		
		if(this.getFixedAverage() != -1) {
			this._Average = this.getFixedAverage();
		}
		
		var max = this.getMaxNumber();
		var newList = [];
		
		this._maxDelta = 0;
		
		var counter = 0;
		if(this.getTopBottom() == "Top X") {
			for (var i = 0; i < list.length; i++) {
				if(counter >= max) {
					break;
				}
				
				list[i].counter = (i+1);
				list[i].delta = (list[i].value - this._Average);
				
				if(list[i].delta > 0 && list[i].delta > this._maxDelta) {
					this._maxDelta = list[i].delta;	
				}
				if(list[i].delta < 0 && (list[i].delta * -1) > this._maxDelta) {
					this._maxDelta = (list[i].delta * -1);	
				}
				
				if(list[i].delta < 0) {
					break;
				}
				
				newList.push(list[i]);
				counter = counter + 1;
			}
		} else if (this.getTopBottom() == "Bottom X"){
			var start = list.length-max;
			
			if(list.length < max) {
				start = 0;
			}

			for (var i = start; i < list.length; i++) {
				if(counter >= max) {
					break;
				}
				
				list[i].counter = (i+1);
				list[i].delta = (list[i].value - this._Average);
				
				if(list[i].delta > 0 && list[i].delta > this._maxDelta) {
					this._maxDelta = list[i].delta;	
				}
				if(list[i].delta < 0 && (list[i].delta * -1) > this._maxDelta) {
					this._maxDelta = (list[i].delta * -1);	
				}
				
				if(list[i].delta > 0) {
					continue;
				}
				
				newList.push(list[i]);
				counter = counter + 1;
			}
		} else {
			for (var i = 0; i < list.length; i++) {
				if(counter >= max) {
					break;
				}
				
				list[i].counter = (i+1);
				list[i].delta = (list[i].value - this._Average);
				
				if(list[i].delta > 0 && list[i].delta > this._maxDelta) {
					this._maxDelta = list[i].delta;	
				}
				if(list[i].delta < 0 && (list[i].delta * -1) > this._maxDelta) {
					this._maxDelta = (list[i].delta * -1);	
				}

				if(list[i].delta < 0) {
					break;
				}
				
				newList.push(list[i]);
				counter = counter + 1;
			}
			
			var start = list.length-max;
			if(list.length < max) {
				start = 0;
			}
			
			if(start < counter) {
				start = counter;
			}

			counter = 0;
			
			for (var i = start; i < list.length; i++) {
				if(counter >= max) {
					break;
				}
				
				list[i].counter = (i+1);
				list[i].delta = (list[i].value - this._Average);
				
				if(list[i].delta > 0 && list[i].delta > this._maxDelta) {
					this._maxDelta = list[i].delta;	
				}
				if(list[i].delta < 0 && (list[i].delta * -1) > this._maxDelta) {
					this._maxDelta = (list[i].delta * -1);	
				}
				
				if(list[i].delta > 0) {
					continue;
				}
				
				newList.push(list[i]);
				counter = counter + 1;
			}
		}
		
		return newList;
	},
	
	createEmptyLeaderElement: function (index, iImageKey, iImageText, iImageUrl, value, valueAsString, counter, delta) {
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout ({
			width: this._width + "px",
			height: this._height + "px"
		});
		
		return oLayout;
	},
	
	createLeaderElement: function (index, iImageKey, iImageText, iImageUrl, value, valueAsString, counter, delta) {
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
				iImageUrl = this._ownScript + "DBaseChart.png";
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
		
		if(this._maxDelta == 0) {
			this._maxDelta = 1;
		}
		
		if(delta < 0) {
			delta = delta * -1;
		}

		var baseValue = value;
		var baseMax = this._maxValue;
		var baseStart = this._valueStart; 
		var baseWidth = this.getMaxValueSize();
		if(baseWidth == -1) {
			baseWidth = this._width;
		}

		if(this.getUseDelta()) {
			baseValue = delta;
			baseMax = this._maxDelta;
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

		if(value < this._Average) {
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
		
		var delta = value - this._Average;
		if(delta > 0) {
			oTextDeltaValue.setText (" Δ " + "+" + this._fFormatNumber(delta) + this.getDeltaValueSuffix());	
		} else {
			oTextDeltaValue.setText (" Δ " + this._fFormatNumber(delta) + this.getDeltaValueSuffix());
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
						{left: "22px", top: "2px"}
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
		
		if(this.getUseDelta()){
			textDeltaPlace = 2;
			oLayout.addContent(
					oTextDeltaValue,
					{right: textDeltaPlace + "px", top: "0px"}
			);
		} else {
			if(lSizeValue < 120) {
				textDeltaPlace = baseStart + lSizeValue + 3;
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
	
	_fFormatNumber : function (value) {
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
	
	_initMap : function(parentId) {
		var provider = new com.modestmaps.TemplatedLayer('http://tile.openstreetmap.org/{Z}/{X}/{Y}.png');
		  var map = new com.modestmaps.Map(parentId, provider);
		  
		  map.setCenter(new MM.Location(43.6478,280.6421)).setZoom(5);
		  
		  var canvas = document.createElement('canvas');
		  canvas.style.position = 'absolute';
		  canvas.style.left = '0';
		  canvas.style.top = '0';
		  canvas.width = map.dimensions.x;
		  canvas.height = map.dimensions.y;
		  map.parent.appendChild(canvas);

//		  function redraw() {
//		    var ctx = canvas.getContext('2d');
//		    ctx.clearRect(0,0,canvas.width,canvas.height);
//		    ctx.strokeStyle = '#404040';
//		    ctx.beginPath();
//		    var p = map.locationPoint(locations[0]);
//		    ctx.moveTo(p.x,p.y);
//		    for (var i = 1; i < locations.length; i++) {
//		      p = map.locationPoint(locations[i]);
//		      ctx.lineTo(p.x,p.y);
//		    }
//		    ctx.stroke();
//		  }

//		  map.addCallback('drawn', redraw);
		  map.addCallback('resized', function() {
		    canvas.width = map.dimensions.x;
		    canvas.height = map.dimensions.y;
		    redraw();
		  });

//		  redraw();
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