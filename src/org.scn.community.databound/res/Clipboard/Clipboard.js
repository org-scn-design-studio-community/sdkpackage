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
	"./ClipboardSpec",
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

Clipboard = function () {

	var that = this;
	
	this.init = function() {
		// define root component
		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	};
	
	that.initAsync = function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		var sId = that.oComponentProperties.id;

		var iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getPicture(), "", "Clipboard.png");
		
		// <input type="text" id="myid" value="http://www.sap.com" />
		owner.$().append("<textarea id=\""+sId+"_content\" class=\"org-scn-ClipboardText\">"+""+"</textarea>");
		owner.$().append("<button id=\""+sId+"_image\" class=\"org-scn-ClipboardButton\" />");
		// visualization on processed data
		
		owner.$().click(function() {
		 	that.onCut();
		});
			
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	this.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

		that._oRoot = {};
		that._oRoot.dummy = true;
		org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);

		var loadingResultset = "ResultSet";
		
		var data = undefined;		
		if(loadingResultset == "ResultSet" || loadingResultset == "ResultCell"){
			data = that.getData();
		} else if(loadingResultset == "DataCellList"){
			data = that.getDataCellList();
		}

		var metadata = that.getDSMetadata();

		if(!org_scn_community_databound.hasData (data, metadata)) {
			org_scn_community_databound.getSampleDataFlat (that, that.processData, that.afterPrepare);
		} else {
			org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
		}
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	};
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/

	that.processData = function (flatData, afterPrepare, owner) {
		var that = owner;

		if(flatData == undefined) {
			var loadingResultset = "ResultSet";

			var options = org_scn_community_databound.initializeOptions();
			options.swapAxes = that.getDSwapAxes();
			options.ignoreResults = that.getDIgnoreResults();
				
			if(loadingResultset == "ResultSet"){
				that._flatData = org_scn_community_databound.flatten(that.getData(), options);
			} else if(loadingREsultset == "DataCellList"){
				var lDimensions = that.getDElements();
		
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
				var metaData = that.getDSMetadata();
				
				that._flatData = org_scn_community_databound.getDataModelForDimensions(dataList, metaData, lDimensions, options);
			}

			options.ignoreResults = that.getDIgnoreResults();
			options.emptyHeaderValue = "";
			options.emptyDataValue = "";

			org_scn_community_databound.toRowTable(that._flatData,options);
		} else {
			that._flatData = flatData;
		}

		// processing on data
		that.afterPrepare(that);
	};

	that.afterPrepare = function (owner) {
		var that = owner;

		var sId = that.oComponentProperties.id;

		var iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, "", "", "Clipboard.png");

		if(that.getPicture() != "") {
			iImageUrl = that.getPicture();
		}

		var contentDiv = $( "#" + sId + "_image");
		contentDiv[0].style.backgroundImage = "url('"+iImageUrl+"')";;
	};
	
	that.onCut = function() {
		var that = this;
		
		var content = that.getDValue();
		var sepSign = that.getDSeparator();

		if(that.getData() != "null") {
			content = "";
			for(var dimHead in that._flatData.dimensionHeaders) {
				content = content + that._flatData.dimensionHeaders[dimHead] + sepSign;
			}
			for(var colHead in that._flatData.columnHeaders) {
				content = content + that._flatData.columnHeaders[colHead] + sepSign;
			}
			for(var row in that._flatData.data2DPlain) {
				content = content + "\r\n";
				for(var cell in that._flatData.data2DPlain[row]) {
					content = content + that._flatData.data2DPlain[row][cell] + sepSign;
				}
			}
		}

		var sId = that.oComponentProperties.id;
		var contentDiv = $( "#" + sId + "_content")[0];
		contentDiv.value = content;

		if(window.clipboardData) {
			var didSucceed = window.clipboardData.setData('Text', content);	
		} else {
			var sId = that.oComponentProperties.id;
			
			// var range = document.createRange();
			// range.selectNode(contentDiv);
			contentDiv.select();
			// window.getSelection().addRange(range);

		    try {  
			    var successful = document.execCommand('copy');
			    if(!successful) {
				    var msg = successful ? 'successful' : 'unsuccessful';  
				    console.log('Copy command was ' + msg);  
			    }
			} catch(err) {  
			    console.log('Oops, unable to execute copy command');  
			}

			// window.getSelection().removeRange(range);
		}
	};

	that.onResize = function (width, height, parent) {
		// in case special resize code is required
		var that = parent;

		var sId = that.oComponentProperties.id;
		var contentDiv = $( "#" + sId + "_image");

		contentDiv[0].style.width = width+"px";
		contentDiv[0].style.height= height+"px";
	};

	/* COMPONENT SPECIFIC CODE - END METHODS*/

	org_scn_community_component_Core(that, myComponentData);
	
	return that;
};
//%INIT-START%
myComponentData.instance = Clipboard;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});