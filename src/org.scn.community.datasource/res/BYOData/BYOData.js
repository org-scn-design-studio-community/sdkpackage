/**
 * Copyright 2014 SCN Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/sap-design-studio-free-addons/sdk-package
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
 */

/**
 * Based on from original version by Mike Howles, blogged here: 
 * (http://scn.sap.com/community/businessobjects-design-studio/blog/2014/11/26/design-studio-sdk-14--datasource-sdk-test)
 * 
 * Bring your own data datasource (BYOData) component.  Allows for copying and pasting of data
 * into the Additional Properties Panel in Design Studio.  Useful for rapid prototyping
 * where the datasource does not yet exist, or hardcoding tabular data such as targets
 * 
 */
sap.designstudio.sdk.DataBuffer.subclass("org.scn.community.datasource.BYOData",function(){
	_data = [];
	_mutators = [];
	_mutateString = "";
	_dataString = "";
	_kfIndex = 0;
	_swap = false;
	_simulateHierarchy = false;
	
	this.kfIndex = function(s){
		if(s===undefined){
			return String(_kfIndex);
		}else{
			_kfIndex = parseInt(s);
			this.recalculate();
			return this;
		}
	};
	this.swap = function(b){
		if(b===undefined){
			return _swap;
		}else{
			_swap = b;
			this.recalculate();
			return this;
		}
	};
	this.simulateHierarchy = function(b){
		if(b===undefined){
			return _simulateHierarchy;
		}else{
			_simulateHierarchy = b;
			this.recalculate();
			return this;
		}
	};
	this.mutators = function(s){
		if(s===undefined){
			var d = [];
			return JSON.stringify(_mutators);
		}else{
			if(s=="") s = "[]";
			_mutators = jQuery.parseJSON(s);
			this.recalculate();
			return this;
		}
	};
	this.data = function(s){
		if(s===undefined){
			var d = [];
			for(var i=0;i<_data.length;i++){
				var r = _data[i].join(",");
				d.push(r);
			}
			return d.join("\n");
		}else{
			_data = [];
			_dataString = s.replace(/\|/g,"\n");
			var sd = _dataString.split("\n");
			for(var i=0;i<sd.length;i++){
				_data.push(sd[i].split(","));
			}
			this.recalculate();
			return this;
		}
	};
	this.recalculate = function(){
		// Clear all data
		this.clear();
		// Sanity check
		if(!_data || _data.length==0) {
			this.firePropertiesChanged(["metadata"]);
			this.fireUpdate();
			return;
		}
		
		var headers = _data[0].slice();							// Shallow Copy 1st row to get labels
		var dataStart = 1;										// Account for header row
		var kfIndex = _kfIndex;									// Measure Starting Column
		var kfLength = headers.length - kfIndex;				// Get number of Measures
		var dimNames = headers.slice(0,kfIndex);				// Get Dimensions Names
		var kfNames = headers.splice(kfIndex,headers.length);	// Get Measure Names
		var measureAxis = "COLUMNS";
		var dimensionAxis = "ROWS";
		if(this.swap()==true){
			measureAxis = "ROWS";
			dimensionAxis = "COLUMNS";
		}
		// Create initial Measure Dimension (aka Key Figure Selection Structure)
		
		var dims = [{
			key : "0MEASURES",
			text : "Measures",
			axis : measureAxis,
			containsMeasures : true
		}];
		// Define Dimensions
		for(var i=0;i<dimNames.length;i++){
			var dim = {
				key : dimNames[i],
				text : dimNames[i],
				axis : dimensionAxis
			};
			/*
			 * Doesn't seem to do anything :(
			 */
			if(_simulateHierarchy){
				if(i==dimNames.length-1){
					dim.nodeState = "COLLAPSED";
				}else{
					dim.nodeState = "EXPANDED";
				}
				
				dim.level = i;
			}
			dims.push(dim)
		}
		this.defineDimensions(dims);
		/*
		 * Step 1:
		 * Looks like setDataCell assumes coordinate will be a unique tuple, which may not be the case.
		 * We will make sure each tuple is unique here.
		 */ 
		var uniques = {};
		// Set data
		for(var i=dataStart;i<_data.length;i++){
			// Get dimensions
			var coordinate = _data[i].slice(0,kfIndex);
			for(var j=0;j<kfLength;j++){
				if(j>0){	// Knock out prior Measure
					coordinate.splice(0,1);
				}
				// Splice in measure member in first position.
				coordinate.splice(0,0,kfNames[j]);
				var d = _data[i][kfIndex+j];
				if(isNaN(Number(d))) d = 0;
				var mutate = 1;
				if(_mutators.length>j) mutate = parseFloat(_mutators[j]);
				if(isNaN(mutate)) mutate = 1;
				d = d * mutate;
				var hash = coordinate.join("~");
				if(!uniques[hash]){
					if(coordinate) {
						uniques[hash] = {
							coordinate : coordinate.slice(),	// Shallow copy
							data : d
						};
					}
				}else{
					// Summarize on duplicate
					uniques[hash].data += d;
				}
			}
		}
		//alert(_kfIndex + "\n\n" + JSON.stringify(uniques));
		/*
		 * Step 2 - Send unique over
		 */
		for(var item in uniques){
			this.setDataCell(uniques[item].coordinate,uniques[item].data);	
		}
		this.firePropertiesChanged(["metadata"]);
		this.fireUpdate();
	};
	this.init = function(){	
		this.recalculate();
	};
});