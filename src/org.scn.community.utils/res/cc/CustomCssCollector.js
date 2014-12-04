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
		var myScriptSuffix = "res/cc/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

sap.designstudio.sdk.Component.subclass("org.scn.community.utils.CustomCssCollector", function() {
	
	var pUrlPrefix = undefined;
	var that = this;
	
	this.additionalCss = function (value) {
		if (value === undefined) {
			return that._additionalCss;
		} else {
			that._additionalCss = value;
			
			if(value != undefined && value != "")  {
				pUrlPrefix = value.substring(0, value.lastIndexOf("/") + 1);	
			}
			
			return this;
		}
	};
	
	this.elementsContent = function (value) {
		if (value === undefined) {
			return that._elementsContent;
		} else {
			that._elementsContent = value;
			return this;
		}
	};
	
	this.init = function() {
		that._ownScript = _readScriptPath();
	};
	
	this.afterUpdate = function() {
		// for today, always rerender
		var rerender = true;
		if(rerender) {
			var lElementsToRender = that.elementsContent();
			if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
				var lElementsToRenderArray = JSON.parse(lElementsToRender);

				// distribute content
				for (var i = 0; i < lElementsToRenderArray.length; i++) {
				var element = lElementsToRenderArray[i];
					var key = element.key;
					var url = element.url;
					var isActive = element.act;
					 
					if(isActive) {
						that.addCssToHead(key, pUrlPrefix + url);
					} else {
						that.removeCssFromHead(key);
					}
				}
			}
		} else {
			// empty
		}
	};
	
	// http://stackoverflow.com/questions/574944/how-to-load-up-css-files-using-javascript
	this.addCssToHead = function (cssId, cssUrl){
		var $ = document; // shortcut
		cssId = "custom_css_designstudio"  + cssId;
		
		var cssElement = $.getElementById(cssId);
		
		if (!cssElement) {
		    var head  = $.getElementsByTagName('head')[0];
		    var link  = $.createElement('link');
		    link.id   = cssId;
		    link.rel  = 'stylesheet';
		    link.type = 'text/css';
		    link.href = cssUrl;
		    link.media = 'all';
		    link.disabled = false;
		    head.appendChild(link);
		} else {
			// enable and reset
			cssElement.disabled = false;
			cssElement.href = cssUrl;
		}
	 };
	 
	this.removeCssFromHead = function (cssId){
		var $ = document; // shortcut
		cssId = "custom_css_designstudio"  + cssId;
		
		var cssElement = $.getElementById(cssId);
		
		if (cssElement) {
			cssElement.disabled = true;
			if(cssElement.remove) {
				cssElement.remove();	
			}
		}
	 };
	
});
})();