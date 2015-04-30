/**
 * Copyright 2015 Franck BLAIS
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
 
sap.designstudio.sdk.Component.subclass("org.scn.community.databound.MultiLevelDropDown", function() {

	var that 						= this;
	
	/*
	 * Properties defined in Contribution.xml
	 */
	
	var data 						= null;
	var _propSelChar				= "";
	var _propSingleRootNodeName 	= null;
	var _propAddSingleRootNode  	= null;
	var _propSelectedElemKey		= null;
	var _propSelectedElemText		= null;
	var _propResetButton			= "";
	var _propValueDisplayType		= "";
	var _propColorClass			    = "";
	var _propAddWeight			    = "";
	var _propSelWeight			    = "";	
	var _colorClassArray			= {};
	
	/*
	 * Constants
	 */
	
	//Different values for Reset Button
	var c_ResetButton_NODISP 		= "None";
	var c_ResetButton_LEFT 			= "Left";
	var c_ResetButton_RIGHT 		= "Right";

	//Different values for Value Display Type
	var c_ValueDisplayType_KEY 		= "Key";
	var c_ValueDisplayType_KEY_TEXT	= "Key+Text";
	var c_ValueDisplayType_TEXT_KEY	= "Text+Key";
	
	var c_DebugFlag					= true;
	
	var c_CSSClassSelectedItem		= "selected-menu-item";
	var c_CSSClassSelectedParents	= "selected-menu-parents";
	
	/*
	 * Others
	 */
	
	var dimensionId					= -1; // init with -1 to assure component correct initialized (KK)
	
	//Optimization variables
	var _rendered					= false;
	var loaded						= false;
	
	//Strings
	var div_id 						= null;
	var wrap_id						= null;
	var id_selectedMenuItem			= null;
	var object_id					= null;
	var object_selected_attr		= null;
	var keyFigureIndex				= -1;
	
	//Selected Menu(s)
	var elemSelected				= null;
	var elemJqSelParents			= [];
	
	//Weight variables
	var keyFigStrucName				= ""
	var transformedResultSet		=  {};
	var transformedMetadata			= null;
	var transformedMeasureList		=  {};
	
	/* ***********************
	 * METHODS				 *
	 * ***********************/
	this.init = function() {
		//Get the unique ID of the DIV that DS is creating
		div_id 				= "#" + this.$()[0].id;
		wrap_id 			= div_id + "root_nav";
		id_selectedMenuItem = div_id + c_CSSClassSelectedItem;
		
		object_id 			= div_id;
		object_id = object_id.replace("#","");
		object_id = object_id.replace("_control","");
		
		object_selected_attr = object_id + "selected_item";
	};
	
	this.removeEscapeChars = function(stringValue) {
		return stringValue.replace(/\\/g, "");
	};
	
	this.setRendered= function(value) {
		_rendered = value;
	}
	
	this.getRender = function() {
		return _rendered;
	}
	
	this.JQ_SelectedSet = function(jqElemSelected) {
		jqElemSelected.attr(object_selected_attr,"X");
		
		//Set the classs (update display of the selected items)
		$(jqElemSelected).addClass(c_CSSClassSelectedItem);
		
		//+FBL20150317
		elemJqSelParents = jqElemSelected.parents("ul","nav").prev().addClass(c_CSSClassSelectedParents);
	}
	
	this.JQ_SelectedRemove = function() {
		
		//Remove the attribute selected
		var localId = "["+object_selected_attr+"='X']";
		$(localId).attr(object_selected_attr,"");
		
		//remove the class of all selected item.
		var localClassSelItem 		= "." + c_CSSClassSelectedItem;
		var localClassSelParents 	= "." + c_CSSClassSelectedParents;
		$(localClassSelItem).removeClass(c_CSSClassSelectedItem);
		$(localClassSelParents).removeClass(c_CSSClassSelectedParents);
	}
	
	this.JQ_SelectedGet = function() {
		return;
	}
	
	
	/*
	 * Method findSelWeightIndex
	 * 
	 * Find the index of the selected key figure
	 */
	this.findSelWeightIndex = function() {
		//reset the value
		keyFigureIndex = -1;
		
		for(var i=0;i<transformedMeasureList.length;i++){
			if (transformedMeasureList[i].key == _propSelWeight) {
				keyFigureIndex = i + 1;
			}
		}
	}
	
	this.afterUpdate = function() {
		
		if (!this.getRender()) {
			this.$().empty();
			this.updateDisplayFromData();
			
			//Since we keep a reference to the selected node
			//We may need to update the reference if the tree has been completely refreshed
			this.renewSelectionReference();
			
			this.updateSelection(elemSelected);
			this.setRendered(true);
			
			loaded = true;
		}
	};
	
	this.clearSelection = function() {
		_propSelectedElemKey 	= "";
		_propSelectedElemText 	= "";
		
		//$(id_selectedMenuItem).attr("id","");
		
		this.JQ_SelectedRemove();
		
		elemSelected 		= null;
		elemJqSelParents 	= [];
	}
	
	this.renewSelectionReference = function() {
		//Find the previously selected node in the new tree
		var jqElemSelected = $("div[valuekey='" + _propSelectedElemKey + "']");
		//replace the DOM object with the new value
		elemSelected = jqElemSelected.get()[0];
	}
	
	this.updateSelection = function(pSelectedItem) {
		
		if (pSelectedItem == undefined) {
			//Do nothing
			return;
		}
	
		
//		Remove the previous selections
		if (!!elemSelected) {
			this.clearSelection();
		}
		
		if (!!pSelectedItem) {
//			Find the first globdiv parent (DIV) where the attributes are
			jqElemSelected = jQuery(pSelectedItem).closest("div[globdiv='true']");
//			Set the selected item (DOM)
			elemSelected = jqElemSelected.get()[0];
			
			_propSelectedElemKey = elemSelected.attributes.getNamedItem("valuekey").value;
			
//			Must retrieve the text
			_propSelectedElemText = elemSelected.attributes.getNamedItem("valuetext").value;
			
			this.JQ_SelectedSet(jqElemSelected);
		}
	};
	
	/*
	 * Method actionOnReset
	 * 
	 * Defined differently from the others because it is called by the Standard class
	 */
	function actionOnReset(e) {

//		Clear the current selection internally
		that.clearSelection();
		
//		Fire the different event to call the reset script
		that.firePropertiesChanged(["selectedElemKey"]);
		that.firePropertiesChanged(["selectedElemText"]);
		that.fireEvent("onReset");
	}
	
	/*
	 * Method actionOnClick
	 * 
	 * Defined differently from the others because it is called by the Standard class
	 */
	function actionOnClick(e) {		
		that.updateSelection(e.target);
		that.firePropertiesChanged(["selectedElemKey"]);
		that.firePropertiesChanged(["selectedElemText"]);
		that.fireEvent("onClick");
	}
	
	/*
	 * Method checkData
	 * 
	 * Check the data to see if it could be used
	 */
	
	this.checkData = function() {
		
	}

	/*
	 * Method updateDisplay
	 * 
	 * Will update all the display and redraw the menu, using UL, LI and A
	 */
	this.updateDisplayFromDim = function() {

		//var hasData = org_scn_community_databound.hasData(data);
		
		//if(!hasData) {
		//	return;
		//}
		
		this.debugConsoleDir(data, "this.updateDisplay / var data");
		
		var rootUL		= null;
		var dim 		= null;
		
//		Look for the selected dimension
		for(var i=0;i<data.dimensions.length;i++){
			if (data.dimensions[i].key == _propSelChar) {
				dimensionId = i;
				
				dim = data.dimensions[i];
				break;
			}
		}
		
		if (dimensionId == -1) {
			this.$().append($('<p>Please select a dimension</p>'));
		} else {
			
			console.dir(dim);
			//Should parse and display the member as list				
			var curParent 	= null;
			var curNode     = null;
			
//			Create the first node as NAV
			var rootNav		= document.createElement("NAV");
//			Set the ID for CSS purpose
//			Please note that a correct HTML document should only have one occurence of an ID
//			Therefore, if several dropdown menus are added in the document, the HTML would not be striclty correct.
			rootNav.id 			= wrap_id;
			rootNav.className 	= rootNav.className + " primary_nav_wrap";
			
//			Createt the first UL section
			rootUL		= document.createElement("UL");
			
			rootNav.appendChild(rootUL);
			
			/*
			 * If the user wanted to add a false first root node, we have to add it
			 */
			if (_propAddSingleRootNode) {
				var newLI 	= this.createLIText(_propSingleRootNodeName);
				var newUL	= document.createElement("UL");
				newLI.appendChild(newUL);
				
				rootUL.appendChild(newLI);
				
				rootUL = newUL;
			};
			
//			This table if a LIFO pile and will be used to track the parents
			var trackPile	= [];
			
			//keep track of the UL parents all the time
			trackPile.push(rootUL);
			
			curParent		= rootUL;
			
			var curLevel	= 0;
			var lastLevel	= 0;
			
			var subMenu 	= false;
			
//			Loop at each member of the hierarchy
			for(var j=0;j<dim.members.length;j++){
				var mem = dim.members[j];
				
//				Ignore result lines
				if (mem.type == "RESULT")
					continue;
				
//				Keep track of the last level
				lastLevel = curLevel;
				
//				The first node do not have a level property, therefore = 0
				if (mem.hasOwnProperty('level')) {
					curLevel = mem.level;
				}
				else {
					curLevel = 0;
				}
				
				if (curLevel == lastLevel) {
					// on the same level, add a LI, no pile modification
//					Only need to create a new LI, after the IF
				} else if (curLevel > lastLevel) {
					//We have gone one level under
					//should pile, create a LI and a UL inside
					
					var newUL	= document.createElement("UL");
					curNode.appendChild(newUL);
					
					trackPile.push(curParent);
					
					curParent 	= newUL;
					
				} else if (curLevel < lastLevel) {
					//went back some level before
					//need to depile
					var nbPop 	= lastLevel - curLevel;
					var curPop 	= 0;
					do {
						curParent = trackPile.pop();
						curPop++;
					} while (curPop < nbPop);
				}
				
				if (_propAddSingleRootNode) {
					subMenu = true;
				} else {
					subMenu = curLevel>0;
				}
				
				curNode = this.createLI(mem, subMenu);
				curParent.appendChild(curNode);
			};
			
			var jqResButton = null;
			if (_propResetButton != c_ResetButton_NODISP) {
//				Create a JQuery element to make it easier to call a onClick method
				jqResButton = jQuery(this.createLIText("X"));
				jqResButton.click(actionOnReset);
			}
			
			if (!!jqResButton) {
				var rootULJq = jQuery(rootNav.firstChild);
				
//				Depending on where the root node should be added, get the first child and Prepand or append
				switch (_propResetButton) {
					case c_ResetButton_LEFT:
						rootULJq.prepend(jqResButton);
						break;
					case c_ResetButton_RIGHT:
						rootULJq.append(jqResButton);
						break;
				};
			}
			
//			Append the list to the HTML
			this.$().append(rootNav);
		}
	}
	
	/*
	 * Method updateDisplay
	 * 
	 * Will update all the display and redraw the menu, using UL, LI and A
	 */
	this.updateDisplayFromData = function() {

		//var hasData = org_scn_community_databound.hasData(data);
		
		//if(!hasData) {
		//	return;
		//}
		
		this.debugConsoleDir(data, "this.updateDisplayFromData / var data");
		
		//Convert the data to a 2D table, easily usable by code
		this.generateDataTuples();
		
		var rootUL		= null;
		var dim 		= null;
		
//		Look for the selected dimension
		for(var i=0;i<data.dimensions.length;i++){
			if (data.dimensions[i].key == _propSelChar) {
				dimensionId = i;
				
				dim = data.dimensions[i];
				break;
			}
		}
		
		if (dimensionId == -1) {
			this.$().append($('<p>Please select a dimension</p>'));
		} else {
			
			this.debugConsoleDir(dim, "this.updateDisplayFromData / var Dim");
			//Should parse and display the member as list				
			var curParent 	= null;
			var curNode     = null;
			
//			Create the first node as NAV
			var rootNav		= document.createElement("NAV");
//			Set the ID for CSS purpose
//			Please note that a correct HTML document should only have one occurence of an ID
//			Therefore, if several dropdown menus are added in the document, the HTML would not be striclty correct.
			rootNav.id 			= wrap_id;
			rootNav.className 	= rootNav.className + " primary_nav_wrap";
			
//			Createt the first UL section
			rootUL		= document.createElement("UL");
			
			rootNav.appendChild(rootUL);
			
			/*
			 * If the user wanted to add a false first root node, we have to add it
			 */
			if (_propAddSingleRootNode) {
				var newLI 	= this.createLIText(_propSingleRootNodeName);
				var newUL	= document.createElement("UL");
				newLI.appendChild(newUL);
				
				rootUL.appendChild(newLI);
				
				rootUL = newUL;
			};
			
//			This table if a LIFO pile and will be used to track the parents
			var trackPile	= [];
			
			//keep track of the UL parents all the time
			trackPile.push(rootUL);
			
			curParent		= rootUL;
			
			var curLevel	= 0;
			var lastLevel	= 0;
			
			var subMenu 	= false;
			
//			Loop at each member of the hierarchy
			for(var i=0;i<transformedResultSet.length;i++){
				var line = transformedResultSet[i];
				
				var dim    = line [0];
				var weight = 0;
				
				//Select the correct EN COURS
				if (keyFigureIndex > 0) {
					weight = line[keyFigureIndex];
				}
				
//				-FBL20150225 Not needed anymore for FromData
////				Ignore result lines
//				if (mem.type == "RESULT")
//					continue;
				
//				Keep track of the last level
				lastLevel = curLevel;
				
//				The first node do not have a level property, therefore = 0
				if (dim.hasOwnProperty('level')) {
					curLevel = dim.level;
				}
				else {
					curLevel = 0;
				}
				
				if (curLevel == lastLevel) {
					// on the same level, add a LI, no pile modification
					//Only need to create a new LI, after the IF
					
				} else if (curLevel > lastLevel) {
					//We have gone one level under
					//should pile, create a LI and a UL inside
					
					var newUL	= document.createElement("UL");
					curNode.appendChild(newUL);
					
					trackPile.push(curParent);
					
					curParent 	= newUL;
					
				} else if (curLevel < lastLevel) {
					//went back some level before
					//need to depile
					var nbPop 	= lastLevel - curLevel;
					var curPop 	= 0;
					do {
						curParent = trackPile.pop();
						curPop++;
					} while (curPop < nbPop);
				}
				
				if (_propAddSingleRootNode) {
					subMenu = true;
				} else {
					subMenu = curLevel>0;
				}
				
				curNode = this.createLI(dim, weight, subMenu);
				curParent.appendChild(curNode);
			};
			
			var jqResButton = null;
			if (_propResetButton != c_ResetButton_NODISP) {
//				Create a JQuery element to make it easier to call a onClick method
				jqResButton = jQuery(this.createLIText("X"));
				jqResButton.click(actionOnReset);
			}
			
			if (!!jqResButton) {
				var rootULJq = jQuery(rootNav.firstChild);
				
//				Depending on where the root node should be added, get the first child and Prepand or append
				switch (_propResetButton) {
					case c_ResetButton_LEFT:
						rootULJq.prepend(jqResButton);
						break;
					case c_ResetButton_RIGHT:
						rootULJq.append(jqResButton);
						break;
				};
			}
			
//			Append the list to the HTML
			this.$().append(rootNav);
		}
	}
	
	this.createLIBase = function(pKey, pText, pLevel, pWeight, activateSubMenu){
		var node 		= document.createElement("LI");
		
		if (activateSubMenu)
			node.className = node.className + " submenu";
		
		var genDiv 		= document.createElement("DIV");
		
		genDiv.setAttribute("valuekey", pKey );
		genDiv.setAttribute("globdiv", "true" );
//		genDiv.className 	= "content";
		
		genDiv.setAttribute("firstLink", "true");
		
//		link.name 		= div_id + pKey + "LI";
		
		var genDivJq 		= jQuery(genDiv);
		genDivJq.click(actionOnClick);
		
		genDiv = genDivJq.get()[0];
		
		var divKey 		= document.createElement("SPAN");
		divKey.className 	= "DDP_TEXT";
		
//		var link		= document.createElement("A");
		
		//Handle Text decomposition
		var textTmp  = pText;
		var sepIndex = pText.indexOf("|");
		
		//If the separator is found, handle it
		//Else, use the full description as Text
		if (sepIndex >= 0) {
			switch (_propValueDisplayType) {
				case c_ValueDisplayType_KEY:
					//Nothing to do
					textTmp = pKey;
					break;
				case c_ValueDisplayType_KEY_TEXT:
					sepIndex++;
					textTmp = textTmp.substring(sepIndex, textTmp.length);
					break;
				case c_ValueDisplayType_TEXT_KEY:
					textTmp = textTmp.substring(0, sepIndex);
					break;
			};
		}
		genDiv.setAttribute("valuetext", textTmp);
		textNode 		= document.createTextNode(textTmp);
		
		divKey.appendChild(textNode);
		genDiv.appendChild(divKey);
		
		//Check if the weight is filled
		if (pWeight != "" && _propAddWeight) {
			//Check if the value is present
			if (pWeight.source != "") {
				var divWeight 	= document.createElement("SPAN");
				divWeight.className = "DDP_WEIGHT";
				textNode 		= document.createTextNode(pWeight.formated);
				
				divWeight.appendChild(textNode);
				genDiv.appendChild(divWeight);
				
				if (_colorClassArray.length > 0) {
					
					for (var indexColorClass = 0; indexColorClass < _colorClassArray.length; indexColorClass++) {
						var low 		= _colorClassArray[indexColorClass].low;
						var high 		= _colorClassArray[indexColorClass].high;
						var cssClass 	= _colorClassArray[indexColorClass].cssClass;
						
						if ((pWeight.source >= low && pWeight.source <= high)) {
							//Apply CSS class
							node.className 	= node.className + " " + cssClass;
						}
					}
				}
			}
		}
		
		node.appendChild(genDiv);
		
		return node;
	}
	
	this.createLI = function(mem, weight, activateSubMenu) {
		var lvl = 0;
		
		if (mem.hasOwnProperty('level')) {
			lvl = mem.level;
		}
		return this.createLIBase(mem.key, mem.text, lvl, weight, activateSubMenu );
	}
	
	this.createLIText = function(text) {
		//mem is a member of a dimension
		
		//-FBL20150225 Simplified
//		var node 		= document.createElement("LI");
//		var link		= document.createElement("A");
//		
//		//link.id = div_id + text;
//		link.setAttribute("HREF", "#");
//		
//		var nodeText 		= document.createTextNode(text);
//		
//		link.appendChild(nodeText);
//		node.appendChild(link);
		
		var node = this.createLIBase(text, text, "", "" );
		
		return node;
	}
	
	/*
	 * Return the content of the dimension tables from an array converted in a JSON String
	 * - Called in the Property page
	 */
	this.getDimensions = function() {
		if (data) {
			return JSON.stringify(data.dimensions);
		}
	};
	
	/*
	 * Return the content of the dimension tables from an array converted in a JSON String
	 * - Called in the Property page
	 */
	this.setKeyFigStrucName = function(value) {
		keyFigStrucName = value;
	};
	
	
	this.generateDataTuples = function() {
		//https://github.com/davidhstocker/SAPDSResultSetTransformer/blob/master/formatTransform.js
		var displayType 			= "text";
		var tuples 					= data.tuples;
		var lastTuple 				= tuples[tuples.length -1];
		var lenDataGridXAxis 		= lastTuple[1];
		var lenDataGridYAxis 		= lastTuple[2];
		
		//walk through the dimensons/measures.  collect the "column dimensions", measures and row dimensions.
		var colDimensions 		= [];
		var rowDimensions	 	= [];
		var colMeasures 		= [];
		var rowMeasures 		= [];
		
		var rowDimSorted	 	= [];
		var colMeasSorted 		= [];
		
		
		transformedMetadata 	= [];
		
		var longestDimSet = 0;  	//This is the number of data columns
		var numberOfDataTuples = 0;	//This is the number of tuples
		var headerData = data.dimensions;
		for (var i = 0; i < headerData.length; i++) {
			var members = [];
			var perDimMembers = []
			if (typeof(headerData[i].containsMeasures) != "undefined"){
				//we have a measure
				for (var j = 0; j < headerData[i].members.length; j++) {
					
					colMeasSorted.push(headerData[i].members[j]);
					
					var lvl = 0;
					
					if (headerData[i].members[j].hasOwnProperty('level'))
						lvl = headerData[i].members[j].level;
					
					var oContent = {
							key:  	headerData[i].members[j].key,
							text: 	headerData[i].members[j].text,
							id:		j,
							level: 	lvl,
					};
					
					perDimMembers.push(oContent);
				}

				if (headerData[i].axis == "COLUMNS"){
					colMeasures.push(perDimMembers);
					//keeping track of the longest set of dimensions
					if (perDimMembers.length > longestDimSet){
						longestDimSet = perDimMembers.length;
					}
				}
			} else{
				// we have a dimension
				
				rowDimSorted.push(headerData[i]);
				
				for (var j = 0; j < headerData[i].members.length; j++) {
					
					var lvl = 0;
					
					if (headerData[i].members[j].hasOwnProperty('level'))
						lvl = headerData[i].members[j].level;
					
					var oContent = {
							key:  	headerData[i].members[j].key,
							text: 	headerData[i].members[j].text,
							index:	i,
							level: 	lvl,
					};
					
					perDimMembers.push(oContent);
					
					//keeping track of the number of tuples
					if (headerData[i].members.length > numberOfDataTuples){
						numberOfDataTuples = headerData[i].members.length;
					}
				}
				
				if (headerData[i].axis == "COLUMNS"){
					colDimensions.push(perDimMembers);
					//keeping track of the longest set of dimensions
					if (perDimMembers.length > longestDimSet){
						longestDimSet = perDimMembers.length;
					}
				} else{
					rowDimensions.push(perDimMembers);
				}			
			}
		}
		
		//Build the table data tuples.
		//  A single tuple will contain all of the row labels and the 
		var nNthDataPoint = -1;
		rowTuples = [];
		
		transformedMetadata = rowDimSorted.concat(colMeasSorted);
		
		console.dir(transformedMetadata);
		
		for (var i = 0; i < numberOfDataTuples; i++) {
			var rowTuple = [];

			//Add the leading row labels
			for (var j = 0; j < rowDimensions.length; j++) {
				if (typeof(rowDimensions[j][i]) != "undefined"){
					rowTuple.push(rowDimensions[j][i]);
				} else{
					rowTuple.push("");
				}
			}
			for (var j = 0; j < rowMeasures.length; j++) {
				if (typeof(rowMeasures[j][i]) != "undefined"){
					rowTuple.push(rowMeasures[j][i]);
				} else{
					rowTuple.push("");
				}
			}
			
			//Now add the actual row data to the tuple
			
			var kfNum		= colMeasSorted.length;
			var kfNumIndex 	= 0;
			
			for (var j = 0; j < longestDimSet; j++){
				nNthDataPoint++;
				if (typeof(data.data[nNthDataPoint]) != "undefined"){
					
					kfNumIndex = nNthDataPoint % kfNum;
					
					var trueValue = data.data[nNthDataPoint];
					var value = trueValue;
					
					var strFormat =colMeasSorted[kfNumIndex].formatString;
					
//					If a % is found, the value must be divided by 100 to avoid having 1000%
					var nPC = strFormat.search("%");
					if (nPC) {
						value = value / 100;
					}
					if (strFormat) {
						// use CVOM library to format cell value
						sap.common.globalization.NumericFormatManager.setPVL(data.locale);
						value =  sap.common.globalization.NumericFormatManager.format(value, strFormat);
					}
					
					var tmpKfArray = {formated: value, source:trueValue };
					
					rowTuple.push(tmpKfArray);
				}
				else{
					rowTuple.push({formated: "", source:"" });
				}
			}
			
			rowTuples.push(rowTuple);
		}
		
		transformedMeasureList = colMeasures[0];

		this.debugConsoleDir(data, "MLDD.generateDataTyples - data");
		this.debugConsoleDir(rowDimensions, "MLDD.generateDataTyples - rowDimensions");
		this.debugConsoleDir(colMeasures, "MLDD.generateDataTyples - colMeasures");
		this.debugConsoleDir(rowTuples, "MLDD.generateDataTyples - rowTuples");
		
		transformedResultSet = rowTuples;
	}
	
	/*
	 * --- GETTER SETTER for DS properties !
	 */
	this.data = function(value) {
		if (value === undefined) {
			return data;
		} else {
			
			if (!loaded && !!value) {
				data = value;
				loaded = true;
				this.setRendered(false);
			}
			
			return this;
		}
	};
	

	/*
	 * This is the getter/Setter of selChar.
	 * It can be called at 2 places:
	 * 	- When you go in the design studio standard property page and update it
	 *  - When you call the that.firePropertiesChanged(["selChar"]);
	 *  
	 * The property has to be declared in both:
	 *  - contribution.xml
	 *  - preferably you component (this file)
	 */
	
	this.selChar = function(value) {
		
		if (value === undefined) {
			return _propSelChar;
		} else {
			
			if (_propSelChar != value) {
				loaded = false;
				dimensionId = -1;
				this.setRendered(false);
				_propSelChar = value;
			}
			
			return this;
		}
	};
	
	this.addSingleRootNode = function(value) {
		
		if (value === undefined) {
			return _propAddSingleRootNode;
		} else {
			if (value != _propAddSingleRootNode) {
				this.setRendered(false);
				_propAddSingleRootNode = value;
			}
			
			return this;
		}
	};
	
	this.singleRootNodeName = function(value) {	
		
		if (value === undefined) {
			return _propSingleRootNodeName;
		} else {
			if (value != _propSingleRootNodeName) {
				this.setRendered(false);
				_propSingleRootNodeName = value;
			}
			
			return this;
		}
	};
	
	this.addWeight = function(value) {	
		
		if (value === undefined) {
			return _propAddWeight;
		} else {
			if (value != _propAddWeight) {
				this.setRendered(false);
				_propAddWeight = value;
				
				if (_propAddWeight)
					this.findSelWeightIndex();
			}
			
			return this;
		}
	};
	
	this.selWeight = function(value) {	
		if (value === undefined) {
			return _propSelWeight;
		} else {
			
			if (value != _propSelWeight) {
				this.setRendered(false);
				_propSelWeight = value;
				this.findSelWeightIndex();
			}

			return this;
		}
	};
	
	this.selectedElemKey = function(value) {	
		if (value === undefined) {
			return _propSelectedElemKey;
		} else {
			_propSelectedElemKey = value;
			return this;
		}
	};
	
	this.selectedElemText = function(value) {
		if (value === undefined) {
			return _propSelectedElemText;
		} else {
			_propSelectedElemText = value;
			return this;
		}
	};
	
	this.resetButton = function(value) {	
		if (value === undefined) {
			return _propResetButton;
		} else {
			if (value != this.getRender()) {
				this.setRendered(false);
				_propResetButton = value;
			}
			
			return this;
		}
	};
	
	this.valueDisplayType = function(value) {	
		if (value === undefined) {
			return _propValueDisplayType;
		} else {
			if (value != this.getRender()) {
				this.setRendered(false);
				_propValueDisplayType = value;
			}
			
			return this;
		}
	};
	
	this.colorClass = function(value) {	
		if (value === undefined) {
			return _propColorClass;
		} else {
			if (value != this.getRender()) {
				this.setRendered(false);
				_propColorClass = value;
				
				try {
					_colorClassArray = JSON.parse(_propColorClass);
			    } catch (e) {
			    	this.debugConsoleDir("Parse _propColorClasss to JSON ERROR", _propColorClass);
			    	_colorClassArray = {};
			    }
			}
			
			return this;
		}
	};
	
	/*
	 * ---- Utilities Method
	 */
	
	this.debugConsoleDir = function(object, title) {
		if (c_DebugFlag) {
			if (title != undefined)
				console.dir(title);
			
			console.dir(object);
		}
	}
	
	this.debugAlert = function(text) {
		if (c_DebugFlag) {
			alert(text);
		}
	}
});
