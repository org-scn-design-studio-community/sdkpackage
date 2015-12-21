/**
 * Copyright 2014 SCN Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/sap-design-studio-free-addons/sdk-package
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
 * 
 */

/**
 * Based on from original version by Mike Howles, blogged here: 
 * 
 * 
 */
define(["./../../../org.scn.community.shared/os/viz-modules/SDKCore",
        "sap/designstudio/sdk/component"], function (SDKCore, Component) {
	var ownComponentName = "org.scn.community.prototypes.RapidPrototype";
	RapidPrototype.prototype = SDKCore;
	function RapidPrototype() {
		var properties = {
			HTML : {
				opts : {
					desc : "HTML",
					cat : "HTML",
					tooltip : "HTML",
					apsControl : "codemirror",
					presets : "html-presets",
					apsConfig : {
						lineNumbers: true,
						mode: "text/html",
						theme: "eclipse",
						matchBrackets: true
					}
				}
			},
			afterInit : {
				opts : {
					desc : "JavaScript",
					cat : "JavaScript",
					tooltip : "JavaScript",
					apsControl : "codemirror",
					presets : "js-presets",
					apsConfig : {
						lineNumbers: true,
						mode: "text/javascript",
						theme: "eclipse",
						matchBrackets: true
					}
				}
			}
		};
		var order = 0;
		for(var i=1;i<10;i++){
			properties["term"+i]= {
				opts : {
					desc : "Term " + i,
					cat : "Find/Replace",
					apsControl : "text",
					order : ++order
				}	
			};
			properties["KPIreplacement"+i]= {
				opts : {
					desc : "KPI Replacement " + i,
					cat : "Find/Replace",
					apsControl : "dataselection",
					order : ++order
				}
			};
			properties["replacement"+i]= {
				opts : {
					desc : "Manual Replacement " + i,
					cat : "Find/Replace",
					apsControl : "text",
					order : ++order
				}	
			};
		}
		SDKCore.call(this, properties);
		this.componentInfo.title = "Rapid Prototyping";
    	this.componentInfo.description = "Useful for quickly injecting HTML content into a Design Studio application.  Can also be used to execute exploratory JavaScript tests.  JavaScript not recommended for permanent productive use."
	    this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwZJREFUeNqMU02IFEcU/qq6umemt8ednd1xwN0IyqKgu6LgLmTVg5qLl0Agp+DBXAQFWVDQiyzehD0IKh6FQDx4yCGBgIckmpDsHnQvokQMCUnMZp3d+enp+emZqe6qyuseDXiz6aKorve+933fe816mxul6uLHz6y2Xwa38D4P0xqx6zVKN7+ZFV2l251Yt4qMlZXRgFIUwYaBtOUKHKAX5k2yxWEijkqo29nYtESoTL8VKX+CInTOA3PzFDyMZpRol+x0fwsA2YGuBwgi3czFuisGysCXqs7jHvjCKdhnrwFxRJkOEh4jxbEE6n/68t4S5Nd30ZR2vaCNERFVq0td5RYFhV3AG4V59RvMv3+CCYG4uG3IYMgJukLfmY2GjGuT2kDQQn2gtphH2tp+Klyv/Qh54yK45yGc4AREQXpoCs8XwOwsFY23iDxEglujA+NUptum1QKbmYd95gqY4yBTzBGDNxLI/WjlKyCookZFE1tEcpUeiKfpdWD65MXeQ7BmDqfKM+zdFsZPvoWOdVo0OYsEvC5VVTEnrR7fvkIGZlLfksq9opO2LvvZEkULaGKpDE9l87cAjYGqSeLDVAw+/1FqZLR8gc4SUYmBZRxkT1N3QpI46EHqtGgtyRVJz9f9wO+rjHK1stjUbvB9c9DHP4F5vgo+IWDPHCHQMZjaOhBJ9GODfxpBI8kV5fEiLl1dCvDTFx3Ta40m7cPBo3Au36KE1xgZI9ed3NDD6itoKaGEG1JOc7JcAjOEonth7o/TR17m+8EHxiuAT8+C7Z+DOLCAwlge6tcVqBerUH89pSlsoBJkK7u+/GWPyI+20zZuNYO+1FrmHRtd0qnWHsE8/h56hOZgu5WOryHjaABgDYCejKKKH4RT+dH0N0FEI3nn98byd5udh00FP+O6cL1tdGmgQnIs8hB1MvBbWX+tnX10v8mvx4ypdDYTCRsbG5ia3kNz0MVO19754Xju2InyyKmjE+5JwmArtfCHB+vNBwufn//503OLfw+oY9NTO2BZFv4TYAChu3+OSS5KqAAAAABJRU5ErkJggg==";
   		this._alive = false;
	    
    
	    this.reparse = function(){
	    	var rHTML = this.HTML();
	    	var rJS = this.afterInit();
	    	for(var i=1;i<10;i++){
	    		var term = this["term" + i]();
	    		var KPIreplacement = this["KPIreplacement" + i]();
	    		var manualreplacement = this["replacement" + i]();
	    		var replacement = term;
	    		if(term){
	    			if(KPIreplacement && KPIreplacement.data) {
	    				replacement = KPIreplacement.data[0];
	    			}else if(manualreplacement){
	    				replacement = manualreplacement;
	    			}
	    			rHTML = rHTML.replace(new RegExp(term,'g'), replacement);
	    			rJS = rJS.replace(new RegExp(term,'g'), replacement);
	    		}
	    	};
	    	return {
	    		html : rHTML,
	    		js : rJS
	    	};
	    };
	    
	    this.drawHTML = function(){
	    	if(this._alive == false) return;
	    	//alert("h");
	    	var parsed = this.reparse();
	    	this.$().html(parsed.html);
	    };
	    
	    this.reEval = function(){
	    	if(this._alive == false) return;
	    	//alert("j");
	    	var parsed = this.reparse();
	    	try{
				eval(parsed.js);
			}catch(e){
				alert(e);
			}
	    };
	      
	    this.afterUpdate = function(){
	    	this.drawHTML();
	    	this.reEval();
	    };
	    
		this.init = function() {
			this._alive = true;
		};
	}
	Component.subclass(ownComponentName, RapidPrototype); 
});