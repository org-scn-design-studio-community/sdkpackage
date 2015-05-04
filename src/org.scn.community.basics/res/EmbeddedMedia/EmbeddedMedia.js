/**
 * Copyright 2014 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/org-scn-design-studio-community/sdkpackage/
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 *  
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */

sap.designstudio.sdk.Component.subclass("org.scn.community.basics.EmbeddedMedia", function() {

	this.url = function (value) {
		if (value === undefined) {
			return url;
		} else {
			url = value;
			return this;
		}
	};
	
	this.tag = function (value) {
		if (value === undefined) {
			return tag;
		} else {
			tag = value;
			return this;
		}
	};
	
    this.afterUpdate = function(){
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
    };
});