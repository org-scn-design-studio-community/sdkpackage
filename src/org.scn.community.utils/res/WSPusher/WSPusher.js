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

WSPusher = {

	metadata: {
        properties: {
        	"server": {type: "string"},
        	"msg": {type: "string"},
        	"push": {type: "string"},
        	"send": {type: "string"}
        }
	},

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;
	},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		if(this.connection === undefined){
			//switch ws and wss for secure connections
			var url = that.getServer();
			this.connection = new WebSocket(url);
			// When the connection is open, send some data to the server
			this.connection.onopen = function () {
			  that.connection.send('{"msg":"init"}'); // Send the message 'Ping' to the server
			};

			// Log errors
			this.connection.onerror = function (error) {
				that.setPush(error.data);
				that.fireDesignStudioPropertiesChanged(["push"]);
				that.fireDesignStudioEvent("onPushErrorReceived");
			};

			// Log messages from the server
			this.connection.onmessage = function (result) {
				that.setPush(result.data);
				that.fireDesignStudioPropertiesChanged(["push"]);
				that.fireDesignStudioEvent("onPushReceived");
			};
		}
		
		var state = this.connection.readyState;
		var sendTrigger = this.getSend();
		//readyState -> 0:not open yet | 1:open | 2:about to close | 3:closed
		if(state === 1 && sendTrigger !== ""){
			that.connection.send(that.getMsg());
			//Reset Send trigger
			that.setSend("");
			that.fireDesignStudioPropertiesChanged(["send"]);
		}
	}
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = WSPusher;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});
