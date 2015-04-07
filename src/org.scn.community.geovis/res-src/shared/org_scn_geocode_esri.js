/**
 * ESRI ArcGIS Geocoder Adapter
 */
function org_scn_geocode_esri(options){
	org_scn_geocode_base.call(this,options);
}
org_scn_geocode_esri.prototype = new org_scn_geocode_base();
org_scn_geocode_esri.prototype.batchSize = 20;
org_scn_geocode_esri.prototype.apiKey = "";
org_scn_geocode_esri.prototype.getLatLngs = function(options){
	alert("Not implemented yet.");
};
