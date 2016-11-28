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
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"shared/os/jquery/jquery.waituntilexists"
	],
	function(
		Component,
		core,
		basics,
		wait
	) {
//%DEFINE-END%

var myComponentData = {};
myComponentData.fullComponentName = "org.scn.community.utils.Replacer";

Replacer = function () {

	var that = this;
	
	this.init = function() {
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
//		this.initialRunComplete = false;
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	this.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		//Check function trigger
		if(this.replace() !== ""){
			if(that._mappingTable[0] !== undefined){
				var lastMappingEntry = that._mappingTable[that._mappingTable.length-1];
				var lastRenderedElement = lastMappingEntry.item1;
				var lastElementSelector = lastMappingEntry.selector;
				var referenceSelector = lastMappingEntry.referenceSelector;
				
				if(lastElementSelector !== undefined){
					//Select html element by its id given by the dashboard designer
//					var lastElement = $("#"+that._component).find(lastElementSelector+':contains('+lastRenderedElement+')');
					var pattern = new RegExp(lastRenderedElement);
					var valueFound = false;
					var lastElement = "";
					if(referenceSelector !== undefined){
						lastElement = $("#"+that._component).find(referenceSelector);	
					}else{
						lastElement = $("#"+that._component).find(lastElementSelector);
					}
					
					for(var i=0;i < lastElement.length;i++){
						if (pattern.test(lastElement[i].innerText)) {
							lastElement[0] = lastElement[i];
							valueFound = true;
							break;
						}
					}
					
					//wait until element is actually inserted into HTML dom tree, otherwise changes will not be reflected!
					if(!valueFound && lastElement[0] === undefined /*&& this.initialRunComplete === false*/){
						$(lastElement).waitUntilExists(function(){
							that.replaceTextAccordingToMapping();
//							that.initialRunComplete = true;
						},
						true);	
					}else{
						this.replaceTextAccordingToMapping();
					}	
				}else{
					alert("The selector cannot be left empty!");
				}

			}
			
			//reset function trigger!
			this.replace("");
			that.firePropertiesChanged(["replace"]);
		}
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	};
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/

	this.replaceTextAccordingToMapping = function(){
		for(var i=0;i<that._mappingTable.length;i++){
			var mappingEntry = that._mappingTable[i]; 
			var item1 = mappingEntry.item1;
			var item2 = mappingEntry.item2;
			//retrieve individual selector to work on given HTML sub-tree!
			var selector = mappingEntry.selector;
			//retrieve individual table header reference to work on given HTML sub-tree!
			//That way we can avoid that the replacement on scrollable components produces
			//wrong results when working with index based css selectors
			var referenceSelector = mappingEntry.referenceSelector;
			var referenceText = mappingEntry.referenceItem;
			var indexOfReference = -1;
			if(referenceSelector !== undefined && selector.indexOf("%INDEX%") !== -1){
				//find text to be replace by given text to match
				//allow regex for text matches
				var pattern = new RegExp(referenceText,"g");
				var t = $("#"+that._component).find(referenceSelector);
				var referenceFound = false;
				$("#"+that._component).find(referenceSelector).each(
						function(){
							var text = $(this).text().replace(/\s/g, '');
							 if (pattern.test(text)) {
								 //css index starts 1!
								 indexOfReference = $(this).index()+1;
								 selector = selector.replace("%INDEX%", indexOfReference);
								 referenceFound = true;
								 return false;
							 }
						}
				);
				if(referenceFound){
					//find text to be replace by given text to match
					//allow regex for text matches
					var pattern = new RegExp(item1,"g");
					if(selector !== undefined){
						$("#"+that._component).find(selector).each(
								function(){
									var text = $(this).text();
									 if (pattern.test(text)) {
										 $(this).text(item2);
										 $(this).prop("title",text);
									 }
								}
						);	
					}else{
						alert("The selector cannot be left empty!");
					}
				}
			}else{
				//find text to be replace by given text to match
				//allow regex for text matches
				var pattern = new RegExp(item1,"g");
				if(selector !== undefined){
					$("#"+that._component).find(selector).each(
							function(){
								var text = $(this).text();
								 if (pattern.test(text)) {
									 $(this).text(item2);
									 $(this).prop("title",text);
								 }
							}
					);	
				}else{
					alert("The selector cannot be left empty!");
				}
			}

		}
	};
	
	this.component = function (value) {
		if (value === undefined) {
			return that._component;
		} else {
			that._component = value;
			return this;
		}
	};
	
	this.mappingTable = function (value) {
		if (value === undefined) {
			return that._mappingTable;
		} else {
			that._mappingTable = value;
			return this;
		}
	};
	
	this.manualTable = function (value) {
		if (value === undefined) {
			return that._mappingTable;
		} else {
			try{
				that._mappingTable = JSON.parse(value);	
			}catch (err){
				if(window.console)console.log("JSON parse error "+value);
				that._mappingTable = [];
			}
			return this;
		}
	};
	
	this.replace = function (value) {
		if (value === undefined) {
			return that._replace;
		} else {
			that._replace = value;
			return this;
		}
	};

	/* COMPONENT SPECIFIC CODE - END METHODS*/
	
	return that;
};

//%INIT-START%
myComponentData.instance = Replacer;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});
