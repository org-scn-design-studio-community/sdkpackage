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
		
		owner.$().append("<div id=\""+sId+"_content\" style=\"top:-2000px;position:absolute;display:block;overflow:hidden\">"+""+"</div>");
		owner.$().append("<img id=\""+sId+"_image\" style=\"width:20px;height:20px;cursor:pointer;\" src=\""+iImageUrl+"\" />");
		// visualization on processed data
		
		owner.$().click(function() {
		 	that.onCut();
		});
			
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	this.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

		// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);

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
				
			if(loadingResultset == "ResultSet"){
				var options = org_scn_community_databound.initializeOptions();
				options.swapAxes = that.getDSwapAxes();
				options.ignoreResults = that.getDIgnoreResults();
				
				that._flatData = org_scn_community_databound.flatten(that.getData(), options);
			} else if(loadingREsultset == "DataCellList"){
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
				var metaData = that.getDSMetadata();
				
				that._flatData = org_scn_community_databound.getDataModelForDimensions(dataList, metaData, lDimensions, options);

				options.ignoreResults = that.getDIgnoreResults();
				options.emptyHeaderValue = "";
				options.emptyDataValue = "";

				org_scn_community_databound.toRowTable(that._flatData,options);

			}
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
		contentDiv[0].src = iImageUrl;
	};
	
	that.onCut = function() {
		var that = this;
		
		var content = that.getDValue();

		if(that.getData() != "null") {
			content = "";
			for(var dimHead in that._flatData.dimensionHeaders) {
				content = content + that._flatData.dimensionHeaders[dimHead] + ";";
			}
			for(var colHead in that._flatData.columnHeaders) {
				content = content + that._flatData.columnHeaders[colHead] + ";";
			}
			for(var row in that._flatData.data2DPlain) {
				content = content + "\r\n";
				for(var cell in that._flatData.data2DPlain[row]) {
					content = content + that._flatData.data2DPlain[row][cell] + ";";
				}
			}
		}

		var sId = that.oComponentProperties.id;
		var contentDiv = $( "#" + sId + "_content");
		contentDiv[0].innerText = content;

		if(window.clipboardData) {
			var didSucceed = window.clipboardData.setData('Text', content);	
		} else {
			var sId = that.oComponentProperties.id;
			
			// Select the email link anchor text  
			  var content = $( "#" + sId + "_content")[0];
			  var range = document.createRange();  
			  range.selectNode(content);  
			  window.getSelection().addRange(range);  

			  try {  
			    // Now that we've selected the anchor text, execute the copy command  
			    var successful = document.execCommand('copy');  
			    var msg = successful ? 'successful' : 'unsuccessful';  
			    console.log('Copy email command was ' + msg);  
			  } catch(err) {  
			    console.log('Oops, unable to copy');  
			  }  

			  // Remove the selections - NOTE: Should use
			  // removeRange(range) when it is supported  
			  window.getSelection().removeAllRanges();  
		}
	};

	that.onResize = function (width, height, parent) {
		// in case special resize code is required
	};

	/* COMPONENT SPECIFIC CODE - END METHODS*/

	org_scn_community_component_Core(that, myComponentData);
	
	return that;
};
//%INIT-START%
myComponentData.instance = Clipboard;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});