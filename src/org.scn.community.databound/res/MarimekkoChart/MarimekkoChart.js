(function() {
	 var myScript = $("script:last")[0].src;
	 var ownComponentName = "org.scn.community.databound.MarimekkoChart";
	 var _readScriptPath = function () {
		 var scriptInfo = org_scn_community_basics.readOwnScriptAccess(myScript, ownComponentName);
		 return scriptInfo;
	 };
	 /** end of recognition of script path */
	 /** RequireJS Config **/
	 var pathInfo = _readScriptPath();
	 sap.zen.Dispatcher.instance.pauseDispatching();
	 var sdkReqs = require.config({
		 context : "sdk",
		 paths: {
			d3 :		pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3.min",
			d3tip :		pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3-tip"
		 },
		 urlArgs: "v=" + org_scn_community_require.jsVersion,
	 });
	 sdkReqs(["require","d3","d3tip"], function(require,d3,d3tip) {
		 var tip = d3tip()
		 	.attr('class', 'd3-tip')
		 	.html(function(d) { 
		 		var html = "<span>";
		 		var sep = "";
		 		html += d.value;
		 		/*
		 		for(var i=0;i<d.labels.length;i++){
		 			html+=d.labels[i]+"<br/>";
		 		}
		 		
		 		html += d.x + "," + d.y;
		 		if(d.z) html+= "," + d.z;
		 		*/
		 		html+="</span>";
		 		return html;
		 	})
		 	.offset([-12, 0]);
		 	/*.offset(function(d) {
		 		return [(this.getBBox().height / 2) - 12, 0]
		 	});*/
		
		sap.designstudio.sdk.Component.subclass(ownComponentName, MarimekkoChart);	// End of SDK
		sap.zen.Dispatcher.instance.resumeDispatching();
	 });//End of Require Callback 	
})();// End of closure