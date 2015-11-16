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
	var _propLabelDisplay			= "";
	var _propColorClass			    = "";
	var _propAddMesure			    = "";
	var _propSelMesure			    = "";	
	var _colorClassArray			= {};
	var _propNotAssignedText		= "";
	
	/*
	 * Properties for APS
	 */
	
	var apsCharList					= [];
	var apsMesureList				= [];
	
	/*
	 * Constants
	 */
	
	//Different values for Reset Button
	var c_ResetButton_NODISP 		= "None";
	var c_ResetButton_LEFT 			= "Left";
	var c_ResetButton_RIGHT 		= "Right";

	//Different values for Value Display Type
	var c_LabelDisplay_NODEKEY 		= "NodeKey";
	var c_LabelDisplay_LEFT			= "Left";
	var c_LabelDisplay_RIGHT		= "Right";
	
	//--- CSS CLASS DEFINITION ---
	
	var c_CSSClassSCNPrefix			= "scn-hier-ddm-";
	
	var c_CSSClassRoot				= "root";
	var c_CSSClassHasSubMenu		= "has-sub";
	var c_CSSClassSelectedItem		= "sel-node";
	var c_CSSClassSelectedParents	= "sel-parents";
	
	var c_CSSClassNode				= "node";
	
	var c_CSSClassRootNode			= "root-node"
	var c_CSSClassList				= "list"
	var c_CSSClassRootList			= "root-list"
		
	var c_CSSClassResetButton		= "reset-button"
		
	var c_CSSClassText				= "text";
	var c_CSSClassMesure			= "mesure";
	
	var c_CSSHasMesure				= "disp-has-mesure";
	var c_CSSHasNoMesure			= "disp-no-mesure";
	
	
	/*
	 * Others
	 */
	
	var debugFlag					= false;
	var dimensionId					= -1; // init with -1 to assure component correct initialized (KK)
	
	//Optimization variables
	var _rendered					= false;
	var loaded						= false;
	
	//---- Strings ----
	
	var div_id 						= null;
	var wrap_id						= null;
	var id_selectedMenuItem			= null;
	var object_id					= null;
	var object_selected_attr		= null;
	var keyFigureIndex				= -1;
	
	//Selected nodes, and its parents
	var elemSelected				= null;
	var elemJqSelParents			= [];
	
	//Mesure variables
	var keyFigStrucName				= ""
	var transformedResultSet		=  {};
	var transformedMetadata			= null;
	var transformedMeasureList		=  {};
	
	/* ***********************
	 * METHODS				 *
	 * ***********************/
	this.init = function() {
		//Get the unique ID of the DIV that DS is creating
		this.debugConsoleDir("INIT - START");
		
		div_id 				= "#" + this.$()[0].id;
		wrap_id 			= div_id + "root_nav";
		id_selectedMenuItem = div_id + c_CSSClassSelectedItem;
		
		this.debugConsoleDir("INIT - DIVID = " + div_id);
		
		object_id 			= div_id;
		object_id = object_id.replace("#","");
		object_id = object_id.replace("_control","");
		
		object_selected_attr = c_CSSClassSCNPrefix + c_CSSClassSelectedItem;
		this.debugConsoleDir("INIT : " + div_id);
		
		this.debugConsoleDir("INIT - END");
	};
	
	this.removeEscapeChars = function(stringValue) {
		return stringValue.replace(/\\/g, "");
	};
	
	this.setRendered= function(value) {
		_rendered = value;
	}
	
	this.getRender = function() {
		//return false;
		return _rendered;
	}
	
	this.getApsMesureList = function() {
		return JSON.stringify(apsMesureList);
	}
	
	this.getApsCharList = function() {
		return JSON.stringify(apsCharList);
	}
	
	this.JQ_SelectedSet = function(jqElemSelected) {
		jqElemSelected.attr(object_selected_attr,"X");
		
		//Set the classs (update display of the selected items)
		$(jqElemSelected).addClass(c_CSSClassSCNPrefix + c_CSSClassSelectedItem);
		
		//Apply CSS class to parents
		elemJqSelParents = jqElemSelected.parents("li").addClass(c_CSSClassSCNPrefix + c_CSSClassSelectedParents);
	}
	
	this.JQ_SelectedRemove = function() {
		
		//Remove the attribute selected
		var localId = "["+object_selected_attr+"='X']";
		$(localId).removeAttr(object_selected_attr);
		
		//remove the class of all selected item.
		var localClassSelItem 		= "." + c_CSSClassSCNPrefix + c_CSSClassSelectedItem;
		var localClassSelParents 	= "." + c_CSSClassSCNPrefix + c_CSSClassSelectedParents;
		$(localClassSelItem).removeClass(c_CSSClassSCNPrefix + c_CSSClassSelectedItem);
		$(localClassSelParents).removeClass(c_CSSClassSCNPrefix + c_CSSClassSelectedParents);
	}
	
	this.JQ_SelectedGet = function() {
		return;
	}
	
	
	/*
	 * Method findSelMesureIndex
	 * 
	 * Find the index of the selected key figure
	 */
	this.findSelMesureIndex = function() {
		//reset the value
		keyFigureIndex = -1;
		
		for(var i=0;i<transformedMeasureList.length;i++){
			if (transformedMeasureList[i].key == _propSelMesure) {
				keyFigureIndex = i + 1;
			}
		}
	}
	
	this.afterUpdate = function() {
		this.debugConsoleDir("afterUpdate - START");
		
		if (!this.getRender()) {
			this.debugConsoleDir("afterUpdate - Render");
			this.$().empty();
			
			this.populateAPS();
			
			this.updateDisplayFromData();
			
			//Since we keep a reference to the selected node
			//We may need to update the reference if the tree has been completely refreshed
			this.renewSelectionReference();
			
			this.updateSelection(elemSelected);
			this.setRendered(true);
		}
		this.debugConsoleDir("afterUpdate - END");
	};
	
	this.clearSelection = function() {
		_propSelectedElemKey 	= "";
		_propSelectedElemText 	= "";
				
		this.JQ_SelectedRemove();
		
		elemSelected 		= null;
		elemJqSelParents 	= [];
	}
	
	this.renewSelectionReference = function() {
		//Find the previously selected node in the new tree
		var jqElemSelected = $("li[valuekey='" + _propSelectedElemKey + "']");
		//replace the DOM object with the new value
		elemSelected = jqElemSelected.get()[0];
	}
	
	this.updateSelection = function(pSelectedItem) {
		this.debugConsoleDir("updateSelection - Start");
		
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
			jqElemSelected = jQuery(pSelectedItem).closest("li");
//			Set the selected item (DOM)
			elemSelected = jqElemSelected.get()[0];
			
			_propSelectedElemKey = elemSelected.attributes.getNamedItem("valuekey").value;
			
//			Must retrieve the text
			_propSelectedElemText = elemSelected.attributes.getNamedItem("valuetext").value;
			
			this.JQ_SelectedSet(jqElemSelected);
		}
		this.debugConsoleDir("updateSelection - End");
	};
	
	/*
	 * Method actionOnReset
	 * 
	 * Defined differently from the others because it is called by the Standard class
	 */
	function actionOnReset(e) {
		
		//Stop the propagation of the click event to the parents LI
		e.stopPropagation();

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
		//Stop the propagation of the click event to the parents LI
		e.stopPropagation();
		
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
	this.updateDisplayFromData = function() {
		this.debugConsoleDir("updateDisplayFromData - Start");
		this.debugConsoleDir(data, "this.updateDisplayFromData / var data");
		
		var rootUL		= null;
		var dim 		= null;
		
		if (!data) {
			//TODO: componentLoadingState zenLoadingStateOpacity
			var newDiv = $('<div/>');
			
			newDiv.addClass("componentLoadingState zenLoadingStateOpacity");
			
			newDiv.append($('<p style="font-weight:bold; color:white; font-size:22px">No data. Please assign a datasource</p>'));
			this.$().append(newDiv);
			return;
		}
		
//		Look for the selected dimension
		for(var i=0;i<data.dimensions.length;i++){
			if (data.dimensions[i].key == _propSelChar) {
				dimensionId = i;
				
				dim = data.dimensions[i];
				break;
			}
		}
		
		//No dimension with a hierarchy has been found
		if (dimensionId == -1) {
			
			var newDiv = $('<div/>');
			
			newDiv.addClass("componentLoadingState zenLoadingStateOpacity");
			
			newDiv.append($('<p "font-weight:bold; color:white; font-size:22px">Please select a dimension with a hierarchy (Additional Property pane)</p>'));
			this.$().append(newDiv);
		} else {
			
			//Convert the data to a 2D table, easily usable by code
			this.generateDataTuples();
			
			this.debugConsoleDir(dim, "this.updateDisplayFromData / var Dim");
			//Should parse and display the member as list				
			var curParent 	= null;
			var curNode     = null;
			
//			Create the first node as NAV
			var rootNav		= $('<nav/>');
			
//			Set the ID for CSS purpose
			rootNav.attr("id", wrap_id);
			rootNav.addClass(c_CSSClassSCNPrefix + c_CSSClassRoot);
			
			//if the user wants to see a mesure, or not, we'll had a class
			//to help designing
			if (_propAddMesure)
				rootNav.addClass(c_CSSClassSCNPrefix + c_CSSHasMesure);
			else 
				rootNav.addClass(c_CSSClassSCNPrefix + c_CSSHasNoMesure);
			
//			Create the first UL section
			rootUL		= $('<ul/>');
			rootUL.addClass(c_CSSClassSCNPrefix + c_CSSClassRootList);
			rootUL.attr("level", 0);
			
			rootNav.append(rootUL);
			
			/*
			 * If the user wanted to add a false first root node, we have to add it
			 */
			if (_propAddSingleRootNode) {
				var newLI 	= this.createLIText(_propSingleRootNodeName);
				
				//Override "onClick" for "onReset"
				newLI.unbind('click');
				newLI.click(actionOnReset);
				
				newLI.addClass(c_CSSClassSCNPrefix + c_CSSClassRootNode);
				newLI.attr("level", 0);
				
				var newUL	= $('<ul/>');
				newUL.addClass(c_CSSClassSCNPrefix + c_CSSClassList);
				
				newLI.append(newUL);
				
				rootUL.append(newLI);
				
				rootUL = newUL;
			};
			
//			This table if a LIFO pile and will be used to track the parents
			var trackPile	= [];
			
			//keep track of the UL parents all the time
			trackPile.push(rootUL);
			
			curParent		= rootUL;
			
			var startLevel = 0;
			if (_propAddSingleRootNode) {
				startLevel = 1;
			}
			
			var curLevel	= startLevel;
			var lastLevel	= 0;
			
			var isSubMenu 	= false;
			
			//Has to treat HIERARCHY_NODE/1HIER_REST/REST_H (to replace value if wanted)
			
//			Loop at each member of the hierarchy
			for(var i=0;i<transformedResultSet.length;i++){
				var line = transformedResultSet[i];
				
				var dim    = line [0];
				var mesure = 0;
				
				//Select the correct EN COURS
				if (keyFigureIndex > 0) {
					mesure = line[keyFigureIndex];
				}
				
//				Keep track of the last level
				lastLevel = curLevel;
			
				
//				The first node do not have a level property, therefore = 0
				if (dim.hasOwnProperty('level')) {
					curLevel = dim.level + startLevel;
				}
				else {
					curLevel = startLevel;
				}
				
				if (curLevel == lastLevel) {
					// on the same level, add a LI, no pile modification
					//Only need to create a new LI, after the IF
					
				} else if (curLevel > lastLevel) {
					//We have gone one level under
					//should pile, create a LI and a UL inside
					
					var newUL	= $('<ul/>');
					newUL.addClass(c_CSSClassSCNPrefix + c_CSSClassList);
					newUL.attr("level", curLevel);
					
					curNode.append(newUL);
					
					if (curLevel > 0)
						curNode.addClass(c_CSSClassSCNPrefix + c_CSSClassHasSubMenu);
					
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
					isSubMenu = true;
				} else {
					isSubMenu = curLevel>0;
				}
				
				curNode = this.createLI(dim, curLevel, mesure, isSubMenu);
				curParent.append(curNode);
			};
			
			var jqResButton = null;
			if (_propResetButton != c_ResetButton_NODISP) {
//				Create a JQuery element to make it easier to call a onClick method
				jqResButton = this.createLIText("X");
				jqResButton.click(actionOnReset);
				
				jqResButton.addClass(c_CSSClassSCNPrefix + c_CSSClassRootNode);
				jqResButton.addClass(c_CSSClassSCNPrefix + c_CSSClassResetButton);
				jqResButton.attr("level",0);
			}
			
			if (!!jqResButton) {
				var rootULJq = rootNav.children(":first")
				
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
		this.debugConsoleDir("updateDisplayFromData - END");
	}
	
	/*
	 * Base method to create a node
	 */
	this.createLIBase = function(pKey, pText, pLevel, pMesure, isSubMenu){
		var node 		= $('<li/>');
		
		node.click(actionOnClick);
		
		//add the internal value from the hierarchy as an attribute
		node.attr("valuekey", pKey );
		
		if (pLevel > 0) {
			node.addClass(c_CSSClassSCNPrefix + c_CSSClassNode);
		} else {
			node.addClass(c_CSSClassSCNPrefix + c_CSSClassRootNode);
		}
		
		node.attr("level", pLevel);
		
		var genDiv 		= $('<div/>');
		
		var divKey 		= $('<span/>');
		divKey.addClass(c_CSSClassSCNPrefix + c_CSSClassText);
		
		//Handle Text decomposition
		var textTmp  = pText;
		var sepIndex = pText.indexOf("|");
		
		//If the separator is found, handle it
		//Else, use the full description as Text
		if (sepIndex >= 0) {
			switch (_propLabelDisplay) {
				case c_LabelDisplay_NODEKEY:
					//Nothing to do
					textTmp = pKey;
					break;
				case c_LabelDisplay_RIGHT:
					sepIndex++;
					textTmp = textTmp.substring(sepIndex, textTmp.length);
					break;
				case c_LabelDisplay_LEFT:
					textTmp = textTmp.substring(0, sepIndex);
					break;
			};
		}
		node.attr("valuetext", textTmp);
		
		//Check if we are on the not assigned node. If yes, and the user
		//passed a value to replace it, we replace it !
		if (pKey == "HIERARCHY_NODE/1HIER_REST/REST_H" && _propNotAssignedText != "")
			divKey.text(_propNotAssignedText);
		else divKey.text(textTmp);
		
		genDiv.append(divKey);
		
		//Check if the mesure is filled
		if (pMesure != "" && _propAddMesure) {
			//Check if the value is present
			if (pMesure.source != "") {
				var divMesure 	= $('<span/>');
				divMesure.addClass(c_CSSClassSCNPrefix + c_CSSClassMesure);
				divMesure.text(pMesure.formated);
				
				genDiv.append(divMesure);
				
				if (_colorClassArray.length > 0) {
					
					for (var indexColorClass = 0; indexColorClass < _colorClassArray.length; indexColorClass++) {
						var low 		= _colorClassArray[indexColorClass].low;
						var high 		= _colorClassArray[indexColorClass].high;
						var cssClass 	= _colorClassArray[indexColorClass].cssClass;
						
						if ((pMesure.source >= low && pMesure.source <= high)) {
							//Apply CSS class
							node.addClass(cssClass);
						}
					}
				}
			}
		}
		
		node.append(genDiv);
		
		return node;
	}
	
	this.createLI = function(pMem, pLevel, pMesure, isSubMenu) {
		return this.createLIBase(pMem.key, pMem.text, pLevel, pMesure, isSubMenu );
	}
	
	this.createLIText = function(text) {
		return this.createLIBase(text, text, "", "", false );;
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
		this.debugConsoleDir("generateDataTuples - Start");
		
		/* adapted from Mike Howles Result Set Transformation
		 * https://github.com/davidhstocker/SAPDSResultSetTransformer/blob/master/formatTransform.js
		 */
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
		
		this.debugConsoleDir("transformedMetadata", transformedMetadata);
		
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
		
		this.debugConsoleDir("generateDataTuples - END");
	}
	
	/*
	 * --- GETTER SETTER for DS properties !
	 */
	this.data = function(value) {
		this.debugConsoleDir("Function Data - Start");
		
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
		this.debugConsoleDir(data,"Function Data - End");
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
	
	this.addMesure = function(value) {	
		
		if (value === undefined) {
			return _propAddMesure;
		} else {
			if (value != _propAddMesure) {
				this.setRendered(false);
				_propAddMesure = value;
				
				if (_propAddMesure)
					this.findSelMesureIndex();
			}
			
			return this;
		}
	};
	
	this.selMesure = function(value) {
		if (value === undefined) {
			return _propSelMesure;
		} else {
			
			if (value != _propSelMesure) {
				this.setRendered(false);
				_propSelMesure = value;
				this.findSelMesureIndex();
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
	
	this.labelDisplay = function(value) {	
		if (value === undefined) {
			return _propLabelDisplay;
		} else {
			if (value != this.getRender()) {
				this.setRendered(false);
				_propLabelDisplay = value;
			}
			
			return this;
		}
	};
	
	this.notAssignedText = function(value) {	
		if (value === undefined) {
			return _propNotAssignedText;
		} else {
			if (value != this.getRender()) {
				this.setRendered(false);
				_propNotAssignedText = value;
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
	
	this.populateAPS = function() {
//		var compMeta = this.callRuntimeHandler("getDimensions");
//		
//		this.comboSelChar.removeAllItems();
//		this.comboSelMesure.removeAllItems();
//		this.comboSelMesure.setSelectedKey(this._selMesure);
//		
//		selKeyfigStruc = "";
//		
//		var previousSelChar = this._selChar;
//		
//		var dims = jQuery.parseJSON(compMeta);
		if (!data)
			return;
		
		apsMesureList = [];
		apsCharList = [];
		
		var dims = data.dimensions;
		var nbDimsWithHier = 0;
//		
		for(var i=0;i<dims.length;i++){
			var dim = dims[i];
			
			if (dim.hasOwnProperty('containsMeasures')) {
				this.setKeyFigStrucName(dim.key);
//				
				for(var j=0 ; j<dim.members.length ; j++) {
					var newMesure = {	key: dim.members[j].key, 
									text: dim.members[j].text};
								 
					apsMesureList.push(newMesure);
				}
			} else {
//				
				var has_hier = false;
////				//that.debugEclipse("updateProps - Dim",dim.key);
//				//Look at the dimension member to find a type "HIERARCHY_NODE"
//								
				for(var j=0 ; j<dim.members.length ; j++){
					var member = dim.members[j];

					if (member.hasOwnProperty('type'))
						if (member.type == 'HIERARCHY_NODE')	{
							has_hier = true;
							break;
						}
				}
				
				if (has_hier) {
					//that.debugEclipse("updateProps - addEntry",dim.key);
					
					var newChar = {	key: dim.key, 
									text: dim.text};
					apsCharList.push(newChar);
					
					nbDimsWithHier++;
					
//					if (this.selChar() == "" && nbDimsWithHier == 1) {
//						this.selChar(_selChar);
//						this.firePropertiesChanged(["selChar"]);
//					}
				}
			}
		}
	}
	
	this.debugConsoleDir = function(object, title) {
		if (debugFlag) {
			if (title != undefined) {
				
				//alert(title + object);
				console.log(title);
				console.log(object);
			} else {
				//alert(object);
				console.log(object);
			}
		}
	}
	
	this.debugAlert = function(text) {
		if (debugFlag) {
			alert(text);
		}
	}
});
