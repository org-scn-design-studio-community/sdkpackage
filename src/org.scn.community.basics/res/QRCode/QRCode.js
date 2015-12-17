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
define([
		"css!./QRCode.css",
		"sap/designstudio/sdk/component",
		"../../../org.scn.community.shared/modules/component.core",
		"../../../org.scn.community.shared/modules/component.basics",
		"./QRCodeSpec",
		"../../../org.scn.community.basics/os/qrcode/qrcode"
	], function (
		css,
		Component,
		core,
		basics,
		spec) {
	QRCode = function () {

		var that = this;

		that.init = function () {
			// define root component
			basics.fillDummyDataInit(that, that.initAsync);
		};

		that.initAsync = function (owner) {
			var that = owner;
			core(that, spec);

			/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
			that.$().addClass("DesignStudioSCN");
			that.$().addClass("QRCode");

			/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		};

		that.afterUpdate = function () {
			/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
			basics.fillDummyData(that, that.processData, that.afterPrepare);
		};

		/* COMPONENT SPECIFIC CODE - START METHODS*/

		that.processData = function (flatData, afterPrepare, owner) {
			var that = owner;

			// processing on data
			that.afterPrepare(that);
		};

		that.afterPrepare = function (owner) {
			var that = owner;

			org_scn_community_basics.resizeContentAbsoluteLayout(that, that._QR, that.onResize);
			
			that.doRender();
		};

		that.onResize = function (width, height, parent) {
			var that = parent;

			that.doRender();
		};
		
		that.doRender = function () {
			// visualization on processed data
			if (that.getPrintOnly()) {
				if (!(sap && sap.zen && sap.zen.designmode)) {
					that.$().addClass("printOnly");
				} else {
					that.$().addClass("designTimePrintOnly");
				}
			} else {
				that.$().removeClass("printOnly");
				that.$().removeClass("designTimePrintOnly");
			}
			var size = -1;
			if (size == -1) { // Auto
				size = that.$().width();
				if (that.$().height() < size)
					size = that.$().height();
			}
			var mode_text = "Normal";
			var mode = 0;
			switch (mode_text) {
			case "Normal":
				mode = 0;
				break;
			case "Label Strip":
				mode = 1;
				break;
			case "Label Box":
				mode = 2;
				break;
			case "Image Strip":
				mode = 3;
				break;
			case "Image Box":
				mode = 4;
				break;
			}

			that.$().empty();
			that._QR = that.$().qrcode({
				render : that.render(),
				minVersion : that.getMinVersion(),
				maxVersion : that.getMaxVersion(),
				fill : that.getFill(),
				background : that.getBackground(),
				text : that.getText(),
				radius : that.getRadius(),
				quiet : that.getQuiet(),
				ecLevel : that.getEcLevel(),
				// The following are not exposed in Design Studio Property Sheet:
				left : 0,
				top : 0,
				size : size,
				mode : mode,
				mSize : 0.1,
				mPosX : 0.5,
				mPosY : 0.5,
				label : "no label",
				fontname : "sans",
				fontcolor : "#000000",
				image : null
			});
		};

		/* COMPONENT SPECIFIC CODE - END METHODS*/
		return that;
	};

	spec.instance = QRCode;
	Component.subclass(spec.fullComponentName, spec.instance); // End of SDK
});
