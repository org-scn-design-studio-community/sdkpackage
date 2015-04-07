/**
 * label - Label of Component Property for APS
 * tooltip - Tooltip help for Component Property in APS
 * afterChange - After Change function fired component-side (optional, might remove this)
 * afterSetAPS - Optional function to call after APS Property is updated from Java-initiated setter
 * component - Type of APS Component to use for Property
 * componentOptions - Any further UI5 config that may need to be passed
 * 
 * TODO: Namespace this for reuse for other components
 */
function getDesignStudioProperties() { 
	return {
		data : {
			dsOnly : true
		},
		mapTitle : {
			label : "Title",
			tooltip : "Title of the map.",
			afterChange : function(){},
			component : "apsTextInput"
		},
		tileJSON : {
			label : "Tileset Configuration",
			tooltip : "Tileset Configuration",
			afterChange : function(){},
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
			type : "configuration"
		},
		geoHierarchy : {
			label : "Geohierarchies",
			tooltip : "Maintain Geohierarchies",
			dsOnly : true,
			component : "apsGeoHierarchy",
			type : "configuration"
		},
		geoCodeCache : {
			label : "Geocoding",
			component : "apsGeoCache",
			noSetterGetter : true
		}
	};
};