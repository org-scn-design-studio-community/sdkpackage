/**
 * Copyright 2014 SCN Community Contributors
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
 * 
 */

(function() {
/** code for recognition of script path */
var myScript = $("script:last")[0].src;
var ownComponentName = "org.scn.community.basics.RSSFeedReader";
var _readScriptPath = function () {
	var scriptInfo = org_scn_community_basics.readOwnScriptAccess(myScript, ownComponentName);
	return scriptInfo.myScriptPath;
};
/** end of path recognition */

/**
 * RSS feed reader designed by Martin Pankraz 
 * 
 */
sap.designstudio.sdk.Component.subclass("org.scn.community.basics.RSSFeedReader", function() {
	var meta_data 					= null;
//	var runtime_data 				= null;
	var saveFeedUrlDimension 		= null;
	var saveXslUrlDimension			= null;
	
	var rss_container				= 'RSSContainerForIFrame.html?rnd=' + Math.random() + "&";	// Cache-busting
	
	/**
	 * @desc First function called during SAP Design Studio Plugin Lifecycle
	 * @memberOf init
	 */
	this.init = function() {
		this._ownScript = _readScriptPath();		
	};
	/**
	 * @function beforeUpdate
	 */
	this.beforeUpdate = function(){};
	/**
	 * @function afterUpdate
	 */
	this.afterUpdate = function() {
		//Determin if user wants to use default XSL or not due to special internal path handling
		var xslLocation = this._ownScript;
		if(saveXslUrlDimension.indexOf("http://") !== -1 || saveXslUrlDimension.indexOf("https://") !== -1){
			xslLocation = saveXslUrlDimension;
		}
		else{
			xslLocation += saveXslUrlDimension;
		}
		
		var url_string = encodeURI(this._ownScript+rss_container+'feed='+saveFeedUrlDimension+"&"+'xsl='+xslLocation);
		
		var html = '<iframe src="'+url_string+'" width="auto" height="auto"></iframe>';			
		this.$().html(html);
		
	};
	
	/**
	 * @function componentDeleted
	 */
	this.componentDeleted = function(){};
	
	// property setter/getter functions. Names have to match .ztl file defintions and
	// vice versa if intended to expose to other Design Studio components	
	this.metadata = function(value) {
		if (value === undefined) {
			return meta_data;
		} else {
			meta_data = value;
			return this;
		}
	};
	
	this.feedurldimension = function(value) {
		if (value === undefined) {
			return saveFeedUrlDimension;
		} else {
			saveFeedUrlDimension = encodeURI(value);
			return this;
		}
	};
	
	this.xslurldimension = function(value) {
		if (value === undefined) {
			return saveXslUrlDimension;
		} else {
			saveXslUrlDimension = encodeURI(value);
			return this;
		}
	};
	
});
})();