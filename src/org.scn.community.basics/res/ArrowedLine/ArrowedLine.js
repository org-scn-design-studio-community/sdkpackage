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

sap.designstudio.sdk.Component.subclass("org.scn.community.basics.ArrowedLine", function() {

	var that = this;

	this.tagCanvas = null;

	this.init = function() {
		this.tagCanvas = document.createElement("canvas");
		this.$().append($(this.tagCanvas));
	};
	
	this.afterUpdate = function() {
		line();
	};

	var lineColor = null;
	
    this.lineColor = function(value) {
        if(value == undefined) {
			return lineColor;
        }
        else {
        	lineColor = value;
			return this;
        }
    };

	var lineSize = null;
    this.lineSize = function(value) {
        if(value == undefined) {
			return lineSize;
        }
        else {
			lineSize = value;
			return this;
        }
    };

	var arrowPos = null;
    this.arrowPos = function(value) {
        if(value == undefined) {
			return arrowPos;
        }
        else {
        	arrowPos = value;
			return this;
        }
    };
    
    var lineType = null;
    this.lineType = function(value) {
        if(value == undefined) {
			return lineType;
        }
        else {
        	lineType = value;
			return this;
        }
    };   
    


	function line() {
		
		var w = that.$().width();
		var h = that.$().height();
		var arrowSize = 3 * lineSize;

		var X1 = 0;
		var X2 = w / 2;
		var X3 = w / 2; // for bend line
		var X4 = w;
		var Y1 = 0;
		var Y2 = h / 2;
		var Y3 = h / 2; // for bend line
		var Y4 = h;
		
		var arrowBegin = 0;
		var arrowEnd = 0;
		
		var arrowX11 = 0;
		var arrowX12 = 0;
		var arrowX13 = 0;
		var arrowY11 = 0;
		var arrowY12 = 0;
		var arrowY13 = 0;
		var arrowX21 = 0;
		var arrowX22 = 0;
		var arrowX23 = 0;
		var arrowY21 = 0;
		var arrowY22 = 0;
		var arrowY23 = 0;
		
		that.tagCanvas.setAttribute("width", "" + Math.max(w, arrowSize));
		that.tagCanvas.setAttribute("height", "" + Math.max(h, arrowSize));
	    
	    // use getContext to use the canvas for drawing      
		var ctx = that.tagCanvas.getContext("2d");
		
		ctx.strokeStyle = lineColor;
		ctx.lineWidth = lineSize;
		
		switch(arrowPos) {
		case 'None' :
			arrowBegin = 0;
			arrowEnd = 0;
			break;
			
		case 'Start' :
			arrowBegin = arrowSize;
			arrowEnd = 0;
			break;
			
		case 'End' :
			arrowBegin = 0;
			arrowEnd = arrowSize;
			break;
			
		case 'Both' :
			arrowBegin = arrowSize;
			arrowEnd = arrowSize;
			break;
		}
		
		switch (lineType) {
		case '1' :
			X1 = w / 2;
			X4 = X1;
			Y1 = Y1 + arrowBegin;
			Y4 = Y4 - arrowEnd;

			arrowX11 = X1 - (arrowSize / 2);
			arrowX12 = X1;
			arrowX13 = X1 + (arrowSize / 2);
			arrowY11 = Y1;
			arrowY12 = 0;
			arrowY13 = Y1;
				
			arrowX21 = X1 - (arrowSize / 2);
			arrowX22 = X1;
			arrowX23 = X1 + (arrowSize / 2);
			arrowY21 = Y4;
			arrowY22 = h;
			arrowY23 = Y4;
				
			break;
			
		case '2' :
			X1 = X1 + arrowBegin;
			X4 = X4 - arrowEnd;
			Y1 = h / 2;
			Y4 = Y1;

			arrowX11 = X1;
			arrowX12 = 0;
			arrowX13 = X1;
			arrowY11 = Y1 + (arrowSize / 2);
			arrowY12 = Y1;
			arrowY13 = Y1 - (arrowSize / 2);
				
			arrowX21 = X4;
			arrowX22 = w;
			arrowX23 = X4;
			arrowY21 = Y1 + (arrowSize / 2);
			arrowY22 = Y1;
			arrowY23 = Y1 - (arrowSize / 2);
				
			break;

		case '3' :
			X1 = 0 + (arrowSize / 2);
			X2 = 0 + (arrowSize / 2);
			X3 = 0 + (arrowSize / 2);
			X4 = X4 - arrowEnd;
			Y1 = h - arrowBegin;
			Y2 = 0 + (arrowSize / 2);
			Y3 = 0 + (arrowSize / 2);
			Y4 = 0 + (arrowSize / 2);

			arrowX11 = X1 - (arrowSize / 2);
			arrowX12 = X1;
			arrowX13 = X1 + (arrowSize / 2);
			arrowY11 = Y1;
			arrowY12 = h;
			arrowY13 = Y1;
				
			arrowX21 = X4;
			arrowX22 = w;
			arrowX23 = X4;
			arrowY21 = arrowSize;
			arrowY22 = arrowSize / 2;
			arrowY23 = 0;
				
			break;
		
		case '4' :
			X1 = arrowBegin;
			X2 = w - (arrowSize / 2);
			X3 = w - (arrowSize / 2);
			X4 = w - (arrowSize / 2);
			Y1 = arrowSize / 2;
			Y2 = arrowSize / 2;
			Y3 = arrowSize / 2;
			Y4 = h - arrowEnd;

			arrowX11 = X1;
			arrowX12 = 0;
			arrowX13 = X1;
			arrowY11 = arrowSize;
			arrowY12 = arrowSize / 2;
			arrowY13 = 0;
				
			arrowX21 = X4 - (arrowSize / 2);
			arrowX22 = X4;
			arrowX23 = w;
			arrowY21 = Y4;
			arrowY22 = h;
			arrowY23 = Y4;
				
			break;
			
		case '5' :
			X1 = w - (arrowSize / 2);
			X2 = w - (arrowSize / 2);
			X3 = w - (arrowSize / 2);
			X4 = arrowEnd;
			Y1 = arrowBegin;
			Y2 = h - (arrowSize / 2);
			Y3 = h - (arrowSize / 2);
			Y4 = h - (arrowSize / 2);

			arrowX11 = X1 - (arrowSize / 2);
			arrowX12 = X1;
			arrowX13 = w;
			arrowY11 = Y1;
			arrowY12 = 0;
			arrowY13 = Y1;
			
			arrowX21 = X4;
			arrowX22 = 0;
			arrowX23 = X4;
			arrowY21 = h;
			arrowY22 = h - (arrowSize / 2);
			arrowY23 = h - arrowSize;
				
			break;
		
		case '6' :
			X1 = w - arrowBegin;
			X2 = arrowSize / 2;
			X3 = arrowSize / 2;
			X4 = arrowSize / 2;
			Y1 = h - (arrowSize / 2);
			Y2 = h - (arrowSize / 2);
			Y3 = h - (arrowSize / 2);
			Y4 = arrowEnd;

			arrowX11 = X1;
			arrowX12 = w;
			arrowX13 = X1;
			arrowY11 = h;
			arrowY12 = h - (arrowSize / 2);
			arrowY13 = h - arrowSize;
			
			arrowX21 = X4 - (arrowSize / 2);
			arrowX22 = X4;
			arrowX23 = X4 + (arrowSize / 2);
			arrowY21 = arrowSize;
			arrowY22 = 0;
			arrowY23 = arrowSize;
				

				
			break;
			
		case '7' :
			X1 = arrowBegin;
			X2 = w / 2;
			X3 = w / 2;
			X4 = X4 - arrowEnd;
			Y1 = arrowSize / 2;
			Y2 = arrowSize / 2;
			Y3 = h - (arrowSize / 2);
			Y4 = h - (arrowSize / 2);

			arrowX11 = X1;
			arrowX12 = 0;
			arrowX13 = X1;
			arrowY11 = arrowSize;
			arrowY12 = arrowSize / 2;
			arrowY13 = 0;
				
			arrowX21 = X4;
			arrowX22 = w;
			arrowX23 = X4;
			arrowY21 = h;
			arrowY22 = h - (arrowSize / 2);
			arrowY23 = h - arrowSize;
				
			break;
			
		case '8' :
			X1 = arrowBegin;
			X2 = w / 2;
			X3 = w / 2;
			X4 = X4 - arrowEnd;
			Y1 = h - (arrowSize / 2);
			Y2 = h - (arrowSize / 2);
			Y3 = arrowSize / 2;
			Y4 = arrowSize / 2;
			

			arrowX11 = X1;
			arrowX12 = 0;
			arrowX13 = X1;
			arrowY11 = h;
			arrowY12 = h - (arrowSize / 2);
			arrowY13 = h - arrowSize;
				
			arrowX21 = X4;
			arrowX22 = w;
			arrowX23 = X4;
			arrowY21 = arrowSize;
			arrowY22 = arrowSize / 2;
			arrowY23 = 0;
				
			break;
		
		case '9' :
			X1 = arrowSize / 2;
			X2 = arrowSize / 2;
			X3 = X4 - (arrowSize / 2);
			X4 = X4 - (arrowSize / 2);
			Y1 = arrowBegin;
			Y2 = h / 2;
			Y3 = h / 2;
			Y4 = Y4 - arrowEnd;
			

			arrowX11 = 0;
			arrowX12 = arrowSize / 2;
			arrowX13 = arrowSize;
			arrowY11 = arrowSize;
			arrowY12 = 0;
			arrowY13 = arrowSize;
				
			arrowX21 = w - arrowSize;
			arrowX22 = w - (arrowSize / 2);
			arrowX23 = w;
			arrowY21 = h - arrowSize;
			arrowY22 = h;
			arrowY23 = h - arrowSize;
				
			break;
			
		case '10' :
			X1 = w - (arrowSize / 2);
			X2 = w - (arrowSize / 2);
			X3 = arrowSize / 2;
			X4 = arrowSize / 2;
			Y1 = arrowBegin;
			Y2 = h / 2;
			Y3 = h / 2;
			Y4 = h - arrowEnd;
			
			arrowX11 = w - arrowSize;
			arrowX12 = w - (arrowSize / 2);
			arrowX13 = w;
			arrowY11 = arrowSize;
			arrowY12 = 0;
			arrowY13 = arrowSize;	
			
			arrowX21 = 0;
			arrowX22 = arrowSize / 2;
			arrowX23 = arrowSize;
			arrowY21 = h - arrowSize;
			arrowY22 = h;
			arrowY23 = h - arrowSize;
			
			break;
			
		case '11' :
			X1 = arrowSize / 2;
			X2 = arrowSize / 2;
			X3 = w - arrowSize / 2;
			X4 = w - arrowSize / 2;
			Y1 = h - arrowBegin;
			Y2 = arrowSize / 2;
			Y3 = arrowSize / 2;
			Y4 = h - arrowEnd;
			
			arrowX11 = X1 - (arrowSize / 2);
			arrowX12 = X1;
			arrowX13 = X1 + (arrowSize / 2);
			arrowY11 = Y1;
			arrowY12 = h;
			arrowY13 = Y1;	
			
			arrowX21 = X4 - (arrowSize / 2);
			arrowX22 = X4;
			arrowX23 = w;
			arrowY21 = Y4;
			arrowY22 = h;
			arrowY23 = Y4;
			
			break;
			
		case '12' :
			X1 = arrowBegin;
			X2 = w - arrowSize / 2;
			X3 = w - arrowSize / 2;
			X4 = arrowEnd;
			Y1 = arrowSize / 2;
			Y2 = arrowSize / 2;
			Y3 = h - arrowSize / 2;
			Y4 = h - arrowSize / 2;
			
			arrowX11 = X1;
			arrowX12 = 0;
			arrowX13 = X1;
			arrowY11 = arrowSize;
			arrowY12 = arrowSize / 2;
			arrowY13 = 0;	
			
			arrowX21 = X4;
			arrowX22 = 0;
			arrowX23 = X4;
			arrowY21 = h;
			arrowY22 = h - (arrowSize / 2);
			arrowY23 = h - arrowSize;
			
			break;
			
		case '13' :
			X1 = w - arrowSize / 2;
			X2 = w - arrowSize / 2;
			X3 = arrowSize / 2;
			X4 = arrowSize / 2;
			Y1 = arrowBegin;
			Y2 = h - arrowSize / 2;
			Y3 = h - arrowSize / 2;
			Y4 = arrowEnd;
			
			arrowX11 = X1 - (arrowSize / 2);
			arrowX12 = X1;
			arrowX13 = w;
			arrowY11 = Y1;
			arrowY12 = 0;
			arrowY13 = Y1;	
			
			arrowX21 = X4 - (arrowSize / 2);
			arrowX22 = X4;
			arrowX23 = X4 + (arrowSize / 2);
			arrowY21 = arrowSize;
			arrowY22 = 0;
			arrowY23 = arrowSize;
			
			break;
			
		case '14' :
			X1 = w - arrowBegin;
			X2 = arrowSize / 2;
			X3 = arrowSize / 2;
			X4 = w - arrowEnd;
			Y1 = h - arrowSize / 2;
			Y2 = h - arrowSize / 2;
			Y3 = arrowSize / 2;
			Y4 = arrowSize / 2;
			
			arrowX11 = X1;
			arrowX12 = w;
			arrowX13 = X1;
			arrowY11 = h;
			arrowY12 = h - (arrowSize / 2);
			arrowY13 = h - arrowSize;	
			
			arrowX21 = X4;
			arrowX22 = w;
			arrowX23 = X4;
			arrowY21 = arrowSize;
			arrowY22 = arrowSize / 2;
			arrowY23 = 0;
			
			break;			
		}
		
		// draw line						
		ctx.beginPath();
		ctx.moveTo(X1, Y1);
		ctx.lineTo(X2, Y2);
		ctx.lineTo(X3, Y3);
		ctx.lineTo(X4, Y4);
		ctx.stroke();
		
		// draw start arrow
		if (arrowPos == 'Start' || arrowPos == 'Both') {
			ctx.beginPath();
			
			ctx.moveTo(arrowX11, arrowY11);
			ctx.lineTo(arrowX12, arrowY12);
			ctx.lineTo(arrowX13, arrowY13);
			ctx.lineTo(arrowX11, arrowY11);
			ctx.fillStyle = lineColor;
		    ctx.fill();
		}
		
		// draw end arrow
		if (arrowPos == 'End' || arrowPos == 'Both') {
			ctx.beginPath();
			
			ctx.moveTo(arrowX21, arrowY21);
			ctx.lineTo(arrowX22, arrowY22);
			ctx.lineTo(arrowX23, arrowY23);
			ctx.lineTo(arrowX21, arrowY21);
			ctx.fillStyle = lineColor;
		    ctx.fill();
		    
		}
		
	}
});
