
// load sap.m and sap.me
var oCore = sap.ui.getCore();

// mark forced re-load of sap.m events bundle
oCfgData = window["sap-ui-config"]

if(oCfgData.libs.indexOf("sap.suite.ui.commons") == -1) {
	oCore.loadLibrary("sap.suite.ui.commons");
	oCfgData.libs = oCfgData.libs + ",sap.suite.ui.commons";
}
