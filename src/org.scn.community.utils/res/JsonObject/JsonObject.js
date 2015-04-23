(function(){

var myComponentData = org_scn_community_require.knownComponents.utils.JsonObject;

JsonObject = function () {

	var that = this;
	
	this.init = function() {
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	this.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	};
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/

	/* COMPONENT SPECIFIC CODE - END METHODS*/

	org_scn_community_component_Core(that, myComponentData);
	
	return that;
};

define([myComponentData.requireName], function(utilsjsonobject){
	myComponentData.instance = JsonObject;
	return myComponentData.instance;
});

}).call(this);