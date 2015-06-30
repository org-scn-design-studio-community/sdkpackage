(function(){

var myComponentData = org_scn_community_require.knownComponents.basics.BasicBusinessCard;

BasicBusinessCard = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;
		org_scn_community_component_Core(that, myComponentData);
		
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		this.addStyleClass("scn-pack-BasicBusinessCard-Card");
		
		this._lNameLink = new sap.ui.commons.Link();

		this._lNameLink.attachBrowserEvent('click', function() {
			that.fireDesignStudioEvent("onPress");
			}
		);
		
		this._lNameLink.addStyleClass("scn-pack-BasicBusinessCard-NameLink");

		this.addContent(
				this._lNameLink,
				{left: "42px", top: "2px"}	
		);

		this._lImage = new sap.ui.commons.Image({
			width: "32px",
			height: "32px"
			}
		);

		this._lImage.addStyleClass("scn-pack-BasicBusinessCard-Image");
		
		this.addContent(
				this._lImage,
				{left: "5px", top: "5px"}
		);

		this._lText = new sap.ui.commons.TextView();

		this._lText.addStyleClass("scn-pack-BasicBusinessCard-Title");
		
		this.addContent(
				this._lText,
				{left: "42px", top: "20px"}
		);
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		this.onAfterRendering = function () {
			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		}
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
		this._lNameLink.setText (this.getName());
		this._lNameLink.setTooltip (this.getName());

		this._lImage.setSrc (this.getImage());

		this._lText.setText (this.getTitle());
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

define([myComponentData.requireName], function(basicsbasicbusinesscard){
	myComponentData.instance = BasicBusinessCard;
	return myComponentData.instance;
});

}).call(this);