define(["../../../org.scn.community.shared/modules/component.core", "./ApsTesterUI5Spec"], function() {

var myComponentData = org_scn_community_require.knownComponents.prototypes.ApsTesterUI5;

ApsTesterUI5 = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/

	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

// // define([], function(prototypesapstesterui5){
	myComponentData.instance = ApsTesterUI5;
	return myComponentData.instance;
// });

});