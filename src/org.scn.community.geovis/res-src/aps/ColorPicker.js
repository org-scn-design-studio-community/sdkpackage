/*
 * Extended control with ability to hide alpha slider 
 */
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
		if(!b) {
			this._oldParent.removeContent(this._vLayout);
		}else{
			this._oldParent.addContent(this._vLayout);
		}
	},
	getShowAlpha : function(){
		return this._showAlpha;
	},
	init : function(){
		sap.ui.commons.ColorPicker.prototype.init.apply(this, arguments);
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
	}
});
/*
 * Color Picker for picking a single color
 */
sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.ColorPicker",{
	_colorPicker : null,
	_pickerColor : "",
	_pickerAlpha : 1,
	_hLayout : null,
	metadata : {                             
        properties : {
        	backgroundColor : {
				type : "string",
				defaultValue : ""
        	},
        	alpha : {
        		type : "float",
        		defaultValue : 1.0
        	},
        	ratio : {
        		type : "integer",
        		defaultValue : 50
        	},
        	ratioMin : {
        		type : "integer",
        		defaultValue : 0,
        	},
        	showMultiOptions : {
        		type : "boolean", defaultValue : false
        	},
        	showAlpha : {
        		type : "boolean", defaultValue : false
        	},
        	showRatio : {
				type : "boolean",
				defaultValue : false
			},
        	propSheet : {}
        },
	    events : {
	    	insertBeforeClicked : {},
	    	insertAfterClicked : {},
	    	removeClicked : {},
	    	colorChange : {},
	    	alphaChange : {},
	    	ratioChange : {}
	    }
	 },
	 setRatioMin : function(i){
		 if(this._ratioMin!=i){
			 this._ratioMin = i;
			 this._ratioBox.setMin(i);
		 }
	 },
	 getRatioMin : function(){
		return this._ratioMin; 
	 },
	 setRatio : function(i){
		if(i!=this._ratio){
			this._ratio = i;
			this._ratioBox.setValue(parseFloat(i));
		} 
	 },
	 getRatio : function(){
		 return this._ratio;
	 },
	 setShowRatio : function(b){
		 this._showRatio = b;
		 if(this._showRatio) {
			 this.insertContent(this._ratioBox,1);
		 }else{
			 this.removeContent(this._ratioBox);
		 }
	 },
	 getShowRatio : function(){
		return this._showRatio;
	 },
	 setShowAlpha : function(b){
		 this._showAlpha = b;
		 this.renderComp();
	 },
	 getShowAlpha : function(){
		 return this._showAlpha;
	 },
	 setShowMultiOptions : function(b){
		 this._showMultiOptions = b;
		 this.renderComp();
	 },
	 getShowMultiOptions : function(){
		 return this._showMultiOptions;
	 },
	 renderComp : function(){
		 this._topRow.removeContent();
		 this._topRow.addContent(this._colorTextBox);
		 if(this._showAlpha) this._topRow.addContent(this._alphaBox);
		 this._topRow.addContent(this._pickerButton);
		 if(this._showMultiOptions){
			 this._topRow.addContent(this._insertBeforeButton);
			 this._topRow.addContent(this._insertAfterButton);
			 this._topRow.addContent(this._removeButton);
		 }
	 },
	setPropSheet : function(o){
		this._propSheet = o;
	},
	getPropSheet : function(){
		return this._propSheet;
	},
	 contrastingColor : function(color) {
		 return (this.luma(color) >= 165) ? '#000000' : '#ffffff';
	 },
	 hexToR:function(h) {return parseInt((this.cutHex(h)).substring(0,2),16);},
	 hexToG:function(h) {return parseInt((this.cutHex(h)).substring(2,4),16);},
	 hexToB:function(h) {return parseInt((this.cutHex(h)).substring(4,6),16);},
	 cutHex:function(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h;},
	 luma : function(color) { 
	     var rgb = (typeof color === 'string') ? this.hexToRGBArray(color) : color;
	     return (0.2126 * rgb[0]) + (0.7152 * rgb[1]) + (0.0722 * rgb[2]); // SMPTE C, Rec. 709 weightings
	 },
	 hexToRGBArray : function (color) {
	     if (color.length === 3)
	         color = color.charAt(0) + color.charAt(0) + color.charAt(1) + color.charAt(1) + color.charAt(2) + color.charAt(2);
	     else if (color.length !== 6)
	         throw('Invalid hex color: ' + color);
	     var rgb = [];
	     for (var i = 0; i <= 2; i++)
	         rgb[i] = parseInt(color.substr(i * 2, 2), 16);
	     return rgb;
	},
	RGBtoHEX : function(rgb) {
		if(!rgb) rgb="rgb(255, 255, 255)"; 
		rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		 return "" +
		  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
		  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
		  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
		},
	setBackgroundColor : function(s){
		this._colorTextBox.$().css({"background-color" : (s)?s:"#FFFFFF"});
		this._colorTextBox.$().css({"color" : this.contrastingColor(this.RGBtoHEX(this._colorTextBox.$().css("background-color")))});
		if(this._pickerColor!=s){
			this._pickerColor = s;
			this._colorTextBox.setValue(s);
			this.fireColorChange();
		}
	},
	setAlpha : function(f){
		this._pickerAlpha = f;
		this._alphaBox.setValue(Math.ceil(f*100,0)+"%");
		if(this.getShowAlpha()) this.fireAlphaChange();
	},
	getAlpha : function(){
		return this._pickerAlpha;
	},
	getBackgroundColor : function(){
		return this._pickerColor;
	},
	onAfterRendering : function(){
		this._colorTextBox.$().css({"background-color" : this.getBackgroundColor()});
		this._colorTextBox.$().css({"color" : this.contrastingColor(this.RGBtoHEX(this._colorTextBox.$().css("background-color")))});
	},
	destroy : function(){
		if(this._tp) this._tp.destroy();
	},
	init : function(){
		var that = this;
		this._pickerButton = new sap.ui.commons.Button({
			//text : " ",
			//width : "75px",
			icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwNJREFUeNqkU01ME1EQ/vavQKGV8ltQBKQFxYKgUEBFFKJogjGCGqOYGK8mxoPx4MV40kQPesFEY9TEm/GgMUYRg4SqiFIkgKAtWCABWWmptlDa7e46WzHRkwdf8u1M3tuZ+eZ78xhVVfE/i28/LoAlh6UPQ5ZhwJNZT76NbC4hGb+OAgQ/YZRKvqK6Cwo5/B/JOMIWOtiRJluqzYF1uyORCLjdhRJfnIkFeSo8q3xMikajCL93PcDE3Fn6f/x3gmwKbE0yrylZXd1Us9Q2VLCiugSqosB546GQdb4Jk7xTqKxsgNZyuyi2GDxeF6Be0hLkqSx3Mr+2ZVuKpaIiOO9nRVGEt6MD3ulpmFs3g6H+/H4/HI5nEMUZlK7aA2VteunsSM82VlbU49aG1kZjbpldC9bo6PfaMOV2I/NIDUyVFrAch5W6jZia8sCaXAsTl430tVXrKLaYJ5YGU35pcdA3D11CAoS4OOjry2CyW/5S22ywwlxkxadoHq4Ga0D65BdleGq5hgK2OSWnIMuQmh43MeIc73101yFJ4VC2ZX2WRj1Or4+1oPWu2euztbBYLDCZTHgxYyrk50O49/hOWxoVUQhdhIGZzucXNtTvw2Bv18TA65diiX1rhq2qLleWJGj6aHpots57s1Pr2UE4QPd/iGVwiy58n7WsMo3T6eDu63abs7LtY/0OtxAfH9PiaI4LHo8Hh1PfThYFX75jrjRyoEBwTGwiz+XZNjVvP3iiXI5E2KVQ4Ed4cVHidTohMSnZqDHgBIGoygtdty+2L/3wXebPPJNhTWVwujqmVfnW/cds0VCI1dIl6I3GRGMKFFmmCWXA6gRpvL97bLT7yagUCt7/7MWb2CC5vCqu9TA4VQXuy1DfbE6hLT0+yZCgSFE58N23ODc9EZh2Dc9NDjvFaCTsfOrGPbcPg6NzamzGueV5T7WvYsp2FWCnnkcuFUykPVVWIS5E8HVIxJcxHz58/Kb6aD9E+E4Iagk0IeM1xgTd8sP515IIYUKE+d/n/FOAAQBFijsMnSt6EwAAAABJRU5ErkJggg==",
			press : function(oControlEvent){
				that._oldColor = that.getBackgroundColor();
				that._tp.destroyContent();
				that._tp.destroyButtons();
				try{
				var cs = "rgba(" + 
					that.hexToR((that.getBackgroundColor())?that.getBackgroundColor():"#FFFFFF")+","+
					that.hexToG((that.getBackgroundColor())?that.getBackgroundColor():"#FFFFFF")+","+
					that.hexToB((that.getBackgroundColor())?that.getBackgroundColor():"#FFFFFF")+","+
					that.getAlpha()+")";
					that._tp.addContent(
						new org.scn.community.aps.ColorPickerUI5({
							//colorString : (that.getBackgroundColor())?that.getBackgroundColor():"#FFFFFF",
							showAlpha : that.getShowAlpha(),
							colorString : cs,
							change : function(oControlEvent){
								var alpha = oControlEvent.getParameter("alpha");
								var color = oControlEvent.getParameter("hex");
								if(!color) color = that.getBackgroundColor();
								if(alpha==null) alpha = 1;
								that.setBackgroundColor(color);
								that.setAlpha(alpha);
							}
						})
					);
				}catch(e){
					alert(e);
				}
				that._tp.addButton(new sap.ui.commons.Button({
					text : "Ok",
					press : function(oControlEvent){
						that._tp.close(false);
						that._tp.fireClose();
					}
				}));
				that._tp.addButton(new sap.ui.commons.Button({
					text : "Cancel",
					press : function(oControlEvent){
						that.setBackgroundColor(that._oldColor);
						that._tp.close(false);
						that._tp.fireClose();
					}
				}));
				that._tp.open(
					sap.ui.core.Popup.Dock.CenterTop, sap.ui.core.Popup.Dock.CenterBottom
				);
			}
		});
		this._colorTextBox = new org.scn.community.aps.TextFieldMask({
			mask : "(?:#|0x)?(?:[0-9A-F]{2}){3,4}",
			method : "exec",
			value : this.getBackgroundColor(),
			tooltip : "Color Hex Code",
			width : "75px",
			change : function(){
				var v = this.getValue();
				that.setBackgroundColor(v);
				this.$().css({"background-color" : v});
			}
		});
		this._alphaBox = new sap.ui.commons.TextField({
			tooltip : "Opacity (%)",
			width : "50px",
			editable : false
		});
		
		this._ratioBox =  new sap.ui.commons.Slider({
			tooltip: 'Gradient Stop',
			//width: '100%',
			min: this._ratioMin,
			max: 100,
			//value: 200,
			totalUnits: 5,
			smallStepWidth: 5,
			stepLabels : true,
			change : function(){
				var r = this.getValue();
				that._ratio = r;
				that.fireRatioChange();
			}
		});
		this._insertBeforeButton = new sap.ui.commons.Button({
			icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACZSURBVDhPY1yzZjMDKQCk4azxZCiPEDA+m8sEZRINaK+BLE+7u/tAeYTAzp1bBoOneZcx8s4BIQiXBYiBLoNwsINvDBMz4vJ7F0F4IA24PA039devXyDuRBAXpAEPAJoNUV0Z7QYk26fvwqvhKwPEJUDVQKUQMXyefpX2H4gYPkG5n2v/rzHbTDimQ075gqgPDGvcNjMwMAAAveg31dg0HpIAAAAASUVORK5CYII=",
			tooltip : "Insert Before"
		});
		this._insertBeforeButton.attachPress(function(oControlEvent){
			this.fireInsertBeforeClicked();
		},this);
		this._insertAfterButton = new sap.ui.commons.Button({
			icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACRSURBVDhPY1yzZjMDKQCkwd3dB8ojBHbu3MIEZRINaK9hZHiadxkj7xwQgnBZgBjoMggHO/jGMDEjLr93EYQH0nDWeDKEgwbaN+yCMH79+gUkeSeCLAFpwAOAZkNUV0a7Acn26bvwavjKAHEJUDVQKUQMn6eB6kAGf4JxM93WmG0mHNMhp3xB1AeGNW6bGRgYAHnXNiTeec8GAAAAAElFTkSuQmCC",
			tooltip : "Add After"
		});
		this._insertAfterButton.attachPress(function(oControlEvent){
			this.fireInsertAfterClicked();
		},this);
		this._removeButton = new sap.ui.commons.Button({
			icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA3SURBVDhPY1yzZjMDKQCkwd3dB8ojBHbu3MIEZRINaK+BLE87rlgK5REC+yOih4unR1hMMzAAADMQF2dN9VQWAAAAAElFTkSuQmCC",
			tooltip : "Delete"
		});
		this._removeButton.attachPress(function(oControlEvent){
			this.fireRemoveClicked();
		},this);
		this._topRow = new sap.ui.commons.layout.HorizontalLayout();
		this.addContent(this._topRow);
		this._tp =  new sap.ui.ux3.ToolPopup({
			modal : true,
			opener : this,
			close : function(oControlEvent){
				this.destroyContent();
				this.destroyButtons();
			}
		});
	},
	renderer : {}
});
