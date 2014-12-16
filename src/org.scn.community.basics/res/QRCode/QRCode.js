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
 * (TBD)
 * 
 */
sap.designstudio.sdk.Component.subclass("org.scn.community.basics.QRCode", function() {
	this.props = {
		render : { value : "canvas" },
		minVersion : { value : 1 },
		maxVersion : { value : 40 },
		ecLevel : { value : "L" },
		fill : { value : "#000000" },
		background : { value : null },
		text : { value : "" },
		radius : { value : 0 },
		quiet : { value : 0 },
		// These are set but not exposed for changing in Design Studio
		left : { value : 0 },
		top : { value : 0 },
		size : { value : -1 },
		mode : { value : "Normal" },
		mSize : { value : 0.1 },
		mPosX : { value : 0.5 },
		mPosY : { value : 0.5 },
		label : { value : "no label" },
		fontname : { value : "sans" },
		fontcolor : { value : "#000000" },
		image : {value : null}
	};
	/*
	 * Create the aforementioned getter/setter and attach to 'this'.
	 */
	for(var property in this.props){
		this[property] = function(property){
			return function(value){
				if(value===undefined){
					return this.props[property].value;
				}else{
					this.props[property].value = value;
					this.props[property].changed = true;
					return this;
				}
			};
		}(property);
	}
	
	this.afterUpdate = function(){
		var size = this.size();
		if(size==-1){	// Auto
			size = this.$().width();
			if(this.$().height()<size) size = this.$().height();
		}		
		var mode_text = this.mode();
		var mode = 0;
		switch(mode_text){
			case "Normal" :
				mode = 0;
				break;
			case "Label Strip" :
				mode = 1;
				break;
			case "Label Box" :
				mode = 2;
				break;
			case "Image Strip" :
				mode = 3;
				break;
			case "Image Box" :
				mode = 4;
				break;
		}
		
		this.$().empty();
		this.$().qrcode({
		    render: this.render(),
		    minVersion: this.minVersion(),
		    maxVersion: this.maxVersion(),
		    fill: this.fill(),
		    background: this.background(),
		    text : this.text(),
		    radius: this.radius(),
		    quiet: this.quiet(),
		    ecLevel: this.ecLevel(),
		    // The following are not exposed in Design Studio Property Sheet:
		    left: this.left(),
		    top: this.top(),
		    size : size,
		    mode: mode,
		    mSize: this.mSize(),
		    mPosX: this.mPosX(),
		    mPosY: this.mPosY(),
		    label: this.label(),
		    fontname: this.fontname(),
		    fontcolor: this.fontcolor(),
		    image: this.image()	
		});
	}
});