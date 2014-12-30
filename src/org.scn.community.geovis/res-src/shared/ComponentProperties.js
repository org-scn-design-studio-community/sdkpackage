/**
 * Component Property/Metadata Configuration for APS and Component
 */
var ComponentProperties = function(opts){
	var componentRef = opts.componentRef;	// Component side
	var propSheet = opts.propSheet;			// APS side
	/*
	 * Category APS layout - Probably kill this.
	 */
	var categories = {
		basics : {
			label : "Basics",
			icon : "",
			children : [
			   {
				   label : "Basics",
				   props : ["mapTitle","tileJSON","zoomControl","defaultLocation","zoom"]
			   }
			]
		},
		hier : {
			label : "Geohierarchies",
			icon : "",
			children : [
			  {
			     label : "Geohierarchies",
			     props : ["geoHierarchy"]
			  }
			]
		},
		geo : {
			label : "Layers",
			icon : "",
			children : [
			  {
			     label : "Layers",
			     props : ["layerConfig"]
			  }
			]
		},
		geoCoding : {
			label : "Geocoding",
			icon : "",
			children : [
			     {
			    	 label : "Cache",
			    	 props : ["geoCodeCache"]
			     }
			]
		}
	};
	var properties = {
		mapTitle : {
			label : "Title",
			tooltip : "Title of the map.",
			charts : ["All"],
			afterChange : function(){},
			afterSetAPS : function(newValue){},
			component : "apsTextInput"
		},
		tileJSON : {
			label : "Tileset Configuration",
			tooltip : "Tileset Configuration",
			charts : ["All"],
			afterChange : function(){},
			afterSetAPS : function(newValue){},
			component : "apsTileJSON"
		},
		zoomControl : {
			label : "Show Zoom Control",
			tooltip : "Whether to show Zoom Control",
			component : "apsCheckBox"
		},
		defaultLocation : {
			label : "Default Location",
			tooltip : "Default location of the map.",
			afterChange : function(){},
			afterSetAPS : function(newValue){},
			component : "apsGeoLookupLocal"
		},
		zoom : {
			label : "Zoom Level (0-22)",
			tooltip : "Default Zoom Level",
			component : "apsSlider",
			componentOptions : {
				min : 0,
				max : 22
			}
		},
		layerConfig : {
			label : "Layers",
			tooltip : "Map Layers",
			dsOnly : true,
			component : "apsGeoLayers",
			type : "configuration",
			afterChange : function(){
				
			},
			afterSetAPS : function(){
				
			}
		},
		geoHierarchy : {
			label : "Geohierarchies",
			tooltip : "Maintain Geohierarchies",
			dsOnly : true,
			component : "apsGeoHierarchy",
			type : "configuration",
			afterChange : function(){
				
			},
			afterSetAPS : function(newValue){
				propSheet._properties.layerConfig.component.setHierarchies(jQuery.parseJSON(newValue));
			}
		},
		geoCodeCache : {
			label : "Geocoder Cache",
			component : "apsGeoCache",
			noSetterGetter : true
		},
	};
	var propertyInstances = {};
	for (var propertyConfig in properties){
		var config = properties[propertyConfig];
		config.propertyName = propertyConfig;
		config.propSheet = opts.propSheet;
		propertyInstances[propertyConfig] = new DesignStudioProperty(config);
		if(propSheet){	// Property Sheet Design time - Create setters and getters
			if(!propertyInstances[propertyConfig].noPropertySheet){
				propSheet[propertyConfig] = function(propertyConfig){
					return function(value){
						if(value===undefined){
							/*
							 * Design Studio Getter
							 */
							var v = null;
							if(propSheet._properties[propertyConfig].value == null){
								if(propSheet._properties[propertyConfig].nullHandler) {
									v = propSheet._properties[propertyConfig].nullHandler();
								}
							}else{
								v = propSheet._properties[propertyConfig].value;
							}
							return v;
						}else{
							/*
							 * Design Studio Setter
							 */
							if(propSheet._properties[propertyConfig].value!=value){
									// Step 1 - Property Sheet DS Proxy sets the value.  Store the new value.
								try{	
									propSheet._properties[propertyConfig].value = value;
									// Step 2 - Update Property Sheet Component
								}catch(e){
									alert("An error happened while trying to set property " + propertyConfig + "\n\n" + e);
								}
								try{
									propSheet._properties[propertyConfig].updateComponent(value);
									// Step 3 - Any post-property change logic
								}catch(e){
									alert("An error happened while trying to update component for property " + propertyConfig + "\n\n" + e);
								}
								if(propSheet._properties[propertyConfig].afterSetAPS) 
									try{ 
										propSheet._properties[propertyConfig].afterSetAPS(value);
									}catch(e){
										alert("An error occured after Property Sheet set on property" + propertyConfig + ":\n\n"+e); 
									}
								
							}
							// Final Step - Return self for required methodchaining.
							return propSheet;
						}
					};
				}(propertyConfig);
			}
		}		
	}
	return {
		properties : propertyInstances,
		categories : categories
	};
};