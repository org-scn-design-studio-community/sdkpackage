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
 * (http://scn.sap.com/community/businessobjects-design-studio/blog/2014/02/04/design-studio-12-sdk--an-image-component-free-of-mime-repository-worries)
 * 
 */
define([], function() {
	var componentInfo = {
		visible : true,
		title : "Base-64 Encoded Image 2.0",
		icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAK8SURBVHjaYvz//z8DJQAggFj2tJrjNOHfv/9g/BeI//z9x/AXiEH0nz8gGiIGEIDDMbYBAAZhmIX6RS/o1v9P6MZBhAKr5VhZLe57UATUm3mURldzUDEJ1aidDqLiGP6cL4DABvz7+4fhw5OXDN/ffyLKZl5+PgZxKQmwGEAAgQ34DxQEad7tcpIB7AAGBggNw0B+nVQhAw+nHMh4hvkNsxhExcTABgMEEBPYRmgo7P02DYinMvxkvAm0nYHhDxT/Bnrl+Dt9hn/fLwG98wts839oGAAEEBPEzRBnGwrcB2pezbDvazrD738fgAqAmv8ADQHiSz9dGba/smT49OUu2GZgsIC9CBBAEBdADfgDDAsTXn2ggr8Mh374M/xmuAUxBIhvfpFm2PAhjaHo3hy4C0B6AAKIBRxgQFXgAPv3m+Hqp0sMPtIiDM++/mD4yuzD8O6zAYPgvxCGx6+sGb78kACqZWbQA+v5BzYAIIDgBoBM1Rd5w6ArLMkgxaHCoMcPVPBfj+ER7y2gD5cxyP1cxfDjAwvD928/GC6oyTP8+P6RARQDAAHE8hdswH+wv8TZFYGagFH1/xeYBsowSHLIMTy79pGB6wsTg62NCYOMkCrD/qsbGE5cOczAwvWPASCAWEA2/wP6h4Obh+FH72aw3/7C4xySBu6pKjIE+foy/GX6y6Av6cqw59pqBgtdK4bVtzcxAAQQC0gBw39GBn5BEQY+PiFwgIKAZlQJw9cn28FRtGvdbgZWRh4GT81ksFyx8yyGzZenMfxl3MQAEEBgF9y7cQOetmE2X6xIhLgA6MUP/H8Yrj47xnDx2RGGCtf5DB27Ehk4mNkZmIHpByCAGInJjRY5Ui0yivzVVno2DKoShgy3X5xnOHbpCMOT+x97AQKIkdjsDDSkA0hlATEvEH8G4mknpjyrAAgwAO1hrhkCUuScAAAAAElFTkSuQmCC",
		author : "Mike Howles",
		description : "Base-64 Encoded Image",
		topics : [{
			title : "SDK Component",
			content : "This component is an UI5 Commons SDK Component.  Be sure you install the plugin to your server platform should you find it useful."
		},{
			title : "SCN SDK Components License",
			content : "SCN SDK Components License is released under the Apache 2.0 License. Please refer to the licenses for the full copyright restrictions placed on this software.  (<a target='_blank' href='http://www.apache.org/licenses/LICENSE-2.0'>Apache 2.0 License</a>)"
		}]
	};
	var dsProperties = {
		onclick : { 
			ui5Meta : "string",
			opts : {
				cat : "General",
				order : 0,
				desc : "On Click",
				apsControl : "script"
			}
		},
		src : {
			opts : {
				cat : "General",
				desc : "Image Source",
				apsControl : "jsuploadbase64",
			},
			ui5Meta : "string"
		}
	};
	var meta = {
		properties : {}
	};
	for(var p in dsProperties){
		if(dsProperties[p].ui5Meta) meta.properties[p] = dsProperties[p].ui5Meta;
	}
	sap.m.Image.extend("org.scn.community.basics.Base64Image", {
		renderer : {},
		metadata : meta,
		initDesignStudio : function() {
			// Called by sap.designstudio.sdkui5.Handler  (sdkui5_handler.js)
		},
		// Override onclick setter to then attach/detach Design Studio event raising.
		setOnclick : function(s){
			if(s && s != ""){		// If there's onclick BIAL, then add an event listener (and get a hand cursor).
				this.attachPress(this.clickHandler);
			}else{					// If not, remove the event listener (which will get rid of the hand cursor, too)
				this.detachPress(this.clickHandler);
			}
		},
		clickHandler : function(){
			this.fireDesignStudioEvent("onclick");
		},
		/**
		 * Relays Design Studio Property Information over to Additional Properties Sheet.
		 */
		getPropertyMetaData : function(){
			var r = [];
			for(var prop in dsProperties){
				var o = {
					name : prop,
					opts : dsProperties[prop].opts || {}
				}
				if(!o.opts.noAps) r.push(o);				
			}
			return JSON.stringify(r);
		},
		/**
		 * Component Information
		 */
		getComponentInformation : function(){
			return JSON.stringify(componentInfo);
		}
	});
});