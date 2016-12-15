//%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./EmbeddedFrameSpec",
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

EmbeddedFrame = function () {

	var that = this;
	
	this.init = function() {
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	this.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		//only trigger intended iframe updates 
		if(this.reload() !== ""){
			var html = "";
	    	
	    	var isInDesignMode = (sap.zen.designmode != undefined);
	    	
	    	var height = this.$().outerHeight();
	    	
	    	if(isInDesignMode) {
				// some place to move the control in design mode
				html = html.concat("<div style=\"height:25px;background-color:#FDFDFD;border:2px solid #000;padding:2px;\">Use this area to drag & drop</div>");
				height = height - 30;
			}
			    	
	    	html = html.concat("<");
	    	
	    	var tag = "iframe";
	    	html = html.concat(tag);
	    	html = html.concat(" ");
			
			// style classes
	    	html = html.concat("class=\"");
	    	html = html.concat("scn-pack-EmbeddedFrame");
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
	    	
			// attributes
			html = html.concat(src,"=\"",this.url(),"\" ");
			if(this.usesandbox()){
				html = html.concat('sandbox="',this.sandbox(),'"');	
			}
		
			// closing
			html = html.concat(">");
	
			// potential content
			
			html = html.concat("</");
			html = html.concat(tag);
			html = html.concat(">");
			var myHost = window.location.host;
			if(this.skipport() && myHost.indexOf(":") > -1){
				myHost = myHost.substring(0,myHost.indexOf(":"));
			}
			var pathArray = myHost.split('.');
	        var arrLength = pathArray.length;
	        if(arrLength>1){
	        	//extract subdomain in order to allow sth like:
	        	// Actual domain is "blah.bar.foo.com" 
	        	// document.domain = "bar.foo.com" 	// Ok 
	        	// document.domain = "foo.com" 		// Still ok 
	        	var domainName = "";
	        	var level = this.domainrelaxlevel();
	        	if(level < arrLength){
	        		domainName = pathArray.slice(level, arrLength).join('.');	
	        	}else{
	        		domainName = pathArray.join('.');
	        	}
	            //set relaxed domain for the current scope where document is active
	        	if(this.explicitlySetDomain()){
	                document.domain = domainName;	
	        	}
	        }
	
			this.$().html(html);
			
			//reset update trigger
			this.reload("");
			this.firePropertiesChanged(["reload"]);
		}
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	};
	
	this.componentDeleted = function() {
		//reset update trigger on delete
		this.reload("init");
		this.firePropertiesChanged(["reload"]);
	};
	/* COMPONENT SPECIFIC CODE - START METHODS*/

	/* COMPONENT SPECIFIC CODE - END METHODS*/

	org_scn_community_component_Core(that, myComponentData);
	
	return that;
};

//%INIT-START%
myComponentData.instance = EmbeddedFrame;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});