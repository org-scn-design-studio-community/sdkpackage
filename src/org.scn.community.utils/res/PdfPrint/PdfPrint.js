/**
 * Copyright 2014 SCN SDK Community
 * 
 * Original Source Code Location:
 *  https://github.com/org-scn-design-studio-community/sdkpackage/
 * Forked from 
 *  https://github.com/Antoninjo/DesignStudioPDFExportComponent.git
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
sap.zen.commons.layout.AbsoluteLayout.extend ("org.scn.community.utils.PdfPrint", {

	metadata: {
        properties: {
              "pdfMethod": {type: "string"},
              "svgMode": {type: "string"},
              "trigger": {type: "string"},
              "rootPanel": {type: "string"},
              "format": {type: "string"},
              "orientation": {type: "string"},
              "unit": {type: "string"},
              "fileName": {type: "string"},
        }
	},

	initDesignStudio: function() {
		var that = this;
	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
		if(this.getTrigger() == "GO") {
			var svgElements = $('body').find('svg');

			svgElements.each(function(){
				var svg = this;
				var img = document.createElement("img");
				img.className = "screenShotTempCanvas";
	
				if(that.getSvgMode() == "Canvas") {
					var oCanvas = document.createElement("canvas");
					var svgData = new XMLSerializer().serializeToString(this);
					canvg(oCanvas, svgData);
					$(svg).hide();
					img.src = oCanvas.toDataURL("image/png");
					
					var parent = svg.parentNode;
					parent.appendChild(img);
					img.onload = function(){};
				}
				
				if(that.getSvgMode() == "Data Uri") {
					svgAsDataUri(this,1,function(uri){
						svg.className = "tempHide";
						$(svg).hide();
						var parent = svg.parentNode;
						img.src=uri;
						parent.appendChild(img);

						img.onload = function(){

						};
					});
				}
			});

			var areas = undefined;

			if(that.getRootPanel() != "") {
				areas = $("div[class~=zenControl]");
			}

			if(!areas) {
				that.printElement(document.body);
			} else {
				if(areas.length && areas.length == 0) {
					that.printElement(document.body);
				} else {
					// search for chosen component
					for(var iC = 0; iC < areas.length; iC++) {
						if(areas[iC].id.indexOf(this.getRootPanel() + "_panel") == 0) {
							that.printElement(areas[iC]);
							break;
						}
					}
				}
			}

			if(this.getTrigger() != "") {
				// clean up the trigger
				this.setTrigger("");

				// fire event to rerender
				this.fireDesignStudioPropertiesChanged(["trigger"]);
			}
		}
	},
	
	printElement: function (element) {
		var that = this;
		var options = {};
		options.orientation = that.getOrientation();

		var pdf = new jsPDF(options,that.getUnit(),that.getFormat());

		pdf.addHTML(element, function() {
			if(that.getPdfMethod() == "Save"){
				var name = that.getFileName();
				var d = new Date();
				name = name.replace("$TIME", ""+ d.format(dateFormat.masks.timestamp));
				pdf.output('save',name);
			}else if(that.getPdfMethod() == "New Window"){
				pdf.output('dataurlnewwindow');
			}else if(that.getPdfMethod() == "Same Page"){
				pdf.output('datauri');
			}							
			$('body').find('.screenShotTempCanvas').remove();
      		$('svg').show();
		});
	},
});