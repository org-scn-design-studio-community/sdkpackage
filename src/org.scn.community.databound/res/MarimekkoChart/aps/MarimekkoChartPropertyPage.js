sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.MarimekkoChartPropertyPage", function() {
	var that = this;
	/**
	 * Setter/Getters
	 */
	this.ms = function(f){
		if(f===undefined){
			return this._ms;
		}else{
			this._ms = f;
			this.compMs.setValue(f);
			return this;
		}
	};
	this.compMs = new org.scn.community.aps.Spinner({
		min : 0,
		max : 2000,
		valueChange : function(oControlEvent){
			that._ms = this.getValue();
			that.firePropertiesChanged(["ms"]);			
		}
	});
	this.compMargin = new org.scn.community.aps.Spinner({
		min : 0,
		max : 500,
		valueChange : function(oControlEvent){
			that._margin = this.getValue();
			that.firePropertiesChanged(["margin"]);			
		}
	});
	this.selectedColor = function(s){
		if(s===undefined){
			return this._selectedColor;
		}else{
			this._selectedColor = s;
			this.compSelectedColor.setBackgroundColor(s);
			return this;
		}
	};
	this.compSelectedColor = new org.scn.community.aps.ColorPicker({
		showAlpha : false,
		colorChange : function(oControlEvent){
			that.selectedColor(this.getBackgroundColor());
			that.firePropertiesChanged(["selectedColor"]);
		}
	});
	this.margin = function(f){
		if(f===undefined){
			return this._margin;
		}else{
			this._margin = f;
			this.compMargin.setValue(f);
			return this;
		}
	};
	this.compMargin = new org.scn.community.aps.Spinner({
		min : 0,
		max : 500,
		valueChange : function(oControlEvent){
			that._margin = this.getValue();
			that.firePropertiesChanged(["margin"]);			
		}
	});
	this.legendOn = function(b){
		if(b===undefined){
			return this._legendOn;
		}else{
			this._legendOn = b;
			this.compLegendOn.setChecked(b);
			return this; 
		}
	};
	this.compLegendOn =  new sap.ui.commons.CheckBox({
		text : "Display Legend",
		change : function(oControlEvent){
			that.legendOn(this.getChecked());
			that.firePropertiesChanged(["legendOn"]);
		} 
	});
	this.makeRoomX = function(b){
		if(b===undefined){
			return this._makeRoomX;
		}else{
			this._makeRoomX = b;
			this.compMakeRoomX.setChecked(b);
			return this; 
		}
	};
	this.compMakeRoomX =  new sap.ui.commons.CheckBox({
		text : "Chart Avoids Legend",
		change : function(oControlEvent){
			that.makeRoomX(this.getChecked());
			that.firePropertiesChanged(["makeRoomX"]);
		} 
	});
	this.tooltipOn = function(b){
		if(b===undefined){
			return this._tooltipOn;
		}else{
			this._tooltipOn = b;
			this.compTooltipOn.setChecked(b);
			return this; 
		}
	};
	this.showValues = function(b){
		if(b===undefined){
			return this._showValues;
		}else{
			this._showValues = b;
			this.compShowValues.setChecked(b);
			return this; 
		}
	};
	this.compShowValues =  new sap.ui.commons.CheckBox({
		text : "Show Values",
		change : function(oControlEvent){
			that.showValues(this.getChecked());
			that.firePropertiesChanged(["showValues"]);
		} 
	});
	this.compTooltipOn =  new sap.ui.commons.CheckBox({
		text : "Display Tooltips",
		change : function(oControlEvent){
			that.tooltipOn(this.getChecked());
			that.firePropertiesChanged(["tooltipOn"]);
		} 
	});
	this.colorPalette = function(s){
		if(s===undefined){
			return this._colorPalette
		}else{
			this._colorPalette = s;
			this.brewer.setColors(s);
			return this;
		}
	};
	/**
	 * UI5 Components
	 */
	this.brewer = new org.scn.community.aps.ColorBuilder({
		width : "100%",
		title : new sap.ui.commons.Title({
			text: "Colors"
		}),
		tooltip: "Choropleth Colors",
		showCollapseIcon : false,
		showAlpha : false,
		showRatios : false,
		colorChange : function(oControlEvent){
			that.colorPalette(this.getColors());
			that.firePropertiesChanged(["colorPalette"]);
		}
	});

	/**
	 * Design Studio Events
	 */
	this.init = function(){
		// Build UI
			this.content = new sap.ui.commons.TabStrip({
				width : "100%",
				//height : "500px"
			});
			var cosmeticsLayout = new sap.ui.commons.layout.VerticalLayout({
				width : "100%"
			});
			
			this.content.createTab("Cosmetics", cosmeticsLayout);
			cosmeticsLayout.addContent(this.compLegendOn);
			cosmeticsLayout.addContent(this.compMakeRoomX);
			cosmeticsLayout.addContent(this.compShowValues);
			cosmeticsLayout.addContent(this.compTooltipOn);
			cosmeticsLayout.addContent(this.hLabel("Animation Duration (ms)",this.compMs));
			cosmeticsLayout.addContent(this.hLabel("Margins",this.compMargin));
			cosmeticsLayout.addContent(this.hLabel("Selected Color",this.compSelectedColor));
			cosmeticsLayout.addContent(this.brewer);
			this.content.placeAt("content");
	};
	this.hLabel = function(label,component){
		var hLayout = new sap.ui.commons.layout.HorizontalLayout({})
		hLayout.addContent(new sap.ui.commons.TextView({ text : label, width : "150px"}));
		hLayout.addContent(component);
		return hLayout;
	}
});