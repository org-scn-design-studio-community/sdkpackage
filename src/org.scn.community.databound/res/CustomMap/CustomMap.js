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
	"./CustomMapSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"shared/modules/component.databound",
	"../../../"+scn_pkg+"databound/os/jquery.imagemapster/jquery.imagemapster",
	"../../../"+scn_pkg+"databound/os/d3v3/d3.min",
	"../../../"+scn_pkg+"shared/os/jsrender/jsrender"
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

var CSS_CLASS_DIV = "scn-sdk-CustomMap";
var CSS_CLASS_IMG = "scn-sdk-CustomMap-Image";

CustomMap = function () {

	var that = this;
	
	var _redrawStatus = false;
	var _firstRun	 = true;
	
	var _mapsterCurrW = 0;
	var _mapsterCurrH = 0;
	
	var _imageRatio 	= 0;
	
	var _attributeBeforeUpdate = {};
	
	var _selectedZonesArray = [];
	var _selectedZonesString = "";
	var _hoveredZone = "";
	
	var _dataUpdated 			= false;
	var _referenceKFUpdated 	= false;
	
	var _mapsterJson = {};
	
	var dataForTmpl = [];
		
	that.init = function() {
		// define root component
		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);
		
		that._firstRun = true;
		that._redrawStatus = false;
		that._selectedZonesArray = [];
		that._selectedZonesString = "";
		that._hoveredZone = "";
		
		that._mapsterCurrW = 0;
		that._mapsterCurrH = 0;
		
		that._mapsterJson = {};
		
		//Override Data and DataCellList get/set function with custom made to catch updates
		that._originalDataFunction = that.data;
		that.data = function(value) {
			that._originalDataFunction(value);
			if (typeof value != "undefined")
				that._dataUpdated = true;
		}
		
		that._originalDataCellListFunction = that.dataCellList;
		that.dataCellList = function(value) {
			that._originalDataCellListFunction(value);
			if (typeof value != "undefined")
				that._referenceKFUpdated = true;
		}
	};
	
	that.initAsync = function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.$().addClass(CSS_CLASS_DIV);
		
			
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	that.zoneSelected = function(e) {
		var itemIndex = that._selectedZonesArray.indexOf(e.key);
		if (itemIndex == -1) {
			that._selectedZonesArray.push(e.key);
		} else {
			that._selectedZonesArray.splice(itemIndex, 1); 
		}
		
		that._selectedZonesString = "";
		for (var i in that._selectedZonesArray) {
			var sep = "";
			if (i > 0)
				sep = ",";
			that._selectedZonesString = that._selectedZonesString + sep + that._selectedZonesArray[i];
		}
		var changedProperties = ["selectedZones"];
		that.setSelectedZones(that._selectedZonesString);
		that.firePropertiesChangedAndEvent(changedProperties, "onClick");
	};
	
	that.handleMouseMovement = function(data, action) {
		var changedProp = [];
		switch(action) {
			case "onMouseOver":
			case "onMouseOut":
			case "onShowTooltip":
				changedProp = ["hoveredZone"];
				_hoveredZone = data.key;
				that.setHoveredZone(_hoveredZone);
				break;
			default:
				return;
		}
		
		that.firePropertiesChangedAndEvent(changedProp, action);
	};
	
	that.onShowTooltip = function(data) {

		that.handleMouseMovement(data, "onShowTooltip" );
		
		//		if(that.getOverrideTooltip()) {
//		var tmpl = $.templates(that.getContentTooltip());
//		
//		var dataSelection = {};
//		if (that.dataForTmpl.hasOwnProperty(data.key)) {
//			dataSelection.line = [that.dataForTmpl[data.key]];
//		}
//		
//		var html = tmpl.render(dataSelection);
//		
//		data.toolTip.empty();
//		data.toolTip.append(jQuery.parseHTML(html));
//	}
	};
	
	that.maspterMouseOver = function(data) {
		that.handleMouseMovement(data, "onMouseOver" );
	};
	
	that.maspterMouseOut = function(data) {
		that.handleMouseMovement(data, "onMouseOut" );
	};
	
	that.processData = function (flatData, afterPrepare, owner) {
		var that = owner;
		
		if(flatData == undefined) {
			var options = org_scn_community_databound.initializeOptions();
			options.ignoreResults = true;

			flatData = org_scn_community_databound.flatten(that.getData(),options);
		}
		//.key or .text
		var rowMeta = flatData.dimensionRows[0];
		
		//columnHeaders contains text of KF
		//columnHeadersKeys contains keys of KF
		
		that.dataForTmpl = {};
		for (var i_line in flatData.formattedValues) {
			that.dataForTmpl[flatData.rowHeadersKeys[i_line]] = {};
			
			var curLine = that.dataForTmpl[flatData.rowHeadersKeys[i_line]];
			
			curLine["DIM_" + rowMeta.key + "_KEY"] = flatData.rowHeaders[i_line];
			curLine["DIM_" + rowMeta.key + "_TEXT"] = flatData.rowHeaders[i_line];
			for (var kf_index in flatData.formattedValues[i_line]) {
				//Loop at each KF
				curLine["MES_" + flatData.columnHeadersKeys[kf_index] + "_FORMATED"] = flatData.formattedValues[i_line][kf_index];
				curLine["MES_" + flatData.columnHeadersKeys[kf_index] + "_RAW"] = flatData.values[i_line][kf_index];
			}
		}
		
		
	};
	
	that.beforeUpdate = function() {
		that._redrawStatus = false;
		
		that.saveProperties();
//		
//		that._attributeBeforeUpdate;
//			
//			
	};
	
	that.saveProperties = function () {
		that._attributeBeforeUpdate = {};
		for (var i in that.props) {
			that._attributeBeforeUpdate[i] = that.props[i].actualValue;
		}
		
		that._dataUpdated 			= false;
		that._referenceKFUpdated 	= false;
	};
	
	that.checkNeedRedraw = function() {	
		
		if(that._firstRun) {
			that._firstRun = false;
			return true;
		}
		
		for(var i in that._attributeBeforeUpdate) {
			switch(i) {
				case "image":
				case "applyColors":
				case "colorPalette":
				case "map":
				case "contentTooltip":
				case "mapsterpropjson":
				case "staticDisplay":
				case "tooltipMode":
					that._redrawStatus = that.props[i].actualValue != that._attributeBeforeUpdate[i];
			}
			
			if (that._redrawStatus)
				break;
		}
		if (!that._redrawStatus)
			that._redrawStatus = that._dataUpdated || that._referenceKFUpdated;
		
		return that._redrawStatus;
	};
	
	that.afterPrepare = function() {
		
	}
	
	that.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		var that = this;
		
		console.log("after update");
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		if(org_scn_community_databound.hasData(that.getData())) {
			org_scn_community_basics.fillDummyData(that, that.processData, function() {});
		} else {
			org_scn_community_basics.fillDummyData(that, that.processData, function() {});
		}

		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		
		if (that.checkNeedRedraw()) {
			that.redraw();
			that.fireEvent("onUpdate");
		}
		
		//org_scn_community_basics.resizeContentAbsoluteLayout(that, that._canvas, that.onResize);
		//that._mapsterResize();
		
		org_scn_community_basics.resizeContentAbsoluteLayout(that, that.$()[0], that.onResize);
		
		//call resize
		that.onResize(this.$().width(), this.$().height(), "");
	};
	
	that.compareForPalette = function(a,b) {
	 if (a.value < b.value)
		    return -1;
		  else if (a.value > b.value)
		    return 1;
		  else 
		    return 0;
	};
	
	
	that.redraw = function() {
		that.$().empty();
		
		//Destroy old tooltips not linked to the new Maspter context
		var tooltips = $(".mapster_tooltip").remove();
		
		var map = that.getMap();
		that._map = $("<map name=\"scn-CustomMap\">" + map + "<map/>");
		that._map.children().each(function(index) {
			//loop at each area and add / Modify href
			$( this ).attr("href", "#");
		});
		that.$().append(that._map);
		
		var image = that.getImage();
		that._image = $("<image id=\"myimage\" src=\"" + image + "\" usemap=\"#scn-CustomMap\"/>");
		var tmpImage = that._image[0];
		that.$().append(that._image);
		
		that._imageRatio = that._image.height() / that._image.width();
		
		var mapsterProp = that.getMapsterpropjson();
		that._mapsterJson = JSON.parse(mapsterProp);
		
		that._mapsterJson.onClick = function (e) {
			that.zoneSelected(e);
		};
		
//		that._mapsterJson.onMouseover = function (data) {
//			that.maspterMouseOver(data);
//		};
//		
//		that._mapsterJson.onMouseout = function (data) {
//			that.maspterMouseOut(data);
//		};
		
		that._mapsterJson.onShowToolTip = that.onShowTooltip;
		
		//that._dsmetadata = that.getDSMetadata();
		//that._data = that.getData();
	
		that.updateTooltips();
		that.applyPalette();
		that.applyStaticDisplay();
		
		that._image.mapster(that._mapsterJson)
				  .mapster('set',true,that._selectedZonesString)
				  //.mapster('toolTipClose',['area-mouseout'])
				  //.mapster('tooltip');
				  ;
		
		//that._mapsterResize();
	};
	
	that.applyStaticDisplay = function() {
		if (that.getStaticDisplay()) {
			that._mapsterJson.staticState = true;
			
			for(var i in that._mapsterJson.areas) {
				that._mapsterJson.areas[i].staticState = true;
			}
		}
	}
	
	that.applyPalette = function() {
		
		if (!that.getApplyColors())
			return;
		
		var options = org_scn_community_databound.initializeOptions();
		var metaData = that.getDSMetadata;
		var maxDataInfo = org_scn_community_databound.getTopBottomElements(that.getDataCellList(),that.getDataCellList(), options);
	
		//maxDataInfo.list.sort(that.compareForPalette);
		
		//Loop at array and calculate according
		
		var scale = d3.scale.quantile()
							.domain([maxDataInfo.minValue, maxDataInfo.maxValue])
							.range(that.getColorPalette().split(','));
		
		for(var i in that._mapsterJson.areas) {
			
			var area = that._mapsterJson.areas[i];
			
			var color = "";
			for(var j in maxDataInfo.list) {
				if (maxDataInfo.list[j].key == area.key)
					area.fillColor = scale(maxDataInfo.list[j].value).substr(1);
			}
		}
	}
	
	that.updateTooltips = function() {

		if(that.getTooltipMode() != "Default") {
			//Loop on mapster data, if tooltip: override.
			
			var tmpl = "";
			
			if (that.getTooltipMode() == "override") {
				tmpl = $.templates(that.getContentTooltip());
			}
			 
			for(var i in that._mapsterJson.areas) {
				
				var area = that._mapsterJson.areas[i];
				
				if (that.getTooltipMode() == "keep+template" && area.hasOwnProperty("toolTip")) {
					//else
					tmpl = $.templates(area.toolTip);
				} 
				
				var dataSelection = {};
				if (that.dataForTmpl.hasOwnProperty(area.key)) {
					dataSelection.line = [that.dataForTmpl[area.key]];
				}
				
				area.toolTip = tmpl.render(dataSelection);
			}
		}
	}

	that.onResize = function (width, height, parent) {		
		var ratio = Math.min(width / that._image.width(), height / that._image.height());

		that._mapsterCurrW = that._image.width()*ratio;
		that._mapsterCurrH = that._image.height()*ratio;
		
		that._image.mapster('resize', that._mapsterCurrW, that._mapsterCurrH, that.getResizeDuration());
	};

	/* COMPONENT SPECIFIC CODE - END METHODS*/

	// called from Additional Properties Sheet JavaScript file

	org_scn_community_component_Core(that, myComponentData);
	
	return that;
};
//%INIT-START%
myComponentData.instance = CustomMap;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});