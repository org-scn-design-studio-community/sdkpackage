/**
 * Copyright 2016 SCN SDK Community
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
 * 
 * This implementation uses numeral.js by Adam Draper
 */

define(["../../../org.scn.community.shared/os/sapui5/load.sap.m_2.0",
        "../../../org.scn.community.shared/os/numberformat/numeral.min",
        "../../../org.scn.community.shared/os/numberformat/languages"], function() {
	
	sap.m.TileContainer.extend("org.scn.community.databound.TileContainer", {
		
		setData : function(value) {
			this._data = value;
			return this;
		},
		
		getData : function(value) {
			return this._data;
		},
		
		metadata: {
	        properties: {
	        	"DTargetDim": {type: "string"},
	        	"DMeasureDim": {type: "string"},
	        	"DComparisonDim":{type: "string"},
	        	"DTileType":{type: "string"},
	        	"DHeaderDim":{type: "string"},
	        	"DSubHeaderDim":{type: "string"},
	        	"DFooterDim":{type: "string"},
	        	"DNumeralString":{type: "string"},
	        	"DIconMapping":{type: "object"},
	        	"DComparisonTolerance":{type: "int"},
	        	
	        	"DCurrentHeader": {type: "string"},
	        	"DCurrentSubHeader": {type: "string"},
	        	"DCurrentFooter": {type: "string"},
	        	"DCurrentValue": {type: "float"},
	        	"DCurrentValueText":{type: "string"},
	        	"DCurrentUnit": {type: "string"},
	        	"DCurrentIconString": {type: "string"}	        	
	        }
		},
	
		initDesignStudio: function() {
			var that = this;
			
			//identify language dynamically
			this.sCurrentLocale = sap.ui.getCore().getConfiguration().getLanguage();
			// switch between languages
			numeral.language(this.sCurrentLocale);
			
			this.setWidth("100%");
			this.setHeight("100%");
//			this.setEditable(true);
//			this.setAllowAdd(true);
			
			this.currentData = "";
			this.currentFlatData = "";
			this.dataRefreshed = false;
			
			this.tileType = "";
			
			var onTileAdd = function(oControlEvent) {
				that.fireDesignStudioEvent("onTileAdd");
			};
			
			var onTileMove = function(oControlEvent) {
				that.fireDesignStudioEvent("onTileMove");
			};
			
			var onTileDelete = function(oControlEvent) {
				that.fireDesignStudioEvent("onTileDelete");
			};
			
			this.attachTileAdd(onTileAdd);
			this.attachTileMove(onTileMove);
			this.attachTileDelete(onTileDelete);
		},
		
		renderer: {},
			
		afterDesignStudioUpdate: function() {
			
			var that = this;
			var tileCreationDim = this.getDTargetDim();
			
			if(this.currentData !== this.getData()){
				this.dataRefreshed = true;
				this.currentData = this.getData();
				this.destroyTiles();
			}
			
			if(this.tileType !== this.getDTileType()){
				this.tileType = this.getDTileType();
				this.dataRefreshed = true;
				this.destroyTiles();
			}
			
			if(this._data !== "" && this.dataRefreshed && tileCreationDim !== ""){
				this.currentFlatData = this.flattenData();
				
				for(var i=0;i<this.currentFlatData.length;i++){
					var items = this.currentFlatData[i];
					if(this.getDTileType() === "Standard"){
						this.createStandardTile(items);	
					}
					else if(this.getDTileType() === "Custom"){
						this.createCustomTile(items);
					}
					else{
						if(window.console)console.log("unkown tile type");
					}
				}
			}
			else{
				var isInDesignMode = (sap.zen.designmode !== undefined);
				if(isInDesignMode && this.dataRefreshed){
					this.addTile( new sap.m.StandardTile({
			            icon : "sap-icon://play",
			            title : "Dummy Tile",
			    		type : "Create",
			    		number : "123.456789",
			    		numberUnit : "euro",
			    		info : "28 days left",
			    		infoState : "Success",
			            })
					);
				}
			}
			//reset data refresh flag!
			this.dataRefreshed = false;
		},
		
		createStandardTile : function(data){
			var that = this;
			
			var targetDimension = this.getDTargetDim();
			var measureDimension= this.getDMeasureDim();
			var comparisonDim 	= this.getDComparisonDim();
			var headerDim 		= this.getDHeaderDim();
			var subHeaderDim 	= this.getDSubHeaderDim();
			var footerDim 		= this.getDFooterDim();
			
			var title 		= "";
			var icon		= "";
			var number 		= "";
			var numberUnit 	= "";
			var scale		= "";
			var info 		= "";
			var infostate 	= "Warning";
			
			if(data[measureDimension] !== undefined){
				scale = Math.pow(10, data[measureDimension].scale);
				number = (data[measureDimension].data)*scale;
				
				if(data[comparisonDim] !== undefined){
					var compare = data[comparisonDim].data;
					var tolerance = this.getDComparisonTolerance()/100;
					var diff = Math.abs(number-compare);
					number_tolerance = Math.abs(number*tolerance);
					//Test if abs of comparison difference is within tolerance range
					if(diff < number_tolerance){
						infostate = "None";
					}else if(number < compare){
						infostate = "Error";	
					}else if(number > compare){
						infostate = "Success";
					}//This should never happen
					else{
						infostate = "Warning";
					}
				}
				number = numeral(number/scale).format(this.getDNumeralString());
			}
			
			if(data[headerDim] !== undefined){
				if(that.isMeasure(headerDim)){
					title = headerDim;
				}else{
					title = data[headerDim];	
				}
				
				var icons = this.getDIconMapping();
				
				if(icons !== undefined){
					for(var i=0;i<icons.length;i++){
						if(icons[i].DDimValue === title){
							icon = icons[i].DIconString;
						}
					}
				}
			}
			if(data[footerDim] !== undefined){
				if(that.isMeasure(footerDim)){
					info = footerDim;	
				}else{
					info = data[footerDim];	
				}
			}
			if(data[measureDimension] !== undefined && data[measureDimension].unit !== undefined){
				numberUnit = data[measureDimension].unit;
			}
			
			var tile = new sap.m.StandardTile({
				            icon : icon,
				            title : title,
				    		number : number,
				    		numberUnit : "x"+scale+" "+numberUnit,
				    		info : info,
				    		infoState : infostate,
			            }).addStyleClass("ccTileLayout");
			
			var onTilePress = function(oControlEvent) {
				var tileId = oControlEvent.getParameters().id;
				var tiles = that.getTiles();
				var tile = null;
				
				for(var i=0;i<tiles.length;i++){
					var currentTile = tiles[i]; 
					if(tiles[i].sId === tileId){
						tile = currentTile;
						tile.addStyleClass("cc-Tile-clicked");
					}else{
						currentTile.removeStyleClass("cc-Tile-clicked");
					}
				}
				if(tile === null){
					if(window.console)console.log("no tile found with id "+tileId);
				}else{
					var iconString = tile.getIcon();
					var orig_value = that.retrieveValueByDimension(tile.getTitle());
					
					that.setDCurrentHeader(tile.getTitle());
//					that.setDCurrentSubHeader(tile.);
					that.setDCurrentFooter(tile.getInfo());
					that.setDCurrentValue(orig_value);
					that.setDCurrentValueText(tile.getNumber());
					that.setDCurrentUnit(tile.getNumberUnit());
					that.setDCurrentIconString(iconString);
					
					that.fireDesignStudioPropertiesChanged(["DCurrentHeader","DCurrentFooter","DCurrentValue","DCurrentUnit","DCurrentIconString"]);
					that.fireDesignStudioEvent("onTilePress");
				}
			};
			tile.attachPress(onTilePress);
			
			this.addTile(tile);
			
		},
		
		createCustomTile : function(data){
			
			var that = this;
			
			var targetDimension = this.getDTargetDim();
			var measureDimension= this.getDMeasureDim();
			var comparisonDim 	= this.getDComparisonDim();
			var headerDim 		= this.getDHeaderDim();
			var subHeaderDim 	= this.getDSubHeaderDim();
			var footerDim 		= this.getDFooterDim();
			
			var headerText 		= "";//"Business SLAsdkjvbnsdksdvsdvsdj";
			var subHeaderText 	= "";//"suskjdbvjksdbvkjcsdbvkjsdbb";
			var icon			= "";
			var value 			= "";//"123";
			var unit 			= "";//"in €";
			var scale			= "";
			var trendIndicator	= "";//"arrow-up";
			var footer 			= "";//"Some footersdvvvvvvvvvvaaaaaaaaaaaa";
			
			var color_class = "";

			
			if(data[measureDimension] !== undefined){
				scale = Math.pow(10, data[measureDimension].scale);
				value = (data[measureDimension].data)*scale;
				
				if(data[comparisonDim] !== undefined){
					var compare = data[comparisonDim].data;
					var tolerance = this.getDComparisonTolerance()/100;
					var diff = Math.abs(value-compare);
					value_tolerance = Math.abs(value*tolerance);
					//Test if abs of comparison difference is within tolerance range
					if(diff < value_tolerance){
						trendIndicator = "cc-arrow-right";
						color_class = "cc-normal";
					}
					else if(value < compare){
						trendIndicator = "cc-arrow-down";
						color_class = "cc-bad";
					}else if(value > compare){
						trendIndicator = "cc-arrow-up";
						color_class = "cc-good";
					}//should not happen
					else{
						trendIndicator = "";
						color_class = "cc-warning";
					}
				}
				value = numeral(value).format(this.getDNumeralString());
			}
			
			if(data[headerDim] !== undefined){
				if(that.isMeasure(headerDim)){
					headerText = headerDim;	
				}else{
					headerText = data[headerDim];	
				}
				var icons = this.getDIconMapping();
				
				if(icons !== undefined){
					for(var i=0;i<icons.length;i++){
						if(icons[i].DDimValue === headerText){
							icon = icons[i].DIconString;
						}
					}
				}
			}
			if(data[subHeaderDim] !== undefined){
				if(that.isMeasure(subHeaderDim)){
					subHeaderText = subHeaderDim;
				}else{
					subHeaderText = data[subHeaderDim];	
				}
			}
			if(data[footerDim] !== undefined){
				if(that.isMeasure(footerDim)){
					footer = footerDim;
				}else{
					footer = data[footerDim];	
				}
			}
			if(data[measureDimension] !== undefined && data[measureDimension].unit !== undefined){
				unit = data[measureDimension].unit;
			}
			
			var oLayoutVRow1 = new sap.ui.layout.VerticalLayout({
				content: [
				          new sap.m.Text({text : headerText}).addStyleClass('ccHeaderText'),
		    	          new sap.m.Text({text : subHeaderText}).addStyleClass('ccSubHeaderText'),
		    	          ]
		    })/*.addStyleClass('ccRowLayout')*/;
			
			var oLayoutHHeader = new sap.ui.layout.HorizontalLayout({
			content: [
			          oLayoutVRow1,
			          new sap.ui.core.Icon({
			        	  src : icon
			          }).addStyleClass('ccIconText')
			          ]
			}).addStyleClass('ccRowLayoutHeader');
		
			var oLayoutVValueSuffix = new sap.ui.layout.VerticalLayout({
				
				content: [
				          new sap.m.Text({text : ""}).addStyleClass(trendIndicator),
				          new sap.m.Text({text : unit}).addStyleClass('ccUnitText')
				          ]
			}).addStyleClass('ccUnitLayout');
			
			var oLayoutHValue = new sap.ui.layout.HorizontalLayout({
				content: [
				          new sap.m.Text({text : value}).addStyleClass('ccValueText').addStyleClass(color_class),
				          oLayoutVValueSuffix
				          ]
			})
			
			var oLayoutVRow2 = new sap.ui.layout.VerticalLayout({
		    	content: [
		    	          oLayoutHValue
		    	          ]
		    }).addStyleClass('ccRowLayoutValue');
			
			var oLayoutVRow3 = new sap.ui.layout.VerticalLayout({
		    	content: [
		    	          new sap.m.Text({text : footer}).addStyleClass('ccFooterText'),
		    	          ]
		    }).addStyleClass('ccRowLayoutFooter');
			
			//setup a json model to retrieve values on press more easily
			var valueModel = new sap.ui.model.json.JSONModel({
                "header": headerText,
                "subHeader": subHeaderText,
                "icon": icon,
                "value": value,
                "unit": unit,
                "trendIndicator": trendIndicator,
                "footer": footer,
            });
		    	      
		    var tile = new sap.m.CustomTile({
		    								height:"100%",
		     								content: new sap.ui.layout.VerticalLayout({
		     									content: [oLayoutHHeader, oLayoutVRow2, oLayoutVRow3]
		     								})		     								
										}).addStyleClass('sapMTile').addStyleClass('ccTileLayout');
		    
		    tile.setModel(valueModel);
			
		    var onTilePress = function(oControlEvent) {
		    	
		    	var oLayout = oControlEvent.getSource().getContent();
		    	var model = oLayout.getModel();
		    	var value = model.getProperty("/header");
		    	
				var tileId = oControlEvent.getParameters().id;
				var tiles = that.getTiles();
				var tile = null;
				
				for(var i=0;i<tiles.length;i++){
					var currentTile = tiles[i]; 
					if(tiles[i].sId === tileId){
						tile = currentTile;
						tile.addStyleClass("cc-Tile-clicked");
					}else{
						currentTile.removeStyleClass("cc-Tile-clicked");
					}
				}
				if(tile === null){
					if(window.console)console.log("no tile found with id "+tileId);
				}else{
					var iconString = model.getProperty("/icon");
					var orig_value = that.retrieveValueByDimension(model.getProperty("/header"));
					
					that.setDCurrentHeader(model.getProperty("/header"));
					that.setDCurrentSubHeader(model.getProperty("/subHeader"));
					that.setDCurrentFooter(model.getProperty("/footer"));
					that.setDCurrentValue(orig_value);
					that.setDCurrentValueText(model.getProperty("/value"));
					that.setDCurrentUnit(model.getProperty("/unit"));
					that.setDCurrentIconString(iconString);
					
					that.fireDesignStudioPropertiesChanged(["DCurrentHeader","DCurrentFooter","DCurrentValue","DCurrentValueText","DCurrentUnit","DCurrentIconString"]);
					that.fireDesignStudioEvent("onTilePress");
				}
			};
			tile.attachPress(onTilePress);
		    
			this.addTile(tile);
		},
		
		flattenData: function(){
			var result = [];
			var row_start = "{";
			var row_end = "}";
			var row = row_start;
			var count_steps = 0;
			
			var _data = this.getData();
			
			if(_data.dimensions !== undefined){
				var dims = _data.dimensions;
				var members_length = dims[0].members.length;
				
				
				for(var i=0;i<_data.data.length;i++){
					var data = _data.data[i];
					
					//determine end of tuple
					if(count_steps === members_length-1){
						var measure = _data.dimensions[0].members[count_steps];
						var unit = measure.unitOfMeasure;
						var scale = measure.scalingFactor;
						if(unit === undefined)unit = "";
						if(scale === undefined)scale = '""';
						
						row += '"'+measure.text+'":{"data":'+_data.data[i]+',"unit":"'+unit+'","scale":'+scale+'},';
						var tuple = _data.tuples[i];
						
						for(var k=1;k<tuple.length;k++){
							var currentIdx = tuple[k];
							var currentDim = dims[k];
							var currentMember = currentDim.members[currentIdx];
							if(k===tuple.length-1){
								row += '"'+currentDim.key+'":"'+currentMember.text+'"';
							}else{
								row += '"'+currentDim.key+'":"'+currentMember.text+'",';	
							}
						}
						row += row_end;
						//complete row
						row = JSON.parse(row);
						result.push(row);
						//reset string to start over with next row
						row = row_start;
						count_steps = 0;
					}else{
						var measure = _data.dimensions[0].members[count_steps];
						var unit = measure.unitOfMeasure;
						var scale = measure.scalingFactor;
						if(unit === undefined)unit = "";
						if(scale === undefined)scale = '""';
						row += '"'+measure.text+'":{"data":'+data+',"unit":"'+unit+'","scale":'+scale+'},';
						//keep track of row in String array formattedData
						count_steps++;	
					}
				}
			}
			return result;
		},
		
		retrieveValueByDimension : function(dim){

			for(var i=0;i<this.currentFlatData.length;i++){
				var itm = this.currentFlatData[i];
				var target = this.getDTargetDim();
				var measure = this.getDMeasureDim();
				if(itm[target] === dim){
					return itm[measure].data;
				}
			}
			return null;
		},
		
		isMeasure : function(dimension){
			var members = this.currentData.dimensions[0].members
			for(var i=0;i<members.length;i++){
				if(members[i].text === dimension){
					return true;
				}
			}
			return false
		}
	});
});			