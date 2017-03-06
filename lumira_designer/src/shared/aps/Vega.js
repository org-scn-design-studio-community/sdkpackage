try{
	sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.lumiradesigner.VegaPropertyPage", function () {
		var that = this;
		this.specData = "";
		this.spec = function(v){
			if(v===undefined){
				return this.specData;
			}else{
				this.specData = v;
				this.editor.setValue(v);
				return this;
			}
		};
		this.changeHandler = function(instance){
			that.spec(instance.getValue());
			that.firePropertiesChanged(["spec"]);
		};
		this.init = function(){
			try{
				this.editor = CodeMirror.fromTextArea(document.getElementById("code"), {
					 mode: "application/json",
					 lineNumbers: true,
					 gutters: ["CodeMirror-linenumbers", "CodeMirror-lint-markers"],
					 lint: true,
					 viewportMargin: Infinity,
					 extraKeys: {
						"Ctrl-Space": "autocomplete",
						"Ctrl-S": this.changeHandler
					}
				});
			}catch(e){
				alert("An error occured while initializing the Property Page:\n\n" + e);
			}
		}
	});
	var propertyPage = new org.scn.community.lumiradesigner.VegaPropertyPage();
}catch(e){
	alert("Error starting Propery Page:\n\n" + e);
}