/**
 * Design Studio Property Instance Factory for APS
 */
var DesignStudioPropertyInstance = function(opts){
	try{
		var propSheet = opts.propSheet;
		/*
		 * Property Sheet Component Factories - Only used on APS side
		 */
		var dsGeoCache = function(componentOptions) {
			var that = this;
			return new org.scn.community.aps.GeoCache({
				tooltip: this.tooltip,
				text : "Geocoder Cache",
				showCollapseIcon : false,
				//width: '100%',
				valueChange : function(oControlEvent){
					var v = String(this.getValue());
					propSheet[that.propertyName](v);
					try{
						propSheet.firePropertiesChanged([that.propertyName]);
					}catch(e){
						alert(e);
					}
				}
			});
		};
		var dsTileJSON = function(componentOptions) {
			var that = this;
			return new org.scn.community.aps.TileJSON({
				tooltip: this.tooltip,
				text : "Tile Provider",
				showCollapseIcon : false,
				width: '100%',
				valueChange : function(oControlEvent){
					var v = String(this.getValue());
					propSheet[that.propertyName](v);
					try{
						propSheet.firePropertiesChanged([that.propertyName]);
					}catch(e){
						alert(e);
					}
				}
			});
		};
		var dsGeoLookup = function(componentOptions) {
			var that = this;
			return new org.scn.community.aps.GeoLookup({
				tooltip: this.tooltip,
				valueChange : function(oControlEvent){
					var v = String(this.getValue());
					propSheet[that.propertyName](v);
					try{
						propSheet.firePropertiesChanged([that.propertyName]);
					}catch(e){
						alert(e);
					}
					
				}
			});
		};
		var dsGeoLookupLocal = function(componentOptions) {
			var that = this;
			return new org.scn.community.aps.GeoLookupLocal({
				tooltip: this.tooltip,
				//height : "300px",
				text : "Map Position",
				showCollapseIcon : false,
				valueChange : function(oControlEvent){
					var v = String(this.getValue());
					propSheet[that.propertyName](v);
					try{
						propSheet.firePropertiesChanged([that.propertyName]);
					}catch(e){
						alert(e);
					}
				}
			});
		};
		var dsGeoLayers = function(componentOptions) {
			var that = this;
			return new org.scn.community.aps.GeoLayers({
				tooltip: this.tooltip,
				//width: '100%',
				valueChange : function(oControlEvent){
					var v = String(this.getValue());
					propSheet[that.propertyName](v);
					propSheet.firePropertiesChanged([that.propertyName]);
				}
			});
		};
		var dsGeoHierarchy = function(componentOptions) {
			var that = this;
			return new org.scn.community.aps.GeoHierarchy({
				tooltip: this.tooltip,
				propSheet : propSheet,
				//width: '100%',
				valueChange : function(oControlEvent){
					var v = String(this.getValue());
					propSheet[that.propertyName](v);
					propSheet.firePropertiesChanged([that.propertyName]);
				}
			});
		};
		// Standard Button
		var dsButton = function(componentOptions){
			var that = this;
			return new sap.ui.commons.Button({
				text : this.label || this.propertyName,
				tooltip : this.tooltip,
				press : function(){
					if(componentOptions && componentOptions.press) componentOptions.press();
				}
			});
		};
		// Standard Text Input Factory
		var dsTextInput = function(componentOptions){
			var that = this;
			return new sap.ui.commons.TextField({
			tooltip : this.tooltip,
			value : that.value,
			change : function(){
				if(this.getValue()!=propSheet[that.propertyName]()){
					propSheet[that.propertyName](this.getValue());
					propSheet.firePropertiesChanged([that.propertyName]);
				}
			}
		});};
		// Standard Text Box Factory
		var dsTextBox = function(componentOptions){
			var that = this;
			return new sap.ui.commons.TextArea({
			tooltip : this.tooltip,
			design : sap.ui.core.Design.Monospace,
			width : "100%",
			value : that.value,
			rows : 5,
			wrapping : sap.ui.core.Wrapping.Off,
			change : function(){
				if(this.getValue()!=propSheet[that.propertyName]()){
					propSheet[that.propertyName](this.getValue());
					propSheet.firePropertiesChanged([that.propertyName]);
				}
			}
		});};
		// Standard Checkbox Factory
		var dsCheckBox = function(componentOptions){
			var that = this;
			return new sap.ui.commons.CheckBox({
				//text : this.label,
				tooltip : this.tooltip,
				change : function(){
					if(this.getChecked()!=propSheet[that.propertyName]()){
						propSheet[that.propertyName](this.getChecked());
						propSheet.firePropertiesChanged([that.propertyName]);
					}
				}
			});
		};
		// Custom ColorPicker Factory
		var dsColorPicker = function(componentOptions){
			var that = this;
			return new org.scn.community.aps.ColorPicker({
				tooltip: this.tooltip,
				propSheet : propSheet,
				showAlpha : componentOptions.showAlpha || false,
				showRatio : componentOptions.showRatio || false,
				colorChange : function(oControlEvent){
					propSheet[that.propertyName](this.getBackgroundColor());
					propSheet.firePropertiesChanged([that.propertyName]);
				},
				alphaChange : function(oControlEvent){
					if(that.alphaProperty) {
						propSheet[that.alphaProperty](Math.ceil(this.getAlpha() * 100),0);
						propSheet.firePropertiesChanged([that.alphaProperty]);
					}else{
						alert("Warning: Alpha changed but no alpha property name set!");
					}
				},
				ratioChange : function(oControlEvent){
					if(that.ratioProperty) {
						propSheet[that.ratioProperty](this.getRatio());
						propSheet.firePropertiesChanged([that.ratioProperty]);
					}else{
						alert("Warning: Ratio changed but no alpha property name set!");
					}
				}
			});
		};	
		// Custom Color Builder Factory
		var dsColorBuilder = function(componentOptions){
			var that = this;
			try{
			var cb = new org.scn.community.aps.ColorBuilder({
				width : "100%",
				title : new sap.ui.commons.Title({
					text: this.label
				}),
				tooltip: this.tooltip,
				showCollapseIcon : false,
				propSheet : propSheet,
				showAlpha : componentOptions.showAlpha || false,
				showRatios : componentOptions.showRatios || false,
				colorChange : function(oControlEvent){
					propSheet[that.propertyName](this.getColors());
					propSheet.firePropertiesChanged([that.propertyName]);
				},
				alphaChange : function(oControlEvent){
					if(that.alphaProperty){
						propSheet[that.alphaProperty](this.getAlphas());
						propSheet.firePropertiesChanged([that.alphaProperty]);
					}
				},
				ratioChange : function(oControlEvent){
					if(that.ratioProperty){
						propSheet[that.ratioProperty](this.getRatios());
						propSheet.firePropertiesChanged([that.ratioProperty]);
					}
				}
			});
			}catch(e){

			}
			return cb;
		};	
		
		// Standard ComboBox Factory
		var dsComboBox = function(componentOptions){
			var that = this;
			var cbo = new sap.ui.commons.ComboBox({
				tooltip : this.tooltip,
				displaySecondaryValues : true,
				change : function(){
					propSheet[that.propertyName](this.getSelectedKey());
					propSheet.firePropertiesChanged([that.propertyName]);			
				}
			});
			if(componentOptions && componentOptions.items){
				var items = componentOptions.items;
				for(var i=0;i<items.length;i++){
					cbo.addItem(new sap.ui.core.ListItem({
						key : items[i].key,
						text: items[i].text,
						additionalText : items[i].text 
					}));
				}
			}
			return cbo;
		};
		
		var dsSlider = function(componentOptions) {
			var that = this;
			return new org.scn.community.aps.Spinner({
				tooltip: this.tooltip,
				min : componentOptions.min || 0,
				max : componentOptions.max || 100,
				valueChange : function(oControlEvent){
					propSheet[that.propertyName](this.getValue());
					propSheet.firePropertiesChanged([that.propertyName]);
				}
			});
		};
		/*
		 * Based on component options, select one of the previously defined component factories.
		 */
		switch(opts.component){
			case "apsTextInput":
				opts.factory = dsTextInput;
				break;
			case "apsTextBox":
				opts.factory = dsTextBox;
				break;
			case "apsButton":
				opts.factory = dsButton;
				break;
			case "apsSwitch":
				opts.factory = dsCheckBox;
				break;
			case "apsCheckBox":
				opts.factory = dsCheckBox;
				break;
			case "apsColorPicker":
				opts.factory = dsColorPicker;
				break;
			case "apsColorBuilder":
				opts.factory = dsColorBuilder;
				break;
			case "apsComboBox":
				opts.factory = dsComboBox;
				break;
			case "apsSlider":
				opts.factory = dsSlider;
				break;
			case "apsGeoCache":
				opts.factory = dsGeoCache;
				break;
			case "apsGeoHierarchy":
				opts.factory = dsGeoHierarchy;
				break;
			case "apsTileJSON":
				opts.factory = dsTileJSON;
				break;
			case "apsGeoLookup":
				opts.factory = dsGeoLookup;
				break;
			case "apsGeoLookupLocal":
				opts.factory = dsGeoLookupLocal;
				break;
			case "apsGeoLayers":
				opts.factory = dsGeoLayers;
				break;
			default:
				opts.factory = null;
				break;
		}
		/*
		 * JSON Object to be returned.
		 * 
		 * componentType - Type of component it is (Checkbox, Text, etc)
		 * properyName - Name of the property (e.g. title)
		 * serialize -
		 * serialized - Serializer function (if any)
		 * reqs
		 * 
		 */
		var returnObj = {
			componentType : opts.component,
			propertyName : opts.propertyName,
			serialize : opts.serialize,
			serializer : opts.serializer,
			reqs : opts.reqs || null,
			type : opts.type,
			value : opts.value || null,
			tooltip : opts.tooltip || "",
			dsOnly : opts.dsOnly || false,
			afterSetAPS : opts.afterSetAPS,
			afterChange : opts.afterChange || function(v){ },
			label : opts.label || opts.propertyName		
		};
		try{
			returnObj.component = (opts.factory)?opts.factory(opts.componentOptions||{}):null;	
		}catch(e){
			alert("fix this");
		}
		/*
		 * Each type of UI5 component can have a different setter method (setSelected, setChecked, setValue, etc)
		 * so abstract it to updateComponent and account for each
		 */
		returnObj.updateComponent = function(v){
			if(opts.component=="apsInvisible") {
				if(opts.afterSetAPS) opts.afterSetAPS(v);
			}
			if(opts.component=="apsTextInput") this.component.setValue(v);
			if(opts.component=="apsTextBox") this.component.setValue(v);
			if(opts.component=="apsSwitch") this.component.setSelected(v);
			if(opts.component=="apsCheckBox") this.component.setChecked(v);
			if(opts.component=="apsColorPicker") this.component.setBackgroundColor(v);
			if(opts.component=="apsColorBuilder") this.component.setColors(v);
			if(opts.component=="apsComboBox") this.component.setSelectedKey(v);
			if(opts.component=="apsSlider") this.component.setValue(parseFloat(v));
			if(opts.component=="apsGeoCache") this.component.setValue(v);
			if(opts.component=="apsTileJSON") this.component.setValue(v);
			if(opts.component=="apsGeoLookup") this.component.setValue(v);
			if(opts.component=="apsGeoLookupLocal") this.component.setValue(v);
			if(opts.component=="apsGeoLayers") this.component.setValue(v);
			if(opts.component=="apsGeoHierarchy") this.component.setValue(v);
			if(opts.component=="apsColorRanges") this.component.setColorRanges(v);
			if(opts.component=="apsButton") this.component.setTooltip(v);
		};
		// Return completed property instance.
		return returnObj;
	}catch(e){
		alert("fix this too");
	}
};