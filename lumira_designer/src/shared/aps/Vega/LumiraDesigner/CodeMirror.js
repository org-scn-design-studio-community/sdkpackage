sap.ui.define([
	"sap/ui/core/Control"
	], function (Control) {
	"use strict";
	var ui5CodeMirror = Control.extend("PropertyPage.LumiraDesigner.CodeMirror",{
		metadata : {
			properties : {
				value : "string"
			},
			events : {
				change : { }
			}
		},
		changeHandler : function(instance){
			try{
				if(instance && instance.getValue()){
					this.setProperty("value", instance.getValue(), true);
					//this.setValue(instance.getValue());
					this.fireChange();				
				}
				event.cancelBubble = true;	// Prevent Browser Save				
			}catch(e){
				alert("An error occured in CodeMirror:\n\n" + e);
			}
		},
		renderer : {
			render : function(oRm, oControl){
				oRm.write("<div id='" + oControl.getId() + "'>");
				oRm.write("<textarea id='" + oControl.getId() + "_cm'>");
				oRm.write(oControl.getValue());
				oRm.write("</textarea>");
				oRm.write("</div>");
			}
		},
		onAfterRendering : function(){
			var that = this;
			this.editor = CodeMirror.fromTextArea(document.getElementById(this.getId() + "_cm"), {
				 mode: "application/json",
				 lineNumbers: true,
				 gutters: ["CodeMirror-linenumbers", "CodeMirror-lint-markers"],
				 lint: true,
				 viewportMargin: Infinity,
				 extraKeys: {
					"Ctrl-Space": "autocomplete",
					"Ctrl-S": function(oControl){return function(instance){oControl.changeHandler(instance)}}(this)
				}
			});
		}
	});
	return ui5CodeMirror;
});
