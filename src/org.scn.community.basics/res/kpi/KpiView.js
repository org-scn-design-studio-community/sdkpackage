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

(function() {
/** code for recognition of script path */
var myScript = $("script:last")[0].src;
_readScriptPath = function () {
	if(myScript) {
		var myScriptSuffix = "res/kpi/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

jQuery.sap.require("sap.ui.commons.layout.AbsoluteLayout");

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.basics.KpiView", {

	metadata: {
        properties: {
        	"headerText": {type: "string"},
        	"headerVisible": {type: "boolean"},
        	"headerCssClass": {type: "string"},
        	"titleText": {type: "string"},
        	"titleCssClass": {type: "string"},
        	"valuePrefixText": {type: "string"},
        	"valuePrefixCssClass": {type: "string"},
        	"valueText": {type: "string"},
        	"valueHAlign": {type: "string"},
        	"footerHAlign": {type: "string"},
        	"valueCssClass": {type: "string"},
        	"valueDecimalPlaces": {type: "int"},
        	"valueSuffixText": {type: "string"},
        	"valueSuffixCssClass": {type: "string"},
        	"footerText": {type: "string"},
        	"footerCssClass": {type: "string"},
        	
        	"linkText": {type: "string"},
        	"linkTooltip": {type: "string"},
        	"image": {type: "string"},
        	"imageSize": {type: "string"}
        }
	},
	
	setData : function(value) {
		this._data = value;
		return this;
	},

	getData : function() {
		return this._data;
	},
	
	setMetadata : function(value) {
		this._meta_data = value;
		return this;
	},
  
	getMetadata : function() {
		return this._meta_data;
	},

	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();

		this.addStyleClass("scn-pack-KpiView");
		this.addStyleClass("scn-pack-KpiView-Bottom");
		
		this.attachBrowserEvent('click', function() {
			if(that._linkEvent == true) {
				that._linkEvent = false;
			} else {
				that.fireDesignStudioEvent("onClick");
			}
		});
		
		// header
		this._lTextHeader = new sap.ui.commons.TextView();

		this._lTextHeader.addStyleClass("scn-pack-KpiView-Header");
		
		this.addContent(
				this._lTextHeader,
				{left: "10px", top: "10px"}
		);

		// title
		this._lTextTitle = new sap.ui.commons.TextView();

		this._lTextTitle.addStyleClass("scn-pack-KpiView-Title");
		
		this.addContent(
				this._lTextTitle,
				{left: "10px", top: "30px"}
		);
		
		// optional link
		this._lLink = new sap.ui.commons.Link();

		this._lLink.attachBrowserEvent('click', function() {
			that._linkEvent = true;
			that.fireDesignStudioEvent("onLinkClick");
		});
		
		this._lLink.addStyleClass("scn-pack-KpiView-Link");

		this.addContent(
				this._lLink,
				{left: "10px", top: "50px"}	
		);

		// optional image
		this._lImage = new sap.ui.commons.Image({
			width: "32px",
			height: "32px"
			}
		);

		this._lImage.addStyleClass("scn-pack-KpiView-Image");
		
		this.addContent(
				this._lImage,
				{right: "10px", top: "10px"}
		);
		
		// value
		this._lLayout = new sap.ui.layout.HorizontalLayout({
			
		});

		this._lLayout.addStyleClass("scn-pack-KpiView-Bottom");
		
		this._lTextValuePrefix = new sap.ui.commons.TextView();

		this._lTextValuePrefix.addStyleClass("scn-pack-KpiView-ValuePrefix");
		
		this._lLayout.addContent(
				this._lTextValuePrefix
		);
		
		this._lTextValue = new sap.ui.commons.TextView();

		this._lTextValue.addStyleClass("scn-pack-KpiView-Value");
		
		this._lLayout.addContent(
				this._lTextValue
		);

		this._lTextValueSuffix = new sap.ui.commons.TextView();

		this._lTextValueSuffix.addStyleClass("scn-pack-KpiView-ValueSuffix");
		
		this._lLayout.addContent(
				this._lTextValueSuffix
		);

		// footer
		this._lTextFooter = new sap.ui.commons.TextView();

		this._lTextFooter.addStyleClass("scn-pack-KpiView-Footer");
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
    	this._lTextHeader.setText (this.getHeaderText());
		var cssClasss = this.getHeaderCssClass();
    	if(cssClasss != "") {
    		this._lTextHeader.addStyleClass(cssClasss);
    	}
    	
		this._lTextTitle.setText (this.getTitleText());
		var cssClasss = this.getTitleCssClass();
    	if(cssClasss != "") {
    		this._lTextTitle.addStyleClass(cssClasss);
    	}
		
		this._lTextValuePrefix.setText (this.getValuePrefixText());
		var cssClasss = this.getValuePrefixCssClass();
    	if(cssClasss != "") {
    		this._lTextValuePrefix.addStyleClass(cssClasss);
    	}
    	
    	// value processing
    	var lValue = "";
    	if (this.getValueText() !== "") {
			lValue = this.getValueText();
			if (this._data && this._data.data.length > 0) {
				lValue = this._data.data[0];
				lValue = this._fFormatNumber (lValue);
			}
		}
    	
		this._lTextValue.setText (lValue);

		if(this._inittLayoutOnce != true) {
			var lValueTextAlign = sap.ui.core.TextAlign.Left;
			var positionAlignValue = {left: "10px", bottom: "30px"};
			
			if(this.getValueHAlign() == "right") {
				lValueTextAlign = sap.ui.core.TextAlign.Right;
				positionAlignValue = {right: "10px", bottom: "30px"};
			}
			
			this._lTextValue.setTextAlign(lValueTextAlign);
			this.addContent(
					this._lLayout,
					positionAlignValue
			);
			
			var positionFooterAlign = {left: "10px", bottom: "10px", width: "100%"};
			if(this.getFooterHAlign() == "right") {
				positionFooterAlign = {right: "10px", bottom: "10px", width: "100%"};
			}
			this.addContent(
					this._lTextFooter,
					positionFooterAlign
			);

			this._inittLayoutOnce = true;
		}
		
		this._lTextValueSuffix.setText (this.getValueSuffixText());
		var cssClasss = this.getValueSuffixCssClass();
    	if(cssClasss != "") {
    		this._lTextValueSuffix.addStyleClass(cssClasss);
    	}

		this._lTextFooter.setText (this.getFooterText());
		
		var cssClasss = this.getFooterCssClass();
    	if(cssClasss != "") {
    		this._lTextFooter.addStyleClass(cssClasss);
    	}
    	
		this._lLink.setText (this.getLinkText());
		this._lLink.setTooltip (this.getTooltip());

		this._lImage.setSrc(this.getImage());
		
		var imageSize = this.getImageSize();
		if(imageSize != "") {
			this._lImage.setWidth(imageSize);
			this._lImage.setHeight(imageSize);
		}
	},
	
	_fFormatNumber : function (value) {
		sap.common.globalization.NumericFormatManager.setPVL(this._meta_data.locale);
		var strFormat = "#"+sap.common.globalization.NumericFormatManager.getThousandSeparator()+"##0";
		
		if (this.getValueDecimalPlaces() > 0) {
			strFormat += sap.common.globalization.NumericFormatManager.getDecimalSeparator();
			for (var i = 0; i < this.getValueDecimalPlaces(); i++) {
				strFormat += "0";
			}
		}
		
		var valueFormatted = sap.common.globalization.NumericFormatManager.format(value, strFormat);
		return valueFormatted;
	}
});
})();