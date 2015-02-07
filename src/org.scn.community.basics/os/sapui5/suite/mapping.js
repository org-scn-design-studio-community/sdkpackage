(function() {
/** code for recognition of script path */
var myScript = $("script:last")[0].src;
_readScriptPath = function () {
	if(myScript) {
		var myScriptSuffix = "os/sapui5/suite";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
};
/** end of path recognition */

var path = _readScriptPath();
path = path + "/META-INF/resources/sap/suite/ui/commons";

jQuery.sap.registerModulePath("sap.suite.ui.commons", path);

})();