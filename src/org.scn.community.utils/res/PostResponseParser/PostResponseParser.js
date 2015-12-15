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
	"./PostResponseParserSpec",
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

PostResponseParser = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		// that.onAfterRendering = function () {
			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		// }
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;

		if(this.getDUrl() != "" && this.getDTrigger() == "GO") {
			
			var requestMethodJQuery = (that.getDRequestType() == "JQuery");
			
			if(requestMethodJQuery) {
				this.callViaJQueryRequest();
			} else {
				this.callViaHttpRequest();
			}
			
			if(that.getDTrigger() != "") {
				// clean up the trigger
				that.setDTrigger("");

				// fire event to rerender
				that.fireDesignStudioPropertiesChanged(["DTrigger"]);
			}
		}
	},
	
	callViaJQueryRequest : function () {
		// http://api.jquery.com/jquery.ajax/
		var that = this;
		
		var url = this.getDUrl();
		
		var returnParameters = [];
		var returnHeaders = [];
		
		var lHeadersObject = {};
		var lHeaders = that.getDHeaders();
		if((lHeaders != undefined || lHeaders != undefined) && lHeaders != "" && lHeaders != "<delete>"){
			var lHeadersArray = JSON.parse(lHeaders);
			
			for (var i = 0; i < lHeadersArray.length; i++) {
				lHeadersObject[lHeadersArray[i].key] = lHeadersArray[i].value;	
			}
		}
		
		var lData = "";
		var emphason = "";
		
		var lRawParameters = this.getDRawParameters();
		if(lRawParameters != undefined && lRawParameters.length > 0) {
			lData = lRawParameters;
		} else {
			lData = {};
			var lDataUrl = "";

			var lParameters = that.getDParameters();
			if((lParameters != undefined || lParameters != undefined) && lParameters != "" && lParameters != "<delete>"){
				var lParametersArray = JSON.parse(lParameters);
				
				for (var i = 0; i < lParametersArray.length; i++) {
					lData[lParametersArray[i].key] = lParametersArray[i].value;
					lDataUrl += emphason + lParametersArray[i].key + "=" + lParametersArray[i].value + "";
					emphason = "&";
				}
			}
			
			lData = JSON.stringify(lData);
			
			if(that.getDContentType().indexOf("json") == -1) {
				lData = lDataUrl;
			}	
			//payload for post requests
			if(that.getDPayload() !== undefined && that.getDPayload() !== null && that.getDPayload() !== ""){
				lData = that.getDPayload();
			}
		}

		var ajaxRequest = {
		    type: that.getDRequestMethod(),
		    contentType: that.getDContentType(),
		    processData: false,
		    crossDomain: that.getDCrossDomain(),
//		    jsonp: false,
		    url: url,
		    headers: lHeadersObject,
		    data: lData,
		    
		    success: function (responseData, textStatus, jqXHR) {
		    	var response = responseData;
	    		var status = jqXHR.status;
	    		
		    	if(status == that.getDExpectedResponseStatus()){
		    		if(that.getDExpectedContentType() == "json") {
		    			try{
		    				if(typeof response =='object'){			    				
			    				for (lElementKey in response) {
			    					returnParameters.push({name: lElementKey, value: response[lElementKey]});
			    				}
		    				}
		    				else{
		    					var responseJson = JSON.parse(response);
			    				
			    				for (lElementKey in responseJson) {
			    					returnParameters.push({name: lElementKey, value: responseJson[lElementKey]});
			    				}	
		    				}
		    				response = JSON.stringify(response);
		    			} catch (e) {
		    				returnParameters.push({name: "STATUS", value: "PARSE_ERROR"});
		    			}
		    		}
		    		
		    		returnParameters = JSON.stringify(returnParameters);
		    		that.setDReturnParameters(returnParameters);
		    		
		    		that.setDReturnResponse(response);
		    		that.setDReturnStatus(status);

					var headerStr = jqXHR.getAllResponseHeaders();

					var headerPairs = headerStr.split('\u000d\u000a');
					  for (var i = 0, len = headerPairs.length; i < len; i++) {
						var headerPair = headerPairs[i];
						var index = headerPair.indexOf('\u003a\u0020');
						if (index > 0) {
						  var lElementKey = headerPair.substring(0, index);
						  var lElementValue = headerPair.substring(index + 2);
						  
						  returnHeaders.push({name: lElementKey, value: lElementValue});
						}
					}
		    		
					returnHeaders = JSON.stringify(returnHeaders);
		    		that.setDReturnHeaders(returnHeaders);
		    		
		    		var changed = ["DReturnParameters", "DReturnResponse", "DReturnStatus", "DReturnHeaders"];
					
					that.fireDesignStudioPropertiesChanged(changed);
					that.fireDesignStudioEvent("onResponse");
		    	} else {
		    		returnParameters.push({name: "STATUS", value: "ERROR"});
		    		returnParameters = JSON.stringify(returnParameters);
		    		
		    		that.setDReturnParameters(returnParameters);
		    		that.setDReturnResponse(response);
		    		that.setDReturnStatus(status);
		    		
		    		var changed = ["DReturnParameters", "DReturnResponse", "DReturnStatus"];
					
					that.fireDesignStudioPropertiesChanged(changed);
					that.fireDesignStudioEvent("onResponse");
		    	}
		    },
		    
		    error: function (jqXHR, textStatus, errorThrown) {
		    	// in case the send is not working, can happen on cors (https > http)
				returnParameters = JSON.stringify(returnParameters);
				that.setDReturnParameters(returnParameters);
				
				var response = "EXCEPTION\r\n";
				response = "MESSAGE: " + errorThrown + "\r\n";
				response = "STATUS: " + textStatus + "\r\n";
				response = "TEXT: " + jqXHR.responseText + "\r\n";
				
	    		that.setDReturnResponse(response);
	    		
	    		that.setDReturnStatus(500);

				that.setDTrigger("");

	    		var changed = ["DTrigger", "DReturnParameters", "DReturnResponse", "DReturnStatus"];
				
				that.fireDesignStudioPropertiesChanged(changed);
				that.fireDesignStudioEvent("onResponse");
		    }
		};
		if(that.getDJsonp()){
			ajaxRequest.dataType = 'jsonp';
			ajaxRequest.crossDomain = true;
			ajaxRequest.contentType = "application/javascript";
		}else{
			ajaxRequest.jsonp = false;
		}
		$.ajax(ajaxRequest);
	},
	
	callViaHttpRequest : function () {
		var that = this;
		
		var http = new XMLHttpRequest();
		var url = that.getDUrl();

		var params = "";
		var emphason = "";
		
		var lRawParameters = this.getDRawParameters();
		if(lRawParameters != undefined && lRawParameters.length > 0) {
			params = lRawParameters;
		} else {
			var lParameters = that.getDParameters();
			if((lParameters != undefined || lParameters != undefined) && lParameters != "" && lParameters != "<delete>"){
				var lParametersArray = JSON.parse(lParameters);
				
				for (var i = 0; i < lParametersArray.length; i++) {
					params += emphason + lParametersArray[i].key + "=" + lParametersArray[i].value + "";
					emphason = "&";
				}
			}
		}
		
		//payload for post requests
		if(that.getDPayload() !== undefined && that.getDPayload() !== null && that.getDPayload() !== ""){
			params = that.getDPayload();
		}
		
		http.open(that.getDRequestMethod(), url, true);

		// "application/json; charset=utf-8"
		if(this.getDContentType() != "") {
			http.setRequestHeader("Content-type", that.getDContentType());	
		}
		
		if(this.getDWithCredentials() != ""){
			http.withCredentials = this.getDWithCredentials();
		}
		
		if(this.getDBasicAuthorisation() != "") {
			http.setRequestHeader("Authorization", that.getDBasicAuthorisation());	
		}
		
		var lHeaders = that.getDHeaders();
		if((lHeaders != undefined || lHeaders != undefined) && lHeaders != "" && lHeaders != "<delete>"){
			var lHeadersArray = JSON.parse(lHeaders);
			
			for (var i = 0; i < lHeadersArray.length; i++) {
				http.setRequestHeader(lHeadersArray[i].key, lHeadersArray[i].value);	
			}
		}

		var returnParameters = [];
		
		http.onreadystatechange = function() {
		    if(http.readyState == 4) {
		    	var response = http.responseText;
	    		var status = http.status;
	    		
		    	if(http.status == that.getDExpectedResponseStatus()){
		    		if(that.getDExpectedContentType() == "JSON") {
		    			try{
		    				if(typeof response =='object'){
			    				for (lElementKey in responseJson) {
			    					returnParameters.push({name: lElementKey, value: response[lElementKey]});
			    				}
		    				}else{
			    				var responseJson = JSON.parse(response);
			    				
			    				for (lElementKey in responseJson) {
			    					returnParameters.push({name: lElementKey, value: responseJson[lElementKey]});
			    				}
		    				}
		    				response = JSON.stringify(response);
		    			} catch (e) {
		    				returnParameters.push({name: "STATUS", value: "PARSE_ERROR"});
		    			}
		    		}
		    		
		    		returnParameters = JSON.stringify(returnParameters);
		    		
		    		that.setDReturnParameters(returnParameters);
		    		that.setDReturnResponse(response);
		    		that.setDReturnStatus(status);
		    		
		    		var changed = ["DReturnParameters", "DReturnResponse", "DReturnStatus"];
					
					that.fireDesignStudioPropertiesChanged(changed);
					that.fireDesignStudioEvent("onResponse");
		    	} else {
		    		returnParameters.push({name: "STATUS", value: "ERROR"});
		    		returnParameters = JSON.stringify(returnParameters);
		    		
		    		that.setDReturnParameters(returnParameters);
		    		that.setDReturnResponse(response);
		    		that.setDReturnStatus(status);
		    		
		    		var changed = ["DReturnParameters", "DReturnResponse", "DReturnStatus"];
					
					that.fireDesignStudioPropertiesChanged(changed);
					that.fireDesignStudioEvent("onResponse");
		    	}
		    }
		}
		
		try {
			http.send(params);	
		} catch (e) {
			// in case the send is not working, can happen on cors (https > http)
			returnParameters = JSON.stringify(returnParameters);
			that.setDReturnParameters(returnParameters);
			
			var response = "EXCEPTION\r\n";
			if(e.name) {response = "NAME: " + e.name + "\r\n";}
			if(e.message) {response = "MESSAGE: " + e.message + "\r\n";}
    		that.setDReturnResponse(response);
    		
    		that.setDReturnStatus(500);

			that.setDTrigger("");

    		var changed = ["DTrigger", "DReturnParameters", "DReturnResponse", "DReturnStatus"];
			n
			that.fireDesignStudioPropertiesChanged(changed);
			that.fireDesignStudioEvent("onResponse");
		}
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};
//%INIT-START%
myComponentData.instance = PostResponseParser;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});