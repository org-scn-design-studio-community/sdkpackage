/**
 * Copyright 2014 SCN SDK Community
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
jQuery.sap.require("sap.m.MultiComboBox");
//mark forced re-load of sap.m events bundle  
oCfgData = window["sap-ui-config"]  
// check of the library sap.m is already in declared libs (to avoid second execution)  
if(oCfgData.libs.indexOf("sap.m") == -1) {  
  // append the information that sap.m is loaded  
  oCfgData.libs = oCfgData.libs + ",sap.m";  
  // load sap.m and sap.me  
  var oCore = sap.ui.getCore();  
  oCore.loadLibrary("sap.m");  
  if(!sap.ui.Device.support.touch) {  
    // unload events bundle  
    jQuery.sap.unloadResources("jquery.sap.events.js", false, true, true);  
    // reload events bundle to assure that sap.m events are active  
    jQuery.sap.require("jquery.sap.events");  
  }  
}
sap.m.MultiComboBox.extend("org.scn.community.databound.MultiComboBox", {

//	setData : function(value) {
//		this._data = value;
//		return this;
//	},
//	
//	getData : function(value) {
//		return this._data;
//	},
//	
//	setMetadata : function(value) {
//		this._metadata = value;
//		return this;
//	},
//
//	getMetadata : function(value) {
//		return this._metadata;
//	},
//	
//	metadata: {
//        properties: {
//              "DDimension": {type: "string"},
//              "DSelectedKey": {type: "string"},
//              "DSelectedText": {type: "string"},
//        }
//	},

	initDesignStudio: function() {
		var that = this;
		
		this.className = ('scn-pack-multiComboBox');
		
//		// Create JSON data model
		var mData = {  
				  selected: ["0","1"],  
				  items:[  
				    {key:"0",text:"Tomorro"},  
				    {key:"1",text:"Next Week"},  
				    {key:"2",text:"Next Month"},  
				    {key:"3",text:"Pick a range..."}  
				  ]  
				};  
		this._oModel = new sap.ui.model.json.JSONModel(mData);
		sap.ui.getCore().setModel(this._oModel);
		this.setModel(this._oModel);
		
		this.bindProperty("tooltip", "/tooltip");
		this.bindProperty("editable", "/editable");
//		this.bindItems("/hardware", oItemTemplate1); That doesn't work according to https://github.com/SAP/openui5/issues/121
		
		var oItemTemplate = new sap.ui.core.Item();
		oItemTemplate.bindProperty("text", "text");
		oItemTemplate.bindProperty("key", "key"); 
		this.bindAggregation('items', '/items', oItemTemplate);
		
		var onChange = function(oControlEvent) {
			var selection = oControlEvent.getParameter("value");
			console.log(selection);
		};
		this.attachChange(onChange);
		
	},
	
	renderer: {},
		
	afterDesignStudioUpdate: function() {
	    var selectedKeys = this._oModel.getProperty('/selected');
	    if (selectedKeys) {
	      this.setSelectedKeys(selectedKeys);
	    }
	    //That doesn't work
		this.setPlaceholder("choose value");
		
		var that = this;
		
		var lData = this._data;
		var lMetadata = this._metadata;
	},
});