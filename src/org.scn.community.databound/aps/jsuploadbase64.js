/**
 * BASE-64 JS Upload Handler
 */
define([], function(){
	sap.ui.commons.layout.HorizontalLayout.extend("org.scn.community.aps.JSUploadBase64",{
		metadata : {                             
	        properties : {
	        	value : ""
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
			 
		 },
		 detailsHandler : function(oControlEvent){
			this.overlay = new sap.ui.ux3.OverlayContainer({
				openButtonVisible : false
			});
			var overlayHeader = new sap.ui.commons.ApplicationHeader({
				logoText : "Details",
				//logoSrc : propertyPage.appHeader.getLogoSrc(),
				logoSrc : propertyPage.mainLayout.getAppIcon(),
				displayWelcome : false,
				displayLogoff : false
			});	
			var layout = new sap.ui.commons.layout.VerticalLayout({
				width : "100%"
			});
			this.overlay.addContent(overlayHeader);
			this.overlay.addContent(layout);
			var base64Label = new sap.ui.commons.Label({text: "Base-64 Content"});
			var imageSize = new sap.ui.commons.Label({text: "0x0"});
			var image = new sap.ui.commons.Image({src: this.getValue() });
			var base64Content = new sap.ui.commons.TextArea({
				design : sap.ui.core.Design.Monospace,
				value : this.getValue(),
				rows : 10,
				width : "100%",
				wrapping : sap.ui.core.Wrapping.On
			});
			layout.addContent(imageSize);
			layout.addContent(base64Label);
			layout.addContent(base64Content);
			layout.addContent(image);
			var i = new Image();
	        i.onload = function(label){return function(){
	        	var w = i.width;
	        	var h = i.height;
	        	var imgDesc = "Image Size:" + w + " x" + h + " ("+i.src.length+" bytes)";
	        	label.setText(imgDesc);
	        };}(imageSize);
	        i.src = this.getValue();
			this.overlay.open();
			
		 },
		 fileChangeHandler : function(oControlEvent){
			// Dirty Hack, I know...
			var s = oControlEvent.getSource().getDomRef();
			var input = s.childNodes[0].childNodes[0].childNodes[1].childNodes[0]; 
			if ( input.files && input.files[0] ) {
		        var FR= new FileReader();
		        var that = this;
		        FR.onload = function(e) {
		        	that.setValue(e.target.result);
		            that.updateImage();
		            that.fireValueChange();
		        };       
		        FR.readAsDataURL( input.files[0] );
		    }else{
		    	alert("A problem occured reading the file.");
		    }
		 },
		 init : function(){
			var that = this;
			if (window.File && window.FileReader) { /* Good to go... */	} else {	// Display warning for pre-IE10 versions.
			  alert('File APIs are not supported in this browser.  You probably need to be at IE10 or higher.');
			}
			this.uploadButton = new sap.ui.unified.FileUploader({
				uploadOnChange : false,
				icon : "sap-icon://upload",
				buttonOnly : true
				//iconOnly : true
			});
			this.detailsButton = new sap.ui.commons.Button({
				text : "Details..."
			});
			this.detailsButton.attachPress(this.detailsHandler, this);
			this.uploadButton.attachChange(this.fileChangeHandler, this);
			this.addContent(this.uploadButton);
			this.addContent(this.detailsButton);
		},
		renderer : {}
	});
	
	return{
		id : "jsuploadbase64",
		setter : function(property, value){
			this["cmp_"+property].setValue(value);
		},
		getter : function(property, control){
			return control.getValue();
		},
		createComponent : function(property, propertyOptions, changeHandler){
			var component = new org.scn.community.aps.JSUploadBase64({ });
			component.attachValueChange(changeHandler,this);
			return component;
		}
	};
});
