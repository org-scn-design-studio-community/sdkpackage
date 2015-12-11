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
	"./RSSFeedReaderSpec",
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

RSSFeedReader = function () {

	var that = this;
	
	that.init = function() {
		// define root component
		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	};
	
	that.initAsync = function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);
	
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		// this.addStyleClass("scn-pack-?");
			
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	that.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

		// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);

		org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
	};
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/

	that.processData = function (flatData, afterPrepare, owner) {
		var that = owner;

		if(flatData != undefined) {
			that._flatData = flatData;
		}

		that.rss_container = 'RSSContainerForIFrame.html?rnd=' + Math.random() + "&";	// Cache-busting
		
		// processing on data
		that.afterPrepare(that);
	};

	that.afterPrepare = function (owner) {
		var that = owner;

		var xslFile = that.getXslUrl();
		var useBuildIn = that.getUseBuildInXsl();

		var xslLocation = "";

		if(useBuildIn) {
			xslLocation = org_scn_community_basics.getRepositoryImageUrlPrefix(that, xslFile, "", "rss.xsl");
			// need to make the "upper-folder" logic to match the call from the inner HTML iframe
			xslLocation = "../../../../../../" + xslLocation;
		} else {
			xslLocation = org_scn_community_basics.getRepositoryImageUrlPrefix(that, xslFile, xslFile, "rss.xsl");
		}

		var containerUrl = org_scn_community_basics.getRepositoryImageUrlPrefix (that, "", "", that.rss_container);
		
//		var urlEncodedFeed = that.getFeedUrl().replace("&", "%26");
//		urlEncodedFeed = urlEncodedFeed.replace("?", "%3F");
//		urlEncodedFeed = urlEncodedFeed.replace("=", "%3D");

		var urlEncodedFeed = encodeURIComponent(that.getFeedUrl());
		var urlEncodedXsl = encodeURIComponent(xslLocation);
		
		var url_string = encodeURI(containerUrl) 
				+ 'feed=' + urlEncodedFeed +"&"
				+ 'xsl=' + urlEncodedXsl;

		var html = '<iframe src="'+url_string+'" width="auto" height="auto"></iframe>';

		this.$().html(html);
	};

	that.onResize = function (width, height, parent) {
		// in case special resize code is required
	};

	/* COMPONENT SPECIFIC CODE - END METHODS*/
	return that;
};

//%INIT-START%
myComponentData.instance = RSSFeedReader;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});