/**
 * Move this to its own include later.
 * 
 */
function constructAPSProperties(opts){
	var propSheet = opts.propSheet;			// APS side
	var properties = opts.properties;		// Component and APS
	var propertyInstances = {};
	for (var propertyConfig in properties){
		var config = properties[propertyConfig];
		config.propertyName = propertyConfig;
		config.propSheet = opts.propSheet;
		config.propertyInstances = propertyInstances;
		// Attach setter/getter function to property sheet if no flag otherwise.
		if(!config.noPropertySheet){
			// Construct Property Instance (contains config and UI5 component)
			propertyInstances[propertyConfig] = new DesignStudioPropertyInstance(config);
			// Construct Setter/Getter and attach to property sheet
			propSheet[propertyConfig] = function(propertyConfig){
				return function(value){
					if(value===undefined){
						/*
						 * Design Studio PROPERTY SHEET Getter
						 */
						var v = null;
						if(propertyInstances[propertyConfig].value == null){
							if(propertyInstances[propertyConfig].nullHandler) {
								v = propertyInstances[propertyConfig].nullHandler();
							}
						}else{
							v = propertyInstances[propertyConfig].value;
						}
						return v;
					}else{
						/*
						 * Design Studio PROPERTY SHEET Setter
						 */
						//if(propSheet._properties[propertyConfig].value!=value){
							// Step 1 - Property Sheet DS Proxy sets the value.  Store the new value.
							try{	
								propertyInstances[propertyConfig].value = value;
							}catch(e){
								alert("An error happened while trying to set property " + propertyConfig + "\n\n" + e);
							}
							// Step 2 - Update Property Sheet Component
							try{
								propertyInstances[propertyConfig].updateComponent(value);
							}catch(e){
								alert("An error happened while trying to update PROPERTY SHEET component for property " + propertyConfig + "\n\n" + e);
							}
							// Step 3 - Any post-property change logic for UI components, for instance
							if(propertyInstances[propertyConfig].afterSetAPS) propertyInstances[propertyConfig].afterSetAPS(value); 
						//}
						// Final Step - Return self for required methodchaining.
						return propSheet;
					}
				};
			}(propertyConfig);
		}
	}
	return propertyInstances;
}

sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.geovis.MapsPropertyPage", function() {
	var that = this;
	/*
	 * Create storage, getters and setters for properties
	 */ 
	this._propertyInstances = constructAPSProperties({
		properties : getDesignStudioProperties(),			// from properties.js
		propSheet : this
	});
	/*
	 * Custom AfterSet logic after component properties are set from Java or Component Change
	 */
	this._propertyInstances.geoHierarchy.afterSetAPS = function(v){
		// Update Layer Property with new Hierarchy Property config
		that._propertyInstances.layerConfig.component.setHierarchies(jQuery.parseJSON(v));
	};
	/*
	 * Instantiate UI5 Property Sheet Components
	 */
	// Main Property Page
	this.mainIconStrip = new sap.ui.commons.Toolbar({
		rightItems : [ ]		// Reserve for maybe some map property component
	});
	this.mainLayout = new sap.ui.commons.layout.VerticalLayout({
		width : "100%"
	});
	
	this.mainPage = new sap.ui.commons.Panel({
		width : "100%",
	    text: "Maps Properties",
	    showCollapseIcon : false,
	    applyContentPadding : false,
	    content : [this.mainIconStrip,this.mainLayout]
	});	
	/*
	 *  Dynamically Decorate Categories based on metadata defined in categories.js with UI5 refs
	 *  Might switch this to a true tabstrip now that DS 1.4 has better UI5 Libs.
	 */
	for(cat in aps_categories){
		if(!aps_categories[cat].children) aps_categories[cat].children = [];
		aps_categories[cat].page = new sap.ui.commons.layout.VerticalLayout({ width : "100%"});
		aps_categories[cat].strip = new sap.ui.commons.Toolbar({ });
		aps_categories[cat].layout = new sap.ui.commons.layout.VerticalLayout({ width : "100%"});
		aps_categories[cat].page.addContent(aps_categories[cat].strip);
		aps_categories[cat].page.addContent(aps_categories[cat].layout);
		// Main Button Event
		aps_categories[cat].button = new sap.ui.commons.Button({
			text : aps_categories[cat].label,
			tooltip : aps_categories[cat].label,
			press : function(cat){
				return function(occ){
					var btns = that.mainIconStrip.getItems();
					for(var i=0;i<btns.length;i++){
						if(btns[i]==occ.getSource()){
							btns[i].setStyle(sap.ui.commons.ButtonStyle.Accept);
						}else{
							btns[i].setStyle(sap.ui.commons.ButtonStyle.Default);
						}
					}
					that.mainLayout.removeAllContent();
					that.mainLayout.addContent(cat.page);
				};
			}(aps_categories[cat])
		});
		this.mainIconStrip.addItem(aps_categories[cat].button);
		// Go through sub-categories
		for(var i=0;i<aps_categories[cat].children.length;i++){
			var child = aps_categories[cat].children[i];
			// Button for main toolbar
			child.stripButton = new sap.ui.commons.Button({
				text : child.label,
				press : function(ch,cat){
					return function(occ){
						var btns = cat.strip.getItems();
						for(var i=0;i<btns.length;i++){
							if(btns[i]==occ.getSource()){
								btns[i].setStyle(sap.ui.commons.ButtonStyle.Accept);
							}else{
								btns[i].setStyle(sap.ui.commons.ButtonStyle.Default);
							}
						}
						cat.layout.removeAllContent();
						cat.layout.addContent(ch.layout);
					};
				}(child,aps_categories[cat])
			});
			aps_categories[cat].strip.addItem(child.stripButton);
			child.layout = new sap.ui.commons.layout.VerticalLayout({
				width : "100%"
			});
			// Set initial tab
			if(i==0) {
				aps_categories[cat].lastButtonClicked = child.stripButton;
				child.stripButton.setStyle(sap.ui.commons.ButtonStyle.Accept);
				aps_categories[cat].layout.addContent(child.layout);
			}
		}
	}
	// Default to Basics Tab
	aps_categories.basics.button.setStyle(sap.ui.commons.ButtonStyle.Accept);
	that.mainLayout.addContent(aps_categories.basics.page);
	
	/**
	 * Called by SDK when component selected during design time.
	 */
	this.componentSelected = function(){
		this.updateProps("Component Selected");
	};
	/**
	 * Highlight the main button icon pressed last
	 */
	this.colorMainIconStrip = function(occ){
		var buttons = that.mainIconStrip.getContentMiddle();
		for(var i=0;i<buttons.length;i++){
			buttons[i].setType(sap.m.ButtonType.Transparent);
		}
		try{
			occ.getSource().setType(sap.m.ButtonType.Emphasized);
		}catch(e){
			alert(e);
		}
	};
	this.geoCodeCache = function(s){
		if(s===undefined){
			return this._geoCache;
		}else{
			// this._geoCache = s;		-- Do not take from Property Sheet, we'll get from Designtime
			return this;
		}
	};
	this.updateDataboundComps = function(){
		/*
		 * For racing conditions, must pull metadata over as JSON string-serialized object with a callRuntimeHandler
		 * because the property setter for metadata may not have been called yet.
		 * (Design Studio 1.2 SP1, SP2 and 1.3 and 1.4)
		 */
		var strData = this.callRuntimeHandler("getDataAsString");
		this._data = null;
		if (strData) {
			try{
				this._data = jQuery.parseJSON(strData);	
			}catch(e){
				alert("Problem reading data:\n\n" + strData);
			}
		}else{
			alert("Component no longer responsive.  Something is broken.  Try reloading your BI App.");
		}
		if (this._data && this._data.dimensions && this._data.dimensions.length>0) {
			this._propertyInstances.layerConfig.component.setDsmetadata(this._data);
			this._propertyInstances.geoHierarchy.component.setDsmetadata(this._data);
		}
	};
	/**
	 * Update DS-reliant properties because metadata can change from Datasource modifications outside of property sheet
	 * WARNING: Do not update a property that would then call this function again or suffer an infinite loop.
	 */
	this.updateProps = function(reason){
		this.renderUI("Updated Props " + reason);
		this.updateDataboundComps();
	};
	
	/**
	 * Init called on first rendering of page.
	 */
	this.init = function() {
		try{
			this.mainPage.placeAt("content");
			this.renderUI("init");
		}catch(e){
			alert(e);
		}
		this.updateProps("Initial Load");
	};
	/**
	 * RenderUI called when certain properties are changed
	 */
	this.renderUI = function(reason){
		var that = this;
		var title = "Maps Properties";
		this.mainPage.setText(title);	
		try{		
			// Render all Layouts from property config stucture
			for(category in aps_categories){
				var cat = aps_categories[category];
				// Remove all buttons, add only the ones back that have properties.
				cat.strip.removeAllItems();
				var buttons = 0;
				var buttonFound = false;
				for(var i=0;i<cat.children.length;i++){
					var child = cat.children[i];
					child.layout.removeAllContent();
					var entries = 0;
					if(!child.props) child.props = [];
					for(var j=0;j<child.props.length;j++){
						var prop=child.props[j];
						entries++;
						child.layout.addContent(this.makePropertyEntry(this._propertyInstances[prop]));
					}
					if(entries>0){
						cat.strip.addItem(child.stripButton);
						if(child.stripButton==cat.lastButton) buttonFound = true;
						buttons++;
					}
				}
				if(buttons==0){
					cat.page.removeContent(cat.strip);
				}
				if(buttons==1){
					cat.page.removeContent(cat.strip);
					
				}else{
					cat.page.insertContent(cat.strip,0);
				}
			}
		}catch(e){
			alert(e);
		}
	};
	/**
	 * Renders a property Entry for Sheet
	 * Depending on type of component, some need Labels, some have their own...
	 * Can clean this up more later...
	 */
	this.makePropertyEntry = function(prop){
		var hLayout = new sap.ui.commons.layout.HorizontalLayout({
			
		});
		var compType;
		var component;
		if(prop){
			if(prop.componentType) {
				compType = prop.componentType;
			}else{
				compType = "Unknown";
			}
			if(prop.tooltip) {
				tooltip = prop.tooltip;
			}
			if(prop.label) {
				label = prop.label;
			}else{
				label = "Unknown Label!";
			}
			if(prop.component){
				component = prop.component;
			}else{
				alert("Component not specified:\n\n" + JSON.stringify(prop));
			}
		}else{
			throw "Blank Config passed for " + prop + ".  Exiting.";
			return;
		}
		if(prop.tooltip){
			//label.setTooltip(prop.tooltip);
		}
		var labelComponent = new sap.ui.commons.TextView({
			width : "200px",
			text : label,
			tooltip : prop.tooltip
		});
		
		switch(compType){
			case "apsTextInput":
			case "apsComboBox":
			case "apsColorPicker":
			case "apsSwitch" :
			case "apsGeoLookup" :
			case "apsCheckBox" :
			case "apsSlider":{
				hLayout.addContent(labelComponent);
				hLayout.addContent(component);
				return hLayout;
				break;
			}
			default:{
				return component;
			}
		}
	};
});