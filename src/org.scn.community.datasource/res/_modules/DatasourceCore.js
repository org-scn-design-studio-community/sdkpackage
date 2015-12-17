/**
 * Data Source Core Class
 */
define(["./SDKCore"], function(SDKCore) {
	DatasourceCore.prototype = SDKCore;
	DatasourceCore.constructor = DatasourceCore;
	function DatasourceCore(options){
		var properties = { };
		for(var prop in options) properties[prop] = options[prop];
		SDKCore.call(this,properties);
		this.componentInfo.title = "Data Source Component";
	}
	return DatasourceCore;
});
