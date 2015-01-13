sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.basics.Base64ImagePropertyPage",  function() {
	var that = this;
	this._src = "";

	this.init = function() {
		var that = this;
		$("#imageFile").change(function(e) {
		var input = e.target;
			if ( input.files && input.files[0] ) {
		        var FR= new FileReader();
		        FR.onload = function(e) {
		            that._src = e.target.result;
		            that.updateImage();
		            that.firePropertiesChanged(["src"]);
		        };       
		        FR.readAsDataURL( input.files[0] );
		    }else{
		    	alert("A problem occured reading the file.");
		    }
		});
		if (window.File && window.FileReader) { /* Good to go... */	} else {	// Display warning for pre-IE10 versions.
		  alert('File APIs are not supported in this browser.  You probably need to be at IE10 or higher.');
		}
	};
	this.updateImage = function(){
    	// Compute dimensions for image description snippet.
    	var i = new Image();
        i.onload = function(){
        	var w = i.width;
        	var h = i.height;
        	var imgDesc = w + " x" + h + " ("+i.src.length+" bytes)";
        	$('#imgInfo').text(imgDesc);
        	$('#base64').text(i.src);
        };
        i.src = that._src;
        $('#img').attr( "src", that._src );
	};
	this.src = function(value){
		if( value === undefined){
			return this._src;
		}else{
			this._src = value;
			this.updateImage();
			return this;
		}
	};
});