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

define(["../../../org.scn.community.shared/os/sapui5/load.sap.m_2.0"],function(){
		jQuery.sap.require("sap.m.MultiComboBox");

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
		              "DItemList": {type: "string"},
		              "DPropFileUrl": {type: "string"},
		              "DEnabled": {type: "boolean"},
		              "DTooltip": {type: "string"}
		        }
			},
		
			initDesignStudio: function() {
				var that = this;
				//add default css class to be assigned with the combobox. That way you can override specific layout more gracefully.
				this.addStyleClass('scn-pack-multiComboBox');
				//i18n text identifiers
				this.placeholderTextIdentifier = "scn-multicombobox-placeholderText";
				//identify language dynamically
				this.sCurrentLocale = sap.ui.getCore().getConfiguration().getLanguage();
				//make sure default value applies even if no i18n properties file is loaded!
				this.placeholderTextLocalized = "choose value...";
				
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
				this._oModel = new sap.ui.model.json.JSONModel();
				//check https://scn.sap.com/thread/3784288 or https://github.com/SAP/openui5/issues/927
				this._oModel.setSizeLimit(1000);
				
				sap.ui.getCore().setModel(this._oModel);
				this.setModel(this._oModel);
				
				this.bindProperty("tooltip", "/tooltip");
				this.bindProperty("editable", "/editable");
				
				var oItemTemplate = new sap.ui.core.Item();
				oItemTemplate.bindProperty("text", "text");
				oItemTemplate.bindProperty("key", "key");
				oItemTemplate.bindProperty("tooltip", "text");
				this.bindItems("/items", oItemTemplate); //That doesn't work according to https://github.com/SAP/openui5/issues/121
				//workaround for bindItems according to https://github.com/SAP/openui5/issues/121
		//		this.bindAggregation('items', '/items', oItemTemplate);
				
				//This event handler doesn't fire properly on IE and firefox. Therefore logic ported to onChange. Unfortunately the popover needs to be opened on every selection
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
					
					that.fireDesignStudioPropertiesChanged(["DSelectedKey", "DSelectedText", "DSelectedKeyBexReady"]);
					that.fireDesignStudioEvent("onSelectionFinished");
				};
				
				var onChange = function(oControlEvent){
					var selection = oControlEvent.getParameter("changedItem").getText();
					
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

						//assign every key to be marked as not selected
						this.setSelectedKeys([]);
					}
					that.fireDesignStudioEvent("onChange");
				};
				this.attachSelectionChange(onChange);
				this.attachSelectionFinish(onSelectionFinish);
				
				this.setPlaceholder(this.placeholderTextLocalized);
				this.DItemList = [];
				
		//		$('div[class*="sapMMultiComboBoxList"]').focusout(function() {
		//			$(".sapMComboBoxBaseArrow").click();
		//		});
				
		//		org_scn_community_basics.resizeContentAbsoluteLayout(that, $(that).find("div"), this.onResize);
			},
			
			renderer: {},
				
			afterDesignStudioUpdate: function() {
				var oBundle = null;
				var path = this.getDPropFileUrl();
				//If no URL is provided, fallback text is used
				if(path !== "" && path !== null){
					//load language dependent translations
					oBundle = jQuery.sap.resources({url : path, locale: this.sCurrentLocale});
					this.placeholderTextLocalized = oBundle.getText(this.placeholderTextIdentifier);
					this.setPlaceholder(this.placeholderTextLocalized);
				}
				
				this.setEnabled(this.getDEnabled());
				
				//make sure of showing formerly selected items when afterUpdate gets triggered from another context
//				var t = this.getSelectedKeys();
				var selectedKeys = this.getProperty('DSelectedKey');
				var keys = selectedKeys.split(",");
				//avoid allways setting unassigned as preselected key
			    if(keys[0] === "" || keys === undefined){
			    	keys = null;
			    }
				this.setSelectedKeys(keys);
				
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
					this.setPlaceholder(this.placeholderTextLocalized);
					//try to extract values from Item list setter
					var list = this.getDItemList();
					if(list !== ""){
						try{
							list = JSON.parse(list);
							for(var i=0;i<list.length;i++){
								//erase '"' to prettify titles since json string usually come with '"'
								var replacer = new RegExp('"','g');
								var label = list[i].label;
								var key = list[i].key;
								
								list[i].key = key.replace(replacer,'');
								//convert Collection object key "label" to match the data model ("text")
								list[i].text = label.replace(replacer,'');
								this._content.push(list[i]);
							}
						}catch (err){
							if(window.console){
								console.log(err);
							}
						}
					}
				}
				
				//apply sorting
				if(this.getDSorting() === "By Key"){
					if(this.getDSortingDirection() === "Ascending"){
						this._content.sort(function(a,b){
							if(that.isInteger(a.key)){
								return that.compareIntegers(a.key, b.key);
							}else{
								return that.compareText(a.key, b.key);
							}
						});
					}else{
						this._content.sort(function(a,b){
							if(that.isInteger(a.key)){
								return that.compareIntegers(b.key, a.key);
							}else{
								return that.compareText(b.key, a.key);
							}
						});
					}
				}else{
					if(this.getDSortingDirection() === "Ascending"){
						this._content.sort(function(a,b){
							return that.compareText(a.text, b.text);
						});
					}else{
						this._content.sort(function(a,b){
							return that.compareText(b.text, a.text);
						});
					}		
				}
				//put default values to handle selection (everything selected or nothing) more gracefully
				this._content.unshift({"key":"CLEAR","text":this.getDSelectNoText()},{"key":"ALL","text":this.getDSelectAllText()});
				// define model
				this._oModel.setData({
					items: this._content,
					editable: true,
					tooltip: this.getDTooltip()
				});
			},
			replaceAll: function(string, find, replace) {
				  return string.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
			},
			escapeRegExp: function(string) {
			    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
			},
			isInteger: function(value){
				var regex = /^\d+|"\d+"$/;
				return regex.test(value);
			},
			compareIntegers: function(value1, value2) {  
				if ((value1 == null || value1 == undefined || value1 == '') &&  
				(value2 == null || value2 == undefined || value2 == '')) return 0;  
				if ((value1 == null || value1 == undefined || value1 == '')) return -1;  
				if ((value2 == null || value2 == undefined || value2 == '')) return 1;  
				if(parseInt(value1) < parseInt(value2)) return -1;  
				if(parseInt(value1) == parseInt(value2)) return 0;  
				if(parseInt(value1) > parseInt(value2)) return 1;              
			},
			/**
			 * Compare simple text with respect to language
			 * @param value1
			 * @param value2
			 * @returns
			 */
			compareText: function(value1, value2){
				//make sure no uppercase characte mix disturbs the sorting
				value1 = value1.toLowerCase();
				value2 = value2.toLowerCase();
			    return value1.localeCompare(value2);
			},
			getBexStringFromSelection: function(items){
				var keys = [];
				for(var i=0;i<items.length;i++){
					if(items[i] !== "ALL" && items[i] !== "ALL"){
						keys.push(items[i]);
					}
				}
				//get values bex variable ready (has to be seperated by semicolons!)
				var keysBexReady = JSON.stringify(keys)
				keysBexReady = keysBexReady.substring(2,keysBexReady.length-2);
				keysBexReady = this.replaceAll(keysBexReady,",",";")
				keysBexReady = this.replaceAll(keysBexReady,'"',"");
				return keysBexReady;
			}/*,
			onAfterRendering : function() {
//				  if (sap.m.MultiComboBox.prototype.onAfterRendering) {
//				    sap.m.MultiComboBox.prototype.onAfterRendering.apply(this);
//				  }
				  var model = this.getModel();
				  if (model) {
				    var items = model.getProperty('/items');
				    if (items) {
				    	for(var i=0;i<items.length;i++){
				    		var tmp = items[i];
				    	}
				    }
				  } else {

				  }
			}*/
	});
});