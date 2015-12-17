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
	"./KpiViewSpec",
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

KpiView = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);
		
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.addStyleClass("scn-pack-KpiView");
		that.addStyleClass("scn-pack-KpiView-Bottom");
		
		that.attachBrowserEvent('click', function() {
			if(that._linkEvent == true) {
				that._linkEvent = false;
			} else {
				that.fireDesignStudioEvent("onClick");
			}
		});
		
		// header
		that._lTextHeader = new sap.ui.commons.TextView();

		that._lTextHeader.addStyleClass("scn-pack-KpiView-Header");

		// title
		that._lTextTitle = new sap.ui.commons.TextView();

		that._lTextTitle.addStyleClass("scn-pack-KpiView-Title");
		
		that.addContent(
				that._lTextTitle,
				{left: "10px", top: "30px"}
		);
		
		// optional link
		that._lLink = new sap.ui.commons.Link();

		that._lLink.attachBrowserEvent('click', function() {
			that._linkEvent = true;
			that.fireDesignStudioEvent("onLinkClick");
		});
		
		that._lLink.addStyleClass("scn-pack-KpiView-Link");

		that.addContent(
				that._lLink,
				{left: "10px", top: "50px"}	
		);

		// optional image
		that._lImage = new sap.ui.commons.Image({
			width: "32px",
			height: "32px"
			}
		);

		that._lImage.addStyleClass("scn-pack-KpiView-Image");
		
		that.addContent(
				that._lImage,
				{right: "10px", top: "10px"}
		);
		
		// value
		that._lLayout = new sap.ui.layout.HorizontalLayout({
			
		});

		that._lLayout.addStyleClass("scn-pack-KpiView-Bottom");
		
		that._lTextValuePrefix = new sap.ui.commons.TextView();

		that._lTextValuePrefix.addStyleClass("scn-pack-KpiView-ValuePrefix");
		
		that._lLayout.addContent(
				that._lTextValuePrefix
		);
		
		that._lTextValue = new sap.ui.commons.TextView();

		that._lTextValue.addStyleClass("scn-pack-KpiView-Value");
		
		that._lLayout.addContent(
				that._lTextValue
		);

		that._lTextValueSuffix = new sap.ui.commons.TextView();

		that._lTextValueSuffix.addStyleClass("scn-pack-KpiView-ValueSuffix");
		
		that._lLayout.addContent(
				that._lTextValueSuffix
		);

		// footer
		that._lTextFooter = new sap.ui.commons.TextView();

		that._lTextFooter.addStyleClass("scn-pack-KpiView-Footer");
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		// that.onAfterRendering = function () {
			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		// }
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		var loadingResultset = "ResultCell";
		
		var data = undefined;		
		if(loadingResultset == "ResultSet" || loadingResultset == "ResultCell"){
			data = that.getData();
		} else if(loadingREsultset == "DataCellList"){
			data = that.getDataCellList();
		}

		var metadata = that.getDSMetadata();

		org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	processData: function (flatData, afterPrepare, owner) {
		var that = owner;
		var metaData = that.getDSMetadata();

		if(flatData == undefined) {
			var loadingResultset = "ResultCell";
				
			if(loadingResultset == "ResultSet"){
				var options = org_scn_community_databound.initializeOptions();
				options.swapAxes = that.getSwapAxes();
				
				that._flatData = org_scn_community_databound.flatten(that.getData(), options);
			} else if(loadingResultset == "ResultCell"){
				that._flatData = that.getData();
			} else if(loadingResultset == "DataCellList"){
				var lDimensions = that.getDElements();
		
				var options = org_scn_community_databound.initializeOptions();
				options.iMaxNumber = that.getDMaxMembers();
				options.allKeys = true;
				options.idPrefix = that.getId();
				options.iDuplicates = "Sum";
				
				if(that.getDDisplayText() == "Text_Value") {
					options.iDisplayText = "Text (Value)";
				} else if(that.getDDisplayText() == "Text_Count") {
					options.iDisplayText = "Text (Count)";
				} else {
					options.iDisplayText = "Text";
				}
				
				options.iNullValues = that.getDZeroValuesMode();
			
				var dataList = that.getDataCellList();
				that._flatData = org_scn_community_databound.getDataModelForDimensions(dataList, metaData, lDimensions, options);
			}
		} else {
			that._flatData = flatData;
		}
		
    	// value processing
    	var lValue = "";
    	var lDecimals = that.getValueDecimalPlaces().replace("D", "");
    	
		if (that.getData() && that.getData().data.length > 0) {
			lValue = that.getData().data[0];
			lValue = org_scn_community_basics.getFormattedValue (lValue, metaData.locale, lDecimals);
		}

		if (lValue == "" && that.getValueText() !== "") {
			lValue = that.getValueText();
    	}
    	
		if (lValue == "") {
    		lValue = that.getValueFloat();
    		// value as float number given directly is formatted
        	lValue = org_scn_community_basics.getFormattedValue (that.getValueFloat(), undefined, lDecimals);
    	}
		
		that._lValue = lValue;

		// processing on data
		that.afterPrepare(that);
	},

	afterPrepare: function (owner) {
		var that = owner;
			
		// visualization on processed data
    	that._lTextHeader.setText (that.getHeaderText());
		var cssClasss = that.getHeaderCssClass();
    	if(cssClasss != "") {
    		that._lTextHeader.addStyleClass(cssClasss);
    	}
    	
		that._lTextTitle.setText (that.getTitleText());
		var cssClasss = that.getTitleCssClass();
    	if(cssClasss != "") {
    		that._lTextTitle.addStyleClass(cssClasss);
    	}
		
		that._lTextValuePrefix.setText (that.getValuePrefixText());
		var cssClasss = that.getValuePrefixCssClass();
    	if(cssClasss != "") {
    		that._lTextValuePrefix.addStyleClass(cssClasss);
    	}
    	
		that._lTextValue.setText (that._lValue);

		var lValueTextAlign = sap.ui.core.TextAlign.Left;
		var positionAlignValue = {left: "10px", bottom: "30px"};

		if(that.getValueHAlign().toLowerCase() == "right") {
			lValueTextAlign = sap.ui.core.TextAlign.Right;
			positionAlignValue = {right: "10px", bottom: "30px"};
		}

		that._lTextValue.setTextAlign(lValueTextAlign);

		var positionHeaderAlign = {left: "10px", top: "10px", width: "100%"};
		if(that.getHeaderHAlign().toLowerCase() == "right") {
			positionHeaderAlign = {right: "10px", top: "10px", width: "100%"};
		}

		var positionFooterAlign = {left: "10px", bottom: "10px", width: "100%"};
		if(that.getFooterHAlign().toLowerCase() == "right") {
			positionFooterAlign = {right: "10px", bottom: "10px", width: "100%"};
		}
		if(that._inittLayoutOnce && !(JSON.stringify(that._positionHeaderAlign) == JSON.stringify(positionHeaderAlign))) {
			that.removeContent(
					that._lTextHeader
			);
			that.addContent(
					that._lTextHeader,
					positionHeaderAlign
			);
		}
		if(that._inittLayoutOnce && !(JSON.stringify(that._positionAlignValue) == JSON.stringify(positionAlignValue))) {
			that.removeContent(
					that._lLayout
			);
			that.addContent(
					that._lLayout,
					positionAlignValue
			);
		}
		if(that._inittLayoutOnce && !(JSON.stringify(that._positionFooterAlign) == JSON.stringify(positionFooterAlign))) {
			that.removeContent(
					that._lTextFooter
			);
			that.addContent(
					that._lTextFooter,
					positionFooterAlign
			);
		}
		that._positionHeaderAlign = positionHeaderAlign;
		that._positionAlignValue = positionAlignValue;
		that._positionFooterAlign = positionFooterAlign;

		if(that._inittLayoutOnce != true) {
			that.addContent(
					that._lTextHeader,
					positionHeaderAlign
			);
			that.addContent(
					that._lLayout,
					positionAlignValue
			);
			that.addContent(
					that._lTextFooter,
					positionFooterAlign
			);

			that._inittLayoutOnce = true;
		}
		
		that._lTextValueSuffix.setText (that.getValueSuffixText());
		var cssClasss = that.getValueSuffixCssClass();
    	if(cssClasss != "") {
    		that._lTextValueSuffix.addStyleClass(cssClasss);
    	}

		that._lTextFooter.setText (that.getFooterText());
		
		var cssClasss = that.getFooterCssClass();
    	if(cssClasss != "") {
    		that._lTextFooter.addStyleClass(cssClasss);
    	}
    	
		that._lLink.setText (that.getLinkText());
		that._lLink.setTooltip (that.getTooltip());

		that._lImage.setSrc(that.getImage());
		
		var imageSize = that.getImageSize();
		imageSize = imageSize.replace("Size_", "");
		if(imageSize != "") {
			that._lImage.setWidth(imageSize);
			that._lImage.setHeight(imageSize);
		}
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = KpiView;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});