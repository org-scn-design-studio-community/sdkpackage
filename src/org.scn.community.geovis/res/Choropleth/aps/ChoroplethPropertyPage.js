sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.geovis.ChoroplethPropertyPage", function() {
	var that = this;
	this.colorPalette = function(s){
		if(s===undefined){
			return this._colorPalette
		}else{
			this._colorPalette = s;
			this.brewer.setColors(s);
		}
	};
	this.brewer = new org.scn.community.aps.ColorBuilder({
		width : "100%",
		title : new sap.ui.commons.Title({
			text: "Colors"
		}),
		tooltip: this.tooltip,
		showCollapseIcon : false,
		showAlpha : false,
		showRatios : false,
		colorChange : function(oControlEvent){
			that.colorPalette(this.getColors());
			that.firePropertiesChanged(["colorPalette"]);
		}
	});
	this.init = function(){
		this.brewer.placeAt("content");	
	};
	
});