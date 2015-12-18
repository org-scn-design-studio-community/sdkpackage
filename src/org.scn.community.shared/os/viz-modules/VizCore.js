/**
 * VizCore Class
 */
define(["./SDKCore","css!./Viz.css"], function(SDKCore) {
	VizCore.prototype = SDKCore;
	VizCore.constructor = VizCore;
	function VizCore(options){
		var properties = { };
		for(var prop in options) properties[prop] = options[prop];
		SDKCore.call(this,properties);
		this.componentInfo.title = "VizCore Component";
	}
	return VizCore;
});
