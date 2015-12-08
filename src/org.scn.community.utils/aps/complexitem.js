/**
 * Complex Property Handler
 */
define(["./palette","./segmentedbutton","./spinner"], function () {
	/**
	 * Create UI5 Extension
	 */
	new sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.ComplexItem",{
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
			for(var comp in this.cmps){
				var component = this.cmps[comp];
				if(component instanceof sap.ui.commons.TextField 
					&& !(component instanceof sap.ui.commons.ComboBox)){
					component.attachChange(function(comp){return function(oControlEvent){
						var value = oControlEvent.getSource().getValue();
						if(value==""||value==null) value = undefined;
						this.updateProperty(value,comp);
					}}(comp),this);
				}
				if(component instanceof org.scn.community.aps.MeasureSelector){
					component.attachValueChange(function(comp){return function(oControlEvent){
						var value = oControlEvent.getSource().getValue();
						this.updateProperty(value,comp);
					};}(comp),this);
				}
				if(component instanceof sap.ui.commons.ComboBox){
					component.attachChange(function(comp){return function(oControlEvent){
						var value = oControlEvent.getSource().getSelectedKey();
						if(value == "") value = undefined;
						this.updateProperty(value,comp);
					}}(comp),this);
				}
				if(component instanceof org.scn.community.aps.SegmentedButton){
					component.attachKeyChange(function(comp){return function(oControlEvent){
						var value = oControlEvent.getSource().getSelectedKey();
						if(value == "") value = undefined;
						this.updateProperty(value,comp);
					}}(comp),this);
				}
				if(component instanceof sap.ui.commons.CheckBox){
					component.attachChange(function(comp){return function(oControlEvent){
						var value = oControlEvent.getSource().getChecked();
						this.updateProperty(value,comp);
					}}(comp),this);
				}
				if(component instanceof org.scn.community.aps.ColorPicker){
					component.attachColorChange(function(comp){return function(oControlEvent){
						var value = oControlEvent.getSource().getBackgroundColor();
						if(value=="") value = undefined;
						this.updateProperty(value,comp);
					}}(comp),this);
				}
				if(component instanceof org.scn.community.aps.ColorBuilder){
					component.attachColorChange(function(comp){return function(oControlEvent){
						var csv = oControlEvent.getSource().getColors();
						var value = [];
						if(csv && csv != "") value = csv.split(",");
						if(!value || !value.length || value.length == 0){
							value = undefined;
						}
						this.updateProperty(value,comp);
					}}(comp),this);
				}
				if(component instanceof org.scn.community.aps.Spinner){
					component.attachValueChange(function(comp){return function(oControlEvent){
						var value = parseFloat(oControlEvent.getSource().getValue());
						if(isNaN(value)) value = undefined;
						this.updateProperty(value,comp);
					}}(comp),this);
				}
			}
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
			for(var comp in this.cmps){
				var component = this.cmps[comp];
				if(component instanceof org.scn.community.aps.SegmentedButton){
					if(this._config[comp]!=undefined) component.setSelectedKey(this._config[comp]);
				}
				if(component instanceof sap.ui.commons.TextField && !(component instanceof sap.ui.commons.ComboBox)){
					if(this._config[comp]!=undefined) component.setValue(this._config[comp]);
				}
				if(component instanceof org.scn.community.aps.MeasureSelector){
					if(this._config[comp]!=undefined) component.setValue(this._config[comp]);
				}
				if(component instanceof sap.ui.commons.ComboBox){
					if(this._config[comp]!=undefined) component.setSelectedKey(this._config[comp]);
				}
				if(component instanceof sap.ui.commons.CheckBox){
					if(this._config[comp]!= undefined) component.setChecked(this._config[comp]);
				}
				if(component instanceof org.scn.community.aps.ColorPicker){
					if(this._config[comp]!=undefined) component.setBackgroundColor(this._config[comp]);
				}
				if(component instanceof org.scn.community.aps.ColorBuilder){
					if(this._config[comp]!=undefined) if(this._config[comp]) component.setColors((this._config[comp] || "").join(","));
				}
				if(component instanceof org.scn.community.aps.Spinner){
					if(this._config[comp]!=undefined) component.setValue(this._config[comp]);
				}
			}
		},
		renderer : {}
	});
});