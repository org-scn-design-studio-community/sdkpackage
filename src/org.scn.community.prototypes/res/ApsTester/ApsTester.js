define(["../../aps/org.scn.community.component.Core", "./ApsTesterSpec"], function() {

var myComponentData = org_scn_community_require.knownComponents.prototypes.ApsTester;

ApsTester = function () {

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

// // define([], function(prototypesapstester){
	myComponentData.instance = ApsTester;
	return myComponentData.instance;
// });

});