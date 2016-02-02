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
					cat : "General",
					desc : "On Resize"
				}			
			},
			profiles :  { 
				opts : {
					apsControl : "canvasinformation",
					cat : "General",
					desc : "Canvas Information",
					//ztlFunc : "examineCanvas"
				}			
			}
		});
		this.componentInfo.title = "Component Layouter";
		this.componentInfo.author = "Mike Howles";
    	this.componentInfo.description = "Manage Component Layout based on browser size rules";
    	this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH3wEWEyAmPkeZ3wAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAADPklEQVQ4jQXBS2hcVQCA4f/cc5/zzEwehiTTmISYQIuoVIUuWgQrUkoprSRalICLEgNS6MJ1Fi5ciF25UBTEBhEURLAu1CiNBq00xTa1RgI1sWNizGMyk3nce+bec/w+8dfGqnFixZuXLjI9dYJicQc33sPshwjPwk7l0MLHcyXttkDmHmf2ynVKY49yduIc1kfvf8DkmdPkshHZDoEXDHNv1WOzViDdNUQlybGw3GJp1aHSKvLhu1fJtP5k/us5PFcgZi+9bp467LGz9Ru37v7H3kHAM89NUv57hfV7SyTS4fnJiyzdWKBa/pFzJ0c5Mlbgj+1OFpcNVl5scOxwmlPPDjEzc4rIzvDi9AzHzrzAQw8PkC0OcnbiZS68Ok3f4ABHnx4jmzOMD6cwzTXk1XdemnXNfSz28VNpbt5eQcWG+W8+4eTxAe7cvIUbZFic/4rxQw6j/V0YZSOB8UeGEf/+9IZJm108DAqffyoRS7fX6evxeGysm43tkB9ubHGo1MOJJ0ugDrDtDElSBbcTsbN42XhJiJ2AQCCkQOsIS4cYW9DGQTs+WrfwiDBtsEQRKZpEscF2dQXbliTSQRsHIX1U7GFne4hUGyOhHYcEfo5IKVzHQqsES9h4bojtYKHbNpHIsa+yvDd3je2Gw14jwrUakCRsbzbpzGa5/Np5RkqKIPUAnQRYlsBCJ2gkws3x6RcL/HJnk+X1JltRkfs7DuW9NE1d4sGmzVtvf0wYS6I4RAtDYlrYsdREiUKYkK6CzdEj/axttTB2A+0GhK0WhU6L7lwno/29yLhFyskjYsBWiOrPU0ZKn1A5ILLs1xQtZdDGIhZ5qvUauaymmIGME5NBI9sJ2IpGWMaOFQhRJ+WkieMKhcDQW/T4/e4K3327BlabV6aOk0+5iCRCJBaWdFBRjb2qwd7ZqDHQ42OJCGkEjufTig4olQqcPy0I/DR5RyJjg8BCo6iGu1RqdT67VkZKFc8ODxUJ0g082UTGEk+n8GWafCFPEPg4Voyrq8hwl2rtgI3dkCufbzJ3vYZ4YmjI9BXqXJgYYXzQpbujAyk0QVqQVOs4XkAjjNCxoVJTfP/rPl8ulqmnRsn3jvA/VnNuGSsz1z0AAAAASUVORK5CYII=";
		
		var parentInit = this.init;
    	this.init = function(){
    		parentInit.call(this);
    		var that = this;
			// this.$().css("display", "none");
    		this.$().html("Component Layouter");
			this.onAfterResizing = function(forcedReload) {
				that.browserWidth($(window).width());
				that.browserHeight($(window).height());
				that.firePropertiesChanged(["browserWidth","browserHeight"]);
				that.fireEvent("onResize");
				window.clearTimeout(that.resizeHandle);
				return;
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
		this.updateProfile = function(components){
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