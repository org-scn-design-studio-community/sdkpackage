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
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend ("org.scn.community.utils.ClientInformation", {

	metadata: {
        properties: {
              "windowHeight": {type: "int"},
              "windowWidth": {type: "int"},
              "ownHeight": {type: "int"},
              "ownWidth": {type: "int"},
              "htmlVisible": {type: "boolean"},
              "readLocation": {type: "boolean"},
              "geoLocation": {type: "string"},
              "information": {type: "string"},
              "reloadRequest": {type: "string"},
        }
	},

	initDesignStudio: function() {
		var that = this;
		
		// make this element invisible
		// that.setVisible(false);
		
		if(window.attachEvent) {
		    window.attachEvent('onresize', function() {
		    	that.onAfterRendering();
		    });
		}
		else if(window.addEventListener) {
		    window.addEventListener('resize', function() {
		    	that.onAfterRendering();
		    }, true);
		}
		else {
		    //The browser does not support Javascript event binding
		}
		
		// resize function
		that.onAfterRendering = function(forcedReload) {
			var jqThis = that.$();
			var docJqThis = $( window );

			var containerWidth = jqThis.outerWidth(true);
			var containerHeight = jqThis.outerHeight(true);
			
			var lVisibility = this.getHtmlVisible();
			if(containerWidth == undefined && containerHeight == undefined) {
				// probably not visible
				
				if(lVisibility != false || forcedReload) {
					that.setHtmlVisible(false);
					that.fireDesignStudioPropertiesChanged(["htmlVisible"]);
					that.fireDesignStudioEvent("onSizeChanged");
				}
				
				return;
			}
			
			var lVisibilityChanged = false;
			if(lVisibility != true || forcedReload) {
				that.setHtmlVisible(true);
				lVisibilityChanged = true;
			}
			
			var windowWidth = docJqThis.outerWidth(true);
			var windowHeight = docJqThis.outerHeight(true);

			if(containerWidth != that._containerWidth ||
				containerHeight != that._containerHeight ||
				windowWidth != that._windowWidth ||
				windowHeight != that._windowHeight
				|| forcedReload == true){
				
				that._containerWidth = containerWidth;
				that._containerHeight = containerHeight;
				that._windowWidth = windowWidth;
				that._windowHeight = windowHeight;
				
				that.setOwnWidth(that._containerWidth);
				that.setOwnHeight(that._containerHeight);
				that.setWindowWidth(that._windowWidth);
				that.setWindowHeight(that._windowHeight);
				
				var changed = ["ownHeight", "ownWidth", "windowHeight", "windowWidth"];
				if(lVisibilityChanged) {
					changed.push("htmlVisible");
				}
				
				that.fireDesignStudioPropertiesChanged(changed);
				that.fireDesignStudioEvent("onSizeChanged");
			}
		};
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
		// http://www.html-world.de/282/clientinformation/

		var information = navigator;

		var forcedReload = false;
		var reloadRequest = this.getReloadRequest();
		if(reloadRequest != "X") {
			if(reloadRequest != that._oldReloadRequest) {
				that._oldReloadRequest = reloadRequest;
				forcedReload = true;
				that.onAfterRendering(forcedReload);
			}
		} else {
			that._oldReloadRequest = "X";
		}
		
		if(that.informationJson == undefined || forcedReload) {
			that.informationJson = {};

			that.informationJson.appCodeName = information.appCodeName;
			that.informationJson.appName = information.appName;
			that.informationJson.appVersion = information.appVersion;
			that.informationJson.language = information.language;
			that.informationJson.platform = information.platform;
			that.informationJson.product = information.product;
			that.informationJson.userAgent = information.userAgent;
			that.informationJson.verndor = information.verndor;
			
			if(that.informationJson.verndor == undefined && window.clientInformation != undefined) {
				that.informationJson.verndor = window.clientInformation.vendor;
			}

			if (window.screen) {
				that.informationJson.width  = window.screen.width;
				that.informationJson.height = window.screen.height;
				that.informationJson.colors = window.screen.colorDepth;
			}

			var browser = $.browser;

			var browserJson = {};

			if(browser.chrome) {
				browserJson.browser = "CHROME";
			}
			if(browser.safari) {
				browserJson.browser = "SAFARI";
			}
			if(browser.mozilla) {
				browserJson.browser = "MOZILLA";
			}
			if(browser.msie) {
				browserJson.browser = "IE";
			}

			browserJson.version = browser.version;
			browserJson.fVersion = browser.fVersion;
			
			browserJson.mobile = browser.mobile;
			
			that.informationJson.browserInfo = browserJson;
			
			var informationString = JSON.stringify(that.informationJson);
			
			that.setInformation(informationString);

			that.fireDesignStudioPropertiesChanged(["information"]);
			that.fireDesignStudioEvent("onInformationAvailable");
		}
		
		if(that.getReadLocation() && (that.geoJson == undefined || forcedReload)) {
			var options = {
			  enableHighAccuracy: true,
			  timeout: 5000,
			  maximumAge: 0
			};

			function success(pos) {
			  var crd = pos.coords;

			  that.geoJson = {};
			  that. geoJson.latitude = crd.latitude;
			  that.geoJson.longitude = crd.longitude;
			  that.geoJson.accuracy = crd.accuracy;
			  that.geoJson.ok = true;
			  
			  var geoString = JSON.stringify(that.geoJson);
			  
			  that.setGeoLocation(geoString);
			  
			  that.fireDesignStudioPropertiesChanged(["geoLocation"]);
			  that.fireDesignStudioEvent("onGeoAvailable");
			};

			function error(err) {
			  that.geoJson = {};
			  that.geoJson.ok = false;
			  
			  var geoString = JSON.stringify(that.geoJson);
			  
			  that.setGeoLocation(geoString);
			  
			  that.fireDesignStudioPropertiesChanged(["geoLocation"]);
			  that.fireDesignStudioEvent("onGeoAvailable");
			};

			information.geolocation.getCurrentPosition(success, error, options);
		}
	},
});
