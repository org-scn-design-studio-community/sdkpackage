sap.ui.define([
	"PropertyPage/BaseController",
	"sap/m/MessageBox"
], function(
	BaseController,
	MessageBox
) {
	"use strict";
	return BaseController.extend("PropertyPage.General", {
		fragmentFactory : function(sId, oContext){
			var fragment = sap.ui.xmlfragment("PropertyPage." + oContext.getProperty("text") + "Content", /*controller*/ this);
			this.getView().addDependent(fragment);
			return fragment;
		},
		tabPress : function(oEvent){
			var context = oEvent.getSource().getBindingContext("navState");
			var tabText = context.getProperty("text");
			var tabs = sap.ui.getCore().getModel("navState").getProperty("/tabs");
			for(var i=0;i<tabs.length;i++){
				var tab = tabs[i];
				if(tab.text == tabText){
					tab.selected = true;
				}else{
					tab.selected = false;
				}
			}
			sap.ui.getCore().getModel("navState").setProperty("/tabs",tabs);
		}
    });
});