sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.geovis.MapsPropertyPage", function() {
	var that = this;
	// Create storage, getters and setters for properties
	this.cProps = new ComponentProperties({
		propSheet : this
	});
	this._properties = this.cProps.properties;
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
	// Render Categories
	for(cat in this.cProps.categories){
		if(!this.cProps.categories[cat].children) this.cProps.categories[cat].children = [];
		this.cProps.categories[cat].page = new sap.ui.commons.layout.VerticalLayout({ width : "100%"});
		this.cProps.categories[cat].strip = new sap.ui.commons.Toolbar({ });
		this.cProps.categories[cat].layout = new sap.ui.commons.layout.VerticalLayout({ width : "100%"});
		this.cProps.categories[cat].page.addContent(this.cProps.categories[cat].strip);
		this.cProps.categories[cat].page.addContent(this.cProps.categories[cat].layout);
		// Main Button Event
		this.cProps.categories[cat].button = new sap.ui.commons.Button({
			text : this.cProps.categories[cat].label,
			tooltip : this.cProps.categories[cat].label,
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
					//that.colorMainIconStrip(occ);
					//that.mainNav.to(p);
				};
			}(this.cProps.categories[cat])
		});
		//if(this.cProps.categories[cat].icon) this.cProps.categories[cat].button.setIcon(this.cProps.categories[cat].icon);
		this.mainIconStrip.addItem(this.cProps.categories[cat].button);
		// Go through sub-categories
		for(var i=0;i<this.cProps.categories[cat].children.length;i++){
			var child = this.cProps.categories[cat].children[i];
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
				}(child,this.cProps.categories[cat])
			});
			this.cProps.categories[cat].strip.addItem(child.stripButton);
			child.layout = new sap.ui.commons.layout.VerticalLayout({
				width : "100%"
				//noDataText : "No properties for this chart type apply in this category."
			});
			// Set initial tab
			if(i==0) {
				this.cProps.categories[cat].lastButtonClicked = child.stripButton;
				child.stripButton.setStyle(sap.ui.commons.ButtonStyle.Accept);
				this.cProps.categories[cat].layout.addContent(child.layout);
			}
		}
	}
	// Default to Basics Tab
	this.cProps.categories.basics.button.setStyle(sap.ui.commons.ButtonStyle.Accept);
	that.mainLayout.addContent(this.cProps.categories.basics.page);
	
	/**
	 * Called by SDK when component selected during design time.
	 */
	this.componentSelected = function(){
		this.updateProps("Component Selected");
	};
	
	this.getChartByKey = function(key){
		var chartConfig = this._properties.chartType.component.getChartConfig();
		for(var i=0;i<chartConfig.length;i++){
			if(chartConfig[i].key==key) return chartConfig[i];
		}
		return null;
	};
	this.chartIn = function(a){
		 var ct = this.chartType();
		 	for(var i=0;i<a.length;i++) if(a[i]==ct) return true;
		 return false;
	};
	this.isRelevant = function(prop){
		return true;		// Because maps
		try{
			// See if we care
			if(!this._chkRelevance.getChecked()) return true;
			var chartKey = this.chartType();
			if(!chartKey) return false;
			// See if it's a valid property
			var p = this._properties[prop];
			if(!p) {
				// alert(prop + " not found.");
				return false;
			}
			// Grab chart metadata
			var chartMeta = this.getChartByKey(chartKey);
			// If it's invalid, bail out false
			if(chartMeta==null) {
				// alert("Chart Metadata not found!" + this.chartType());
				return false;
			}
			var ct = chartMeta.type;
			// Assume at this point it's relevant unless we hit requirements
			var relevant = true;
			// Check chart engine version
			if(p.engines && p.engines.length>0){
				for(var i=0;i<p.engines.length;i++){
					if(p.engines[i]==this.engine) return true;
				}
				return false;
			}
			if(p.charts && p.charts.length>0){
				for(var i=0;i<p.charts.length;i++){
					if(p.charts[i]==chartKey || p.charts[i]=="All") return true;
				}
				return false;
			};
			if(p.reqs && p.reqs.length>0){
				var attrs = chartMeta.attrs;
				//alert(JSON.stringify(attrs));
				// Loop thru requirements
				for(var i=0;i<p.reqs.length;i++){
					var match = false;
					var req = p.reqs[i];
					// Loop thru chart attributes
					if(attrs && attrs.length>0){
						for(var j=0;j<attrs.length;j++){
							// Requirement fufilled.
							if(attrs[j]==req) match = true;
						}
					}
					if(!match) relevant = false;
				}
			}
			return relevant;
		}catch(e){
			alert(e);
		}
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
	/**
	 * Debugging
	 */
	this.writeLog = function(s){
		// this.callRuntimeHandler("writeLog",s);
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
		 * For reasons unknown, must pull metadata over as JSON string-serialized object with a callRuntimeHandler
		 * (Design Studio 1.2 SP1, SP2 and 1.3)
		 */
		var strMetadata;
		// Get Geocoder from designtime.
		var strGeoCache = this.callRuntimeHandler("getGeoCoderCacheAsString");
		if(this.geoCodeCache()!=strGeoCache){
			this._properties.geoCodeCache.component.setValue(strGeoCache);
			this._geoCache = strGeoCache;
			this.firePropertiesChanged(["geoCodeCache"]);
		}
		strData = this.callRuntimeHandler("getDataAsString");
		this._data = null;
		if (strData) {
			try{
				this._data = jQuery.parseJSON(strData);	
			}catch(e){
				alert("Problem reading data:\n\n" + strData);
			}
		}else{
			
		}
		if (this._data && this._data.dimensions && this._data.dimensions.length>0) {
			this._properties.layerConfig.component.setDsmetadata(this._data);
			this._properties.geoHierarchy.component.setDsmetadata(this._data);
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
		org_scn_community_geovis.mode = "aps";
		org_scn_community_geovis.resourcePrefix = "/aad/zen/mimes/sdk_include/org.scn.community.geovis/";
		try{
			this.mainPage.placeAt("content");
			this.writeLog("Property Sheet Initialized.");	
			this.renderUI("init");
		}catch(e){
			alert(e);
		}
	};
	/**
	 * RenderUI called when certain properties are changed
	 */
	this.renderUI = function(reason){
		var that = this;
		var title = "Maps Properties";
		this.mainPage.setText(title);
		
		//this.writeLog("UI Render: [" + this.mapType() +"] - " + reason);
		try{		
			// this._properties.dataSetConfig.component.setChartType(this.chartType());	
			// Render all Layouts from property config stucture (Take 2)
			for(category in this.cProps.categories){
				var cat = this.cProps.categories[category];
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
						if(this.isRelevant(prop)) {
							entries++;
							child.layout.addContent(this.makeListItem(this._properties[prop]));
						}
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
	 * Renders a sap.m List Item entry
	 */
	this.makeListItem = function(prop){
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
		var labelComponent = new sap.ui.commons.Link({
			width : "200px",
			text : label
		});
		if(tooltip){
			labelComponent.setEnabled(true);
			labelComponent.attachPress(function(tt){
				return function(occ){
					var p = new sap.ui.ux3.ToolPopup({
						//modal : true,
						autoClose : true,
						maxWidth : "80%",
						opener : labelComponent,
						close : function(oControlEvent){
							this.destroyContent();
							this.destroyButtons();
						}
					});
					var pHelp = new sap.ui.commons.TextView({
						text : tt
					});
					var pOk = new sap.ui.commons.Button({
						text : "Ok"
					});
					pOk.attachPress(function(occ){
						p.close();
					});
					p.addContent(pHelp);
					p.addButton(pOk);
					p.open(
						sap.ui.core.Popup.Dock.EndTop, sap.ui.core.Popup.Dock.EndBottom
					);
				};
			}(tooltip));
		}else{
			labelComponent.setEnabled(false);
		}
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