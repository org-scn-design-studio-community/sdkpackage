/**
 * Register Data Selection Handler
 */
define([],function(){
	sap.ui.commons.layout.HorizontalLayout.extend("org.scn.community.aps.RepoUpload",{
		metadata : {                             
	        properties : {
	        	kind : {
	        		defaultValue : "resource"
	        	},
	        	value : "",
	        	callback : {
	        		type : "any"
	        	}
	        },
		    events : {
		    	valueChange : {}
		    }
		 },
		 getValue : function(){
			return this._value;
		 },
		 setValue : function(v){
			 this._value = v;
			 this.renderComp();
			 return this;
		 },
		 updateImage : function(){
			 
		 },
		 renderComp : function(){
			 this.uploadButton.setText(this.getValue());
		 },
		 uploadComplete : function(){
			 var r = this.getKind();
			 var dlgType = "TResourceUrl";
			 switch(r){
			 case "GeoJSON":
				 dlgType = "TGeoJSONUrl";
				 break;
			 case "CSS":
				 dlgType = "TCSSUrl";
				 break;
			 default:
				 break;
			 }
			var s = propertyPage[dlgType]();
			this.setValue(s);
			this.fireValueChange();
		 },
		 uploadHandler : function(oControlEvent){
			 var that = this;
			 var r = this.getKind();
			 var dlgType = "TResourceUrl";
			 switch(r){
			 case "GeoJSON":
				 dlgType = "TGeoJSONUrl";
				 break;
			 case "CSS":
				 dlgType = "TCSSUrl";
				 break;
			 default:
				 break;
			 }
			 try{
				 propertyPage[dlgType + "Callback"] = function(){that.uploadComplete.call(that);};
				 propertyPage.openPropertyDialog(dlgType);				 
			 }catch(e){
				 alert("Problem trying to upload.\n\n" + e);
			 }
		 },
		 init : function(){
			this.uploadButton = new sap.ui.commons.Button({
				icon : "sap-icon://save"
			});
			this.uploadButton.attachPress(this.uploadHandler, this);
			this.addContent(this.uploadButton);
		},
		renderer : {}
	});
	
	return {
		id : "script",
		setter : function(property, value){
			this["cmp_" + property].setValue(value);
		},
		getter : function(property, control){
			return control.getValue();
		},
		createComponent : function(property, propertyOptions, changeHandler){
			var component = new org.scn.community.aps.RepoUpload({
				callback : propertyOptions.callback,
				kind : propertyOptions.kind
			});
			component.attachValueChange(changeHandler,this);
			return component;
		}
	};
});