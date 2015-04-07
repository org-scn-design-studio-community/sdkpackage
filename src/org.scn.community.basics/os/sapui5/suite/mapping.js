(function() {
/** code for recognition of script path */
var myScript = $("script:last")[0].src;
var scriptInfo = org_scn_community_basics.readGenericScriptAccess(myScript, "os/sapui5/suite", "basics");

var commonsPath = scriptInfo.myScriptPath + "/META-INF/resources/sap/suite/ui/commons";

//check requried for 1.4 release, 1.5 has already access to suite
try {
	jQuery.sap.require("sap.suite.ui.commons.DateRangeSlider");	
} catch (e) {
	jQuery.sap.unloadResources("sap/suite/ui/commons/DateRangeSlider.js", false, true, true);
}

// check requried for 1.4 release, 1.5 has already access to suite
if(!(sap.suite && sap.suite.ui && sap.suite.ui.commons  && sap.suite.ui.commons.DateRangeSlider)) {
	jQuery.sap.registerModulePath("sap.suite.ui.commons", commonsPath);	
}

})();