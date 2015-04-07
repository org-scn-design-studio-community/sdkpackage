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
sap.ui.commons.Image.extend("org.scn.community.basics.Base64Image", {
	renderer : {},
	metadata : {				// Not to be confused with the Data Source metadata property
		properties : {
			onclick : "string"	// While 'onclick' is technically a DS Event, it does pass some information, so let's take it.
		}
	},
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
	}
});