
// load sap.m and sap.me
var oCore = sap.ui.getCore();
oCore.loadLibrary("sap.m");

// mark forced re-load of sap.m events bundle
oCfgData = window["sap-ui-config"]

if(oCfgData.libs.indexOf("sap.m") == -1) {
	oCfgData.libs = oCfgData.libs + ",sap.m";
	
	if(!sap.ui.Device.support.touch) {
		// unload events bundle
		jQuery.sap.unloadResources("jquery.sap.events.js", false, true, true);
		// reload events bundle to assure that sap.m events are active
		jQuery.sap.require("jquery.sap.events");
	}
}
