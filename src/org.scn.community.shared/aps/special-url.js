/**
 * Register Data Selection Handler
 */
define([],function(){
	sap.ui.commons.layout.HorizontalLayout.extend("org.scn.community.aps.RepoUpload",{
		metadata : {                             
	        properties : {
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
			var s = propertyPage.TResourceUrl();
			this.setValue(s);
			this.fireValueChange();
			return;
			var f = this.getCallback();
		    if(!f){
		    	
		    }else{
		    	f();
		    }
			 alert(this.getCallback());
			
			try{
				// + " file was added to the BI App repository.");
			}catch(e){
				alert("Error when determining file: " + e);
			}
		 },
		 uploadHandler : function(oControlEvent){
			 var that = this;
			 propertyPage.TResourceCallback = function(){that.uploadComplete.call(that);};
			 propertyPage.openPropertyDialog("TResourceUrl");
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
				callback : propertyOptions.callback
			});
			component.attachValueChange(changeHandler,this);
			return component;
		}
	};
});