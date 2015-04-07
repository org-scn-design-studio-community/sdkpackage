/**
 * Advanced Property Sheet Properties Layout definition
 * 
 * Shouldn't need to namespace since this is sandboxed in APS Browser Pane
 */
var aps_categories = {
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