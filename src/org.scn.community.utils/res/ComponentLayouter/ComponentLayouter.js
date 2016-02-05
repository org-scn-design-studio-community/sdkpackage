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
define(["./../../../org.scn.community.shared/os/viz-modules/SDKCore",
        "sap/designstudio/sdk/component"], function(SDKCore,Component) {
	var ownComponentName = "org.scn.community.utils.ComponentLayouter";
	ComponentLayouter.prototype = SDKCore;
	function ComponentLayouter() {
		SDKCore.call(this, {
			measurements : {
				opts : {
					noAps : true,
					desc : "Measurements"
				}
			},
			currentProfile :  { 
				opts : {
					noAps : true,
					desc : "Current Profile",
				},
				onChange : function(v){
					var that = this;
					var m = JSON.stringify(that.takeMeasurements());
					var profile = that.currentProfile();
					if(profile){
						if(this._oldProfile != this.currentProfile() || m != this._oldMeasurements){
							setTimeout(function(){
								that.callZTLFunction("loadProfileExt", function(result){
									// alert(result);
								},profile, m);
							},50);
						}
					}
					/**/
					this._oldMeasurements = m;
					this._oldProfile = this.currentProfile();
				}
			},
			os :  { 
				opts : {
					noAps : true,
					desc : "OS",
				}			
			},
			device :  { 
				opts : {
					noAps : true,
					desc : "Device",
				}			
			},
			browserWidth :  { 
				opts : {
					noAps : true,
					desc : "Browser Width",
				}			
			},
			browserHeight :  { 
				opts : {
					noAps : true,
					desc : "Browser Height",
				}			
			},
			onResize :  { 
				opts : {
					apsControl : "script",
					cat : "Events",
					desc : "On Resize"
				}			
			},
			monitorResizes : {
				opts : {
					apsControl : "checkbox",
					cat : "Events",
					desc : "Monitor Resizes (Required for Events to fire)"
				}
			},
			onProfileChange :  { 
				opts : {
					apsControl : "script",
					cat : "Events",
					desc : "On Profile Change"
				}			
			},
			profiles :  { 
				opts : {
					apsControl : "canvasinformation",
					cat : "Profiles",
					desc : "Canvas Information",
					//ztlFunc : "examineCanvas"
				}			
			}
		});
		this.componentInfo.title = "Component Layouter";
		this.componentInfo.author = "Mike Howles";
    	this.componentInfo.description = "Manage Component Layout based on browser size rules.  Blog description here:<a href='http://scn.sap.com/community/businessobjects-design-studio/blog/2016/02/04/design-studio-16-sdk--component-layouter'>Design Studio 1.6 SDK - Component Layouter</a>";
    	this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH3wEWEyAmPkeZ3wAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAADPklEQVQ4jQXBS2hcVQCA4f/cc5/zzEwehiTTmISYQIuoVIUuWgQrUkoprSRalICLEgNS6MJ1Fi5ciF25UBTEBhEURLAu1CiNBq00xTa1RgI1sWNizGMyk3nce+bec/w+8dfGqnFixZuXLjI9dYJicQc33sPshwjPwk7l0MLHcyXttkDmHmf2ynVKY49yduIc1kfvf8DkmdPkshHZDoEXDHNv1WOzViDdNUQlybGw3GJp1aHSKvLhu1fJtP5k/us5PFcgZi+9bp467LGz9Ru37v7H3kHAM89NUv57hfV7SyTS4fnJiyzdWKBa/pFzJ0c5Mlbgj+1OFpcNVl5scOxwmlPPDjEzc4rIzvDi9AzHzrzAQw8PkC0OcnbiZS68Ok3f4ABHnx4jmzOMD6cwzTXk1XdemnXNfSz28VNpbt5eQcWG+W8+4eTxAe7cvIUbZFic/4rxQw6j/V0YZSOB8UeGEf/+9IZJm108DAqffyoRS7fX6evxeGysm43tkB9ubHGo1MOJJ0ugDrDtDElSBbcTsbN42XhJiJ2AQCCkQOsIS4cYW9DGQTs+WrfwiDBtsEQRKZpEscF2dQXbliTSQRsHIX1U7GFne4hUGyOhHYcEfo5IKVzHQqsES9h4bojtYKHbNpHIsa+yvDd3je2Gw14jwrUakCRsbzbpzGa5/Np5RkqKIPUAnQRYlsBCJ2gkws3x6RcL/HJnk+X1JltRkfs7DuW9NE1d4sGmzVtvf0wYS6I4RAtDYlrYsdREiUKYkK6CzdEj/axttTB2A+0GhK0WhU6L7lwno/29yLhFyskjYsBWiOrPU0ZKn1A5ILLs1xQtZdDGIhZ5qvUauaymmIGME5NBI9sJ2IpGWMaOFQhRJ+WkieMKhcDQW/T4/e4K3327BlabV6aOk0+5iCRCJBaWdFBRjb2qwd7ZqDHQ42OJCGkEjufTig4olQqcPy0I/DR5RyJjg8BCo6iGu1RqdT67VkZKFc8ODxUJ0g082UTGEk+n8GWafCFPEPg4Voyrq8hwl2rtgI3dkCufbzJ3vYZ4YmjI9BXqXJgYYXzQpbujAyk0QVqQVOs4XkAjjNCxoVJTfP/rPl8ulqmnRsn3jvA/VnNuGSsz1z0AAAAASUVORK5CYII=";
    	this.componentInfo.topics.splice(1, 0, {
			title : "Component Layouter License",
			content : '<a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAPCAIAAAD8q9/YAAABqklEQVRIx+WWMU8CMRTH3wewxRvZoGp0IpJOhDhwdMP1JhLHY3DSwU4kxAHYMIGlX+Gc1MXA4AQhpPEb8BX6FWq05Dyhd3Ju573ccGnea+/3/u+9K0AOTefGvoEfn4Lo07nuAMBwOLSGMcYwxhMxNs6r91XhsJAJXe3AEzHGGMfRhsynZ6fGf/o27fV6GQauX9TL5XJybUgpAaB91TYhS7lsXbayCowwMvJKKQkhAMAYU0oxxgCAECKlNCJXaTWs6tHDyDoXtg/7+W5djEZZnRNOSfC3A3fvuwAwm8201oQQz/O01vzLHMdRSgkhgiAwiwijsKrni7l1962XuA/azY41WXE5SucfBb69uwEAKaVSKjq3PM+jlEarmnOOMTZRL6/Pi9UiIfdWGeMg41Kzu+euvAkip1CYMeb7vlGYcy6E2CiMUiickHtrGf+q2FbsHxX+7GG06eEgCBzHAQDf98MeppSu12utdbPZrJxX9uzh/YH37+G4MZEauFavlUqlHE3piRgjdDAYDBKAXdc9Pjn6J//hcHT1+30rbcNtFIvFbN+08nWXzpV9AD9ivwErgn5oAAAAAElFTkSuQmCC" /></a>' +
			'<br /><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Advanced Data Table</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Mike Howles</span> is licensed under a <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" target="_blank" href="http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.utils/res/ComponentLayouter" rel="dct:source">sdkpackage repository on Github</a>.'
		});
		var parentInit = this.init;
    	this.init = function(){
    		parentInit.call(this);
    		var that = this;
    		if(sap && sap.zen && sap.zen.designmode) {
    			this.$().css("background-color", "rgba(0,64,128,0.5)");
    			this.$().html("Component Layouter<br />(Hidden at Runtime)");
    		}else{
    			this.$().css("display", "none");    				
    		}
			this.onAfterResizing = function(forcedReload) {
				if(!that.monitorResizes()) return;
				var isMobile = {
				    Android: function() {
				        return navigator.userAgent.match(/Android/i);
				    },
				    BlackBerry: function() {
				        return navigator.userAgent.match(/BlackBerry/i);
				    },
				    iPad: function() {
				        return navigator.userAgent.match(/iPad/i);
				    },
				    iPhone: function() {
				        return navigator.userAgent.match(/iPhone|iPod/i);
				    },
				    Opera: function() {
				        return navigator.userAgent.match(/Opera Mini/i);
				    },
				    Windows: function() {
				        return navigator.userAgent.match(/IEMobile/i);
				    },
				    any: function() {
				        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
				    }
				};
				var md = "Desktop";
				var os = "Unknown OS";
				
				var OSName="Unknown OS";
				if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
				if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
				if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
				if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
				
				if(isMobile.Windows()) md = "Windows Mobile";
				// if(isMobile.Opera()) md = "Opera";
				if(isMobile.iPhone()) md = "iPhone";
				if(isMobile.iPad()) md = "iPad";
				if(isMobile.BlackBerry()) md = "BlackBerry";
				if(isMobile.Android()) md = "Android";
				
				that.os(OSName);
				that.device(md);
				that.browserWidth($(window).width());
				that.browserHeight($(window).height());
				that.firePropertiesChanged(["os","device","browserWidth","browserHeight"]);
				that.fireEvent("onResize");
				window.clearTimeout(that.resizeHandle);
				if(sap && sap.zen && sap.zen.designmode) {
					// Don't callZtl in canvas from DT - Doesn't work anyway.
				}else{
					// Wait and give canvas time to resize?
					setTimeout(function(){
						
						console.log(that.browserWidth());
						console.log(that.browserHeight());
						console.log(JSON.stringify(this.takeMeasurements()));
						that.callZTLFunction("checkProfiles", function(result){
							if(result != that.currentProfile()){
								that.currentProfile(result);
								// Call asynchronously since I can't raise event from callback won' directly.
								setTimeout(function(that){return function(){
									that.fireEvent("onProfileChange");
								}}(that),10);
							}
						},JSON.stringify(measurements));
					},100);
				}
			};
			if(window.attachEvent) {
			    window.attachEvent('onresize', function() {
			    	that.throttleResize.call(that);
			    });
			}
			else if(window.addEventListener) {
			    window.addEventListener('resize', function() {
			    	that.throttleResize.call(that);
			    }, true);
			}
			else {
			    //The browser does not support Javascript event binding
			}
			this.throttleResize();
		};
		this.takeMeasurements = function(){
			var s = this.profiles();
			var o = JSON.parse(s);
			var items = o.items;						
			var measurements = [];
			for(var i=0;i<items.length;i++){
				// Measure all the panels
				if(items[i].type == "PANEL_COMPONENT"){
					measurements.push({
						key : items[i].key,
						width : $("#" + items[i].key + "_panel1").width(),
						height : $("#" + items[i].key + "_panel1").height()
					})
				}
			}
			return measurements;
		}
		// Doesn't work.  YET... Dangit...
		this.updateProfile = function(key){
			/*
			this.callZTLFunction("loadProfile", function(result){
				// Never fires from canvas at DT :P
			},key);
			*/
			
			// BEx WAD 7.x flashbacks...  Can't figure out the magic command.  YET.  :P
			try{
				// Testing
				var command = new sapbi_Command("UPDATE_PROPERTIES");
				command.addParameter(new sapbi_Parameter("TARGET_ITEM_REF", "BUTTON_1"));
				var changes = new sapbi_Parameter("CHANGES", "");
				var childListChanges = new sapbi_ParameterList();
				var aNames = "topmargin,bottommargin,leftmargin,rightmargin".split(",");
				sap.zen.Dispatcher.instance.dispatchUpdateControl({
					id : "BUTTON_1", 
					"width" : "200"
				});
				/*
				for (var i = 0; i < aNames.length; i++) {
					var propName = aNames[i];
					//var value = this[propName]();
					var value = 200;
					if (Array.isArray(value) || (typeof value == "object")) {
						value = JSON.stringify(value);
					}
					childListChanges.addParameter(new sapbi_Parameter(propName, value));
				}
				changes.setChildList(childListChanges);
				command.addParameter(changes);
				*/
				//sap.zen.request.zenSendCommandArrayWoEventWZenPVT(command, false, true);
				//sap.zen.request.zenSendCommandArrayWoEventWZenPVT(command, false);
				//alert(command);
				//sap.zen.request.zenSendUpdateCommand(childListChanges);
			}catch(e){
				throw(e);
			}
		};
		this.throttleResize = function() {
			if(this.resizeHandle) {
				clearTimeout(this.resizeHandle);
			}
			this.resizeHandle = setTimeout(this.onAfterResizing, 500);
		}
	}
	ComponentLayouter.prototype.constructor = ComponentLayouter;
	Component.subclass(ownComponentName, ComponentLayouter);
});