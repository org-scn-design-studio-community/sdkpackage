/**
 * Copyright 2014 Franck BLAIS
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
	var _propClickedElemKey			= null;
	var _propClickedElemText		= null;
	var _propResetButton			= "";
	
	/*
	 * Constants
	 */
	
	var c_ResetButton_NODISP 		= "None";
	var c_ResetButton_LEFT 			= "Left";
	var c_ResetButton_RIGHT 		= "Right";
	var c_DebugFlag					= true;
	
	/*
	 * Others
	 */
	
	var dimensionId					= 0;
	var loaded						= false;
	
	//Strings
	var div_id 						= null;
	
	//Objects
	var elemSelected				= null;
	var elemJqSelParents			= [];
	var _rendered					= false;
	var elemStyleJq					= null;
	
	/* ***********************
	 * METHODS				 *
	 * ***********************/
	this.init = function() {
		div_id = "#" + this.$()[0].id;
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
	
	this.afterUpdate = function() {
		
		if (!this.getRender()) {
			this.$().empty();
			this.updateDisplay();
			this.updateSelection(elemSelected);
			this.setRendered(true);
			
			loaded = true;
		}
	};
	
	this.clearSelection = function() {
		_propClickedElemKey 	= "";
		_propClickedElemText 	= "";
		
		$("#selected-menu-item").attr("id","");
		$(".selected-menu-parents").removeClass("selected-menu-parents");
		
		elemSelected 		= null;
		elemJqSelParents 	= [];
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
//			Set the selected item (DOM)
			elemSelected = pSelectedItem;
			_propClickedElemKey = elemSelected.attributes.getNamedItem("valuekey").value;
			
//			Must retrieve the text
			_propClickedElemText = elemSelected.attributes.getNamedItem("valuetext").value;
			
//			Transform the selected item to JQuery object
			var jqElemSelected = jQuery(elemSelected);
			
//			Get the first LI Parent
			var jQElemSelectedLI = jqElemSelected.parent("LI");
			
			
//			Set the ID of the LI parents to selected
			$(jqElemSelected).attr("id", "selected-menu-item");
			
//			Get the LI parents in a table
			elemJqSelParents = jQElemSelectedLI.parents("LI");
			
//			For each, set the ID to selected parent.
//			Stop until finding a parent with the tag NAV
			elemJqSelParents.each(function() {
//				Check he has a direct parent with a UL = NAV
//				if yes, stop the algorithm
				if ($( this ).parent("UL").parent().prop("tagName") == "NAV") {
					return false;
				}
				
//				Update all the parents with a CSS class to display the path
//				to the selected node
				var allA = $( this ).find("a[firstLink='true']");
				if (!!allA) {
					var firstA = jQuery($(allA)[0]);
					$(firstA).addClass("selected-menu-parents");
				}
			});
		}
	};
	
	function actionOnReset(e) {

//		Clear the current selection internally
		that.clearSelection();
		
//		Fire the different event to call the reset script
		that.firePropertiesChanged(["clickedElemKey"]);
		that.firePropertiesChanged(["clickedElemText"]);
		that.fireEvent("onReset");
	}
	
	function actionOnClick(e) {		
		that.updateSelection(e.target);
		that.firePropertiesChanged(["clickedElemKey"]);
		that.firePropertiesChanged(["clickedElemText"]);
		that.fireEvent("onClick");
	}

	/*
	 * Method updateDisplay
	 * 
	 * Will update all the display and redraw the menu, using UL, LI and A
	 */
	this.updateDisplay = function() {

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
			//Should parse and display the member as list				
			var curParent 	= null;
			var curNode     = null;
			
//			Create the first node as NAV
			var rootNav		= document.createElement("NAV");
//			Set the ID for CSS purpose
//			Please note that a correct HTML document should only have one occurence of an ID
//			Therefore, if several dropdown menus are added in the document, the HTML would not be striclty correct.
			rootNav.id 		= "primary_nav_wrap";
			
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
	
	this.createLI = function(mem, activateSubMenu) {
		//mem is a member of a dimension
		var node 		= document.createElement("LI");
		
		if (activateSubMenu)
			node.className = node.className + " submenu";
		
		var link		= document.createElement("A");
		
		
//		Keep track of the internal value. Will be retrieved when clicked
		link.setAttribute("valuekey", mem.key);
//		Add this attribute to be easily found with JQyery
		link.setAttribute("firstLink", "true");
//		link.name = div_id + mem.key + "LI";
		
//		Create a JQyery element to add the onClick event
		var linkJQ = jQuery(link);
		linkJQ.click(actionOnClick);
		
//		Get back the DOM element
		link = linkJQ.get()[0];
		
		var textTmp  = mem.text;
		var sepIndex = textTmp.indexOf("|");
		if (sepIndex >= 0) {
			sepIndex++;
			textTmp = textTmp.substring(sepIndex, textTmp.length);
		}
		var textNode 		= document.createTextNode(textTmp);
		
//		Keep track of the internal value. Will be retrieved when clicked
		link.setAttribute("valuetext", textTmp);
		
		link.appendChild(textNode);
		node.appendChild(link);
		
		return node;
	}
	
	this.createLIText = function(text) {
		//mem is a member of a dimension
		var node 		= document.createElement("LI");
		var link		= document.createElement("A");
		
		//link.id = div_id + text;
		link.setAttribute("HREF", "#");
		
		var nodeText 		= document.createTextNode(text);
		
		link.appendChild(nodeText);
		node.appendChild(link);
		
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
	
	this.clickedElemKey = function(value) {	
		if (value === undefined) {
			return _propClickedElemKey;
		} else {
			_propClickedElemKey = value;
			return this;
		}
	};
	
	this.clickedElemText = function(value) {	
		if (value === undefined) {
			return _propClickedElemText;
		} else {
			_propClickedElemText = value;
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
