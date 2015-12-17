//%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./EmbeddedMediaSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics"
	
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

EmbeddedMedia = function () {

	var that = this;
	
	this.init = function() {
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	this.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		var html = "";
    	
    	var isInDesignMode = (sap.zen.designmode != undefined);
    	
    	var height = this.$().outerHeight();
    	
    	if(isInDesignMode) {
			// some place to move the control in design mode
			html = html.concat("<div style=\"height:25px;background-color:#FDFDFD;border:2px solid #000;padding:2px;\">Use this area to drag & drop</div>");
			height = height - 30;
		}
		    	
    	html = html.concat("<");
    	
    	var tag = this.tag();
    	html = html.concat(tag);
    	html = html.concat(" ");
		
		// style classes
    	html = html.concat("class=\"");
    	html = html.concat("scn-pack-EmbeddedMedia");
    	html = html.concat("\" ");

		// styles content
    	html = html.concat("style=\"");
    	html = html.concat("width:100%",";");
		html = html.concat("height:100%",";");
		html = html.concat("margin:","none",";");
		html = html.concat("padding:","none",";");
		html = html.concat("border:","none",";");

    	html = html.concat("\" ");

    	var src = "src";
    	if(tag == "object") {
    		src = "data";
    	}
    	
		// attributes
		html = html.concat(src,"=\"",this.url(),"\" ");
				
		if(tag == "video") {
			html = html.concat("controls","=\"","controls","\" ");
			html = html.concat("preload","=\"","auto","\" ");
		}
		
		// closing
		html = html.concat(">");

		// potential content
		
		html = html.concat("</");
		html = html.concat(tag);
		html = html.concat(">");
		
		this.$().html(html);
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	};
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/

	/* COMPONENT SPECIFIC CODE - END METHODS*/

	org_scn_community_component_Core(that, myComponentData);
	
	return that;
};

//%INIT-START%
myComponentData.instance = EmbeddedMedia;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});