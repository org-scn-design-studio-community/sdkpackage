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
	"./PdfPrintSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"utils/os/date/DateFormat",
	"../../../"+scn_pkg+"utils/os/canvas/canvg",
	"../../../"+scn_pkg+"utils/os/canvas/html2canvas",
	"../../../"+scn_pkg+"utils/os/rgb/rgbcolor",
	"../../../"+scn_pkg+"utils/os/blur/StackBlur",
	"../../../"+scn_pkg+"utils/os/svg/saveSvgAsPng",
	"../../../"+scn_pkg+"utils/os/file/FileSaver",
	"../../../"+scn_pkg+"utils/os/jspdf/jspdf",
	"../../../"+scn_pkg+"utils/os/jspdf/jspdf.plugin.addhtml",
	"../../../"+scn_pkg+"utils/os/jspdf/jspdf.plugin.addimage",
	"../../../"+scn_pkg+"utils/os/jspdf/jspdf.plugin.autoprint",
	"../../../"+scn_pkg+"utils/os/jspdf/jspdf.plugin.cell",
	"../../../"+scn_pkg+"utils/os/jspdf/jspdf.plugin.from_html",
	"../../../"+scn_pkg+"utils/os/jspdf/jspdf.plugin.javascript",
	"../../../"+scn_pkg+"utils/os/jspdf/jspdf.plugin.png_support",
	"../../../"+scn_pkg+"utils/os/jspdf/jspdf.plugin.sillysvgrenderer",
	"../../../"+scn_pkg+"utils/os/jspdf/jspdf.plugin.split_text_to_size",
	"../../../"+scn_pkg+"utils/os/jspdf/jspdf.plugin.standard_fonts_metrics",
	"../../../"+scn_pkg+"utils/os/jspdf/jspdf.plugin.total_pages"
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

PdfPrint = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		// that.onAfterRendering = function () {
			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		// }
	},
	
	afterDesignStudioUpdate: function() {
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
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};
//%INIT-START%
myComponentData.instance = PdfPrint;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});