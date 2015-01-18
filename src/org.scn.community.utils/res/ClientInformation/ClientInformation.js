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

sap.ui.commons.layout.AbsoluteLayout.extend ("org.scn.community.utils.ClientInformation", {

	metadata: {
        properties: {
              "windowHeight": {type: "int"},
              "windowWidth": {type: "int"},
              "ownHeight": {type: "int"},
              "ownWidth": {type: "int"},
        }
	},

	initDesignStudio: function() {
		var that = this;
		
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
		that.onAfterRendering = function() {
			var jqThis = that.$();
			var docJqThis = $( window );

			var containerWidth = jqThis.outerWidth(true);
			var containerHeight = jqThis.outerHeight(true);
			
			var windowWidth = docJqThis.outerWidth(true);
			var windowHeight = docJqThis.outerHeight(true);

			if(containerWidth != that._containerWidth ||
				containerHeight != that._containerHeight ||
				windowWidth != that._windowWidth ||
				windowHeight != that._windowHeight){
				
				that._containerWidth = containerWidth;
				that._containerHeight = containerHeight;
				that._windowWidth = windowWidth;
				that._windowHeight = windowHeight;
				
				that.setOwnWidth(that._containerWidth);
				that.setOwnHeight(that._containerHeight);
				that.setWindowWidth(that._windowWidth);
				that.setWindowHeight(that._windowHeight);
				
				that.fireDesignStudioPropertiesChanged(["ownHeight", "ownWidth", "windowHeight", "windowWidth"]);
				that.fireDesignStudioEvent("onChanged");
			}
		};
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		// http://www.html-world.de/282/clientinformation/

		var information = window.clientInformation;
		
//		var options = {
//		  enableHighAccuracy: true,
//		  timeout: 5000,
//		  maximumAge: 0
//		};
//
//		function success(pos) {
//		  var crd = pos.coords;
//
//		  console.log('Your current position is:');
//		  console.log('Latitude : ' + crd.latitude);
//		  console.log('Longitude: ' + crd.longitude);
//		  console.log('More or less ' + crd.accuracy + ' meters.');
//		};
//
//		function error(err) {
//		  console.warn('ERROR(' + err.code + '): ' + err.message);
//		};
//
//		information.geolocation.getCurrentPosition(success, error, options);
//	    
//		if (window.screen) {
//			var width  = screen.width;
//		    var height = screen.height;
//		    var colors = screen.colorDepth;
//		}
	},
});
