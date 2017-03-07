sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";
	return Controller.extend("PropertyPage.BaseController", {
		// http://help.sap.com/saphelp_nw75/helpdata/en/66/670b0aab3948469d5cc8276113e9ea/content.htm
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
			// propertyPage.log(sPreviousHash);
			if (sPreviousHash !== undefined && sPreviousHash != "") {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("appHome", {}, true /*no history*/);
			}
		}
	});
});