/*
 * Extended control with ability to hide alpha slider 
 */
define([],function(){
	sap.ui.commons.ColorPicker.extend("org.scn.community.aps.ColorPickerUI5",{
		_showAlpha : false,
		metadata : {
			properties : {
				showAlpha : {
					type : "boolean",
					defaultValue : false
				}
			}
		},
		renderer : { },
		setShowAlpha : function(b){
			this._showAlpha = b;
			return this;
			/* The following is broken in 1.6 SP4 UI5 change.
			if(!b) {
				this._oldParent.removeContent(this._vLayout);
			}else{
				this._oldParent.addContent(this._vLayout);
			}
			*/
		},
		getShowAlpha : function(){
			return this._showAlpha;
		},
		init : function(){
			sap.ui.commons.ColorPicker.prototype.init.apply(this, arguments);
			return;
			/* The following is broken in 1.6 SP4 UI5 change.
			this._oldParent = this.oAlphaSlider.getParent();
			this._sliderParent = this.oSlider.getParent();
			this._sliderParent.removeContent(this.oSlider);
			this._sliderParent.addContent(new sap.ui.commons.layout.VerticalLayout({
				width:"100%",
				content : [
			         new sap.ui.commons.TextView({text:"Hue:"}),
			         this.oSlider
				]
			}));
			this._vLayout = new sap.ui.commons.layout.VerticalLayout({width:"100%"});
			this._oldParent.removeContent(this.oAlphaSlider);
			this._vLayout.addContent(new sap.ui.commons.TextView({text:"Alpha (Opacity):"}));
			this._vLayout.addContent(this.oAlphaSlider);
			if(!this.getShowAlpha()) this._oldParent.removeContent(this._vLayout);
			*/
		}
	});
});