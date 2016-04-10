define([
        ]
     , function() {

// load sap.m and sap.me
var oCore = sap.ui.getCore();

// mark forced re-load of sap.m events bundle
oCfgData = window["sap-ui-config"]

if(oCfgData.libs.indexOf("sap.tnt") == -1) {
	jQuery.sap.registerModulePath("sap.tnt", sap.zen.createStaticSdkMimeUrl("org.scn.community.shared","os") + "/sapui5/tnt");

	oCore.loadLibrary("sap.tnt");
	oCfgData.libs = oCfgData.libs + ",sap.tnt";
}

});// End of closure