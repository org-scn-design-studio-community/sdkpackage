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
	"./DonutSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics"
	
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

Donut = function () {

	var that = this;
	
	that.init = function() {
		// define root component

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	};
	
	that.initAsync = function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);
	
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.tagCanvas = document.createElement("canvas");
		that.$().append($(that.tagCanvas));
		that.$().click(function() {
			that.fireEvent("onClick");
		});
		that.$().mouseover(function() {
			if(that.getActivateOnOverEvent()) {
				that.fireEvent("onMouseOver");
			}
		});
		that.$().mouseout(function() {
			if(that.getActivateOnOutEvent()) {
				that.fireEvent("onMouseOut");
			}
		});
			
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	that.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

		// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);

		org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
	};
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/

	that.processData = function (flatData, afterPrepare, owner) {
		var that = owner;
		
		// processing on data
		that.afterPrepare(that);
	};

	that.afterPrepare = function (owner) {
		var that = owner;
			
		// visualization on processed data
		var DEG2RAD = Math.PI / 180;
		
		var w = that.$().width();
		var h = that.$().height();

		that.tagCanvas.setAttribute("width", "" + w);
		that.tagCanvas.setAttribute("height", "" + h);
		
		var UNIT = 100;
		var varScale = Math.min(w, h) / (2 * UNIT);
		
		var halfWidth = UNIT * varScale;	

		var lineWidth = 30.0 * varScale;
		var radiusOffset = 30.0 * varScale;
		var varRadius = (halfWidth - radiusOffset);

		var ctx = that.tagCanvas.getContext("2d");
		
		// clear canvas
		ctx.clearRect(0, 0, 2 * halfWidth, 2 * halfWidth);
		ctx.translate(halfWidth, halfWidth);
		ctx.rotate(-210 * DEG2RAD);
		
		ctx.lineWidth = lineWidth;

		// draw donut
		var varRotate = 120 * DEG2RAD;

		ctx.rotate(varRotate);

		ctx.strokeStyle = that.getGapColor();
		ctx.beginPath();
		ctx.arc(0.5 * radiusOffset, 0, varRadius, 0, 360 * DEG2RAD);		
		ctx.stroke();

		ctx.strokeStyle = that.getDonutColor();
		ctx.beginPath();
		ctx.arc(0.5 * radiusOffset, 0, varRadius, 0, 360 * DEG2RAD * (that.getNumCurVal() / 100));		
		ctx.stroke();

		ctx.rotate(-varRotate);
		ctx.save();
		
		
		// display value
		var varTextY = 5;
		
		ctx.fillStyle = "#000000";
		ctx.font = /*"bold " + */ 48 * varScale + "px Arial";

		ctx.rotate(-150 * DEG2RAD);
		ctx.fillText(that.getNumCurVal(), -18 * varScale * ((that.getNumCurVal() + "").length), varTextY * varScale); 
		
		ctx.font = "bold " + 30 * varScale + "px Arial";
		ctx.fillText("%", 9 * varScale * ((that.getNumCurVal() + "").length), varTextY * varScale); 
		
		ctx.rotate(150 * DEG2RAD);
		

		// display components for previous value
		if(that.getNumPrevVal() != -1) {
			ctx.rotate(-150 * DEG2RAD);
			
			// configure arrow
			ctx.strokeStyle = that.getArrowColor();
			ctx.lineWidth = 6.0 * varScale;
			ctx.lineCap = "round";
			
			var varDirection = that.getDirection();
			// up-arrow
			if (varDirection == "Up") {
				
	    		ctx.beginPath();
			    ctx.moveTo(-75 * varScale, 55 * varScale);
			    ctx.lineTo(-75 * varScale, 95 * varScale);
			    
			    ctx.moveTo(-75 * varScale, 55 * varScale);
			    ctx.lineTo(-90 * varScale, 70 * varScale);
			    ctx.moveTo(-75 * varScale, 57 * varScale);
			    ctx.lineTo(-90 * varScale, 70 * varScale);
			    
			    ctx.moveTo(-75 * varScale, 55 * varScale);
			    ctx.lineTo(-60 * varScale, 70 * varScale);
			    ctx.moveTo(-75 * varScale, 57 * varScale);
			    ctx.lineTo(-60 * varScale, 70 * varScale);
			}
			    
			// right-arrow
			else if (varDirection == "Right") {
	    		ctx.beginPath();
			    ctx.moveTo(-55 * varScale, 75 * varScale);
			    ctx.lineTo(-95 * varScale, 75 * varScale);
	
			    ctx.moveTo(-55 * varScale, 75 * varScale);
			    ctx.lineTo(-70 * varScale, 60 * varScale);
			    ctx.moveTo(-57 * varScale, 75 * varScale);
			    ctx.lineTo(-70 * varScale, 60 * varScale);
	
			    ctx.moveTo(-55 * varScale, 75 * varScale);
			    ctx.lineTo(-70 * varScale, 90 * varScale);
			    ctx.moveTo(-57 * varScale, 75 * varScale);
			    ctx.lineTo(-70 * varScale, 90 * varScale);
			}
			    
			// down-arrow
			else if (varDirection == "Down") {
	    		ctx.beginPath();
			    ctx.moveTo(-75 * varScale, 55 * varScale);
			    ctx.lineTo(-75 * varScale, 95 * varScale);
			    
			    ctx.moveTo(-75 * varScale, 95 * varScale);
			    ctx.lineTo(-90 * varScale, 80 * varScale);
			    ctx.moveTo(-75 * varScale, 93 * varScale);
			    ctx.lineTo(-90 * varScale, 80 * varScale);
			    
			    ctx.moveTo(-75 * varScale, 95 * varScale);
			    ctx.lineTo(-60 * varScale, 80 * varScale);
			    ctx.moveTo(-75 * varScale, 93 * varScale);
			    ctx.lineTo(-60 * varScale, 80 * varScale);
			}
	
			// left-arrow
			else if (varDirection == "Left") {
	    		ctx.beginPath();
			    ctx.moveTo(-55 * varScale, 75 * varScale);
			    ctx.lineTo(-95 * varScale, 75 * varScale);
	
			    ctx.moveTo(-95 * varScale, 75 * varScale);
			    ctx.lineTo(-80 * varScale, 60 * varScale);
			    ctx.moveTo(-93 * varScale, 75 * varScale);
			    ctx.lineTo(-80 * varScale, 60 * varScale);
	
			    ctx.moveTo(-95 * varScale, 75 * varScale);
			    ctx.lineTo(-80 * varScale, 90 * varScale);
			    ctx.moveTo(-93 * varScale, 75 * varScale);
			    ctx.lineTo(-80 * varScale, 90 * varScale);
	        };
	
		    ctx.stroke();
		    ctx.save();
		    ctx.rotate(150 * DEG2RAD);
	
	
			// display previous value
			ctx.rotate(-150 * DEG2RAD);
			ctx.fillStyle = "#000000";
			ctx.font = /*"bold " + */ varScale * 20 + "px Arial";
	
			var varPrevVal = "From " + that.getNumPrevVal();
			ctx.fillText(that.getNumPrevVal(), varScale * -5 * ((that.getNumPrevVal() + "").length), 20 * varScale + varRadius); 
			
			ctx.font = "bold " + varScale * 12 + "px Arial";
			ctx.fillText("%", varScale * 6 *((varPrevVal + "").length), 20 * varScale + varRadius); 
	
			ctx.rotate(150 * DEG2RAD);
		}
		
	};

	that.onResize = function (width, height, parent) {
		// in case special resize code is required
	};

	/* COMPONENT SPECIFIC CODE - END METHODS*/
	return that;
};
//%INIT-START%
myComponentData.instance = Donut;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});