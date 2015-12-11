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
	"./GaugeSpec",
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

Gauge = function () {

	var that = this;
	
	that.init = function() {
		// define root component
		that.fCanvas = document.createElement("canvas");
		that.sCanvas = document.createElement("canvas");
		that.pTitle = document.createElement("p");
		that.pTitle.style.position = 'absolute';
		that.pTitle.style.top = '-50px';
		that.pTitle.style.width = '100%';
		that.pTitle.style.left = '0px';
		that.pTitle.style.textAlign = 'center';
		that.fCanvas.style.position = 'absolute';
		that.fCanvas.style.left = '0px';
		that.fCanvas.style.top = '0px';
		that.sCanvas.style.position = 'absolute';
		that.sCanvas.style.left = '0px';
		that.sCanvas.style.top = '0px';
		that.$().append($(that.pTitle));
		that.$().append($(that.fCanvas));
		that.$().append($(that.sCanvas));
		
		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	};
	
	that.initAsync = function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);
	
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		// that.addStyleClass("scn-pack-?");
			
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

		if (that._myVar) {
		    clearInterval(that._myVar);
		}
		// visualization on processed data
		//INITIALIZE VARIABLES
		var DEG2RAD = Math.PI / 180;
		var UNIT = 100;

		var width = that.$().width();
		var height = that.$().height();


		that.fCanvas.width = width;
		that.fCanvas.height = height;

		that.sCanvas.width = width;
		that.sCanvas.height = height;

		var scale = Math.min(width, height) / (2 * UNIT);

		that.pTitle.style.fontSize = 15 * scale + "px";
		that.pTitle.innerHTML = "" + that.getTitle();

		var bodyWidth = 3.5 * scale;

		var halfWidth = UNIT * scale;


		//DIMENSIONI TICKS
		var hourTickStart = 75 * scale;
		var hourTickEnd = 85 * scale;
		var hourTickWidth = 3 * scale;

		var minuteTickStart = 81 * scale;
		var minuteTickEnd = 85 * scale;
		var minuteTickWidth = 3 * scale;

		var secondHandEnd = 90 * scale;
		var secondHandWidth = 3 * scale;
		var bossRadius = 8.0 * scale;

		var shadowOffsetX = 2 * scale;
		var shadowOffsetY = 2 * scale;
		var shadowOffsetBlur = 5 * scale;
		var shadowColor = "rgba(0, 0, 0, 0.4)";


		//INDICATOR TAIL LENGTH
		var indtail = 25 * scale;
		//TICK2TICK ANGLE
		var t2trad = (240 / (that.getNumOfBigTicks() - 1));
		//END DIMENSIONI TICKS	

		//INITIALIZE CANVAS DIMENSIONSa


		var ctx = that.fCanvas.getContext("2d");
		ctx.clearRect(0, 0, 2 * halfWidth, 2 * halfWidth);

		//Raggio e centro del cerchio da disegnare. Variabile in base alla grandezza del canvas.
		var centerX = that.fCanvas.width / 2;
		var centerY = that.fCanvas.height / 2;
		var radius = halfWidth - bodyWidth / 2;


		//START DESIGNING DASH
		ctx.beginPath();
		//TRACCIO CERCHIO
		ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, true);
		//SCELGO IL COLORE DI RIEMPIMENTO
		ctx.fillStyle = 'white';
		//RIEMPIO
		ctx.fill();
		//SCELGO LARGHEZZA BORDO
		ctx.lineWidth = bodyWidth;

		//GRADIENTE PER IL BORDO
		var grd = ctx.createLinearGradient(25, 25, width, height);
		grd.addColorStop(0, "white");
		grd.addColorStop(1, that.getMainColor());


		//COLORE BORDO
		ctx.strokeStyle = grd;

		//DIESGNO FINITO
		ctx.stroke();

		//START DISEGNO
		ctx.beginPath();
		//TRACCIO CERCHIO
		ctx.arc(centerX, centerY, (radius - bodyWidth), 0, 2 * Math.PI, true);
		//SCELGO IL COLORE DI RIEMPIMENTO
		ctx.fillStyle = that.getMainColor();
		//RIEMPIO
		ctx.fill();
		//SCELGO LARGHEZZA BORDO
		ctx.lineWidth = bodyWidth;

		//GRADIENTE PER IL BORDO
		var grd = ctx.createLinearGradient(25, 25, width, height);
		grd.addColorStop(0, that.getMainColor());
		grd.addColorStop(1, "white");


		//COLORE BORDO
		ctx.strokeStyle = grd;

		//DIESGNO FINITO
		ctx.stroke();

		//END DISEGNO BODY CLOCK

		//START DISEGNO COLORI
		if (!that.getGradientColor()) {
		    ctx.beginPath();
		    //RUOTO 30� A SINISTRA
		    //TRACCIO CERCHIO
		    ctx.arc(centerX, centerY, (radius - bodyWidth * 2), 150 * DEG2RAD, (150 + that.getStartSecondColor() * 240 / 100) * DEG2RAD, false);

		    //SCELGO LARGHEZZA BORDO
		    ctx.lineWidth = bodyWidth;

		    ctx.lineCap = "square";

		    //COLORE BORDO
		    ctx.strokeStyle = that.getFirstColor();

		    //DIESGNO FINITO
		    ctx.stroke();

		    ctx.beginPath();
		    //RUOTO 30� A SINISTRA
		    //TRACCIO CERCHIO
		    ctx.arc(centerX, centerY, (radius - bodyWidth * 2), (150 + that.getStartSecondColor() * 240 / 100) * DEG2RAD, (150 + that.getStartThirdColor() * 240 / 100) * DEG2RAD, false);

		    //SCELGO LARGHEZZA BORDO
		    ctx.lineWidth = bodyWidth;

		    ctx.lineCap = "square";

		    //COLORE BORDO
		    ctx.strokeStyle = that.getSecondColor();

		    //DIESGNO FINITO
		    ctx.stroke();

		    ctx.beginPath();
		    //RUOTO 30� A SINISTRA
		    //TRACCIO CERCHIO
		    ctx.arc(centerX, centerY, (radius - bodyWidth * 2), (150 + that.getStartThirdColor() * 240 / 100) * DEG2RAD, 390 * DEG2RAD, false);

		    //SCELGO LARGHEZZA BORDO
		    ctx.lineWidth = bodyWidth;

		    ctx.lineCap = "square";

		    //COLORE BORDO
		    ctx.strokeStyle = that.getThirdColor();

		    //DIESGNO FINITO
		    ctx.stroke();

		} else {
		    ctx.beginPath();

		    //RUOTO 30� A SINISTRA
		    //TRACCIO CERCHIO
		    //alert(centerX);
		    sx = centerX + Math.cos(210 * DEG2RAD) * (radius - bodyWidth * 2);
		    sy = centerY + Math.sin(210 * DEG2RAD) * (radius - bodyWidth * 2);
		    dx = centerX + Math.cos(-30 * DEG2RAD) * (radius - bodyWidth * 2);
		    dy = centerY + Math.sin(-30 * DEG2RAD) * (radius - bodyWidth * 2);
		    ctx.arc(centerX, centerY, (radius - bodyWidth * 2), 30 * DEG2RAD, 150 * DEG2RAD, true);

		    //alert(sx+" "+sy);
		    //SCELGO LARGHEZZA BORDO
		    ctx.lineWidth = bodyWidth;

		    ctx.lineCap = "round";


		    //GRADIENTE PER IL BORDO
		    var grd = ctx.createLinearGradient(sx, sy, dx, dy);
		    grd.addColorStop(0, that.getFirstColor());
		    grd.addColorStop((that.getStartSecondColor() / 100), that.getSecondColor());
		    grd.addColorStop((that.getStartThirdColor() / 100), that.getSecondColor());
		    grd.addColorStop(1, that.getThirdColor());


		    //COLORE BORDO
		    ctx.strokeStyle = grd;

		    //DIESGNO FINITO
		    ctx.stroke();

		    //END DISEGNO COLORI
		}


		//WRITE VALUE IF true
		if (that.getShowValue()) {
		    ctx.font = 13 * scale + 'pt Georgia';
		    ctx.textAlign = 'center';
		    ctx.fillStyle = that.getTtColor();
		    ctx.fillText(that.getShowedValue(), centerX, centerY + 50 * scale);
		}

		//START TICKS

		// draw big ticks		
		ctx.translate(centerX, centerY);
		ctx.strokeStyle = that.getTtColor();
		ctx.lineCap = "round";
		ctx.lineWidth = hourTickWidth;
		ctx.save();

		ctx.rotate((150 - t2trad) * DEG2RAD);


		var numInterval = (that.getEndValue() - that.getStartValue()) / (that.getNumOfBigTicks() - 1);


		for (var i = 0; i < that.getNumOfBigTicks(); i++) {
		    ctx.rotate(t2trad * DEG2RAD);
		    ctx.beginPath();
		    ctx.moveTo(hourTickStart, 0);
		    ctx.lineTo(hourTickEnd, 0);
		    ctx.stroke();
		    if (that.getHaveNumbers()) {
		        var ndist = hourTickEnd - (20 * scale);
		        ctx.translate(ndist, 0);
		        ctx.rotate((210 - (t2trad * i)) * DEG2RAD);
		        ctx.font = 12 * scale + "px Georgia";
		        ctx.textAlign = 'start';
		        ctx.fillStyle = that.getTtColor();
		        if ((Math.round(that.getStartValue() + (i * numInterval))) >= 100 && (i > (that.getNumOfBigTicks() / 2))) {
		            ctx.fillText(Math.round(that.getStartValue() + (i * numInterval)), (-15 * scale), (5 * scale));
		        } else if (i < (that.getNumOfBigTicks() * 2 / 3)) {
		            ctx.fillText(Math.round(that.getStartValue() + (i * numInterval)), (-5 * scale), (5 * scale));
		        } else {
		            ctx.fillText(Math.round(that.getStartValue() + (i * numInterval)), (-10 * scale), (5 * scale));
		        }
		        ctx.rotate(-(210 - (t2trad * i)) * DEG2RAD);
		        ctx.translate(-ndist, 0);
		    }
		}
		ctx.restore();
		//end big ticks

		// draw minute ticks		
		ctx.save();
		ctx.lineWidth = minuteTickWidth;
		ctx.rotate(150 * DEG2RAD);
		for (i = 0; i < that.getNumOfBigTicks() - 1; i++) {
		    for (k = 0; k < that.getNumOfSmallTicks(); k++) {
		        ctx.rotate(t2trad / (that.getNumOfSmallTicks() + 1) * DEG2RAD);
		        ctx.beginPath();
		        ctx.moveTo(minuteTickStart, 0);
		        ctx.lineTo(minuteTickEnd, 0);
		        ctx.stroke();

		    }
		    ctx.rotate(t2trad / (that.getNumOfSmallTicks() + 1) * DEG2RAD);
		}
		ctx.restore();

		//END TICK DESIGN


		// ANIMAZIONE E DISEGNO LANCETTA
		that._myVar = setInterval(function () {
		    drawIndicator()
		}, 1);

		function myStopFunction() {
		    clearInterval(that._myVar);
		}

		var currentIndicator = 0.5;

		var ctx = that.sCanvas.getContext("2d");
		ctx.translate(centerX, centerY);

		ctx.rotate(150 * DEG2RAD);

		function drawIndicator() {
		    // Clear the canvas
		    ctx.translate(-centerX, -centerY);
		    ctx.clearRect(0, 0, width, height);
		    ctx.translate(centerX, centerY);
		    ctx.save();
		    ctx.shadowOffsetX = shadowOffsetX;
		    ctx.shadowOffsetY = shadowOffsetY;
		    ctx.shadowBlur = shadowOffsetBlur;
		    ctx.shadowColor = shadowColor;

		    ctx.rotate(0.5 * DEG2RAD);
		    ctx.strokeStyle = that.getNeedleColor();
		    ctx.lineWidth = secondHandWidth;
		    ctx.beginPath();
		    ctx.moveTo(secondHandEnd - 5 * scale, 0);
		    ctx.lineTo(-indtail, 5 * scale);
		    ctx.lineTo(-indtail, -5 * scale);
		    ctx.fillStyle = that.getNeedleColor();
		    ctx.fill();

		    // draw boss	
		    ctx.save();
		    ctx.fillStyle = "grey";
		    ctx.beginPath();
		    ctx.globalAlpha = 0.2;
		    ctx.arc(0, 0, bossRadius * 1.5, 0, 360 * DEG2RAD);
		    ctx.fill();
		    ctx.restore();


		    ctx.save();
		    var grd = ctx.createLinearGradient(-10, -10, 10, 10);
		    grd.addColorStop(0, "white");
		    grd.addColorStop(1, that.getMainColor());
		    ctx.fillStyle = grd;
		    ctx.beginPath();
		    ctx.arc(0, 0, bossRadius, 0, 360 * DEG2RAD);
		    ctx.fill();
		    ctx.restore();


		    if (currentIndicator >= (that.getIndicatorValue() * 240 / (that.getEndValue() - that.getStartValue()))) {
		        myStopFunction();
		    }
		    currentIndicator += 0.5;
		}
	};

	that.onResize = function (width, height, parent) {
		// in case special resize code is required
	};

	/* COMPONENT SPECIFIC CODE - END METHODS*/
	return that;
};

//%INIT-START%
myComponentData.instance = Gauge;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});