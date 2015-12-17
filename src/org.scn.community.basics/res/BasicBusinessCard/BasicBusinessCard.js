//%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./BasicBusinessCardSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics"
	
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

BasicBusinessCard = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;
		
		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;

		org_scn_community_component_Core(that, myComponentData);
		
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.addStyleClass("scn-pack-BasicBusinessCard-Card");
		
		that._lNameLink = new sap.ui.commons.Link();

		that._lNameLink.attachBrowserEvent('click', function() {
			that.fireDesignStudioEvent("onPress");
			}
		);
		
		that._lNameLink.addStyleClass("scn-pack-BasicBusinessCard-NameLink");

		that.addContent(
				that._lNameLink,
				{left: "42px", top: "2px"}	
		);

		that._lImage = new sap.ui.commons.Image({
			width: "32px",
			height: "32px"
			}
		);

		that._lImage.addStyleClass("scn-pack-BasicBusinessCard-Image");
		
		that.addContent(
				that._lImage,
				{left: "5px", top: "5px"}
		);

		that._lText = new sap.ui.commons.TextView();

		that._lText.addStyleClass("scn-pack-BasicBusinessCard-Title");
		
		that.addContent(
				that._lText,
				{left: "42px", top: "20px"}
		);
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		// that.onAfterRendering = function () {
			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		// }
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	processData: function (flatData, afterPrepare, owner) {
		var that = owner;

		// processing on data
		that.afterPrepare(that);
	},

	afterPrepare: function (owner) {
		var that = owner;
			
		// visualization on processed data
		that._lNameLink.setText (that.getName());
		that._lNameLink.setTooltip (that.getName());

		that._lImage.setSrc (that.getImage());

		that._lText.setText (that.getTitle());
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = BasicBusinessCard;
jQuery.sap.require("sap.zen.commons.layout.AbsoluteLayout");
sap.zen.commons.layout.AbsoluteLayout.extend(myComponentData.fullComponentName, myComponentData.instance);
});