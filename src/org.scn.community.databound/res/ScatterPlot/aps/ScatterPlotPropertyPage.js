sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.ScatterPlotPropertyPage", function() {
	var that = this;
	this.styleCSS = function(s){
		if(s===undefined){
			return this._styleCSS;
		}else{
			this.txtStyleCSS.setValue(this._styleCSS);
			return this;
		}
	};
	/**
	 * Design Studio Events
	 */
	this.init = function(){
		var propMetadata = this.callRuntimeHandler("getPropertyMetaData");
		// Build UI
		this.content = new sap.ui.commons.TabStrip({
			width : "100%"
		});
		this.metaProps = jQuery.parseJSON(propMetadata);
		this.props = {};
		try{
		for(var prop in this.metaProps){
			var property = this.metaProps[prop].name;
			var propertyOptions = this.metaProps[prop].opts;
			var apsControl = propertyOptions.apsControl;
			var category = propertyOptions.cat || "etc";
			if(!this["layout_"+category]){
				this["layout_"+category] = new sap.ui.commons.layout.VerticalLayout({
					width : "100%"
				});
				this.content.createTab(category,this["layout_"+category]);
			}
			if(!this[property]+"xx"){
				this.props[property] = {
					value : null
				};
				// Step 1, create getter/setter
				this[property] = function(property,apsControl){
					return function(value){
						if(value===undefined){
							return this.props[property].value;
						}else{
							if(this.props[property].onSet) alert(this.props[property].onSet);
							this.props[property].value = value;
							if(apsControl=="text" || !apsControl){
								this["cmp_"+property].setValue(value);	
							}
							if(apsControl=="textbox"){
								this["cmp_"+property].setValue(value);	
							}
							if(apsControl=="checkbox"){
								this["cmp_"+property].setChecked(Boolean(value));	
							}
							if(apsControl=="spinner"){
								this["cmp_"+property].setValue(value);
							}
							if(apsControl=="palette"){
								this["cmp_"+property].setColors(value);
							}
							if(apsControl=="combobox"){
								this["cmp_"+property].setSelectedKey(value);
							}
							if(apsControl=="color"){
								this["cmp_"+property].setBackgroundColor(value);
							}
							return this;
						}
					};
				}(property,apsControl);
				// Step 2, create component event handler
				var f = function(property,apsControl){
					return function(oControlEvent){
						var newValue;
						if(apsControl=="text" || apsControl==null){
							newValue = oControlEvent.getSource().getValue();
						}
						if(apsControl=="textbox"){
							newValue = oControlEvent.getSource().getValue();
						}
						if(apsControl=="checkbox"){
							newValue = oControlEvent.getSource().getChecked();
						}
						if(apsControl=="spinner"){
							newValue = oControlEvent.getSource().getValue();
						}
						if(apsControl=="palette"){
							newValue = oControlEvent.getSource().getColors();
						}
						if(apsControl=="combobox"){
							newValue = oControlEvent.getSource().getSelectedKey();
						}
						if(apsControl=="color"){
							newValue = oControlEvent.getSource().getBackgroundColor();
						}
						this.props[property].value = newValue;
						this.firePropertiesChanged([property]);
					};
				}(property,apsControl);
				// Step 3, create component
				if(apsControl == "text" || !apsControl){
					this["cmp_"+property] = new sap.ui.commons.TextField({
						value : ""
					});
					this["cmp_"+property].attachChange(f,this);
				}
				if(apsControl == "textbox"){
					this["cmp_"+property] = new sap.ui.commons.TextArea({
						design : sap.ui.core.Design.Monospace,
						rows : 20,
						width : "100%",
						wrapping : sap.ui.core.Wrapping.Off
					});
					this["cmp_"+property].attachChange(f,this);
				}
				if(apsControl == "checkbox"){
					this["cmp_"+property] = new sap.ui.commons.CheckBox();
					this["cmp_"+property].attachChange(f,this);
				}
				if(apsControl == "spinner"){
					this["cmp_"+property] = new org.scn.community.aps.Spinner({
						min : 0,
						max : 100
					 });
					this["cmp_"+property].attachValueChange(f,this);
				}
				if(apsControl == "combobox"){
					this["cmp_"+property] = new sap.ui.commons.ComboBox({});
					if(propertyOptions.options && propertyOptions.options.length>0){
						for(var i=0;i<propertyOptions.options.length;i++){
							var option = propertyOptions.options[i];
							this["cmp_"+property].addItem(new sap.ui.core.ListItem({
								key : option.key,
								text : option.text || option.key
							 }));
						}
					}
					this["cmp_"+property].attachChange(f,this);
				}
				if(apsControl == "palette"){
					this["cmp_"+property] = new org.scn.community.aps.ColorBuilder({
						width : "100%",
						title : new sap.ui.commons.Title({
							text: propertyOptions.desc
						}),
						tooltip: this.metaProps[prop].tooltip,
						showCollapseIcon : false,
						showAlpha : false,
						showRatios : false
					});
					this["cmp_"+property].attachColorChange(f,this);
				}
				if(apsControl == "color"){
					this["cmp_"+property] = new org.scn.community.aps.ColorPicker({
						showAlpha : false
					});
					this["cmp_"+property].attachColorChange(f,this);
				}
				// Step 4, add control to layout
				//etcLayout.addContent(this.hLabel(property,this["cmp_"+property]));
				this["layout_"+category].addContent(this.hLabel(propertyOptions.desc,this["cmp_"+property]));
			}
			
		}
		}catch(e){
			alert(e);
		}
		this.content.placeAt("content");
	};
	this.hLabel = function(label,component){
		var hLayout = new sap.ui.commons.layout.HorizontalLayout({})
		hLayout.addContent(new sap.ui.commons.TextView({ text : label, width : "150px"}));
		hLayout.addContent(component);
		return hLayout;
	}
});