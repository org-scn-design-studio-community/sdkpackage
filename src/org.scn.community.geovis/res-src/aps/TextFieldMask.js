/*
 * Extended control with input mask 
 */
sap.ui.commons.TextField.extend("org.scn.community.aps.TextFieldMask",{
	_showAlpha : false,
	metadata : {
		properties : {
			mask : {
				type : "String",
				defaultValue : ""
			},
			method : {
				type : "String",
				defaultValue : "replace"
			}
		}
	},
	renderer : { },
	setMethod : function(s){
		this._method = s;
	},
	getMethod : function(){
		return this._method;
	},
	setMask : function(s){
		try{
			this._mask = s;
		}catch(e){
			alert(e);
		}
	},
	getMask : function(){
		return this._mask;
	},
	checkMask : function(e){
		try{
			var re = new RegExp(this._mask,"g");
			var v = this.getValue();
			var v2 ="";
			if(this._method=="exec"){
				var a = re.exec(v);
				if(a!=null){
					v2 = a.join();
					//alert(v + "\n\n" + JSON.stringify(a) + "\n\n" + a.length);
				}
			}
			if(this._method=="replace"){
				v2 = v.replace(re,"");
			}
			if(v!=v2) {
				this.setValue(v2);
				this.fireChange();
			}
		}catch(e){
			alert(e);
		}
	},
	init : function(){
		sap.ui.commons.TextField.prototype.init.apply(this, arguments);
		this.attachEvent("change",this.checkMask);
	}
});