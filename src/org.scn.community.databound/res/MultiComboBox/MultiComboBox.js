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
 * 
 * Author: Martin Pankraz
 * 
 * Thanks to Karol and Mustafa for pointing out how to integrate with sap.m
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

	setData : function(value) {
		this._data = value;
		return this;
	},
	
	getData : function(value) {
		return this._data;
	},
	
	metadata: {
        properties: {
              "DDimension": {type: "string"},
              "DSelectedKey": {type: "string"},
              "DSelectedText": {type: "string"},
              "DSelectedKeyBexReady" : {type: "string"},
              "DSorting": {type: "string"},
              "DSortingDirection": {type: "string"},
              "DSkipResultRow": {type: "boolean"}, 
              "DSelectAllText": {type: "string"},
              "DSelectNoText": {type: "string"},
              "DItemList": {type: "string"}
        }
	},

	initDesignStudio: function() {
		var that = this;
		//add default css class to be assigned with the combobox. That way you can override specific layout more gracefully.
		this.addStyleClass('scn-pack-multiComboBox');
		
//		// Create JSON data model
//		var mData = {  
//				  selected: ["0","1"],  
//				  items:[  
//				    {key:"0",text:"first"},  
//				    {key:"1",text:"second"},  
//				    {key:"2",text:"third"},  
//				    {key:"3",text:"fourth"}  
//				  ]  
//				};  
		this._oModel = new sap.ui.model.json.JSONModel(/*mData*/);
		sap.ui.getCore().setModel(this._oModel);
		this.setModel(this._oModel);
		
		this.bindProperty("tooltip", "/tooltip");
		this.bindProperty("editable", "/editable");
//		this.bindItems("/items", oItemTemplate); That doesn't work according to https://github.com/SAP/openui5/issues/121
		
		var oItemTemplate = new sap.ui.core.Item();
		oItemTemplate.bindProperty("text", "text");
		oItemTemplate.bindProperty("key", "key"); 
		//workaround for bindItems according to https://github.com/SAP/openui5/issues/121
		this.bindAggregation('items', '/items', oItemTemplate);
		
		var onSelectionFinish = function(oControlEvent) {
			var selection = oControlEvent.getParameter("selectedItems");
			var keys = [];
			var texts = [];
			for(var i=0;i<selection.length;i++){
				keys.push(selection[i].getKey());
				texts.push(selection[i].getText());
			}
			//get values bex variable ready (has to be seperated by semicolons!)
			var keysBexReady = JSON.stringify(keys)
			keysBexReady = keysBexReady.substring(2,keysBexReady.length-2);
			keysBexReady = this.replaceAll(keysBexReady,",",";")
			keysBexReady = this.replaceAll(keysBexReady,'"',"");
			this.setDSelectedKey(keys);
			this.setDSelectedText(texts);
			this.setDSelectedKeyBexReady(keysBexReady);
			
			//unselect CLEAR to clean up selection
			this.removeSelectedKeys(["CLEAR"]);
			//unselect ALL to clean up selection
			this.removeSelectedKeys(["ALL"]);
			
			that.fireDesignStudioPropertiesChanged(["DSelectedKey", "DSelectedText", "DSelectedKeyBexReady"]);
			that.fireDesignStudioEvent("onSelectionFinished");
		};
		
		var onChange = function(oControlEvent){
			var selection = oControlEvent.getParameter("value");
			if(selection === this.getDSelectAllText()){
				var items = this._oModel.oData.items;
				var selectedKeys = [];
				for(var i=0;i<items.length;i++){
					if(items[i].key !== "ALL" && items[i].key !== "CLEAR"){
						selectedKeys.push(items[i].key);
					}
				}
				//assign every key to be marked as selected
				this.setSelectedKeys(selectedKeys);

			}else if(selection === this.getDSelectNoText()){
				var items = this._oModel.oData.items;
				var selectedKeys = [];
				for(var i=0;i<items.length;i++){
					if(items[i].key !== "ALL" && items[i].key !== "CLEAR"){
						selectedKeys.push(items[i].key);
					}
				}

				//assign every key to be marked as selected
				this.removeSelectedKeys(selectedKeys);
			}
		};
		this.attachChange(onChange);
		this.attachSelectionFinish(onSelectionFinish);
		
		this.setPlaceholder("choose value...");
		this.DItemList = [];
	},
	
	renderer: {},
		
	afterDesignStudioUpdate: function() {
		//make sure of showing formerly selected items when afterUpdate gets triggered from another context
		var t = this.getSelectedKeys();
	    if (this.getSelectedKeys().length === 0) {
		  var selectedKeys = this.getProperty('DSelectedKey');
		  var keys = selectedKeys.split(",");
		  //avoid allways setting unassigned as preselected key
	      if(keys !== "" && keys !== undefined){
			  this.setSelectedKeys(keys);  
	      }
	    }
		
		var that = this;
		
		var lData = this._data;
		this._content = [];
		var dimension_found = false;
		if(lData.dimensions !== undefined){
			for(var i=0;i<lData.dimensions.length;i++){
				if(lData.dimensions[i].key === this.getDDimension()){
					var members = lData.dimensions[i].members;
					if(!this.getDSkipResultRow()){
						this._content = lData.dimensions[i].members;
					}
					else{
						for(var j=0;j<members.length;j++){
							if(members[j].type !== 'RESULT'){
								this._content.push(members[j]);	
							}
						}
					}
					dimension_found = true;
				}
			}
			if(!dimension_found){
				this.setPlaceholder("Dimension "+this.getDDimension()+" doesn't match on DataSource!");
			}
		}else{
			this.setPlaceholder("choose value...");
			//try to extract values from Item list setter
			try{
				var list = JSON.parse(this.getDItemList());
				for(var i=0;i<list.length;i++){
					//convert Collection object key "label" to match the data model ("text")
					list[i].text = list[i].label; 
					this._content.push(list[i]);
				}
			}catch (err){
				if(window.console){
					console.log(err);
				}
			}
		}
		
		//apply sorting
		if(this.getDSorting() === "By Key"){
			if(this.getDSortingDirection() === "Ascending"){
				this._content.sort(function(a,b){
					return a.key > b.key;
				});
			}else{
				this._content.sort(function(a,b){
					return a.key < b.key;
				});
			}
		}else{
			if(this.getDSortingDirection() === "Ascending"){
				this._content.sort(function(a,b){
					return a.text > b.text;
				});
			}else{
				this._content.sort(function(a,b){
					return a.text < b.text;
				});
			}		
		}
		//put default values to handle selection (everything selected or nothing) more gracefully
		this._content.unshift({"key":"CLEAR","text":this.getDSelectNoText()},{"key":"ALL","text":this.getDSelectAllText()});
		// define model
		this._oModel.setData({
			items: this._content,
			editable: true
		});
	},
	replaceAll: function(string, find, replace) {
		  return string.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
	},
	escapeRegExp: function(string) {
	    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	}
});