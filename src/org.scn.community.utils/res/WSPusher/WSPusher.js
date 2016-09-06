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
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics"
	
	],
	function(
		Component,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = {};
myComponentData.fullComponentName = "org.scn.community.utils.WSPusher";
var that = null;

WSPusher = {

	metadata: {
        properties: {
        	"server": {type: "string"},
        	"msg": {type: "string"},
        	"push": {type: "string"},
        	"send": {type: "string"},
        	"close": {type: "string"},
        	"protocol": {type: "array"},
        	"sappcp": {type: "boolean"},
        	"pcpFields": {type: "string"}
        }
	},

	renderer: {},
	
	initDesignStudio: function() {
		that = this;
		jQuery.sap.require("sap.ui.core.ws.SapPcpWebSocket");
	},
	
	afterDesignStudioUpdate : function() {
		that = this;
		if(that.connection === undefined){
			//switch ws and wss for secure connections
			var url = that.getServer();
			var protocol = that.getProtocol() || [];
			if(this.getSappcp()){
				that.connection = new sap.ui.core.ws.SapPcpWebSocket(url, protocol);
				// When the connection is open, send some data to the server
				that.connection.attachOpen(this.onOpen);
				//When the app closes
				that.connection.attachClose(this.onClose);
				// Log errors
				that.connection.attachError(this.onError);
				// Log messages from the server				
				that.connection.attachMessage(this.onMessage);
				
//				that.connection = that.connection._oWs;
			}else{
				that.connection = new WebSocket(url, protocol);
				// When the connection is open, send some data to the server
				that.connection.onopen = function(event){
					that.onOpen(event);
				};
				//When the app closes
				that.connection.onclose = function(event){
					that.onClose(event);
				};
				// Log errors
				that.connection.onerror = function(err){
					that.onError(err);
				};
				// Log messages from the server
				that.connection.onmessage = function(result){
					that.onMessage(result);
				};
			}
		}
		
		var state = -1;
		if(this.getSappcp()){
			state = that.connection._oWs.readyState;
		}else{
			state = that.connection.readyState;
		}
		var sendTrigger = this.getSend();
		var closeTrigger = this.getClose();
		//readyState -> 0:not open yet | 1:open | 2:about to close | 3:closed
		if(state === 0){
			if(window.console)console.log("WS not open yet");
		}
		else if(state === 1){
			if(sendTrigger !== ""){
				that.connection.send(that.getMsg());
				//Reset Send trigger
				that.setSend("");
				that.fireDesignStudioPropertiesChanged(["send"]);	
			}
			if(closeTrigger !== ""){
				that.connection.close();
				//Reset Close trigger
				that.setClose("");
				that.fireDesignStudioPropertiesChanged(["close"]);
			}	
		}else if(state === 2){
			if(window.console)console.log("WS closing");
		}else if(state === 3){
			if(window.console)console.log("WS closed");
		}else{
			if(window.console)console.log("Unkown state!");
		}
	},
	onOpen: function(){
		that.fireDesignStudioEvent("onChannelOpen");
	},
	onClose: function(){
		that.fireDesignStudioEvent("onChannelClosed");
	},
	onMessage: function(result){
	    // Parse Message
		if(that.getSappcp()){
			var pcpFields = result.getParameter("pcpFields");
			that.setPcpFields(JSON.stringify(pcpFields));
		    var oEntry = result.getParameter("data");
			that.setPush(oEntry);
			that.fireDesignStudioPropertiesChanged(["push","pcpFields"]);
			that.fireDesignStudioEvent("onPushReceived");
		}else{
			that.setPush(result.data);
			that.fireDesignStudioPropertiesChanged(["push"]);
			that.fireDesignStudioEvent("onPushReceived");	
		}
	},
	onError: function(error){
		if(that.getSappcp()){
			var pcpFields = error.getParameter("pcpFields");
			if (pcpFields) {
				that.setPcpFields(JSON.stringify(pcpFields));
		    }
		    // Parse Message
		    var oEntry = error.getParameter("data");
			if(oEntry){
				that.setPush(oEntry);
				that.fireDesignStudioPropertiesChanged(["push","pcpFields"]);
				that.fireDesignStudioEvent("onPushErrorReceived");	
			}
		}else{
			that.setPush(error.data);
			that.fireDesignStudioPropertiesChanged(["push"]);
			that.fireDesignStudioEvent("onPushErrorReceived");	
		}
	}
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = WSPusher;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});
