/**
 * Complex Property Handler
 */
define(["./palette","./segmentedbutton","./spinner"], function () {
	/**
	 * Create UI5 Extension
	 */
	new sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.ComplexItem",{
		_requiredModules : [
		    "../../org.scn.community.shared/aps/measureselector"
		],
		_config : {
			/* Empty */
		},
		metadata : {
			properties : {
				value : {
					type : "object"
				}
			},
			events : {
				valueChange : {}
			}
		},
		updateProperty : function(value,propertyName) {
			if(value===undefined) {
				delete this._config[propertyName];
			}else{
				this._config[propertyName] = value;
			}
			this.fireValueChange();
		},
		setValue : function(o){
			this._config = o;
			this.updateComponents();
		},
		getValue : function(){
			return this._config;
		},
		hLabel : function(label,component){
			if(component instanceof org.scn.community.aps.ColorBuilder){
				return component;
			}else{
				var hLayout = new sap.ui.commons.layout.HorizontalLayout({})
				hLayout.addContent(new sap.ui.commons.Label({ text : label }));
				hLayout.addContent(component);	
				return hLayout;			
			}
		},
		attachListeners : function(){
			var that = this;
			require(this._requiredModules,function(){
				for(var comp in that.cmps){
					var component = that.cmps[comp];
					try{
						if(component instanceof sap.ui.commons.TextField 
							&& !(component instanceof sap.ui.commons.ComboBox)){
							component.attachChange(function(comp){return function(oControlEvent){
								var value = oControlEvent.getSource().getValue();
								if(value==""||value==null) value = undefined;
								that.updateProperty(value,comp);
							}}(comp),that);
						}
						if(component instanceof org.scn.community.aps.MeasureSelector){
							component.attachValueChange(function(comp){return function(oControlEvent){
								var value = oControlEvent.getSource().getValue();
								that.updateProperty(value,comp);
							};}(comp),that);
						}
						if(component instanceof sap.ui.commons.ComboBox){
							component.attachChange(function(comp){return function(oControlEvent){
								var value = oControlEvent.getSource().getSelectedKey();
								if(value == "") value = undefined;
								that.updateProperty(value,comp);
							}}(comp),that);
						}
						if(component instanceof org.scn.community.aps.SegmentedButton){
							component.attachKeyChange(function(comp){return function(oControlEvent){
								var value = oControlEvent.getSource().getSelectedKey();
								if(value == "") value = undefined;
								that.updateProperty(value,comp);
							}}(comp),that);
						}
						if(component instanceof sap.ui.commons.CheckBox){
							component.attachChange(function(comp){return function(oControlEvent){
								var value = oControlEvent.getSource().getChecked();
								that.updateProperty(value,comp);
							}}(comp),that);
						}
						if(component instanceof org.scn.community.aps.ColorPicker){
							component.attachColorChange(function(comp){return function(oControlEvent){
								var value = oControlEvent.getSource().getBackgroundColor();
								if(value=="") value = undefined;
								that.updateProperty(value,comp);
							}}(comp),that);
						}
						if(component instanceof org.scn.community.aps.ColorBuilder){
							component.attachColorChange(function(comp){return function(oControlEvent){
								var csv = oControlEvent.getSource().getColors();
								var value = [];
								if(csv && csv != "") value = csv.split(",");
								if(!value || !value.length || value.length == 0){
									value = undefined;
								}
								that.updateProperty(value,comp);
							}}(comp),that);
						}
						if(component instanceof org.scn.community.aps.Spinner){
							component.attachValueChange(function(comp){return function(oControlEvent){
								var value = parseFloat(oControlEvent.getSource().getValue());
								if(isNaN(value)) value = undefined;
								that.updateProperty(value,comp);
							}}(comp),that);
						}
					}catch(e){
						// Muzzle.
					}
				}
			});
		},
		createComponents : function(){
			// Override
		},
		layoutComponents : function(){
			this.removeAllContent();
			this.fieldLayout.removeAllContent();
			this.addContent(this.fieldLayout);
			try{
				for(var i=0;i<this.layout.length;i++){
					var item = this.layout[i];
					if(!item.tooltip){
						if(this.tooltips && this.tooltips[item.comp]) item.tooltip = this.tooltips[item.comp];
					}
					if(item && item.desc ){
						this.fieldLayout.addContent(this.hLabel(item.desc,this.cmps[item.comp]));
					}
				}
			}catch(e){
				alert("Error on layout:\n\n"+e);
			}
			
		},
		init : function(){
			this.fieldLayout = new sap.ui.commons.layout.VerticalLayout({ });
			this.addContent(this.fieldLayout);
			this.sections = {};
			this.cmps = {};
			this.cmpChange = {};
			this.layout = [];
			this.createComponents();
			this.layoutComponents();
			this.attachListeners();
		},
		updateComponents : function(){
			var that = this;
			require(this._requiredModules,function(){
				for(var comp in that.cmps){
					var component = that.cmps[comp];
						try{
							if(component instanceof org.scn.community.aps.SegmentedButton){
								if(that._config[comp]!=undefined) component.setSelectedKey(that._config[comp]);
							}
							if(component instanceof sap.ui.commons.TextField && !(component instanceof sap.ui.commons.ComboBox)){
								if(that._config[comp]!=undefined) component.setValue(that._config[comp]);
							}
							if(component instanceof org.scn.community.aps.MeasureSelector){
								if(that._config[comp]!=undefined) component.setValue(that._config[comp]);
							}
							if(component instanceof sap.ui.commons.ComboBox){
								if(that._config[comp]!=undefined) component.setSelectedKey(that._config[comp]);
							}
							if(component instanceof sap.ui.commons.CheckBox){
								if(that._config[comp]!= undefined) component.setChecked(that._config[comp]);
							}
							if(component instanceof org.scn.community.aps.ColorPicker){
								if(that._config[comp]!=undefined) component.setBackgroundColor(that._config[comp]);
							}
							if(component instanceof org.scn.community.aps.ColorBuilder){
								if(that._config[comp]!=undefined) if(that._config[comp]) component.setColors((that._config[comp] || "").join(","));
							}
							if(component instanceof org.scn.community.aps.Spinner){
								if(that._config[comp]!=undefined) component.setValue(that._config[comp]);
							}
						}catch(e){
							alert(e + comp);
						}
					}
			});
		},
		renderer : {}
	});
});