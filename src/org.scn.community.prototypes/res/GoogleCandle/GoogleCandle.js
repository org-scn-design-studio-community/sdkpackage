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
	"./GoogleCandleSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"shared/modules/component.prototypes",
	"https://www.google.com/jsapi"
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

GoogleCandle = function () {

	var that = this;
	
	that.init = function() {
		// define root component
		org_scn_community_component_Core(that, myComponentData);
		
		that.myCallback = function () {
			that._chartLoaded = true;
			that.processData(undefined, that.afterPrepare, that);

			var content = {};
			content.dummy = true;
			org_scn_community_basics.resizeContentAbsoluteLayout(that, content, that.onResize);
		};
		
		that._options = {packages: ['corechart'], callback : that.myCallback};
		google.load('visualization', '1', that._options);
		
		that._myId = that.oControlProperties.id;
	};

	that.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

		org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
	};
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/

	that.processData = function (flatData, afterPrepare, owner) {
		var that = owner;

		that.afterPrepare(that);

		afterPrepare(that);
	};

	that.afterPrepare = function (owner) {
		var that = owner;

		that._options = {
		  legend:'none'
		};

		if(that._oResize) {
			that._oResize(true, true);
		}
	};

	that.onResize = function (width, height, parent) {
		if(that._chartLoaded == undefined) {
			return;
		}

		var candles = that.getCandles();
		candles = JSON.parse(candles);
		
		var googleConformarray = [];
		for (var cI in candles) {
			var cO = candles[cI];
			
			googleConformarray.push(
				[cO.text, cO.start1, cO.start2, cO.end1, cO.end2]
			);
		}

		that._data = google.visualization.arrayToDataTable(
			googleConformarray
		, 
		// Treat first row as data as well.
		true);

		// in case special resize code is required
		$(document.getElementById(that._myId)).empty();

		that._chart = new google.visualization.CandlestickChart(document.getElementById(that._myId));
		that._chart.draw(that._data, that._options);
	};

	/* COMPONENT SPECIFIC CODE - END METHODS*/
	return that;
};
//%INIT-START%
myComponentData.instance = GoogleCandle;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});