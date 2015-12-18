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
define(["./../../../org.scn.community.shared/os/viz-modules/DatasourceCore",
        "sap/designstudio/sdk/databuffer"], function(DatasourceCore, DataBuffer) {
	var ownComponentName = "org.scn.community.datasource.BYOData";
	 // Call super
	function BYOData() {
		var that = this;
		this.recalculate = function(){
			// Clear all data
			this.clear();
			// Sanity check
			var _data = [];
			var _mutators = [];
			var kfIndex = parseInt(this.kfIndex() || 0);			// Measure Starting Column
			var mutatorString = this.mutators();
			if(mutatorString && mutatorString!=""){
				_mutators = JSON.parse(mutatorString);
			}
			var dataString = this.data();
			if(dataString && dataString != ""){
				dataString = dataString.replace(/~\|~/g,"\n");
				var sd = dataString.split("\n");
				for(var i=0;i<sd.length;i++){
					_data.push(sd[i].split(","));
				}
			}
			if(!_data || _data.length==0) {
				this.firePropertiesChanged(["metadata"]);
				this.fireUpdate();
				return;
			}
			var headers = _data[0].slice();							// Shallow Copy 1st row to get labels
			var dataStart = 1;										// Account for header row
			var kfLength = headers.length - kfIndex;				// Get number of Measures
			var dimNames = headers.slice(0,kfIndex);				// Get Dimensions Names
			var kfNames = headers.splice(kfIndex,headers.length);	// Get Measure Names
			var measureAxis = "COLUMNS";
			var dimensionAxis = "ROWS";
			/*
			 * Something with data buffer is bugging this out since 1.5
			 * if(this.swap()==true){
				measureAxis = "ROWS";
				dimensionAxis = "COLUMNS";
			}*/
			
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
					var d = parseFloat(_data[i][kfIndex+j]);
					if(isNaN(d)) d = 0;
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
			var payload = [];
			for(var item in uniques){
				payload.push({
					key : item,
					value : uniques[item]
				});
			}
			// alert(JSON.stringify(dims) + "\n\n" + JSON.stringify(payload));
			/**
			 * Fixed nasty sort bug!  Also sort Measure Members.
			 */
			if(this.sortMethod()=="Alphanumeric Ascending"){
				payload.sort(function(a,b){
					var coordA = a.value.coordinate.slice();
					var coordB = b.value.coordinate.slice();
					var i=coordA.length-1;	
					while(i>=0){
						if(coordA[i].toLowerCase() > coordB[i].toLowerCase()) return 1;
						if(coordA[i].toLowerCase() < coordB[i].toLowerCase()) return -1;
						i--;
					}
					return 0;
				});
			}
			if(this.sortMethod()=="Alphanumeric Descending"){
				payload.sort(function(a,b){
					var coordA = a.value.coordinate.slice();
					var coordB = b.value.coordinate.slice();
					var i=coordA.length-1;	
					while(i>=0){
						if(coordA[i].toLowerCase() < coordB[i].toLowerCase()) return 1;
						if(coordA[i].toLowerCase() > coordB[i].toLowerCase()) return -1;
						i--;
					}
					return 0;
				});
			}
			/*
			 * Step 2 - Send unique over
			 */
			var errLog = "";
			for(var i=0;i<payload.length;i++){
				var item = payload[i];
				try{
					this.setDataCell(item.value.coordinate,item.value.data);				
				}catch(e){
					errLog+="\n"+i+":"+JSON.stringify(item)+e;
				}
			}
			if(errLog) console.log(errLog);
			this.firePropertiesChanged(["metadata"]);
			this.fireUpdate();
		}
		// Call super
		DatasourceCore.call(this, {
			kfIndex :  { 
				value : "",
				opts : {
					desc : "Key Figure Index",
					cat : "Data",
					apsControl : "spinner"
				},
				onChange : this.recalculate
			},
			sortMethod : {
    			opts : {
    				apsControl : "segmentedbutton",
    				desc : "Sort Method",
    				cat : "Deprecated",
    				options : [
    					{ key : 'NONE', text : 'None'},
    					{ key : 'Alphanumeric Ascending', text : 'Ascending'},
    					{ key : 'Alphanumeric Descending', text : 'Descending'}
    				]
    			},
    			onChange : this.recalculate
    		},
			data :  {
				opts : {
					desc : "Data",
					cat : "Data",
					apsControl : "byodata"
				},
				onChange : this.recalculate
			},
			mutators :  {
				opts : {
					desc : "Mutators",
					cat : "Deprecated",
					apsControl : "text"
				},
				onChange : this.recalculate
			}
		});
	}
	BYOData.prototype.constructor = BYOData;
	BYOData.prototype.toString = function(){
   	 return ownComponentName;
    }
	DataBuffer.subclass(ownComponentName,BYOData);
});
	