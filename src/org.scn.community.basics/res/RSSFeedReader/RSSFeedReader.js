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
 
 (function(){

var myComponentData = org_scn_community_require.knownComponents.basics.RSSFeedReader;

RSSFeedReader = function () {

	var that = this;
	
	that.init = function() {
		// define root component
		that._oRoot = {};
	
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
			xslLocation = org_scn_community_basics.getRepositoryImageUrlPrefix(that, xslFile, "", "xss.xsl");
			// need to make the "upper-folder" logic to match the call from the inner HTML iframe
			xslLocation = "../../../../../../" + xslLocation;
		} else {
			xslLocation = org_scn_community_basics.getRepositoryImageUrlPrefix(that, xslFile, xslFile, "xss.xsl");
		}

		var containerUrl = xslLocation = org_scn_community_basics.getRepositoryImageUrlPrefix(that, "", "", that.rss_container);
		
		var url_string = encodeURI(containerUrl
				+ 'feed=' + that.getFeedUrl() +"&"
				+ 'xsl=' + xslLocation);
		
		var html = '<iframe src="'+url_string+'" width="auto" height="auto"></iframe>';
		
		this.$().html(html);
	};

	that.onResize = function (width, height, parent) {
		// in case special resize code is required
	};

	/* COMPONENT SPECIFIC CODE - END METHODS*/

	org_scn_community_component_Core(that, myComponentData);
	
	return that;
};

define([myComponentData.requireName], function(basicsrssfeedreader){
	myComponentData.instance = RSSFeedReader;
	return myComponentData.instance;
});

}).call(this);