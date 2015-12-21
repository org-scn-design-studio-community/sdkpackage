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

 /**
 * Arrowed Line
 * Ported to Design Studio 1.6 and new APS
 * Original by Donnie Burhan: http://scn.sap.com/community/businessobjects-design-studio/blog/2015/06/16/design-studio-sdk--line-with-arrow
 */

define(["./../../../org.scn.community.shared/os/viz-modules/SDKCore",
        "sap/designstudio/sdk/component"], function(SDKCore,Component) {
	var ownComponentName = "org.scn.community.basics.ArrowedLine";
	ArrowedLine.prototype = SDKCore;
	function ArrowedLine() {
		var that = this;
		SDKCore.call(this, {
			lineColor :  { 
				opts : {
					desc : "Line Color",
					cat : "General",
					apsControl : "color"
				}			
			},
			lineSize : {
				opts : {
					desc : "Line Size",
					cat : "General",
					apsControl : "spinner"
				}
			},
			arrowPos : { 
				opts : {
					apsControl : "segmentedbutton",
					desc : "Arrow Position",
					cat : "General",
					options : [{key : "None", text : "None"},
					         {key : "Start", text : "Start"},
					         {key : "End", text : "End"},
					         {key : "Both", text : "Both"}
					]
				}
			},
			lineType : { 
				opts : {
					apsControl : "combobox",
					desc : "Line Type",
					cat : "General",
					options : [{key : "1", text : "1"},
					         {key : "2", text : "2"},
					         {key : "3", text : "3"},
					         {key : "4", text : "4"},
					         {key : "5", text : "5"},
					         {key : "6", text : "6"},
					         {key : "7", text : "7"},
					         {key : "8", text : "8"},
					         {key : "9", text : "9"},
					         {key : "10", text : "10"},
					         {key : "11", text : "11"},
					         {key : "12", text : "12"},
					         {key : "13", text : "13"},
					         {key : "14", text : "14"}
					]
				}
			},
			visible :  { 
				opts : {
					desc : "Visible",
					cat : "General",
					apsControl : "checkbox"
				}			
			}
		});
		this.componentInfo.title = "Arrowed Line";
		this.componentInfo.author = "Donnie Burhan";
    	this.componentInfo.description = "An Arrowed Line component created by Donnie Burhan.  Original blog can be found here: <a target='_blank' href='http://scn.sap.com/community/businessobjects-design-studio/blog/2015/06/16/design-studio-sdk--line-with-arrow'>Design Studio SDK - Line with Arrow</a>";
    	this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAX1JREFUSEtj+E9jMGoBQTBqAUEwagFBQI4F91bFJ/u4Jk/Yff4rVAQPINWCv///X5liwcnHwMAib+HbsHTrA6gELkCOBRsTbOS4mBiAQFjDtmz53kdQOayArDh4t7k53V5BjAtkB5+MWeWWs8//QaUwAHYL/v379+3NnXt3b2MH9x4/O9yZ5CQPsgAI2Hh0aw/efv3j918s1mC14N/vHx93pDEJskBNIAIwajWcefjhD6YNWC34/uPL2lwOFm6oZmIAC4Nh267HH/9ATUAArBb8/fvz9bkaXV6oZqKA29THjz4T6wNgHPz/9fzsof27d2IDuw4cPbGyItRSGmo2C6db256Lr/7/BiYxDIDdAgLg8ca5Nb5GSgJAw5n5pd1rlxx/A5XBBKRaAHTkwz1phjLsIKezial6lM/Y9xYqhxWQagEwFg82KPECo4dZRMW9dPaed1AJXIBUC4Cx+GJbsa21srJHzeqDhEwHArLigBQwagFBMGoBQTDULfj/HwB0C+oVlmbE9QAAAABJRU5ErkJggg==";
		/**
		 * Init
		 */
    	var parentInit = this.init;
    	this.init = function(){
    		parentInit.call(this);
    		this.$().addClass("ArrowedLine");
    		this.tagCanvas = document.createElement("canvas");
    		this.$().append($(this.tagCanvas));
    	};
    	/**
		 * After Update
		 */
		var parentAfterUpdate = this.afterUpdate;
		this.afterUpdate = function(){
			parentAfterUpdate.call(this);
			this.line();
		};
		this.line = function() {

			var w = that.$().width();
			var h = that.$().height();
			var arrowSize = 3 * this.lineSize();

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
			
			ctx.strokeStyle = this.lineColor();
			ctx.lineWidth = this.lineSize();
			
			switch(this.arrowPos()) {
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
			
			switch (this.lineType()) {
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
			if (this.arrowPos() == 'Start' || this.arrowPos() == 'Both') {
				ctx.beginPath();
				
				ctx.moveTo(arrowX11, arrowY11);
				ctx.lineTo(arrowX12, arrowY12);
				ctx.lineTo(arrowX13, arrowY13);
				ctx.lineTo(arrowX11, arrowY11);
				ctx.fillStyle = this.lineColor();
			    ctx.fill();
			}
			
			// draw end arrow
			if (this.arrowPos() == 'End' || this.arrowPos() == 'Both') {
				ctx.beginPath();
				
				ctx.moveTo(arrowX21, arrowY21);
				ctx.lineTo(arrowX22, arrowY22);
				ctx.lineTo(arrowX23, arrowY23);
				ctx.lineTo(arrowX21, arrowY21);
				ctx.fillStyle = this.lineColor();
			    ctx.fill();
			    
			}
			
		}

	}
	ArrowedLine.prototype.constructor = ArrowedLine;
	ArrowedLine.prototype.toString = function(){
		return ownComponentName;
    }
	Component.subclass(ownComponentName, ArrowedLine);	// End of SDK
});